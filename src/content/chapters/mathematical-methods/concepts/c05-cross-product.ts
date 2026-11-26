import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`You push on a door near its hinge, then near its handle, with the same force. The door turns far more easily the second time. What does the turning depend on?`,
    reveal: t`On the force, how far from the hinge it acts, and the angle between them. The turning effect, **torque**, is a **vector product**: $\vec{\tau}$ $= \vec{r} \times \vec{F}$.`,
  },
  explanation: {
    intuition: [
      t`Some quantities come from two vectors and are vectors themselves: torque, angular momentum.`,
      t`Here only the part of one vector **across** the other counts: $B\sin\theta$.`,
      t`Multiplying by $A$ gives the size of the **vector product** (cross product), $AB\sin\theta$.`,
      t`Its direction is at right angles to both vectors.`,
      t`Vectors along the same line give zero; perpendicular ones give the most.`,
    ],
    formal: [
      {
        title: "Definition",
        points: [
          t`$\vec{A} \times \vec{B}$ $= AB\sin\theta\,\hat{n}$, where $\theta$ is the smaller angle between $\vec{A}$ and $\vec{B}$.`,
          t`$\hat{n}$ is a unit vector perpendicular to the plane containing $\vec{A}$ and $\vec{B}$.`,
          t`**Right-hand rule**: curl the fingers of the right hand from $\vec{A}$ towards $\vec{B}$; the thumb points along $\hat{n}$.`,
          t`Its magnitude $AB\sin\theta$ is the area of the parallelogram with sides $\vec{A}$ and $\vec{B}$.`,
          t`Example: torque $\vec{\tau}$ $= \vec{r} \times \vec{F}$; angular momentum $\vec{L} = \vec{r} \times \vec{p}$.`,
        ],
      },
      {
        title: "Properties",
        points: [
          t`It is **not** commutative: $\vec{B} \times \vec{A}$ $= -\vec{A} \times \vec{B}$.`,
          t`It is distributive: $\vec{A} \times (\vec{B} + \vec{C})$ $= \vec{A} \times \vec{B} + \vec{A} \times \vec{C}$.`,
          t`$\vec{A} \times \vec{A} = \vec{0}$, since $\sin 0^\circ = 0$; parallel vectors give $\vec{0}$.`,
          t`$\hat{i} \times \hat{i}$ $= \hat{j} \times \hat{j}$ $= \hat{k} \times \hat{k}$ $= \vec{0}$.`,
          t`In cyclic order: $\hat{i} \times \hat{j} = \hat{k}$, $\hat{j} \times \hat{k} = \hat{i}$, $\hat{k} \times \hat{i} = \hat{j}$.`,
          t`Against the order the sign flips: $\hat{j} \times \hat{i} = -\hat{k}$.`,
        ],
      },
      {
        title: "Using components",
        points: [
          t`Write $\vec{A} \times \vec{B}$ as a determinant with rows $\hat{i}, \hat{j}, \hat{k}$; $A_x, A_y, A_z$; $B_x, B_y, B_z$.`,
          t`$\hat{i}$ term: $A_yB_z - A_zB_y$.`,
          t`$\hat{j}$ term: $-(A_xB_z - A_zB_x)$; mind the minus sign.`,
          t`$\hat{k}$ term: $A_xB_y - A_yB_x$.`,
          t`For vectors in the $xy$-plane only the $\hat{k}$ term survives.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\vec{A} \times \vec{B}$ for $\vec{A} = \hat{i} + 2\hat{j}$ and $\vec{B}$ $= 2\hat{i} - \hat{j} + 3\hat{k}$.`,
      steps: [
        t`$\hat{i}$: $(2)(3) - (0)(-1) = 6$.`,
        t`$\hat{j}$: $-\left[(1)(3) - (0)(2)\right] = -3$.`,
        t`$\hat{k}$: $(1)(-1) - (2)(2) = -5$.`,
        t`So $\vec{A} \times \vec{B}$ $= 6\hat{i} - 3\hat{j} - 5\hat{k}$.`,
      ],
      answer: t`$6\hat{i} - 3\hat{j} - 5\hat{k}$`,
    },
    visualSpec: t`Turn $\vec{B}$ round $\vec{A}$ and watch the parallelogram they span, and the arrow $\vec{A} \times \vec{B}$ standing up from it, grow, vanish and flip.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Uses $\cos\theta$, as in the dot product.`,
      remediation: t`The vector product has magnitude $AB\sin\theta$; $\cos\theta$ belongs to the scalar product.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks unit vectors always give a magnitude of 1.",
      remediation: t`$|\hat{a} \times \hat{b}|$ $= (1)(1)\sin\theta$; it is $1$ only at $90^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Adds the magnitudes.",
      remediation: t`A vector product multiplies $A$, $B$ and $\sin\theta$; it never adds the magnitudes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Forgets the minus sign on the $\hat{j}$ term.`,
      remediation: t`The determinant's middle term is $-\hat{j}\,(A_xB_z - A_zB_x)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Takes the product in the wrong order.",
      remediation: t`$\vec{B} \times \vec{A}$ $= -\vec{A} \times \vec{B}$: keep the order given, first vector in the second row.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Multiplies matching components.",
      remediation: t`$\hat{i} \times \hat{i} = \vec{0}$: matching components give nothing; each term mixes the other two components.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Finds the scalar product instead.",
      remediation: t`$\vec{A} \times \vec{B}$ is a vector, found by the determinant; $\vec{A} \cdot \vec{B}$ is the number.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks the scalar product does not distribute over addition.",
      remediation: t`$\vec{A} \cdot (\vec{B} + \vec{C})$ $= \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C}$ is true; the false one is $\vec{A} \times \vec{B}$ $= \vec{B} \times \vec{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks the scalar product does not commute.",
      remediation: t`$AB\cos\theta = BA\cos\theta$, so $\vec{A} \cdot \vec{B}$ $= \vec{B} \cdot \vec{A}$ is true; the cross product is the one that flips.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks the vector product does not distribute over addition.",
      remediation: t`$\vec{A} \times (\vec{B} + \vec{C})$ $= \vec{A} \times \vec{B} + \vec{A} \times \vec{C}$ is true; what fails is the order, $\vec{B} \times \vec{A}$ $= -\vec{A} \times \vec{B}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Adds the cross terms instead of subtracting them.",
      remediation: t`The $\hat{k}$ term is $A_xB_y - A_yB_x$: a difference.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks perpendicular vectors give zero, as in the dot product.",
      remediation: t`Perpendicular vectors give the largest vector product, $\sin 90^\circ = 1$; it is the dot product that vanishes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Gives the magnitude and drops the direction.",
      remediation: "A vector product is a vector: here a unit vector along an axis, with its sign.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.1 (iv)" },
      stem: t`The magnitude of the vector product of two unit vectors making an angle of $60^\circ$ with each other is`,
      verify: { kind: "value", inputs: { th: "60" }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C05-M3", value: "2" },
        { key: "B", text: t`$\dfrac{\sqrt{3}}{2}$`, correct: true, value: "sqrt(3)/2" },
        { key: "C", text: t`$\dfrac{1}{2}$`, correct: false, misconceptionId: "C05-M1", value: "1/2" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C05-M2", value: "1" },
      ],
      solution: {
        steps: [
          t`$|\hat{a} \times \hat{b}|$ $= (1)(1)\sin 60^\circ$.`,
          t`$= \dfrac{\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (iii)" },
      stem: t`Determine the vector product of $\vec{v_1} = 2\hat{i} + 3\hat{j} - \hat{k}$ and $\vec{v_2} = \hat{i} + 2\hat{j} - 3\hat{k}$.`,
      verify: { kind: "value", inputs: { a1: "2", a2: "3", a3: "-1", b1: "1", b2: "2", b3: "-3" }, params: { ask: "cross" } },
      options: [
        { key: "A", text: t`$-7\hat{i} - 5\hat{j} + \hat{k}$`, correct: false, misconceptionId: "C05-M4", value: "-7*ihat - 5*jhat + khat" },
        { key: "B", text: t`$7\hat{i} - 5\hat{j} - \hat{k}$`, correct: false, misconceptionId: "C05-M5", value: "7*ihat - 5*jhat - khat" },
        { key: "C", text: t`$2\hat{i} + 6\hat{j} + 3\hat{k}$`, correct: false, misconceptionId: "C05-M6", value: "2*ihat + 6*jhat + 3*khat" },
        { key: "D", text: t`$-7\hat{i} + 5\hat{j} + \hat{k}$`, correct: true, value: "-7*ihat + 5*jhat + khat" },
      ],
      solution: {
        steps: [
          t`$\hat{i}$: $(3)(-3) - (-1)(2) = -7$.`,
          t`$\hat{j}$: $-\left[(2)(-3) - (-1)(1)\right]$ $= 5$.`,
          t`$\hat{k}$: $(2)(2) - (3)(1) = 1$; so $-7\hat{i} + 5\hat{j} + \hat{k}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.7" },
      stem: t`The angular momentum of a body is $\vec{L} = \vec{r} \times \vec{p}$. If $\vec{r} = (3\hat{i} - 2\hat{j} + \hat{k})\ \mathrm{m}$ and $\vec{p} = (\hat{i} + 2\hat{j} - 2\hat{k})\ \mathrm{kg\,m/s}$, what is $\vec{L}$?`,
      verify: { kind: "value", inputs: { a1: "3", a2: "-2", a3: "1", b1: "1", b2: "2", b3: "-2" }, params: { ask: "cross" } },
      options: [
        { key: "A", text: t`$(2\hat{i} + 7\hat{j} + 8\hat{k})\ \mathrm{kg\,m^2/s}$`, correct: true, value: "2*ihat + 7*jhat + 8*khat" },
        { key: "B", text: t`$(-2\hat{i} - 7\hat{j} - 8\hat{k})\ \mathrm{kg\,m^2/s}$`, correct: false, misconceptionId: "C05-M5", value: "-2*ihat - 7*jhat - 8*khat" },
        { key: "C", text: t`$(2\hat{i} - 7\hat{j} + 8\hat{k})\ \mathrm{kg\,m^2/s}$`, correct: false, misconceptionId: "C05-M4", value: "2*ihat - 7*jhat + 8*khat" },
        { key: "D", text: t`$-3\ \mathrm{kg\,m^2/s}$`, correct: false, misconceptionId: "C05-M7", value: "-3" },
      ],
      solution: {
        steps: [
          t`$\hat{i}$: $(-2)(-2) - (1)(2) = 2$.`,
          t`$\hat{j}$: $-\left[(3)(-2) - (1)(1)\right] = 7$.`,
          t`$\hat{k}$: $(3)(2) - (-2)(1) = 8$; so $\vec{L}$ $= (2\hat{i} + 7\hat{j} + 8\hat{k})\ \mathrm{kg\,m^2/s}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.1 (v)" },
      stem: t`If $\vec{A}$, $\vec{B}$ and $\vec{C}$ are three vectors, which of the following is **not** correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "false" } },
      options: [
        { key: "A", text: t`$\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$`, correct: false, misconceptionId: "C05-M9", value: "dot_commutes" },
        { key: "B", text: t`$\vec{A} \times (\vec{B} + \vec{C})$ $= \vec{A} \times \vec{B} + \vec{A} \times \vec{C}$`, correct: false, misconceptionId: "C05-M10", value: "cross_distributes" },
        { key: "C", text: t`$\vec{A} \times \vec{B} = \vec{B} \times \vec{A}$`, correct: true, value: "cross_commutes" },
        { key: "D", text: t`$\vec{A} \cdot (\vec{B} + \vec{C})$ $= \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C}$`, correct: false, misconceptionId: "C05-M8", value: "dot_distributes" },
      ],
      solution: {
        steps: [
          t`Both products distribute over addition, and the scalar product commutes.`,
          t`But $\vec{B} \times \vec{A}$ $= -\vec{A} \times \vec{B}$, so $\vec{A} \times \vec{B}$ $= \vec{B} \times \vec{A}$ is not correct.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (i)" },
      stem: t`Determine $\vec{a} \times \vec{b}$, given $\vec{a} = 3\hat{i} + 2\hat{j}$ and $\vec{b} = \hat{i} + 4\hat{j}$.`,
      verify: { kind: "value", inputs: { a1: "3", a2: "2", a3: "0", b1: "1", b2: "4", b3: "0" }, params: { ask: "cross" } },
      options: [
        { key: "A", text: t`$10\hat{k}$`, correct: true, value: "10*khat" },
        { key: "B", text: t`$-10\hat{k}$`, correct: false, misconceptionId: "C05-M5", value: "-10*khat" },
        { key: "C", text: t`$14\hat{k}$`, correct: false, misconceptionId: "C05-M11", value: "14*khat" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C05-M7", value: "11" },
      ],
      solution: {
        steps: [
          t`Both vectors lie in the $xy$-plane, so only the $\hat{k}$ term survives.`,
          t`$\hat{k}$: $(3)(4) - (2)(1) = 10$, so $\vec{a} \times \vec{b} = 10\hat{k}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`What is $\hat{k} \times \hat{j}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "kj" } },
      options: [
        { key: "A", text: t`$-\hat{i}$`, correct: true, value: "-ihat" },
        { key: "B", text: t`$\hat{i}$`, correct: false, misconceptionId: "C05-M5", value: "ihat" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C05-M12", value: "0" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C05-M13", value: "1" },
      ],
      solution: {
        steps: [
          t`In cyclic order, $\hat{j} \times \hat{k} = \hat{i}$.`,
          t`Reversing the order flips the sign: $\hat{k} \times \hat{j} = -\hat{i}$.`,
        ],
      },
    },
  ],
};
