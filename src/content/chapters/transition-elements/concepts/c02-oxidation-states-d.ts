import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Sodium is always $+1$ and calcium always $+2$. Yet vanadium forms $\ce{VO}$, $\ce{V2O3}$, $\ce{VO2}$ and $\ce{V2O5}$, with vanadium at $+2$, $+3$, $+4$ and $+5$. Why can a transition metal take so many charges?`,
    reveal: t`Its $4s$ and $3d$ electrons are close in energy, so after the two $4s$ electrons go, $3d$ electrons can follow one at a time. Vanadium, $3d^3\,4s^2$, can give up two, three, four or all five.`,
  },
  explanation: {
    intuition: [
      t`The **oxidation state** of a metal in a compound is the charge it would carry if all bonds were ionic.`,
      t`s-block metals have one fixed state, because removing an inner electron costs far too much.`,
      t`A transition metal's $4s$ and $3d$ electrons are close in energy, so it can lose different numbers of them.`,
      t`So the 3d metals show **variable oxidation states**, usually differing by one.`,
      t`Some states are extra stable: those with an empty ($d^0$), half-filled ($d^5$) or full ($d^{10}$) $3d$ subshell.`,
    ],
    formal: [
      {
        title: "Range of oxidation states",
        points: [
          t`Most 3d metals show $+2$, by losing their two $4s$ electrons.`,
          t`Higher states come from losing $3d$ electrons as well.`,
          t`Up to manganese, the highest state uses every $4s$ and $3d$ electron.`,
          t`So the highest states are Sc $+3$, Ti $+4$, V $+5$, Cr $+6$ and Mn $+7$.`,
          t`Past manganese, paired $3d$ electrons are held firmly: iron gives only its two $4s$ and four unpaired $3d$ electrons, $+6$.`,
          t`Manganese, in the middle, shows the most states: $+2$ to $+7$.`,
        ],
      },
      {
        title: "Extra stable configurations",
        points: [
          t`An ion with an empty $3d^0$ subshell has the argon configuration: $\ce{Sc^3+}$, $\ce{Ti^4+}$.`,
          t`An ion with a half-filled $3d^5$ subshell is extra stable: $\ce{Mn^2+}$, $\ce{Fe^3+}$.`,
          t`An ion with a full $3d^{10}$ subshell is extra stable too: $\ce{Zn^2+}$.`,
          t`So $\ce{Mn^2+}$ ($3d^5$) resists oxidation to $\ce{Mn^3+}$ ($3d^4$).`,
          t`And $\ce{Fe^2+}$ ($3d^6$) is easily oxidised to $\ce{Fe^3+}$ ($3d^5$).`,
        ],
      },
      {
        title: "Highest and most stable differ",
        points: [
          t`The **highest** state is the most electrons the atom can give up.`,
          t`The **most stable** state is the one its compounds settle in most easily.`,
          t`Chromium reaches $+6$ in $\ce{K2Cr2O7}$, but its most stable state is $+3$.`,
          t`Manganese reaches $+7$ in $\ce{KMnO4}$, but its most stable state is $+2$.`,
          t`High states are found mostly in oxides and oxoanions, such as $\ce{CrO4^2-}$ and $\ce{MnO4-}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Titanium has $Z = 22$. What is its highest oxidation state, and why is that state stable?`,
      steps: [
        t`Ti has $22 - 18 = 4$ electrons beyond argon: $[\mathrm{Ar}]\,3d^2\,4s^2$.`,
        t`It can lose its two $4s$ electrons and its two unpaired $3d$ electrons.`,
        t`So the highest state is $+4$.`,
        t`$\ce{Ti^4+}$ is $[\mathrm{Ar}]\,3d^0$, an empty $3d$ subshell, so $+4$ is also its most stable state.`,
      ],
      answer: t`$+4$; $\ce{Ti^4+}$ has the stable argon configuration`,
    },
    visualSpec: t`Slide a 3d metal along the series and peel electrons off one at a time, 4s first, lighting up each state it reaches and glowing when the 3d box is empty, half-full or full.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Thinks only the $4s$ electrons can be lost, so $+2$ (or $+1$ for Cr) is as high as a 3d metal goes.`,
      remediation: t`After the $4s$ electrons, $3d$ electrons can be lost too, since the two subshells are close in energy. That gives states such as $+3$ to $+7$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Counts every $3d$ electron, paired or not, so iron would reach $+8$.`,
      remediation: t`Past manganese the $3d$ electrons pair up and are held more firmly. The highest state counts the $4s$ electrons and only the unpaired $3d$ electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Takes the highest oxidation state to be the most stable one, and the most stable to be the highest.",
      remediation: t`They are different ideas. The highest state uses every electron the atom can give; the most stable is usually the one with $d^0$, $d^5$ or $d^{10}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks the ion with the smaller charge is always the more stable.",
      remediation: t`Stability comes from the $3d$ configuration, not the size of the charge: $\ce{Fe^3+}$ ($3d^5$) is more stable than $\ce{Fe^2+}$ ($3d^6$).`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Removes $3d$ electrons before $4s$ when working out an ion's $3d$ subshell.`,
      remediation: t`An ion always loses its $4s$ electrons first, then $3d$ electrons. Write the ion that way before judging its $3d$ subshell.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M6",
      mistake: t`Forgets the $4s$ electrons and counts only the $3d$ electrons towards the highest state.`,
      remediation: t`The $4s$ electrons are lost first and always count: the highest state adds them to the unpaired $3d$ electrons.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#9" },
      stem: t`Chromium has $Z = 24$. What is the highest oxidation state chromium shows?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "max", Z: "24" } },
      options: [
        { key: "A", text: t`$+1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "B", text: t`$+3$`, correct: false, misconceptionId: "C02-M3", value: "3" },
        { key: "C", text: t`$+6$`, correct: true, value: "6" },
        { key: "D", text: t`$+5$`, correct: false, misconceptionId: "C02-M6", value: "5" },
      ],
      solution: {
        steps: [
          t`Cr is $[\mathrm{Ar}]\,3d^5\,4s^1$: one $4s$ electron and five unpaired $3d$ electrons.`,
          t`It can give up all six, as in $\ce{K2Cr2O7}$ and $\ce{CrO3}$.`,
          t`So the highest state is $+6$, though the most stable is $+3$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#9" },
      stem: t`Iron has $Z = 26$. What is the highest oxidation state iron shows?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "max", Z: "26" } },
      options: [
        { key: "A", text: t`$+6$`, correct: true, value: "6" },
        { key: "B", text: t`$+8$`, correct: false, misconceptionId: "C02-M2", value: "8" },
        { key: "C", text: t`$+3$`, correct: false, misconceptionId: "C02-M3", value: "3" },
        { key: "D", text: t`$+2$`, correct: false, misconceptionId: "C02-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`Fe is $[\mathrm{Ar}]\,3d^6\,4s^2$: two $4s$ electrons, and in $3d$ one pair and four unpaired electrons.`,
          t`The paired $3d$ electrons are held firmly, so iron gives up at most $2 + 4 = 6$ electrons.`,
          t`So the highest state is $+6$; its most stable state is $+3$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#1" },
      stem: t`Manganese ($Z = 25$) forms $\ce{Mn^2+}$ and $\ce{Mn^3+}$. Which ion is more stable, and why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pair", q: "mn" } },
      options: [
        { key: "A", text: t`$\ce{Mn^2+}$, because a smaller charge is always more stable`, correct: false, misconceptionId: "C02-M4", value: "mn2_smaller_charge" },
        { key: "B", text: t`$\ce{Mn^2+}$, because manganese can lose only its two $4s$ electrons`, correct: false, misconceptionId: "C02-M1", value: "mn2_only_4s" },
        { key: "C", text: t`$\ce{Mn^3+}$, because a higher oxidation state is more stable`, correct: false, misconceptionId: "C02-M3", value: "mn3_higher_state" },
        { key: "D", text: t`$\ce{Mn^2+}$, because its $3d^5$ subshell is half-filled`, correct: true, value: "mn2_half_filled" },
      ],
      solution: {
        steps: [
          t`$\ce{Mn^2+}$ is $[\mathrm{Ar}]\,3d^5$ and $\ce{Mn^3+}$ is $[\mathrm{Ar}]\,3d^4$.`,
          t`A half-filled $3d^5$ subshell is extra stable, so $\ce{Mn^2+}$ resists losing a third electron.`,
          t`So $\ce{Mn^2+}$ is the more stable ion, because of its half-filled $3d^5$ subshell.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (iv)" },
      stem: t`Iron has $Z = 26$. Which is the most stable oxidation state of iron?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "stable", Z: "26" } },
      options: [
        { key: "A", text: t`$+1$`, correct: false, misconceptionId: "C02-M5", value: "1" },
        { key: "B", text: t`$+3$`, correct: true, value: "3" },
        { key: "C", text: t`$+6$`, correct: false, misconceptionId: "C02-M3", value: "6" },
        { key: "D", text: t`$+2$`, correct: false, misconceptionId: "C02-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`Fe is $[\mathrm{Ar}]\,3d^6\,4s^2$; its ions lose the $4s$ electrons first.`,
          t`$\ce{Fe^2+}$ is $3d^6$; losing one $3d$ electron more gives $\ce{Fe^3+}$, $3d^5$.`,
          t`The half-filled $3d^5$ subshell is extra stable, so $+3$ is the most stable state.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#5" },
      stem: t`Which of these ions has an extra stable $3d$ configuration? ($Z$: Cr 24, Fe 26, Co 27)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pool", ions: "26:3,27:2,24:3,26:4" } },
      options: [
        { key: "A", text: t`$\ce{Co^2+}$`, correct: false, misconceptionId: "C02-M5", value: "co_2plus" },
        { key: "B", text: t`$\ce{Cr^3+}$`, correct: false, misconceptionId: "C02-M1", value: "cr_3plus" },
        { key: "C", text: t`$\ce{Fe^3+}$`, correct: true, value: "fe_3plus" },
        { key: "D", text: t`$\ce{Fe^4+}$`, correct: false, misconceptionId: "C02-M3", value: "fe_4plus" },
      ],
      solution: {
        steps: [
          t`Take the $4s$ electrons first: $\ce{Fe^3+}$ $3d^5$, $\ce{Co^2+}$ $3d^7$, $\ce{Cr^3+}$ $3d^3$, $\ce{Fe^4+}$ $3d^4$.`,
          t`Only $3d^5$ is half-filled; none is $3d^0$ or $3d^{10}$.`,
          t`So $\ce{Fe^3+}$ has the extra stable configuration.`,
        ],
      },
    },
  ],
};
