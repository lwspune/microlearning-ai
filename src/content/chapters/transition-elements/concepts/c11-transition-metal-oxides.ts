import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`MnO dissolves in acids like any metal oxide, but $\ce{Mn2O7}$ dissolves in water to give a strong acid. Both are oxides of manganese. What decides?`,
    reveal: t`The oxidation state: Mn $+2$ gives a basic, ionic oxide; Mn $+7$ gives an acidic, covalent one.`,
  },
  explanation: {
    intuition: [
      t`Transition metals form oxides in several oxidation states.`,
      t`In a low state, the oxide is ionic and **basic**: it reacts with acids.`,
      t`In a high state, the metal pulls hard on oxygen's electrons.`,
      t`So the oxide is covalent and **acidic**: it reacts with bases.`,
      t`In between, an oxide can be **amphoteric**, reacting with both.`,
    ],
    formal: [
      {
        title: "Manganese and chromium",
        points: [
          t`MnO ($+2$): basic. $\ce{Mn2O7}$ ($+7$): acidic, giving $\ce{HMnO4}$.`,
          t`CrO ($+2$): basic. $\ce{Cr2O3}$ ($+3$): amphoteric.`,
          t`$\ce{CrO3}$ ($+6$): acidic, giving chromic acid, $\ce{H2CrO4}$.`,
          t`$\ce{V2O5}$ ($+5$): amphoteric, though mainly acidic.`,
        ],
      },
      {
        title: "The trend",
        points: [
          t`Higher oxidation state: smaller, more highly charged metal ion.`,
          t`It polarises oxygen strongly, so the bond is more covalent.`,
          t`So acidity rises with the oxidation state of the metal.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange VO, $\ce{V2O3}$ and $\ce{V2O5}$ by increasing acidity.`,
      steps: [
        t`Vanadium is $+2$, $+3$ and $+5$ in them.`,
        t`Acidity rises with oxidation state.`,
      ],
      answer: t`VO $<$ $\ce{V2O3}$ $<$ $\ce{V2O5}$`,
    },
    visualSpec: t`A slider for manganese's oxidation state that turns its oxide from basic, through amphoteric, to acidic.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Calls every metal oxide basic.",
      remediation: t`In a high state like $+7$, a metal's oxide is acidic.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C11-M2",
      mistake: t`Calls $\ce{Mn2O7}$ amphoteric.`,
      remediation: t`At $+7$ the oxide is acidic: it gives $\ce{HMnO4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Calls it neutral.",
      remediation: t`$\ce{Mn2O7}$ dissolves to give an acid: acidic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Copies Mn2O7's acidity.",
      remediation: t`At $+2$ manganese's oxide is basic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Calls MnO amphoteric.",
      remediation: "Low states give basic oxides: MnO is basic.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Calls MnO neutral.",
      remediation: "MnO reacts with acids: basic.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: t`Calls $\ce{Cr2O3}$ basic.`,
      remediation: "It dissolves in alkalis too: amphoteric.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: t`Calls $\ce{Cr2O3}$ acidic.`,
      remediation: "It dissolves in acids too: amphoteric.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: t`Calls $\ce{Cr2O3}$ neutral.`,
      remediation: "A neutral oxide reacts with neither; this reacts with both.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Reverses the trend.",
      remediation: "Higher oxidation states give more acidic oxides.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Expects more ionic bonds.",
      remediation: "A highly charged ion polarises oxygen, making the bond covalent.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Expects no trend.",
      remediation: "Acidity rises steadily with the oxidation state.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: t`Calls $\ce{CrO3}$ basic.`,
      remediation: t`At $+6$ chromium's oxide is acidic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: t`Calls $\ce{CrO3}$ amphoteric.`,
      remediation: t`$\ce{Cr2O3}$ is the amphoteric one; $\ce{CrO3}$ is acidic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: t`Calls $\ce{CrO3}$ neutral.`,
      remediation: "It gives chromic acid in water: acidic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`Manganese(VII) oxide, $\ce{Mn2O7}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mn2o7" } },
      options: [
        { key: "A", text: t`acidic`, correct: true, value: "acidic" },
        { key: "B", text: t`basic`, correct: false, misconceptionId: "C11-M1", value: "basic" },
        { key: "C", text: t`amphoteric`, correct: false, misconceptionId: "C11-M2", value: "amphoteric" },
        { key: "D", text: t`neutral`, correct: false, misconceptionId: "C11-M3", value: "neutral" },
      ],
      solution: {
        steps: [
          t`Mn is $+7$, its highest state.`,
          t`The oxide is acidic, giving $\ce{HMnO4}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`Manganese(II) oxide, MnO, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mno" } },
      options: [
        { key: "A", text: t`amphoteric`, correct: false, misconceptionId: "C11-M5", value: "amphoteric" },
        { key: "B", text: t`neutral`, correct: false, misconceptionId: "C11-M6", value: "neutral" },
        { key: "C", text: t`basic`, correct: true, value: "basic" },
        { key: "D", text: t`acidic`, correct: false, misconceptionId: "C11-M4", value: "acidic" },
      ],
      solution: {
        steps: [
          t`Mn is $+2$, a low state.`,
          t`The oxide is basic.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`Chromium(III) oxide, $\ce{Cr2O3}$, dissolves in both acids and alkalis. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cr2o3" } },
      options: [
        { key: "A", text: t`basic`, correct: false, misconceptionId: "C11-M7", value: "basic" },
        { key: "B", text: t`acidic`, correct: false, misconceptionId: "C11-M8", value: "acidic" },
        { key: "C", text: t`neutral`, correct: false, misconceptionId: "C11-M9", value: "neutral" },
        { key: "D", text: t`amphoteric`, correct: true, value: "amphoteric" },
      ],
      solution: {
        steps: [
          t`It reacts with both acids and alkalis.`,
          t`Amphoteric.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`As the oxidation state of a transition metal in its oxides rises, the oxides become`,
      verify: { kind: "value", inputs: {  }, params: { q: "trend" } },
      options: [
        { key: "A", text: t`more ionic`, correct: false, misconceptionId: "C11-M11", value: "more_ionic" },
        { key: "B", text: t`neither more acidic nor more basic`, correct: false, misconceptionId: "C11-M12", value: "no_trend" },
        { key: "C", text: t`more acidic and more covalent`, correct: true, value: "more_acidic" },
        { key: "D", text: t`more basic`, correct: false, misconceptionId: "C11-M10", value: "more_basic" },
      ],
      solution: {
        steps: [
          t`A higher charge polarises oxygen more.`,
          t`The oxide grows more covalent and acidic.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`Chromium(VI) oxide, $\ce{CrO3}$, dissolves in water to give chromic acid. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cro3" } },
      options: [
        { key: "A", text: t`basic`, correct: false, misconceptionId: "C11-M13", value: "basic" },
        { key: "B", text: t`amphoteric`, correct: false, misconceptionId: "C11-M14", value: "amphoteric" },
        { key: "C", text: t`neutral`, correct: false, misconceptionId: "C11-M15", value: "neutral" },
        { key: "D", text: t`acidic`, correct: true, value: "acidic" },
      ],
      solution: {
        steps: [
          t`Cr is $+6$, a high state.`,
          t`The oxide is acidic, giving $\ce{H2CrO4}$.`,
        ],
      },
    },
  ],
};
