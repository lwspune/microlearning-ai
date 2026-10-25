import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`A heavy lorry bounces slowly on its springs; a light scooter jiggles fast. What sets how quickly something oscillates?`,
    reveal: t`Its mass and the stiffness of what pulls it back. A larger mass oscillates more slowly, a stiffer spring faster: $T = 2\pi\sqrt{\dfrac{m}{k}}$.`,
  },
  explanation: {
    intuition: [
      t`In S.H.M., $F = -kx$, and by Newton's second law $F = m\dfrac{d^2x}{dt^2}$.`,
      t`So $\dfrac{d^2x}{dt^2} = -\dfrac{k}{m}x$: the acceleration is proportional to the displacement, and opposite to it.`,
      t`Writing $\omega^2 = \dfrac{k}{m}$, the equation is $\dfrac{d^2x}{dt^2} + \omega^2x = 0$.`,
      t`$\omega$, the **angular frequency**, sets how fast the body oscillates.`,
      t`A heavier body oscillates more slowly; a stiffer spring makes it faster.`,
    ],
    formal: [
      {
        title: "The differential equation",
        points: [
          t`$m\dfrac{d^2x}{dt^2} = -kx$, so $\dfrac{d^2x}{dt^2} + \omega^2x = 0$ with $\omega = \sqrt{\dfrac{k}{m}}$.`,
          t`Any equation of the form $\dfrac{d^2x}{dt^2} = -cx$ describes S.H.M. with $\omega = \sqrt{c}$.`,
          t`$\omega$ is in rad/s; it is $\dfrac{k}{m}$ that is $\omega^2$, not $\omega$.`,
        ],
      },
      {
        title: "Period and frequency",
        points: [
          t`**Period**: $T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac{m}{k}}$, the time for one oscillation.`,
          t`**Frequency**: $n = \dfrac{1}{T} = \dfrac{\omega}{2\pi}$, oscillations per second, in Hz.`,
          t`$T \propto \sqrt{m}$: four times the mass doubles the period.`,
          t`Springs in series give $\dfrac{k}{2}$ for two identical springs; in parallel, $2k$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A body of mass $0.8\ \mathrm{kg}$ hangs from a spring of force constant $10\ \mathrm{N/m}$. Find its angular frequency, period and frequency.`,
      steps: [
        t`$\omega = \sqrt{\dfrac{k}{m}}$ $= \sqrt{\dfrac{10}{0.8}}$ $= \sqrt{12.5} \approx 3.54\ \mathrm{rad/s}$.`,
        t`$T = \dfrac{2\pi}{\omega} = \dfrac{6.283}{3.54}$.`,
        t`$T \approx 1.78\ \mathrm{s}$.`,
        t`$n = \dfrac{1}{T} \approx 0.563\ \mathrm{Hz}$.`,
      ],
      answer: t`$\omega \approx 3.54\ \mathrm{rad/s}$, $T \approx 1.78\ \mathrm{s}$, $n \approx 0.563\ \mathrm{Hz}$`,
    },
    visualSpec: t`Hang different masses on springs of different stiffness and time their bounces, matching each period to $2\pi\sqrt{\dfrac{m}{k}}$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Forgets the square root: takes $\omega = \dfrac{k}{m}$.`,
      remediation: t`$\dfrac{k}{m}$ is $\omega^2$; take its square root to get $\omega$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Takes $\omega$ as the frequency.`,
      remediation: t`$\omega$ is in rad/s. The frequency is $n = \dfrac{\omega}{2\pi}$, in Hz.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Gives the period instead of the frequency.",
      remediation: t`$\dfrac{2\pi}{\omega}$ is the period; the frequency is its reciprocal, $\dfrac{\omega}{2\pi}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Turns $\dfrac{k}{m}$ upside down.`,
      remediation: t`A stiffer spring speeds the oscillation: $\omega^2 = \dfrac{k}{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Takes the period as proportional to the mass.",
      remediation: t`$T = 2\pi\sqrt{\dfrac{m}{k}}$: the period goes as $\sqrt{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Leaves out the first mass the second time.",
      remediation: t`Both bodies oscillate together: the mass is $m_1 + m_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Gives $m_2 : m_1$ instead of $m_1 : m_2$.`,
      remediation: t`$m_2 = 3m_1$, so $m_1 : m_2 = 1 : 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Takes the frequency as proportional to $k$.`,
      remediation: t`$n = \dfrac{1}{2\pi}\sqrt{\dfrac{k}{m}}$: the frequency goes as $\sqrt{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Swaps the series and parallel spring constants.",
      remediation: t`In series the springs stretch more, giving $\dfrac{k}{2}$; in parallel they share the load, giving $2k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: t`Takes the frequency as proportional to $\dfrac{1}{k}$.`,
      remediation: t`A stiffer spring gives a higher frequency: $n \propto \sqrt{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Gets the sign in the equation wrong.",
      remediation: t`The acceleration is opposite to the displacement: $\dfrac{d^2x}{dt^2} = -\dfrac{k}{m}x$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M12",
      mistake: "Uses the first derivative.",
      remediation: t`Newton's law links force to acceleration, the second derivative: $\dfrac{d^2x}{dt^2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.9" },
      stem: t`In SI units, the differential equation of an S.H.M. is $\dfrac{d^2x}{dt^2} = -36x$. What is its frequency?`,
      verify: { kind: "value", inputs: { c: "36" }, params: { ask: "n_eq" } },
      options: [
        { key: "A", text: t`$0.955\ \mathrm{Hz}$`, correct: true, value: "0.955000000000000" },
        { key: "B", text: t`$5.73\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M1", value: "5.73000000000000" },
        { key: "C", text: t`$6\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M2", value: "6" },
        { key: "D", text: t`$1.05\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M3", value: "1.05000000000000" },
      ],
      solution: {
        steps: [
          t`Compare with $\dfrac{d^2x}{dt^2} = -\omega^2x$: $\omega^2 = 36$, so $\omega = 6\ \mathrm{rad/s}$.`,
          t`$n = \dfrac{\omega}{2\pi} = \dfrac{6}{2\pi} \approx 0.955\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.11(OR)" },
      stem: t`A body of mass $1\ \mathrm{kg}$ oscillates on a spring of force constant $15\ \mathrm{N/m}$. What is the frequency of its vibrations?`,
      verify: { kind: "value", inputs: { k: "15", m: "1" }, params: { ask: "n_spring" } },
      options: [
        { key: "A", text: t`$2.39\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M1", value: "2.39000000000000" },
        { key: "B", text: t`$3.87\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M2", value: "3.87000000000000" },
        { key: "C", text: t`$0.0411\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M4", value: "0.0411000000000000" },
        { key: "D", text: t`$0.616\ \mathrm{Hz}$`, correct: true, value: "0.616000000000000" },
      ],
      solution: {
        steps: [
          t`$\omega = \sqrt{\dfrac{k}{m}} = \sqrt{15} \approx 3.87\ \mathrm{rad/s}$.`,
          t`$n = \dfrac{\omega}{2\pi} \approx 0.616\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.18" },
      stem: t`A body of mass $m_1$ on a light spring oscillates with period $T$. When a second body, of mass $m_2$, is tied to the first, the period becomes $2T$. What is $m_1 : m_2$?`,
      verify: { kind: "value", inputs: { f: "2" }, params: { ask: "masses" } },
      options: [
        { key: "A", text: t`$3 : 1$`, correct: false, misconceptionId: "C02-M7", value: "3" },
        { key: "B", text: t`$1 : 3$`, correct: true, value: "1/3" },
        { key: "C", text: t`$1 : 1$`, correct: false, misconceptionId: "C02-M5", value: "1" },
        { key: "D", text: t`$1 : 4$`, correct: false, misconceptionId: "C02-M6", value: "1/4" },
      ],
      solution: {
        steps: [
          t`$T \propto \sqrt{\text{mass}}$, so $\dfrac{2T}{T} = \sqrt{\dfrac{m_1 + m_2}{m_1}}$, giving $m_1 + m_2 = 4m_1$.`,
          t`$m_2 = 3m_1$, so $m_1 : m_2 = 1 : 3$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.1 (iv)" },
      stem: t`Two identical springs are joined first in series and then in parallel, and the same block hangs from each combination. What is the ratio of their frequencies of vertical oscillation, series to parallel?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "springs" } },
      options: [
        { key: "A", text: t`$4 : 1$`, correct: false, misconceptionId: "C02-M10", value: "4" },
        { key: "B", text: t`$1 : 2$`, correct: true, value: "1/2" },
        { key: "C", text: t`$1 : 4$`, correct: false, misconceptionId: "C02-M8", value: "1/4" },
        { key: "D", text: t`$2 : 1$`, correct: false, misconceptionId: "C02-M9", value: "2" },
      ],
      solution: {
        steps: [
          t`In series the spring constant is $\dfrac{k}{2}$; in parallel, $2k$.`,
          t`$n \propto \sqrt{k}$, so the ratio is $\sqrt{\dfrac{k/2}{2k}} = \sqrt{\dfrac{1}{4}} = 1 : 2$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.2(iii)" },
      stem: t`Which is the differential equation of linear S.H.M. for a body of mass $m$ with force constant $k$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "equation" } },
      options: [
        { key: "A", text: t`$\dfrac{dx}{dt} + \dfrac{k}{m}x = 0$`, correct: false, misconceptionId: "C02-M12", value: "first_derivative" },
        { key: "B", text: t`$\dfrac{d^2x}{dt^2} + \dfrac{k}{m}x = 0$`, correct: true, value: "plus_k_over_m" },
        { key: "C", text: t`$\dfrac{d^2x}{dt^2} + \dfrac{m}{k}x = 0$`, correct: false, misconceptionId: "C02-M4", value: "plus_m_over_k" },
        { key: "D", text: t`$\dfrac{d^2x}{dt^2} - \dfrac{k}{m}x = 0$`, correct: false, misconceptionId: "C02-M11", value: "minus_k_over_m" },
      ],
      solution: {
        steps: [
          t`$F = -kx$ and $F = m\dfrac{d^2x}{dt^2}$.`,
          t`So $\dfrac{d^2x}{dt^2} + \dfrac{k}{m}x = 0$.`,
        ],
      },
    },
  ],
};
