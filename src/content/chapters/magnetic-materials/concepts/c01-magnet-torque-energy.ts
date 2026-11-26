import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A compass needle always swings back to point north. How much work does it take to hold it pointing the other way?`,
    reveal: t`The Earth's field twists the needle with a torque $mB\sin\theta$. Turning it from along the field to against it stores $2mB$ of energy, the most it can take.`,
  },
  explanation: {
    intuition: [
      t`A bar magnet has a **magnetic dipole moment** $\vec{m}$, pointing from its S pole to its N pole.`,
      t`In a uniform field the forces on its two poles are equal and opposite: no net force, but a twist.`,
      t`The torque turns $\vec{m}$ to line up with $\vec{B}$, the most stable position.`,
      t`Turning it away from the field takes work, which is stored as potential energy.`,
    ],
    formal: [
      {
        title: "Torque",
        points: [
          t`With $\vec{m}$ at angle $\theta$ to $\vec{B}$: $\tau = mB\sin\theta$, or $\vec{\tau}$ $= \vec{m} \times \vec{B}$.`,
          t`It is greatest, $mB$, at $90^\circ$, and zero at $0^\circ$ and $180^\circ$.`,
          t`A pole strength $q_m$ on poles $2l$ apart gives $m = q_m \times 2l$.`,
        ],
      },
      {
        title: "Potential energy and work",
        points: [
          t`$U = -mB\cos\theta$: least, $-mB$, along the field; greatest, $+mB$, against it.`,
          t`Work to turn from $\theta_1$ to $\theta_2$: $W$ $= mB\left(\cos\theta_1 - \cos\theta_2\right)$.`,
          t`From $0^\circ$ to $\theta$: $W = mB\left(1 - \cos\theta\right)$; to $180^\circ$, $2mB$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A magnet of moment $2\ \mathrm{A\,m^2}$ is in a field of $0.05\ \mathrm{T}$. Find the torque at $30^\circ$, and the work to turn it from $0^\circ$ to $60^\circ$.`,
      steps: [
        t`$\tau = mB\sin\theta$ $= 2 \times 0.05 \times 0.5$ $= 0.05\ \mathrm{N\,m}$.`,
        t`$W$ $= mB\left(1 - \cos 60^\circ\right)$ $= 0.1 \times 0.5$.`,
        t`$W = 0.05\ \mathrm{J}$.`,
      ],
      answer: t`$0.05\ \mathrm{N\,m}$; $0.05\ \mathrm{J}$`,
    },
    visualSpec: t`Twist a bar magnet in a uniform field and plot the torque and the energy against the angle.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Uses $\sin\theta$ for the work.`,
      remediation: t`The torque goes as $\sin\theta$, but the work is the change in $U = -mB\cos\theta$: $W = mB\left(1 - \cos\theta\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Uses $\cos\theta$ alone for the work.`,
      remediation: t`Work is a change of energy: $U(\theta) - U(0)$ $= mB\left(1 - \cos\theta\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Takes the work as proportional to the angle turned.",
      remediation: t`The torque changes as the magnet turns, so the work is $mB\left(1 - \cos\theta\right)$, not in proportion to $\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Leaves the field in gauss.",
      remediation: t`$1$ gauss $= 10^{-4}\ \mathrm{T}$: $700$ gauss $= 0.07\ \mathrm{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Uses $\cos\theta$ for the torque.`,
      remediation: t`The torque is zero along the field and greatest across it: $\tau = mB\sin\theta$.`,
      fallback: { kind: "ext", topic: "torque on a current loop (Magnetic Fields due to Electric Current, Ch.10)" },
    },
    {
      id: "C01-M6",
      mistake: t`Forgets the $\sin\theta$.`,
      remediation: t`Only at $90^\circ$ is $\tau = mB$; at $30^\circ$, $\tau = mB\sin 30^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Stops at $90^\circ$.`,
      remediation: t`The most unstable position is against the field, $180^\circ$: $W$ $= mB\left(1 - \cos 180^\circ\right)$ $= 2mB$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks the stable and unstable positions have equal energy.",
      remediation: t`$U = -mB$ along the field and $+mB$ against it: they differ by $2mB$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Gets the sign of the work wrong.",
      remediation: "Turning the magnet against the field raises its energy, so the work done on it is positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Forgets that the field acts on both poles.",
      remediation: t`The vertical field pushes both poles, a couple $q_mB_V \times 2l$; the weight gives $Mgl$: $B_V = \dfrac{Mg}{2q_m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Leaves the mass in grams.",
      remediation: t`$0.1\ \mathrm{g}$ $= 10^{-4}\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Multiplies by 2 instead of dividing.",
      remediation: t`From $Mgl = q_mB_V \times 2l$: $B_V = \dfrac{Mg}{2q_m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: t`Puts the greatest torque at $180^\circ$.`,
      remediation: t`At $180^\circ$ the magnet is unstable but the torque is zero: $\sin 180^\circ = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: t`Puts the greatest torque at $45^\circ$.`,
      remediation: t`$\sin\theta$ is greatest at $90^\circ$, so the torque is too.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.5" },
      stem: t`The work done in turning a magnet through $90^\circ$ from the magnetic meridian is $n$ times the work done in turning it through $60^\circ$ from the meridian. What is $n$?`,
      verify: { kind: "value", inputs: { a1: "90", a2: "60" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$1.15$`, correct: false, misconceptionId: "C01-M1", value: "1.15000000000000" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C01-M2", value: "0" },
        { key: "D", text: t`$1.5$`, correct: false, misconceptionId: "C01-M3", value: "1.50000000000000" },
      ],
      solution: {
        steps: [
          t`From the meridian, $W = mB\left(1 - \cos\theta\right)$.`,
          t`$W_{90} = mB$ and $W_{60} = \dfrac{mB}{2}$, so $n = 2$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.9" },
      stem: t`A short bar magnet in a field of $700$ gauss feels a torque of $0.014\ \mathrm{N\,m}$ when its axis is at $30^\circ$ to the field. What is its magnetic moment? ($1$ gauss $= 10^{-4}\ \mathrm{T}$.)`,
      verify: { kind: "value", inputs: { tau: "0.014", deg: "30", G: "700" }, params: { ask: "moment" } },
      options: [
        { key: "A", text: t`$0.4\ \mathrm{A\,m^2}$`, correct: true, value: "0.400000000000000" },
        { key: "B", text: t`$4 \times 10^{-5}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C01-M4", value: "4.00000000000000e-5" },
        { key: "C", text: t`$0.231\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C01-M5", value: "0.231000000000000" },
        { key: "D", text: t`$0.2\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C01-M6", value: "0.200000000000000" },
      ],
      solution: {
        steps: [
          t`$B = 700 \times 10^{-4}$ $= 0.07\ \mathrm{T}$.`,
          t`$m = \dfrac{\tau}{B\sin\theta}$ $= \dfrac{0.014}{0.07 \times 0.5}$ $= 0.4\ \mathrm{A\,m^2}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.9" },
      stem: t`A magnet of moment $0.4\ \mathrm{A\,m^2}$ sits in a field of $700$ gauss. How much work is needed to turn it from its most stable position to its most unstable one?`,
      verify: { kind: "value", inputs: { m: "0.4", G: "700" }, params: { ask: "flip" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C01-M8", value: "0" },
        { key: "B", text: t`$-0.056\ \mathrm{J}$`, correct: false, misconceptionId: "C01-M9", value: "-0.0560000000000000" },
        { key: "C", text: t`$0.056\ \mathrm{J}$`, correct: true, value: "0.0560000000000000" },
        { key: "D", text: t`$0.028\ \mathrm{J}$`, correct: false, misconceptionId: "C01-M7", value: "0.0280000000000000" },
      ],
      solution: {
        steps: [
          t`Most stable: $\theta = 0^\circ$, $U = -mB$. Most unstable: $180^\circ$, $U = +mB$.`,
          t`$W = 2mB$ $= 2 \times 0.4 \times 0.07$ $= 0.056\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.10" },
      stem: t`A magnetic needle of pole strength $20\ \mathrm{A\,m}$ pivots freely in the magnetic meridian. A $0.1\ \mathrm{g}$ weight on one end keeps it horizontal. What is the vertical component of the Earth's field? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { M_g: "0.1", qm: "20", g: "9.8" }, params: { ask: "needle" } },
      options: [
        { key: "A", text: t`$2.45 \times 10^{-5}\ \mathrm{T}$`, correct: true, value: "2.45000000000000e-5" },
        { key: "B", text: t`$4.9 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C01-M10", value: "4.90000000000000e-5" },
        { key: "C", text: t`$0.0245\ \mathrm{T}$`, correct: false, misconceptionId: "C01-M11", value: "0.0245000000000000" },
        { key: "D", text: t`$9.8 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C01-M12", value: "9.80000000000000e-5" },
      ],
      solution: {
        steps: [
          t`Torque of the weight: $Mgl$. Couple of the vertical field on both poles: $q_mB_V \times 2l$.`,
          t`$B_V = \dfrac{Mg}{2q_m}$ $= \dfrac{10^{-4} \times 9.8}{40}$ $= 2.45 \times 10^{-5}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`At what angle between its axis and a uniform field does a bar magnet feel the greatest torque?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "max" } },
      options: [
        { key: "A", text: t`$90^\circ$`, correct: true, value: "ninety" },
        { key: "B", text: t`$0^\circ$`, correct: false, misconceptionId: "C01-M5", value: "zero" },
        { key: "C", text: t`$180^\circ$`, correct: false, misconceptionId: "C01-M13", value: "one_eighty" },
        { key: "D", text: t`$45^\circ$`, correct: false, misconceptionId: "C01-M14", value: "forty_five" },
      ],
      solution: {
        steps: [
          t`$\tau = mB\sin\theta$.`,
          t`$\sin\theta$ is greatest at $90^\circ$, so the torque is greatest there.`,
        ],
      },
    },
  ],
};
