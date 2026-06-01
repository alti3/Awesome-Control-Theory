"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Search,
  Repeat,
  SlidersHorizontal,
  Route,
  Radar,
  Boxes,
  Activity,
  Atom,
  X,
} from "lucide-react"
import { branches, topicToSlug, type Branch, type Topic } from "@/lib/control-data"
import { BranchCard } from "@/components/branch-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

const ICONS = {
  core: Repeat,
  methods: SlidersHorizontal,
  planning: Route,
  estimation: Radar,
  modeling: Boxes,
  analysis: Activity,
  "first-principles": Atom,
} as const

export function ControlMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [query, setQuery] = useState("")

  const resetMap = () => {
    setSelectedId(null)
    setQuery("")
  }

  const selected = branches.find((b) => b.id === selectedId) ?? null

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    const results: { branch: Branch; section: string; topic: Topic }[] = []
    for (const branch of branches) {
      for (const section of branch.sections) {
        for (const topic of section.topics) {
          if (
            topic.term.toLowerCase().includes(q) ||
            topic.description.toLowerCase().includes(q) ||
            section.title.toLowerCase().includes(q) ||
            branch.title.toLowerCase().includes(q)
          ) {
            results.push({ branch, section: section.title, topic })
          }
        }
      }
    }
    return results
  }, [query])

  return (
    <div className="min-h-screen">
      <SiteHeader activePage="map" onMapReset={resetMap}>
        <div className="relative min-w-0 flex-[1_1_14rem] md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 200+ topics..."
            className="h-9 w-full rounded-md border border-border bg-card pl-9 pr-8 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/40"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </SiteHeader>

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        {searchResults ? (
          <SearchResults
            results={searchResults}
            query={query}
          />
        ) : selected ? (
          <BranchDetail branch={selected} onBack={() => setSelectedId(null)} />
        ) : (
          <MapOverview onSelect={setSelectedId} />
        )}
      </main>

      <SiteFooter />
    </div>
  )
}

function MapOverview({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div>
      <section className="relative mb-10 overflow-hidden rounded-xl border border-border bg-card">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative px-6 py-12 md:px-10 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Sense · Decide · Act</p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            The study of systems that match behavior to a desired objective.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Explore control theory as a connected map. Start with a branch below, follow a learning path, or
            search across every method, estimator, and analysis tool.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Feedback", "LQR", "Kalman filter", "MPC", "MIMO", "Z-transform", "Lyapunov", "Sliding mode"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Branches</h2>
        <span className="font-mono text-xs text-muted-foreground">{branches.length} regions</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            icon={ICONS[branch.id as keyof typeof ICONS] ?? Atom}
            onSelect={() => onSelect(branch.id)}
          />
        ))}
      </div>
    </div>
  )
}

function BranchDetail({ branch, onBack }: { branch: Branch; onBack: () => void }) {
  const [activeSection, setActiveSection] = useState(0)
  const Icon = ICONS[branch.id as keyof typeof ICONS] ?? Atom
  const section = branch.sections[activeSection]

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to map
      </button>

      <div className="mb-8 flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
          <Icon className="size-6" strokeWidth={1.6} />
        </span>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{branch.number}</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{branch.tagline}</span>
          </div>
          <h1 className="mt-1 text-balance text-2xl font-semibold tracking-tight md:text-3xl">{branch.title}</h1>
          <p className="mt-1 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">{branch.blurb}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        {/* Section nav */}
        <nav className="md:sticky md:top-24 md:self-start">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Groups</p>
          <ul className="flex flex-wrap gap-2 md:flex-col md:gap-1">
            {branch.sections.map((s, i) => (
              <li key={s.title}>
                <button
                  onClick={() => setActiveSection(i)}
                  className={cn(
                    "w-full rounded-md border px-3 py-2 text-left text-sm transition-colors",
                    i === activeSection
                      ? "border-primary/50 bg-accent text-accent-foreground"
                      : "border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    {s.title}
                    <span className="font-mono text-[10px] opacity-70">{s.topics.length}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Topics */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.topics.map((topic) => (
              <Link
                key={topic.term}
                href={`/topics/${topicToSlug(topic.term)}`}
                className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <h3 className="text-sm font-semibold leading-snug text-foreground">{topic.term}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchResults({
  results,
  query,
}: {
  results: { branch: Branch; section: string; topic: Topic }[]
  query: string
}) {
  return (
    <div>
      <p className="mb-5 text-sm text-muted-foreground">
        <span className="font-mono text-foreground">{results.length}</span> result
        {results.length === 1 ? "" : "s"} for{" "}
        <span className="font-medium text-foreground">&ldquo;{query}&rdquo;</span>
      </p>

      {results.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          No topics matched. Try &ldquo;Kalman&rdquo;, &ldquo;MPC&rdquo;, or &ldquo;stability&rdquo;.
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {results.map(({ branch, section, topic }, i) => (
            <Link
              key={`${topic.term}-${i}`}
              href={`/topics/${topicToSlug(topic.term)}`}
              className="group rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary/60"
            >
              <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="text-primary">{branch.title}</span>
                <span>/</span>
                <span>{section}</span>
              </div>
              <h3 className="text-sm font-semibold leading-snug">{topic.term}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
