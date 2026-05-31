"use client"

import { roadmaps, references } from "@/lib/control-data"
import { ExternalLink } from "lucide-react"

export function RoadmapsView() {
  return (
    <div className="space-y-12">
      <section>
        <header className="mb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Learning roadmaps</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">Pick a path, follow the loop</h2>
          <p className="mt-1 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Ordered sequences that take you from first principles to advanced, learning-based control.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {roadmaps.map((rm) => (
            <div key={rm.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 text-base font-semibold tracking-tight">{rm.title}</h3>
              <ol className="space-y-3">
                {rm.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section>
        <header className="mb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">References</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">Open texts, courses & software</h2>
        </header>
        <div className="grid gap-3 sm:grid-cols-2">
          {references.map((ref) => (
            <a
              key={ref.href}
              href={ref.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/60"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-snug">{ref.label}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{ref.note}</p>
              </div>
              <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
