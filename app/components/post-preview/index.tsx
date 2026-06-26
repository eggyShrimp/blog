import { BlogPost } from "@/lib/core";
import Link from "next/link";

export default function PostPreviewCard({ post }: { post: BlogPost }) {
  const publishDate = new Date(post.metadata.date);
  const dateLabel = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(publishDate);

  return (
    <div>
      <div className="py-1.5 -mx-4 px-4 hover:bg-[var(--color-surface-hover)]">
        <Link
          href={`/posts/${post.slug}`}
          className="block no-underline"
        >
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-courier text-sm whitespace-nowrap tabular-nums" style={{ color: 'var(--color-muted)' }}>
              {dateLabel}
            </span>
            <span className="font-courier text-sm mx-0.5" style={{ color: 'var(--color-muted)' }}>—</span>
            <span className="text-base" style={{ color: 'var(--color-accent)' }}>
              {post.metadata.title}
            </span>
          </div>
        </Link>
        {post.metadata.tag && post.metadata.tag.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
            {post.metadata.tag.map((t: string) => (
              <Link
                key={t}
                href={`/tags/${t}`}
                className="font-courier text-xs no-underline hover:underline"
                style={{ color: 'var(--color-muted)' }}
              >
                #{t}
              </Link>
            ))}
          </div>
        )}
      </div>
      <hr style={{ borderColor: 'var(--color-line)', margin: 0 }} />
    </div>
  );
}
