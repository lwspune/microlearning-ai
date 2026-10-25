import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A coin on a slowly spinning turntable stays put, but flies off when the turntable spins fast. Which force held it, and why did that force stop being enough?`,
    reveal: t`Static friction pulled it towards the centre. The pull needed, $m\omega^2 r$, grows with $\omega^2$; once it passes the most friction can give, $\mu mg$, the coin slips.`,
  },
  explanation: {
    intuition: [
      t`A body moving in a circle keeps changing direction, so it is always accelerating.`,
      t`That acceleration points to the centre: **centripetal** means centre-seeking.`,
      t`Newton's second law then needs a net force towards the centre, the **centripetal force**.`,
      t`A real force supplies it: a string's tension, friction, gravity or a normal force.`,
      t`Take that force away and the body flies off along the tangent.`,
    ],
    formal: [
      {
        title: "Centripetal acceleration",
        points: [
          t`A body in U.C.M. keeps its speed $v$, but the direction of $\vec{v}$ turns all the time.`,
          t`The **centripetal acceleration** is $a = \dfrac{v^2}{r} = \omega^2 r$.`,
          t`It points along the radius, towards the centre, at every instant.`,
          t`It changes only the direction of $\vec{v}$, never its size.`,
        ],
        figure: {
          alt: "A body P on a circle, centre O, with its speed v along the tangent. Then the acceleration a from P towards O.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne" },
            { kind: "vector", from: [1.5, 2.598], to: [-0.232, 3.598], label: "v", labelAt: "n", tone: "muted", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "a", labelAt: "w", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Centripetal force",
        points: [
          t`By Newton's second law, the net inward force is $F = \dfrac{mv^2}{r} = m\omega^2 r$.`,
          t`It is not a new kind of force: some real force supplies it.`,
          t`A stone on a string: tension. A car on a curve: friction. The Moon: gravity.`,
          t`So never add $m\omega^2 r$ as one more force: it is what the real forces add up to.`,
          t`If the supplying force vanishes, the body moves off along the tangent.`,
        ],
        figure: {
          alt: "A body P on a circle, centre O. A force F from P towards O. Last, a dashed line along the tangent at P.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne" },
            { kind: "vector", from: [1.5, 2.598], to: [-0.232, 3.598], label: "v", labelAt: "n", tone: "muted" },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "F", labelAt: "w", tone: "accent", step: 1 },
            { kind: "segment", from: [1.5, 2.598], to: [-1.271, 4.198], dashed: true, tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Centrifugal force",
        points: [
          t`Ride on the turntable and the coin looks at rest, though friction pulls it inwards.`,
          t`To use Newton's laws in this rotating frame, add a **pseudo force** $m\omega^2 r$ outwards.`,
          t`This outward pseudo force is the **centrifugal force**; it balances the inward pull.`,
          t`It has no agent and no reaction: it is not the reaction to the centripetal force.`,
          t`From the ground (an inertial frame) it does not exist; only the inward force acts.`,
        ],
        figure: {
          alt: "A coin P on a turntable, centre O. A friction arrow from P towards O. Then an outward arrow from P, labelled centrifugal, drawn only in the rotating frame.",
          axes: "none",
          view: { x: [-4.2, 5.2], y: [-3.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "se" },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "friction", labelAt: "w", tone: "accent", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [2.2, 3.811], label: "centrifugal", labelAt: "e", tone: "bad", step: 2 },
          ],
        },
      },
      {
        title: "When does a coin slip?",
        points: [
          t`On a turning coin, static friction points to the centre and supplies $m\omega^2 r$.`,
          t`Static friction can reach at most $\mu mg$, where $\mu$ is the coefficient of static friction.`,
          t`The coin stays while $m\omega^2 r \le \mu mg$, and slips once $\omega^2 r > \mu g$.`,
          t`So it starts slipping at $\omega = \sqrt{\dfrac{\mu g}{r}}$, whatever its mass.`,
          t`A coin farther out needs more friction at the same $\omega$, so it slips first.`,
          t`Write $r$ in metres before substituting.`,
        ],
        figure: {
          alt: "A turntable, centre O. A coin Q halfway out with a short friction arrow towards O. Last, a coin P at the rim with a longer arrow: it needs more friction.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [-1.299, 0.75], label: "Q", labelAt: "w", step: 1 },
            { kind: "vector", from: [-1.299, 0.75], to: [-0.779, 0.45], label: "f", labelAt: "n", step: 1 },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 5 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "needs more", labelAt: "w", tone: "bad", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A coin sits $25\ \mathrm{cm}$ from the centre of a turntable, with $\mu = 0.4$. Taking $g = 10\ \mathrm{m/s^2}$, at what least angular speed does it start to slip?`,
      steps: [
        t`$r = 0.25\ \mathrm{m}$. Friction supplies the inward force $m\omega^2 r$.`,
        t`It slips when this reaches the most friction can give: $m\omega^2 r = \mu mg$.`,
        t`Mass cancels: $\omega^2 = \dfrac{\mu g}{r} = \dfrac{0.4 \times 10}{0.25}$ $= 16$.`,
        t`$\omega = 4\ \mathrm{rad/s}$.`,
      ],
      answer: t`$\omega = 4\ \mathrm{rad/s}$`,
      figure: {
        alt: "A turntable, centre O, with a coin P on it; r = 0.25 m is written above. Friction f on the coin points towards O. Then f at most mu m g is written.",
        axes: "none",
        view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
          { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
          { kind: "label", at: [-3, 3.9], label: "r = 0.25 m", step: 1 },
          { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 1 },
          { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "f", labelAt: "w", tone: "accent", step: 1 },
          { kind: "label", at: [-3, 3.2], label: "f ≤ μmg", step: 2 },
        ],
      },
    },
    figure: {
      alt: "A body P moving round a circle, centre O, with its speed v along the tangent. Then a dashed line from P to the centre O, the way the acceleration points. Then a force arrow F towards O. Last, a dashed line along the tangent shows where it would fly off without the force.",
      axes: "none",
      view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
        { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
        { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 1 },
        { kind: "vector", from: [1.5, 2.598], to: [-0.232, 3.598], label: "v", labelAt: "n", tone: "muted", step: 1 },
        { kind: "segment", from: [1.5, 2.598], to: [0, 0], dashed: true, tone: "good", step: 2 },
        { kind: "vector", from: [1.5, 2.598], to: [0.7, 1.212], label: "F", labelAt: "w", tone: "accent", step: 3 },
        { kind: "segment", from: [1.5, 2.598], to: [-1.271, 4.198], dashed: true, tone: "bad", step: 5 },
      ],
    },
    visualSpec: t`Spin a turntable faster with a slider and watch the friction arrow on a coin grow until it reaches $\mu mg$ and the coin slides off along the tangent.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Writes the centripetal acceleration as $\omega r$ or $\dfrac{v}{r}$, without the square.`,
      remediation: t`The acceleration is $\omega^2 r = \dfrac{v^2}{r}$. Check the units: $\omega^2 r$ is in m/s², but $\omega r$ is only in m/s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Substitutes centimetres without converting to metres.",
      remediation: t`SI units first: divide centimetres by 100 before using $m\omega^2 r$ or $\mu g$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Uses the frequency $n$ where $\omega$ belongs.`,
      remediation: t`$\omega = 2\pi n$: rev/s times $2\pi$ gives rad/s. Going back, $n = \dfrac{\omega}{2\pi}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Treats the centrifugal force as a real force pushing the body outwards.",
      remediation: "Centrifugal force appears only in the rotating frame, as a pseudo force. From the ground, the only horizontal force on the coin is friction, pointing inwards.",
      fallback: { kind: "ext", topic: "real and pseudo forces (Std XI Physics)" },
    },
    {
      id: "C02-M5",
      mistake: "Counts the centripetal force as one more force, on top of the real ones.",
      remediation: t`$m\omega^2 r$ is the net inward force that the real forces supply. The weight is vertical and balanced by the normal force, so it adds nothing to the inward pull.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks friction on a turning coin acts along the tangent, against its motion.",
      remediation: "The coin does not slide along the turntable; left alone it would slide outwards. So static friction points inwards, towards the centre.",
      fallback: { kind: "ext", topic: "friction (Std XI Physics)" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.1(v)" },
      stem: t`A coin kept $5\ \mathrm{cm}$ from the centre of a turntable just begins to slip when the turntable turns at $90\ \mathrm{rpm}$. Taking $g = 9.8\ \mathrm{m/s^2}$, what is the coefficient of static friction between the coin and the turntable?`,
      verify: { kind: "value", inputs: { r_cm: "5", n: "90", g: "9.8" }, params: { ask: "mu" } },
      options: [
        { key: "A", text: t`$0.453$`, correct: true, value: "0.453000000000000" },
        { key: "B", text: t`$0.0481$`, correct: false, misconceptionId: "C02-M1", value: "0.0481000000000000" },
        { key: "C", text: t`$45.3$`, correct: false, misconceptionId: "C02-M2", value: "45.3000000000000" },
        { key: "D", text: t`$0.0115$`, correct: false, misconceptionId: "C02-M3", value: "0.0115000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 0.05\ \mathrm{m}$; $\omega = 2\pi \times \dfrac{90}{60} = 3\pi\ \mathrm{rad/s}$.`,
          t`Just slipping: $m\omega^2 r = \mu mg$, so $\mu = \dfrac{\omega^2 r}{g}$.`,
          t`$\mu = \dfrac{(3\pi)^2 \times 0.05}{9.8}$ $\approx 0.453$.`,
        ],
        figure: {
          alt: "A coin P on a turntable, centre O, at r = 0.05 m. Friction on it points towards O and is at its limit, mu m g.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "μmg", labelAt: "w", tone: "accent", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.13" },
      stem: t`The coefficient of static friction between a coin and a gramophone disc is $0.5$. The coin's centre is $2\ \mathrm{cm}$ from the centre of the disc. Taking $g = \pi^2\ \mathrm{m/s^2}$, at what least frequency will the coin start slipping?`,
      verify: { kind: "value", inputs: { mu: "0.5", r_cm: "2", g: "pi**2" }, params: { ask: "n_slip" } },
      options: [
        { key: "A", text: t`$39.3\ \mathrm{rev/s}$`, correct: false, misconceptionId: "C02-M1", value: "39.3000000000000" },
        { key: "B", text: t`$0.25\ \mathrm{rev/s}$`, correct: false, misconceptionId: "C02-M2", value: "0.250000000000000" },
        { key: "C", text: t`$15.7\ \mathrm{rev/s}$`, correct: false, misconceptionId: "C02-M3", value: "15.7000000000000" },
        { key: "D", text: t`$2.5\ \mathrm{rev/s}$`, correct: true, value: "2.50000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 0.02\ \mathrm{m}$. Slipping starts when $\omega^2 r = \mu g$.`,
          t`$\omega^2 = \dfrac{0.5\pi^2}{0.02} = 25\pi^2$, so $\omega = 5\pi\ \mathrm{rad/s}$.`,
          t`$n = \dfrac{\omega}{2\pi} = 2.5\ \mathrm{rev/s}$.`,
        ],
        figure: {
          alt: "A coin P on a disc, centre O, with friction mu m g pointing towards O at the moment it starts to slip.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "μmg", labelAt: "w", tone: "accent", step: 1 },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`A $0.2\ \mathrm{kg}$ stone tied to a $50\ \mathrm{cm}$ string is whirled in a horizontal circle on a smooth horizontal table at $2$ rev/s. Taking $g = 9.8\ \mathrm{m/s^2}$, what is the tension in the string?`,
      verify: { kind: "value", inputs: { m: "0.2", L_cm: "50", n: "2", g: "9.8" }, params: { ask: "tension" } },
      options: [
        { key: "A", text: t`$17.8\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M5", value: "17.8000000000000" },
        { key: "B", text: t`$15.8\ \mathrm{N}$`, correct: true, value: "15.8000000000000" },
        { key: "C", text: t`$1.26\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "1.26000000000000" },
        { key: "D", text: t`$0.4\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M3", value: "0.400000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 0.5\ \mathrm{m}$; $\omega = 2\pi \times 2 = 4\pi\ \mathrm{rad/s}$.`,
          t`The table's normal force balances the weight, so the tension alone supplies $m\omega^2 r$.`,
          t`$T = 0.2 \times (4\pi)^2 \times 0.5$ $\approx 15.8\ \mathrm{N}$.`,
        ],
        figure: {
          alt: "A stone P on a smooth table whirled round O on a string. The string's tension T pulls P towards O.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "segment", from: [0, 0], to: [1.5, 2.598], tone: "muted" },
            { kind: "point", at: [1.5, 2.598], label: "stone", labelAt: "ne", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "T", labelAt: "w", tone: "accent", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.2(i)" },
      stem: t`A coin turns with a turntable without slipping. Which force keeps it moving in its circle, and which way does that force point?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "force" } },
      options: [
        { key: "A", text: t`Static friction from the turntable, along the tangent against the motion`, correct: false, misconceptionId: "C02-M6", value: "friction_tangent" },
        { key: "B", text: t`Static friction from the turntable, towards the centre`, correct: true, value: "friction_inward" },
        { key: "C", text: t`Centrifugal force, away from the centre`, correct: false, misconceptionId: "C02-M4", value: "centrifugal_outward" },
        { key: "D", text: t`Static friction plus a separate centripetal force, both towards the centre`, correct: false, misconceptionId: "C02-M5", value: "friction_plus_extra" },
      ],
      solution: {
        steps: [
          t`Seen from the ground, the only horizontal force on the coin is static friction.`,
          t`The coin moves in a circle, so that force must point towards the centre: it is the centripetal force.`,
        ],
        figure: {
          alt: "A coin P turning with a turntable, centre O. Static friction on it points towards O.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [-0.232, 3.598], label: "v", labelAt: "n", tone: "muted", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "friction", labelAt: "w", tone: "accent", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.13" },
      stem: t`A $0.05\ \mathrm{kg}$ coin sits $10\ \mathrm{cm}$ from the centre of a turntable turning steadily at $4\ \mathrm{rad/s}$. Taking $g = 9.8\ \mathrm{m/s^2}$, how large is the friction force on the coin?`,
      verify: { kind: "value", inputs: { m: "0.05", r_cm: "10", w: "4", g: "9.8" }, params: { ask: "friction" } },
      options: [
        { key: "A", text: t`$0.57\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M5", value: "0.570000000000000" },
        { key: "B", text: t`$0.08\ \mathrm{N}$`, correct: true, value: "0.0800000000000000" },
        { key: "C", text: t`$0.02\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "0.0200000000000000" },
        { key: "D", text: t`$8\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M2", value: "8" },
      ],
      solution: {
        steps: [
          t`$r = 0.1\ \mathrm{m}$. Friction alone supplies the inward force; the normal force balances the weight.`,
          t`$f = m\omega^2 r = 0.05 \times 4^2 \times 0.1$ $= 0.08\ \mathrm{N}$.`,
        ],
        figure: {
          alt: "A coin P on a turntable, centre O, with the friction f on it pointing towards O.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-3.6, 4.4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.5, 2.598], label: "P", labelAt: "ne", step: 1 },
            { kind: "vector", from: [1.5, 2.598], to: [0.8, 1.386], label: "f", labelAt: "w", tone: "accent", step: 2 },
          ],
        },
      },
    },
  ],
};
