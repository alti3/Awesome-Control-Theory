import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink, LibraryBig, Search, X } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resourceGroups } from "@/lib/control-data";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References & Learning Resources - Map of Control Theory" },
      {
        name: "description",
        content:
          "Books, papers, courses, software, and learning resources for control systems theory.",
      },
    ],
  }),
  component: ReferencesPage,
});

function ReferencesPage() {
  const total = resourceGroups.reduce((count, group) => count + group.resources.length, 0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "all">("all");

  const filteredGroups = useMemo(() => {
    const term = query.trim().toLowerCase();

    return resourceGroups
      .map((group) => {
        if (category !== "all" && group.title !== category) {
          return { ...group, resources: [] };
        }

        const resources = group.resources.filter((resource) => {
          if (!term) return true;

          const haystack = [
            resource.label,
            resource.note,
            resource.href,
            group.title,
            group.description,
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(term);
        });

        return { ...group, resources };
      })
      .filter((group) => group.resources.length > 0);
  }, [category, query]);

  const filteredTotal = filteredGroups.reduce(
    (count, group) => count + group.resources.length,
    0,
  );

  return (
    <div className="min-h-screen">
      <SiteHeader activePage="references" />

      <section className="relative border-b border-border/60">
        <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
            <LibraryBig className="size-5" strokeWidth={1.6} />
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            References
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Books, papers, courses, and software for control systems theory.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A curated index of {total} resources across {resourceGroups.length} categories,
            including the textbook references used to expand the map coverage.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search resources by name, topic, or description..."
                className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-9 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            <Filter
              value={category}
              onChange={setCategory}
              options={[
                ["all", "All categories"],
                ...resourceGroups.map((group) => [group.title, group.title] as [string, string]),
              ]}
            />
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            {filteredTotal} of {total} resources
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        {filteredGroups.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card p-12 text-center">
            <Search className="size-6 text-muted-foreground" />
            <h2 className="text-base font-semibold">Nothing matches yet</h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Try a different keyword or switch back to all categories.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredGroups.map((group) => (
              <section key={group.title}>
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      {group.resources.length} entries
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight">{group.title}</h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
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
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {resource.note}
                        </p>
                      </div>
                      <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function Filter<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  options: [string, string][];
}) {
  return (
    <label className="relative inline-flex">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="h-10 min-w-full appearance-none rounded-md border border-border bg-card px-3 pr-8 text-sm outline-none focus:border-primary md:min-w-[180px]"
      >
        {options.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </label>
  );
}
