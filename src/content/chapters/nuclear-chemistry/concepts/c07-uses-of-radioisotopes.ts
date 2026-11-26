import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`A wooden tool from an ancient site has less than half the carbon-14 activity of fresh wood. How old is it?`,
    reveal: t`More than one half life of carbon-14, over 5730 years. The decay law turns the activity ratio into an age.`,
  },
  explanation: {
    intuition: [
      t`Radioisotopes behave chemically like stable atoms but announce themselves by radiation.`,
      t`They date ancient objects, treat disease and trace processes.`,
      t`Carbon-14 dating uses the activity left in once-living material.`,
      t`Medicine uses $^{32}\mathrm{P}$, $^{60}\mathrm{Co}$ and $^{131}\mathrm{I}$.`,
    ],
    formal: [
      {
        title: "Carbon-14 dating",
        points: [
          t`Living things keep their $^{14}\mathrm{C}$ level constant; after death it decays.`,
          t`$t = \dfrac{t_{1/2}}{0.693}\ln\dfrac{A_0}{A}$, with $t_{1/2}$ = 5730 y.`,
        ],
      },
      {
        title: "Other uses",
        points: [
          t`$^{32}\mathrm{P}$: leukaemia; $^{60}\mathrm{Co}$: cancer radiotherapy; $^{131}\mathrm{I}$: thyroid.`,
          t`Tracers follow an element through a process (e.g. $^{32}\mathrm{P}$ in plants).`,
        ],
      },
    ],
    worked: {
      prompt: t`Old wood has half the carbon-14 activity of fresh wood. How old is it?`,
      steps: [
        t`Half the activity means one half life.`,
        t`5730 years.`,
      ],
      answer: t`5730 y`,
    },
    visualSpec: t`Track a sample's carbon-14 activity falling after death and read off its age.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks cobalt-60.",
      remediation: t`$^{60}\mathrm{Co}$ is for radiotherapy; $^{32}\mathrm{P}$ treats leukaemia.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks radium-226.",
      remediation: t`Leukaemia is treated with $^{32}\mathrm{P}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks iodine-131.",
      remediation: t`$^{131}\mathrm{I}$ is for the thyroid.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses $\log_{10}$ without 2.303.`,
      remediation: t`Use ln, or multiply $\log_{10}$ by 2.303.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Assumes a straight-line fall.",
      remediation: "Decay is exponential, not linear.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Multiplies the ratio by the half life.",
      remediation: "Use the logarithm of the ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Thinks $^{14}\mathrm{C}$ builds up after death.`,
      remediation: t`Intake stops at death; $^{14}\mathrm{C}$ only decays.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Thinks $^{12}\mathrm{C}$ decays.`,
      remediation: t`$^{12}\mathrm{C}$ is stable.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Dates from $^{12}\mathrm{C}$.`,
      remediation: t`The age comes from $^{14}\mathrm{C}$ activity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says dating wood.",
      remediation: t`Wood is dated with $^{14}\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says treating leukaemia.",
      remediation: t`That is $^{32}\mathrm{P}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says studying photosynthesis.",
      remediation: t`Photosynthesis is traced with $^{14}\mathrm{C}$ or $^{18}\mathrm{O}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says killing bacteria.",
      remediation: "A tracer only marks a path.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says slowing reactions.",
      remediation: "Tracers do not change rates.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says dating rocks only.",
      remediation: "Tracers follow elements through processes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.1 (D)" },
      stem: t`The radioisotope used to treat leukaemia is`,
      verify: { kind: "value", inputs: {  }, params: { q: "leukaemia" } },
      options: [
        { key: "A", text: t`$^{226}\mathrm{Ra}$`, correct: false, misconceptionId: "C07-M2", value: "ra226" },
        { key: "B", text: t`$^{131}\mathrm{I}$`, correct: false, misconceptionId: "C07-M3", value: "i131" },
        { key: "C", text: t`$^{60}\mathrm{Co}$`, correct: false, misconceptionId: "C07-M1", value: "co60" },
        { key: "D", text: t`$^{32}\mathrm{P}$`, correct: true, value: "p32" },
      ],
      solution: {
        steps: [
          t`Phosphorus-32 targets blood-forming tissue.`,
          t`$^{32}\mathrm{P}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.4 (M)" },
      stem: t`Old wood shows 7.0 dps/g of carbon-14 activity; fresh wood shows 16.0 dps/g. The half life of $^{14}\mathrm{C}$ is 5730 y. How old is the wood?`,
      verify: { kind: "value", inputs: { th: "5730", a0: "16.0", a: "7.0" }, params: { q: "wood_age" } },
      options: [
        { key: "A", text: t`$6840\ \mathrm{y}$`, correct: true, value: "6840" },
        { key: "B", text: t`$6450\ \mathrm{y}$`, correct: false, misconceptionId: "C07-M5", value: "6450" },
        { key: "C", text: t`$13100\ \mathrm{y}$`, correct: false, misconceptionId: "C07-M6", value: "13100" },
        { key: "D", text: t`$2970\ \mathrm{y}$`, correct: false, misconceptionId: "C07-M4", value: "2970" },
      ],
      solution: {
        steps: [
          t`$t = (5730/0.693)\ln(16/7)$.`,
          t`$= 8268 \times 0.827 = 6840$ y.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (J)" },
      stem: t`Carbon-14 dating works because`,
      verify: { kind: "value", inputs: {  }, params: { q: "dating" } },
      options: [
        { key: "A", text: t`the amount of $^{12}\mathrm{C}$ gives the age`, correct: false, misconceptionId: "C07-M9", value: "from_c12" },
        { key: "B", text: t`a living thing keeps its $^{14}\mathrm{C}$ level constant, and after death it decays`, correct: true, value: "decays_after_death" },
        { key: "C", text: t`$^{14}\mathrm{C}$ builds up after death`, correct: false, misconceptionId: "C07-M7", value: "rises_after_death" },
        { key: "D", text: t`$^{12}\mathrm{C}$ decays after death`, correct: false, misconceptionId: "C07-M8", value: "c12_decays" },
      ],
      solution: {
        steps: [
          t`Living things exchange carbon, keeping $^{14}\mathrm{C}$ steady.`,
          t`After death it decays at a known rate.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.1 (D)" },
      stem: t`Cobalt-60 is used for`,
      verify: { kind: "value", inputs: {  }, params: { q: "cobalt" } },
      options: [
        { key: "A", text: t`treating leukaemia`, correct: false, misconceptionId: "C07-M11", value: "leukaemia" },
        { key: "B", text: t`dating old wood`, correct: false, misconceptionId: "C07-M10", value: "dating" },
        { key: "C", text: t`radiotherapy of cancer`, correct: true, value: "radiotherapy" },
        { key: "D", text: t`studying photosynthesis`, correct: false, misconceptionId: "C07-M12", value: "photosynthesis" },
      ],
      solution: {
        steps: [
          t`$^{60}\mathrm{Co}$ gives strong γ rays.`,
          t`Used in cancer radiotherapy.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`A radioactive tracer is used to`,
      verify: { kind: "value", inputs: {  }, params: { q: "tracer" } },
      options: [
        { key: "A", text: t`kill bacteria`, correct: false, misconceptionId: "C07-M13", value: "kill_bacteria" },
        { key: "B", text: t`slow down reactions`, correct: false, misconceptionId: "C07-M14", value: "slow_reactions" },
        { key: "C", text: t`date rocks, and nothing else`, correct: false, misconceptionId: "C07-M15", value: "date_rocks" },
        { key: "D", text: t`follow the path of an element through a process`, correct: true, value: "follow_path" },
      ],
      solution: {
        steps: [
          t`Its radiation marks where it goes.`,
          t`It follows an element through a process.`,
        ],
      },
    },
  ],
};
