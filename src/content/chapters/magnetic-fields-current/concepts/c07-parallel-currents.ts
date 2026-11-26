import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Two wires carrying currents in the same direction pull towards each other, though neither carries any net charge. What pulls them?`,
    reveal: t`Each wire sits in the other's magnetic field, and a current in a magnetic field feels a force. For parallel currents it points towards the other wire: $\dfrac{F}{l} = \dfrac{\mu_0I_1I_2}{2\pi d}$.`,
  },
  explanation: {
    intuition: [
      t`A long straight current makes a magnetic field in circles round it.`,
      t`A second parallel wire sits in that field, at right angles to it.`,
      t`So the second wire, carrying its own current, feels a force $BIl$.`,
      t`Currents in the same direction attract; in opposite directions they repel.`,
    ],
    formal: [
      {
        title: "The force per metre",
        points: [
          t`Wire 1's field at wire 2, a distance $d$ away: $B_1 = \dfrac{\mu_0I_1}{2\pi d}$.`,
          t`Force on a length $l$ of wire 2: $F = B_1I_2l$.`,
          t`So $\dfrac{F}{l} = \dfrac{\mu_0I_1I_2}{2\pi d}$, the same on both wires, by Newton's third law.`,
          t`$\dfrac{\mu_0}{2\pi} = 2 \times 10^{-7}\ \mathrm{T\,m/A}$.`,
        ],
      },
      {
        title: "Direction and the ampere",
        points: [
          t`Like currents attract; unlike currents repel.`,
          t`One **ampere**: the current that, in two long parallel wires $1\ \mathrm{m}$ apart in vacuum, gives each $2 \times 10^{-7}\ \mathrm{N}$ per metre.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two long parallel wires $5\ \mathrm{cm}$ apart carry $20\ \mathrm{A}$ and $15\ \mathrm{A}$ in the same direction. Find the force on $2\ \mathrm{m}$ of either wire, and its direction.`,
      steps: [
        t`$\dfrac{F}{l} = \dfrac{\mu_0I_1I_2}{2\pi d}$ $= \dfrac{2 \times 10^{-7} \times 20 \times 15}{0.05}$.`,
        t`$\dfrac{F}{l} = 1.2 \times 10^{-3}\ \mathrm{N/m}$.`,
        t`On $2\ \mathrm{m}$: $F = 2.4 \times 10^{-3}\ \mathrm{N}$, attractive, since the currents are in the same direction.`,
      ],
      answer: t`$2.4 \times 10^{-3}\ \mathrm{N}$, attractive`,
    },
    visualSpec: t`Run currents through two parallel wires, flip one, and watch the wires swing together or apart.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Thinks like currents repel.",
      remediation: "Unlike charges attract, but for currents it is the reverse: like currents attract.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Gives the force per metre, forgetting the length.",
      remediation: t`$\dfrac{\mu_0I_1I_2}{2\pi d}$ is per metre; multiply by the length of wire.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Uses $4\pi$ instead of $2\pi$.`,
      remediation: t`A long wire's field is $\dfrac{\mu_0I}{2\pi d}$: the constant is $\dfrac{\mu_0}{2\pi} = 2 \times 10^{-7}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M4",
      mistake: "Leaves the separation in mm or cm.",
      remediation: t`Put $d$ in metres: $8\ \mathrm{mm} = 8 \times 10^{-3}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Forgets the square root.",
      remediation: t`With equal currents, $\dfrac{F}{l} = \dfrac{\mu_0I^2}{2\pi d}$ gives $I^2$; take its square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks current-carrying wires exert no force on each other.",
      remediation: t`A current is moving charge; in the other wire's field it feels a force $BIl$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks the wires twist rather than attract.",
      remediation: "The force on each wire points along the line joining them, straight towards or away from the other.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Takes the ampere's force as $1\ \mathrm{N}$ per metre.`,
      remediation: t`With $1\ \mathrm{A}$ each, $1\ \mathrm{m}$ apart: $\dfrac{\mu_0}{2\pi} = 2 \times 10^{-7}\ \mathrm{N/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Takes it as $\mu_0$ newtons per metre.`,
      remediation: t`The force per metre is $\dfrac{\mu_0}{2\pi} \times \dfrac{1 \times 1}{1} = 2 \times 10^{-7}\ \mathrm{N/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Takes it as $10^{-7}\ \mathrm{N}$ per metre.`,
      remediation: t`$\dfrac{\mu_0}{2\pi} = \dfrac{4\pi \times 10^{-7}}{2\pi} = 2 \times 10^{-7}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Forgets the change in separation.",
      remediation: t`$F \propto \dfrac{I_1I_2}{d}$: doubling a current doubles $F$, doubling $d$ halves it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: t`Takes the force as falling with $\dfrac{1}{d^2}$.`,
      remediation: t`A long wire's field falls as $\dfrac{1}{d}$, so the force does too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Doubles both currents.",
      remediation: t`Only one current was doubled: $F \propto I_1I_2$ doubles, then halves with $d$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.6" },
      stem: t`Two long parallel wires $8\ \mathrm{mm}$ apart carry $10\ \mathrm{A}$ each, in opposite directions. What force acts on a $22\ \mathrm{cm}$ length of one wire? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { I: "10", d_mm: "8", L_cm: "22" }, params: { ask: "force" } },
      options: [
        { key: "A", text: t`$2.75 \times 10^{-4}\ \mathrm{N}$`, correct: false, misconceptionId: "C07-M3", value: "0.000275000000000000" },
        { key: "B", text: t`$5.5 \times 10^{-7}\ \mathrm{N}$`, correct: false, misconceptionId: "C07-M4", value: "5.50000000000000e-7" },
        { key: "C", text: t`$5.5 \times 10^{-4}\ \mathrm{N}$`, correct: true, value: "0.000550000000000000" },
        { key: "D", text: t`$0.0025\ \mathrm{N}$`, correct: false, misconceptionId: "C07-M2", value: "0.00250000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{F}{l} = \dfrac{2 \times 10^{-7} \times 10 \times 10}{8 \times 10^{-3}} = 2.5 \times 10^{-3}\ \mathrm{N/m}$.`,
          t`On $0.22\ \mathrm{m}$: $F = 5.5 \times 10^{-4}\ \mathrm{N}$, repulsive, as the currents are opposite.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.24" },
      stem: t`Two long parallel wires $1.35\ \mathrm{cm}$ apart carry equal currents and feel a force of $4.76 \times 10^{-2}\ \mathrm{N}$ per metre. What is the current? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { f: "0.0476", d_cm: "1.35" }, params: { ask: "current" } },
      options: [
        { key: "A", text: t`$3210\ \mathrm{A}$`, correct: false, misconceptionId: "C07-M5", value: "3210" },
        { key: "B", text: t`$80.2\ \mathrm{A}$`, correct: false, misconceptionId: "C07-M3", value: "80.2000000000000" },
        { key: "C", text: t`$567\ \mathrm{A}$`, correct: false, misconceptionId: "C07-M4", value: "567" },
        { key: "D", text: t`$56.7\ \mathrm{A}$`, correct: true, value: "56.7000000000000" },
      ],
      solution: {
        steps: [
          t`$I^2 = \dfrac{(F/l) \times 2\pi d}{\mu_0} = \dfrac{4.76 \times 10^{-2} \times 1.35 \times 10^{-2}}{2 \times 10^{-7}}$.`,
          t`$I^2 \approx 3213$, so $I \approx 56.7\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`Two long parallel wires carry currents in the same direction. What do they do to each other?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`They twist round each other, with no pull or push`, correct: false, misconceptionId: "C07-M7", value: "twist" },
        { key: "B", text: t`They attract`, correct: true, value: "attract" },
        { key: "C", text: t`They repel`, correct: false, misconceptionId: "C07-M1", value: "repel" },
        { key: "D", text: t`Nothing: a magnetic field acts only on moving charges, not on wires`, correct: false, misconceptionId: "C07-M6", value: "none" },
      ],
      solution: {
        steps: [
          t`Each wire lies in the other's field and carries current, so each feels a force.`,
          t`For currents in the same direction the forces pull the wires together.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`One ampere is the current which, flowing in two infinitely long parallel wires $1\ \mathrm{m}$ apart in vacuum, makes each wire feel what force per metre?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ampere" } },
      options: [
        { key: "A", text: t`$2 \times 10^{-7}\ \mathrm{N/m}$`, correct: true, value: "two_e7" },
        { key: "B", text: t`$1\ \mathrm{N/m}$`, correct: false, misconceptionId: "C07-M8", value: "one" },
        { key: "C", text: t`$4\pi \times 10^{-7}\ \mathrm{N/m}$`, correct: false, misconceptionId: "C07-M9", value: "four_pi_e7" },
        { key: "D", text: t`$10^{-7}\ \mathrm{N/m}$`, correct: false, misconceptionId: "C07-M10", value: "one_e7" },
      ],
      solution: {
        steps: [
          t`$\dfrac{F}{l} = \dfrac{\mu_0I_1I_2}{2\pi d}$ with $1\ \mathrm{A}$, $1\ \mathrm{A}$, $1\ \mathrm{m}$.`,
          t`$\dfrac{F}{l} = \dfrac{4\pi \times 10^{-7}}{2\pi} = 2 \times 10^{-7}\ \mathrm{N/m}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`The current in one of two long parallel wires is doubled, and the distance between them is doubled too. What happens to the force per metre between them?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "scale" } },
      options: [
        { key: "A", text: t`It doubles`, correct: false, misconceptionId: "C07-M11", value: "doubles" },
        { key: "B", text: t`It halves`, correct: false, misconceptionId: "C07-M12", value: "halves" },
        { key: "C", text: t`It becomes four times as large`, correct: false, misconceptionId: "C07-M13", value: "four" },
        { key: "D", text: t`It stays the same`, correct: true, value: "same" },
      ],
      solution: {
        steps: [
          t`$\dfrac{F}{l} \propto \dfrac{I_1I_2}{d}$.`,
          t`One current doubles and $d$ doubles: $\dfrac{2}{2} = 1$, so the force stays the same.`,
        ],
      },
    },
  ],
};
