import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A beaker of pure water and a beaker of sugar solution stand side by side under a sealed glass jar. Days later the water level has fallen and the solution's has risen. Where did the water go, and why?`,
    reveal: t`Into the solution, through the air. The sugar solution has a lower vapour pressure than pure water, so water keeps evaporating from the beaker of water and condensing into the solution.`,
  },
  explanation: {
    intuition: [
      t`A **nonvolatile** solute, like sugar or urea, does not evaporate itself.`,
      t`Its particles take up part of the liquid's surface.`,
      t`Fewer solvent molecules at the surface means fewer escape, so the vapour pressure falls.`,
      t`The fall depends on how many solute particles there are, not on what they are.`,
      t`Properties like this are **colligative**: they depend only on the number of solute particles.`,
    ],
    formal: [
      {
        title: "Raoult's law, nonvolatile solute",
        points: [
          t`Only the solvent (1) is in the vapour, so the solution's vapour pressure is $P_1 = x_1 P_1^0$.`,
          t`Since $x_1 < 1$, $P_1 < P_1^0$: the vapour pressure is lowered.`,
          t`The **lowering of vapour pressure** is $\Delta P = P_1^0 - P_1$.`,
        ],
      },
      {
        title: "Relative lowering",
        points: [
          t`Put $x_1 = 1 - x_2$: $P_1 = P_1^0 - P_1^0 x_2$.`,
          t`So $\Delta P = P_1^0 x_2$.`,
          t`The **relative lowering of vapour pressure** is $\dfrac{\Delta P}{P_1^0} = x_2$, the solute's mole fraction.`,
          t`It depends only on $x_2$, not on which solute it is.`,
        ],
      },
      {
        title: "Molar mass of the solute",
        points: [
          t`$x_2 = \dfrac{n_2}{n_1 + n_2}$; in a **dilute** solution $n_2$ is tiny beside $n_1$, so $x_2 \approx \dfrac{n_2}{n_1}$.`,
          t`With $n = \dfrac{W}{M}$: $\dfrac{\Delta P}{P_1^0} = \dfrac{W_2 M_1}{M_2 W_1}$.`,
          t`$W_1$, $M_1$ are the solvent's mass and molar mass; $W_2$, $M_2$ the solute's.`,
          t`So $M_2 = \dfrac{W_2 M_1 P_1^0}{\Delta P\ W_1}$.`,
        ],
      },
      {
        title: "Colligative properties",
        points: [
          t`Four properties are colligative: lowering of vapour pressure, elevation of boiling point, depression of freezing point, osmotic pressure.`,
          t`Each depends on the number of solute particles in a given amount of solvent, not on their nature.`,
          t`Equal moles of urea and of glucose in equal masses of water lower its vapour pressure equally.`,
          t`The vapour pressure itself is not colligative; its lowering is.`,
        ],
      },
    ],
    worked: {
      prompt: t`$18$ g of glucose ($180\ \mathrm{g\,mol^{-1}}$) is dissolved in $178.2$ g of water. The vapour pressure of water is $17.5$ mm Hg. Find the vapour pressure of the solution.`,
      steps: [
        t`$n_2 = \dfrac{18}{180} = 0.1$ mol; $n_1 = \dfrac{178.2}{18} = 9.9$ mol`,
        t`$x_2 = \dfrac{0.1}{9.9 + 0.1} = 0.01$`,
        t`$\Delta P = P_1^0 x_2 = 17.5 \times 0.01$ $= 0.175$ mm Hg`,
        t`$P_1 = 17.5 - 0.175$ $= 17.325 \approx 17.3$ mm Hg`,
      ],
      answer: t`$17.3$ mm Hg`,
    },
    visualSpec: t`Drop solute particles onto a liquid's surface and watch fewer solvent molecules escape, the vapour pressure falling in step with the solute's mole fraction.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Stops at the lowering $\Delta P$ and gives it as the answer.`,
      remediation: t`$\Delta P = P_1^0 - P_1$ is only the fall. The solution's vapour pressure is $P_1^0 - \Delta P$, and the relative lowering is $\dfrac{\Delta P}{P_1^0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Uses masses in place of moles in the mole fraction.",
      remediation: t`Mole fractions count particles: turn each mass into moles, $n = \dfrac{W}{M}$, first.`,
      fallback: { kind: "ext", topic: "mole fraction and molality (Std XI Chemistry)" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks a dissolved solute raises the vapour pressure.",
      remediation: t`A nonvolatile solute adds no vapour and takes surface places from the solvent: $P_1 = x_1 P_1^0$ is less than $P_1^0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: "Divides the lowering by the solution's vapour pressure instead of the pure solvent's.",
      remediation: t`Relative lowering is measured against the pure solvent: $\dfrac{\Delta P}{P_1^0} = x_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Uses $\dfrac{P_1}{P_1^0}$, the solvent's mole fraction, where $\dfrac{\Delta P}{P_1^0}$ belongs.`,
      remediation: t`$\dfrac{P_1}{P_1^0} = x_1$, the solvent's share. The solute's mole fraction is $\dfrac{P_1^0 - P_1}{P_1^0}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M6",
      mistake: t`Uses $x_2 \approx \dfrac{n_2}{n_1}$ for a solution that is not dilute.`,
      remediation: t`$\dfrac{n_2}{n_1}$ is close to $x_2$ only when the solute is a small fraction; otherwise use $x_2 = \dfrac{n_2}{n_1 + n_2}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M6 gives the key to three figures in dilute solutions; use it only on concentrated ones.",
    t`Molar-mass items follow the book's dilute formula, so C04-M4 (whose $\dfrac{\Delta P}{P_1}$ equals $\dfrac{n_2}{n_1}$ exactly) is not used on them.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.9" },
      stem: t`The vapour pressure of water at $20^\circ\mathrm{C}$ is $17$ mm Hg. What is the vapour pressure of a solution of $2.8$ g of urea ($60\ \mathrm{g\,mol^{-1}}$) in $50$ g of water at $20^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { P1o: "17", W1: "50", M1: "18", W2: "2.8", M2: "60" }, params: { ask: "P_mass" } },
      options: [
        { key: "A", text: t`$16.1\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C04-M2", value: "16.1000000000000" },
        { key: "B", text: t`$17.3\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C04-M3", value: "17.3000000000000" },
        { key: "C", text: t`$16.7\ \mathrm{mm\ Hg}$`, correct: true, value: "16.7000000000000" },
        { key: "D", text: t`$0.281\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C04-M1", value: "0.281000000000000" },
      ],
      solution: {
        steps: [
          t`$n_2 = \dfrac{2.8}{60} = 0.0467$ mol; $n_1 = \dfrac{50}{18} = 2.778$ mol`,
          t`$x_1 = \dfrac{2.778}{2.778 + 0.0467} = 0.9835$`,
          t`$P_1 = x_1 P_1^0 = 0.9835 \times 17$ $= 16.7$ mm Hg`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#19" },
      stem: t`The vapour pressure of pure benzene at a certain temperature is $640$ mm Hg, and that of a solution of a nonvolatile solute in benzene is $600$ mm Hg. What is the mole fraction of the solute?`,
      verify: { kind: "value", inputs: { P1o: "640", P1: "600" }, params: { ask: "x2" } },
      options: [
        { key: "A", text: t`$40$`, correct: false, misconceptionId: "C04-M1", value: "40" },
        { key: "B", text: t`$0.0667$`, correct: false, misconceptionId: "C04-M4", value: "0.0667000000000000" },
        { key: "C", text: t`$0.938$`, correct: false, misconceptionId: "C04-M5", value: "0.938000000000000" },
        { key: "D", text: t`$0.0625$`, correct: true, value: "0.0625000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta P = 640 - 600 = 40$ mm Hg`,
          t`$x_2 = \dfrac{\Delta P}{P_1^0} = \dfrac{40}{640}$ $= 0.0625$`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.4" },
      stem: t`$394$ g of a nonvolatile solute is dissolved in $622$ g of water. At $30^\circ\mathrm{C}$ the solution's vapour pressure is $30.74$ mm Hg and that of water $31.8$ mm Hg. What is the molar mass of the solute?`,
      verify: { kind: "value", inputs: { P1o: "31.8", P1: "30.74", W1: "622", M1: "18", W2: "394" }, params: { ask: "M2" } },
      options: [
        { key: "A", text: t`$19\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M2", value: "19" },
        { key: "B", text: t`$11.8\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M5", value: "11.8000000000000" },
        { key: "C", text: t`$342\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "342" },
        { key: "D", text: t`$10.8\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M1", value: "10.8000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta P}{P_1^0} = \dfrac{31.8 - 30.74}{31.8} = 0.0333$`,
          t`$M_2 = \dfrac{W_2 M_1}{W_1} \times \dfrac{P_1^0}{\Delta P}$`,
          t`$M_2 = \dfrac{394 \times 18}{622 \times 0.0333}$ $= 342\ \mathrm{g\,mol^{-1}}$`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#14" },
      stem: t`The vapour pressure of pure benzene ($\ce{C6H6}$) is $640$ mm Hg. When $2.175$ g of a nonvolatile solute is added to $39$ g of benzene, the vapour pressure falls to $600$ mm Hg. What is the molar mass of the solute?`,
      verify: { kind: "value", inputs: { P1o: "640", P1: "600", W1: "39", M1: "78", W2: "2.175" }, params: { ask: "M2" } },
      options: [
        { key: "A", text: t`$0.109\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M1", value: "0.109000000000000" },
        { key: "B", text: t`$0.892\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M2", value: "0.892000000000000" },
        { key: "C", text: t`$4.64\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M5", value: "4.64000000000000" },
        { key: "D", text: t`$69.6\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "69.6000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta P}{P_1^0} = \dfrac{640 - 600}{640} = 0.0625$`,
          t`$M_2 = \dfrac{W_2 M_1}{W_1} \times \dfrac{P_1^0}{\Delta P}$`,
          t`$M_2 = \dfrac{2.175 \times 78}{39 \times 0.0625}$ $= 69.6\ \mathrm{g\,mol^{-1}}$`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.1 (i)" },
      stem: t`The vapour pressure of pure water is $24$ mm Hg. What is the vapour pressure of a solution of $1$ mole of a nonvolatile solute in $3$ moles of water?`,
      verify: { kind: "value", inputs: { P1o: "24", n1: "3", n2: "1" }, params: { ask: "P_mol" } },
      options: [
        { key: "A", text: t`$16\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C04-M6", value: "16" },
        { key: "B", text: t`$18\ \mathrm{mm\ Hg}$`, correct: true, value: "18" },
        { key: "C", text: t`$6\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C04-M1", value: "6" },
        { key: "D", text: t`$30\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C04-M3", value: "30" },
      ],
      solution: {
        steps: [
          t`$x_1 = \dfrac{3}{1 + 3} = 0.75$; the solution is not dilute, so use the exact mole fraction.`,
          t`$P_1 = x_1 P_1^0 = 0.75 \times 24$ $= 18$ mm Hg`,
        ],
      },
    },
  ],
};
