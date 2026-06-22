import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/map")({
  component: MapLayout,
});

function MapLayout() {
  return <Outlet />;
}
