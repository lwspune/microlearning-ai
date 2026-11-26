import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Alchemists never turned one element into another. Rutherford did it in 1919 by firing α particles at nitrogen. How?`,
    reveal: t`Bombarding a nucleus can change its proton count: nitrogen became oxygen. Nuclear reactions change elements.`,
  },
  explanation: {
    intuition: [
      t`Nuclear reactions change nuclei, so elements change.`,
      t`Mass numbers and atomic numbers balance on both sides.`,
      t`Heavy nuclei can split (**fission**); light ones can join (**fusion**).`,
      t`Both release energy from the mass lost: $E = mc^2$.`,
    ],
    formal: [
      {
        title: "Reactions",
        points: [
          t`Transmutation: $^{27}_{13}\mathrm{Al} + {}^{4}_{2}\mathrm{He} \to {}^{30}_{15}\mathrm{P} + {}^{1}_{0}\mathrm{n}$.`,
          t`Fission: $^{235}\mathrm{U}$ + n splits into two middle-sized nuclei and neutrons.`,
          t`Fusion: $^{2}\mathrm{H} + {}^{3}\mathrm{H} \to {}^{4}\mathrm{He} + \mathrm{n}$; it powers the Sun.`,
        ],
      },
      {
        title: "Energy",
        points: [
          t`$E = mc^2$, with $c = 3 \times 10^8$ m/s.`,
          t`Fusion needs millions of kelvin to overcome repulsion between nuclei.`,
        ],
      },
    ],
    worked: {
      prompt: t`Complete: $^{14}_{7}\mathrm{N} + {}^{4}_{2}\mathrm{He} \to {}^{17}_{8}\mathrm{O}$ + ?`,
      steps: [
        t`A: 14 + 4 = 17 + 1; Z: 7 + 2 = 8 + 1.`,
        t`The particle is $^{1}_{1}\mathrm{H}$, a proton.`,
      ],
      answer: t`A proton`,
    },
    visualSpec: t`Fire particles at nuclei and balance the mass and charge numbers of what comes out.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Forgets the neutron.",
      remediation: "A: 27 + 4 − 1 = 30.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Miscounts the charge.",
      remediation: "Z: 13 + 2 − 0 = 15: phosphorus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Adds the neutron.",
      remediation: "The neutron is emitted: subtract its mass number.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says fission.",
      remediation: "Fission splits heavy nuclei; joining light ones is fusion.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says chemical reaction.",
      remediation: "Chemical reactions do not change nuclei.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says chain reaction.",
      remediation: "A chain reaction is self-sustaining fission.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks fission.",
      remediation: "Uranium splitting is fission.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks β decay.",
      remediation: "One nucleus decaying is not fusion.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks a chemical reaction.",
      remediation: "Burning carbon changes no nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks fusion releases little energy.",
      remediation: "Fusion releases more energy per gram than fission.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks light nuclei are rare.",
      remediation: "Hydrogen isotopes are plentiful; temperature is the problem.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Blames runaway chain reactions.",
      remediation: "Chain reactions belong to fission; fusion needs huge temperatures.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Forgets to square c.",
      remediation: t`$E = mc^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Converts to kJ but keeps J.",
      remediation: "With m in kg and c in m/s, E is in joules.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Uses $\tfrac12 mc^2$.`,
      remediation: t`Mass-energy is $E = mc^2$, not kinetic energy.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.1 (B)" },
      stem: t`Complete: $^{27}_{13}\mathrm{Al} + {}^{4}_{2}\mathrm{He} \to\ ? + {}^{1}_{0}\mathrm{n}$`,
      verify: { kind: "value", inputs: {  }, params: { q: "missing" } },
      options: [
        { key: "A", text: t`$^{31}_{15}\mathrm{P}$`, correct: false, misconceptionId: "C06-M1", value: "p31_15" },
        { key: "B", text: t`$^{30}_{15}\mathrm{P}$`, correct: true, value: "p30_15" },
        { key: "C", text: t`$^{32}_{16}\mathrm{S}$`, correct: false, misconceptionId: "C06-M3", value: "s32_16" },
        { key: "D", text: t`$^{30}_{14}\mathrm{Si}$`, correct: false, misconceptionId: "C06-M2", value: "si30_14" },
      ],
      solution: {
        steps: [
          t`A: 27 + 4 − 1 = 30; Z: 13 + 2 = 15.`,
          t`$^{30}_{15}\mathrm{P}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.1 (E)" },
      stem: t`Joining light nuclei into a heavier nucleus is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "fusion_define" } },
      options: [
        { key: "A", text: t`a chemical reaction`, correct: false, misconceptionId: "C06-M5", value: "chemical" },
        { key: "B", text: t`nuclear fission`, correct: false, misconceptionId: "C06-M4", value: "fission" },
        { key: "C", text: t`nuclear fusion`, correct: true, value: "fusion" },
        { key: "D", text: t`a chain reaction`, correct: false, misconceptionId: "C06-M6", value: "chain" },
      ],
      solution: {
        steps: [
          t`Light nuclei combine.`,
          t`Nuclear fusion.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.1 (A)" },
      stem: t`Which is a nuclear fusion reaction?`,
      verify: { kind: "value", inputs: {  }, params: { q: "fusion_pick" } },
      options: [
        { key: "A", text: t`$\ce{C + O2 -> CO2}$`, correct: false, misconceptionId: "C06-M9", value: "carbon_burns" },
        { key: "B", text: t`$^{235}\mathrm{U} + \mathrm{n} \to {}^{141}\mathrm{Ba} + {}^{92}\mathrm{Kr} + 3\mathrm{n}$`, correct: false, misconceptionId: "C06-M7", value: "u235_split" },
        { key: "C", text: t`$^{14}_{6}\mathrm{C} \to {}^{14}_{7}\mathrm{N} + \beta^-$`, correct: false, misconceptionId: "C06-M8", value: "c14_beta" },
        { key: "D", text: t`$^{2}_{1}\mathrm{H} + {}^{3}_{1}\mathrm{H} \to {}^{4}_{2}\mathrm{He} + {}^{1}_{0}\mathrm{n}$`, correct: true, value: "d_t" },
      ],
      solution: {
        steps: [
          t`Two light nuclei join into helium.`,
          t`That is fusion.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (H)" },
      stem: t`Fusion releases great energy, yet it is hard to use in power stations because`,
      verify: { kind: "value", inputs: {  }, params: { q: "fusion_hard" } },
      options: [
        { key: "A", text: t`nuclei must be heated to millions of kelvin to overcome their repulsion`, correct: true, value: "huge_temperature" },
        { key: "B", text: t`fusion sets off runaway chain reactions`, correct: false, misconceptionId: "C06-M12", value: "runaway_chain" },
        { key: "C", text: t`fusion releases very little energy`, correct: false, misconceptionId: "C06-M10", value: "little_energy" },
        { key: "D", text: t`light nuclei are very rare`, correct: false, misconceptionId: "C06-M11", value: "rare_nuclei" },
      ],
      solution: {
        steps: [
          t`Positive nuclei repel strongly.`,
          t`Only millions of kelvin bring them together.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.4 (L)" },
      stem: t`The Sun loses $4.34 \times 10^{9}$ kg of mass each second. How much energy does it radiate each second? ($c = 3 \times 10^8$ m/s)`,
      verify: { kind: "value", inputs: { m: "4.34e9" }, params: { q: "sun" } },
      options: [
        { key: "A", text: t`$1.3 \times 10^{18}\ \mathrm{J}$`, correct: false, misconceptionId: "C06-M13", value: "1300000000000000000" },
        { key: "B", text: t`$3.91 \times 10^{26}\ \mathrm{J}$`, correct: true, value: "390999999999999996124463104" },
        { key: "C", text: t`$3.91 \times 10^{23}\ \mathrm{J}$`, correct: false, misconceptionId: "C06-M14", value: "391000000000000027262976" },
        { key: "D", text: t`$1.95 \times 10^{26}\ \mathrm{J}$`, correct: false, misconceptionId: "C06-M15", value: "194999999999999992970346496" },
      ],
      solution: {
        steps: [
          t`$E = 4.34 \times 10^9 \times (3 \times 10^8)^2$.`,
          t`$= 3.91 \times 10^{26}$ J each second.`,
        ],
      },
    },
  ],
};
