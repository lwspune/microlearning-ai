import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Most of the world's phenol comes from a process that also makes acetone, from a hydrocarbon found in petrol. Which hydrocarbon, and why does it give two products?`,
    reveal: t`Cumene, isopropylbenzene. Air turns it into a hydroperoxide, and acid splits that into phenol and acetone, so the plant sells both.`,
  },
  explanation: {
    intuition: [
      t`Phenol cannot be made the way alcohols are: water does not add to a benzene ring.`,
      t`Instead a group already on the ring is replaced by OH.`,
      t`Groups used: Cl, the sulfonic acid group, and the diazonium group.`,
      t`Many routes first give sodium phenoxide, so acid is added at the end to free the phenol.`,
    ],
    formal: [
      {
        title: "From chlorobenzene and sulfonates",
        points: [
          t`**Dow process**: chlorobenzene with $\ce{NaOH}$ at $623\ \mathrm{K}$ and $300\ \mathrm{atm}$ gives sodium phenoxide.`,
          t`The aryl $\ce{C-Cl}$ bond is strong, so these harsh conditions are needed.`,
          t`Sodium benzenesulfonate fused with $\ce{NaOH}$ also gives sodium phenoxide.`,
          t`Dilute acid then frees phenol: $\ce{C6H5ONa + HCl}$ $\ce{-> C6H5OH + NaCl}$.`,
        ],
      },
      {
        title: "From diazonium salts",
        points: [
          t`Aniline with $\ce{NaNO2}$ and $\ce{HCl}$ at $273$–$278\ \mathrm{K}$ gives benzenediazonium chloride.`,
          t`Warming its solution: $\ce{C6H5N2Cl + H2O}$ $\ce{-> C6H5OH + N2 + HCl}$.`,
        ],
      },
      {
        title: "From cumene",
        points: [
          t`Cumene, $\ce{C6H5CH(CH3)2}$, is oxidised by air to cumene hydroperoxide.`,
          t`Dilute acid splits it into phenol and acetone, $\ce{CH3COCH3}$.`,
          t`Cheap raw materials and a useful by-product make this the main industrial route.`,
        ],
      },
    ],
    worked: {
      prompt: t`How is phenol made from benzene through benzenesulfonic acid?`,
      steps: [
        t`Benzene with conc. $\ce{H2SO4}$ gives benzenesulfonic acid; $\ce{NaOH}$ makes its sodium salt.`,
        t`Fusing the salt with $\ce{NaOH}$ gives sodium phenoxide.`,
        t`Dilute acid frees phenol.`,
      ],
      answer: t`Benzene → benzenesulfonic acid → sodium salt → (fuse, $\ce{NaOH}$) sodium phenoxide → (acid) phenol`,
    },
    visualSpec: t`Pick a starting compound on the ring and follow it, step by step, until the OH appears and the acid frees phenol.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Treats an aryl compound like an alkyl one: expects mild conditions to replace its group by OH.",
      remediation: t`Groups on a benzene ring are bonded strongly; chlorobenzene needs $623\ \mathrm{K}$ and $300\ \mathrm{atm}$, sulfonates need fusion with $\ce{NaOH}$.`,
      fallback: { kind: "ext", topic: "reactivity of haloarenes (Halogen Derivatives)" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks air oxidises cumene's side chain to benzoic acid.",
      remediation: "Air turns cumene into a hydroperoxide; acid then splits it into phenol and acetone.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks the cumene process gives propan-2-ol alongside phenol.",
      remediation: t`The side chain leaves as a ketone: acetone, $\ce{CH3COCH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Thinks fusing with $\ce{NaOH}$ strips the group off, leaving benzene.`,
      remediation: t`Fusion replaces the group by $\ce{-ONa}$, giving sodium phenoxide.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Stops at sodium phenoxide, forgetting the acid.",
      remediation: t`Phenol is a weak acid, so $\ce{NaOH}$ leaves it as sodium phenoxide; acid must be added to free phenol.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks warming a diazonium salt in water gives aniline back.",
      remediation: t`Water replaces the $\ce{N2+}$ group by OH, giving phenol and nitrogen gas.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the oxidation of cumene stops at an aldehyde.",
      remediation: "The hydroperoxide splits into phenol and a ketone, acetone; no aldehyde forms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Thinks warming a diazonium chloride in water swaps $\ce{N2+}$ for chlorine.`,
      remediation: t`Chlorine replaces $\ce{N2+}$ only with $\ce{CuCl}$ (Sandmeyer); water alone gives phenol.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#25" },
      stem: t`Isopropylbenzene (cumene) is oxidised by air, and the product is decomposed with dilute acid. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cumene" } },
      options: [
        { key: "A", text: t`Phenol, $\ce{C6H5OH}$, with propan-2-ol`, correct: false, misconceptionId: "C03-M3", value: "phenol_propanol" },
        { key: "B", text: t`Benzaldehyde, $\ce{C6H5CHO}$`, correct: false, misconceptionId: "C03-M7", value: "benzaldehyde" },
        { key: "C", text: t`Phenol, $\ce{C6H5OH}$, with acetone`, correct: true, value: "phenol_acetone" },
        { key: "D", text: t`Benzoic acid, $\ce{C6H5COOH}$`, correct: false, misconceptionId: "C03-M2", value: "benzoic_acid" },
      ],
      solution: {
        steps: [
          t`Air oxidises cumene to cumene hydroperoxide.`,
          t`Dilute acid splits it: $\ce{C6H5OH}$ and $\ce{CH3COCH3}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#11" },
      stem: t`How is phenol made from chlorobenzene (the Dow process)?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dow" } },
      options: [
        { key: "A", text: t`$\ce{NaOH}$ at $623\ \mathrm{K}$ and $300\ \mathrm{atm}$ alone; no acid is needed`, correct: false, misconceptionId: "C03-M5", value: "naoh_623_no_acid" },
        { key: "B", text: t`Fusing with solid $\ce{NaOH}$, which removes the chlorine and gives benzene first`, correct: false, misconceptionId: "C03-M4", value: "fuse_benzene" },
        { key: "C", text: t`$\ce{NaOH}$ at $623\ \mathrm{K}$ and $300\ \mathrm{atm}$, then dilute $\ce{HCl}$`, correct: true, value: "naoh_623_300_acid" },
        { key: "D", text: t`Warm aqueous $\ce{NaOH}$, as for an alkyl halide`, correct: false, misconceptionId: "C03-M1", value: "warm_naoh" },
      ],
      solution: {
        steps: [
          t`The aryl $\ce{C-Cl}$ bond needs $\ce{NaOH}$ at $623\ \mathrm{K}$ and $300\ \mathrm{atm}$.`,
          t`That gives sodium phenoxide; dilute $\ce{HCl}$ frees phenol.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.3 (iv)" },
      stem: t`Sodium benzenesulfonate is fused with $\ce{NaOH}$, and the melt is then acidified. The organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sulfonate" } },
      options: [
        { key: "A", text: t`benzene, $\ce{C6H6}$`, correct: false, misconceptionId: "C03-M4", value: "benzene" },
        { key: "B", text: t`sodium phenoxide, $\ce{C6H5ONa}$`, correct: false, misconceptionId: "C03-M5", value: "sodium_phenoxide" },
        { key: "C", text: t`none: the sulfonate does not react`, correct: false, misconceptionId: "C03-M1", value: "no_reaction" },
        { key: "D", text: t`phenol, $\ce{C6H5OH}$`, correct: true, value: "phenol" },
      ],
      solution: {
        steps: [
          t`Fusion with $\ce{NaOH}$ replaces $\ce{-SO3Na}$ by $\ce{-ONa}$.`,
          t`Acidifying sodium phenoxide gives phenol.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.3 (iv)" },
      stem: t`An aqueous solution of benzenediazonium chloride is warmed. The organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "diazo" } },
      options: [
        { key: "A", text: t`chlorobenzene, $\ce{C6H5Cl}$`, correct: false, misconceptionId: "C03-M8", value: "chlorobenzene" },
        { key: "B", text: t`sodium phenoxide, $\ce{C6H5ONa}$`, correct: false, misconceptionId: "C03-M5", value: "sodium_phenoxide" },
        { key: "C", text: t`phenol, with $\ce{N2}$ given off`, correct: true, value: "phenol_n2" },
        { key: "D", text: t`aniline, $\ce{C6H5NH2}$`, correct: false, misconceptionId: "C03-M6", value: "aniline" },
      ],
      solution: {
        steps: [
          t`On warming, water replaces the $\ce{N2+}$ group.`,
          t`$\ce{C6H5N2Cl + H2O}$ $\ce{-> C6H5OH + N2 + HCl}$: phenol.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.3 (v)" },
      stem: t`In the cumene process, what is formed alongside phenol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "byproduct" } },
      options: [
        { key: "A", text: t`acetone, $\ce{CH3COCH3}$`, correct: true, value: "acetone" },
        { key: "B", text: t`propan-2-ol, $\ce{CH3CH(OH)CH3}$`, correct: false, misconceptionId: "C03-M3", value: "propan_2_ol" },
        { key: "C", text: t`carbon dioxide and water`, correct: false, misconceptionId: "C03-M2", value: "co2_water" },
        { key: "D", text: t`propanal, $\ce{CH3CH2CHO}$`, correct: false, misconceptionId: "C03-M7", value: "propanal" },
      ],
      solution: {
        steps: [
          t`Cumene hydroperoxide splits in dilute acid.`,
          t`The ring part becomes phenol; the side chain becomes acetone.`,
        ],
      },
    },
  ],
};
