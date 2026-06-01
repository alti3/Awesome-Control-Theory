"use client"

import type { MouseEvent } from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import type { TopicSection } from "@/lib/topics"

export function TableOfContents({ sections }: { sections: TopicSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      },
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    const el = document.getElementById(id)

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top, behavior: "smooth" })
      setActiveId(id)
    }
  }

  if (sections.length === 0) {
    return null
  }

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">On this page</span>
        <span className="font-mono text-xs tabular-nums text-primary">{Math.round(progress)}%</span>
      </div>

      <ol className="space-y-1">
        {sections.map((section, index) => {
          const isActive = activeId === section.id

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(event) => handleClick(event, section.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group flex items-baseline gap-3 rounded-md px-3 py-2 leading-snug transition-colors",
                  section.level === 3 && "ml-4 text-xs",
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs tabular-nums transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground/70",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "border-l-2 pl-3 transition-colors",
                    isActive ? "border-primary font-medium" : "border-transparent group-hover:border-border",
                  )}
                >
                  {section.title}
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
