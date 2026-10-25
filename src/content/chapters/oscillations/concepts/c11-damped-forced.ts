import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`A swing left alone slowly stops. Pushed at just the right moments, though, it climbs higher and higher with only small pushes. Why?`,
    reveal: t`Friction drains its energy, so free swings **die away**. Pushes timed to its natural frequency feed energy in at the best moment: **resonance**.`,
  },
  explanation: {
    intuition: [
      t`A body set oscillating and left alone oscillates at its **natural frequency**: a **free oscillation**.`,
      t`Real oscillators lose energy to friction and air resistance, so their amplitude dies away: **damping**.`,
      t`A periodic push can keep an oscillation going: a **forced oscillation**, at the push's frequency.`,
      t`When the push's frequency matches the natural frequency, the amplitude grows largest: **resonance**.`,
      t`Soldiers break step on bridges, so their marching cannot set up resonance.`,
    ],
    formal: [
      {
        title: "Damped oscillations",
        points: [
          t`Friction, air resistance or a fluid oppose the motion and drain its energy as heat.`,
          t`The amplitude decreases gradually, oscillation by oscillation.`,
          t`The total energy $\dfrac{1}{2}m\omega^2A^2$ falls with it: $E \propto A^2$.`,
          t`The period stays almost the same; heavy damping can stop the oscillation altogether.`,
        ],
      },
      {
        title: "Free, forced and resonant",
        points: [
          t`**Free oscillation**: at the natural frequency, with no periodic force once started.`,
          t`**Forced oscillation**: driven by a periodic force, it settles at the driving frequency.`,
          t`Its amplitude depends on how close the driving frequency is to the natural frequency.`,
          t`**Resonance**: when the two match, the amplitude is greatest; less damping makes it sharper and higher.`,
        ],
      },
    ],
    worked: {
      prompt: t`Damping reduces an oscillator's amplitude from $10\ \mathrm{cm}$ to $5\ \mathrm{cm}$. What fraction of its energy remains?`,
      steps: [
        t`The energy of an oscillator is $E = \dfrac{1}{2}m\omega^2A^2$, so $E \propto A^2$.`,
        t`$\dfrac{E_2}{E_1} = \left(\dfrac{5}{10}\right)^2$.`,
        t`$\dfrac{E_2}{E_1} = \dfrac{1}{4}$.`,
        t`A quarter of the energy remains; the other three quarters has become heat.`,
      ],
      answer: t`$\dfrac{1}{4}$ of the energy`,
    },
    visualSpec: t`Drive a pendulum with a slowly changing push frequency and watch its swings stay small, then soar as the frequency passes its natural one.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Thinks damping makes the amplitude grow.",
      remediation: "Damping drains energy, so the amplitude decreases.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Thinks damping stops the motion suddenly.",
      remediation: "With light damping the amplitude dies away gradually, over many oscillations.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Thinks damping leaves the amplitude unchanged.",
      remediation: t`Damping removes energy, and $E \propto A^2$, so the amplitude must fall.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M4",
      mistake: "Mixes up free and forced oscillations.",
      remediation: "Free oscillations are at the natural frequency; forced ones settle at the driving frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Takes the forced frequency as an average.",
      remediation: "Once steady, a forced oscillator follows the driving force exactly, at its frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Thinks the frequency keeps falling as energy is lost.",
      remediation: "Losing energy shrinks the amplitude; the driving force fixes the frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Thinks a higher driving frequency always gives a bigger amplitude.",
      remediation: "The amplitude peaks when the driving frequency matches the natural frequency, then falls again.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Thinks a lower driving frequency always gives a bigger amplitude.",
      remediation: "The amplitude peaks at resonance, where the driving and natural frequencies match.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Thinks more damping gives a bigger amplitude.",
      remediation: "Damping drains energy: more damping makes the resonance peak lower and broader.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Thinks the energy is destroyed.",
      remediation: "Energy is conserved: friction turns the oscillator's energy into heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Thinks the energy goes into making the oscillation faster.",
      remediation: "The lost energy becomes heat; the period hardly changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Thinks the energy stays the same as the amplitude falls.",
      remediation: t`$E = \dfrac{1}{2}m\omega^2A^2$: a smaller amplitude means less energy.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M13",
      mistake: "Thinks free oscillations need no restoring force.",
      remediation: "Every oscillation needs a restoring force; 'free' means no periodic driving force.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M14",
      mistake: "Thinks free oscillations happen only in a vacuum.",
      remediation: "'Free' means no driving force; a free oscillation in air is simply damped as well.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.1(iv)" },
      stem: t`How does the amplitude of a damped harmonic oscillator change?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "damped" } },
      options: [
        { key: "A", text: t`It decreases gradually`, correct: true, value: "gradually_decreasing" },
        { key: "B", text: t`It increases gradually`, correct: false, misconceptionId: "C11-M1", value: "gradually_increasing" },
        { key: "C", text: t`It drops suddenly to zero`, correct: false, misconceptionId: "C11-M2", value: "suddenly_decreasing" },
        { key: "D", text: t`It stays the same; only the period changes`, correct: false, misconceptionId: "C11-M3", value: "constant" },
      ],
      solution: {
        steps: [
          t`Damping forces drain the oscillator's energy little by little.`,
          t`So the amplitude decreases gradually.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.11" },
      stem: t`A body is made to oscillate by a periodic driving force. At what frequency does it oscillate, once steady?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "forced" } },
      options: [
        { key: "A", text: t`At the average of its natural frequency and the driving frequency`, correct: false, misconceptionId: "C11-M5", value: "average" },
        { key: "B", text: t`At a frequency that keeps falling as energy is lost`, correct: false, misconceptionId: "C11-M6", value: "falls_to_zero" },
        { key: "C", text: t`At the frequency of the driving force`, correct: true, value: "driving_frequency" },
        { key: "D", text: t`At its own natural frequency`, correct: false, misconceptionId: "C11-M4", value: "natural_frequency" },
      ],
      solution: {
        steps: [
          t`After a short while, a driven body settles into oscillating with the driving force.`,
          t`So it oscillates at the driving frequency, not its natural one.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`A periodic force drives a body. When is the amplitude of its forced oscillation largest?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "resonance" } },
      options: [
        { key: "A", text: t`When the driving frequency is as high as possible`, correct: false, misconceptionId: "C11-M7", value: "highest_driving" },
        { key: "B", text: t`When the driving frequency is as low as possible`, correct: false, misconceptionId: "C11-M8", value: "lowest_driving" },
        { key: "C", text: t`When the damping is as large as possible`, correct: false, misconceptionId: "C11-M9", value: "most_damping" },
        { key: "D", text: t`When the driving frequency equals the body's natural frequency`, correct: true, value: "equal_frequencies" },
      ],
      solution: {
        steps: [
          t`The driving force feeds in most energy when it pushes in step with the natural motion.`,
          t`That happens when the driving frequency equals the natural frequency: resonance.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`A swinging pendulum slowly comes to rest because of air resistance. What happens to its energy?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "energy" } },
      options: [
        { key: "A", text: t`It goes into making the pendulum swing faster`, correct: false, misconceptionId: "C11-M11", value: "faster_oscillation" },
        { key: "B", text: t`It stays the same; only the amplitude falls`, correct: false, misconceptionId: "C11-M12", value: "stays_constant" },
        { key: "C", text: t`It is turned into heat in the air and the support`, correct: true, value: "heat" },
        { key: "D", text: t`It is destroyed`, correct: false, misconceptionId: "C11-M10", value: "destroyed" },
      ],
      solution: {
        steps: [
          t`Air resistance does work against the motion.`,
          t`That energy becomes heat in the air and the support; none is destroyed.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.11" },
      stem: t`What is a free oscillation?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "free" } },
      options: [
        { key: "A", text: t`Oscillation at the frequency of an external periodic force`, correct: false, misconceptionId: "C11-M4", value: "driving_force" },
        { key: "B", text: t`Oscillation with no restoring force acting`, correct: false, misconceptionId: "C11-M13", value: "no_restoring" },
        { key: "C", text: t`Oscillation that can happen only in a vacuum`, correct: false, misconceptionId: "C11-M14", value: "vacuum_only" },
        { key: "D", text: t`Oscillation at the body's natural frequency, with no periodic force acting after it is set going`, correct: true, value: "natural_no_force" },
      ],
      solution: {
        steps: [
          t`A free oscillation is set going and then left alone.`,
          t`It oscillates at its natural frequency, with no periodic force acting.`,
        ],
      },
    },
  ],
};
