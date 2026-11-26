import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A sensitive galvanometer swings fully at just $100\ \mu\mathrm{A}$, yet the same instrument can be made to measure currents of several amperes. How?`,
    reveal: t`Give the extra current another path: a small resistance, the **shunt**, in parallel. Only a fixed small share passes through the coil, so the scale can be marked in amperes.`,
  },
  explanation: {
    intuition: [
      t`A moving coil **galvanometer** deflects in proportion to the current through it, up to a small full-scale current $I_g$.`,
      t`An **ammeter** goes in series in a circuit, so it must have a low resistance, or it would change the current it measures.`,
      t`A small resistance $S$ joined in parallel, a **shunt**, carries most of the current round the coil.`,
      t`The two branches share the current in a fixed ratio, so the coil's deflection still tells the total.`,
    ],
    formal: [
      {
        title: "The shunt",
        points: [
          t`The galvanometer $G$ and the shunt $S$ are in parallel, so they have the same potential difference.`,
          t`$I_gG = \left(I - I_g\right)S$, where $I$ is the full range of the ammeter.`,
          t`So $S = \dfrac{GI_g}{I - I_g}$.`,
          t`With $n = \dfrac{I}{I_g}$, $S = \dfrac{G}{n - 1}$.`,
        ],
      },
      {
        title: "Sharing the current",
        points: [
          t`The current divides in the inverse ratio of the resistances.`,
          t`The fraction through the galvanometer is $\dfrac{I_g}{I} = \dfrac{S}{S + G}$.`,
          t`The ammeter's resistance is $\dfrac{GS}{G + S}$: less than the shunt alone, so very small.`,
        ],
      },
    ],
    worked: {
      prompt: t`A galvanometer of resistance $50\ \Omega$ gives full-scale deflection at $2\ \mathrm{mA}$. Find the shunt that makes it an ammeter of range $0$ to $1\ \mathrm{A}$.`,
      steps: [
        t`$I_g = 0.002\ \mathrm{A}$ and $I = 1\ \mathrm{A}$, so the shunt carries $0.998\ \mathrm{A}$.`,
        t`$S = \dfrac{GI_g}{I - I_g} = \dfrac{50 \times 0.002}{0.998}$.`,
        t`$S \approx 0.1\ \Omega$, connected in parallel with the galvanometer.`,
      ],
      answer: t`About $0.1\ \Omega$, in parallel`,
    },
    visualSpec: t`Add a shunt beside a galvanometer and watch the current split, most of it bypassing the coil.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Takes $S = \dfrac{GI_g}{I}$, using $I$ for the shunt's current.`,
      remediation: t`The shunt carries only what the coil does not: $I - I_g$. So $S = \dfrac{GI_g}{I - I_g}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: "Turns the current ratio upside down.",
      remediation: t`The shunt carries the larger current, so it must be the smaller resistance: $S = \dfrac{G}{n - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Takes $S = \dfrac{G}{n + 1}$.`,
      remediation: t`The shunt carries $I - I_g = (n - 1)I_g$, so $S = \dfrac{G}{n - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Takes the given percentage as the shunt's share.",
      remediation: t`$20\%$ through the galvanometer leaves $80\%$ for the shunt: $S = \dfrac{0.2 \times 99}{0.8}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Puts a large resistance in series, as for a voltmeter.",
      remediation: "An ammeter must have a low resistance: a small shunt in parallel.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Puts the small resistance in series.",
      remediation: "In series the whole current would still flow through the coil; in parallel the shunt bypasses most of it.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Puts a large resistance in parallel.",
      remediation: "A large parallel resistance would carry little current; the coil would still take almost all of it.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Gives the galvanometer the larger share of the current.",
      remediation: t`More current takes the easier path: the fraction through $G$ is $\dfrac{S}{S + G}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: t`Takes the fraction through the galvanometer as $\dfrac{S}{G}$.`,
      remediation: t`That is the ratio of the two currents, $\dfrac{I_g}{I_S}$; the fraction of the total is $\dfrac{S}{S + G}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Splits the current equally between the branches.",
      remediation: "Parallel branches share current in the inverse ratio of their resistances, not equally.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M11",
      mistake: "Adds the shunt and the galvanometer as if in series.",
      remediation: t`The shunt is in parallel: $\dfrac{GS}{G + S}$, smaller than either.`,
      fallback: { kind: "ext", topic: "resistors in series and parallel (Std XI Physics)" },
    },
    {
      id: "C09-M12",
      mistake: "Takes the galvanometer's resistance as the ammeter's.",
      remediation: t`The shunt across the coil lowers the total: $\dfrac{GS}{G + S}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Takes the shunt alone as the ammeter's resistance.",
      remediation: t`The coil is still in parallel with it, so the total is a little less than $S$: $\dfrac{GS}{G + S}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Solved Ex.9.7" },
      stem: t`A galvanometer of resistance $100\ \Omega$ gives full-scale deflection at $100\ \mu\mathrm{A}$. What shunt makes it an ammeter of range $0$ to $10\ \mathrm{mA}$?`,
      verify: { kind: "value", inputs: { G: "100", Ig_uA: "100", I_mA: "10" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$9900\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M2", value: "9900" },
        { key: "B", text: t`$0.99\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M3", value: "0.990000000000000" },
        { key: "C", text: t`$1.01\ \mathrm{\Omega}$`, correct: true, value: "1.01000000000000" },
        { key: "D", text: t`$1\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{I}{I_g} = \dfrac{10\ \mathrm{mA}}{0.1\ \mathrm{mA}} = 100$.`,
          t`$S = \dfrac{G}{n - 1} = \dfrac{100}{99} \approx 1.01\ \Omega$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Solved Ex.9.8" },
      stem: t`What shunt resistance lets $20\%$ of the main current pass through a galvanometer of resistance $99\ \Omega$?`,
      verify: { kind: "value", inputs: { G: "99", pct: "20" }, params: { ask: "percent", sf: "4" } },
      options: [
        { key: "A", text: t`$24.75\ \mathrm{\Omega}$`, correct: true, value: "24.7500000000000" },
        { key: "B", text: t`$396\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M4", value: "396" },
        { key: "C", text: t`$19.8\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M1", value: "19.8000000000000" },
        { key: "D", text: t`$16.5\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M3", value: "16.5000000000000" },
      ],
      solution: {
        steps: [
          t`$I_g = 0.2I$, so the shunt carries $0.8I$.`,
          t`$S = \dfrac{I_gG}{I - I_g} = \dfrac{0.2 \times 99}{0.8} = 24.75\ \Omega$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(v)" },
      stem: t`To convert a moving coil galvanometer into an ammeter, what must be connected to it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "connect" } },
      options: [
        { key: "A", text: t`A large resistance in series with it`, correct: false, misconceptionId: "C09-M5", value: "large_series" },
        { key: "B", text: t`A small resistance in series with it`, correct: false, misconceptionId: "C09-M6", value: "small_series" },
        { key: "C", text: t`A large resistance in parallel with it`, correct: false, misconceptionId: "C09-M7", value: "large_parallel" },
        { key: "D", text: t`A small resistance in parallel with it`, correct: true, value: "small_parallel" },
      ],
      solution: {
        steps: [
          t`An ammeter goes in series, so its resistance must be low, and most current must bypass the coil.`,
          t`Both are achieved by a small resistance, the shunt, in parallel with the galvanometer.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`A galvanometer of resistance $90\ \Omega$ has a shunt of $10\ \Omega$ across it. What fraction of the main current passes through the galvanometer?`,
      verify: { kind: "value", inputs: { G: "90", S: "10" }, params: { ask: "fraction" } },
      options: [
        { key: "A", text: t`$0.1$`, correct: true, value: "0.100000000000000" },
        { key: "B", text: t`$0.9$`, correct: false, misconceptionId: "C09-M8", value: "0.900000000000000" },
        { key: "C", text: t`$0.111$`, correct: false, misconceptionId: "C09-M9", value: "0.111000000000000" },
        { key: "D", text: t`$0.5$`, correct: false, misconceptionId: "C09-M10", value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`Parallel branches share the current in the inverse ratio of their resistances.`,
          t`Fraction through $G$: $\dfrac{S}{S + G} = \dfrac{10}{100} = 0.1$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`An ammeter is made by putting a shunt of $0.1\ \Omega$ across a galvanometer of resistance $99.9\ \Omega$. What is the resistance of the ammeter?`,
      verify: { kind: "value", inputs: { G: "99.9", S: "0.1" }, params: { ask: "meter" } },
      options: [
        { key: "A", text: t`$99.9\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M12", value: "99.9000000000000" },
        { key: "B", text: t`$0.1\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M13", value: "0.100000000000000" },
        { key: "C", text: t`$0.0999\ \mathrm{\Omega}$`, correct: true, value: "0.0999000000000000" },
        { key: "D", text: t`$100\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C09-M11", value: "100" },
      ],
      solution: {
        steps: [
          t`The shunt and the coil are in parallel: $R = \dfrac{GS}{G + S} = \dfrac{99.9 \times 0.1}{100}$.`,
          t`$R \approx 0.0999\ \Omega$, a little less than the shunt alone.`,
        ],
      },
    },
  ],
};
