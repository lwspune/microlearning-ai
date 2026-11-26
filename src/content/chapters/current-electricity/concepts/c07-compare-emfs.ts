import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`You want to know which of two cells has the larger emf, and by how much, but you have no voltmeter you trust and no idea of the potentiometer's gradient. Can you still compare them?`,
    reveal: t`Yes. Balance each cell on the same wire without touching the rheostat. Each emf is $K$ times its balancing length, so $K$ cancels in the ratio: $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1}{l_2}$.`,
  },
  explanation: {
    intuition: [
      t`On a potentiometer, a balanced emf equals the potential gradient times the balancing length: $\varepsilon = Kl$.`,
      t`If $K$ stays the same, emfs are in the same ratio as their balancing lengths.`,
      t`So comparing two emfs needs only two lengths, not the value of $K$.`,
      t`The **individual method** balances each cell on its own.`,
      t`The **combination method** balances the two cells joined together, first assisting, then opposing.`,
      t`At every balance no cell sends current, so the internal resistances do not enter.`,
    ],
    formal: [
      {
        title: "Individual method",
        points: [
          t`The cells' positive terminals are joined to A; a two-way key puts one cell at a time in the galvanometer branch.`,
          t`With the first cell in, find the balancing length $l_1$: $\varepsilon_1 = Kl_1$.`,
          t`With the second cell in, find $l_2$: $\varepsilon_2 = Kl_2$.`,
          t`Dividing, $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1}{l_2}$.`,
          t`The rheostat is not touched between the readings, so $K$ is the same.`,
        ],
      },
      {
        title: "Sum and difference method",
        points: [
          t`**Sum mode**: the negative of one cell joined to the positive of the other; the emfs add.`,
          t`Its balancing length $l_1$ gives $\varepsilon_1 + \varepsilon_2 = Kl_1$.`,
          t`**Difference mode**: like terminals joined, still in series; the emfs oppose.`,
          t`Its balancing length $l_2$ gives $\varepsilon_1 - \varepsilon_2 = Kl_2$, with $\varepsilon_1 > \varepsilon_2$.`,
          t`The difference mode is not a parallel connection: the cells are still in series.`,
        ],
      },
      {
        title: "Getting the ratio",
        points: [
          t`Dividing, $\dfrac{\varepsilon_1 + \varepsilon_2}{\varepsilon_1 - \varepsilon_2} = \dfrac{l_1}{l_2}$.`,
          t`Componendo and dividendo then gives $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1 + l_2}{l_1 - l_2}$.`,
          t`Use this formula only for sum and difference lengths, never for cells balanced one at a time.`,
          t`Write both lengths in the same unit before dividing.`,
        ],
      },
      {
        title: "Conditions for a balance",
        points: [
          t`A balance point exists only if the p.d. across the whole wire exceeds the emf balanced.`,
          t`So in the sum mode the wire's p.d. must exceed $\varepsilon_1 + \varepsilon_2$.`,
          t`Every positive terminal goes to the high-potential end A, or no balance point appears.`,
          t`Keep $K$ fixed for both readings: the ratio rests on it cancelling.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two cells balance at $320\ \mathrm{cm}$ when joined to assist each other, and at $80\ \mathrm{cm}$ when joined to oppose. Compare their emfs.`,
      steps: [
        t`Sum mode: $\varepsilon_1 + \varepsilon_2 = K \times 320$. Difference mode: $\varepsilon_1 - \varepsilon_2 = K \times 80$.`,
        t`Dividing, $\dfrac{\varepsilon_1 + \varepsilon_2}{\varepsilon_1 - \varepsilon_2} = \dfrac{320}{80} = 4$.`,
        t`Componendo and dividendo: $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{320 + 80}{320 - 80}$ $= \dfrac{400}{240}$.`,
        t`$\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{5}{3} \approx 1.67$.`,
      ],
      answer: t`$\varepsilon_1 : \varepsilon_2 = 5 : 3$`,
    },
    visualSpec: t`Flip a two-way key between two cells and drag the jockey to each balance point, with the two lengths shown side by side.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Inverts the ratio of the emfs.",
      remediation: t`The larger emf needs the longer length: $\varepsilon = Kl$. Put the first cell's length on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Takes the ratio of the sum and difference lengths as the ratio of the emfs.",
      remediation: t`In the combination method $\dfrac{l_1}{l_2}$ is $\dfrac{\varepsilon_1 + \varepsilon_2}{\varepsilon_1 - \varepsilon_2}$. Apply componendo and dividendo: $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1 + l_2}{l_1 - l_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Uses the sum and difference formula for cells balanced one at a time.",
      remediation: t`Cells balanced one at a time give $\varepsilon_1 = Kl_1$ and $\varepsilon_2 = Kl_2$, so the ratio is simply $\dfrac{l_1}{l_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks the difference mode leaves the weaker cell acting alone.",
      remediation: t`In the difference mode both cells act and oppose: the balanced emf is $\varepsilon_1 - \varepsilon_2$, not $\varepsilon_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Divides a length in metres by one in centimetres.",
      remediation: t`Write both lengths in the same unit first, using $1\ \mathrm{m} = 100\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Resets the rheostat between the two readings.",
      remediation: t`The ratio $\dfrac{l_1}{l_2}$ works only because $K$ cancels. Touch the rheostat and $K$ changes, so the lengths no longer compare the emfs.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M7",
      mistake: "Takes the difference mode for a parallel connection of the cells.",
      remediation: "In the difference mode the cells stay in series, with like terminals joined, so their emfs subtract. Cells in parallel give neither the sum nor the difference.",
      fallback: { kind: "ext", topic: "cells in series and parallel (Std XI Physics)" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks the p.d. across the whole wire should be less than the emf being balanced.",
      remediation: t`A balance point exists only where $Kl = \varepsilon$ with $l \le L$, so the whole wire's p.d. $KL$ must be larger than the emf.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks each cell draws a small current at balance, which the rheostat must make up for.",
      remediation: "At balance a cell sends no current at all, so its internal resistance plays no part. Nothing needs correcting.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M10",
      mistake: "Mixes up which joining adds the emfs and which opposes them.",
      remediation: "Negative of one to positive of the other: the emfs add. Like terminals together: they oppose.",
      fallback: { kind: "ext", topic: "cells in series and parallel (Std XI Physics)" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.15" },
      stem: t`Two cells of emfs $\varepsilon_1$ and $\varepsilon_2$ ($\varepsilon_1 > \varepsilon_2$) are joined in series to assist each other; their balancing length on a potentiometer is $2.7\ \mathrm{m}$. Joined in series to oppose each other, they balance at $0.3\ \mathrm{m}$. What is $\dfrac{\varepsilon_1}{\varepsilon_2}$?`,
      verify: { kind: "value", inputs: { ls: "2.7", ld: "0.3" }, params: { ask: "comb" } },
      options: [
        { key: "A", text: t`$0.8$`, correct: false, misconceptionId: "C07-M1", value: "0.800000000000000" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C07-M4", value: "8" },
        { key: "C", text: t`$1.25$`, correct: true, value: "1.25000000000000" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C07-M2", value: "9" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\varepsilon_1 + \varepsilon_2}{\varepsilon_1 - \varepsilon_2} = \dfrac{2.7}{0.3} = 9$.`,
          t`Componendo and dividendo: $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{2.7 + 0.3}{2.7 - 0.3} = \dfrac{3.0}{2.4}$.`,
          t`$\dfrac{\varepsilon_1}{\varepsilon_2} = 1.25$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "authored" },
      stem: t`Two cells are compared on a potentiometer by connecting them one at a time, with the rheostat left untouched. The first balances at $1.2\ \mathrm{m}$ and the second at $90\ \mathrm{cm}$. What is $\dfrac{\varepsilon_1}{\varepsilon_2}$?`,
      verify: { kind: "value", inputs: { l1_m: "1.2", l2_cm: "90" }, params: { ask: "ind" } },
      options: [
        { key: "A", text: t`$0.75$`, correct: false, misconceptionId: "C07-M1", value: "0.750000000000000" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C07-M3", value: "7" },
        { key: "C", text: t`$0.0133$`, correct: false, misconceptionId: "C07-M5", value: "0.0133000000000000" },
        { key: "D", text: t`$1.33$`, correct: true, value: "1.33000000000000" },
      ],
      solution: {
        steps: [
          t`Same units first: $l_1 = 1.2\ \mathrm{m} = 120\ \mathrm{cm}$, $l_2 = 90\ \mathrm{cm}$.`,
          t`Each cell alone: $\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1}{l_2} = \dfrac{120}{90}$.`,
          t`$\dfrac{\varepsilon_1}{\varepsilon_2} = 1.33$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`A cell of emf $1.5\ \mathrm{V}$ and a weaker cell are compared by the sum and difference method. In the sum mode they balance at $2.5\ \mathrm{m}$, and in the difference mode at $0.5\ \mathrm{m}$. What is the emf of the weaker cell?`,
      verify: { kind: "value", inputs: { e1: "1.5", ls: "2.5", ld: "0.5" }, params: { ask: "e2" } },
      options: [
        { key: "A", text: t`$0.375\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M4", value: "0.375000000000000" },
        { key: "B", text: t`$1\ \mathrm{V}$`, correct: true, value: "1" },
        { key: "C", text: t`$0.3\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M2", value: "0.300000000000000" },
        { key: "D", text: t`$2.25\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M1", value: "2.25000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1 + l_2}{l_1 - l_2} = \dfrac{2.5 + 0.5}{2.5 - 0.5} = 1.5$.`,
          t`$\varepsilon_2 = \dfrac{\varepsilon_1}{1.5} = \dfrac{1.5}{1.5} = 1\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.6" },
      stem: t`Two emfs are compared by balancing each cell in turn on a potentiometer. What should be done with the rheostat in the main (driver) circuit between the two readings?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rheo" } },
      options: [
        { key: "A", text: t`Leave it untouched, so that the potential gradient is the same for both cells`, correct: true, value: "untouched" },
        { key: "B", text: t`Reset it for each cell, so that each balance point falls near the middle of the wire`, correct: false, misconceptionId: "C07-M6", value: "reset_middle" },
        { key: "C", text: t`Reset it for each cell, to make up for the small current that cell draws at balance`, correct: false, misconceptionId: "C07-M9", value: "reset_current" },
        { key: "D", text: t`Set it so that the p.d. across the whole wire is less than either emf`, correct: false, misconceptionId: "C07-M8", value: "below_emf" },
      ],
      solution: {
        steps: [
          t`Each reading gives $\varepsilon = Kl$, and the ratio $\dfrac{l_1}{l_2}$ needs the same $K$ in both.`,
          t`$K$ is set by the current in the wire, which the rheostat controls.`,
          t`So the rheostat is left untouched between the readings.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.7" },
      stem: t`In the difference mode of the combination (sum and difference) method, how are the two cells joined?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`In parallel, positive to positive and negative to negative, across the same two points`, correct: false, misconceptionId: "C07-M7", value: "parallel" },
        { key: "B", text: t`So that only the weaker cell acts, giving an emf $\varepsilon_2$`, correct: false, misconceptionId: "C07-M4", value: "weaker_alone" },
        { key: "C", text: t`In series, the negative of one to the positive of the other: $\varepsilon_1 - \varepsilon_2$`, correct: false, misconceptionId: "C07-M10", value: "series_adding" },
        { key: "D", text: t`In series, with like terminals joined, so their emfs oppose: $\varepsilon_1 - \varepsilon_2$`, correct: true, value: "series_opposing" },
      ],
      solution: {
        steps: [
          t`Joining like terminals keeps the cells in series, but each pushes the opposite way.`,
          t`The effective emf is then $\varepsilon_1 - \varepsilon_2$.`,
        ],
      },
    },
  ],
};
