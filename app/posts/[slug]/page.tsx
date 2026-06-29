import metadata from "@/data/metadata";
import { getBlogPost, getAllBlogPosts, headingSlug } from "@/lib/core";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { Metadata } from "next";
import { Language } from "@/lib/core";
import remarkGfm from "remark-gfm";
import remarkMermaid from "@/lib/remark-mermaid";
import rehypePrismPlus from 'rehype-prism-plus';
import MDXComponents from "@/components";

function remarkRemoveTocHeading() {
  return (tree: { children: { type: string; children?: { value: string }[] }[] }) => {
    tree.children = tree.children.filter((node) => {
      if (node.type === "heading" && node.children?.length) {
        const text = node.children
          .map((c) => c.value)
          .join("")
          .trim()
          .toLowerCase();
        return text !== "toc";
      }
      return true;
    });
  };
}

function rehypeAddHeadingIds() {
  return (tree: { children: { tagName?: string; children?: { value?: string }[]; properties?: Record<string, unknown> }[] }) => {
    for (const node of tree.children) {
      if (node.tagName === "h2" || node.tagName === "h3") {
        const text = node.children?.map((c) => c.value ?? "").join("") ?? "";
        if (!node.properties) node.properties = {};
        node.properties.id = headingSlug(text);
      }
    }
  };
}

interface PageProps {
  params: Promise<{ lang: Language; slug: string }>;
}

export default async function LanguagePost({ params }: PageProps) {
  const { lang, slug } = await params;
  const post = getBlogPost(slug, lang);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Compile and render MDX content
  const compiled = await compile(post.content, {
    outputFormat: "function-body",  // for ssr rendering
    rehypePlugins: [rehypeAddHeadingIds, rehypePrismPlus],
    remarkPlugins: [
      remarkGfm,
      remarkRemoveTocHeading,
      remarkMermaid,
    ],
    baseUrl: import.meta.url,
  });

  // options.baseUrl is required for relative links to work
  // @see https://mdxjs.com/docs/troubleshooting-mdx/#unexpected-missing-optionsbaseurl-needed
  const { default: MDXContent } = await run(compiled, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  // TODO: Add MDX components to extend the default components
  return <MDXContent components={MDXComponents} />;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map(post => ({
    lang: post.metadata.lang,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPost(slug, lang);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      type: "article",
      title: post.metadata.title,
      description: post.metadata.summary,
      authors: [metadata.author.name],
    }
  };
}

export const dynamicParams = false;
