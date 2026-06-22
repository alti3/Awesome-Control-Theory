import type { MDXComponents } from "mdx/types";
import type { ComponentType } from "react";

import { slugifyHeading } from "@/lib/heading-utils";

export type TopicFrontmatter = {
  title?: string;
  description?: string;
  category?: string;
  branch?: string;
};

export type TopicMdxModule = {
  default: ComponentType<{ components?: MDXComponents }>;
  frontmatter?: TopicFrontmatter;
};

export type TopicSection = {
  id: string;
  title: string;
  level: 2 | 3;
};

const topicModules = import.meta.glob<TopicMdxModule>("/content/topics/*.mdx");
const topicSources = import.meta.glob<unknown>("/content/topics/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

function slugFromPath(path: string) {
  return path.replace(/^\/content\/topics\//, "").replace(/\.mdx$/, "");
}

function pathForSlug(slug: string) {
  return `/content/topics/${slug}.mdx`;
}

function hasTopicContent(slug: string) {
  return pathForSlug(slug) in topicModules;
}

function getRawTopicSource(slug: string): string | null {
  const source = topicSources[pathForSlug(slug)];

  if (typeof source === "string") {
    return source;
  }

  if (typeof source !== "function") {
    return null;
  }

  const rendered = source({});

  if (
    rendered &&
    typeof rendered === "object" &&
    "type" in rendered &&
    typeof rendered.type === "string"
  ) {
    return rendered.type;
  }

  return null;
}

export async function getTopicSlugs(): Promise<string[]> {
  return Object.keys(topicModules).map(slugFromPath).sort();
}

export async function getTopicModule(slug: string): Promise<TopicMdxModule | null> {
  const loadTopic = topicModules[pathForSlug(slug)];
  return loadTopic ? loadTopic() : null;
}

export async function getTopicMetadata(slug: string) {
  const module = await getTopicModule(slug);

  if (!module) {
    return null;
  }

  return {
    title: module.frontmatter?.title || slug.replace(/-/g, " "),
    description: module.frontmatter?.description || "",
    category: module.frontmatter?.category,
    branch: module.frontmatter?.branch,
  };
}

export async function getTopicSections(slug: string): Promise<TopicSection[]> {
  if (!hasTopicContent(slug)) {
    return [];
  }

  const file = getRawTopicSource(slug);

  if (!file) {
    return [];
  }

  const content = file.replace(/^---[\s\S]*?---\s*/, "");
  const sections: TopicSection[] = [];
  const seen = new Map<string, number>();

  for (const line of content.split("\n")) {
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);

    if (!match) {
      continue;
    }

    const title = match[2].replace(/\s+#$/, "").trim();
    const baseId = slugifyHeading(title);
    const count = seen.get(baseId) ?? 0;
    seen.set(baseId, count + 1);

    sections.push({
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
      title,
      level: match[1].length as 2 | 3,
    });
  }

  return sections;
}
