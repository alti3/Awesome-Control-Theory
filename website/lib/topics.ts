import { readFile } from "node:fs/promises"
import path from "node:path"
import { slugifyHeading } from "@/lib/heading-utils"
import { topicContent, type TopicMdxModule } from "@/lib/topic-content"

export const topics = [
  "a-a-star",
  "a-d-and-d-a-conversion",
  "adaptive-dynamic-programming",
  "adrc",
  "aerospace-and-pointing-models",
  "aliasing",
  "auto-tuning",
  "averaging",
  "backstepping",
  "balanced-truncation",
  "bang-bang-control",
  "bang-bang-solutions",
  "bayesian-filtering",
  "bias-calibration",
  "bilinear-and-w-transform-methods",
  "bilinear-transform-tests",
  "black-box-identification",
  "block-diagrams",
  "bode-plots",
  "c2d-and-d2c-conversion",
  "calculus-of-variations",
  "canonical-forms",
  "circle-criterion",
  "closed-loop-simulation",
  "co-simulation",
  "collision-avoidance",
  "collocation-and-shooting",
  "compensator-design",
  "computation-delay",
  "consensus-control",
  "constrained-filters",
  "constraint-handling",
  "continuous-time",
  "control-barrier-functions",
  "control-lyapunov-functions",
  "control-structure-design",
  "controllability",
  "controller-realization",
  "convex-optimization",
  "cost-functions",
  "covariance-tuning",
  "current-observers",
  "data-association",
  "ddp-and-ilqr",
  "deadbeat-control",
  "decoupling-control",
  "describing-functions",
  "difference-equations",
  "differential-equations",
  "digital-control",
  "dijkstra-s-algorithm",
  "direct-adaptive-control",
  "direct-z-plane-design",
  "discrete-equivalents",
  "discrete-models-with-delays",
  "discrete-time",
  "discrete-time-simulation",
  "discrete-time-state-space",
  "discrete-transfer-functions",
  "distributed-control-systems",
  "disturbance-observers",
  "dual-control",
  "dynamic-inversion",
  "dynamic-programming",
  "dynamic-programming-algorithms",
  "electrical-models",
  "embedded-implementation",
  "emulation-design",
  "environmental-constraints",
  "equivalent-gains",
  "event-handling",
  "explicit-mpc",
  "extended-kalman-filter",
  "extremum-seeking",
  "fast-mpc-methods",
  "feedback-control",
  "feedback-linearization",
  "feedforward-control",
  "first-order-and-fractional-holds",
  "first-principles-modeling",
  "formal-verification",
  "formation-control",
  "frequency-domain-analysis",
  "full-state-feedback",
  "fuzzy-control",
  "gain-and-alignment-calibration",
  "gain-margin",
  "gain-scheduling",
  "generalized-predictive-control",
  "genetic-algorithms",
  "global-stability",
  "graph-theoretic-control",
  "h-infinity-control",
  "h-infinity-filters",
  "hamilton-jacobi-bellman",
  "hardware-in-the-loop",
  "high-gain-and-sliding-mode-observers",
  "holonomic-systems",
  "hybrid-control",
  "hybrid-mpc",
  "hybrid-systems",
  "identification-experiment-design",
  "impulse-input",
  "imu-gps-and-camera-fusion",
  "indirect-adaptive-control",
  "industrial-mpc",
  "information-filters",
  "input-constraints",
  "input-output-stability",
  "input-to-state-stability",
  "integral-action-and-anti-windup",
  "integral-state-augmentation",
  "intersample-ripple",
  "invariant-sets",
  "inverse-nonlinearities",
  "iterative-learning-control",
  "jury-tests",
  "kalman-bucy-filter",
  "kalman-filter",
  "kalman-observers",
  "laplace-transforms",
  "large-scale-system-control",
  "lead-lag-compensation",
  "leader-follower-control",
  "least-squares-identification",
  "lfts",
  "limit-cycles-and-dither",
  "linear-algebra",
  "linear-matrix-inequalities",
  "linear-mpc",
  "linear-state-space",
  "linearization",
  "local-stability",
  "loop-shaping",
  "lqg",
  "lqr",
  "luenberger-observers",
  "lyapunov-stability",
  "mapping",
  "matrix-exponential-discretization",
  "maximum-likelihood-identification",
  "mechanical-models",
  "mhe",
  "mimo-control",
  "minimum-realization",
  "minimum-snap-trajectories",
  "model-predictive-control",
  "model-reduction",
  "modified-z-transform",
  "monte-carlo-simulation",
  "mrac",
  "mu-synthesis",
  "multi-sensor-tracking",
  "multiple-model-estimation",
  "multirate-sampling",
  "neural-network-control",
  "nichols-charts",
  "nonholonomic-systems",
  "nonlinear-mpc",
  "nonlinear-state-space",
  "nonminimum-phase-zeros",
  "nonparametric-identification",
  "nonsynchronous-sampling",
  "numerical-integration",
  "numerical-optimization",
  "nyquist-plots",
  "observability",
  "outlier-rejection",
  "output-feedback",
  "parameter-calibration",
  "parametric-identification",
  "particle-filters",
  "passivity",
  "performance",
  "perturbation-methods",
  "phase-margin",
  "phase-plane-analysis",
  "pid-control",
  "pole-placement",
  "pole-zero-plots",
  "pontryagin-s-maximum-principle",
  "power-system-models",
  "precision-motion-models",
  "prediction-observers",
  "prm",
  "probability-and-stochastic-processes",
  "process-control-models",
  "pulse-transfer-functions",
  "quadratic-programming",
  "quantization",
  "reachability-analysis",
  "real-time-parameter-estimation",
  "recursive-least-squares",
  "reduced-order-observers",
  "redundant-fusion",
  "redundant-systems",
  "reinforcement-learning",
  "relative-gain-array",
  "relay-feedback",
  "riccati-equations",
  "robotics-and-vehicle-models",
  "robust-adaptive-control",
  "robust-mpc",
  "robust-performance",
  "robust-stability",
  "robust-stability-margins",
  "root-locus",
  "round-off-and-word-length",
  "routh-hurwitz-tests",
  "rrt",
  "safety-constraints",
  "sample-rate-selection",
  "sampled-data-models",
  "sampling-and-reconstruction",
  "saturation-and-rate-limits",
  "self-tuning-regulators",
  "sensitivity",
  "sensitivity-functions",
  "separation-principle",
  "sigma-point-filters",
  "signal-flow-graphs",
  "signal-flow-views",
  "similarity-transformations",
  "simulation-software",
  "sine-input",
  "singular-perturbations",
  "singular-value-analysis",
  "slam-style-workflows",
  "sliding-mode-control",
  "small-gain-reasoning",
  "smoothers",
  "spectral-density-analysis",
  "square-root-filters",
  "state-command-structures",
  "state-constraints",
  "state-observers",
  "state-space",
  "steady-state-accuracy",
  "step-input",
  "stochastic-differential-equations",
  "stochastic-mpc",
  "stochastic-optimal-control",
  "stochastic-state-models",
  "structured-singular-value",
  "subspace-identification",
  "swarm-control",
  "system-identification",
  "target-tracking",
  "terminal-constraints",
  "time-delay-systems",
  "time-domain-analysis",
  "time-optimal-servos",
  "trajectory-generation",
  "trajectory-optimization",
  "trajectory-tracking",
  "transfer-functions",
  "tube-mpc",
  "u-d-filters",
  "uncertainty-models",
  "unknown-input-observers",
  "wiener-filtering",
  "z-plane-geometry",
  "z-transform-methods",
  "zero-order-hold",
] as const

