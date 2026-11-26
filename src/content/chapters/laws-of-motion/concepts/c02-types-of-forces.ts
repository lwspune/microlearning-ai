import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`You push a heavy cupboard gently: it does not move. You push harder: it still does not move. Something pushes back exactly as hard as you each time. What is it?`,
    reveal: t`Static friction. It is a self-adjusting force: it grows to match your push, up to a maximum $\mu_sN$. Only a push beyond that maximum starts the cupboard sliding.`,
  },
  explanation: {
    intuition: [
      t`Every force in nature comes from one of four **fundamental forces**.`,
      t`Gravity gives a body its **weight**, the Earth's pull on it.`,
      t`Touching surfaces push on each other (**normal force**) and resist sliding (**friction**).`,
      t`A stretched string pulls (**tension**); a stretched or squeezed spring pushes back.`,
      t`All these contact forces are electromagnetic: they come from forces between molecules.`,
      t`In an accelerating frame, bodies seem to feel an extra **pseudo force**.`,
    ],
    formal: [
      {
        title: "The four fundamental forces",
        points: [
          t`**Gravitational force:** an attraction between any two masses, the weakest of the four, with unlimited range.`,
          t`**Electromagnetic (EM) force:** between charges, attractive or repulsive, also of unlimited range.`,
          t`**Strong nuclear force:** the strongest, binds nucleons, range under about $10^{-14}\ \mathrm{m}$.`,
          t`**Weak nuclear force:** acts in radioactive decay, range about $10^{-16}\ \mathrm{m}$.`,
          t`Daily life is ruled by the EM force: tension, normal force, friction, air resistance and upthrust are all EM.`,
        ],
      },
      {
        title: "Gravitation and weight",
        points: [
          t`Two point masses $m_1$ and $m_2$, a distance $r$ apart, attract with $F = \dfrac{Gm_1m_2}{r^2}$.`,
          t`$G$ $= 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$, so the pull between everyday objects is tiny.`,
          t`The **weight** of a body is the Earth's pull on it, $W = mg$, measured in newtons.`,
          t`Halving $r$ makes the pull four times larger, since $F \propto \dfrac{1}{r^2}$.`,
          t`Between two masses there is a **neutral point** where their pulls on a third body cancel.`,
        ],
      },
      {
        title: "Normal force and tension",
        points: [
          t`The **normal force** $N$ is the push of a surface on a body, at right angles to the surface.`,
          t`It adjusts to stop the body sinking in, so it is not always $mg$.`,
          t`Pushing down at $\theta$ below the horizontal adds $F\sin\theta$: $N = mg + F\sin\theta$.`,
          t`Pulling up at $\theta$ above the horizontal takes it away: $N = mg - F\sin\theta$.`,
          t`**Tension** $T$ is the pull of a taut string, along the string, away from the body.`,
          t`A spring stretched or squeezed by $x$ pushes back with $F = -kx$, where $k$ is its **force constant**.`,
        ],
      },
      {
        title: "Friction",
        points: [
          t`**Friction** acts along the surface, opposing sliding, or the tendency to slide.`,
          t`**Static friction** self-adjusts: it equals the applied push, as long as the body stays at rest.`,
          t`It has a maximum, $f_{max} = \mu_sN$, where $\mu_s$ is the **coefficient of static friction**.`,
          t`Once the body slides, **kinetic friction** $f_k = \mu_kN$ acts, with $\mu_k < \mu_s$.`,
          t`Friction is a **non-conservative** force: the work done against it is lost as heat.`,
        ],
      },
      {
        title: "Pseudo forces",
        points: [
          t`A **pseudo force** is not a push or pull by any body; it appears only in an accelerating frame.`,
          t`In a frame with acceleration $\vec{a}$, add $-m\vec{a}$ to every body of mass $m$; then use Newton's laws.`,
          t`It points **opposite** to the frame's acceleration, and vanishes when the frame moves uniformly.`,
          t`A bob in a car speeding up swings back until $\tan\theta = \dfrac{a}{g}$.`,
          t`A pseudo force has no reaction, but its effects are measurable, for example on a scale.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $35\ \mathrm{kg}$ block on a rough table can get a resistive force of up to $10\%$ of its weight. A string over a pulley pulls it left with a $20\ \mathrm{kg\ wt}$ load; another string pulls it right with a $2\ \mathrm{kg\ wt}$ pan. How many $1\ \mathrm{kg\ wt}$ weights can go in the pan without the block sliding?`,
      steps: [
        t`The largest friction is $10\%$ of $35\ \mathrm{kg\ wt}$ $= 3.5\ \mathrm{kg\ wt}$.`,
        t`With $n$ weights in the pan, the pulls are $20$ left and $(2 + n)$ right, in kg wt.`,
        t`Friction can balance their difference only while $|20 - (2 + n)| \le 3.5$.`,
        t`$18 - n \le 3.5$ gives $n \ge 14.5$; $n - 18 \le 3.5$ gives $n \le 21.5$.`,
        t`So at least $15$ and at most $21$ weights. Between these, friction self-adjusts to the difference.`,
      ],
      answer: t`At least $15$, at most $21$`,
    },
    visualSpec: t`Push a block with a slider and watch static friction grow to match the push until it reaches its maximum and the block slides.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Thinks static friction always equals its maximum $\mu_sN$.`,
      remediation: t`Static friction self-adjusts: it equals the net push while the body stays at rest. $\mu_sN$ is only its upper limit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks there is no friction until the body slides.",
      remediation: "A body at rest under a net push stays at rest because static friction balances that push.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Uses the mass for the weight.",
      remediation: t`Weight is a force, $W = mg$ in newtons; friction and the normal force are compared with $mg$, not $m$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Takes the normal force as $mg$ every time.`,
      remediation: t`The normal force adjusts to the other forces: a downward push adds its vertical part $F\sin\theta$ to $mg$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Treats a push at an angle like a pull.",
      remediation: t`A force pointing below the horizontal presses the block into the table: $N = mg + F\sin\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Takes $F\cos\theta$ as the vertical part of the force.`,
      remediation: t`With $\theta$ measured from the horizontal, the vertical part is $F\sin\theta$ and the horizontal part is $F\cos\theta$.`,
      fallback: { kind: "ext", topic: "resolving a vector into components" },
    },
    {
      id: "C02-M7",
      mistake: "Credits the brakes with the whole retardation.",
      remediation: t`Friction still acts while braking. The brakes supply only the extra retardation: $4.5 - 1 = 3.5\ \mathrm{m/s^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Adds the friction retardation to the braking one.",
      remediation: t`The $4.5\ \mathrm{m/s^2}$ from $v^2 = u^2 + 2as$ already includes friction; subtract it to get the brakes' share.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Drops the $2$ in $v^2 = u^2 + 2as$.`,
      remediation: t`Stopping from $u$ in a distance $s$: $a = \dfrac{u^2}{2s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Forgets the square root: splits the distance in the ratio of the masses.",
      remediation: t`The pulls fall as $\dfrac{1}{r^2}$: $\dfrac{M_1}{x^2}$ $= \dfrac{M_2}{(d - x)^2}$, so $\dfrac{x}{d - x}$ $= \sqrt{\dfrac{M_1}{M_2}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Gives the distance from the lighter galaxy.",
      remediation: t`The neutral point is nearer the lighter body. From the heavier one, $x$ $= \dfrac{\sqrt{M_1}}{\sqrt{M_1} + \sqrt{M_2}}\,d$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Takes the neutral point midway between the masses.",
      remediation: "The pulls are equal at the midpoint only for equal masses. The heavier body's pull reaches further.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks the pseudo force points along the frame's acceleration.",
      remediation: t`The pseudo force is $-m\vec{a}$: opposite to the car's acceleration, so the bob swings back.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks a pseudo force has no effect because no body exerts it.",
      remediation: "No body exerts it, but in the car's frame its effect is real: the bob does swing back.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Thinks the pseudo force depends on the frame's velocity.",
      remediation: t`The pseudo force is $-m\vec{a}$: it depends on the acceleration, so it vanishes at a steady speed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M16",
      mistake: "Thinks the friction force is the same for both vehicles.",
      remediation: t`Friction is $\mu N = \mu mg$, so it grows with the weight. The same speed and stopping distance give the same fraction $\mu$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "authored" },
      stem: t`A $10\ \mathrm{kg}$ block rests on a rough horizontal floor whose coefficient of static friction is $0.4$. Two children push it horizontally in opposite directions, one with $50\ \mathrm{N}$ and the other with $30\ \mathrm{N}$, and it does not move. What is the force of friction on it? ($g = 9.8\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { m: "10", mu: "2/5", F1: "50", F2: "30", g: "9.8" }, params: { ask: "static" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{N}$`, correct: true, value: "20" },
        { key: "B", text: t`$39.2\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "39.2000000000000" },
        { key: "C", text: t`$0\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M2", value: "0" },
        { key: "D", text: t`$4\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M3", value: "4" },
      ],
      solution: {
        steps: [
          t`The net push is $50 - 30$ $= 20\ \mathrm{N}$.`,
          t`The most static friction can give is $\mu_smg$ $= 0.4 \times 10 \times 9.8$ $= 39.2\ \mathrm{N}$, more than $20\ \mathrm{N}$.`,
          t`So the block stays put and friction self-adjusts to $20\ \mathrm{N}$, against the net push.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.1 (iv)" },
      stem: t`A $5\ \mathrm{kg}$ block lies on a horizontal table. You push it with a force of $20\ \mathrm{N}$ directed at $30^\circ$ below the horizontal. What is the normal force from the table? ($g = 9.8\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { m: "5", F: "20", th: "30", g: "9.8" }, params: { ask: "push" } },
      options: [
        { key: "A", text: t`$49\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M4", value: "49" },
        { key: "B", text: t`$39\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M5", value: "39" },
        { key: "C", text: t`$66.3\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M6", value: "66.3000000000000" },
        { key: "D", text: t`$59\ \mathrm{N}$`, correct: true, value: "59" },
      ],
      solution: {
        steps: [
          t`The push has a downward part $20\sin 30^\circ$ $= 10\ \mathrm{N}$.`,
          t`Vertically there is no acceleration: $N = mg + 10$ $= 49 + 10$ $= 59\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Solved Ex.4.3" },
      stem: t`A car of mass $1.2$ ton runs at $54\ \mathrm{km/h}$ on a level road. With the engine off it coasts to rest in $15\ \mathrm{s}$. At the same speed on the same road, the driver brakes and stops in $25\ \mathrm{m}$. What braking force do the brakes supply?`,
      verify: { kind: "value", inputs: { M: "1200", u_kmh: "54", t: "15", s: "25" }, params: { ask: "brake" } },
      options: [
        { key: "A", text: t`$9600\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M9", value: "9600" },
        { key: "B", text: t`$4200\ \mathrm{N}$`, correct: true, value: "4200" },
        { key: "C", text: t`$5400\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M7", value: "5400" },
        { key: "D", text: t`$6600\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M8", value: "6600" },
      ],
      solution: {
        steps: [
          t`$u = 54 \times \dfrac{5}{18}$ $= 15\ \mathrm{m/s}$. Coasting: friction gives $\dfrac{15}{15}$ $= 1\ \mathrm{m/s^2}$.`,
          t`Braking: $a = \dfrac{u^2}{2s}$ $= \dfrac{225}{50}$ $= 4.5\ \mathrm{m/s^2}$, from brakes and friction together.`,
          t`Brakes' share: $3.5\ \mathrm{m/s^2}$, so the force is $1200 \times 3.5$ $= 4200\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (viii)" },
      stem: t`Two galaxies, of $16$ billion and $9$ billion solar masses, are $7$ million light years apart. A star on the line joining them feels no net pull from the two. How far is it from the heavier galaxy?`,
      verify: { kind: "value", inputs: { M1: "16", M2: "9", d: "7" }, params: { ask: "neutral" } },
      options: [
        { key: "A", text: t`$3.5\ \mathrm{million\ light\ years}$`, correct: false, misconceptionId: "C02-M12", value: "3.50000000000000" },
        { key: "B", text: t`$4\ \mathrm{million\ light\ years}$`, correct: true, value: "4" },
        { key: "C", text: t`$4.48\ \mathrm{million\ light\ years}$`, correct: false, misconceptionId: "C02-M10", value: "4.48000000000000" },
        { key: "D", text: t`$3\ \mathrm{million\ light\ years}$`, correct: false, misconceptionId: "C02-M11", value: "3" },
      ],
      solution: {
        steps: [
          t`At distance $x$ from the heavier one: $\dfrac{16}{x^2}$ $= \dfrac{9}{(7 - x)^2}$.`,
          t`Square roots: $\dfrac{4}{x} = \dfrac{3}{7 - x}$, so $28 - 4x = 3x$.`,
          t`$x = 4$ million light years from the heavier galaxy.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.2 (ix)" },
      stem: t`A small bob hangs on a string from the roof of a car. The car starts from rest and speeds up forwards, then moves at a steady speed on a straight level road. What does a passenger in the car see the bob do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pseudo" } },
      options: [
        { key: "A", text: t`It swings back while the car speeds up, and stays tilted back at the steady speed`, correct: false, misconceptionId: "C02-M15", value: "backStaysTilted" },
        { key: "B", text: t`It swings back while the car speeds up, then hangs vertically at the steady speed`, correct: true, value: "backThenVertical" },
        { key: "C", text: t`It swings forwards while the car speeds up`, correct: false, misconceptionId: "C02-M13", value: "forwards" },
        { key: "D", text: t`It stays vertical throughout: no real force pushes it sideways`, correct: false, misconceptionId: "C02-M14", value: "alwaysVertical" },
      ],
      solution: {
        steps: [
          t`In the car's frame a pseudo force $-m\vec{a}$ acts on the bob, backwards, while the car speeds up.`,
          t`So the bob swings back. At a steady speed $a = 0$, the pseudo force vanishes and the bob hangs vertically.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (i)" },
      stem: t`A $5$ ton truck moving at $36\ \mathrm{km/h}$ on a level road stops after $1\ \mathrm{km}$ when its engine fails. A $1$ ton car moving at the same speed on the same road also stops in $1\ \mathrm{km}$. What fraction of the car's weight is the friction on it? ($g = 10\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { u_kmh: "36", s: "1000", g: "10", Mt: "5", Mc: "1" }, params: { ask: "fraction" } },
      options: [
        { key: "A", text: t`$0.005$`, correct: true, value: "0.00500000000000000" },
        { key: "B", text: t`$0.025$`, correct: false, misconceptionId: "C02-M16", value: "0.0250000000000000" },
        { key: "C", text: t`$0.01$`, correct: false, misconceptionId: "C02-M9", value: "0.0100000000000000" },
        { key: "D", text: t`$0.05$`, correct: false, misconceptionId: "C02-M3", value: "0.0500000000000000" },
      ],
      solution: {
        steps: [
          t`$u = 10\ \mathrm{m/s}$; $a = \dfrac{u^2}{2s}$ $= \dfrac{100}{2000}$ $= 0.05\ \mathrm{m/s^2}$, the same for both.`,
          t`Friction $f = ma$, so $\dfrac{f}{mg} = \dfrac{a}{g}$ $= \dfrac{0.05}{10}$ $= 0.005$.`,
          t`The mass cancels: the car's fraction is also $0.005$, that is $\dfrac{1}{200}$.`,
        ],
      },
    },
  ],
};
