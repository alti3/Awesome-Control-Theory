"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import type { TopicSection } from "@/lib/topics";

const ACTIVE_HEADING_OFFSET = 112;

function getScrollProgressSnapshot() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  return docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
}

function getServerScrollProgressSnapshot() {
  return 0;
}

function subscribeToScrollProgress(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange);

  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
}

function getActiveSectionId(sections: TopicSection[]) {
  let activeId = sections[0]?.id ?? "";

  for (const section of sections) {
    const heading = document.getElementById(section.id);

    if (!heading) {
      continue;
    }

    if (heading.getBoundingClientRect().top <= ACTIVE_HEADING_OFFSET) {
      activeId = section.id;
    } else {
      break;
    }
  }

  return activeId;
}

export function TableOfContents({ sections }: { sections: TopicSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const progress = useSyncExternalStore(
    subscribeToScrollProgress,
    getScrollProgressSnapshot,
    getServerScrollProgressSnapshot,
  );

  useEffect(() => {
    setActiveId(sections[0]?.id ?? "");
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) {
      return;
    }

    let animationFrame = 0;

    const updateActiveId = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setActiveId(getActiveSectionId(sections));
      });
    };

    updateActiveId();

    const observer = new MutationObserver(updateActiveId);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", updateActiveId, { passive: true });
    window.addEventListener("resize", updateActiveId);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveId);
      window.removeEventListener("resize", updateActiveId);
    };
  }, [sections]);

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          On this page
        </span>
        <span className="font-mono text-xs tabular-nums text-primary">{Math.round(progress)}%</span>
      </div>

      <ol className="space-y-1">
        {sections.map((section, index) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
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
                    isActive
                      ? "border-primary font-medium"
                      : "border-transparent group-hover:border-border",
                  )}
                >
                  {section.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
