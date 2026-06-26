## 1. CodeBlock 组件

- [ ] 1.1 创建 `components/code-block/index.tsx`，实现 `CodeBlockProps` 类型定义
- [ ] 1.2 实现语言标识和语法高亮（基于现有 rehype-prism-plus）
- [ ] 1.3 实现 filename 标签显示
- [ ] 1.4 实现行号显示（`showLineNumbers`）
- [ ] 1.5 实现行高亮（`highlightLines`）
- [ ] 1.6 实现复制按钮（clipboard API）

## 2. Figure 组件

- [ ] 2.1 创建 `components/figure/index.tsx`，实现 `FigureProps` 类型定义
- [ ] 2.2 实现响应式图片（使用 Next.js `<Image>`）
- [ ] 2.3 实现 caption 渲染
- [ ] 2.4 实现 `priority` 标志支持

## 3. Steps 组件

- [ ] 3.1 创建 `components/steps/index.tsx`，实现 `StepsProps` 类型定义
- [ ] 3.2 实现编号序列（数字标记 + 内容区）
- [ ] 3.3 支持子元素内嵌套 markdown 和其他组件

## 4. Card 组件

- [ ] 4.1 创建 `components/card/index.tsx`，实现 `CardProps` 类型定义
- [ ] 4.2 实现外部链接（`target="_blank"` + `noopener noreferrer`）
- [ ] 4.3 实现内部链接（Next.js `<Link>`）
- [ ] 4.4 实现可选 icon 显示

## 5. Accordion 组件

- [ ] 5.1 创建 `components/accordion/index.tsx`，实现 `AccordionProps` 类型定义
- [ ] 5.2 实现折叠/展开切换
- [ ] 5.3 实现 `defaultOpen` 默认状态
- [ ] 5.4 实现 `aria-expanded` 无障碍属性

## 6. Video 组件

- [ ] 6.1 创建 `components/video/index.tsx`，实现 `VideoProps` 类型定义
- [ ] 6.2 实现 YouTube iframe 嵌入
- [ ] 6.3 实现 16:9 响应式容器
- [ ] 6.4 支持自定义 width/height

## 7. Callout 增强

- [ ] 7.1 为 `Callout` 添加 `variant` prop（info/warning/danger/tip）
- [ ] 7.2 实现各 variant 的颜色方案
- [ ] 7.3 保持无 variant 时的默认样式（向后兼容）

## 8. 注册表与集成

- [ ] 8.1 更新 `components/index.tsx`，注册所有新组件
- [ ] 8.2 更新 `app/posts/[slug]/page.tsx`，确保新组件传入 MDXContent
- [ ] 8.3 运行 `npm run lint` 验证无错误
