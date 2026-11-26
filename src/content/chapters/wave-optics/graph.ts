import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Wave Optics prerequisite graph (Balbharati Physics Std XII, Ch.7): wavefronts and Huygens' principle, reflection and
 * refraction, optical path, the Doppler effect for light, polarization, interference, the biprism, diffraction and
 * resolving power. Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/wave-optics-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Wavefronts
  {
    id: "C01", slug: "wavefronts", title: "Wavefronts and Huygens' principle", group: "Wavefronts", tier: "core",
    oneLiner: t`A wavefront joins points in the same phase; every point on it is a source of secondary wavelets, whose envelope is the next wavefront`,
    prereqs: [], ext: ["rays of light (Std XI Physics)"], sources: [S("Nature of Light and Huygens' Principle")],
  },
  {
    id: "C02", slug: "reflection-huygens", title: "Reflection by Huygens' principle", group: "Wavefronts", tier: "core", visual: true,
    oneLiner: t`Wavelets from a plane wavefront striking a mirror build a reflected wavefront at the same angle: $i = r$`,
    prereqs: ["C01"], ext: [], sources: [S("Reflection and Refraction on Huygens' Theory")],
  },
  {
    id: "C03", slug: "refraction-huygens", title: "Refraction by Huygens' principle", group: "Wavefronts", tier: "core", visual: true,
    oneLiner: t`Slower wavelets in the denser medium tilt the wavefront: $\dfrac{\sin i}{\sin r} = \dfrac{v_1}{v_2} = \dfrac{n_2}{n_1}$, and $\lambda$ shrinks while the frequency stays`,
    prereqs: ["C01"], ext: [], sources: [S("Reflection and Refraction on Huygens' Theory")],
  },
  {
    id: "C04", slug: "optical-path", title: "Optical path length", group: "Wavefronts", tier: "core",
    oneLiner: t`A path $l$ in a medium of refractive index $n$ holds as many waves as a path $nl$ in vacuum`,
    prereqs: ["C03"], ext: [], sources: [S("Interference and Young's Double Slit Experiment")],
  },
  {
    id: "C05", slug: "doppler-light", title: "Doppler effect in light", group: "Wavefronts", tier: "adv",
    oneLiner: t`A receding source looks redder, an approaching one bluer: $\dfrac{\Delta\lambda}{\lambda} = \dfrac{v_r}{c}$`,
    prereqs: ["C03"], ext: ["Doppler effect in sound (Std XI Physics)"], sources: [S("Nature of Light and Huygens' Principle")],
  },
  // Polarization
  {
    id: "C06", slug: "polarization-malus", title: "Polarization and Malus' law", group: "Polarization", tier: "core",
    oneLiner: t`A polarizer passes half of unpolarized light; a second at angle $\theta$ passes $I = I_0\cos^2\theta$ of what reaches it`,
    prereqs: ["C01"], ext: [], sources: [S("Polarization and Brewster's Law")],
  },
  {
    id: "C07", slug: "brewster", title: "Brewster's law", group: "Polarization", tier: "core", visual: true,
    oneLiner: t`At the polarizing angle, $\tan\theta_B = n$, reflected light is fully polarized and meets the refracted ray at $90^\circ$`,
    prereqs: ["C03", "C06"], ext: [], sources: [S("Polarization and Brewster's Law")],
  },
  // Interference
  {
    id: "C08", slug: "coherent-sources", title: "Coherent sources and conditions for interference", group: "Interference", tier: "core",
    oneLiner: t`Two coherent sources give bright fringes where the path difference is $n\lambda$ and dark ones where it is $(2n - 1)\dfrac{\lambda}{2}$`,
    prereqs: ["C04"], ext: ["superposition and interference (Superposition of Waves, Ch.6)"], sources: [S("Interference and Young's Double Slit Experiment")],
  },
  {
    id: "C09", slug: "young-double-slit", title: "Young's double slit experiment", group: "Interference", tier: "core", visual: true,
    oneLiner: t`Bright fringes at $y_n = \dfrac{n\lambda D}{d}$, equally spaced by the fringe width $W = \dfrac{\lambda D}{d}$`,
    prereqs: ["C08"], ext: [], sources: [S("Interference and Young's Double Slit Experiment")],
  },
  {
    id: "C10", slug: "fringe-intensity", title: "Intensity in an interference pattern", group: "Interference", tier: "core",
    oneLiner: t`With intensities $I_1$ and $I_2$, $\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{\sqrt{I_1} + \sqrt{I_2}}{\sqrt{I_1} - \sqrt{I_2}}\right)^2$`,
    prereqs: ["C08"], ext: [], sources: [S("Interference and Young's Double Slit Experiment")],
  },
  {
    id: "C11", slug: "fringe-shift", title: "Shifting the fringes with a thin sheet", group: "Interference", tier: "adv",
    oneLiner: t`A sheet of thickness $t$ over one slit adds a path $(\mu - 1)t$ and shifts the whole pattern by $\dfrac{(\mu - 1)tD}{d}$`,
    prereqs: ["C09"], ext: [], sources: [S("Interference and Young's Double Slit Experiment")],
  },
  {
    id: "C12", slug: "biprism", title: "Fresnel's biprism", group: "Interference", tier: "core",
    oneLiner: t`A biprism makes two virtual coherent sources a distance $d$ apart; $\lambda = \dfrac{Wd}{D}$, with $d = \sqrt{d_1d_2}$ from the two lens positions`,
    prereqs: ["C09"], ext: [], sources: [S("Interference and Young's Double Slit Experiment")],
  },
  // Diffraction and resolution
  {
    id: "C13", slug: "single-slit", title: "Diffraction at a single slit", group: "Diffraction and resolution", tier: "core", visual: true,
    oneLiner: t`Minima where $a\sin\theta = n\lambda$, secondary maxima near $a\sin\theta = (2n + 1)\dfrac{\lambda}{2}$, around a bright central band`,
    prereqs: ["C08"], ext: [], sources: [S("Diffraction at a Single Slit")],
  },
  {
    id: "C14", slug: "central-maximum", title: "Width of the central maximum", group: "Diffraction and resolution", tier: "core",
    oneLiner: t`The central bright band is $\dfrac{2\lambda D}{a}$ wide: wider for longer waves and narrower slits`,
    prereqs: ["C13"], ext: [], sources: [S("Diffraction at a Single Slit")],
  },
  {
    id: "C15", slug: "resolving-power", title: "Resolving power", group: "Diffraction and resolution", tier: "adv",
    oneLiner: t`Two points are just resolved when one's central maximum falls on the other's first minimum: $\theta = \dfrac{1.22\lambda}{D}$ for a telescope`,
    prereqs: ["C13"], ext: [], sources: [S("Resolving Power")],
  },
];
