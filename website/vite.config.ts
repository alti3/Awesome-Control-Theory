import { readdir } from "node:fs/promises";

import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import rehypeKatex from "rehype-katex";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const siteUrl = process.env.SITE_URL;

export default defineConfig(async () => {
  const topicPages = (await readdir(new URL("./content/topics", import.meta.url)))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      path: `/topics/${file.replace(/\.mdx$/, "")}`,
      sitemap: { priority: 0.7, changefreq: "monthly" as const },
    }));

  return {
    plugins: [
      mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkMath],
        rehypePlugins: [rehypeKatex],
      }),
      tanstackStart({
        router: {
          routeTreeFileHeader: [],
        },
        pages: [
          {
            path: "/",
            sitemap: { priority: 1, changefreq: "weekly" },
          },
          {
            path: "/map",
            sitemap: { priority: 0.95, changefreq: "weekly" },
          },
          {
            path: "/paths",
            sitemap: { priority: 0.85, changefreq: "monthly" },
          },
          {
            path: "/references",
            sitemap: { priority: 0.85, changefreq: "monthly" },
          },
          ...topicPages,
        ],
        prerender: {
          enabled: true,
          crawlLinks: true,
          retryCount: 1,
        },
        ...(siteUrl
          ? {
              sitemap: {
                host: siteUrl,
              },
            }
          : {}),
        server: { entry: "server" },
      }),
      react(),
      tailwindcss(),
    ],
    resolve: {
      tsconfigPaths: true,
    },
  };
});
