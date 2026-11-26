import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A dry raisin left in water swells up, while cucumber slices in salt water go limp. What moves, and which way?`,
    reveal: t`Water moves, through the skin, toward the side with more dissolved particles. Inside the raisin the sugar is concentrated, so water flows in; the salt water outside the cucumber draws water out. The pressure that would stop this flow is the osmotic pressure.`,
  },
  explanation: {
    intuition: [
      t`A **semipermeable membrane** lets solvent molecules through but not solute particles.`,
      t`Put a solution on one side and pure solvent on the other.`,
      t`Solvent molecules cross both ways, but more cross into the solution.`,
      t`This net flow of solvent into the solution is **osmosis**.`,
      t`Pressing on the solution side can stop it; the pressure needed is the **osmotic pressure**.`,
    ],
    formal: [
      {
        title: "Osmosis and osmotic pressure",
        points: [
          t`In **osmosis** solvent flows through a semipermeable membrane from pure solvent (or a dilute solution) into a more concentrated solution.`,
          t`The **osmotic pressure** $\pi$ is the excess pressure on the solution that just stops osmosis.`,
          t`For a dilute solution $\pi = MRT$, where $M$ is the molarity.`,
          t`With $n_2$ mol of solute in $V$ L of solution, $M = \dfrac{n_2}{V}$, so $\pi V = n_2 RT$.`,
          t`Use $T$ in kelvin and $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$ to get $\pi$ in atm.`,
          t`Molarity, not molality, appears because $\pi$ depends on solute particles per volume of solution.`,
        ],
      },
      {
        title: "Isotonic, hypertonic, hypotonic",
        points: [
          t`Solutions with equal osmotic pressure at the same temperature are **isotonic**; no net flow occurs between them.`,
          t`So isotonic solutions of nonelectrolytes have equal molarities, not equal masses per litre.`,
          t`Of two solutions, the one with higher $\pi$ is **hypertonic**, the other **hypotonic**.`,
          t`Solvent flows from the hypotonic solution into the hypertonic one.`,
          t`In **reverse osmosis** a pressure above $\pi$ on the solution pushes pure solvent out, as in desalination.`,
        ],
      },
      {
        title: "Molar mass from osmotic pressure",
        points: [
          t`With $W_2$ g of solute, $n_2 = \dfrac{W_2}{M_2}$, so $\pi V = \dfrac{W_2}{M_2} RT$.`,
          t`Rearranged, $M_2 = \dfrac{W_2 RT}{\pi V}$.`,
          t`$\pi$ is large even for dilute solutions and is measured at room temperature.`,
          t`So this is the method most used for polymers and proteins, which decompose on heating.`,
        ],
      },
    ],
    worked: {
      prompt: t`$2.0\ \mathrm{g}$ of a polymer is dissolved to make $500\ \mathrm{mL}$ of solution at $27^\circ\mathrm{C}$. Its osmotic pressure is $0.0246\ \mathrm{atm}$. Find the molar mass of the polymer ($R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$).`,
      steps: [
        t`$T = 27 + 273 = 300\ \mathrm{K}$ and $V = 0.500\ \mathrm{L}$.`,
        t`$M_2 = \dfrac{W_2 RT}{\pi V}$ $= \dfrac{2.0 \times 0.0821 \times 300}{0.0246 \times 0.500}$.`,
        t`$M_2 = \dfrac{49.26}{0.0123}$ $\approx 4.0 \times 10^3\ \mathrm{g\,mol^{-1}}$.`,
      ],
      answer: t`$M_2 \approx 4.0 \times 10^3\ \mathrm{g\,mol^{-1}}$`,
    },
    visualSpec: t`Raise the solute concentration on one side of a membrane and watch the solution column rise until its extra pressure equals $\pi = MRT$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Uses the mass of solute per litre (or a mass per cent) where moles per litre belong.",
      remediation: t`Osmotic pressure counts particles: $\pi = MRT$ with $M$ in $\mathrm{mol\,L^{-1}}$, so turn grams into moles first.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M2",
      mistake: t`Takes the concentration in $\pi = MRT$ as molality.`,
      remediation: t`$\pi = MRT$ comes from $\pi V = n_2 RT$: moles per litre of solution, the molarity.`,
      fallback: { kind: "ext", topic: "mole fraction and molality (Std XI Chemistry)" },
    },
    {
      id: "C07-M3",
      mistake: "Takes the concentration as mole fraction, as in vapour pressure lowering.",
      remediation: t`Mole fraction belongs to $\dfrac{\Delta P}{P_1^0} = x_2$; osmotic pressure uses molarity, $\pi = MRT$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses the Celsius temperature in $\pi = MRT$.`,
      remediation: t`$T$ is the absolute temperature: add $273$ to the Celsius figure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Puts the volume in mL (or $\mathrm{dm^3}$ as $\mathrm{m^3}$), a thousand times too large.`,
      remediation: t`With $R$ in $\mathrm{L\,atm}$, $V$ is in litres; with $R = 8.314$, $V$ is in $\mathrm{m^3}$, and $1\ \mathrm{dm^3} = 10^{-3}\ \mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Does not convert between mm Hg and atm.",
      remediation: t`With $R$ in $\mathrm{L\,atm}$, $\pi$ is in atm: $1\ \mathrm{atm} = 760\ \mathrm{mm\,Hg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Uses $R = 8.314$ with atm and litres.`,
      remediation: t`$8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$ goes with pascals and $\mathrm{m^3}$; with atm and litres use $0.0821$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Gives grams per litre as the per cent.",
      remediation: t`A per cent (w/v) is grams per $100\ \mathrm{mL}$: divide grams per litre by $10$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.9" },
      stem: t`A solution of $0.822\ \mathrm{g}$ of a solute in $300\ \mathrm{mL}$ of water has an osmotic pressure of $149\ \mathrm{mm\,Hg}$ at $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$). With $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$ and $1\ \mathrm{atm} = 760\ \mathrm{mm\,Hg}$, the molar mass of the solute is`,
      verify: { kind: "value", inputs: { W2: "0.822", V_mL: "300", P_mmHg: "149", T: "298" }, params: { ask: "M2_mmHg" } },
      options: [
        { key: "A", text: t`$0.342\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M5", value: "0.342000000000000" },
        { key: "B", text: t`$0.45\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M6", value: "0.450000000000000" },
        { key: "C", text: t`$342\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "342" },
        { key: "D", text: t`$28.7\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M4", value: "28.7000000000000" },
      ],
      solution: {
        steps: [
          t`$\pi = \dfrac{149}{760} = 0.196\ \mathrm{atm}$ and $V = 0.300\ \mathrm{L}$.`,
          t`$M_2 = \dfrac{W_2 RT}{\pi V}$ $= \dfrac{0.822 \times 0.0821 \times 298}{0.196 \times 0.300}$.`,
          t`$M_2 = 342\ \mathrm{g\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#15" },
      stem: t`$1.8 \times 10^{-3}\ \mathrm{kg}$ of a substance in $1\ \mathrm{dm^3}$ of solution has an osmotic pressure of $0.52\ \mathrm{atm}$ at $286\ \mathrm{K}$ ($13^\circ\mathrm{C}$). With $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$ and $1\ \mathrm{atm} = 101325\ \mathrm{Pa}$, its molar mass is`,
      verify: { kind: "value", inputs: { W2: "1.8", V_dm3: "1", P_atm: "0.52", T: "286" }, params: { ask: "M2_SI" } },
      options: [
        { key: "A", text: t`$3.69\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M4", value: "3.69000000000000" },
        { key: "B", text: t`$0.0812\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M5", value: "0.0812000000000000" },
        { key: "C", text: t`$8230\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M7", value: "8230" },
        { key: "D", text: t`$81.2\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "81.2000000000000" },
      ],
      solution: {
        steps: [
          t`In SI units: $\pi = 0.52 \times 101325$ $= 52689\ \mathrm{Pa}$, $V = 10^{-3}\ \mathrm{m^3}$, $W_2 = 1.8 \times 10^{-3}\ \mathrm{kg}$.`,
          t`$M_2 = \dfrac{W_2 RT}{\pi V}$ $= \dfrac{1.8 \times 10^{-3} \times 8.314 \times 286}{52689 \times 10^{-3}}$.`,
          t`$M_2 = 0.0812\ \mathrm{kg\,mol^{-1}}$ $= 81.2\ \mathrm{g\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.1 (viii)" },
      stem: t`The osmotic pressure of blood is $7.65\ \mathrm{atm}$ at $310\ \mathrm{K}$ ($37^\circ\mathrm{C}$). With $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$, a glucose solution ($M_2 = 180\ \mathrm{g\,mol^{-1}}$) isotonic with blood has the mass per cent (grams per $100\ \mathrm{mL}$ of solution)`,
      verify: { kind: "value", inputs: { P_atm: "7.65", T: "310", M2: "180" }, params: { ask: "pct_isotonic" } },
      options: [
        { key: "A", text: t`$54.1\%$`, correct: false, misconceptionId: "C07-M8", value: "54.1000000000000" },
        { key: "B", text: t`$5.41\%$`, correct: true, value: "5.41000000000000" },
        { key: "C", text: t`$45.3\%$`, correct: false, misconceptionId: "C07-M4", value: "45.3000000000000" },
        { key: "D", text: t`$0.0534\%$`, correct: false, misconceptionId: "C07-M7", value: "0.0534000000000000" },
      ],
      solution: {
        steps: [
          t`Isotonic means the same $\pi$: $M = \dfrac{\pi}{RT} = \dfrac{7.65}{0.0821 \times 310}$ $= 0.301\ \mathrm{mol\,L^{-1}}$.`,
          t`Mass per litre $= 0.301 \times 180$ $= 54.1\ \mathrm{g}$.`,
          t`Per $100\ \mathrm{mL}$: $5.41\ \mathrm{g}$, so $5.41\%$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#6" },
      stem: t`In calculating osmotic pressure, the concentration of the solute is expressed in`,
      verify: { kind: "value", inputs: {  }, params: { ask: "conc_unit" } },
      options: [
        { key: "A", text: t`molarity`, correct: true, value: "molarity" },
        { key: "B", text: t`mass per cent`, correct: false, misconceptionId: "C07-M1", value: "mass_percent" },
        { key: "C", text: t`molality`, correct: false, misconceptionId: "C07-M2", value: "molality" },
        { key: "D", text: t`mole fraction`, correct: false, misconceptionId: "C07-M3", value: "mole_fraction" },
      ],
      solution: {
        steps: [
          t`$\pi V = n_2 RT$ gives $\pi = \dfrac{n_2}{V} RT$.`,
          t`$\dfrac{n_2}{V}$ is moles of solute per litre of solution: the molarity, $\pi = MRT$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.1 (xii)" },
      stem: t`With $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$, the osmotic pressure of a $0.05\ \mathrm{M}$ sucrose solution ($M_2 = 342\ \mathrm{g\,mol^{-1}}$) at $300\ \mathrm{K}$ ($27^\circ\mathrm{C}$) is`,
      verify: { kind: "value", inputs: { C: "0.05", M2: "342", T: "300" }, params: { ask: "pi_atm" } },
      options: [
        { key: "A", text: t`$0.111\ \mathrm{atm}$`, correct: false, misconceptionId: "C07-M4", value: "0.111000000000000" },
        { key: "B", text: t`$125\ \mathrm{atm}$`, correct: false, misconceptionId: "C07-M7", value: "125" },
        { key: "C", text: t`$421\ \mathrm{atm}$`, correct: false, misconceptionId: "C07-M1", value: "421" },
        { key: "D", text: t`$1.23\ \mathrm{atm}$`, correct: true, value: "1.23000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 300\ \mathrm{K}$ and $M = 0.05\ \mathrm{mol\,L^{-1}}$ (moles, not grams).`,
          t`$\pi = MRT = 0.05 \times 0.0821 \times 300$ $= 1.23\ \mathrm{atm}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.9" },
      stem: t`$1.71\ \mathrm{g}$ of sucrose ($M_2 = 342\ \mathrm{g\,mol^{-1}}$) is dissolved in water to make $250\ \mathrm{mL}$ of solution at $300\ \mathrm{K}$ ($27^\circ\mathrm{C}$). With $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$ and $1\ \mathrm{atm} = 760\ \mathrm{mm\,Hg}$, its osmotic pressure is`,
      verify: { kind: "value", inputs: { W2: "1.71", M2: "342", V_mL: "250", T: "300" }, params: { ask: "pi_mmHg" } },
      options: [
        { key: "A", text: t`$374\ \mathrm{mm\,Hg}$`, correct: true, value: "374" },
        { key: "B", text: t`$0.374\ \mathrm{mm\,Hg}$`, correct: false, misconceptionId: "C07-M5", value: "0.374000000000000" },
        { key: "C", text: t`$0.493\ \mathrm{mm\,Hg}$`, correct: false, misconceptionId: "C07-M6", value: "0.493000000000000" },
        { key: "D", text: t`$33.7\ \mathrm{mm\,Hg}$`, correct: false, misconceptionId: "C07-M4", value: "33.7000000000000" },
      ],
      solution: {
        steps: [
          t`$n_2 = \dfrac{1.71}{342} = 0.00500\ \mathrm{mol}$ in $0.250\ \mathrm{L}$: $M = 0.0200\ \mathrm{mol\,L^{-1}}$.`,
          t`$\pi = 0.0200 \times 0.0821 \times 300$ $= 0.493\ \mathrm{atm}$.`,
          t`$\pi = 0.493 \times 760$ $= 374\ \mathrm{mm\,Hg}$.`,
        ],
      },
    },
  ],
};
