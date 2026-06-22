import { createFileRoute } from "@tanstack/react-router";

import { ControlMap } from "@/components/control-map";

export const Route = createFileRoute("/map/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Map - Map of Control Theory" },
      {
        name: "description",
        content:
          "Explore control theory as an interactive map of feedback concepts, methods, planning, estimation, modeling, and analysis.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const { q } = Route.useSearch();

  return <ControlMap initialQuery={q ?? ""} />;
}
