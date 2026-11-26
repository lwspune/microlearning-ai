import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Electromagnetic Induction prerequisite graph (Balbharati Physics Std XII, Ch.12): Faraday's and Lenz's laws,
 * motional emf and generators, eddy currents, self and mutual inductance, and the transformer.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/em-induction-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Faraday and Lenz
  {
    id: "C01", slug: "faraday-law", title: "Magnetic flux and Faraday's law", group: "Faraday and Lenz", tier: "core",
    oneLiner: t`Flux $\Phi = BA\cos\theta$; a changing flux through a coil of $N$ turns induces $e = -N\dfrac{d\Phi}{dt}$`,
    prereqs: [], ext: ["magnetic field of a solenoid (Magnetic Fields due to Electric Current, Ch.10)"], sources: [S("Faraday's Laws and Magnetic Flux")],
  },
  {
    id: "C02", slug: "lenz-law", title: "Lenz's law", group: "Faraday and Lenz", tier: "core", visual: true,
    oneLiner: t`The induced current flows so as to oppose the change in flux that causes it: the minus sign in $e = -\dfrac{d\Phi}{dt}$`,
    prereqs: ["C01"], ext: [], sources: [S("Lenz's Law")],
  },
  {
    id: "C03", slug: "stationary-coil-emf", title: "Emf in a stationary coil", group: "Faraday and Lenz", tier: "core",
    oneLiner: t`A coil at rest in a changing field, such as inside a solenoid whose current changes, has an emf $-N\dfrac{d\Phi}{dt}$ driven by an induced electric field`,
    prereqs: ["C01"], ext: [], sources: [S("Induced emf in a Stationary Coil"), S("Faraday's Laws and Magnetic Flux")],
  },
  // Motional emf and generators
  {
    id: "C04", slug: "motional-emf", title: "Motional emf", group: "Motional emf and generators", tier: "core", visual: true,
    oneLiner: t`A rod of length $l$ moving at $v$ across a field $B$ has an emf $e = Blv$ between its ends`,
    prereqs: ["C01"], ext: ["force on a moving charge (Magnetic Fields due to Electric Current, Ch.10)"], sources: [S("Motional Electromotive Force")],
  },
  {
    id: "C05", slug: "rotating-conductor", title: "A rotating rod and the Faraday disc", group: "Motional emf and generators", tier: "core",
    oneLiner: t`A rod of length $R$ turning at $\omega$ about one end across $B$, or a disc of radius $R$, gives $e = \dfrac{1}{2}B\omega R^2$`,
    prereqs: ["C04"], ext: [], sources: [S("Motional Electromotive Force"), S("Generators, Back emf and Energy Transfer")],
  },
  {
    id: "C06", slug: "generator-back-emf", title: "Generators and back emf", group: "Motional emf and generators", tier: "core",
    oneLiner: t`A coil turning at $\omega$ in a field gives $e = NBA\omega\sin\omega t$; in a motor the induced back emf opposes the supply`,
    prereqs: ["C02"], ext: [], sources: [S("Generators, Back emf and Energy Transfer")],
  },
  {
    id: "C07", slug: "eddy-currents", title: "Eddy currents", group: "Motional emf and generators", tier: "core",
    oneLiner: t`A changing flux through a solid conductor drives loops of current inside it, which oppose the change: braking, heating and damping`,
    prereqs: ["C02"], ext: [], sources: [S("Eddy Currents")],
  },
  // Inductance
  {
    id: "C08", slug: "self-inductance", title: "Self-inductance", group: "Inductance", tier: "core",
    oneLiner: t`A coil's flux linkage $N\Phi = LI$; a changing current induces $e = -L\dfrac{dI}{dt}$, and a solenoid has $L = \dfrac{\mu_0N^2A}{l}$`,
    prereqs: ["C01"], ext: [], sources: [S("Self-Inductance and Energy in a Magnetic Field")],
  },
  {
    id: "C09", slug: "inductors-series-parallel", title: "Inductors in series and parallel", group: "Inductance", tier: "core",
    oneLiner: t`Uncoupled inductors add like resistors: $L = L_1 + L_2$ in series, $\dfrac{1}{L} = \dfrac{1}{L_1} + \dfrac{1}{L_2}$ in parallel`,
    prereqs: ["C08"], ext: ["resistors in series and parallel (Current Electricity, Ch.9)"], sources: [S("Self-Inductance and Energy in a Magnetic Field")],
  },
  {
    id: "C10", slug: "inductor-energy", title: "Energy stored in an inductor", group: "Inductance", tier: "core",
    oneLiner: t`Building up a current $I$ in an inductor stores $U = \dfrac{1}{2}LI^2$ in its magnetic field, at $\dfrac{B^2}{2\mu_0}$ per unit volume`,
    prereqs: ["C08"], ext: [], sources: [S("Self-Inductance and Energy in a Magnetic Field")],
  },
  {
    id: "C11", slug: "mutual-inductance", title: "Mutual inductance", group: "Inductance", tier: "core",
    oneLiner: t`A changing current in one coil induces $e_2 = -M\dfrac{dI_1}{dt}$ in a neighbour; a coil round a long solenoid has $M = \dfrac{\mu_0N_1N_2A}{l}$`,
    prereqs: ["C08"], ext: [], sources: [S("Mutual Inductance")],
  },
  {
    id: "C12", slug: "coupling-coefficient", title: "The coefficient of coupling", group: "Inductance", tier: "core",
    oneLiner: t`$M = K\sqrt{L_1L_2}$: the coupling $K$ runs from $0$ for unlinked coils to $1$ when all the flux of each links the other`,
    prereqs: ["C11"], ext: [], sources: [S("Mutual Inductance")],
  },
  {
    id: "C13", slug: "transformer", title: "The transformer", group: "Inductance", tier: "core",
    oneLiner: t`Two coils on one iron core: $\dfrac{e_s}{e_p} = \dfrac{N_s}{N_p} = \dfrac{I_p}{I_s}$ for an ideal transformer, stepping voltage up or down`,
    prereqs: ["C11"], ext: [], sources: [S("Mutual Inductance")],
  },
];
