import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`You measure a pendulum's length to $0.1\%$ and its period to $0.5\%$, then work out $g = \dfrac{4\pi^2l}{T^2}$. Is your $g$ good to $0.5\%$? To $0.6\%$?`,
    reveal: t`Neither: it is good only to $1.1\%$. Errors grow when quantities are combined, and a squared quantity counts twice. Knowing the rules tells you which measurement to make more carefully.`,
  },
  explanation: {
    intuition: [
      t`A result worked out from several measurements carries all their errors.`,
      t`In the worst case the errors do not cancel: they pile up.`,
      t`For sums and differences, the **absolute** errors add.`,
      t`For products and quotients, the **relative** (or percentage) errors add.`,
      t`A quantity raised to a power $n$ brings $n$ times its relative error.`,
    ],
    formal: [
      {
        title: "Sums and differences",
        points: [
          t`If $Z = A + B$ or $Z = A - B$, the greatest error is $\Delta Z = \Delta A + \Delta B$.`,
          t`Even in a difference the errors add: they could lie in opposite directions.`,
        ],
      },
      {
        title: "Products, quotients and powers",
        points: [
          t`If $Z = AB$ or $Z = \dfrac{A}{B}$: $\dfrac{\Delta Z}{Z}$ $= \dfrac{\Delta A}{A} + \dfrac{\Delta B}{B}$.`,
          t`If $Z = A^n$: $\dfrac{\Delta Z}{Z}$ $= n\dfrac{\Delta A}{A}$; this holds for fractional powers too.`,
          t`For $Z = \dfrac{A^pB^q}{C^r}$: $\dfrac{\Delta Z}{Z}$ $= p\dfrac{\Delta A}{A} + q\dfrac{\Delta B}{B} + r\dfrac{\Delta C}{C}$.`,
          t`Every term adds, even for factors in the denominator; constants like $4\pi^2$ add nothing.`,
        ],
      },
    ],
    worked: {
      prompt: t`The radius of a sphere is measured with an error of $1.5\%$. What is the percentage error in its volume, $V = \dfrac{4}{3}\pi r^3$?`,
      steps: [
        t`$\dfrac{4}{3}\pi$ is exact, so it adds no error.`,
        t`$V \propto r^3$, so $\dfrac{\Delta V}{V}$ $= 3\dfrac{\Delta r}{r}$.`,
        t`$3 \times 1.5\% = 4.5\%$.`,
      ],
      answer: t`$4.5\%$`,
    },
    visualSpec: t`Combine measurements with their error bars and watch the errors add up, with a squared quantity counting double.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Subtracts the errors.",
      remediation: t`In the worst case the errors pile up: $\Delta Z = \Delta A + \Delta B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Averages the errors.",
      remediation: "Both errors can be in the total at once: add them.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Adds relative errors for a sum.",
      remediation: "For a sum, the absolute errors add; relative errors add for products and quotients.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Ignores the powers.",
      remediation: t`A quantity to the power $n$ brings $n$ times its relative error: $T^2$ counts twice.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Subtracts the errors of factors in the denominator.",
      remediation: "Errors always add in the worst case, whether the factor multiplies or divides.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Multiplies the percentage errors.",
      remediation: "Percentage errors add for a product; they do not multiply.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Leaves out the denominator's errors.",
      remediation: "Every measured factor adds its own relative error, above or below the line.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Takes one factor's error only.",
      remediation: t`Both sides are measured, so both errors count: $1\% + 1\% = 2\%$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks a product halves the error.",
      remediation: "Combining measurements adds their relative errors; it never shrinks them.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Squares the total percentage error.",
      remediation: t`Add the percentage errors, $1\% + 1\% = 2\%$; do not square them.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (i)" },
      stem: t`The masses of two bodies are $\left(15.7 \pm 0.2\right)\ \mathrm{kg}$ and $\left(27.3 \pm 0.3\right)\ \mathrm{kg}$. What is the error in their total mass?`,
      verify: { kind: "value", inputs: { A: "15.7", dA: "0.2", B: "27.3", dB: "0.3" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$0.1\ \mathrm{kg}$`, correct: false, misconceptionId: "C06-M1", value: "0.100000000000000" },
        { key: "B", text: t`$0.25\ \mathrm{kg}$`, correct: false, misconceptionId: "C06-M2", value: "0.250000000000000" },
        { key: "C", text: t`$1.02\ \mathrm{kg}$`, correct: false, misconceptionId: "C06-M3", value: "1.02000000000000" },
        { key: "D", text: t`$0.5\ \mathrm{kg}$`, correct: true, value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`For a sum, the absolute errors add.`,
          t`$\Delta M = 0.2 + 0.3$ $= 0.5\ \mathrm{kg}$; the total is $\left(43.0 \pm 0.5\right)\ \mathrm{kg}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.1 (ii)" },
      stem: t`Each side of a rectangle is measured with an error of $1\%$. What is the percentage error in its area?`,
      verify: { kind: "value", inputs: { es: "1,1", ps: "1,1" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{\%}$`, correct: true, value: "2" },
        { key: "B", text: t`$1\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M8", value: "1" },
        { key: "C", text: t`$0.5\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M9", value: "0.500000000000000" },
        { key: "D", text: t`$4\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M10", value: "4" },
      ],
      solution: {
        steps: [
          t`Area $= lb$: the relative errors add.`,
          t`$1\% + 1\% = 2\%$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.7" },
      stem: t`$g$ is found from a pendulum, $g = \dfrac{4\pi^2l}{T^2}$, with $l = \left(100 \pm 0.1\right)\ \mathrm{cm}$ and $T = \left(2 \pm 0.01\right)\ \mathrm{s}$. What is the greatest percentage error in $g$?`,
      verify: { kind: "value", inputs: { xs: "100,2", dxs: "0.1,0.01", ps: "1,-2" }, params: { ask: "pct_from" } },
      options: [
        { key: "A", text: t`$1.1\ \mathrm{\%}$`, correct: true, value: "1.10000000000000" },
        { key: "B", text: t`$0.6\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M4", value: "0.600000000000000" },
        { key: "C", text: t`$0.9\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M5", value: "0.900000000000000" },
        { key: "D", text: t`$0.1\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M7", value: "0.100000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta l}{l}$ $= \dfrac{0.1}{100}$ $= 0.1\%$; $\dfrac{\Delta T}{T}$ $= \dfrac{0.01}{2}$ $= 0.5\%$.`,
          t`$\dfrac{\Delta g}{g}$ $= 0.1\% + 2 \times 0.5\%$ $= 1.1\%$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (xiv)" },
      stem: t`$X = \dfrac{a^4b^3}{c^{1/3}d^{1/2}}$, and $a$, $b$, $c$, $d$ are measured with percentage errors of $2\%$, $3\%$, $3\%$ and $4\%$. What is the percentage error in $X$?`,
      verify: { kind: "value", inputs: { es: "2,3,3,4", ps: "4,3,-1/3,-1/2" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`$17\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M7", value: "17" },
        { key: "B", text: t`$20\ \mathrm{\%}$`, correct: true, value: "20" },
        { key: "C", text: t`$12\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M4", value: "12" },
        { key: "D", text: t`$14\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M5", value: "14" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta X}{X}$ $= 4\left(2\right) + 3\left(3\right) + \dfrac{1}{3}\left(3\right) + \dfrac{1}{2}\left(4\right)$.`,
          t`$= 8 + 9 + 1 + 2 = 20\%$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (vii)" },
      stem: t`A body of mass $\left(60.0 \pm 0.3\right)\ \mathrm{g}$ moves at $\left(25.0 \pm 0.1\right)\ \mathrm{cm/s}$. What is the percentage error in its kinetic energy?`,
      verify: { kind: "value", inputs: { xs: "60.0,25.0", dxs: "0.3,0.1", ps: "1,2" }, params: { ask: "pct_from" } },
      options: [
        { key: "A", text: t`$1.3\ \mathrm{\%}$`, correct: true, value: "1.30000000000000" },
        { key: "B", text: t`$0.9\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M4", value: "0.900000000000000" },
        { key: "C", text: t`$0.2\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M6", value: "0.200000000000000" },
        { key: "D", text: t`$0.5\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M8", value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`$K = \dfrac{1}{2}mv^2$: $\dfrac{\Delta m}{m}$ $= \dfrac{0.3}{60}$ $= 0.5\%$, $\dfrac{\Delta v}{v}$ $= \dfrac{0.1}{25}$ $= 0.4\%$.`,
          t`$\dfrac{\Delta K}{K}$ $= 0.5\% + 2 \times 0.4\%$ $= 1.3\%$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.6" },
      stem: t`The volume of an object is found from $V = \dfrac{m}{\rho}$, with $m = \left(5 \pm 0.15\right)\ \mathrm{kg}$ and $\rho = \left(5 \pm 0.2\right)\ \mathrm{kg\,m^{-3}}$. What is the percentage error in $V$?`,
      verify: { kind: "value", inputs: { xs: "5,5", dxs: "0.15,0.2", ps: "1,-1" }, params: { ask: "pct_from" } },
      options: [
        { key: "A", text: t`$12\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M6", value: "12" },
        { key: "B", text: t`$3\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M7", value: "3" },
        { key: "C", text: t`$7\ \mathrm{\%}$`, correct: true, value: "7" },
        { key: "D", text: t`$1\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta m}{m}$ $= \dfrac{0.15}{5}$ $= 3\%$; $\dfrac{\Delta\rho}{\rho}$ $= \dfrac{0.2}{5}$ $= 4\%$.`,
          t`$V = \dfrac{m}{\rho}$: $3\% + 4\% = 7\%$.`,
        ],
      },
    },
  ],
};
