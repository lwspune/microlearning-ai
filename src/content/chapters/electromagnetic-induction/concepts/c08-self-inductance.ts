import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Pull the plug of a running vacuum cleaner and you may see a spark jump at the socket. The supply is already cut off. What drives that spark?`,
    reveal: t`The motor's own coil. Its current was collapsing fast, and a changing current changes the coil's own flux, which induces an emf $-L\dfrac{dI}{dt}$ that tries to keep the current flowing.`,
  },
  explanation: {
    intuition: [
      t`A current in a coil sets up a magnetic flux through the coil's own turns.`,
      t`Change the current and that flux changes, so an emf is induced in the same coil: **self-induction**.`,
      t`By Lenz's law this emf opposes the change: it fights a rising current and props up a falling one.`,
      t`The coil's **self-inductance** $L$ measures how strongly it opposes changes of its current.`,
    ],
    formal: [
      {
        title: "Self-inductance",
        points: [
          t`The flux linkage is proportional to the current: $N\Phi = LI$.`,
          t`So $L = \dfrac{N\Phi}{I}$, the flux linkage per unit current.`,
          t`Unit: the **henry**, $1\ \mathrm{H} = 1\ \mathrm{Wb/A}$ $= 1\ \mathrm{V\,s/A}$.`,
        ],
      },
      {
        title: "The self-induced emf",
        points: [
          t`Faraday's law gives $e$ $= -\dfrac{d\left(N\Phi\right)}{dt}$ $= -L\dfrac{dI}{dt}$.`,
          t`For a steady change, $|e| = L\dfrac{\Delta I}{\Delta t}$, with $\Delta I$ the change in current.`,
          t`The minus sign: the emf opposes the change in current (Lenz's law).`,
        ],
      },
      {
        title: "A solenoid and a toroid",
        points: [
          t`A long solenoid of $N$ turns, length $l$, area $A$: $B = \mu_0\dfrac{N}{l}I$, so $N\Phi = \dfrac{\mu_0N^2A}{l}I$.`,
          t`So $L = \dfrac{\mu_0N^2A}{l}$ $= \mu_0n^2lA$, with $n = \dfrac{N}{l}$ turns per metre.`,
          t`A toroid of $N$ turns, mean radius $R$ and cross-section radius $r$: $L = \dfrac{\mu_0N^2r^2}{2R}$.`,
          t`$L$ depends only on the coil's shape, its turns and its core, not on the current.`,
        ],
      },
    ],
    worked: {
      prompt: t`A toroid has $1200$ turns, a mean radius of $15\ \mathrm{cm}$ and a circular cross-section of radius $2\ \mathrm{cm}$. Find its self-inductance. (Take $\mu_0$ $= 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      steps: [
        t`$L = \dfrac{\mu_0N^2r^2}{2R}$.`,
        t`$L$ $= \dfrac{4\pi \times 10^{-7} \times 1200^2 \times 0.02^2}{2 \times 0.15}$.`,
        t`$L \approx 2.41 \times 10^{-3}\ \mathrm{H}$, or $2.41\ \mathrm{mH}$.`,
      ],
      answer: t`$2.41\ \mathrm{mH}$`,
    },
    visualSpec: t`Ramp the current in a coil up and down and watch the self-induced emf push against each change.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Reads $\mathrm{mH}$ as $\mathrm{H}$.`,
      remediation: t`$1\ \mathrm{mH}$ $= 10^{-3}\ \mathrm{H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Forgets to divide by the time.",
      remediation: t`The emf depends on the rate of change: $|e| = L\dfrac{\Delta I}{\Delta t}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Multiplies by the time instead of dividing.",
      remediation: t`A rate is change per unit time: divide $\Delta I$ by $\Delta t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Uses one value of the current instead of the change.",
      remediation: t`Only the change matters: $\Delta I = 50 - 10$ $= 40\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Adds the two currents.",
      remediation: t`The change is the difference: $\Delta I = 50 - 10$ $= 40\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Does not square the number of turns.",
      remediation: t`$N$ enters twice: once in $B$, once in the flux linkage. So $L = \dfrac{\mu_0N^2A}{l}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Leaves the length in cm.",
      remediation: t`Use metres: $20\ \mathrm{cm} = 0.2\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Leaves the area in $\mathrm{cm^2}$.`,
      remediation: t`$1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Gives the whole flux linkage instead of the flux through one turn.",
      remediation: t`$LI = N\Phi$ is the linkage of all the turns; divide by $N$ for one turn.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: t`Multiplies by $N$ instead of dividing.`,
      remediation: t`$N\Phi = LI$, so $\Phi = \dfrac{LI}{N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: t`Reads $\mathrm{mA}$ as $\mathrm{A}$.`,
      remediation: t`$1\ \mathrm{mA}$ $= 10^{-3}\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Uses the diameter as the radius.",
      remediation: t`Halve the diameter first: $r = 0.5\ \mathrm{cm}$, so $A = \pi r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: t`Forgets the $\pi$ in the area.`,
      remediation: t`A circle's area is $\pi r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: t`Takes $L$ as the emf per unit current.`,
      remediation: t`$L$ is flux linkage per unit current, $\dfrac{N\Phi}{I}$, or emf per unit *rate of change* of current.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Turns the ratio upside down.",
      remediation: t`From $N\Phi = LI$: $L = \dfrac{N\Phi}{I}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M16",
      mistake: "Multiplies the flux linkage by the current.",
      remediation: t`$N\Phi$ grows in proportion to $I$; $L$ is their ratio, $\dfrac{N\Phi}{I}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.1 (iv)" },
      stem: t`The current through a coil of self-inductance $10\ \mathrm{mH}$ rises from $0$ to $1\ \mathrm{A}$ in $0.1\ \mathrm{s}$. What is the size of the induced emf?`,
      verify: { kind: "value", inputs: { L_mH: "10", I1: "0", I2: "1", t: "0.1" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$0.1\ \mathrm{V}$`, correct: true, value: "0.100000000000000" },
        { key: "B", text: t`$100\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M1", value: "100" },
        { key: "C", text: t`$0.01\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M2", value: "0.0100000000000000" },
        { key: "D", text: t`$0.001\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M3", value: "0.00100000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta I}{\Delta t}$ $= \dfrac{1 - 0}{0.1}$ $= 10\ \mathrm{A/s}$.`,
          t`$|e| = L\dfrac{\Delta I}{\Delta t}$ $= 10 \times 10^{-3} \times 10$ $= 0.1\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(viii)" },
      stem: t`The current in a coil of self-inductance $20\ \mathrm{H}$ falls from $50\ \mathrm{A}$ to $10\ \mathrm{A}$ in $0.1\ \mathrm{s}$. What is the size of the induced emf?`,
      verify: { kind: "value", inputs: { L_mH: "20000", I1: "50", I2: "10", t: "0.1" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$800\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M2", value: "800" },
        { key: "B", text: t`$2000\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M4", value: "2000" },
        { key: "C", text: t`$12000\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M5", value: "12000" },
        { key: "D", text: t`$8000\ \mathrm{V}$`, correct: true, value: "8000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta I}{\Delta t}$ $= \dfrac{50 - 10}{0.1}$ $= 400\ \mathrm{A/s}$.`,
          t`$|e| = 20 \times 400$ $= 8000\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.6" },
      stem: t`An air-cored solenoid has $200$ turns, a length of $20\ \mathrm{cm}$ and a cross-section of $5\ \mathrm{cm^2}$. What is its self-inductance? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { N: "200", l_cm: "20", A_cm2: "5" }, params: { ask: "L_sol" } },
      options: [
        { key: "A", text: t`$6.28 \times 10^{-7}\ \mathrm{H}$`, correct: false, misconceptionId: "C08-M6", value: "6.28000000000000e-7" },
        { key: "B", text: t`$1.26 \times 10^{-6}\ \mathrm{H}$`, correct: false, misconceptionId: "C08-M7", value: "1.26000000000000e-6" },
        { key: "C", text: t`$1.26\ \mathrm{H}$`, correct: false, misconceptionId: "C08-M8", value: "1.26000000000000" },
        { key: "D", text: t`$1.26 \times 10^{-4}\ \mathrm{H}$`, correct: true, value: "0.000126000000000000" },
      ],
      solution: {
        steps: [
          t`$l = 0.2\ \mathrm{m}$, $A = 5 \times 10^{-4}\ \mathrm{m^2}$.`,
          t`$L = \dfrac{\mu_0N^2A}{l}$ $= \dfrac{4\pi \times 10^{-7} \times 200^2 \times 5 \times 10^{-4}}{0.2}$.`,
          t`$L \approx 1.26 \times 10^{-4}\ \mathrm{H}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.7" },
      stem: t`A closely wound coil of $200$ turns has a self-inductance of $10\ \mathrm{mH}$. What is the magnetic flux through each turn when it carries $4\ \mathrm{mA}$?`,
      verify: { kind: "value", inputs: { L_mH: "10", I_mA: "4", N: "200" }, params: { ask: "flux" } },
      options: [
        { key: "A", text: t`$0.008\ \mathrm{Wb}$`, correct: false, misconceptionId: "C08-M10", value: "0.00800000000000000" },
        { key: "B", text: t`$2 \times 10^{-4}\ \mathrm{Wb}$`, correct: false, misconceptionId: "C08-M11", value: "0.000200000000000000" },
        { key: "C", text: t`$2 \times 10^{-7}\ \mathrm{Wb}$`, correct: true, value: "2.00000000000000e-7" },
        { key: "D", text: t`$4 \times 10^{-5}\ \mathrm{Wb}$`, correct: false, misconceptionId: "C08-M9", value: "4.00000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$N\Phi = LI$ $= 10 \times 10^{-3} \times 4 \times 10^{-3}$ $= 4 \times 10^{-5}\ \mathrm{Wb}$.`,
          t`Per turn: $\Phi$ $= \dfrac{4 \times 10^{-5}}{200}$ $= 2 \times 10^{-7}\ \mathrm{Wb}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.16" },
      stem: t`A wire is wound at $100$ turns per cm along a non-magnetic rod $1\ \mathrm{m}$ long and $1\ \mathrm{cm}$ in diameter. What is the self-inductance of the winding? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { n_cm: "100", l: "1", d_cm: "1" }, params: { ask: "L_rod" } },
      options: [
        { key: "A", text: t`$0.00314\ \mathrm{H}$`, correct: false, misconceptionId: "C08-M13", value: "0.00314000000000000" },
        { key: "B", text: t`$0.00987\ \mathrm{H}$`, correct: true, value: "0.00987000000000000" },
        { key: "C", text: t`$9.87 \times 10^{-7}\ \mathrm{H}$`, correct: false, misconceptionId: "C08-M6", value: "9.87000000000000e-7" },
        { key: "D", text: t`$0.0395\ \mathrm{H}$`, correct: false, misconceptionId: "C08-M12", value: "0.0395000000000000" },
      ],
      solution: {
        steps: [
          t`$n = 100$ per cm $= 10^4$ per m; $r = 0.005\ \mathrm{m}$, so $A$ $= \pi \times 0.005^2$ $\approx 7.85 \times 10^{-5}\ \mathrm{m^2}$.`,
          t`$L = \mu_0n^2lA$ $= 4\pi \times 10^{-7} \times 10^8 \times 1 \times 7.85 \times 10^{-5}$.`,
          t`$L \approx 9.87 \times 10^{-3}\ \mathrm{H}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.2(ii)" },
      stem: t`A coil of $N$ turns carries a current $I$, and $\Phi$ is the flux through each turn. Which defines its self-inductance $L$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "def" } },
      options: [
        { key: "A", text: t`$L = \dfrac{I}{N\Phi}$`, correct: false, misconceptionId: "C08-M15", value: "I_over_NPhi" },
        { key: "B", text: t`$L = N\Phi I$`, correct: false, misconceptionId: "C08-M16", value: "NPhi_times_I" },
        { key: "C", text: t`$L = \dfrac{N\Phi}{I}$`, correct: true, value: "NPhi_over_I" },
        { key: "D", text: t`$L = \dfrac{e}{I}$`, correct: false, misconceptionId: "C08-M14", value: "e_over_I" },
      ],
      solution: {
        steps: [
          t`The flux linkage $N\Phi$ is proportional to the current: $N\Phi = LI$.`,
          t`So $L = \dfrac{N\Phi}{I}$.`,
        ],
      },
    },
  ],
};
