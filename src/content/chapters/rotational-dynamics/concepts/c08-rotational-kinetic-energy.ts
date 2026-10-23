import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`A potter's wheel keeps turning long after the potter stops kicking it. Where is the energy stored?`,
    reveal: t`In its rotation. Every particle moves at $v = r\omega$, and together they carry a kinetic energy of $\dfrac{1}{2}I\omega^2$.`,
  },
  explanation: {
    intuition: [
      t`Every particle of a turning body moves, so each has kinetic energy $\dfrac{1}{2}mv^2$.`,
      t`A particle at distance $r$ from the axis moves at $v = r\omega$, with the same $\omega$ for all.`,
      t`Adding them up gives K.E. $= \dfrac{1}{2}\left(\sum mr^2\right)\omega^2 = \dfrac{1}{2}I\omega^2$.`,
      t`So $I$ plays the part of mass, and $\omega$ the part of speed.`,
      t`A **flywheel**, a heavy wheel spinning fast, stores energy this way.`,
    ],
    formal: [
      {
        title: "Kinetic energy of rotation",
        points: [
          t`A particle of mass $m_i$ at distance $r_i$ from the axis moves at $r_i\omega$.`,
          t`Its K.E. is $\dfrac{1}{2}m_i r_i^2\omega^2$.`,
          t`Over the whole body: K.E. $= \dfrac{1}{2}\omega^2\sum m_i r_i^2 = \dfrac{1}{2}I\omega^2$.`,
          t`With $I = MK^2$, this is also $\dfrac{1}{2}MK^2\omega^2$.`,
          t`Like every energy, it is measured in joules.`,
        ],
      },
      {
        title: "Using it",
        points: [
          t`Convert rpm to rad/s first: $\omega = 2\pi \times \dfrac{\text{rpm}}{60}$.`,
          t`K.E. grows as $\omega^2$: double the spin and the energy becomes four times as much.`,
          t`Work done to speed a wheel up: $W = \dfrac{1}{2}I\left(\omega_2^2 - \omega_1^2\right)$.`,
          t`$\omega_2^2 - \omega_1^2$ is not the same as $(\omega_2 - \omega_1)^2$.`,
          t`Translation and rotation match: $m$ with $I$, $v$ with $\omega$, $\dfrac{1}{2}mv^2$ with $\dfrac{1}{2}I\omega^2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A flywheel with moment of inertia $0.8\ \mathrm{kg\,m^2}$ turns at $600\ \mathrm{rpm}$. What is its rotational kinetic energy?`,
      steps: [
        t`$\omega = 2\pi \times \dfrac{600}{60} = 20\pi\ \mathrm{rad/s}$.`,
        t`K.E. $= \dfrac{1}{2}I\omega^2$.`,
        t`K.E. $= \dfrac{1}{2} \times 0.8 \times (20\pi)^2$ $= 160\pi^2$.`,
        t`K.E. $\approx 1580\ \mathrm{J}$.`,
      ],
      answer: t`K.E. $\approx 1580\ \mathrm{J}$`,
    },
    visualSpec: t`Spin a flywheel with a slider and watch a bar for $\dfrac{1}{2}I\omega^2$ grow four times as fast as $\omega$ doubles.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Drops the $\dfrac{1}{2}$, taking the K.E. as $I\omega^2$.`,
      remediation: t`Rotational K.E. is $\dfrac{1}{2}I\omega^2$, just as translational K.E. is $\dfrac{1}{2}mv^2$.`,
      fallback: { kind: "ext", topic: "kinetic energy (Std XI Physics)" },
    },
    {
      id: "C08-M2",
      mistake: t`Doesn't square $\omega$.`,
      remediation: t`Each particle's K.E. is $\dfrac{1}{2}m(r\omega)^2$, so $\omega$ is squared: K.E. $= \dfrac{1}{2}I\omega^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Forgets the square root, reporting $v^2$ as the speed.`,
      remediation: t`$\dfrac{1}{2}mv^2 = E$ gives $v^2 = \dfrac{2E}{m}$; take the square root for $v$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Squares the change in $\omega$ instead of taking the change in $\omega^2$.`,
      remediation: t`The energy change is $\dfrac{1}{2}I\omega_2^2 - \dfrac{1}{2}I\omega_1^2 = \dfrac{1}{2}I\left(\omega_2^2 - \omega_1^2\right)$. Square each speed first, then subtract.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Reads rpm as revolutions per second.",
      remediation: t`rpm counts revolutions per minute: divide by 60 before multiplying by $2\pi$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M6",
      mistake: t`Forgets the $2\pi$, using the frequency as $\omega$.`,
      remediation: t`$\omega = 2\pi n$: one revolution is $2\pi$ radians.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M7",
      mistake: t`Uses $MR^2$ for every body.`,
      remediation: t`Only a ring has $I = MR^2$. A solid sphere about a diameter has $I = \dfrac{2}{5}MR^2$; use the body's own formula.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.2(vii)" },
      stem: t`A body with moment of inertia $5\ \mathrm{kg\,m^2}$ rotates at $6\ \mathrm{rad/s}$. A $20\ \mathrm{kg}$ mass has the same kinetic energy. How fast is the mass moving?`,
      verify: { kind: "value", inputs: { I: "5", w: "6", m: "20" }, params: { ask: "v_same" } },
      options: [
        { key: "A", text: t`$3\ \mathrm{m/s}$`, correct: true, value: "3" },
        { key: "B", text: t`$4.24\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M1", value: "4.24000000000000" },
        { key: "C", text: t`$1.22\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M2", value: "1.22000000000000" },
        { key: "D", text: t`$9\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M3", value: "9" },
      ],
      solution: {
        steps: [
          t`Rotational K.E. $= \dfrac{1}{2}I\omega^2 = \dfrac{1}{2} \times 5 \times 36 = 90\ \mathrm{J}$.`,
          t`$\dfrac{1}{2} \times 20 \times v^2 = 90$, so $v^2 = 9$.`,
          t`$v = 3\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.13" },
      stem: t`An energy of $1000\ \mathrm{J}$ is spent to raise the angular speed of a wheel from $20\ \mathrm{rad/s}$ to $30\ \mathrm{rad/s}$. What is the wheel's moment of inertia?`,
      verify: { kind: "value", inputs: { E: "1000", w1: "20", w2: "30" }, params: { ask: "I_from_E" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C08-M1", value: "2" },
        { key: "B", text: t`$200\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C08-M2", value: "200" },
        { key: "C", text: t`$20\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C08-M4", value: "20" },
        { key: "D", text: t`$4\ \mathrm{kg\,m^2}$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`Energy spent $= \dfrac{1}{2}I\left(\omega_2^2 - \omega_1^2\right)$.`,
          t`$1000 = \dfrac{1}{2}I(900 - 400) = 250I$.`,
          t`$I = 4\ \mathrm{kg\,m^2}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.19" },
      stem: t`A flywheel is a uniform disc of mass $50\ \mathrm{kg}$ and radius $0.4\ \mathrm{m}$, turning about its central axis at $300\ \mathrm{rpm}$. What is its kinetic energy?`,
      verify: { kind: "value", inputs: { M: "50", R: "0.4", rpm: "300" }, params: { ask: "disc_ke" } },
      options: [
        { key: "A", text: t`$3950\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M1", value: "3950" },
        { key: "B", text: t`$62.8\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M2", value: "62.8000000000000" },
        { key: "C", text: t`$7.11 \times 10^{6}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M5", value: "7110000" },
        { key: "D", text: t`$1970\ \mathrm{J}$`, correct: true, value: "1970" },
      ],
      solution: {
        steps: [
          t`Disc: $I = \dfrac{1}{2}MR^2 = \dfrac{1}{2} \times 50 \times 0.16 = 4\ \mathrm{kg\,m^2}$.`,
          t`$\omega = 2\pi \times \dfrac{300}{60} = 10\pi\ \mathrm{rad/s}$.`,
          t`K.E. $= \dfrac{1}{2} \times 4 \times (10\pi)^2$ $\approx 1970\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A wheel with moment of inertia $2\ \mathrm{kg\,m^2}$ is turning at $120\ \mathrm{rpm}$ when the brakes bring it to rest. How much kinetic energy does it lose?`,
      verify: { kind: "value", inputs: { I: "2", rpm: "120" }, params: { ask: "stop_ke" } },
      options: [
        { key: "A", text: t`$5.68 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M5", value: "568000" },
        { key: "B", text: t`$4\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M6", value: "4" },
        { key: "C", text: t`$158\ \mathrm{J}$`, correct: true, value: "158" },
        { key: "D", text: t`$316\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M1", value: "316" },
      ],
      solution: {
        steps: [
          t`$\omega = 2\pi \times \dfrac{120}{60} = 4\pi\ \mathrm{rad/s}$.`,
          t`K.E. lost $= \dfrac{1}{2}I\omega^2 = \dfrac{1}{2} \times 2 \times (4\pi)^2$ $\approx 158\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`A solid sphere of mass $2\ \mathrm{kg}$ and radius $0.1\ \mathrm{m}$ spins about a diameter at $50\ \mathrm{rad/s}$. What is its rotational kinetic energy?`,
      verify: { kind: "value", inputs: { M: "2", R: "0.1", w: "50" }, params: { ask: "sphere_ke" } },
      options: [
        { key: "A", text: t`$25\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M7", value: "25" },
        { key: "B", text: t`$10\ \mathrm{J}$`, correct: true, value: "10" },
        { key: "C", text: t`$20\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M1", value: "20" },
        { key: "D", text: t`$0.2\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M2", value: "0.200000000000000" },
      ],
      solution: {
        steps: [
          t`Solid sphere: $I = \dfrac{2}{5}MR^2 = \dfrac{2}{5} \times 2 \times 0.01$ $= 0.008\ \mathrm{kg\,m^2}$.`,
          t`K.E. $= \dfrac{1}{2} \times 0.008 \times 50^2 = 10\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
