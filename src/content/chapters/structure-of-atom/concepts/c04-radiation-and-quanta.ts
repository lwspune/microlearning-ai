import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Red light, however bright, cannot expose photographic film made for blue light, while a dim blue light can. Why does colour beat brightness?`,
    reveal: t`Light comes in packets, quanta, of energy $h\nu$. A blue quantum carries more energy than a red one, whatever the brightness.`,
  },
  explanation: {
    intuition: [
      t`Light is a wave: $c = \nu\lambda$.`,
      t`Shorter wavelength means higher frequency.`,
      t`Energy comes in quanta: $E = h\nu$.`,
      t`Hot hydrogen gives light of only certain wavelengths: a line spectrum.`,
    ],
    formal: [
      {
        title: "Wave quantities",
        points: [
          t`$c = \nu\lambda$, with $c = 3 \times 10^8$ m/s.`,
          t`Wavenumber $\bar\nu = 1/\lambda$ (in $\mathrm{m^{-1}}$ or $\mathrm{cm^{-1}}$).`,
          t`Convert nm to m: $1\ \mathrm{nm} = 10^{-9}$ m.`,
        ],
      },
      {
        title: "Quanta",
        points: [
          t`$E = h\nu = hc/\lambda$, with $h = 6.626 \times 10^{-34}$ J s.`,
          t`Blue (400 nm) photons carry more energy than red (750 nm).`,
          t`Hydrogen gives the simplest line spectrum.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the frequency of red light, 750 nm.`,
      steps: [
        t`$\nu = c/\lambda = 3 \times 10^8 / (750 \times 10^{-9})$.`,
        t`$= 4.00 \times 10^{14}$ Hz.`,
      ],
      answer: t`$4.00 \times 10^{14}$ Hz`,
    },
    visualSpec: t`Slide along the spectrum and watch wavelength, frequency and photon energy change together.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Divides wavelength by speed.",
      remediation: t`$\nu = c/\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Forgets to convert nm to m.",
      remediation: t`400 nm $= 400 \times 10^{-9}$ m.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Multiplies $c$ by $\lambda$.`,
      remediation: t`$\nu = c \div \lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks longer wavelength means more energy.",
      remediation: t`$E = hc/\lambda$: shorter wavelength, more energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks all light carries the same energy per photon.",
      remediation: "Photon energy depends on frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks photon energy depends on brightness.",
      remediation: t`Brightness is the number of photons; each one's energy is $h\nu$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: t`Computes $h\lambda/c$.`,
      remediation: t`$E = hc/\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Forgets to convert nm to m.",
      remediation: t`Use $\lambda = 400 \times 10^{-9}$ m.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: t`Multiplies $h$ by $c$ only.`,
      remediation: t`Divide $hc$ by the wavelength.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Works in centimetres.",
      remediation: t`In $\mathrm{m^{-1}}$, use $\lambda$ in metres.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Gives the wavelength.",
      remediation: t`Wavenumber is $1/\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Gives the frequency.",
      remediation: t`Wavenumber $= 1/\lambda$, not $c/\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: t`Confuses $h$ with Avogadro's number.`,
      remediation: t`$h = 6.626 \times 10^{-34}$ J s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: t`Confuses $h$ with the atomic mass unit.`,
      remediation: t`$h = 6.626 \times 10^{-34}$ J s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Gets the power of ten wrong.",
      remediation: t`$h = 6.626 \times 10^{-34}$ J s.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.4" },
      stem: t`Violet light has wavelength 400 nm. What is its frequency? ($c = 3 \times 10^8$ m/s)`,
      verify: { kind: "value", inputs: { l: "400" }, params: { q: "frequency" } },
      options: [
        { key: "A", text: t`$7.5 \times 10^{5}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C04-M2", value: "750000" },
        { key: "B", text: t`$7.5 \times 10^{14}\ \mathrm{Hz}$`, correct: true, value: "750000000000000" },
        { key: "C", text: t`$120\ \mathrm{Hz}$`, correct: false, misconceptionId: "C04-M3", value: "120" },
        { key: "D", text: t`$1.33 \times 10^{-15}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C04-M1", value: "1.33000000000000e-15" },
      ],
      solution: {
        steps: [
          t`$\nu = 3 \times 10^8 / (400 \times 10^{-9})$.`,
          t`$= 7.5 \times 10^{14}$ Hz.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.5" },
      stem: t`Blue light (400 nm) and red light (750 nm): which carries more energy per photon?`,
      verify: { kind: "value", inputs: {  }, params: { q: "energy_compare" } },
      options: [
        { key: "A", text: t`red light`, correct: false, misconceptionId: "C04-M4", value: "red" },
        { key: "B", text: t`both the same`, correct: false, misconceptionId: "C04-M5", value: "equal" },
        { key: "C", text: t`blue light`, correct: true, value: "blue" },
        { key: "D", text: t`whichever is brighter`, correct: false, misconceptionId: "C04-M6", value: "brightness" },
      ],
      solution: {
        steps: [
          t`$E = hc/\lambda$.`,
          t`Shorter wavelength, blue, has more energy.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`What is the energy of one photon of 400 nm light? ($h = 6.626 \times 10^{-34}$ J s, $c = 3 \times 10^8$ m/s)`,
      verify: { kind: "value", inputs: { l: "400" }, params: { q: "photon" } },
      options: [
        { key: "A", text: t`$4.97 \times 10^{-28}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M8", value: "4.97000000000000e-28" },
        { key: "B", text: t`$1.99 \times 10^{-25}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M9", value: "1.99000000000000e-25" },
        { key: "C", text: t`$8.83 \times 10^{-49}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M7", value: "8.83000000000000e-49" },
        { key: "D", text: t`$4.97 \times 10^{-19}\ \mathrm{J}$`, correct: true, value: "4.97000000000000e-19" },
      ],
      solution: {
        steps: [
          t`$E = 6.626 \times 10^{-34} \times 3 \times 10^8 / (400 \times 10^{-9})$.`,
          t`$= 4.97 \times 10^{-19}$ J.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`What is the wavenumber of light of wavelength 500 nm, in $\mathrm{m^{-1}}$?`,
      verify: { kind: "value", inputs: { l: "500" }, params: { q: "wavenumber" } },
      options: [
        { key: "A", text: t`$2 \times 10^{6}\ \mathrm{m^{-1}}$`, correct: true, value: "2000000" },
        { key: "B", text: t`$5 \times 10^{-7}\ \mathrm{m^{-1}}$`, correct: false, misconceptionId: "C04-M11", value: "5.00000000000000e-7" },
        { key: "C", text: t`$6 \times 10^{14}\ \mathrm{m^{-1}}$`, correct: false, misconceptionId: "C04-M12", value: "600000000000000" },
        { key: "D", text: t`$20000\ \mathrm{m^{-1}}$`, correct: false, misconceptionId: "C04-M10", value: "20000" },
      ],
      solution: {
        steps: [
          t`$\lambda = 500 \times 10^{-9}$ m.`,
          t`$1/\lambda = 2.0 \times 10^6\ \mathrm{m^{-1}}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.1 (B)" },
      stem: t`The value of Planck's constant is`,
      verify: { kind: "value", inputs: {  }, params: { q: "planck" } },
      options: [
        { key: "A", text: t`$6.626 \times 10^{-28}$ J s`, correct: false, misconceptionId: "C04-M15", value: "h_6_626e_28" },
        { key: "B", text: t`$6.626 \times 10^{-34}$ J s`, correct: true, value: "h_6_626e_34" },
        { key: "C", text: t`$6.023 \times 10^{-24}$ J s`, correct: false, misconceptionId: "C04-M13", value: "h_6_023e_24" },
        { key: "D", text: t`$1.667 \times 10^{-28}$ J s`, correct: false, misconceptionId: "C04-M14", value: "h_1_667e_28" },
      ],
      solution: {
        steps: [
          t`Planck's constant is tiny.`,
          t`$6.626 \times 10^{-34}$ J s.`,
        ],
      },
    },
  ],
};
