import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Hang a $10\ \mathrm{kg}$ load on a thin wire and on a thick one of the same metal. The thin one stretches far more. Yet both are 'the same material'. What, then, describes the material itself?`,
    reveal: t`Not the force, but the force spread over the area, the **stress**; and not the stretch, but the stretch per unit length, the **strain**. Their ratio belongs to the material.`,
  },
  explanation: {
    intuition: [
      t`A body that springs back when the force is removed is **elastic**; one that stays deformed is **plastic**.`,
      t`The restoring force per unit area inside a deformed body is the **stress**.`,
      t`The fractional change in size, change over original, is the **strain**; it has no unit.`,
      t`For small deformations, stress is proportional to strain: **Hooke's law**.`,
      t`The largest stress for which the body still returns fully is its **elastic limit**.`,
    ],
    formal: [
      {
        title: "Stress",
        points: [
          t`Stress $= \dfrac{F}{A}$, the force per unit area of cross-section.`,
          t`SI unit: $\mathrm{N/m^2}$, also called the pascal (Pa); dimensions $\left[L^{-1}M^1T^{-2}\right]$.`,
          t`A load of $m\ \mathrm{kg}$ exerts a force $F = mg$ newtons; convert areas to $\mathrm{m^2}$: $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
          t`Tensile and compressive stress act along the length; shearing stress acts along the surface.`,
        ],
      },
      {
        title: "Strain",
        points: [
          t`Longitudinal strain $= \dfrac{\Delta l}{l}$, the change in length over the original length.`,
          t`Volume strain $= \dfrac{\Delta V}{V}$; shearing strain is the angle of shear $\theta$.`,
          t`Strain is a ratio of two like quantities, so it has no unit or dimensions; put $\Delta l$ and $l$ in the same unit.`,
        ],
      },
      {
        title: "Hooke's law",
        points: [
          t`Within the elastic limit, stress $\propto$ strain.`,
          t`So $\dfrac{\text{stress}}{\text{strain}}$ is a constant for the material, its **modulus of elasticity**.`,
          t`Beyond the elastic limit the body no longer returns to its original size, and the law fails.`,
        ],
      },
    ],
    worked: {
      prompt: t`A steel rod $2\ \mathrm{m}$ long and $1\ \mathrm{cm^2}$ in cross-section carries a load of $500\ \mathrm{kg}$ and stretches by $0.5\ \mathrm{mm}$. Find the stress and the strain. (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      steps: [
        t`$F = 500 \times 9.8$ $= 4900\ \mathrm{N}$; $A = 1 \times 10^{-4}\ \mathrm{m^2}$.`,
        t`Stress $= \dfrac{4900}{10^{-4}}$ $= 4.9 \times 10^{7}\ \mathrm{N/m^2}$.`,
        t`Strain $= \dfrac{0.5 \times 10^{-3}}{2}$ $= 2.5 \times 10^{-4}$.`,
      ],
      answer: t`$4.9 \times 10^{7}\ \mathrm{N/m^2}$; $2.5 \times 10^{-4}$`,
    },
    visualSpec: t`Hang loads on wires of different thickness and compare the force, the stress and the strain in each.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Divides the change by the final length.",
      remediation: t`Strain is the change over the *original* length: $\dfrac{2}{30}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Gives the extension instead of the strain.",
      remediation: t`The $2\ \mathrm{cm}$ stretch must be divided by the original $30\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Divides the length by the change.",
      remediation: t`Strain is $\dfrac{\Delta l}{l}$, a small fraction, not $\dfrac{l}{\Delta l}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Takes the load in kg as the force in newtons.",
      remediation: t`A $100\ \mathrm{kg}$ load pulls with $F = mg$ $= 980\ \mathrm{N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Leaves the area in $\mathrm{cm^2}$.`,
      remediation: t`$0.01\ \mathrm{cm^2}$ $= 10^{-6}\ \mathrm{m^2}$; stress in $\mathrm{N/m^2}$ needs the area in $\mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Divides the force by the length.",
      remediation: "Stress is force per unit *area* of cross-section; the length does not enter.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Leaves the extension in cm.",
      remediation: t`$2.5\ \mathrm{cm}$ $= 0.025\ \mathrm{m}$; both lengths must be in the same unit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Divides the length by the extension.",
      remediation: t`Strain is $\dfrac{\Delta l}{l}$ $= \dfrac{0.025}{50}$, a small fraction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Puts the length in cm but the extension in m.",
      remediation: t`Use one unit for both: $\dfrac{2.5\ \mathrm{cm}}{5000\ \mathrm{cm}}$ or $\dfrac{0.025\ \mathrm{m}}{50\ \mathrm{m}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Gives the unit of force.",
      remediation: t`Stress is force *per unit area*: $\mathrm{N/m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks stress has no unit, like strain.",
      remediation: t`Strain is a ratio of lengths; stress is force over area, with unit $\mathrm{N/m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Gives force per unit length.",
      remediation: t`Stress divides by an area, $\mathrm{m^2}$, not a length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks Hooke's law holds right up to breaking.",
      remediation: "Past the elastic limit the body deforms permanently and stress is no longer proportional to strain.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks Hooke's law holds only for metals.",
      remediation: "Any elastic body, a rubber band or a spring, obeys it for small deformations.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks Hooke's law holds only for compression.",
      remediation: "It applies to stretching, compressing and shearing alike, within the elastic limit.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (xi)" },
      stem: t`A rubber band $30\ \mathrm{cm}$ long is stretched to $32\ \mathrm{cm}$ by a load. What strain is produced?`,
      verify: { kind: "value", inputs: { l0: "30", l1: "32" }, params: { ask: "strain_cm" } },
      options: [
        { key: "A", text: t`$0.0667$`, correct: true, value: "0.0667000000000000" },
        { key: "B", text: t`$0.0625$`, correct: false, misconceptionId: "C01-M1", value: "0.0625000000000000" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C01-M2", value: "2" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C01-M3", value: "15" },
      ],
      solution: {
        steps: [
          t`$\Delta l = 32 - 30$ $= 2\ \mathrm{cm}$; $l = 30\ \mathrm{cm}$.`,
          t`Strain $= \dfrac{2}{30}$ $\approx 0.0667$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (xii)" },
      stem: t`A wire $50\ \mathrm{m}$ long and $0.01\ \mathrm{cm^2}$ in cross-section carries a load of $100\ \mathrm{kg}$. What is the stress in it? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { m: "100", A_cm2: "0.01", l: "50", g: "9.8" }, params: { ask: "stress" } },
      options: [
        { key: "A", text: t`$9.8 \times 10^{8}\ \mathrm{N/m^2}$`, correct: true, value: "980000000" },
        { key: "B", text: t`$1 \times 10^{8}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C01-M4", value: "100000000" },
        { key: "C", text: t`$98000\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C01-M5", value: "98000" },
        { key: "D", text: t`$19.6\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C01-M6", value: "19.6000000000000" },
      ],
      solution: {
        steps: [
          t`$F = 100 \times 9.8$ $= 980\ \mathrm{N}$; $A = 0.01 \times 10^{-4}$ $= 10^{-6}\ \mathrm{m^2}$.`,
          t`Stress $= \dfrac{980}{10^{-6}}$ $= 9.8 \times 10^{8}\ \mathrm{N/m^2}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.5 (xiii)" },
      stem: t`A cable $50\ \mathrm{m}$ long stretches by $2.5\ \mathrm{cm}$ when a load is lifted. What strain is produced?`,
      verify: { kind: "value", inputs: { L_m: "50", dl_cm: "2.5" }, params: { ask: "strain_m" } },
      options: [
        { key: "A", text: t`$2000$`, correct: false, misconceptionId: "C01-M8", value: "2000" },
        { key: "B", text: t`$5 \times 10^{-6}$`, correct: false, misconceptionId: "C01-M9", value: "5.00000000000000e-6" },
        { key: "C", text: t`$5 \times 10^{-4}$`, correct: true, value: "0.000500000000000000" },
        { key: "D", text: t`$0.05$`, correct: false, misconceptionId: "C01-M7", value: "0.0500000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta l = 2.5\ \mathrm{cm}$ $= 0.025\ \mathrm{m}$; $l = 50\ \mathrm{m}$.`,
          t`Strain $= \dfrac{0.025}{50}$ $= 5 \times 10^{-4}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.2 (iii)" },
      stem: t`What are the SI unit and the dimensions of stress?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`$\mathrm{N/m^2}$, $\left[L^{-1}M^1T^{-2}\right]$`, correct: true, value: "Pa_dims" },
        { key: "B", text: t`$\mathrm{N}$, $\left[L^1M^1T^{-2}\right]$`, correct: false, misconceptionId: "C01-M10", value: "newton_u" },
        { key: "C", text: t`No unit, $\left[L^0M^0T^0\right]$`, correct: false, misconceptionId: "C01-M11", value: "no_unit" },
        { key: "D", text: t`$\mathrm{N/m}$, $\left[L^0M^1T^{-2}\right]$`, correct: false, misconceptionId: "C01-M12", value: "N_per_m" },
      ],
      solution: {
        steps: [
          t`Stress $= \dfrac{F}{A}$, so its unit is $\mathrm{N/m^2}$ (pascal).`,
          t`Dimensions: $\dfrac{\left[L^1M^1T^{-2}\right]}{\left[L^2\right]}$ $= \left[L^{-1}M^1T^{-2}\right]$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.2 (viii)" },
      stem: t`Under what condition does Hooke's law hold?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "hooke" } },
      options: [
        { key: "A", text: t`Only within the elastic limit`, correct: true, value: "within_elastic" },
        { key: "B", text: t`For every load, up to the breaking point`, correct: false, misconceptionId: "C01-M13", value: "up_to_break" },
        { key: "C", text: t`Only for metals`, correct: false, misconceptionId: "C01-M14", value: "metals_only" },
        { key: "D", text: t`Only when the body is compressed`, correct: false, misconceptionId: "C01-M15", value: "compression_only" },
      ],
      solution: {
        steps: [
          t`Stress is proportional to strain only while the body returns fully to its size when the load is removed.`,
          t`So Hooke's law holds only within the elastic limit.`,
        ],
      },
    },
  ],
};
