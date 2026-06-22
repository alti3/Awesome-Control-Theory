import type { MDXComponents } from "mdx/types";
import {
  createContext,
  useContext,
  useRef,
  type ComponentProps,
  type ReactNode,
  type RefObject,
} from "react";

import { YouTube } from "@/components/mdx-youtube";
import { nodeToText, slugifyHeading } from "@/lib/heading-utils";

const HeadingIdContext = createContext<RefObject<Map<string, number>> | null>(null);

export function MdxHeadingScope({ children }: { children: ReactNode }) {
  const seen = useRef(new Map<string, number>());
  seen.current.clear();

  return <HeadingIdContext.Provider value={seen}>{children}</HeadingIdContext.Provider>;
}

function useHeadingId(children: ReactNode) {
  const baseId = slugifyHeading(nodeToText(children));
  const seen = useContext(HeadingIdContext);

  if (!seen) {
    return baseId;
  }

  const count = seen.current.get(baseId) ?? 0;
  seen.current.set(baseId, count + 1);

  return count === 0 ? baseId : `${baseId}-${count + 1}`;
}

function H2({ children, id, ...props }: ComponentProps<"h2">) {
  return (
    <h2 id={id ?? useHeadingId(children)} {...props}>
      {children}
    </h2>
  );
}

function H3({ children, id, ...props }: ComponentProps<"h3">) {
  return (
    <h3 id={id ?? useHeadingId(children)} {...props}>
      {children}
    </h3>
  );
}

export const mdxComponents: MDXComponents = {
  YouTube,
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  h2: H2,
  h3: H3,
};
