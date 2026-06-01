import type { Metadata } from "next"
import { ControlMap } from "@/components/control-map"

export const metadata: Metadata = {
  title: "Map - Map of Control Theory",
  description:
    "Explore control theory as an interactive map of feedback concepts, methods, planning, estimation, modeling, and analysis.",
}

export default function MapPage() {
  return <ControlMap />
}
