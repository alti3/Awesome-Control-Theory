# Awesome Control Theory
> A curated list inspired by the [Map of Control Theory](https://www.youtube.com/c/ControlSystemsLectures) by Brian Douglas (© August 2020, Engineering Media).

Control theory encompasses a vast collection of methods for analyzing and designing systems that regulate themselves to achieve desired behaviors. This list groups topics into broad categories—optimal control, robust control, planning, estimation, etc.—to serve as a roadmap for both newcomers and experienced practitioners.

**Table of Contents**
- [Control Methods](#control-methods)
  - [Linear](#linear)
  - [Nonlinear](#nonlinear)
  - [Multi-agent](#multi-agent)
  - [Optimal](#optimal)
  - [Predictive](#predictive)
  - [Intelligent](#intelligent)
  - [Adaptive](#adaptive)
  - [Robust](#robust)
- [Planning](#planning)
  - [Common Trajectory Inputs](#common-trajectory-inputs)
  - [Optimal Planning](#optimal-planning)
  - [Constraint Handling](#constraint-handling)
  - [Motion Planning](#motion-planning)
  - [Path Planning Algorithms](#path-planning-algorithms)
- [State Estimation](#state-estimation)
  - [Filtering Methods](#filtering-methods)
  - [Observer Design](#observer-design)
  - [Moving Horizon Estimation](#moving-horizon-estimation)
  - [Calibration](#calibration)
  - [Mapping](#mapping)
  - [Tracking](#tracking)
  - [Sensor Fusion](#sensor-fusion)
- [Modeling & Simulation](#modeling--simulation)
  - [State Space Models](#state-space-models)
  - [System Representations](#system-representations)
  - [Model Development](#model-development)
  - [Simulation Tools](#simulation-tools)
  - [State Space Models](#state-space-models)
  - [System Representations](#system-representations)
  - [Model Development](#model-development)
- [System Analysis](#system-analysis)
  - [Stability Analysis](#stability-analysis)
  - [Frequency Domain Analysis](#frequency-domain-analysis)
  - [Root Locus Analysis](#root-locus-analysis)
  - [System Properties](#system-properties)
  - [Performance Analysis](#performance-analysis)
- [First Principles & Classical Tools](#first-principles--classical-tools)
- [Contributing](#contributing)
- [License](#license)
- [Control Theory Resources](#control-theory-resources)

---

## Control Methods

### Linear
- **Linear Quadratic Regulator (LQR)**  
  Minimizes a quadratic cost function to yield a stable state-feedback control law.
- **PID Control**  
  Classic proportional-integral-derivative controller for linear systems.
- **H∞ Control**  
  Designs controllers to minimize the worst-case gain from disturbance to output.

### Nonlinear
- **Gain Scheduling**  
  Switching or blending linear controllers across different operating points.
- **Backstepping**  
  Recursive design method for strict-feedback nonlinear systems.
- **Feedback Linearization & Dynamic Inversion**  
  Canceling nonlinearities via feedback to transform system into a (pseudo)linear one.
- **Sliding Mode Control**  
  Robust, discontinuous control with invariance to certain disturbances.

### Multi-agent
- **Graph Theoretic Control**  
  Uses network graphs to describe interactions among multiple agents or subsystems.
- **Leader-Follower**  
  A simple cooperative control structure with designated leaders setting pace or reference.
- **Swarm Control**  
  Emergent behaviors in groups of agents; often decentralized with local rules.

### Optimal
- **Pontryagin's Maximum Principle**  
  Fundamental for solving optimal control problems by converting them into two-point boundary value problems.
- **Hamilton-Jacobi-Bellman (HJB) Equation**  
  Central to dynamic programming; used to derive optimal feedback laws.
- **Linear Quadratic Regulator (LQR)**  
  Minimizes a quadratic cost function to yield a stable state-feedback control law.

### Predictive
- **Model Predictive Control (MPC)**  
  Solves an online optimization problem subject to constraints; widely used in industrial processes.
- **Robust MPC**  
  Incorporates model uncertainty into the MPC framework to ensure stability despite disturbances.

### Intelligent
- **Fuzzy Control**  
  Uses linguistic variables and membership functions to handle uncertainty or imprecise inputs.
- **Reinforcement Learning (RL)**  
  "Explore vs Exploit" paradigm for data-driven, adaptive control strategies.
- **Genetic Algorithms**  
  Evolutionary optimization for tuning controller parameters or system design.

### Adaptive
- **Model Reference Adaptive Control (MRAC)**  
  Uses a reference model to adaptively adjust controller parameters for changing system dynamics.
- **Extremum Seeking**  
  Real-time optimization of unknown or changing plant outputs (e.g., maximizing efficiency).
- **Iterative Learning Control (ILC)**  
  Improves performance by iterating over repeated tasks or trajectories.

### Robust
- **Active Disturbance Rejection Control (ADRC)**  
  Estimates and compensates disturbances in real time.
- **H∞ Control**  
  Designs controllers to minimize the worst-case gain from disturbance to output.
- **μ-Synthesis (Mu-Synthesis)**  
  Handles structured uncertainties for complex, uncertain systems.

---

## Planning
- **Common Trajectory Inputs**  
  - **Step Response**  
    Unit step input for analyzing system behavior and settling characteristics.
  - **Impulse Response**  
    System response to instantaneous input for dynamic analysis.
  - **Sine Wave**  
    Frequency response analysis and periodic trajectory following.
- **Optimal Planning**  
  Finding paths that minimize cost functions (time, energy, distance, etc.).
- **Constraint Handling**  
  - **Physical Constraints**  
    Respecting system limitations (velocity, acceleration, force limits).
  - **Environmental Constraints**  
    Avoiding obstacles and restricted regions.
- **Motion Planning**  
  - **Holonomic Systems**  
    Systems without motion constraints (can move in any direction).
  - **Nonholonomic Systems**  
    Systems with motion constraints (e.g., car-like robots).
  - **Redundant Systems**  
    Multiple solutions exist for desired end-state.
- **Path Planning Algorithms**  
  - **RRT (Rapidly-exploring Random Trees)**  
    Probabilistic approach for high-dimensional configuration spaces.
  - **A* Algorithm**  
    Optimal graph search with heuristic for efficient path finding.

## State Estimation
- **Filtering Methods**
  - **Kalman Filter**  
    Optimal state estimation for linear systems with Gaussian noise.
  - **Extended Kalman Filter**  
    Nonlinear extension using local linearization.
  - **Sigma-Point Filters**  
    UKF and other deterministic sampling approaches.
  - **Particle Filters**  
    Monte Carlo methods for non-Gaussian/highly nonlinear systems.
- **Observer Design**  
  State reconstruction using system model and measurements.
- **Moving Horizon Estimation**  
  Optimization-based estimation over finite time window.
- **Calibration**  
  System identification of offsets, gains, and parameters.
- **Mapping**  
  Environmental state estimation for navigation and planning.
- **Tracking**  
  State estimation for moving targets or trajectories.
- **Sensor Fusion**  
  Combining multiple sensor inputs for improved estimation.

---

## Sensor Fusion
- **Kalman Filter / Extended Kalman Filter**  
  Linear or linearized approach to combining noisy sensor data for better estimates.
- **Sigma-Point & Particle Filters**  
  Nonlinear Bayesian filters (UKF, PF) for dealing with highly nonlinear systems or noise.
- **IMU / GPS / Camera Integration**  
  Fusing inertial, satellite, and visual data for robust navigation or pose estimation.

---

## Modeling & Simulation
- **State Space Models**
  - **Linear State Space**  
    \[
      \dot{x} = A x + B u,\quad y = C x + D u
    \]
    Widely used representation for linear systems.
  - **Nonlinear State Space**  
    \[
      \dot{x} = f(x,u), \quad y = g(x,u)
    \]
    General form for more complex, nonlinear dynamics.
  - **Hybrid Systems**  
    Combined continuous and discrete dynamics modeling.

- **System Representations**
  - **Transfer Functions**  
    Frequency-domain representation of input-output relationships.
  - **Block Diagrams**  
    Visual representation of system components and connections.

- **Model Development**
  - **System Identification**  
    Data-driven modeling using experimental measurements.
  - **First Principles Modeling**  
    Physics-based approach using fundamental laws.
  - **Linearization**  
    Approximating nonlinear systems around operating points.
  - **Minimum Realizations**  
    Reducing model complexity while preserving behavior.

- **Simulation Tools**
  - **Numerical Integration**  
    Methods for solving differential equations.
  - **Software Frameworks**  
    Tools like Simulink, Modelica for system simulation.

---

## System Analysis
- **Stability Analysis**
  - **Lyapunov Stability**  
    Ensures stable equilibria via energy-like functions.
  - **Phase Plane Analysis**  
    Graphical method for analyzing nonlinear system behavior.
  - **Stability Margins**  
    Gain and phase margins for robustness assessment.

- **Frequency Domain Analysis**
  - **Bode Plots**  
    Magnitude and phase response across frequencies.
  - **Nyquist Plot**  
    Graphical tool for stability analysis using complex plane.
  - **Nichols Chart**  
    Combined magnitude-phase plot for feedback analysis.

- **Root Locus Analysis**
  - **Root Locus Plot**  
    Traces closed-loop pole locations as gain varies.
  - **Pole-Zero Plot**  
    System dynamics visualization in complex plane.

- **System Properties**
  - **Controllability**  
    Ability to drive system states to desired values.
  - **Observability**  
    Ability to determine states from output measurements.
  - **Nonminimum Phase**  
    Systems with zeros in right-half plane.
  - **Passivity**  
    Energy-based perspective on system stability.
  - **Sensitivity**  
    System response to parameter variations.

- **Performance Analysis**
  - **Time Domain**  
    Rise time, settling time, overshoot, steady-state error.
  - **Frequency Domain**  
    Bandwidth, resonance peaks, roll-off rates.

---

## First Principles & Classical Tools
- **System Identification**  
  Building mathematical models from experimental data (parametric or non-parametric).
- **Minimum Realizations**  
  Reducing system order while maintaining input-output behavior.
- **Linearization**  
  Approximating nonlinear dynamics near an operating point.
- **Root Locus, Phase Plane, Nichols, etc.**  
  Classic graphical methods for analyzing feedback systems.
- **Safety & Constraints**  
  Ensuring control solutions respect physical, operational, and safety boundaries.
- **First-Principles Modeling**  
  Fundamental physics-based (Newton's laws, thermodynamics, etc.) approach.

---

## Contributing
Contributions are welcome! Feel free to submit a pull request with:
- Additional control-theory topics.
- References to libraries, frameworks, open-source implementations, or tutorials.
- Corrections or clarifications.

---

## License
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). 

*Inspired by the original "Map of Control Theory" by Brian Douglas (© August 2020, [Engineering Media](https://www.youtube.com/c/ControlSystemsLectures)).*

# Control Theory Resources

## Control Theory Map Reference

![Control Theory Map](Control_Map_ver5.png)

### Attribution
- Control Theory Map graphic by [Engineering Media][1] ([Direct PNG][2])
- MATLAB YouTube Channel video explanation: [Understanding Control Systems][3]

[1]: https://engineeringmedia.com/map-of-control
[2]: https://engineeringmedia.com/map-of-control/Control_Map_ver5.png
[3]: https://www.youtube.com/watch?v=lBC1nEq0_nk
