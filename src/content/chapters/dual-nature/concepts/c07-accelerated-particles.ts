import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`An electron microscope can show details far finer than any light microscope. It does so by speeding electrons up through tens of thousands of volts. Why does a higher voltage give a sharper picture?`,
    reveal: t`Because faster electrons have shorter matter waves. An electron accelerated through $V$ volts has $\lambda = \dfrac{h}{\sqrt{2meV}}$, about $\dfrac{1.227}{\sqrt{V}}\ \mathrm{nm}$: raise $V$ and $\lambda$ shrinks.`,
  },
  explanation: {
    intuition: [
      t`Particles are usually given energy, not a speed: by an accelerating voltage, or by heat.`,
      t`Kinetic energy and momentum are linked: $K = \dfrac{p^2}{2m}$, so $p = \sqrt{2mK}$.`,
      t`So $\lambda = \dfrac{h}{p}$ $= \dfrac{h}{\sqrt{2mK}}$: more energy, shorter wavelength.`,
      t`A charge $q$ accelerated from rest through $V$ gains $K = qV$.`,
      t`At equal energy, the lighter particle has the longer wavelength.`,
    ],
    formal: [
      {
        title: "Wavelength from kinetic energy",
        points: [
          t`$p = \sqrt{2mK}$, so $\lambda = \dfrac{h}{\sqrt{2mK}}$, with $K$ in joule.`,
          t`$\lambda \propto \dfrac{1}{\sqrt{K}}$: four times the energy halves the wavelength.`,
          t`At equal $K$, $\lambda \propto \dfrac{1}{\sqrt{m}}$: an electron's is about $43$ times a proton's.`,
        ],
      },
      {
        title: "Wavelength from an accelerating voltage",
        points: [
          t`Through $V$ from rest, $K = qV$, so $\lambda = \dfrac{h}{\sqrt{2mqV}}$.`,
          t`For an electron, $\lambda = \dfrac{h}{\sqrt{2m_eeV}}$ $\approx \dfrac{1.227}{\sqrt{V}}\ \mathrm{nm}$.`,
          t`Its momentum is $p = \sqrt{2m_eeV}$ and its speed $v = \sqrt{\dfrac{2eV}{m_e}}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`An electron is accelerated from rest through $120\ \mathrm{V}$. Find its de Broglie wavelength.`,
      steps: [
        t`For an electron, $\lambda \approx \dfrac{1.227}{\sqrt{V}}\ \mathrm{nm}$.`,
        t`$\sqrt{120} \approx 10.95$.`,
        t`$\lambda \approx \dfrac{1.227}{10.95}$ $\approx 0.112\ \mathrm{nm}$.`,
      ],
      answer: t`$0.112\ \mathrm{nm}$`,
    },
    visualSpec: t`Turn up the accelerating voltage on an electron and watch its matter wave shorten as one over the square root of V.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Forgets the $2$ in $\sqrt{2mK}$.`,
      remediation: t`$K = \dfrac{p^2}{2m}$, so $p = \sqrt{2mK}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Divides by $V$ where $\sqrt{V}$ belongs.`,
      remediation: t`$\lambda = \dfrac{h}{\sqrt{2meV}}$: the voltage sits under the square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Takes electronvolts, or volts, as joules.",
      remediation: t`$K = eV$: multiply by $1.6 \times 10^{-19}$ to get joules.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Takes $\lambda$ as proportional to $\dfrac{1}{K}$.`,
      remediation: t`$\lambda = \dfrac{h}{\sqrt{2mK}}$: four times the energy halves $\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Takes $\lambda$ as proportional to $\sqrt{K}$.`,
      remediation: t`More energy means more momentum and a shorter wavelength: $\lambda \propto \dfrac{1}{\sqrt{K}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Takes $\lambda$ as proportional to $K$.`,
      remediation: t`$\lambda \propto \dfrac{1}{\sqrt{K}}$: it falls as the energy rises.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks the heaviest particle has the longest wavelength.",
      remediation: t`At equal $K$, $\lambda \propto \dfrac{1}{\sqrt{m}}$: the lightest has the longest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks a neutral particle has the longest wavelength.",
      remediation: t`$\lambda = \dfrac{h}{\sqrt{2mK}}$ does not depend on charge, only on mass and energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks equal energies mean equal wavelengths.",
      remediation: "Equal momenta give equal wavelengths; at equal energy the masses still differ.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M10",
      mistake: "Uses the electron's mass for a neutron.",
      remediation: t`A neutron's mass is $1.67 \times 10^{-27}\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: t`Uses the photon's $\dfrac{hc}{E}$ for a particle.`,
      remediation: t`$\dfrac{hc}{E}$ is for photons; a particle has $\lambda = \dfrac{h}{\sqrt{2mK}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Uses the mass ratio, as if the speeds were equal.",
      remediation: t`At equal speeds $\lambda \propto \dfrac{1}{m}$; at equal energies $\lambda \propto \dfrac{1}{\sqrt{m}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Turns the ratio upside down.",
      remediation: t`The lighter electron has the longer wavelength: $\dfrac{\lambda_e}{\lambda_p}$ $= \sqrt{\dfrac{m_p}{m_e}} > 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Forgets the square root.",
      remediation: t`$p^2 = 2mK$, so $p = \sqrt{2mK}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.2(iv)" },
      stem: t`An electron is accelerated from rest through a potential difference of $100\ \mathrm{V}$. What is its de Broglie wavelength? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { V: "100" }, params: { ask: "lam_V" } },
      options: [
        { key: "A", text: t`$0.0123\ \mathrm{nm}$`, correct: false, misconceptionId: "C07-M2", value: "0.0123000000000000" },
        { key: "B", text: t`$4.91 \times 10^{-11}\ \mathrm{nm}$`, correct: false, misconceptionId: "C07-M3", value: "4.91000000000000e-11" },
        { key: "C", text: t`$0.123\ \mathrm{nm}$`, correct: true, value: "0.123000000000000" },
        { key: "D", text: t`$0.174\ \mathrm{nm}$`, correct: false, misconceptionId: "C07-M1", value: "0.174000000000000" },
      ],
      solution: {
        steps: [
          t`$K = eV$ $= 1.6 \times 10^{-17}\ \mathrm{J}$, so $p = \sqrt{2m_eK}$ $\approx 5.40 \times 10^{-24}\ \mathrm{kg\,m/s}$.`,
          t`$\lambda$ $= \dfrac{h}{p} \approx 1.23 \times 10^{-10}\ \mathrm{m}$ $= 0.123\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.4" },
      stem: t`An electron of energy $150\ \mathrm{eV}$ has a de Broglie wavelength of $1\ \mathring{A}$. What is the wavelength of an electron of energy $600\ \mathrm{eV}$?`,
      verify: { kind: "value", inputs: { lam1_A: "1", E1: "150", E2: "600" }, params: { ask: "lam_ratio" } },
      options: [
        { key: "A", text: t`$0.25\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C07-M4", value: "0.250000000000000" },
        { key: "B", text: t`$2\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C07-M5", value: "2" },
        { key: "C", text: t`$4\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C07-M6", value: "4" },
        { key: "D", text: t`$0.5\ \mathrm{\mathring{A}}$`, correct: true, value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda \propto \dfrac{1}{\sqrt{K}}$, and $\dfrac{600}{150} = 4$.`,
          t`$\lambda$ $= \dfrac{1\ \mathring{A}}{\sqrt{4}}$ $= 0.5\ \mathring{A}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.1 (iii)" },
      stem: t`An electron, a proton, an $\alpha$-particle and a hydrogen atom all have the same kinetic energy. Which has the longest de Broglie wavelength?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "longest" } },
      options: [
        { key: "A", text: t`All four have the same wavelength`, correct: false, misconceptionId: "C07-M9", value: "all_equal" },
        { key: "B", text: t`The electron`, correct: true, value: "electron_l" },
        { key: "C", text: t`The $\alpha$-particle`, correct: false, misconceptionId: "C07-M7", value: "alpha_l" },
        { key: "D", text: t`The hydrogen atom, which is neutral`, correct: false, misconceptionId: "C07-M8", value: "hydrogen_l" },
      ],
      solution: {
        steps: [
          t`At equal energy, $\lambda$ $= \dfrac{h}{\sqrt{2mK}} \propto \dfrac{1}{\sqrt{m}}$.`,
          t`The electron is by far the lightest, so its wavelength is the longest.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.17" },
      stem: t`Neutrons in a nuclear reactor have kinetic energies of $5 \times 10^{-21}\ \mathrm{J}$. What is their de Broglie wavelength? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $m_n = 1.67 \times 10^{-27}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: { K: "5e-21" }, params: { ask: "lam_K" } },
      options: [
        { key: "A", text: t`$1.62 \times 10^{-10}\ \mathrm{m}$`, correct: true, value: "1.62000000000000e-10" },
        { key: "B", text: t`$2.29 \times 10^{-10}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M1", value: "2.29000000000000e-10" },
        { key: "C", text: t`$6.95 \times 10^{-9}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M10", value: "6.95000000000000e-9" },
        { key: "D", text: t`$3.98 \times 10^{-5}\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M11", value: "3.98000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$p = \sqrt{2mK}$ $= \sqrt{2 \times 1.67 \times 10^{-27} \times 5 \times 10^{-21}}$ $\approx 4.09 \times 10^{-24}\ \mathrm{kg\,m/s}$.`,
          t`$\lambda$ $= \dfrac{6.63 \times 10^{-34}}{4.09 \times 10^{-24}}$ $\approx 1.62 \times 10^{-10}\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.18" },
      stem: t`An electron and a proton have the same kinetic energy. What is the ratio $\dfrac{\lambda_e}{\lambda_p}$ of their de Broglie wavelengths? (Take $m_e$ $= 9.1 \times 10^{-31}\ \mathrm{kg}$, $m_p = 1.67 \times 10^{-27}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C07-M9", value: "1" },
        { key: "B", text: t`$1840$`, correct: false, misconceptionId: "C07-M12", value: "1840" },
        { key: "C", text: t`$0.0233$`, correct: false, misconceptionId: "C07-M13", value: "0.0233000000000000" },
        { key: "D", text: t`$42.8$`, correct: true, value: "42.8000000000000" },
      ],
      solution: {
        steps: [
          t`At equal $K$, $\dfrac{\lambda_e}{\lambda_p}$ $= \sqrt{\dfrac{m_p}{m_e}}$.`,
          t`$\sqrt{\dfrac{1.67 \times 10^{-27}}{9.1 \times 10^{-31}}}$ $= \sqrt{1835} \approx 42.8$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.13" },
      stem: t`An electron moves with a kinetic energy of $150\ \mathrm{eV}$. What is its momentum? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { V: "150" }, params: { ask: "p_V" } },
      options: [
        { key: "A", text: t`$6.61 \times 10^{-24}\ \mathrm{kg\,m/s}$`, correct: true, value: "6.61000000000000e-24" },
        { key: "B", text: t`$4.67 \times 10^{-24}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C07-M1", value: "4.67000000000000e-24" },
        { key: "C", text: t`$1.65 \times 10^{-14}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C07-M3", value: "1.65000000000000e-14" },
        { key: "D", text: t`$4.37 \times 10^{-47}\ \mathrm{kg\,m/s}$`, correct: false, misconceptionId: "C07-M14", value: "4.37000000000000e-47" },
      ],
      solution: {
        steps: [
          t`$K = 150 \times 1.6 \times 10^{-19}$ $= 2.4 \times 10^{-17}\ \mathrm{J}$.`,
          t`$p = \sqrt{2m_eK}$ $= \sqrt{2 \times 9.1 \times 10^{-31} \times 2.4 \times 10^{-17}}$ $\approx 6.61 \times 10^{-24}\ \mathrm{kg\,m/s}$.`,
        ],
      },
    },
  ],
};
