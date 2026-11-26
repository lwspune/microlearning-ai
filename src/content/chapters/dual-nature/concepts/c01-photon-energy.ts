import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A dim violet light can trigger a photocell that even a bright red floodlight cannot. If light were only a wave, brightness should win. Why doesn't it?`,
    reveal: t`Because light arrives in packets, **photons**, each of energy $h\nu$. A violet photon carries more energy than a red one, however many red photons there are.`,
  },
  explanation: {
    intuition: [
      t`Light is emitted and absorbed in packets of energy called **photons**, or quanta.`,
      t`Each photon's energy depends only on its frequency: $E = h\nu$.`,
      t`Higher frequency, shorter wavelength: more energy per photon. Violet beats red.`,
      t`A brighter beam of the same colour carries more photons, not bigger ones.`,
      t`Photons are so small that a lamp sends out billions of billions a second.`,
    ],
    formal: [
      {
        title: "The energy of a photon",
        points: [
          t`$E = h\nu$, with $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, **Planck's constant**.`,
          t`Since $c = \nu\lambda$, also $E = \dfrac{hc}{\lambda}$: inversely proportional to the wavelength.`,
          t`Convert first: $1\ \mathring{A}$ $= 10^{-10}\ \mathrm{m}$, $1\ \mathrm{nm}$ $= 10^{-9}\ \mathrm{m}$.`,
          t`In electronvolt: $1\ \mathrm{eV}$ $= 1.6 \times 10^{-19}\ \mathrm{J}$, so divide joules by $1.6 \times 10^{-19}$.`,
        ],
      },
      {
        title: "Counting photons",
        points: [
          t`A beam of power $P$ delivers $P$ joules each second, in photons of $\dfrac{hc}{\lambda}$ each.`,
          t`So the number of photons a second is $N = \dfrac{P}{E}$ $= \dfrac{P\lambda}{hc}$.`,
          t`At equal power, longer-wavelength light carries more, smaller photons.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $1\ \mathrm{mW}$ laser gives green light of wavelength $500\ \mathrm{nm}$. Find the energy of each photon, in eV, and the number of photons it emits each second. (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      steps: [
        t`$E = \dfrac{hc}{\lambda}$ $= \dfrac{6.63 \times 10^{-34} \times 3 \times 10^8}{5 \times 10^{-7}}$ $\approx 3.98 \times 10^{-19}\ \mathrm{J}$.`,
        t`In eV: $\dfrac{3.98 \times 10^{-19}}{1.6 \times 10^{-19}}$ $\approx 2.49\ \mathrm{eV}$.`,
        t`$N = \dfrac{P}{E}$ $= \dfrac{10^{-3}}{3.98 \times 10^{-19}}$ $\approx 2.51 \times 10^{15}$ a second.`,
      ],
      answer: t`$2.49\ \mathrm{eV}$; $2.51 \times 10^{15}$ photons a second`,
    },
    visualSpec: t`Change the colour of a beam and watch each photon's energy change; change its brightness and watch only the number of photons change.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Leaves the wavelength in $\mathring{A}$.`,
      remediation: t`$1\ \mathring{A}$ $= 10^{-10}\ \mathrm{m}$: convert before using $\dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Uses $\dfrac{h\lambda}{c}$.`,
      remediation: t`$E = h\nu$ and $\nu = \dfrac{c}{\lambda}$, so $E = \dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Uses $\dfrac{h}{\lambda}$, which is the photon's momentum.`,
      remediation: t`$\dfrac{h}{\lambda}$ is momentum; energy is $\dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Multiplies by $e$ to get electronvolt.`,
      remediation: t`$1\ \mathrm{eV}$ $= 1.6 \times 10^{-19}\ \mathrm{J}$, so divide the joules by $1.6 \times 10^{-19}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Leaves the energy in joule.",
      remediation: t`The question asks for eV: divide by $1.6 \times 10^{-19}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Uses $\dfrac{hc}{\nu}$.`,
      remediation: t`With a frequency given, $E = h\nu$ directly; $\dfrac{hc}{\lambda}$ needs a wavelength.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Multiplies the power by the photon energy.",
      remediation: t`Power is energy per second; divide it by the energy of one photon: $N = \dfrac{P}{E}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Divides the photon energy by the power.",
      remediation: t`$N = \dfrac{P}{E}$: the power over the energy of one photon.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: t`Multiplies by $\lambda$.`,
      remediation: t`Shorter waves carry more energy: $E = \dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: t`Turns $\dfrac{hc}{\lambda}$ upside down.`,
      remediation: t`$E = h\nu = \dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks equal power means equal numbers of photons.",
      remediation: "Photons of different colours carry different energies, so equal power needs different numbers.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks red photons carry more energy than blue.",
      remediation: t`Red has the longer wavelength, so less energy per photon: $E = \dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks steady light is a wave with no photons.",
      remediation: t`All light, steady or not, is emitted and absorbed in photons of energy $h\nu$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Solved Ex.14.2" },
      stem: t`What is the energy of a photon of ultraviolet light of wavelength $3000\ \mathring{A}$? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      verify: { kind: "value", inputs: { lam_A: "3000" }, params: { ask: "E_lam" } },
      options: [
        { key: "A", text: t`$6.63 \times 10^{-19}\ \mathrm{J}$`, correct: true, value: "6.63000000000000e-19" },
        { key: "B", text: t`$6.63 \times 10^{-29}\ \mathrm{J}$`, correct: false, misconceptionId: "C01-M1", value: "6.63000000000000e-29" },
        { key: "C", text: t`$6.63 \times 10^{-49}\ \mathrm{J}$`, correct: false, misconceptionId: "C01-M2", value: "6.63000000000000e-49" },
        { key: "D", text: t`$2.21 \times 10^{-27}\ \mathrm{J}$`, correct: false, misconceptionId: "C01-M3", value: "2.21000000000000e-27" },
      ],
      solution: {
        steps: [
          t`$\lambda = 3000\ \mathring{A}$ $= 3 \times 10^{-7}\ \mathrm{m}$.`,
          t`$E = \dfrac{hc}{\lambda}$ $= \dfrac{6.63 \times 10^{-34} \times 3 \times 10^8}{3 \times 10^{-7}}$ $= 6.63 \times 10^{-19}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.7" },
      stem: t`What is the energy, in electronvolt, of each photon of monochromatic light of frequency $5 \times 10^{14}\ \mathrm{Hz}$? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { nu: "5e14" }, params: { ask: "E_eV" } },
      options: [
        { key: "A", text: t`$2.07\ \mathrm{eV}$`, correct: true, value: "2.07000000000000" },
        { key: "B", text: t`$5.3 \times 10^{-38}\ \mathrm{eV}$`, correct: false, misconceptionId: "C01-M4", value: "5.30000000000000e-38" },
        { key: "C", text: t`$3.31 \times 10^{-19}\ \mathrm{eV}$`, correct: false, misconceptionId: "C01-M5", value: "3.31000000000000e-19" },
        { key: "D", text: t`$2.49 \times 10^{-21}\ \mathrm{eV}$`, correct: false, misconceptionId: "C01-M6", value: "2.49000000000000e-21" },
      ],
      solution: {
        steps: [
          t`$E = h\nu$ $= 6.63 \times 10^{-34} \times 5 \times 10^{14}$ $\approx 3.32 \times 10^{-19}\ \mathrm{J}$.`,
          t`In eV: $\dfrac{3.32 \times 10^{-19}}{1.6 \times 10^{-19}}$ $\approx 2.07\ \mathrm{eV}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.6(v)" },
      stem: t`What is the energy of a photon of wavelength $\lambda$? ($h$ is Planck's constant and $c$ the speed of light.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$hc\lambda$`, correct: false, misconceptionId: "C01-M9", value: "hclam" },
        { key: "B", text: t`$\dfrac{\lambda}{hc}$`, correct: false, misconceptionId: "C01-M10", value: "lam_over_hc" },
        { key: "C", text: t`$\dfrac{hc}{\lambda}$`, correct: true, value: "hc_over_lam" },
        { key: "D", text: t`$\dfrac{h\lambda}{c}$`, correct: false, misconceptionId: "C01-M2", value: "hlam_over_c" },
      ],
      solution: {
        steps: [
          t`$E = h\nu$, and $\nu = \dfrac{c}{\lambda}$.`,
          t`So $E = \dfrac{hc}{\lambda}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Solved Ex.14.3" },
      stem: t`Light of wavelength $4000\ \mathring{A}$ falls on a surface with a power of $0.1\ \mathrm{W}$. How many photons arrive each second? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      verify: { kind: "value", inputs: { P: "0.1", lam_A: "4000" }, params: { ask: "N" } },
      options: [
        { key: "A", text: t`$2.01 \times 10^{17}$`, correct: true, value: "201000000000000000" },
        { key: "B", text: t`$2.01 \times 10^{27}$`, correct: false, misconceptionId: "C01-M1", value: "2009999999999999990973857792" },
        { key: "C", text: t`$4.97 \times 10^{-20}$`, correct: false, misconceptionId: "C01-M7", value: "4.97000000000000e-20" },
        { key: "D", text: t`$4.97 \times 10^{-18}$`, correct: false, misconceptionId: "C01-M8", value: "4.97000000000000e-18" },
      ],
      solution: {
        steps: [
          t`$E = \dfrac{hc}{\lambda}$ $= \dfrac{6.63 \times 10^{-34} \times 3 \times 10^8}{4 \times 10^{-7}}$ $\approx 4.97 \times 10^{-19}\ \mathrm{J}$.`,
          t`$N = \dfrac{P}{E}$ $= \dfrac{0.1}{4.97 \times 10^{-19}}$ $\approx 2.01 \times 10^{17}$ a second.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.1 (iv)" },
      stem: t`A red lamp and a blue lamp give out light of the same power. Which emits more photons each second?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "redblue" } },
      options: [
        { key: "A", text: t`The red lamp`, correct: true, value: "red_more" },
        { key: "B", text: t`Both emit the same number`, correct: false, misconceptionId: "C01-M11", value: "equal_n" },
        { key: "C", text: t`The blue lamp`, correct: false, misconceptionId: "C01-M12", value: "blue_more" },
        { key: "D", text: t`Neither: steady light is a wave, not a stream of photons`, correct: false, misconceptionId: "C01-M13", value: "no_photons" },
      ],
      solution: {
        steps: [
          t`Red light has the longer wavelength, so each red photon carries less energy.`,
          t`For the same power, the red lamp must send out more photons each second.`,
        ],
      },
    },
  ],
};
