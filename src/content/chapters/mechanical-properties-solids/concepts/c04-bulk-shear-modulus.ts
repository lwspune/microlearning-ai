import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Push the top of a thick book sideways while its bottom stays on the table. The pages slide, the book leans, yet its volume hardly changes. Squeeze a ball under water instead, and its shape stays while its volume shrinks. Do the two need the same modulus?`,
    reveal: t`No. Change of length, change of volume and change of shape are three different strains, so a solid has three moduli: **Young's modulus**, the **bulk modulus** and the **modulus of rigidity**.`,
  },
  explanation: {
    intuition: [
      t`A pressure acting equally on every face changes a body's **volume** but not its shape.`,
      t`A force along a face, a **shearing** force, changes its **shape** but not its volume.`,
      t`Each kind of stress has its own strain, and so its own modulus.`,
      t`A wire that is stretched also gets thinner: **Poisson's ratio** compares the two strains.`,
    ],
    formal: [
      {
        title: "Bulk modulus",
        points: [
          t`Volume stress is the change in pressure $dP$; volume strain is $\dfrac{dV}{V}$.`,
          t`Bulk modulus $K = \dfrac{dP}{dV/V}$ $= V\dfrac{dP}{dV}$, in $\mathrm{N/m^2}$.`,
          t`So the change in volume is $dV = \dfrac{V\,dP}{K}$; a rise in pressure makes the volume decrease.`,
          t`$\dfrac{1}{K}$ is the **compressibility**: gases have a small $K$, solids a large one.`,
        ],
      },
      {
        title: "Modulus of rigidity",
        points: [
          t`Shearing stress is $\dfrac{F}{A}$, with $F$ along the face of area $A$.`,
          t`Shearing strain is the angle of shear $\theta$ $= \dfrac{\Delta x}{l}$: how far the top moves over the height.`,
          t`Modulus of rigidity $\eta = \dfrac{F/A}{\theta}$ $= \dfrac{F}{A\theta}$, in $\mathrm{N/m^2}$.`,
          t`Only solids have $\eta$: a liquid cannot resist a change of shape.`,
        ],
      },
      {
        title: "Poisson's ratio",
        points: [
          t`Stretching a wire increases its length and decreases its diameter.`,
          t`Longitudinal strain $= \dfrac{\Delta L}{L}$; lateral strain $= \dfrac{\Delta D}{D}$.`,
          t`Poisson's ratio $\sigma$ $= \dfrac{\text{lateral strain}}{\text{longitudinal strain}}$, a pure number with no unit.`,
          t`For common metals $\sigma$ is about $0.25$ to $0.35$; for steel about $0.28$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A rubber block $10\ \mathrm{cm}$ high has a top face of area $100\ \mathrm{cm^2}$. A force of $50\ \mathrm{N}$ along the top face moves it $0.2\ \mathrm{cm}$ sideways relative to the base. Find the modulus of rigidity of the rubber.`,
      steps: [
        t`Shearing stress $= \dfrac{50}{100 \times 10^{-4}}$ $= 5000\ \mathrm{N/m^2}$.`,
        t`Angle of shear $\theta = \dfrac{0.2}{10}$ $= 0.02$.`,
        t`$\eta = \dfrac{5000}{0.02}$ $= 2.5 \times 10^{5}\ \mathrm{N/m^2}$.`,
      ],
      answer: t`$2.5 \times 10^{5}\ \mathrm{N/m^2}$`,
    },
    visualSpec: t`Shear a block sideways, or squeeze it from all sides, and watch which strain changes.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Leaves the volume out of the change in volume.",
      remediation: t`$dV = \dfrac{V\,dP}{K}$: $\dfrac{dP}{K}$ is only the volume strain.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Turns the bulk modulus relation upside down.",
      remediation: t`$K = \dfrac{V\,dP}{dV}$, so $dV = \dfrac{V\,dP}{K}$, a tiny volume.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Divides by the volume instead of multiplying.",
      remediation: t`The strain $\dfrac{dV}{V}$ equals $\dfrac{dP}{K}$, so $dV = V \times \dfrac{dP}{K}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Divides the bulk modulus by the volume strain.",
      remediation: t`$K = \dfrac{dP}{\text{strain}}$, so $dP = K \times \text{strain}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Gives the volume strain instead of the pressure.",
      remediation: t`$\dfrac{dV}{V}$ is only the strain; multiply it by $K$ to get $dP$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Divides the volume strain by the bulk modulus.",
      remediation: t`Stress = modulus $\times$ strain: $dP = K\dfrac{dV}{V}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Uses the sideways displacement as the strain.",
      remediation: t`Shearing strain is $\theta = \dfrac{\Delta x}{l}$, displacement over height.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Takes the side of the cube as the area.",
      remediation: t`The force acts on a face of area $l^2$ $= 0.16\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Leaves the lengths in cm.",
      remediation: t`$\theta$ is unchanged, but the area must be in $\mathrm{m^2}$: $0.16\ \mathrm{m^2}$, not $1600$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Divides the longitudinal strain by the lateral strain.",
      remediation: t`$\sigma$ $= \dfrac{\text{lateral strain}}{\text{longitudinal strain}}$, less than one for metals.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: t`Leaves the area in $\mathrm{mm^2}$.`,
      remediation: t`$1.2\ \mathrm{mm^2}$ $= 1.2 \times 10^{-6}\ \mathrm{m^2}$ when $Y$ is in $\mathrm{N/m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Gives the longitudinal strain.",
      remediation: t`$\dfrac{F}{AY}$ is only the longitudinal strain; divide the lateral strain by it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Takes the bulk modulus for a change of shape.",
      remediation: t`$K$ is for a change of volume under equal pressure all round; shape changes need $\eta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Takes Young's modulus for a change of shape.",
      remediation: t`$Y$ is for a change of length; a change of shape at constant volume is measured by $\eta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Takes Poisson's ratio for a modulus.",
      remediation: t`$\sigma$ is a ratio of two strains, not a modulus; the change of shape is resisted by $\eta$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (vi)" },
      stem: t`A solid metal sphere of volume $0.31\ \mathrm{m^3}$ is lowered into the ocean where the water pressure is $2 \times 10^{7}\ \mathrm{N/m^2}$. The bulk modulus of the metal is $6.1 \times 10^{10}\ \mathrm{N/m^2}$. By how much does its volume decrease?`,
      verify: { kind: "value", inputs: { P: "2e7", V: "0.31", K: "6.1e10" }, params: { ask: "dV" } },
      options: [
        { key: "A", text: t`$946\ \mathrm{m^3}$`, correct: false, misconceptionId: "C04-M2", value: "946" },
        { key: "B", text: t`$0.00106\ \mathrm{m^3}$`, correct: false, misconceptionId: "C04-M3", value: "0.00106000000000000" },
        { key: "C", text: t`$1.02 \times 10^{-4}\ \mathrm{m^3}$`, correct: true, value: "0.000102000000000000" },
        { key: "D", text: t`$3.28 \times 10^{-4}\ \mathrm{m^3}$`, correct: false, misconceptionId: "C04-M1", value: "0.000328000000000000" },
      ],
      solution: {
        steps: [
          t`$dV = \dfrac{V\,dP}{K}$ $= \dfrac{0.31 \times 2 \times 10^{7}}{6.1 \times 10^{10}}$.`,
          t`$dV \approx 1.02 \times 10^{-4}\ \mathrm{m^3}$, a decrease.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Solved Ex.6.3" },
      stem: t`A metal cube of side $1\ \mathrm{m}$ is pressed equally on all its faces, and its volume changes by $1.5 \times 10^{-5}\ \mathrm{m^3}$. The bulk modulus of the metal is $6.6 \times 10^{10}\ \mathrm{N/m^2}$. What is the change in pressure?`,
      verify: { kind: "value", inputs: { K: "6.6e10", dV: "1.5e-5", V: "1" }, params: { ask: "dP" } },
      options: [
        { key: "A", text: t`$4.4 \times 10^{15}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M4", value: "4400000000000000" },
        { key: "B", text: t`$1.5 \times 10^{-5}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M5", value: "1.50000000000000e-5" },
        { key: "C", text: t`$2.27 \times 10^{-16}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M6", value: "2.27000000000000e-16" },
        { key: "D", text: t`$9.9 \times 10^{5}\ \mathrm{N/m^2}$`, correct: true, value: "990000" },
      ],
      solution: {
        steps: [
          t`$V = 1^3 = 1\ \mathrm{m^3}$; $dP = K\dfrac{dV}{V}$.`,
          t`$dP$ $= 6.6 \times 10^{10} \times 1.5 \times 10^{-5}$ $= 9.9 \times 10^{5}\ \mathrm{N/m^2}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Solved Ex.6.4" },
      stem: t`A metal cube of side $40\ \mathrm{cm}$ is acted on by a shearing force of $2000\ \mathrm{N}$. Its upper face moves $0.5\ \mathrm{cm}$ relative to the bottom. What is the modulus of rigidity of the metal?`,
      verify: { kind: "value", inputs: { F: "2000", l_cm: "40", dx_cm: "0.5" }, params: { ask: "eta" } },
      options: [
        { key: "A", text: t`$4 \times 10^{5}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M8", value: "400000" },
        { key: "B", text: t`$100\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M9", value: "100" },
        { key: "C", text: t`$1 \times 10^{6}\ \mathrm{N/m^2}$`, correct: true, value: "1000000" },
        { key: "D", text: t`$2.5 \times 10^{6}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M7", value: "2500000" },
      ],
      solution: {
        steps: [
          t`$A = 0.40^2$ $= 0.16\ \mathrm{m^2}$; $\theta = \dfrac{0.005}{0.40}$ $= 0.0125$.`,
          t`$\eta$ $= \dfrac{2000}{0.16 \times 0.0125}$ $= 1 \times 10^{6}\ \mathrm{N/m^2}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (ix)" },
      stem: t`A steel wire of cross-section $1.2\ \mathrm{mm^2}$ is stretched by a force of $120\ \mathrm{N}$, which produces a lateral strain of $1.455 \times 10^{-4}$. If $Y = 2 \times 10^{11}\ \mathrm{N/m^2}$, what is Poisson's ratio for steel?`,
      verify: { kind: "value", inputs: { lat: "1.455e-4", F: "120", A_mm2: "1.2", Y: "2e11" }, params: { ask: "poisson" } },
      options: [
        { key: "A", text: t`$3.44$`, correct: false, misconceptionId: "C04-M10", value: "3.44000000000000" },
        { key: "B", text: t`$291000$`, correct: false, misconceptionId: "C04-M11", value: "291000" },
        { key: "C", text: t`$0.0005$`, correct: false, misconceptionId: "C04-M12", value: "0.000500000000000000" },
        { key: "D", text: t`$0.291$`, correct: true, value: "0.291000000000000" },
      ],
      solution: {
        steps: [
          t`Longitudinal strain $= \dfrac{F}{AY}$ $= \dfrac{120}{1.2 \times 10^{-6} \times 2 \times 10^{11}}$ $= 5 \times 10^{-4}$.`,
          t`$\sigma$ $= \dfrac{1.455 \times 10^{-4}}{5 \times 10^{-4}}$ $= 0.291$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.4 (i)" },
      stem: t`A shearing force changes the shape of a block without changing its volume. Which modulus describes how the block resists this?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`Poisson's ratio, $\sigma$`, correct: false, misconceptionId: "C04-M15", value: "poisson_ratio" },
        { key: "B", text: t`The modulus of rigidity, $\eta$`, correct: true, value: "rigidity" },
        { key: "C", text: t`The bulk modulus, $K$`, correct: false, misconceptionId: "C04-M13", value: "bulk_K" },
        { key: "D", text: t`Young's modulus, $Y$`, correct: false, misconceptionId: "C04-M14", value: "youngs_Y" },
      ],
      solution: {
        steps: [
          t`A shearing force changes the shape at constant volume: the strain is the angle of shear.`,
          t`The modulus for shearing is the modulus of rigidity, $\eta$.`,
        ],
      },
    },
  ],
};
