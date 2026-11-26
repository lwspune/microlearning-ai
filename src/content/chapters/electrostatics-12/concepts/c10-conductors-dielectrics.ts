import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Lightning strikes a car, yet the people inside are unhurt. Is it the rubber tyres that save them?`,
    reveal: t`No: lightning has just crossed kilometres of air, so a few centimetres of rubber cannot stop it. The car's metal body is a closed conductor: the charge stays on its outside, and the field inside is zero.`,
  },
  explanation: {
    intuition: [
      t`A **conductor**, such as a metal, has free electrons that move until the field inside is zero.`,
      t`So any extra charge on a conductor ends up on its outer surface.`,
      t`A closed metal shell keeps outside fields out of its hollow: **electrostatic shielding**.`,
      t`A **dielectric** is an insulator: its charges cannot flow, but its molecules can stretch or turn in a field.`,
      t`That **polarization** sets up an opposing field inside, so the field in a dielectric is weaker.`,
    ],
    formal: [
      {
        title: "Conductors",
        points: [
          t`Inside a conductor in equilibrium, $E = 0$; otherwise its free electrons would keep moving.`,
          t`By Gauss' law, a surface just inside encloses no charge: all excess charge sits on the outer surface.`,
          t`The field just outside is perpendicular to the surface, $\dfrac{\sigma}{\varepsilon_0}$.`,
          t`A hollow conductor shields its inside from outside charges: a car, or a Faraday cage.`,
        ],
      },
      {
        title: "Dielectrics",
        points: [
          t`**Non-polar** molecules have no dipole moment of their own; a field stretches them into dipoles.`,
          t`**Polar** molecules, like water, have permanent dipole moments, pointing at random until a field lines them up.`,
          t`Either way the dielectric is polarized, and its field opposes the applied one.`,
          t`The **dielectric constant** $k$ is how many times the field is reduced: $E = \dfrac{E_0}{k}$.`,
        ],
      },
      {
        title: "Van de Graaff generator",
        points: [
          t`A moving belt carries charge up into a large hollow metal sphere.`,
          t`Charge given to the inside of a hollow conductor moves to its outer surface, however much is there already.`,
          t`So the sphere builds up millions of volts, though it can supply only a tiny current.`,
          t`It is used to accelerate charged particles, such as protons, for nuclear experiments.`,
        ],
      },
    ],
    worked: {
      prompt: t`A uniform field of $9 \times 10^4\ \mathrm{V/m}$ acts across a gap. The gap is filled with glass of dielectric constant $6$. Find the field in the glass, and the field inside a metal plate put in the gap instead.`,
      steps: [
        t`In the glass: $E = \dfrac{E_0}{k}$ $= \dfrac{9 \times 10^4}{6}$.`,
        t`$E = 1.5 \times 10^4\ \mathrm{V/m}$.`,
        t`Inside the metal, charges shift until the field is zero: $E = 0$.`,
      ],
      answer: t`$1.5 \times 10^4\ \mathrm{V/m}$ in the glass; $0$ inside the metal`,
    },
    visualSpec: t`Place a hollow conductor in a field and watch the free electrons shift until the inside is field-free.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Credits the rubber tyres for a car's safety in lightning.",
      remediation: "Lightning has crossed kilometres of air; it is the closed metal body that keeps the field out.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Thinks charge spreads through the whole volume of a conductor.",
      remediation: "Free charges repel each other to the outer surface; inside a conductor there is no excess charge.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks the air inside shields like a dielectric.",
      remediation: t`Air barely weakens a field ($k \approx 1$). The shielding comes from the conducting shell.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Thinks charge collects at the centre.",
      remediation: "Like charges push apart as far as they can: to the outer surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Thinks charge sits on the inner surface of a hollow conductor.",
      remediation: "With no charge inside the hollow, Gauss' law puts all the charge on the outer surface.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M6",
      mistake: "Thinks polar molecules have no dipole moment.",
      remediation: "That describes non-polar molecules. Polar ones, like water, have permanent dipole moments.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Thinks polar dipoles point the same way even without a field.",
      remediation: "Heat jumbles them: without a field their directions are random, and the net dipole moment is zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Confuses a polar dielectric with a conductor.",
      remediation: "A dielectric is an insulator: its charges shift or turn slightly but never flow.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Multiplies the field by the dielectric constant.",
      remediation: t`Polarization opposes the applied field, so the field inside is weaker: $E = \dfrac{E_0}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks a dielectric leaves the field unchanged.",
      remediation: t`The polarized molecules set up their own opposing field: $E = \dfrac{E_0}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: t`Divides by $k^2$.`,
      remediation: t`The dielectric constant is the ratio of the fields: divide once, $E = \dfrac{E_0}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Thinks a Van de Graaff generator gives large currents.",
      remediation: "It gives a very high voltage but only a tiny current: the belt carries little charge per second.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Confuses a Van de Graaff generator with a transformer.",
      remediation: "A Van de Graaff builds up static charge on a sphere; a transformer changes the voltage of an alternating supply.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Thinks a Van de Graaff generator is a lightning conductor.",
      remediation: "A lightning conductor leads charge safely to earth; a Van de Graaff piles charge up on purpose.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.2 (iv)" },
      stem: t`Why is sitting inside a car one of the safest places to be in a thunderstorm?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "car" } },
      options: [
        { key: "A", text: t`Its rubber tyres insulate it from the ground, so no charge can reach it`, correct: false, misconceptionId: "C10-M1", value: "tyres" },
        { key: "B", text: t`The charge spreads through the whole metal body, so it is too thin to harm anyone`, correct: false, misconceptionId: "C10-M2", value: "volume" },
        { key: "C", text: t`The air trapped inside acts as a dielectric and blocks the field`, correct: false, misconceptionId: "C10-M3", value: "air" },
        { key: "D", text: t`Its metal body is a closed conductor: the charge stays on the outside, and the field inside is zero`, correct: true, value: "shield" },
      ],
      solution: {
        steps: [
          t`The car's metal body is a closed conductor.`,
          t`Charge stays on its outer surface and the field inside is zero, so no current passes through the people.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`A hollow metal sphere is given a charge. Where does the charge sit once it settles?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "where" } },
      options: [
        { key: "A", text: t`On its outer surface`, correct: true, value: "outer" },
        { key: "B", text: t`Spread evenly through the metal`, correct: false, misconceptionId: "C10-M2", value: "volume" },
        { key: "C", text: t`Gathered near the centre`, correct: false, misconceptionId: "C10-M4", value: "centre" },
        { key: "D", text: t`On its inner surface`, correct: false, misconceptionId: "C10-M5", value: "inner" },
      ],
      solution: {
        steps: [
          t`Inside the metal $E = 0$, so a Gaussian surface within it encloses no charge.`,
          t`All the charge therefore sits on the outer surface.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.4" },
      stem: t`What is a polar dielectric?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "polar" } },
      options: [
        { key: "A", text: t`One that conducts electricity along a preferred direction`, correct: false, misconceptionId: "C10-M8", value: "conducts" },
        { key: "B", text: t`One whose molecules have permanent dipole moments, pointing at random until a field lines them up`, correct: true, value: "random_dipoles" },
        { key: "C", text: t`One whose molecules have no dipole moment, even in a field`, correct: false, misconceptionId: "C10-M6", value: "no_dipoles" },
        { key: "D", text: t`One whose molecular dipoles all point the same way even without a field`, correct: false, misconceptionId: "C10-M7", value: "aligned" },
      ],
      solution: {
        steps: [
          t`Polar molecules carry permanent dipole moments.`,
          t`Without a field they point at random; an applied field lines them up, polarizing the dielectric.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`A slab of dielectric constant $3$ is placed in a uniform field of $6 \times 10^4\ \mathrm{V/m}$, filling the space. What is the field inside the dielectric?`,
      verify: { kind: "value", inputs: { E0: "60000", k: "3" }, params: { ask: "field" } },
      options: [
        { key: "A", text: t`$60000\ \mathrm{V/m}$`, correct: false, misconceptionId: "C10-M10", value: "60000" },
        { key: "B", text: t`$6670\ \mathrm{V/m}$`, correct: false, misconceptionId: "C10-M11", value: "6670" },
        { key: "C", text: t`$20000\ \mathrm{V/m}$`, correct: true, value: "20000" },
        { key: "D", text: t`$1.8 \times 10^{5}\ \mathrm{V/m}$`, correct: false, misconceptionId: "C10-M9", value: "180000" },
      ],
      solution: {
        steps: [
          t`The dielectric reduces the field by its dielectric constant: $E = \dfrac{E_0}{k}$.`,
          t`$E = \dfrac{6 \times 10^4}{3}$ $= 2 \times 10^4\ \mathrm{V/m}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.31" },
      stem: t`What is a Van de Graaff generator mainly used for?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "vdg" } },
      options: [
        { key: "A", text: t`Building up millions of volts to accelerate charged particles for nuclear experiments`, correct: true, value: "accelerate" },
        { key: "B", text: t`Supplying large currents for welding and heavy machines`, correct: false, misconceptionId: "C10-M12", value: "large_current" },
        { key: "C", text: t`Stepping up the voltage of an alternating supply, like a transformer`, correct: false, misconceptionId: "C10-M13", value: "transformer" },
        { key: "D", text: t`Protecting tall buildings from lightning`, correct: false, misconceptionId: "C10-M14", value: "lightning_rod" },
      ],
      solution: {
        steps: [
          t`It builds up a very high voltage on a hollow metal sphere, with only a small current.`,
          t`That voltage accelerates charged particles for nuclear experiments.`,
        ],
      },
    },
  ],
};
