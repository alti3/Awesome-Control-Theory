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
          {
            term: "Separation principle",
            description: "Designs state feedback and an observer separately for many linear output-feedback problems.",
          },
          {
            term: "Compensator design",
            description: "Combines controller and observer dynamics when the full state is not directly measured.",
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
          {
            term: "Probability & stochastic processes",
            description: "Support Kalman filtering, stochastic control, random disturbances, covariance propagation, and spectral-density models.",
          },
          {
            term: "Numerical optimization",
            description: "Supports direct optimal control, trajectory optimization, constrained MPC, parameter estimation, and design tuning.",
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
    blurb: "Controller families from PID and digital control to MIMO, MPC, adaptive, and robust synthesis.",
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
          { term: "Describing functions", description: "Approximate nonlinear elements with amplitude-dependent gains for frequency-domain analysis." },
          { term: "Equivalent gains", description: "Approximate nonlinear behavior with local or signal-dependent linear gains." },
          { term: "Circle criterion", description: "Gives absolute-stability tests for feedback systems with sector-bounded nonlinearities." },
          { term: "Inverse nonlinearities", description: "Compensate known nonlinear effects through model inversion or large-signal linearization." },
          { term: "Time-optimal servos", description: "Exploit actuator limits and switching structures for fast point-to-point motion." },
          { term: "Perturbation methods", description: "Analyze systems with weak nonlinearities or small parameters." },
          { term: "Averaging", description: "Approximates behavior when fast oscillations or adaptation dynamics can be averaged." },
          { term: "Singular perturbations", description: "Separate fast and slow dynamics for analysis and controller design." },
          { term: "Input-output stability", description: "Studies boundedness and gain from inputs to outputs in nonlinear feedback systems." },
          { term: "Passivity", description: "Uses energy exchange to reason about nonlinear feedback stability and interconnections." },
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
          { term: "Calculus of variations", description: "Gives Euler-Lagrange-style necessary conditions for optimal trajectories." },
          { term: "Dynamic-programming algorithms", description: "Solve shortest-path, finite-horizon, infinite-horizon, and imperfect-information problems." },
          { term: "Stochastic optimal control", description: "Handles dynamics, measurements, or disturbances modeled probabilistically." },
          { term: "Dual control", description: "Accounts for inputs that both control the plant and excite it to learn uncertain parameters." },
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
          { term: "Generalized Predictive Control", description: "Uses input-output models and receding-horizon design for predictive control." },
          { term: "Fast MPC methods", description: "Exploit structure, warm starts, explicit laws, or tailored solvers for real-time deadlines." },
          { term: "Hybrid MPC", description: "Handles systems with continuous dynamics and discrete modes or logic." },
          { term: "Industrial MPC", description: "Emphasizes model maintenance, estimator integration, constraint management, and reliable optimization." },
        ],
      },
      {
        title: "Digital & Sampled-Data",
        topics: [
          { term: "Digital control", description: "Designs controllers that run on sampled measurements and update actuators at discrete instants." },
          { term: "Z-transform methods", description: "Analyze discrete-time transfer functions and sampled systems." },
          { term: "Difference equations", description: "Describe recursive discrete-time dynamics and digital-filter realizations directly." },
          { term: "Pulse transfer functions", description: "Represent sampled-data input-output behavior at the sampling instants." },
          { term: "Modified z-transform", description: "Helps analyze delayed and intersample behavior in sampled-data systems." },
          { term: "Bilinear & w-transform methods", description: "Map discrete-time design questions into continuous-like algebraic forms." },
          { term: "Sampled-data models", description: "Describe continuous plants, samplers, zero-order holds, and digital controllers together." },
          { term: "Sampling & reconstruction", description: "Explain spectra, aliasing, and how sampled signals become continuous actuator commands." },
          { term: "Zero-order hold", description: "Models digital-to-analog actuation held constant between samples." },
          { term: "First-order & fractional holds", description: "Model alternate data extrapolation assumptions between sampling instants." },
          { term: "Discrete equivalents", description: "Convert continuous plants or controllers with numerical integration, zero-pole matching, holds, or equivalent costs." },
          { term: "Emulation design", description: "Discretizes a continuous controller, then checks the sampled closed-loop response." },
          { term: "Direct z-plane design", description: "Designs controllers with z-plane root locus, frequency response, pole placement, or Ragazzini methods." },
          { term: "Deadbeat control", description: "Seeks finite-sample settling while managing actuator effort and robustness." },
          { term: "Sample-rate selection", description: "Balances bandwidth, smoothness, aliasing, computation, noise, and plant uncertainty." },
          { term: "Multirate sampling", description: "Handles sensors, actuators, or controllers that update at different rates." },
          { term: "Nonsynchronous sampling", description: "Accounts for sampled components that update with different phases or clocks." },
          { term: "Intersample ripple", description: "Captures output behavior between sampling instants that purely discrete analysis can miss." },
          { term: "Aliasing", description: "Occurs when sampling makes high-frequency content appear as lower-frequency behavior." },
          { term: "Quantization", description: "Captures finite-resolution effects in sensing, computation, and actuation." },
          { term: "Round-off & word length", description: "Represent finite-precision arithmetic effects in digital controller implementations." },
          { term: "Limit cycles & dither", description: "Describe finite-word-length oscillations and deliberate noise used to reduce them." },
          { term: "Computation delay", description: "Represents latency from sensing, estimation, optimization, and actuator updates." },
          { term: "A/D & D/A conversion", description: "Connect sensors, actuators, computers, and continuous plants in practical digital loops." },
          { term: "Controller realization", description: "Covers direct, parallel, cascade, factorized, and state-space implementations." },
          { term: "Embedded implementation", description: "Covers processor interfaces, scheduling, reliability, and integration with plant hardware." },
          { term: "Distributed control systems", description: "Coordinate digital controllers over communication links and industrial computer networks." },
          { term: "Hybrid control", description: "Combines continuous dynamics with switching, events, logic, or mode-dependent controllers." },
        ],
      },
      {
        title: "MIMO & Multivariable",
        topics: [
          { term: "MIMO control", description: "Handles plants with multiple inputs and outputs where loops can interact strongly." },
          { term: "Large-scale system control", description: "Uses decomposition, hierarchy, multilayer coordination, and optimization for large plants." },
          { term: "Singular-value analysis", description: "Studies multivariable gain, directionality, and robustness across frequency." },
          { term: "Relative gain array", description: "Evaluates input-output pairings and control-structure choices." },
          { term: "Decoupling control", description: "Reduces cross-channel interactions when the model supports it." },
          { term: "Control structure design", description: "Chooses manipulated variables, controlled variables, measurements, and loop pairings." },
          { term: "Linear Matrix Inequalities", description: "Express robust, optimal, and constrained control conditions as convex feasibility problems." },
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
          { term: "Auto-tuning", description: "Identifies useful process information online to tune controllers such as PID loops." },
          { term: "Relay feedback", description: "Excites controlled oscillations to infer process dynamics for tuning." },
          { term: "Real-time parameter estimation", description: "Updates model parameters from streaming data during operation." },
          { term: "Robust adaptive control", description: "Adds safeguards so adaptation remains stable under unmodeled dynamics, noise, and disturbances." },
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
          { term: "Robust performance", description: "Verifies both stability and performance under uncertainty." },
          { term: "Structured singular value", description: "Quantifies robustness for structured uncertainty models." },
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
          { term: "Information filters", description: "Represent uncertainty with information matrices, useful in sparse or distributed estimation." },
          { term: "Square-root filters", description: "Propagate covariance factors to improve numerical conditioning." },
          { term: "U-D filters", description: "Use unit upper-triangular and diagonal covariance factors for stable filtering." },
          { term: "H-infinity filters", description: "Estimate states under worst-case disturbance models instead of stochastic assumptions alone." },
          { term: "Kalman-Bucy filter", description: "Continuous-time Kalman filtering for linear systems driven by stochastic models." },
          { term: "Constrained filters", description: "Enforce known bounds or equality constraints on state estimates." },
          { term: "Smoothers", description: "Fixed-lag or RTS smoothers estimate past states using later measurements." },
          { term: "Wiener filtering", description: "Estimates signals from noisy measurements using second-order statistics." },
          { term: "Recursive least squares", description: "Estimates fixed or slowly varying parameters from streaming data." },
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
          { term: "Prediction observers", description: "Form state estimates before the newest sampled measurement is incorporated." },
          { term: "Current observers", description: "Form state estimates after incorporating the newest sampled measurement." },
          { term: "Unknown-input observers", description: "Estimate states when some disturbances or inputs are not measured." },
          { term: "High-gain & sliding-mode observers", description: "Common nonlinear observer families." },
          { term: "Reduced-order observers", description: "Estimate only the unmeasured portion of the state when some states are directly measured." },
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
          { term: "Multiple-model estimation", description: "Runs candidate models or filters in parallel to handle mode changes or uncertain dynamics." },
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
          { term: "Discrete-time state space", description: "Represents sampled dynamics with updates such as x[k+1] = A x[k] + B u[k]." },
          { term: "Matrix-exponential discretization", description: "Computes exact linear sampled models under zero-order-hold assumptions." },
          { term: "Discrete models with delays", description: "Represent sensor, actuator, communication, and computation delays by augmentation." },
          { term: "State-command structures", description: "Connect state feedback and observers to tracking commands instead of only regulation." },
          { term: "Integral state augmentation", description: "Adds integrator states or disturbance estimates to remove steady-state errors." },
          { term: "Time-delay systems", description: "Model transport, communication, and computation delays that can destabilize loops." },
          { term: "Saturation & rate limits", description: "Capture actuator limits that strongly affect closed-loop performance." },
          { term: "Stochastic state models", description: "Include process noise, measurement noise, and random disturbances in continuous or discrete time." },
          { term: "Stochastic differential equations", description: "Model continuous-time dynamics driven by random processes or Wiener-process idealizations." },
        ],
      },
      {
        title: "System Representations",
        topics: [
          { term: "Transfer functions", description: "Represent input-output dynamics in the Laplace domain." },
          { term: "Discrete transfer functions", description: "Represent input-output dynamics in the z-domain." },
          { term: "Block diagrams", description: "Show interconnections among plants, controllers, summing junctions, sensors, feedback." },
          { term: "Signal-flow views", description: "Clarify feedback, feedforward, disturbances, and noise." },
          { term: "Signal-flow graphs", description: "Use node-edge relationships and Mason's gain formula to derive input-output transfer functions." },
          { term: "Uncertainty models", description: "Describe parametric uncertainty, unmodeled dynamics, disturbances, and sensor noise." },
          { term: "LFTs", description: "Separate nominal dynamics from uncertainty blocks for robust-control analysis." },
        ],
      },
      {
        title: "Model Development",
        topics: [
          { term: "First-principles modeling", description: "Derives dynamics from physics: Newton's laws, energy balances, circuits, fluids." },
          { term: "System identification", description: "Estimates models from input-output data." },
          { term: "Nonparametric identification", description: "Estimates responses or spectra without first choosing a low-order parametric model." },
          { term: "Parametric identification", description: "Fits model structures such as transfer functions, state-space models, or regressions." },
          { term: "Black-box identification", description: "Fits dynamics from data when internal physical structure is unknown or abstracted." },
          { term: "Least-squares identification", description: "Estimates model parameters by minimizing squared prediction or output errors." },
          { term: "Recursive least squares", description: "Updates identified parameters online as new measurements arrive." },
          { term: "Maximum-likelihood identification", description: "Chooses parameters that make the measured data most probable under a model." },
          { term: "Subspace identification", description: "Estimates state-space models from input-output data using linear-algebraic projections." },
          { term: "Identification experiment design", description: "Chooses excitation, sampling frequency, scaling, and validation data for control-useful models." },
          { term: "Linearization", description: "Approximates nonlinear dynamics near an equilibrium or trajectory." },
          { term: "Canonical forms", description: "Organize state-space models into standard coordinate representations." },
          { term: "Similarity transformations", description: "Reorganize state variables without changing input-output behavior." },
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
          { term: "Discrete-time simulation", description: "Checks difference-equation, digital-filter, and sampled-data controller behavior." },
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
          { term: "Spectral-density analysis", description: "Describes how stochastic disturbances and noise are distributed across frequency." },
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
        title: "Algebraic Stability Tests",
        topics: [
          { term: "Routh-Hurwitz tests", description: "Determine continuous-time polynomial stability without explicitly computing roots." },
          { term: "Jury tests", description: "Provide algebraic stability checks for discrete-time characteristic polynomials." },
          { term: "Bilinear-transform tests", description: "Map discrete-time characteristic equations into a form where continuous-time tests apply." },
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
          { term: "Steady-state accuracy", description: "Studies final values, error constants, integral action, and reference or disturbance tracking." },
          { term: "z-plane geometry", description: "Maps damping, natural frequency, settling behavior, and stability boundaries into sampled systems." },
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
          { term: "Aerospace & pointing models", description: "Satellite attitude, antenna azimuth, aircraft landing, and servomotor dynamics." },
          { term: "Power-system models", description: "Generator, grid-interconnection, and topology identification examples." },
          { term: "Precision motion models", description: "Flexible structures, disk-drive servos, voice-coil actuators, runout, and amplifier saturation." },
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

export function topicToSlug(term: string) {
  return term
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function getAllTopics() {
  const topics = new Map<
    string,
    Topic & {
      slug: string
      branchId: string
      branchTitle: string
      sectionTitle: string
    }
  >()

  for (const branch of branches) {
    for (const section of branch.sections) {
      for (const topic of section.topics) {
        const slug = topicToSlug(topic.term)

        if (!topics.has(slug)) {
          topics.set(slug, {
            ...topic,
            slug,
            branchId: branch.id,
            branchTitle: branch.title,
            sectionTitle: section.title,
          })
        }
      }
    }
  }

  return Array.from(topics.values())
}

export function getTopicBySlug(slug: string) {
  return getAllTopics().find((topic) => topic.slug === slug)
}

export const roadmaps: Roadmap[] = [
  {
    title: "Beginner Classical Path",
    steps: [
      "First-principles modeling",
      "Transfer functions & block diagrams",
      "Step, impulse, and sine responses",
      "PID control",
      "Root locus, Bode, Nyquist & stability margins",
      "Routh-Hurwitz, Z-transform methods, lead-lag compensation & loop shaping",
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
      "MIMO design, MPC, constrained control & safety filters",
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
    title: "Digital Control Path",
    steps: [
      "Sampling, reconstruction, aliasing & hold devices",
      "Difference equations, z-transforms, pulse transfer functions & z-plane geometry",
      "Discrete equivalents: numerical integration, zero-pole matching & hold equivalents",
      "Digital design: emulation, direct z-plane design, deadbeat control, discrete PID & pole assignment",
      "Sample-rate selection, multirate effects, delays, quantization, round-off, limit cycles & dither",
      "Implementation: A/D, D/A, controller realization, embedded interfaces, reliability & HIL validation",
    ],
  },
  {
    title: "Advanced Control Path",
    steps: [
      "Lyapunov stability",
      "Nonlinear control: feedback linearization, backstepping, sliding mode, passivity",
      "Optimal control: PMP, HJB, dynamic programming, DDP & iLQR",
      "Robust control: H-infinity, mu-synthesis, structured singular values, LFTs",
      "Adaptive control: MRAC, self-tuning, auto-tuning, robust adaptive control",
      "Multi-agent, safety-critical & learning-based control",
    ],
  },
  {
    title: "Stochastic Estimation Path",
    steps: [
      "Probability, stochastic processes & spectral density",
      "Least squares, recursive least squares & Wiener filtering",
      "Discrete-time Kalman filtering",
      "Continuous-time Kalman-Bucy filtering",
      "Square-root, information, constrained & H-infinity filters",
      "EKF, UKF, particle filters, smoothing & multiple-model estimation",
    ],
  },
  {
    title: "MIMO & Robust Design Path",
    steps: [
      "SISO loop shaping, sensitivity & performance limitations",
      "MIMO state-space models, singular values & RGA",
      "Uncertainty models, LFTs & structured singular value analysis",
      "Robust stability and robust performance",
      "H-infinity synthesis, mu-synthesis & LMIs",
      "Control structure design, model reduction & case studies",
    ],
  },
]

export type Reference = { label: string; href: string; note: string }
export type ResourceGroup = { title: string; description: string; resources: Reference[] }

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Textbooks & Learning Resources",
    description: "Canonical books and video resources spanning classical control, digital and sampled-data control, state space, nonlinear systems, MPC, optimal control, stochastic estimation, adaptive control, and robust MIMO design.",
    resources: [
      {
        label: "Feedback Systems: An Introduction for Scientists and Engineers",
        href: "https://fbsbook.org/",
        note: "Karl J. Astrom and Richard M. Murray. Open introduction to feedback, modeling, linear systems, state/output feedback, PID, robustness, and architecture.",
      },
      {
        label: "Feedback Control of Dynamic Systems",
        href: "https://scsolutions.com/publication/feedback-control-of-dynamic-systems-eighth-edition/",
        note: "Gene F. Franklin, J. David Powell, and Abbas Emami-Naeini. Classical and state-space design, root locus, frequency response, digital control, nonlinear systems, and case studies.",
      },
      {
        label: "Digital Control of Dynamic Systems, 3rd ed.",
        href: "https://wright.ecampus.com/digital-control-dynamic-systems-3rd/bk/9780201820546",
        note: "Gene F. Franklin, J. David Powell, and Michael L. Workman. Sampled-data modeling, z-transform analysis, discrete equivalents, transform and state-space design, quantization, sample-rate selection, identification, nonlinear effects, and a disk-drive servo case study.",
      },
      {
        label: "Applied Digital Control: Theory, Design and Implementation",
        href: "https://books.google.com/books/about/Applied_Digital_Control.html?id=Z_AuDQAAQBAJ",
        note: "J. R. Leigh. Sampling, z-transform methods, root locus and frequency-response design, digital algorithms, sensors and converters, implementation case histories, large-scale systems, distributed computer control, adaptive control, and robust control.",
      },
      {
        label: "Digital Control System Analysis & Design, Global Edition",
        href: "https://www.pearson.de/media/muster/toc/toc_9781292061887.pdf",
        note: "Charles L. Phillips, H. Troy Nagle, and Aranya Chakrabortty. Discrete-time systems, sampling and reconstruction, open- and closed-loop sampled systems, stability analysis, digital controller design, pole assignment, observers, identification, LQ control, Kalman filtering, and case studies.",
      },
      {
        label: "Control Systems Engineering",
        href: "https://www.zybooks.com/catalog/control-systems-engineering-8th-edition/",
        note: "Norman S. Nise. Modeling, time response, subsystem reduction, stability, steady-state error, root locus, frequency response, state-space design, and digital control.",
      },
      {
        label: "Modern Control Engineering",
        href: "https://www.pearson.com/en-gb/subject-catalog/p/Ogata-Modern-Control-Engineering-5th-Edition/P200000003521",
        note: "Katsuhiko Ogata. Modeling of mechanical, electrical, fluid, and thermal systems; transient response; root locus; frequency response; PID; and state-space design.",
      },
      {
        label: "Modern Control Systems",
        href: "https://www.pearson.com/en-us/subject-catalog/p/modern-control-systems/P200000003484/9780137307098",
        note: "Richard C. Dorf and Robert H. Bishop. Mathematical models, state variables, feedback performance, stability, root locus, frequency design, robust control, and digital control.",
      },
      {
        label: "Control System Design",
        href: "https://openlibrary.org/books/OL7345499M/Control_System_Design",
        note: "Graham C. Goodwin, Stefan F. Graebe, and Mario E. Salgado. SISO/MIMO design, PID, sampled-data and hybrid control, optimization, state space, nonlinear control, MPC, and decoupling.",
      },
      {
        label: "Multivariable Feedback Control: Analysis and Design",
        href: "https://skoge.folk.ntnu.no/book/",
        note: "Sigurd Skogestad and Ian Postlethwaite. MIMO limitations, uncertainty, robust stability and performance, controller design, control-structure design, model reduction, and LMIs.",
      },
      {
        label: "Nonlinear Systems",
        href: "https://www.pearson.com/en-us/subject-catalog/p/nonlinear-systems/P200000003306/9780130673893",
        note: "Hassan K. Khalil. Phase-plane behavior, Lyapunov stability, input-output stability, passivity, perturbation methods, singular perturbations, and feedback linearization.",
      },
      {
        label: "Model Predictive Control",
        href: "https://link.springer.com/book/10.1007/978-0-85729-398-5",
        note: "Eduardo F. Camacho and Carlos Bordons. Generalized, commercial, multivariable, constrained, robust, nonlinear, hybrid, and fast MPC.",
      },
      {
        label: "Dynamic Programming and Optimal Control",
        href: "https://web.mit.edu/dimitrib/www/dpbook.html",
        note: "Dimitri P. Bertsekas. Dynamic programming, deterministic and stochastic decision problems, shortest paths, imperfect information, infinite-horizon problems, and approximate DP.",
      },
      {
        label: "Optimal Control Theory: An Introduction",
        href: "https://books.google.com/books/about/Optimal_Control_Theory.html?id=fCh2SAtWIdwC",
        note: "Donald E. Kirk. Performance measures, dynamic programming, calculus of variations, Pontryagin's minimum principle, and numerical trajectory optimization.",
      },
      {
        label: "Control System Design: An Introduction to State-Space Methods",
        href: "https://store.doverpublications.com/products/9780486442785",
        note: "Bernard Friedland. State-space representation, frequency analysis, controllability, observability, pole placement, observers, separation principle, LQR, random processes, and Kalman filters.",
      },
      {
        label: "Optimal Control and Estimation",
        href: "https://store.doverpublications.com/products/9780486462783",
        note: "Robert F. Stengel. Optimal trajectories, LQ control, optimal estimation, Kalman filtering, stochastic optimal control, dual control, and multivariable design.",
      },
      {
        label: "Optimal State Estimation: Kalman, H-infinity, and Nonlinear Approaches",
        href: "https://www.wiley.com/en-us/Optimal+State+Estimation%3A+Kalman%2C+H+Infinity%2C+and+Nonlinear+Approaches-p-9780471708582",
        note: "Dan Simon. Least squares, Kalman filters, information and square-root forms, smoothing, H-infinity filtering, EKF, UKF, and particle filters.",
      },
      {
        label: "Adaptive Control",
        href: "https://openlibrary.org/books/OL7407856M/Adaptive_Control_%282nd_Edition%29",
        note: "Karl J. Astrom and Bjorn Wittenmark. Real-time parameter estimation, self-tuning regulators, MRAS, stochastic adaptive control, auto-tuning, gain scheduling, and implementation.",
      },
      {
        label: "Introduction to Stochastic Control Theory",
        href: "https://store.doverpublications.com/products/9780486445311",
        note: "Karl J. Astrom. Stochastic processes, stochastic state models, spectral descriptions, stochastic differential equations, parametric optimization, and optimal stochastic control.",
      },
      {
        label: "Schaum's Outline of Feedback and Control Systems",
        href: "https://www.mheducation.com/highered/mhp/product/schaums-outline-feedback-control-systems-3rd-edition.html",
        note: "Joseph J. DiStefano III, Allen R. Stubberud, and Ivan J. Williams. Problem-oriented review of Laplace and Z-transforms, stability, transfer functions, block diagrams, signal-flow graphs, Nyquist, root locus, Bode, and Nichols methods.",
      },
      {
        label: "Steve Brunton's Control Bootcamp",
        href: "https://www.youtube.com/playlist?list=PLMrJAkhIeNNR20Mz-VpzgfQs5zrYi085m",
        note: "YouTube playlist introducing control-system modeling, analysis, and design with practical examples.",
      },
      {
        label: "Brian Douglas Control Systems Lectures",
        href: "https://www.youtube.com/user/ControlLectures",
        note: "YouTube channel with approachable lectures on classical control, frequency-domain methods, state-space control, and control intuition.",
      },
      {
        label: "MathWorks/MATLAB YouTube Channel",
        href: "https://www.youtube.com/@MATLAB",
        note: "Videos on MATLAB, Simulink, Control System Toolbox workflows, modeling, simulation, and control design examples.",
      },
      {
        label: "Prof Giordano Scarciotti YouTube Channel",
        href: "https://www.youtube.com/@Prof_Gio",
        note: "Lecture videos on control theory, dynamical systems, and related engineering mathematics.",
      },
      {
        label: "Robotic Systems Control YouTube Channel",
        href: "https://www.youtube.com/@RoboticSystemsControl",
        note: "Videos on robotics-oriented control, system modeling, estimation, and implementation topics.",
      },
    ],
  },
  {
    title: "Open Texts & Course Notes",
    description: "Freely accessible notes and textbooks for structured study and implementation practice.",
    resources: [
      {
        label: "MIT OCW 6.241J Dynamic Systems and Control",
        href: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/",
        note: "Graduate notes on dynamic systems, feedback interconnections, stability, performance, and robust control.",
      },
      {
        label: "Caltech CDS 101/110",
        href: "https://www.cds.caltech.edu/~murray/courses/cds101/fa03/caltech/am03.html",
        note: "Course material aligned with Astrom and Murray's Feedback Systems text.",
      },
      {
        label: "Stanford EE363 Linear Dynamical Systems",
        href: "https://ee363.stanford.edu/lectures.html",
        note: "State-space models, controllability, observability, least squares, and estimation.",
      },
      {
        label: "Stanford EE364B Convex Optimization II",
        href: "https://web.stanford.edu/class/ee364b/lectures.html",
        note: "Robust optimization, stochastic MPC, model predictive control, and numerical methods.",
      },
      {
        label: "MIT Underactuated Robotics",
        href: "https://underactuated.mit.edu/",
        note: "Nonlinear dynamics, LQR, trajectory optimization, planning, Lyapunov analysis, learning, and robotics applications.",
      },
      {
        label: "Model Predictive Control: Theory, Computation, and Design",
        href: "https://sites.engineering.ucsb.edu/~jbraw/mpc/",
        note: "Open MPC textbook by Rawlings, Mayne, and Diehl with theory, algorithms, computation, and examples.",
      },
      {
        label: "Planning Algorithms",
        href: "https://msl.cs.uiuc.edu/planning/book.html",
        note: "Steven M. LaValle. Open book on combinatorial planning, sampling-based motion planning, collision checking, feedback motion planning, and planning under uncertainty.",
      },
      {
        label: "Linear Matrix Inequalities in System and Control Theory",
        href: "https://stanford.edu/~boyd/papers/LMI_sys_ctrl.html",
        note: "Boyd, El Ghaoui, Feron, and Balakrishnan. Foundational reference on LMI formulations for systems, robust control, stability, and convex optimization.",
      },
    ],
  },
  {
    title: "Classic Papers & Surveys",
    description: "Primary papers and surveys behind filtering, MPC, path planning, and safety-critical control.",
    resources: [
      {
        label: "A New Approach to Linear Filtering and Prediction Problems",
        href: "https://doi.org/10.1115/1.3662552",
        note: "R. E. Kalman's original Kalman filtering paper.",
      },
      {
        label: "Constrained Model Predictive Control: Stability and Optimality",
        href: "https://doi.org/10.1016/S0005-1098(99)00214-9",
        note: "Mayne, Rawlings, Rao, and Scokaert. Core reference on MPC stability and optimality.",
      },
      {
        label: "Rapidly-Exploring Random Trees: A New Tool for Path Planning",
        href: "https://lavalle.pl/papers/Lav98c.pdf",
        note: "Steven M. LaValle's original RRT technical report.",
      },
      {
        label: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths",
        href: "https://doi.org/10.1109/TSSC.1968.300136",
        note: "Hart, Nilsson, and Raphael's original A* paper.",
      },
      {
        label: "Control Barrier Functions: Theory and Applications",
        href: "https://coogan.ece.gatech.edu/papers/pdf/amesecc19.pdf",
        note: "Survey-style reference on safety-critical control with CBFs.",
      },
      {
        label: "Robustness of Control Barrier Functions for Safety Critical Control",
        href: "https://arxiv.org/abs/1612.01554",
        note: "Robustness and CLF-CBF quadratic-program formulations.",
      },
    ],
  },
  {
    title: "Open Software & Benchmarks",
    description: "Tools for modeling, analysis, simulation, optimization, control design, and estimation.",
    resources: [
      {
        label: "python-control",
        href: "https://python-control.readthedocs.io/",
        note: "Python library for classical and state-space control analysis and design.",
      },
      {
        label: "Drake",
        href: "https://drake.mit.edu/",
        note: "Model-based robotics toolbox with simulation, optimization, planning, and control tools.",
      },
      {
        label: "CasADi",
        href: "https://web.casadi.org/",
        note: "Symbolic framework for nonlinear optimization and optimal control.",
      },
      {
        label: "do-mpc",
        href: "https://www.do-mpc.com/",
        note: "Python toolbox for nonlinear MPC and moving horizon estimation.",
      },
      {
        label: "JuliaControl",
        href: "https://juliacontrol.github.io/",
        note: "Julia ecosystem for control systems modeling, analysis, and synthesis.",
      },
    ],
  },
]

export const references: Reference[] = resourceGroups.flatMap((group) => group.resources)
