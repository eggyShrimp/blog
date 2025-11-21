import metadata from "@/data/metadata";
import { getBlogPost, getAllBlogPosts } from "@/lib/core";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { Metadata } from "next";
import { Language } from "@/lib/core";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypePrismPlus from 'rehype-prism-plus';
import MDXComponents from "@/components";

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
    rehypePlugins: [rehypePrismPlus],
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { tight: true }]
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
