import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Phenol was once sold as 'carbolic acid', yet ethanol, which also has an O-H group, is never called an acid. What makes phenol's O-H give up its hydrogen so much more readily?`,
    reveal: t`When phenol loses $\ce{H+}$, the negative charge on the phenoxide ion spreads into the benzene ring by resonance. The more stable this ion, the stronger the acid.`,
  },
  explanation: {
    intuition: [
      t`An acid gives up $\ce{H+}$; the ion left behind is its **conjugate base**.`,
      t`The more stable the conjugate base, the stronger the acid.`,
      t`In phenoxide, $\ce{C6H5O-}$, the negative charge spreads over the ring.`,
      t`In ethoxide, $\ce{C2H5O-}$, it stays on oxygen, and the alkyl group even pushes more electrons there.`,
      t`So phenol is a far stronger acid than ethanol, though still a weak one.`,
    ],
    formal: [
      {
        title: "Alcohols as weak acids",
        points: [
          t`Alcohols react with active metals: $\ce{2C2H5OH + 2Na}$ $\ce{-> 2C2H5ONa + H2}$.`,
          t`They do not react with $\ce{NaOH}$: they are weaker acids than water.`,
          t`Alkyl groups push electrons (+I) and destabilise the alkoxide.`,
          t`So acid strength: primary > secondary > tertiary alcohols.`,
        ],
      },
      {
        title: "Phenol is more acidic",
        points: [
          t`Phenoxide is stabilised by resonance, so phenol gives up $\ce{H+}$ more readily.`,
          t`Phenol reacts with $\ce{NaOH}$ to give sodium phenoxide.`,
          t`It is weaker than carbonic acid, so it does not react with $\ce{NaHCO3}$.`,
        ],
      },
      {
        title: "Substituents on the ring",
        points: [
          t`Electron-withdrawing groups such as $\ce{NO2}$ stabilise phenoxide: acidity rises.`,
          t`Their effect is strongest at ortho and para, where they share the charge by resonance.`,
          t`Electron-donating groups such as $\ce{CH3}$ destabilise phenoxide: acidity falls.`,
          t`So 4-methylphenol < phenol < 3-nitrophenol < 4-nitrophenol.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange phenol, 2,4,6-trinitrophenol and ethanol in decreasing acid strength.`,
      steps: [
        t`Ethanol's alkoxide is not resonance stabilised: weakest.`,
        t`Phenoxide is stabilised by the ring.`,
        t`Three $\ce{NO2}$ groups at ortho and para stabilise it far more.`,
      ],
      answer: t`2,4,6-trinitrophenol > phenol > ethanol`,
    },
    visualSpec: t`Remove $\ce{H+}$ from different O-H compounds and watch how far the negative charge can spread.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks alcohols are at least as acidic as phenol.",
      remediation: "Phenoxide's charge spreads into the ring; alkoxide's does not, so phenol is far more acidic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Thinks an electron-donating group such as $\ce{CH3}$ raises acidity.`,
      remediation: "Donating groups push more charge onto the oxygen of the anion, destabilising it: acidity falls.",
      fallback: { kind: "ext", topic: "inductive effect (Std XI Chemistry)" },
    },
    {
      id: "C05-M3",
      mistake: t`Thinks a $\ce{NO2}$ group lowers acidity.`,
      remediation: t`$\ce{NO2}$ withdraws electrons and stabilises the phenoxide ion, so it raises acidity.`,
      fallback: { kind: "ext", topic: "resonance (Std XI Chemistry)" },
    },
    {
      id: "C05-M4",
      mistake: t`Thinks a meta $\ce{NO2}$ group makes phenol less acidic than phenol itself.`,
      remediation: t`A meta $\ce{NO2}$ still withdraws electrons by induction, so it raises acidity, though less than ortho or para.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Thinks phenol (or ethanol) is acidic enough to release $\ce{CO2}$ from bicarbonate.`,
      remediation: t`Phenol is weaker than carbonic acid, so it does not react with $\ce{NaHCO3}$; carboxylic acids do.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Thinks sodium takes the alcohol's OH group, giving $\ce{NaOH}$.`,
      remediation: t`Sodium replaces the hydrogen of O-H, releasing $\ce{H2}$ and forming the alkoxide.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks alcohols and phenols are neutral and react with no base or metal.",
      remediation: t`Both give up their O-H hydrogen: alcohols to sodium, phenols to sodium and $\ce{NaOH}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Reverses the whole order of acid strength.",
      remediation: t`Resonance-stabilised phenoxides make phenols the stronger acids, and $\ce{NO2}$ strengthens them further.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (vii)" },
      stem: t`Which of these is the least acidic: phenol, 4-methylphenol, 3-nitrophenol, 4-nitrophenol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "least" } },
      options: [
        { key: "A", text: t`3-nitrophenol`, correct: false, misconceptionId: "C05-M4", value: "m_nitrophenol" },
        { key: "B", text: t`4-methylphenol`, correct: true, value: "p_cresol" },
        { key: "C", text: t`phenol`, correct: false, misconceptionId: "C05-M2", value: "phenol" },
        { key: "D", text: t`4-nitrophenol`, correct: false, misconceptionId: "C05-M3", value: "p_nitrophenol" },
      ],
      solution: {
        steps: [
          t`$\ce{NO2}$ raises acidity; $\ce{CH3}$ pushes electrons and lowers it.`,
          t`So 4-methylphenol is the least acidic.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.3 (i)" },
      stem: t`Why is phenol more acidic than ethanol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "why" } },
      options: [
        { key: "A", text: t`It is not: the ethyl group makes ethanol give up $\ce{H+}$ more easily`, correct: false, misconceptionId: "C05-M1", value: "ethanol_more" },
        { key: "B", text: t`It is not: both are neutral and give up no $\ce{H+}$`, correct: false, misconceptionId: "C05-M7", value: "equal_neutral" },
        { key: "C", text: t`The ring releases electrons to the O-H bond, pushing out $\ce{H+}$`, correct: false, misconceptionId: "C05-M2", value: "ring_releases" },
        { key: "D", text: t`Its anion, phenoxide, is stabilised by resonance with the ring`, correct: true, value: "phenoxide_resonance" },
      ],
      solution: {
        steps: [
          t`Phenoxide's negative charge spreads over the ring by resonance.`,
          t`Ethoxide's stays on O, so phenol gives up $\ce{H+}$ more readily.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.3 (iii)" },
      stem: t`Which reagent reacts with phenol but not with ethanol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "reagent" } },
      options: [
        { key: "A", text: t`aqueous $\ce{NaOH}$`, correct: true, value: "naoh" },
        { key: "B", text: t`aqueous $\ce{NaHCO3}$`, correct: false, misconceptionId: "C05-M5", value: "nahco3" },
        { key: "C", text: t`none: neither phenol nor ethanol is acidic`, correct: false, misconceptionId: "C05-M7", value: "none" },
        { key: "D", text: t`sodium metal, which reacts only with phenol`, correct: false, misconceptionId: "C05-M1", value: "na_only_ethanol" },
      ],
      solution: {
        steps: [
          t`Phenol is acidic enough to react with $\ce{NaOH}$; ethanol is not.`,
          t`Neither reacts with $\ce{NaHCO3}$; both react with sodium.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#3" },
      stem: t`A piece of sodium is added to ethanol. What happens?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sodium" } },
      options: [
        { key: "A", text: t`Nothing: ethanol is neutral`, correct: false, misconceptionId: "C05-M7", value: "no_reaction" },
        { key: "B", text: t`Carbon dioxide bubbles off, leaving sodium ethoxide`, correct: false, misconceptionId: "C05-M5", value: "ethoxide_co2" },
        { key: "C", text: t`Hydrogen gas bubbles off, leaving sodium ethoxide, $\ce{C2H5ONa}$`, correct: true, value: "ethoxide_h2" },
        { key: "D", text: t`Sodium takes the OH group, giving $\ce{NaOH}$ and ethene`, correct: false, misconceptionId: "C05-M6", value: "naoh_ethene" },
      ],
      solution: {
        steps: [
          t`Sodium replaces the O-H hydrogen.`,
          t`$\ce{2C2H5OH + 2Na}$ $\ce{-> 2C2H5ONa + H2}$: hydrogen bubbles off.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.5" },
      stem: t`Arrange in increasing order of acid strength: ethanol, 2-methylpropan-2-ol, phenol, 4-nitrophenol.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`2-methylpropan-2-ol < ethanol < phenol < 4-nitrophenol`, correct: true, value: "tbu_et_ph_pno2" },
        { key: "B", text: t`phenol < 4-nitrophenol < ethanol < 2-methylpropan-2-ol`, correct: false, misconceptionId: "C05-M1", value: "ph_pno2_et_tbu" },
        { key: "C", text: t`2-methylpropan-2-ol < ethanol < 4-nitrophenol < phenol`, correct: false, misconceptionId: "C05-M3", value: "tbu_et_pno2_ph" },
        { key: "D", text: t`4-nitrophenol < phenol < ethanol < 2-methylpropan-2-ol`, correct: false, misconceptionId: "C05-M8", value: "pno2_ph_et_tbu" },
      ],
      solution: {
        steps: [
          t`Alcohols are weakest; the more alkyl groups, the weaker: tert-alcohol < ethanol.`,
          t`Phenols are stronger; $\ce{NO2}$ makes 4-nitrophenol strongest.`,
        ],
      },
    },
  ],
};
