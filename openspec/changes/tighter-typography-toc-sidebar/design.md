## Context

当前文章详情页使用 Tailwind Typography `prose-base`，正文行高 `1.75`，段落间距 `1.25em`。TOC 由 `remark-toc` 插件在 markdown 编译时内嵌生成，存在于正文流中。项目设计文档明确为单栏布局，无侧边栏。

## Goals / Non-Goals

**Goals:**
- 提升文章正文区域的信息密度
- TOC 以侧边栏形式展示，不占据主阅读区
- 桌面端 sticky 侧边栏 + 滚动位置高亮
- 移动端 TOC 作为常驻区块置于标题与正文之间
- 不修改任何 `.mdx` 源文件

**Non-Goals:**
- 不修改项目色彩、字体体系
- 不修改根布局 `app/layout.tsx`
- 不改变文章以外的页面布局

## Decisions

### 1. 排版密度：通过 Tailwind Typography config 覆盖实现

在 `tailwind.config.js` 的 `typography` 配置中新增 CSS 覆盖：
- `p { line-height: 1.65 }`（默认 1.75）
- `p { margin-top/margin-bottom: 1em }`（默认 1.25em）
- `h2 { margin-top: 1.6em }`（默认 2em）
- `h3 { margin-top: 1.4em }`（默认 1.6em）

**理由**: 不改动 HTML 结构，仅在 CSS 层调整，影响范围精确。

### 2. 标题提取：正则解析 MDX 原文

在 `lib/core.ts` 中新增 `extractHeadings(content: string)`，用正则匹配 `## Title` / `### Title` 行，生成 `{ level, text, slug }` 数组。slug 按常见规则生成（小写、空格转横线、去标点）。

**理由**: 简单可靠，无需引入额外解析库。MDX 编译在前，本函数在 layout 层并行获取，不增加编译负担。

### 3. 侧边栏布局：flex row + sticky

桌面端（≥1024px）：
```
<div class="flex justify-center gap-12">
  <article class="prose flex-1 max-w-[65ch]">...</article>
  <aside class="w-[220px] shrink-0">
    <div class="sticky top-16">TOC</div>
  </aside>
</div>
```

移动端（<1024px）：TOC 作为 `<TOCSidebar>` 内嵌在 article 中，紧接标题后。
组件通过 CSS media query 或 `useMediaQuery` 判断展示模式。

**理由**: flex 布局保持文章居中，侧边栏不挤占阅读区。`gap-12` 提供适度间距。

### 4. 滚动跟踪：IntersectionObserver

TOC 组件在客户端使用 `IntersectionObserver` 监听正文中的标题元素（通过 `id`），当标题进入视口时高亮对应 TOC 项。

**理由**: 无需滚动事件监听，性能更好。

### 5. `## toc` 标记处理：自定义 remark 插件

在 `page.tsx` 中写一个微小的 remark 插件 `remarkRemoveTocHeading()`，遍历 AST 节点，将内容为 "toc"（不区分大小写）的 heading 节点过滤掉。

**理由**: 不修改 `.mdx` 源文件，运行时自动处理。代码极简（约 10 行）。

## Risks / Trade-offs

- **Risk**: 侧边栏布局与设计文档"No sidebar"原则冲突 → **Mitigation**: 同步更新 `DESIGN.md`，且侧边栏保持克制风格（小字号、低对比度、无装饰）。
- **Risk**: 移动端 TOC 常驻展示额外占据首屏空间 → **Mitigation**: TOC 区块紧凑排版（小字号、紧凑行高），在移动端仅展示 H2 级标题。
- **Risk**: `extractHeadings` 正则可能无法处理极复杂的 markdown 标题（如包含 code span）→ **Mitigation**: 目前所有博文标题均为纯文本，正则匹配覆盖 100% 现有内容。
