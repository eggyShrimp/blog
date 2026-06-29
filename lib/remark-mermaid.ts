export default function remarkMermaid() {
  return (tree: { type: string; children: Record<string, unknown>[] }) => {
    transform(tree);
  };
}

interface CodeNode {
  type: "code";
  lang: string | null;
  value: string;
}

function transform(parent: Record<string, unknown>): void {
  const children = parent.children as Record<string, unknown>[] | undefined;
  if (!children) return;

  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];

    if (isCodeNode(child) && child.lang === "mermaid") {
      children[i] = {
        type: "mdxJsxFlowElement",
        name: "Mermaid",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "chart",
            value: child.value,
          },
        ],
        children: [],
      };
    } else if (hasChildren(child)) {
      transform(child);
    }
  }
}

function hasChildren(node: unknown): node is Record<string, unknown> {
  return (
    typeof node === "object" &&
    node !== null &&
    "children" in node &&
    Array.isArray((node as Record<string, unknown>).children)
  );
}

function isCodeNode(node: unknown): node is CodeNode {
  return (
    typeof node === "object" &&
    node !== null &&
    (node as Record<string, unknown>).type === "code"
  );
}
