import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`On a still day rain falls straight down. Yet when you run through it, the drops hit your face and you tilt your umbrella forward. Has the rain changed direction?`,
    reveal: t`Not for someone standing still. **Relative to you**, though, the rain also moves backwards at your running speed, so it comes at you slantwise. Velocity depends on who is watching.`,
  },
  explanation: {
    intuition: [
      t`A velocity is always measured by some observer, usually one standing on the Earth.`,
      t`An observer who is moving sees other bodies move differently.`,
      t`The **relative velocity** of A with respect to B is A's velocity as seen from B.`,
      t`It is A's velocity minus B's velocity: $\vec{v}_{AB}$ $= \vec{v}_A - \vec{v}_B$.`,
      t`Subtract as vectors: in a plane, component by component.`,
    ],
    formal: [
      {
        title: "Relative velocity along a line",
        points: [
          t`Let A and B move along one line with velocities $v_A$ and $v_B$, signed by direction.`,
          t`The velocity of A relative to B is $v_{AB} = v_A - v_B$.`,
          t`Moving the same way, the speeds subtract; moving opposite ways, they add.`,
          t`The velocity of B relative to A is $v_{BA} = v_B - v_A = -v_{AB}$.`,
        ],
      },
      {
        title: "Relative velocity in a plane",
        points: [
          t`In a plane, $\vec{v}_{AB}$ $= \vec{v}_A - \vec{v}_B$ $= \vec{v}_A + \left(-\vec{v}_B\right)$, a vector difference.`,
          t`Subtract the $x$ components and the $y$ components separately.`,
          t`The size is $\sqrt{v_x^2 + v_y^2}$ and the angle with the $x$-axis has $\tan\theta = \dfrac{v_y}{v_x}$.`,
          t`Velocities relative to moving bodies chain: $\vec{v}_{AC}$ $= \vec{v}_{AB} + \vec{v}_{BC}$.`,
        ],
      },
      {
        title: "Rain on a moving person",
        points: [
          t`Rain falls vertically at $v_r$; a person moves horizontally at $v_p$.`,
          t`Relative to the person, the rain's velocity is $\vec{v}_r - \vec{v}_p$: it gains a horizontal part $v_p$, backwards.`,
          t`Its speed relative to the person is $\sqrt{v_r^2 + v_p^2}$.`,
          t`The person tilts the umbrella forward by $\theta$ from the vertical, with $\tan\theta = \dfrac{v_p}{v_r}$.`,
        ],
      },
      {
        title: "Crossing a river",
        points: [
          t`A boat moves at $v_b$ relative to the water, pointed straight across a river of width $d$ flowing at $u$.`,
          t`Relative to the bank, its velocity is $\vec{v}_b + \vec{u}$, of size $\sqrt{v_b^2 + u^2}$.`,
          t`Only $v_b$ carries it across, so the time to cross is $t = \dfrac{d}{v_b}$, whatever the current.`,
          t`Meanwhile the current carries it downstream by a **drift** $ut$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A swimmer swims at $2\ \mathrm{m/s}$ relative to the water, heading straight across a river $60\ \mathrm{m}$ wide that flows at $1.5\ \mathrm{m/s}$. Find the time to cross, how far downstream the swimmer lands, and the swimmer's speed relative to the bank.`,
      steps: [
        t`Only the swimmer's own $2\ \mathrm{m/s}$ is across the river: $t = \dfrac{60}{2} = 30\ \mathrm{s}$.`,
        t`Drift downstream $= 1.5 \times 30 = 45\ \mathrm{m}$.`,
        t`Speed relative to the bank $= \sqrt{2^2 + 1.5^2}$ $= \sqrt{6.25} = 2.5\ \mathrm{m/s}$.`,
      ],
      answer: t`$30\ \mathrm{s}$; $45\ \mathrm{m}$ downstream; $2.5\ \mathrm{m/s}$`,
    },
    visualSpec: t`Drag a boat's heading and the river's speed, and watch the boat's velocity relative to the bank form as the sum of two arrows, with its crossing time shown.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Writes $\vec{v}_B - \vec{v}_A$ for the velocity of A relative to B.`,
      remediation: t`The velocity of A relative to B is $\vec{v}_A - \vec{v}_B$: the body watched comes first, the watcher's velocity is subtracted.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Adds velocities where they should be subtracted, or the reverse.",
      remediation: t`Relative to B, subtract B's velocity: $\vec{v}_{AB}$ $= \vec{v}_A - \vec{v}_B$. A velocity relative to a moving body adds to that body's velocity: $\vec{v}_A$ $= \vec{v}_{AB} + \vec{v}_B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Subtracts the speeds, ignoring the directions.",
      remediation: "Velocities are vectors: give each its sign or components first, then subtract them as vectors.",
      fallback: { kind: "ext", topic: "vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C04-M4",
      mistake: "Adds the speeds of velocities that point in different directions.",
      remediation: t`Velocities at right angles combine by Pythagoras, $\sqrt{v_1^2 + v_2^2}$, not by adding their sizes.`,
      fallback: { kind: "ext", topic: "vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C04-M5",
      mistake: "Takes a velocity measured from a moving body as the velocity relative to the ground.",
      remediation: "Say who is watching: relative to the ground, add the moving body's own velocity; relative to a mover, subtract it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Writes the tangent of the angle upside down.",
      remediation: t`For the angle north of east, $\tan\theta$ $= \dfrac{\text{north part}}{\text{east part}}$ $= \dfrac{300}{100}$.`,
      fallback: { kind: "ext", topic: "vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C04-M7",
      mistake: "Uses the boat's speed relative to the bank for the crossing time.",
      remediation: t`Only the part of the velocity across the river carries the boat across: $t = \dfrac{d}{v_b}$. The current only carries it downstream.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks the current slows the boat's crossing.",
      remediation: t`The current flows along the river, at right angles to the crossing: it does not change the speed across, so $t = \dfrac{d}{v_b}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.3" },
      stem: t`Aeroplane A flies along a straight line at $300\ \mathrm{km/h}$ relative to the Earth. Aeroplane B flies in the opposite direction at $350\ \mathrm{km/h}$ relative to the Earth. Taking A's direction as positive, what is the velocity of A relative to B?`,
      verify: { kind: "value", inputs: { vA: "300", vB: "-350" }, params: { ask: "line" } },
      options: [
        { key: "A", text: t`$-50\ \mathrm{km/h}$`, correct: false, misconceptionId: "C04-M2", value: "-50" },
        { key: "B", text: t`$50\ \mathrm{km/h}$`, correct: false, misconceptionId: "C04-M3", value: "50" },
        { key: "C", text: t`$650\ \mathrm{km/h}$`, correct: true, value: "650" },
        { key: "D", text: t`$-650\ \mathrm{km/h}$`, correct: false, misconceptionId: "C04-M1", value: "-650" },
      ],
      solution: {
        steps: [
          t`$v_A = +300\ \mathrm{km/h}$ and $v_B = -350\ \mathrm{km/h}$.`,
          t`$v_{AB} = v_A - v_B$ $= 300 - \left(-350\right)$ $= 650\ \mathrm{km/h}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.6" },
      stem: t`An aeroplane flies due north at $300\ \mathrm{km/h}$ relative to the Earth while the wind blows from east to west at $100\ \mathrm{km/h}$. What is the velocity of the aeroplane relative to the wind?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "wind" } },
      options: [
        { key: "A", text: t`About $316\ \mathrm{km/h}$, at $71.6^\circ$ north of west`, correct: false, misconceptionId: "C04-M2", value: "w316_nw" },
        { key: "B", text: t`$200\ \mathrm{km/h}$, due north`, correct: false, misconceptionId: "C04-M3", value: "w200_n" },
        { key: "C", text: t`About $316\ \mathrm{km/h}$, at $18.4^\circ$ north of east`, correct: false, misconceptionId: "C04-M6", value: "w316_18" },
        { key: "D", text: t`About $316\ \mathrm{km/h}$, at $71.6^\circ$ north of east`, correct: true, value: "w316_ne" },
      ],
      solution: {
        steps: [
          t`Take east as $\hat{i}$, north as $\hat{j}$: $\vec{v}_{AE} = 300\hat{j}$ and $\vec{v}_{WE} = -100\hat{i}$.`,
          t`$\vec{v}_{AW}$ $= \vec{v}_{AE} - \vec{v}_{WE}$ $= 100\hat{i} + 300\hat{j}$, of size $100\sqrt{10} \approx 316\ \mathrm{km/h}$.`,
          t`$\tan\theta = \dfrac{300}{100} = 3$, so $\theta \approx 71.6^\circ$ north of east.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.3 (viii)" },
      stem: t`A train moves east at $10\ \mathrm{m/s}$. A waiter walks east along the train at $1.2\ \mathrm{m/s}$ relative to the train, and a fly flies north across the waiter's tray at $2\ \mathrm{m/s}$ relative to the waiter. What is the speed of the fly relative to the Earth?`,
      verify: { kind: "value", inputs: { vt: "10", vw: "1.2", vf: "2" }, params: { ask: "chain" } },
      options: [
        { key: "A", text: t`$13.2\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M4", value: "13.2000000000000" },
        { key: "B", text: t`$2.33\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M5", value: "2.33000000000000" },
        { key: "C", text: t`$11.4\ \mathrm{m/s}$`, correct: true, value: "11.4000000000000" },
        { key: "D", text: t`$9.02\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M2", value: "9.02000000000000" },
      ],
      solution: {
        steps: [
          t`$\vec{v}_{\text{fly}}$ $= \vec{v}_{\text{fly, waiter}} + \vec{v}_{\text{waiter, train}} + \vec{v}_{\text{train}}$ $= 11.2\hat{i} + 2\hat{j}$.`,
          t`Speed $= \sqrt{11.2^2 + 2^2}$ $\approx 11.4\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Rain falls vertically at $12\ \mathrm{m/s}$. A cyclist rides along a level road at $5\ \mathrm{m/s}$. At what speed does the rain hit the cyclist, as the cyclist sees it?`,
      verify: { kind: "value", inputs: { vr: "12", vp: "5" }, params: { ask: "rain" } },
      options: [
        { key: "A", text: t`$7\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M3", value: "7" },
        { key: "B", text: t`$17\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M4", value: "17" },
        { key: "C", text: t`$12\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M5", value: "12" },
        { key: "D", text: t`$13\ \mathrm{m/s}$`, correct: true, value: "13" },
      ],
      solution: {
        steps: [
          t`Relative to the cyclist, the rain moves down at $12\ \mathrm{m/s}$ and backwards at $5\ \mathrm{m/s}$.`,
          t`Speed $= \sqrt{12^2 + 5^2}$ $= 13\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`A boat that moves at $5\ \mathrm{m/s}$ relative to the water is pointed straight across a river $200\ \mathrm{m}$ wide. The river flows at $2\ \mathrm{m/s}$. How long does the boat take to cross?`,
      verify: { kind: "value", inputs: { d: "200", vb: "5", u: "2" }, params: { ask: "river" } },
      options: [
        { key: "A", text: t`$66.7\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M8", value: "66.7000000000000" },
        { key: "B", text: t`$40\ \mathrm{s}$`, correct: true, value: "40" },
        { key: "C", text: t`$28.6\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M4", value: "28.6000000000000" },
        { key: "D", text: t`$37.1\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M7", value: "37.1000000000000" },
      ],
      solution: {
        steps: [
          t`The current is along the river, so it does not help or hinder the crossing.`,
          t`$t = \dfrac{d}{v_b}$ $= \dfrac{200}{5}$ $= 40\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.1 (v)" },
      stem: t`Three particles A, B and C have velocities $\vec{v}_A$, $\vec{v}_B$ and $\vec{v}_C$ relative to the ground. Which gives the velocity of A relative to B?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\vec{v}_A - \vec{v}_B$`, correct: true, value: "vA_minus_vB" },
        { key: "B", text: t`$\vec{v}_B - \vec{v}_A$`, correct: false, misconceptionId: "C04-M1", value: "vB_minus_vA" },
        { key: "C", text: t`$\vec{v}_A + \vec{v}_B$`, correct: false, misconceptionId: "C04-M2", value: "vA_plus_vB" },
        { key: "D", text: t`$v_A - v_B$, the difference of the speeds, along $\vec{v}_A$`, correct: false, misconceptionId: "C04-M3", value: "speed_diff" },
      ],
      solution: {
        steps: [
          t`Seen from B, everything seems to move with B's velocity taken away.`,
          t`So A's velocity relative to B is $\vec{v}_{AB}$ $= \vec{v}_A - \vec{v}_B$, a vector difference, not a difference of speeds.`,
        ],
      },
    },
  ],
};
