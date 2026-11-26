import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A steel wire and a copper wire of the same size carry the same load. The copper one stretches almost twice as much. Which number captures this difference between the two metals?`,
    reveal: t`**Young's modulus**: the stress needed per unit strain. Steel's is about $2 \times 10^{11}\ \mathrm{N/m^2}$, copper's about $1.1 \times 10^{11}\ \mathrm{N/m^2}$, so copper stretches more.`,
  },
  explanation: {
    intuition: [
      t`Within the elastic limit, stress is proportional to strain, so their ratio is a constant of the material.`,
      t`For stretching or compressing along the length, that ratio is **Young's modulus** $Y$.`,
      t`A large $Y$ means a stiff material: a big stress gives only a small strain.`,
      t`$Y$ belongs to the material, not to the wire: a thicker or shorter wire of the same metal has the same $Y$.`,
    ],
    formal: [
      {
        title: "Definition",
        points: [
          t`$Y$ $= \dfrac{\text{longitudinal stress}}{\text{longitudinal strain}}$ $= \dfrac{F/A}{l/L}$ $= \dfrac{FL}{Al}$.`,
          t`$F$ is the load, $A$ the cross-section, $L$ the original length and $l$ the extension.`,
          t`SI unit: $\mathrm{N/m^2}$, the same as stress, since strain has no unit.`,
          t`A perfectly rigid body has no strain, so its $Y$ would be infinite.`,
        ],
      },
      {
        title: "Using the formula",
        points: [
          t`Extension: $l = \dfrac{FL}{AY}$, so a wire stretches more if it is longer or thinner.`,
          t`For a wire of radius $r$, $A = \pi r^2$: halve the radius from the diameter, and convert mm to m.`,
          t`A load of $m\ \mathrm{kg}$ gives $F = mg$.`,
          t`For the same material and load, $l \propto \dfrac{L}{D^2}$.`,
        ],
      },
      {
        title: "Measuring Y (Searle's method)",
        points: [
          t`Two identical wires hang from one support: a reference wire and the test wire.`,
          t`Loads are added to the test wire; a spirit level and micrometer screw between the two read its extension $l$.`,
          t`Plot load against extension: the slope $\dfrac{F}{l}$ gives $Y$ $= \dfrac{L}{A} \times \dfrac{F}{l}$.`,
          t`The reference wire cancels any sagging of the support and any change of length with temperature.`,
        ],
      },
    ],
    worked: {
      prompt: t`A copper wire $3\ \mathrm{m}$ long and $1\ \mathrm{mm^2}$ in cross-section carries a load of $5\ \mathrm{kg}$. If $Y$ $= 1.1 \times 10^{11}\ \mathrm{N/m^2}$, find its extension. (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      steps: [
        t`$F = 5 \times 9.8$ $= 49\ \mathrm{N}$; $A = 1 \times 10^{-6}\ \mathrm{m^2}$.`,
        t`$l = \dfrac{FL}{AY}$ $= \dfrac{49 \times 3}{10^{-6} \times 1.1 \times 10^{11}}$.`,
        t`$l \approx 1.34 \times 10^{-3}\ \mathrm{m}$ $= 1.34\ \mathrm{mm}$.`,
      ],
      answer: t`$1.34\ \mathrm{mm}$`,
    },
    visualSpec: t`Change a wire's load, length and thickness and watch its extension, while its Young's modulus stays the same.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Takes the load in kg as the force in newtons.",
      remediation: t`A $2.5\ \mathrm{kg}$ load pulls with $F = mg$ $= 24.5\ \mathrm{N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Gives the stress instead of Young's modulus.",
      remediation: t`$\dfrac{F}{A}$ is only the stress; divide it by the strain $\dfrac{l}{L}$ as well.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Turns the strain upside down.",
      remediation: t`Strain is $\dfrac{l}{L}$, extension over original length, so $Y = \dfrac{FL}{Al}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Uses the stretched length as the extension.",
      remediation: t`The extension is the increase: $125.25 - 125$ $= 0.25\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Takes the area as $r^2$, leaving out $\pi$.`,
      remediation: t`A circular cross-section has $A = \pi r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Leaves the radius in mm.",
      remediation: t`$1\ \mathrm{mm}$ $= 10^{-3}\ \mathrm{m}$, so $A$ $= \pi \times 10^{-6}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Uses the diameter as the radius.",
      remediation: t`The radius is half the diameter: $0.30\ \mathrm{mm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Leaves the extension in mm.",
      remediation: t`$6.3\ \mathrm{mm}$ $= 6.3 \times 10^{-3}\ \mathrm{m}$; use metres throughout.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Swaps the length and the extension.",
      remediation: t`$F = \dfrac{YAl}{L}$: the extension $l$ is on top, the length $L$ below.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Does not square the diameter ratio.",
      remediation: t`Area goes as $D^2$: twice the diameter gives four times the area.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks a shorter wire stretches more.",
      remediation: t`$l \propto L$: half the length gives half the extension.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks a thicker wire stretches more.",
      remediation: t`$l \propto \dfrac{1}{A}$: a thicker wire spreads the load and stretches less.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Gives copper's modulus over brass's.",
      remediation: t`The question asks for $Y_{\text{brass}} : Y_{\text{copper}}$, brass on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Leaves out the areas.",
      remediation: t`With $F$ and $l$ the same, $Y \propto \dfrac{L}{A}$: both the length and the area matter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Leaves out the lengths.",
      remediation: t`With $F$ and $l$ the same, $Y \propto \dfrac{L}{A}$: both the length and the area matter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M16",
      mistake: "Thinks a body that does not stretch has zero modulus.",
      remediation: t`$Y$ $= \dfrac{\text{stress}}{\text{strain}}$; zero strain makes $Y$ infinitely large, not zero.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M17",
      mistake: "Thinks a rigid body has a modulus of one.",
      remediation: "Strain is zero for a rigid body, and dividing by zero gives no finite value.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M18",
      mistake: "Takes the strain of a rigid body as one.",
      remediation: "A rigid body does not change length, so its strain is zero, not one.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Solved Ex.6.2" },
      stem: t`A wire $20\ \mathrm{m}$ long, of cross-section $1.25 \times 10^{-4}\ \mathrm{m^2}$, carries a load of $2.5\ \mathrm{kg}$ and stretches by $1 \times 10^{-4}\ \mathrm{m}$. What is the Young's modulus of its material? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { m: "2.5", g: "9.8", L: "20", A: "1.25e-4", l: "1e-4" }, params: { ask: "Y" } },
      options: [
        { key: "A", text: t`$1.96 \times 10^{5}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C03-M2", value: "196000" },
        { key: "B", text: t`$0.98\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C03-M3", value: "0.980000000000000" },
        { key: "C", text: t`$3.92 \times 10^{10}\ \mathrm{N/m^2}$`, correct: true, value: "39200000000" },
        { key: "D", text: t`$4 \times 10^{9}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C03-M1", value: "4000000000" },
      ],
      solution: {
        steps: [
          t`$F = 2.5 \times 9.8$ $= 24.5\ \mathrm{N}$.`,
          t`$Y = \dfrac{FL}{Al}$ $= \dfrac{24.5 \times 20}{1.25 \times 10^{-4} \times 10^{-4}}$ $= 3.92 \times 10^{10}\ \mathrm{N/m^2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (x)" },
      stem: t`A telephone wire $125\ \mathrm{m}$ long and $1\ \mathrm{mm}$ in radius is stretched to $125.25\ \mathrm{m}$ by a force of $800\ \mathrm{N}$. What is the Young's modulus of its material?`,
      verify: { kind: "value", inputs: { F: "800", L: "125", L1: "125.25", r_mm: "1" }, params: { ask: "Y_r" } },
      options: [
        { key: "A", text: t`$4 \times 10^{11}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C03-M5", value: "400000000000" },
        { key: "B", text: t`$1.27 \times 10^{5}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C03-M6", value: "127000" },
        { key: "C", text: t`$1.27 \times 10^{11}\ \mathrm{N/m^2}$`, correct: true, value: "127000000000" },
        { key: "D", text: t`$2.54 \times 10^{8}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C03-M4", value: "254000000" },
      ],
      solution: {
        steps: [
          t`$l = 125.25 - 125$ $= 0.25\ \mathrm{m}$; $A$ $= \pi \times \left(10^{-3}\right)^2$ $= 3.14 \times 10^{-6}\ \mathrm{m^2}$.`,
          t`$Y$ $= \dfrac{800 \times 125}{3.14 \times 10^{-6} \times 0.25}$ $\approx 1.27 \times 10^{11}\ \mathrm{N/m^2}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (vii)" },
      stem: t`A mild steel wire $1.5\ \mathrm{m}$ long and $0.60\ \mathrm{mm}$ in diameter stretches by $6.3\ \mathrm{mm}$ under a force. If $Y = 2.1 \times 10^{11}\ \mathrm{N/m^2}$, what is the force?`,
      verify: { kind: "value", inputs: { Y: "2.1e11", L: "1.5", D_mm: "0.60", l_mm: "6.3" }, params: { ask: "F", sf: "2" } },
      options: [
        { key: "A", text: t`$1000\ \mathrm{N}$`, correct: false, misconceptionId: "C03-M7", value: "1000" },
        { key: "B", text: t`$2.5 \times 10^{5}\ \mathrm{N}$`, correct: false, misconceptionId: "C03-M8", value: "250000" },
        { key: "C", text: t`$1.4 \times 10^{7}\ \mathrm{N}$`, correct: false, misconceptionId: "C03-M9", value: "14000000" },
        { key: "D", text: t`$250\ \mathrm{N}$`, correct: true, value: "250" },
      ],
      solution: {
        steps: [
          t`$r = 0.30\ \mathrm{mm}$, so $A$ $= \pi \times \left(3 \times 10^{-4}\right)^2$ $= 2.83 \times 10^{-7}\ \mathrm{m^2}$.`,
          t`$F = \dfrac{YAl}{L}$ $= \dfrac{2.1 \times 10^{11} \times 2.83 \times 10^{-7} \times 6.3 \times 10^{-3}}{1.5}$ $\approx 250\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (iv)" },
      stem: t`A wire stretches by $4\ \mathrm{mm}$ under a load. The same load hangs on a wire of the same material with half the length and twice the diameter. By how much does it stretch?`,
      verify: { kind: "value", inputs: { l1: "4", kL: "1/2", kD: "2" }, params: { ask: "ext" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{mm}$`, correct: false, misconceptionId: "C03-M11", value: "2" },
        { key: "B", text: t`$8\ \mathrm{mm}$`, correct: false, misconceptionId: "C03-M12", value: "8" },
        { key: "C", text: t`$0.5\ \mathrm{mm}$`, correct: true, value: "0.500000000000000" },
        { key: "D", text: t`$1\ \mathrm{mm}$`, correct: false, misconceptionId: "C03-M10", value: "1" },
      ],
      solution: {
        steps: [
          t`$l = \dfrac{FL}{AY}$, and $A \propto D^2$, so $l \propto \dfrac{L}{D^2}$.`,
          t`$l_2$ $= 4 \times \dfrac{1}{2} \times \dfrac{1}{2^2}$ $= 0.5\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Solved Ex.6.1" },
      stem: t`A brass wire $4.5\ \mathrm{m}$ long, of cross-section $3 \times 10^{-5}\ \mathrm{m^2}$, and a copper wire $5.0\ \mathrm{m}$ long, of cross-section $4 \times 10^{-5}\ \mathrm{m^2}$, stretch by the same amount under the same load. What is the ratio $Y_{\text{brass}} : Y_{\text{copper}}$?`,
      verify: { kind: "value", inputs: { LB: "4.5", AB: "3e-5", LC: "5.0", AC: "4e-5" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1.2$`, correct: true, value: "1.20000000000000" },
        { key: "B", text: t`$0.833$`, correct: false, misconceptionId: "C03-M13", value: "0.833000000000000" },
        { key: "C", text: t`$0.9$`, correct: false, misconceptionId: "C03-M14", value: "0.900000000000000" },
        { key: "D", text: t`$1.33$`, correct: false, misconceptionId: "C03-M15", value: "1.33000000000000" },
      ],
      solution: {
        steps: [
          t`Same $F$ and $l$, so $Y \propto \dfrac{L}{A}$.`,
          t`$\dfrac{Y_B}{Y_C}$ $= \dfrac{4.5/\left(3 \times 10^{-5}\right)}{5.0/\left(4 \times 10^{-5}\right)}$ $= \dfrac{1.5}{1.25}$ $= 1.2$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.2 (v)" },
      stem: t`What is the Young's modulus of a perfectly rigid body?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rigid" } },
      options: [
        { key: "A", text: t`Infinite`, correct: true, value: "infinite" },
        { key: "B", text: t`Zero`, correct: false, misconceptionId: "C03-M16", value: "zero_Y" },
        { key: "C", text: t`One`, correct: false, misconceptionId: "C03-M17", value: "one_Y" },
        { key: "D", text: t`Equal to the stress applied to it`, correct: false, misconceptionId: "C03-M18", value: "equals_stress" },
      ],
      solution: {
        steps: [
          t`A perfectly rigid body does not change length, so its strain is zero.`,
          t`$Y$ $= \dfrac{\text{stress}}{\text{strain}}$ with zero strain is infinite.`,
        ],
      },
    },
  ],
};
