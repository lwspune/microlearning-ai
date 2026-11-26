import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A metre-long wire, a known resistor, a galvanometer and a sliding contact are enough to measure an unknown resistance to within a fraction of an ohm. How does sliding a contact along a wire do it?`,
    reveal: t`The wire's two parts act as the other two arms of a Wheatstone bridge, with resistances in proportion to their lengths. At the null point $\dfrac{X}{R} = \dfrac{l}{100 - l}$.`,
  },
  explanation: {
    intuition: [
      t`A **metre bridge** is a Wheatstone bridge built on a uniform wire $100\ \mathrm{cm}$ long.`,
      t`An unknown resistance $X$ and a known resistance $R$ sit in the two **gaps** at the ends of the wire.`,
      t`A **jockey**, a sliding contact joined through a galvanometer, divides the wire into two parts.`,
      t`A uniform wire's resistance is proportional to its length, so the two parts play the two remaining arms.`,
      t`At the **null point** the galvanometer shows no deflection: the bridge is balanced.`,
    ],
    formal: [
      {
        title: "Finding the unknown resistance",
        points: [
          t`Let the null point be $l$ cm from the end next to $X$.`,
          t`The balance condition gives $\dfrac{X}{R} = \dfrac{l}{100 - l}$.`,
          t`So $X = R\dfrac{l}{100 - l}$; interchanging $X$ and $R$ and averaging reduces errors.`,
          t`At balance no current crosses the galvanometer: the gaps act in series, in parallel with the wire.`,
        ],
      },
      {
        title: "Keeping the error small",
        points: [
          t`Choose $R$ so the null point lies in the middle third, between about $34$ and $66\ \mathrm{cm}$.`,
          t`Then both lengths are large, so a reading error is the smallest percentage of each.`,
          t`Other errors: end resistances at the copper strips, and a wire that is not quite uniform.`,
        ],
      },
      {
        title: "Kelvin's method",
        points: [
          t`To find a galvanometer's resistance $G$, put the galvanometer itself in one gap.`,
          t`A plain key replaces the galvanometer between the jockey and the junction.`,
          t`At balance the galvanometer's deflection does not change when the jockey touches the wire.`,
          t`Then $\dfrac{G}{R} = \dfrac{l}{100 - l}$, as before.`,
        ],
      },
    ],
    worked: {
      prompt: t`With $X$ in the left gap and $10\ \Omega$ in the right gap, the null point is $60\ \mathrm{cm}$ from the left end. Find $X$, and the new null point if $X$ and $10\ \Omega$ are interchanged.`,
      steps: [
        t`$X = 10 \times \dfrac{60}{40} = 15\ \Omega$.`,
        t`Interchanged, $X$ is in the right gap: $\dfrac{10}{15} = \dfrac{l'}{100 - l'}$.`,
        t`$l' = 40\ \mathrm{cm}$ from the left end.`,
      ],
      answer: t`$X = 15\ \Omega$; the new null point is at $40\ \mathrm{cm}$`,
    },
    visualSpec: t`Slide a jockey along a metre bridge wire and watch the galvanometer needle swing through zero at the null point.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Turns the length ratio upside down.",
      remediation: t`$X$ goes with the length on its own side: $\dfrac{X}{R} = \dfrac{l}{100 - l}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: t`Takes $X = R\dfrac{l}{100}$.`,
      remediation: t`The ratio is of the two parts of the wire, $l$ and $100 - l$, not of $l$ to the whole wire.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Takes $X = R\dfrac{100 - l}{100}$.`,
      remediation: t`Compare the two parts with each other: $\dfrac{X}{R} = \dfrac{l}{100 - l}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Takes the gap's resistance as the whole bangle's.",
      remediation: t`Joined at opposite points, the bangle's two halves, $\dfrac{R}{2}$ each, are in parallel: the gap holds $\dfrac{R}{4}$.`,
      fallback: { kind: "ext", topic: "resistors in series and parallel (Std XI Physics)" },
    },
    {
      id: "C05-M5",
      mistake: "Takes one half of the bangle as the gap's resistance.",
      remediation: t`Both halves join the same two points, so they are in parallel: $\dfrac{R}{4}$, not $\dfrac{R}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Counts only the gap resistances in the cell's circuit.",
      remediation: "The cell drives current through the wire too: the wire is in parallel with the gaps.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Counts only the wire in the cell's circuit.",
      remediation: "The gaps carry current as well; at balance they are in series with each other, in parallel with the wire.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Puts the wire and the gaps all in series.",
      remediation: "The wire and the pair of gaps both join the cell's two ends: they are in parallel.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks the wire is most uniform near its middle.",
      remediation: "The reason is the reading error: near the middle both lengths are large, so the percentage error is least.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks end resistances matter most near the middle.",
      remediation: "End resistances matter least when both lengths are large, which is near the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Thinks the galvanometer is most sensitive near the middle.",
      remediation: "The galvanometer reads only zero at balance; the middle third keeps the length readings accurate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Expects zero deflection in Kelvin's method.",
      remediation: "The galvanometer sits in a gap and always carries current; balance shows as no change in its deflection.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Expects the balance point at the 50 cm mark.",
      remediation: t`Balance comes where $\dfrac{G}{R} = \dfrac{l}{100 - l}$; it is at $50\ \mathrm{cm}$ only if $G = R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks no current leaves the cell at balance.",
      remediation: "At balance only the bridge's middle branch carries no current; the cell still drives current through the arms.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.6(vii)" },
      stem: t`An unknown resistance is in the left gap of a metre bridge and $50\ \Omega$ in the right gap. The null point is $40\ \mathrm{cm}$ from the left end. What is the unknown resistance?`,
      verify: { kind: "value", inputs: { R: "50", l: "40" }, params: { ask: "x" } },
      options: [
        { key: "A", text: t`$30\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M3", value: "30" },
        { key: "B", text: t`$33.3\ \mathrm{\Omega}$`, correct: true, value: "33.3000000000000" },
        { key: "C", text: t`$75\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M1", value: "75" },
        { key: "D", text: t`$20\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M2", value: "20" },
      ],
      solution: {
        steps: [
          t`$X = R\dfrac{l}{100 - l} = 50 \times \dfrac{40}{60}$.`,
          t`$X \approx 33.3\ \Omega$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.1 (vi)" },
      stem: t`Two diametrically opposite points of a gold bangle are joined to the terminals of the left gap of a metre bridge, with $4\ \Omega$ in the right gap. The null point is $20\ \mathrm{cm}$ from the left end. What is the resistance of the whole bangle?`,
      verify: { kind: "value", inputs: { R: "4", l: "20" }, params: { ask: "bangle" } },
      options: [
        { key: "A", text: t`$1\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M4", value: "1" },
        { key: "B", text: t`$2\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M5", value: "2" },
        { key: "C", text: t`$64\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M1", value: "64" },
        { key: "D", text: t`$4\ \mathrm{\Omega}$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`The gap holds $4 \times \dfrac{20}{80} = 1\ \Omega$.`,
          t`The bangle's halves, $\dfrac{R}{2}$ each, are in parallel: $\dfrac{R}{4} = 1$, so $R = 4\ \Omega$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Solved Ex.9.5" },
      stem: t`A metre bridge wire of resistance $1.49\ \Omega$ is joined to a cell of emf $2\ \mathrm{V}$ and negligible internal resistance. The gaps hold $2\ \Omega$ and $3\ \Omega$, and the bridge is balanced. What current flows through the cell?`,
      verify: { kind: "value", inputs: { e: "2", P: "2", Q: "3", W: "1.49" }, params: { ask: "cell" } },
      options: [
        { key: "A", text: t`$1.74\ \mathrm{A}$`, correct: true, value: "1.74000000000000" },
        { key: "B", text: t`$0.4\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M6", value: "0.400000000000000" },
        { key: "C", text: t`$1.34\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M7", value: "1.34000000000000" },
        { key: "D", text: t`$0.308\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M8", value: "0.308000000000000" },
      ],
      solution: {
        steps: [
          t`At balance the gaps are in series, $5\ \Omega$, in parallel with the wire: $\dfrac{5 \times 1.49}{6.49} \approx 1.15\ \Omega$.`,
          t`$I = \dfrac{2}{1.15} \approx 1.74\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.2 (v)" },
      stem: t`In a metre bridge experiment, why is the known resistance chosen so that the null point falls in the middle third of the wire?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "third" } },
      options: [
        { key: "A", text: t`The resistance of the end connections matters most near the middle`, correct: false, misconceptionId: "C05-M10", value: "ends_middle" },
        { key: "B", text: t`The galvanometer is most sensitive when the jockey is near the middle`, correct: false, misconceptionId: "C05-M11", value: "sensitive" },
        { key: "C", text: t`Both lengths are then large, so the same reading error is the smallest percentage of each`, correct: true, value: "least_error" },
        { key: "D", text: t`The wire is most uniform near its middle`, correct: false, misconceptionId: "C05-M9", value: "uniform" },
      ],
      solution: {
        steps: [
          t`Each length is read with the same absolute error.`,
          t`With both lengths large, near the middle, that error is the smallest percentage of each, so $X$ is most accurate.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.8(iii)" },
      stem: t`In Kelvin's method, the galvanometer whose resistance is wanted sits in one gap of a metre bridge. How is the balance point recognised?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "kelvin" } },
      options: [
        { key: "A", text: t`The galvanometer's deflection stays the same whether the jockey touches the wire or not`, correct: true, value: "unchanged" },
        { key: "B", text: t`The galvanometer shows zero deflection`, correct: false, misconceptionId: "C05-M12", value: "zero" },
        { key: "C", text: t`The jockey is exactly at the 50 cm mark`, correct: false, misconceptionId: "C05-M13", value: "fifty" },
        { key: "D", text: t`No current flows from the cell`, correct: false, misconceptionId: "C05-M14", value: "no_cell" },
      ],
      solution: {
        steps: [
          t`The galvanometer is in a gap and always carries current, so it never reads zero.`,
          t`At balance, touching the jockey to the wire leaves its deflection unchanged.`,
        ],
      },
    },
  ],
};
