import { getAllBlogPosts } from "@/lib/core";
import PostPreviewCard from "../post-preview";

export default function Home() {
  const posts = getAllBlogPosts();
  return (
    <div>
      <h1 className="sr-only">EggyShrimp&apos;s Writings</h1>
      <section>
        {posts.map(post => (
          <PostPreviewCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
