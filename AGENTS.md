# AGENTS.md

AI coding agents must follow the spec-driven workflow defined here.

## OpenSpec Workflow

非琐碎改动（新增功能、修改布局、调整组件行为等）必须走 OpenSpec 流程。纯 bug fix 或单行修改可跳过。

### 目录结构

```
openspec/
├── changes/
│   ├── <change-name>/           # 进行中的变更
│   │   ├── .openspec.yaml       # schema: spec-driven, created: YYYY-MM-DD
│   │   ├── proposal.md          # Why + What
│   │   ├── design.md            # How + 决策记录
│   │   ├── tasks.md             # 实现 checklist
│   │   └── specs/
│   │       └── <capability>/    # 每个新增/修改的能力
│   │           └── spec.md      # 该能力的行为规格
│   └── archive/                 # 已完成的变更
│       └── <YYYY-MM-DD>-<name>/
└── specs/                       # 已合并进主线的能力规格（基准）
```

### 流程

```
Proposal → Design → Specs → Tasks → 确认 → 实现 → Archive
```

#### 1. Proposal (`proposal.md`)
- **Why** — 为什么要做
- **What Changes** — 改什么
- **Capabilities** — 新增/修改的能力
- **Impact** — 影响哪些文件、依赖

#### 2. Design (`design.md`)
- **Context** — 当前状态
- **Goals / Non-Goals** — 边界
- **Decisions** — 关键决策及理由
- **Risks / Trade-offs** — 风险与取舍

#### 3. Specs (`specs/<capability>/spec.md`)
每个能力一个 spec 文件，描述该能力的行为规格（桌面端/移动端、交互、数据来源等），用中文。

#### 4. Tasks (`tasks.md`)
- 按实现顺序排列的 checklist
- `- [ ]` 格式，每个 task 可原子化验证

#### 5. 确认
Proposal + Design + Specs + Tasks 完成后，请用户确认再开始写代码。

#### 6. 实现
逐项完成 tasks.md 中的 task，标记为 `- [x]`。每完成一项确保 lint / build 通过。

#### 7. Archive
变更全部完成并验证后，将 changes/<name>/ 移动到 changes/archive/<YYYY-MM-DD>-<name>/，将 specs 下新增的能力规格合并到 openspec/specs/。

### 示例

```
openspec/changes/tighter-typography-toc-sidebar/
├── .openspec.yaml
├── proposal.md          # 行间距 + TOC 侧边栏
├── design.md            # 排版方案 + 布局决策
├── tasks.md             # 7 个实现步骤
└── specs/
    ├── toc-sidebar/spec.md
    └── tighter-typography/spec.md
```

### 避开

- 跳过 proposal/design 直接写代码
- 在 tasks.md 未确认前开始实现
- spec 和代码不同步
