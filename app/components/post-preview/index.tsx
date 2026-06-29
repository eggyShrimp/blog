import { BlogPost } from "@/lib/core";
import Link from "next/link";

const MAX_VISIBLE_TAGS = 3;

export default function PostPreviewCard({ post }: { post: BlogPost }) {
  const publishDate = new Date(post.metadata.date);
  const dateLabel = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(publishDate);

  const tags = post.metadata.tag ?? [];
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTags = tags.slice(MAX_VISIBLE_TAGS);

  return (
    <div>
      <div
        className="py-1.5 -mx-4 px-4 hover:bg-[var(--color-surface-hover)] flex flex-col"
        style={{ height: '3.375rem' }}
      >
        <Link
          href={`/posts/${post.slug}`}
          className="block no-underline min-w-0"
        >
          <div className="flex flex-nowrap items-baseline gap-x-2">
            <span className="font-courier text-sm whitespace-nowrap tabular-nums" style={{ color: 'var(--color-muted)' }}>
              {dateLabel}
            </span>
            <span className="font-courier text-sm whitespace-nowrap" style={{ color: 'var(--color-muted)' }}>—</span>
            <span className="text-base truncate" style={{ color: 'var(--color-accent)' }}>
              {post.metadata.title}
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-x-3 mt-0.5 overflow-hidden" style={{ minHeight: '1rem' }}>
          {visibleTags.map((t: string) => (
            <Link
              key={t}
              href={`/tags/${t}`}
              className="font-courier text-xs no-underline hover:underline whitespace-nowrap"
              style={{ color: 'var(--color-muted)' }}
            >
              #{t}
            </Link>
          ))}
          {hiddenTags.length > 0 && (
            <Link
              href={`/posts/${post.slug}`}
              className="font-courier text-xs no-underline hover:underline whitespace-nowrap"
              style={{ color: 'var(--color-muted)' }}
            >
              +{hiddenTags.length}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
