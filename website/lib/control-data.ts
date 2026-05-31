export type Topic = { term: string; description: string }
export type Section = { title: string; topics: Topic[] }
export type Branch = {
  id: string
  number: string
  title: string
  tagline: string
  blurb: string
  sections: Section[]
}

export const branches: Branch[] = [
  {
    id: "core",
    number: "01",
    title: "Core Feedback Concepts",
    tagline: "The loop",
    blurb:
      "How systems sense, decide, and act — and the domains and math used to describe them.",
    sections: [
      {
        title: "Feedback & Feedforward",
        topics: [
          {
            term: "Feedback control",
            description: "Closes the loop by measuring behavior and correcting error.",
          },
          {
            term: "Feedforward control",
            description: "Acts from a model or known command before error appears.",
          },
          {
            term: "Full-state feedback",
            description: "Uses the entire state vector, often as u = -Kx, when states are measured or estimated.",
          },
          {
            term: "Output feedback",
            description: "Uses measured outputs directly or through an observer.",
          },
        ],
      },
      {
        title: "Domains & Representations",
        topics: [
          {
            term: "Continuous time",
            description: "Models with differential equations such as dx/dt = f(x, u).",
          },
          {
            term: "Discrete time",
            description: "Sampled updates such as x[k+1] = f(x[k], u[k]).",
          },
          {
            term: "Time-domain analysis",
            description: "Transients, step/impulse response, rise time, settling time, overshoot, steady-state error.",
          },
          {
            term: "Frequency-domain analysis",
            description: "Gain, phase, bandwidth, resonances, and robustness via transfer functions.",
          },
          {
            term: "Laplace transforms",
            description: "Connect differential-equation models to transfer functions and classical design tools.",
          },
          {
            term: "C2D & D2C conversion",
            description: "Translate models between continuous and discrete representations for sampled-data control.",
          },
        ],
      },
      {
        title: "Mathematical Foundations",
        topics: [
          {
            term: "Linear algebra",
            description: "Underpins state-space models, controllability, observability, pole placement, model reduction.",
          },
          {
            term: "Differential equations",
            description: "Describe continuous-time plant dynamics and closed-loop behavior.",
          },
          {
            term: "Convex optimization",
            description: "Supports many MPC, estimation, and robust-control formulations.",
          },
          {
            term: "Dynamic programming",
            description: "Connects optimal control, HJB equations, value functions, and reinforcement learning.",
          },
          {
            term: "Riccati equations",
            description: "Appear in LQR, LQG, Kalman filtering, and finite-horizon optimal control.",
          },
          {
            term: "Quadratic programming",
            description: "Standard online optimization form for linear MPC and control-barrier-function controllers.",
          },
        ],
      },
    ],
  },
  {
    id: "methods",
    number: "02",
    title: "Control Methods",
    tagline: "Choose a controller",
    blurb: "Eight families of controllers, from PID to robust H-infinity synthesis.",
    sections: [
      {
        title: "Linear",
        topics: [
          { term: "PID control", description: "Combines proportional, integral, and derivative action for simple, effective feedback." },
          { term: "Integral action & anti-windup", description: "Improves steady-state tracking while limiting integrator problems when actuators saturate." },
          { term: "Lead-lag compensation", description: "Shapes transient response and steady-state accuracy with phase-lead and phase-lag networks." },
          { term: "Full-state feedback", description: "Places closed-loop poles through a gain matrix K." },
          { term: "Pole placement", description: "Assigns closed-loop eigenvalues directly when the model is controllable." },
          { term: "LQR", description: "Linear Quadratic Regulator minimizes a quadratic state and input cost for optimal state feedback." },
          { term: "LQG", description: "Linear Quadratic Gaussian control combines LQR with Kalman filtering for noisy output feedback." },
          { term: "H-infinity control", description: "Targets worst-case disturbance attenuation and robustness for linear plants." },
          { term: "Loop shaping", description: "Designs open-loop gain and phase to meet bandwidth, tracking, noise, and robustness targets." },
        ],
      },
      {
        title: "Nonlinear",
        topics: [
          { term: "Gain scheduling", description: "Blends or switches controllers across operating points." },
          { term: "Backstepping", description: "Recursively designs controllers for strict-feedback nonlinear systems." },
          { term: "Feedback linearization", description: "Cancels nonlinearities through feedback to obtain a simpler closed-loop form." },
          { term: "Dynamic inversion", description: "Uses a model inverse to command nonlinear systems." },
          { term: "Sliding mode control", description: "Drives trajectories onto a switching surface; robust to matched uncertainty." },
          { term: "Bang-bang control", description: "Switches between extreme control values, often in minimum-time problems." },
        ],
      },
      {
        title: "Multi-Agent",
        topics: [
          { term: "Graph-theoretic control", description: "Models agents and communication links as nodes and edges." },
          { term: "Consensus control", description: "Drives distributed agents toward agreement using local communication." },
          { term: "Formation control", description: "Regulates relative positions, distances, or bearings among agents." },
          { term: "Leader-follower control", description: "Coordinates agents around one or more reference agents." },
          { term: "Swarm control", description: "Produces group behavior from decentralized local rules." },
        ],
      },
      {
        title: "Optimal",
        topics: [
          { term: "Pontryagin's Maximum Principle", description: "Converts optimal control into necessary conditions with a Hamiltonian and costates." },
          { term: "Hamilton-Jacobi-Bellman", description: "Expresses the dynamic-programming condition for optimal feedback control." },
          { term: "LQR", description: "The canonical linear-quadratic optimal controller." },
          { term: "DDP & iLQR", description: "Approximate nonlinear optimal control through local quadratic models." },
          { term: "Collocation & shooting", description: "Transcribe continuous trajectory optimization into finite-dimensional nonlinear programs." },
          { term: "Bang-bang solutions", description: "Arise when the optimal input saturates at its limits." },
        ],
      },
      {
        title: "Predictive",
        topics: [
          { term: "Model Predictive Control", description: "Repeatedly solves a finite-horizon optimization using a model of the plant." },
          { term: "Linear MPC", description: "Uses linear models and often convex quadratic programs." },
          { term: "Nonlinear MPC", description: "Handles nonlinear dynamics or constraints through nonlinear programming." },
          { term: "Robust MPC", description: "Accounts for model uncertainty and disturbances." },
          { term: "Tube MPC", description: "Keeps the uncertain state inside a planned invariant tube around a nominal trajectory." },
          { term: "Stochastic MPC", description: "Treats uncertainty probabilistically via chance constraints or expected costs." },
          { term: "Explicit MPC", description: "Precomputes piecewise-affine control laws for fast online evaluation." },
          { term: "Constraint handling", description: "Input, state, and safety limits can be represented directly in the optimization." },
        ],
      },
      {
        title: "Intelligent",
        topics: [
          { term: "Fuzzy control", description: "Uses membership functions and rule bases to encode heuristic behavior." },
          { term: "Reinforcement learning", description: "Learns policies from reward through exploration and exploitation." },
          { term: "Adaptive dynamic programming", description: "Approximates dynamic programming where exact HJB solutions are intractable." },
          { term: "Neural network control", description: "Uses learned approximators for policies, dynamics, value functions, or compensation." },
          { term: "Genetic algorithms", description: "Tune controller parameters or search design spaces with evolutionary optimization." },
        ],
      },
      {
        title: "Adaptive",
        topics: [
          { term: "MRAC", description: "Model Reference Adaptive Control adapts parameters so the plant follows a reference model." },
          { term: "Direct adaptive control", description: "Adjusts controller parameters directly from tracking error." },
          { term: "Indirect adaptive control", description: "Estimates plant parameters first, then updates the controller from the model." },
          { term: "Self-tuning regulators", description: "Repeatedly identify a model and redesign controller gains online." },
          { term: "Extremum seeking", description: "Optimizes an unknown objective online by perturbing inputs and following gradients." },
          { term: "Iterative Learning Control", description: "Improves repeated-task tracking from trial to trial." },
        ],
      },
      {
        title: "Robust",
        topics: [
          { term: "ADRC", description: "Active Disturbance Rejection Control estimates and compensates total disturbances in real time." },
          { term: "H-infinity control", description: "Minimizes worst-case disturbance amplification." },
          { term: "Mu-synthesis", description: "Handles structured uncertainty in robust-control design." },
          { term: "Small-gain reasoning", description: "Bounds feedback interconnections by limiting loop gain under uncertainty." },
          { term: "LFTs", description: "Linear fractional transformations organize uncertain plants for robust analysis and synthesis." },
          { term: "Robust stability margins", description: "Connect classical frequency design to robust-control goals." },
        ],
      },
    ],
  },
  {
    id: "planning",
    number: "03",
    title: "Planning",
    tagline: "Generate references & paths",
    blurb: "Reference inputs, trajectory optimization, constraints, and path-planning algorithms.",
    sections: [
      {
        title: "Reference Inputs",
        topics: [
          { term: "Step input", description: "Tests tracking, settling behavior, overshoot, and steady-state error." },
          { term: "Impulse input", description: "Reveals natural dynamics and impulse response." },
          { term: "Sine input", description: "Probes frequency response and periodic tracking." },
        ],
      },
      {
        title: "Optimal Planning",
        topics: [
          { term: "Cost functions", description: "Encode objectives such as time, distance, energy, comfort, risk, or tracking error." },
          { term: "Trajectory optimization", description: "Searches over state and input histories that satisfy dynamics and minimize cost." },
          { term: "Trajectory generation", description: "Creates dynamically feasible reference states, velocities, and accelerations." },
          { term: "Minimum-snap trajectories", description: "Common in aerial robotics and systems with smoothness requirements." },
        ],
      },
      {
        title: "Constraints",
        topics: [
          { term: "Input constraints", description: "Bound actuator effort, rate, torque, force, voltage, acceleration, or steering." },
          { term: "State constraints", description: "Bound position, velocity, temperature, pressure, charge, or operating regions." },
          { term: "Environmental constraints", description: "Encode obstacles, keep-out zones, and workspace limits." },
          { term: "Collision-avoidance", description: "Preserve separation from obstacles, humans, vehicles, or other agents." },
          { term: "Terminal constraints", description: "Enforce desired final states or invariant terminal sets in predictive planning." },
        ],
      },
      {
        title: "Motion Planning",
        topics: [
          { term: "Holonomic systems", description: "Can move freely in all configuration directions." },
          { term: "Nonholonomic systems", description: "Have velocity constraints, such as car-like robots." },
          { term: "Redundant systems", description: "Have more degrees of freedom than needed for the task." },
        ],
      },
      {
        title: "Path Planning Algorithms",
        topics: [
          { term: "RRT", description: "Rapidly-exploring Random Tree samples configuration space for high-dimensional paths." },
          { term: "RRT*", description: "Extends RRT with asymptotic optimality." },
          { term: "PRM", description: "Probabilistic Roadmap builds a reusable graph of sampled configurations." },
          { term: "Dijkstra's algorithm", description: "Finds shortest paths on weighted graphs without a heuristic." },
          { term: "A* (A-star)", description: "Searches graphs with a heuristic to find low-cost paths." },
        ],
      },
    ],
  },
  {
    id: "estimation",
    number: "04",
    title: "State Estimation",
    tagline: "When the state is hidden",
    blurb: "Filters, observers, calibration, mapping, tracking, and sensor fusion.",
    sections: [
      {
        title: "Filtering Methods",
        topics: [
          { term: "Kalman filter", description: "Estimates linear Gaussian systems optimally in the least-squares sense." },
          { term: "Extended Kalman filter", description: "Linearizes nonlinear dynamics and measurement models locally." },
          { term: "Sigma-point filters", description: "The unscented Kalman filter propagates selected sample points through nonlinear models." },
          { term: "Particle filters", description: "Approximate arbitrary state distributions with weighted samples." },
          { term: "Smoothers", description: "Fixed-lag or RTS smoothers estimate past states using later measurements." },
          { term: "Covariance tuning", description: "Consistency checks keep filter uncertainty aligned with observed residuals." },
        ],
      },
      {
        title: "Observers",
        topics: [
          { term: "State observers", description: "Reconstruct unmeasured states from models and output measurements." },
          { term: "Luenberger observers", description: "Use linear correction dynamics." },
          { term: "Disturbance observers", description: "Estimate unmeasured disturbances for compensation." },
          { term: "Kalman observers", description: "Combine prediction and correction with explicit noise statistics." },
          { term: "Unknown-input observers", description: "Estimate states when some disturbances or inputs are not measured." },
          { term: "High-gain & sliding-mode observers", description: "Common nonlinear observer families." },
        ],
      },
      {
        title: "Moving Horizon Estimation",
        topics: [
          { term: "MHE", description: "Estimates states and parameters by solving a constrained optimization over a recent time window." },
        ],
      },
      {
        title: "Calibration",
        topics: [
          { term: "Bias calibration", description: "Estimates offsets such as yp = y + b." },
          { term: "Gain & alignment calibration", description: "Estimates sensor scale factors and mounting geometry." },
          { term: "Parameter calibration", description: "Fits model coefficients from measured data." },
        ],
      },
      {
        title: "Mapping",
        topics: [
          { term: "Mapping", description: "Estimates environmental structure for navigation, localization, and planning." },
          { term: "SLAM-style workflows", description: "Combine mapping with state estimation when position and environment are uncertain." },
        ],
      },
      {
        title: "Tracking",
        topics: [
          { term: "Target tracking", description: "Estimates moving object states from noisy measurements." },
          { term: "Trajectory tracking", description: "Estimates deviation from a desired path or reference." },
          { term: "Multi-sensor tracking", description: "Fuses detections from multiple measurement sources." },
          { term: "Data association", description: "Matches measurements to tracks in multi-target tracking." },
        ],
      },
      {
        title: "Sensor Fusion",
        topics: [
          { term: "IMU, GPS & camera fusion", description: "Combines inertial, satellite, and visual measurements for pose and navigation." },
          { term: "Redundant fusion", description: "Improves reliability and fault tolerance." },
          { term: "Outlier rejection", description: "Fault detection prevents bad measurements from corrupting estimates." },
          { term: "Bayesian filtering", description: "A common probabilistic foundation for Kalman, sigma-point, and particle filters." },
        ],
      },
    ],
  },
  {
    id: "modeling",
    number: "05",
    title: "Modeling & Simulation",
    tagline: "Describe the plant",
    blurb: "State-space models, system representations, model development, and simulation.",
    sections: [
      {
        title: "State-Space Models",
        topics: [
          { term: "Linear state space", description: "x_dot = A x + B u, y = C x + D u." },
          { term: "Nonlinear state space", description: "dx/dt = f(x, u), y = g(x, u)." },
          { term: "Hybrid systems", description: "Combine continuous dynamics with discrete modes, events, or logic." },
          { term: "Time-delay systems", description: "Model transport, communication, and computation delays that can destabilize loops." },
          { term: "Saturation & rate limits", description: "Capture actuator limits that strongly affect closed-loop performance." },
        ],
      },
      {
        title: "System Representations",
        topics: [
          { term: "Transfer functions", description: "Represent input-output dynamics in the Laplace domain." },
          { term: "Block diagrams", description: "Show interconnections among plants, controllers, summing junctions, sensors, feedback." },
          { term: "Signal-flow views", description: "Clarify feedback, feedforward, disturbances, and noise." },
          { term: "Uncertainty models", description: "Describe parametric uncertainty, unmodeled dynamics, disturbances, and sensor noise." },
          { term: "LFTs", description: "Separate nominal dynamics from uncertainty blocks for robust-control analysis." },
        ],
      },
      {
        title: "Model Development",
        topics: [
          { term: "First-principles modeling", description: "Derives dynamics from physics: Newton's laws, energy balances, circuits, fluids." },
          { term: "System identification", description: "Estimates models from input-output data." },
          { term: "Linearization", description: "Approximates nonlinear dynamics near an equilibrium or trajectory." },
          { term: "Minimum realization", description: "Removes uncontrollable or unobservable states while preserving behavior." },
          { term: "Model reduction", description: "Lowers model order for analysis, synthesis, and real-time simulation." },
          { term: "Balanced truncation", description: "Reduces stable linear models while approximately preserving behavior." },
        ],
      },
      {
        title: "Simulation",
        topics: [
          { term: "Numerical integration", description: "Solves ordinary and differential-algebraic equations." },
          { term: "Event handling", description: "Captures impacts, switches, guards, saturations, and mode changes." },
          { term: "Co-simulation", description: "Connects tools or subsystems using different solvers, time steps, or languages." },
          { term: "Simulation software", description: "Tools such as Simulink, Modelica, and domain-specific simulators." },
          { term: "Closed-loop simulation", description: "Validates controller behavior before deployment." },
          { term: "Monte Carlo simulation", description: "Tests performance across uncertainty, noise, and randomized initial conditions." },
          { term: "Hardware-in-the-loop", description: "Exercises controller implementation against real-time plant models." },
        ],
      },
    ],
  },
  {
    id: "analysis",
    number: "06",
    title: "System Analysis",
    tagline: "Stability & performance",
    blurb: "Stability, margins, frequency-domain tools, system properties, and safety-critical analysis.",
    sections: [
      {
        title: "Stability",
        topics: [
          { term: "Lyapunov stability", description: "Proves behavior using energy-like functions." },
          { term: "Local stability", description: "Describes behavior near an equilibrium." },
          { term: "Global stability", description: "Describes behavior over a broad state space." },
          { term: "Input-to-state stability", description: "Connects bounded inputs and disturbances to bounded state behavior." },
          { term: "Phase-plane analysis", description: "Visualizes trajectories, equilibria, and limit cycles in two-state systems." },
        ],
      },
      {
        title: "Margins & Robustness",
        topics: [
          { term: "Gain margin", description: "Measures allowable gain change before instability." },
          { term: "Phase margin", description: "Measures allowable phase lag before instability." },
          { term: "Robust stability", description: "Studies whether stability survives uncertainty." },
          { term: "Robust performance", description: "Studies whether performance targets survive uncertainty." },
        ],
      },
      {
        title: "Frequency-Domain Analysis",
        topics: [
          { term: "Bode plots", description: "Show magnitude and phase versus frequency." },
          { term: "Nyquist plots", description: "Determine closed-loop stability from open-loop encirclements." },
          { term: "Nichols charts", description: "Combine gain and phase for frequency-domain design." },
          { term: "Sensitivity functions", description: "Describe disturbance rejection, noise amplification, and tracking limitations." },
        ],
      },
      {
        title: "Root Locus & Pole-Zero",
        topics: [
          { term: "Root locus", description: "Tracks closed-loop pole movement as gain changes." },
          { term: "Pole-zero plots", description: "Reveal modes, damping, zeros, cancellations, and nonminimum-phase behavior." },
          { term: "Nonminimum-phase zeros", description: "Limit tracking speed and transient performance." },
        ],
      },
      {
        title: "System Properties",
        topics: [
          { term: "Controllability", description: "Tests whether inputs can move the state through the reachable space." },
          { term: "Observability", description: "Tests whether outputs contain enough information to recover the state." },
          { term: "Passivity", description: "Uses energy exchange to reason about stability and interconnections." },
          { term: "Sensitivity", description: "Describes how references, disturbances, and modeling errors propagate through loops." },
          { term: "Performance", description: "Tracking error, disturbance rejection, noise rejection, bandwidth, overshoot, control effort." },
        ],
      },
      {
        title: "Safety-Critical Analysis",
        topics: [
          { term: "Control Lyapunov functions", description: "Encode stabilizing objectives as inequalities." },
          { term: "Control barrier functions", description: "Encode forward-invariant safe sets, often enforced via quadratic programs." },
          { term: "Reachability analysis", description: "Estimates states reachable under dynamics, controls, and disturbances." },
          { term: "Invariant sets", description: "Define regions where trajectories remain once they enter." },
          { term: "Formal verification", description: "Checks whether closed-loop behavior satisfies safety or temporal-logic requirements." },
        ],
      },
    ],
  },
  {
    id: "first-principles",
    number: "07",
    title: "First Principles & Classical Tools",
    tagline: "Physics to design",
    blurb: "Connect physical models, diagrams, and approximations to controller design.",
    sections: [
      {
        title: "Foundational Tools",
        topics: [
          { term: "Mechanical models", description: "Masses, springs, dampers, pendulums, vehicles, and robotics." },
          { term: "Electrical models", description: "Circuits, motors, power converters, and sensors." },
          { term: "Process-control models", description: "Tanks, reactors, heat exchangers, distillation columns, and transport delays." },
          { term: "Robotics & vehicle models", description: "Kinematics, rigid-body dynamics, tire/ground interaction, and actuator dynamics." },
          { term: "Linearization", description: "Connects nonlinear first-principles models to linear design workflows." },
          { term: "Transfer functions", description: "Connect physical equations to classical feedback design." },
          { term: "Block diagrams", description: "Organize plant, controller, actuator, sensor, reference, disturbance, and noise paths." },
          { term: "Safety constraints", description: "Define forbidden states, operating envelopes, and acceptable risk." },
        ],
      },
    ],
  },
]

