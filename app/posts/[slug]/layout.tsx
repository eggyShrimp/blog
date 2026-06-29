import { getBlogPost, Metadata, extractHeadings, Heading } from "@/lib/core";
import metadata from "@/data/metadata";
import Link from "next/link";
import TOCSidebar from "@/app/components/toc-sidebar";

export default async function PostLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string, lang?: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const headings: Heading[] = post?.content ? extractHeadings(post.content) : [];

  return (
    <div className="lg:flex lg:justify-center lg:gap-12">
      <div className="flex-1 min-w-0">
        <PostMetaInfo metadata={post?.metadata} />

        <div className="lg:hidden">
          <TOCSidebar headings={headings} />
        </div>

        <article className='prose prose-neutral mt-[16px] prose-base break-words'>
          {children}
        </article>
        <AuthorCard />
      </div>

      <aside className="hidden lg:block w-[220px] shrink-0">
        <div className="sticky top-24">
          <TOCSidebar headings={headings} />
        </div>
      </aside>
    </div>
  );
}

export function AuthorCard() {
  return (
    <div className="flex flex-col items-center my-16 gap-1">
      <Link
        href="/"
        className="text-2xl font-bold no-underline"
        style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-libre), "Songti SC", serif' }}
      >
        {metadata.author.name}
      </Link>
      <div className="flex flex-row items-center gap-2">
        <a
          href={metadata.author.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="font-courier text-sm no-underline hover:underline"
          style={{ color: 'var(--color-muted)' }}
        >
          twitter
        </a>
        <span className="font-courier text-sm" style={{ color: 'var(--color-muted)' }}>/</span>
        <a
          href={metadata.author.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-courier text-sm no-underline hover:underline"
          style={{ color: 'var(--color-muted)' }}
        >
          github
        </a>
      </div>
    </div>
  );
}

export function PostMetaInfo({ metadata }: { metadata: Metadata }) {
  return (
  <div className="prose prose-neutral prose-base mb-6">
    <h1 className="mb-2 text-balance">{metadata?.title ?? ""}</h1>
    <div className="font-courier text-sm flex flex-wrap items-center gap-x-4 gap-y-1" style={{ color: 'var(--color-muted)' }}>
      {metadata?.date ? (
        <span>{new Date(metadata?.date).toLocaleDateString("en-CA")}</span>
      ) : null}
      {metadata?.tag && Array.isArray(metadata.tag) && (
        <div className="inline-flex flex-wrap gap-2">
          {metadata.tag.map((t: string) => (
            <Link
              href={`/tags/${t}`}
              key={t}
              className="font-courier text-xs no-underline hover:underline"
              style={{ color: 'var(--color-muted)' }}
            >
              #{t}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
  );
}
