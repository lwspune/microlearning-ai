import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`A car's two headlights far away merge into one blob of light; as it comes nearer they split into two. What decides the distance at which you first see two?`,
    reveal: t`Diffraction. Each light makes a small diffraction pattern in your eye, not a sharp point. You see two only when the patterns are far enough apart: Rayleigh's criterion.`,
  },
  explanation: {
    intuition: [
      t`Light through any opening, a lens or the pupil, diffracts: a point source forms a small bright disc with faint rings.`,
      t`Two close sources form two such patterns, which overlap.`,
      t`If they overlap too much, they look like one: the sources are not **resolved**.`,
      t`A wider opening or a shorter wavelength makes each pattern smaller, so closer sources can be told apart.`,
      t`Magnifying the blurred image more does not help: the blur is magnified too.`,
    ],
    formal: [
      {
        title: "Rayleigh's criterion",
        points: [
          t`Two point sources are **just resolved** when the central maximum of one falls on the first minimum of the other.`,
          t`The **limit of resolution** is the smallest separation, or angle, that can be resolved.`,
          t`The **resolving power** is its reciprocal: a smaller limit means a greater resolving power.`,
        ],
      },
      {
        title: "Telescope",
        points: [
          t`For an objective of diameter $D$, the limit of resolution is $\theta = \dfrac{1.22\lambda}{D}$, in radians.`,
          t`The $1.22$ comes from the round aperture; $D$ is the diameter, not the radius.`,
          t`Resolving power $= \dfrac{1}{\theta} = \dfrac{D}{1.22\lambda}$: big objectives see finer detail.`,
        ],
      },
      {
        title: "Microscope",
        points: [
          t`The objective takes in light within a half-angle $\alpha$ of the object.`,
          t`The least distance it can resolve is $d_{\min} = \dfrac{0.61\lambda}{\sin\alpha}$.`,
          t`A shorter wavelength, as in an electron microscope, resolves finer detail.`,
        ],
      },
    ],
    worked: {
      prompt: t`The pupil of an eye is $3\ \mathrm{mm}$ across. Taking $\lambda = 600\ \mathrm{nm}$, find its limit of resolution, and how far apart two points $10\ \mathrm{m}$ away must be to be seen as two.`,
      steps: [
        t`$\theta = \dfrac{1.22\lambda}{D} = \dfrac{1.22 \times 6 \times 10^{-7}}{3 \times 10^{-3}}$.`,
        t`$\theta \approx 2.44 \times 10^{-4}\ \mathrm{rad}$.`,
        t`At $10\ \mathrm{m}$ the points must be $10\theta \approx 2.4 \times 10^{-3}\ \mathrm{m}$ apart, about $2.4\ \mathrm{mm}$.`,
      ],
      answer: t`$2.44 \times 10^{-4}\ \mathrm{rad}$; about $2.4\ \mathrm{mm}$ apart`,
    },
    visualSpec: t`Slide two point sources together and watch their diffraction patterns merge, with the just-resolved position marked.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: t`Leaves out the $1.22$ (or the $0.61$).`,
      remediation: t`Rayleigh's criterion for a round aperture gives $\theta = \dfrac{1.22\lambda}{D}$, and $d_{\min} = \dfrac{0.61\lambda}{\sin\alpha}$ for a microscope.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M2",
      mistake: "Uses the radius of the objective.",
      remediation: t`$D$ in $\dfrac{1.22\lambda}{D}$ is the diameter of the objective.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M3",
      mistake: "Gives the resolving power instead of the limit of resolution.",
      remediation: t`The limit is the small angle $\dfrac{1.22\lambda}{D}$; the resolving power is its reciprocal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M4",
      mistake: "Leaves the diameter in inches.",
      remediation: t`Convert to metres first: $200$ inches $= 200 \times 2.54\ \mathrm{cm} = 5.08\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M5",
      mistake: t`Uses $1.22$ instead of $0.61$ for a microscope.`,
      remediation: t`For a microscope $d_{\min} = \dfrac{1.22\lambda}{2\sin\alpha} = \dfrac{0.61\lambda}{\sin\alpha}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M6",
      mistake: t`Multiplies by $\sin\alpha$ instead of dividing.`,
      remediation: t`A wider cone of light resolves finer detail: $d_{\min} = \dfrac{0.61\lambda}{\sin\alpha}$ shrinks as $\alpha$ grows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M7",
      mistake: "Thinks a smaller objective resolves better.",
      remediation: t`$\theta = \dfrac{1.22\lambda}{D}$: a wider objective gives a smaller limit, so a higher resolving power.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M8",
      mistake: "Thinks a longer wavelength resolves better.",
      remediation: t`Longer waves diffract more: $\theta \propto \lambda$, so shorter wavelengths resolve finer detail.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C15-M9",
      mistake: "Thinks more magnification resolves better.",
      remediation: t`An eyepiece magnifies the diffraction blur too; only the objective's width and $\lambda$ set the resolution.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M10",
      mistake: "Thinks two images are just resolved when their central maxima coincide.",
      remediation: "Coinciding maxima look like one source; they must be separated by the angle to the first minimum.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M11",
      mistake: "Puts one central maximum on the other's first secondary maximum.",
      remediation: "Rayleigh's criterion uses the first minimum, the nearest dark ring, not the secondary maximum.",
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C15-M12",
      mistake: "Thinks the two patterns must not overlap at all.",
      remediation: "The patterns may overlap; the eye still sees two peaks once one maximum reaches the other's first minimum.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Solved Ex.7.7" },
      stem: t`A telescope has an objective $2.5\ \mathrm{m}$ in diameter. What is its limit of resolution for light of wavelength $5500\ \text{Å}$?`,
      verify: { kind: "value", inputs: { lam_A: "5500", D_m: "2.5" }, params: { ask: "tele" } },
      options: [
        { key: "A", text: t`$5.37 \times 10^{-7}\ \mathrm{rad}$`, correct: false, misconceptionId: "C15-M2", value: "5.37000000000000e-7" },
        { key: "B", text: t`$3.73 \times 10^{6}\ \mathrm{rad}$`, correct: false, misconceptionId: "C15-M3", value: "3730000" },
        { key: "C", text: t`$2.68 \times 10^{-7}\ \mathrm{rad}$`, correct: true, value: "2.68000000000000e-7" },
        { key: "D", text: t`$2.2 \times 10^{-7}\ \mathrm{rad}$`, correct: false, misconceptionId: "C15-M1", value: "2.20000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$\theta = \dfrac{1.22\lambda}{D} = \dfrac{1.22 \times 5.5 \times 10^{-7}}{2.5}$.`,
          t`$\theta \approx 2.68 \times 10^{-7}\ \mathrm{rad}$.`,
        ],
      },
    },
    {
      id: "C15-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.24" },
      stem: t`A star emits light of wavelength $5000\ \text{Å}$. What is the limit of resolution of a telescope whose objective is $200$ inches across? ($1$ inch $= 2.54\ \mathrm{cm}$.)`,
      verify: { kind: "value", inputs: { lam_A: "5000", D_in: "200" }, params: { ask: "tele_in" } },
      options: [
        { key: "A", text: t`$9.84 \times 10^{-8}\ \mathrm{rad}$`, correct: false, misconceptionId: "C15-M1", value: "9.84000000000000e-8" },
        { key: "B", text: t`$2.4 \times 10^{-7}\ \mathrm{rad}$`, correct: false, misconceptionId: "C15-M2", value: "2.40000000000000e-7" },
        { key: "C", text: t`$3.05 \times 10^{-9}\ \mathrm{rad}$`, correct: false, misconceptionId: "C15-M4", value: "3.05000000000000e-9" },
        { key: "D", text: t`$1.2 \times 10^{-7}\ \mathrm{rad}$`, correct: true, value: "1.20000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$D = 200 \times 2.54\ \mathrm{cm} = 5.08\ \mathrm{m}$, and $\lambda = 5 \times 10^{-7}\ \mathrm{m}$.`,
          t`$\theta = \dfrac{1.22 \times 5 \times 10^{-7}}{5.08} \approx 1.2 \times 10^{-7}\ \mathrm{rad}$.`,
        ],
      },
    },
    {
      id: "C15-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Solved Ex.7.8" },
      stem: t`A microscope's objective takes in light within a half-angle of $30^\circ$. Using light of wavelength $500\ \mathrm{nm}$, what is the least distance between two objects it can resolve?`,
      verify: { kind: "value", inputs: { lam_nm: "500", alpha_deg: "30" }, params: { ask: "micro" } },
      options: [
        { key: "A", text: t`$1.22 \times 10^{-6}\ \mathrm{m}$`, correct: false, misconceptionId: "C15-M5", value: "1.22000000000000e-6" },
        { key: "B", text: t`$1.52 \times 10^{-7}\ \mathrm{m}$`, correct: false, misconceptionId: "C15-M6", value: "1.52000000000000e-7" },
        { key: "C", text: t`$6.1 \times 10^{-7}\ \mathrm{m}$`, correct: true, value: "6.10000000000000e-7" },
        { key: "D", text: t`$1 \times 10^{-6}\ \mathrm{m}$`, correct: false, misconceptionId: "C15-M1", value: "1.00000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$d_{\min} = \dfrac{0.61\lambda}{\sin\alpha} = \dfrac{0.61 \times 5 \times 10^{-7}}{\sin 30^\circ}$.`,
          t`$d_{\min} = \dfrac{3.05 \times 10^{-7}}{0.5} = 6.1 \times 10^{-7}\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C15-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.12" },
      stem: t`Which change increases the resolving power of a telescope?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "better" } },
      options: [
        { key: "A", text: t`A wider objective, used with longer wavelengths`, correct: false, misconceptionId: "C15-M8", value: "wide_long" },
        { key: "B", text: t`An eyepiece of higher magnification`, correct: false, misconceptionId: "C15-M9", value: "eyepiece" },
        { key: "C", text: t`A wider objective, used with shorter wavelengths`, correct: true, value: "wide_short" },
        { key: "D", text: t`A narrower objective, used with shorter wavelengths`, correct: false, misconceptionId: "C15-M7", value: "narrow_short" },
      ],
      solution: {
        steps: [
          t`Resolving power $= \dfrac{D}{1.22\lambda}$.`,
          t`It grows with a wider objective and a shorter wavelength; the eyepiece does not change it.`,
        ],
      },
    },
    {
      id: "C15-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.12" },
      stem: t`By Rayleigh's criterion, when are the images of two point sources just resolved?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rayleigh" } },
      options: [
        { key: "A", text: t`When the central maximum of one falls on the first secondary maximum of the other`, correct: false, misconceptionId: "C15-M11", value: "max_on_secondary" },
        { key: "B", text: t`Only when the two diffraction patterns do not overlap at all`, correct: false, misconceptionId: "C15-M12", value: "no_overlap" },
        { key: "C", text: t`When the central maximum of one falls on the first minimum of the other`, correct: true, value: "max_on_min" },
        { key: "D", text: t`When their central maxima coincide`, correct: false, misconceptionId: "C15-M10", value: "coincide" },
      ],
      solution: {
        steps: [
          t`Each point gives a diffraction pattern: a central maximum ringed by a first minimum.`,
          t`They are just resolved when one's central maximum lies on the other's first minimum.`,
        ],
      },
    },
  ],
};
