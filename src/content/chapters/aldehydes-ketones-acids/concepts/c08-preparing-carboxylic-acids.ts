import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Toluene, ethylbenzene and propylbenzene all give the same acid when heated with alkaline permanganate. How can three different side chains end up identical?`,
    reveal: t`Permanganate attacks the side-chain carbon attached to the ring and cuts the rest off; whatever the chain, it leaves one carbon as $\ce{-COOH}$: benzoic acid.`,
  },
  explanation: {
    intuition: [
      t`Carboxylic acids are the most oxidised carbonyl compounds.`,
      t`So they come from oxidising alcohols, aldehydes, alkylbenzenes or alkenes.`,
      t`Or from hydrolysing nitriles, or from Grignard reagents and $\ce{CO2}$.`,
      t`Nitriles and Grignard reagents add a carbon; side-chain oxidation removes carbons.`,
    ],
    formal: [
      {
        title: "By oxidation",
        points: [
          t`Primary alcohols and aldehydes with acidified $\ce{KMnO4}$ or $\ce{K2Cr2O7}$ give acids.`,
          t`Hot alkaline $\ce{KMnO4}$ turns any alkyl side chain on benzene into $\ce{-COOH}$.`,
          t`Hot acidified $\ce{KMnO4}$ cleaves $\ce{C=C}$: cyclohexene gives adipic acid, $\ce{HOOC(CH2)4COOH}$.`,
        ],
      },
      {
        title: "From nitriles and Grignard reagents",
        points: [
          t`Nitriles hydrolyse in acid or alkali, through amides, to acids: $\ce{RCN -> RCONH2 -> RCOOH}$.`,
          t`Grignard reagents add to $\ce{CO2}$ (dry ice); acid then gives $\ce{RCOOH}$.`,
          t`$\ce{CH3MgBr}$ gives ethanoic acid: one carbon more than R.`,
        ],
      },
    ],
    worked: {
      prompt: t`How is benzoic acid made from bromobenzene?`,
      steps: [
        t`Bromobenzene with Mg in dry ether gives $\ce{C6H5MgBr}$.`,
        t`It adds to dry ice; acid gives $\ce{C6H5COOH}$.`,
      ],
      answer: t`Via phenylmagnesium bromide and $\ce{CO2}$`,
    },
    visualSpec: t`Pick a starting compound and see which carbon ends up as the COOH carbon and which carbons are cut away.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Thinks the Grignard route adds no carbon.",
      remediation: t`$\ce{CO2}$ supplies the COOH carbon, so the acid has one carbon more than R.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Adds two carbons in the Grignard route.",
      remediation: t`Only one $\ce{CO2}$ adds, bringing one carbon.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Thinks a Grignard reagent and $\ce{CO2}$ give an alcohol.`,
      remediation: t`With $\ce{CO2}$ the product is a carboxylate; alcohols come from aldehydes and ketones.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Stops nitrile hydrolysis at the amide.",
      remediation: "Complete hydrolysis turns the amide into the acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Thinks hydrolysis of a nitrile gives the aldehyde.",
      remediation: "Aldehydes need the Stephen reduction; water and acid give the acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Reduces the nitrile to an amine.",
      remediation: "Acid and water hydrolyse nitriles; only reducing agents give amines.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Oxidises only the end carbon of the side chain.",
      remediation: "The attack starts at the carbon attached to the ring; the rest of the chain is cut off.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Thinks hot $\ce{KMnO4}$ leaves the compound unchanged.`,
      remediation: t`Hot $\ce{KMnO4}$ oxidises alkyl side chains and cleaves $\ce{C=C}$ bonds.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Cuts the molecule at the wrong bond.",
      remediation: t`The ring stays; the side-chain carbon next to it becomes COOH, or each $\ce{C=C}$ carbon becomes COOH.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Stops the oxidation of an alkene at the diol.",
      remediation: t`Cold dilute $\ce{KMnO4}$ gives the diol; hot acidified $\ce{KMnO4}$ cleaves the ring to the diacid.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Opens only one side of a fused ring.",
      remediation: "Both carbons attached to the benzene ring are oxidised, giving two COOH groups.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#22" },
      stem: t`Methylmagnesium bromide reacts with dry ice ($\ce{CO2}$) in dry ether, and the product is acidified. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dryice" } },
      options: [
        { key: "A", text: t`methanoic acid, $\ce{HCOOH}$`, correct: false, misconceptionId: "C08-M1", value: "methanoic_acid" },
        { key: "B", text: t`ethanoic acid, $\ce{CH3COOH}$`, correct: true, value: "ethanoic_acid" },
        { key: "C", text: t`propanoic acid, $\ce{CH3CH2COOH}$`, correct: false, misconceptionId: "C08-M2", value: "propanoic_acid" },
        { key: "D", text: t`ethanol, $\ce{CH3CH2OH}$`, correct: false, misconceptionId: "C08-M3", value: "ethanol" },
      ],
      solution: {
        steps: [
          t`$\ce{CH3MgBr}$ adds to $\ce{CO2}$.`,
          t`Acid gives $\ce{CH3COOH}$: one carbon more.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.2 (vi)" },
      stem: t`Benzonitrile, $\ce{C6H5CN}$, is boiled with dilute acid until hydrolysis is complete. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitrile" } },
      options: [
        { key: "A", text: t`benzamide, $\ce{C6H5CONH2}$`, correct: false, misconceptionId: "C08-M4", value: "benzamide" },
        { key: "B", text: t`benzaldehyde, $\ce{C6H5CHO}$`, correct: false, misconceptionId: "C08-M5", value: "benzaldehyde" },
        { key: "C", text: t`benzoic acid, $\ce{C6H5COOH}$`, correct: true, value: "benzoic_acid" },
        { key: "D", text: t`benzylamine, $\ce{C6H5CH2NH2}$`, correct: false, misconceptionId: "C08-M6", value: "benzylamine" },
      ],
      solution: {
        steps: [
          t`$\ce{C6H5CN}$ hydrolyses to $\ce{C6H5CONH2}$, then on to the acid.`,
          t`So benzoic acid forms.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.4 (ii)" },
      stem: t`Propylbenzene is heated with alkaline $\ce{KMnO4}$, and the mixture is then acidified. The organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "propylbenzene" } },
      options: [
        { key: "A", text: t`3-phenylpropanoic acid, $\ce{C6H5CH2CH2COOH}$`, correct: false, misconceptionId: "C08-M7", value: "phenylpropanoic_acid" },
        { key: "B", text: t`unchanged propylbenzene`, correct: false, misconceptionId: "C08-M8", value: "unchanged" },
        { key: "C", text: t`benzene and propanoic acid`, correct: false, misconceptionId: "C08-M9", value: "benzene_propanoic" },
        { key: "D", text: t`benzoic acid, $\ce{C6H5COOH}$`, correct: true, value: "benzoic_acid" },
      ],
      solution: {
        steps: [
          t`The side-chain carbon on the ring becomes COOH.`,
          t`The rest is cut off: benzoic acid.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.2 (vii)" },
      stem: t`1,2,3,4-Tetrahydronaphthalene (a benzene ring fused to a $\ce{-(CH2)4-}$ ring) is oxidised with hot acidified $\ce{KMnO4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tetralin" } },
      options: [
        { key: "A", text: t`phthalic acid, benzene-1,2-dicarboxylic acid`, correct: true, value: "phthalic_acid" },
        { key: "B", text: t`benzoic acid`, correct: false, misconceptionId: "C08-M9", value: "benzoic_acid" },
        { key: "C", text: t`unchanged tetrahydronaphthalene`, correct: false, misconceptionId: "C08-M8", value: "unchanged" },
        { key: "D", text: t`4-phenylbutanoic acid`, correct: false, misconceptionId: "C08-M11", value: "phenylbutanoic_acid" },
      ],
      solution: {
        steps: [
          t`Both $\ce{CH2}$ carbons attached to the ring are oxidised.`,
          t`Two COOH groups: phthalic acid.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#25" },
      stem: t`Cyclohexene is heated with hot acidified $\ce{KMnO4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cyclohexene" } },
      options: [
        { key: "A", text: t`cyclohexanone`, correct: false, misconceptionId: "C08-M9", value: "cyclohexanone" },
        { key: "B", text: t`adipic acid (hexanedioic acid)`, correct: true, value: "adipic_acid" },
        { key: "C", text: t`cyclohexane-1,2-diol`, correct: false, misconceptionId: "C08-M10", value: "cyclohexane_diol" },
        { key: "D", text: t`unchanged cyclohexene`, correct: false, misconceptionId: "C08-M8", value: "unchanged" },
      ],
      solution: {
        steps: [
          t`Hot $\ce{KMnO4}$ cleaves the $\ce{C=C}$ of the ring.`,
          t`Each carbon becomes COOH: adipic acid.`,
        ],
      },
    },
  ],
};
