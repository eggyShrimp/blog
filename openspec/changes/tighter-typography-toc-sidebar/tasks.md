## 1. 排版密度调整

- [x] 1.1 在 `app/globals.css` 的 `@layer components` 中覆盖 `.prose` 行高和段落间距（Tailwind v4 下 CSS 直接覆盖比 config 更可靠）

## 2. 标题提取

- [x] 2.1 在 `lib/core.ts` 中新增 `extractHeadings()` 函数
- [x] 2.2 生成 `{ level, text, slug }[]` 结构，slug 按标准规则转换

## 3. TOC 侧边栏组件

- [x] 3.1 创建 `app/components/toc-sidebar/index.tsx`
- [x] 3.2 实现桌面端 sticky 侧边栏渲染（由 layout 控制定位）
- [x] 3.3 实现移动端常驻内嵌区块渲染（由 layout 控制定位）
- [x] 3.4 实现 IntersectionObserver 滚动跟踪高亮
- [x] 3.5 实现点击 TOC 项平滑滚动到对应标题

## 4. 布局修改

- [x] 4.1 修改 `app/posts/[slug]/layout.tsx` 为双栏布局
- [x] 4.2 桌面端：flex row，sidebar 在右侧 sticky
- [x] 4.3 移动端：TOC 内嵌在标题下方
- [x] 4.4 修改 `app/layout.tsx` —— `#main` 去掉 `prose` 改用 `--content-width: 864px`
- [x] 4.5 为受影响页面（about-me, not-found, tags/[tag]）补回 `prose` 类

## 5. 移除内嵌 TOC

- [x] 5.1 从 `page.tsx` 移除 `remark-toc` 导入和使用
- [x] 5.2 新增 `remarkRemoveTocHeading` 插件过滤 `## toc` 标记
- [x] 5.3 从 `package.json` 移除 `remark-toc` 依赖

## 6. 样式

- [x] 6.1 TOC 组件样式通过 Tailwind 类和内联 style 实现，无需额外 CSS

## 7. 文档更新

- [x] 7.1 更新 `DESIGN.md` 布局部分
- [x] 7.2 新增 `AGENTS.md` 写入 OpenSpec 流程规范
