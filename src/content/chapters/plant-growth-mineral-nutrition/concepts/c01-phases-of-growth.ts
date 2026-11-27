import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`You stop growing taller in your late teens. A banyan tree keeps growing for centuries. What lets a plant go on?`,
    reveal: t`Meristems: patches of cells at the root and shoot tips (and in the stem) that never stop dividing. Plant growth is open.`,
  },
  explanation: {
    intuition: [
      t`Growth is a permanent, irreversible increase in size.`,
      t`Plants keep **meristems** all their lives, so their growth is **open** (indeterminate).`,
      t`Each new cell passes through three phases.`,
    ],
    formal: [
      {
        title: "Phases of growth",
        points: [
          t`**Cell division**: meristem cells divide; growth is slow: the **lag** phase.`,
          t`**Cell enlargement**: cells take in water and enlarge; growth is fastest: the **log** phase.`,
          t`**Cell maturation**: cells take their final form; growth slows and stops: the **stationary** phase.`,
        ],
      },
      {
        title: "The growth curve",
        points: [
          t`Size plotted against time gives an S-shaped **sigmoid** curve.`,
          t`Lag, then log, then stationary.`,
          t`The total time of all three phases is the **grand period of growth**.`,
        ],
      },
    ],
    worked: {
      prompt: t`On a sigmoid curve, where is growth fastest?`,
      steps: [
        t`The steepest part of the curve has the fastest growth.`,
        t`That is the middle, the log phase.`,
      ],
      answer: t`In the log phase (cell enlargement)`,
    },
    visualSpec: t`An S-shaped curve of size against time, with lag, log and stationary parts labelled.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Reverses the order.",
      remediation: "Lag comes first, stationary last.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Swaps lag and log.",
      remediation: "The slow start is lag.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Puts log first.",
      remediation: "The slow start is lag.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says it stops at maturity.",
      remediation: "That is closed growth, as in animals.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says only in light.",
      remediation: "Growth goes on in the dark too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says only in seedlings.",
      remediation: "Meristems stay active all life.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks the log phase alone.",
      remediation: "All three phases count.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks the lag phase alone.",
      remediation: "All three phases count.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks the whole life span.",
      remediation: "It covers the three growth phases only.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks cell division.",
      remediation: "Division is the slow lag phase.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks maturation.",
      remediation: "Maturation is the stationary phase.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says all are equal.",
      remediation: "The log phase is fastest.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says a straight line.",
      remediation: "Growth slows at the start and end.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says bell-shaped.",
      remediation: "Size does not fall again.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says J-shaped.",
      remediation: "Growth levels off at the top.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2024 Q. 1(ix)" },
      stem: t`On the sigmoid growth curve, the slow start (A), the steep middle (B) and the flat top (C) are the`,
      verify: { kind: "value", inputs: {  }, params: { q: "phases" } },
      options: [
        { key: "A", text: t`lag, log and stationary phases`, correct: true, value: "lag_log_stationary" },
        { key: "B", text: t`stationary, log and lag phases`, correct: false, misconceptionId: "C01-M1", value: "stationary_log_lag" },
        { key: "C", text: t`log, lag and stationary phases`, correct: false, misconceptionId: "C01-M2", value: "log_lag_stationary" },
        { key: "D", text: t`log, stationary and lag phases`, correct: false, misconceptionId: "C01-M3", value: "log_stationary_lag" },
      ],
      solution: {
        steps: [
          t`Slow, steep, flat.`,
          t`Lag, log and stationary.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(3)" },
      stem: t`Plant growth is called 'open' because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "open" } },
      options: [
        { key: "A", text: t`goes on throughout the life of the plant`, correct: true, value: "lifelong_growth" },
        { key: "B", text: t`stops once the plant matures`, correct: false, misconceptionId: "C01-M4", value: "stops_at_maturity" },
        { key: "C", text: t`happens only in light`, correct: false, misconceptionId: "C01-M5", value: "only_in_light" },
        { key: "D", text: t`happens only in seedlings`, correct: false, misconceptionId: "C01-M6", value: "only_seedlings" },
      ],
      solution: {
        steps: [
          t`Meristems keep dividing.`,
          t`Growth goes on all life.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(10)" },
      stem: t`The grand period of growth is`,
      verify: { kind: "value", inputs: {  }, params: { q: "grand" } },
      options: [
        { key: "A", text: t`the time of the lag phase alone`, correct: false, misconceptionId: "C01-M8", value: "lag_phase_time" },
        { key: "B", text: t`the whole life span of the plant`, correct: false, misconceptionId: "C01-M9", value: "whole_lifespan" },
        { key: "C", text: t`the total time for the lag, log and stationary phases`, correct: true, value: "all_phases_time" },
        { key: "D", text: t`the time of the log phase alone`, correct: false, misconceptionId: "C01-M7", value: "log_phase_time" },
      ],
      solution: {
        steps: [
          t`Lag + log + stationary.`,
          t`The total time of all phases.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(1)" },
      stem: t`Growth is fastest in the phase of`,
      verify: { kind: "value", inputs: {  }, params: { q: "fastest" } },
      options: [
        { key: "A", text: t`cell enlargement`, correct: true, value: "enlargement_phase" },
        { key: "B", text: t`cell division`, correct: false, misconceptionId: "C01-M10", value: "division_phase" },
        { key: "C", text: t`cell maturation`, correct: false, misconceptionId: "C01-M11", value: "maturation_phase" },
        { key: "D", text: t`all three, equally`, correct: false, misconceptionId: "C01-M12", value: "all_equal" },
      ],
      solution: {
        steps: [
          t`Cells take in water and enlarge.`,
          t`Cell enlargement.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q4(1)" },
      stem: t`Plotting the size of an organ against time over all phases of growth gives a curve that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "shape" } },
      options: [
        { key: "A", text: t`S-shaped (sigmoid)`, correct: true, value: "s_shaped" },
        { key: "B", text: t`a straight line`, correct: false, misconceptionId: "C01-M13", value: "straight_line" },
        { key: "C", text: t`bell-shaped`, correct: false, misconceptionId: "C01-M14", value: "bell_shaped" },
        { key: "D", text: t`J-shaped, rising for ever`, correct: false, misconceptionId: "C01-M15", value: "j_shaped" },
      ],
      solution: {
        steps: [
          t`Slow, fast, then flat.`,
          t`S-shaped (sigmoid).`,
        ],
      },
    },
  ],
};
