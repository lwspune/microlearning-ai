import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A puck slides east across ice at $4\ \mathrm{m/s}$. A steady push then gives it an acceleration of $1\ \mathrm{m/s^2}$ towards the north for $3\ \mathrm{s}$. Is its speed now $4 + 3 = 7\ \mathrm{m/s}$?`,
    reveal: t`No. The east part of its velocity stays $4\ \mathrm{m/s}$, and the north part grows from $0$ to $3\ \mathrm{m/s}$. The two parts are at right angles, so the speed is $\sqrt{4^2 + 3^2} = 5\ \mathrm{m/s}$.`,
  },
  explanation: {
    intuition: [
      t`In a plane, a body's position needs two numbers: its $x$ and $y$ coordinates.`,
      t`Position, displacement, velocity and acceleration are **vectors**: each has a size and a direction.`,
      t`Each vector splits into an $x$ part and a $y$ part, its **components**.`,
      t`The $x$ motion and the $y$ motion go on independently of each other.`,
      t`So each straight-line equation works for each component on its own.`,
      t`Find a vector's size from its components with Pythagoras, never by adding them.`,
    ],
    formal: [
      {
        title: "Position and displacement",
        points: [
          t`The **position vector** of a point $(x, y)$ is $\vec{r} = x\hat{i} + y\hat{j}$, where $\hat{i}$ and $\hat{j}$ are unit vectors along the axes.`,
          t`The **displacement** from $\vec{r}_1$ to $\vec{r}_2$ is $\Delta\vec{r}$ $= \vec{r}_2 - \vec{r}_1$ $= \Delta x\,\hat{i} + \Delta y\,\hat{j}$.`,
          t`Its size is $\left|\Delta\vec{r}\right|$ $= \sqrt{\Delta x^2 + \Delta y^2}$.`,
        ],
      },
      {
        title: "Velocity in a plane",
        points: [
          t`**Average velocity** is $\vec{v}_{av}$ $= \dfrac{\Delta\vec{r}}{\Delta t}$; it points along the displacement.`,
          t`**Instantaneous velocity** is $\vec{v} = \dfrac{d\vec{r}}{dt}$ $= \dfrac{dx}{dt}\hat{i} + \dfrac{dy}{dt}\hat{j}$ $= v_x\hat{i} + v_y\hat{j}$.`,
          t`It points along the tangent to the path, the way the body is moving at that instant.`,
          t`The speed is $v = \sqrt{v_x^2 + v_y^2}$; the angle $\theta$ with the $x$-axis has $\tan\theta = \dfrac{v_y}{v_x}$.`,
          t`The two velocities are equal for every interval only when the velocity does not change.`,
        ],
      },
      {
        title: "Acceleration in a plane",
        points: [
          t`**Acceleration** is $\vec{a} = \dfrac{d\vec{v}}{dt}$ $= a_x\hat{i} + a_y\hat{j}$, with $a_x = \dfrac{dv_x}{dt}$ and $a_y = \dfrac{dv_y}{dt}$.`,
          t`A change in the direction of $\vec{v}$ is an acceleration too, even at constant speed.`,
          t`$\vec{a}$ need not point along $\vec{v}$: it points the way $\vec{v}$ is changing.`,
        ],
      },
      {
        title: "Constant acceleration",
        points: [
          t`With constant $\vec{a}$: $\vec{v} = \vec{u} + \vec{a}t$ and $\vec{s}$ $= \vec{u}t + \dfrac{1}{2}\vec{a}t^2$.`,
          t`Along $x$: $v_x = u_x + a_xt$ and $x = u_xt + \dfrac{1}{2}a_xt^2$.`,
          t`Along $y$: $v_y = u_y + a_yt$ and $y = u_yt + \dfrac{1}{2}a_yt^2$.`,
          t`Each line uses only its own components: the two motions are independent.`,
          t`Find the components first, then the size and direction of the result.`,
        ],
      },
    ],
    worked: {
      prompt: t`A body starts from the origin with $\vec{u}$ $= \left(3\hat{i} + 4\hat{j}\right)\ \mathrm{m/s}$ and has a constant acceleration $\vec{a}$ $= \left(\hat{i} - 2\hat{j}\right)\ \mathrm{m/s^2}$. Find its velocity and its position after $4\ \mathrm{s}$.`,
      steps: [
        t`Components: $u_x = 3$, $u_y = 4$, $a_x = 1$, $a_y = -2$, in SI units.`,
        t`$v_x = 3 + 1 \times 4$ $= 7\ \mathrm{m/s}$ and $v_y = 4 - 2 \times 4$ $= -4\ \mathrm{m/s}$.`,
        t`Speed $= \sqrt{7^2 + 4^2} = \sqrt{65}$ $\approx 8.06\ \mathrm{m/s}$, at $\tan^{-1}\dfrac{4}{7} \approx 29.7^\circ$ below the $x$-axis.`,
        t`$x$ $= 3 \times 4 + \dfrac{1}{2} \times 1 \times 4^2$ $= 20\ \mathrm{m}$ and $y$ $= 4 \times 4 - \dfrac{1}{2} \times 2 \times 4^2$ $= 0$.`,
      ],
      answer: t`$\vec{v}$ $= \left(7\hat{i} - 4\hat{j}\right)\ \mathrm{m/s}$, about $8.06\ \mathrm{m/s}$; the body is at $\left(20\ \mathrm{m}, 0\right)$`,
    },
    visualSpec: t`Set an initial velocity arrow and a constant acceleration arrow, then play time forward: the body traces its path while its velocity's x and y parts grow separately.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Treats vectors as plain numbers, adding or subtracting their sizes.",
      remediation: "Vectors pointing different ways do not add by size: combine the components, then use Pythagoras for the size.",
      fallback: { kind: "ext", topic: "vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C03-M2",
      mistake: "Adds the components to get the size.",
      remediation: t`The size of $A_x\hat{i} + A_y\hat{j}$ is $\sqrt{A_x^2 + A_y^2}$, not $A_x + A_y$.`,
      fallback: { kind: "ext", topic: "vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C03-M3",
      mistake: "Forgets the initial velocity.",
      remediation: t`The body starts with velocity $\vec{u}$: $\vec{v} = \vec{u} + \vec{a}t$ and $\vec{s}$ $= \vec{u}t + \dfrac{1}{2}\vec{a}t^2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Forgets the $\dfrac{1}{2}$ in $\vec{s}$ $= \vec{u}t + \dfrac{1}{2}\vec{a}t^2$.`,
      remediation: t`The displacement is $\vec{u}t + \dfrac{1}{2}\vec{a}t^2$, applied to each component.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: "Uses the position vector where the velocity or the displacement is needed.",
      remediation: t`Velocity is the rate of change of position, $\dfrac{d\vec{r}}{dt}$, and average velocity uses the displacement $\vec{r}_2 - \vec{r}_1$, not the position.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: t`Writes $\tan\theta = \dfrac{v_x}{v_y}$.`,
      remediation: t`For the angle with the $x$-axis, $\tan\theta = \dfrac{v_y}{v_x}$: the $y$ part over the $x$ part.`,
      fallback: { kind: "ext", topic: "vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the velocity points along the acceleration.",
      remediation: t`Acceleration changes the velocity but need not point the same way. Here $\vec{a}$ is along $\hat{j}$, yet $\vec{v}$ keeps its $5\hat{i}$ part.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Uses $a_y$ in the $x$ equation.`,
      remediation: t`Each component uses only its own parts: the $x$ equation has $u_x$ and $a_x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: t`Thinks the $x$ motion stays uniform whatever the acceleration.`,
      remediation: t`That holds only when $a_x = 0$, as for a projectile. In general $x = u_xt + \dfrac{1}{2}a_xt^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks constant speed means constant velocity.",
      remediation: "Velocity has a direction too: a body going round a circle at constant speed keeps changing its velocity.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks constant acceleration makes the average and instantaneous velocities equal.",
      remediation: "With constant acceleration the velocity still changes, so its average over an interval differs from its value at most instants.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks moving along a straight line is enough.",
      remediation: "A body on a straight line can still speed up or slow down. The velocity must not change at all.",
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.5" },
      stem: t`A body has initial velocity $\vec{u} = \left(4\hat{i} + 2\hat{j}\right)\ \mathrm{m/s}$ and a constant acceleration $\vec{a} = \left(\hat{i} + 2\hat{j}\right)\ \mathrm{m/s^2}$. What is its speed after $4\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { ux: "4", uy: "2", ax: "1", ay: "2", t: "4" }, params: { ask: "speed" } },
      options: [
        { key: "A", text: t`$18\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M2", value: "18" },
        { key: "B", text: t`$8.94\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M3", value: "8.94000000000000" },
        { key: "C", text: t`$12.8\ \mathrm{m/s}$`, correct: true, value: "12.8000000000000" },
        { key: "D", text: t`$13.4\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M1", value: "13.4000000000000" },
      ],
      solution: {
        steps: [
          t`$\vec{v} = \vec{u} + \vec{a}t$ $= \left(4 + 1 \times 4\right)\hat{i} + \left(2 + 2 \times 4\right)\hat{j}$ $= 8\hat{i} + 10\hat{j}$.`,
          t`Speed $= \sqrt{8^2 + 10^2} = \sqrt{164}$ $\approx 12.8\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.5" },
      stem: t`The initial velocity of an object is $\vec{u} = \left(5\hat{i} + 10\hat{j}\right)\ \mathrm{m/s}$ and its constant acceleration is $\vec{a} = \left(2\hat{i} + 3\hat{j}\right)\ \mathrm{m/s^2}$. What is the size of its displacement after $5\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { ux: "5", uy: "10", ax: "2", ay: "3", t: "5" }, params: { ask: "disp" } },
      options: [
        { key: "A", text: t`$45.1\ \mathrm{m}$`, correct: false, misconceptionId: "C03-M3", value: "45.1000000000000" },
        { key: "B", text: t`$146\ \mathrm{m}$`, correct: false, misconceptionId: "C03-M4", value: "146" },
        { key: "C", text: t`$101\ \mathrm{m}$`, correct: true, value: "101" },
        { key: "D", text: t`$138\ \mathrm{m}$`, correct: false, misconceptionId: "C03-M2", value: "138" },
      ],
      solution: {
        steps: [
          t`$\vec{u}t = 25\hat{i} + 50\hat{j}$ and $\dfrac{1}{2}\vec{a}t^2$ $= \dfrac{1}{2}\left(2\hat{i} + 3\hat{j}\right) \times 25$ $= 25\hat{i} + 37.5\hat{j}$.`,
          t`$\vec{s} = 50\hat{i} + 87.5\hat{j}$, so $s = \sqrt{50^2 + 87.5^2}$ $\approx 101\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.4" },
      stem: t`The position of a particle is $\vec{r} = \left(5t\,\hat{i} + 10t^2\,\hat{j}\right)\ \mathrm{m}$, with $t$ in seconds. What angle does its velocity make with the $x$-axis at $t = 0.5\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { p: "5", q: "10", t: "1/2" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`$45^\circ$`, correct: false, misconceptionId: "C03-M5", value: "45" },
        { key: "B", text: t`$26.6^\circ$`, correct: false, misconceptionId: "C03-M6", value: "26.6000000000000" },
        { key: "C", text: t`$90^\circ$`, correct: false, misconceptionId: "C03-M7", value: "90" },
        { key: "D", text: t`$63.4^\circ$`, correct: true, value: "63.4000000000000" },
      ],
      solution: {
        steps: [
          t`$\vec{v} = \dfrac{d\vec{r}}{dt}$ $= 5\hat{i} + 20t\,\hat{j}$; at $t = 0.5\ \mathrm{s}$, $\vec{v} = 5\hat{i} + 10\hat{j}$.`,
          t`$\tan\theta = \dfrac{v_y}{v_x}$ $= \dfrac{10}{5}$ $= 2$, so $\theta \approx 63.4^\circ$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.2 (v)" },
      stem: t`A particle moves in the $xy$ plane from the origin with initial velocity $\vec{u} = u_x\hat{i} + u_y\hat{j}$ and constant acceleration $\vec{a} = a_x\hat{i} + a_y\hat{j}$. What is its $x$-coordinate at time $t$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "xeq" } },
      options: [
        { key: "A", text: t`$x = u_xt + \dfrac{1}{2}a_yt^2$`, correct: false, misconceptionId: "C03-M8", value: "x_ux_ay" },
        { key: "B", text: t`$x = u_xt$`, correct: false, misconceptionId: "C03-M9", value: "x_ux_only" },
        { key: "C", text: t`$x = u_xt + \dfrac{1}{2}a_xt^2$`, correct: true, value: "x_ux_ax" },
        { key: "D", text: t`$x = ut + \dfrac{1}{2}at^2$, with $u$ and $a$ the sizes of $\vec{u}$ and $\vec{a}$`, correct: false, misconceptionId: "C03-M1", value: "x_mag" },
      ],
      solution: {
        steps: [
          t`The $x$ motion is independent of the $y$ motion: it has initial velocity $u_x$ and acceleration $a_x$.`,
          t`So $x = u_xt + \dfrac{1}{2}a_xt^2$, the straight-line equation for the $x$ component.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.2 (ii)" },
      stem: t`When is the average velocity of a body over any time interval equal to its instantaneous velocity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "same" } },
      options: [
        { key: "A", text: t`When its velocity is constant`, correct: true, value: "const_velocity" },
        { key: "B", text: t`When its speed is constant`, correct: false, misconceptionId: "C03-M10", value: "const_speed" },
        { key: "C", text: t`When its acceleration is constant`, correct: false, misconceptionId: "C03-M11", value: "const_accel" },
        { key: "D", text: t`When it moves along a straight line`, correct: false, misconceptionId: "C03-M12", value: "straight_path" },
      ],
      solution: {
        steps: [
          t`The average over every interval equals the instantaneous value only if the velocity never changes, in size or direction.`,
          t`Constant speed allows a turning direction, and constant acceleration or a straight path allows a changing speed.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`A particle is at $\left(2\hat{i} + \hat{j}\right)\ \mathrm{m}$ at $t = 1\ \mathrm{s}$ and at $\left(8\hat{i} + 9\hat{j}\right)\ \mathrm{m}$ at $t = 3\ \mathrm{s}$. What is the size of its average velocity over this interval?`,
      verify: { kind: "value", inputs: { x1: "2", y1: "1", t1: "1", x2: "8", y2: "9", t2: "3" }, params: { ask: "avgv" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{m/s}$`, correct: true, value: "5" },
        { key: "B", text: t`$4.9\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M1", value: "4.90000000000000" },
        { key: "C", text: t`$7\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M2", value: "7" },
        { key: "D", text: t`$4.01\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M5", value: "4.01000000000000" },
      ],
      solution: {
        steps: [
          t`Displacement $\Delta\vec{r}$ $= \left(8 - 2\right)\hat{i} + \left(9 - 1\right)\hat{j}$ $= 6\hat{i} + 8\hat{j}$, in $\Delta t = 2\ \mathrm{s}$.`,
          t`$\vec{v}_{av} = 3\hat{i} + 4\hat{j}$, of size $\sqrt{3^2 + 4^2} = 5\ \mathrm{m/s}$.`,
        ],
      },
    },
  ],
};
