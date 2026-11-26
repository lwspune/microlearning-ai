import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`Young needed two slits to make coherent light. Fresnel managed with one slit and a single piece of glass. How can one slit give two coherent sources?`,
    reveal: t`A **biprism** bends the light from one slit two ways. To the eye it seems to come from two images of the slit, side by side: two virtual sources, copies of one, so always coherent.`,
  },
  explanation: {
    intuition: [
      t`A **Fresnel biprism** is two thin prisms joined base to base: its obtuse angle is nearly $180^\circ$.`,
      t`Light from a narrow slit passing through the upper half bends down; through the lower half, up.`,
      t`The two beams seem to come from two virtual images of the slit, $S_1$ and $S_2$.`,
      t`Both come from one slit, so they are coherent, and they overlap to form fringes.`,
      t`Measuring the fringe width $W$, the source gap $d$ and the distance $D$ gives $\lambda$.`,
    ],
    formal: [
      {
        title: "The wavelength",
        points: [
          t`The virtual sources act like Young's two slits: $W = \dfrac{\lambda D}{d}$.`,
          t`So $\lambda = \dfrac{Wd}{D}$, with $D$ the distance from the slit to the eyepiece's focal plane.`,
          t`$W$ is measured by counting fringes: if the $n$th bright band is $x_n$ from the centre, $W = \dfrac{x_n}{n}$.`,
        ],
      },
      {
        title: "Finding the source gap",
        points: [
          t`A convex lens between biprism and eyepiece forms real images of $S_1$ and $S_2$.`,
          t`With the lens $u$ from the sources and $v$ from the eyepiece, the images are $d_1 = d\dfrac{v}{u}$ apart.`,
          t`Moving the lens to the other position gives images $d_2 = d\dfrac{u}{v}$ apart.`,
          t`Multiplying, $d = \sqrt{d_1d_2}$, with no need to know $u$ or $v$.`,
        ],
      },
      {
        title: "From the prism itself",
        points: [
          t`Each half of the biprism is a thin prism of angle $\alpha = \dfrac{180^\circ - A}{2}$, where $A$ is the obtuse angle.`,
          t`It deviates light by $\delta = (\mu - 1)\alpha$.`,
          t`A slit $a$ from the biprism then gives virtual sources $d = 2a(\mu - 1)\alpha$ apart, with $\alpha$ in radians.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a biprism experiment the eyepiece is $100\ \mathrm{cm}$ from the slit, and $10$ fringes span $5\ \mathrm{mm}$. A convex lens gives images of the virtual sources $3.6\ \mathrm{mm}$ apart in one position and $0.4\ \mathrm{mm}$ apart in the other. Find $\lambda$.`,
      steps: [
        t`$W = \dfrac{5}{10}$ $= 0.5\ \mathrm{mm}$.`,
        t`$d = \sqrt{d_1d_2}$ $= \sqrt{3.6 \times 0.4}$ $= 1.2\ \mathrm{mm}$.`,
        t`$\lambda = \dfrac{Wd}{D}$ $= \dfrac{0.5 \times 10^{-3} \times 1.2 \times 10^{-3}}{1}$.`,
        t`$\lambda$ $= 6 \times 10^{-7}\ \mathrm{m}$ $= 600\ \mathrm{nm}$.`,
      ],
      answer: t`$600\ \mathrm{nm}$`,
    },
    visualSpec: t`Show the rays from one slit splitting at the biprism and tracing back to two virtual sources whose overlap paints the fringes.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Takes the $n$th band's distance from the centre as the fringe width.`,
      remediation: t`The $n$th bright band is $n$ fringe widths out: $W = \dfrac{x_n}{n}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: t`Takes the separation of the lens images as $d$.`,
      remediation: t`The lens magnifies the virtual sources: $d = d_1\dfrac{u}{v}$, not $d_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Multiplies by the magnification instead of dividing.",
      remediation: t`The images are the sources magnified $\dfrac{v}{u}$ times, so divide: $d = d_1\dfrac{u}{v}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Takes the distance as inversely proportional when it is directly proportional.",
      remediation: t`$x_n = \dfrac{n\lambda D}{d}$: both the band number and $\lambda$ enter on top.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C12-M5",
      mistake: "Thinks a band's distance depends only on the set-up, not on its number.",
      remediation: t`Bands are equally spaced: the 30th is $\dfrac{30}{20}$ times as far out as the 20th.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Gives the gap between the two bands instead of the distance from the centre.",
      remediation: t`The question asks how far from the central band: $x_{30} = 30W$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Gives the new fringe width instead of the change.",
      remediation: "Find the new fringe width, then subtract it from the old one.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: t`Takes the fringe width as proportional to $\lambda^2$.`,
      remediation: t`$W = \dfrac{\lambda D}{d}$: $W$ goes as $\lambda$ itself.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M9",
      mistake: "Leaves the change in fringe width in mm.",
      remediation: t`With $\lambda$ in m, put $\Delta W$ in m: $1.3\ \mathrm{mm}$ $= 1.3 \times 10^{-3}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M10",
      mistake: t`Turns $d$ $= \dfrac{\lambda\Delta D}{\Delta W}$ upside down.`,
      remediation: t`$\Delta W$ $= \dfrac{\lambda\Delta D}{d}$, so $d$ $= \dfrac{\lambda\Delta D}{\Delta W}$: a small gap, a fraction of a mm.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M11",
      mistake: "Leaves the screen's shift in cm.",
      remediation: t`Put $\Delta D$ in metres: $50\ \mathrm{cm} = 0.5\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M12",
      mistake: t`Takes each half's angle as $180^\circ - A$ instead of half of it.`,
      remediation: t`The $1^\circ$ left over from $179^\circ$ is shared between the two base angles: $\alpha = 0.5^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M13",
      mistake: t`Forgets the 2 in $d = 2a(\mu - 1)\alpha$.`,
      remediation: t`Each virtual source is displaced $a\delta$ from the slit, on opposite sides: $d = 2a\delta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M14",
      mistake: t`Uses $\mu$ instead of $\mu - 1$ in the deviation.`,
      remediation: t`A thin prism deviates light by $\delta = (\mu - 1)\alpha$; glass with $\mu = 1$ would not bend it at all.`,
      fallback: { kind: "ext", topic: "deviation by a thin prism (Std XI Physics)" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.18" },
      stem: t`In a biprism experiment the fringes are observed $1.2\ \mathrm{m}$ from the slit, and the 20th bright band is $0.4\ \mathrm{cm}$ from the central bright band. A convex lens placed between the biprism and the eyepiece, $90\ \mathrm{cm}$ from the eyepiece, gives two magnified images of the slit $0.9\ \mathrm{cm}$ apart. What is the wavelength of the light?`,
      verify: { kind: "value", inputs: { D_cm: "120", n: "20", x_cm: "0.4", s_cm: "0.9", v_cm: "90" }, params: { ask: "lam_lens" } },
      options: [
        { key: "A", text: t`$10000\ \mathrm{nm}$`, correct: false, misconceptionId: "C12-M1", value: "10000" },
        { key: "B", text: t`$1500\ \mathrm{nm}$`, correct: false, misconceptionId: "C12-M2", value: "1500" },
        { key: "C", text: t`$4500\ \mathrm{nm}$`, correct: false, misconceptionId: "C12-M3", value: "4500" },
        { key: "D", text: t`$500\ \mathrm{nm}$`, correct: true, value: "500" },
      ],
      solution: {
        steps: [
          t`$W = \dfrac{0.4}{20}$ $= 0.02\ \mathrm{cm}$.`,
          t`The lens is $120 - 90 = 30\ \mathrm{cm}$ from the sources, so the images are magnified $\dfrac{90}{30} = 3$ times: $d = \dfrac{0.9}{3}$ $= 0.3\ \mathrm{cm}$.`,
          t`$\lambda = \dfrac{Wd}{D}$ $= \dfrac{0.02 \times 0.3}{120}$ $= 5 \times 10^{-5}\ \mathrm{cm}$ $= 500\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(x)" },
      stem: t`In a biprism experiment the 20th bright band is $1.2\ \mathrm{cm}$ from the central bright band. With the set-up unchanged, how far from the central band is the 30th bright band?`,
      verify: { kind: "value", inputs: { n: "20", x_cm: "1.2", m: "30" }, params: { ask: "band" } },
      options: [
        { key: "A", text: t`$0.6\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M6", value: "0.600000000000000" },
        { key: "B", text: t`$1.8\ \mathrm{cm}$`, correct: true, value: "1.80000000000000" },
        { key: "C", text: t`$0.8\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M4", value: "0.800000000000000" },
        { key: "D", text: t`$1.2\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M5", value: "1.20000000000000" },
      ],
      solution: {
        steps: [
          t`Bright bands are equally spaced: $x_n = nW$, so $x_{30} = \dfrac{30}{20}x_{20}$.`,
          t`$x_{30} = 1.5 \times 1.2$ $= 1.8\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.25" },
      stem: t`In a biprism experiment with light of wavelength $6000\ \text{Å}$ the fringe width is $0.32\ \mathrm{mm}$. By how much does it change when light of wavelength $4800\ \text{Å}$ is used instead?`,
      verify: { kind: "value", inputs: { W_mm: "0.32", l1: "6000", l2: "4800" }, params: { ask: "dW" } },
      options: [
        { key: "A", text: t`$0.115\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M8", value: "0.115000000000000" },
        { key: "B", text: t`$0.064\ \mathrm{mm}$`, correct: true, value: "0.0640000000000000" },
        { key: "C", text: t`$0.08\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M4", value: "0.0800000000000000" },
        { key: "D", text: t`$0.256\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M7", value: "0.256000000000000" },
      ],
      solution: {
        steps: [
          t`$W \propto \lambda$: $W_2$ $= 0.32 \times \dfrac{4800}{6000}$ $= 0.256\ \mathrm{mm}$.`,
          t`The change is $0.32 - 0.256 = 0.064\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.7(iii)" },
      stem: t`In a biprism experiment with light of wavelength $5200\ \text{Å}$, the fringe width changes by $1.3\ \mathrm{mm}$ when the screen is moved $50\ \mathrm{cm}$ towards the biprism. What is the distance between the two virtual images of the slit?`,
      verify: { kind: "value", inputs: { lam_A: "5200", dW_mm: "1.3", dD_cm: "50" }, params: { ask: "d_shift" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M11", value: "20" },
        { key: "B", text: t`$0.2\ \mathrm{mm}$`, correct: true, value: "0.200000000000000" },
        { key: "C", text: t`$2 \times 10^{-4}\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M9", value: "0.000200000000000000" },
        { key: "D", text: t`$1.25 \times 10^{6}\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M10", value: "1250000" },
      ],
      solution: {
        steps: [
          t`$W = \dfrac{\lambda D}{d}$, so $\Delta W$ $= \dfrac{\lambda\Delta D}{d}$.`,
          t`$d$ $= \dfrac{\lambda\Delta D}{\Delta W}$ $= \dfrac{5.2 \times 10^{-7} \times 0.5}{1.3 \times 10^{-3}}$.`,
          t`$d = 2 \times 10^{-4}\ \mathrm{m}$ $= 0.2\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Solved Ex.7.5" },
      stem: t`A biprism of glass ($\mu = 1.5$) has an obtuse angle of $179^\circ$ and is placed $10\ \mathrm{cm}$ from the slit. How far apart are the two virtual sources?`,
      verify: { kind: "value", inputs: { A_deg: "179", mu: "1.5", a_cm: "10" }, params: { ask: "d_prism" } },
      options: [
        { key: "A", text: t`$0.436\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M13", value: "0.436000000000000" },
        { key: "B", text: t`$2.62\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M14", value: "2.62000000000000" },
        { key: "C", text: t`$0.873\ \mathrm{mm}$`, correct: true, value: "0.873000000000000" },
        { key: "D", text: t`$1.75\ \mathrm{mm}$`, correct: false, misconceptionId: "C12-M12", value: "1.75000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha$ $= \dfrac{180^\circ - 179^\circ}{2}$ $= 0.5^\circ$ $= 0.00873\ \mathrm{rad}$.`,
          t`$d = 2a(\mu - 1)\alpha$ $= 2 \times 10 \times 0.5 \times 0.00873$.`,
          t`$d \approx 0.0873\ \mathrm{cm}$ $= 0.873\ \mathrm{mm}$.`,
        ],
      },
    },
  ],
};
