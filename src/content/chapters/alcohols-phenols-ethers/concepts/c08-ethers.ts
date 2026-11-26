import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Mixing sodium ethoxide with 2-chloropropane should give ethyl isopropyl ether, yet the flask fills with propene gas. What went wrong?`,
    reveal: t`Ethoxide is a strong base as well as a nucleophile. With a secondary halide it pulls off H and Cl (elimination) instead of substituting, so the halide must be the primary one.`,
  },
  explanation: {
    intuition: [
      t`Ethers are made by joining an alkoxide to an alkyl halide: the **Williamson synthesis**.`,
      t`The alkoxide attacks the halide by $\mathrm{S_N2}$, so the halide should be primary.`,
      t`Ethers are unreactive, which makes them good solvents.`,
      t`But hot, concentrated HI breaks the $\ce{C-O}$ bond.`,
    ],
    formal: [
      {
        title: "Williamson synthesis",
        points: [
          t`$\ce{RONa + R'X}$ $\ce{-> R-O-R' + NaX}$.`,
          t`Use a primary halide: secondary and tertiary halides mostly eliminate to alkenes.`,
          t`So ethyl isopropyl ether comes from sodium isopropoxide and chloroethane.`,
          t`Aryl ethers: sodium phenoxide with an alkyl halide gives, for example, anisole.`,
        ],
      },
      {
        title: "Cleavage by HI",
        points: [
          t`Hot HI protonates the ether oxygen; $\ce{I-}$ then attacks by $\mathrm{S_N2}$.`,
          t`$\ce{I-}$ attacks the smaller alkyl group: methoxyethane gives iodomethane and ethanol.`,
          t`With excess HI the alcohol also becomes an alkyl iodide.`,
          t`Anisole gives phenol and iodomethane: the strong aryl-O bond does not break.`,
        ],
      },
      {
        title: "Other reactions",
        points: [
          t`Ethers dissolve in cold, concentrated $\ce{H2SO4}$ as **oxonium salts**: the O takes $\ce{H+}$.`,
          t`In air and light ethers slowly form explosive **peroxides**.`,
          t`So they are kept in airtight brown bottles.`,
        ],
      },
    ],
    worked: {
      prompt: t`What does methoxybenzene give with hot, concentrated HI, and why?`,
      steps: [
        t`HI protonates the oxygen; $\ce{I-}$ must attack a carbon by $\mathrm{S_N2}$.`,
        t`It cannot attack the ring carbon, so it attacks the methyl carbon.`,
        t`Iodomethane leaves, and phenol remains.`,
      ],
      answer: t`Phenol and iodomethane`,
    },
    visualSpec: t`Choose which partner is the alkoxide and which the halide, and watch whether substitution or elimination wins.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Thinks the aryl-O bond (or every C-O bond of an ether) breaks easily.",
      remediation: "HI breaks the alkyl-O bond; the aryl-O bond is strengthened by resonance and stays.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Thinks an acid only hydrolyses the ether into alcohols.",
      remediation: "HI cleaves ethers by substitution: one group leaves as an alkyl iodide.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks the iodide attacks the larger alkyl group.",
      remediation: t`The $\mathrm{S_N2}$ attack by $\ce{I-}$ goes to the less crowded, smaller group.`,
      fallback: { kind: "ext", topic: "SN1 and SN2 (Halogen Derivatives)" },
    },
    {
      id: "C08-M4",
      mistake: "Uses a secondary or tertiary halide in Williamson synthesis.",
      remediation: "An alkoxide eliminates HX from secondary and tertiary halides; choose the primary halide as partner.",
      fallback: { kind: "ext", topic: "SN1 and SN2 (Halogen Derivatives)" },
    },
    {
      id: "C08-M5",
      mistake: "Expects one mixed ether from heating two different alcohols with acid.",
      remediation: "Two different alcohols give a mixture of three ethers, and secondary alcohols dehydrate; Williamson synthesis is cleaner.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Confuses Williamson synthesis with the Wurtz reaction.",
      remediation: "Sodium joins two halides into an alkane (Wurtz); an ether needs an alkoxide and a halide.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks ethers are bottled to keep out moisture.",
      remediation: "The danger is peroxide formation in air and light, which is why airtight brown bottles are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks ethers are completely inert.",
      remediation: t`Ethers are unreactive to most reagents, but they form peroxides in air and react with hot HI and conc. $\ce{H2SO4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Thinks acid or light dehydrates an ether to an alkene.",
      remediation: t`Cold conc. $\ce{H2SO4}$ just protonates the oxygen, giving an oxonium salt.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks an ether gives an alkoxide in acid.",
      remediation: t`Acid adds $\ce{H+}$ to the ether oxygen; alkoxides form from alcohols with sodium.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (vi)" },
      stem: t`Anisole, $\ce{C6H5-O-CH3}$, is heated with concentrated HI. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "anisole" } },
      options: [
        { key: "A", text: t`phenol and iodomethane`, correct: true, value: "phenol_ch3i" },
        { key: "B", text: t`iodobenzene and methanol`, correct: false, misconceptionId: "C08-M1", value: "iodobenzene_methanol" },
        { key: "C", text: t`phenol and methanol`, correct: false, misconceptionId: "C08-M2", value: "phenol_methanol" },
        { key: "D", text: t`iodobenzene and iodomethane`, correct: false, misconceptionId: "C08-M3", value: "iodobenzene_ch3i" },
      ],
      solution: {
        steps: [
          t`$\ce{I-}$ attacks the methyl carbon; the aryl-O bond is too strong to break.`,
          t`So anisole gives phenol and iodomethane.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#15" },
      stem: t`Methoxyethane, $\ce{CH3-O-CH2CH3}$, is heated with one equivalent of hot HI. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "methoxyethane" } },
      options: [
        { key: "A", text: t`iodoethane and methanol`, correct: false, misconceptionId: "C08-M3", value: "c2h5i_methanol" },
        { key: "B", text: t`methanol and ethanol`, correct: false, misconceptionId: "C08-M2", value: "methanol_ethanol" },
        { key: "C", text: t`no reaction: the ether's C-O bonds are too strong`, correct: false, misconceptionId: "C08-M1", value: "no_reaction" },
        { key: "D", text: t`iodomethane and ethanol`, correct: true, value: "ch3i_ethanol" },
      ],
      solution: {
        steps: [
          t`$\ce{I-}$ attacks the smaller methyl group by $\mathrm{S_N2}$.`,
          t`$\ce{CH3I}$ forms, and ethanol remains.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.9" },
      stem: t`Which is the best way to make ethyl isopropyl ether, $\ce{C2H5-O-CH(CH3)2}$, by Williamson synthesis?`,
      verify: { kind: "value", inputs: {  }, params: { q: "williamson" } },
      options: [
        { key: "A", text: t`Sodium ethoxide with 2-chloropropane`, correct: false, misconceptionId: "C08-M4", value: "ethoxide_isopropyl_chloride" },
        { key: "B", text: t`Ethanol and propan-2-ol heated with conc. $\ce{H2SO4}$`, correct: false, misconceptionId: "C08-M5", value: "two_alcohols_acid" },
        { key: "C", text: t`Chloroethane and 2-chloropropane heated with sodium`, correct: false, misconceptionId: "C08-M6", value: "two_chlorides_sodium" },
        { key: "D", text: t`Sodium isopropoxide with chloroethane`, correct: true, value: "isopropoxide_ethyl_chloride" },
      ],
      solution: {
        steps: [
          t`The halide must be primary, or elimination wins.`,
          t`So use sodium isopropoxide with chloroethane.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (ix)" },
      stem: t`Why are ethers stored in airtight brown bottles?`,
      verify: { kind: "value", inputs: {  }, params: { q: "bottles" } },
      options: [
        { key: "A", text: t`No special reason: ethers are inert`, correct: false, misconceptionId: "C08-M8", value: "inert" },
        { key: "B", text: t`Light turns them into alkenes`, correct: false, misconceptionId: "C08-M9", value: "alkene_light" },
        { key: "C", text: t`Air and light slowly turn them into explosive peroxides`, correct: true, value: "peroxides" },
        { key: "D", text: t`They absorb moisture from the air`, correct: false, misconceptionId: "C08-M7", value: "moisture" },
      ],
      solution: {
        steps: [
          t`Air and light slowly oxidise ethers to peroxides.`,
          t`Peroxides can explode on heating, so ethers are kept airtight and dark.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (x)" },
      stem: t`Diethyl ether dissolves in cold, concentrated $\ce{H2SO4}$. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "h2so4" } },
      options: [
        { key: "A", text: t`two molecules of ethanol`, correct: false, misconceptionId: "C08-M2", value: "alcohols" },
        { key: "B", text: t`an oxonium salt: the ether oxygen takes $\ce{H+}$`, correct: true, value: "oxonium_salt" },
        { key: "C", text: t`ethene, by dehydration`, correct: false, misconceptionId: "C08-M9", value: "alkene" },
        { key: "D", text: t`sodium ethoxide`, correct: false, misconceptionId: "C08-M10", value: "alkoxide" },
      ],
      solution: {
        steps: [
          t`The ether oxygen has lone pairs and takes $\ce{H+}$ from the acid.`,
          t`$\ce{(C2H5)2OH+}$ forms: an oxonium salt.`,
        ],
      },
    },
  ],
};
