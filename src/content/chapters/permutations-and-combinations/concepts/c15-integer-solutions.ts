import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`In how many ways can 10 identical chocolates be shared among 3 children, some possibly getting none? Listing them all would take a while.`,
    reveal: t`Line up 10 stars and 2 bars that split them into 3 groups: choose 2 places of 12 for the bars, $^{12}C_2 = 66$.`,
  },
  explanation: {
    intuition: [
      t`Counting non-negative solutions of $x + y + z = 10$ is the same as sharing 10 identical things among 3 people.`,
      t`Draw the things as stars and the splits between people as bars.`,
      t`Every arrangement of stars and bars is one way to share.`,
      t`So we only choose where the bars go.`,
    ],
    formal: [
      {
        title: "Stars and bars",
        points: [
          t`$x_1 + \dots + x_r = n$ with every $x_i \ge 0$: $^{n+r-1}C_{r-1}$ solutions.`,
          t`With every $x_i \ge 1$: first give each one, leaving $n - r$.`,
          t`So positive solutions number $^{n-1}C_{r-1}$.`,
          t`$n$ identical objects into $r$ distinct boxes counts the same way.`,
        ],
      },
      {
        title: "Lower bounds",
        points: [
          t`For $x \ge a$, put $x = a + x'$ with $x' \ge 0$.`,
          t`Subtract every lower bound from $n$, then count non-negative solutions.`,
          t`Distinct objects into boxes are different: $r^n$ ways.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many positive integer solutions has $a + b + c = 9$?`,
      steps: [
        t`Give each variable 1 first, leaving 6.`,
        t`Non-negative solutions of a sum 6 in 3 parts: $^{8}C_2$.`,
        t`$= 28$`,
      ],
      answer: t`28`,
    },
    visualSpec: t`Stars in a row with movable bars, the count of groups updating as the bars slide.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: "Uses the positive formula.",
      remediation: t`Zero is allowed, so it is $^{n+r-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M2",
      mistake: t`Chooses $r$ places.`,
      remediation: t`$r$ parts need $r - 1$ bars: $^{n+r-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M3",
      mistake: "Arranges the bars.",
      remediation: "The bars are identical: choose their places, don't arrange them.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M4",
      mistake: "Uses the non-negative formula.",
      remediation: t`Each part is at least 1: $^{n-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M5",
      mistake: t`Takes $^nC_r$.`,
      remediation: t`Positive solutions: $^{n-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M6",
      mistake: t`Takes $^{n-1}C_r$.`,
      remediation: t`$r$ parts need $r - 1$ bars.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M7",
      mistake: "Allows empty boxes.",
      remediation: "No box is empty: give each one ball first.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M8",
      mistake: "Treats the balls as distinct.",
      remediation: t`Identical balls: count with stars and bars, not $r^n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M9",
      mistake: t`Takes $^nC_r$.`,
      remediation: t`Each box at least one: $^{n-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M10",
      mistake: "Ignores the bounds.",
      remediation: "Subtract every lower bound from the total first.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M11",
      mistake: "Subtracts one bound.",
      remediation: t`Both $x \ge 2$ and $y \ge 3$ must be removed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M12",
      mistake: "Uses the positive formula.",
      remediation: "After removing the bounds, the rest may be 0.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M13",
      mistake: t`Picks $r^n$.`,
      remediation: t`$r^n$ is for distinct objects; identical ones use stars and bars.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M14",
      mistake: t`Picks $n^r$.`,
      remediation: t`Count arrangements of stars and bars: $^{n+r-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M15",
      mistake: "Picks the positive formula.",
      remediation: t`Some may get none: $^{n+r-1}C_{r-1}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "authored" },
      stem: t`The number of non-negative integer solutions of $x + y + z = 10$ is`,
      verify: { kind: "value", inputs: { n: "10", r: "3" }, params: { q: "nonneg" } },
      options: [
        { key: "A", text: t`$220$`, correct: false, misconceptionId: "C15-M2", value: "220" },
        { key: "B", text: t`$132$`, correct: false, misconceptionId: "C15-M3", value: "132" },
        { key: "C", text: t`$66$`, correct: true, value: "66" },
        { key: "D", text: t`$36$`, correct: false, misconceptionId: "C15-M1", value: "36" },
      ],
      solution: {
        steps: [
          t`$n = 10$, $r = 3$: $^{12}C_2$`,
          t`$= 66$`,
        ],
      },
    },
    {
      id: "C15-Q2",
      source: { kind: "authored" },
      stem: t`The number of positive integer solutions of $x + y + z + w = 12$ is`,
      verify: { kind: "value", inputs: { n: "12", r: "4" }, params: { q: "positive" } },
      options: [
        { key: "A", text: t`$455$`, correct: false, misconceptionId: "C15-M4", value: "455" },
        { key: "B", text: t`$495$`, correct: false, misconceptionId: "C15-M5", value: "495" },
        { key: "C", text: t`$330$`, correct: false, misconceptionId: "C15-M6", value: "330" },
        { key: "D", text: t`$165$`, correct: true, value: "165" },
      ],
      solution: {
        steps: [
          t`$n = 12$, $r = 4$: $^{11}C_3$`,
          t`$= 165$`,
        ],
      },
    },
    {
      id: "C15-Q3",
      source: { kind: "authored" },
      stem: t`In how many ways can 8 identical balls be put into 3 different boxes so that no box is empty?`,
      verify: { kind: "value", inputs: { n: "8", r: "3" }, params: { q: "boxes" } },
      options: [
        { key: "A", text: t`$6561$`, correct: false, misconceptionId: "C15-M8", value: "6561" },
        { key: "B", text: t`$56$`, correct: false, misconceptionId: "C15-M9", value: "56" },
        { key: "C", text: t`$21$`, correct: true, value: "21" },
        { key: "D", text: t`$45$`, correct: false, misconceptionId: "C15-M7", value: "45" },
      ],
      solution: {
        steps: [
          t`One ball in each box first; 5 are left.`,
          t`$^{7}C_2 = 21$`,
        ],
      },
    },
    {
      id: "C15-Q4",
      source: { kind: "authored" },
      stem: t`The number of integer solutions of $x + y + z = 16$ with $x \ge 2$, $y \ge 3$, $z \ge 0$ is`,
      verify: { kind: "value", inputs: { a: "2", b: "3", n: "16" }, params: { q: "bounds" } },
      options: [
        { key: "A", text: t`$120$`, correct: false, misconceptionId: "C15-M11", value: "120" },
        { key: "B", text: t`$45$`, correct: false, misconceptionId: "C15-M12", value: "45" },
        { key: "C", text: t`$78$`, correct: true, value: "78" },
        { key: "D", text: t`$153$`, correct: false, misconceptionId: "C15-M10", value: "153" },
      ],
      solution: {
        steps: [
          t`Remove the bounds: $x' + y' + z = 11$.`,
          t`$^{13}C_2 = 78$`,
        ],
      },
    },
    {
      id: "C15-Q5",
      source: { kind: "authored" },
      stem: t`The number of ways to share $n$ identical sweets among $r$ children, some possibly getting none, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rule" } },
      options: [
        { key: "A", text: t`$n^r$`, correct: false, misconceptionId: "C15-M14", value: "n_power_r" },
        { key: "B", text: t`$^{n-1}C_{r-1}$`, correct: false, misconceptionId: "C15-M15", value: "positive_formula" },
        { key: "C", text: t`$^{n+r-1}C_{r-1}$`, correct: true, value: "stars_and_bars" },
        { key: "D", text: t`$r^n$`, correct: false, misconceptionId: "C15-M13", value: "r_power_n" },
      ],
      solution: {
        steps: [
          t`$n$ stars and $r - 1$ bars.`,
          t`$^{n+r-1}C_{r-1}$ ways.`,
        ],
      },
    },
  ],
};
