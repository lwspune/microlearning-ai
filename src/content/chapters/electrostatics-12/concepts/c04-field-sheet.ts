import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Walk away from a point charge and its field fades fast. Walk away from a huge charged sheet and it does not fade at all. How can that be?`,
    reveal: t`Field lines from an infinite sheet run out perpendicular to it, parallel to each other, so they never spread out. The field is $\dfrac{\sigma}{2\varepsilon_0}$ at every distance.`,
  },
  explanation: {
    intuition: [
      t`A large, flat, uniformly charged sheet carries a **surface charge density** $\sigma$, its charge per square metre.`,
      t`By symmetry its field points straight out from the sheet on both sides.`,
      t`The field lines are parallel: they do not spread, so the field does not weaken with distance.`,
      t`Next to a charged conductor all the field points outward, so it is twice as strong: $\dfrac{\sigma}{\varepsilon_0}$.`,
    ],
    formal: [
      {
        title: "An isolated sheet",
        points: [
          t`Take a Gaussian cylinder through the sheet, its flat ends of area $A$ on either side.`,
          t`Flux leaves through both ends: $2EA$; none through the curved side.`,
          t`Charge enclosed: $\sigma A$. So $2EA$ $= \dfrac{\sigma A}{\varepsilon_0}$ and $E = \dfrac{\sigma}{2\varepsilon_0}$.`,
          t`The field is the same at every distance from a large sheet.`,
        ],
      },
      {
        title: "Next to a conductor",
        points: [
          t`Inside a conductor $E = 0$, so flux leaves only through the outer end of the cylinder.`,
          t`$EA$ $= \dfrac{\sigma A}{\varepsilon_0}$, so $E = \dfrac{\sigma}{\varepsilon_0}$, with $\sigma = \dfrac{q}{\text{area}}$.`,
          t`The charges push each other outward: force per unit area $\dfrac{\sigma^2}{2\varepsilon_0}$.`,
        ],
      },
      {
        title: "Two parallel sheets",
        points: [
          t`Sheets of $+\sigma$ and $-\sigma$ each give $\dfrac{\sigma}{2\varepsilon_0}$.`,
          t`Between them the two fields point the same way and add: $E = \dfrac{\sigma}{\varepsilon_0}$.`,
          t`Outside they point opposite ways and cancel: $E = 0$. This is a parallel plate capacitor.`,
        ],
      },
    ],
    worked: {
      prompt: t`A large sheet carries $1.77\ \mu\mathrm{C}$ per square metre. Find the field $1\ \mathrm{cm}$ and $10\ \mathrm{cm}$ from it.`,
      steps: [
        t`$E = \dfrac{\sigma}{2\varepsilon_0}$ $= \dfrac{1.77 \times 10^{-6}}{2 \times 8.85 \times 10^{-12}}$.`,
        t`$E = 1 \times 10^5\ \mathrm{N/C}$.`,
        t`A large sheet's field does not depend on distance: $1 \times 10^5\ \mathrm{N/C}$ at both points.`,
      ],
      answer: t`$1 \times 10^5\ \mathrm{N/C}$ at both points`,
    },
    visualSpec: t`Show parallel field lines leaving both faces of a charged sheet, and a test charge feeling the same push at every distance.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses $\dfrac{\sigma}{\varepsilon_0}$, the conductor's field, for an isolated sheet.`,
      remediation: t`An isolated sheet sends half its flux each way: $E = \dfrac{\sigma}{2\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Uses $k\sigma$.`,
      remediation: t`Gauss' law on a cylinder through the sheet gives $E = \dfrac{\sigma}{2\varepsilon_0}$, with no $4\pi$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Multiplies by $2\varepsilon_0$ instead of dividing.`,
      remediation: t`$2EA$ $= \dfrac{\sigma A}{\varepsilon_0}$, so $\varepsilon_0$ is below: $E = \dfrac{\sigma}{2\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Uses the isolated sheet's $\dfrac{\sigma}{2\varepsilon_0}$ next to a conductor.`,
      remediation: t`Inside a conductor $E = 0$, so all the flux goes outward: $E = \dfrac{\sigma}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Leaves the area in square centimetres.",
      remediation: t`$40\ \mathrm{cm^2}$ $= 40 \times 10^{-4}\ \mathrm{m^2}$: divide by $10^4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Takes the flux $\dfrac{q}{\varepsilon_0}$ as the field.`,
      remediation: t`The field next to the surface uses the charge per area, $\sigma = \dfrac{q}{A}$: $E = \dfrac{\sigma}{\varepsilon_0}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M7",
      mistake: t`Forgets the half: $\dfrac{\sigma^2}{\varepsilon_0}$.`,
      remediation: t`A surface charge feels only the field of the rest of the surface, $\dfrac{\sigma}{2\varepsilon_0}$: force per area $\dfrac{\sigma^2}{2\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Gives a field instead of a force per unit area.",
      remediation: t`Force per area is the charge per area times the field it feels: $\sigma \times \dfrac{\sigma}{2\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: t`Multiplies by $2\varepsilon_0$ instead of dividing.`,
      remediation: t`Force per unit area is $\dfrac{\sigma^2}{2\varepsilon_0}$: a large number of $\mathrm{N/m^2}$ for a strongly charged surface.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks the two sheets' fields cancel between them.",
      remediation: t`Between a $+\sigma$ and a $-\sigma$ sheet both fields point from $+$ to $-$: they add. They cancel outside.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Counts only one sheet's field.",
      remediation: t`Both sheets act between them: $\dfrac{\sigma}{2\varepsilon_0} + \dfrac{\sigma}{2\varepsilon_0}$ $= \dfrac{\sigma}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Doubles the conductor's field, giving $\dfrac{2\sigma}{\varepsilon_0}$.`,
      remediation: t`Each sheet gives $\dfrac{\sigma}{2\varepsilon_0}$; two of them give $\dfrac{\sigma}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks a sheet's field falls as the square of the distance.",
      remediation: "That is a point charge. A large sheet's field lines are parallel, so its field does not change with distance.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks a sheet's field falls in proportion to the distance.",
      remediation: t`$\dfrac{1}{r}$ belongs to a line of charge. A sheet's field is $\dfrac{\sigma}{2\varepsilon_0}$ at any distance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks a sheet's field grows with distance.",
      remediation: t`Nothing in $\dfrac{\sigma}{2\varepsilon_0}$ depends on distance: the field is uniform.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.3" },
      stem: t`A large flat sheet carries $4\ \mu\mathrm{C}$ per square metre. What is the electric field at a point near the sheet, opposite its middle? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { sigma_uC: "4" }, params: { ask: "sheet" } },
      options: [
        { key: "A", text: t`$36000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M2", value: "36000" },
        { key: "B", text: t`$7.08 \times 10^{-17}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M3", value: "7.08000000000000e-17" },
        { key: "C", text: t`$2.26 \times 10^{5}\ \mathrm{N/C}$`, correct: true, value: "226000" },
        { key: "D", text: t`$4.52 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M1", value: "452000" },
      ],
      solution: {
        steps: [
          t`$E = \dfrac{\sigma}{2\varepsilon_0}$ $= \dfrac{4 \times 10^{-6}}{2 \times 8.85 \times 10^{-12}}$.`,
          t`$E \approx 2.26 \times 10^5\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.7" },
      stem: t`A conductor with a surface area of $40\ \mathrm{cm^2}$, in air, carries a charge of $0.2\ \mu\mathrm{C}$ spread evenly. What is the electric field just outside its surface? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { q_uC: "0.2", A_cm2: "40" }, params: { ask: "conductor" } },
      options: [
        { key: "A", text: t`$2.82 \times 10^{6}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M4", value: "2820000" },
        { key: "B", text: t`$565\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M5", value: "565" },
        { key: "C", text: t`$22600\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M6", value: "22600" },
        { key: "D", text: t`$5.65 \times 10^{6}\ \mathrm{N/C}$`, correct: true, value: "5650000" },
      ],
      solution: {
        steps: [
          t`$\sigma = \dfrac{q}{A}$ $= \dfrac{2 \times 10^{-7}}{4 \times 10^{-3}}$ $= 5 \times 10^{-5}\ \mathrm{C/m^2}$.`,
          t`Just outside a conductor: $E = \dfrac{\sigma}{\varepsilon_0}$ $= \dfrac{5 \times 10^{-5}}{8.85 \times 10^{-12}} \approx 5.65 \times 10^6\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.7" },
      stem: t`A conductor with a surface area of $40\ \mathrm{cm^2}$, in air, carries a charge of $0.2\ \mu\mathrm{C}$ spread evenly. What is the outward mechanical force per unit area on its surface? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { q_uC: "0.2", A_cm2: "40" }, params: { ask: "force" } },
      options: [
        { key: "A", text: t`$2.82 \times 10^{6}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M8", value: "2820000" },
        { key: "B", text: t`$4.42 \times 10^{-20}\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M9", value: "4.42000000000000e-20" },
        { key: "C", text: t`$141\ \mathrm{N/m^2}$`, correct: true, value: "141" },
        { key: "D", text: t`$282\ \mathrm{N/m^2}$`, correct: false, misconceptionId: "C04-M7", value: "282" },
      ],
      solution: {
        steps: [
          t`$\sigma$ $= \dfrac{2 \times 10^{-7}}{4 \times 10^{-3}}$ $= 5 \times 10^{-5}\ \mathrm{C/m^2}$.`,
          t`Force per unit area $= \dfrac{\sigma^2}{2\varepsilon_0}$ $= \dfrac{\left(5 \times 10^{-5}\right)^2}{2 \times 8.85 \times 10^{-12}}$.`,
          t`$\approx 141\ \mathrm{N/m^2}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Two large parallel sheets carry $+1.77\ \mu\mathrm{C}$ and $-1.77\ \mu\mathrm{C}$ per square metre. What is the electric field between them? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { sigma_uC: "1.77" }, params: { ask: "between" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M10", value: "0" },
        { key: "B", text: t`$1 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M11", value: "100000" },
        { key: "C", text: t`$4 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C04-M12", value: "400000" },
        { key: "D", text: t`$2 \times 10^{5}\ \mathrm{N/C}$`, correct: true, value: "200000" },
      ],
      solution: {
        steps: [
          t`Each sheet gives $\dfrac{\sigma}{2\varepsilon_0}$; between them the two fields add.`,
          t`$E = \dfrac{\sigma}{\varepsilon_0}$ $= \dfrac{1.77 \times 10^{-6}}{8.85 \times 10^{-12}}$ $= 2 \times 10^5\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.2(vii)" },
      stem: t`How does the electric field of a very large, uniformly charged plane sheet change as you move away from it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "distance" } },
      options: [
        { key: "A", text: t`It grows with the distance`, correct: false, misconceptionId: "C04-M15", value: "grows" },
        { key: "B", text: t`It stays the same`, correct: true, value: "constant" },
        { key: "C", text: t`It falls as the square of the distance`, correct: false, misconceptionId: "C04-M13", value: "inv_r2" },
        { key: "D", text: t`It falls in proportion to the distance`, correct: false, misconceptionId: "C04-M14", value: "inv_r" },
      ],
      solution: {
        steps: [
          t`Gauss' law on a cylinder through the sheet gives $E = \dfrac{\sigma}{2\varepsilon_0}$.`,
          t`The distance does not appear: the field stays the same.`,
        ],
      },
    },
  ],
};
