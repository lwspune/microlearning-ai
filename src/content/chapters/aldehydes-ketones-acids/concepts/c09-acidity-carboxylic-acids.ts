import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Acetic acid is a weak acid, but trichloroacetic acid is strong enough to burn skin. Swapping three hydrogens for chlorines changed what?`,
    reveal: t`Chlorine pulls electrons away from the carboxylate ion, spreading its negative charge and stabilising it. The more stable the anion, the more readily the acid gives up $\ce{H+}$.`,
  },
  explanation: {
    intuition: [
      t`A carboxylic acid gives up $\ce{H+}$ to form a carboxylate ion, $\ce{RCOO-}$.`,
      t`The charge is shared equally by both oxygens through resonance.`,
      t`That is why carboxylic acids are stronger than phenols and much stronger than alcohols.`,
      t`Groups that pull electrons from the anion stabilise it further; groups that push electrons destabilise it.`,
    ],
    formal: [
      {
        title: "Order of acid strength",
        points: [
          t`Carboxylic acids > phenols > water > alcohols.`,
          t`Carboxylic acids release $\ce{CO2}$ from $\ce{NaHCO3}$; phenols do not.`,
          t`$\ce{HCOOH}$ > $\ce{CH3COOH}$: the methyl group pushes electrons (+I).`,
        ],
      },
      {
        title: "Effect of substituents",
        points: [
          t`Electron-withdrawing groups ($\ce{NO2}$, Cl, $\ce{CN}$) raise acidity.`,
          t`More of them raise it more: $\ce{Cl3CCOOH}$ > $\ce{Cl2CHCOOH}$ > $\ce{ClCH2COOH}$ > $\ce{CH3COOH}$.`,
          t`The nearer they are to COOH, the bigger the effect: 2-chloro > 3-chloro > 4-chlorobutanoic acid.`,
          t`Electron-donating groups ($\ce{CH3}$, $\ce{OCH3}$, $\ce{NH2}$) lower acidity.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange ethanoic acid, chloroethanoic acid and fluoroethanoic acid in increasing acid strength.`,
      steps: [
        t`Halogens withdraw electrons and stabilise the anion.`,
        t`F is more electronegative than Cl, so it withdraws more.`,
      ],
      answer: t`Ethanoic < chloroethanoic < fluoroethanoic acid`,
    },
    visualSpec: t`Attach groups to a carboxylate ion and watch its negative charge spread out or bunch up.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Thinks electron-donating groups raise acidity.",
      remediation: "Donating groups push charge onto the carboxylate oxygen, destabilising it: acidity falls.",
      fallback: { kind: "ext", topic: "inductive effect (Std XI Chemistry)" },
    },
    {
      id: "C09-M2",
      mistake: "Thinks electron-withdrawing groups lower acidity.",
      remediation: "Withdrawing groups spread the anion's negative charge and stabilise it: acidity rises.",
      fallback: { kind: "ext", topic: "inductive effect (Std XI Chemistry)" },
    },
    {
      id: "C09-M3",
      mistake: "Thinks a halogen lowers acidity.",
      remediation: "Halogens are electronegative; their -I effect raises the acidity of acids and phenols.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks the lighter acid is stronger because it is lighter.",
      remediation: "Mass does not decide acid strength; the stability of the anion does.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Thinks every compound with the same acid group is equally strong.",
      remediation: "Groups near the COOH change how stable the anion is, and so the acid strength.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks a more distant Cl has the bigger effect.",
      remediation: "The inductive effect fades with distance; Cl next to COOH has the most effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Thinks phenols are stronger acids than carboxylic acids.",
      remediation: "A carboxylate's charge is shared by two equivalent oxygens, more stable than phenoxide, so carboxylic acids are stronger.",
      fallback: { kind: "ext", topic: "acidity of phenols (Alcohols, Phenols and Ethers)" },
    },
    {
      id: "C09-M8",
      mistake: "Thinks alcohols are stronger acids than phenols.",
      remediation: "Phenoxide is resonance stabilised; alkoxide is not, so phenols are more acidic than alcohols.",
      fallback: { kind: "ext", topic: "acidity of phenols (Alcohols, Phenols and Ethers)" },
    },
    {
      id: "C09-M9",
      mistake: t`Thinks $\ce{CH3}$ donates electrons more strongly than $\ce{NH2}$.`,
      remediation: t`$\ce{NH2}$ donates its lone pair by resonance, a much stronger effect than $\ce{CH3}$'s +I.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.1 (iv)" },
      stem: t`Which of these has the lowest acidity?`,
      verify: { kind: "value", inputs: {  }, params: { q: "lowest" } },
      options: [
        { key: "A", text: t`benzoic acid`, correct: false, misconceptionId: "C09-M1", value: "benzoic" },
        { key: "B", text: t`2-chlorobenzoic acid`, correct: false, misconceptionId: "C09-M3", value: "chloro" },
        { key: "C", text: t`3-nitrobenzoic acid`, correct: false, misconceptionId: "C09-M2", value: "nitro" },
        { key: "D", text: t`4-methoxybenzoic acid`, correct: true, value: "methoxy" },
      ],
      solution: {
        steps: [
          t`$\ce{OCH3}$ donates electrons by resonance, destabilising the anion.`,
          t`So 4-methoxybenzoic acid is the weakest.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (ii)" },
      stem: t`Formic acid, $\ce{HCOOH}$, is a stronger acid than acetic acid, $\ce{CH3COOH}$. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "formic" } },
      options: [
        { key: "A", text: t`The $\ce{CH3}$ group releases electrons (+I), destabilising the acetate ion`, correct: true, value: "methyl_plus_i" },
        { key: "B", text: t`It is not: the $\ce{CH3}$ group makes acetic acid the stronger acid`, correct: false, misconceptionId: "C09-M1", value: "acetic_stronger" },
        { key: "C", text: t`Formic acid is the lighter molecule`, correct: false, misconceptionId: "C09-M4", value: "lighter" },
        { key: "D", text: t`It is not: both have the same COOH group, so they are equally strong`, correct: false, misconceptionId: "C09-M5", value: "equal" },
      ],
      solution: {
        steps: [
          t`$\ce{CH3}$ pushes electrons (+I) onto the carboxylate.`,
          t`Acetate is less stable, so acetic acid is weaker.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#37" },
      stem: t`Which is the strongest acid: butanoic acid, 2-chlorobutanoic acid or 4-chlorobutanoic acid?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chloro" } },
      options: [
        { key: "A", text: t`4-chlorobutanoic acid`, correct: false, misconceptionId: "C09-M6", value: "chloro_4" },
        { key: "B", text: t`2-chlorobutanoic acid`, correct: true, value: "chloro_2" },
        { key: "C", text: t`all three are equally strong`, correct: false, misconceptionId: "C09-M5", value: "all_equal" },
        { key: "D", text: t`butanoic acid`, correct: false, misconceptionId: "C09-M2", value: "butanoic" },
      ],
      solution: {
        steps: [
          t`Cl's -I effect is strongest when it is next to COOH.`,
          t`So 2-chlorobutanoic acid is the strongest.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Solved Ex.12.1" },
      stem: t`Arrange ethanol, phenol and ethanoic acid in increasing order of acid strength.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`phenol < ethanol < ethanoic acid`, correct: false, misconceptionId: "C09-M8", value: "phoh_etoh_acoh" },
        { key: "B", text: t`ethanol < ethanoic acid < phenol`, correct: false, misconceptionId: "C09-M7", value: "etoh_acoh_phoh" },
        { key: "C", text: t`ethanol < phenol < ethanoic acid`, correct: true, value: "etoh_phoh_acoh" },
        { key: "D", text: t`all three are equally acidic`, correct: false, misconceptionId: "C09-M5", value: "equal" },
      ],
      solution: {
        steps: [
          t`Carboxylate is most stable, phenoxide next, ethoxide least.`,
          t`So ethanol < phenol < ethanoic acid.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#38" },
      stem: t`Which is the weakest acid: 4-nitrophenol, 4-chlorophenol, 4-methylphenol or 4-aminophenol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "weakest" } },
      options: [
        { key: "A", text: t`4-methylphenol`, correct: false, misconceptionId: "C09-M9", value: "cresol" },
        { key: "B", text: t`4-chlorophenol`, correct: false, misconceptionId: "C09-M3", value: "chlorophenol" },
        { key: "C", text: t`4-nitrophenol`, correct: false, misconceptionId: "C09-M2", value: "nitrophenol" },
        { key: "D", text: t`4-aminophenol`, correct: true, value: "aminophenol" },
      ],
      solution: {
        steps: [
          t`$\ce{NH2}$ donates strongly by resonance, destabilising the phenoxide.`,
          t`So 4-aminophenol is the weakest acid.`,
        ],
      },
    },
  ],
};
