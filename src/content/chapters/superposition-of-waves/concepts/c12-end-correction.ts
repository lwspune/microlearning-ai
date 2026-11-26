import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A $50\ \mathrm{cm}$ closed pipe should sound $\dfrac{340}{4 \times 0.5} = 170\ \mathrm{Hz}$, yet a careful measurement gives about $166\ \mathrm{Hz}$. Where did the missing hertz go?`,
    reveal: t`The air just outside the open end vibrates too, so the antinode forms a little beyond the end. The column acts longer than it is, by the **end correction**.`,
  },
  explanation: {
    intuition: [
      t`At an open end the sound does not stop sharply: the air just outside moves with the air inside.`,
      t`So the antinode forms slightly beyond the open end, not exactly at it.`,
      t`That extra length is the **end correction** $e$; for a pipe of inner diameter $d$, $e = 0.3d$.`,
      t`A closed end needs no correction: the air there cannot move, and the node sits right at the end.`,
    ],
    formal: [
      {
        title: "Corrected lengths",
        points: [
          t`Closed pipe, one open end: effective length $L + e$, and $L + e = \dfrac{\lambda}{4}$ in the fundamental.`,
          t`So $n = \dfrac{v}{4\left(L + e\right)}$.`,
          t`Open pipe, two open ends: effective length $L + 2e$, and $n = \dfrac{v}{2\left(L + 2e\right)}$.`,
          t`With $e = 0.3d$: $L + 0.3d$ for a closed pipe and $L + 0.6d$ for an open one.`,
        ],
      },
      {
        title: "Measuring the end correction",
        points: [
          t`Use one fork, so $\lambda$ is fixed, and find two resonating lengths $L_1 < L_2$.`,
          t`Closed pipe: $L_1 + e = \dfrac{\lambda}{4}$ and $L_2 + e = \dfrac{3\lambda}{4}$.`,
          t`So $L_2 + e = 3\left(L_1 + e\right)$, giving $e = \dfrac{L_2 - 3L_1}{2}$.`,
          t`Open pipe: $L_1 + 2e = \dfrac{\lambda}{2}$ and $L_2 + 2e = \lambda$, giving $e = \dfrac{L_2 - 2L_1}{2}$.`,
          t`With $\lambda$ known from $\dfrac{v}{n}$, one length is enough: closed, $e = \dfrac{\lambda}{4} - L_1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A pipe closed at one end has an inner diameter of $5\ \mathrm{cm}$ and resonates with a $340\ \mathrm{Hz}$ fork in its fundamental. The speed of sound is $340\ \mathrm{m/s}$. How long is the air column?`,
      steps: [
        t`$\lambda = \dfrac{v}{n} = \dfrac{340}{340} = 1\ \mathrm{m}$, so $L + e = \dfrac{\lambda}{4} = 25\ \mathrm{cm}$.`,
        t`$e = 0.3d = 0.3 \times 5 = 1.5\ \mathrm{cm}$.`,
        t`$L = 25 - 1.5 = 23.5\ \mathrm{cm}$.`,
      ],
      answer: t`$23.5\ \mathrm{cm}$`,
    },
    visualSpec: t`Show the displacement envelope spilling just past an open end, and slide the pipe's diameter to change the overshoot.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Leaves out the end correction: takes the antinode exactly at the open end.",
      remediation: t`The antinode forms about $0.3d$ beyond each open end: add $e$ to the length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: "Adds an end correction at the closed end too.",
      remediation: t`The air at a closed end cannot move, so the node is right at the end: a closed pipe takes only one $e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: t`Uses the radius in $e = 0.3d$.`,
      remediation: t`$d$ is the inner diameter: for a $4\ \mathrm{cm}$ pipe, $e = 0.3 \times 4 = 1.2\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Adds the correction only once for an open pipe.",
      remediation: t`An open pipe has two open ends, so its effective length is $L + 2e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Uses the other kind of pipe's formula.",
      remediation: t`Closed: $L + e = \dfrac{\lambda}{4}$. Open: $L + 2e = \dfrac{\lambda}{2}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C12-M6",
      mistake: t`Uses the open pipe's $e = \dfrac{L_2 - 2L_1}{2}$ for a closed pipe.`,
      remediation: t`A closed pipe's first overtone holds $\dfrac{3\lambda}{4}$, so $L_2 + e = 3\left(L_1 + e\right)$ and $e = \dfrac{L_2 - 3L_1}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Forgets to halve.",
      remediation: t`$L_2 + e = 3L_1 + 3e$ gives $2e = L_2 - 3L_1$: divide by 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: "Takes a closed pipe's first overtone as the second harmonic.",
      remediation: t`A closed pipe has only odd harmonics: its first overtone is the third harmonic, $\dfrac{3\lambda}{4}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C12-M9",
      mistake: t`Gives $\dfrac{\lambda}{4}$ instead of the end correction.`,
      remediation: t`$\dfrac{\lambda}{4}$ is the effective length $L + e$; subtract the measured length to get $e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M11",
      mistake: "Thinks the antinode forms inside the pipe.",
      remediation: "The air outside joins in the vibration, so the antinode lies beyond the end and the column acts longer.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "authored" },
      stem: t`A pipe closed at one end is $50\ \mathrm{cm}$ long and has an inner diameter of $4\ \mathrm{cm}$. Taking the end correction as $0.3d$ and the speed of sound as $340\ \mathrm{m/s}$, what is its fundamental frequency?`,
      verify: { kind: "value", inputs: { L_cm: "50", d_cm: "4", v: "340" }, params: { ask: "n_closed" } },
      options: [
        { key: "A", text: t`$170\ \mathrm{Hz}$`, correct: false, misconceptionId: "C12-M1", value: "170" },
        { key: "B", text: t`$162\ \mathrm{Hz}$`, correct: false, misconceptionId: "C12-M2", value: "162" },
        { key: "C", text: t`$168\ \mathrm{Hz}$`, correct: false, misconceptionId: "C12-M3", value: "168" },
        { key: "D", text: t`$166\ \mathrm{Hz}$`, correct: true, value: "166" },
      ],
      solution: {
        steps: [
          t`$e = 0.3d = 1.2\ \mathrm{cm}$, so $L + e = 51.2\ \mathrm{cm} = 0.512\ \mathrm{m}$.`,
          t`$n = \dfrac{v}{4\left(L + e\right)} = \dfrac{340}{4 \times 0.512} \approx 166\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "authored" },
      stem: t`A pipe open at both ends is $60\ \mathrm{cm}$ long and has an inner diameter of $4\ \mathrm{cm}$. Taking the end correction as $0.3d$ and the speed of sound as $330\ \mathrm{m/s}$, what is its fundamental frequency?`,
      verify: { kind: "value", inputs: { L_cm: "60", d_cm: "4", v: "330" }, params: { ask: "n_open" } },
      options: [
        { key: "A", text: t`$135\ \mathrm{Hz}$`, correct: false, misconceptionId: "C12-M5", value: "135" },
        { key: "B", text: t`$264\ \mathrm{Hz}$`, correct: true, value: "264" },
        { key: "C", text: t`$275\ \mathrm{Hz}$`, correct: false, misconceptionId: "C12-M1", value: "275" },
        { key: "D", text: t`$270\ \mathrm{Hz}$`, correct: false, misconceptionId: "C12-M4", value: "270" },
      ],
      solution: {
        steps: [
          t`$e = 0.3d = 1.2\ \mathrm{cm}$, so $L + 2e = 62.4\ \mathrm{cm} = 0.624\ \mathrm{m}$.`,
          t`$n = \dfrac{v}{2\left(L + 2e\right)} = \dfrac{330}{2 \times 0.624} \approx 264\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.20" },
      stem: t`With one tuning fork, an air column closed at one end resonates in its fundamental mode at a length of $16\ \mathrm{cm}$ and in its first overtone at $50\ \mathrm{cm}$. What is the end correction?`,
      verify: { kind: "value", inputs: { L1_cm: "16", L2_cm: "50" }, params: { ask: "e_two" } },
      options: [
        { key: "A", text: t`$18\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M8", value: "18" },
        { key: "B", text: t`$1\ \mathrm{cm}$`, correct: true, value: "1" },
        { key: "C", text: t`$9\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M6", value: "9" },
        { key: "D", text: t`$2\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M7", value: "2" },
      ],
      solution: {
        steps: [
          t`Closed pipe: $L_1 + e = \dfrac{\lambda}{4}$ and $L_2 + e = \dfrac{3\lambda}{4}$, so $L_2 + e = 3\left(L_1 + e\right)$.`,
          t`$e = \dfrac{L_2 - 3L_1}{2} = \dfrac{50 - 48}{2} = 1\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`An air column closed at one end first resonates with a $512\ \mathrm{Hz}$ fork when it is $15.5\ \mathrm{cm}$ long. The speed of sound is $336\ \mathrm{m/s}$. What is the end correction?`,
      verify: { kind: "value", inputs: { L_cm: "15.5", n: "512", v: "336" }, params: { ask: "e_one" } },
      options: [
        { key: "A", text: t`$16.4\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M9", value: "16.4000000000000" },
        { key: "B", text: t`$0.906\ \mathrm{cm}$`, correct: true, value: "0.906000000000000" },
        { key: "C", text: t`$0.453\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M2", value: "0.453000000000000" },
        { key: "D", text: t`$8.66\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M5", value: "8.66000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{336}{512} = 0.65625\ \mathrm{m}$, so $L + e = \dfrac{\lambda}{4} \approx 16.41\ \mathrm{cm}$.`,
          t`$e = 16.41 - 15.5 \approx 0.906\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.20" },
      stem: t`In a pipe closed at one end, where does the antinode near the open end form?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "where" } },
      options: [
        { key: "A", text: t`Just inside the open end, about $0.3d$ within it`, correct: false, misconceptionId: "C12-M11", value: "inside" },
        { key: "B", text: t`Just outside the open end, and another correction applies at the closed end`, correct: false, misconceptionId: "C12-M2", value: "both_ends" },
        { key: "C", text: t`Just outside the open end, about $0.3d$ beyond it`, correct: true, value: "outside" },
        { key: "D", text: t`Exactly at the open end`, correct: false, misconceptionId: "C12-M1", value: "at_end" },
      ],
      solution: {
        steps: [
          t`The air just outside the open end vibrates with the air inside.`,
          t`So the antinode forms just beyond the open end, about $0.3d$ out; the closed end needs no correction.`,
        ],
      },
    },
  ],
};
