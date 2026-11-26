import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Some ions are missing from a crystal of salt. Can it lose ions and still carry no overall charge?`,
    reveal: t`Yes. In a Schottky defect a cation and an anion go missing together, so the charges still balance; only the density falls.`,
  },
  explanation: {
    intuition: [
      t`Real crystals are never perfect: a few particles are missing or out of place.`,
      t`A **point defect** is such a fault at one lattice point.`,
      t`A **vacancy** is a lattice site left empty; an **interstitial site** is a gap between lattice sites.`,
      t`An ionic crystal must stay neutral, so its ions go missing or move in charge-balanced sets.`,
      t`Losing ions lowers the density; merely moving them inside the crystal does not.`,
    ],
    formal: [
      {
        title: "Schottky defect",
        points: [
          t`In a **Schottky defect**, equal numbers of cations and anions are missing from their sites.`,
          t`Equal charges are lost, so the crystal stays electrically neutral.`,
          t`Mass is lost while the volume stays the same, so the density decreases.`,
          t`It occurs when cation and anion are similar in size, with a high coordination number: $\ce{NaCl}$, $\ce{KCl}$, $\ce{AgBr}$.`,
        ],
      },
      {
        title: "Frenkel defect",
        points: [
          t`In a **Frenkel defect**, an ion leaves its site and occupies an interstitial site.`,
          t`The smaller ion, usually the cation, is the one that fits into the gap.`,
          t`No ion leaves the crystal, so its density is unchanged and it stays neutral.`,
          t`It needs a large difference in ion sizes and a low coordination number: $\ce{ZnS}$, $\ce{AgCl}$, $\ce{AgBr}$.`,
        ],
      },
      {
        title: "Impurity defects",
        points: [
          t`An **impurity defect** arises when foreign atoms are present in the crystal.`,
          t`**Substitutional**: they take host sites, as Zn in brass. **Interstitial**: they fill gaps, as C in steel.`,
          t`An **aliovalent** impurity ion has a different charge from the host ion, like $\ce{Sr^2+}$ in $\ce{NaCl}$.`,
          t`Each $\ce{Sr^2+}$ removes two $\ce{Na+}$ ions, fills one of their sites and leaves the other as a **cation vacancy**.`,
          t`So the number of cation vacancies equals the number of $\ce{Sr^2+}$ ions added.`,
        ],
      },
      {
        title: "Non-stoichiometric defects",
        points: [
          t`In a **non-stoichiometric** defect the ratio of the ions no longer matches the formula.`,
          t`**Metal deficiency**: in $\ce{NiO}$ some $\ce{Ni^2+}$ sites are empty, and nearby $\ce{Ni^3+}$ ions balance the charge.`,
          t`Its formula becomes about $\ce{Ni_{0.98}O}$; a Schottky defect, by contrast, keeps the formula unchanged.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\ce{AgCl}$ is doped with $0.1$ mol % of $\ce{CdCl2}$, each $\ce{Cd^2+}$ taking an $\ce{Ag+}$ site. How many cation vacancies form per mole of $\ce{AgCl}$?`,
      steps: [
        t`To keep the crystal neutral, each $\ce{Cd^2+}$ removes two $\ce{Ag+}$ ions.`,
        t`It occupies one of the two sites; the other is left as a cation vacancy.`,
        t`$0.1$ mol % means $\dfrac{0.1}{100} = 10^{-3}$ mol of $\ce{Cd^2+}$ per mole of $\ce{AgCl}$.`,
        t`Vacancies $= 10^{-3} \times 6.022 \times 10^{23}$ $= 6.02 \times 10^{20}$.`,
      ],
      answer: t`$6.02 \times 10^{20}$ cation vacancies per mole`,
    },
    visualSpec: t`Pull ions out of a model crystal or push them into the gaps and watch its density and charge.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Swaps the Schottky and Frenkel defects.",
      remediation: "Schottky: a cation and an anion are both missing, so the density falls. Frenkel: an ion only moves to an interstitial site, so the density stays the same.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Ignores charge balance: thinks a defect can leave the crystal charged.",
      remediation: t`A crystal stays electrically neutral: ions go missing in charge-balanced sets, and each $\ce{Sr^2+}$ in place of $\ce{Na+}$ needs one cation vacancy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks the larger anion is the ion that moves in a Frenkel defect.",
      remediation: "The smaller ion, usually the cation, fits into an interstitial site; that is why a large difference in ion sizes favours Frenkel defects.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Counts two cation vacancies for each $\ce{Sr^2+}$ ion.`,
      remediation: t`Each $\ce{Sr^2+}$ removes two cations but sits in one of the two sites itself, so it leaves only one vacancy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Treats a mol % as a mole fraction, without dividing by 100.",
      remediation: t`$x$ mol % means $\dfrac{x}{100}$ mol in every mole: $10^{-3}$ mol % is $10^{-5}$ mol per mole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks an ion squeezed into an interstitial site makes the crystal denser.",
      remediation: "In a Frenkel defect the ion only moves inside the crystal: its mass and volume stay the same, so the density does not change.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.13" },
      stem: t`Zinc sulfide, $\ce{ZnS}$, shows a Frenkel defect. Which description of the defect is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "frenkel_desc" } },
      options: [
        { key: "A", text: t`Some $\ce{Zn^2+}$ ions leave their sites for interstitial sites; the crystal stays neutral`, correct: true, value: "cation_to_interstitial" },
        { key: "B", text: t`Equal numbers of $\ce{Zn^2+}$ and $\ce{S^2-}$ ions are missing from their sites`, correct: false, misconceptionId: "C08-M1", value: "ion_pair_missing" },
        { key: "C", text: t`Some $\ce{Zn^2+}$ ions leave their sites for interstitial sites; the crystal becomes charged`, correct: false, misconceptionId: "C08-M2", value: "cation_moved_crystal_charged" },
        { key: "D", text: t`Some $\ce{S^2-}$ ions leave their sites for interstitial sites; the crystal stays neutral`, correct: false, misconceptionId: "C08-M3", value: "anion_to_interstitial" },
      ],
      solution: {
        steps: [
          t`In a Frenkel defect an ion leaves its site and sits in an interstitial site.`,
          t`The smaller ion moves: in $\ce{ZnS}$ that is $\ce{Zn^2+}$.`,
          t`No ion is lost or gained, so the crystal stays neutral.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.1 (iii)" },
      stem: t`Silver chloride, $\ce{AgCl}$, shows a Frenkel defect. What does the defect do to the crystal?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "frenkel_effect" } },
      options: [
        { key: "A", text: t`Its density decreases and it stays electrically neutral`, correct: false, misconceptionId: "C08-M1", value: "density_falls_neutral" },
        { key: "B", text: t`Its density is unchanged but it becomes electrically charged`, correct: false, misconceptionId: "C08-M2", value: "density_same_charged" },
        { key: "C", text: t`Its density increases and it stays electrically neutral`, correct: false, misconceptionId: "C08-M6", value: "density_rises_neutral" },
        { key: "D", text: t`Its density is unchanged and it stays electrically neutral`, correct: true, value: "density_same_neutral" },
      ],
      solution: {
        steps: [
          t`In a Frenkel defect an $\ce{Ag+}$ ion moves from its site to an interstitial site.`,
          t`No ion leaves the crystal, so its mass and volume, and hence its density, are unchanged.`,
          t`Every charge is still present, so the crystal stays neutral.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.14" },
      stem: t`$\ce{NaCl}$ is doped with $10^{-3}$ mol % of $\ce{SrCl2}$. How many cation vacancies does this create per mole of $\ce{NaCl}$? Take $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
      verify: { kind: "value", inputs: { pct: "1/1000" }, params: { ask: "vacancies" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "B", text: t`$1.2 \times 10^{19}$`, correct: false, misconceptionId: "C08-M4", value: "12000000000000000000" },
        { key: "C", text: t`$6.02 \times 10^{20}$`, correct: false, misconceptionId: "C08-M5", value: "602000000000000000000" },
        { key: "D", text: t`$6.02 \times 10^{18}$`, correct: true, value: "6020000000000000000" },
      ],
      solution: {
        steps: [
          t`Each $\ce{Sr^2+}$ replaces two $\ce{Na+}$ and fills one of their sites: one cation vacancy.`,
          t`$10^{-3}$ mol % $= 10^{-5}$ mol of $\ce{Sr^2+}$ per mole of $\ce{NaCl}$.`,
          t`Vacancies $= 10^{-5} \times 6.022 \times 10^{23}$ $= 6.02 \times 10^{18}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (vii)" },
      stem: t`A crystal of $\ce{NaCl}$ has Schottky defects at $2 \times 10^{-3}$ mol % of its formula units. How many ions are missing per mole of $\ce{NaCl}$? Take $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
      verify: { kind: "value", inputs: { pct: "2/1000" }, params: { ask: "schottky_ions" } },
      options: [
        { key: "A", text: t`$1.2 \times 10^{19}$`, correct: false, misconceptionId: "C08-M2", value: "12000000000000000000" },
        { key: "B", text: t`$2.41 \times 10^{21}$`, correct: false, misconceptionId: "C08-M5", value: "2410000000000000000000" },
        { key: "C", text: t`$2.41 \times 10^{19}$`, correct: true, value: "24100000000000000000" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C08-M1", value: "0" },
      ],
      solution: {
        steps: [
          t`Each Schottky defect is a missing $\ce{Na+}$ and a missing $\ce{Cl-}$: two ions.`,
          t`$2 \times 10^{-3}$ mol % $= 2 \times 10^{-5}$ mol of defects per mole.`,
          t`Ions missing $= 2 \times 2 \times 10^{-5} \times N_A$ $= 2.41 \times 10^{19}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.14" },
      stem: t`$\ce{KCl}$ is doped with $0.02$ mol % of $\ce{CaCl2}$, and each $\ce{Ca^2+}$ takes a $\ce{K+}$ site. How many cation vacancies form per mole of $\ce{KCl}$? Take $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
      verify: { kind: "value", inputs: { pct: "2/100" }, params: { ask: "vacancies" } },
      options: [
        { key: "A", text: t`$1.2 \times 10^{22}$`, correct: false, misconceptionId: "C08-M5", value: "12000000000000000000000" },
        { key: "B", text: t`$1.2 \times 10^{20}$`, correct: true, value: "120000000000000000000" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "D", text: t`$2.41 \times 10^{20}$`, correct: false, misconceptionId: "C08-M4", value: "241000000000000000000" },
      ],
      solution: {
        steps: [
          t`Each $\ce{Ca^2+}$ replaces two $\ce{K+}$ and fills one site, leaving one cation vacancy.`,
          t`$0.02$ mol % $= 2 \times 10^{-4}$ mol of $\ce{Ca^2+}$ per mole of $\ce{KCl}$.`,
          t`Vacancies $= 2 \times 10^{-4} \times N_A$ $= 1.20 \times 10^{20}$.`,
        ],
      },
    },
  ],
};
