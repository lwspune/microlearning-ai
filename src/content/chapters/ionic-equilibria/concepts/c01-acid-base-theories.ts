import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Ammonia, $\ce{NH3}$, has no $\ce{OH-}$ in its formula, yet its solution turns red litmus blue. How can it be a base?`,
    reveal: t`It takes a proton from water: $\ce{NH3 + H2O}$ $\ce{<=> NH4+ + OH-}$. The $\ce{OH-}$ comes from water. A theory that calls a proton taker a base explains it.`,
  },
  explanation: {
    intuition: [
      t`An **acid** tastes sour and turns blue litmus red; a **base** turns red litmus blue.`,
      t`Three theories describe acids and bases, each wider than the one before.`,
      t`Arrhenius: an acid gives $\ce{H+}$ ions in water and a base gives $\ce{OH-}$ ions.`,
      t`Brønsted and Lowry: an acid gives away a proton, an $\ce{H+}$ ion, and a base takes it.`,
      t`Lewis: a base gives a pair of electrons and an acid accepts it.`,
    ],
    formal: [
      {
        title: "Arrhenius acids and bases",
        points: [
          t`An **Arrhenius acid** gives $\ce{H+}$ ions in water: $\ce{HCl -> H+ + Cl-}$.`,
          t`An **Arrhenius base** gives $\ce{OH-}$ ions in water: $\ce{NaOH -> Na+ + OH-}$.`,
          t`$\ce{H+}$ never stays bare: it joins a water molecule as the **hydronium ion**, $\ce{H3O+}$.`,
          t`The theory works only in water, and cannot explain bases like $\ce{NH3}$ that hold no $\ce{OH-}$.`,
        ],
      },
      {
        title: "Brønsted-Lowry acids and bases",
        points: [
          t`A **Brønsted acid** donates a proton ($\ce{H+}$); a **Brønsted base** accepts one.`,
          t`In $\ce{HCl + H2O}$ $\ce{-> H3O+ + Cl-}$, $\ce{HCl}$ is the acid and water the base.`,
          t`In $\ce{NH3 + H2O}$ $\ce{<=> NH4+ + OH-}$, water is the acid and $\ce{NH3}$ the base.`,
          t`So water can act as an acid or as a base: it is **amphoteric**.`,
        ],
      },
      {
        title: "Conjugate acid-base pairs",
        points: [
          t`A **conjugate pair** is two species that differ by exactly one $\ce{H+}$.`,
          t`An acid minus one $\ce{H+}$ is its **conjugate base**: $\ce{HCl}$ and $\ce{Cl-}$.`,
          t`A base plus one $\ce{H+}$ is its **conjugate acid**: $\ce{H2O}$ and $\ce{H3O+}$.`,
          t`Losing $\ce{H+}$ lowers the charge by one: $\ce{H2CO3}$, then $\ce{HCO3-}$, then $\ce{CO3^2-}$.`,
          t`In an equation, the two members of a pair sit on opposite sides.`,
          t`The stronger an acid, the weaker its conjugate base.`,
        ],
      },
      {
        title: "Lewis acids and bases",
        points: [
          t`A **Lewis base** donates a pair of electrons; a **Lewis acid** accepts that pair.`,
          t`$\ce{NH3}$ is a Lewis base: N has a **lone pair**, a pair of electrons not used in bonding.`,
          t`$\ce{AlCl3}$ and $\ce{BF3}$ are Lewis acids: their central atom has only six valence electrons.`,
          t`Cations such as $\ce{Fe^3+}$ are Lewis acids: they are electron deficient and accept pairs.`,
          t`Every Brønsted base is also a Lewis base: it holds the proton with a lone pair.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the two conjugate acid-base pairs in $\ce{HSO4- + H2O}$ $\ce{<=> SO4^2- + H3O+}$.`,
      steps: [
        t`$\ce{HSO4-}$ gives $\ce{H+}$ to water, so $\ce{HSO4-}$ is the acid and water the base.`,
        t`$\ce{HSO4-}$ minus one $\ce{H+}$ is $\ce{SO4^2-}$: the charge drops from $-1$ to $-2$.`,
        t`$\ce{H2O}$ plus one $\ce{H+}$ is $\ce{H3O+}$, its conjugate acid.`,
        t`Each pair has one member on each side of the equation.`,
      ],
      answer: t`$\ce{HSO4-}$ and $\ce{SO4^2-}$; $\ce{H3O+}$ and $\ce{H2O}$`,
    },
    visualSpec: t`Drag a proton from an acid to a base and watch both conjugate partners appear.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Gives the conjugate acid (adds $\ce{H+}$) when the conjugate base is asked.`,
      remediation: t`A conjugate base has one $\ce{H+}$ fewer than its acid; adding $\ce{H+}$ gives the conjugate acid.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Removes a hydrogen atom and leaves the charge unchanged.",
      remediation: t`An acid loses a proton, $\ce{H+}$, so the charge drops by one: $\ce{H2O}$ becomes $\ce{OH-}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Takes the other reactant as the conjugate partner.",
      remediation: t`A conjugate pair differs by one $\ce{H+}$, and its two members sit on opposite sides of the equation.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Uses the Arrhenius idea for every acid and base: only $\ce{H+}$ or $\ce{OH-}$ in water count.`,
      remediation: t`Arrhenius is the narrowest theory. Brønsted counts proton transfer and Lewis counts electron pairs, with no $\ce{H+}$ or $\ce{OH-}$ needed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Swaps the Lewis roles: the acid donates the electron pair.",
      remediation: "A Lewis acid **accepts** an electron pair; the Lewis base donates it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Removes a whole water molecule instead of one $\ce{H+}$.`,
      remediation: t`Only one $\ce{H+}$ leaves: one bound $\ce{H2O}$ becomes $\ce{OH-}$, and the charge drops by one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Takes whichever species contains hydrogen to be the acid.",
      remediation: "Holding hydrogen is not enough: a Brønsted acid must give a proton, and a Lewis acid needs no hydrogen at all.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.1 (vi)" },
      stem: t`What is the conjugate base of $\ce{[Zn(H2O)4]^2+}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "zn_conj_base" } },
      options: [
        { key: "A", text: t`$\ce{[Zn(H2O)3OH]+}$`, correct: true, value: "zn_h2o3_oh_plus" },
        { key: "B", text: t`$\ce{[Zn(H2O)4H]^3+}$`, correct: false, misconceptionId: "C01-M1", value: "zn_h2o4_h_3plus" },
        { key: "C", text: t`$\ce{[Zn(H2O)3OH]^2+}$`, correct: false, misconceptionId: "C01-M2", value: "zn_h2o3_oh_2plus" },
        { key: "D", text: t`$\ce{[Zn(H2O)3]^2+}$`, correct: false, misconceptionId: "C01-M6", value: "zn_h2o3_2plus" },
      ],
      solution: {
        steps: [
          t`A conjugate base has one $\ce{H+}$ fewer than its acid.`,
          t`One bound $\ce{H2O}$ loses $\ce{H+}$ and becomes $\ce{OH-}$.`,
          t`The charge drops from $2+$ to $1+$: $\ce{[Zn(H2O)3OH]+}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (iii)" },
      stem: t`In the reaction $\ce{CO3^2- + H2O}$ $\ce{<=> OH- + HCO3-}$, what is the conjugate base of $\ce{H2O}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "co3_conj_base" } },
      options: [
        { key: "A", text: t`$\ce{OH-}$`, correct: true, value: "hydroxide_ion" },
        { key: "B", text: t`$\ce{H3O+}$`, correct: false, misconceptionId: "C01-M1", value: "hydronium_ion" },
        { key: "C", text: t`$\ce{OH}$, with no charge`, correct: false, misconceptionId: "C01-M2", value: "hydroxyl_neutral" },
        { key: "D", text: t`$\ce{CO3^2-}$`, correct: false, misconceptionId: "C01-M3", value: "carbonate_ion" },
      ],
      solution: {
        steps: [
          t`Water gives $\ce{H+}$ to $\ce{CO3^2-}$, so here water is the acid.`,
          t`Its conjugate base has one $\ce{H+}$ fewer: $\ce{H2O}$ becomes $\ce{OH-}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (iv)" },
      stem: t`In the reaction $\ce{HCl + H2O}$ $\ce{-> H3O+ + Cl-}$, what does water act as?`,
      verify: { kind: "value", inputs: {  }, params: { q: "water_role" } },
      options: [
        { key: "A", text: t`Neither an acid nor a base: no $\ce{OH-}$ forms`, correct: false, misconceptionId: "C01-M4", value: "neither_no_oh" },
        { key: "B", text: t`A Lewis acid: it donates a lone pair to $\ce{H+}$`, correct: false, misconceptionId: "C01-M5", value: "lewis_acid_donates" },
        { key: "C", text: t`A Brønsted base: it accepts a proton from $\ce{HCl}$`, correct: true, value: "base_accepts_proton" },
        { key: "D", text: t`An acid: it contains hydrogen it can give away`, correct: false, misconceptionId: "C01-M7", value: "acid_has_h" },
      ],
      solution: {
        steps: [
          t`$\ce{HCl}$ gives its proton to $\ce{H2O}$, forming $\ce{H3O+}$.`,
          t`A proton acceptor is a Brønsted base, so water acts as a base.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (i)" },
      stem: t`Cations such as $\ce{Fe^3+}$ and $\ce{Cu^2+}$ act as acids. Which statement explains this?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cations" } },
      options: [
        { key: "A", text: t`They are Lewis acids: being electron deficient, they accept an electron pair`, correct: true, value: "accept_pair" },
        { key: "B", text: t`They are Lewis acids: being positive, they donate an electron pair`, correct: false, misconceptionId: "C01-M5", value: "donate_pair" },
        { key: "C", text: t`They are acids only when they release $\ce{H+}$ ions in water`, correct: false, misconceptionId: "C01-M4", value: "only_if_give_h" },
        { key: "D", text: t`Only cations that contain hydrogen, such as $\ce{NH4+}$, can be acids`, correct: false, misconceptionId: "C01-M7", value: "only_if_contain_h" },
      ],
      solution: {
        steps: [
          t`A cation has lost electrons: it is electron deficient.`,
          t`It can accept an electron pair, for example from water, so it is a Lewis acid.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (v)" },
      stem: t`Ammonia and aluminium chloride combine: $\ce{H3N + AlCl3}$ $\ce{-> H3N-AlCl3}$. Which statement is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nh3_alcl3" } },
      options: [
        { key: "A", text: t`$\ce{AlCl3}$ is the Lewis acid: it accepts the lone pair on N`, correct: true, value: "alcl3_accepts" },
        { key: "B", text: t`$\ce{NH3}$ is the Lewis acid: it donates its lone pair`, correct: false, misconceptionId: "C01-M5", value: "nh3_donates_acid" },
        { key: "C", text: t`$\ce{NH3}$ is the acid: it has hydrogen atoms to give`, correct: false, misconceptionId: "C01-M7", value: "nh3_has_h" },
        { key: "D", text: t`Neither is an acid: no $\ce{H+}$ ions are formed`, correct: false, misconceptionId: "C01-M4", value: "neither_no_h" },
      ],
      solution: {
        steps: [
          t`N in $\ce{NH3}$ has a lone pair; Al in $\ce{AlCl3}$ has only six valence electrons.`,
          t`N donates its pair to Al: $\ce{NH3}$ is the Lewis base and $\ce{AlCl3}$ the Lewis acid.`,
        ],
      },
    },
  ],
};
