import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`Two coils lie side by side on a table, then are wound one over the other on an iron core. Their self-inductances stay the same. Why does their mutual inductance jump?`,
    reveal: t`Because far more of each coil's flux now threads the other. The **coefficient of coupling** $K$ measures that share: $M = K\sqrt{L_1L_2}$, with $K$ rising towards $1$.`,
  },
  explanation: {
    intuition: [
      t`Only part of one coil's flux may thread its neighbour; the rest leaks away.`,
      t`The fraction that gets through is the **coefficient of coupling** $K$.`,
      t`Coils far apart or at right angles: almost no shared flux, $K$ near $0$.`,
      t`Coils wound together on one iron core: nearly all shared, $K$ near $1$.`,
    ],
    formal: [
      {
        title: "The coefficient of coupling",
        points: [
          t`$M = K\sqrt{L_1L_2}$, so $K = \dfrac{M}{\sqrt{L_1L_2}}$.`,
          t`$0 \le K \le 1$: $K = 1$ when all the flux of each coil links the other.`,
          t`So $M$ can never exceed $\sqrt{L_1L_2}$.`,
          t`$K$ depends on the coils' placement and core, not on their currents.`,
          t`As a percentage, $K$ is the share of one coil's flux that reaches the other.`,
        ],
      },
    ],
    worked: {
      prompt: t`Coils of self-inductance $8\ \mathrm{H}$ and $2\ \mathrm{H}$ are coupled with $K = 0.5$. Find their mutual inductance.`,
      steps: [
        t`$M = K\sqrt{L_1L_2}$.`,
        t`$M = 0.5 \times \sqrt{8 \times 2}$ $= 0.5 \times 4$.`,
        t`$M = 2\ \mathrm{H}$.`,
      ],
      answer: t`$2\ \mathrm{H}$`,
    },
    visualSpec: t`Slide two coils together and apart and watch the shared flux, and K, rise and fall.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Forgets the square root.",
      remediation: t`$M = K\sqrt{L_1L_2}$: the square root keeps $M$ in henry.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: t`Divides by $K$ instead of multiplying.`,
      remediation: t`$K \le 1$ and $M = K\sqrt{L_1L_2}$, so $M$ is at most $\sqrt{L_1L_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: t`Uses $L_1 + L_2$ in place of $\sqrt{L_1L_2}$.`,
      remediation: t`The coupling uses the geometric mean of the two: $\sqrt{L_1L_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: t`Turns $K$ upside down.`,
      remediation: t`$K = \dfrac{M}{\sqrt{L_1L_2}}$, and it never exceeds $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Gives the fraction as the percentage.",
      remediation: t`Multiply the fraction $K$ by $100$: $0.02$ is $2\%$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: t`Thinks $K = 0$ means tight coupling.`,
      remediation: t`$K$ is the share of flux linked: none gives $K = 0$, all gives $K = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: t`Thinks $K$ can exceed $1$.`,
      remediation: t`No more than all the flux can link the other coil, so $K \le 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: t`Thinks $K$ depends on the currents.`,
      remediation: t`$K$ is set by the coils' placement and core; the currents do not change it.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.10" },
      stem: t`Two coils of self-inductance $75\ \mathrm{mH}$ and $55\ \mathrm{mH}$ are coupled with a coefficient of coupling $0.75$. What is their mutual inductance?`,
      verify: { kind: "value", inputs: { L1: "75", L2: "55", K: "0.75" }, params: { ask: "M" } },
      options: [
        { key: "A", text: t`$3090\ \mathrm{mH}$`, correct: false, misconceptionId: "C12-M1", value: "3090" },
        { key: "B", text: t`$85.6\ \mathrm{mH}$`, correct: false, misconceptionId: "C12-M2", value: "85.6000000000000" },
        { key: "C", text: t`$97.5\ \mathrm{mH}$`, correct: false, misconceptionId: "C12-M3", value: "97.5000000000000" },
        { key: "D", text: t`$48.2\ \mathrm{mH}$`, correct: true, value: "48.2000000000000" },
      ],
      solution: {
        steps: [
          t`$M = K\sqrt{L_1L_2}$ $= 0.75\sqrt{75 \times 55}$.`,
          t`$M \approx 0.75 \times 64.2 \approx 48.2\ \mathrm{mH}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.11" },
      stem: t`Two coils of self-inductance $5\ \mathrm{H}$ and $4\ \mathrm{H}$ have a mutual inductance of $1.5\ \mathrm{H}$. What is their coefficient of coupling?`,
      verify: { kind: "value", inputs: { L1: "5", L2: "4", M: "1.5" }, params: { ask: "K" } },
      options: [
        { key: "A", text: t`$2.98$`, correct: false, misconceptionId: "C12-M4", value: "2.98000000000000" },
        { key: "B", text: t`$0.335$`, correct: true, value: "0.335000000000000" },
        { key: "C", text: t`$0.075$`, correct: false, misconceptionId: "C12-M1", value: "0.0750000000000000" },
        { key: "D", text: t`$0.167$`, correct: false, misconceptionId: "C12-M3", value: "0.167000000000000" },
      ],
      solution: {
        steps: [
          t`$K = \dfrac{M}{\sqrt{L_1L_2}}$ $= \dfrac{1.5}{\sqrt{5 \times 4}}$.`,
          t`$K$ $= \dfrac{1.5}{4.47} \approx 0.335$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.15" },
      stem: t`The primary and secondary coils of a transformer each have a self-inductance of $200 \times 10^{-6}\ \mathrm{H}$, and their mutual inductance is $4 \times 10^{-6}\ \mathrm{H}$. What percentage of the flux of one coil reaches the other?`,
      verify: { kind: "value", inputs: { L1: "200e-6", L2: "200e-6", M: "4e-6" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`$0.02\ \mathrm{\%}$`, correct: false, misconceptionId: "C12-M5", value: "0.0200000000000000" },
        { key: "B", text: t`$2\ \mathrm{\%}$`, correct: true, value: "2" },
        { key: "C", text: t`$10000\ \mathrm{\%}$`, correct: false, misconceptionId: "C12-M1", value: "10000" },
        { key: "D", text: t`$5000\ \mathrm{\%}$`, correct: false, misconceptionId: "C12-M4", value: "5000" },
      ],
      solution: {
        steps: [
          t`$\sqrt{L_1L_2}$ $= 200 \times 10^{-6}\ \mathrm{H}$.`,
          t`$K$ $= \dfrac{4 \times 10^{-6}}{200 \times 10^{-6}}$ $= 0.02$, or $2\%$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.9" },
      stem: t`Two coils, each of self-inductance $60\ \mathrm{mH}$, are coupled with a coefficient of coupling $0.75$. What is their mutual inductance?`,
      verify: { kind: "value", inputs: { L1: "60", L2: "60", K: "0.75" }, params: { ask: "M" } },
      options: [
        { key: "A", text: t`$90\ \mathrm{mH}$`, correct: false, misconceptionId: "C12-M3", value: "90" },
        { key: "B", text: t`$45\ \mathrm{mH}$`, correct: true, value: "45" },
        { key: "C", text: t`$2700\ \mathrm{mH}$`, correct: false, misconceptionId: "C12-M1", value: "2700" },
        { key: "D", text: t`$80\ \mathrm{mH}$`, correct: false, misconceptionId: "C12-M2", value: "80" },
      ],
      solution: {
        steps: [
          t`$M = 0.75\sqrt{60 \times 60}$ $= 0.75 \times 60$.`,
          t`$M = 45\ \mathrm{mH}$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`Two coils are wound one on top of the other on the same core, so that all the flux of each links the other. What is their coefficient of coupling?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "full" } },
      options: [
        { key: "A", text: t`$K = 2$, one for each coil`, correct: false, misconceptionId: "C12-M7", value: "two" },
        { key: "B", text: t`It depends on the currents in the coils`, correct: false, misconceptionId: "C12-M8", value: "depends" },
        { key: "C", text: t`$K = 1$`, correct: true, value: "one" },
        { key: "D", text: t`$K = 0$`, correct: false, misconceptionId: "C12-M6", value: "zero" },
      ],
      solution: {
        steps: [
          t`$K$ is the share of each coil's flux that links the other.`,
          t`All of it links, so $K = 1$.`,
        ],
      },
    },
  ],
};
