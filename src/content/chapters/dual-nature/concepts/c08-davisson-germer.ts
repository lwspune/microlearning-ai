import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`De Broglie's matter waves were a bold guess in 1924. How could anyone check that an electron, a particle with mass and charge, really behaves as a wave?`,
    reveal: t`By making electrons diffract. In 1927 Davisson and Germer fired electrons at a nickel crystal and found a sharp peak at one angle, exactly where waves of the de Broglie wavelength would interfere.`,
  },
  explanation: {
    intuition: [
      t`Diffraction is the mark of a wave: waves spread and interfere after passing regular gaps.`,
      t`To diffract, the gaps must be about the size of the wavelength.`,
      t`Electrons accelerated through tens of volts have $\lambda$ about $10^{-10}\ \mathrm{m}$: the spacing of atoms in a crystal.`,
      t`So a crystal can act as a diffraction grating for electrons.`,
      t`Davisson and Germer found electrons scattered from nickel peaked at one angle, as waves would.`,
    ],
    formal: [
      {
        title: "The experiment",
        points: [
          t`An electron gun fires a narrow beam, accelerated through $V$, at a nickel crystal in a vacuum.`,
          t`A movable detector measures how many electrons are scattered at each angle $\phi$.`,
          t`At $V = 54\ \mathrm{V}$ a strong peak appeared at $\phi = 50^\circ$.`,
        ],
      },
      {
        title: "Theory and result agree",
        points: [
          t`The rows of nickel atoms are $d = 2.15\ \mathring{A}$ apart, so the peak gives $\lambda = d\sin\phi$ $\approx 1.65\ \mathring{A}$.`,
          t`De Broglie's formula for $54\ \mathrm{V}$ gives $\lambda$ $= \dfrac{1.227}{\sqrt{54}}\ \mathrm{nm}$ $\approx 1.67\ \mathring{A}$.`,
          t`The agreement confirmed that electrons are waves of the de Broglie wavelength: **matter has a dual nature**.`,
          t`A higher voltage gives a shorter $\lambda$, so the peak moves to a smaller angle.`,
        ],
      },
    ],
    worked: {
      prompt: t`Electrons accelerated through $150\ \mathrm{V}$ strike rows of atoms $2.15\ \mathring{A}$ apart. At what angle should the first peak appear?`,
      steps: [
        t`$\lambda \approx \dfrac{1.227}{\sqrt{150}}\ \mathrm{nm}$ $\approx 0.100\ \mathrm{nm}$ $= 1.00\ \mathring{A}$.`,
        t`$\sin\phi = \dfrac{\lambda}{d}$ $= \dfrac{1.00}{2.15}$ $\approx 0.466$.`,
        t`$\phi \approx 27.8^\circ$, smaller than the $50^\circ$ at $54\ \mathrm{V}$.`,
      ],
      answer: t`$\phi \approx 27.8^\circ$`,
    },
    visualSpec: t`Fire electrons at a crystal, sweep the detector round, and watch a peak appear at 50° when the voltage is 54 V.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Thinks it showed that light is made of particles.",
      remediation: "It was about electrons: it showed that particles of matter behave as waves.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Mixes it up with measuring the electron's charge.",
      remediation: "That was Millikan's oil-drop experiment; Davisson and Germer measured electron diffraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Mixes it up with the photoelectric effect.",
      remediation: "The photoelectric effect shows light as particles; this experiment shows electrons as waves.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Uses $\cos\phi$ instead of $\sin\phi$.`,
      remediation: t`For a row grating, $\lambda = d\sin\phi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Takes the atom spacing as the wavelength.",
      remediation: t`The spacing $d$ and the angle together fix $\lambda$: $\lambda = d\sin\phi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Uses $2d\sin\phi$.`,
      remediation: t`Here the surface rows act as a grating: $\lambda = d\sin\phi$, with $\phi$ measured from the beam.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: t`Forgets the $2$ in $\sqrt{2meV}$.`,
      remediation: t`$K = eV = \dfrac{p^2}{2m}$, so $p = \sqrt{2meV}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M8",
      mistake: t`Divides by $V$ where $\sqrt{V}$ belongs.`,
      remediation: t`$\lambda \approx \dfrac{1.227}{\sqrt{V}}\ \mathrm{nm}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M9",
      mistake: t`Uses the photon's $\dfrac{hc}{E}$ for electrons.`,
      remediation: t`Electrons have mass: $\lambda = \dfrac{h}{\sqrt{2meV}}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks the crystal's field bends the electrons like a lens.",
      remediation: "The peak appears at the angle where waves from the rows of atoms interfere, as with light and a grating.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks electrons diffract only from metals.",
      remediation: "Any regular array of the right spacing will do; nickel was simply a good crystal.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the crystal's gaps are far wider than the electron's wavelength.",
      remediation: t`Both are about $10^{-10}\ \mathrm{m}$: that is why the crystal can diffract the electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Thinks the peak moves to a larger angle.",
      remediation: t`A higher voltage means a shorter $\lambda$, and $\sin\phi = \dfrac{\lambda}{d}$ gets smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Thinks the angle does not change with the voltage.",
      remediation: t`$\lambda$ depends on $V$, and the angle on $\lambda$: $\sin\phi = \dfrac{\lambda}{d}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Thinks the peak disappears at a higher voltage.",
      remediation: t`The peak only moves, to a smaller angle, while $\lambda < d$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/dual-nature-12-phy/Ex Q.6" },
      stem: t`What did the Davisson-Germer experiment establish?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "why" } },
      options: [
        { key: "A", text: t`That electrons behave as waves`, correct: true, value: "electron_waves" },
        { key: "B", text: t`That light is made of particles`, correct: false, misconceptionId: "C08-M1", value: "light_particles" },
        { key: "C", text: t`The charge of the electron`, correct: false, misconceptionId: "C08-M2", value: "electron_charge" },
        { key: "D", text: t`That light can eject electrons from a metal`, correct: false, misconceptionId: "C08-M3", value: "photoemission" },
      ],
      solution: {
        steps: [
          t`Electrons scattered from a crystal formed a diffraction peak.`,
          t`Only waves diffract, so electrons behave as waves, of the de Broglie wavelength.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`In the Davisson-Germer experiment, rows of nickel atoms $2.15\ \mathring{A}$ apart scattered electrons into a strong peak at $50^\circ$. Using $\lambda = d\sin\phi$, what wavelength does this give?`,
      verify: { kind: "value", inputs: { d_A: "2.15", deg: "50" }, params: { ask: "lam_d" } },
      options: [
        { key: "A", text: t`$1.38\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C08-M4", value: "1.38000000000000" },
        { key: "B", text: t`$2.15\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C08-M5", value: "2.15000000000000" },
        { key: "C", text: t`$3.29\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C08-M6", value: "3.29000000000000" },
        { key: "D", text: t`$1.65\ \mathrm{\mathring{A}}$`, correct: true, value: "1.65000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = d\sin\phi$ $= 2.15 \times \sin 50^\circ$.`,
          t`$\lambda \approx 2.15 \times 0.766 \approx 1.65\ \mathring{A}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`What is the de Broglie wavelength of the electrons in the Davisson-Germer experiment, accelerated through $54\ \mathrm{V}$? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { V: "54" }, params: { ask: "lam_V" } },
      options: [
        { key: "A", text: t`$2.36\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C08-M7", value: "2.36000000000000" },
        { key: "B", text: t`$0.228\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C08-M8", value: "0.228000000000000" },
        { key: "C", text: t`$230\ \mathrm{\mathring{A}}$`, correct: false, misconceptionId: "C08-M9", value: "230" },
        { key: "D", text: t`$1.67\ \mathrm{\mathring{A}}$`, correct: true, value: "1.67000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{h}{\sqrt{2m_eeV}}$ $= \dfrac{6.63 \times 10^{-34}}{\sqrt{2 \times 9.1 \times 10^{-31} \times 1.6 \times 10^{-19} \times 54}}$.`,
          t`$\lambda \approx 1.67 \times 10^{-10}\ \mathrm{m}$ $= 1.67\ \mathring{A}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Why could Davisson and Germer see electrons diffract from a crystal, when no ordinary slit would do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "crystal" } },
      options: [
        { key: "A", text: t`Electrons diffract only from metals`, correct: false, misconceptionId: "C08-M11", value: "metals_only" },
        { key: "B", text: t`Its gaps are far wider than the electrons' wavelength`, correct: false, misconceptionId: "C08-M12", value: "gaps_larger" },
        { key: "C", text: t`Its atoms are spaced about as far apart as the electrons' wavelength`, correct: true, value: "spacing_matches" },
        { key: "D", text: t`Its electric field bends the electrons like a lens`, correct: false, misconceptionId: "C08-M10", value: "lens_field" },
      ],
      solution: {
        steps: [
          t`Diffraction needs gaps comparable to the wavelength.`,
          t`Electrons at $54\ \mathrm{V}$ have $\lambda \approx 1.67\ \mathring{A}$, about the spacing of atoms; no machined slit is that fine.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`In a Davisson-Germer set-up, the accelerating voltage is raised. What happens to the angle of the diffraction peak?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "higherV" } },
      options: [
        { key: "A", text: t`The peak disappears`, correct: false, misconceptionId: "C08-M15", value: "peak_gone" },
        { key: "B", text: t`It becomes smaller`, correct: true, value: "smaller_angle" },
        { key: "C", text: t`It becomes larger`, correct: false, misconceptionId: "C08-M13", value: "larger_angle" },
        { key: "D", text: t`It stays the same`, correct: false, misconceptionId: "C08-M14", value: "same_angle" },
      ],
      solution: {
        steps: [
          t`A higher $V$ gives the electrons more momentum, so a shorter $\lambda$.`,
          t`$\sin\phi = \dfrac{\lambda}{d}$ falls, so the peak moves to a smaller angle.`,
        ],
      },
    },
  ],
};
