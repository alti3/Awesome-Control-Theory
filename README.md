# Awesome Control Theory
> A curated list inspired by the [Map of Control Theory](https://www.youtube.com/c/ControlSystemsLectures) by Brian Douglas (© August 2020, Engineering Media).

Control theory encompasses a vast collection of methods for analyzing and designing systems that regulate themselves to achieve desired behaviors. This list groups topics into broad categories—optimal control, robust control, planning, estimation, etc.—to serve as a roadmap for both newcomers and experienced practitioners.

**Table of Contents**
- [Optimal Control](#optimal-control)
- [Adaptive Control](#adaptive-control)
- [Predictive Control](#predictive-control)
- [Robust Control](#robust-control)
- [Planning](#planning)
- [State Estimation](#state-estimation)
- [Sensor Fusion](#sensor-fusion)
- [Modeling & Simulation](#modeling--simulation)
- [System Analysis](#system-analysis)
- [Intelligent Control](#intelligent-control)
- [Multi-Agent Control](#multi-agent-control)
- [Nonlinear Control](#nonlinear-control)
- [First Principles & Classical Tools](#first-principles--classical-tools)
- [Contributing](#contributing)
- [License](#license)

---

## Optimal Control
- **Pontryagin's Maximum Principle**  
  Fundamental for solving optimal control problems by converting them into two-point boundary value problems.
- **Hamilton–Jacobi–Bellman (HJB) Equation**  
  Central to dynamic programming; used to derive optimal feedback laws.
- **Linear Quadratic Regulator (LQR)**  
  Minimizes a quadratic cost function to yield a stable state-feedback control law.

---

## Adaptive Control
- **Model Reference Adaptive Control (MRAC)**  
  Uses a reference model to adaptively adjust controller parameters for changing system dynamics.
- **Extremum Seeking**  
  Real-time optimization of unknown or changing plant outputs (e.g., maximizing efficiency).
- **Iterative Learning Control (ILC)**  
  Improves performance by iterating over repeated tasks or trajectories.

---

## Predictive Control
- **Model Predictive Control (MPC)**  
  Solves an online optimization problem subject to constraints; widely used in industrial processes.
- **Robust MPC**  
  Incorporates model uncertainty into the MPC framework to ensure stability despite disturbances.

---

## Robust Control
- **Active Disturbance Rejection Control (ADRC)**  
  Estimates and compensates disturbances in real time.
- **H∞ Control**  
  Designs controllers to minimize the worst-case gain from disturbance to output.
- **μ-Synthesis (Mu-Synthesis)**  
  Handles structured uncertainties for complex, uncertain systems.

---

## Planning
- **RRT / A* / Graph Search**  
  Algorithms for path planning, especially in robotics and autonomous systems.
- **Holonomic / Nonholonomic / Redundant Constraints**  
  Characterizing system mobility and constraints for motion planning.
- **Common Trajectory Inputs**  
  Step, impulse, and sine signals used for system testing and planning.

---

## State Estimation
- **Calibration**  
  System identification of offsets, gains (e.g. `yₚ = [Σ]y + b`).
- **Moving Horizon Estimation (MHE)**  
  Nonlinear optimization-based state estimation over a receding time window.
- **Tracking**  
  Techniques for continuously updating system states to track setpoints or trajectories.

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
- **Linear State Space Models**  
  \[
    \dot{x} = A x + B u,\quad y = C x + D u
  \]
  Widely used representation for linear systems.
- **Nonlinear State Space Models**  
  \[
    \dot{x} = f(x,u), \quad y = g(x,u)
  \]
  General form for more complex, nonlinear dynamics.
- **Transfer Functions**  
  Frequency-domain representation (\( G(s) = \frac{\omega^2}{s^2 + 2\zeta s + \omega^2} \), etc.).
- **Block Diagrams & Simulation**  
  Visual approach to represent signal flows; frameworks like Simulink, Modelica, etc.

---

## System Analysis
- **Performance & Stability**  
  Ensuring systems meet design specs (rise time, settling time, overshoot, etc.) and remain stable.
- **Controllability & Observability**  
  System-theoretic foundations that determine if states can be driven/estimated.
- **Nyquist / Bode / Root Locus / Nichols Charts**  
  Frequency-domain tools for analyzing and designing feedback loops.
- **Passivity / Sensitivity / Nonminimum Phase**  
  Additional analyses for advanced stability and performance characterizations.
- **Lyapunov Stability**  
  Ensures stable equilibria via energy-like functions.

---

## Intelligent Control
- **Fuzzy Control**  
  Uses linguistic variables and membership functions to handle uncertainty or imprecise inputs.
- **Reinforcement Learning (RL)**  
  "Explore vs Exploit" paradigm for data-driven, adaptive control strategies.
- **Genetic Algorithms**  
  Evolutionary optimization for tuning controller parameters or system design.

---

## Multi-Agent Control
- **Graph Theoretic Control**  
  Uses network graphs to describe interactions among multiple agents or subsystems.
- **Leader-Follower**  
  A simple cooperative control structure with designated leaders setting pace or reference.
- **Swarm Control**  
  Emergent behaviors in groups of agents; often decentralized with local rules.

---

## Nonlinear Control
- **Gain Scheduling**  
  Switching or blending linear controllers across different operating points.
- **Backstepping**  
  Recursive design method for strict-feedback nonlinear systems.
- **Feedback Linearization & Dynamic Inversion**  
  Canceling nonlinearities via feedback to transform system into a (pseudo)linear one.
- **Bang-Bang Control**  
  Control inputs are limited to extremal values (e.g. ON/OFF).
- **Sliding Mode Control**  
  Robust, discontinuous control with invariance to certain disturbances.

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
