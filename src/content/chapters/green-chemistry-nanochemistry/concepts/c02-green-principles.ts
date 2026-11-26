import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Dry cleaners long used perchloroethylene, a suspected carcinogen. Today some use carbon dioxide instead. How can a gas clean clothes?`,
    reveal: t`Under high pressure $\ce{CO2}$ becomes a supercritical fluid that dissolves grease. Afterwards it simply evaporates: no toxic solvent left behind.`,
  },
  explanation: {
    intuition: [
      t`Anastas's twelve principles turn the idea of green chemistry into practical rules.`,
      t`Make less waste, and make it less hazardous.`,
      t`Use safer solvents, catalysts and fewer steps.`,
      t`Draw raw materials from renewable sources.`,
    ],
    formal: [
      {
        title: "Less waste",
        points: [
          t`**Prevent waste** rather than treat it.`,
          t`**Atom economy**: put as many reactant atoms as possible into the product.`,
          t`**Catalysis**: catalysts are not used up and cut waste, energy and time.`,
          t`**Fewer steps**: avoid unnecessary protecting groups, which add reagents and waste.`,
        ],
      },
      {
        title: "Safer materials",
        points: [
          t`**Safer solvents and auxiliaries**: water or supercritical $\ce{CO2}$, not halogenated or aromatic solvents.`,
          t`**Renewable feedstocks**: plant materials rather than petroleum.`,
          t`**Design safer chemicals**: persistent insecticides such as DDT and lindane show why.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which principle does using water instead of benzene as a solvent follow?`,
      steps: [
        t`Benzene is toxic and volatile.`,
        t`Water is safe.`,
      ],
      answer: t`Use safer solvents and auxiliaries`,
    },
    visualSpec: t`Score a synthesis against the principles and swap in greener choices one at a time.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks a nonflammable halogenated solvent is green.",
      remediation: "Carbon tetrachloride is toxic and harms the ozone layer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks a common lab solvent is safe.",
      remediation: "Benzene is toxic and carcinogenic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks a fuel from nature is a green solvent.",
      remediation: "Petrol is flammable, volatile and harmful.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks catalysts shift the equilibrium.",
      remediation: "Catalysts speed up both directions equally; they save waste and energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks catalysts are always nontoxic.",
      remediation: "Some catalysts are toxic; their value is that small amounts are reused.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks catalysts are used up.",
      remediation: "Catalysts remain unchanged, so little is needed.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Confuses BHC with DDT.",
      remediation: t`DDT is a different chlorinated insecticide; $\gamma$-BHC is lindane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Takes BHC for a simple chloro-solvent.",
      remediation: t`BHC is $\ce{C6H6Cl6}$, an insecticide; its $\gamma$-isomer is lindane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Confuses BHC with chlorobenzene.",
      remediation: "Chlorobenzene has one Cl; BHC has six Cl and no ring double bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks protecting groups make reactions too fast.",
      remediation: "They add steps, reagents and waste.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks fewer steps always change the product.",
      remediation: "The same product can often be reached in fewer steps.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks a rule requires one step.",
      remediation: "The principle is to avoid unnecessary steps, not a one-step rule.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks petroleum is renewable.",
      remediation: "Petroleum took millions of years to form: not renewable.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks coal is renewable.",
      remediation: "Coal is a fossil fuel: not renewable.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Thinks natural gas is renewable because it is natural.",
      remediation: "Natural gas is a fossil fuel; molasses from sugarcane is renewed each season.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (vii)" },
      stem: t`Which of these is a green solvent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "solvent" } },
      options: [
        { key: "A", text: t`carbon tetrachloride`, correct: false, misconceptionId: "C02-M1", value: "ccl4" },
        { key: "B", text: t`supercritical $\ce{CO2}$`, correct: true, value: "supercritical_co2" },
        { key: "C", text: t`benzene`, correct: false, misconceptionId: "C02-M2", value: "benzene" },
        { key: "D", text: t`petrol`, correct: false, misconceptionId: "C02-M3", value: "petrol" },
      ],
      solution: {
        steps: [
          t`Supercritical $\ce{CO2}$ is nontoxic and leaves no residue.`,
          t`It is a green solvent.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (viii)" },
      stem: t`Green chemistry prefers catalysts to reagents used in stoichiometric amounts because catalysts`,
      verify: { kind: "value", inputs: {  }, params: { q: "catalyst" } },
      options: [
        { key: "A", text: t`shift the equilibrium towards the products`, correct: false, misconceptionId: "C02-M4", value: "shift_equilibrium" },
        { key: "B", text: t`are always nontoxic`, correct: false, misconceptionId: "C02-M5", value: "nontoxic" },
        { key: "C", text: t`are not used up, so they cut waste, energy and time`, correct: true, value: "not_used_up" },
        { key: "D", text: t`are completely consumed, leaving no residue`, correct: false, misconceptionId: "C02-M6", value: "consumed" },
      ],
      solution: {
        steps: [
          t`A catalyst is not consumed.`,
          t`Small amounts cut waste, energy and time.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.1 (ii)" },
      stem: t`The $\gamma$-isomer of BHC (benzene hexachloride) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bhc" } },
      options: [
        { key: "A", text: t`chlorobenzene`, correct: false, misconceptionId: "C02-M9", value: "chlorobenzene" },
        { key: "B", text: t`chloroform`, correct: false, misconceptionId: "C02-M8", value: "chloroform" },
        { key: "C", text: t`DDT`, correct: false, misconceptionId: "C02-M7", value: "ddt" },
        { key: "D", text: t`lindane`, correct: true, value: "lindane" },
      ],
      solution: {
        steps: [
          t`BHC has several isomers.`,
          t`The $\gamma$-isomer is lindane.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.4 (iii)" },
      stem: t`Green chemistry avoids unnecessary steps, such as adding and removing protecting groups, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "steps" } },
      options: [
        { key: "A", text: t`each extra step needs extra reagents and creates waste`, correct: true, value: "extra_waste" },
        { key: "B", text: t`a rule requires every synthesis to have one step`, correct: false, misconceptionId: "C02-M12", value: "rule" },
        { key: "C", text: t`protecting groups make reactions too fast`, correct: false, misconceptionId: "C02-M10", value: "too_fast" },
        { key: "D", text: t`fewer steps always give a different product`, correct: false, misconceptionId: "C02-M11", value: "different_product" },
      ],
      solution: {
        steps: [
          t`Protecting groups need extra reagents to add and remove.`,
          t`Each step creates waste.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.4 (i)" },
      stem: t`Which process uses a renewable feedstock?`,
      verify: { kind: "value", inputs: {  }, params: { q: "renewable" } },
      options: [
        { key: "A", text: t`making hydrogen from natural gas`, correct: false, misconceptionId: "C02-M15", value: "natural_gas" },
        { key: "B", text: t`making ethanol by fermenting sugarcane molasses`, correct: true, value: "fermentation" },
        { key: "C", text: t`making ethene by cracking petroleum`, correct: false, misconceptionId: "C02-M13", value: "cracking" },
        { key: "D", text: t`making fuel gas from coal`, correct: false, misconceptionId: "C02-M14", value: "coal" },
      ],
      solution: {
        steps: [
          t`Sugarcane grows back each season.`,
          t`Fermenting molasses uses a renewable feedstock.`,
        ],
      },
    },
  ],
};
