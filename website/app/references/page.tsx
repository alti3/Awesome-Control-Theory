import type { Metadata } from "next"
import { ExternalLink, LibraryBig } from "lucide-react"
import { resourceGroups } from "@/lib/control-data"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "References & Learning Resources - Map of Control Theory",
  description:
    "Books, papers, courses, software, and learning resources for control systems theory.",
}

export default function ReferencesPage() {
  const total = resourceGroups.reduce((count, group) => count + group.resources.length, 0)

  return (
    <div className="min-h-screen">
      <SiteHeader activePage="references" />

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <section className="relative mb-10 overflow-hidden rounded-xl border border-border bg-card">
          <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
              <LibraryBig className="size-5" strokeWidth={1.6} />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">References</p>
            <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Books, papers, courses, and software for control systems theory.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              A curated index of {total} resources across {resourceGroups.length} categories, including the textbook
              references used to expand the map coverage.
            </p>
          </div>
        </section>

        <div className="space-y-10">
          {resourceGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    {group.resources.length} entries
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">{group.title}</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{group.description}</p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {group.resources.map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/60"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold leading-snug">{resource.label}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{resource.note}</p>
                    </div>
                    <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
