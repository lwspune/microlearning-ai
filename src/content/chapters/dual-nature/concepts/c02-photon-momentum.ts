import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Space engineers plan sails that are pushed along by nothing but sunlight. How can light, which has no mass, push anything?`,
    reveal: t`Each photon carries momentum, $p = \dfrac{h}{\lambda}$. When photons bounce off a sail, they hand over that momentum, a tiny but steady push.`,
  },
  explanation: {
    intuition: [
      t`A photon has energy $h\nu$ but no rest mass, and it always moves at the speed of light.`,
      t`Even so, it carries **momentum**: it can push what it strikes.`,
      t`For a particle moving at $c$ with no rest mass, energy and momentum are tied by $E = pc$.`,
      t`So the shorter the wavelength, the larger a photon's momentum as well as its energy.`,
    ],
    formal: [
      {
        title: "Momentum of a photon",
        points: [
          t`$p = \dfrac{E}{c}$ $= \dfrac{h\nu}{c}$ $= \dfrac{h}{\lambda}$, in $\mathrm{kg\,m/s}$.`,
          t`$E = pc$ holds for massless particles moving at $c$, such as photons.`,
          t`It does not hold for an electron, which has rest mass and moves slower than $c$.`,
        ],
      },
      {
        title: "Wave-particle duality",
        points: [
          t`Interference, diffraction and polarization can be explained only if light is a **wave**.`,
          t`The photoelectric effect and Compton scattering can be explained only if light is **particles**, photons.`,
          t`Light has both natures; an experiment shows one of them, never both at once.`,
          t`Its wave and particle properties are linked by $E = h\nu$ and $p = \dfrac{h}{\lambda}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the momentum and the energy of an X-ray photon of wavelength $0.1\ \mathrm{nm}$. (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      steps: [
        t`$p = \dfrac{h}{\lambda}$ $= \dfrac{6.63 \times 10^{-34}}{10^{-10}}$ $= 6.63 \times 10^{-24}\ \mathrm{kg\,m/s}$.`,
        t`$E = pc$ $= 6.63 \times 10^{-24} \times 3 \times 10^8$ $\approx 1.99 \times 10^{-15}\ \mathrm{J}$.`,
      ],
      answer: t`$6.63 \times 10^{-24}\ \mathrm{kg\,m/s}$; $1.99 \times 10^{-15}\ \mathrm{J}$`,
    },
    visualSpec: t`Shrink a photon's wavelength and watch both its energy and its momentum grow together.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Gives the photon's energy instead of its momentum.",
      remediation: t`$h\nu = \dfrac{hc}{\lambda}$ is energy; momentum is that divided by $c$: $\dfrac{h}{\lambda}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Multiplies $h$ by $\lambda$.`,
      remediation: t`Shorter waves carry more momentum: $p = \dfrac{h}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Multiplies by $c$ instead of dividing.`,
      remediation: t`$E = pc$, so $p = \dfrac{E}{c}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Thinks $E = pc$ holds for every particle.`,
      remediation: t`$E = pc$ holds only for massless particles at $c$; an electron has rest mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks a massless photon has no momentum.",
      remediation: t`A photon has no rest mass, yet carries momentum $\dfrac{h}{\lambda}$: light exerts pressure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Uses $\dfrac{1}{2}pv$ for the energy of everything.`,
      remediation: t`$\dfrac{1}{2}pv$ is the kinetic energy of a slow particle; a photon's energy is $pc$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Leaves the wavelength in nm.",
      remediation: t`$1\ \mathrm{nm}$ $= 10^{-9}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Leaves the energy in eV.",
      remediation: t`$1\ \mathrm{eV}$ $= 1.6 \times 10^{-19}\ \mathrm{J}$: convert before dividing by $c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Divides by $c^2$, as if finding a mass.`,
      remediation: t`$p = \dfrac{E}{c}$; $\dfrac{E}{c^2}$ would be a mass, which a photon does not have at rest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks light is only a wave.",
      remediation: "A wave spreads its energy smoothly and cannot explain the photoelectric effect; photons can.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks light is only particles.",
      remediation: "Interference and diffraction need waves; colliding particles cannot produce fringes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks light switches between wave and particle as time passes.",
      remediation: "Light has both natures all the time; which one shows depends on the experiment.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.5(v)" },
      stem: t`What is the momentum of a photon of frequency $\nu$? ($h$ is Planck's constant and $c$ the speed of light.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{h\nu}{c}$`, correct: true, value: "hnu_over_c" },
        { key: "B", text: t`$h\nu$`, correct: false, misconceptionId: "C02-M1", value: "hnu" },
        { key: "C", text: t`$h\lambda$`, correct: false, misconceptionId: "C02-M2", value: "hlam" },
        { key: "D", text: t`$h\nu c$`, correct: false, misconceptionId: "C02-M3", value: "hnuc" },
      ],
      solution: {
        steps: [
          t`$E = h\nu$ and, for a photon, $E = pc$.`,
          t`So $p = \dfrac{h\nu}{c}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.1 (v)" },
      stem: t`For which does the equation $E = pc$ hold?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "Epc" } },
      options: [
        { key: "A", text: t`For both a photon and an electron`, correct: false, misconceptionId: "C02-M4", value: "both" },
        { key: "B", text: t`For an electron, but not for a photon`, correct: false, misconceptionId: "C02-M5", value: "electron_only" },
        { key: "C", text: t`For neither: energy is always $\dfrac{1}{2}pv$`, correct: false, misconceptionId: "C02-M6", value: "half_pv" },
        { key: "D", text: t`For a photon, but not for an electron`, correct: true, value: "photon_only" },
      ],
      solution: {
        steps: [
          t`$E = pc$ holds for a massless particle moving at $c$.`,
          t`A photon is one; an electron has rest mass, so it does not hold for an electron.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`What is the momentum of a photon of green light of wavelength $500\ \mathrm{nm}$? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      verify: { kind: "value", inputs: { lam_nm: "500" }, params: { ask: "p_lam" } },
      options: [
        { key: "A", text: t`$1.33 \times 10^{-36}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C02-M7", value: "1.33000000000000e-36" },
        { key: "B", text: t`$1.33 \times 10^{-27}\ \mathrm{kg\,m/s}$`, correct: true, value: "1.33000000000000e-27" },
        { key: "C", text: t`$3.98 \times 10^{-19}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C02-M1", value: "3.98000000000000e-19" },
        { key: "D", text: t`$3.31 \times 10^{-40}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C02-M2", value: "3.31000000000000e-40" },
      ],
      solution: {
        steps: [
          t`$\lambda = 500\ \mathrm{nm}$ $= 5 \times 10^{-7}\ \mathrm{m}$.`,
          t`$p = \dfrac{h}{\lambda}$ $= \dfrac{6.63 \times 10^{-34}}{5 \times 10^{-7}}$ $\approx 1.33 \times 10^{-27}\ \mathrm{kg\,m/s}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`A photon has an energy of $3\ \mathrm{eV}$. What is its momentum? (Take $c$ $= 3 \times 10^8\ \mathrm{m/s}$, $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$.)`,
      verify: { kind: "value", inputs: { E_eV: "3" }, params: { ask: "p_E" } },
      options: [
        { key: "A", text: t`$5.33 \times 10^{-36}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C02-M9", value: "5.33000000000000e-36" },
        { key: "B", text: t`$1.6 \times 10^{-27}\ \mathrm{kg\,m/s}$`, correct: true, value: "1.60000000000000e-27" },
        { key: "C", text: t`$1.44 \times 10^{-10}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C02-M3", value: "1.44000000000000e-10" },
        { key: "D", text: t`$1 \times 10^{-8}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C02-M8", value: "1.00000000000000e-8" },
      ],
      solution: {
        steps: [
          t`$E = 3 \times 1.6 \times 10^{-19}$ $= 4.8 \times 10^{-19}\ \mathrm{J}$.`,
          t`$p = \dfrac{E}{c}$ $= \dfrac{4.8 \times 10^{-19}}{3 \times 10^8}$ $= 1.6 \times 10^{-27}\ \mathrm{kg\,m/s}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.2 (v)" },
      stem: t`Light shows interference, which needs waves, and the photoelectric effect, which needs photons. What does this tell us about light?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dual" } },
      options: [
        { key: "A", text: t`It switches between being a wave and being particles as time passes`, correct: false, misconceptionId: "C02-M12", value: "switches" },
        { key: "B", text: t`It behaves as a wave in some experiments and as particles in others`, correct: true, value: "both_natures" },
        { key: "C", text: t`It is only a wave: the photoelectric effect is a wave effect too`, correct: false, misconceptionId: "C02-M10", value: "wave_only" },
        { key: "D", text: t`It is only particles: interference comes from photons colliding`, correct: false, misconceptionId: "C02-M11", value: "particle_only" },
      ],
      solution: {
        steps: [
          t`Interference can only be explained by waves; the photoelectric effect only by photons.`,
          t`So light has both natures, and each experiment shows one of them.`,
        ],
      },
    },
  ],
};
