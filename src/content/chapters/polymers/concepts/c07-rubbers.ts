import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Raw natural rubber turns sticky in summer and brittle in winter. Tyres made from it last for years. What turned the raw latex into tyre rubber?`,
    reveal: t`Vulcanisation: heating with sulfur ties the chains together with sulfur bridges, so they no longer flow or crack.`,
  },
  explanation: {
    intuition: [
      t`Natural rubber is a polymer of **isoprene**, with every double bond cis.`,
      t`Its coiled chains stretch and spring back: an elastomer.`,
      t`Sulfur cross-links make it tougher and less temperature-sensitive.`,
      t`Synthetic rubbers use similar diene monomers.`,
    ],
    formal: [
      {
        title: "Natural rubber",
        points: [
          t`cis-1,4-Polyisoprene; isoprene is 2-methylbuta-1,3-diene, $\ce{CH2=C(CH3)-CH=CH2}$.`,
          t`**Vulcanisation**: heating with sulfur at 373–415 K forms S cross-links.`,
        ],
      },
      {
        title: "Synthetic rubbers",
        points: [
          t`**Neoprene**: chloroprene, $\ce{CH2=C(Cl)-CH=CH2}$; resists oil and heat.`,
          t`**Buna-S** (SBR): buta-1,3-diene + styrene; tyres.`,
          t`**Buna-N**: buta-1,3-diene + acrylonitrile; resists oil, for hoses and seals.`,
        ],
      },
    ],
    worked: {
      prompt: t`How does neoprene's monomer differ from isoprene?`,
      steps: [
        t`Isoprene has $\ce{CH3}$ on C-2.`,
        t`Chloroprene has Cl on C-2.`,
      ],
      answer: t`Cl replaces $\ce{CH3}$`,
    },
    visualSpec: t`Stretch a bundle of coiled chains, then add sulfur bridges and stretch again.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Confuses rubber's monomer with acrylonitrile.",
      remediation: "Acrylonitrile makes PAN; natural rubber is polyisoprene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Confuses rubber's monomer with caprolactam.",
      remediation: "Caprolactam makes nylon 6; natural rubber is polyisoprene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Confuses rubber's monomer with tetrafluoroethene.",
      remediation: "Tetrafluoroethene makes Teflon; natural rubber is polyisoprene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks vulcanisation uses oxygen.",
      remediation: "Oxygen makes rubber perish; sulfur cross-links it.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks vulcanisation uses chlorine.",
      remediation: "Chlorine appears in neoprene's monomer; vulcanising uses sulfur.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks vulcanisation uses hydrogen.",
      remediation: "Hydrogen would saturate the chain; sulfur forms cross-links.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Confuses Buna-S with Buna-N.",
      remediation: "S stands for styrene; Buna-N uses acrylonitrile.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Confuses Buna-S with neoprene.",
      remediation: "Neoprene comes from chloroprene; Buna-S from butadiene and styrene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Swaps butadiene for isoprene.",
      remediation: "Bu-na stands for butadiene and sodium; Buna-S uses buta-1,3-diene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Confuses chloroprene with isoprene.",
      remediation: t`Neo-prene has Cl where isoprene has $\ce{CH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks every chlorine polymer comes from vinyl chloride.",
      remediation: "Vinyl chloride makes PVC; neoprene comes from chloroprene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Confuses neoprene with SBR.",
      remediation: "Styrene goes into Buna-S; neoprene comes from chloroprene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Gives the trans form.",
      remediation: "trans-Polyisoprene is gutta-percha, which is hard; natural rubber is cis.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Leaves out the methyl group.",
      remediation: t`Natural rubber's monomer is isoprene, with $\ce{CH3}$ on C-2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Confuses natural rubber with neoprene.",
      remediation: "Polychloroprene is neoprene, a synthetic rubber.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#20" },
      stem: t`The monomer of natural rubber is`,
      verify: { kind: "value", inputs: {  }, params: { q: "monomer" } },
      options: [
        { key: "A", text: t`$\varepsilon$-caprolactam`, correct: false, misconceptionId: "C07-M2", value: "caprolactam" },
        { key: "B", text: t`tetrafluoroethene`, correct: false, misconceptionId: "C07-M3", value: "tetrafluoroethene" },
        { key: "C", text: t`acrylonitrile`, correct: false, misconceptionId: "C07-M1", value: "acrylonitrile" },
        { key: "D", text: t`isoprene`, correct: true, value: "isoprene" },
      ],
      solution: {
        steps: [
          t`Natural rubber is polyisoprene.`,
          t`Its monomer is isoprene.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.4 (iii)" },
      stem: t`Vulcanisation of rubber means heating it with`,
      verify: { kind: "value", inputs: {  }, params: { q: "vulcanise" } },
      options: [
        { key: "A", text: t`sulfur, which forms cross-links between chains`, correct: true, value: "sulfur" },
        { key: "B", text: t`chlorine`, correct: false, misconceptionId: "C07-M5", value: "chlorine" },
        { key: "C", text: t`hydrogen`, correct: false, misconceptionId: "C07-M6", value: "hydrogen" },
        { key: "D", text: t`oxygen`, correct: false, misconceptionId: "C07-M4", value: "oxygen" },
      ],
      solution: {
        steps: [
          t`Sulfur forms bridges between chains.`,
          t`The rubber becomes tougher and more elastic.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#16" },
      stem: t`The monomers of Buna-S are`,
      verify: { kind: "value", inputs: {  }, params: { q: "buna_s" } },
      options: [
        { key: "A", text: t`isoprene and styrene`, correct: false, misconceptionId: "C07-M9", value: "isoprene_styrene" },
        { key: "B", text: t`buta-1,3-diene and styrene`, correct: true, value: "butadiene_styrene" },
        { key: "C", text: t`buta-1,3-diene and acrylonitrile`, correct: false, misconceptionId: "C07-M7", value: "butadiene_acrylonitrile" },
        { key: "D", text: t`chloroprene`, correct: false, misconceptionId: "C07-M8", value: "chloroprene" },
      ],
      solution: {
        steps: [
          t`Bu-na: butadiene and sodium; S: styrene.`,
          t`Buta-1,3-diene and styrene.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#8" },
      stem: t`Neoprene is made from`,
      verify: { kind: "value", inputs: {  }, params: { q: "neoprene" } },
      options: [
        { key: "A", text: t`vinyl chloride`, correct: false, misconceptionId: "C07-M11", value: "vinyl_chloride" },
        { key: "B", text: t`isoprene`, correct: false, misconceptionId: "C07-M10", value: "isoprene" },
        { key: "C", text: t`chloroprene (2-chlorobuta-1,3-diene)`, correct: true, value: "chloroprene" },
        { key: "D", text: t`styrene`, correct: false, misconceptionId: "C07-M12", value: "styrene" },
      ],
      solution: {
        steps: [
          t`Neoprene is polychloroprene.`,
          t`Its monomer is 2-chlorobuta-1,3-diene.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.3 (viii)" },
      stem: t`Natural rubber is`,
      verify: { kind: "value", inputs: {  }, params: { q: "natural" } },
      options: [
        { key: "A", text: t`trans-1,4-polyisoprene`, correct: false, misconceptionId: "C07-M13", value: "trans_polyisoprene" },
        { key: "B", text: t`polybuta-1,3-diene`, correct: false, misconceptionId: "C07-M14", value: "polybutadiene" },
        { key: "C", text: t`polychloroprene`, correct: false, misconceptionId: "C07-M15", value: "polychloroprene" },
        { key: "D", text: t`cis-1,4-polyisoprene`, correct: true, value: "cis_polyisoprene" },
      ],
      solution: {
        steps: [
          t`Natural rubber is polyisoprene.`,
          t`Its double bonds are all cis.`,
        ],
      },
    },
  ],
};
