import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Superposition of Waves prerequisite graph (Balbharati Physics Std XII, Ch.6): progressive waves and phase,
 * reflection, superposition, stationary waves, strings, air columns, end correction and beats.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/superposition-waves-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Progressive waves
  {
    id: "C01", slug: "progressive-wave-equation", title: "Equation of a progressive wave", group: "Progressive waves", tier: "core", visual: true,
    oneLiner: t`$y = A\sin 2\pi\left(\dfrac{t}{T} - \dfrac{x}{\lambda}\right)$: read off the amplitude, period, wavelength, speed and direction`,
    prereqs: [], ext: ["wave motion and v = nλ (Std XI Physics)", "S.H.M. (Oscillations, Ch.5)"], sources: [S("Progressive Waves")],
  },
  {
    id: "C02", slug: "phase-difference", title: "Phase difference in a wave", group: "Progressive waves", tier: "core",
    oneLiner: t`Points $\Delta x$ apart differ in phase by $\dfrac{2\pi}{\lambda}\Delta x$; instants $\Delta t$ apart, by $\dfrac{2\pi}{T}\Delta t$`,
    prereqs: ["C01"], ext: [], sources: [S("Progressive Waves")],
  },
  {
    id: "C03", slug: "reflection-of-waves", title: "Reflection of waves", group: "Progressive waves", tier: "core",
    oneLiner: t`Reflected from a denser medium or a rigid end, a wave turns over (a phase change of $\pi$); from a rarer medium or a free end, it does not`,
    prereqs: ["C02"], ext: [], sources: [S("Stationary Waves")],
  },
  // Superposition and stationary waves
  {
    id: "C04", slug: "superposition", title: "Superposition and interference", group: "Superposition and stationary waves", tier: "core",
    oneLiner: t`Displacements add: two waves of the same frequency give amplitude $R = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\varphi}$, and intensity goes as $R^2$`,
    prereqs: ["C02"], ext: [], sources: [S("Superposition of Waves")],
  },
  {
    id: "C05", slug: "stationary-waves", title: "Stationary waves", group: "Superposition and stationary waves", tier: "core", visual: true,
    oneLiner: t`Two identical waves in opposite directions give $y = 2A\cos kx\sin\omega t$: nodes $\dfrac{\lambda}{2}$ apart, with an antinode $\dfrac{\lambda}{4}$ from each`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Stationary Waves")],
  },
  // Strings
  {
    id: "C06", slug: "string-modes", title: "Modes of a string fixed at both ends", group: "Strings", tier: "core", visual: true,
    oneLiner: t`$L = p\dfrac{\lambda}{2}$, so $n_p = \dfrac{pv}{2L}$: every harmonic is present, and the $p$th harmonic is the $(p - 1)$th overtone`,
    prereqs: ["C05"], ext: [], sources: [S("Vibrations of a Stretched String and Sonometer"), S("Harmonics, Overtones and End Correction")],
  },
  {
    id: "C07", slug: "string-free-end", title: "A string with one free end", group: "Strings", tier: "core", visual: true,
    oneLiner: t`A free end is an antinode, so $L$ is an odd number of quarter wavelengths: $L = (2p - 1)\dfrac{\lambda}{4}$`,
    prereqs: ["C06"], ext: [], sources: [S("Stationary Waves"), S("Vibrations of a Stretched String and Sonometer")],
  },
  {
    id: "C08", slug: "string-frequency", title: "Frequency of a stretched string", group: "Strings", tier: "core",
    oneLiner: t`A transverse wave on a string travels at $v = \sqrt{\dfrac{T}{m}}$, so the fundamental is $n = \dfrac{1}{2L}\sqrt{\dfrac{T}{m}}$`,
    prereqs: ["C06"], ext: [], sources: [S("Vibrations of a Stretched String and Sonometer")],
  },
  {
    id: "C09", slug: "laws-of-strings", title: "Laws of vibrating strings and the sonometer", group: "Strings", tier: "core",
    oneLiner: t`$n \propto \dfrac{1}{L}$, $n \propto \sqrt{T}$ and $n \propto \dfrac{1}{\sqrt{m}}$, each checked on a sonometer`,
    prereqs: ["C08"], ext: [], sources: [S("Vibrations of a Stretched String and Sonometer")],
  },
  // Air columns
  {
    id: "C10", slug: "closed-pipe", title: "Air column in a pipe closed at one end", group: "Air columns", tier: "core", visual: true,
    oneLiner: t`A node at the closed end and an antinode at the open end: $n = (2p - 1)\dfrac{v}{4L}$, odd harmonics only`,
    prereqs: ["C06"], ext: [], sources: [S("Vibrations of Air Columns")],
  },
  {
    id: "C11", slug: "open-pipe", title: "Air column in a pipe open at both ends", group: "Air columns", tier: "core", visual: true,
    oneLiner: t`Antinodes at both ends: $n = \dfrac{pv}{2L}$, every harmonic present`,
    prereqs: ["C06"], ext: [], sources: [S("Vibrations of Air Columns")],
  },
  {
    id: "C12", slug: "end-correction", title: "End correction", group: "Air columns", tier: "adv",
    oneLiner: t`The antinode forms just outside an open end, $e = 0.3d$ beyond it: use $L + e$ for a closed pipe and $L + 2e$ for an open one`,
    prereqs: ["C10", "C11"], ext: [], sources: [S("Harmonics, Overtones and End Correction")],
  },
  // Beats
  {
    id: "C13", slug: "beats", title: "Beats", group: "Beats", tier: "core",
    oneLiner: t`Two notes of nearly equal frequency rise and fall in loudness $|n_1 - n_2|$ times a second`,
    prereqs: ["C04"], ext: [], sources: [S("Beats")],
  },
  {
    id: "C14", slug: "beats-strings-pipes", title: "Beats from strings and pipes", group: "Beats", tier: "adv",
    oneLiner: t`Change a string's length or tension, or set two pipes side by side, and the beat count gives the speed or frequency`,
    prereqs: ["C08", "C11", "C13"], ext: [], sources: [S("Beats")],
  },
];
