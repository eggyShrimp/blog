import { getBlogPost, Metadata, extractHeadings, Heading } from "@/lib/core";
import metadata from "@/data/metadata";
import Image from "next/image";
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
        <hr className="mt-16 mb-12 mx-auto" style={{ borderColor: 'var(--color-line)', maxWidth: '3rem' }} />
        <AuthorCard />
      </div>

      <aside className="hidden lg:block w-[220px] shrink-0">
        <div className="sticky top-4">
          <TOCSidebar headings={headings} />
        </div>
      </aside>
    </div>
  );
}

export function AuthorCard() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <div className="flex flex-row items-center gap-4 w-full px-4">
        <Image
          src={metadata.author.avatar}
          alt="author avatar"
          width={56}
          height={56}
          className="w-14 h-14"
        />
        <div className="flex flex-col items-start gap-1">
          <span className="font-courier text-lg font-bold" style={{ color: 'var(--color-ink)' }}>
            {metadata.author.name}
          </span>
          <div className="flex flex-row gap-4">
            <a
              href={metadata.author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-courier text-sm no-underline hover:underline"
              style={{ color: 'var(--color-accent)' }}
            >
              twitter
            </a>
            <a
              href={metadata.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-courier text-sm no-underline hover:underline"
              style={{ color: 'var(--color-accent)' }}
            >
              github
            </a>
          </div>
        </div>
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
