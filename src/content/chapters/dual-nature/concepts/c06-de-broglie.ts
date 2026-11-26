import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`If light, a wave, can behave like particles, could particles such as electrons behave like waves? And if so, why does a cricket ball never seem to diffract?`,
    reveal: t`They can. De Broglie proposed that every moving particle has a wavelength $\lambda = \dfrac{h}{mv}$. For a cricket ball that wavelength is far smaller than any atom, so its wave nature never shows.`,
  },
  explanation: {
    intuition: [
      t`Light, a wave, also behaves as particles; de Broglie guessed that matter, made of particles, also behaves as waves.`,
      t`A photon's momentum is $p = \dfrac{h}{\lambda}$; turned round, $\lambda = \dfrac{h}{p}$.`,
      t`De Broglie applied this to every moving particle: its **matter wave** has $\lambda = \dfrac{h}{mv}$.`,
      t`Heavier or faster means more momentum, so a shorter wavelength.`,
      t`For everyday objects $\lambda$ is absurdly small; for electrons it is about the size of an atom.`,
    ],
    formal: [
      {
        title: "The de Broglie relation",
        points: [
          t`A particle of momentum $p = mv$ has a wave of wavelength $\lambda = \dfrac{h}{p}$ $= \dfrac{h}{mv}$.`,
          t`Equal wavelengths mean equal momenta, whatever the masses.`,
          t`A particle at rest has $p = 0$: no matter wave is associated with it.`,
        ],
      },
      {
        title: "When the wave shows",
        points: [
          t`Wave effects such as diffraction show only when $\lambda$ is comparable to the obstacles or gaps.`,
          t`A $45\ \mathrm{kg}$ runner has $\lambda \sim 10^{-35}\ \mathrm{m}$: no gap is ever that small.`,
          t`An electron at a few volts has $\lambda \sim 10^{-10}\ \mathrm{m}$, the spacing of atoms in a crystal.`,
          t`With equal momenta, $K = \dfrac{p^2}{2m}$, so the lighter particle has the larger kinetic energy.`,
        ],
      },
    ],
    worked: {
      prompt: t`A neutron ($m$ $= 1.67 \times 10^{-27}\ \mathrm{kg}$) moves at $2000\ \mathrm{m/s}$. Find its de Broglie wavelength. (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$.)`,
      steps: [
        t`$p = mv$ $= 1.67 \times 10^{-27} \times 2000$ $= 3.34 \times 10^{-24}\ \mathrm{kg\,m/s}$.`,
        t`$\lambda = \dfrac{h}{p}$ $= \dfrac{6.63 \times 10^{-34}}{3.34 \times 10^{-24}}$ $\approx 1.99 \times 10^{-10}\ \mathrm{m}$.`,
        t`About $2\ \mathring{A}$: comparable to the spacing of atoms, so such neutrons diffract from crystals.`,
      ],
      answer: t`$1.99 \times 10^{-10}\ \mathrm{m}$`,
    },
    visualSpec: t`Speed a particle up and watch its matter wave shorten; swap an electron for a ball and watch the wave shrink beyond sight.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Uses the speed of light for the electron's speed.",
      remediation: t`Use the particle's own speed: here $\dfrac{c}{5}$ $= 6 \times 10^7\ \mathrm{m/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Treats the electron as a photon, using $\dfrac{hc}{K}$.`,
      remediation: t`$\lambda = \dfrac{hc}{E}$ holds only for photons; for a particle, $\lambda = \dfrac{h}{mv}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: t`Turns $\dfrac{h}{mv}$ upside down.`,
      remediation: t`$\lambda = \dfrac{h}{p}$: more momentum, shorter wavelength.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M4",
      mistake: t`Leaves the wavelength in $\mathring{A}$.`,
      remediation: t`$1\ \mathring{A}$ $= 10^{-10}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Uses the electron's mass for a proton.",
      remediation: t`A proton's mass is $1.67 \times 10^{-27}\ \mathrm{kg}$, about 1840 times the electron's.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks equal wavelengths mean equal kinetic energies.",
      remediation: t`Equal wavelengths mean equal momenta; $K = \dfrac{p^2}{2m}$ then depends on the mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Turns the energy ratio upside down.",
      remediation: t`With equal $p$, $K \propto \dfrac{1}{m}$: the lighter electron has the larger energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Takes the square root of the mass ratio.",
      remediation: t`$K = \dfrac{p^2}{2m}$ with $p$ fixed: $\dfrac{K_e}{K_p}$ $= \dfrac{m_p}{m_e}$, no square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks any lighter particle, such as an electron, would do.",
      remediation: t`Equal momenta: $m_xv_x = m_\alpha v_\alpha$, so $m_x = \dfrac{m_\alpha}{4}$ $= 1\ \mathrm{u}$, a proton or neutron.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Multiplies the mass by 4 instead of dividing.",
      remediation: t`The faster particle must be lighter to have the same momentum: $m_x = \dfrac{4\ \mathrm{u}}{4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks the same wavelength means the same particle.",
      remediation: "Same wavelength means same momentum; different masses at different speeds can share it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: t`Thinks $\lambda = \dfrac{h}{m}$ for a particle at rest.`,
      remediation: t`$\lambda = \dfrac{h}{mv}$; with $v = 0$ there is no wave at all.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks a particle at rest has a wavelength of zero.",
      remediation: t`As $v \to 0$, $\lambda = \dfrac{h}{mv}$ grows without limit; at rest none is associated.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Thinks every electron has one fixed wavelength.",
      remediation: t`$\lambda$ depends on the momentum: a faster electron has a shorter wavelength.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Leaves the speed in km/h.",
      remediation: t`$8\ \mathrm{km/h}$ $= \dfrac{8000}{3600}\ \mathrm{m/s} \approx 2.22\ \mathrm{m/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M16",
      mistake: "Divides by the mass alone.",
      remediation: t`$\lambda = \dfrac{h}{mv}$: the momentum, mass times speed, is in the denominator.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.6(vii)" },
      stem: t`What is the de Broglie wavelength of an electron moving at one fifth of the speed of light? Neglect relativistic effects. (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$, $m_e = 9 \times 10^{-31}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: { m: "9e-31", k: "0.2" }, params: { ask: "lam_e" } },
      options: [
        { key: "A", text: t`$2.46 \times 10^{-12}\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M1", value: "2.46000000000000e-12" },
        { key: "B", text: t`$1.23 \times 10^{-10}\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M2", value: "1.23000000000000e-10" },
        { key: "C", text: t`$8.14 \times 10^{10}\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M3", value: "81400000000" },
        { key: "D", text: t`$1.23 \times 10^{-11}\ \mathrm{m}$`, correct: true, value: "1.23000000000000e-11" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{3 \times 10^8}{5}$ $= 6 \times 10^7\ \mathrm{m/s}$, so $p$ $= 9 \times 10^{-31} \times 6 \times 10^7$ $= 5.4 \times 10^{-23}\ \mathrm{kg\,m/s}$.`,
          t`$\lambda$ $= \dfrac{6.63 \times 10^{-34}}{5.4 \times 10^{-23}}$ $\approx 1.23 \times 10^{-11}\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.16" },
      stem: t`What is the speed of a proton whose de Broglie wavelength is $0.08\ \mathring{A}$? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $m_p = 1.67 \times 10^{-27}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: { lam_A: "0.08" }, params: { ask: "v_p" } },
      options: [
        { key: "A", text: t`$49600\ \mathrm{m/s}$`, correct: true, value: "49600" },
        { key: "B", text: t`$2.02 \times 10^{-5}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C06-M3", value: "2.02000000000000e-5" },
        { key: "C", text: t`$4.96 \times 10^{-6}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C06-M4", value: "4.96000000000000e-6" },
        { key: "D", text: t`$9.11 \times 10^{7}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C06-M5", value: "91100000" },
      ],
      solution: {
        steps: [
          t`$\lambda = 0.08\ \mathring{A}$ $= 8 \times 10^{-12}\ \mathrm{m}$.`,
          t`$v = \dfrac{h}{m_p\lambda}$ $= \dfrac{6.63 \times 10^{-34}}{1.67 \times 10^{-27} \times 8 \times 10^{-12}}$ $\approx 4.96 \times 10^4\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.14" },
      stem: t`An electron and a proton have the same de Broglie wavelength. What is the ratio of the electron's kinetic energy to the proton's? (Take $m_e$ $= 9.1 \times 10^{-31}\ \mathrm{kg}$, $m_p = 1.67 \times 10^{-27}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "Kratio" } },
      options: [
        { key: "A", text: t`$1840$`, correct: true, value: "1840" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C06-M6", value: "1" },
        { key: "C", text: t`$5.45 \times 10^{-4}$`, correct: false, misconceptionId: "C06-M7", value: "0.000545000000000000" },
        { key: "D", text: t`$42.8$`, correct: false, misconceptionId: "C06-M8", value: "42.8000000000000" },
      ],
      solution: {
        steps: [
          t`Equal wavelengths mean equal momenta, and $K = \dfrac{p^2}{2m}$.`,
          t`$\dfrac{K_e}{K_p}$ $= \dfrac{m_p}{m_e}$ $= \dfrac{1.67 \times 10^{-27}}{9.1 \times 10^{-31}}$ $\approx 1840$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.15" },
      stem: t`Two particles have the same de Broglie wavelength, and one moves four times as fast as the other. The slower one is an $\alpha$-particle, of mass $4\ \mathrm{u}$. What could the faster one be?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "alpha" } },
      options: [
        { key: "A", text: t`Another $\alpha$-particle`, correct: false, misconceptionId: "C06-M11", value: "alpha_again" },
        { key: "B", text: t`A proton or a neutron`, correct: true, value: "proton_or_neutron" },
        { key: "C", text: t`An electron`, correct: false, misconceptionId: "C06-M9", value: "electron_x" },
        { key: "D", text: t`An oxygen nucleus`, correct: false, misconceptionId: "C06-M10", value: "sixteen_u" },
      ],
      solution: {
        steps: [
          t`Equal wavelengths mean equal momenta: $m_xv_x = m_\alpha v_\alpha$.`,
          t`$v_x = 4v_\alpha$, so $m_x = \dfrac{4\ \mathrm{u}}{4}$ $= 1\ \mathrm{u}$: a proton or a neutron.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.5" },
      stem: t`Does an electron at rest have a de Broglie wavelength?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rest" } },
      options: [
        { key: "A", text: t`No: at rest $p = 0$`, correct: true, value: "no_lambda" },
        { key: "B", text: t`Yes: $\lambda = \dfrac{h}{m_e}$`, correct: false, misconceptionId: "C06-M12", value: "h_over_m" },
        { key: "C", text: t`Yes: its wavelength is zero`, correct: false, misconceptionId: "C06-M13", value: "zero_lambda" },
        { key: "D", text: t`Yes: the same as when it moves`, correct: false, misconceptionId: "C06-M14", value: "fixed_lambda" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{h}{p}$, and at rest $p = 0$.`,
          t`So no matter wave is associated with an electron at rest.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Solved Ex.14.5" },
      stem: t`A student of mass $45\ \mathrm{kg}$ runs at $8\ \mathrm{km/h}$. What is the student's de Broglie wavelength? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$.)`,
      verify: { kind: "value", inputs: { m: "45", v_kmh: "8" }, params: { ask: "lam_kmh" } },
      options: [
        { key: "A", text: t`$1.84 \times 10^{-36}\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M15", value: "1.84000000000000e-36" },
        { key: "B", text: t`$1.47 \times 10^{-35}\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M16", value: "1.47000000000000e-35" },
        { key: "C", text: t`$6.63 \times 10^{-36}\ \mathrm{m}$`, correct: true, value: "6.63000000000000e-36" },
        { key: "D", text: t`$1.51 \times 10^{35}\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M3", value: "150999999999999991205399126740041728" },
      ],
      solution: {
        steps: [
          t`$v$ $= \dfrac{8000}{3600} \approx 2.22\ \mathrm{m/s}$, so $p = 45 \times 2.22$ $= 100\ \mathrm{kg\,m/s}$.`,
          t`$\lambda$ $= \dfrac{6.63 \times 10^{-34}}{100}$ $= 6.63 \times 10^{-36}\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
