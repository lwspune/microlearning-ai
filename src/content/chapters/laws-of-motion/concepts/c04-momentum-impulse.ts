import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Jump from a wall onto hard ground and your knees jar; land the same way on soft sand and they don't. You stop from the same speed each time. What is different?`,
    reveal: t`The time. Stopping changes your momentum by the same amount either way, but sand stretches the stop over a longer time. The change in momentum is $F\Delta t$, so a longer time means a smaller force.`,
  },
  explanation: {
    intuition: [
      t`**Momentum** is mass times velocity: a heavy or fast body has a lot of it.`,
      t`A force acting for a time changes a body's momentum.`,
      t`The same change in momentum can come from a big force briefly or a small force for longer.`,
      t`Bodies that push only on each other swap momentum, but their total stays the same.`,
      t`So when a gun fires, the bullet goes forward and the gun kicks back.`,
    ],
    formal: [
      {
        title: "Momentum and the second law",
        points: [
          t`**Linear momentum** is $\vec{p} = m\vec{v}$, a vector along the velocity; its unit is $\mathrm{kg\,m/s}$.`,
          t`Newton's second law: $\vec{F} = \dfrac{d\vec{p}}{dt}$.`,
          t`So a force acting for a time $dt$ changes the momentum by $d\vec{p} = \vec{F}\,dt$.`,
          t`Momentum is a vector: a ball that bounces back has its momentum reversed, not just reduced.`,
        ],
      },
      {
        title: "Impulse",
        points: [
          t`The **impulse** $\vec{J}$ of a force is the change in momentum it produces: $\vec{J} = \Delta\vec{p}$ $= \vec{p}_2 - \vec{p}_1$.`,
          t`For a constant force acting for a time $\Delta t$, $\vec{J} = \vec{F}\Delta t$; its unit is $\mathrm{N\,s}$.`,
          t`For a variable force, $\vec{J}$ $= \displaystyle\int \vec{F}\,dt$, the area under the $F$-$t$ graph.`,
          t`We use impulse for large forces lasting a short time, like a bat hitting a ball.`,
          t`The average force is $F_{av}$ $= \dfrac{\Delta p}{\Delta t}$, so a longer stop means a smaller force.`,
        ],
      },
      {
        title: "Conservation of momentum",
        points: [
          t`An **isolated system** is a group of bodies with no net external force on it.`,
          t`**Law:** the total momentum of an isolated system stays constant during any interaction.`,
          t`Inside the system, forces come in third-law pairs; their impulses cancel in the total.`,
          t`So $m_1\vec{u}_1 + m_2\vec{u}_2$ $= m_1\vec{v}_1 + m_2\vec{v}_2$ for two bodies.`,
          t`The law holds in collisions and explosions alike, however large the internal forces.`,
        ],
      },
      {
        title: "Recoil and explosions",
        points: [
          t`A gun and bullet at rest have total momentum zero, before and after firing.`,
          t`So $MV + mu = 0$, giving the gun's recoil velocity $V = -\dfrac{mu}{M}$.`,
          t`A shell that bursts in flight keeps its total momentum: the fragments' momenta add up to it.`,
          t`Kinetic energy is **not** conserved in an explosion: the burst supplies extra energy.`,
          t`That energy comes from the chemical energy of the explosive.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two skaters, of $50\ \mathrm{kg}$ and $70\ \mathrm{kg}$, stand at rest on smooth ice and push each other apart. The $50\ \mathrm{kg}$ skater moves off at $1.4\ \mathrm{m/s}$. Find the velocity of the other.`,
      steps: [
        t`No net external force acts horizontally, so the total momentum stays at its starting value, zero.`,
        t`$50 \times 1.4 + 70\,v = 0$.`,
        t`$v = -\dfrac{70}{70}$ $= -1\ \mathrm{m/s}$.`,
        t`The minus sign means the $70\ \mathrm{kg}$ skater moves the opposite way at $1\ \mathrm{m/s}$.`,
      ],
      answer: t`$1\ \mathrm{m/s}$, opposite to the first skater`,
    },
    visualSpec: t`Set the masses of two skaters pushing apart and watch their speeds share out so that the total momentum stays zero.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Subtracts the speeds, ignoring that the ball reverses.",
      remediation: t`Velocity is a vector: from $+10$ to $-8\ \mathrm{m/s}$ is a change of $18\ \mathrm{m/s}$, not $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Ignores the rebound, as if the ball stopped at the wall.",
      remediation: "A bounce first stops the ball and then sends it back: the change in momentum includes both parts.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Leaves the time in milliseconds.",
      remediation: t`$20\ \mathrm{ms} = 0.02\ \mathrm{s}$: change to seconds before dividing.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Gives the kinetic energy after the burst, not the energy the burst supplied.",
      remediation: "The energy supplied is the kinetic energy after **minus** the kinetic energy before.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Takes the total momentum before the burst as zero.",
      remediation: t`The ball was already falling: its momentum before the burst is $Mu$, and the fragments share that.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Forgets the $\dfrac{1}{2}$ in $K = \dfrac{1}{2}mv^2$.`,
      remediation: t`Kinetic energy is $\dfrac{1}{2}mv^2$ for each body.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Leaves the mass in grams.",
      remediation: t`Work in SI: $1\ \mathrm{g}$ $= 10^{-3}\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Shares the kinetic energy equally between the gun and the bullet.",
      remediation: t`Momentum, not kinetic energy, is shared: $MV = mu$. The bullet gets nearly all the kinetic energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks equal forces give the gun and bullet equal speeds.",
      remediation: "The forces are equal and act for the same time, so the **momenta** are equal: the heavy gun moves slowly.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Divides the kinetic energy by the time to get the force.",
      remediation: t`Force is the rate of change of **momentum**: $F = \dfrac{\Delta p}{\Delta t}$, not energy over time (that is power).`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Multiplies the change in momentum by the time.",
      remediation: t`Impulse $F\Delta t = \Delta p$, so $F = \dfrac{\Delta p}{\Delta t}$: a longer time means a smaller force.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks the energy of the burst gives the pieces a total momentum.",
      remediation: "The burst supplies kinetic energy, but its forces are internal, so the total momentum stays zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks large internal forces break momentum conservation.",
      remediation: "Internal forces come in equal and opposite pairs, however large. Only an external force changes the total momentum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Adds the sizes of the momenta instead of the vectors.",
      remediation: "Momentum is a vector: pieces flying opposite ways cancel. Their vector sum is zero.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "authored" },
      stem: t`A $0.2\ \mathrm{kg}$ ball hits a wall at right angles at $10\ \mathrm{m/s}$ and rebounds along the same line at $8\ \mathrm{m/s}$. The contact lasts $20\ \mathrm{ms}$. What average force does the wall exert on the ball?`,
      verify: { kind: "value", inputs: { m: "1/5", u: "10", w: "8", t_ms: "20" }, params: { ask: "wall" } },
      options: [
        { key: "A", text: t`$100\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M2", value: "100" },
        { key: "B", text: t`$0.18\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M3", value: "0.180000000000000" },
        { key: "C", text: t`$180\ \mathrm{N}$`, correct: true, value: "180" },
        { key: "D", text: t`$20\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M1", value: "20" },
      ],
      solution: {
        steps: [
          t`Take the ball's first direction as positive: $\Delta p = 0.2(-8 - 10)$ $= -3.6\ \mathrm{kg\,m/s}$.`,
          t`$F_{av}$ $= \dfrac{\Delta p}{\Delta t}$ $= \dfrac{3.6}{0.02}$ $= 180\ \mathrm{N}$, away from the wall.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (xii)" },
      stem: t`A ball of mass $0.6\ \mathrm{kg}$ is dropped and falls freely for $5\ \mathrm{s}$. It then bursts into two fragments with masses in the ratio $1 : 2$. The lighter fragment moves on downwards at $20\ \mathrm{m/s}$. How much kinetic energy did the burst supply? ($g = 10\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { M: "3/5", t: "5", g: "10", vl: "20" }, params: { ask: "explode" } },
      options: [
        { key: "A", text: t`$885\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M4", value: "885" },
        { key: "B", text: t`$60\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M5", value: "60" },
        { key: "C", text: t`$270\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M6", value: "270" },
        { key: "D", text: t`$135\ \mathrm{J}$`, correct: true, value: "135" },
      ],
      solution: {
        steps: [
          t`Before: $u = 10 \times 5 = 50\ \mathrm{m/s}$ down, $p = 0.6 \times 50$ $= 30\ \mathrm{kg\,m/s}$; $K = 750\ \mathrm{J}$.`,
          t`Fragments $0.2$ and $0.4\ \mathrm{kg}$: $0.2 \times 20 + 0.4v = 30$, so $v = 65\ \mathrm{m/s}$ down.`,
          t`After: $K$ $= \dfrac{1}{2}(0.2)(20^2) + \dfrac{1}{2}(0.4)(65^2)$ $= 40 + 845$ $= 885\ \mathrm{J}$.`,
          t`Energy supplied $= 885 - 750$ $= 135\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`A gun of mass $4\ \mathrm{kg}$, at rest, fires a bullet of mass $20\ \mathrm{g}$ at $400\ \mathrm{m/s}$. With what speed does the gun recoil?`,
      verify: { kind: "value", inputs: { M: "4", m_g: "20", u: "400" }, params: { ask: "recoil" } },
      options: [
        { key: "A", text: t`$28.3\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M8", value: "28.3000000000000" },
        { key: "B", text: t`$400\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M9", value: "400" },
        { key: "C", text: t`$2\ \mathrm{m/s}$`, correct: true, value: "2" },
        { key: "D", text: t`$2000\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M7", value: "2000" },
      ],
      solution: {
        steps: [
          t`Total momentum is zero before and after: $4V + 0.02 \times 400 = 0$.`,
          t`$V = -\dfrac{8}{4}$ $= -2\ \mathrm{m/s}$: the gun recoils at $2\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.2 (xvii)" },
      stem: t`A cricket ball of mass $150\ \mathrm{g}$ moving at $20\ \mathrm{m/s}$ is caught by a fielder who draws the hands back, stopping it in $0.1\ \mathrm{s}$. What average force do the hands exert?`,
      verify: { kind: "value", inputs: { m_g: "150", u: "20", t: "1/10" }, params: { ask: "catch" } },
      options: [
        { key: "A", text: t`$300\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M10", value: "300" },
        { key: "B", text: t`$0.3\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M11", value: "0.300000000000000" },
        { key: "C", text: t`$30000\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M7", value: "30000" },
        { key: "D", text: t`$30\ \mathrm{N}$`, correct: true, value: "30" },
      ],
      solution: {
        steps: [
          t`$\Delta p = 0.15 \times 20$ $= 3\ \mathrm{kg\,m/s}$.`,
          t`$F_{av}$ $= \dfrac{\Delta p}{\Delta t}$ $= \dfrac{3}{0.1}$ $= 30\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.2 (xiii)" },
      stem: t`A cracker lying at rest bursts, and its pieces fly off in all directions. Ignoring air resistance, what is the total momentum of the pieces just after the burst?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cracker" } },
      options: [
        { key: "A", text: t`The sum of the sizes of the pieces' momenta`, correct: false, misconceptionId: "C04-M14", value: "sumOfSizes" },
        { key: "B", text: t`Zero, the same as before the burst`, correct: true, value: "zeroAsBefore" },
        { key: "C", text: t`More than zero, because the burst gave the pieces energy`, correct: false, misconceptionId: "C04-M12", value: "positiveFromEnergy" },
        { key: "D", text: t`It cannot be found: the large forces of the burst break momentum conservation`, correct: false, misconceptionId: "C04-M13", value: "notConserved" },
      ],
      solution: {
        steps: [
          t`The burst's forces are internal, and no external force acts in that instant, so total momentum is conserved.`,
          t`It was zero before, so the vector sum of the pieces' momenta is zero just after.`,
        ],
      },
    },
  ],
};
