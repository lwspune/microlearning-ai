import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Magnetic Materials prerequisite graph (Balbharati Physics Std XII, Ch.11): a magnet in a field, the electron as
 * a magnet, magnetization and susceptibility, the three kinds of magnetic material, hysteresis and its uses.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/magnetic-materials-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // A magnet in a field
  {
    id: "C01", slug: "magnet-torque-energy", title: "Torque and energy of a magnet in a field", group: "A magnet in a field", tier: "core",
    oneLiner: t`A uniform field twists a magnet of moment $m$ with $\tau = mB\sin\theta$; turning it from $\theta_1$ to $\theta_2$ takes $mB\left(\cos\theta_1 - \cos\theta_2\right)$`,
    prereqs: [], ext: ["magnetic dipole moment of a loop (Magnetic Fields due to Electric Current, Ch.10)"], sources: [S("Torque on a Magnetic Dipole")],
  },
  {
    id: "C02", slug: "oscillating-magnet", title: "An oscillating magnet", group: "A magnet in a field", tier: "core",
    oneLiner: t`Twisted a little and let go, a magnet swings in S.H.M. with $T = 2\pi\sqrt{\dfrac{I}{mB}}$`,
    prereqs: ["C01"], ext: ["angular S.H.M. (Oscillations, Ch.5)"], sources: [S("Torque on a Magnetic Dipole")],
  },
  // Inside materials
  {
    id: "C03", slug: "electron-magnet", title: "The electron as a magnet", group: "Inside materials", tier: "core",
    oneLiner: t`An orbiting electron is a current loop of moment $\dfrac{evr}{2}$; its moment per unit angular momentum is $\dfrac{e}{2m_e}$, and the Bohr magneton is $\dfrac{eh}{4\pi m_e}$`,
    prereqs: [], ext: ["magnetic dipole moment of a loop (Magnetic Fields due to Electric Current, Ch.10)"], sources: [S("Origin of Magnetism in Materials")],
  },
  {
    id: "C04", slug: "magnetization", title: "Magnetization, intensity and susceptibility", group: "Inside materials", tier: "core",
    oneLiner: t`$M$ is magnetic moment per unit volume, $H$ the magnetising field; $B = \mu_0\left(H + M\right)$, $\chi = \dfrac{M}{H}$ and $\mu_r = 1 + \chi$`,
    prereqs: [], ext: ["magnetic field inside a solenoid (Magnetic Fields due to Electric Current, Ch.10)"], sources: [S("Magnetization and Magnetic Intensity")],
  },
  // Kinds of magnetic material
  {
    id: "C05", slug: "magnetic-materials-types", title: "Diamagnetic, paramagnetic and ferromagnetic materials", group: "Kinds of magnetic material", tier: "core",
    oneLiner: t`Diamagnets ($\chi < 0$) are weakly repelled, paramagnets (small $\chi > 0$) weakly attracted, ferromagnets (large $\chi$, domains) strongly attracted`,
    prereqs: ["C04"], ext: [], sources: [S("Diamagnetism, Paramagnetism and Ferromagnetism")],
  },
  {
    id: "C06", slug: "curie-law", title: "Curie's law and the Curie temperature", group: "Kinds of magnetic material", tier: "core",
    oneLiner: t`A paramagnet's susceptibility falls as $\chi \propto \dfrac{1}{T}$; above its Curie temperature a ferromagnet becomes paramagnetic`,
    prereqs: ["C05"], ext: [], sources: [S("Diamagnetism, Paramagnetism and Ferromagnetism")],
  },
  // Hysteresis and its uses
  {
    id: "C07", slug: "hysteresis", title: "Hysteresis", group: "Hysteresis and its uses", tier: "core", visual: true,
    oneLiner: t`$B$ lags behind $H$ round a loop: retentivity is $B$ left when $H = 0$, coercivity the $H$ needed to bring $B$ to zero`,
    prereqs: ["C05"], ext: [], sources: [S("Hysteresis")],
  },
  {
    id: "C08", slug: "magnet-uses", title: "Permanent magnets, electromagnets and shielding", group: "Hysteresis and its uses", tier: "core",
    oneLiner: t`High retentivity and coercivity make a permanent magnet; soft iron's low coercivity and narrow loop suit electromagnets and cores`,
    prereqs: ["C07"], ext: [], sources: [S("Permanent Magnets, Electromagnets and Magnetic Shielding"), S("Hysteresis")],
  },
];
