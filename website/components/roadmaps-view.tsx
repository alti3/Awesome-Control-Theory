"use client"

import Link from "next/link"
import { resourceGroups, roadmaps } from "@/lib/control-data"
import { ArrowRight, BookOpen } from "lucide-react"

export function RoadmapsView() {
  const resourceCount = resourceGroups.reduce((count, group) => count + group.resources.length, 0)

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
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">Books, papers, courses & software</h2>
          <p className="mt-1 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            The full resource index now has {resourceGroups.length} groups and {resourceCount} entries, including
            the 17 textbook references from the README.
          </p>
        </header>

        <Link
          href="/references"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60"
        >
          <BookOpen className="size-4 text-primary" />
          Open resource index
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
        </Link>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resourceGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-medium leading-snug">{group.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{group.resources.length} entries</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
