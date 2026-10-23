import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Galileo timed a swinging church lamp against his pulse and found each swing took the same time, big or small. What does a pendulum's period depend on?`,
    reveal: t`For small swings, only on its length and on $g$: $T = 2\pi\sqrt{\dfrac{L}{g}}$. Not on the size of the swing, and not on the mass of the bob.`,
  },
  explanation: {
    intuition: [
      t`A **simple pendulum** is a heavy point bob on a light, inextensible string from a rigid support.`,
      t`Pulled aside and released, the part of its weight along the arc pulls it back to the mean position.`,
      t`For small swings that pull is proportional to the displacement: the bob performs S.H.M.`,
      t`Its period is $T = 2\pi\sqrt{\dfrac{L}{g}}$: a longer pendulum swings more slowly.`,
      t`The period does not depend on the bob's mass, or on the amplitude, as long as the swings stay small.`,
    ],
    formal: [
      {
        title: "Why it is S.H.M.",
        points: [
          t`At angle $\theta$, the restoring force along the arc is $F = -mg\sin\theta$.`,
          t`For small $\theta$, $\sin\theta \approx \theta = \dfrac{x}{L}$, so $F = -\dfrac{mg}{L}x$.`,
          t`That is $F = -kx$ with $k = \dfrac{mg}{L}$: S.H.M. with $\omega^2 = \dfrac{g}{L}$.`,
          t`So $T = 2\pi\sqrt{\dfrac{L}{g}}$, and the mass cancels.`,
        ],
      },
      {
        title: "Laws of the simple pendulum",
        points: [
          t`**Law of length**: $T \propto \sqrt{L}$, at a given place.`,
          t`**Law of gravity**: $T \propto \dfrac{1}{\sqrt{g}}$, for a given length.`,
          t`**Law of mass**: $T$ does not depend on the mass of the bob.`,
          t`**Law of isochronism**: for small amplitudes, $T$ does not depend on the amplitude.`,
        ],
      },
    ],
    worked: {
      prompt: t`The period of a simple pendulum rises by $10\%$ when it is lengthened by $21\ \mathrm{cm}$. Find its initial length and initial period. (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      steps: [
        t`$T \propto \sqrt{L}$, so $\left(\dfrac{T_2}{T_1}\right)^2 = \dfrac{L_2}{L_1}$: $1.21 = \dfrac{L_1 + 0.21}{L_1}$.`,
        t`$0.21L_1 = 0.21$, so $L_1 = 1\ \mathrm{m}$.`,
        t`$T_1 = 2\pi\sqrt{\dfrac{1}{9.8}}$.`,
        t`$T_1 \approx 2.007\ \mathrm{s}$.`,
      ],
      answer: t`$L_1 = 1\ \mathrm{m}$, $T_1 \approx 2.007\ \mathrm{s}$`,
    },
    visualSpec: t`Swing pendulums of different lengths and bob masses side by side, and watch only the length change the beat.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Takes the restoring force as $mg$.`,
      remediation: t`Only the part of the weight along the arc pulls the bob back: $mg\sin\theta \approx \dfrac{mgx}{L}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Mixes cm and m in $\dfrac{x}{L}$.`,
      remediation: t`Put $x$ and $L$ in the same unit: $\dfrac{3\ \mathrm{cm}}{100\ \mathrm{cm}} = 0.03$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Leaves the mass in grams.",
      remediation: t`For newtons, use kilograms: $50\ \mathrm{g} = 0.05\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Takes the period as proportional to the length.",
      remediation: t`$T = 2\pi\sqrt{\dfrac{L}{g}}$: the period goes as $\sqrt{L}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Takes the period as proportional to $L^2$.`,
      remediation: t`$T \propto \sqrt{L}$, so $L \propto T^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Takes the added $21\ \mathrm{cm}$ as the new length.`,
      remediation: t`The new length is the old one plus $21\ \mathrm{cm}$: $L_2 = L_1 + 0.21$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks the period doubles with the mass.",
      remediation: t`The mass cancels from $T = 2\pi\sqrt{\dfrac{L}{g}}$: the period stays the same.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks a heavier bob swings faster.",
      remediation: "A heavier bob feels more pull but has more inertia in the same ratio: its period is unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: t`Takes the period as proportional to $\sqrt{m}$, as for a spring.`,
      remediation: t`For a spring $k$ is fixed, so $T \propto \sqrt{m}$; for a pendulum $k = \dfrac{mg}{L}$ grows with $m$ and the mass cancels.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M10",
      mistake: t`Uses $mgL$ for the potential energy.`,
      remediation: t`For small swings, $\text{PE} = \dfrac{1}{2}m\omega^2A^2 = \dfrac{1}{2}\dfrac{mg}{L}A^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Leaves the amplitude in cm.",
      remediation: t`For joules, use metres: $5\ \mathrm{cm} = 0.05\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: t`Forgets the $\dfrac{1}{2}$ in the potential energy.`,
      remediation: t`$\text{PE} = \dfrac{1}{2}kx^2$, with $k = \dfrac{mg}{L}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Leaves out the square root.",
      remediation: t`$T = 2\pi\sqrt{\dfrac{L}{g}}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M14",
      mistake: t`Turns $\dfrac{L}{g}$ upside down.`,
      remediation: t`A longer pendulum swings more slowly: $T = 2\pi\sqrt{\dfrac{L}{g}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: t`Forgets the $2\pi$.`,
      remediation: t`$T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac{L}{g}}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.14" },
      stem: t`A simple pendulum $100\ \mathrm{cm}$ long has a bob of mass $50\ \mathrm{g}$. What restoring force acts on the bob when it is $3\ \mathrm{cm}$ from the mean position? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { m_g: "50", x_cm: "3", L_cm: "100", g: "9.8" }, params: { ask: "F" } },
      options: [
        { key: "A", text: t`$0.0147\ \mathrm{N}$`, correct: true, value: "0.0147000000000000" },
        { key: "B", text: t`$0.49\ \mathrm{N}$`, correct: false, misconceptionId: "C08-M1", value: "0.490000000000000" },
        { key: "C", text: t`$1.47\ \mathrm{N}$`, correct: false, misconceptionId: "C08-M2", value: "1.47000000000000" },
        { key: "D", text: t`$14.7\ \mathrm{N}$`, correct: false, misconceptionId: "C08-M3", value: "14.7000000000000" },
      ],
      solution: {
        steps: [
          t`$F = \dfrac{mg}{L}x = \dfrac{0.05 \times 9.8}{1} \times 0.03$.`,
          t`$F \approx 1.47 \times 10^{-2}\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.10" },
      stem: t`The period of a simple pendulum rises by $10\%$ when its length is increased by $21\ \mathrm{cm}$. What was its initial length?`,
      verify: { kind: "value", inputs: { pct: "10", dL_cm: "21" }, params: { ask: "L1" } },
      options: [
        { key: "A", text: t`$2.1\ \mathrm{m}$`, correct: false, misconceptionId: "C08-M4", value: "2.10000000000000" },
        { key: "B", text: t`$4.3\ \mathrm{m}$`, correct: false, misconceptionId: "C08-M5", value: "4.30000000000000" },
        { key: "C", text: t`$0.174\ \mathrm{m}$`, correct: false, misconceptionId: "C08-M6", value: "0.174000000000000" },
        { key: "D", text: t`$1\ \mathrm{m}$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`$\left(\dfrac{T_2}{T_1}\right)^2 = \dfrac{L_2}{L_1}$: $1.1^2 = \dfrac{L_1 + 0.21}{L_1}$.`,
          t`$1.21L_1 = L_1 + 0.21$, so $L_1 = 1\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.2 (iv)" },
      stem: t`The bob of a simple pendulum is replaced by one of twice the mass, keeping the length the same. What happens to the period of small swings?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mass" } },
      options: [
        { key: "A", text: t`It doubles`, correct: false, misconceptionId: "C08-M7", value: "doubles" },
        { key: "B", text: t`It halves`, correct: false, misconceptionId: "C08-M8", value: "halves" },
        { key: "C", text: t`It becomes $\sqrt{2}$ times as long`, correct: false, misconceptionId: "C08-M9", value: "times_root2" },
        { key: "D", text: t`It stays the same`, correct: true, value: "same" },
      ],
      solution: {
        steps: [
          t`$T = 2\pi\sqrt{\dfrac{L}{g}}$ contains no mass.`,
          t`So doubling the mass leaves the period the same.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.23" },
      stem: t`A simple pendulum $1\ \mathrm{m}$ long has a bob of mass $10\ \mathrm{g}$ and swings with an amplitude of $5\ \mathrm{cm}$. What is its potential energy at an extreme position? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { m_g: "10", A_cm: "5", L: "1", g: "9.8" }, params: { ask: "PE", sf: "4" } },
      options: [
        { key: "A", text: t`$1.225\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M11", value: "1.22500000000000" },
        { key: "B", text: t`$2.45 \times 10^{-4}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M12", value: "0.000245000000000000" },
        { key: "C", text: t`$1.225 \times 10^{-4}\ \mathrm{J}$`, correct: true, value: "0.000122500000000000" },
        { key: "D", text: t`$0.098\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M10", value: "0.0980000000000000" },
      ],
      solution: {
        steps: [
          t`$\omega^2 = \dfrac{g}{L} = 9.8\ \mathrm{s^{-2}}$; at an extreme, $\text{PE} = \dfrac{1}{2}m\omega^2A^2$.`,
          t`$\text{PE} = \dfrac{1}{2} \times 0.01 \times 9.8 \times 0.05^2 = 1.225 \times 10^{-4}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.2 (iii)" },
      stem: t`What is the period of a simple pendulum $2.45\ \mathrm{m}$ long? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { L: "2.45", g: "9.8" }, params: { ask: "T" } },
      options: [
        { key: "A", text: t`$0.5\ \mathrm{s}$`, correct: false, misconceptionId: "C08-M15", value: "0.500000000000000" },
        { key: "B", text: t`$3.14\ \mathrm{s}$`, correct: true, value: "3.14000000000000" },
        { key: "C", text: t`$1.57\ \mathrm{s}$`, correct: false, misconceptionId: "C08-M13", value: "1.57000000000000" },
        { key: "D", text: t`$12.6\ \mathrm{s}$`, correct: false, misconceptionId: "C08-M14", value: "12.6000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 2\pi\sqrt{\dfrac{L}{g}} = 2\pi\sqrt{\dfrac{2.45}{9.8}} = 2\pi \times 0.5$.`,
          t`$T = \pi \approx 3.14\ \mathrm{s}$.`,
        ],
      },
    },
  ],
};
