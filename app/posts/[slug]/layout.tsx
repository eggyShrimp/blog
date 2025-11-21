import { BlogPost, getBlogPost, Metadata } from "@/lib/core";
import metadata from "@/data/metadata";
import Image from "next/image";
import Link from "next/link";

export default async function PostLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string, lang?: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return (<>
    <PostMetaInfo metadata={post?.metadata} />
    <article className='prose prose-neutral mt-[16px] prose-base break-all'>
      {children}
    </article>
    <AuthorCard />
  </>);
}

export function AuthorCard() {
  return (
    <section className="flex flex-col items-center justify-center bg-transparent my-16 mb-16">
      <div
        className="flex flex-row items-center gap-8 w-full px-4 w-[100%] border border-slate-100 rounded-lg shadow-sm bg-slate-50/70 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:bg-gradient-to-br hover:from-slate-50/90 hover:to-white/60"
        style={{
          boxShadow:
            '0 1.5px 6px 0 rgba(90,110,140,0.045), 0 1.5px 30px 0 rgba(90,110,140,0.04)',
          border: '1.5px solid rgba(222,226,236,0.7)',
          backdropFilter: 'blur(3px)',
        }}
      >
        {/* 头像 */}
        <Image
          src={metadata.author.avatar}
          alt="author avatar"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full shadow"
        />
        {/* 信息铺开 */}
        <div className="flex flex-col items-start w-full gap-2">
          <span className="text-lg font-semibold text-slate-800">{metadata.author.name}</span>
          <div className="flex flex-row gap-6 mt-2">
            <a
              href={metadata.author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline"
            >
              <svg className="inline-block mr-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.633 7.997c.013.177.013.356.013.535 0 5.464-4.16 11.768-11.768 11.768-2.34 0-4.516-.69-6.352-1.877.33.038.654.052.992.052 1.946 0 3.736-.66 5.165-1.775-1.817-.033-3.354-1.233-3.884-2.88.254.037.508.064.776.064.373 0 .747-.05 1.095-.144-1.895-.381-3.326-2.054-3.326-4.064v-.052c.561.313 1.2.5 1.884.518-1.116-.746-1.85-2.019-1.85-3.463 0-.76.206-1.47.56-2.079 2.04 2.505 5.08 4.151 8.5 4.322-.07-.303-.106-.619-.106-.944 0-2.285 1.859-4.144 4.144-4.144 1.19 0 2.263.503 3.018 1.308.943-.187 1.834-.53 2.637-1.005-.31.966-.966 1.779-1.825 2.29.838-.1 1.64-.323 2.384-.654-.551.831-1.239 1.564-2.034 2.148z"/></svg>
              <span className="text-base">Twitter</span>
            </a>
            <a
              href={metadata.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:underline"
            >
              <svg className="inline-block mr-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.21 23.22c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.54-1.35-1.32-1.71-1.32-1.71-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.32.46-2.39 1.22-3.23-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.04 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.89.13 3.19.76.84 1.22 1.91 1.22 3.23 0 4.62-2.82 5.64-5.5 5.94.43.37.8 1.09.8 2.19v3.25c0 .32.22.7.82.58A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              <span className="text-base">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PostMetaInfo({ metadata }: { metadata: Metadata }) {
  return (
  <div className="prose prose-neutral prose-base mb-6">
    <h1 className="mb-2">{metadata?.title ?? ""}</h1>
    <div className="text-xs text-slate-500 mt-1">
      {metadata?.date
        ? new Date(metadata?.date).toLocaleDateString()
        : ""}
    {metadata?.tag && Array.isArray(metadata.tag) && (
      <div className="mt-1 mx-4 inline-flex flex-wrap gap-2">
        {metadata.tag.map((t: string) => (
          <Link
            href={`/tags/${t}`}
            key={t}
            className="inline-block bg-slate-100 text-slate-600 rounded px-2 py-0.5 text-xs font-mono"
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
