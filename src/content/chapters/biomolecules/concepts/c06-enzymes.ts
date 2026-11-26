import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`In a lab, hydrolysing starch needs boiling acid. In your mouth, saliva does it at body temperature in seconds. What does saliva have?`,
    reveal: t`An enzyme, amylase: a protein whose shape fits starch exactly and lowers the energy barrier of the reaction.`,
  },
  explanation: {
    intuition: [
      t`Enzymes are biological catalysts, almost all of them proteins.`,
      t`Each enzyme acts on one substrate or one kind of bond: it is **specific**.`,
      t`The substrate fits the enzyme's **active site** like a key in a lock.`,
      t`Enzymes work under mild conditions and are not used up.`,
    ],
    formal: [
      {
        title: "How enzymes act",
        points: [
          t`Enzyme + substrate → enzyme-substrate complex → enzyme + products.`,
          t`They lower the activation energy; they do not shift the equilibrium.`,
          t`Heat or extreme pH denatures them and stops their action.`,
        ],
      },
      {
        title: "Examples",
        points: [
          t`Invertase: sucrose → glucose + fructose.`,
          t`Maltase: maltose → glucose.`,
          t`Zymase: glucose → ethanol + $\ce{CO2}$.`,
          t`Chymotrypsin cuts peptide bonds whose C=O comes from Phe, Tyr or Trp.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which enzyme converts maltose into glucose?`,
      steps: [
        t`Enzyme names often add -ase to the substrate.`,
        t`Maltose → maltase.`,
      ],
      answer: t`Maltase`,
    },
    visualSpec: t`Fit different substrate shapes into an enzyme's active site and see which ones lock in.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks enzymes are carbohydrates.",
      remediation: "Enzymes are proteins; carbohydrates are often their substrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks enzymes are lipids.",
      remediation: "Enzymes are globular proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks enzymes are nucleic acids.",
      remediation: "Nucleic acids carry the code for enzymes; the enzymes themselves are proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks one enzyme speeds up every reaction.",
      remediation: "Each enzyme is specific to its substrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks the enzyme is used up.",
      remediation: "Like any catalyst, the enzyme is released unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks enzymes shift the equilibrium.",
      remediation: "Catalysts speed up both directions equally; the equilibrium is unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Confuses invertase with maltase.",
      remediation: "Maltase gives two glucose units; invertase splits sucrose.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Confuses invertase with lactase.",
      remediation: "Lactose gives glucose and galactose; sucrose gives glucose and fructose.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Confuses invertase with zymase.",
      remediation: "Zymase ferments glucose to ethanol; invertase hydrolyses sucrose.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Forgets that heat denatures enzymes.",
      remediation: "Well above body temperature most enzymes are denatured and stop working.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks enzymes need very low temperatures.",
      remediation: "Cold slows enzymes; they work best near body temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks enzymes need strong acid or alkali.",
      remediation: "Extreme pH denatures most enzymes; each has a suitable mild pH.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Cuts the bond where Phe supplies the N-H.",
      remediation: "Chymotrypsin cuts the bond whose C=O comes from Phe.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Cuts every bond next to Phe.",
      remediation: "Only the bond on Phe's C=O side is cut.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks no bond qualifies.",
      remediation: "Phe's C=O forms the Phe-Gly bond, so that bond is cut.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.4 (viii)" },
      stem: t`Chemically, almost all enzymes are`,
      verify: { kind: "value", inputs: {  }, params: { q: "nature" } },
      options: [
        { key: "A", text: t`carbohydrates`, correct: false, misconceptionId: "C06-M1", value: "carbohydrates" },
        { key: "B", text: t`proteins`, correct: true, value: "proteins" },
        { key: "C", text: t`nucleic acids`, correct: false, misconceptionId: "C06-M3", value: "nucleic_acids" },
        { key: "D", text: t`lipids`, correct: false, misconceptionId: "C06-M2", value: "lipids" },
      ],
      solution: {
        steps: [
          t`Enzymes are globular proteins.`,
          t`Their folded shape forms the active site.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`The lock-and-key model of enzyme action means that`,
      verify: { kind: "value", inputs: {  }, params: { q: "lock" } },
      options: [
        { key: "A", text: t`the enzyme is used up as it locks onto the substrate`, correct: false, misconceptionId: "C06-M5", value: "used_up" },
        { key: "B", text: t`one enzyme speeds up every reaction in the cell`, correct: false, misconceptionId: "C06-M4", value: "every_reaction" },
        { key: "C", text: t`the substrate fits the enzyme's active site, so each enzyme acts on a specific substrate`, correct: true, value: "specific_fit" },
        { key: "D", text: t`the enzyme shifts the equilibrium towards the products`, correct: false, misconceptionId: "C06-M6", value: "shifts_equilibrium" },
      ],
      solution: {
        steps: [
          t`Only a substrate of the right shape fits the active site.`,
          t`So each enzyme is specific.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`The enzyme invertase hydrolyses sucrose into`,
      verify: { kind: "value", inputs: {  }, params: { q: "invertase" } },
      options: [
        { key: "A", text: t`ethanol and carbon dioxide`, correct: false, misconceptionId: "C06-M9", value: "ethanol_co2" },
        { key: "B", text: t`two glucose units`, correct: false, misconceptionId: "C06-M7", value: "two_glucose" },
        { key: "C", text: t`glucose and galactose`, correct: false, misconceptionId: "C06-M8", value: "glucose_galactose" },
        { key: "D", text: t`glucose and fructose`, correct: true, value: "glucose_fructose" },
      ],
      solution: {
        steps: [
          t`Invertase hydrolyses sucrose.`,
          t`Sucrose gives glucose and fructose.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`Enzymes work best`,
      verify: { kind: "value", inputs: {  }, params: { q: "conditions" } },
      options: [
        { key: "A", text: t`under mild conditions, near body temperature and a suitable pH`, correct: true, value: "mild" },
        { key: "B", text: t`only in strong acid or strong alkali`, correct: false, misconceptionId: "C06-M12", value: "strong_acid_alkali" },
        { key: "C", text: t`at high temperatures: the hotter, the faster`, correct: false, misconceptionId: "C06-M10", value: "hotter_better" },
        { key: "D", text: t`only at very low temperatures`, correct: false, misconceptionId: "C06-M11", value: "very_cold" },
      ],
      solution: {
        steps: [
          t`Enzymes are proteins; heat and extreme pH denature them.`,
          t`They work best under mild conditions.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Solved Ex.14.3" },
      stem: t`Chymotrypsin hydrolyses amide bonds whose C=O comes from phenylalanine, tyrosine or tryptophan. Which bond of the tripeptide Ala-Phe-Gly does it cut?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chymotrypsin" } },
      options: [
        { key: "A", text: t`the Ala-Phe bond`, correct: false, misconceptionId: "C06-M13", value: "ala_phe" },
        { key: "B", text: t`the Phe-Gly bond`, correct: true, value: "phe_gly" },
        { key: "C", text: t`both peptide bonds`, correct: false, misconceptionId: "C06-M14", value: "both" },
        { key: "D", text: t`neither bond`, correct: false, misconceptionId: "C06-M15", value: "neither" },
      ],
      solution: {
        steps: [
          t`In Ala-Phe-Gly, Phe's C=O forms the Phe-Gly bond.`,
          t`Chymotrypsin cuts that bond.`,
        ],
      },
    },
  ],
};
