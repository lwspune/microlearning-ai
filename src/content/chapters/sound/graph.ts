import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Sound prerequisite graph (Balbharati Physics Std XI, Ch.8): waves and their properties, the speed of sound, echoes and acoustics, the qualities of sound and the Doppler effect.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/sound-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Waves
  {
    id: "C01", slug: "wave-basics", title: "Waves and their properties", group: "Waves", tier: "core", visual: true,
    oneLiner: t`Transverse and longitudinal waves carry energy, not matter; $v = n\lambda$ links speed, frequency and wavelength`,
    prereqs: [], ext: [], sources: [S("Common Properties of all Waves"), S("Transverse and Longitudinal Waves")],
  },
  {
    id: "C02", slug: "wave-speed", title: "The speed of travelling waves", group: "Waves", tier: "core",
    oneLiner: t`A wave's speed depends on the medium: $\sqrt{\dfrac{T}{m}}$ on a string, $\sqrt{\dfrac{Y}{\rho}}$ in a solid rod`,
    prereqs: ["C01"], ext: [], sources: [S("The Speed of Travelling Waves")],
  },
  // Speed of sound
  {
    id: "C03", slug: "newton-laplace", title: "Speed of sound in a gas", group: "Speed of sound", tier: "core",
    oneLiner: t`Newton's $\sqrt{\dfrac{P}{\rho}}$ fell short; Laplace's adiabatic correction gives $\sqrt{\dfrac{\gamma P}{\rho}}$, which grows as $\sqrt{T}$`,
    prereqs: ["C02"], ext: [], sources: [S("Newton's Formula and Laplace's Correction")],
  },
  {
    id: "C04", slug: "echo-acoustics", title: "Echo, reverberation and acoustics", group: "Speed of sound", tier: "core",
    oneLiner: t`An echo needs a reflector at least about $17\ \mathrm{m}$ away; reverberation time and absorbing materials shape a hall's acoustics`,
    prereqs: ["C03"], ext: [], sources: [S("Echo, Reverberation and Acoustics")],
  },
  // Hearing sound
  {
    id: "C05", slug: "doppler-effect", title: "The Doppler effect", group: "Hearing sound", tier: "core", visual: true,
    oneLiner: t`A moving source or listener shifts the heard frequency: $n = n_0\dfrac{v \pm v_L}{v \mp v_S}$`,
    prereqs: ["C01"], ext: [], sources: [S("Doppler Effect")],
  },
  {
    id: "C06", slug: "sound-qualities", title: "Qualities of sound and superposition", group: "Hearing sound", tier: "core",
    oneLiner: t`Pitch follows frequency, loudness intensity, and quality the overtones; waves meeting add by the principle of superposition`,
    prereqs: ["C01"], ext: [], sources: [S("Qualities of Sound"), S("Principle of Superposition of Waves")],
  },
];
