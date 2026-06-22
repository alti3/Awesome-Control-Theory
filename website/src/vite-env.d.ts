/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types";
  import type { ComponentType } from "react";

  export const frontmatter:
    | {
        title?: string;
        description?: string;
        category?: string;
        branch?: string;
      }
    | undefined;

  const MDXContent: ComponentType<{ components?: MDXComponents }>;
  export default MDXContent;
}
