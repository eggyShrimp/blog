import PostPreviewCard from "@/app/components/post-preview";
import { getBlogPostsByTag } from "@/lib/core";

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getBlogPostsByTag(decodedTag);

  return (
    <div className="prose prose-neutral prose-base max-w-none">
      <p className="font-courier text-base mb-4" style={{ color: 'var(--color-accent)' }}>
        $ tags / <span style={{ color: 'var(--color-ink)' }}>{decodedTag}</span>
      </p>
      <hr style={{ borderColor: 'var(--color-line)' }} className="mb-6" />
      {posts.length === 0 ? (
        <p className="text-muted">No posts found for this tag.</p>
      ) : (
        posts.map(post => (
          <PostPreviewCard key={post.slug} post={post} />
        ))
      )}
    </div>
  );
}
