/** @type {import('next').NextConfig} */
import nextMdx from '@next/mdx';

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.(mdx|md)?$/,
  options: {
    remarkPlugins: ['remark-frontmatter'],
    rehypePlugins: [],
  }
});

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  serverExternalPackages: ['autocorrect-node'],
});

export default nextConfig
