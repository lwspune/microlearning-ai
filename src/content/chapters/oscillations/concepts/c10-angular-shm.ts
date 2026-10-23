import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`A compass needle nudged off north swings back and forth before settling. A wall clock's balance wheel twists to and fro. What do these have in common with a mass on a spring?`,
    reveal: t`Each is pulled back by a **torque** proportional to how far it has turned. That gives **angular S.H.M.**, with the same mathematics as linear S.H.M.`,
  },
  explanation: {
    intuition: [
      t`In **angular S.H.M.** a body twists to and fro about an axis.`,
      t`A restoring torque pulls it back, proportional to its angular displacement: $\tau = -c\theta$.`,
      t`Moment of inertia $I$ plays the part of mass, and the torsion constant $c$ the part of $k$.`,
      t`So $T = 2\pi\sqrt{\dfrac{I}{c}}$.`,
      t`A magnet in a uniform field feels a torque $\mu B\sin\theta \approx \mu B\theta$: angular S.H.M. with $c = \mu B$.`,
    ],
    formal: [
      {
        title: "Angular S.H.M.",
        points: [
          t`Restoring torque: $\tau = -c\theta$, with $c$ the **torsion constant**.`,
          t`Since $\tau = I\alpha$: $\dfrac{d^2\theta}{dt^2} + \dfrac{c}{I}\theta = 0$, so $\omega^2 = \dfrac{c}{I}$.`,
          t`Period: $T = 2\pi\sqrt{\dfrac{I}{c}}$.`,
          t`A disc on a twisted wire: $I = \dfrac{1}{2}MR^2$; the largest torque is $c\,\theta_{max}$, with $\theta$ in radians.`,
        ],
      },
      {
        title: "A magnet vibrating in a field",
        points: [
          t`A magnet of moment $\mu$ at angle $\theta$ to a field $B$ feels torque $-\mu B\sin\theta$.`,
          t`For small $\theta$, that is $-\mu B\theta$: angular S.H.M. with $c = \mu B$.`,
          t`So $T = 2\pi\sqrt{\dfrac{I}{\mu B}}$.`,
          t`A bar magnet turning about its vertical side $h$ has $I = M\dfrac{l^2 + b^2}{12}$.`,
          t`Magnets joined by like poles add their moments; by unlike poles, they subtract.`,
        ],
      },
    ],
    worked: {
      prompt: t`A magnet of moment of inertia $4 \times 10^{-6}\ \mathrm{kg\,m^2}$ and magnetic moment $2\ \mathrm{A\,m^2}$ oscillates in a field of $2 \times 10^{-5}\ \mathrm{T}$. Find its period.`,
      steps: [
        t`$c = \mu B = 2 \times 2 \times 10^{-5} = 4 \times 10^{-5}\ \mathrm{N\,m/rad}$.`,
        t`$\dfrac{I}{\mu B} = \dfrac{4 \times 10^{-6}}{4 \times 10^{-5}} = 0.1\ \mathrm{s^2}$.`,
        t`$T = 2\pi\sqrt{0.1}$.`,
        t`$T \approx 1.99\ \mathrm{s}$.`,
      ],
      answer: t`$T \approx 1.99\ \mathrm{s}$`,
    },
    visualSpec: t`Nudge a compass needle in a field, then strengthen the field, and watch its swings speed up as $\mu B$ grows.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Turns $\dfrac{I}{\mu B}$ upside down.`,
      remediation: t`More inertia means slower swings: $T = 2\pi\sqrt{\dfrac{I}{\mu B}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Forgets the $2\pi$.`,
      remediation: t`$T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac{I}{\mu B}}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M3",
      mistake: "Gives oscillations per second instead of per minute.",
      remediation: t`Oscillations per minute $= \dfrac{60}{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Uses the vertical side in the moment of inertia.",
      remediation: t`Turning about the vertical side $h$, only $l$ and $b$ count: $I = M\dfrac{l^2 + b^2}{12}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Leaves out the 12 in the moment of inertia.",
      remediation: t`For a rectangular bar, $I = M\dfrac{l^2 + b^2}{12}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Drops the factor 4.",
      remediation: t`$T = \pi$ gives $\pi = 2\pi\sqrt{\dfrac{I}{\mu B}}$, so $\dfrac{I}{\mu B} = \dfrac{1}{4}$ and $B = \dfrac{4I}{\mu}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Swaps the like-pole and unlike-pole moments.",
      remediation: t`Like poles joined: the moments add, $\mu_1 + \mu_2$. Unlike poles: they subtract, $\mu_1 - \mu_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: t`Takes the period as proportional to $\dfrac{1}{\mu}$.`,
      remediation: t`$T \propto \dfrac{1}{\sqrt{\mu}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Uses one magnet's moment for the unlike-pole pair.",
      remediation: t`With unlike poles joined, the net moment is $\mu_1 - \mu_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: t`Turns $\dfrac{c}{I}$ upside down.`,
      remediation: t`$I\dfrac{d^2\theta}{dt^2} = -c\theta$ gives $\dfrac{d^2\theta}{dt^2} = -\dfrac{c}{I}\theta$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M11",
      mistake: "Gets the sign wrong.",
      remediation: t`The torque opposes the twist: $\dfrac{d^2\theta}{dt^2} = -\dfrac{c}{I}\theta$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M12",
      mistake: "Uses mass instead of moment of inertia.",
      remediation: t`For rotation, moment of inertia $I$ plays the part of mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Uses the angle in degrees.",
      remediation: t`$\tau = c\theta$ needs $\theta$ in radians: $60^\circ = \dfrac{\pi}{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: t`Uses $MR^2$ for a disc.`,
      remediation: t`A disc about its axis has $I = \dfrac{1}{2}MR^2$; $MR^2$ is for a ring.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Uses the diameter as the radius.",
      remediation: t`The disc is $20\ \mathrm{cm}$ across, so $R = 0.1\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.22" },
      stem: t`A magnet of moment of inertia $3 \times 10^{-6}\ \mathrm{kg\,m^2}$ and magnetic moment $3\ \mathrm{A\,m^2}$ vibrates in the plane of a uniform field of $1.6 \times 10^{-5}\ \mathrm{Wb/m^2}$. How many oscillations does it make per minute?`,
      verify: { kind: "value", inputs: { I: "3e-6", mu: "3", B: "1.6e-5" }, params: { ask: "per_min" } },
      options: [
        { key: "A", text: t`$2.39$`, correct: false, misconceptionId: "C10-M1", value: "2.39000000000000" },
        { key: "B", text: t`$240$`, correct: false, misconceptionId: "C10-M2", value: "240" },
        { key: "C", text: t`$0.637$`, correct: false, misconceptionId: "C10-M3", value: "0.637000000000000" },
        { key: "D", text: t`$38.2$`, correct: true, value: "38.2000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 2\pi\sqrt{\dfrac{I}{\mu B}} = 2\pi\sqrt{\dfrac{3 \times 10^{-6}}{4.8 \times 10^{-5}}} = 2\pi \times 0.25 \approx 1.571\ \mathrm{s}$.`,
          t`Oscillations per minute $= \dfrac{60}{1.571} \approx 38.2$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.12" },
      stem: t`A bar magnet of mass $120\ \mathrm{g}$ measures $l = 40\ \mathrm{mm}$, $b = 10\ \mathrm{mm}$ and $h = 80\ \mathrm{mm}$. With $h$ vertical, it oscillates in the plane of a magnetic field with period $\pi\ \mathrm{s}$. Its magnetic moment is $3.4\ \mathrm{A\,m^2}$. What is the field?`,
      verify: { kind: "value", inputs: { M_g: "120", l: "40", b: "10", h: "80", mu: "3.4", T: "pi" }, params: { ask: "B" } },
      options: [
        { key: "A", text: t`$2 \times 10^{-5}\ \mathrm{T}$`, correct: true, value: "2.00000000000000e-5" },
        { key: "B", text: t`$9.41 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M4", value: "9.41000000000000e-5" },
        { key: "C", text: t`$2.4 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M5", value: "0.000240000000000000" },
        { key: "D", text: t`$5 \times 10^{-6}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M6", value: "5.00000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$I = M\dfrac{l^2 + b^2}{12} = 0.12 \times \dfrac{(0.04)^2 + (0.01)^2}{12} = 1.7 \times 10^{-5}\ \mathrm{kg\,m^2}$.`,
          t`$\pi = 2\pi\sqrt{\dfrac{I}{\mu B}}$ gives $B = \dfrac{4I}{\mu} = \dfrac{4 \times 1.7 \times 10^{-5}}{3.4} = 2 \times 10^{-5}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.13" },
      stem: t`Two magnets of the same size and mass, with magnetic moments $100\ \mathrm{A\,m^2}$ and $50\ \mathrm{A\,m^2}$, are suspended together in the Earth's field. With like poles joined, their period of angular S.H.M. is $5\ \mathrm{s}$. What is it with unlike poles joined?`,
      verify: { kind: "value", inputs: { mu1: "100", mu2: "50", T_like: "5" }, params: { ask: "unlike" } },
      options: [
        { key: "A", text: t`$6.12\ \mathrm{s}$`, correct: false, misconceptionId: "C10-M9", value: "6.12000000000000" },
        { key: "B", text: t`$8.66\ \mathrm{s}$`, correct: true, value: "8.66000000000000" },
        { key: "C", text: t`$2.89\ \mathrm{s}$`, correct: false, misconceptionId: "C10-M7", value: "2.89000000000000" },
        { key: "D", text: t`$15\ \mathrm{s}$`, correct: false, misconceptionId: "C10-M8", value: "15" },
      ],
      solution: {
        steps: [
          t`$T \propto \dfrac{1}{\sqrt{\mu}}$: like poles give $\mu = 150$, unlike poles $\mu = 50$.`,
          t`$T_2 = 5\sqrt{\dfrac{150}{50}} = 5\sqrt{3} \approx 8.66\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.2(v)" },
      stem: t`Which is the differential equation of angular S.H.M. for a body of moment of inertia $I$ under a restoring torque $\tau = -c\theta$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "equation" } },
      options: [
        { key: "A", text: t`$\dfrac{d^2\theta}{dt^2} - \dfrac{c}{I}\theta = 0$`, correct: false, misconceptionId: "C10-M11", value: "minus_c_over_I" },
        { key: "B", text: t`$\dfrac{d^2\theta}{dt^2} + \dfrac{c}{m}\theta = 0$`, correct: false, misconceptionId: "C10-M12", value: "plus_c_over_m" },
        { key: "C", text: t`$\dfrac{d^2\theta}{dt^2} + \dfrac{c}{I}\theta = 0$`, correct: true, value: "plus_c_over_I" },
        { key: "D", text: t`$\dfrac{d^2\theta}{dt^2} + \dfrac{I}{c}\theta = 0$`, correct: false, misconceptionId: "C10-M10", value: "plus_I_over_c" },
      ],
      solution: {
        steps: [
          t`$\tau = I\dfrac{d^2\theta}{dt^2}$ and $\tau = -c\theta$.`,
          t`So $\dfrac{d^2\theta}{dt^2} + \dfrac{c}{I}\theta = 0$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.21" },
      stem: t`A thin disc $20\ \mathrm{cm}$ across, of mass $200\ \mathrm{g}$, hangs from a wire. Twisted through $60^\circ$ and released, it oscillates with a period of $1\ \mathrm{s}$. What is the largest restoring torque in the wire?`,
      verify: { kind: "value", inputs: { D_cm: "20", M_g: "200", deg: "60", T: "1" }, params: { ask: "torque" } },
      options: [
        { key: "A", text: t`$0.0413\ \mathrm{N\,m}$`, correct: true, value: "0.0413000000000000" },
        { key: "B", text: t`$2.37\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M13", value: "2.37000000000000" },
        { key: "C", text: t`$0.0827\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M14", value: "0.0827000000000000" },
        { key: "D", text: t`$0.165\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M15", value: "0.165000000000000" },
      ],
      solution: {
        steps: [
          t`$I = \dfrac{1}{2}MR^2 = \dfrac{1}{2} \times 0.2 \times 0.1^2 = 10^{-3}\ \mathrm{kg\,m^2}$, and $T = 2\pi\sqrt{\dfrac{I}{c}}$ gives $c = 4\pi^2I = 4\pi^2 \times 10^{-3}$.`,
          t`$\tau_{max} = c\,\theta_{max} = 4\pi^2 \times 10^{-3} \times \dfrac{\pi}{3} \approx 0.0413\ \mathrm{N\,m}$.`,
        ],
      },
    },
  ],
};
