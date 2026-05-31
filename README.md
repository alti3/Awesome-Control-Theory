# Awesome Control Theory

> A map-aligned guide to control theory topics, inspired by Brian Douglas's
> [Map of Control Theory](https://engineeringmedia.com/map-of-control)
> © August 2020, Engineering Media.

Control theory is the study of dynamical systems that sense, decide, and act so
their behavior matches a desired objective. This repository turns the visual map
into a structured reference for learning, review, and project planning.

![The Map of Control Theory](Control_Map_ver5.png)

## Table of Contents

- [How to Use This Map](#how-to-use-this-map)
- [Core Feedback Concepts](#core-feedback-concepts)
  - [Feedback and Feedforward](#feedback-and-feedforward)
  - [Domains and Representations](#domains-and-representations)
  - [Mathematical and Computational Foundations](#mathematical-and-computational-foundations)
- [Control Methods](#control-methods)
  - [Linear](#linear)
  - [Nonlinear](#nonlinear)
  - [Multi-Agent](#multi-agent)
  - [Optimal](#optimal)
  - [Predictive](#predictive)
  - [Intelligent](#intelligent)
  - [Adaptive](#adaptive)
  - [Robust](#robust)
- [Planning](#planning)
  - [Reference Inputs](#reference-inputs)
  - [Optimal Planning](#optimal-planning)
  - [Constraints](#constraints)
  - [Motion Planning](#motion-planning)
  - [Path Planning Algorithms](#path-planning-algorithms)
- [State Estimation](#state-estimation)
  - [Filtering Methods](#filtering-methods)
  - [Observers](#observers)
  - [Moving Horizon Estimation](#moving-horizon-estimation)
  - [Calibration](#calibration)
  - [Mapping](#mapping)
  - [Tracking](#tracking)
  - [Sensor Fusion](#sensor-fusion)
- [Modeling and Simulation](#modeling-and-simulation)
  - [State-Space Models](#state-space-models)
  - [System Representations](#system-representations)
  - [Model Development](#model-development)
  - [Simulation](#simulation)
- [System Analysis](#system-analysis)
  - [Stability](#stability)
  - [Margins and Robustness](#margins-and-robustness)
  - [Frequency-Domain Analysis](#frequency-domain-analysis)
  - [Root Locus and Pole-Zero Analysis](#root-locus-and-pole-zero-analysis)
  - [System Properties](#system-properties)
  - [Safety-Critical Analysis](#safety-critical-analysis)
- [First Principles and Classical Tools](#first-principles-and-classical-tools)
- [Learning Roadmaps](#learning-roadmaps)
  - [Beginner Classical Path](#beginner-classical-path)
  - [State-Space Path](#state-space-path)
  - [Robotics and Autonomy Path](#robotics-and-autonomy-path)
  - [Advanced Control Path](#advanced-control-path)
- [Academic and Open References](#academic-and-open-references)
  - [Foundational Texts and Course Notes](#foundational-texts-and-course-notes)
  - [Classic Papers and Surveys](#classic-papers-and-surveys)
  - [Open Software and Benchmarks](#open-software-and-benchmarks)
- [Coverage Checklist](#coverage-checklist)
- [Contributing](#contributing)
- [License and Attribution](#license-and-attribution)

## How to Use This Map

- Use **Modeling and Simulation** to describe the plant.
- Use **System Analysis** to understand stability, performance, and limitations.
- Use **Control Methods** to choose a controller family.
- Use **Planning** to generate references, paths, and constraints.
- Use **State Estimation** when the full state is not directly measurable.
- Use **First Principles and Classical Tools** to connect physical models,
  diagrams, and approximations to controller design.

## Core Feedback Concepts

### Feedback and Feedforward

- **Feedback control** closes the loop by measuring behavior and correcting error.
- **Feedforward control** acts from a model or known command before error appears.
- **Full-state feedback** uses the entire state vector, often in the form
  `u = -Kx`, when states are measured or estimated.
- **Output feedback** uses measured outputs directly or through an observer.

### Domains and Representations

- **Continuous time** models use differential equations such as `dx/dt = f(x, u)`.
- **Discrete time** models use sampled updates such as `x[k+1] = f(x[k], u[k])`.
- **Time-domain analysis** studies transients, step response, impulse response,
  rise time, settling time, overshoot, and steady-state error.
- **Frequency-domain analysis** studies gain, phase, bandwidth, resonances, and
  robustness using transfer functions and frequency response plots.
- **Laplace transforms** connect differential-equation models to transfer
  functions and classical design tools.
- **C2D and D2C conversion** translate models between continuous and discrete
  representations for sampled-data control.

### Mathematical and Computational Foundations

- **Linear algebra** underpins state-space models, controllability,
  observability, pole placement, and model reduction.
- **Differential equations** describe continuous-time plant dynamics and
  closed-loop behavior.
- **Convex optimization** supports many MPC, estimation, and robust-control
  formulations.
- **Dynamic programming** connects optimal control, HJB equations, value
  functions, and reinforcement learning.
- **Riccati equations** appear in LQR, LQG, Kalman filtering, and finite-horizon
  optimal control.
- **Quadratic programming** is the standard online optimization form for many
  linear MPC and control-barrier-function controllers.

## Control Methods

### Linear

- **PID control** combines proportional, integral, and derivative action for
  simple, effective feedback control.
- **Integral action and anti-windup** improve steady-state tracking while
  limiting integrator problems when actuators saturate.
- **Lead-lag compensation** shapes transient response and steady-state accuracy
  with phase-lead and phase-lag networks.
- **Full-state feedback** places closed-loop poles through a gain matrix `K`.
- **Pole placement** assigns closed-loop eigenvalues directly when the model is
  controllable.
- **LQR, or Linear Quadratic Regulator**, minimizes a quadratic state and input
  cost to produce an optimal state-feedback controller.
- **LQG, or Linear Quadratic Gaussian control**, combines LQR with Kalman
  filtering for noisy output-feedback problems.
- **H-infinity control** is often synthesized for linear plants while targeting
  worst-case disturbance attenuation and robustness.
- **Loop shaping** designs open-loop gain and phase to meet bandwidth, tracking,
  noise, and robustness targets.

### Nonlinear

- **Gain scheduling** blends or switches controllers across operating points.
- **Backstepping** recursively designs controllers for strict-feedback nonlinear
  systems.
- **Feedback linearization** cancels nonlinearities through feedback to obtain a
  simpler closed-loop form.
- **Dynamic inversion** uses a model inverse to command nonlinear systems.
- **Sliding mode control** drives trajectories onto a designed switching surface
  and provides robustness to matched uncertainty.
- **Bang-bang control** switches between extreme control values, often appearing
  in minimum-time problems.

### Multi-Agent

- **Graph-theoretic control** models agents and communication links as nodes and
  edges.
- **Consensus control** drives distributed agents toward agreement using local
  communication.
- **Formation control** regulates relative positions, distances, or bearings
  among agents.
- **Leader-follower control** coordinates agents around one or more reference
  agents.
- **Swarm control** produces group behavior from decentralized local rules.

### Optimal

- **Pontryagin's Maximum Principle** converts optimal-control problems into
  necessary conditions involving a Hamiltonian and costates.
- **Hamilton-Jacobi-Bellman equation** expresses the dynamic-programming
  condition for optimal feedback control.
- **LQR** is the canonical linear-quadratic optimal controller.
- **Differential dynamic programming and iterative LQR** approximate nonlinear
  optimal-control problems through local quadratic models.
- **Direct collocation and shooting methods** transcribe continuous trajectory
  optimization into finite-dimensional nonlinear programs.
- **Bang-bang solutions** can arise when the optimal input saturates at limits.

### Predictive

- **Model Predictive Control, or MPC**, repeatedly solves a finite-horizon
  optimization problem using a model of the plant.
- **Linear MPC** uses linear models and often convex quadratic programs.
- **Nonlinear MPC** handles nonlinear dynamics or constraints, usually through
  nonlinear programming.
- **Robust MPC** accounts for model uncertainty and disturbances.
- **Tube MPC** keeps the uncertain state inside a planned invariant tube around
  a nominal trajectory.
- **Stochastic MPC** treats uncertainty probabilistically through chance
  constraints or expected costs.
- **Explicit MPC** precomputes piecewise-affine control laws for fast online
  evaluation.
- **Constraint handling** is central to MPC because input, state, and safety
  limits can be represented directly in the optimization.

### Intelligent

- **Fuzzy control** uses membership functions and rule bases to encode heuristic
  control behavior.
- **Reinforcement learning** learns policies from reward through exploration and
  exploitation.
- **Adaptive dynamic programming** approximates dynamic programming for systems
  where exact HJB solutions are intractable.
- **Neural network control** uses learned function approximators for policies,
  dynamics, value functions, or adaptive compensation.
- **Genetic algorithms** tune controller parameters or search design spaces with
  evolutionary optimization.

### Adaptive

- **Model Reference Adaptive Control, or MRAC**, adapts controller parameters so
  the plant follows a desired reference model.
- **Direct adaptive control** adjusts controller parameters directly from
  tracking error.
- **Indirect adaptive control** estimates plant parameters first, then updates
  the controller from the estimated model.
- **Self-tuning regulators** repeatedly identify a model and redesign controller
  gains online.
- **Extremum seeking** optimizes an unknown objective online by perturbing inputs
  and following performance gradients.
- **Iterative Learning Control, or ILC**, improves repeated-task tracking from
  trial to trial.

### Robust

- **Active Disturbance Rejection Control, or ADRC**, estimates and compensates
  total disturbances in real time.
- **H-infinity control** minimizes worst-case disturbance amplification.
- **Mu-synthesis** handles structured uncertainty in robust-control design.
- **Small-gain reasoning** bounds feedback interconnections by limiting loop
  gain under uncertainty.
- **Linear fractional transformations, or LFTs**, organize uncertain plants for
  robust-analysis and synthesis workflows.
- **Loop shaping** and **robust stability margins** connect classical frequency
  design to robust-control goals.

## Planning

### Reference Inputs

- **Step input** tests tracking, settling behavior, overshoot, and steady-state
  error.
- **Impulse input** reveals natural dynamics and impulse response.
- **Sine input** probes frequency response and periodic tracking.

### Optimal Planning

- **Cost functions** encode objectives such as time, distance, energy, comfort,
  risk, or tracking error.
- **Trajectory optimization** searches over state and input histories that
  satisfy dynamics and minimize cost.
- **Trajectory generation** creates dynamically feasible reference states,
  velocities, and accelerations for downstream tracking controllers.
- **Minimum-snap and polynomial trajectories** are common in aerial robotics and
  other systems with smoothness requirements.

### Constraints

- **Input constraints** bound actuator effort, rate, torque, force, voltage,
  acceleration commands, or steering.
- **State constraints** bound position, velocity, acceleration, temperature,
  pressure, charge, safety envelopes, or operating regions.
- **Environmental constraints** encode obstacles, keep-out zones, and workspace
  limits.
- **Collision-avoidance constraints** preserve separation from obstacles,
  humans, vehicles, or other agents.
- **Terminal constraints** enforce desired final states or invariant terminal
  sets in predictive planning.

### Motion Planning

- **Holonomic systems** can move freely in all configuration directions.
- **Nonholonomic systems** have velocity constraints, such as car-like robots.
- **Redundant systems** have more degrees of freedom than needed for the task.

### Path Planning Algorithms

- **RRT, or Rapidly-exploring Random Tree**, samples configuration space to find
  feasible paths in high-dimensional problems.
- **RRT-star** extends RRT with asymptotic optimality.
- **PRM, or Probabilistic Roadmap**, builds a reusable graph of sampled
  configurations.
- **Dijkstra's algorithm** finds shortest paths on weighted graphs without a
  heuristic.
- **A-star (A*)** searches graphs with a heuristic to find low-cost paths.

## State Estimation

### Filtering Methods

- **Kalman filter** estimates linear Gaussian systems optimally in the
  least-squares sense.
- **Extended Kalman filter** linearizes nonlinear dynamics and measurement
  models locally.
- **Sigma-point filters**, including the unscented Kalman filter, propagate
  selected sample points through nonlinear models.
- **Particle filters** approximate arbitrary state distributions with weighted
  samples.
- **Smoothers**, such as fixed-lag or Rauch-Tung-Striebel smoothers, estimate
  past states using measurements that arrived later.
- **Covariance tuning and consistency checks** keep filter uncertainty aligned
  with observed residuals.

### Observers

- **State observers** reconstruct unmeasured states from models and output
  measurements.
- **Luenberger observers** use linear correction dynamics.
- **Disturbance observers** estimate unmeasured disturbances for compensation.
- **Kalman observers** combine model prediction and measurement correction with
  explicit noise statistics.
- **Unknown-input observers** estimate states when some disturbances or inputs
  are not measured.
- **High-gain and sliding-mode observers** are common nonlinear observer
  families.

### Moving Horizon Estimation

- **Moving Horizon Estimation, or MHE**, estimates states and parameters by
  solving a constrained optimization problem over a recent time window.

### Calibration

- **Bias calibration** estimates offsets such as `yp = y + b`.
- **Gain and alignment calibration** estimates sensor scale factors and mounting
  geometry.
- **Parameter calibration** fits model coefficients from measured data.

### Mapping

- **Mapping** estimates environmental structure for navigation, localization,
  and planning.
- **SLAM-style workflows** combine mapping with state estimation when position
  and environment are both uncertain.

### Tracking

- **Target tracking** estimates moving object states from noisy measurements.
- **Trajectory tracking** estimates deviation from a desired path or reference.
- **Multi-sensor tracking** fuses detections from multiple measurement sources.
- **Data association** matches measurements to tracks in multi-target tracking
  problems.

### Sensor Fusion

- **IMU, GPS, and camera fusion** combines inertial, satellite, and visual
  measurements for pose and navigation.
- **Redundant measurement fusion** improves reliability and fault tolerance.
- **Outlier rejection and fault detection** prevent bad measurements from
  corrupting state estimates.
- **Bayesian filtering** provides a common probabilistic foundation for Kalman,
  sigma-point, and particle filters.

## Modeling and Simulation

### State-Space Models

- **Linear state space**

  ```text
  x_dot = A x + B u
  y     = C x + D u
  ```

- **Nonlinear state space**

  ```text
  dx/dt = f(x, u)
  y     = g(x, u)
  ```

- **Hybrid systems** combine continuous dynamics with discrete modes, events, or
  logic.
- **Time-delay systems** model transport delays, communication delays, and
  computation delays that can destabilize feedback loops.
- **Saturation and rate-limit models** capture actuator limits that strongly
  affect closed-loop performance.

### System Representations

- **Transfer functions** represent input-output dynamics in the Laplace domain.
- **Block diagrams** show interconnections among plants, controllers, summing
  junctions, sensors, and feedback paths.
- **Signal-flow views** clarify feedback, feedforward, disturbances, and noise.
- **Uncertainty models** describe parametric uncertainty, unmodeled dynamics,
  disturbances, and sensor noise.
- **Linear fractional transformations** separate nominal dynamics from
  uncertainty blocks for robust-control analysis.

### Model Development

- **First-principles modeling** derives dynamics from physics, such as Newton's
  laws, energy balances, circuits, fluids, or thermodynamics.
- **System identification** estimates models from input-output data.
- **Linearization** approximates nonlinear dynamics near an equilibrium or
  trajectory.
- **Minimum realization** removes uncontrollable or unobservable states while
  preserving input-output behavior.
- **Model reduction** lowers model order for analysis, control synthesis, and
  real-time simulation.
- **Balanced truncation** reduces stable linear models while approximately
  preserving input-output behavior.

### Simulation

- **Numerical integration** solves ordinary differential equations and
  differential-algebraic equations.
- **Event handling** captures impacts, switches, guards, saturations, and mode
  changes in hybrid simulations.
- **Co-simulation** connects tools or subsystem models that use different
  solvers, time steps, or modeling languages.
- **Simulation software** includes tools such as Simulink, Modelica, and
  domain-specific simulators for controls, physical modeling, and verification.
- **Closed-loop simulation** validates controller behavior before deployment.
- **Monte Carlo simulation** tests performance across uncertainty, noise, and
  randomized initial conditions.
- **Hardware-in-the-loop simulation** exercises controller implementation against
  real-time plant models.

## System Analysis

### Stability

- **Lyapunov stability** proves behavior using energy-like functions.
- **Local stability** describes behavior near an equilibrium.
- **Global stability** describes behavior over a broad state space.
- **Input-to-state stability** connects bounded inputs and disturbances to
  bounded state behavior.
- **Phase-plane analysis** visualizes trajectories, equilibria, limit cycles,
  and nonlinear behavior in two-state systems.

### Margins and Robustness

- **Gain margin** measures allowable gain change before instability.
- **Phase margin** measures allowable phase lag before instability.
- **Robust stability** studies whether stability survives uncertainty.
- **Robust performance** studies whether performance targets survive
  uncertainty.

### Frequency-Domain Analysis

- **Bode plots** show magnitude and phase versus frequency.
- **Nyquist plots** determine closed-loop stability from open-loop encirclements.
- **Nichols charts** combine gain and phase for frequency-domain design.
- **Sensitivity functions** describe disturbance rejection, noise amplification,
  and tracking limitations.

### Root Locus and Pole-Zero Analysis

- **Root locus** tracks closed-loop pole movement as gain changes.
- **Pole-zero plots** reveal modes, damping, zeros, cancellations, and
  nonminimum-phase behavior.
- **Nonminimum-phase zeros** limit tracking speed and transient performance.

### System Properties

- **Controllability** tests whether inputs can move the state through the
  reachable state space.
- **Observability** tests whether outputs contain enough information to recover
  the state.
- **Passivity** uses energy exchange to reason about stability and
  interconnections.
- **Sensitivity** describes how references, disturbances, sensor noise, and
  modeling errors propagate through feedback loops.
- **Performance** includes tracking error, disturbance rejection, noise
  rejection, bandwidth, overshoot, and control effort.

### Safety-Critical Analysis

- **Control Lyapunov functions, or CLFs**, encode stabilizing objectives as
  inequalities.
- **Control barrier functions, or CBFs**, encode forward-invariant safe sets and
  are often enforced through quadratic programs.
- **Reachability analysis** estimates states that can be reached under dynamics,
  controls, and disturbances.
- **Invariant sets** define regions where trajectories remain once they enter.
- **Formal verification** checks whether closed-loop behavior satisfies stated
  safety or temporal-logic requirements.

## First Principles and Classical Tools

- **Mechanical first-principles models** include masses, springs, dampers,
  pendulums, vehicles, and robotics.
- **Electrical first-principles models** include circuits, motors, power
  converters, and sensors.
- **Process-control models** include tanks, reactors, heat exchangers,
  distillation columns, and transport delays.
- **Robotics and vehicle models** include kinematics, rigid-body dynamics,
  tire/ground interaction, and actuator dynamics.
- **Linearization** connects nonlinear first-principles models to linear design
  workflows.
- **Transfer functions** connect physical equations to classical feedback
  design.
- **Block diagrams** organize plant, controller, actuator, sensor, reference,
  disturbance, and noise pathways.
- **Safety constraints** define forbidden states, operating envelopes, and
  acceptable risk.

## Learning Roadmaps

### Beginner Classical Path

1. First-principles modeling
2. Transfer functions and block diagrams
3. Step, impulse, and sine responses
4. PID control
5. Root locus, Bode plots, Nyquist plots, and stability margins
6. Lead-lag compensation and loop shaping

### State-Space Path

1. Linear state-space models
2. Controllability and observability
3. Full-state feedback and pole placement
4. LQR, Riccati equations, and LQG
5. Observers, Kalman filtering, and separation principle
6. MPC, constrained control, and safety filters

### Robotics and Autonomy Path

1. Nonlinear state-space models
2. Motion planning with holonomic and nonholonomic constraints
3. RRT and A-star (A*) path planning
4. PRM, trajectory optimization, and dynamically feasible planning
5. Sensor fusion with IMU, GPS, and camera measurements
6. Mapping, tracking, moving horizon estimation, and safety constraints

### Advanced Control Path

1. Lyapunov stability
2. Nonlinear control: feedback linearization, backstepping, sliding mode
3. Optimal control: PMP, HJB, trajectory optimization, DDP, and iLQR
4. Robust control: H-infinity, mu-synthesis, ADRC, small-gain, and LFTs
5. Adaptive control: MRAC, extremum seeking, ILC, and self-tuning regulators
6. Multi-agent, safety-critical, intelligent, and learning-based control

## Academic and Open References

These links favor university notes, open textbooks, classic papers, and
well-maintained open software.

### Foundational Texts and Course Notes

- [Feedback Systems: An Introduction for Scientists and Engineers](https://fbsbook.org/)
  by Karl J. Astrom and Richard M. Murray: open textbook covering modeling,
  feedback, stability, frequency response, state space, and robustness.
- [MIT OCW 6.241J Dynamic Systems and Control](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/):
  graduate course notes on dynamic systems, feedback interconnections,
  stability, performance, and robust control.
- [Caltech CDS 101/110](https://www.cds.caltech.edu/~murray/courses/cds101/fa03/caltech/am03.html):
  course material aligned with the Astrom-Murray feedback systems text.
- [Stanford EE363 Linear Dynamical Systems](https://ee363.stanford.edu/archive/index.html):
  lecture slides, support notes, homework, and MATLAB files for state-space
  models, controllability, observability, least squares, and estimation.
- [Stanford EE364B Convex Optimization II](https://web.stanford.edu/class/ee364b/lectures.html):
  optimization notes with material on robust optimization, stochastic MPC,
  model predictive control, and numerical methods.
- [MIT Underactuated Robotics](https://underactuated.mit.edu/): open notes on
  nonlinear dynamics, LQR, trajectory optimization, planning, Lyapunov
  analysis, learning, and robotics applications.
- [Model Predictive Control: Theory, Computation, and Design](https://sites.engineering.ucsb.edu/~jbraw/mpc/)
  by Rawlings, Mayne, and Diehl: open MPC textbook with theory, algorithms,
  computation, and examples.

### Classic Papers and Surveys

- [Kalman, "A New Approach to Linear Filtering and Prediction Problems"](https://doi.org/10.1115/1.3662552):
  original Kalman filtering paper.
- [Mayne, Rawlings, Rao, and Scokaert, "Constrained Model Predictive Control: Stability and Optimality"](https://doi.org/10.1016/S0005-1098(99)00214-9):
  core MPC stability and optimality reference.
- [LaValle, "Rapidly-Exploring Random Trees: A New Tool for Path Planning"](https://lavalle.pl/papers/Lav98c.pdf):
  original RRT technical report.
- [Hart, Nilsson, and Raphael, "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"](https://doi.org/10.1109/TSSC.1968.300136):
  original A* paper.
- [Ames et al., "Control Barrier Functions: Theory and Applications"](https://coogan.ece.gatech.edu/papers/pdf/amesecc19.pdf):
  survey-style reference on safety-critical control with CBFs.
- [Xu, Tabuada, Grizzle, and Ames, "Robustness of Control Barrier Functions for Safety Critical Control"](https://arxiv.org/abs/1612.01554): robustness and
  CLF-CBF quadratic-program formulations.

### Open Software and Benchmarks

- [python-control](https://python-control.readthedocs.io/): Python library for
  classical and state-space control analysis and design.
- [Drake](https://drake.mit.edu/): model-based robotics toolbox with simulation,
  optimization, planning, and control tools.
- [CasADi](https://web.casadi.org/): symbolic framework for nonlinear
  optimization and optimal control.
- [do-mpc](https://www.do-mpc.com/): Python toolbox for nonlinear MPC and moving
  horizon estimation.
- [JuliaControl](https://juliacontrol.github.io/): Julia ecosystem for control
  systems modeling, analysis, and synthesis.

## Coverage Checklist

This checklist mirrors the labels in the map so gaps are easy to spot.

- **Control methods:** linear, nonlinear, multi-agent, optimal, predictive,
  intelligent, adaptive, robust.
- **Mathematical foundations:** linear algebra, differential equations, convex
  optimization, dynamic programming, Riccati equations, quadratic programming.
- **Linear methods:** PID, integral action, anti-windup, lead-lag, pole
  placement, full-state feedback, LQR, LQG, H-infinity control, loop shaping.
- **Nonlinear methods:** gain scheduling, backstepping, feedback linearization,
  dynamic inversion, sliding mode, bang-bang.
- **Multi-agent methods:** graph-theoretic control, consensus, formation
  control, leader-follower control, swarm control.
- **Optimal methods:** Pontryagin's Maximum Principle, HJB equation, LQR, DDP,
  iLQR, direct collocation, shooting methods, optimal planning.
- **Predictive methods:** MPC, linear MPC, nonlinear MPC, robust MPC, tube MPC,
  stochastic MPC, explicit MPC.
- **Intelligent methods:** fuzzy control, reinforcement learning, genetic
  algorithms, adaptive dynamic programming, neural network control.
- **Adaptive methods:** MRAC, direct adaptive control, indirect adaptive
  control, self-tuning regulators, extremum seeking, iterative learning control.
- **Robust methods:** ADRC, H-infinity control, mu-synthesis, small-gain
  reasoning, LFT uncertainty models, robust margins.
- **Planning:** step, impulse, sine, constraints, velocity limits, acceleration
  limits, force limits, holonomic, nonholonomic, redundant systems, trajectory
  generation, RRT, RRT-star, PRM, Dijkstra, A-star (A*).
- **State estimation:** filtering, observer design, Kalman filter,
  sigma-point filters, particle filters, smoothers, covariance tuning,
  unknown-input observers, moving horizon estimation, calibration, mapping,
  tracking, data association, sensor fusion, fault detection.
- **Modeling and simulation:** linear state space, nonlinear state space,
  hybrid systems, time delays, saturation, transfer functions, uncertainty
  models, block diagrams, simulation, event handling, co-simulation, system
  identification, first principles, linearization, minimum realizations, model
  reduction.
- **System analysis:** performance, stability, margins, Nyquist, Bode,
  Nichols, root locus, phase plane, pole-zero plots, passivity, sensitivity,
  controllability, observability, nonminimum phase, Lyapunov stability,
  control Lyapunov functions, control barrier functions, reachability,
  invariant sets, formal verification.
- **Core concepts:** feedback, feedforward, continuous time, discrete time,
  frequency domain, Laplace domain, C2D, D2C.

## Contributing

Contributions are welcome. Useful additions include:

- Missing map topics or clearer descriptions.
- Canonical textbooks, courses, papers, software libraries, and examples.
- Corrections to terminology, equations, or categorization.
- Short learning paths for specific domains such as process control, robotics,
  aerospace, power systems, or autonomous vehicles.

Please keep additions concise and consistent with the map-aligned structure.

## License and Attribution

The original README text in this repository is licensed under a
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

The control theory map graphic is by Engineering Media / Brian Douglas and is
included here with attribution. See the original map page for the creator's
sharing terms:

- [Engineering Media map page](https://engineeringmedia.com/map-of-control)
- [Direct PNG](https://engineeringmedia.com/map-of-control/Control_Map_ver5.png)
- MATLAB YouTube Channel video explanation:
  [Understanding Control Systems](https://www.youtube.com/watch?v=lBC1nEq0_nk)
