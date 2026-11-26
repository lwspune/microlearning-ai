import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A sucrose solution turns polarised light to the right. Boil it with a little acid and it turns light to the left. The sugar was split, not flipped. How can that reverse the rotation?`,
    reveal: t`Sucrose splits into equal amounts of glucose (+52.5°) and fructose (−92.4°). Fructose turns light more strongly, so the mixture turns it left.`,
  },
  explanation: {
    intuition: [
      t`A **glycosidic link** joins two sugar units through an oxygen atom.`,
      t`Which carbons are joined, and whether $\alpha$ or $\beta$, decides the sugar's properties.`,
      t`If a free anomeric carbon remains, the ring can open and the sugar is reducing.`,
      t`Polysaccharides are long chains of glucose; the link type decides whether we can digest them.`,
    ],
    formal: [
      {
        title: "Disaccharides",
        points: [
          t`**Sucrose** = $\alpha$-glucose + $\beta$-fructose, C-1 to C-2: nonreducing.`,
          t`**Maltose** = two $\alpha$-glucose units, $\alpha$-1,4: reducing.`,
          t`**Lactose** = $\beta$-galactose + glucose, $\beta$-1,4: reducing.`,
          t`Hydrolysis of sucrose turns (+) rotation to (−): **invert sugar**.`,
        ],
      },
      {
        title: "Polysaccharides",
        points: [
          t`Starch: amylose ($\alpha$-1,4, unbranched) and amylopectin (with $\alpha$-1,6 branches).`,
          t`Glycogen, the animal store, is like amylopectin but more branched.`,
          t`Cellulose: unbranched $\beta$-1,4 chains, which human enzymes cannot break.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is lactose a reducing sugar?`,
      steps: [
        t`Lactose joins galactose C-1 to glucose C-4.`,
        t`Glucose's C-1 stays free, so its ring can open.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`Join two sugar rings and see which anomeric carbons are used up and which stay free.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Gives sucrose's $\alpha,\beta$-1,2 link to every disaccharide.`,
      remediation: t`Only sucrose joins C-1 to C-2; maltose is $\alpha$-1,4, lactose $\beta$-1,4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes the $\beta$-1,4 link for maltose.`,
      remediation: t`Maltose joins two $\alpha$-glucose units: $\alpha$-1,4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Takes the $\alpha$-1,6 branch link for the main link.`,
      remediation: t`$\alpha$-1,6 links occur only at branches in amylopectin and glycogen.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Confuses lactose with maltose.",
      remediation: t`Lactose has $\beta$-galactose: its link is $\beta$-1,4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks sucrose is built from units with no carbonyl group.",
      remediation: "Glucose and fructose have carbonyls, but in sucrose both are tied up in the link.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks fructose units can never reduce Tollens' reagent.",
      remediation: "Free fructose does reduce it; in sucrose its anomeric carbon is used up.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks sucrose is too large to react.",
      remediation: "Maltose is the same size and reduces; the anomeric carbons decide.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks the glycosidic bond itself is inverted.",
      remediation: "Inversion refers to the sign of optical rotation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks glucose is converted into fructose.",
      remediation: "Hydrolysis gives equal glucose and fructose; fructose's stronger laevorotation wins.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks D sugars change into L sugars.",
      remediation: "D/L is configuration; it does not change. Only the sign of rotation does.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks cellulose is made of fructose.",
      remediation: "Cellulose, like starch, is a polymer of glucose.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Blames branching.",
      remediation: t`Cellulose is unbranched; its $\beta$ links are the problem.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: t`Thinks cellulose has $\alpha$-1,6 links.`,
      remediation: t`Cellulose has only $\beta$-1,4 links.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#9" },
      stem: t`The glycosidic linkage in maltose is`,
      verify: { kind: "value", inputs: {  }, params: { q: "maltose" } },
      options: [
        { key: "A", text: t`$\beta$-1,4`, correct: false, misconceptionId: "C03-M2", value: "beta_1_4" },
        { key: "B", text: t`$\alpha$-1,6`, correct: false, misconceptionId: "C03-M3", value: "alpha_1_6" },
        { key: "C", text: t`$\alpha,\beta$-1,2`, correct: false, misconceptionId: "C03-M1", value: "alpha_beta_1_2" },
        { key: "D", text: t`$\alpha$-1,4`, correct: true, value: "alpha_1_4" },
      ],
      solution: {
        steps: [
          t`Maltose joins two $\alpha$-glucose units.`,
          t`C-1 of one to C-4 of the other: $\alpha$-1,4.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#11" },
      stem: t`The glycosidic linkage in lactose is`,
      verify: { kind: "value", inputs: {  }, params: { q: "lactose" } },
      options: [
        { key: "A", text: t`$\beta$-1,4`, correct: true, value: "beta_1_4" },
        { key: "B", text: t`$\alpha$-1,6`, correct: false, misconceptionId: "C03-M3", value: "alpha_1_6" },
        { key: "C", text: t`$\alpha$-1,4`, correct: false, misconceptionId: "C03-M4", value: "alpha_1_4" },
        { key: "D", text: t`$\alpha,\beta$-1,2`, correct: false, misconceptionId: "C03-M1", value: "alpha_beta_1_2" },
      ],
      solution: {
        steps: [
          t`Lactose joins $\beta$-galactose to glucose.`,
          t`C-1 to C-4: $\beta$-1,4.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.2 (i)" },
      stem: t`Sucrose gives a negative Tollens' test, but maltose gives a positive one. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "tollens" } },
      options: [
        { key: "A", text: t`sucrose is built from units that have no carbonyl group at all`, correct: false, misconceptionId: "C03-M5", value: "no_carbonyl" },
        { key: "B", text: t`in sucrose both anomeric carbons are used in the glycosidic link, so no ring can open to a free carbonyl`, correct: true, value: "anomeric_tied" },
        { key: "C", text: t`sucrose molecules are too large to react`, correct: false, misconceptionId: "C03-M7", value: "too_large" },
        { key: "D", text: t`sucrose contains fructose, and fructose units never reduce Tollens' reagent`, correct: false, misconceptionId: "C03-M6", value: "fructose_never" },
      ],
      solution: {
        steps: [
          t`Sucrose links glucose C-1 to fructose C-2.`,
          t`No free anomeric carbon: no ring opens, no reduction.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.2 (iv)" },
      stem: t`The hydrolysis of sucrose is called inversion because`,
      verify: { kind: "value", inputs: {  }, params: { q: "inversion" } },
      options: [
        { key: "A", text: t`glucose is converted into fructose`, correct: false, misconceptionId: "C03-M9", value: "glucose_to_fructose" },
        { key: "B", text: t`D sugars change into L sugars`, correct: false, misconceptionId: "C03-M10", value: "d_to_l" },
        { key: "C", text: t`the optical rotation changes from dextro (+) to laevo (−)`, correct: true, value: "sign_changes" },
        { key: "D", text: t`the glycosidic bond is turned the other way round`, correct: false, misconceptionId: "C03-M8", value: "bond_inverted" },
      ],
      solution: {
        steps: [
          t`Sucrose is (+); the glucose + fructose mixture is (−).`,
          t`The sign of rotation inverts.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Starch and cellulose are both polymers of glucose, yet humans cannot digest cellulose. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cellulose" } },
      options: [
        { key: "A", text: t`cellulose units are joined by $\alpha$-1,6 links`, correct: false, misconceptionId: "C03-M13", value: "alpha_1_6" },
        { key: "B", text: t`cellulose is made of fructose units`, correct: false, misconceptionId: "C03-M11", value: "fructose" },
        { key: "C", text: t`cellulose chains are highly branched`, correct: false, misconceptionId: "C03-M12", value: "branched" },
        { key: "D", text: t`its glucose units are joined by $\beta$-1,4 links, which human enzymes cannot break`, correct: true, value: "beta_links" },
      ],
      solution: {
        steps: [
          t`Cellulose units are joined by $\beta$-1,4 links.`,
          t`Human enzymes break only $\alpha$ links.`,
        ],
      },
    },
  ],
};
