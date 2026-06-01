"use client"

import Link from "next/link"
import { BookOpen, GitBranch, Map as MapIcon, Route } from "lucide-react"
import type { ReactNode } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

type ActivePage = "map" | "paths" | "references"

const navItems = [
  { href: "/map", label: "Map", page: "map", icon: MapIcon },
  { href: "/paths", label: "Paths", page: "paths", icon: Route },
  { href: "/references", label: "Resources", page: "references", icon: BookOpen },
] as const

export function SiteHeader({
  activePage,
  onMapReset,
  children,
}: {
  activePage: ActivePage
  onMapReset?: () => void
  children?: ReactNode
}) {
  const resetMap = activePage === "map" ? onMapReset : undefined

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <Link href="/map" onClick={resetMap} className="flex items-center gap-2.5 text-left">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GitBranch className="size-4" />
          </span>
          <span className="leading-tight">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Interactive
            </span>
            <span className="block text-sm font-semibold tracking-tight">Map of Control Theory</span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {children}

          <nav className="flex shrink-0 rounded-md border border-border bg-card p-0.5" aria-label="Primary">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = item.page === activePage

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={item.page === "map" ? resetMap : undefined}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-1.5 rounded px-3 py-1.5 text-sm font-medium transition-colors",
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
