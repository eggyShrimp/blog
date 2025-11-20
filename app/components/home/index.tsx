import { BlogPost, getAllBlogPosts } from "@/lib/core";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Home() {
  const posts = getAllBlogPosts();
  console.log(posts);

  return (
    <div className={styles['posts-list']}>
      {posts.map(post => (
        <PostPreviewCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

function PostPreviewCard({ post }: { post: BlogPost }) {
  return (
    <Link className={styles['post-preview-card']} href={`/posts/${post.slug}`}>
      <h2 className={styles['post-preview-card__title']}>{post.metadata.title}</h2>
      <p className={styles['post-preview-card__summary']}>{post.metadata.summary}</p>
    </Link>
  );
}
