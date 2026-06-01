import type { Metadata } from "next"
import { RoadmapsView } from "@/components/roadmaps-view"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Learning Paths - Map of Control Theory",
  description:
    "Structured learning paths for classical, state-space, robotics, digital, advanced, stochastic, MIMO, and robust control.",
}

export default function PathsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader activePage="paths" />

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <RoadmapsView />
      </main>

      <SiteFooter />
    </div>
  )
}
