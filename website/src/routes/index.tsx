import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Map as MapIcon,
  Route as RouteIcon,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { branches, resourceGroups, roadmaps } from "@/lib/control-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Map of Control Theory - Feedback, Estimation, and Control Design" },
      {
        name: "description",
        content:
          "A connected guide to control theory: feedback, modeling, stability, classical and modern control, estimation, MPC, robotics, and robust design.",
      },
    ],
  }),
  component: HomePage,
});

const majorAreas = [
  "Feedback & Feedforward",
  "Dynamical Systems",
  "Block Diagrams",
  "Transfer Functions",
  "State Space",
  "Stability",
  "Root Locus",
  "Bode & Nyquist Plots",
  "PID Control",
  "Lead-Lag Compensation",
  "Digital Control",
  "Z-Transform Methods",
  "Observers",
  "Kalman Filtering",
  "LQR & LQG",
  "Model Predictive Control",
  "Optimal Control",
  "Robust Control",
  "H-Infinity & Mu Synthesis",
  "Nonlinear Control",
  "Adaptive Control",
  "System Identification",
  "Robotics & Motion Planning",
  "Embedded Implementation",
];

const reasons = [
  {
    title: "Turns behavior into requirements",
    description:
      "Control design translates rise time, overshoot, steady-state error, bandwidth, safety, and energy use into models and tests.",
  },
  {
    title: "Makes feedback useful",
    description:
      "Feedback can reject disturbances and reduce uncertainty, but it also needs stability margins, saturation handling, and careful tuning.",
  },
  {
    title: "Connects models to hardware",
    description:
      "The same loop logic appears in motors, aircraft, power converters, process plants, robots, vehicles, and thermostats.",
  },
  {
    title: "Handles uncertainty and noise",
    description:
      "Observers, Kalman filters, robust control, and identification help controllers act when sensors are noisy and models are incomplete.",
  },
  {
    title: "Respects real constraints",
    description:
      "Modern methods such as MPC and safety filters reason about actuator limits, state constraints, delays, and future behavior.",
  },
  {
    title: "Bridges autonomy and engineering",
    description:
      "Robotics, aerospace, autonomous vehicles, and learning-based systems all depend on dynamics, estimation, planning, and feedback.",
  },
];

function HomePage() {
  const topicCount = branches.reduce(
    (count, branch) =>
      count +
      branch.sections.reduce((sectionCount, section) => sectionCount + section.topics.length, 0),
    0,
  );
  const resourceCount = resourceGroups.reduce(
    (count, group) => count + group.resources.length,
    0,
  );

  return (
    <div className="min-h-screen">
      <SiteHeader activePage="home" />

      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Compass className="size-3.5 text-primary" />
              Sense · Decide · Act
            </div>
            <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Map of <span className="text-primary">Control Theory</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              A connected guide to feedback, dynamical systems, stability, estimation, control
              design, and implementation. Explore the map, follow a learning path, or use the
              resource index to go deeper.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Control theory studies how inputs can steer dynamic systems toward desired behavior
              while managing delay, overshoot, error, disturbances, constraints, and uncertainty.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/map"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Explore the Map
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/paths"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Follow a Learning Path
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>{branches.length} branches</span>
              <span className="text-border">/</span>
              <span>{topicCount} topics</span>
              <span className="text-border">/</span>
              <span>{roadmaps.length} learning paths</span>
              <span className="text-border">/</span>
              <span>{resourceCount} resources</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                01 · Overview
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                The branches of control theory
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The map organizes control around core feedback concepts, controller families,
              planning, estimation, modeling, analysis, and first-principles system building.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => {
              const count = branch.sections.reduce(
                (sectionCount, section) => sectionCount + section.topics.length,
                0,
              );

              return (
                <Link
                  key={branch.id}
                  to="/map/$slug"
                  params={{ slug: branch.id }}
                  className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Branch {branch.number}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {count} topics
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{branch.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{branch.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Enter branch
                    <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Major areas on the map
            </p>
            <div className="flex flex-wrap gap-2">
              {majorAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-border/70 bg-secondary/50 px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              02 · Why it matters
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
              Why control theory matters
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Control is the engineering discipline of making dynamic systems behave reliably when
              the world changes, sensors are imperfect, and actuators have limits.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              to="/map"
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <MapIcon className="mt-0.5 size-5 text-primary" />
              <div>
                <h2 className="text-sm font-semibold">Open the Map</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Browse every branch and topic in the control atlas.
                </p>
              </div>
            </Link>
            <Link
              to="/paths"
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <RouteIcon className="mt-0.5 size-5 text-primary" />
              <div>
                <h2 className="text-sm font-semibold">Pick a Path</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Study classical, state-space, digital, robotics, stochastic, or robust control.
                </p>
              </div>
            </Link>
            <Link
              to="/references"
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <BookOpen className="mt-0.5 size-5 text-primary" />
              <div>
                <h2 className="text-sm font-semibold">Use the Resources</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Find books, courses, papers, software, and open notes.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
