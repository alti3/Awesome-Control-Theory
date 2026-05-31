"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import type { Branch } from "@/lib/control-data"
import { cn } from "@/lib/utils"

export function BranchCard({
  branch,
  icon: Icon,
  onSelect,
}: {
  branch: Branch
  icon: LucideIcon
  onSelect: () => void
}) {
  const topicCount = branch.sections.reduce((n, s) => n + s.topics.length, 0)

  return (
    <button
      onClick={onSelect}
      className={cn(
        "group relative flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-5 text-left",
        "transition-all hover:border-primary/60 hover:shadow-[0_1px_0_0_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex size-10 items-center justify-center rounded-md border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40 group-hover:bg-accent">
          <Icon className="size-5" strokeWidth={1.6} />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{branch.number}</span>
      </div>

      <div className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{branch.tagline}</p>
        <h3 className="text-balance text-lg font-semibold leading-tight tracking-tight">{branch.title}</h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{branch.blurb}</p>
      </div>

      <div className="mt-auto flex w-full items-center justify-between border-t border-border pt-3">
        <span className="font-mono text-xs text-muted-foreground">
          {branch.sections.length} groups · {topicCount} topics
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
    </button>
  )
}
