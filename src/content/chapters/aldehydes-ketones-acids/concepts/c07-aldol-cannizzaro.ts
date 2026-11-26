import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Ethanal in dilute alkali joins with itself to build a four-carbon molecule. Methanal in alkali never does; instead half of it becomes methanol and half formate. Why do the two aldehydes behave so differently?`,
    reveal: t`Ethanal has hydrogens on the carbon next to C=O (the $\alpha$-carbon), which alkali can remove to make a nucleophile. Methanal has no $\alpha$-carbon, so it can only transfer a hydride from one molecule to another.`,
  },
  explanation: {
    intuition: [
      t`The carbon next to the carbonyl group is the $\alpha$-carbon; its hydrogens are slightly acidic.`,
      t`Alkali removes one, making a carbanion that attacks another molecule's carbonyl carbon.`,
      t`That joins two molecules: an **aldol** (aldehyde + alcohol).`,
      t`Aldehydes with no $\alpha$-H, such as HCHO and $\ce{C6H5CHO}$, instead undergo the **Cannizzaro** reaction.`,
    ],
    formal: [
      {
        title: "Aldol condensation",
        points: [
          t`Needs an $\alpha$-hydrogen and dilute alkali.`,
          t`$\ce{2CH3CHO}$ gives $\ce{CH3CH(OH)CH2CHO}$, 3-hydroxybutanal (the aldol).`,
          t`On heating the aldol loses water: but-2-enal, $\ce{CH3CH=CHCHO}$.`,
          t`Addition, then elimination of water: an addition-elimination reaction.`,
          t`The new C-C bond joins one molecule's $\alpha$-carbon to the other's carbonyl carbon.`,
        ],
      },
      {
        title: "Cannizzaro reaction",
        points: [
          t`Aldehydes with no $\alpha$-hydrogen, in concentrated alkali.`,
          t`One molecule is oxidised to the acid salt, another reduced to the alcohol.`,
          t`$\ce{2C6H5CHO + NaOH}$ $\ce{-> C6H5CH2OH + C6H5COONa}$.`,
          t`This self oxidation-reduction is a disproportionation.`,
        ],
      },
    ],
    worked: {
      prompt: t`What does methanal give with concentrated NaOH?`,
      steps: [
        t`Methanal has no $\alpha$-hydrogen, so no aldol forms.`,
        t`Cannizzaro: one molecule becomes methanol, another sodium methanoate.`,
      ],
      answer: t`Methanol and sodium methanoate`,
    },
    visualSpec: t`Highlight the alpha-hydrogens of an aldehyde, then choose aldol or Cannizzaro depending on whether any exist.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Calls aldol condensation a nucleophilic substitution.",
      remediation: t`Nothing is replaced: the carbanion adds to $\ce{C=O}$, and water is later eliminated.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Calls aldol condensation a plain elimination.",
      remediation: "It begins with an addition joining two molecules; elimination of water follows.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Dehydrates the aldol even in the cold.",
      remediation: "Cold, dilute alkali stops at the aldol; heating is needed to lose water.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks every aldehyde undergoes the Cannizzaro reaction.",
      remediation: t`Only aldehydes with no $\alpha$-hydrogen do; others give aldols with alkali.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Joins the two molecules at the wrong carbons.",
      remediation: t`The $\alpha$-carbon of one molecule bonds to the carbonyl carbon of the other.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Gives only the acid from the Cannizzaro reaction.",
      remediation: "Cannizzaro is a disproportionation: one molecule is oxidised, another reduced, giving the acid salt and the alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Thinks an aldehyde without an $\alpha$-hydrogen does not react with alkali.`,
      remediation: "Concentrated alkali makes it undergo the Cannizzaro reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Thinks aldehydes without an $\alpha$-hydrogen form aldols.`,
      remediation: t`Aldol formation needs an $\alpha$-hydrogen; HCHO and $\ce{C6H5CHO}$ have none.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks ketones undergo the Cannizzaro reaction.",
      remediation: "Cannizzaro needs an aldehyde H to transfer; ketones do not react this way.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Calls aldol condensation an electrophilic substitution.",
      remediation: "The attacking species is a carbanion, a nucleophile, and it adds; nothing is substituted.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.1 (iii)" },
      stem: t`Aldol condensation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "type" } },
      options: [
        { key: "A", text: t`an elimination reaction`, correct: false, misconceptionId: "C07-M2", value: "elimination" },
        { key: "B", text: t`an electrophilic substitution reaction`, correct: false, misconceptionId: "C07-M10", value: "electrophilic_substitution" },
        { key: "C", text: t`a nucleophilic substitution reaction`, correct: false, misconceptionId: "C07-M1", value: "nucleophilic_substitution" },
        { key: "D", text: t`an addition-elimination reaction`, correct: true, value: "addition_elimination" },
      ],
      solution: {
        steps: [
          t`A carbanion adds to the $\ce{C=O}$ of a second molecule.`,
          t`Water is then eliminated: addition-elimination.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#19" },
      stem: t`Ethanal is shaken with cold, dilute NaOH. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ethanal" } },
      options: [
        { key: "A", text: t`3-hydroxybutanal, $\ce{CH3CH(OH)CH2CHO}$`, correct: true, value: "hydroxybutanal_3" },
        { key: "B", text: t`ethanol and sodium acetate`, correct: false, misconceptionId: "C07-M4", value: "ethanol_acetate" },
        { key: "C", text: t`2-hydroxybutanal`, correct: false, misconceptionId: "C07-M5", value: "hydroxybutanal_2" },
        { key: "D", text: t`but-2-enal, $\ce{CH3CH=CHCHO}$`, correct: false, misconceptionId: "C07-M3", value: "but_2_enal" },
      ],
      solution: {
        steps: [
          t`The $\alpha$-carbon of one ethanal adds to the carbonyl carbon of another.`,
          t`Cold, dilute alkali stops at 3-hydroxybutanal.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#20" },
      stem: t`Benzaldehyde is heated with concentrated NaOH. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "benz" } },
      options: [
        { key: "A", text: t`none: with no $\alpha$-hydrogen it does not react`, correct: false, misconceptionId: "C07-M7", value: "no_reaction" },
        { key: "B", text: t`benzyl alcohol and sodium benzoate`, correct: true, value: "alcohol_benzoate" },
        { key: "C", text: t`an aldol, $\ce{C6H5CH(OH)CH(C6H5)CHO}$`, correct: false, misconceptionId: "C07-M8", value: "aldol" },
        { key: "D", text: t`sodium benzoate only`, correct: false, misconceptionId: "C07-M6", value: "benzoic_only" },
      ],
      solution: {
        steps: [
          t`Benzaldehyde has no $\alpha$-hydrogen: Cannizzaro reaction.`,
          t`One molecule gives benzyl alcohol, another sodium benzoate.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#12" },
      stem: t`Which of these undergoes the Cannizzaro reaction with concentrated alkali?`,
      verify: { kind: "value", inputs: {  }, params: { q: "which" } },
      options: [
        { key: "A", text: t`propanone, $\ce{CH3COCH3}$`, correct: false, misconceptionId: "C07-M9", value: "propanone" },
        { key: "B", text: t`ethanal, $\ce{CH3CHO}$`, correct: false, misconceptionId: "C07-M4", value: "ethanal" },
        { key: "C", text: t`methanal, $\ce{HCHO}$`, correct: true, value: "methanal" },
        { key: "D", text: t`none of them: aldehydes give aldols instead`, correct: false, misconceptionId: "C07-M8", value: "none" },
      ],
      solution: {
        steps: [
          t`Cannizzaro needs an aldehyde with no $\alpha$-hydrogen.`,
          t`Methanal fits; ethanal has $\alpha$-H; propanone is a ketone.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`Propanal, $\ce{CH3CH2CHO}$, is treated with cold, dilute NaOH. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "propanal" } },
      options: [
        { key: "A", text: t`3-hydroxyhexanal`, correct: false, misconceptionId: "C07-M5", value: "hydroxyhexanal" },
        { key: "B", text: t`2-methylpent-2-enal`, correct: false, misconceptionId: "C07-M3", value: "methylpent_2_enal" },
        { key: "C", text: t`propan-1-ol and sodium propanoate`, correct: false, misconceptionId: "C07-M4", value: "propanol_propanoate" },
        { key: "D", text: t`3-hydroxy-2-methylpentanal`, correct: true, value: "hydroxy_methylpentanal" },
      ],
      solution: {
        steps: [
          t`C2 of one propanal bonds to C1 of another.`,
          t`The aldol is $\ce{CH3CH2CH(OH)CH(CH3)CHO}$, 3-hydroxy-2-methylpentanal.`,
        ],
      },
    },
  ],
};
