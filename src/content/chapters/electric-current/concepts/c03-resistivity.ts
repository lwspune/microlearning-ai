import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A lamp's tungsten filament has a resistance near $40\ \Omega$ when cold but near $500\ \Omega$ when glowing. So why do lamps usually fail at the moment they are switched on?`,
    reveal: t`At switch-on the filament is cold, its **resistance is low**, and a large current surges through it. A metal's resistance rises with temperature: $R_T = R_0(1 + \alpha T)$.`,
  },
  explanation: {
    intuition: [
      t`A longer wire has a larger resistance: the electrons must push through more metal.`,
      t`A thicker wire has a smaller resistance: it gives the charge a wider path.`,
      t`So resistance depends on the wire's shape, but also on what it is made of.`,
      t`The material's own share is its **resistivity** $\rho$, the same for every wire of that metal.`,
      t`Heat a metal and its ions vibrate more, so electrons collide more: its resistance rises.`,
    ],
    formal: [
      {
        title: "Resistivity",
        points: [
          t`For a uniform wire, $R \propto L$, its length, and $R \propto \dfrac{1}{A}$, its cross-section.`,
          t`So $R = \rho\dfrac{L}{A}$, where $\rho$ is the **resistivity** of the material.`,
          t`$\rho = \dfrac{RA}{L}$ depends only on the material and its temperature, not on the wire's shape.`,
          t`Its unit is the ohm metre, $\Omega\,\mathrm{m}$ (not ohm per metre).`,
          t`**Conductivity** is $\sigma = \dfrac{1}{\rho}$, in $(\Omega\,\mathrm{m})^{-1}$.`,
        ],
      },
      {
        title: "Stretching a wire",
        points: [
          t`Stretching a wire keeps its volume $AL$ the same, so as $L$ grows, $A$ shrinks.`,
          t`Stretch it to $n$ times its length: $A$ becomes $\dfrac{A}{n}$, so $R$ becomes $n^2R$.`,
          t`Halving the radius quarters $A$, so $L$ becomes $4L$ and $R$ becomes $16R$.`,
          t`The resistivity does not change: it is the same metal at the same temperature.`,
        ],
      },
      {
        title: "Conductors and insulators",
        points: [
          t`Metals have a tiny resistivity, about $10^{-8}\ \Omega\,\mathrm{m}$: they are good **conductors**.`,
          t`**Insulators** such as glass and rubber have resistivities more than $10^{14}$ times larger.`,
          t`**Semiconductors** such as silicon lie in between.`,
          t`Alloys such as nichrome, constantan and manganin have a larger resistivity than pure metals.`,
        ],
      },
      {
        title: "Resistance and temperature",
        points: [
          t`A metal's resistance rises almost steadily with temperature: $R_T = R_0(1 + \alpha T)$.`,
          t`Here $R_0$ is the resistance at $0^\circ\mathrm{C}$ and $R_T$ that at $T^\circ\mathrm{C}$.`,
          t`$\alpha$ is the **temperature coefficient of resistance**: $\alpha = \dfrac{R_T - R_0}{R_0 T}$, in per $^\circ\mathrm{C}$.`,
          t`Between any two temperatures, $\alpha$ $= \dfrac{R_2 - R_1}{R_1(T_2 - T_1)}$, with $R_1$ as the reference.`,
          t`Alloys such as constantan and manganin have a very small $\alpha$, so they suit standard resistors.`,
          t`A semiconductor's resistance falls as it is heated.`,
        ],
      },
    ],
    worked: {
      prompt: t`A nichrome wire $2\ \mathrm{m}$ long has a cross-section of $0.5\ \mathrm{mm^2}$, and nichrome's resistivity at $20^\circ\mathrm{C}$ is $1.1 \times 10^{-6}\ \Omega\,\mathrm{m}$. Find its resistance at $20^\circ\mathrm{C}$, and at $120^\circ\mathrm{C}$ if $\alpha = 4 \times 10^{-4}$ per $^\circ\mathrm{C}$ (referred to $20^\circ\mathrm{C}$).`,
      steps: [
        t`$A = 0.5\ \mathrm{mm^2}$ $= 0.5 \times 10^{-6}\ \mathrm{m^2}$, since $1\ \mathrm{mm^2}$ $= 10^{-6}\ \mathrm{m^2}$.`,
        t`$R = \rho\dfrac{L}{A}$ $= \dfrac{1.1 \times 10^{-6} \times 2}{0.5 \times 10^{-6}}$ $= 4.4\ \Omega$.`,
        t`The rise is $T_2 - T_1 = 100^\circ\mathrm{C}$, so $R_2 = R_1[1 + \alpha(T_2 - T_1)]$.`,
        t`$R_2 = 4.4(1 + 0.04)$ $= 4.576\ \Omega$ $\approx 4.58\ \Omega$.`,
      ],
      answer: t`$4.4\ \Omega$; about $4.58\ \Omega$`,
    },
    visualSpec: t`Stretch a wire with a slider and watch its length, cross-section and resistance change; then heat it and watch the resistance climb.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Uses the diameter as the radius.",
      remediation: t`The radius is half the diameter; the area is $\pi r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Converts an area with the plain factor ($1\ \mathrm{mm^2}$ $= 10^{-3}\ \mathrm{m^2}$).`,
      remediation: t`Square the factor: $1\ \mathrm{mm^2}$ $= 10^{-6}\ \mathrm{m^2}$ and $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "ext", topic: "converting units of area and volume" },
    },
    {
      id: "C03-M3",
      mistake: "Leaves the length in kilometres.",
      remediation: t`Put every length in metres: $20\ \mathrm{km}$ $= 2 \times 10^4\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Turns $R = \rho\dfrac{L}{A}$ upside down.`,
      remediation: t`A longer wire has more resistance and a thicker one less: $R = \rho\dfrac{L}{A}$, $\rho = \dfrac{RA}{L}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Lets the area shrink but forgets that the stretched wire gets longer.",
      remediation: t`The volume $AL$ stays the same: a quarter of the area means four times the length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Lets the area fall in the same ratio as the radius.",
      remediation: t`$A = \pi r^2$: halving the radius quarters the area.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the resistance stays the same because the metal is the same.",
      remediation: t`The resistivity stays the same; the resistance $\rho\dfrac{L}{A}$ changes with the shape.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Gives only the increase $R_0\alpha T$.`,
      remediation: t`$R_T = R_0 + R_0\alpha T$: add the increase to $R_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks a metal's resistance falls when it is heated.",
      remediation: t`Hotter ions vibrate more and scatter electrons more: a metal's resistance rises, $R_T = R_0(1 + \alpha T)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: t`Adds $\alpha T$ to $R_0$.`,
      remediation: t`$\alpha T$ is a fraction of $R_0$: $R_T = R_0(1 + \alpha T)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Divides by the resistance at the higher temperature.",
      remediation: t`Divide by the resistance at the reference temperature: $\alpha$ $= \dfrac{R_2 - R_1}{R_1(T_2 - T_1)}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Uses the final temperature instead of the change in temperature.",
      remediation: t`$\alpha$ is the fractional change per degree of change: use $T_2 - T_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: t`Forgets to divide by $R_1$.`,
      remediation: t`$\alpha$ is the change per unit resistance per degree: divide by $R_1$ too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Takes the resistance as proportional to the length alone.",
      remediation: t`For a fixed mass of metal, $A$ $= \dfrac{\text{volume}}{L} \propto \dfrac{m}{L}$, so $R \propto \dfrac{L^2}{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Swaps the masses and the lengths.",
      remediation: t`$R \propto \dfrac{L^2}{m}$: the length is squared, and the mass divides.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M16",
      mistake: "Takes the cross-section as proportional to the mass.",
      remediation: t`The mass fixes the volume $AL$, so $A \propto \dfrac{m}{L}$ and $R \propto \dfrac{L^2}{m}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.1 (iv)" },
      stem: t`A wire of length $L$ and resistance $R$ is stretched until the radius of its cross-section is halved. What is its new resistance?`,
      verify: { kind: "value", inputs: { k: "2" }, params: { ask: "stretch" } },
      options: [
        { key: "A", text: t`$8R$`, correct: false, misconceptionId: "C03-M6", value: "8*R" },
        { key: "B", text: t`$R$`, correct: false, misconceptionId: "C03-M7", value: "R" },
        { key: "C", text: t`$16R$`, correct: true, value: "16*R" },
        { key: "D", text: t`$4R$`, correct: false, misconceptionId: "C03-M5", value: "4*R" },
      ],
      solution: {
        steps: [
          t`Halving the radius makes $A' = \dfrac{A}{4}$.`,
          t`The volume stays the same, so $L' = 4L$.`,
          t`$R' = \rho\dfrac{4L}{A/4}$ $= 16R$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.4 (viii)" },
      stem: t`A wire $6\ \mathrm{m}$ long has a diameter of $0.5\ \mathrm{mm}$ and a resistance of $50\ \Omega$. What is the resistivity of its material?`,
      verify: { kind: "value", inputs: { R: "50", L: "6", d: "0.5" }, params: { ask: "rho" } },
      options: [
        { key: "A", text: t`$0.00164\ \mathrm{\Omega\,m}$`, correct: false, misconceptionId: "C03-M2", value: "0.00164000000000000" },
        { key: "B", text: t`$1.53 \times 10^{9}\ \mathrm{\Omega\,m}$`, correct: false, misconceptionId: "C03-M4", value: "1530000000" },
        { key: "C", text: t`$1.64 \times 10^{-6}\ \mathrm{\Omega\,m}$`, correct: true, value: "1.64000000000000e-6" },
        { key: "D", text: t`$6.54 \times 10^{-6}\ \mathrm{\Omega\,m}$`, correct: false, misconceptionId: "C03-M1", value: "6.54000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$r$ $= 0.25 \times 10^{-3}\ \mathrm{m}$, so $A = \pi r^2$ $= 1.96 \times 10^{-7}\ \mathrm{m^2}$.`,
          t`$\rho = \dfrac{RA}{L}$ $= \dfrac{50 \times 1.96 \times 10^{-7}}{6}$ $\approx 1.64 \times 10^{-6}\ \Omega\,\mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.4 (i)" },
      stem: t`One rail of a railway track is $20\ \mathrm{km}$ long and has a cross-section of $25\ \mathrm{cm^2}$. The steel's resistivity at $20^\circ\mathrm{C}$ is $6 \times 10^{-8}\ \Omega\,\mathrm{m}$. What is the rail's resistance at $20^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { rho: "6e-8", L: "20", A: "25" }, params: { ask: "rail" } },
      options: [
        { key: "A", text: t`$0.0048\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M2", value: "0.00480000000000000" },
        { key: "B", text: t`$4.8 \times 10^{-4}\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M3", value: "0.000480000000000000" },
        { key: "C", text: t`$7.5 \times 10^{-15}\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M4", value: "7.50000000000000e-15" },
        { key: "D", text: t`$0.48\ \mathrm{\Omega}$`, correct: true, value: "0.480000000000000" },
      ],
      solution: {
        steps: [
          t`$L = 2 \times 10^4\ \mathrm{m}$; $A$ $= 25 \times 10^{-4}\ \mathrm{m^2}$.`,
          t`$R = \rho\dfrac{L}{A}$ $= \dfrac{6 \times 10^{-8} \times 2 \times 10^4}{2.5 \times 10^{-3}}$ $= 0.48\ \Omega$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Solved Ex.11.7" },
      stem: t`A platinum wire has a resistance of $2.5\ \Omega$ at $0^\circ\mathrm{C}$. Its temperature coefficient of resistance is $4 \times 10^{-3}$ per $^\circ\mathrm{C}$. What is its resistance at $80^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { R0: "2.5", a: "0.004", T: "80" }, params: { ask: "RT" } },
      options: [
        { key: "A", text: t`$1.7\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M9", value: "1.70000000000000" },
        { key: "B", text: t`$2.82\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M10", value: "2.82000000000000" },
        { key: "C", text: t`$3.3\ \mathrm{\Omega}$`, correct: true, value: "3.30000000000000" },
        { key: "D", text: t`$0.8\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M8", value: "0.800000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha T = 0.004 \times 80$ $= 0.32$.`,
          t`$R_T = R_0(1 + \alpha T)$ $= 2.5 \times 1.32$ $= 3.3\ \Omega$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.4 (vii)" },
      stem: t`A silver wire has a resistance of $4.2\ \Omega$ at $27^\circ\mathrm{C}$ and $5.4\ \Omega$ at $100^\circ\mathrm{C}$. What is its temperature coefficient of resistance, taking $27^\circ\mathrm{C}$ as the reference?`,
      verify: { kind: "value", inputs: { R1: "4.2", T1: "27", R2: "5.4", T2: "100" }, params: { ask: "alpha" } },
      options: [
        { key: "A", text: t`$0.00391\ \mathrm{{}^{\circ}C^{-1}}$`, correct: true, value: "0.00391000000000000" },
        { key: "B", text: t`$0.00304\ \mathrm{{}^{\circ}C^{-1}}$`, correct: false, misconceptionId: "C03-M11", value: "0.00304000000000000" },
        { key: "C", text: t`$0.00286\ \mathrm{{}^{\circ}C^{-1}}$`, correct: false, misconceptionId: "C03-M12", value: "0.00286000000000000" },
        { key: "D", text: t`$0.0164\ \mathrm{{}^{\circ}C^{-1}}$`, correct: false, misconceptionId: "C03-M13", value: "0.0164000000000000" },
      ],
      solution: {
        steps: [
          t`$R_2 - R_1 = 1.2\ \Omega$; $T_2 - T_1 = 73^\circ\mathrm{C}$.`,
          t`$\alpha$ $= \dfrac{1.2}{4.2 \times 73}$ $= \dfrac{1.2}{306.6}$ $\approx 3.91 \times 10^{-3}$ per $^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.1 (v)" },
      stem: t`Three wires of the same metal have masses in the ratio $1 : 3 : 5$ and lengths in the ratio $5 : 3 : 1$. What is the ratio of their resistances?`,
      verify: { kind: "value", inputs: { m1: "1", m3: "5", l1: "5", l3: "1" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$125 : 15 : 1$`, correct: true, value: "125" },
        { key: "B", text: t`$5 : 3 : 1$`, correct: false, misconceptionId: "C03-M14", value: "5" },
        { key: "C", text: t`$1 : 15 : 125$`, correct: false, misconceptionId: "C03-M15", value: "0.00800000000000000" },
        { key: "D", text: t`$25 : 5 : 1$`, correct: false, misconceptionId: "C03-M16", value: "25" },
      ],
      solution: {
        steps: [
          t`For one metal, $m \propto AL$, so $A \propto \dfrac{m}{L}$ and $R$ $= \rho\dfrac{L}{A} \propto \dfrac{L^2}{m}$.`,
          t`$\dfrac{25}{1} : \dfrac{9}{3} : \dfrac{1}{5}$ $= 25 : 3 : 0.2$.`,
          t`Multiply by $5$: $125 : 15 : 1$.`,
        ],
      },
    },
  ],
};
