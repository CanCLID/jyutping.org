type HastNode = {
  type?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function visit(node: HastNode) {
  if (
    node.type === "element" &&
    typeof node.tagName === "string" &&
    /^h[2-4]$/.test(node.tagName)
  ) {
    node.properties ??= {};
    if (node.properties.tabIndex === undefined && node.properties.tabindex === undefined) {
      node.properties.tabIndex = -1;
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      visit(child);
    }
  }
}

export function rehypeAccessibleContent() {
  return (tree: HastNode) => {
    visit(tree);
  };
}
