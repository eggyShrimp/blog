import { BlogPost } from "@/lib/core";
import Link from "next/link";

export default function PostPreviewCard({ post }: { post: BlogPost }) {
  const publishDate = new Date(post.metadata.date);
  const dateLabel = publishDate.toISOString().slice(0, 10);

  return (
    <Link
      className="relative block overflow-hidden rounded-lg p-4 bg-white transition-colors hover:bg-slate-50 group no-underline"
      href={`/posts/${post.slug}`}
    >
      <span
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-end justify-end pr-2 pb-1 text-5xl font-black tracking-tight text-slate-100 transition-colors duration-200 group-hover:text-white"
        style={{ borderRadius: 'inherit' }}
      >
        {dateLabel}
      </span>
      <h2 className="text-xl font-bold mb-2 mt-0 transition-colors duration-200 group-hover:text-blue-700">
        {post.metadata.title}
      </h2>
      <p className="text-gray-600 transition-colors duration-200 group-hover:text-gray-900">
        {post.metadata.summary}
      </p>
    </Link>
  );
}
