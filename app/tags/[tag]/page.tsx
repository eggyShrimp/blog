import PostPreviewCard from "@/app/components/post-preview";
import { getBlogPostsByTag } from "@/lib/core";

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getBlogPostsByTag(decodedTag);

  return (
      <div>
      <p className="font-courier text-base mb-4" style={{ color: 'var(--color-accent)' }}>
        $ tags / <span style={{ color: 'var(--color-ink)' }}>{decodedTag}</span>
      </p>
      <section>
        {posts.length === 0 ? (
          <p>No posts found for this tag.</p>
        ) : (
          posts.map(post => (
            <PostPreviewCard key={post.slug} post={post} />
          ))
        )}
      </section>
    </div>
  );
}
