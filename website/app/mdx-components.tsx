import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"
import { nodeToText, slugifyHeading } from "@/lib/heading-utils"

function headingId(children: ReactNode) {
  return slugifyHeading(nodeToText(children))
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, id, ...props }) => (
      <h2 id={id ?? headingId(children)} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3 id={id ?? headingId(children)} {...props}>
        {children}
      </h3>
    ),
    ...components,
  }
}
