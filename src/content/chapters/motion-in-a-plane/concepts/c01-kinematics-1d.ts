import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`You jog $1\ \mathrm{km}$ out along a road and back to where you started, in $10$ minutes. Your watch says your average speed was $12\ \mathrm{km/h}$. A physicist says your average velocity was zero. Who is right?`,
    reveal: t`Both. Speed uses the path you covered; velocity uses your **displacement**, the change in position, which is zero for a round trip. Telling the two apart is the first step in describing motion.`,
  },
  explanation: {
    intuition: [
      t`**Distance** is the length of the path; **displacement** is the straight-line change in position, with a direction.`,
      t`Average speed $= \dfrac{\text{distance}}{\text{time}}$; average velocity $= \dfrac{\text{displacement}}{\text{time}}$.`,
      t`**Acceleration** is the rate of change of velocity.`,
      t`With constant acceleration three simple equations link $u$, $v$, $a$, $s$ and $t$.`,
      t`A body in **free fall** moves with constant acceleration $g$, downwards.`,
    ],
    formal: [
      {
        title: "Velocity and acceleration",
        points: [
          t`Average velocity $\bar{v}$ $= \dfrac{\Delta x}{\Delta t}$; instantaneous velocity $v = \dfrac{dx}{dt}$.`,
          t`Average acceleration $\bar{a}$ $= \dfrac{\Delta v}{\Delta t}$; instantaneous acceleration $a = \dfrac{dv}{dt}$.`,
          t`Average speed over a trip is total distance over total time, not the mean of the speeds.`,
        ],
      },
      {
        title: "Equations for constant acceleration",
        points: [
          t`$v = u + at$.`,
          t`$s = ut + \dfrac{1}{2}at^2$.`,
          t`$v^2 = u^2 + 2as$.`,
          t`Work in SI units: $1\ \mathrm{km/h}$ $= \dfrac{5}{18}\ \mathrm{m/s}$.`,
        ],
      },
      {
        title: "Free fall",
        points: [
          t`A body moving only under gravity has $a = g \approx 9.8\ \mathrm{m/s^2}$, downwards.`,
          t`Take up as positive: $a = -g$ for a body thrown upwards, which slows, stops and falls back.`,
          t`Two bodies falling together have the same acceleration, so their relative velocity stays constant.`,
        ],
      },
    ],
    worked: {
      prompt: t`A train starts from rest and reaches $72\ \mathrm{km/h}$ in $40\ \mathrm{s}$ with constant acceleration. Find its acceleration and the distance it covers.`,
      steps: [
        t`$v = 72 \times \dfrac{5}{18}$ $= 20\ \mathrm{m/s}$.`,
        t`$a = \dfrac{v - u}{t}$ $= \dfrac{20}{40}$ $= 0.5\ \mathrm{m/s^2}$.`,
        t`$s = \dfrac{1}{2}at^2$ $= \dfrac{1}{2} \times 0.5 \times 40^2$ $= 400\ \mathrm{m}$.`,
      ],
      answer: t`$0.5\ \mathrm{m/s^2}$; $400\ \mathrm{m}$`,
    },
    visualSpec: t`Set an initial velocity and an acceleration and watch position and velocity change step by step along a line.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Uses the path length instead of the displacement.",
      remediation: t`Average velocity uses displacement: from P to R is $0.5\ \mathrm{km}$, not the $1.5\ \mathrm{km}$ walked.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Takes the whole of PQ as the displacement.",
      remediation: "R is midway, so the displacement from P to R is half of PQ.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Uses only the first leg's time.",
      remediation: t`The trip P to R takes $10 + 4 = 14$ minutes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Gives the distance the ball fell.",
      remediation: t`The meeting height is measured from the ground: $30 - 20 = 10\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks they meet when the stone reaches its highest point.",
      remediation: t`Relative to each other they close at $15\ \mathrm{m/s}$, so they meet at $t = \dfrac{30}{15} = 2\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Assumes they meet halfway.",
      remediation: t`The stone slows and the ball speeds up: work out each one's position at $t = 2\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Gives the average speed instead of the final speed.",
      remediation: t`Starting from rest with constant acceleration, the final speed is twice the average: $2 \times \dfrac{500}{30}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: t`Forgets the $\dfrac{1}{2}$ in $s = \dfrac{1}{2}at^2$.`,
      remediation: t`From rest, $s = \dfrac{1}{2}at^2$, so $a = \dfrac{2s}{t^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Gives the speed in km/h as if it were m/s.",
      remediation: t`$33.3\ \mathrm{m/s}$ is $120\ \mathrm{km/h}$; keep the units straight.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Leaves the speed in km/h.",
      remediation: t`$120\ \mathrm{km/h}$ $= 120 \times \dfrac{5}{18}$ $= 33.3\ \mathrm{m/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: t`Forgets the $2$ in $v^2 = u^2 + 2as$.`,
      remediation: t`$0 = u^2 - 2as$, so $a = \dfrac{u^2}{2s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: t`Divides $u$ by $s$.`,
      remediation: t`Acceleration is change of velocity per unit *time*; use $v^2 = u^2 + 2as$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Averages the three speeds.",
      remediation: "The legs last different times: divide total distance by total time.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Leaves the time in minutes.",
      remediation: t`$90$ minutes is $1.5\ \mathrm{h}$: $\dfrac{85\ \mathrm{km}}{1.5\ \mathrm{h}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Gives the total distance instead of the speed.",
      remediation: t`Divide the $85\ \mathrm{km}$ by the $1.5\ \mathrm{h}$ taken.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.1" },
      stem: t`A person walks from P to Q along a straight road in $10$ minutes, then turns back to R, midway between P and Q, in a further $4$ minutes. PQ is $1\ \mathrm{km}$. What is the size of the average velocity from P to R?`,
      verify: { kind: "value", inputs: { d: "1", t1: "10", t2: "4" }, params: { ask: "avgvel" } },
      options: [
        { key: "A", text: t`$2.14\ \mathrm{km/h}$`, correct: true, value: "2.14000000000000" },
        { key: "B", text: t`$6.43\ \mathrm{km/h}$`, correct: false, misconceptionId: "C01-M1", value: "6.43000000000000" },
        { key: "C", text: t`$4.29\ \mathrm{km/h}$`, correct: false, misconceptionId: "C01-M2", value: "4.29000000000000" },
        { key: "D", text: t`$3\ \mathrm{km/h}$`, correct: false, misconceptionId: "C01-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`Displacement P to R $= 0.5\ \mathrm{km}$; time $= 14\ \mathrm{min}$ $= \dfrac{14}{60}\ \mathrm{h}$.`,
          t`$\bar{v} = \dfrac{0.5}{14/60}$ $\approx 2.14\ \mathrm{km/h}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Solved Ex.3.2" },
      stem: t`A stone is thrown straight up from the ground at $15\ \mathrm{m/s}$. At the same instant a ball is dropped from $30\ \mathrm{m}$ directly above it. At what height do they meet? (Take $g = 10\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { u: "15", H: "30", g: "10" }, params: { ask: "meet" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{m}$`, correct: true, value: "10" },
        { key: "B", text: t`$20\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M4", value: "20" },
        { key: "C", text: t`$18.8\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M5", value: "18.8000000000000" },
        { key: "D", text: t`$15\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M6", value: "15" },
      ],
      solution: {
        steps: [
          t`Both have acceleration $g$, so they close at $15\ \mathrm{m/s}$: they meet at $t = \dfrac{30}{15} = 2\ \mathrm{s}$.`,
          t`The ball has fallen $\dfrac{1}{2} \times 10 \times 2^2$ $= 20\ \mathrm{m}$, so they meet at $30 - 20 = 10\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.3 (i)" },
      stem: t`An aeroplane starts from rest and covers its $500\ \mathrm{m}$ runway with constant acceleration in $30\ \mathrm{s}$. What is its speed at take-off?`,
      verify: { kind: "value", inputs: { s: "500", t: "30" }, params: { ask: "takeoff" } },
      options: [
        { key: "A", text: t`$23.6\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M8", value: "23.6000000000000" },
        { key: "B", text: t`$120\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M9", value: "120" },
        { key: "C", text: t`$33.3\ \mathrm{m/s}$`, correct: true, value: "33.3000000000000" },
        { key: "D", text: t`$16.7\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M7", value: "16.7000000000000" },
      ],
      solution: {
        steps: [
          t`$500 = \dfrac{1}{2}a \times 30^2$, so $a$ $= \dfrac{1000}{900} \approx 1.11\ \mathrm{m/s^2}$.`,
          t`$v = at = 1.11 \times 30$ $\approx 33.3\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.3 (ii)" },
      stem: t`A car moving at $120\ \mathrm{km/h}$ brakes and stops in $100\ \mathrm{m}$. What is its average retardation?`,
      verify: { kind: "value", inputs: { u_kmh: "120", s: "100" }, params: { ask: "brake" } },
      options: [
        { key: "A", text: t`$5.56\ \mathrm{m/s^2}$`, correct: true, value: "5.56000000000000" },
        { key: "B", text: t`$72\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C01-M10", value: "72" },
        { key: "C", text: t`$11.1\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C01-M11", value: "11.1000000000000" },
        { key: "D", text: t`$0.333\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C01-M12", value: "0.333000000000000" },
      ],
      solution: {
        steps: [
          t`$u = 120 \times \dfrac{5}{18}$ $= 33.3\ \mathrm{m/s}$, $v = 0$.`,
          t`$a = \dfrac{u^2}{2s}$ $= \dfrac{33.3^2}{200}$ $\approx 5.56\ \mathrm{m/s^2}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/motion-in-a-plane-11-phy/Ex Q.3 (iii)" },
      stem: t`A car travels at $50\ \mathrm{km/h}$ for $30$ minutes, at $30\ \mathrm{km/h}$ for the next $15$ minutes and at $70\ \mathrm{km/h}$ for the next $45$ minutes. What is its average speed?`,
      verify: { kind: "value", inputs: { v1: "50", t1: "30", v2: "30", t2: "15", v3: "70", t3: "45" }, params: { ask: "avgspeed" } },
      options: [
        { key: "A", text: t`$56.7\ \mathrm{km/h}$`, correct: true, value: "56.7000000000000" },
        { key: "B", text: t`$50\ \mathrm{km/h}$`, correct: false, misconceptionId: "C01-M13", value: "50" },
        { key: "C", text: t`$0.944\ \mathrm{km/h}$`, correct: false, misconceptionId: "C01-M14", value: "0.944000000000000" },
        { key: "D", text: t`$85\ \mathrm{km/h}$`, correct: false, misconceptionId: "C01-M15", value: "85" },
      ],
      solution: {
        steps: [
          t`Distances: $25 + 7.5 + 52.5 = 85\ \mathrm{km}$; time $= 90\ \mathrm{min}$ $= 1.5\ \mathrm{h}$.`,
          t`Average speed $= \dfrac{85}{1.5}$ $\approx 56.7\ \mathrm{km/h}$.`,
        ],
      },
    },
  ],
};
