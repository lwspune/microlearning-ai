import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Water runs downhill, fastest where the slope is steepest. Is there a 'slope' that tells a positive charge which way to move, and how hard it is pushed?`,
    reveal: t`Yes: the potential. A positive charge is pushed the way the potential falls, and the steeper the fall per metre, the stronger the field: $E = -\dfrac{dV}{dx}$.`,
  },
  explanation: {
    intuition: [
      t`The **potential gradient** is how fast the potential changes with distance, $\dfrac{dV}{dx}$.`,
      t`The electric field equals the potential gradient, with a minus sign: it points the way $V$ falls.`,
      t`Where the potential changes quickly, the field is strong; where it is flat, the field is weak.`,
      t`Between two parallel plates the potential falls steadily, so the field is the same everywhere: $E = \dfrac{V}{d}$.`,
    ],
    formal: [
      {
        title: "Field and potential",
        points: [
          t`Moving a charge $q_0$ by $dx$ against a field $E$ takes work $dW = -q_0E\,dx$.`,
          t`That work is $q_0\,dV$, so $E = -\dfrac{dV}{dx}$.`,
          t`The minus sign: the field points from high potential to low potential.`,
          t`Its SI unit is $\mathrm{V/m}$, the same as $\mathrm{N/C}$.`,
        ],
      },
      {
        title: "Uniform field",
        points: [
          t`Between parallel plates a distance $d$ apart with potential difference $V$: $E = \dfrac{V}{d}$.`,
          t`Put $d$ in metres to get $E$ in $\mathrm{V/m}$.`,
          t`A charge $q$ held at rest between horizontal plates has $qE = mg$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two parallel plates $4\ \mathrm{mm}$ apart have $200\ \mathrm{V}$ across them. Find the field between them and the force on an electron there.`,
      steps: [
        t`$E = \dfrac{V}{d}$ $= \dfrac{200}{4 \times 10^{-3}}$ $= 5 \times 10^4\ \mathrm{V/m}$.`,
        t`$F = eE$ $= 1.6 \times 10^{-19} \times 5 \times 10^4$.`,
        t`$F = 8 \times 10^{-15}\ \mathrm{N}$, towards the positive plate, since the electron is negative.`,
      ],
      answer: t`$5 \times 10^4\ \mathrm{V/m}$; $8 \times 10^{-15}\ \mathrm{N}$ towards the positive plate`,
    },
    visualSpec: t`Draw the potential along a line as a hill and show the field arrows pointing downhill, longest where the hill is steepest.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Leaves the distance in cm.",
      remediation: t`$E = \dfrac{V}{d}$ in $\mathrm{V/m}$ needs $d$ in metres: $5\ \mathrm{cm} = 0.05\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Forgets $g$: takes $qE$ as the mass.`,
      remediation: t`$qE$ is a force; it balances the weight $mg$, so $m = \dfrac{qE}{g}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Multiplies $V$ by $d$ instead of dividing.`,
      remediation: t`The field is the potential change per metre: $E = \dfrac{V}{d}$, in $\mathrm{V/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Gives the unit of potential instead of potential gradient.",
      remediation: "A gradient is a change per unit length: volts per metre.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M5",
      mistake: "Drops the minus sign.",
      remediation: t`$E = -\dfrac{dV}{dx}$: the field points the way the potential falls.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Uses $\dfrac{V}{x}$ instead of the slope.`,
      remediation: t`The field depends on how fast $V$ changes, $\dfrac{dV}{dx}$, not on $V$ itself.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: t`Takes $E = -V$.`,
      remediation: t`Differentiate: $E = -\dfrac{dV}{dx}$. For $V = 5x^2 + 3$, $\dfrac{dV}{dx} = 10x$.`,
      fallback: { kind: "ext", topic: "differentiation (Std XI Maths)" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks the field runs along the surfaces of equal potential.",
      remediation: t`Along an equipotential $V$ does not change, so there is no field along it: the field crosses it at right angles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks the field's direction has nothing to do with the potential.",
      remediation: t`$E = -\dfrac{dV}{dx}$ ties them together: the field always points down the potential.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.9" },
      stem: t`A small particle carrying a charge of $-3.2 \times 10^{-19}\ \mathrm{C}$ hangs at rest between two horizontal metal plates $5\ \mathrm{cm}$ apart, with $2000\ \mathrm{V}$ across them. What is its mass? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { q: "3.2e-19", d_cm: "5", V: "2000", g: "9.8" }, params: { ask: "drop" } },
      options: [
        { key: "A", text: t`$1.31 \times 10^{-17}\ \mathrm{kg}$`, correct: false, misconceptionId: "C06-M1", value: "1.31000000000000e-17" },
        { key: "B", text: t`$1.28 \times 10^{-14}\ \mathrm{kg}$`, correct: false, misconceptionId: "C06-M2", value: "1.28000000000000e-14" },
        { key: "C", text: t`$3.27 \times 10^{-18}\ \mathrm{kg}$`, correct: false, misconceptionId: "C06-M3", value: "3.27000000000000e-18" },
        { key: "D", text: t`$1.31 \times 10^{-15}\ \mathrm{kg}$`, correct: true, value: "1.31000000000000e-15" },
      ],
      solution: {
        steps: [
          t`$E = \dfrac{V}{d}$ $= \dfrac{2000}{0.05}$ $= 4 \times 10^4\ \mathrm{V/m}$.`,
          t`At rest, $qE = mg$: $m$ $= \dfrac{3.2 \times 10^{-19} \times 4 \times 10^4}{9.8}$.`,
          t`$m \approx 1.31 \times 10^{-15}\ \mathrm{kg}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.5(iv)" },
      stem: t`What is the SI unit of potential gradient?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`$\mathrm{V/m}$`, correct: true, value: "V_per_m" },
        { key: "B", text: t`$\mathrm{V\,m}$`, correct: false, misconceptionId: "C06-M3", value: "V_m" },
        { key: "C", text: t`$\mathrm{V/cm}$`, correct: false, misconceptionId: "C06-M1", value: "V_per_cm" },
        { key: "D", text: t`$\mathrm{V}$`, correct: false, misconceptionId: "C06-M4", value: "V" },
      ],
      solution: {
        steps: [
          t`Potential gradient is the change in potential per unit distance.`,
          t`So its SI unit is volt per metre, $\mathrm{V/m}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.2(vi)" },
      stem: t`Along the $x$-axis the potential is $V = 5x^2 + 3$, with $V$ in volts and $x$ in metres. What is the electric field at $x = 2\ \mathrm{m}$?`,
      verify: { kind: "value", inputs: { a: "5", b: "3", x: "2" }, params: { ask: "grad" } },
      options: [
        { key: "A", text: t`$-20\ \mathrm{V/m}$`, correct: true, value: "-20" },
        { key: "B", text: t`$20\ \mathrm{V/m}$`, correct: false, misconceptionId: "C06-M5", value: "20" },
        { key: "C", text: t`$11.5\ \mathrm{V/m}$`, correct: false, misconceptionId: "C06-M6", value: "11.5000000000000" },
        { key: "D", text: t`$-23\ \mathrm{V/m}$`, correct: false, misconceptionId: "C06-M7", value: "-23" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dV}{dx} = 10x$ $= 20\ \mathrm{V/m}$ at $x = 2\ \mathrm{m}$.`,
          t`$E = -\dfrac{dV}{dx}$ $= -20\ \mathrm{V/m}$: $20\ \mathrm{V/m}$ along $-x$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`How is the direction of the electric field at a point related to the potential there?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`It has nothing to do with how the potential changes`, correct: false, misconceptionId: "C06-M9", value: "unrelated" },
        { key: "B", text: t`It points the way the potential falls fastest`, correct: true, value: "down" },
        { key: "C", text: t`It points the way the potential rises fastest`, correct: false, misconceptionId: "C06-M5", value: "up" },
        { key: "D", text: t`It runs along the surface of equal potential`, correct: false, misconceptionId: "C06-M8", value: "along" },
      ],
      solution: {
        steps: [
          t`$E = -\dfrac{dV}{dx}$: the minus sign sets the direction.`,
          t`So the field points the way the potential falls fastest.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`In a uniform field along the $x$-axis, the potential is $100\ \mathrm{V}$ at $x = 0$ and $40\ \mathrm{V}$ at $x = 0.3\ \mathrm{m}$. What is the electric field?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "two" } },
      options: [
        { key: "A", text: t`$200\ \mathrm{V/m}$ along $+x$`, correct: true, value: "pos200" },
        { key: "B", text: t`$200\ \mathrm{V/m}$ along $-x$`, correct: false, misconceptionId: "C06-M5", value: "neg200" },
        { key: "C", text: t`$133\ \mathrm{V/m}$ along $+x$`, correct: false, misconceptionId: "C06-M6", value: "pos133" },
        { key: "D", text: t`$18\ \mathrm{V/m}$ along $+x$`, correct: false, misconceptionId: "C06-M3", value: "pos18" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dV}{dx}$ $= \dfrac{40 - 100}{0.3}$ $= -200\ \mathrm{V/m}$.`,
          t`$E = -\dfrac{dV}{dx}$ $= +200\ \mathrm{V/m}$: along $+x$, towards lower potential.`,
        ],
      },
    },
  ],
};
