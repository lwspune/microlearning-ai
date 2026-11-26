import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Flick a rope tied to a wall and the bump runs to the wall and back, but it returns upside down. Tie the rope to a ring sliding on a pole and it returns upright. Why the difference?`,
    reveal: t`The wall cannot move, so it pulls the rope the other way and turns the wave over: a phase change of $\pi$. The ring moves freely, so the wave returns as it went.`,
  },
  explanation: {
    intuition: [
      t`When a wave meets a boundary, part or all of it is **reflected**: sent back into the medium it came from.`,
      t`A **denser medium** is one in which the wave travels more slowly; a **rarer medium**, one where it travels faster.`,
      t`A **rigid end** cannot move: it acts like a very dense medium, and the wave returns turned over.`,
      t`A **free end** moves freely: it acts like a rarer medium, and the wave returns upright.`,
      t`The reflected wave is in the same medium, so its speed, frequency and wavelength do not change.`,
    ],
    formal: [
      {
        title: "From a denser medium",
        points: [
          t`The displacement changes phase by $\pi$: a crest returns as a trough, a trough as a crest.`,
          t`Incident $y = A\sin\left(\omega t - kx\right)$; reflected $y = -A\sin\left(\omega t + kx\right)$.`,
          t`For sound, a compression returns as a compression: the pressure is not turned over.`,
          t`The boundary itself never moves: its displacement is always zero.`,
        ],
      },
      {
        title: "From a rarer medium",
        points: [
          t`The displacement does not change phase: a crest returns as a crest.`,
          t`Reflected $y = A\sin\left(\omega t + kx\right)$.`,
          t`For sound, a compression returns as a rarefaction, as at the open end of a pipe.`,
          t`The boundary moves the most: incident and reflected displacements add there.`,
        ],
      },
      {
        title: "What reflection keeps",
        points: [
          t`Speed, frequency and wavelength stay the same, because the medium is the same.`,
          t`With no energy lost, the amplitude stays the same too.`,
          t`At a joint with another medium, part of the wave goes on: the reflected part is then weaker.`,
          t`The extra-large swing at a free end is the two waves adding, not a bigger reflected wave.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sound wave $y = A\sin\left(\omega t - kx\right)$ in air meets the surface of a pond. Write the reflected wave, and say what a compression returns as.`,
      steps: [
        t`Water is denser than air for sound, so the displacement changes phase by $\pi$.`,
        t`The reflected wave travels along $-x$: $y = A\sin\left(\omega t + kx + \pi\right)$.`,
        t`That is $y = -A\sin\left(\omega t + kx\right)$: the displacement is turned over.`,
        t`The pressure is not turned over, so a compression returns as a compression.`,
      ],
      answer: t`$y = -A\sin\left(\omega t + kx\right)$; a compression returns as a compression`,
    },
    visualSpec: t`Send a pulse along a rope to a wall, then to a sliding ring, and compare the returning pulses side by side.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Swaps the rules for a denser (rigid) and a rarer (free) boundary.",
      remediation: "A boundary that resists, a denser medium or a rigid end, turns the displacement over; a free end does not.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Applies the crest-to-trough rule to compressions.",
      remediation: "For sound the displacement turns over at a denser medium, but the pressure does not: a compression returns as a compression.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks the reflected wave travels more slowly.",
      remediation: "The reflected wave stays in the same medium, so its speed, frequency and wavelength are unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Takes the doubled displacement at the boundary as a reflected wave of double amplitude.",
      remediation: "Reflection cannot add energy: the reflected wave's amplitude is at most the incident one. Only where the two meet do their displacements add.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.2(iv)" },
      stem: t`A sound wave in air is reflected from a rigid wall, a denser medium. Which describes the reflected wave?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rigid_sound" } },
      options: [
        { key: "A", text: t`A compression returns as a rarefaction; the displacement changes phase by $\pi$`, correct: false, misconceptionId: "C03-M2", value: "rare_pi" },
        { key: "B", text: t`A compression returns as a compression, but travels more slowly`, correct: false, misconceptionId: "C03-M3", value: "comp_slower" },
        { key: "C", text: t`A compression returns as a compression; the displacement changes phase by $\pi$`, correct: true, value: "comp_pi" },
        { key: "D", text: t`A compression returns as a rarefaction; the displacement does not change phase`, correct: false, misconceptionId: "C03-M1", value: "rare_none" },
      ],
      solution: {
        steps: [
          t`A rigid wall is a denser medium: the displacement changes phase by $\pi$.`,
          t`The pressure is not turned over, so a compression returns as a compression.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.20" },
      stem: t`A crest travels along a stretched string towards its end, which is tied to a rigid support. What comes back?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rigid_string" } },
      options: [
        { key: "A", text: t`A trough, travelling more slowly`, correct: false, misconceptionId: "C03-M3", value: "trough_slower" },
        { key: "B", text: t`A trough of twice the amplitude`, correct: false, misconceptionId: "C03-M4", value: "trough_double" },
        { key: "C", text: t`A trough, at the same speed, with the same amplitude`, correct: true, value: "trough_same" },
        { key: "D", text: t`A crest, at the same speed, with the same amplitude`, correct: false, misconceptionId: "C03-M1", value: "crest_same" },
      ],
      solution: {
        steps: [
          t`A rigid support cannot move, so the reflected wave is turned over: a phase change of $\pi$.`,
          t`The crest returns as a trough, in the same string, so at the same speed and, with no loss, the same amplitude.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.20" },
      stem: t`Sound travelling along a pipe reaches its open end, where the air outside acts as a rarer medium. Which describes the reflected wave?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "open_pipe" } },
      options: [
        { key: "A", text: t`A compression returns as a compression; the displacement changes phase by $\pi$`, correct: false, misconceptionId: "C03-M1", value: "comp_pi" },
        { key: "B", text: t`A compression returns as a compression; the displacement does not change phase`, correct: false, misconceptionId: "C03-M2", value: "comp_none" },
        { key: "C", text: t`A compression returns as a rarefaction of twice the amplitude`, correct: false, misconceptionId: "C03-M4", value: "rare_double" },
        { key: "D", text: t`A compression returns as a rarefaction; the displacement does not change phase`, correct: true, value: "rare_none" },
      ],
      solution: {
        steps: [
          t`The open end acts as a rarer medium: the displacement does not change phase.`,
          t`The pressure is turned over there, so a compression returns as a rarefaction.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.20" },
      stem: t`A transverse wave on a light string reaches the point where it is joined to a much heavier string. Which describes the wave reflected back along the light string?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "joint_dense" } },
      options: [
        { key: "A", text: t`Turned over, a phase change of $\pi$, travelling more slowly`, correct: false, misconceptionId: "C03-M3", value: "inverted_slower" },
        { key: "B", text: t`Turned over, with twice the incident amplitude`, correct: false, misconceptionId: "C03-M4", value: "inverted_double" },
        { key: "C", text: t`Turned over, a phase change of $\pi$, at the same speed`, correct: true, value: "inverted_same" },
        { key: "D", text: t`Upright, no phase change, at the same speed`, correct: false, misconceptionId: "C03-M1", value: "upright_same" },
      ],
      solution: {
        steps: [
          t`The heavier string is a denser medium for the wave.`,
          t`So the reflected wave is turned over, a phase change of $\pi$, and travels back along the light string at the same speed.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`A string's end is tied to a light ring that slides freely on a smooth vertical rod. A crest reaches the ring. What comes back?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "free_ring" } },
      options: [
        { key: "A", text: t`A crest, at the same speed, with the same amplitude`, correct: true, value: "upright_same" },
        { key: "B", text: t`A trough, at the same speed, with the same amplitude`, correct: false, misconceptionId: "C03-M1", value: "inverted_same" },
        { key: "C", text: t`A crest, travelling more slowly`, correct: false, misconceptionId: "C03-M3", value: "upright_slower" },
        { key: "D", text: t`A crest of twice the amplitude`, correct: false, misconceptionId: "C03-M4", value: "upright_double" },
      ],
      solution: {
        steps: [
          t`The ring is a free end: the string there is free to move.`,
          t`So there is no phase change: the crest returns as a crest, at the same speed and with the same amplitude.`,
        ],
      },
    },
  ],
};
