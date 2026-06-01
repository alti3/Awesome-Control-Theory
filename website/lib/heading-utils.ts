import type { ReactNode } from "react"

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function nodeToText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(nodeToText).join("")
  }

  if (node && typeof node === "object" && "props" in node) {
    return nodeToText(node.props.children)
  }

  return ""
}
