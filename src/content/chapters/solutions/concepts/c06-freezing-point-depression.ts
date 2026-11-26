import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`In winter, roads in cold countries are sprinkled with salt, and car radiators are filled with water mixed with ethylene glycol. Why do both stop ice forming?`,
    reveal: t`A dissolved solute lowers the freezing point of water. Salty water or a glycol mixture stays liquid several degrees below $0^\circ\mathrm{C}$, so ice cannot form until it is much colder.`,
  },
  explanation: {
    intuition: [
      t`A liquid **freezes** when its vapour pressure equals that of its solid.`,
      t`A nonvolatile solute lowers the liquid's vapour pressure, but the solid freezes out as pure solvent.`,
      t`So the solution's vapour pressure meets the solid's only at a lower temperature.`,
      t`The solution therefore freezes below the pure solvent.`,
      t`The fall grows with the number of solute particles per kilogram of solvent.`,
    ],
    formal: [
      {
        title: "Freezing point depression",
        points: [
          t`The **freezing point** is where the liquid and solid have the same vapour pressure.`,
          t`$T_f^0$ is the pure solvent's freezing point and $T_f$ the solution's; $T_f < T_f^0$.`,
          t`The **depression in freezing point** is $\Delta T_f = T_f^0 - T_f$, a positive number.`,
          t`For a dilute solution $\Delta T_f \propto m$, the molality: $\Delta T_f = K_f m$.`,
        ],
      },
      {
        title: "The cryoscopic constant",
        points: [
          t`$K_f$, the **cryoscopic constant**, is the $\Delta T_f$ of a $1\ \mathrm{m}$ solution.`,
          t`$K_f = \dfrac{\Delta T_f}{m}$, so its unit is $\mathrm{K\,kg\,mol^{-1}}$.`,
          t`It depends only on the solvent: $1.86$ for water, $5.12\ \mathrm{K\,kg\,mol^{-1}}$ for benzene.`,
          t`Equal masses of two solutes give different $\Delta T_f$: the lighter one has more moles.`,
        ],
      },
      {
        title: "Molar mass from the depression",
        points: [
          t`With $W_2$ g of solute in $W_1$ g of solvent, $m = \dfrac{1000\,W_2}{M_2 W_1}$.`,
          t`So $\Delta T_f = \dfrac{1000\,K_f W_2}{M_2 W_1}$.`,
          t`Rearranged, $M_2 = \dfrac{1000\,K_f W_2}{\Delta T_f W_1}$.`,
          t`If $K_f$ is unknown, find it first from a solute of known molar mass in the same solvent.`,
          t`Finding a molar mass this way is called **cryoscopy**.`,
        ],
      },
    ],
    worked: {
      prompt: t`$2.56\ \mathrm{g}$ of a nonvolatile solute dissolved in $100\ \mathrm{g}$ of benzene lowers its freezing point by $0.512\ \mathrm{K}$. With $K_f = 5.12\ \mathrm{K\,kg\,mol^{-1}}$, find the molar mass of the solute.`,
      steps: [
        t`$M_2 = \dfrac{1000\,K_f W_2}{\Delta T_f W_1}$.`,
        t`$M_2 = \dfrac{1000 \times 5.12 \times 2.56}{0.512 \times 100}$.`,
        t`$M_2 = \dfrac{13107.2}{51.2}$ $= 256\ \mathrm{g\,mol^{-1}}$.`,
      ],
      answer: t`$M_2 = 256\ \mathrm{g\,mol^{-1}}$`,
    },
    visualSpec: t`Drag the molality and watch the solution's vapour pressure curve drop, meeting the solid's curve at a lower temperature.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks a dissolved solute raises the freezing point.",
      remediation: t`A solute lowers the liquid's vapour pressure, so it meets the solid's only at a lower temperature: $T_f = T_f^0 - \Delta T_f$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks equal masses of different solutes give equal depressions.",
      remediation: t`$\Delta T_f$ counts moles of particles: the same mass of a lighter solute is more moles and lowers the freezing point more.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks a heavier solute gives a bigger depression.",
      remediation: t`For a given mass, a larger molar mass means fewer moles, so a smaller $\Delta T_f$: $\Delta T_f \propto \dfrac{1}{M_2}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M4",
      mistake: t`Uses the solution's freezing point as $\Delta T_f$.`,
      remediation: t`$\Delta T_f$ is the fall: $\Delta T_f = T_f^0 - T_f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Puts the solvent's mass in grams where kilograms belong.",
      remediation: t`Molality is per kilogram of solvent: $m = \dfrac{1000\,W_2}{M_2 W_1}$ with $W_1$ in grams.`,
      fallback: { kind: "ext", topic: "mole fraction and molality (Std XI Chemistry)" },
    },
    {
      id: "C06-M6",
      mistake: "Treats the molality as the number of moles of solute.",
      remediation: "Molality is moles per kilogram: divide the moles by the solvent's mass in kilograms.",
      fallback: { kind: "ext", topic: "mole fraction and molality (Std XI Chemistry)" },
    },
    {
      id: "C06-M7",
      mistake: t`Takes $K_f = \Delta T_f \times m$.`,
      remediation: t`From $\Delta T_f = K_f m$, $K_f = \dfrac{\Delta T_f}{m}$, with unit $\mathrm{K\,kg\,mol^{-1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Takes the concentration in $K_f$ as molarity, giving $\mathrm{K\,L\,mol^{-1}}$.`,
      remediation: t`$\Delta T_f = K_f m$ uses molality, moles per kilogram of solvent, so $K_f$ is in $\mathrm{K\,kg\,mol^{-1}}$.`,
      fallback: { kind: "ext", topic: "mole fraction and molality (Std XI Chemistry)" },
    },
    {
      id: "C06-M9",
      mistake: t`Thinks $K_f$ is just a temperature, in $\mathrm{K}$.`,
      remediation: t`$K_f$ is a depression per unit molality: $\dfrac{\Delta T_f}{m}$ has the unit $\mathrm{K\,kg\,mol^{-1}}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.10" },
      stem: t`A $5\%$ aqueous solution (by mass) of cane sugar ($M_2 = 342\ \mathrm{g\,mol^{-1}}$) freezes at $271\ \mathrm{K}$; water freezes at $273.15\ \mathrm{K}$. A $5\%$ aqueous solution of glucose ($M_2 = 180\ \mathrm{g\,mol^{-1}}$) freezes at`,
      verify: { kind: "value", inputs: { Tf1: "271", M1: "342", M2: "180", T0: "273.15" }, params: { ask: "Tf_same_mass" } },
      options: [
        { key: "A", text: t`$277.2\ \mathrm{K}$`, correct: false, misconceptionId: "C06-M1", value: "277.200000000000" },
        { key: "B", text: t`$271\ \mathrm{K}$`, correct: false, misconceptionId: "C06-M2", value: "271" },
        { key: "C", text: t`$272\ \mathrm{K}$`, correct: false, misconceptionId: "C06-M3", value: "272" },
        { key: "D", text: t`$269.1\ \mathrm{K}$`, correct: true, value: "269.100000000000" },
      ],
      solution: {
        steps: [
          t`Cane sugar: $\Delta T_f = 273.15 - 271$ $= 2.15\ \mathrm{K}$.`,
          t`Equal masses in equal water, so $\Delta T_f \propto \dfrac{1}{M_2}$: glucose gives $2.15 \times \dfrac{342}{180}$ $= 4.085\ \mathrm{K}$.`,
          t`$T_f = 273.15 - 4.085$ $= 269.1\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#13" },
      stem: t`$1.0\ \mathrm{g}$ of urea ($M_2 = 60\ \mathrm{g\,mol^{-1}}$) dissolved in $98.5\ \mathrm{g}$ of a solvent lowers its freezing point by $0.211\ \mathrm{K}$. The cryoscopic constant $K_f$ of the solvent is`,
      verify: { kind: "value", inputs: { W2: "1.0", M2: "60", W1: "98.5", dT: "0.211" }, params: { ask: "Kf" } },
      options: [
        { key: "A", text: t`$1.25\ \mathrm{K\,kg\,mol^{-1}}$`, correct: true, value: "1.25000000000000" },
        { key: "B", text: t`$1250\ \mathrm{K\,kg\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M5", value: "1250" },
        { key: "C", text: t`$12.7\ \mathrm{K\,kg\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M6", value: "12.7000000000000" },
        { key: "D", text: t`$0.0357\ \mathrm{K\,kg\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M7", value: "0.0357000000000000" },
      ],
      solution: {
        steps: [
          t`$m = \dfrac{1000 \times 1.0}{60 \times 98.5}$ $= 0.169\ \mathrm{mol\,kg^{-1}}$.`,
          t`$K_f = \dfrac{\Delta T_f}{m} = \dfrac{0.211}{0.169}$ $= 1.25\ \mathrm{K\,kg\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.8" },
      stem: t`$1.02\ \mathrm{g}$ of urea ($M_2 = 60\ \mathrm{g\,mol^{-1}}$) in $98.5\ \mathrm{g}$ of a solvent lowers its freezing point by $0.211\ \mathrm{K}$. $1.609\ \mathrm{g}$ of an unknown compound in $86\ \mathrm{g}$ of the same solvent lowers it by $0.34\ \mathrm{K}$. The molar mass of the unknown compound is`,
      verify: { kind: "value", inputs: { Wr: "1.02", Mr: "60", W1r: "98.5", dTr: "0.211", W2: "1.609", W1: "86", dT: "0.34" }, params: { ask: "M_ref" } },
      options: [
        { key: "A", text: t`$67.3\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "67.3000000000000" },
        { key: "B", text: t`$175\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M3", value: "175" },
        { key: "C", text: t`$58.7\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M6", value: "58.7000000000000" },
        { key: "D", text: t`$2\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M7", value: "2" },
      ],
      solution: {
        steps: [
          t`$K_f = \dfrac{\Delta T_f M_2 W_1}{1000\,W_2}$ $= \dfrac{0.211 \times 60 \times 98.5}{1000 \times 1.02}$ $= 1.223$.`,
          t`$M_2' = \dfrac{1000 \times 1.223 \times 1.609}{0.34 \times 86}$.`,
          t`$M_2' = 67.3\ \mathrm{g\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#21" },
      stem: t`$0.30\ \mathrm{g}$ of urea ($M_2 = 60\ \mathrm{g\,mol^{-1}}$) is dissolved in $25\ \mathrm{g}$ of water. With $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, the solution freezes at`,
      verify: { kind: "value", inputs: { W2: "0.30", M2: "60", W1: "25", Kf: "1.86", T0: "0" }, params: { ask: "Tf" } },
      options: [
        { key: "A", text: t`$-0.0093\ \mathrm{{}^{\circ}C}$`, correct: false, misconceptionId: "C06-M6", value: "-0.00930000000000000" },
        { key: "B", text: t`$-0.372\ \mathrm{{}^{\circ}C}$`, correct: true, value: "-0.372000000000000" },
        { key: "C", text: t`$0.372\ \mathrm{{}^{\circ}C}$`, correct: false, misconceptionId: "C06-M1", value: "0.372000000000000" },
        { key: "D", text: t`$-3.72 \times 10^{-4}\ \mathrm{{}^{\circ}C}$`, correct: false, misconceptionId: "C06-M5", value: "-0.000372000000000000" },
      ],
      solution: {
        steps: [
          t`$m = \dfrac{1000 \times 0.30}{60 \times 25}$ $= 0.20\ \mathrm{mol\,kg^{-1}}$.`,
          t`$\Delta T_f = 1.86 \times 0.20$ $= 0.372\ \mathrm{K}$.`,
          t`$T_f = 0 - 0.372$ $= -0.372^\circ\mathrm{C}$: below the freezing point of water.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#8" },
      stem: t`The SI unit of the cryoscopic constant $K_f$ is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "kf_unit" } },
      options: [
        { key: "A", text: t`$\mathrm{K\,kg\,mol^{-1}}$`, correct: true, value: "K_kg_per_mol" },
        { key: "B", text: t`$\mathrm{K\,mol\,kg^{-1}}$`, correct: false, misconceptionId: "C06-M7", value: "K_mol_per_kg" },
        { key: "C", text: t`$\mathrm{K\,L\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M8", value: "K_L_per_mol" },
        { key: "D", text: t`$\mathrm{K}$`, correct: false, misconceptionId: "C06-M9", value: "kelvin_only" },
      ],
      solution: {
        steps: [
          t`$K_f = \dfrac{\Delta T_f}{m}$, with $\Delta T_f$ in $\mathrm{K}$ and $m$ in $\mathrm{mol\,kg^{-1}}$.`,
          t`So the unit is $\dfrac{\mathrm{K}}{\mathrm{mol\,kg^{-1}}} = \mathrm{K\,kg\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.6" },
      stem: t`Benzene freezes at $5.50^\circ\mathrm{C}$. A solution of $1.8\ \mathrm{g}$ of a nonvolatile solute in $40\ \mathrm{g}$ of benzene freezes at $4.22^\circ\mathrm{C}$. With $K_f = 5.12\ \mathrm{K\,kg\,mol^{-1}}$, the molar mass of the solute is`,
      verify: { kind: "value", inputs: { W2: "1.8", W1: "40", Kf: "5.12", T0: "5.50", T: "4.22" }, params: { ask: "M2" } },
      options: [
        { key: "A", text: t`$0.18\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M5", value: "0.180000000000000" },
        { key: "B", text: t`$7.2\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M6", value: "7.20000000000000" },
        { key: "C", text: t`$180\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "180" },
        { key: "D", text: t`$54.6\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C06-M4", value: "54.6000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta T_f = 5.50 - 4.22$ $= 1.28^\circ\mathrm{C}$, which is also $1.28\ \mathrm{K}$.`,
          t`$M_2 = \dfrac{1000 \times 5.12 \times 1.8}{1.28 \times 40}$.`,
          t`$M_2 = \dfrac{9216}{51.2}$ $= 180\ \mathrm{g\,mol^{-1}}$.`,
        ],
      },
    },
  ],
};
