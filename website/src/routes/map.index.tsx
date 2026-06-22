import { createFileRoute } from "@tanstack/react-router";

import { ControlMap } from "@/components/control-map";

export const Route = createFileRoute("/map/")({
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
  return <ControlMap />;
}
