import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Electrons fired through a crystal make a pattern of bright and dark rings, just as light does through a grating. How can a particle do that?`,
    reveal: t`Every moving particle has a wavelength, $\lambda = h/mv$; an electron's is about the size of the gaps between atoms, so it diffracts.`,
  },
  explanation: {
    intuition: [
      t`If light can act as particles, de Broglie asked, can particles act as waves?`,
      t`Every moving particle has a **de Broglie wavelength**.`,
      t`The heavier or faster it is, the shorter its wavelength.`,
      t`Heisenberg added that a particle's position and momentum cannot both be exact.`,
      t`So an electron in an atom has no sharp orbit, only a region where it is likely.`,
    ],
    formal: [
      {
        title: "de Broglie's relation",
        points: [
          t`$\lambda = \dfrac{h}{mv} = \dfrac{h}{p}$, with $p = mv$ the **momentum**.`,
          t`Use SI units: mass in kg, speed in $\mathrm{m\,s^{-1}}$, $\lambda$ in m.`,
          t`An electron's wavelength is near $10^{-10}\ \mathrm{m}$: it diffracts through crystals.`,
          t`A ball's is near $10^{-34}\ \mathrm{m}$: far too small to notice.`,
        ],
      },
      {
        title: "The uncertainty principle",
        points: [
          t`$\Delta x \cdot \Delta p \ge \dfrac{h}{4\pi}$, where $\Delta$ means the uncertainty.`,
          t`With $\Delta p = m\,\Delta v$: $\Delta v \ge \dfrac{h}{4\pi m\,\Delta x}$.`,
          t`Pinning down position more makes momentum less certain.`,
          t`This is nature's limit, not a fault of instruments.`,
          t`It rules out Bohr's exact orbits; the quantum model uses orbitals instead.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the de Broglie wavelength of a $0.1\ \mathrm{kg}$ ball moving at $20\ \mathrm{m\,s^{-1}}$ ($h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$).`,
      steps: [
        t`$\lambda = h / mv$`,
        t`$= 6.626 \times 10^{-34} / (0.1 \times 20)$`,
        t`$= 3.31 \times 10^{-34}\ \mathrm{m}$`,
      ],
      answer: t`$3.31 \times 10^{-34}\ \mathrm{m}$: far too small to detect`,
    },
    visualSpec: t`Shrink the box an electron is confined to and watch the spread of its possible speeds widen.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Inverts the formula.",
      remediation: t`$\lambda = h/(mv)$: momentum goes below.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Leaves out the speed.",
      remediation: t`$\lambda$ depends on momentum, $mv$, not mass alone.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Multiplies by the speed.",
      remediation: t`Faster means a shorter wavelength: divide by $v$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks only tiny particles have waves.",
      remediation: "Every moving body has a de Broglie wavelength.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Blames the ball's speed.",
      remediation: "Any speed gives a wavelength; the ball's large mass makes it tiny.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks the ball is too light.",
      remediation: "The ball is heavy, which is exactly why its wavelength is tiny.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: t`Leaves out $4\pi$.`,
      remediation: t`The bound is $h/(4\pi)$: divide by $4\pi m\,\Delta x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Gives the momentum uncertainty.",
      remediation: t`Divide $\Delta p$ by the mass to get $\Delta v$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: t`Uses $2\pi$.`,
      remediation: t`Heisenberg's bound is $h/4\pi$, not $h/2\pi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Blames the instruments.",
      remediation: "The limit is in nature, not in our measuring tools.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Thinks the electron is at rest.",
      remediation: "An electron at rest would have an exact momentum, which the principle forbids.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Thinks position is always exact.",
      remediation: "The more exactly we know position, the less we know momentum.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Thinks the wavelength doubles.",
      remediation: t`$\lambda \propto 1/v$: doubling $v$ halves $\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Squares the change.",
      remediation: t`$\lambda$ varies as $1/v$, not $1/v^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Thinks speed doesn't matter.",
      remediation: t`Momentum $mv$ is in the formula, so speed changes $\lambda$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`An electron ($m = 9.11 \times 10^{-31}\ \mathrm{kg}$) moves at $2.0 \times 10^6\ \mathrm{m\,s^{-1}}$. With $h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$, its de Broglie wavelength is`,
      verify: { kind: "value", inputs: { v: "2" }, params: { q: "electron" } },
      options: [
        { key: "A", text: t`$7.27 \times 10^{-4}\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M2", value: "0.000727000000000000" },
        { key: "B", text: t`$1450\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M3", value: "1450" },
        { key: "C", text: t`$3.64 \times 10^{-10}\ \mathrm{m}$`, correct: true, value: "3.64000000000000e-10" },
        { key: "D", text: t`$2.75 \times 10^{9}\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M1", value: "2750000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = h / mv$`,
          t`$= 6.626 \times 10^{-34} / (9.11 \times 10^{-31} \times 2 \times 10^6)$`,
          t`$= 3.64 \times 10^{-10}\ \mathrm{m}$`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`A moving cricket ball has a de Broglie wavelength too, yet we never see it behave as a wave because`,
      verify: { kind: "value", inputs: {  }, params: { q: "ball" } },
      options: [
        { key: "A", text: t`its wavelength is far too small to detect`, correct: true, value: "too_small" },
        { key: "B", text: t`only electrons and photons have a wavelength`, correct: false, misconceptionId: "C09-M4", value: "no_wave" },
        { key: "C", text: t`it moves too slowly to have one`, correct: false, misconceptionId: "C09-M5", value: "too_slow" },
        { key: "D", text: t`it is too light to have one`, correct: false, misconceptionId: "C09-M6", value: "too_light" },
      ],
      solution: {
        steps: [
          t`Its large mass gives $\lambda$ near $10^{-34}\ \mathrm{m}$.`,
          t`No instrument can detect that.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`An electron ($m = 9.11 \times 10^{-31}\ \mathrm{kg}$) is located within $1.0 \times 10^{-10}\ \mathrm{m}$. With $h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$, the least uncertainty in its speed is`,
      verify: { kind: "value", inputs: { x: "1" }, params: { q: "dv" } },
      options: [
        { key: "A", text: t`$7.27 \times 10^{6}\ \mathrm{m\,s^{-1}}$`, correct: false, misconceptionId: "C09-M7", value: "7270000" },
        { key: "B", text: t`$5.27 \times 10^{-25}\ \mathrm{m\,s^{-1}}$`, correct: false, misconceptionId: "C09-M8", value: "5.27000000000000e-25" },
        { key: "C", text: t`$1.16 \times 10^{6}\ \mathrm{m\,s^{-1}}$`, correct: false, misconceptionId: "C09-M9", value: "1160000" },
        { key: "D", text: t`$5.79 \times 10^{5}\ \mathrm{m\,s^{-1}}$`, correct: true, value: "579000" },
      ],
      solution: {
        steps: [
          t`$\Delta v = h / (4\pi m\,\Delta x)$`,
          t`$= 6.626 \times 10^{-34} / (4\pi \times 9.11 \times 10^{-41})$`,
          t`$= 5.79 \times 10^5\ \mathrm{m\,s^{-1}}$`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`Heisenberg's uncertainty principle says that`,
      verify: { kind: "value", inputs: {  }, params: { q: "meaning" } },
      options: [
        { key: "A", text: t`a particle's position and momentum cannot both be known exactly at once`, correct: true, value: "not_both_exact" },
        { key: "B", text: t`measuring instruments are never perfectly accurate`, correct: false, misconceptionId: "C09-M10", value: "instrument_error" },
        { key: "C", text: t`an electron in an atom is at rest`, correct: false, misconceptionId: "C09-M11", value: "at_rest" },
        { key: "D", text: t`an electron's position can always be found exactly`, correct: false, misconceptionId: "C09-M12", value: "position_exact" },
      ],
      solution: {
        steps: [
          t`$\Delta x \cdot \Delta p \ge h/4\pi$.`,
          t`Position and momentum cannot both be exact at once.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`A particle's speed is doubled, its mass unchanged. Its de Broglie wavelength is`,
      verify: { kind: "value", inputs: {  }, params: { q: "speed" } },
      options: [
        { key: "A", text: t`quartered`, correct: false, misconceptionId: "C09-M14", value: "quartered" },
        { key: "B", text: t`unchanged`, correct: false, misconceptionId: "C09-M15", value: "unchanged" },
        { key: "C", text: t`halved`, correct: true, value: "halved" },
        { key: "D", text: t`doubled`, correct: false, misconceptionId: "C09-M13", value: "doubled" },
      ],
      solution: {
        steps: [
          t`$\lambda = h/mv$, so $\lambda \propto 1/v$.`,
          t`Doubling the speed halves the wavelength.`,
        ],
      },
    },
  ],
};
