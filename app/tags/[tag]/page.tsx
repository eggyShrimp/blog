import PostPreviewCard from "@/app/components/post-preview";
import { getBlogPostsByTag } from "@/lib/core";

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getBlogPostsByTag(decodedTag);

  return (
    <div className='prose prose-neutral prose-base'>
      <h1>#{decodedTag}</h1>
      {posts.map(post => (
        <PostPreviewCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
