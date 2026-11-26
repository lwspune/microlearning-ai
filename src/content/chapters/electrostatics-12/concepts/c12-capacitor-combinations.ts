import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`Resistors in series add up. You join two capacitors in series. Does the capacitance add up too?`,
    reveal: t`No, it goes down: series capacitors behave like one capacitor with a wider gap, so $\dfrac{1}{C}$ $= \dfrac{1}{C_1} + \dfrac{1}{C_2}$. It is in parallel, like a bigger plate area, that capacitances add.`,
  },
  explanation: {
    intuition: [
      t`In **parallel**, the capacitors share the same two terminals, so each has the same potential difference.`,
      t`Parallel capacitors act like one capacitor with a larger plate area: capacitances add.`,
      t`In **series**, they sit one after another, and the same charge $Q$ appears on each.`,
      t`Series capacitors act like one capacitor with a wider gap: the total is smaller than the smallest.`,
    ],
    formal: [
      {
        title: "Parallel",
        points: [
          t`Same $V$ across each; charges $Q_1 = C_1V$, $Q_2 = C_2V$, …`,
          t`Total charge $Q = Q_1 + Q_2 + \ldots$ $= \left(C_1 + C_2 + \ldots\right)V$.`,
          t`So $C = C_1 + C_2 + \ldots$; the larger capacitor takes the larger charge.`,
        ],
      },
      {
        title: "Series",
        points: [
          t`Same $Q$ on each; potential differences $V_1 = \dfrac{Q}{C_1}$, $V_2 = \dfrac{Q}{C_2}$, …`,
          t`Total $V = V_1 + V_2 + \ldots$ $= Q\left(\dfrac{1}{C_1} + \dfrac{1}{C_2} + \ldots\right)$.`,
          t`So $\dfrac{1}{C}$ $= \dfrac{1}{C_1} + \dfrac{1}{C_2} + \ldots$; for two, $C = \dfrac{C_1C_2}{C_1 + C_2}$.`,
          t`The smaller capacitor takes the larger potential difference.`,
        ],
      },
      {
        title: "Networks",
        points: [
          t`Reduce step by step: replace each simple series or parallel group by its equivalent.`,
          t`Then combine the results, working out from the innermost group.`,
        ],
      },
    ],
    worked: {
      prompt: t`Capacitors of $6\ \mu\mathrm{F}$ and $12\ \mu\mathrm{F}$ are in series across $90\ \mathrm{V}$. Find the equivalent capacitance, the charge, and the voltage across each.`,
      steps: [
        t`$C = \dfrac{6 \times 12}{6 + 12}$ $= 4\ \mu\mathrm{F}$.`,
        t`$Q = CV$ $= 4 \times 90$ $= 360\ \mu\mathrm{C}$, the same on both.`,
        t`$V_1 = \dfrac{360}{6}$ $= 60\ \mathrm{V}$ and $V_2 = \dfrac{360}{12}$ $= 30\ \mathrm{V}$.`,
      ],
      answer: t`$4\ \mu\mathrm{F}$; $360\ \mu\mathrm{C}$; $60\ \mathrm{V}$ and $30\ \mathrm{V}$`,
    },
    visualSpec: t`Wire capacitors in series and in parallel and watch the charge on each and the voltage across each fill in.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Adds series capacitances, as if they were in parallel.",
      remediation: t`Capacitances add in parallel. In series their reciprocals add: $\dfrac{1}{C}$ $= \dfrac{1}{C_1} + \dfrac{1}{C_2}$.`,
      fallback: { kind: "ext", topic: "resistors in series and parallel (Std XI Physics)" },
    },
    {
      id: "C12-M2",
      mistake: "Forgets to invert the sum of reciprocals.",
      remediation: t`$\dfrac{1}{C}$ $= \dfrac{1}{5} + \dfrac{1}{10}$ $= 0.3$ gives $\dfrac{1}{C}$; invert it: $C = 3.33\ \mu\mathrm{F}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Averages the capacitances.",
      remediation: "Parallel capacitances add; series ones combine by reciprocals. Neither is an average.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Uses the series rule for capacitors in parallel.",
      remediation: t`In parallel the plate areas effectively add, so the capacitances add: $C = C_1 + C_2 + C_3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Multiplies capacitances in parallel.",
      remediation: t`Parallel charges add, $Q = (C_1 + C_2 + C_3)V$, so the capacitances add.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Gives the larger capacitor the larger voltage in series.",
      remediation: t`Series capacitors carry the same charge, so $V = \dfrac{Q}{C}$ is larger across the smaller one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Splits the series voltage equally.",
      remediation: t`The split is equal only for equal capacitors; otherwise $V_1 = \dfrac{Q}{C_1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: "Gives each series capacitor the full supply voltage.",
      remediation: t`In series the supply voltage is shared: $V = V_1 + V_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M9",
      mistake: "Shares the charge equally between parallel capacitors.",
      remediation: t`Each has the same voltage, so $Q = CV$: the larger capacitor takes more charge.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M10",
      mistake: "Uses the series voltage split for capacitors in parallel.",
      remediation: "In parallel each capacitor has the full supply voltage across it.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M11",
      mistake: "Gives the total charge instead of one capacitor's.",
      remediation: t`The total is shared; this capacitor's charge is its own $C$ times $V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M12",
      mistake: "Puts all three capacitors in series.",
      remediation: t`The $6\ \mu\mathrm{F}$ is in parallel with the pair: first combine the pair, then add $6\ \mu\mathrm{F}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.2(viii)" },
      stem: t`Capacitors of $5\ \mu\mathrm{F}$ and $10\ \mu\mathrm{F}$ are connected in series. What is the resultant capacitance?`,
      verify: { kind: "value", inputs: { C1: "5", C2: "10" }, params: { ask: "series" } },
      options: [
        { key: "A", text: t`$15\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M1", value: "15" },
        { key: "B", text: t`$0.3\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M2", value: "0.300000000000000" },
        { key: "C", text: t`$7.5\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M3", value: "7.50000000000000" },
        { key: "D", text: t`$3.33\ \mathrm{\mu F}$`, correct: true, value: "3.33000000000000" },
      ],
      solution: {
        steps: [
          t`Series: $\dfrac{1}{C}$ $= \dfrac{1}{5} + \dfrac{1}{10}$ $= \dfrac{3}{10}$.`,
          t`$C$ $= \dfrac{10}{3} \approx 3.33\ \mu\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "authored" },
      stem: t`Capacitors of $2\ \mu\mathrm{F}$, $3\ \mu\mathrm{F}$ and $5\ \mu\mathrm{F}$ are connected in parallel. What is the resultant capacitance?`,
      verify: { kind: "value", inputs: { C1: "2", C2: "3", C3: "5" }, params: { ask: "parallel" } },
      options: [
        { key: "A", text: t`$3.33\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M3", value: "3.33000000000000" },
        { key: "B", text: t`$10\ \mathrm{\mu F}$`, correct: true, value: "10" },
        { key: "C", text: t`$0.968\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M4", value: "0.968000000000000" },
        { key: "D", text: t`$30\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M5", value: "30" },
      ],
      solution: {
        steps: [
          t`Parallel capacitances add: $C = 2 + 3 + 5$.`,
          t`$C = 10\ \mu\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.6" },
      stem: t`Capacitors of $2\ \mu\mathrm{F}$ and $3\ \mu\mathrm{F}$ are connected in series across a $10\ \mathrm{V}$ supply. What is the potential difference across the $2\ \mu\mathrm{F}$ capacitor?`,
      verify: { kind: "value", inputs: { C1: "2", C2: "3", V: "10" }, params: { ask: "v_series" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{V}$`, correct: false, misconceptionId: "C12-M8", value: "10" },
        { key: "B", text: t`$6\ \mathrm{V}$`, correct: true, value: "6" },
        { key: "C", text: t`$4\ \mathrm{V}$`, correct: false, misconceptionId: "C12-M6", value: "4" },
        { key: "D", text: t`$5\ \mathrm{V}$`, correct: false, misconceptionId: "C12-M7", value: "5" },
      ],
      solution: {
        steps: [
          t`$C = \dfrac{2 \times 3}{2 + 3}$ $= 1.2\ \mu\mathrm{F}$, so $Q = 1.2 \times 10$ $= 12\ \mu\mathrm{C}$ on each.`,
          t`$V_1 = \dfrac{Q}{C_1}$ $= \dfrac{12}{2}$ $= 6\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`Capacitors of $2\ \mu\mathrm{F}$ and $3\ \mu\mathrm{F}$ are connected in parallel across a $10\ \mathrm{V}$ supply. What charge is on the $3\ \mu\mathrm{F}$ capacitor?`,
      verify: { kind: "value", inputs: { C1: "2", C2: "3", V: "10" }, params: { ask: "q_par" } },
      options: [
        { key: "A", text: t`$50\ \mathrm{\mu C}$`, correct: false, misconceptionId: "C12-M11", value: "50" },
        { key: "B", text: t`$30\ \mathrm{\mu C}$`, correct: true, value: "30" },
        { key: "C", text: t`$25\ \mathrm{\mu C}$`, correct: false, misconceptionId: "C12-M9", value: "25" },
        { key: "D", text: t`$12\ \mathrm{\mu C}$`, correct: false, misconceptionId: "C12-M10", value: "12" },
      ],
      solution: {
        steps: [
          t`In parallel each has the full $10\ \mathrm{V}$.`,
          t`$Q = CV$ $= 3 \times 10$ $= 30\ \mu\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.16" },
      stem: t`Two $4\ \mu\mathrm{F}$ capacitors are joined in series, and this pair is connected in parallel with a $6\ \mu\mathrm{F}$ capacitor. What is the equivalent capacitance?`,
      verify: { kind: "value", inputs: { Ca: "4", Cb: "6" }, params: { ask: "network" } },
      options: [
        { key: "A", text: t`$6.5\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M2", value: "6.50000000000000" },
        { key: "B", text: t`$1.5\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M12", value: "1.50000000000000" },
        { key: "C", text: t`$8\ \mathrm{\mu F}$`, correct: true, value: "8" },
        { key: "D", text: t`$14\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C12-M1", value: "14" },
      ],
      solution: {
        steps: [
          t`The series pair: $\dfrac{4 \times 4}{4 + 4}$ $= 2\ \mu\mathrm{F}$.`,
          t`In parallel with $6\ \mu\mathrm{F}$: $2 + 6 = 8\ \mu\mathrm{F}$.`,
        ],
      },
    },
  ],
};