export type TopicSlug = (typeof topics)[number]

export type TopicSection = {
  id: string
  title: string
  level: 2 | 3
}

export async function getTopicSlugs(): Promise<string[]> {
  return [...topics]
}

export function isTopicSlug(slug: string): slug is TopicSlug {
  return (topics as readonly string[]).includes(slug)
}

function hasTopicContent(slug: string): slug is keyof typeof topicContent {
  return slug in topicContent
}

export async function getTopicModule(slug: string): Promise<TopicMdxModule | null> {
  if (!hasTopicContent(slug)) {
    return null
  }

  return topicContent[slug]()
}

export async function getTopicMetadata(slug: string) {
  const module = await getTopicModule(slug)

  if (!module) {
    return null
  }

  return {
    title: module.frontmatter?.title || slug.replace(/-/g, " "),
    description: module.frontmatter?.description || "",
    category: module.frontmatter?.category,
    branch: module.frontmatter?.branch,
  }
}

export async function getTopicSections(slug: string): Promise<TopicSection[]> {
  if (!hasTopicContent(slug)) {
    return []
  }

  try {
    const file = await readFile(path.join(process.cwd(), "content", "topics", `${slug}.mdx`), "utf8")
    const content = file.replace(/^---[\s\S]*?---\s*/, "")
    const sections: TopicSection[] = []
    const seen = new Map<string, number>()

    for (const line of content.split("\n")) {
      const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line)

      if (!match) {
        continue
      }

      const title = match[2].replace(/\s+#$/, "").trim()
      const baseId = slugifyHeading(title)
      const count = seen.get(baseId) ?? 0
      seen.set(baseId, count + 1)

      sections.push({
        id: count === 0 ? baseId : `${baseId}-${count + 1}`,
        title,
        level: match[1].length as 2 | 3,
      })
    }

    return sections
  } catch {
    return []
  }
}
