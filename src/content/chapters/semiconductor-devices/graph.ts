import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Semiconductor Devices prerequisite graph (Balbharati Physics Std XII, Ch.16): diodes and rectifiers, filters,
 * Zener and optoelectronic diodes, the bipolar junction transistor and amplifier, and logic gates.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/semiconductor-devices-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Diodes
  {
    id: "C01", slug: "pn-junction", title: "Doping and the p-n junction", group: "Diodes", tier: "core",
    oneLiner: t`Doping makes n-type (electrons) and p-type (holes) semiconductors; a p-n junction conducts when forward biased and blocks when reverse biased`,
    prereqs: [], ext: ["semiconductors (Std XI Physics)"], sources: [S("p-n Junction Diode as a Rectifier")],
  },
  {
    id: "C02", slug: "rectifiers", title: "Half-wave and full-wave rectifiers", group: "Diodes", tier: "core", visual: true,
    oneLiner: t`One diode passes alternate half cycles (output at the supply frequency); two diodes or a bridge pass both, at twice the frequency`,
    prereqs: ["C01"], ext: ["average and rms values (AC Circuits, Ch.13)"], sources: [S("p-n Junction Diode as a Rectifier")],
  },
  {
    id: "C03", slug: "filters-ripple", title: "Ripple and filter circuits", group: "Diodes", tier: "core",
    oneLiner: t`A rectifier's output pulsates; the ripple factor measures the AC left in it, and a capacitor or choke filter smooths it`,
    prereqs: ["C02"], ext: [], sources: [S("Ripple Factor and Filter Circuits")],
  },
  {
    id: "C04", slug: "zener-diode", title: "The Zener diode", group: "Diodes", tier: "core", visual: true,
    oneLiner: t`A heavily doped diode that breaks down at a fixed reverse voltage $V_Z$; with a series resistor it holds a load's voltage steady`,
    prereqs: ["C01"], ext: [], sources: [S("Zener Diode")],
  },
  {
    id: "C05", slug: "optoelectronic-devices", title: "Photodiode, solar cell and LED", group: "Diodes", tier: "core",
    oneLiner: t`A reverse-biased photodiode senses light, a solar cell turns light into electrical energy, and an LED gives light of energy about the band gap, $\lambda = \dfrac{hc}{E_g}$`,
    prereqs: ["C01"], ext: ["photon energy (Dual Nature of Radiation and Matter, Ch.14)"], sources: [S("Photodiode, Solar Cell and LED")],
  },
  // Transistors
  {
    id: "C06", slug: "bjt-basics", title: "The bipolar junction transistor", group: "Transistors", tier: "core", visual: true,
    oneLiner: t`Emitter, thin lightly doped base and collector; with the emitter junction forward and the collector junction reverse biased, $I_E = I_B + I_C$`,
    prereqs: ["C01"], ext: [], sources: [S("Bipolar Junction Transistor")],
  },
  {
    id: "C07", slug: "alpha-beta", title: "Current gains alpha and beta", group: "Transistors", tier: "core",
    oneLiner: t`$\alpha = \dfrac{I_C}{I_E}$ (common base) and $\beta = \dfrac{I_C}{I_B}$ (common emitter), linked by $\beta = \dfrac{\alpha}{1 - \alpha}$`,
    prereqs: ["C06"], ext: [], sources: [S("Bipolar Junction Transistor")],
  },
  {
    id: "C08", slug: "transistor-amplifier", title: "The transistor as an amplifier", group: "Transistors", tier: "core",
    oneLiner: t`Biased in its active region, a common-emitter transistor turns a small base signal into a large, inverted output: voltage gain $\beta\dfrac{R_L}{R_{in}}$`,
    prereqs: ["C07"], ext: [], sources: [S("Transistor as an Amplifier")],
  },
  // Logic gates
  {
    id: "C09", slug: "basic-gates", title: "Logic gates: OR, AND and NOT", group: "Logic gates", tier: "core", visual: true,
    oneLiner: t`A logic gate gives a 1 or 0 output from its inputs: OR is $Y = A + B$, AND is $Y = A \cdot B$, NOT is $Y = \overline{A}$`,
    prereqs: [], ext: [], sources: [S("Logic Gates")],
  },
  {
    id: "C10", slug: "combination-gates", title: "NAND, NOR and XOR gates", group: "Logic gates", tier: "core",
    oneLiner: t`NAND $= \overline{A \cdot B}$ and NOR $= \overline{A + B}$ can build every other gate; XOR $= A\overline{B} + \overline{A}B$ is 1 when the inputs differ`,
    prereqs: ["C09"], ext: [], sources: [S("Logic Gates")],
  },
];
