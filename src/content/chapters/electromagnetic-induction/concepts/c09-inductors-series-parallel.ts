import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Two coils of $10\ \mathrm{mH}$ and $20\ \mathrm{mH}$ are joined side by side, in parallel. Is the pair's inductance more than $20\ \mathrm{mH}$, or less than $10\ \mathrm{mH}$?`,
    reveal: t`Less than $10\ \mathrm{mH}$: about $6.67\ \mathrm{mH}$. Coils far apart combine just like resistors, so in parallel the result is smaller than either coil.`,
  },
  explanation: {
    intuition: [
      t`In series the same current flows through both coils, so their emfs add: the inductances add.`,
      t`In parallel both coils share the same emf, and the current divides between them.`,
      t`Each coil then carries only part of the change in current, so together they oppose it less than either alone.`,
      t`So inductors far apart combine exactly like resistors.`,
    ],
    formal: [
      {
        title: "Series",
        points: [
          t`Same current $I$ in each, so $e$ $= -L_1\dfrac{dI}{dt} - L_2\dfrac{dI}{dt}$.`,
          t`So $L = L_1 + L_2 + \dots$, more than any one coil.`,
        ],
      },
      {
        title: "Parallel",
        points: [
          t`Same emf across each, and $\dfrac{dI}{dt}$ $= \dfrac{dI_1}{dt} + \dfrac{dI_2}{dt}$.`,
          t`With $\dfrac{dI_k}{dt} = -\dfrac{e}{L_k}$: $\dfrac{1}{L}$ $= \dfrac{1}{L_1} + \dfrac{1}{L_2} + \dots$`,
          t`So $L$ is less than the smallest coil; $n$ equal coils give $\dfrac{L_1}{n}$.`,
          t`These rules hold only when the coils are far apart, with no mutual inductance.`,
        ],
      },
    ],
    worked: {
      prompt: t`Coils of $40\ \mathrm{mH}$ and $60\ \mathrm{mH}$, far apart, are joined first in series and then in parallel. Find the equivalent inductance each time.`,
      steps: [
        t`Series: $L = 40 + 60 = 100\ \mathrm{mH}$.`,
        t`Parallel: $\dfrac{1}{L}$ $= \dfrac{1}{40} + \dfrac{1}{60}$ $= \dfrac{5}{120}$.`,
        t`So $L = 24\ \mathrm{mH}$, less than either coil.`,
      ],
      answer: t`$100\ \mathrm{mH}$ in series; $24\ \mathrm{mH}$ in parallel`,
    },
    visualSpec: t`Join two coils in series and then in parallel, and watch the total opposition to a changing current grow or shrink.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Uses the parallel rule for coils in series.",
      remediation: t`In series the same current flows through both, so the emfs and inductances add: $L = L_1 + L_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Multiplies the inductances.",
      remediation: t`Series inductances add: $L = L_1 + L_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Averages the two inductances.",
      remediation: "Neither rule averages: series adds, and parallel gives less than the smaller coil.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Uses the series rule for coils in parallel.",
      remediation: t`In parallel the current divides: $\dfrac{1}{L}$ $= \dfrac{1}{L_1} + \dfrac{1}{L_2}$.`,
      fallback: { kind: "ext", topic: "resistors in series and parallel (Current Electricity, Ch.9)" },
    },
    {
      id: "C09-M5",
      mistake: t`Forgets to invert the sum of $\dfrac{1}{L}$.`,
      remediation: t`$\dfrac{1}{L_1} + \dfrac{1}{L_2}$ gives $\dfrac{1}{L}$; invert it to get $L$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks the parallel inductance equals the larger coil's.",
      remediation: t`In parallel each coil carries only part of the change, so $L$ is less than even the smaller coil.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: t`Halves $L$ for any number of equal coils in parallel.`,
      remediation: t`$n$ equal coils give $\dfrac{L_1}{n}$: three coils give a third.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Uses only one coil's inductance.",
      remediation: t`Both coils carry the changing current: the total emf is $\left(L_1 + L_2\right)\dfrac{dI}{dt}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.1 (iii)" },
      stem: t`Two inductors of $10\ \mathrm{mH}$ and $20\ \mathrm{mH}$ are joined in series. What is their equivalent inductance? The coils are far apart, so neither links the other's flux.`,
      verify: { kind: "value", inputs: { L1: "10", L2: "20" }, params: { ask: "series" } },
      options: [
        { key: "A", text: t`$200\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M2", value: "200" },
        { key: "B", text: t`$15\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M3", value: "15" },
        { key: "C", text: t`$30\ \mathrm{mH}$`, correct: true, value: "30" },
        { key: "D", text: t`$6.67\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M1", value: "6.67000000000000" },
      ],
      solution: {
        steps: [
          t`In series, $L = L_1 + L_2$.`,
          t`$L = 10 + 20 = 30\ \mathrm{mH}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`Two inductors of $10\ \mathrm{mH}$ and $20\ \mathrm{mH}$ are joined in parallel. What is their equivalent inductance? The coils are far apart, so neither links the other's flux.`,
      verify: { kind: "value", inputs: { L1: "10", L2: "20" }, params: { ask: "parallel" } },
      options: [
        { key: "A", text: t`$6.67\ \mathrm{mH}$`, correct: true, value: "6.67000000000000" },
        { key: "B", text: t`$15\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M3", value: "15" },
        { key: "C", text: t`$30\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M4", value: "30" },
        { key: "D", text: t`$0.15\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M5", value: "0.150000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{L}$ $= \dfrac{1}{10} + \dfrac{1}{20}$ $= \dfrac{3}{20}$.`,
          t`$L$ $= \dfrac{20}{3} \approx 6.67\ \mathrm{mH}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (v)" },
      stem: t`Two coils far apart are joined in parallel. How does their equivalent inductance compare with the inductance of each coil?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "compare" } },
      options: [
        { key: "A", text: t`It lies between the two`, correct: false, misconceptionId: "C09-M3", value: "between" },
        { key: "B", text: t`It is the sum of the two`, correct: false, misconceptionId: "C09-M4", value: "sum_both" },
        { key: "C", text: t`It equals the larger of the two`, correct: false, misconceptionId: "C09-M6", value: "larger" },
        { key: "D", text: t`It is less than the smaller of the two`, correct: true, value: "less_than_smaller" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{L}$ $= \dfrac{1}{L_1} + \dfrac{1}{L_2}$ is more than $\dfrac{1}{L_1}$ or $\dfrac{1}{L_2}$.`,
          t`So $L$ is less than the smaller of $L_1$ and $L_2$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`Three identical coils, each of $30\ \mathrm{mH}$, are joined in parallel. What is their equivalent inductance? The coils are far apart, so neither links the other's flux.`,
      verify: { kind: "value", inputs: { n: "3", L1: "30" }, params: { ask: "nsame" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{mH}$`, correct: true, value: "10" },
        { key: "B", text: t`$90\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M4", value: "90" },
        { key: "C", text: t`$0.1\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M5", value: "0.100000000000000" },
        { key: "D", text: t`$15\ \mathrm{mH}$`, correct: false, misconceptionId: "C09-M7", value: "15" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{L} = \dfrac{3}{30}$, so $L = \dfrac{30}{3}$.`,
          t`$L = 10\ \mathrm{mH}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`Coils of $2\ \mathrm{H}$ and $3\ \mathrm{H}$ are joined in series, and the current through them changes at $4\ \mathrm{A/s}$. What is the size of the total induced emf? The coils are far apart, so neither links the other's flux.`,
      verify: { kind: "value", inputs: { L1: "2", L2: "3", r: "4" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$24\ \mathrm{V}$`, correct: false, misconceptionId: "C09-M2", value: "24" },
        { key: "B", text: t`$8\ \mathrm{V}$`, correct: false, misconceptionId: "C09-M8", value: "8" },
        { key: "C", text: t`$20\ \mathrm{V}$`, correct: true, value: "20" },
        { key: "D", text: t`$4.8\ \mathrm{V}$`, correct: false, misconceptionId: "C09-M1", value: "4.80000000000000" },
      ],
      solution: {
        steps: [
          t`In series, $L = 2 + 3 = 5\ \mathrm{H}$.`,
          t`$|e| = L\dfrac{dI}{dt}$ $= 5 \times 4$ $= 20\ \mathrm{V}$.`,
        ],
      },
    },
  ],
};
