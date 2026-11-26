import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Electromagnetic Waves and Communication System prerequisite graph (Balbharati Physics Std XI, Ch.13): electromagnetic waves and their spectrum, how they travel through the atmosphere, the communication system and modulation.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/em-waves-comm-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // EM waves
  {
    id: "C01", slug: "em-waves", title: "Electromagnetic waves", group: "EM waves", tier: "core", visual: true,
    oneLiner: t`Accelerated charges radiate waves of perpendicular $\vec{E}$ and $\vec{B}$; in vacuum $c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}}$ and $\dfrac{E}{B} = c$`,
    prereqs: [], ext: [], sources: [S("EM Waves")],
  },
  {
    id: "C02", slug: "em-spectrum", title: "The electromagnetic spectrum", group: "EM waves", tier: "core",
    oneLiner: t`From radio waves to gamma rays, the bands differ only in wavelength, and each has its sources and uses`,
    prereqs: ["C01"], ext: [], sources: [S("Electromagnetic Spectrum")],
  },
  {
    id: "C03", slug: "em-propagation", title: "Propagation of EM waves", group: "EM waves", tier: "core", visual: true,
    oneLiner: t`Ground waves hug the Earth, sky waves bounce off the ionosphere, space waves go line of sight: range $d = \sqrt{2Rh}$`,
    prereqs: ["C01"], ext: [], sources: [S("Propagation of EM Waves")],
  },
  // Communication
  {
    id: "C04", slug: "communication-system", title: "The communication system", group: "Communication", tier: "core",
    oneLiner: t`A transmitter, a channel and a receiver carry a message; noise, bandwidth and attenuation limit it`,
    prereqs: [], ext: [], sources: [S("Introduction to Communication System")],
  },
  {
    id: "C05", slug: "modulation", title: "Modulation", group: "Communication", tier: "core", visual: true,
    oneLiner: t`A low-frequency message rides on a high-frequency carrier by changing its amplitude (AM), frequency (FM) or phase (PM)`,
    prereqs: ["C04"], ext: [], sources: [S("Modulation")],
  },

  // Maxwell's waves (phase 2: CBSE, NEET and JEE Main)
  {
    id: "C06", slug: "displacement-current", title: "Displacement current", group: "Maxwell's waves", tier: "core", visual: true,
    oneLiner: t`A changing electric field makes a magnetic field just as a current does: $i_d = \varepsilon_0\dfrac{d\Phi_E}{dt}$`,
    prereqs: [], ext: ["Ampere's circuital law (Std XII Physics)", "capacitors (Std XII Physics)"],
    sources: ["cbse-12/electromagnetic-waves#Displacement Current", "neet/electromagnetic-waves#Displacement Current and EM Waves", "jee-main/electromagnetic-waves#Displacement Current, Maxwell's Equations and Wave Speed"],
  },
  {
    id: "C07", slug: "em-wave-energy", title: "Energy and momentum of EM waves", group: "Maxwell's waves", tier: "core",
    oneLiner: t`An EM wave carries energy at intensity $I = \tfrac{1}{2}\varepsilon_0E_0^2c$ and pushes on a surface: pressure $\dfrac{I}{c}$ if absorbed, $\dfrac{2I}{c}$ if reflected`,
    prereqs: ["C01"], ext: [],
    sources: ["jee-main/electromagnetic-waves#Energy, Intensity and Radiation Pressure"],
  },
];
