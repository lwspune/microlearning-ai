import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`A grandfather clock ticks once a second, each tick one swing of its pendulum. Why are such pendulums almost always about a metre long?`,
    reveal: t`A pendulum that takes one second per swing has a period of 2 s, and $T = 2\pi\sqrt{\dfrac{L}{g}}$ then gives $L = \dfrac{g}{\pi^2}$, nearly 1 m on the Earth.`,
  },
  explanation: {
    intuition: [
      t`A **second's pendulum** takes exactly one second for each swing from one extreme to the other.`,
      t`So its period, a swing there and back, is $2\ \mathrm{s}$.`,
      t`From $T = 2\pi\sqrt{\dfrac{L}{g}}$ with $T = 2\ \mathrm{s}$: $L = \dfrac{g}{\pi^2}$, about $0.993\ \mathrm{m}$.`,
      t`Its length is proportional to $g$: where gravity is weaker, it must be shorter.`,
      t`A pendulum clock counts one oscillation as $2\ \mathrm{s}$, so a change in length makes it gain or lose time.`,
    ],
    formal: [
      {
        title: "The second's pendulum",
        points: [
          t`A second's pendulum has $T = 2\ \mathrm{s}$: one second per swing.`,
          t`$T = 2\pi\sqrt{\dfrac{L}{g}}$ gives $L = \dfrac{gT^2}{4\pi^2} = \dfrac{g}{\pi^2}$.`,
          t`With $g = 9.8\ \mathrm{m/s^2}$, $L \approx 0.993\ \mathrm{m}$.`,
          t`$L \propto g$: on the Moon, where $g$ is a sixth as large, it is a sixth as long.`,
        ],
      },
      {
        title: "Pendulum clocks",
        points: [
          t`A clock counts each oscillation of its pendulum as $2\ \mathrm{s}$.`,
          t`A shorter pendulum swings faster: the clock counts too many seconds and **gains**.`,
          t`A longer pendulum swings slower: the clock **loses**.`,
          t`$T \propto \sqrt{L}$, so a small change in length changes the period by about half as much, in per cent.`,
        ],
      },
    ],
    worked: {
      prompt: t`A second's pendulum is taken to a place where $g = 9.6\ \mathrm{m/s^2}$. How long must it be there, and how long is it where $g = 9.8\ \mathrm{m/s^2}$?`,
      steps: [
        t`For a second's pendulum, $L = \dfrac{g}{\pi^2}$.`,
        t`Where $g = 9.8$: $L = \dfrac{9.8}{9.870} \approx 0.993\ \mathrm{m}$.`,
        t`Where $g = 9.6$: $L = \dfrac{9.6}{9.870}$.`,
        t`$L \approx 0.973\ \mathrm{m}$: about $2\ \mathrm{cm}$ shorter.`,
      ],
      answer: t`$0.973\ \mathrm{m}$ there, $0.993\ \mathrm{m}$ where $g = 9.8\ \mathrm{m/s^2}$`,
    },
    visualSpec: t`Shorten and lengthen a pendulum clock's rod and watch its hands race ahead of, or fall behind, a true clock.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Takes the length as proportional to $\dfrac{1}{g}$.`,
      remediation: t`At fixed $T$, $L = \dfrac{gT^2}{4\pi^2}$: the length is proportional to $g$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: t`Takes the length as proportional to $g^2$.`,
      remediation: t`$L = \dfrac{gT^2}{4\pi^2}$: $L \propto g$, not $g^2$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M3",
      mistake: t`Takes the length as proportional to $\sqrt{g}$.`,
      remediation: t`It is $T$ that goes as $\sqrt{\dfrac{L}{g}}$; at fixed $T$, $L \propto g$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M4",
      mistake: "Gets the direction of the change wrong.",
      remediation: t`$L \propto g$: where $g$ is larger, the pendulum must be longer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Takes a second's pendulum's period as $1\ \mathrm{s}$.`,
      remediation: t`One second is one swing; the period, there and back, is $2\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Takes the period as proportional to the length.",
      remediation: t`$T \propto \sqrt{L}$: four times the length doubles the period.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M7",
      mistake: "Thinks a longer pendulum swings faster.",
      remediation: t`A longer pendulum has a longer period: $T \propto \sqrt{L}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M8",
      mistake: "Thinks the clock loses time when its pendulum shortens.",
      remediation: "A shorter pendulum swings faster, so the clock counts seconds too quickly and gains.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Counts the extra oscillations instead of the seconds.",
      remediation: t`The clock counts each oscillation as $2\ \mathrm{s}$: multiply the extra oscillations by 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Forgets to square the period.",
      remediation: t`$L = \dfrac{gT^2}{4\pi^2}$, with $T^2 = 4\ \mathrm{s^2}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.1 (iii)" },
      stem: t`A second's pendulum on the Earth is nearly $1\ \mathrm{m}$ long. How long should a second's pendulum be on the Moon, where $g$ is $\dfrac{1}{6}$ of its value on the Earth?`,
      verify: { kind: "value", inputs: { L_e: "1", g_ratio: "1/6" }, params: { ask: "moon" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{36}\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M2", value: "0.0278000000000000" },
        { key: "B", text: t`$\dfrac{1}{\sqrt{6}}\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M3", value: "0.408000000000000" },
        { key: "C", text: t`$\dfrac{1}{6}\ \mathrm{m}$`, correct: true, value: "0.167000000000000" },
        { key: "D", text: t`$6\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M1", value: "6" },
      ],
      solution: {
        steps: [
          t`At fixed $T$, $L \propto g$.`,
          t`$L_{moon} = 1 \times \dfrac{1}{6} = \dfrac{1}{6}\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.15" },
      stem: t`A second's pendulum is moved from a place where $g = 9.75\ \mathrm{m/s^2}$ to one where $g = 9.80\ \mathrm{m/s^2}$. How must its length change for it to stay a second's pendulum?`,
      verify: { kind: "value", inputs: { g1: "9.75", g2: "9.80" }, params: { ask: "dL" } },
      options: [
        { key: "A", text: t`It must increase by about $5.07\ \mathrm{mm}$`, correct: true, value: "5.07000000000000" },
        { key: "B", text: t`It must decrease by about $5.16\ \mathrm{mm}$`, correct: false, misconceptionId: "C09-M1", value: "-5.16000000000000" },
        { key: "C", text: t`It must decrease by about $5.07\ \mathrm{mm}$`, correct: false, misconceptionId: "C09-M4", value: "-5.07000000000000" },
        { key: "D", text: t`It must increase by about $1.27\ \mathrm{mm}$`, correct: false, misconceptionId: "C09-M5", value: "1.27000000000000" },
      ],
      solution: {
        steps: [
          t`$L = \dfrac{g}{\pi^2}$, so $\Delta L = \dfrac{9.80 - 9.75}{\pi^2} = \dfrac{0.05}{9.870}$.`,
          t`$\Delta L \approx 5.07 \times 10^{-3}\ \mathrm{m}$: the length must increase by about $5.07\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.11" },
      stem: t`The second's pendulum of a clock is made four times as long. How many oscillations does it now complete in one minute?`,
      verify: { kind: "value", inputs: { f: "4", t: "60" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$30$`, correct: false, misconceptionId: "C09-M5", value: "30" },
        { key: "B", text: t`$7.5$`, correct: false, misconceptionId: "C09-M6", value: "7.50000000000000" },
        { key: "C", text: t`$60$`, correct: false, misconceptionId: "C09-M7", value: "60" },
        { key: "D", text: t`$15$`, correct: true, value: "15" },
      ],
      solution: {
        steps: [
          t`$T \propto \sqrt{L}$: four times the length gives $T = 2 \times 2 = 4\ \mathrm{s}$.`,
          t`In $60\ \mathrm{s}$ it completes $\dfrac{60}{4} = 15$ oscillations.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.11" },
      stem: t`A pendulum clock keeps correct time in summer, its pendulum beating seconds. In winter the pendulum's length decreases by $1\%$. How much does the clock gain or lose in a day?`,
      verify: { kind: "value", inputs: { pct: "-1", day: "86400" }, params: { ask: "clock" } },
      options: [
        { key: "A", text: t`It gains about $435\ \mathrm{s}$`, correct: true, value: "435" },
        { key: "B", text: t`It gains about $873\ \mathrm{s}$`, correct: false, misconceptionId: "C09-M6", value: "873" },
        { key: "C", text: t`It loses about $435\ \mathrm{s}$`, correct: false, misconceptionId: "C09-M8", value: "-435" },
        { key: "D", text: t`It gains about $218\ \mathrm{s}$`, correct: false, misconceptionId: "C09-M9", value: "218" },
      ],
      solution: {
        steps: [
          t`$T_w = 2\sqrt{0.99} \approx 1.990\ \mathrm{s}$, so in a day it makes $\dfrac{86400}{1.990} \approx 43\,418$ oscillations, not $43\,200$.`,
          t`The extra $218$ oscillations count as $2\ \mathrm{s}$ each: the clock gains about $435\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.30" },
      stem: t`How long is a second's pendulum at a place where $g = 9.8\ \mathrm{m/s^2}$?`,
      verify: { kind: "value", inputs: { g: "9.8" }, params: { ask: "L_sec" } },
      options: [
        { key: "A", text: t`$0.248\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M5", value: "0.248000000000000" },
        { key: "B", text: t`$0.496\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M10", value: "0.496000000000000" },
        { key: "C", text: t`$0.993\ \mathrm{m}$`, correct: true, value: "0.993000000000000" },
        { key: "D", text: t`$1.01\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M1", value: "1.01000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 2\ \mathrm{s}$, so $L = \dfrac{gT^2}{4\pi^2} = \dfrac{g}{\pi^2}$.`,
          t`$L = \dfrac{9.8}{9.870} \approx 0.993\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
