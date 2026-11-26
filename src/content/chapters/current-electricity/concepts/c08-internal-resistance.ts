import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A cell balances at some length on a potentiometer. You join a resistor across the cell, and the balance point moves nearer the start of the wire. Why should a resistor outside the cell change what the wire measures?`,
    reveal: t`With the resistor joined, the cell sends a current, and part of its emf is lost inside it. The wire now balances the smaller terminal p.d. $\varepsilon - Ir$. How far the point moves tells you the cell's internal resistance.`,
  },
  explanation: {
    intuition: [
      t`The **internal resistance** $r$ of a cell is the resistance its electrolyte and electrodes offer to current inside it.`,
      t`When a cell sends a current $I$, a p.d. $Ir$ is lost inside it.`,
      t`Its **terminal p.d.** is then $V = \varepsilon - Ir$, less than the emf.`,
      t`On open circuit the cell sends no current, so the potentiometer balances its emf.`,
      t`Shunted by a resistor, it sends a current, so the potentiometer balances its terminal p.d.`,
      t`The two balancing lengths together give $r$.`,
    ],
    formal: [
      {
        title: "The two readings",
        points: [
          t`The cell, through a galvanometer and jockey, is balanced on a wire of gradient $K$.`,
          t`A resistance box $R$ is joined across the cell through a key $K_2$.`,
          t`With $K_2$ open, no current is drawn: the balancing length $l_1$ gives $\varepsilon = Kl_1$.`,
          t`With $K_2$ closed, the cell sends $I$ through $R$: the length $l_2$ gives $V = Kl_2$.`,
          t`Since $V < \varepsilon$, the shunted length $l_2$ is shorter than $l_1$.`,
        ],
      },
      {
        title: "The formula",
        points: [
          t`Round the cell and $R$: $\varepsilon = I\left(R + r\right)$ and $V = IR$.`,
          t`Dividing, $\dfrac{\varepsilon}{V} = \dfrac{R + r}{R} = 1 + \dfrac{r}{R}$.`,
          t`So $r = R\left(\dfrac{\varepsilon}{V} - 1\right)$.`,
          t`With $\dfrac{\varepsilon}{V} = \dfrac{l_1}{l_2}$, $r = R\left(\dfrac{l_1 - l_2}{l_2}\right)$.`,
          t`Equivalently $l_1 = l_2\left(\dfrac{R + r}{R}\right)$.`,
        ],
      },
      {
        title: "Reading the lengths",
        points: [
          t`$l_1$ is always the open-circuit length, the longer one; $l_2$ is the shunted one.`,
          t`Divide the drop $l_1 - l_2$ by $l_2$, not by $l_1$.`,
          t`If a question gives the reduction in length, first find $l_2 = l_1 - \text{reduction}$.`,
          t`$K$ cancels, so the lengths may be in any one unit.`,
        ],
      },
      {
        title: "What r depends on",
        points: [
          t`$r$ is a property of the cell, not of the resistor joined across it.`,
          t`Electrodes farther apart give a longer path inside, so a larger $r$.`,
          t`A larger area of the electrodes in the electrolyte gives a smaller $r$.`,
          t`A warmer electrolyte has a smaller $r$, unlike a metal wire.`,
          t`An old or heavily used cell has a larger $r$.`,
        ],
      },
    ],
    worked: {
      prompt: t`With $3\ \Omega$ across a cell, its terminal p.d. balances at $180\ \mathrm{cm}$; with $7.5\ \Omega$, at $225\ \mathrm{cm}$. Find the open-circuit balancing length $l$ and the internal resistance.`,
      steps: [
        t`For each shunt, $r = R\left(\dfrac{l - l_2}{l_2}\right)$, with $l$ the open-circuit length.`,
        t`$3\left(\dfrac{l - 180}{180}\right) = 7.5\left(\dfrac{l - 225}{225}\right)$.`,
        t`$\dfrac{l - 180}{60} = \dfrac{l - 225}{30}$, so $l - 180 = 2\left(l - 225\right)$.`,
        t`$l = 270\ \mathrm{cm}$.`,
        t`$r = 3\left(\dfrac{270 - 180}{180}\right) = 1.5\ \Omega$.`,
      ],
      answer: t`$l = 270\ \mathrm{cm}$, $r = 1.5\ \Omega$`,
    },
    visualSpec: t`Close the key across the cell and watch the balance point slide back from the emf length to the terminal p.d. length, with r worked out live.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Divides the drop in length by $l_1$ instead of $l_2$.`,
      remediation: t`$\dfrac{r}{R} = \dfrac{\varepsilon}{V} - 1 = \dfrac{l_1 - l_2}{l_2}$: the shunted length $l_2$, which matches $V = IR$, goes below.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Drops the $-1$: takes $r = R\dfrac{l_1}{l_2}$.`,
      remediation: t`$\dfrac{\varepsilon}{V} = 1 + \dfrac{r}{R}$, so take 1 away before multiplying by $R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Turns the fraction upside down: $r = R\dfrac{l_2}{l_1 - l_2}$.`,
      remediation: t`$r$ grows with the drop in length: $r = R\left(\dfrac{l_1 - l_2}{l_2}\right)$, with the drop on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Swaps the two readings: takes the shunted length for the emf.",
      remediation: t`On open circuit no current flows, so $l_1$ balances the emf, the larger. Shunted, the cell balances its smaller terminal p.d.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M5",
      mistake: t`Writes $\varepsilon = I\left(R - r\right)$.`,
      remediation: t`The internal and external resistances are in series round the loop: $\varepsilon = I\left(R + r\right)$.`,
      fallback: { kind: "ext", topic: "emf and terminal p.d. (Std XI Physics)" },
    },
    {
      id: "C08-M6",
      mistake: "Takes the reduction in balancing length as the shunted length itself.",
      remediation: t`A balancing length is measured from the end A. Reduced by $d$, the new length is $l_2 = l_1 - d$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks the internal resistance changes with the resistance joined across the cell.",
      remediation: t`$r$ belongs to the cell: its electrodes and electrolyte. Changing $R$ changes the current and $l_2$, but $R\left(\dfrac{l_1 - l_2}{l_2}\right)$ stays the same.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks a cell's internal resistance rises with temperature, like a metal wire's.",
      remediation: t`An electrolyte conducts better when warm, so $r$ falls as the temperature rises.`,
      fallback: { kind: "ext", topic: "internal resistance of cells (Std XI Physics)" },
    },
    {
      id: "C08-M9",
      mistake: "Thinks moving the electrodes farther apart lowers the internal resistance.",
      remediation: t`Like a wire, the electrolyte's resistance grows with the length of the path: farther electrodes, larger $r$.`,
      fallback: { kind: "ext", topic: "resistance and resistivity (Std XI Physics)" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks shunting the cell cannot move the balance point, since no current flows at balance.",
      remediation: t`At balance no current flows through the galvanometer, but the cell still sends $I$ through $R$. So the wire balances $V = \varepsilon - Ir$, at a shorter length.`,
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Solved Ex.9.6" },
      stem: t`In an experiment to find the internal resistance of a cell of emf $1.5\ \mathrm{V}$, the balance point on open circuit is at $76.3\ \mathrm{cm}$. When a resistor of $9.5\ \Omega$ is joined across the cell, the balance point shifts to $64.8\ \mathrm{cm}$. What is the internal resistance of the cell?`,
      verify: { kind: "value", inputs: { R: "9.5", l1: "76.3", l2: "64.8" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$1.69\ \mathrm{\Omega}$`, correct: true, value: "1.69000000000000" },
        { key: "B", text: t`$1.43\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M1", value: "1.43000000000000" },
        { key: "C", text: t`$11.2\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M2", value: "11.2000000000000" },
        { key: "D", text: t`$53.5\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M3", value: "53.5000000000000" },
      ],
      solution: {
        steps: [
          t`$l_1 = 76.3\ \mathrm{cm}$ on open circuit, $l_2 = 64.8\ \mathrm{cm}$ with $R = 9.5\ \Omega$.`,
          t`$r = R\left(\dfrac{l_1 - l_2}{l_2}\right) = 9.5 \times \dfrac{11.5}{64.8}$.`,
          t`$r = 1.69\ \Omega$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.16" },
      stem: t`The emf of a cell is balanced by $120\ \mathrm{cm}$ of potentiometer wire. When the cell is shunted by a resistance of $10\ \Omega$, the balancing length is reduced by $20\ \mathrm{cm}$. What is the internal resistance of the cell?`,
      verify: { kind: "value", inputs: { R: "10", l1: "120", dl: "20" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$1.67\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M1", value: "1.67000000000000" },
        { key: "B", text: t`$12\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M2", value: "12" },
        { key: "C", text: t`$50\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M6", value: "50" },
        { key: "D", text: t`$2\ \mathrm{\Omega}$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`$l_1 = 120\ \mathrm{cm}$; shunted, $l_2 = 120 - 20 = 100\ \mathrm{cm}$.`,
          t`$r = 10 \times \dfrac{120 - 100}{100}$.`,
          t`$r = 2\ \Omega$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.6(iv)" },
      stem: t`In a potentiometer experiment, $l_1$ is the balancing length for the emf of a cell of internal resistance $r$, and $l_2$ is the balancing length for its terminal p.d. when it is shunted by a resistance $R$. Then`,
      verify: { kind: "value", inputs: {  }, params: { ask: "f16" } },
      options: [
        { key: "A", text: t`$l_1 = l_2\left(\dfrac{R}{R + r}\right)$`, correct: false, misconceptionId: "C08-M4", value: "l1_l2_R_over_Rplus" },
        { key: "B", text: t`$l_1 = l_2\left(\dfrac{R}{R - r}\right)$`, correct: false, misconceptionId: "C08-M1", value: "l1_l2_R_over_Rminus" },
        { key: "C", text: t`$l_1 = l_2\left(\dfrac{R - r}{R}\right)$`, correct: false, misconceptionId: "C08-M5", value: "l1_l2_Rminus" },
        { key: "D", text: t`$l_1 = l_2\left(\dfrac{R + r}{R}\right)$`, correct: true, value: "l1_l2_RplusR" },
      ],
      solution: {
        steps: [
          t`$\varepsilon = Kl_1$ and $V = Kl_2$, so $\dfrac{l_1}{l_2} = \dfrac{\varepsilon}{V}$.`,
          t`Round the cell and $R$: $\dfrac{\varepsilon}{V} = \dfrac{I\left(R + r\right)}{IR} = \dfrac{R + r}{R}$.`,
          t`So $l_1 = l_2\left(\dfrac{R + r}{R}\right)$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.1(v)" },
      stem: t`A cell of emf $E$ is shunted by a resistance $R$, and its terminal p.d. is then $V$. Which expression gives its internal resistance, as found with a potentiometer?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "f25" } },
      options: [
        { key: "A", text: t`$r = R\left(1 - \dfrac{E}{V}\right)$`, correct: false, misconceptionId: "C08-M5", value: "one_minus_E_over_V" },
        { key: "B", text: t`$r = R\left(1 - \dfrac{V}{E}\right)$`, correct: false, misconceptionId: "C08-M1", value: "one_minus_V_over_E" },
        { key: "C", text: t`$r = R\left(\dfrac{E}{V} - 1\right)$`, correct: true, value: "E_over_V_minus1" },
        { key: "D", text: t`$r = R\left(\dfrac{V}{E} - 1\right)$`, correct: false, misconceptionId: "C08-M4", value: "V_over_E_minus1" },
      ],
      solution: {
        steps: [
          t`$E = I\left(R + r\right)$ and $V = IR$, so $\dfrac{E}{V} = 1 + \dfrac{r}{R}$.`,
          t`$\dfrac{r}{R} = \dfrac{E}{V} - 1$, so $r = R\left(\dfrac{E}{V} - 1\right)$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`A cell of internal resistance $1\ \Omega$ balances at $160\ \mathrm{cm}$ of a potentiometer wire on open circuit. A resistance of $4\ \Omega$ is then joined across the cell. Where is the new balance point?`,
      verify: { kind: "value", inputs: { l1: "160", R: "4", r: "1" }, params: { ask: "l2" } },
      options: [
        { key: "A", text: t`$120\ \mathrm{cm}$`, correct: false, misconceptionId: "C08-M1", value: "120" },
        { key: "B", text: t`$128\ \mathrm{cm}$`, correct: true, value: "128" },
        { key: "C", text: t`$160\ \mathrm{cm}$`, correct: false, misconceptionId: "C08-M10", value: "160" },
        { key: "D", text: t`$200\ \mathrm{cm}$`, correct: false, misconceptionId: "C08-M4", value: "200" },
      ],
      solution: {
        steps: [
          t`Shunted, the cell balances its terminal p.d.: $\dfrac{l_2}{l_1} = \dfrac{V}{\varepsilon} = \dfrac{R}{R + r}$.`,
          t`$l_2 = 160 \times \dfrac{4}{4 + 1}$.`,
          t`$l_2 = 128\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.9" },
      stem: t`Which change lowers the internal resistance of a cell?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "factor" } },
      options: [
        { key: "A", text: t`Cooling the electrolyte`, correct: false, misconceptionId: "C08-M8", value: "cooler" },
        { key: "B", text: t`Moving the electrodes farther apart`, correct: false, misconceptionId: "C08-M9", value: "farther_apart" },
        { key: "C", text: t`Dipping a larger area of the electrodes in the electrolyte`, correct: true, value: "larger_area" },
        { key: "D", text: t`Joining a smaller resistance across it`, correct: false, misconceptionId: "C08-M7", value: "smaller_R" },
      ],
      solution: {
        steps: [
          t`$r$ is the resistance of the electrolyte between the electrodes.`,
          t`A larger area of electrode in the electrolyte gives the current a wider path, so $r$ falls.`,
        ],
      },
    },
  ],
};
