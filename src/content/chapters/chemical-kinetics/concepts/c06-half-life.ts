import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A medicine leaves the blood by a first order process. Its level halves every $4$ hours, whether the dose was $100\ \mathrm{mg}$ or $400\ \mathrm{mg}$. How long until a $400\ \mathrm{mg}$ dose falls to $50\ \mathrm{mg}$?`,
    reveal: t`$12$ hours. $400 \to 200 \to 100 \to 50$ is three halvings, and each takes the same $4$ hours, because a first order half life does not depend on how much you start with.`,
  },
  explanation: {
    intuition: [
      t`The **half life** $t_{1/2}$ is the time for half of the reactant to be used up.`,
      t`In a first order reaction the rate is proportional to $[\ce{A}]$, so it slows as $\ce{A}$ is used up.`,
      t`Half as much $\ce{A}$ reacts half as fast, so every halving takes the same time.`,
      t`So $t_{1/2}$ does not depend on the starting concentration.`,
      t`After $n$ half lives, a fraction $\left(\frac{1}{2}\right)^n$ of $\ce{A}$ is left.`,
    ],
    formal: [
      {
        title: "Half life and rate constant",
        points: [
          t`Start from $k = \dfrac{2.303}{t}\log_{10}\dfrac{[\ce{A}]_0}{[\ce{A}]_t}$.`,
          t`At $t = t_{1/2}$, $[\ce{A}]_t = \dfrac{[\ce{A}]_0}{2}$, so the ratio inside the log is $2$.`,
          t`So $k = \dfrac{2.303}{t_{1/2}}\log_{10}2$ $= \dfrac{2.303 \times 0.3010}{t_{1/2}}$.`,
          t`Hence $t_{1/2} = \dfrac{0.693}{k}$ and $k = \dfrac{0.693}{t_{1/2}}$.`,
          t`$[\ce{A}]_0$ has cancelled: $t_{1/2}$ is the same from any start.`,
        ],
      },
      {
        title: "Time for any fraction",
        points: [
          t`If a fraction $f$ of $\ce{A}$ has reacted, the fraction **left** is $1 - f$.`,
          t`So $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{1}{1 - f}$: the log takes the fraction left.`,
          t`Then $t = \dfrac{2.303}{k}\log_{10}\dfrac{1}{1 - f}$.`,
          t`$90\%$ reacted: $t = \dfrac{2.303}{k}\log_{10}10$ $= \dfrac{2.303}{k}$.`,
          t`$99.9\%$ reacted: $t = \dfrac{2.303}{k}\log_{10}1000$, three times as long.`,
        ],
      },
      {
        title: "Counting half lives",
        points: [
          t`After one half life $\frac{1}{2}$ of $\ce{A}$ is left, after two $\frac{1}{4}$, after three $\frac{1}{8}$.`,
          t`After $n$ half lives, $[\ce{A}]_t = \dfrac{[\ce{A}]_0}{2^n}$, where $n = \dfrac{t}{t_{1/2}}$.`,
          t`The concentration keeps halving and never quite reaches zero.`,
          t`A zero order reaction is different: its $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$ grows with the start.`,
          t`Keep $t$ and $t_{1/2}$ in one unit; $k$ is in the inverse of that unit.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a first order reaction $60\%$ of the reactant decomposes in $45$ minutes. Find the half life.`,
      steps: [
        t`$60\%$ reacted leaves $40\%$, so $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{100}{40} = 2.5$.`,
        t`$k = \dfrac{2.303}{45}\log_{10}2.5$ $= \dfrac{2.303 \times 0.3979}{45}$.`,
        t`$k = 0.0204\ \mathrm{min^{-1}}$.`,
        t`$t_{1/2} = \dfrac{0.693}{0.0204}$ $= 34\ \mathrm{min}$.`,
      ],
      answer: t`$t_{1/2} = 34\ \mathrm{min}$`,
    },
    visualSpec: t`Drag the starting concentration up and down: the decay curve stretches, but the half-life marks stay at the same times.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks the reactant is used up at a steady rate, as in a zero order reaction, so the time grows in proportion to the amount reacted and the half life grows with the start.",
      remediation: t`A first order reaction slows as $[\ce{A}]$ falls: each half life removes half of what is left, and $t_{1/2} = \dfrac{0.693}{k}$ does not depend on $[\ce{A}]_0$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M2",
      mistake: "Puts the fraction reacted in the log where the fraction left belongs.",
      remediation: t`The log takes what is left: $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{1}{1 - f}$. For example, $40\%$ reacted leaves $60\%$, so the ratio is $\dfrac{100}{60}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M3",
      mistake: t`Writes $t_{1/2} = \dfrac{2.303}{k}$, using $2.303$ where $0.693$ belongs.`,
      remediation: t`$t_{1/2} = \dfrac{2.303}{k}\log_{10}2$, and $2.303 \times 0.3010 = 0.693$, so $t_{1/2} = \dfrac{0.693}{k}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M4",
      mistake: t`Turns the relation upside down: $k = \dfrac{t_{1/2}}{0.693}$.`,
      remediation: t`$k$ and $t_{1/2}$ are inversely related, $k = \dfrac{0.693}{t_{1/2}}$: a longer half life means a smaller $k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Leaves a time in the unit it was given when the answer asks for another.",
      remediation: t`Convert first: $1\ \mathrm{h} = 60\ \mathrm{min} = 3600\ \mathrm{s}$, and $k$ takes the inverse of the time unit used.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#14" },
      stem: t`The half life of a first order reaction is $6.0\ \mathrm{h}$. Its rate constant, in $\mathrm{s^{-1}}$, is`,
      verify: { kind: "value", inputs: { th: "6.0", conv: "3600" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$1.07 \times 10^{-4}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C06-M3", value: "0.000107000000000000" },
        { key: "B", text: t`$31200\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C06-M4", value: "31200" },
        { key: "C", text: t`$0.115\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C06-M5", value: "0.115000000000000" },
        { key: "D", text: t`$3.21 \times 10^{-5}\ \mathrm{s^{-1}}$`, correct: true, value: "3.21000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$t_{1/2} = 6.0 \times 3600$ $= 21600\ \mathrm{s}$.`,
          t`$k = \dfrac{0.693}{t_{1/2}} = \dfrac{0.693}{21600}$.`,
          t`$k = 3.21 \times 10^{-5}\ \mathrm{s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (vii)" },
      stem: t`A first order reaction takes $40$ minutes for $30\%$ decomposition. Its half life is`,
      verify: { kind: "value", inputs: { f: "3/10", t: "40" }, params: { ask: "th_frac" } },
      options: [
        { key: "A", text: t`$77.7\ \mathrm{min}$`, correct: true, value: "77.7000000000000" },
        { key: "B", text: t`$66.7\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M1", value: "66.7000000000000" },
        { key: "C", text: t`$23\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M2", value: "23" },
        { key: "D", text: t`$258\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M3", value: "258" },
      ],
      solution: {
        steps: [
          t`$30\%$ decomposed leaves $70\%$: $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{100}{70}$.`,
          t`$k = \dfrac{2.303}{40}\log_{10}\dfrac{100}{70}$ $= \dfrac{2.303 \times 0.1549}{40}$ $= 0.00892\ \mathrm{min^{-1}}$.`,
          t`$t_{1/2} = \dfrac{0.693}{0.00892}$ $= 77.7\ \mathrm{min}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (ii)" },
      stem: t`The half life of a first order reaction is $1.5\ \mathrm{h}$. The time, in minutes, for $20\%$ of the reactant to react is`,
      verify: { kind: "value", inputs: { th: "1.5", f: "1/5", conv: "60" }, params: { ask: "t_frac" } },
      options: [
        { key: "A", text: t`$29\ \mathrm{min}$`, correct: true, value: "29" },
        { key: "B", text: t`$36\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M1", value: "36" },
        { key: "C", text: t`$209\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M2", value: "209" },
        { key: "D", text: t`$0.483\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M5", value: "0.483000000000000" },
      ],
      solution: {
        steps: [
          t`$k = \dfrac{0.693}{1.5}$ $= 0.462\ \mathrm{h^{-1}}$.`,
          t`$20\%$ reacted leaves $80\%$: $t = \dfrac{2.303}{0.462}\log_{10}\dfrac{100}{80}$ $= 4.985 \times 0.0969$.`,
          t`$t = 0.483\ \mathrm{h}$ $= 0.483 \times 60$ $= 29\ \mathrm{min}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.1 (vi)" },
      stem: t`In a first order reaction the concentration of the reactant falls from $0.8\ \mathrm{M}$ to $0.2\ \mathrm{M}$ in $12\ \mathrm{h}$. The half life is`,
      verify: { kind: "value", inputs: { c1: "0.8", c2: "0.2", t: "12" }, params: { ask: "th_conc" } },
      options: [
        { key: "A", text: t`$19.9\ \mathrm{h}$`, correct: false, misconceptionId: "C06-M3", value: "19.9000000000000" },
        { key: "B", text: t`$6\ \mathrm{h}$`, correct: true, value: "6" },
        { key: "C", text: t`$8\ \mathrm{h}$`, correct: false, misconceptionId: "C06-M1", value: "8" },
        { key: "D", text: t`$28.9\ \mathrm{h}$`, correct: false, misconceptionId: "C06-M2", value: "28.9000000000000" },
      ],
      solution: {
        steps: [
          t`$0.8\ \mathrm{M} \to 0.4\ \mathrm{M} \to 0.2\ \mathrm{M}$ is two halvings.`,
          t`Each halving takes the same time, so two half lives take $12\ \mathrm{h}$.`,
          t`$t_{1/2} = \dfrac{12}{2}$ $= 6\ \mathrm{h}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.2 (x)" },
      stem: t`A first order reaction has a half life of $10$ minutes when it starts from $0.5\ \mathrm{M}$. Started instead from $1.0\ \mathrm{M}$, the time for the concentration to fall to $0.25\ \mathrm{M}$ is`,
      verify: { kind: "value", inputs: { th: "10", c0: "0.5", c1: "1.0", c2: "0.25" }, params: { ask: "t_conc" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{min}$`, correct: true, value: "20" },
        { key: "B", text: t`$30\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M1", value: "30" },
        { key: "C", text: t`$4.15\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M2", value: "4.15000000000000" },
        { key: "D", text: t`$6.02\ \mathrm{min}$`, correct: false, misconceptionId: "C06-M3", value: "6.02000000000000" },
      ],
      solution: {
        steps: [
          t`A first order half life does not depend on the start: it is $10$ minutes from $1.0\ \mathrm{M}$ too.`,
          t`$1.0\ \mathrm{M} \to 0.5\ \mathrm{M} \to 0.25\ \mathrm{M}$ is two half lives.`,
          t`Time $= 2 \times 10$ $= 20\ \mathrm{min}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#18" },
      stem: t`The half life of a first order reaction is $20$ minutes. The time, in hours, for $99.9\%$ of the reactant to react is`,
      verify: { kind: "value", inputs: { th: "20", f: "999/1000", conv: "1/60" }, params: { ask: "t_frac" } },
      options: [
        { key: "A", text: t`$1\ \mathrm{h}$`, correct: false, misconceptionId: "C06-M3", value: "1" },
        { key: "B", text: t`$199\ \mathrm{h}$`, correct: false, misconceptionId: "C06-M5", value: "199" },
        { key: "C", text: t`$3.32\ \mathrm{h}$`, correct: true, value: "3.32000000000000" },
        { key: "D", text: t`$0.666\ \mathrm{h}$`, correct: false, misconceptionId: "C06-M1", value: "0.666000000000000" },
      ],
      solution: {
        steps: [
          t`$k = \dfrac{0.693}{20}$ $= 0.03465\ \mathrm{min^{-1}}$.`,
          t`$99.9\%$ reacted leaves $0.1\%$: $t = \dfrac{2.303}{0.03465}\log_{10}1000$ $= 66.47 \times 3$.`,
          t`$t = 199.4\ \mathrm{min}$ $= \dfrac{199.4}{60}$ $= 3.32\ \mathrm{h}$.`,
        ],
      },
    },
  ],
};
