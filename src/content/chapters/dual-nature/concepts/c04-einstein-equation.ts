import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Shine faint ultraviolet light on zinc and electrons fly out at once. Shine a blinding red beam and none come out at all. A wave picture of light cannot explain this. What does?`,
    reveal: t`Einstein's idea: each electron is freed by one photon. The photon's energy $h\nu$ must at least pay the **work function** $\phi_0$; anything left over is the electron's kinetic energy: $\dfrac{1}{2}mv_{max}^2$ $= h\nu - \phi_0$.`,
  },
  explanation: {
    intuition: [
      t`An electron in a metal is held in by an energy barrier, the **work function** $\phi_0$.`,
      t`A photon gives all its energy $h\nu$ to one electron, at once.`,
      t`If $h\nu < \phi_0$, no electron escapes, however many photons arrive.`,
      t`If $h\nu > \phi_0$, the electron escapes with at most $h\nu - \phi_0$ of kinetic energy.`,
      t`A brighter beam means more photons, so more electrons, but not faster ones.`,
    ],
    formal: [
      {
        title: "Einstein's equation",
        points: [
          t`$h\nu$ $= \phi_0 + \dfrac{1}{2}mv_{max}^2$: the photon's energy pays the work function, and the rest is kinetic energy.`,
          t`The **threshold frequency** $\nu_0$ is the least that ejects electrons: $\phi_0 = h\nu_0$ $= \dfrac{hc}{\lambda_0}$.`,
          t`So $K_{max}$ $= h\left(\nu - \nu_0\right)$ $= hc\left(\dfrac{1}{\lambda} - \dfrac{1}{\lambda_0}\right)$.`,
        ],
      },
      {
        title: "Stopping potential",
        points: [
          t`The **stopping potential** $V_0$ just stops the fastest electrons: $eV_0 = K_{max}$.`,
          t`A $K_{max}$ of $1.5\ \mathrm{eV}$ means $V_0 = 1.5\ \mathrm{V}$.`,
          t`$K_{max}$ grows with $\nu$ but not in proportion: doubling $\nu$ more than doubles it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Light of wavelength $400\ \mathrm{nm}$ falls on a metal of work function $2.0\ \mathrm{eV}$. Find the maximum kinetic energy of the photoelectrons and the stopping potential. (Take $hc$ $= 1.989 \times 10^{-25}\ \mathrm{J\,m}$, $1\ \mathrm{eV}$ $= 1.6 \times 10^{-19}\ \mathrm{J}$.)`,
      steps: [
        t`$h\nu = \dfrac{hc}{\lambda}$ $= \dfrac{1.989 \times 10^{-25}}{4 \times 10^{-7}}$ $\approx 4.97 \times 10^{-19}\ \mathrm{J} \approx 3.11\ \mathrm{eV}$.`,
        t`$K_{max} = h\nu - \phi_0$ $= 3.11 - 2.0$ $= 1.11\ \mathrm{eV}$.`,
        t`$eV_0 = K_{max}$, so $V_0 = 1.11\ \mathrm{V}$.`,
      ],
      answer: t`$K_{max} \approx 1.11\ \mathrm{eV}$; $V_0 \approx 1.11\ \mathrm{V}$`,
    },
    visualSpec: t`Raise the light's frequency past the threshold and watch electrons start to escape, faster as the frequency climbs, whatever the brightness.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Leaves the wavelengths in cm.",
      remediation: t`$1\ \mathrm{cm}$ $= 10^{-2}\ \mathrm{m}$: convert before using $\dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Adds the work function instead of subtracting it.",
      remediation: t`The work function is spent getting the electron out: $K_{max} = h\nu - \phi_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Forgets the work function.",
      remediation: t`Part of the photon's energy frees the electron; only $h\nu - \phi_0$ is left as kinetic energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Leaves the work function in eV.",
      remediation: t`$\phi_0$ $= 2.2 \times 1.6 \times 10^{-19}\ \mathrm{J}$ before dividing by $h$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: t`Turns $\dfrac{\phi_0}{h}$ upside down.`,
      remediation: t`$\phi_0 = h\nu_0$, so $\nu_0 = \dfrac{\phi_0}{h}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Gives the incident light's frequency instead of the threshold.",
      remediation: t`$\nu_0$ belongs to the metal: $\nu_0 = \dfrac{\phi_0}{h}$; the light's own frequency is $\dfrac{c}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks visible light cannot eject electrons.",
      remediation: t`Any photon with $h\nu > \phi_0$ will do; metals like caesium respond to visible light.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks a larger work function makes emission easier.",
      remediation: t`A larger $\phi_0$ needs more energetic photons; here the photon's $2.40\ \mathrm{eV}$ beats both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks emission depends on the light's intensity.",
      remediation: t`Whether an electron escapes depends on one photon's energy, $h\nu$; intensity only sets how many.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M10",
      mistake: t`Thinks $K_{max}$ is proportional to $\nu$.`,
      remediation: t`$K_{max} = h\nu - \phi_0$: doubling $\nu$ gives $2h\nu - \phi_0$, more than twice $h\nu - \phi_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: t`Thinks $K_{max}$ does not depend on $\nu$.`,
      remediation: t`$K_{max} = h\nu - \phi_0$ rises with $\nu$; it is intensity that leaves it unchanged.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Thinks $K_{max}$ grows less than in proportion.`,
      remediation: t`$2h\nu - \phi_0$ $= 2\left(h\nu - \phi_0\right) + \phi_0$: more than double.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Reads the volts as joules.",
      remediation: t`$K_{max} = eV_0$: multiply by $e$ to get joules, or read it as $1.5\ \mathrm{eV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: t`Divides by $e$ instead of multiplying.`,
      remediation: t`$K_{max} = eV_0$ $= 1.6 \times 10^{-19} \times 1.5\ \mathrm{J}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: t`Puts a $\dfrac{1}{2}$ into $eV_0$.`,
      remediation: t`The work done against the field is $eV_0$, all of the kinetic energy: no $\dfrac{1}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M16",
      mistake: "Leaves the radius in cm.",
      remediation: t`$r = 20\ \mathrm{cm}$ $= 0.20\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M17",
      mistake: t`Drops the $\dfrac{1}{2}$ in the kinetic energy.`,
      remediation: t`$K = \dfrac{1}{2}mv^2$, so $v = \sqrt{\dfrac{2K}{m}}$.`,
      fallback: { kind: "ext", topic: "circular motion in a magnetic field (Magnetic Fields due to Electric Current, Ch.10)" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.9" },
      stem: t`The threshold wavelength of tungsten is $2.76 \times 10^{-5}\ \mathrm{cm}$. What is the maximum kinetic energy of the electrons ejected by ultraviolet light of wavelength $1.80 \times 10^{-5}\ \mathrm{cm}$? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$, $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$.)`,
      verify: { kind: "value", inputs: { lam_cm: "1.8e-5", lam0_cm: "2.76e-5" }, params: { ask: "K_lam" } },
      options: [
        { key: "A", text: t`$11.4\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M2", value: "11.4000000000000" },
        { key: "B", text: t`$6.91\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M3", value: "6.91000000000000" },
        { key: "C", text: t`$2.4\ \mathrm{eV}$`, correct: true, value: "2.40000000000000" },
        { key: "D", text: t`$0.024\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M1", value: "0.0240000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda$ $= 1.8 \times 10^{-7}\ \mathrm{m}$: $\dfrac{hc}{\lambda} \approx 6.91\ \mathrm{eV}$. $\lambda_0$ $= 2.76 \times 10^{-7}\ \mathrm{m}$: $\phi_0 \approx 4.50\ \mathrm{eV}$.`,
          t`$K_{max} = 6.91 - 4.50$ $\approx 2.4\ \mathrm{eV}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.8.B(OR)" },
      stem: t`The work function of a metal surface is $2.2\ \mathrm{eV}$, and light of wavelength $5000\ \mathring{A}$ falls on it. What is the metal's threshold frequency? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$, $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$.)`,
      verify: { kind: "value", inputs: { phi_eV: "2.2", lam_A: "5000" }, params: { ask: "nu0" } },
      options: [
        { key: "A", text: t`$3.32 \times 10^{33}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C04-M4", value: "3320000000000000257419938627584000" },
        { key: "B", text: t`$1.88 \times 10^{-15}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C04-M5", value: "1.88000000000000e-15" },
        { key: "C", text: t`$6 \times 10^{14}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C04-M6", value: "600000000000000" },
        { key: "D", text: t`$5.31 \times 10^{14}\ \mathrm{Hz}$`, correct: true, value: "531000000000000" },
      ],
      solution: {
        steps: [
          t`$\phi_0$ $= 2.2 \times 1.6 \times 10^{-19}$ $= 3.52 \times 10^{-19}\ \mathrm{J}$.`,
          t`$\nu_0 = \dfrac{\phi_0}{h}$ $= \dfrac{3.52 \times 10^{-19}}{6.63 \times 10^{-34}}$ $\approx 5.31 \times 10^{14}\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.8(OR)" },
      stem: t`The work functions of potassium and caesium are $2.25\ \mathrm{eV}$ and $2.14\ \mathrm{eV}$. Light of wavelength $5180\ \mathring{A}$ falls on each. Which emits photoelectrons? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m/s}$, $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`Only potassium, whose work function is larger`, correct: false, misconceptionId: "C04-M8", value: "only_larger_phi" },
        { key: "B", text: t`It depends on how intense the light is`, correct: false, misconceptionId: "C04-M9", value: "intensity" },
        { key: "C", text: t`Both`, correct: true, value: "both_emit" },
        { key: "D", text: t`Neither: visible light cannot eject electrons`, correct: false, misconceptionId: "C04-M7", value: "neither_visible" },
      ],
      solution: {
        steps: [
          t`$\dfrac{hc}{\lambda}$ $= \dfrac{6.63 \times 10^{-34} \times 3 \times 10^8}{5.18 \times 10^{-7}}$ $\approx 3.84 \times 10^{-19}\ \mathrm{J} \approx 2.40\ \mathrm{eV}$.`,
          t`$2.40\ \mathrm{eV}$ exceeds both $2.25$ and $2.14\ \mathrm{eV}$, so both metals emit.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(vi)" },
      stem: t`Light falls on a photosensitive surface and ejects electrons. If the light's frequency is doubled, what becomes of the maximum kinetic energy of the photoelectrons?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "double" } },
      options: [
        { key: "A", text: t`It becomes exactly twice its first value`, correct: false, misconceptionId: "C04-M10", value: "twice" },
        { key: "B", text: t`It stays the same`, correct: false, misconceptionId: "C04-M11", value: "same_K" },
        { key: "C", text: t`It becomes less than twice its first value`, correct: false, misconceptionId: "C04-M12", value: "less_than_twice" },
        { key: "D", text: t`It becomes more than twice its first value`, correct: true, value: "more_than_twice" },
      ],
      solution: {
        steps: [
          t`First $K_1 = h\nu - \phi_0$; then $K_2 = 2h\nu - \phi_0$.`,
          t`$K_2 = 2K_1 + \phi_0$: more than twice $K_1$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.2(vii)" },
      stem: t`In a photoelectric experiment the stopping potential is $1.5\ \mathrm{V}$. What is the maximum kinetic energy of a photoelectron? (Take $e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { V0: "1.5" }, params: { ask: "K_V0" } },
      options: [
        { key: "A", text: t`$1.2 \times 10^{-19}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M15", value: "1.20000000000000e-19" },
        { key: "B", text: t`$2.4 \times 10^{-19}\ \mathrm{J}$`, correct: true, value: "2.40000000000000e-19" },
        { key: "C", text: t`$1.5\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M13", value: "1.50000000000000" },
        { key: "D", text: t`$9.38 \times 10^{18}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M14", value: "9380000000000000000" },
      ],
      solution: {
        steps: [
          t`$K_{max} = eV_0$ $= 1.6 \times 10^{-19} \times 1.5$.`,
          t`$K_{max}$ $= 2.4 \times 10^{-19}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.11" },
      stem: t`Light of wavelength $4500\ \mathring{A}$ falls on a metal of work function $2.0\ \mathrm{eV}$. In a magnetic field $B$, the fastest photoelectrons, moving at right angles to it, go round a circle of radius $20\ \mathrm{cm}$. What is $B$? (Take $m_e$ $= 9.1 \times 10^{-31}\ \mathrm{kg}$; $h$, $c$ and $e$ as usual.)`,
      verify: { kind: "value", inputs: { lam_A: "4500", phi_eV: "2.0", r_cm: "20" }, params: { ask: "B" } },
      options: [
        { key: "A", text: t`$1.47 \times 10^{-5}\ \mathrm{T}$`, correct: true, value: "1.47000000000000e-5" },
        { key: "B", text: t`$2.8 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M3", value: "2.80000000000000e-5" },
        { key: "C", text: t`$1.47 \times 10^{-7}\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M16", value: "1.47000000000000e-7" },
        { key: "D", text: t`$1.04 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M17", value: "1.04000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$\dfrac{hc}{\lambda} \approx 2.76\ \mathrm{eV}$, so $K_{max} \approx 0.76\ \mathrm{eV}$ $\approx 1.22 \times 10^{-19}\ \mathrm{J}$.`,
          t`$v = \sqrt{\dfrac{2K}{m}}$ $\approx 5.18 \times 10^5\ \mathrm{m/s}$.`,
          t`$B = \dfrac{mv}{er}$ $= \dfrac{9.1 \times 10^{-31} \times 5.18 \times 10^5}{1.6 \times 10^{-19} \times 0.20}$ $\approx 1.47 \times 10^{-5}\ \mathrm{T}$.`,
        ],
      },
    },
  ],
};
