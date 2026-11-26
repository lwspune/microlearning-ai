import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Of about 3000 known nuclides, only some 270 are stable. What makes those few special?`,
    reveal: t`Their neutron-to-proton ratio lies in a narrow belt, and most have even numbers of protons and neutrons.`,
  },
  explanation: {
    intuition: [
      t`Neutrons glue the nucleus together; protons repel each other.`,
      t`Stable nuclides have just the right neutron-to-proton ratio.`,
      t`That ratio is about 1 for light nuclei and about 1.5 for heavy ones.`,
      t`Unstable nuclides decay towards the stable belt.`,
    ],
    formal: [
      {
        title: "The stability belt",
        points: [
          t`Plotting N against Z, stable nuclides lie in a narrow belt.`,
          t`Above the belt (too many n): $\beta^-$ decay turns n into p.`,
          t`Below it (too few n): $\beta^+$ decay or electron capture turns p into n.`,
        ],
      },
      {
        title: "Even and odd",
        points: [
          t`Even Z, even N: most stable (paired nucleons).`,
          t`Odd Z, odd N: least stable (one unpaired proton and one unpaired neutron).`,
        ],
      },
    ],
    worked: {
      prompt: t`$^{14}_{6}\mathrm{C}$ has N/Z = 8/6. Which way does it decay?`,
      steps: [
        t`Too many neutrons for so light a nucleus.`,
        t`$\beta^-$ decay: n → p, giving $^{14}_{7}\mathrm{N}$.`,
      ],
      answer: t`$\beta^-$ decay`,
    },
    visualSpec: t`Plot nuclides on an N against Z chart and watch unstable ones slide toward the belt.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks odd-odd.",
      remediation: "Odd-odd nuclides are the least stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks even-odd.",
      remediation: "Pairing of both kinds of nucleon gives most stability.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks parity does not matter.",
      remediation: "Paired nucleons make a nucleus more stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Picks $\beta^+$.`,
      remediation: t`$\beta^+$ turns p into n, which is wrong for excess neutrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks α.",
      remediation: t`α decay suits heavy nuclei; excess neutrons need $\beta^-$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks γ alone.",
      remediation: "γ changes no numbers; the N/Z ratio needs correcting.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Gives 1.",
      remediation: "About 1 holds for light nuclei; heavy ones need more neutrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Gives 0.5.",
      remediation: "Stable nuclei never have fewer neutrons than half their protons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Gives 3.",
      remediation: "Even heavy nuclei need only about 1.5 neutrons per proton.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: t`Picks $\beta^-$.`,
      remediation: t`$\beta^-$ adds protons; too few neutrons needs p → n.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks neutron emission.",
      remediation: "Losing neutrons would worsen a neutron shortage.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Calls them stable.",
      remediation: "Nuclides off the belt are unstable.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Credits electrons.",
      remediation: "Nuclear stability depends on nucleons, not electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Credits size.",
      remediation: "Even small odd-odd nuclei are unstable; pairing decides.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Thinks they have no neutrons.",
      remediation: "They have an odd number of neutrons.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (A)" },
      stem: t`Which nuclides are the most stable?`,
      verify: { kind: "value", inputs: {  }, params: { q: "most_stable" } },
      options: [
        { key: "A", text: t`those with odd numbers of both`, correct: false, misconceptionId: "C02-M1", value: "odd_odd" },
        { key: "B", text: t`those with even numbers of both protons and neutrons`, correct: true, value: "even_even" },
        { key: "C", text: t`those with even protons and odd neutrons`, correct: false, misconceptionId: "C02-M2", value: "even_odd" },
        { key: "D", text: t`odd or even makes no difference`, correct: false, misconceptionId: "C02-M3", value: "no_matter" },
      ],
      solution: {
        steps: [
          t`Paired protons and paired neutrons.`,
          t`Even-even nuclides.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (D)" },
      stem: t`A nuclide lies above the belt of stability (too many neutrons). It decays by`,
      verify: { kind: "value", inputs: {  }, params: { q: "above_belt" } },
      options: [
        { key: "A", text: t`$\beta^+$ emission`, correct: false, misconceptionId: "C02-M4", value: "beta_plus" },
        { key: "B", text: t`α emission`, correct: false, misconceptionId: "C02-M5", value: "alpha" },
        { key: "C", text: t`$\beta^-$ emission, turning a neutron into a proton`, correct: true, value: "beta_minus" },
        { key: "D", text: t`γ emission alone`, correct: false, misconceptionId: "C02-M6", value: "gamma_only" },
      ],
      solution: {
        steps: [
          t`Too many neutrons.`,
          t`$\beta^-$: n → p + e.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (I)" },
      stem: t`For heavy stable nuclei, the neutron-to-proton ratio is about`,
      verify: { kind: "value", inputs: {  }, params: { q: "heavy_ratio" } },
      options: [
        { key: "A", text: t`3`, correct: false, misconceptionId: "C02-M9", value: "r_3" },
        { key: "B", text: t`0.5`, correct: false, misconceptionId: "C02-M8", value: "r_0_5" },
        { key: "C", text: t`1`, correct: false, misconceptionId: "C02-M7", value: "r_1" },
        { key: "D", text: t`1.5`, correct: true, value: "r_1_5" },
      ],
      solution: {
        steps: [
          t`Heavy nuclei need extra neutrons to offset proton repulsion.`,
          t`N/Z ≈ 1.5.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (D)" },
      stem: t`A nuclide lies below the belt of stability (too few neutrons). It decays by`,
      verify: { kind: "value", inputs: {  }, params: { q: "below_belt" } },
      options: [
        { key: "A", text: t`$\beta^+$ emission or electron capture`, correct: true, value: "beta_plus_capture" },
        { key: "B", text: t`nothing: it is stable`, correct: false, misconceptionId: "C02-M12", value: "stable" },
        { key: "C", text: t`$\beta^-$ emission`, correct: false, misconceptionId: "C02-M10", value: "beta_minus" },
        { key: "D", text: t`neutron emission`, correct: false, misconceptionId: "C02-M11", value: "neutron_emission" },
      ],
      solution: {
        steps: [
          t`Too few neutrons.`,
          t`$\beta^+$ or electron capture: p → n.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (C)" },
      stem: t`Nuclides with odd numbers of both protons and neutrons are the least stable because`,
      verify: { kind: "value", inputs: {  }, params: { q: "odd_odd" } },
      options: [
        { key: "A", text: t`they have no neutrons`, correct: false, misconceptionId: "C02-M15", value: "no_neutrons" },
        { key: "B", text: t`they have both an unpaired proton and an unpaired neutron`, correct: true, value: "unpaired_both" },
        { key: "C", text: t`they have too many electrons`, correct: false, misconceptionId: "C02-M13", value: "electrons" },
        { key: "D", text: t`they are always very large`, correct: false, misconceptionId: "C02-M14", value: "size" },
      ],
      solution: {
        steps: [
          t`Odd Z and odd N.`,
          t`One proton and one neutron are unpaired.`,
        ],
      },
    },
  ],
};
