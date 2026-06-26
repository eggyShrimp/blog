## Why

文章详情页两个体验问题：正文行间距过大，一屏信息密度低；TOC 内嵌在正文中，占据主阅读区纵向空间。

## What Changes

- 收紧 Typography 配置：正文行高 `1.75` → `1.65`，段落间距收紧
- TOC 从 `remark-toc` 内嵌生成改为侧边栏渲染：
  - 桌面端：右侧 sticky 侧边栏，IntersectionObserver 高亮当前位置
  - 移动端：文章标题下方常驻 TOC 区块
- 新增 `extractHeadings()` 工具函数，从 markdown 原文解析标题结构
- 移除 `remark-toc` 依赖，新增 remark 插件过滤 `## toc` 标记

## Capabilities

### New Capabilities

- `toc-sidebar`: 文章目录侧边栏组件，支持桌面侧边/移动内嵌双模式，滚动跟踪高亮
- `extract-headings`: 从 MDX 源内容提取标题层级数据

### Modified Capabilities

- `typography`: 文章排版密度提升

## Impact

- **新增文件**: `app/components/toc-sidebar/index.tsx`
- **修改文件**: `tailwind.config.js`, `lib/core.ts`, `app/posts/[slug]/layout.tsx`, `app/posts/[slug]/page.tsx`, `app/globals.css`, `DESIGN.md`
- **依赖**: 移除 `remark-toc`（不再需要）
- **MDX 内容**: 不修改任何 `.mdx` 文件，`## toc` 标记由 remark 插件运行时过滤
