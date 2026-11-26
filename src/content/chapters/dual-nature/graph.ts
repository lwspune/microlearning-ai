import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Dual Nature of Radiation and Matter prerequisite graph (Balbharati Physics Std XII, Ch.14): photons, the
 * photoelectric effect and Einstein's equation, and matter waves.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/dual-nature-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Photons
  {
    id: "C01", slug: "photon-energy", title: "Photons and their energy", group: "Photons", tier: "core",
    oneLiner: t`Light comes in photons of energy $E = h\nu = \dfrac{hc}{\lambda}$; a beam of power $P$ carries $\dfrac{P\lambda}{hc}$ photons a second`,
    prereqs: [], ext: [], sources: [S("Einstein's Photoelectric Equation"), S("Wave-Particle Duality of Radiation")],
  },
  {
    id: "C02", slug: "photon-momentum", title: "Photon momentum and wave-particle duality", group: "Photons", tier: "core",
    oneLiner: t`A photon carries momentum $p = \dfrac{E}{c} = \dfrac{h}{\lambda}$; light behaves as a wave in some experiments and as particles in others`,
    prereqs: ["C01"], ext: [], sources: [S("Wave-Particle Duality of Radiation")],
  },
  // The photoelectric effect
  {
    id: "C03", slug: "photoelectric-effect", title: "The photoelectric effect", group: "The photoelectric effect", tier: "core", visual: true,
    oneLiner: t`Light above a threshold frequency ejects electrons at once; the photocurrent grows with intensity, and the stopping potential with frequency`,
    prereqs: [], ext: [], sources: [S("Photoelectric Effect"), S("Photo Cell")],
  },
  {
    id: "C04", slug: "einstein-equation", title: "Einstein's photoelectric equation", group: "The photoelectric effect", tier: "core",
    oneLiner: t`Each photon frees one electron: $\dfrac{1}{2}mv_{max}^2 = h\nu - \phi_0 = eV_0$, with $\phi_0 = h\nu_0$ the work function`,
    prereqs: ["C01", "C03"], ext: [], sources: [S("Einstein's Photoelectric Equation")],
  },
  {
    id: "C05", slug: "stopping-potential-graph", title: "Stopping potential against frequency", group: "The photoelectric effect", tier: "core", visual: true,
    oneLiner: t`$V_0 = \dfrac{h}{e}\nu - \dfrac{\phi_0}{e}$: a straight line of slope $\dfrac{h}{e}$ cutting the frequency axis at $\nu_0$`,
    prereqs: ["C04"], ext: [], sources: [S("Einstein's Photoelectric Equation")],
  },
  // Matter waves
  {
    id: "C06", slug: "de-broglie", title: "The de Broglie wavelength", group: "Matter waves", tier: "core",
    oneLiner: t`Every moving particle has a wavelength $\lambda = \dfrac{h}{p} = \dfrac{h}{mv}$, too small to notice for everyday objects`,
    prereqs: ["C02"], ext: [], sources: [S("De Broglie Hypothesis")],
  },
  {
    id: "C07", slug: "accelerated-particles", title: "Wavelength from energy and accelerating voltage", group: "Matter waves", tier: "core",
    oneLiner: t`$\lambda = \dfrac{h}{\sqrt{2mK}}$; for a charge $q$ accelerated through $V$, $\lambda = \dfrac{h}{\sqrt{2mqV}}$, about $\dfrac{1.227}{\sqrt{V}}\ \mathrm{nm}$ for an electron`,
    prereqs: ["C06"], ext: [], sources: [S("De Broglie Hypothesis")],
  },
  {
    id: "C08", slug: "davisson-germer", title: "The Davisson-Germer experiment", group: "Matter waves", tier: "core",
    oneLiner: t`Electrons scattered by a nickel crystal show a diffraction peak at the angle their de Broglie wavelength predicts: matter behaves as waves`,
    prereqs: ["C07"], ext: [], sources: [S("Davisson-Germer Experiment and Duality of Matter")],
  },
];
