import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`n-Pentane boils at 309 K, but its isomer neopentane at only 283 K. Same formula, $\ce{C5H12}$. Why the difference?`,
    reveal: t`Neopentane is compact, almost a ball, so its molecules touch less and attract less.`,
  },
  explanation: {
    intuition: [
      t`Alkanes come mainly from petroleum and natural gas.`,
      t`In the lab they are made from alkyl halides or from sodium carboxylates.`,
      t`Some routes keep the carbon count, some double it, some cut one carbon.`,
      t`Branching lowers the boiling point.`,
    ],
    formal: [
      {
        title: "From alkyl halides",
        points: [
          t`Reduction: $\ce{C2H5Br}$ + Zn/HCl → $\ce{C2H6}$.`,
          t`Wurtz: $\ce{2CH3Br + 2Na}$ $\ce{-> C2H6 + 2NaBr}$ (dry ether).`,
        ],
      },
      {
        title: "From carboxylates",
        points: [
          t`Soda lime: $\ce{RCOONa}$ → RH, one carbon fewer.`,
          t`Kolbe electrolysis: $\ce{2CH3COONa}$ gives $\ce{C2H6}$ at the anode.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which alkane forms when ethyl bromide undergoes the Wurtz reaction?`,
      steps: [
        t`Two ethyl groups join.`,
        t`$\ce{C2H5-C2H5}$ is butane.`,
      ],
      answer: t`Butane`,
    },
    visualSpec: t`Count carbons from reactant to alkane for each method.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks branching raises the boiling point.",
      remediation: "Compact molecules have less contact: lower bp.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks a lighter branched isomer.",
      remediation: "Heavier, unbranched molecules boil higher.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks a smaller straight chain.",
      remediation: "n-Pentane has more carbons than butane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Expects elimination.",
      remediation: "Zn/HCl reduces C–Br to C–H.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Expects hydrolysis.",
      remediation: "No water attacks; the halide is reduced.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Expects Wurtz coupling.",
      remediation: "Zn/HCl reduces; Na in ether couples.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Expects reduction to methane.",
      remediation: "Na in ether joins two methyl groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Expects an alkene.",
      remediation: "Wurtz gives an alkane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Adds a carbon.",
      remediation: "Two methyls give two carbons: ethane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Keeps every carbon.",
      remediation: "Soda lime removes the COO carbon as carbonate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Loses two carbons.",
      remediation: "Only one carbon is lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Doubles the chain.",
      remediation: "Doubling happens in Kolbe electrolysis, not with soda lime.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: t`Removes $\ce{CO2}$ as with soda lime.`,
      remediation: "In Kolbe electrolysis two methyl radicals join: ethane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Expects only hydrogen.",
      remediation: "Hydrogen forms at the cathode; ethane at the anode.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Expects an alkene.",
      remediation: "Two methyl radicals join into ethane.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.1 (A)" },
      stem: t`Which has the highest boiling point?`,
      verify: { kind: "value", inputs: {  }, params: { q: "bp" } },
      options: [
        { key: "A", text: t`n-butane`, correct: false, misconceptionId: "C01-M3", value: "n_butane" },
        { key: "B", text: t`neopentane`, correct: false, misconceptionId: "C01-M1", value: "neopentane" },
        { key: "C", text: t`isobutane`, correct: false, misconceptionId: "C01-M2", value: "isobutane" },
        { key: "D", text: t`n-pentane`, correct: true, value: "n_pentane" },
      ],
      solution: {
        steps: [
          t`Five carbons, unbranched: most surface contact.`,
          t`n-Pentane.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (G)" },
      stem: t`Ethyl bromide is reduced with zinc and HCl. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "reduction" } },
      options: [
        { key: "A", text: t`ethane`, correct: true, value: "ethane" },
        { key: "B", text: t`ethene`, correct: false, misconceptionId: "C01-M4", value: "ethene" },
        { key: "C", text: t`ethanol`, correct: false, misconceptionId: "C01-M5", value: "ethanol" },
        { key: "D", text: t`butane`, correct: false, misconceptionId: "C01-M6", value: "butane" },
      ],
      solution: {
        steps: [
          t`Zn/HCl replaces Br by H.`,
          t`Ethane.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Methyl bromide is heated with sodium in dry ether (Wurtz reaction). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "wurtz" } },
      options: [
        { key: "A", text: t`ethene`, correct: false, misconceptionId: "C01-M8", value: "ethene" },
        { key: "B", text: t`ethane`, correct: true, value: "ethane" },
        { key: "C", text: t`propane`, correct: false, misconceptionId: "C01-M9", value: "propane" },
        { key: "D", text: t`methane`, correct: false, misconceptionId: "C01-M7", value: "methane" },
      ],
      solution: {
        steps: [
          t`Two methyl groups join.`,
          t`Ethane.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`Sodium propanoate, $\ce{CH3CH2COONa}$, is heated with soda lime. The alkane formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "soda_lime" } },
      options: [
        { key: "A", text: t`methane`, correct: false, misconceptionId: "C01-M11", value: "methane" },
        { key: "B", text: t`propane`, correct: false, misconceptionId: "C01-M10", value: "propane" },
        { key: "C", text: t`ethane`, correct: true, value: "ethane" },
        { key: "D", text: t`butane`, correct: false, misconceptionId: "C01-M12", value: "butane" },
      ],
      solution: {
        steps: [
          t`Soda lime removes the COO carbon.`,
          t`Three carbons become two: ethane.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`An aqueous solution of sodium acetate is electrolysed (Kolbe's method). The hydrocarbon formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "kolbe" } },
      options: [
        { key: "A", text: t`ethene`, correct: false, misconceptionId: "C01-M15", value: "ethene" },
        { key: "B", text: t`methane`, correct: false, misconceptionId: "C01-M13", value: "methane" },
        { key: "C", text: t`none: only hydrogen forms`, correct: false, misconceptionId: "C01-M14", value: "hydrogen_only" },
        { key: "D", text: t`ethane`, correct: true, value: "ethane" },
      ],
      solution: {
        steps: [
          t`Acetate loses $\ce{CO2}$ at the anode, giving methyl radicals.`,
          t`Two join: ethane.`,
        ],
      },
    },
  ],
};
