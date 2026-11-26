import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A $0.5\ \mathrm{m}$ salt solution and a $0.5\ \mathrm{m}$ sugar solution are cooled side by side. Which freezes at the lower temperature, and by how much?`,
    reveal: t`The salt solution, nearly twice as far below $0^\circ\mathrm{C}$. Each $\ce{NaCl}$ unit splits into two ions, $\ce{Na+}$ and $\ce{Cl-}$, and colligative properties count particles, not formula units.`,
  },
  explanation: {
    intuition: [
      t`Colligative properties depend on the number of solute particles.`,
      t`An **electrolyte** splits into ions in water, so it gives more particles than formula units.`,
      t`So its freezing point depression, boiling point elevation and osmotic pressure come out larger than expected.`,
      t`Some solutes **associate**, joining into pairs, and give fewer particles than molecules.`,
      t`The **van't Hoff factor** $i$ measures how many particles each formula unit really gives.`,
    ],
    formal: [
      {
        title: "The van't Hoff factor",
        points: [
          t`$i$ = observed colligative property ÷ the value calculated assuming no dissociation.`,
          t`Equivalently, $i$ = moles of particles in solution ÷ moles of formula units dissolved.`,
          t`Dissociation gives $i > 1$, association gives $i < 1$, and a nonelectrolyte has $i = 1$.`,
          t`The molar mass found from a colligative property is then the calculated one divided by $i$.`,
        ],
      },
      {
        title: "Colligative formulas with i",
        points: [
          t`Each formula carries $i$: $\Delta T_f = iK_f m$ and $\Delta T_b = iK_b m$.`,
          t`Likewise $\pi = iMRT$ and $\dfrac{\Delta P}{P_1^0} = i x_2$.`,
          t`For complete dissociation $i$ is the number of ions per formula unit: $\ce{NaCl}$ gives $2$.`,
          t`$\ce{K2SO4 -> 2K+ + SO4^2-}$ gives $3$; $\ce{Al2(SO4)3}$ gives $2 + 3 = 5$.`,
          t`Measured $i$ is often a little below this, because some ions stay paired.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which has the larger freezing point depression, $0.1\ \mathrm{m}$ $\ce{NaCl}$ or $0.05\ \mathrm{m}$ $\ce{Al2(SO4)3}$? Assume complete dissociation.`,
      steps: [
        t`$\ce{NaCl}$ gives $2$ ions: particle molality $= 2 \times 0.1 = 0.2\ \mathrm{mol\,kg^{-1}}$.`,
        t`$\ce{Al2(SO4)3}$ gives $5$ ions: $5 \times 0.05 = 0.25\ \mathrm{mol\,kg^{-1}}$.`,
        t`$\Delta T_f = iK_f m$ is larger for the larger $im$: $0.25 > 0.2$.`,
      ],
      answer: t`$0.05\ \mathrm{m}$ $\ce{Al2(SO4)3}$, though its molality is half`,
    },
    visualSpec: t`Dissolve formula units one at a time and watch each split into ions, the particle counter and the freezing point drop rising i times as fast.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Leaves out the van't Hoff factor for an electrolyte.",
      remediation: t`An electrolyte gives $i$ particles per formula unit, so the effect is $i$ times larger: $\Delta T_f = iK_f m$, $\pi = iMRT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Takes $i$ as calculated ÷ observed.`,
      remediation: t`$i$ = observed ÷ calculated; a solute that dissociates gives $i > 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Counts the kinds of ion instead of the number of ions.",
      remediation: t`Count every ion released: $\ce{K2SO4 -> 2K+ + SO4^2-}$ gives $3$ ions, not $2$.`,
      fallback: { kind: "ext", topic: "ionic compounds and their formulae (Std XI Chemistry)" },
    },
    {
      id: "C08-M4",
      mistake: t`Puts $i$ on the wrong side, multiplying where it should divide or the reverse.`,
      remediation: t`$i$ multiplies the calculated effect: $\Delta T_f = iK_f m$, so $m = \dfrac{\Delta T_f}{iK_f}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Uses the full number of ions as $i$ when the data give a smaller value.`,
      remediation: t`Some ions stay paired, so the measured $i$ is usually below the ion count: use the $i$ the data give.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Takes $i$ as observed minus calculated.`,
      remediation: t`$i$ is a ratio, observed ÷ calculated, not a difference.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C08-M3 gives the key for 1:1 salts ($\ce{KCl}$, $\ce{NaCl}$), where the kinds and the number of ions are both 2: diagnose it with salts like $\ce{K2SO4}$ or $\ce{Al2(SO4)3}$.`,
    t`C08-M5 gives the key whenever dissociation is complete: diagnose it only on items whose data give $i$ below the ion count.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.3 (iv)" },
      stem: t`Solutions of $\ce{CaCl2}$ and of urea of the same concentration, at the same temperature, have osmotic pressures $0.605\ \mathrm{atm}$ and $0.245\ \mathrm{atm}$. The van't Hoff factor of $\ce{CaCl2}$ is`,
      verify: { kind: "value", inputs: { P_obs: "0.605", P_calc: "0.245", n: "3" }, params: { ask: "i_ratio" } },
      options: [
        { key: "A", text: t`$2.47$`, correct: true, value: "2.47000000000000" },
        { key: "B", text: t`$0.405$`, correct: false, misconceptionId: "C08-M2", value: "0.405000000000000" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C08-M5", value: "3" },
        { key: "D", text: t`$0.36$`, correct: false, misconceptionId: "C08-M6", value: "0.360000000000000" },
      ],
      solution: {
        steps: [
          t`Urea does not dissociate, so its $0.245\ \mathrm{atm}$ is the calculated value.`,
          t`$i = \dfrac{0.605}{0.245}$ $= 2.47$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.10" },
      stem: t`A $0.2\ \mathrm{m}$ aqueous solution of $\ce{KCl}$ freezes at $-0.680^\circ\mathrm{C}$ ($K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$). Taking molarity equal to molality and $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$, its osmotic pressure at $0^\circ\mathrm{C}$ ($273\ \mathrm{K}$) is`,
      verify: { kind: "value", inputs: { dT: "0.680", Kf: "1.86", m: "0.2", T: "273", n: "2" }, params: { ask: "pi_fp" } },
      options: [
        { key: "A", text: t`$4.48\ \mathrm{atm}$`, correct: false, misconceptionId: "C08-M1", value: "4.48000000000000" },
        { key: "B", text: t`$8.97\ \mathrm{atm}$`, correct: false, misconceptionId: "C08-M5", value: "8.97000000000000" },
        { key: "C", text: t`$2.45\ \mathrm{atm}$`, correct: false, misconceptionId: "C08-M2", value: "2.45000000000000" },
        { key: "D", text: t`$8.19\ \mathrm{atm}$`, correct: true, value: "8.19000000000000" },
      ],
      solution: {
        steps: [
          t`Calculated $\Delta T_f = 1.86 \times 0.2$ $= 0.372\ \mathrm{K}$, so $i = \dfrac{0.680}{0.372}$ $= 1.83$.`,
          t`$\pi = iMRT$ $= 1.83 \times 0.2 \times 0.0821 \times 273$.`,
          t`$\pi = 8.19\ \mathrm{atm}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#22" },
      stem: t`An aqueous solution of $\ce{K2SO4}$ freezes at $-1.674^\circ\mathrm{C}$. Assuming complete dissociation and $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, its molality is`,
      verify: { kind: "value", inputs: { dT: "1.674", Kf: "1.86", n: "3", k: "2" }, params: { ask: "m_full" } },
      options: [
        { key: "A", text: t`$0.9\ \mathrm{mol\,kg^{-1}}$`, correct: false, misconceptionId: "C08-M1", value: "0.900000000000000" },
        { key: "B", text: t`$2.7\ \mathrm{mol\,kg^{-1}}$`, correct: false, misconceptionId: "C08-M4", value: "2.70000000000000" },
        { key: "C", text: t`$0.45\ \mathrm{mol\,kg^{-1}}$`, correct: false, misconceptionId: "C08-M3", value: "0.450000000000000" },
        { key: "D", text: t`$0.3\ \mathrm{mol\,kg^{-1}}$`, correct: true, value: "0.300000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{K2SO4 -> 2K+ + SO4^2-}$, so $i = 3$.`,
          t`$m = \dfrac{\Delta T_f}{iK_f}$ $= \dfrac{1.674}{3 \times 1.86}$ $= 0.300\ \mathrm{mol\,kg^{-1}}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#17" },
      stem: t`Assuming complete dissociation and $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$, the osmotic pressure of a $0.1\ \mathrm{M}$ aqueous solution of $\ce{Al2(SO4)3}$ at $298\ \mathrm{K}$ is`,
      verify: { kind: "value", inputs: { C: "0.1", T: "298", n: "5", k: "2" }, params: { ask: "pi_full" } },
      options: [
        { key: "A", text: t`$4.89\ \mathrm{atm}$`, correct: false, misconceptionId: "C08-M3", value: "4.89000000000000" },
        { key: "B", text: t`$0.489\ \mathrm{atm}$`, correct: false, misconceptionId: "C08-M4", value: "0.489000000000000" },
        { key: "C", text: t`$12.2\ \mathrm{atm}$`, correct: true, value: "12.2000000000000" },
        { key: "D", text: t`$2.45\ \mathrm{atm}$`, correct: false, misconceptionId: "C08-M1", value: "2.45000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{Al2(SO4)3}$ gives $2\ \ce{Al^3+}$ and $3\ \ce{SO4^2-}$, so $i = 5$.`,
          t`$\pi = iMRT = 5 \times 0.1 \times 0.0821 \times 298$ $= 12.2\ \mathrm{atm}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#12" },
      stem: t`What mass of $\ce{CaCl2}$ ($M_2 = 111\ \mathrm{g\,mol^{-1}}$, van't Hoff factor $i = 2.47$) must be dissolved in $2.5\ \mathrm{L}$ of solution to give an osmotic pressure of $0.75\ \mathrm{atm}$ at $300\ \mathrm{K}$? Take $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$.`,
      verify: { kind: "value", inputs: { P: "0.75", V: "2.5", M2: "111", T: "300", i: "2.47", n: "3" }, params: { ask: "mass_pi" } },
      options: [
        { key: "A", text: t`$2.82\ \mathrm{g}$`, correct: false, misconceptionId: "C08-M5", value: "2.82000000000000" },
        { key: "B", text: t`$3.42\ \mathrm{g}$`, correct: true, value: "3.42000000000000" },
        { key: "C", text: t`$8.45\ \mathrm{g}$`, correct: false, misconceptionId: "C08-M1", value: "8.45000000000000" },
        { key: "D", text: t`$20.9\ \mathrm{g}$`, correct: false, misconceptionId: "C08-M4", value: "20.9000000000000" },
      ],
      solution: {
        steps: [
          t`$\pi = i\dfrac{n_2}{V}RT$, so $n_2 = \dfrac{\pi V}{iRT}$ $= \dfrac{0.75 \times 2.5}{2.47 \times 0.0821 \times 300}$.`,
          t`$n_2 = 0.0308\ \mathrm{mol}$.`,
          t`Mass $= 0.0308 \times 111$ $= 3.42\ \mathrm{g}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.15" },
      stem: t`A $0.15\ \mathrm{m}$ aqueous solution of $\ce{KCl}$ freezes at $-0.510^\circ\mathrm{C}$. With $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, the van't Hoff factor is`,
      verify: { kind: "value", inputs: { dT: "0.510", Kf: "1.86", m: "0.15", n: "2" }, params: { ask: "i_fp" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C08-M5", value: "2" },
        { key: "B", text: t`$0.231$`, correct: false, misconceptionId: "C08-M6", value: "0.231000000000000" },
        { key: "C", text: t`$1.83$`, correct: true, value: "1.83000000000000" },
        { key: "D", text: t`$0.547$`, correct: false, misconceptionId: "C08-M2", value: "0.547000000000000" },
      ],
      solution: {
        steps: [
          t`Calculated $\Delta T_f = K_f m = 1.86 \times 0.15$ $= 0.279\ \mathrm{K}$.`,
          t`$i = \dfrac{0.510}{0.279}$ $= 1.83$, a little below $2$ as some ions stay paired.`,
        ],
      },
    },
  ],
};
