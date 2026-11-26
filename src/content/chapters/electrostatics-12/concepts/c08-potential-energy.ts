import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Pushing two like charges together takes work, and they fly apart when released. Where is that work stored while they are held close?`,
    reveal: t`As **electrostatic potential energy** of the pair, $U$ $= \dfrac{q_1q_2}{4\pi\varepsilon_0r}$. Released, it turns into kinetic energy.`,
  },
  explanation: {
    intuition: [
      t`Bringing charges together from far apart against their forces needs work.`,
      t`That work is stored as the **potential energy** of the system of charges.`,
      t`Like charges: positive work goes in, so $U > 0$. Unlike charges attract: $U < 0$.`,
      t`Energy belongs to pairs: with more charges, add the energy of every pair once.`,
    ],
    formal: [
      {
        title: "Two charges",
        points: [
          t`Bring $q_1$ in first: no work, as no field is present yet.`,
          t`Bring $q_2$ to a distance $r$: work $q_2V_1$ $= \dfrac{q_1q_2}{4\pi\varepsilon_0r}$.`,
          t`So $U$ $= \dfrac{q_1q_2}{4\pi\varepsilon_0r}$, keeping the signs of the charges.`,
          t`$r$ is the separation of the charges, and $U$ falls as $\dfrac{1}{r}$, not $\dfrac{1}{r^2}$.`,
        ],
      },
      {
        title: "Several charges",
        points: [
          t`$U$ $= \dfrac{1}{4\pi\varepsilon_0}\sum\dfrac{q_jq_k}{r_{jk}}$, over every pair once.`,
          t`Three charges have three pairs; four charges have six.`,
          t`Use each pair's own separation: the end charges of three in a row are $2r$ apart.`,
        ],
      },
      {
        title: "Work and energy",
        points: [
          t`Work done to assemble the charges from infinity $= U$.`,
          t`Work needed to separate them to infinity $= -U$.`,
          t`So pulling unlike charges apart takes positive work.`,
        ],
      },
    ],
    worked: {
      prompt: t`Charges of $+3\ \mu\mathrm{C}$, $-1\ \mu\mathrm{C}$ and $+2\ \mu\mathrm{C}$ sit at $x = 0$, $10\ \mathrm{cm}$ and $30\ \mathrm{cm}$. Find the potential energy of the system.`,
      steps: [
        t`Pairs: $(3, -1)$ at $0.1\ \mathrm{m}$, $(-1, 2)$ at $0.2\ \mathrm{m}$, $(3, 2)$ at $0.3\ \mathrm{m}$.`,
        t`With $k \times 10^{-12} = 9 \times 10^{-3}$: the pairs give $\dfrac{-3}{0.1} = -30$, $\dfrac{-2}{0.2} = -10$ and $\dfrac{6}{0.3} = 20$.`,
        t`$U = 9 \times 10^{-3} \times \left(-30 - 10 + 20\right)$.`,
        t`$U = -0.18\ \mathrm{J}$.`,
      ],
      answer: t`$-0.18\ \mathrm{J}$`,
    },
    visualSpec: t`Bring charges in from far away one at a time and add up the work for each new pair as it forms.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Uses a coordinate instead of the separation.",
      remediation: t`$r$ is the distance between the charges: $20 - 2 = 18\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Drops the sign of the potential energy.",
      remediation: t`Unlike charges attract, so their potential energy is negative: keep the signs of $q_1$ and $q_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Uses $\dfrac{1}{r^2}$, as in Coulomb's force.`,
      remediation: t`Force falls as $\dfrac{1}{r^2}$, but energy as $\dfrac{1}{r}$: $U$ $= \dfrac{q_1q_2}{4\pi\varepsilon_0r}$.`,
      fallback: { kind: "ext", topic: "Coulomb's law (Std XI Physics)" },
    },
    {
      id: "C08-M4",
      mistake: t`Gives the potential $\dfrac{kq}{r}$, forgetting one charge.`,
      remediation: t`Potential is energy per unit charge; the energy of the pair is $q_2V_1 = \dfrac{kq_1q_2}{r}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M5",
      mistake: "Leaves the distance in cm.",
      remediation: t`With $9 \times 10^9$ in SI units, put $r$ in metres: $30\ \mathrm{cm} = 0.3\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Takes the two end charges as $r$ apart.`,
      remediation: t`Of three equally spaced charges, the end ones are $2r$ apart.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Turns the ratio upside down.",
      remediation: t`From $-2qQ + \dfrac{q^2}{2} = 0$, $Q = \dfrac{q}{4}$, so $Q : q = 1 : 4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Squares the end pair's distance, using $4r$.`,
      remediation: t`Energy goes as $\dfrac{1}{r}$, so the end pair at $2r$ gives $\dfrac{q^2}{2r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Counts only two of the three pairs.",
      remediation: "Three charges make three pairs: AB, BC and CA.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Counts every pair twice.",
      remediation: "Each pair's energy is counted once: three charges give three terms, not six.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: t`Takes the work to separate the charges as $U$ instead of $-U$.`,
      remediation: t`Separating them undoes the assembly: the work needed is $0 - U = -U$, positive for unlike charges.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.10" },
      stem: t`Charges of $5\ \mathrm{nC}$ and $-2\ \mathrm{nC}$ sit at $(2\ \mathrm{cm}, 0, 0)$ and $(20\ \mathrm{cm}, 0, 0)$, with no other field present. What is the electrostatic potential energy of the system? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q1_nC: "5", x1_cm: "2", q2_nC: "-2", x2_cm: "20" }, params: { ask: "pair" } },
      options: [
        { key: "A", text: t`$-5 \times 10^{-7}\ \mathrm{J}$`, correct: true, value: "-5.00000000000000e-7" },
        { key: "B", text: t`$-4.5 \times 10^{-7}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M1", value: "-4.50000000000000e-7" },
        { key: "C", text: t`$5 \times 10^{-7}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M2", value: "5.00000000000000e-7" },
        { key: "D", text: t`$-2.78 \times 10^{-6}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M3", value: "-2.78000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$r = 20 - 2$ $= 18\ \mathrm{cm}$ $= 0.18\ \mathrm{m}$.`,
          t`$U$ $= \dfrac{9 \times 10^9 \times 5 \times 10^{-9} \times \left(-2 \times 10^{-9}\right)}{0.18}$.`,
          t`$U = -5 \times 10^{-7}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.12" },
      stem: t`Two particles, each carrying $3 \times 10^{-5}\ \mathrm{C}$, are brought from infinity to $30\ \mathrm{cm}$ apart. By how much does the electrostatic potential energy increase? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q: "3e-5", r_cm: "30" }, params: { ask: "equal" } },
      options: [
        { key: "A", text: t`$90\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M3", value: "90" },
        { key: "B", text: t`$9 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M4", value: "900000" },
        { key: "C", text: t`$0.27\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M5", value: "0.270000000000000" },
        { key: "D", text: t`$27\ \mathrm{J}$`, correct: true, value: "27" },
      ],
      solution: {
        steps: [
          t`The increase equals the final energy: $U$ $= \dfrac{9 \times 10^9 \times \left(3 \times 10^{-5}\right)^2}{0.3}$.`,
          t`$U = \dfrac{8.1}{0.3}$ $= 27\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.4" },
      stem: t`Charges $-q$, $+Q$ and $-q$ are placed in that order, equally spaced along a straight line. The potential energy of the system is zero. What is $Q : q$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "line3" } },
      options: [
        { key: "A", text: t`$1 : 2$`, correct: false, misconceptionId: "C08-M6", value: "0.500000000000000" },
        { key: "B", text: t`$4 : 1$`, correct: false, misconceptionId: "C08-M7", value: "4" },
        { key: "C", text: t`$1 : 8$`, correct: false, misconceptionId: "C08-M8", value: "0.125000000000000" },
        { key: "D", text: t`$1 : 4$`, correct: true, value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`With spacing $r$: $U \propto \dfrac{-qQ}{r} + \dfrac{-qQ}{r} + \dfrac{q^2}{2r}$.`,
          t`$U = 0$ gives $2Q = \dfrac{q}{2}$, so $Q = \dfrac{q}{4}$: $Q : q = 1 : 4$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Three charges of $1\ \mu\mathrm{C}$ each sit at the corners of an equilateral triangle of side $10\ \mathrm{cm}$. What is the electrostatic potential energy of the system? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q_uC: "1", a_cm: "10" }, params: { ask: "tri" } },
      options: [
        { key: "A", text: t`$0.54\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M10", value: "0.540000000000000" },
        { key: "B", text: t`$2.7\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M3", value: "2.70000000000000" },
        { key: "C", text: t`$0.27\ \mathrm{J}$`, correct: true, value: "0.270000000000000" },
        { key: "D", text: t`$0.18\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M9", value: "0.180000000000000" },
      ],
      solution: {
        steps: [
          t`Three pairs, each $\dfrac{kq^2}{a}$ $= \dfrac{9 \times 10^9 \times 10^{-12}}{0.1}$ $= 0.09\ \mathrm{J}$.`,
          t`$U = 3 \times 0.09$ $= 0.27\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Charges of $+2\ \mu\mathrm{C}$ and $-2\ \mu\mathrm{C}$ are $10\ \mathrm{cm}$ apart. How much work must be done to pull them infinitely far apart? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q_uC: "2", r_cm: "10" }, params: { ask: "apart" } },
      options: [
        { key: "A", text: t`$0.0036\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M5", value: "0.00360000000000000" },
        { key: "B", text: t`$0.36\ \mathrm{J}$`, correct: true, value: "0.360000000000000" },
        { key: "C", text: t`$-0.36\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M11", value: "-0.360000000000000" },
        { key: "D", text: t`$3.6\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M3", value: "3.60000000000000" },
      ],
      solution: {
        steps: [
          t`$U$ $= \dfrac{9 \times 10^9 \times 2 \times 10^{-6} \times \left(-2 \times 10^{-6}\right)}{0.1}$ $= -0.36\ \mathrm{J}$.`,
          t`Work to separate them to infinity $= 0 - U = 0.36\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
