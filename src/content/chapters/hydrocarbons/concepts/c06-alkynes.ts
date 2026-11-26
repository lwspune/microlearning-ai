import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Ethyne is a hydrocarbon, yet sodamide pulls a proton off it as though it were an acid. Ethane does not do this. What is special about ethyne's hydrogen?`,
    reveal: t`It sits on an $sp$ carbon, whose 50 % s character holds the C–H electrons close, so the H leaves as $\ce{H+}$ more easily.`,
  },
  explanation: {
    intuition: [
      t`Alkynes have a C≡C triple bond.`,
      t`Terminal alkynes have a weakly acidic H.`,
      t`Partial hydrogenation stops at the alkene with Lindlar's catalyst.`,
      t`Water adds to alkynes to give carbonyl compounds.`,
    ],
    formal: [
      {
        title: "Acidity",
        points: [
          t`$sp$ carbon (50 % s) holds bonding electrons closely.`,
          t`$\ce{HC#CH + LiNH2}$ $\ce{-> HC#CLi + NH3}$.`,
          t`Acetylides extend chains: $\ce{HC#CLi + C2H5Cl}$ $\ce{-> HC#C-C2H5}$.`,
        ],
      },
      {
        title: "Additions",
        points: [
          t`Lindlar's catalyst (Pd-C with quinoline): alkyne → cis-alkene.`,
          t`$\ce{HgSO4}$/dil. $\ce{H2SO4}$: ethyne → ethanal (via an enol).`,
        ],
      },
    ],
    worked: {
      prompt: t`What does propyne give with $\ce{HgSO4}$ and dil. $\ce{H2SO4}$?`,
      steps: [
        t`Water adds by Markovnikov's rule.`,
        t`The enol becomes acetone.`,
      ],
      answer: t`Acetone`,
    },
    visualSpec: t`Compare how tightly sp, sp² and sp³ carbons hold their C–H electrons.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks ethane.",
      remediation: t`$sp^3$ C–H bonds are not acidic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks ethylene.",
      remediation: t`$sp^2$ C–H is far less acidic than $sp$ C–H.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks an internal alkyne.",
      remediation: "Dimethylacetylene has no H on its sp carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Reduces fully.",
      remediation: "Lindlar's catalyst stops at the alkene.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Expects an alcohol.",
      remediation: "Hydrogenation adds only H.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Expects no reaction.",
      remediation: t`Lindlar's catalyst adds one $\ce{H2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Expects ethanol.",
      remediation: "The enol rearranges to ethanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Expects acetone.",
      remediation: "Ethyne has only two carbons: ethanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Expects acetic acid.",
      remediation: "Hydration gives an aldehyde, not an acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Reduces the product.",
      remediation: "No hydrogen is added; the chain grows.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Moves the triple bond.",
      remediation: "The ethyl joins the end carbon: but-1-yne.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Adds an extra carbon.",
      remediation: "2 + 2 = 4 carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks the triple bond is weak.",
      remediation: "The C≡C is strong; the sp carbon's electronegativity matters.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: t`Calls the carbon $sp^3$.`,
      remediation: t`The triple-bonded carbon is $sp$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Calls alkynes ionic.",
      remediation: "Alkynes are covalent.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.1 (B)" },
      stem: t`An acidic hydrogen is present in`,
      verify: { kind: "value", inputs: {  }, params: { q: "acidic" } },
      options: [
        { key: "A", text: t`ethane`, correct: false, misconceptionId: "C06-M1", value: "ethane" },
        { key: "B", text: t`acetylene`, correct: true, value: "acetylene" },
        { key: "C", text: t`dimethylacetylene`, correct: false, misconceptionId: "C06-M3", value: "dimethylacetylene" },
        { key: "D", text: t`ethylene`, correct: false, misconceptionId: "C06-M2", value: "ethylene" },
      ],
      solution: {
        steps: [
          t`Only acetylene has H on an sp carbon.`,
          t`Acetylene.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.3 (c)" },
      stem: t`Propyne is treated with $\ce{H2}$ over Pd-C poisoned with quinoline (Lindlar's catalyst). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "lindlar" } },
      options: [
        { key: "A", text: t`propan-1-ol`, correct: false, misconceptionId: "C06-M5", value: "propanol" },
        { key: "B", text: t`propane`, correct: false, misconceptionId: "C06-M4", value: "propane" },
        { key: "C", text: t`propene`, correct: true, value: "propene" },
        { key: "D", text: t`nothing: no reaction`, correct: false, misconceptionId: "C06-M6", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`Lindlar's catalyst stops at the alkene.`,
          t`Propene.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.3 (d)" },
      stem: t`Ethyne is passed into dil. $\ce{H2SO4}$ containing $\ce{HgSO4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydration" } },
      options: [
        { key: "A", text: t`acetic acid`, correct: false, misconceptionId: "C06-M9", value: "acetic_acid" },
        { key: "B", text: t`ethanol`, correct: false, misconceptionId: "C06-M7", value: "ethanol" },
        { key: "C", text: t`acetone`, correct: false, misconceptionId: "C06-M8", value: "acetone" },
        { key: "D", text: t`ethanal`, correct: true, value: "ethanal" },
      ],
      solution: {
        steps: [
          t`Water adds; the enol tautomerises.`,
          t`Ethanal.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (P)" },
      stem: t`$\ce{HC#CH}$ is treated with $\ce{LiNH2}$, then with $\ce{CH3CH2Cl}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "chain" } },
      options: [
        { key: "A", text: t`but-1-yne`, correct: true, value: "but_1_yne" },
        { key: "B", text: t`pent-1-yne`, correct: false, misconceptionId: "C06-M12", value: "pent_1_yne" },
        { key: "C", text: t`butane`, correct: false, misconceptionId: "C06-M10", value: "butane" },
        { key: "D", text: t`but-2-yne`, correct: false, misconceptionId: "C06-M11", value: "but_2_yne" },
      ],
      solution: {
        steps: [
          t`$\ce{HC#CLi}$ + $\ce{C2H5Cl}$ gives $\ce{HC#C-C2H5}$.`,
          t`But-1-yne.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (P)" },
      stem: t`The hydrogen of a terminal alkyne is acidic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "why_acidic" } },
      options: [
        { key: "A", text: t`the triple bond is weak`, correct: false, misconceptionId: "C06-M13", value: "weak_triple" },
        { key: "B", text: t`the $sp$ carbon, with 50 % s character, holds the C–H electrons closely`, correct: true, value: "sp_s_character" },
        { key: "C", text: t`it is attached to an $sp^3$ carbon`, correct: false, misconceptionId: "C06-M14", value: "sp3_carbon" },
        { key: "D", text: t`alkynes are ionic compounds`, correct: false, misconceptionId: "C06-M15", value: "ionic" },
      ],
      solution: {
        steps: [
          t`sp carbons have 50 % s character.`,
          t`They hold the C–H electrons closely.`,
        ],
      },
    },
  ],
};
