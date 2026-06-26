## TOC 侧边栏

### 桌面端（≥1024px）

- 右侧 sticky 侧边栏，宽度 220px
- 列出文章所有 H2 和 H3 标题
- 当前阅读位置的标题高亮（通过 IntersectionObserver 检测）
- 点击任意标题项平滑滚动到对应位置
- 样式克制：小字号、低对比度、无装饰

### 移动端（<1024px）

- TOC 作为常驻区块展示在文章标题与正文之间
- 紧凑排版，仅展示 H2 标题
- 点击标题项平滑滚动到对应位置

### 数据来源

- 标题数据由 `lib/core.ts` 的 `extractHeadings()` 从原始 MDX 内容解析
- 不依赖 remark-toc 或任何运行时 markdown 解析
