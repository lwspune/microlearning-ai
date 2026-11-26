import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Bring a strong magnet near an old cathode-ray TV and the picture bends out of shape. Yet the electrons still strike the screen just as fast. How can a force bend their path without speeding them up?`,
    reveal: t`The magnetic force on a moving charge always acts at right angles to its velocity. It can turn the charge, but it never pushes it along or holds it back.`,
  },
  explanation: {
    intuition: [
      t`A **magnetic field** $\vec{B}$ is the region round a magnet or a current where moving charges feel a force.`,
      t`A charge at rest in a magnetic field feels no magnetic force at all.`,
      t`A moving charge feels a force that depends on its speed and on its direction of motion.`,
      t`The force is at right angles to both the velocity and the field.`,
      t`So the force turns the charge but never changes its speed.`,
    ],
    formal: [
      {
        title: "The magnetic force",
        points: [
          t`A charge $q$ moving with velocity $\vec{v}$ in a field $\vec{B}$ feels $\vec{F} = q\left(\vec{v} \times \vec{B}\right)$.`,
          t`Its size is $F = qvB\sin\theta$, where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$.`,
          t`It is greatest, $qvB$, when the charge moves at right angles to the field.`,
          t`It is zero when the charge moves along the field or against it, and zero for a charge at rest.`,
        ],
      },
      {
        title: "Direction of the force",
        points: [
          t`$\vec{v} \times \vec{B}$ is at right angles to both $\vec{v}$ and $\vec{B}$.`,
          t`Right-hand rule: curl the fingers from $\vec{v}$ towards $\vec{B}$; the thumb points along $\vec{v} \times \vec{B}$.`,
          t`On a positive charge the force is along $\vec{v} \times \vec{B}$.`,
          t`On a negative charge, such as an electron, it is opposite to $\vec{v} \times \vec{B}$.`,
          t`For unit vectors: $\hat{x} \times \hat{y} = \hat{z}$, $\hat{y} \times \hat{z} = \hat{x}$, $\hat{z} \times \hat{x} = \hat{y}$.`,
        ],
        figure: {
          alt: "A field into the page, shown by rows of crosses. Step 2: a positive charge q moving to the right with velocity v. Step 3: the force F on it points to the top of the page, at right angles to v and to B. Step 4: a dashed arrow for the force on a negative charge, to the bottom of the page.",
          axes: "none",
          view: { x: [0, 10], y: [-2.7, 2.6] },
          elements: [
            { kind: "label", at: [1, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [1, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [3, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [3, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [5, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [5, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [7, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [7, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [9, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [9, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [9.6, 0.2], label: "B into page", labelAt: "w", tone: "muted", step: 1 },
            { kind: "point", at: [4, 0], label: "+q", labelAt: "sw", step: 2 },
            { kind: "vector", from: [4.2, 0], to: [6.6, 0], label: "v", labelAt: "s", step: 2 },
            { kind: "vector", from: [4, 0.2], to: [4, 1.5], label: "F on +q", labelAt: "e", tone: "good", step: 3 },
            { kind: "vector", from: [4, -0.25], to: [4, -1.3], label: "F on −q", labelAt: "e", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "No work, no change of speed",
        points: [
          t`The force is always at right angles to the velocity.`,
          t`In a time $dt$ the charge moves $d\vec{r} = \vec{v}\,dt$, so the work is $dW = \vec{F} \cdot \vec{v}\,dt$.`,
          t`$\left(\vec{v} \times \vec{B}\right) \cdot \vec{v} = 0$, so $dW = 0$ at every instant.`,
          t`The kinetic energy $\tfrac{1}{2}mv^2$ and the speed stay the same.`,
          t`Only the direction of the velocity changes: the path bends.`,
        ],
      },
      {
        title: "The unit of B: the tesla",
        points: [
          t`From $F = qvB$, $B = \dfrac{F}{qv}$ for motion at right angles to the field.`,
          t`$1\ \mathrm{T}$ is the field that pushes $1\ \mathrm{N}$ on $1\ \mathrm{C}$ moving at $1\ \mathrm{m/s}$ across it.`,
          t`So $1\ \mathrm{T} = 1\ \mathrm{N\,s/(C\,m)} = 1\ \mathrm{N/(A\,m)}$.`,
          t`The **weber** ($\mathrm{Wb}$) is the unit of magnetic flux $\Phi = BA$, so $1\ \mathrm{T} = 1\ \mathrm{Wb/m^2}$.`,
        ],
      },
      {
        title: "Electric and magnetic forces",
        points: [
          t`The electric force $q\vec{E}$ acts on a charge whether it is at rest or moving.`,
          t`The magnetic force acts only on a moving charge, and not along the field.`,
          t`$qE$ does not depend on the velocity; $qvB\sin\theta$ does.`,
          t`$q\vec{E}$ acts along $\vec{E}$ and can do work; $q\vec{v} \times \vec{B}$ is at right angles to $\vec{v}$ and does none.`,
          t`Together they make the **Lorentz force** $\vec{F} = q\left(\vec{E} + \vec{v} \times \vec{B}\right)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A negative charge moves along $-z$ through a uniform field along $+y$. Find the direction of the magnetic force on it.`,
      steps: [
        t`$\vec{v}$ is along $-\hat{z}$ and $\vec{B}$ along $+\hat{y}$.`,
        t`$\vec{v} \times \vec{B}$ points along $\left(-\hat{z}\right) \times \hat{y}$ $= -\left(\hat{z} \times \hat{y}\right)$.`,
        t`$\hat{z} \times \hat{y} = -\hat{x}$, so $\vec{v} \times \vec{B}$ is along $+\hat{x}$.`,
        t`The charge is negative, so the force is opposite to $\vec{v} \times \vec{B}$: along $-x$.`,
      ],
      answer: t`Along $-x$`,
    },
    visualSpec: t`Drag the velocity arrow of a charge in a field into the page and watch the force arrow swing to stay at right angles; flip the charge's sign to reverse it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Treats the magnetic force like the electric force: along the field (against it for a negative charge).",
      remediation: t`An electric force acts along $\vec{E}$, but the magnetic force $q\vec{v} \times \vec{B}$ is at right angles to $\vec{B}$, and also to $\vec{v}$.`,
      fallback: { kind: "ext", topic: "magnetic field and the vector product (Std XI Physics)" },
    },
    {
      id: "C01-M2",
      mistake: "Ignores the sign of the charge when finding the direction.",
      remediation: t`$\vec{v} \times \vec{B}$ gives the force on a positive charge. On a negative charge the force is the other way.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks the magnetic force acts along the motion and speeds the charge up.",
      remediation: t`The force is always at right angles to $\vec{v}$. It does no work, so the speed never changes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Uses $\cos\theta$ in place of $\sin\theta$.`,
      remediation: t`The size of $\vec{v} \times \vec{B}$ is $vB\sin\theta$: the force is zero along the field and greatest across it.`,
      fallback: { kind: "ext", topic: "magnetic field and the vector product (Std XI Physics)" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks the magnetic force opposes the motion, like a drag, and slows the charge.",
      remediation: t`The force is at right angles to $\vec{v}$, never against it. It turns the charge and leaves its speed unchanged.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Uses the field in $\mathrm{mT}$ as if it were in $\mathrm{T}$.`,
      remediation: t`Convert to SI first: $1\ \mathrm{mT} = 10^{-3}\ \mathrm{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Drops the $\sin\theta$ and takes $qvB$ at every angle.`,
      remediation: t`Only the part of $\vec{v}$ across the field counts: $F = qvB\sin\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: t`Takes $\mathrm{Wb\,m^{-2}}$ for the henry.`,
      remediation: t`The henry, $1\ \mathrm{Wb/A}$, is the unit of inductance. Flux per unit area, $\mathrm{Wb/m^2}$, is the field $B$: the tesla.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: t`Takes $\mathrm{Wb\,m^{-2}}$ for the weber, the unit of flux itself.`,
      remediation: t`The weber measures flux $\Phi$. Dividing by an area gives flux density $B = \dfrac{\Phi}{A}$, in tesla.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks a force that does no work cannot change the motion at all.",
      remediation: "No work means no change of speed. The force still changes the direction of the velocity, so the path bends.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Solved Ex.10.1" },
      stem: t`A negatively charged particle moves along the $-x$ direction through a uniform magnetic field directed along the $-z$ direction. In which direction is the magnetic force on it?`,
      verify: { kind: "value", inputs: { vx: "-1", vy: "0", vz: "0", Bx: "0", By: "0", Bz: "-1", q: "-1" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`Along $+y$`, correct: true, value: "py" },
        { key: "B", text: t`Along $-y$`, correct: false, misconceptionId: "C01-M2", value: "ny" },
        { key: "C", text: t`Along $+z$`, correct: false, misconceptionId: "C01-M1", value: "pz" },
        { key: "D", text: t`Along $-x$`, correct: false, misconceptionId: "C01-M3", value: "nx" },
      ],
      solution: {
        steps: [
          t`$\vec{v} \times \vec{B}$ is along $\left(-\hat{x}\right) \times \left(-\hat{z}\right)$ $= \hat{x} \times \hat{z} = -\hat{y}$.`,
          t`The charge is negative, so the force is opposite to $\vec{v} \times \vec{B}$: along $+y$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`A proton ($q = 1.6 \times 10^{-19}\ \mathrm{C}$) moves at $3.0 \times 10^{6}\ \mathrm{m/s}$ at $30^\circ$ to a uniform magnetic field of $40\ \mathrm{mT}$. What is the size of the magnetic force on it?`,
      verify: { kind: "value", inputs: { q: "1.6e-19", v: "3.0e6", B_mT: "40", th: "30" }, params: { ask: "F" } },
      options: [
        { key: "A", text: t`$9.6 \times 10^{-15}\ \mathrm{N}$`, correct: true, value: "9.60000000000000e-15" },
        { key: "B", text: t`$1.66 \times 10^{-14}\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M4", value: "1.66000000000000e-14" },
        { key: "C", text: t`$1.92 \times 10^{-14}\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M7", value: "1.92000000000000e-14" },
        { key: "D", text: t`$9.6 \times 10^{-12}\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M6", value: "9.60000000000000e-12" },
      ],
      solution: {
        steps: [
          t`$B = 40\ \mathrm{mT} = 0.040\ \mathrm{T}$ and $\sin 30^\circ = 0.5$.`,
          t`$F = qvB\sin\theta$ $= 1.6 \times 10^{-19} \times 3.0 \times 10^{6} \times 0.040 \times 0.5$.`,
          t`$F = 9.6 \times 10^{-15}\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.2(iii)" },
      stem: t`A charged particle moves through a uniform magnetic field that is perpendicular to its velocity. What is the work done on it by the magnetic force?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "work" } },
      options: [
        { key: "A", text: t`Negative: the force holds it back, so it slows down`, correct: false, misconceptionId: "C01-M5", value: "negative" },
        { key: "B", text: t`Zero: so it carries on in a straight line, unaffected`, correct: false, misconceptionId: "C01-M10", value: "zero_straight" },
        { key: "C", text: t`Zero: its speed stays the same and only its direction changes`, correct: true, value: "zero_turns" },
        { key: "D", text: t`Positive: the force pushes it along, so it speeds up`, correct: false, misconceptionId: "C01-M3", value: "positive" },
      ],
      solution: {
        steps: [
          t`$\vec{F} = q\vec{v} \times \vec{B}$ is at right angles to $\vec{v}$ at every instant.`,
          t`So $dW = \vec{F} \cdot \vec{v}\,dt = 0$: the work done is zero.`,
          t`The speed and kinetic energy stay the same, but the force still turns the velocity, so the path bends.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Ch.10 Q.1" },
      stem: t`Which of these is true of the magnetic force on a charge, but not of the electric force?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "elec" } },
      options: [
        { key: "A", text: t`It is zero on a charge at rest, and on one moving along the field`, correct: true, value: "rest_zero" },
        { key: "B", text: t`It acts along the field, or against it for a negative charge`, correct: false, misconceptionId: "C01-M1", value: "along_B" },
        { key: "C", text: t`Its size $qvB$ does not depend on the direction of motion`, correct: false, misconceptionId: "C01-M7", value: "no_angle" },
        { key: "D", text: t`It acts along the velocity, so it changes the speed`, correct: false, misconceptionId: "C01-M3", value: "along_v" },
      ],
      solution: {
        steps: [
          t`$q\vec{E}$ acts on a charge at rest; $q\vec{v} \times \vec{B}$ is zero when $v = 0$.`,
          t`It is also zero when $\vec{v}$ is along $\vec{B}$, since $\sin 0^\circ = 0$.`,
          t`The magnetic force is at right angles to $\vec{B}$ and $\vec{v}$, and its size depends on the angle.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.1(vi)" },
      stem: t`The unit $\mathrm{Wb\,m^{-2}}$ is equal to`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`the tesla`, correct: true, value: "tesla" },
        { key: "B", text: t`the weber`, correct: false, misconceptionId: "C01-M9", value: "weber" },
        { key: "C", text: t`the henry`, correct: false, misconceptionId: "C01-M8", value: "henry" },
        { key: "D", text: t`the newton per coulomb, $\mathrm{N/C}$`, correct: false, misconceptionId: "C01-M1", value: "N_per_C" },
      ],
      solution: {
        steps: [
          t`Flux through an area $A$ across a field $B$ is $\Phi = BA$, so $B = \dfrac{\Phi}{A}$.`,
          t`$\Phi$ is in $\mathrm{Wb}$, so $B$ is in $\mathrm{Wb/m^2}$, which is the tesla.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`An electron moves to the right in the plane of the page, through a uniform magnetic field directed into the page (see the figure). In which direction is the magnetic force on it?`,
      figure: {
        alt: "A region of uniform magnetic field into the page, shown by rows of crosses. An electron, marked e⁻, at the left moves to the right, shown by an arrow v.",
        axes: "none",
        view: { x: [0, 10], y: [-2.4, 2.4] },
        elements: [
          { kind: "label", at: [1, -1.6], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [1, 1.4], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [3, -1.6], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [3, 1.4], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [5, -1.6], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [5, 1.4], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [7, -1.6], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [7, 1.4], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [9, -1.6], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "label", at: [9, 1.4], label: "⊗", labelAt: "n", tone: "muted" },
          { kind: "point", at: [2, 0], label: "e⁻", labelAt: "w" },
          { kind: "vector", from: [2.3, 0], to: [5, 0], label: "v", labelAt: "n" },
        ],
      },
      verify: { kind: "value", inputs: { vx: "1", vy: "0", vz: "0", Bx: "0", By: "0", Bz: "-1", q: "-1" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`Out of the page`, correct: false, misconceptionId: "C01-M1", value: "pz" },
        { key: "B", text: t`To the left`, correct: false, misconceptionId: "C01-M5", value: "nx" },
        { key: "C", text: t`Towards the bottom of the page`, correct: true, value: "ny" },
        { key: "D", text: t`Towards the top of the page`, correct: false, misconceptionId: "C01-M2", value: "py" },
      ],
      solution: {
        steps: [
          t`Take $+x$ to the right, $+y$ up the page and $+z$ out of it: $\vec{v}$ is along $+\hat{x}$, $\vec{B}$ along $-\hat{z}$.`,
          t`$\vec{v} \times \vec{B}$ is along $\hat{x} \times \left(-\hat{z}\right) = +\hat{y}$, the top of the page.`,
          t`The electron is negative, so the force is the other way: towards the bottom of the page.`,
        ],
      },
    },
  ],
};
