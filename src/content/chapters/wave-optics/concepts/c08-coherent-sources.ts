import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Point two torches at the same wall and you never see dark and bright bands where their beams overlap. Light from one lamp through two pinholes does give such bands. What is the difference?`,
    reveal: t`The two pinholes are lit by the same waves, so their light keeps a fixed phase difference: they are **coherent**. Two torches change their phase relation at random, so their bands wash out.`,
  },
  explanation: {
    intuition: [
      t`Where two light waves overlap they add: crest on crest gives brightness, crest on trough gives darkness.`,
      t`This is **interference**; the bands of brightness and darkness are **fringes**.`,
      t`For the fringes to stay put, the two waves must keep step with each other all the time.`,
      t`Sources whose waves keep a fixed phase difference are **coherent**.`,
      t`Two separate lamps are never coherent, so in the lab both waves come from one source.`,
    ],
    formal: [
      {
        title: "Coherent sources",
        points: [
          t`Two sources are **coherent** if they emit waves of the same frequency with a constant phase difference.`,
          t`Then the bright and dark places stay fixed: a steady **interference pattern**.`,
          t`An ordinary lamp emits in short bursts, each with a random phase.`,
          t`So the phase difference between two lamps changes randomly, millions of times a second.`,
          t`Their fringes shift faster than the eye can follow, and we see uniform brightness.`,
        ],
      },
      {
        title: "Two lab methods",
        points: [
          t`Coherent sources are always made from one original source.`,
          t`**Division of wavefront:** one wavefront is split by two narrow openings, as in Young's double slit or Fresnel's biprism.`,
          t`**Division of amplitude:** one wave is split by partial reflection, as in a thin film.`,
          t`In a thin oil film, light reflected from its top and bottom surfaces interferes.`,
          t`Each colour is reinforced at a different thickness, so white light shows colours.`,
        ],
      },
      {
        title: "Bright and dark",
        points: [
          t`Path difference $n\lambda$: the waves arrive in phase, **constructive** interference, a bright fringe.`,
          t`Path difference $(2n - 1)\dfrac{\lambda}{2}$: they arrive in opposite phase, **destructive** interference, a dark fringe.`,
          t`Here $n = 1, 2, 3, \ldots$; zero path difference gives the central bright fringe.`,
          t`A path difference $\Delta$ is a phase difference $\dfrac{2\pi}{\lambda}\Delta$.`,
          t`So bright fringes have phase difference $2n\pi$, dark fringes $(2n - 1)\pi$.`,
        ],
      },
      {
        title: "A good, steady pattern",
        points: [
          t`The sources must be coherent, both derived from one source.`,
          t`The light should be monochromatic: white light gives coloured, overlapping fringes.`,
          t`The two waves should have equal amplitudes, so the dark fringes are completely dark.`,
          t`The slits should be narrow: a wide slit acts as many sources and blurs the fringes.`,
          t`The slits should be close together and the screen far away, so the fringes are wide enough to see.`,
          t`With polarized light, both waves must be in the same state of polarization.`,
        ],
      },
    ],
    worked: {
      prompt: t`Light of wavelength $500\ \mathrm{nm}$ from two coherent slits reaches point P with a path difference of $2.0\ \mu\mathrm{m}$ and point Q with $2.25\ \mu\mathrm{m}$. What is seen at P and at Q?`,
      steps: [
        t`At P: $\dfrac{\Delta}{\lambda} = \dfrac{2.0 \times 10^{-6}}{500 \times 10^{-9}} = 4$, so $\Delta = 4\lambda$.`,
        t`$\Delta = n\lambda$ with $n = 4$: the $4^{\text{th}}$ bright fringe from the centre.`,
        t`At Q: $\dfrac{\Delta}{\lambda} = \dfrac{2.25 \times 10^{-6}}{500 \times 10^{-9}} = 4.5$.`,
        t`$(2n - 1)\dfrac{\lambda}{2} = 4.5\lambda$ gives $n = 5$: the $5^{\text{th}}$ dark fringe.`,
      ],
      answer: t`P: the $4^{\text{th}}$ bright fringe; Q: the $5^{\text{th}}$ dark fringe`,
    },
    visualSpec: t`Toggle between one lamp behind two slits and two separate lamps, and watch the fringes hold still or flicker away; drag a point on the screen to read its path difference in wavelengths.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Thinks two sources of the same frequency are coherent, whatever their phase relation.",
      remediation: "Coherence needs the same frequency **and** a constant phase difference. Two lamps of equal frequency still change phase at random.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Thinks coherent sources are sources of equal intensity.",
      remediation: "Coherence is about a constant phase difference. Equal intensities only make the dark fringes completely dark.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Swaps the conditions for bright and dark fringes.",
      remediation: t`Bright: path difference $n\lambda$, the waves in phase. Dark: $(2n - 1)\dfrac{\lambda}{2}$, the waves in opposite phase.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Takes every multiple of $\dfrac{\lambda}{2}$ as a dark fringe.`,
      remediation: t`Even multiples of $\dfrac{\lambda}{2}$ are whole wavelengths, which give bright fringes. Only odd multiples give dark ones.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Counts dark fringes from $n = 0$, so gives the order one too small.`,
      remediation: t`With dark at $(2n - 1)\dfrac{\lambda}{2}$, the first dark fringe ($\dfrac{\lambda}{2}$) is $n = 1$. Solve $2n - 1 = \dfrac{2\Delta}{\lambda}$ for $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Writes the phase condition $(2n - 1)\pi$ as a path difference.`,
      remediation: t`$(2n - 1)\pi$ is a phase difference. The matching path difference is $\dfrac{\lambda}{2\pi}$ times it: $(2n - 1)\dfrac{\lambda}{2}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks the colours of a thin film come from dispersion, as in a prism.",
      remediation: "A thin film does not split light by refraction. Its colours come from interference of light reflected at its two surfaces.",
      fallback: { kind: "ext", topic: "dispersion by a prism (Std XI Physics)" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks a thin film gives coherent waves by division of wavefront.",
      remediation: "A thin film splits each wave by partial reflection at its two surfaces: division of amplitude. Slits divide the wavefront.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Thinks a thin oil film is coloured by pigments in the oil.",
      remediation: "The oil itself is nearly colourless. The colours come from interference of light reflected at the film's two surfaces.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks wider slits or larger sources give better fringes, because they let in more light.",
      remediation: "A wide slit or large source acts as many sources whose fringes overlap and blur. Narrow slits, lit from one source, give sharp fringes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.8" },
      stem: t`Which arrangement gives a good, steady interference pattern on a distant screen?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "setup" } },
      options: [
        { key: "A", text: t`Two narrow slits close together, lit by one sodium lamp`, correct: true, value: "one_source_narrow" },
        { key: "B", text: t`Two identical sodium lamps placed side by side`, correct: false, misconceptionId: "C08-M1", value: "two_lamps" },
        { key: "C", text: t`Two lamps of any kind, adjusted to exactly equal brightness`, correct: false, misconceptionId: "C08-M2", value: "equal_brightness" },
        { key: "D", text: t`Two wide slits close together, lit by one sodium lamp, for brighter fringes`, correct: false, misconceptionId: "C08-M10", value: "wide_slits" },
      ],
      solution: {
        steps: [
          t`Steady fringes need coherent sources, so both waves must come from one lamp.`,
          t`The slits must be narrow (a wide slit blurs the fringes) and close together.`,
          t`So: two narrow slits close together, lit by one sodium lamp.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.9" },
      stem: t`Light from two identical sodium lamps falls on the same screen, but no interference fringes are seen. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bulbs" } },
      options: [
        { key: "A", text: t`Their frequencies differ slightly; with exactly equal frequencies, fringes would appear`, correct: false, misconceptionId: "C08-M1", value: "freq_differs" },
        { key: "B", text: t`Their brightnesses differ slightly; with exactly equal brightness, fringes would appear`, correct: false, misconceptionId: "C08-M2", value: "brightness_differs" },
        { key: "C", text: t`The lamps are too large; two small lamps would give fringes`, correct: false, misconceptionId: "C08-M10", value: "too_large" },
        { key: "D", text: t`Their phase difference changes randomly many times a second, so they are not coherent`, correct: true, value: "random_phase" },
      ],
      solution: {
        steps: [
          t`Each lamp emits in short bursts of random phase.`,
          t`Their phase difference changes randomly many times a second, so the fringes shift too fast to be seen.`,
          t`The lamps are not coherent, whatever their frequency or brightness.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.6(i)" },
      stem: t`Two coherent waves of wavelength $\lambda$ meet at a point. For destructive interference there, the path difference must be ($n = 1, 2, 3, \ldots$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dark" } },
      options: [
        { key: "A", text: t`$n\lambda$`, correct: false, misconceptionId: "C08-M3", value: "n_lambda" },
        { key: "B", text: t`$n\dfrac{\lambda}{2}$`, correct: false, misconceptionId: "C08-M4", value: "n_half_lambda" },
        { key: "C", text: t`$(2n - 1)\pi$`, correct: false, misconceptionId: "C08-M6", value: "odd_pi" },
        { key: "D", text: t`$(2n - 1)\dfrac{\lambda}{2}$`, correct: true, value: "odd_half_lambda" },
      ],
      solution: {
        steps: [
          t`Destructive interference needs the waves in opposite phase: phase difference $(2n - 1)\pi$.`,
          t`Path difference $= \dfrac{\lambda}{2\pi} \times (2n - 1)\pi = (2n - 1)\dfrac{\lambda}{2}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Solved Ex.7.4" },
      stem: t`In a double-slit experiment with light of wavelength $6000\ \text{Å}$, the path difference between the waves reaching a point A of the screen is $0.0075\ \mathrm{mm}$. What lies at A, counting from the central bright fringe?`,
      verify: { kind: "value", inputs: { dl_mm: "0.0075", lam_A: "6000" }, params: { ask: "order" } },
      options: [
        { key: "A", text: t`The $25^{\text{th}}$ dark fringe`, correct: false, misconceptionId: "C08-M4", value: "dark_25" },
        { key: "B", text: t`The $12^{\text{th}}$ dark fringe`, correct: false, misconceptionId: "C08-M5", value: "dark_12" },
        { key: "C", text: t`The $13^{\text{th}}$ dark fringe`, correct: true, value: "dark_13" },
        { key: "D", text: t`The $13^{\text{th}}$ bright fringe`, correct: false, misconceptionId: "C08-M3", value: "bright_13" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta}{\lambda} = \dfrac{0.0075 \times 10^{-3}}{6000 \times 10^{-10}} = 12.5$.`,
          t`A half-odd number of wavelengths gives a dark fringe: $(2n - 1)\dfrac{\lambda}{2} = 12.5\lambda$.`,
          t`$2n - 1 = 25$, so $n = 13$: the $13^{\text{th}}$ dark fringe.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.2 (iii)" },
      stem: t`A thin film of oil floating on water shows many colours in white light. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "film" } },
      options: [
        { key: "A", text: t`The oil contains coloured pigments`, correct: false, misconceptionId: "C08-M9", value: "pigment" },
        { key: "B", text: t`Light reflected from the top and the bottom surfaces of the film interferes`, correct: true, value: "two_surfaces" },
        { key: "C", text: t`The film splits white light into its colours, as a prism does`, correct: false, misconceptionId: "C08-M7", value: "dispersion" },
        { key: "D", text: t`The film divides the wavefront into two parts, as a double slit does`, correct: false, misconceptionId: "C08-M8", value: "wavefront" },
      ],
      solution: {
        steps: [
          t`Part of the light is reflected at the top surface of the film, part at the bottom surface: division of amplitude.`,
          t`The two reflected waves are coherent and interfere.`,
          t`Each colour is reinforced at a different thickness, so the film shows many colours.`,
        ],
      },
    },
  ],
};