export type Roadmap = { title: string; steps: string[] }

export const roadmaps: Roadmap[] = [
  {
    title: "Beginner Classical Path",
    steps: [
      "First-principles modeling",
      "Transfer functions & block diagrams",
      "Step, impulse, and sine responses",
      "PID control",
      "Root locus, Bode, Nyquist & stability margins",
      "Lead-lag compensation & loop shaping",
    ],
  },
  {
    title: "State-Space Path",
    steps: [
      "Linear state-space models",
      "Controllability & observability",
      "Full-state feedback & pole placement",
      "LQR, Riccati equations & LQG",
      "Observers, Kalman filtering & separation principle",
      "MPC, constrained control & safety filters",
    ],
  },
  {
    title: "Robotics & Autonomy Path",
    steps: [
      "Nonlinear state-space models",
      "Motion planning: holonomic & nonholonomic",
      "RRT and A* path planning",
      "PRM, trajectory optimization & feasible planning",
      "Sensor fusion: IMU, GPS & camera",
      "Mapping, tracking, MHE & safety constraints",
    ],
  },
  {
    title: "Advanced Control Path",
    steps: [
      "Lyapunov stability",
      "Nonlinear control: feedback linearization, backstepping, sliding mode",
      "Optimal control: PMP, HJB, DDP & iLQR",
      "Robust control: H-infinity, mu-synthesis, ADRC, LFTs",
      "Adaptive control: MRAC, extremum seeking, ILC",
      "Multi-agent, safety-critical & learning-based control",
    ],
  },
]

