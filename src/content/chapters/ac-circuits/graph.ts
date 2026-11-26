import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * AC Circuits prerequisite graph (Balbharati Physics Std XII, Ch.13): average and rms values, phasors, R, L and C
 * alone on AC, the series LCR circuit, resonance, power, and LC oscillations.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/ac-circuits-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Alternating current
  {
    id: "C01", slug: "ac-rms", title: "Average and rms values", group: "Alternating current", tier: "core",
    oneLiner: t`For $e = e_0\sin\omega t$ the rms value is $\dfrac{e_0}{\sqrt{2}}$ and the half-cycle average is $\dfrac{2e_0}{\pi}$; over a full cycle the average is zero`,
    prereqs: [], ext: ["AC generator (Electromagnetic Induction, Ch.12)"], sources: [S("Average and RMS Values")],
  },
  {
    id: "C02", slug: "phasors", title: "Phasors", group: "Alternating current", tier: "core", visual: true,
    oneLiner: t`A sinusoidal voltage or current is a rotating arrow, a phasor, whose projection gives the instantaneous value; phase differences are angles between phasors`,
    prereqs: ["C01"], ext: [], sources: [S("Phasors and Types of AC Circuits")],
  },
  // R, L and C alone
  {
    id: "C03", slug: "resistor-ac", title: "A resistor on AC", group: "R, L and C alone", tier: "core",
    oneLiner: t`Through a resistor $i = \dfrac{e_0}{R}\sin\omega t$: current and voltage are in phase`,
    prereqs: ["C02"], ext: [], sources: [S("Phasors and Types of AC Circuits")],
  },
  {
    id: "C04", slug: "inductor-ac", title: "An inductor on AC", group: "R, L and C alone", tier: "core",
    oneLiner: t`An inductor's reactance $X_L = \omega L$ grows with frequency, and its current lags the voltage by $\dfrac{\pi}{2}$`,
    prereqs: ["C02"], ext: ["self-inductance (Electromagnetic Induction, Ch.12)"], sources: [S("Phasors and Types of AC Circuits")],
  },
  {
    id: "C05", slug: "capacitor-ac", title: "A capacitor on AC", group: "R, L and C alone", tier: "core",
    oneLiner: t`A capacitor's reactance $X_C = \dfrac{1}{\omega C}$ falls with frequency, and its current leads the voltage by $\dfrac{\pi}{2}$`,
    prereqs: ["C02"], ext: ["capacitance (Electrostatics, Ch.8)"], sources: [S("Phasors and Types of AC Circuits")],
  },
  // The LCR circuit
  {
    id: "C06", slug: "lcr-impedance", title: "The series LCR circuit", group: "The LCR circuit", tier: "core", visual: true,
    oneLiner: t`Impedance $Z = \sqrt{R^2 + \left(X_L - X_C\right)^2}$ and $\tan\phi = \dfrac{X_L - X_C}{R}$, from the phasor diagram`,
    prereqs: ["C03", "C04", "C05"], ext: [], sources: [S("Phasors and Types of AC Circuits")],
  },
  {
    id: "C07", slug: "series-resonance", title: "Series resonance and the Q factor", group: "The LCR circuit", tier: "core",
    oneLiner: t`At $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$, $X_L = X_C$, $Z = R$ and the current peaks; the Q factor $\dfrac{\omega_0L}{R}$ measures the sharpness`,
    prereqs: ["C06"], ext: [], sources: [S("Electrical Resonance and Q Factor")],
  },
  {
    id: "C08", slug: "parallel-resonance", title: "Parallel resonance", group: "The LCR circuit", tier: "core",
    oneLiner: t`L and C in parallel resonate at the same $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$, but there the impedance is greatest and the line current least: a rejector circuit`,
    prereqs: ["C07"], ext: [], sources: [S("Electrical Resonance and Q Factor")],
  },
  // Power and oscillations
  {
    id: "C09", slug: "ac-power", title: "Power in an AC circuit", group: "Power and oscillations", tier: "core",
    oneLiner: t`Average power $P = e_{rms}i_{rms}\cos\phi$; the power factor $\cos\phi = \dfrac{R}{Z}$, and a current at $90^\circ$ to the voltage is wattless`,
    prereqs: ["C06"], ext: [], sources: [S("Power in an AC Circuit")],
  },
  {
    id: "C10", slug: "lc-oscillations", title: "LC oscillations", group: "Power and oscillations", tier: "core",
    oneLiner: t`A charged capacitor across an inductor swaps energy between electric and magnetic fields at $f = \dfrac{1}{2\pi\sqrt{LC}}$`,
    prereqs: [], ext: ["energy stored in a capacitor (Electrostatics, Ch.8)", "energy stored in an inductor (Electromagnetic Induction, Ch.12)"], sources: [S("LC Oscillations")],
  },
];
