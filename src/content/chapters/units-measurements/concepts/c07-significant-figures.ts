import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A calculator divides a length of $5.2\ \mathrm{m}$ by a time of $3.0\ \mathrm{s}$ and shows $1.733333333$. Should you write all those digits down?`,
    reveal: t`No. The data are good to only two figures, so the result is too: $1.7\ \mathrm{m/s}$. The extra digits claim a precision nobody measured. **Significant figures** keep results honest.`,
  },
  explanation: {
    intuition: [
      t`The **significant figures** of a measurement are the digits known reliably, plus the first doubtful one.`,
      t`More significant figures mean a more precise measurement.`,
      t`A calculation cannot make a result more precise than its least precise data.`,
      t`For rough comparisons we keep only the **order of magnitude**: the nearest power of ten.`,
    ],
    formal: [
      {
        title: "Counting significant figures",
        points: [
          t`All non-zero digits count; zeros between them count: $205$ has $3$.`,
          t`Leading zeros only place the decimal point and do not count: $0.003$ has $1$.`,
          t`Trailing zeros after a decimal point count: $0.1250$ has $4$.`,
          t`In $a \times 10^b$, only the digits of $a$ count: $6.4 \times 10^6$ has $2$.`,
        ],
      },
      {
        title: "Rounding results",
        points: [
          t`Multiplying or dividing: keep as many significant figures as the factor with the fewest.`,
          t`Exact numbers, like the $\dfrac{4}{3}$ in $\dfrac{4}{3}\pi r^3$ or a count, do not limit the figures.`,
          t`Round only the final answer, not every step.`,
        ],
      },
      {
        title: "Order of magnitude",
        points: [
          t`Write the number as $N \times 10^x$ with $1 \le N < 10$.`,
          t`If $N \le 5$ the order of magnitude is $10^x$; if $N > 5$ it is $10^{x + 1}$.`,
          t`So $2.1 \times 10^6$ is of order $10^6$, and $6.5 \times 10^{-16}$ of order $10^{-15}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A rectangle measures $12.6\ \mathrm{cm}$ by $3.2\ \mathrm{cm}$. Find its area to the correct number of significant figures.`,
      steps: [
        t`$12.6 \times 3.2$ $= 40.32\ \mathrm{cm^2}$ on a calculator.`,
        t`$3.2$ has only $2$ significant figures, so the area keeps $2$.`,
        t`Area $\approx 40\ \mathrm{cm^2}$, better written $4.0 \times 10^1\ \mathrm{cm^2}$.`,
      ],
      answer: t`$4.0 \times 10^1\ \mathrm{cm^2}$`,
    },
    visualSpec: t`Multiply measurements of different precision and watch the result trimmed to the weakest one's figures.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Leaves the thickness in centimetres.",
      remediation: t`$2.01\ \mathrm{cm}$ $= 0.0201\ \mathrm{m}$: use one unit throughout.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Keeps every digit the calculator shows.",
      remediation: "The result can be no more precise than the data: round to the fewest significant figures.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Keeps the figures of the most precise datum.",
      remediation: t`It is the *least* precise datum, here $2.01$ with $3$ figures, that limits the result.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Drops a trailing zero after the decimal point.",
      remediation: t`A trailing zero after the decimal point was measured, so it counts: $0.1250$ has $4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Counts the leading zero.",
      remediation: "Zeros before the first non-zero digit only place the decimal point.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Counts only the first digit.",
      remediation: "Every digit from the first non-zero one onwards counts, including measured trailing zeros.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Uses the diameter as the radius.",
      remediation: t`$r = \dfrac{d}{2}$ $= 1.07\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Lets the exact $\dfrac{4}{3}$ limit the figures.`,
      remediation: t`Exact numbers have unlimited precision; only the measured $2.14$ limits the answer to $3$ figures.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Takes the power of ten without rounding up.",
      remediation: t`$6.5 \times 10^{-16}$: $6.5 > 5$, so the order of magnitude is $10^{-15}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Uses $A$ instead of $A^{1/3}$.`,
      remediation: t`$125^{1/3} = 5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: t`Cubes $A$ instead of taking its cube root.`,
      remediation: t`$A^{1/3}$ is the cube root: $125^{1/3} = 5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Uses the diameter as the radius.",
      remediation: t`The ball's radius is $2\ \mathrm{m}$: $V = \dfrac{4}{3}\pi \times 2^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Divides by the edge, not its square.",
      remediation: t`The rope's cross-section is an area, $\left(4\ \mathrm{mm}\right)^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Leaves the edge in millimetres.",
      remediation: t`$4\ \mathrm{mm}$ $= 4 \times 10^{-3}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (xi)" },
      stem: t`A metal sheet is $4.234\ \mathrm{m}$ long, $1.005\ \mathrm{m}$ wide and $2.01\ \mathrm{cm}$ thick. What is its volume, to the correct number of significant figures?`,
      verify: { kind: "value", inputs: { l: "4.234", b: "1.005", t_cm: "2.01" }, params: { ask: "vol" } },
      options: [
        { key: "A", text: t`$0.0855289\ \mathrm{m^3}$`, correct: false, misconceptionId: "C07-M2", value: "0.0855289000000000" },
        { key: "B", text: t`$0.08553\ \mathrm{m^3}$`, correct: false, misconceptionId: "C07-M3", value: "0.0855300000000000" },
        { key: "C", text: t`$0.0855\ \mathrm{m^3}$`, correct: true, value: "0.0855000000000000" },
        { key: "D", text: t`$8.55\ \mathrm{m^3}$`, correct: false, misconceptionId: "C07-M1", value: "8.55000000000000" },
      ],
      solution: {
        steps: [
          t`$V$ $= 4.234 \times 1.005 \times 0.0201$ $= 0.085528\dots\ \mathrm{m^3}$.`,
          t`$2.01$ has $3$ significant figures, so $V \approx 0.0855\ \mathrm{m^3}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (xv)" },
      stem: t`How many significant figures are there in $0.1250\ \mathrm{g\,cm^{-2}}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sf" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C07-M4", value: "three_sf" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C07-M5", value: "five_sf" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M6", value: "one_sf" },
        { key: "D", text: t`$4$`, correct: true, value: "four_sf" },
      ],
      solution: {
        steps: [
          t`The leading zero does not count; $1$, $2$, $5$ and the trailing $0$ do.`,
          t`So $4$ significant figures.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (xvi)" },
      stem: t`The diameter of a sphere is $2.14\ \mathrm{cm}$. What is its volume, to the correct number of significant figures?`,
      verify: { kind: "value", inputs: { d: "2.14" }, params: { ask: "sphere" } },
      options: [
        { key: "A", text: t`$5.1\ \mathrm{cm^3}$`, correct: false, misconceptionId: "C07-M8", value: "5.10000000000000" },
        { key: "B", text: t`$5.13\ \mathrm{cm^3}$`, correct: true, value: "5.13000000000000" },
        { key: "C", text: t`$5.13145\ \mathrm{cm^3}$`, correct: false, misconceptionId: "C07-M2", value: "5.13145000000000" },
        { key: "D", text: t`$41.1\ \mathrm{cm^3}$`, correct: false, misconceptionId: "C07-M7", value: "41.1000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 1.07\ \mathrm{cm}$, $V = \dfrac{4}{3}\pi r^3$ $\approx 5.1314\ \mathrm{cm^3}$.`,
          t`$2.14$ has $3$ figures, so $V \approx 5.13\ \mathrm{cm^3}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (v)" },
      stem: t`A nucleus's radius is $R = 1.3 \times 10^{-16}A^{1/3}\ \mathrm{m}$. For mass number $A = 125$, what is the order of magnitude of $R$?`,
      verify: { kind: "value", inputs: { R0: "1.3e-16", A: "125" }, params: { ask: "order_R" } },
      options: [
        { key: "A", text: t`$1 \times 10^{-15}\ \mathrm{m}$`, correct: true, value: "1/1000000000000000" },
        { key: "B", text: t`$1 \times 10^{-16}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M9", value: "1/10000000000000000" },
        { key: "C", text: t`$1 \times 10^{-14}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M10", value: "1/100000000000000" },
        { key: "D", text: t`$1 \times 10^{-10}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M11", value: "1/10000000000" },
      ],
      solution: {
        steps: [
          t`$R = 1.3 \times 10^{-16} \times 5$ $= 6.5 \times 10^{-16}\ \mathrm{m}$.`,
          t`$6.5 > 5$, so the order of magnitude is $10^{-15}\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (iv)" },
      stem: t`A ball of radius $2\ \mathrm{m}$ is wound from a rope of square cross-section, $4\ \mathrm{mm}$ along each edge. Ignoring gaps, what is the order of magnitude of the rope's length?`,
      verify: { kind: "value", inputs: { R_m: "2", edge_mm: "4" }, params: { ask: "order_rope" } },
      options: [
        { key: "A", text: t`$1 \times 10^{7}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M12", value: "10000000" },
        { key: "B", text: t`$10000\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M13", value: "10000" },
        { key: "C", text: t`$1\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M14", value: "1" },
        { key: "D", text: t`$1 \times 10^{6}\ \mathrm{m}$`, correct: true, value: "1000000" },
      ],
      solution: {
        steps: [
          t`Volume $= \dfrac{4}{3}\pi \times 2^3 \approx 33.5\ \mathrm{m^3}$; cross-section $= \left(4 \times 10^{-3}\right)^2$ $= 1.6 \times 10^{-5}\ \mathrm{m^2}$.`,
          t`Length $\approx \dfrac{33.5}{1.6 \times 10^{-5}}$ $\approx 2.1 \times 10^6\ \mathrm{m}$: order $10^6\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
