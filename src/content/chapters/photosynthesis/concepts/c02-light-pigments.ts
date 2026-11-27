import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Leaves look green. Does that mean plants use green light the most?`,
    reveal: t`No: green is the colour chlorophyll hardly absorbs, so it passes on to your eye.`,
  },
  explanation: {
    intuition: [
      t`Pigments absorb some wavelengths and let others pass.`,
      t`Chlorophyll a and b absorb blue, violet and red; green passes.`,
      t`**Accessory pigments** (chlorophyll b, carotenes, xanthophylls) catch more light for chlorophyll a.`,
    ],
    formal: [
      {
        title: "Two spectra",
        points: [
          t`**Absorption spectrum**: light absorbed by each pigment at each wavelength.`,
          t`**Action spectrum**: rate of photosynthesis at each wavelength; mainly red and blue drive it.`,
          t`The two spectra of chlorophyll a and b coincide: the light absorbed is the light used.`,
        ],
      },
      {
        title: "Antenna pigments",
        points: [
          t`Antenna molecules surround each reaction centre, $\mathrm{P_{680}}$ or $\mathrm{P_{700}}$.`,
          t`They absorb many wavelengths and pass the energy to the centre.`,
          t`Carotenoids absorb violet to blue and protect chlorophyll from **photo-oxidation**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A chlorophyll extract is held up to a window. What colour does it look, and why?`,
      steps: [
        t`Blue, violet and red light are absorbed.`,
        t`Green light passes through.`,
      ],
      answer: t`Green, because green light is hardly absorbed.`,
    },
    visualSpec: t`Two curves against wavelength, chlorophyll absorption and rate of photosynthesis, both high in blue and red and low in green.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says green absorbed.",
      remediation: "Absorbed light does not reach the eye.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says gives out green.",
      remediation: "The green is light that passed through.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says absorbs all.",
      remediation: "Then it would look dark.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks pigment absorption.",
      remediation: "That is the absorption spectrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says green peak.",
      remediation: "Green light is little used.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Says one pigment.",
      remediation: "Absorption spectra are drawn per pigment.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks green.",
      remediation: "Green is the colour passed.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says red only.",
      remediation: "Blue and violet are absorbed too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says blue only.",
      remediation: "Red is absorbed too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says each is a centre.",
      remediation: "Only P₆₈₀ and P₇₀₀ are centres.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says stores food.",
      remediation: "They only pass energy on.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says each makes ATP.",
      remediation: "ATP forms later, in the light reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says stops.",
      remediation: "Chlorophyll a still absorbs light.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says no change.",
      remediation: "Light only they absorb would be lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says rate rises.",
      remediation: "Less light is trapped, so it falls.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(H)" },
      stem: t`A chlorophyll solution looks green in transmitted light because`,
      verify: { kind: "value", inputs: {  }, params: { q: "green" } },
      options: [
        { key: "A", text: t`green light is hardly absorbed and passes through`, correct: true, value: "green_not_absorbed" },
        { key: "B", text: t`green light is absorbed the most`, correct: false, misconceptionId: "C02-M1", value: "green_absorbed" },
        { key: "C", text: t`chlorophyll gives out green light of its own`, correct: false, misconceptionId: "C02-M2", value: "emits_green" },
        { key: "D", text: t`chlorophyll absorbs all colours equally`, correct: false, misconceptionId: "C02-M3", value: "absorbs_all" },
      ],
      solution: {
        steps: [
          t`Green is hardly absorbed.`,
          t`It passes through to the eye.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(B)" },
      stem: t`Which feature belongs to the action spectrum?`,
      verify: { kind: "value", inputs: {  }, params: { q: "action" } },
      options: [
        { key: "A", text: t`It shows the light absorbed by each pigment.`, correct: false, misconceptionId: "C02-M4", value: "pigment_absorption" },
        { key: "B", text: t`Its peak is in green light.`, correct: false, misconceptionId: "C02-M5", value: "green_peak" },
        { key: "C", text: t`It is drawn for one pigment at a time.`, correct: false, misconceptionId: "C02-M6", value: "one_pigment" },
        { key: "D", text: t`It shows the rate of photosynthesis at each wavelength.`, correct: true, value: "rate_measured" },
      ],
      solution: {
        steps: [
          t`Action spectrum: rate against wavelength.`,
          t`Rate of photosynthesis at each wavelength.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(B)" },
      stem: t`Chlorophyll a and b absorb light mostly in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "absorb" } },
      options: [
        { key: "A", text: t`blue only`, correct: false, misconceptionId: "C02-M9", value: "blue_only" },
        { key: "B", text: t`blue, violet and red`, correct: true, value: "blue_red" },
        { key: "C", text: t`green`, correct: false, misconceptionId: "C02-M7", value: "green_light" },
        { key: "D", text: t`red only`, correct: false, misconceptionId: "C02-M8", value: "red_only" },
      ],
      solution: {
        steps: [
          t`See the absorption spectrum.`,
          t`Blue, violet and red.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(G)" },
      stem: t`The advantage of many pigment molecules around one photocentre is that`,
      verify: { kind: "value", inputs: {  }, params: { q: "antenna" } },
      options: [
        { key: "A", text: t`each pigment makes ATP by itself`, correct: false, misconceptionId: "C02-M12", value: "makes_atp" },
        { key: "B", text: t`light of many wavelengths is harvested and passed to the centre`, correct: true, value: "more_wavelengths" },
        { key: "C", text: t`each pigment works as its own reaction centre`, correct: false, misconceptionId: "C02-M10", value: "each_centre" },
        { key: "D", text: t`the pigments store the energy as food`, correct: false, misconceptionId: "C02-M11", value: "stores_food" },
      ],
      solution: {
        steps: [
          t`Many pigments catch many wavelengths.`,
          t`The energy is passed to the centre.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(N)" },
      stem: t`If a plant had no accessory pigments, then`,
      verify: { kind: "value", inputs: {  }, params: { q: "no_accessory" } },
      options: [
        { key: "A", text: t`the rate would rise`, correct: false, misconceptionId: "C02-M15", value: "rate_rises" },
        { key: "B", text: t`less light would be trapped and the rate would fall`, correct: true, value: "less_light_used" },
        { key: "C", text: t`photosynthesis would stop completely`, correct: false, misconceptionId: "C02-M13", value: "stops_completely" },
        { key: "D", text: t`nothing would change`, correct: false, misconceptionId: "C02-M14", value: "no_change" },
      ],
      solution: {
        steps: [
          t`Only chlorophyll a's light is used.`,
          t`Less light is trapped; the rate falls.`,
        ],
      },
    },
  ],
};