export type Reference = { label: string; href: string; note: string }

export const references: Reference[] = [
  {
    label: "Feedback Systems (Åström & Murray)",
    href: "https://fbsbook.org/",
    note: "Open textbook on modeling, feedback, stability, frequency response, state space, robustness.",
  },
  {
    label: "MIT OCW 6.241J Dynamic Systems & Control",
    href: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/",
    note: "Graduate notes on feedback interconnections, stability, performance, robust control.",
  },
  {
    label: "MIT Underactuated Robotics",
    href: "https://underactuated.mit.edu/",
    note: "Nonlinear dynamics, LQR, trajectory optimization, planning, Lyapunov analysis.",
  },
  {
    label: "Stanford EE363 Linear Dynamical Systems",
    href: "https://ee363.stanford.edu/archive/index.html",
    note: "State-space models, controllability, observability, least squares, estimation.",
  },
  {
    label: "MPC: Theory, Computation & Design",
    href: "https://sites.engineering.ucsb.edu/~jbraw/mpc/",
    note: "Open MPC textbook by Rawlings, Mayne & Diehl.",
  },
  {
    label: "python-control",
    href: "https://python-control.readthedocs.io/",
    note: "Python library for classical and state-space control analysis and design.",
  },
  {
    label: "Drake",
    href: "https://drake.mit.edu/",
    note: "Model-based robotics toolbox: simulation, optimization, planning, control.",
  },
  {
    label: "CasADi",
    href: "https://web.casadi.org/",
    note: "Symbolic framework for nonlinear optimization and optimal control.",
  },
]
