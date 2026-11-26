import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`$\ce{H3PO2}$, $\ce{H3PO3}$ and $\ce{H3PO4}$ each have three hydrogen atoms, yet sodium hydroxide neutralises one, two and three of them. Why?`,
    reveal: t`Only H bonded to oxygen (P–OH) can leave as $\ce{H+}$; the H bonded directly to phosphorus (P–H) cannot.`,
  },
  explanation: {
    intuition: [
      t`Phosphorus forms several **oxoacids**: acids with P, O and H.`,
      t`In each, P has one P=O and some P–OH and P–H bonds.`,
      t`Only the H of a P–OH group is acidic.`,
      t`So an acid's **basicity**, the number of $\ce{H+}$ it gives, counts its P–OH groups.`,
      t`P–H bonds instead make the acid a **reducing agent**.`,
    ],
    formal: [
      {
        title: "Basicity",
        points: [
          t`$\ce{H3PO2}$ (hypophosphorous acid, P $+1$): one P–OH, two P–H: monobasic.`,
          t`$\ce{H3PO3}$ (phosphorous acid, P $+3$): two P–OH, one P–H: dibasic.`,
          t`$\ce{H3PO4}$ (orthophosphoric acid, P $+5$): three P–OH: tribasic.`,
          t`$\ce{H4P2O7}$ (pyrophosphoric acid): four P–OH: tetrabasic.`,
        ],
      },
      {
        title: "Reducing power",
        points: [
          t`Acids with P–H bonds reduce: $\ce{H3PO2}$ reduces $\ce{Ag+}$ to silver.`,
          t`$\ce{H3PO4}$ has no P–H bond, so it is not a reducing agent.`,
          t`On heating, $\ce{H3PO3}$ disproportionates:`,
          t`$\ce{4H3PO3 -> 3H3PO4 + PH3}$: P goes to $+5$ and $-3$.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many moles of NaOH neutralise one mole of $\ce{H3PO3}$?`,
      steps: [
        t`$\ce{H3PO3}$ has two P–OH and one P–H.`,
        t`Only the two P–OH hydrogens are acidic.`,
        t`So 2 mol NaOH.`,
      ],
      answer: t`2 mol`,
    },
    visualSpec: t`Ball-and-stick acids where each P–OH hydrogen can be pulled off and each P–H hydrogen cannot.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Counts every H as acidic.",
      remediation: "Only H on oxygen ionises; two of its H are on phosphorus.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M2",
      mistake: "Takes it as dibasic.",
      remediation: t`$\ce{H3PO2}$ has only one P–OH: monobasic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks it is not an acid.",
      remediation: "Its one P–OH hydrogen ionises, so it is a monobasic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Credits a high oxidation state.",
      remediation: "A high oxidation state oxidises; reducing power comes from P–H bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Credits the OH groups.",
      remediation: t`$\ce{H3PO4}$ has the most P–OH and is not reducing; P–H bonds are the cause.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Calls the bonds ionic.",
      remediation: "The bonds are covalent; the P–H bonds give the reducing power.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: t`Copies $\ce{H3PO4}$'s $+5$.`,
      remediation: t`$3(+1) + x + 3(-2) = 0$ gives $x = +3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Gives +1.",
      remediation: t`$+1$ is P in $\ce{H3PO2}$; in $\ce{H3PO3}$ it is $+3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Forgets the hydrogens.",
      remediation: t`Count the three H as $+1$ each: $x = +3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Counts one H per P.",
      remediation: "Count every P–OH: pyrophosphoric acid has four.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: t`Copies $\ce{H3PO4}$'s three.`,
      remediation: t`$\ce{H4P2O7}$ has four P–OH, so it is tetrabasic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Counts the O atoms.",
      remediation: "Basicity counts ionisable H, not oxygen atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Expects plain dehydration.",
      remediation: t`$\ce{H3PO3}$ disproportionates to $\ce{H3PO4}$ and $\ce{PH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Expects H3PO2 and oxygen.",
      remediation: t`P goes up to $+5$ and down to $-3$: $\ce{H3PO4}$ and $\ce{PH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Expects phosphorus and water.",
      remediation: t`It disproportionates to $\ce{H3PO4}$ and $\ce{PH3}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`Hypophosphorous acid, $\ce{H3PO2}$, has one P–OH group and two P–H bonds. Its basicity is`,
      verify: { kind: "value", inputs: {  }, params: { q: "h3po2" } },
      options: [
        { key: "A", text: t`1 (monobasic)`, correct: true, value: "monobasic" },
        { key: "B", text: t`3 (tribasic)`, correct: false, misconceptionId: "C08-M1", value: "tribasic" },
        { key: "C", text: t`2 (dibasic)`, correct: false, misconceptionId: "C08-M2", value: "dibasic" },
        { key: "D", text: t`0: it is not an acid`, correct: false, misconceptionId: "C08-M3", value: "not_acidic" },
      ],
      solution: {
        steps: [
          t`Only P–OH hydrogens ionise.`,
          t`$\ce{H3PO2}$ has one: monobasic.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`$\ce{H3PO2}$ and $\ce{H3PO3}$ are good reducing agents, but $\ce{H3PO4}$ is not, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "reducing" } },
      options: [
        { key: "A", text: t`phosphorus is in a high oxidation state in them`, correct: false, misconceptionId: "C08-M4", value: "high_state" },
        { key: "B", text: t`they have more P–OH groups`, correct: false, misconceptionId: "C08-M5", value: "many_oh" },
        { key: "C", text: t`their bonds are ionic`, correct: false, misconceptionId: "C08-M6", value: "ionic_bonds" },
        { key: "D", text: t`they have P–H bonds`, correct: true, value: "p_h_bonds" },
      ],
      solution: {
        steps: [
          t`$\ce{H3PO2}$ and $\ce{H3PO3}$ have P–H bonds; $\ce{H3PO4}$ has none.`,
          t`P–H bonds make them reducing agents.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`The oxidation state of phosphorus in phosphorous acid, $\ce{H3PO3}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ox" } },
      options: [
        { key: "A", text: t`$+5$`, correct: false, misconceptionId: "C08-M7", value: "ox_plus_five" },
        { key: "B", text: t`$+1$`, correct: false, misconceptionId: "C08-M8", value: "ox_plus_one" },
        { key: "C", text: t`$+6$`, correct: false, misconceptionId: "C08-M9", value: "ox_plus_six" },
        { key: "D", text: t`$+3$`, correct: true, value: "ox_plus_three" },
      ],
      solution: {
        steps: [
          t`$3(+1) + x + 3(-2) = 0$`,
          t`$x = +3$`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Pyrophosphoric acid, $\ce{H4P2O7}$, has all four H on oxygen. Its basicity is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pyro" } },
      options: [
        { key: "A", text: t`3`, correct: false, misconceptionId: "C08-M11", value: "basicity_three" },
        { key: "B", text: t`7`, correct: false, misconceptionId: "C08-M12", value: "basicity_seven" },
        { key: "C", text: t`4`, correct: true, value: "basicity_four" },
        { key: "D", text: t`2`, correct: false, misconceptionId: "C08-M10", value: "basicity_two" },
      ],
      solution: {
        steps: [
          t`All four H are on oxygen.`,
          t`Basicity 4: tetrabasic.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`On heating, phosphorous acid, $\ce{H3PO3}$, gives`,
      verify: { kind: "value", inputs: {  }, params: { q: "heat" } },
      options: [
        { key: "A", text: t`phosphorus and water`, correct: false, misconceptionId: "C08-M15", value: "p4_and_water" },
        { key: "B", text: t`$\ce{H3PO4}$ and $\ce{PH3}$`, correct: true, value: "h3po4_and_ph3" },
        { key: "C", text: t`$\ce{P4O6}$ and water`, correct: false, misconceptionId: "C08-M13", value: "p4o6_and_water" },
        { key: "D", text: t`$\ce{H3PO2}$ and oxygen`, correct: false, misconceptionId: "C08-M14", value: "h3po2_and_oxygen" },
      ],
      solution: {
        steps: [
          t`$\ce{4H3PO3 -> 3H3PO4 + PH3}$`,
          t`$\ce{H3PO4}$ and $\ce{PH3}$.`,
        ],
      },
    },
  ],
};
