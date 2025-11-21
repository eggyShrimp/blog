export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className='prose prose-neutral mt-[16px] prose-base break-all'>
      {children}
    </article>
  );
}
