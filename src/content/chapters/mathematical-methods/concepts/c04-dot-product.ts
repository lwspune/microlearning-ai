import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A porter carries a heavy box steadily across a flat platform. Gravity pulls on the box the whole way. Yet physics says gravity does no work on it. How?`,
    reveal: t`Work is the **scalar product** $\vec{F} \cdot \vec{s}$ $= Fs\cos\theta$. Gravity acts down, the box moves sideways: $\theta = 90^\circ$, and $\cos 90^\circ = 0$.`,
  },
  explanation: {
    intuition: [
      t`Some quantities come from two vectors but have no direction: work comes from force and displacement.`,
      t`Only the part of one vector along the other counts.`,
      t`That part of $\vec{B}$ along $\vec{A}$ is $B\cos\theta$.`,
      t`Multiplying it by $A$ gives the **scalar product** (dot product), $AB\cos\theta$.`,
      t`Vectors along the same line give the most; perpendicular vectors give zero.`,
    ],
    formal: [
      {
        title: "Definition",
        points: [
          t`$\vec{A} \cdot \vec{B}$ $= AB\cos\theta$, where $\theta$ is the angle between $\vec{A}$ and $\vec{B}$.`,
          t`The result is a **scalar**: a number, with no direction.`,
          t`It is $A$ times the projection of $\vec{B}$ on $\vec{A}$, $B\cos\theta$.`,
          t`It is positive for $\theta < 90^\circ$, zero at $90^\circ$, negative for $\theta > 90^\circ$.`,
          t`Example: work $W = \vec{F} \cdot \vec{s}$ $= Fs\cos\theta$.`,
        ],
      },
      {
        title: "Properties",
        points: [
          t`It is commutative: $\vec{A} \cdot \vec{B}$ $= \vec{B} \cdot \vec{A}$.`,
          t`It is distributive: $\vec{A} \cdot (\vec{B} + \vec{C})$ $= \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C}$.`,
          t`$\vec{A} \cdot \vec{A} = A^2$, since $\cos 0^\circ = 1$.`,
          t`$\hat{i} \cdot \hat{i}$ $= \hat{j} \cdot \hat{j}$ $= \hat{k} \cdot \hat{k}$ $= 1$.`,
          t`$\hat{i} \cdot \hat{j}$ $= \hat{j} \cdot \hat{k}$ $= \hat{k} \cdot \hat{i}$ $= 0$: they are perpendicular.`,
        ],
      },
      {
        title: "Using components",
        points: [
          t`Expand $(A_x\hat{i} + A_y\hat{j} + A_z\hat{k}) \cdot (B_x\hat{i} + B_y\hat{j} + B_z\hat{k})$ term by term.`,
          t`The six mixed terms vanish, leaving $\vec{A} \cdot \vec{B}$ $= A_xB_x + A_yB_y + A_zB_z$.`,
          t`So $\cos\theta$ $= \dfrac{A_xB_x + A_yB_y + A_zB_z}{AB}$.`,
          t`Two non-zero vectors are perpendicular exactly when $\vec{A} \cdot \vec{B} = 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Are $\vec{a}$ $= \hat{i} + 2\hat{j} - 2\hat{k}$ and $\vec{b}$ $= 2\hat{i} + \hat{j} + 2\hat{k}$ perpendicular?`,
      steps: [
        t`Multiply matching components and add: $\vec{a} \cdot \vec{b}$ $= (1)(2) + (2)(1) + (-2)(2)$.`,
        t`$= 2 + 2 - 4 = 0$.`,
        t`Neither vector is zero, so $\cos\theta = 0$ and $\theta = 90^\circ$.`,
      ],
      answer: t`Yes: $\vec{a} \cdot \vec{b} = 0$, so they are perpendicular`,
    },
    visualSpec: t`Turn $\vec{B}$ round $\vec{A}$ and watch its shadow $B\cos\theta$ on $\vec{A}$, and the dot product with it, shrink to zero at $90^\circ$ and go negative beyond.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Keeps the products as a vector.",
      remediation: t`The scalar product is a number: add the three products, $A_xB_x + A_yB_y + A_zB_z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Drops the minus signs of the components.",
      remediation: t`Keep each component's sign: $3 \times (-2) = -6$, which takes away from the total.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Multiplies every component by every other one.",
      remediation: t`$\hat{i} \cdot \hat{j} = 0$ and so on: only matching components, $x$ with $x$, $y$ with $y$, $z$ with $z$, survive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Uses $\sin\theta$ for the angle.`,
      remediation: t`The scalar product carries $\cos\theta$: $\cos\theta$ $= \dfrac{\vec{A} \cdot \vec{B}}{AB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Divides by the squares of the magnitudes.",
      remediation: t`Divide by $AB$, the product of the magnitudes, not by $A^2B^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Divides by the sum of the magnitudes.",
      remediation: t`$\vec{A} \cdot \vec{B}$ $= AB\cos\theta$, so divide by the product $AB$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks unit vectors always give 1.",
      remediation: t`$\hat{a} \cdot \hat{b}$ $= (1)(1)\cos\theta$; at $90^\circ$ that is $0$. Only $\hat{a} \cdot \hat{a} = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Thinks perpendicular vectors give $-1$.`,
      remediation: t`$\cos 90^\circ = 0$; it is opposite vectors, at $180^\circ$, that give $-1$ for unit vectors.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Adds the magnitudes.",
      remediation: t`A scalar product multiplies $A$, $B$ and $\cos\theta$; it never adds the magnitudes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Slips a sign while solving.",
      remediation: t`$4a + 3(-8) = 0$ gives $4a = 24$, so $a = 6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Uses the condition for parallel vectors.",
      remediation: t`Equal ratios of components mean parallel; perpendicular means $\vec{v_1} \cdot \vec{v_2} = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Multiplies unlike components.",
      remediation: t`Multiply $x$ with $x$ and $y$ with $y$: $4a + 3(-8) = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Multiplies the magnitudes, ignoring the angle.",
      remediation: t`$W = Fs\cos\theta$; with components, $W = F_xs_x + F_ys_y + F_zs_z$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.6" },
      stem: t`Find the scalar product of $\vec{v_1} = 2\hat{i} + 3\hat{j} - \hat{k}$ and $\vec{v_2} = 4\hat{i} - 2\hat{j} + 3\hat{k}$.`,
      verify: { kind: "value", inputs: { a1: "2", a2: "3", a3: "-1", b1: "4", b2: "-2", b3: "3" }, params: { ask: "dot" } },
      options: [
        { key: "A", text: t`$17$`, correct: false, misconceptionId: "C04-M2", value: "17" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C04-M3", value: "20" },
        { key: "C", text: t`$-1$`, correct: true, value: "-1" },
        { key: "D", text: t`$8\hat{i} - 6\hat{j} - 3\hat{k}$`, correct: false, misconceptionId: "C04-M1", value: "8*ihat - 6*jhat - 3*khat" },
      ],
      solution: {
        steps: [
          t`$\vec{v_1} \cdot \vec{v_2}$ $= (2)(4) + (3)(-2) + (-1)(3)$.`,
          t`$= 8 - 6 - 3 = -1$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.8" },
      stem: t`If $\vec{A} = 2\hat{i} + 2\hat{j} + \hat{k}$ and $\vec{B} = 6\hat{i} - 3\hat{j} + 2\hat{k}$, what is the angle between $\vec{A}$ and $\vec{B}$?`,
      verify: { kind: "value", inputs: { a1: "2", a2: "2", a3: "1", b1: "6", b2: "-3", b3: "2" }, params: { ask: "ang" } },
      options: [
        { key: "A", text: t`$22.4^\circ$`, correct: false, misconceptionId: "C04-M4", value: "22.4000000000000" },
        { key: "B", text: t`$89^\circ$`, correct: false, misconceptionId: "C04-M5", value: "89" },
        { key: "C", text: t`$36.9^\circ$`, correct: false, misconceptionId: "C04-M6", value: "36.9000000000000" },
        { key: "D", text: t`$67.6^\circ$`, correct: true, value: "67.6000000000000" },
      ],
      solution: {
        steps: [
          t`$\vec{A} \cdot \vec{B} = 12 - 6 + 2$ $= 8$; $A = \sqrt{4 + 4 + 1} = 3$, $B = \sqrt{36 + 9 + 4} = 7$.`,
          t`$\cos\theta = \dfrac{8}{3 \times 7}$ $= \dfrac{8}{21} \approx 0.381$.`,
          t`$\theta \approx 67.6^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.1 (iii)" },
      stem: t`The magnitude of the scalar product of two unit vectors perpendicular to each other is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "perp" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C04-M8", value: "-1" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C04-M9", value: "2" },
        { key: "C", text: t`$0$`, correct: true, value: "0" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C04-M7", value: "1" },
      ],
      solution: {
        steps: [
          t`$\hat{a} \cdot \hat{b}$ $= (1)(1)\cos 90^\circ$.`,
          t`$= 0$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (iv)" },
      stem: t`$\vec{v_1} = 4\hat{i} + 3\hat{j}$ and $\vec{v_2} = a\hat{i} - 8\hat{j}$ are perpendicular to each other. What is $a$?`,
      verify: { kind: "value", inputs: { p1: "4", p2: "3", q2: "-8" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`$-6$`, correct: false, misconceptionId: "C04-M10", value: "-6" },
        { key: "B", text: t`$-\dfrac{32}{3}$`, correct: false, misconceptionId: "C04-M11", value: "-32/3" },
        { key: "C", text: t`$\dfrac{32}{3}$`, correct: false, misconceptionId: "C04-M12", value: "32/3" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Perpendicular: $\vec{v_1} \cdot \vec{v_2} = 0$, so $4a + (3)(-8) = 0$.`,
          t`$4a = 24$, so $a = 6$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`A force $\vec{F} = (2\hat{i} + 3\hat{j} + 4\hat{k})\ \mathrm{N}$ moves a body through a displacement $\vec{s} = (3\hat{i} - 2\hat{j} + \hat{k})\ \mathrm{m}$. How much work does it do?`,
      verify: { kind: "value", inputs: { a1: "2", a2: "3", a3: "4", b1: "3", b2: "-2", b3: "1" }, params: { ask: "work" } },
      options: [
        { key: "A", text: t`$18\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "18" },
        { key: "B", text: t`$4\ \mathrm{J}$`, correct: true, value: "4" },
        { key: "C", text: t`$20.1\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M13", value: "20.1000000000000" },
        { key: "D", text: t`$16\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M2", value: "16" },
      ],
      solution: {
        steps: [
          t`$W = \vec{F} \cdot \vec{s}$ $= (2)(3) + (3)(-2) + (4)(1)$.`,
          t`$= 6 - 6 + 4 = 4\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
