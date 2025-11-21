import { getAllBlogPosts } from "@/lib/core";
import styles from "./index.module.scss";
import PostPreviewCard from "../post-preview";

export default function Home() {
  const posts = getAllBlogPosts();
  return (
    <div className={styles['posts-list']}>
      {posts.map(post => (
        <PostPreviewCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
