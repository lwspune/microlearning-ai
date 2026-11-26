import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`The field of a point charge falls to a quarter when you double your distance. Near a long charged wire it only halves. Why the difference?`,
    reveal: t`A point charge's field spreads over a sphere, whose area grows as $r^2$. A long wire's field spreads over a cylinder, whose area grows only as $r$, so $E$ $= \dfrac{\lambda}{2\pi\varepsilon_0r}$.`,
  },
  explanation: {
    intuition: [
      t`A long, straight, uniformly charged wire carries a **linear charge density** $\lambda$, its charge per metre.`,
      t`By symmetry its field points straight out from the wire, the same all round at a given distance.`,
      t`So the right Gaussian surface is a cylinder round the wire.`,
      t`The field crosses its curved face but runs along its flat ends, which carry no flux.`,
    ],
    formal: [
      {
        title: "Applying Gauss' law",
        points: [
          t`Take a coaxial cylinder of radius $r$ and length $l$.`,
          t`Flux through the curved face: $E \times 2\pi rl$; through the ends: zero.`,
          t`Charge enclosed: $\lambda l$. So $E \times 2\pi rl$ $= \dfrac{\lambda l}{\varepsilon_0}$.`,
          t`Hence $E$ $= \dfrac{\lambda}{2\pi\varepsilon_0r}$, falling as $\dfrac{1}{r}$.`,
        ],
      },
      {
        title: "Using it",
        points: [
          t`A wire of length $L$ with charge $q$ has $\lambda = \dfrac{q}{L}$.`,
          t`The formula holds near a long wire, or a long charged cylinder outside its surface.`,
          t`In a medium of dielectric constant $K$: $E$ $= \dfrac{\lambda}{2\pi\varepsilon_0Kr}$.`,
          t`$\dfrac{1}{2\pi\varepsilon_0}$ $= 2 \times 9 \times 10^9$ $= 1.8 \times 10^{10}\ \mathrm{N\,m^2/C^2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A long wire carries $5\ \mu\mathrm{C}$ per metre. Find the field $0.25\ \mathrm{m}$ and $0.5\ \mathrm{m}$ from it, in air.`,
      steps: [
        t`$E$ $= \dfrac{\lambda}{2\pi\varepsilon_0r}$ $= \dfrac{1.8 \times 10^{10} \times 5 \times 10^{-6}}{0.25}$.`,
        t`$E = 3.6 \times 10^5\ \mathrm{N/C}$ at $0.25\ \mathrm{m}$.`,
        t`At twice the distance the field halves: $1.8 \times 10^5\ \mathrm{N/C}$ at $0.5\ \mathrm{m}$.`,
      ],
      answer: t`$3.6 \times 10^5\ \mathrm{N/C}$ and $1.8 \times 10^5\ \mathrm{N/C}$`,
    },
    visualSpec: t`Draw a cylinder round a charged wire and stretch its radius: the field lines crossing it stay the same while each square metre gets fewer.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Uses the total charge as $\lambda$.`,
      remediation: t`$\lambda$ is the charge per metre: divide the charge by the wire's length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Uses the point-charge formula for a line of charge.",
      remediation: t`Near a long wire the field spreads over a cylinder, not a sphere: $E$ $= \dfrac{\lambda}{2\pi\varepsilon_0r}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Uses $\dfrac{1}{r^2}$ for a line.`,
      remediation: t`The cylinder's curved area, $2\pi rl$, grows as $r$, so the field falls as $\dfrac{1}{r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Uses $4\pi$ instead of $2\pi$.`,
      remediation: t`The curved face of the cylinder has area $2\pi rl$, so $2\pi$, not the sphere's $4\pi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Puts $\varepsilon_0$ on top.`,
      remediation: t`From $E \times 2\pi rl$ $= \dfrac{\lambda l}{\varepsilon_0}$, $\varepsilon_0$ ends up below: $E$ $= \dfrac{\lambda}{2\pi\varepsilon_0r}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: "Multiplies by the dielectric constant instead of dividing.",
      remediation: t`A dielectric weakens the field: $E$ $= \dfrac{\lambda}{2\pi\varepsilon_0Kr}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Takes a sphere as the Gaussian surface for a wire.",
      remediation: t`Points on a sphere round a wire are at different distances from it, so $E$ is not the same all over: use a coaxial cylinder.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M8",
      mistake: "Counts flux through the cylinder's flat ends.",
      remediation: "The field runs along the flat ends, parallel to them, so no flux crosses them.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Takes a cube as the Gaussian surface for a wire.",
      remediation: t`A cube does not match the wire's symmetry: $E$ varies over its faces. A coaxial cylinder does.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`A long straight wire carries $2\ \mu\mathrm{C}$ per metre and lies in oil of dielectric constant $4$. What is the electric field $0.3\ \mathrm{m}$ from it? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { lam_uC: "2", r: "0.3", K: "4" }, params: { ask: "medium" } },
      options: [
        { key: "A", text: t`$99900\ \mathrm{N/C}$`, correct: false, misconceptionId: "C03-M3", value: "99900" },
        { key: "B", text: t`$15000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C03-M4", value: "15000" },
        { key: "C", text: t`$30000\ \mathrm{N/C}$`, correct: true, value: "30000" },
        { key: "D", text: t`$4.8 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C03-M6", value: "480000" },
      ],
      solution: {
        steps: [
          t`$E$ $= \dfrac{\lambda}{2\pi\varepsilon_0Kr}$ $= \dfrac{2 \times 10^{-6}}{2\pi \times 8.85 \times 10^{-12} \times 4 \times 0.3}$.`,
          t`$E \approx 3.0 \times 10^4\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.5(iii)" },
      stem: t`A long charged cylinder has charge $\lambda$ per unit length and sits in a medium of dielectric constant $K$. What is the electric field outside it, a distance $r$ from its axis?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{\lambda}{4\pi\varepsilon_0Kr}$`, correct: false, misconceptionId: "C03-M4", value: "four_pi" },
        { key: "B", text: t`$\dfrac{2\pi\varepsilon_0\lambda}{Kr}$`, correct: false, misconceptionId: "C03-M5", value: "eps_top" },
        { key: "C", text: t`$\dfrac{\lambda}{2\pi\varepsilon_0Kr}$`, correct: true, value: "std" },
        { key: "D", text: t`$\dfrac{\lambda}{2\pi\varepsilon_0Kr^2}$`, correct: false, misconceptionId: "C03-M3", value: "r2" },
      ],
      solution: {
        steps: [
          t`A coaxial cylinder of radius $r$, length $l$: $E \times 2\pi rl$ $= \dfrac{\lambda l}{\varepsilon_0K}$.`,
          t`$E$ $= \dfrac{\lambda}{2\pi\varepsilon_0Kr}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`The electric field $0.5\ \mathrm{m}$ from a long charged wire in air is $3.6 \times 10^4\ \mathrm{N/C}$. What is the charge per unit length of the wire? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { E: "36000", r: "0.5" }, params: { ask: "lam" } },
      options: [
        { key: "A", text: t`$5 \times 10^{-7}\ \mathrm{C/m}$`, correct: false, misconceptionId: "C03-M3", value: "5.00000000000000e-7" },
        { key: "B", text: t`$2 \times 10^{-6}\ \mathrm{C/m}$`, correct: false, misconceptionId: "C03-M4", value: "2.00000000000000e-6" },
        { key: "C", text: t`$3.24 \times 10^{14}\ \mathrm{C/m}$`, correct: false, misconceptionId: "C03-M5", value: "324000000000000" },
        { key: "D", text: t`$1 \times 10^{-6}\ \mathrm{C/m}$`, correct: true, value: "1.00000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$\lambda = 2\pi\varepsilon_0rE$ $= 2\pi \times 8.85 \times 10^{-12} \times 0.5 \times 3.6 \times 10^4$.`,
          t`$\lambda \approx 1 \times 10^{-6}\ \mathrm{C/m}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.2" },
      stem: t`A straight thin wire $4\ \mathrm{m}$ long carries a charge of $6\ \mu\mathrm{C}$ spread evenly along it. Treating it as a long line, what is the electric field $1.5\ \mathrm{m}$ from its centre? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { q_uC: "6", L: "4", r: "1.5" }, params: { ask: "wire" } },
      options: [
        { key: "A", text: t`$24000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C03-M2", value: "24000" },
        { key: "B", text: t`$12000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C03-M3", value: "12000" },
        { key: "C", text: t`$18000\ \mathrm{N/C}$`, correct: true, value: "18000" },
        { key: "D", text: t`$71900\ \mathrm{N/C}$`, correct: false, misconceptionId: "C03-M1", value: "71900" },
      ],
      solution: {
        steps: [
          t`$\lambda$ $= \dfrac{6 \times 10^{-6}}{4}$ $= 1.5 \times 10^{-6}\ \mathrm{C/m}$.`,
          t`$E$ $= \dfrac{\lambda}{2\pi\varepsilon_0r}$ $= \dfrac{1.5 \times 10^{-6}}{2\pi \times 8.85 \times 10^{-12} \times 1.5}$.`,
          t`$E \approx 1.8 \times 10^4\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Which Gaussian surface gives the field of a long, uniformly charged wire, and why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "surface" } },
      options: [
        { key: "A", text: t`A cylinder round the wire: $E$ is the same all over its curved face, and its flat ends carry no flux`, correct: true, value: "cylinder" },
        { key: "B", text: t`A sphere centred on the wire: $E$ is the same all over it`, correct: false, misconceptionId: "C03-M7", value: "sphere" },
        { key: "C", text: t`A cylinder round the wire, counting the same flux through its flat ends as through its curved face`, correct: false, misconceptionId: "C03-M8", value: "ends_count" },
        { key: "D", text: t`A cube round the wire: its six faces share the flux equally`, correct: false, misconceptionId: "C03-M9", value: "cube" },
      ],
      solution: {
        steps: [
          t`The wire's field points radially out, the same at every point a distance $r$ away.`,
          t`A coaxial cylinder matches that: uniform $E$ on its curved face, no flux through its flat ends.`,
        ],
      },
    },
  ],
};
