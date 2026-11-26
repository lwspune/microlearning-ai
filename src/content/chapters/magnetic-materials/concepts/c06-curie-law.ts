import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Warm a paramagnetic salt and it is pulled less strongly by a magnet. Heat an iron nail red-hot and a magnet lets it drop. What does heat do to magnetism?`,
    reveal: t`Heat jostles the atomic moments out of line. In a paramagnet $\chi \propto \dfrac{1}{T}$ (Curie's law), and above its **Curie temperature** iron's domains fall apart.`,
  },
  explanation: {
    intuition: [
      t`A field tries to line up a paramagnet's atomic moments; thermal agitation keeps knocking them out of line.`,
      t`The hotter the material, the poorer the alignment: $M$ and $\chi$ fall as $T$ rises.`,
      t`A stronger field wins more of the tug of war, so $M$ grows with $B$.`,
      t`In a ferromagnet, enough heat breaks up the domains altogether.`,
    ],
    formal: [
      {
        title: "Curie's law",
        points: [
          t`For a paramagnet $M = C\dfrac{B}{T}$, with $C$ the **Curie constant** and $T$ the absolute temperature.`,
          t`With $B = \mu_0H$: $\chi = \dfrac{C\mu_0}{T}$, so $\chi \propto \dfrac{1}{T}$.`,
          t`So $\chi_1T_1 = \chi_2T_2$; put both temperatures in kelvin.`,
          t`Saturation, every moment aligned, needs $mB$ far above the thermal energy $\dfrac{3}{2}k_BT$.`,
        ],
      },
      {
        title: "The Curie temperature",
        points: [
          t`Above its **Curie temperature** $T_C$ a ferromagnet's domains break up and it becomes paramagnetic.`,
          t`There $\chi = \dfrac{C}{T - T_C}$ for $T > T_C$.`,
          t`Iron's $T_C$ is about $1043\ \mathrm{K}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A paramagnetic salt has susceptibility $4 \times 10^{-4}$ at $250\ \mathrm{K}$. Find its susceptibility at $127^\circ\mathrm{C}$.`,
      steps: [
        t`$T_2 = 127 + 273 = 400\ \mathrm{K}$.`,
        t`$\chi_2 = \chi_1\dfrac{T_1}{T_2}$ $= 4 \times 10^{-4} \times \dfrac{250}{400}$.`,
        t`$\chi_2 = 2.5 \times 10^{-4}$.`,
      ],
      answer: t`$2.5 \times 10^{-4}$`,
    },
    visualSpec: t`Heat a paramagnet in a steady field and watch its aligned moments scatter as the temperature rises.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Uses the Celsius temperature.",
      remediation: t`Curie's law needs the absolute temperature: $T = t + 273$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Gives the kelvin value as the Celsius answer.",
      remediation: t`Convert back at the end: $900\ \mathrm{K} = 900 - 273$ $= 627^\circ\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Takes $\chi$ as proportional to $T$.`,
      remediation: t`Heat disturbs the alignment, so $\chi$ falls as $T$ rises: $\chi \propto \dfrac{1}{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Thinks $\chi$ does not depend on the temperature.`,
      remediation: t`That is true of a diamagnet; a paramagnet follows $\chi \propto \dfrac{1}{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Uses the change in temperature as the new temperature.",
      remediation: t`$\chi_2 = \chi_1\dfrac{T_1}{T_2}$ with $T_2$ the new temperature itself, not $T_1 - T_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Takes the fall in $\chi$ as its new value.`,
      remediation: t`The new value is the old one less the fall: $\chi_2$ $= 1.8 \times 10^{-5} - 6 \times 10^{-6}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Adds the fall instead of subtracting it.",
      remediation: t`$\chi$ falls, so subtract: $\chi_2 = \chi_1 - 6 \times 10^{-6}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Forgets the $\dfrac{3}{2}$.`,
      remediation: t`A gas atom's thermal energy is $\dfrac{3}{2}k_BT$.`,
      fallback: { kind: "ext", topic: "kinetic theory of gases (Kinetic Theory, Ch.3)" },
    },
    {
      id: "C06-M9",
      mistake: "Turns the ratio upside down.",
      remediation: t`Put thermal energy over magnetic energy, as asked: $\dfrac{\frac{3}{2}k_BT}{mB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks a heated ferromagnet becomes diamagnetic.",
      remediation: "Its atoms keep their moments; only the domains break up, which leaves a paramagnet.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks it stays ferromagnetic, only more weakly.",
      remediation: t`Above $T_C$ the domains are gone, so it is no longer ferromagnetic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks its atoms lose their magnetic moments.",
      remediation: "Heat scatters the moments' directions but leaves the moments; the material turns paramagnetic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.11" },
      stem: t`The susceptibility of a paramagnetic material is $\chi$ at $27^\circ\mathrm{C}$. At what temperature will it be $\dfrac{\chi}{3}$?`,
      verify: { kind: "value", inputs: { t1: "27", f: "3" }, params: { ask: "third" } },
      options: [
        { key: "A", text: t`$81\ \mathrm{^{\circ}C}$`, correct: false, misconceptionId: "C06-M1", value: "81" },
        { key: "B", text: t`$900\ \mathrm{^{\circ}C}$`, correct: false, misconceptionId: "C06-M2", value: "900" },
        { key: "C", text: t`$-173\ \mathrm{^{\circ}C}$`, correct: false, misconceptionId: "C06-M3", value: "-173" },
        { key: "D", text: t`$627\ \mathrm{^{\circ}C}$`, correct: true, value: "627" },
      ],
      solution: {
        steps: [
          t`$T_1 = 27 + 273 = 300\ \mathrm{K}$; $\chi T$ is constant.`,
          t`$\chi \times 300$ $= \dfrac{\chi}{3} \times T_2$, so $T_2 = 900\ \mathrm{K}$.`,
          t`$T_2 = 900 - 273$ $= 627^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.5(vi)" },
      stem: t`The susceptibility of magnesium at $200\ \mathrm{K}$ is $1.8 \times 10^{-5}$. At what temperature will it have fallen by $6 \times 10^{-6}$?`,
      verify: { kind: "value", inputs: { chi1: "1.8e-5", T1: "200", d: "6e-6" }, params: { ask: "fall" } },
      options: [
        { key: "A", text: t`$300\ \mathrm{K}$`, correct: true, value: "300" },
        { key: "B", text: t`$133\ \mathrm{K}$`, correct: false, misconceptionId: "C06-M3", value: "133" },
        { key: "C", text: t`$600\ \mathrm{K}$`, correct: false, misconceptionId: "C06-M6", value: "600" },
        { key: "D", text: t`$150\ \mathrm{K}$`, correct: false, misconceptionId: "C06-M7", value: "150" },
      ],
      solution: {
        steps: [
          t`$\chi_2$ $= 1.8 \times 10^{-5} - 0.6 \times 10^{-5}$ $= 1.2 \times 10^{-5}$.`,
          t`$T_2 = T_1\dfrac{\chi_1}{\chi_2}$ $= 200 \times \dfrac{1.8}{1.2}$ $= 300\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.10" },
      stem: t`The susceptibility of a paramagnetic material at $300\ \mathrm{K}$ is $1.2 \times 10^{-15}$. What is it at $200\ \mathrm{K}$?`,
      verify: { kind: "value", inputs: { chi1: "1.2e-15", T1: "300", T2: "200" }, params: { ask: "chi2" } },
      options: [
        { key: "A", text: t`$1.8 \times 10^{-15}$`, correct: true, value: "1.80000000000000e-15" },
        { key: "B", text: t`$8 \times 10^{-16}$`, correct: false, misconceptionId: "C06-M3", value: "8.00000000000000e-16" },
        { key: "C", text: t`$1.2 \times 10^{-15}$`, correct: false, misconceptionId: "C06-M4", value: "1.20000000000000e-15" },
        { key: "D", text: t`$3.6 \times 10^{-15}$`, correct: false, misconceptionId: "C06-M5", value: "3.60000000000000e-15" },
      ],
      solution: {
        steps: [
          t`$\chi_2 = \chi_1\dfrac{T_1}{T_2}$ $= 1.2 \times 10^{-15} \times \dfrac{300}{200}$.`,
          t`$\chi_2 = 1.8 \times 10^{-15}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.7" },
      stem: t`Atoms of a paramagnetic gas at $27^\circ\mathrm{C}$ each have a magnetic moment of $1.5 \times 10^{-23}\ \mathrm{A\,m^2}$, in a field of $3\ \mathrm{T}$. What is the ratio of an atom's thermal energy, $\dfrac{3}{2}k_BT$, to its largest magnetic energy, $mB$? (Take $k_B$ $= 1.38 \times 10^{-23}\ \mathrm{J/K}$.)`,
      verify: { kind: "value", inputs: { m: "1.5e-23", B: "3", t: "27", kB: "1.38e-23" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$0.00725$`, correct: false, misconceptionId: "C06-M9", value: "0.00725000000000000" },
        { key: "B", text: t`$138$`, correct: true, value: "138" },
        { key: "C", text: t`$12.4$`, correct: false, misconceptionId: "C06-M1", value: "12.4000000000000" },
        { key: "D", text: t`$92$`, correct: false, misconceptionId: "C06-M8", value: "92" },
      ],
      solution: {
        steps: [
          t`$\dfrac{3}{2}k_BT$ $= 1.5 \times 1.38 \times 10^{-23} \times 300$ $= 6.21 \times 10^{-21}\ \mathrm{J}$.`,
          t`$mB = 1.5 \times 10^{-23} \times 3$ $= 4.5 \times 10^{-23}\ \mathrm{J}$.`,
          t`Ratio $= \dfrac{6.21 \times 10^{-21}}{4.5 \times 10^{-23}}$ $\approx 138$: heat wins, so the gas cannot be saturated.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.6" },
      stem: t`What happens to a ferromagnetic material heated above its Curie temperature?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "curie" } },
      options: [
        { key: "A", text: t`It becomes paramagnetic`, correct: true, value: "para" },
        { key: "B", text: t`It becomes diamagnetic`, correct: false, misconceptionId: "C06-M10", value: "dia" },
        { key: "C", text: t`It stays ferromagnetic, only more weakly`, correct: false, misconceptionId: "C06-M11", value: "weaker_ferro" },
        { key: "D", text: t`Its atoms lose their magnetic moments, so it stops responding at all`, correct: false, misconceptionId: "C06-M12", value: "no_moments" },
      ],
      solution: {
        steps: [
          t`Above $T_C$, thermal agitation breaks up the domains.`,
          t`The atoms keep their moments, now at random: the material is paramagnetic.`,
        ],
      },
    },
  ],
};
