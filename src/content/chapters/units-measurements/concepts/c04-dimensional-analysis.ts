import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`You half-remember that a pendulum's period is $2\pi\sqrt{\dfrac{l}{g}}$, or was it $2\pi\sqrt{\dfrac{g}{l}}$? Without looking it up, can you tell which is possible?`,
    reveal: t`Yes: check the dimensions. A period must come out as a time, $\left[T\right]$. $\sqrt{\dfrac{l}{g}}$ does; $\sqrt{\dfrac{g}{l}}$ gives $\left[T^{-1}\right]$, so it cannot be right.`,
  },
  explanation: {
    intuition: [
      t`Only like quantities can be added or equated: metres to metres, never metres to seconds.`,
      t`So both sides of a correct equation, and every term in a sum, have the same dimensions.`,
      t`This **principle of homogeneity** lets us test equations, convert units and even guess formulae.`,
      t`It cannot find pure-number constants like $\dfrac{1}{2}$ or $2\pi$, which have no dimensions.`,
    ],
    formal: [
      {
        title: "Checking equations",
        points: [
          t`Every term in a correct equation has the same dimensions.`,
          t`In $v = u + at$: $\left[L^1T^{-1}\right]$ $= \left[L^1T^{-1}\right] + \left[L^1T^{-2}\right]\left[T^1\right]$, so it can be right.`,
          t`Each term of $v = at + \dfrac{b}{t + c}$ is a velocity, and $c$ must be a time, since it is added to $t$.`,
          t`A dimensionally correct equation may still have a wrong number in it.`,
        ],
      },
      {
        title: "Converting units",
        points: [
          t`A quantity $Q = n_1u_1 = n_2u_2$: the number changes inversely with the size of the unit.`,
          t`With dimensions $\left[M^aL^bT^c\right]$: $n_2$ $= n_1\left(\dfrac{M_1}{M_2}\right)^a\left(\dfrac{L_1}{L_2}\right)^b\left(\dfrac{T_1}{T_2}\right)^c$.`,
          t`Example: $1\ \mathrm{N}$ $= 1\ \mathrm{kg\,m\,s^{-2}}$ $= 1000\ \mathrm{g} \times 100\ \mathrm{cm\,s^{-2}}$ $= 10^5$ dyne.`,
        ],
      },
      {
        title: "Finding a formula",
        points: [
          t`Suppose $Q = km^av^b\dots$ with $k$ a pure number.`,
          t`Equate the powers of $M$, $L$ and $T$ on both sides, and solve for $a$, $b$, ...`,
          t`Limits: $k$ stays unknown, sums of terms cannot be found, and only three unknown powers can be fixed with $M$, $L$, $T$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The period $T$ of a simple pendulum is thought to depend on its length $l$ and on $g$, as $T = kl^ag^b$. Find $a$ and $b$.`,
      steps: [
        t`$\left[T^1\right]$ $= \left[L^1\right]^a\left[L^1T^{-2}\right]^b$ $= \left[L^{a + b}T^{-2b}\right]$.`,
        t`Powers of $T$: $1 = -2b$, so $b = -\dfrac{1}{2}$. Powers of $L$: $a + b = 0$, so $a = \dfrac{1}{2}$.`,
        t`So $T = k\sqrt{\dfrac{l}{g}}$; experiment gives $k = 2\pi$.`,
      ],
      answer: t`$a = \dfrac{1}{2}$, $b = -\dfrac{1}{2}$`,
    },
    visualSpec: t`Swap the parts of a remembered formula around and watch the dimensions catch the wrong versions.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Turns the conversion upside down.",
      remediation: t`Larger new units mean a smaller number: $1\ \mathrm{kg} = \dfrac{1}{\alpha}$ of the new mass unit, so mass enters as $\alpha^{-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Forgets the powers in the dimensions.",
      remediation: t`Energy is $\mathrm{kg\,m^2\,s^{-2}}$: length enters squared and time to the power $-2$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: "Gets the sign of time's power wrong.",
      remediation: t`$\mathrm{s^{-2}}$: a larger time unit makes the number larger, so $\gamma^{+2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Gives $b$ the dimensions of velocity.`,
      remediation: t`$\dfrac{b}{t + c}$ is a velocity, so $b$ is a velocity times a time: $\left[L^1\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Gives $b$ the dimensions of $a$.`,
      remediation: t`$at$ and $\dfrac{b}{t + c}$ are both velocities, so $b$ is a length, not an acceleration.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Gives $b$ the dimensions of $c$.`,
      remediation: t`$c$ is a time, since it is added to $t$; $b$ is a velocity times a time.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Ignores the time dimension.",
      remediation: t`Match $T$ too: $\left[T^{-1}\right]$ $= \left[T^{-2}\right]^a$ gives $a = \dfrac{1}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Gets the sign of the power of $h$ wrong.`,
      remediation: t`Powers of $L$: $1 = a + b$; with $a = \dfrac{1}{2}$, $b = \dfrac{1}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: t`Gets the sign of the power of $g$ wrong.`,
      remediation: t`Powers of $T$: $-1 = -2a$, so $a = +\dfrac{1}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Gives momentum's powers.",
      remediation: t`Energy is $\left[L^2M^1T^{-2}\right]$: $v$ must be squared.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Swaps the two powers.",
      remediation: t`Mass appears once in $\left[L^2M^1T^{-2}\right]$: $a = 1$; $L^2$ needs $b = 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks dimensional analysis also gives the constant.",
      remediation: t`Pure numbers like $\dfrac{1}{2}$ have no dimensions, so dimensions cannot fix them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Converts the mass but not the length.",
      remediation: t`$1\ \mathrm{m} = 100\ \mathrm{cm}$ as well: $1\ \mathrm{N} = 1000 \times 100$ dyne.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Converts the length but not the mass.",
      remediation: t`$1\ \mathrm{kg} = 1000\ \mathrm{g}$ as well: $1\ \mathrm{N} = 1000 \times 100$ dyne.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Turns the factor upside down.",
      remediation: t`The dyne is the smaller unit, so a newton is many dynes: $10^5$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.4" },
      stem: t`One calorie is $4.2\ \mathrm{J}$, and $1\ \mathrm{J} = 1\ \mathrm{kg\,m^2\,s^{-2}}$. A civilisation uses units of mass, length and time equal to $\alpha\ \mathrm{kg}$, $\beta\ \mathrm{m}$ and $\gamma\ \mathrm{s}$. How many of their energy units make one calorie?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "calorie" } },
      options: [
        { key: "A", text: t`$4.2\,\alpha^{-1}\beta^{-1}\gamma$`, correct: false, misconceptionId: "C04-M2", value: "no_squares" },
        { key: "B", text: t`$4.2\,\alpha^{-1}\beta^{-2}\gamma^{-2}$`, correct: false, misconceptionId: "C04-M3", value: "g_sign" },
        { key: "C", text: t`$4.2\,\alpha^{-1}\beta^{-2}\gamma^2$`, correct: true, value: "a_inv_b2_inv_g2" },
        { key: "D", text: t`$4.2\,\alpha\beta^2\gamma^{-2}$`, correct: false, misconceptionId: "C04-M1", value: "a_b2_g_inv2" },
      ],
      solution: {
        steps: [
          t`$1\ \mathrm{kg} = \dfrac{1}{\alpha}$, $1\ \mathrm{m} = \dfrac{1}{\beta}$, $1\ \mathrm{s} = \dfrac{1}{\gamma}$ of the new units.`,
          t`$4.2\ \mathrm{kg\,m^2\,s^{-2}}$ $= 4.2\,\alpha^{-1}\beta^{-2}\gamma^2$ new energy units.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (x)" },
      stem: t`The equation $v = at + \dfrac{b}{t + c} + v_0$ is dimensionally correct, where $v$ and $v_0$ are velocities and $t$ is time. What are the dimensions of $b$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "b_dims" } },
      options: [
        { key: "A", text: t`$\left[L^1T^{-1}\right]$`, correct: false, misconceptionId: "C04-M4", value: "dim_v" },
        { key: "B", text: t`$\left[L^1T^{-2}\right]$`, correct: false, misconceptionId: "C04-M5", value: "dim_a" },
        { key: "C", text: t`$\left[T^1\right]$`, correct: false, misconceptionId: "C04-M6", value: "dim_t" },
        { key: "D", text: t`$\left[L^1\right]$`, correct: true, value: "dim_L" },
      ],
      solution: {
        steps: [
          t`$c$ is added to $t$, so it is a time, and $\dfrac{b}{t + c}$ is a velocity.`,
          t`$\left[b\right]$ $= \left[L^1T^{-1}\right]\left[T^1\right]$ $= \left[L^1\right]$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (ix)" },
      stem: t`A body falls freely through a height $h$. Its speed $v$ depends only on $g$ and $h$, as $v = kg^ah^b$ with $k$ a pure number. What are $a$ and $b$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "powers_v" } },
      options: [
        { key: "A", text: t`$a = \dfrac{1}{2}$, $b = -\dfrac{1}{2}$`, correct: false, misconceptionId: "C04-M8", value: "half_minus_half" },
        { key: "B", text: t`$a = -\dfrac{1}{2}$, $b = \dfrac{1}{2}$`, correct: false, misconceptionId: "C04-M9", value: "minus_half_half" },
        { key: "C", text: t`$a = \dfrac{1}{2}$, $b = \dfrac{1}{2}$`, correct: true, value: "half_half" },
        { key: "D", text: t`$a = 1$, $b = 1$`, correct: false, misconceptionId: "C04-M7", value: "one_one" },
      ],
      solution: {
        steps: [
          t`$\left[L^1T^{-1}\right]$ $= \left[L^1T^{-2}\right]^a\left[L^1\right]^b$.`,
          t`$T$: $-1 = -2a$, $a = \dfrac{1}{2}$; $L$: $1 = a + b$, $b = \dfrac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.2 (vi)" },
      stem: t`The kinetic energy of a body is assumed to be $K = km^av^b$, with $k$ a pure number. What does dimensional analysis give?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "powers_ke" } },
      options: [
        { key: "A", text: t`$a = 1$, $b = 1$; $k$ cannot be found this way`, correct: false, misconceptionId: "C04-M10", value: "one_one_p" },
        { key: "B", text: t`$a = 2$, $b = 1$; $k$ cannot be found this way`, correct: false, misconceptionId: "C04-M11", value: "two_one" },
        { key: "C", text: t`$a = 1$, $b = 2$, and $k = \dfrac{1}{2}$`, correct: false, misconceptionId: "C04-M12", value: "one_two_k_half" },
        { key: "D", text: t`$a = 1$, $b = 2$; $k$ cannot be found this way`, correct: true, value: "one_two_k_unknown" },
      ],
      solution: {
        steps: [
          t`$\left[L^2M^1T^{-2}\right]$ $= \left[M\right]^a\left[L^1T^{-1}\right]^b$, so $a = 1$ and $b = 2$.`,
          t`$k$ is a pure number, so dimensions cannot find it; it is $\dfrac{1}{2}$ by other means.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`The CGS unit of force is the dyne, $1\ \mathrm{g\,cm\,s^{-2}}$. How many dynes make one newton?`,
      verify: { kind: "value", inputs: { kg_g: "1000", m_cm: "100" }, params: { ask: "dyne" } },
      options: [
        { key: "A", text: t`$1 \times 10^{-5}$`, correct: false, misconceptionId: "C04-M15", value: "1.00000000000000e-5" },
        { key: "B", text: t`$1 \times 10^{5}$`, correct: true, value: "100000" },
        { key: "C", text: t`$1000$`, correct: false, misconceptionId: "C04-M13", value: "1000" },
        { key: "D", text: t`$100$`, correct: false, misconceptionId: "C04-M14", value: "100" },
      ],
      solution: {
        steps: [
          t`$1\ \mathrm{N}$ $= 1\ \mathrm{kg\,m\,s^{-2}}$ $= 1000\ \mathrm{g} \times 100\ \mathrm{cm} \times \mathrm{s^{-2}}$.`,
          t`$= 10^5\ \mathrm{g\,cm\,s^{-2}}$ $= 10^5$ dyne.`,
        ],
      },
    },
  ],
};
