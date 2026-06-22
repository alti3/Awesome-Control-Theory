import { createFileRoute, notFound } from "@tanstack/react-router";

import { BranchDetail } from "@/components/control-map";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { branches, getBranchBySlug } from "@/lib/control-data";

export const Route = createFileRoute("/map/$slug")({
  validateSearch: (search: Record<string, unknown>) => ({
    section: typeof search.section === "string" ? search.section : undefined,
  }),
  loader: ({ params }) => {
    const branch = getBranchBySlug(params.slug);

    if (!branch) {
      throw notFound();
    }

    return { branch };
  },
  head: ({ loaderData }) => {
    const branch = loaderData?.branch;
    const title = branch?.title ?? "Control Theory Branch";
    const description =
      branch?.blurb ?? "Explore a branch of control theory topics, methods, and concepts.";

    return {
      meta: [
        { title: `${title} - Map of Control Theory` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: MapBranchPage,
});

export function getStaticPaths() {
  return branches.map((branch) => ({ slug: branch.id }));
}

function MapBranchPage() {
  const { branch } = Route.useLoaderData();
  const { section } = Route.useSearch();

  return (
    <div className="min-h-screen">
      <SiteHeader activePage="map" />

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <BranchDetail branch={branch} activeSectionId={section} />
      </main>

      <SiteFooter />
    </div>
  );
}
