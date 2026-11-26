import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A guitarist turns a peg and the note rises; pressing a fret shortens the string and it rises again. The thick strings sound lowest. What sets a string's pitch?`,
    reveal: t`Its length, tension and mass per metre: $n = \dfrac{1}{2L}\sqrt{\dfrac{T}{m}}$. Shorter, tighter or lighter strings sound higher.`,
  },
  explanation: {
    intuition: [
      t`A wave on a stretched string travels faster when the string is pulled tighter.`,
      t`It travels slower on a heavier string, one with more mass in each metre.`,
      t`The string's length fixes the wavelength of each mode: $\lambda = 2L$ for the fundamental.`,
      t`Speed over wavelength gives the frequency, the note you hear.`,
    ],
    formal: [
      {
        title: "Speed on a string",
        points: [
          t`A transverse wave on a string under **tension** $T$ travels at $v = \sqrt{\dfrac{T}{m}}$.`,
          t`Here $m$ is the **linear density**, the mass per unit length, in kg/m.`,
          t`A wire of mass $M$ and length $L$ has $m = \dfrac{M}{L}$.`,
          t`A wire of radius $r$ and density $\rho$ has $m = \pi r^2\rho$.`,
        ],
      },
      {
        title: "Frequency of the string",
        points: [
          t`In the fundamental mode $L = \dfrac{\lambda}{2}$, so $\lambda = 2L$.`,
          t`So $n = \dfrac{v}{2L} = \dfrac{1}{2L}\sqrt{\dfrac{T}{m}}$.`,
          t`The $p$th harmonic has $p$ loops: $n_p = \dfrac{p}{2L}\sqrt{\dfrac{T}{m}} = pn$.`,
          t`Successive harmonics differ by the fundamental: $n_{p+1} - n_p = n$.`,
        ],
      },
      {
        title: "Using the formula",
        points: [
          t`A load of $M\ \mathrm{kg}$ hung on the wire gives a tension $T = Mg$ newtons.`,
          t`Square both sides to rearrange: $m = \dfrac{T}{4n^2L^2}$ and $T = 4n^2L^2m$.`,
          t`Put lengths in metres and masses in kilograms first.`,
          t`A wire **in unison** with a tuning fork vibrates at the fork's frequency.`,
        ],
      },
    ],
    worked: {
      prompt: t`A wire $0.5\ \mathrm{m}$ long has a mass of $5\ \mathrm{g}$ and is stretched with a tension of $100\ \mathrm{N}$. Find the speed of transverse waves on it and its fundamental frequency.`,
      steps: [
        t`$m = \dfrac{M}{L} = \dfrac{0.005}{0.5} = 0.01\ \mathrm{kg/m}$.`,
        t`$v = \sqrt{\dfrac{T}{m}} = \sqrt{\dfrac{100}{0.01}} = 100\ \mathrm{m/s}$.`,
        t`$n = \dfrac{v}{2L} = \dfrac{100}{2 \times 0.5} = 100\ \mathrm{Hz}$.`,
      ],
      answer: t`$v = 100\ \mathrm{m/s}$, $n = 100\ \mathrm{Hz}$`,
    },
    visualSpec: t`Slide the tension, length and linear density of a string and hear and see its fundamental change.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Takes a load in kg as the tension in N.",
      remediation: t`A load of $M\ \mathrm{kg}$ pulls with its weight: $T = Mg$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Forgets the 2 in $\dfrac{1}{2L}$.`,
      remediation: t`The fundamental has $L = \dfrac{\lambda}{2}$, so $\lambda = 2L$ and $n = \dfrac{v}{2L}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M3",
      mistake: "Forgets the square root.",
      remediation: t`$v = \sqrt{\dfrac{T}{m}}$: four times the tension gives only twice the speed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Leaves the mass in grams.",
      remediation: t`With $T$ in newtons, put $m$ in kg/m: $2\ \mathrm{g} = 0.002\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Turns $\dfrac{T}{m}$ upside down.`,
      remediation: t`Tighter strings carry waves faster: $v = \sqrt{\dfrac{T}{m}}$, tension on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks the wave speed depends only on the string, not on its tension.",
      remediation: t`The speed depends on both the tension and the linear density: $v = \sqrt{\dfrac{T}{m}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: t`Takes the $q$th overtone as the $q$th harmonic.`,
      remediation: "The fundamental is the first harmonic, so the second overtone is the third harmonic: 3 loops.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M8",
      mistake: "Takes an overtone's frequency as the fundamental's.",
      remediation: t`An overtone has more loops: the second overtone has 3, so $\lambda = \dfrac{2L}{3}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M9",
      mistake: "Takes the lower of two successive modes as the fundamental.",
      remediation: t`Successive harmonics are $pn$ and $(p + 1)n$: their difference is the fundamental $n$.`,
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.23" },
      stem: t`A sonometer wire $0.5\ \mathrm{m}$ long is stretched by a load of $5\ \mathrm{kg}$, and its fundamental frequency is $100\ \mathrm{Hz}$. What is the linear density of the wire? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { L: "0.5", M: "5", n: "100", g: "9.8" }, params: { ask: "m_load" } },
      options: [
        { key: "A", text: t`$0.0049\ \mathrm{kg/m}$`, correct: true, value: "0.00490000000000000" },
        { key: "B", text: t`$5 \times 10^{-4}\ \mathrm{kg/m}$`, correct: false, misconceptionId: "C08-M1", value: "0.000500000000000000" },
        { key: "C", text: t`$0.0196\ \mathrm{kg/m}$`, correct: false, misconceptionId: "C08-M2", value: "0.0196000000000000" },
        { key: "D", text: t`$0.49\ \mathrm{kg/m}$`, correct: false, misconceptionId: "C08-M3", value: "0.490000000000000" },
      ],
      solution: {
        steps: [
          t`$T = Mg = 5 \times 9.8 = 49\ \mathrm{N}$.`,
          t`$m = \dfrac{T}{4n^2L^2} = \dfrac{49}{4 \times 100^2 \times 0.5^2}$.`,
          t`$m = 4.9 \times 10^{-3}\ \mathrm{kg/m}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.12" },
      stem: t`A wire $1\ \mathrm{m}$ long and of mass $2\ \mathrm{g}$ vibrates in its fundamental mode in unison with a tuning fork of frequency $300\ \mathrm{Hz}$. What is the tension in the wire?`,
      verify: { kind: "value", inputs: { L: "1", mass_g: "2", n: "300" }, params: { ask: "T_mass" } },
      options: [
        { key: "A", text: t`$180\ \mathrm{N}$`, correct: false, misconceptionId: "C08-M2", value: "180" },
        { key: "B", text: t`$1.2\ \mathrm{N}$`, correct: false, misconceptionId: "C08-M3", value: "1.20000000000000" },
        { key: "C", text: t`$7.2 \times 10^{5}\ \mathrm{N}$`, correct: false, misconceptionId: "C08-M4", value: "720000" },
        { key: "D", text: t`$720\ \mathrm{N}$`, correct: true, value: "720" },
      ],
      solution: {
        steps: [
          t`$m = \dfrac{0.002}{1} = 2 \times 10^{-3}\ \mathrm{kg/m}$.`,
          t`$T = 4n^2L^2m = 4 \times 300^2 \times 1^2 \times 2 \times 10^{-3}$.`,
          t`$T = 720\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.1(vi)" },
      stem: t`The tension in a stretched string is made four times as large. What happens to the speed of transverse waves on it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "v_ratio" } },
      options: [
        { key: "A", text: t`It becomes four times as large`, correct: false, misconceptionId: "C08-M3", value: "four_times" },
        { key: "B", text: t`It halves`, correct: false, misconceptionId: "C08-M5", value: "half" },
        { key: "C", text: t`It stays the same`, correct: false, misconceptionId: "C08-M6", value: "same" },
        { key: "D", text: t`It doubles`, correct: true, value: "twice" },
      ],
      solution: {
        steps: [
          t`$v = \sqrt{\dfrac{T}{m}}$, so $v \propto \sqrt{T}$.`,
          t`Four times the tension gives $\sqrt{4} = 2$ times the speed: it doubles.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.2(vii)" },
      stem: t`A string $0.75\ \mathrm{m}$ long, fixed at both ends, vibrates in its second overtone at $480\ \mathrm{Hz}$. What is the speed of transverse waves on the string?`,
      verify: { kind: "value", inputs: { L: "0.75", q: "2", n: "480" }, params: { ask: "v_over" } },
      options: [
        { key: "A", text: t`$360\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M7", value: "360" },
        { key: "B", text: t`$720\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M8", value: "720" },
        { key: "C", text: t`$240\ \mathrm{m/s}$`, correct: true, value: "240" },
        { key: "D", text: t`$120\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M2", value: "120" },
      ],
      solution: {
        steps: [
          t`The second overtone is the third harmonic: 3 loops, so $L = \dfrac{3\lambda}{2}$.`,
          t`$\lambda = \dfrac{2 \times 0.75}{3} = 0.5\ \mathrm{m}$.`,
          t`$v = n\lambda = 480 \times 0.5 = 240\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Solved Ex.6.11" },
      stem: t`A wire of linear density $4.0 \times 10^{-3}\ \mathrm{kg/m}$ is stretched between two rigid supports with a tension of $360\ \mathrm{N}$. It resonates at $420\ \mathrm{Hz}$ and $490\ \mathrm{Hz}$ in two successive modes. How long is the wire?`,
      verify: { kind: "value", inputs: { m: "4/1000", T: "360", n1: "420", n2: "490" }, params: { ask: "L_succ" } },
      options: [
        { key: "A", text: t`$0.357\ \mathrm{m}$`, correct: false, misconceptionId: "C08-M9", value: "0.357000000000000" },
        { key: "B", text: t`$2.14\ \mathrm{m}$`, correct: true, value: "2.14000000000000" },
        { key: "C", text: t`$4.29\ \mathrm{m}$`, correct: false, misconceptionId: "C08-M2", value: "4.29000000000000" },
        { key: "D", text: t`$643\ \mathrm{m}$`, correct: false, misconceptionId: "C08-M3", value: "643" },
      ],
      solution: {
        steps: [
          t`Successive harmonics differ by the fundamental: $n = 490 - 420 = 70\ \mathrm{Hz}$.`,
          t`$v = \sqrt{\dfrac{T}{m}} = \sqrt{\dfrac{360}{0.004}} = 300\ \mathrm{m/s}$.`,
          t`$L = \dfrac{v}{2n} = \dfrac{300}{140} \approx 2.14\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
