import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Sodium acetate is made by neutralising acetic acid with $\ce{NaOH}$, yet its solution turns red litmus blue. Why is it not neutral?`,
    reveal: t`The acetate ion takes $\ce{H+}$ from water and leaves extra $\ce{OH-}$: $\ce{CH3COO- + H2O}$ $\ce{<=> CH3COOH + OH-}$. This reaction is hydrolysis.`,
  },
  explanation: {
    intuition: [
      t`A **salt** forms when an acid neutralises a base: $\ce{NaCl}$ from $\ce{HCl}$ and $\ce{NaOH}$.`,
      t`In water a salt splits into its ions, a cation and an anion.`,
      t`An ion from a **weak** parent acid or base reacts with water: this is **hydrolysis**.`,
      t`Hydrolysis makes extra $\ce{H3O+}$ or $\ce{OH-}$, so the solution need not be neutral.`,
      t`The **stronger** parent decides the nature of the solution.`,
    ],
    formal: [
      {
        title: "Strong acid, weak base: acidic",
        points: [
          t`Example: $\ce{NH4NO3}$, from strong $\ce{HNO3}$ and weak $\ce{NH4OH}$.`,
          t`$\ce{NO3-}$ comes from a strong acid, so it does not react with water.`,
          t`$\ce{NH4+}$ does: $\ce{NH4+ + H2O}$ $\ce{<=> NH4OH + H+}$.`,
          t`The extra $\ce{H+}$ makes the solution acidic: its pH is below 7.`,
        ],
      },
      {
        title: "Weak acid, strong base: basic",
        points: [
          t`Example: $\ce{CH3COONa}$, from weak $\ce{CH3COOH}$ and strong $\ce{NaOH}$.`,
          t`$\ce{Na+}$ comes from a strong base, so it does not react with water.`,
          t`$\ce{CH3COO-}$ does: $\ce{CH3COO- + H2O}$ $\ce{<=> CH3COOH + OH-}$.`,
          t`The extra $\ce{OH-}$ makes the solution basic: its pH is above 7.`,
        ],
      },
      {
        title: "Two strong or two weak",
        points: [
          t`Strong acid and strong base, as in $\ce{NaCl}$: neither ion reacts, so the solution is neutral.`,
          t`Weak acid and weak base: **both** ions react with water.`,
          t`If $K_a > K_b$ the solution is acidic; if $K_b > K_a$ it is basic.`,
          t`If $K_a = K_b$ the two effects cancel and the solution is neutral.`,
        ],
      },
    ],
    worked: {
      prompt: t`Predict the nature of aqueous ammonium formate, $\ce{HCOONH4}$. $K_a$ of $\ce{HCOOH}$ is $1.8 \times 10^{-4}$; $K_b$ of $\ce{NH4OH}$ is $1.8 \times 10^{-5}$.`,
      steps: [
        t`Both parents are weak, so both $\ce{HCOO-}$ and $\ce{NH4+}$ react with water.`,
        t`$\ce{NH4+}$ makes $\ce{H+}$; $\ce{HCOO-}$ makes $\ce{OH-}$.`,
        t`$K_a = 1.8 \times 10^{-4}$ is larger than $K_b = 1.8 \times 10^{-5}$.`,
        t`The acid is the stronger parent, so the solution is slightly acidic.`,
      ],
      answer: t`Slightly acidic`,
    },
    visualSpec: t`Drop a salt into water, pick which ions react, and watch the litmus and pH meter respond.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks every salt solution is neutral, since a salt is a neutralisation product.",
      remediation: t`Ions from a weak parent react with water and make $\ce{H3O+}$ or $\ce{OH-}$, so many salt solutions are acidic or basic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Lets the weaker parent decide the nature of the solution.",
      remediation: "The **stronger** parent wins: strong acid with weak base gives an acidic solution, weak acid with strong base a basic one.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Judges the salt by its parent base alone.",
      remediation: t`Look at both parents: strong acid and strong base give a neutral salt; with two weak parents, compare $K_a$ and $K_b$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks the ion from the strong parent reacts with water.",
      remediation: t`Ions from strong acids and bases, like $\ce{Na+}$, $\ce{K+}$, $\ce{Cl-}$ and $\ce{SO4^2-}$, do not react with water; only ions from weak parents do.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks every salt of a weak acid and a weak base is neutral.",
      remediation: t`Both ions react with water, but usually to different extents: compare $K_a$ and $K_b$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks a neutral salt solution means no hydrolysis.",
      remediation: t`In $\ce{CH3COONH4}$ both ions react with water; since $K_a = K_b$, they make equal amounts of $\ce{H3O+}$ and $\ce{OH-}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (viii)" },
      stem: t`What is the nature of an aqueous sodium carbonate, $\ce{Na2CO3}$, solution, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "na2co3" } },
      options: [
        { key: "A", text: t`Basic: $\ce{Na+}$ reacts with water to form $\ce{NaOH}$`, correct: false, misconceptionId: "C05-M4", value: "basic_sodium_ion" },
        { key: "B", text: t`Basic: $\ce{CO3^2-}$ takes $\ce{H+}$ from water, leaving $\ce{OH-}$`, correct: true, value: "basic_carbonate" },
        { key: "C", text: t`Acidic: its parent acid, $\ce{H2CO3}$, is weak`, correct: false, misconceptionId: "C05-M2", value: "acidic_weak_acid" },
        { key: "D", text: t`Neutral: a salt is the product of neutralisation`, correct: false, misconceptionId: "C05-M1", value: "neutral_all_salts" },
      ],
      solution: {
        steps: [
          t`$\ce{Na2CO3}$ comes from weak $\ce{H2CO3}$ and strong $\ce{NaOH}$, so $\ce{Na+}$ does not react.`,
          t`$\ce{CO3^2- + H2O}$ $\ce{<=> HCO3- + OH-}$: extra $\ce{OH-}$, so the solution is basic.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (viii)" },
      stem: t`What is the nature of an aqueous ammonium chloride, $\ce{NH4Cl}$, solution, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nh4cl" } },
      options: [
        { key: "A", text: t`Basic: its parent base, $\ce{NH4OH}$, is weak`, correct: false, misconceptionId: "C05-M2", value: "basic_weak_base" },
        { key: "B", text: t`Neutral: a salt is the product of neutralisation`, correct: false, misconceptionId: "C05-M1", value: "neutral_all_salts" },
        { key: "C", text: t`Acidic: $\ce{Cl-}$ reacts with water to form $\ce{HCl}$`, correct: false, misconceptionId: "C05-M4", value: "acidic_chloride_ion" },
        { key: "D", text: t`Acidic: $\ce{NH4+}$ gives $\ce{H+}$ to water, forming $\ce{H3O+}$`, correct: true, value: "acidic_ammonium" },
      ],
      solution: {
        steps: [
          t`$\ce{NH4Cl}$ comes from strong $\ce{HCl}$ and weak $\ce{NH4OH}$, so $\ce{Cl-}$ does not react.`,
          t`$\ce{NH4+ + H2O}$ $\ce{<=> NH4OH + H+}$: extra $\ce{H+}$, so the solution is acidic.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (ii)" },
      stem: t`What does an aqueous $\ce{KCl}$ solution do to litmus, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "kcl" } },
      options: [
        { key: "A", text: t`No change: neither $\ce{K+}$ nor $\ce{Cl-}$ reacts with water`, correct: true, value: "no_change_no_hydrolysis" },
        { key: "B", text: t`Turns red litmus blue: its parent base, $\ce{KOH}$, is strong`, correct: false, misconceptionId: "C05-M3", value: "blue_strong_base" },
        { key: "C", text: t`No change: $\ce{K+}$ and $\ce{Cl-}$ both react with water, equally`, correct: false, misconceptionId: "C05-M4", value: "no_change_both_hydrolyse" },
        { key: "D", text: t`No change: every salt solution is neutral`, correct: false, misconceptionId: "C05-M1", value: "no_change_all_salts" },
      ],
      solution: {
        steps: [
          t`$\ce{KCl}$ comes from strong $\ce{HCl}$ and strong $\ce{KOH}$.`,
          t`Neither ion reacts with water, so $[\ce{H3O+}] = [\ce{OH-}]$ and litmus does not change.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.4 (iii)" },
      stem: t`$K_a$ of acetic acid and $K_b$ of $\ce{NH4OH}$ are both $1.8 \times 10^{-5}$. What is the nature of aqueous $\ce{CH3COONH4}$, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ch3coonh4" } },
      options: [
        { key: "A", text: t`Acidic: its parent base, $\ce{NH4OH}$, is weak`, correct: false, misconceptionId: "C05-M3", value: "acidic_weak_base" },
        { key: "B", text: t`Neutral: every salt solution is neutral`, correct: false, misconceptionId: "C05-M1", value: "neutral_all_salts" },
        { key: "C", text: t`Neutral: both ions react with water, to the same extent`, correct: true, value: "neutral_equal_hydrolysis" },
        { key: "D", text: t`Neutral: neither ion reacts with water`, correct: false, misconceptionId: "C05-M6", value: "neutral_no_hydrolysis" },
      ],
      solution: {
        steps: [
          t`Both parents are weak, so both $\ce{CH3COO-}$ and $\ce{NH4+}$ react with water.`,
          t`$K_a = K_b$, so they make equal amounts of $\ce{OH-}$ and $\ce{H3O+}$: the solution is neutral.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`$K_a$ of $\ce{HCN}$ is $4.9 \times 10^{-10}$ and $K_b$ of $\ce{NH4OH}$ is $1.8 \times 10^{-5}$. What is the nature of aqueous $\ce{NH4CN}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nh4cn" } },
      options: [
        { key: "A", text: t`Basic: $K_b > K_a$, so $\ce{CN-}$ reacts with water more than $\ce{NH4+}$`, correct: true, value: "basic_kb_larger" },
        { key: "B", text: t`Neutral: a salt of a weak acid and a weak base is always neutral`, correct: false, misconceptionId: "C05-M5", value: "neutral_weak_weak" },
        { key: "C", text: t`Acidic: its weaker parent, $\ce{HCN}$, decides`, correct: false, misconceptionId: "C05-M2", value: "acidic_weaker_parent" },
        { key: "D", text: t`Neutral: every salt solution is neutral`, correct: false, misconceptionId: "C05-M1", value: "neutral_all_salts" },
      ],
      solution: {
        steps: [
          t`Both parents are weak, so both ions react with water.`,
          t`$K_b = 1.8 \times 10^{-5}$ is far larger than $K_a = 4.9 \times 10^{-10}$.`,
          t`$\ce{CN-}$ makes more $\ce{OH-}$ than $\ce{NH4+}$ makes $\ce{H+}$, so the solution is basic.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (ix)" },
      stem: t`Why is a little $\ce{H2SO4}$ added when a $\ce{CuSO4}$ solution is prepared?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cuso4" } },
      options: [
        { key: "A", text: t`To suppress the hydrolysis of $\ce{Cu^2+}$, which would make the solution turbid`, correct: true, value: "suppress_cu_hydrolysis" },
        { key: "B", text: t`To neutralise the solution, which the weak base $\ce{Cu(OH)2}$ makes basic`, correct: false, misconceptionId: "C05-M2", value: "neutralise_basic" },
        { key: "C", text: t`Only to help it dissolve: a $\ce{CuSO4}$ solution is neutral anyway`, correct: false, misconceptionId: "C05-M1", value: "dissolve_faster" },
        { key: "D", text: t`To stop the $\ce{SO4^2-}$ ions from reacting with water`, correct: false, misconceptionId: "C05-M4", value: "stop_sulphate_hydrolysis" },
      ],
      solution: {
        steps: [
          t`$\ce{Cu^2+}$ comes from the weak base $\ce{Cu(OH)2}$, so it reacts with water.`,
          t`$\ce{Cu^2+ + 2H2O}$ $\ce{<=> Cu(OH)2 + 2H+}$ would make the solution turbid.`,
          t`The $\ce{H+}$ from added $\ce{H2SO4}$ pushes this equilibrium back, suppressing the hydrolysis.`,
        ],
      },
    },
  ],
};
