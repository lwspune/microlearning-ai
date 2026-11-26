import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Hydrogen glows with just four visible colours, never a rainbow. Bohr explained this in 1913 with one bold idea. What was it?`,
    reveal: t`The electron can occupy only certain orbits of fixed energy. Light is emitted only when it jumps between them, so only certain colours appear.`,
  },
  explanation: {
    intuition: [
      t`The electron moves only in certain allowed orbits.`,
      t`In an allowed orbit it does not radiate.`,
      t`A jump between orbits emits or absorbs one photon of exactly the energy difference.`,
      t`Orbits crowd closer in energy further from the nucleus.`,
    ],
    formal: [
      {
        title: "Orbits (hydrogen-like)",
        points: [
          t`$r_n = \dfrac{52.9\,n^2}{Z}$ pm.`,
          t`$E_n = -2.18 \times 10^{-18}\,\dfrac{Z^2}{n^2}$ J.`,
          t`The negative energy means the electron is bound.`,
        ],
      },
      {
        title: "Spectra",
        points: [
          t`$\bar\nu = 109\,677\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)\ \mathrm{cm^{-1}}$ for hydrogen.`,
          t`Falls to $n = 2$ give visible (Balmer) lines.`,
          t`The model fails for atoms with more than one electron.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the energy of hydrogen's second orbit.`,
      steps: [
        t`$E_2 = -2.18 \times 10^{-18} \times 1^2/2^2$.`,
        t`$= -5.45 \times 10^{-19}$ J.`,
      ],
      answer: t`$-5.45 \times 10^{-19}$ J`,
    },
    visualSpec: t`Drop an electron down a ladder of orbits and see the colour of each photon emitted.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Multiplies by $Z$.`,
      remediation: t`$r_n \propto 1/Z$: a larger charge pulls the electron closer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Divides by $Z^2$.`,
      remediation: t`Radius goes as $n^2/Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Ignores $Z$.`,
      remediation: t`$\ce{He+}$ has $Z$ = 2: divide by 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Uses $Z$, not $Z^2$.`,
      remediation: t`Energy goes as $Z^2/n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Ignores $Z$.`,
      remediation: t`Multiply by $Z^2$ = 4 for $\ce{He+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Drops the minus sign.",
      remediation: "Bound electrons have negative energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: t`Leaves the $n$'s unsquared.`,
      remediation: t`Use $1/n_1^2 - 1/n_2^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Adds the terms.",
      remediation: t`Subtract: $1/n_1^2 - 1/n_2^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: t`Drops to $n = 1$.`,
      remediation: t`The fall ends at $n = 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks energy gaps grow outward.",
      remediation: t`$E_n \propto -1/n^2$: gaps shrink as $n$ grows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Thinks gaps are equal.",
      remediation: t`Gaps shrink because energy varies as $1/n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks the gaps are zero.",
      remediation: "Each shell has its own energy; gaps shrink but remain.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks the model fails for hydrogen.",
      remediation: "Bohr's model explains hydrogen's spectrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks it cannot explain stability.",
      remediation: "Bohr postulated stable, non-radiating orbits.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Thinks it fails to give orbit radii.",
      remediation: t`It gives $r_n = 52.9\,n^2/Z$ pm.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.7" },
      stem: t`Find the radius of the first orbit of $\ce{He+}$. ($r_n = 52.9\,n^2/Z$ pm)`,
      verify: { kind: "value", inputs: { n: "1", Z: "2" }, params: { q: "radius" } },
      options: [
        { key: "A", text: t`$52.9\ \mathrm{pm}$`, correct: false, misconceptionId: "C05-M3", value: "52.9000000000000" },
        { key: "B", text: t`$13.22\ \mathrm{pm}$`, correct: false, misconceptionId: "C05-M2", value: "13.2200000000000" },
        { key: "C", text: t`$105.8\ \mathrm{pm}$`, correct: false, misconceptionId: "C05-M1", value: "105.800000000000" },
        { key: "D", text: t`$26.45\ \mathrm{pm}$`, correct: true, value: "26.4500000000000" },
      ],
      solution: {
        steps: [
          t`$r_1 = 52.9 \times 1^2 / 2$.`,
          t`= 26.45 pm.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.7" },
      stem: t`Find the energy of the first orbit of $\ce{He+}$. ($E_n = -2.18 \times 10^{-18}\,Z^2/n^2$ J)`,
      verify: { kind: "value", inputs: { n: "1", Z: "2" }, params: { q: "energy" } },
      options: [
        { key: "A", text: t`$-8.72 \times 10^{-18}\ \mathrm{J}$`, correct: true, value: "-8.72000000000000e-18" },
        { key: "B", text: t`$-2.18 \times 10^{-18}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "-2.18000000000000e-18" },
        { key: "C", text: t`$8.72 \times 10^{-18}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M6", value: "8.72000000000000e-18" },
        { key: "D", text: t`$-4.36 \times 10^{-18}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "-4.36000000000000e-18" },
      ],
      solution: {
        steps: [
          t`$E_1 = -2.18 \times 10^{-18} \times 2^2/1^2$.`,
          t`$= -8.72 \times 10^{-18}$ J.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.8" },
      stem: t`Find the wavelength of the photon emitted when a hydrogen electron falls from $n = 5$ to $n = 2$. ($R_H = 109\,677\ \mathrm{cm^{-1}}$)`,
      verify: { kind: "value", inputs: { n1: "2", n2: "5" }, params: { q: "wavelength" } },
      options: [
        { key: "A", text: t`$304\ \mathrm{nm}$`, correct: false, misconceptionId: "C05-M7", value: "304" },
        { key: "B", text: t`$434\ \mathrm{nm}$`, correct: true, value: "434" },
        { key: "C", text: t`$314\ \mathrm{nm}$`, correct: false, misconceptionId: "C05-M8", value: "314" },
        { key: "D", text: t`$95\ \mathrm{nm}$`, correct: false, misconceptionId: "C05-M9", value: "95" },
      ],
      solution: {
        steps: [
          t`$\bar\nu = 109\,677(1/4 - 1/25) = 23\,032\ \mathrm{cm^{-1}}$.`,
          t`$\lambda = 1/\bar\nu = 4.34 \times 10^{-5}$ cm = 434 nm.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.1 (A)" },
      stem: t`Moving away from the nucleus, the energy difference between successive shells`,
      verify: { kind: "value", inputs: {  }, params: { q: "gap" } },
      options: [
        { key: "A", text: t`stays equal`, correct: false, misconceptionId: "C05-M11", value: "equal" },
        { key: "B", text: t`is zero`, correct: false, misconceptionId: "C05-M12", value: "static" },
        { key: "C", text: t`decreases`, correct: true, value: "decreasing" },
        { key: "D", text: t`increases`, correct: false, misconceptionId: "C05-M10", value: "increasing" },
      ],
      solution: {
        steps: [
          t`$E_n \propto -1/n^2$.`,
          t`Higher shells crowd together: gaps decrease.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (G)" },
      stem: t`Bohr's model fails to explain`,
      verify: { kind: "value", inputs: {  }, params: { q: "fails" } },
      options: [
        { key: "A", text: t`the radii of hydrogen's orbits`, correct: false, misconceptionId: "C05-M15", value: "radii" },
        { key: "B", text: t`the spectrum of hydrogen`, correct: false, misconceptionId: "C05-M13", value: "hydrogen" },
        { key: "C", text: t`why the hydrogen atom is stable`, correct: false, misconceptionId: "C05-M14", value: "stability" },
        { key: "D", text: t`the spectra of atoms with more than one electron`, correct: true, value: "many_electron" },
      ],
      solution: {
        steps: [
          t`It works for hydrogen-like species.`,
          t`It fails for many-electron atoms.`,
        ],
      },
    },
  ],
};
