import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Pull back the rubber of a catapult and let go: the stone flies off. Where was the energy while you held the rubber stretched?`,
    reveal: t`Stored in the rubber itself, as **strain energy**. The work you did against its restoring force stays in the stretched material, and comes back when it springs back.`,
  },
  explanation: {
    intuition: [
      t`Stretching a wire needs work, because the wire pulls back.`,
      t`Within the elastic limit that work is stored as **strain energy**, potential energy of the deformed wire.`,
      t`The restoring force grows from $0$ to $F$ as the wire stretches, so the average force is $\dfrac{F}{2}$.`,
      t`So the energy stored is $\dfrac{1}{2}F l$, half of load times extension.`,
    ],
    formal: [
      {
        title: "Energy in a stretched wire",
        points: [
          t`A wire of length $L$ and area $A$ is stretched by $l$; the force at extension $x$ is $\dfrac{YA}{L}x$.`,
          t`Work done $W$ $= \displaystyle\int_0^l \dfrac{YA}{L}x\,dx$ $= \dfrac{1}{2}\dfrac{YA}{L}l^2$ $= \dfrac{1}{2}Fl$.`,
          t`With $l = \dfrac{FL}{AY}$: $U = \dfrac{F^2L}{2AY}$.`,
          t`For the same load, a thinner or longer wire stretches more and stores more energy.`,
        ],
      },
      {
        title: "Energy per unit volume",
        points: [
          t`Divide by the volume $AL$: $u$ $= \dfrac{1}{2}\dfrac{F}{A}\dfrac{l}{L}$.`,
          t`So $u$ $= \dfrac{1}{2} \times \text{stress} \times \text{strain}$, in $\mathrm{J/m^3}$.`,
          t`With stress $= Y \times$ strain: $u = \dfrac{1}{2}Y(\text{strain})^2$ $= \dfrac{(\text{stress})^2}{2Y}$.`,
          t`Total strain energy $U = u \times$ volume.`,
        ],
      },
    ],
    worked: {
      prompt: t`A wire $1.5\ \mathrm{m}$ long and $0.5\ \mathrm{mm^2}$ in cross-section stretches by $1.2\ \mathrm{mm}$ under a load of $80\ \mathrm{N}$. Find the strain energy stored and the energy per unit volume.`,
      steps: [
        t`$U = \dfrac{1}{2}Fl$ $= \dfrac{1}{2} \times 80 \times 1.2 \times 10^{-3}$ $= 0.048\ \mathrm{J}$.`,
        t`Volume $= AL$ $= 0.5 \times 10^{-6} \times 1.5$ $= 7.5 \times 10^{-7}\ \mathrm{m^3}$.`,
        t`$u$ $= \dfrac{0.048}{7.5 \times 10^{-7}}$ $= 6.4 \times 10^{4}\ \mathrm{J/m^3}$.`,
      ],
      answer: t`$0.048\ \mathrm{J}$; $6.4 \times 10^{4}\ \mathrm{J/m^3}$`,
    },
    visualSpec: t`Stretch a wire step by step and watch the stored energy grow as the area under its load-extension line.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Multiplies the energy by the energy per unit volume.",
      remediation: t`Energy $=$ energy per unit volume $\times$ volume, so volume $= \dfrac{U}{u}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Divides the energy per unit volume by the energy.",
      remediation: t`Volume $= \dfrac{U}{u}$ $= \dfrac{18 \times 10^{-3}}{6 \times 10^{-3}}$, energy on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Puts in an extra $\dfrac{1}{2}$.`,
      remediation: t`The $\dfrac{1}{2}$ is already inside $u$; here simply $U = u \times$ volume.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Forgets the $\dfrac{1}{2}$.`,
      remediation: t`The force grows from $0$ to $F$, so the work is $\dfrac{1}{2}Fl$, not $Fl$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Leaves the area in $\mathrm{mm^2}$.`,
      remediation: t`$0.0225\ \mathrm{mm^2}$ $= 2.25 \times 10^{-8}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Uses the length of the wire instead of its extension.",
      remediation: t`The load moves only through the extension $l = \dfrac{FL}{AY}$, not the whole length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: t`Forgets the $\dfrac{1}{2}$.`,
      remediation: t`$u = \dfrac{(\text{stress})^2}{2Y}$, with the $2$ below.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Gives half the strain.",
      remediation: t`$\dfrac{\text{stress}}{Y}$ is the strain; the energy is $\dfrac{1}{2} \times$ stress $\times$ strain.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Leaves out the strain.",
      remediation: t`$u = \dfrac{1}{2} \times$ stress $\times$ strain: multiply by the strain too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: t`Forgets the $\dfrac{1}{2}$.`,
      remediation: t`Stress rises from $0$ as the wire stretches, so the average is half: $u = \dfrac{1}{2} \times$ stress $\times$ strain.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Gives Young's modulus.",
      remediation: t`$\dfrac{\text{stress}}{\text{strain}}$ is $Y$, not an energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Gives the whole energy, not the energy per unit volume.",
      remediation: t`$\dfrac{1}{2}Fl$ is the total; divide by the volume $AL$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks a thicker wire stores more energy.",
      remediation: t`For the same load a thicker wire stretches less: $U$ $= \dfrac{F^2L}{2AY} \propto \dfrac{1}{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Does not square the diameter ratio.",
      remediation: t`Area goes as $D^2$: twice the diameter is four times the area.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Thinks the same load stores the same energy.",
      remediation: t`The energy is $\dfrac{1}{2}Fl$, and the thicker wire stretches less.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.1 (iii)" },
      stem: t`A stretched wire stores $18 \times 10^{-3}\ \mathrm{J}$ of strain energy, and its strain energy per unit volume is $6 \times 10^{-3}\ \mathrm{J/m^3}$. What is its volume?`,
      verify: { kind: "value", inputs: { U: "18e-3", u: "6e-3" }, params: { ask: "volume" } },
      options: [
        { key: "A", text: t`$1.5\ \mathrm{m^3}$`, correct: false, misconceptionId: "C05-M3", value: "1.50000000000000" },
        { key: "B", text: t`$3\ \mathrm{m^3}$`, correct: true, value: "3" },
        { key: "C", text: t`$1.08 \times 10^{-4}\ \mathrm{m^3}$`, correct: false, misconceptionId: "C05-M1", value: "0.000108000000000000" },
        { key: "D", text: t`$0.333\ \mathrm{m^3}$`, correct: false, misconceptionId: "C05-M2", value: "0.333000000000000" },
      ],
      solution: {
        steps: [
          t`$U = u \times V$, so $V = \dfrac{U}{u}$.`,
          t`$V$ $= \dfrac{18 \times 10^{-3}}{6 \times 10^{-3}}$ $= 3\ \mathrm{m^3}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (v)" },
      stem: t`A steel wire $2\ \mathrm{m}$ long, of cross-section $0.0225\ \mathrm{mm^2}$, has a load of $100\ \mathrm{N}$ slowly applied to its free end. If $Y = 2 \times 10^{11}\ \mathrm{N/m^2}$, how much work is done in stretching it?`,
      verify: { kind: "value", inputs: { F: "100", L: "2", A_mm2: "0.0225", Y: "2e11" }, params: { ask: "work" } },
      options: [
        { key: "A", text: t`$4.44\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "4.44000000000000" },
        { key: "B", text: t`$2.22 \times 10^{-6}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "2.22000000000000e-6" },
        { key: "C", text: t`$100\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M6", value: "100" },
        { key: "D", text: t`$2.22\ \mathrm{J}$`, correct: true, value: "2.22000000000000" },
      ],
      solution: {
        steps: [
          t`$A$ $= 2.25 \times 10^{-8}\ \mathrm{m^2}$; $l = \dfrac{FL}{AY}$ $= \dfrac{100 \times 2}{2.25 \times 10^{-8} \times 2 \times 10^{11}}$ $\approx 0.0444\ \mathrm{m}$.`,
          t`$W = \dfrac{1}{2}Fl$ $= \dfrac{1}{2} \times 100 \times 0.0444$ $\approx 2.22\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`A steel wire ($Y = 2 \times 10^{11}\ \mathrm{N/m^2}$) is under a stress of $2 \times 10^{8}\ \mathrm{N/m^2}$. What strain energy does it store per unit volume?`,
      verify: { kind: "value", inputs: { S: "2e8", Y: "2e11" }, params: { ask: "density" } },
      options: [
        { key: "A", text: t`$1 \times 10^{5}\ \mathrm{J/m^3}$`, correct: true, value: "100000" },
        { key: "B", text: t`$2 \times 10^{5}\ \mathrm{J/m^3}$`, correct: false, misconceptionId: "C05-M7", value: "200000" },
        { key: "C", text: t`$5 \times 10^{-4}\ \mathrm{J/m^3}$`, correct: false, misconceptionId: "C05-M8", value: "0.000500000000000000" },
        { key: "D", text: t`$1 \times 10^{8}\ \mathrm{J/m^3}$`, correct: false, misconceptionId: "C05-M9", value: "100000000" },
      ],
      solution: {
        steps: [
          t`$u = \dfrac{(\text{stress})^2}{2Y}$ $= \dfrac{\left(2 \times 10^{8}\right)^2}{2 \times 2 \times 10^{11}}$.`,
          t`$u$ $= 1 \times 10^{5}\ \mathrm{J/m^3}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.4 (iv)" },
      stem: t`The strain energy stored per unit volume of a stretched wire is equal to`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{\text{stress}}{\text{strain}}$`, correct: false, misconceptionId: "C05-M11", value: "stress_over_strain" },
        { key: "B", text: t`$\dfrac{1}{2} \times \text{load} \times \text{extension}$`, correct: false, misconceptionId: "C05-M12", value: "half_F_l" },
        { key: "C", text: t`$\dfrac{1}{2} \times \text{stress} \times \text{strain}$`, correct: true, value: "half_stress_strain" },
        { key: "D", text: t`$\text{stress} \times \text{strain}$`, correct: false, misconceptionId: "C05-M10", value: "stress_strain" },
      ],
      solution: {
        steps: [
          t`$U = \dfrac{1}{2}Fl$, and the volume is $AL$.`,
          t`$u$ $= \dfrac{1}{2}\dfrac{F}{A}\dfrac{l}{L}$ $= \dfrac{1}{2} \times$ stress $\times$ strain.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`Two wires of the same material and length carry the same load. The second has twice the diameter of the first. What is the ratio of the strain energy stored in the second wire to that in the first?`,
      verify: { kind: "value", inputs: { kD: "2" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$0.25$`, correct: true, value: "0.250000000000000" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C05-M13", value: "4" },
        { key: "C", text: t`$0.5$`, correct: false, misconceptionId: "C05-M14", value: "0.500000000000000" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C05-M15", value: "1" },
      ],
      solution: {
        steps: [
          t`$U = \dfrac{F^2L}{2AY}$; with $F$, $L$ and $Y$ the same, $U \propto \dfrac{1}{A} \propto \dfrac{1}{D^2}$.`,
          t`$\dfrac{U_2}{U_1} = \dfrac{1}{2^2}$ $= 0.25$.`,
        ],
      },
    },
  ],
};
