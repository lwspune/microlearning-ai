import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Solutions of hydrochloric acid and of acetic acid with the same molality are cooled. The hydrochloric acid solution freezes almost twice as far below $0^\circ\mathrm{C}$. What does that tell us about the two acids?`,
    reveal: t`Hydrochloric acid is almost fully ionised, so each unit gives nearly two particles and $i \approx 2$. Acetic acid is a weak acid, only a few per cent ionised, so $i$ is just above $1$. The value of $i$ tells us what fraction of the solute has dissociated.`,
  },
  explanation: {
    intuition: [
      t`A weak electrolyte splits into ions only partly.`,
      t`The **degree of dissociation** $\alpha$ is the fraction of formula units that split.`,
      t`The undissociated units still count as particles; each split one adds extra ions.`,
      t`So the van't Hoff factor $i$ lies between $1$ (none split) and $n$ (all split).`,
      t`Measuring $i$ from a colligative property therefore gives $\alpha$.`,
    ],
    formal: [
      {
        title: "Relating alpha and i",
        points: [
          t`Take $1$ mol of a solute that gives $n$ ions per formula unit, a fraction $\alpha$ dissociated.`,
          t`Undissociated: $1 - \alpha$ mol; ions formed: $n\alpha$ mol.`,
          t`Particles $= 1 - \alpha + n\alpha$, so $i = 1 + \alpha(n - 1)$.`,
          t`Rearranged, $\alpha = \dfrac{i - 1}{n - 1}$.`,
          t`For a binary electrolyte such as $\ce{HCOOH}$, $n = 2$ and $\alpha = i - 1$.`,
        ],
      },
      {
        title: "Association gives i below 1",
        points: [
          t`In **association** molecules join: in benzene, $\ce{2CH3COOH <=> (CH3COOH)2}$.`,
          t`If a fraction $\alpha$ forms dimers, particles per molecule $= 1 - \alpha + \dfrac{\alpha}{2}$.`,
          t`So $i = 1 - \dfrac{\alpha}{2}$, less than $1$, and $\alpha = 2(1 - i)$.`,
          t`The observed molar mass is then larger than the true one.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $0.05\ \mathrm{m}$ aqueous solution of $\ce{MgCl2}$ freezes at $-0.250^\circ\mathrm{C}$. With $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, find its degree of dissociation.`,
      steps: [
        t`Calculated $\Delta T_f = 1.86 \times 0.05$ $= 0.093\ \mathrm{K}$.`,
        t`$i = \dfrac{0.250}{0.093}$ $= 2.69$.`,
        t`$\ce{MgCl2 -> Mg^2+ + 2Cl-}$, so $n = 3$.`,
        t`$\alpha = \dfrac{i - 1}{n - 1} = \dfrac{1.69}{2}$ $\approx 0.84$.`,
      ],
      answer: t`$\alpha \approx 0.84$, that is about $84\%$ dissociated`,
    },
    visualSpec: t`Slide the degree of dissociation from 0 to 1 and watch the particle count, and i, climb from 1 to n.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Uses $\alpha = i - 1$ for every solute.`,
      remediation: t`$\alpha = i - 1$ holds only when $n = 2$; in general $\alpha = \dfrac{i - 1}{n - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Divides $i - 1$ by $n$ instead of by $n - 1$.`,
      remediation: t`Each dissociated unit adds $n - 1$ extra particles, so $\alpha = \dfrac{i - 1}{n - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Counts only the ions formed, taking $i = n\alpha$ (so $\alpha = \dfrac{i}{n}$).`,
      remediation: t`The undissociated part still counts: particles $= 1 - \alpha + n\alpha$, so $i = 1 + \alpha(n - 1)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Takes $i$ as calculated ÷ observed before finding $\alpha$.`,
      remediation: t`$i$ = observed ÷ calculated, more than $1$ for a solute that dissociates.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M5",
      mistake: "Treats a weak electrolyte as fully dissociated.",
      remediation: t`Only a fraction $\alpha$ dissociates: $i = 1 + \alpha(n - 1)$, not $n$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M6",
      mistake: t`Uses the per cent figure itself as $\alpha$.`,
      remediation: t`$\alpha$ is a fraction: divide the per cent by $100$, so $5\%$ is $\alpha = 0.05$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: t`Takes the degree of association of a dimer as $1 - i$.`,
      remediation: t`Each associating molecule removes only half a particle: $i = 1 - \dfrac{\alpha}{2}$, so $\alpha = 2(1 - i)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C09-M1 gives the key for binary electrolytes ($n = 2$, such as $\ce{HCOOH}$ or $\ce{KCl}$): diagnose it with $n \ge 3$ or with association.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.2 (iv)" },
      stem: t`A $0.1\ \mathrm{m}$ aqueous solution of $\ce{K2SO4}$ freezes at $-0.43^\circ\mathrm{C}$. With $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, the degree of dissociation of $\ce{K2SO4}$ is`,
      verify: { kind: "value", inputs: { dT: "0.43", Kf: "1.86", m: "0.1", n: "3" }, params: { ask: "alpha_fp" } },
      options: [
        { key: "A", text: t`$0.437$`, correct: false, misconceptionId: "C09-M2", value: "0.437000000000000" },
        { key: "B", text: t`$0.771$`, correct: false, misconceptionId: "C09-M3", value: "0.771000000000000" },
        { key: "C", text: t`$0.656$`, correct: true, value: "0.656000000000000" },
        { key: "D", text: t`$1.31$`, correct: false, misconceptionId: "C09-M1", value: "1.31000000000000" },
      ],
      solution: {
        steps: [
          t`Calculated $\Delta T_f = 1.86 \times 0.1$ $= 0.186\ \mathrm{K}$, so $i = \dfrac{0.43}{0.186}$ $= 2.31$.`,
          t`$\ce{K2SO4 -> 2K+ + SO4^2-}$, so $n = 3$.`,
          t`$\alpha = \dfrac{2.31 - 1}{3 - 1}$ $= 0.656$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.11" },
      stem: t`A $0.01\ \mathrm{m}$ aqueous solution of formic acid, $\ce{HCOOH}$, freezes at $-0.021^\circ\mathrm{C}$. With $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, its degree of dissociation is`,
      verify: { kind: "value", inputs: { dT: "0.021", Kf: "1.86", m: "0.01", n: "2" }, params: { ask: "alpha_fp" } },
      options: [
        { key: "A", text: t`$0.129$`, correct: true, value: "0.129000000000000" },
        { key: "B", text: t`$0.0645$`, correct: false, misconceptionId: "C09-M2", value: "0.0645000000000000" },
        { key: "C", text: t`$0.565$`, correct: false, misconceptionId: "C09-M3", value: "0.565000000000000" },
        { key: "D", text: t`$-0.114$`, correct: false, misconceptionId: "C09-M4", value: "-0.114000000000000" },
      ],
      solution: {
        steps: [
          t`$i = \dfrac{0.021}{1.86 \times 0.01}$ $= 1.13$.`,
          t`$\ce{HCOOH <=> H+ + HCOO-}$, so $n = 2$.`,
          t`$\alpha = \dfrac{1.13 - 1}{2 - 1}$ $= 0.129$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.14" },
      stem: t`A $0.1\ \mathrm{m}$ aqueous solution of $\ce{CH3COOH}$ is $1.35\%$ dissociated. With $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, the solution freezes at`,
      verify: { kind: "value", inputs: { m: "0.1", Kf: "1.86", a_pct: "1.35", n: "2" }, params: { ask: "Tf_alpha" } },
      options: [
        { key: "A", text: t`$-0.00502\ \mathrm{{}^{\circ}C}$`, correct: false, misconceptionId: "C09-M3", value: "-0.00502000000000000" },
        { key: "B", text: t`$-0.372\ \mathrm{{}^{\circ}C}$`, correct: false, misconceptionId: "C09-M5", value: "-0.372000000000000" },
        { key: "C", text: t`$-0.437\ \mathrm{{}^{\circ}C}$`, correct: false, misconceptionId: "C09-M6", value: "-0.437000000000000" },
        { key: "D", text: t`$-0.189\ \mathrm{{}^{\circ}C}$`, correct: true, value: "-0.189000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha = 0.0135$ and $n = 2$, so $i = 1 + 0.0135$ $= 1.0135$.`,
          t`$\Delta T_f = iK_f m = 1.0135 \times 1.86 \times 0.1$ $= 0.189\ \mathrm{K}$.`,
          t`$T_f = 0 - 0.189$ $= -0.189^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.14" },
      stem: t`A $0.05\ \mathrm{M}$ aqueous solution of formic acid, $\ce{HCOOH}$, is $6.0\%$ dissociated. With $R = 0.0821\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}}$, its osmotic pressure at $300\ \mathrm{K}$ is`,
      verify: { kind: "value", inputs: { C: "0.05", T: "300", a_pct: "6.0", n: "2" }, params: { ask: "pi_alpha" } },
      options: [
        { key: "A", text: t`$1.31\ \mathrm{atm}$`, correct: true, value: "1.31000000000000" },
        { key: "B", text: t`$0.148\ \mathrm{atm}$`, correct: false, misconceptionId: "C09-M3", value: "0.148000000000000" },
        { key: "C", text: t`$2.46\ \mathrm{atm}$`, correct: false, misconceptionId: "C09-M5", value: "2.46000000000000" },
        { key: "D", text: t`$8.62\ \mathrm{atm}$`, correct: false, misconceptionId: "C09-M6", value: "8.62000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha = 0.060$ and $n = 2$, so $i = 1.06$.`,
          t`$\pi = iMRT = 1.06 \times 0.05 \times 0.0821 \times 300$ $= 1.31\ \mathrm{atm}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`In benzene, acetic acid partly associates into dimers, $\ce{2CH3COOH <=> (CH3COOH)2}$. A solution shows a van't Hoff factor $i = 0.60$. The degree of association of acetic acid is`,
      verify: { kind: "value", inputs: { i: "0.60", n: "1/2" }, params: { ask: "alpha_i" } },
      options: [
        { key: "A", text: t`$1.2$`, correct: false, misconceptionId: "C09-M3", value: "1.20000000000000" },
        { key: "B", text: t`$0.4$`, correct: false, misconceptionId: "C09-M7", value: "0.400000000000000" },
        { key: "C", text: t`$0.8$`, correct: true, value: "0.800000000000000" },
        { key: "D", text: t`$-0.4$`, correct: false, misconceptionId: "C09-M1", value: "-0.400000000000000" },
      ],
      solution: {
        steps: [
          t`For dimers, particles per molecule $= 1 - \alpha + \dfrac{\alpha}{2}$, so $i = 1 - \dfrac{\alpha}{2}$.`,
          t`$\alpha = 2(1 - i) = 2(1 - 0.60)$ $= 0.80$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.2 (vi)" },
      stem: t`An electrolyte gives $n$ ions per formula unit and has van't Hoff factor $i$. Its degree of dissociation $\alpha$ is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{i}{n}$`, correct: false, misconceptionId: "C09-M3", value: "i/n" },
        { key: "B", text: t`$\dfrac{i - 1}{n - 1}$`, correct: true, value: "(i - 1)/(n - 1)" },
        { key: "C", text: t`$i - 1$`, correct: false, misconceptionId: "C09-M1", value: "i - 1" },
        { key: "D", text: t`$\dfrac{i - 1}{n}$`, correct: false, misconceptionId: "C09-M2", value: "(i - 1)/n" },
      ],
      solution: {
        steps: [
          t`Of $1$ mol, $1 - \alpha$ stays whole and $n\alpha$ mol of ions form: $i = 1 + \alpha(n - 1)$.`,
          t`So $\alpha = \dfrac{i - 1}{n - 1}$.`,
        ],
      },
    },
  ],
};
