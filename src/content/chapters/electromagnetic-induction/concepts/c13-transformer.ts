import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Power reaches your town along lines at $33\ \mathrm{kV}$, yet the socket at home gives $230\ \mathrm{V}$. What brings the voltage down, with no moving parts?`,
    reveal: t`A step-down transformer: two coils on one iron core, the secondary with far fewer turns. The alternating flux induces the same emf in every turn, so $\dfrac{e_s}{e_p}$ $= \dfrac{N_s}{N_p}$.`,
  },
  explanation: {
    intuition: [
      t`A **transformer** changes an alternating voltage to a higher or lower one, with no moving parts.`,
      t`It has two coils on one iron core, with no wire joining them.`,
      t`The alternating current in the first coil sends a changing flux round the core and through the second: mutual induction.`,
      t`Every turn of either coil links the same flux, so each turn gets the same emf.`,
      t`So the coil with more turns has the larger emf, but carries the smaller current.`,
    ],
    formal: [
      {
        title: "Construction",
        points: [
          t`Two coils, insulated from each other, are wound on a common **core** of soft iron, a closed iron ring.`,
          t`The **primary**, of $N_p$ turns, takes in the alternating input.`,
          t`The **secondary**, of $N_s$ turns, gives the output; no wire joins the two coils.`,
          t`Soft iron keeps almost all the flux in the core, so the same flux threads both coils.`,
          t`Soft iron is easily magnetised and demagnetised, so little energy is lost each cycle.`,
          t`The core is laminated, thin insulated sheets, to cut down eddy currents.`,
        ],
        figure: {
          alt: "A transformer: a closed rectangular ring of soft iron. Step 2: the primary coil, a few turns wound on the left limb, with leads to the AC input. Step 3: the secondary coil, more turns wound on the right limb, with leads to the output; no wire joins the two coils. Step 4: a dashed loop with arrows round the core, the flux that threads both coils.",
          axes: "none",
          view: { x: [-3.4, 13.4], y: [-1.4, 7.2] },
          elements: [
            { kind: "segment", from: [1, 0], to: [9, 0], step: 1 },
            { kind: "segment", from: [9, 0], to: [9, 6], step: 1 },
            { kind: "segment", from: [9, 6], to: [1, 6], step: 1 },
            { kind: "segment", from: [1, 6], to: [1, 0], step: 1 },
            { kind: "segment", from: [3, 2], to: [7, 2], step: 1 },
            { kind: "segment", from: [7, 2], to: [7, 4], step: 1 },
            { kind: "segment", from: [7, 4], to: [3, 4], step: 1 },
            { kind: "segment", from: [3, 4], to: [3, 2], step: 1 },
            { kind: "label", at: [5, 6], label: "soft-iron core", labelAt: "n", step: 1 },
            { kind: "segment", from: [0.6, 1.5], to: [3.4, 1.8], step: 2, tone: "accent" },
            { kind: "segment", from: [0.6, 2.2], to: [3.4, 2.5], step: 2, tone: "accent" },
            { kind: "segment", from: [0.6, 2.9], to: [3.4, 3.2], step: 2, tone: "accent" },
            { kind: "segment", from: [0.6, 3.6], to: [3.4, 3.9], step: 2, tone: "accent" },
            { kind: "segment", from: [0.6, 1.5], to: [-0.8, 1.5], step: 2, tone: "accent" },
            { kind: "segment", from: [0.6, 3.6], to: [-0.8, 3.6], step: 2, tone: "accent" },
            { kind: "label", at: [-0.8, 2.55], label: "AC in", labelAt: "w", step: 2, tone: "accent" },
            { kind: "label", at: [2, 0], label: "primary (Nₚ)", labelAt: "s", step: 2, tone: "accent" },
            { kind: "segment", from: [6.6, 1], to: [9.4, 1.3], step: 3, tone: "good" },
            { kind: "segment", from: [6.6, 1.6], to: [9.4, 1.9], step: 3, tone: "good" },
            { kind: "segment", from: [6.6, 2.2], to: [9.4, 2.5], step: 3, tone: "good" },
            { kind: "segment", from: [6.6, 2.8], to: [9.4, 3.1], step: 3, tone: "good" },
            { kind: "segment", from: [6.6, 3.4], to: [9.4, 3.7], step: 3, tone: "good" },
            { kind: "segment", from: [6.6, 4], to: [9.4, 4.3], step: 3, tone: "good" },
            { kind: "segment", from: [6.6, 4.6], to: [9.4, 4.9], step: 3, tone: "good" },
            { kind: "segment", from: [9.4, 1.3], to: [10.8, 1.3], step: 3, tone: "good" },
            { kind: "segment", from: [9.4, 4.9], to: [10.8, 4.9], step: 3, tone: "good" },
            { kind: "label", at: [10.8, 3.1], label: "AC out", labelAt: "e", step: 3, tone: "good" },
            { kind: "label", at: [8, 0], label: "secondary (Nₛ)", labelAt: "s", step: 3, tone: "good" },
            { kind: "segment", from: [2, 1], to: [8, 1], step: 4, tone: "muted", dashed: true },
            { kind: "segment", from: [8, 1], to: [8, 5], step: 4, tone: "muted", dashed: true },
            { kind: "segment", from: [8, 5], to: [2, 5], step: 4, tone: "muted", dashed: true },
            { kind: "segment", from: [2, 5], to: [2, 1], step: 4, tone: "muted", dashed: true },
            { kind: "vector", from: [4.4, 5], to: [5.6, 5], tone: "muted", step: 4, label: "Φ", labelAt: "s" },
            { kind: "vector", from: [5.6, 1], to: [4.4, 1], tone: "muted", step: 4 },
          ],
        },
      },
      {
        title: "The emf ratio",
        points: [
          t`Let $\Phi$ be the flux through each turn at any instant; it is the same for both coils.`,
          t`The secondary's emf is $e_s = -N_s\dfrac{d\Phi}{dt}$.`,
          t`In an ideal transformer, the primary's back emf equals the applied emf: $e_p = -N_p\dfrac{d\Phi}{dt}$.`,
          t`Dividing, $\dfrac{e_s}{e_p}$ $= \dfrac{N_s}{N_p}$.`,
          t`$K = \dfrac{N_s}{N_p}$ is the **turns ratio**; the emf per turn, $\dfrac{e}{N}$, is the same in both coils.`,
        ],
      },
      {
        title: "Currents and power",
        points: [
          t`An **ideal** transformer wastes no energy: the power put in equals the power given out.`,
          t`So $e_pI_p = e_sI_s$, where $I_p$ and $I_s$ are the currents in the primary and secondary.`,
          t`Hence $\dfrac{e_s}{e_p}$ $= \dfrac{N_s}{N_p}$ $= \dfrac{I_p}{I_s}$.`,
          t`The current changes in the opposite way to the emf: $I_s = I_p\dfrac{N_p}{N_s}$.`,
          t`The primary current is not passed across by a wire; the energy crosses through the changing flux.`,
        ],
      },
      {
        title: "Step-up and step-down",
        points: [
          t`**Step-up**: $N_s > N_p$, so $K > 1$; the emf rises and the current falls.`,
          t`Its secondary has many turns of thin wire, since it carries a small current.`,
          t`**Step-down**: $N_s < N_p$, so $K < 1$; the emf falls and the current rises.`,
          t`Its secondary has few turns of thick wire, since it carries a large current.`,
          t`Power stations step up to send power at high voltage and low current, losing less as heat in the lines.`,
          t`Near homes, step-down transformers bring the voltage back down.`,
        ],
      },
      {
        title: "Why AC, not DC",
        points: [
          t`A steady direct current gives a steady flux: $\dfrac{d\Phi}{dt} = 0$.`,
          t`So no emf is induced in the secondary, apart from a brief one as the current is switched on or off.`,
          t`With no changing flux there is no back emf in the primary either.`,
          t`Its resistance is small, so it would draw a large current and overheat.`,
          t`A transformer therefore works only on AC, and gives AC of the same frequency.`,
        ],
      },
      {
        title: "Losses and efficiency",
        points: [
          t`**Copper loss**: heating of the windings by their resistance, kept low with thick copper wire.`,
          t`**Eddy-current loss**: heating of the core by eddy currents, cut by laminating it.`,
          t`**Hysteresis loss**: energy spent magnetising the core back and forth each cycle, kept low with soft iron.`,
          t`**Flux leakage**: some primary flux misses the secondary, reduced by winding the coils one over the other.`,
          t`**Efficiency** $\eta$ $= \dfrac{\text{output power}}{\text{input power}} \times 100\%$.`,
          t`A real transformer has $\eta < 100\%$; large ones reach about $95\%$ to $99\%$.`,
        ],
      },
    ],
    worked: {
      prompt: t`An ideal transformer has $500$ turns on its primary and $2500$ on its secondary. Its primary is connected to $230\ \mathrm{V}$ AC and takes $2.0\ \mathrm{A}$. Find the emf and current in the secondary.`,
      steps: [
        t`The turns ratio is $K = \dfrac{N_s}{N_p}$ $= \dfrac{2500}{500} = 5$: a step-up transformer.`,
        t`$e_s = Ke_p$ $= 5 \times 230 = 1150\ \mathrm{V}$.`,
        t`$I_s = \dfrac{I_p}{K}$ $= \dfrac{2.0}{5}$ $= 0.40\ \mathrm{A}$.`,
        t`Check: $e_pI_p = 230 \times 2.0$ $= 460\ \mathrm{W}$, and $e_sI_s$ $= 1150 \times 0.40$ $= 460\ \mathrm{W}$.`,
      ],
      answer: t`$1150\ \mathrm{V}$ and $0.40\ \mathrm{A}$`,
    },
    visualSpec: t`Drag the number of secondary turns and watch the output voltage and current change, with the power staying the same.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Turns the turns ratio upside down: thinks the coil with more turns has the lower emf.",
      remediation: t`Each turn links the same flux and gets the same emf, so $\dfrac{e_s}{e_p}$ $= \dfrac{N_s}{N_p}$: more turns, more emf.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: "Thinks the current steps up or down with the voltage.",
      remediation: t`Power in equals power out, $e_pI_p = e_sI_s$, so the current changes the opposite way: $\dfrac{I_s}{I_p}$ $= \dfrac{N_p}{N_s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M3",
      mistake: "Thinks a transformer works on a steady direct current.",
      remediation: "Mutual induction needs a changing current. A steady current gives a steady flux, which induces no emf in the secondary.",
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C13-M4",
      mistake: "Thinks the power changes in the same ratio as the voltage.",
      remediation: "A transformer cannot create energy. Ideally the power out equals the power in; raising the voltage lowers the current.",
      fallback: { kind: "none" },
    },
    {
      id: "C13-M5",
      mistake: t`Gives the extra turns, $N_s - N_p$, instead of $N_s$.`,
      remediation: t`$N_s = N_p\dfrac{e_s}{e_p}$ is the whole number of turns on the secondary.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M6",
      mistake: "Thinks the coils are joined, so the same current flows through both.",
      remediation: t`No wire joins the primary and secondary. Energy crosses through the changing flux, and $I_s = I_p\dfrac{N_p}{N_s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M7",
      mistake: "Divides the input power by the output power.",
      remediation: t`$\eta$ $= \dfrac{\text{output}}{\text{input}} \times 100\%$; it can never exceed $100\%$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M8",
      mistake: "Gives the fraction of the power lost, not the fraction delivered.",
      remediation: t`Efficiency is the fraction delivered: $\dfrac{\text{output}}{\text{input}} \times 100\%$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M9",
      mistake: "Stops at the turns ratio, forgetting to multiply.",
      remediation: t`The ratio $\dfrac{N_s}{N_p}$ is only a factor: multiply $N_p$ (or $I_p$) by the right ratio.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.1(x)" },
      stem: t`A transformer increases an alternating emf from $220\ \mathrm{V}$ to $880\ \mathrm{V}$. If its primary coil has $1000$ turns, how many turns does its secondary coil have?`,
      verify: { kind: "value", inputs: { ep: "220", es: "880", Np: "1000" }, params: { ask: "Ns" } },
      options: [
        { key: "A", text: t`$4000$`, correct: true, value: "4000" },
        { key: "B", text: t`$250$`, correct: false, misconceptionId: "C13-M1", value: "250" },
        { key: "C", text: t`$3000$`, correct: false, misconceptionId: "C13-M5", value: "3000" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C13-M9", value: "4" },
      ],
      solution: {
        steps: [
          t`$\dfrac{N_s}{N_p}$ $= \dfrac{e_s}{e_p}$ $= \dfrac{880}{220} = 4$.`,
          t`$N_s = 4 \times 1000 = 4000$ turns.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.4" },
      stem: t`Which statement describes an ideal step-down transformer?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "down" } },
      options: [
        { key: "A", text: t`Its secondary has fewer turns than its primary; it lowers the voltage and raises the current`, correct: true, value: "fewer_bigI" },
        { key: "B", text: t`Its secondary has fewer turns than its primary; it lowers both the voltage and the current`, correct: false, misconceptionId: "C13-M2", value: "fewer_smallI" },
        { key: "C", text: t`Its secondary has more turns than its primary; it lowers the voltage and raises the current`, correct: false, misconceptionId: "C13-M1", value: "more_bigI" },
        { key: "D", text: t`Its secondary has fewer turns than its primary; it lowers the voltage and the power in the same ratio`, correct: false, misconceptionId: "C13-M4", value: "less_power" },
      ],
      solution: {
        steps: [
          t`A step-down transformer has $N_s < N_p$, so $e_s < e_p$.`,
          t`Ideally the power is unchanged, $e_pI_p = e_sI_s$, so $I_s > I_p$.`,
          t`It lowers the voltage and raises the current.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.7" },
      stem: t`On what principle does a transformer work?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "how" } },
      options: [
        { key: "A", text: t`Amplification: the iron core adds energy, so more power comes out than goes in`, correct: false, misconceptionId: "C13-M4", value: "core_adds" },
        { key: "B", text: t`Mutual induction: a changing current in the primary induces an emf in the secondary`, correct: true, value: "mutual_changing" },
        { key: "C", text: t`Mutual induction, which works as well with a steady direct current as with AC`, correct: false, misconceptionId: "C13-M3", value: "mutual_dc" },
        { key: "D", text: t`Conduction: current flows from the primary through the iron core into the secondary`, correct: false, misconceptionId: "C13-M6", value: "conduction" },
      ],
      solution: {
        steps: [
          t`The coils are not joined; the primary's changing current sends a changing flux round the core.`,
          t`That flux threads the secondary and induces an emf in it: mutual induction.`,
          t`A steady current would give no change of flux, so a transformer needs AC.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.27" },
      stem: t`An ideal transformer has $2000$ turns on its primary and $100$ turns on its secondary. The current in the primary is $0.20\ \mathrm{A}$. What is the current in the secondary?`,
      verify: { kind: "value", inputs: { Np: "2000", Ns: "100", Ip: "0.20" }, params: { ask: "Is" } },
      options: [
        { key: "A", text: t`$0.01\ \mathrm{A}$`, correct: false, misconceptionId: "C13-M2", value: "0.0100000000000000" },
        { key: "B", text: t`$0.2\ \mathrm{A}$`, correct: false, misconceptionId: "C13-M6", value: "0.200000000000000" },
        { key: "C", text: t`$20\ \mathrm{A}$`, correct: false, misconceptionId: "C13-M9", value: "20" },
        { key: "D", text: t`$4\ \mathrm{A}$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`$\dfrac{I_s}{I_p}$ $= \dfrac{N_p}{N_s}$ $= \dfrac{2000}{100} = 20$.`,
          t`$I_s = 20 \times 0.20$ $= 4\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "authored" },
      stem: t`A transformer takes $5.0\ \mathrm{A}$ from a $220\ \mathrm{V}$ supply and delivers $9.0\ \mathrm{A}$ at $110\ \mathrm{V}$. What is its efficiency?`,
      verify: { kind: "value", inputs: { ep: "220", Ip: "5.0", es: "110", Is: "9.0" }, params: { ask: "eff" } },
      options: [
        { key: "A", text: t`$90\%$`, correct: true, value: "90" },
        { key: "B", text: t`$111\%$`, correct: false, misconceptionId: "C13-M7", value: "111" },
        { key: "C", text: t`$10\%$`, correct: false, misconceptionId: "C13-M8", value: "10" },
        { key: "D", text: t`$50\%$`, correct: false, misconceptionId: "C13-M4", value: "50" },
      ],
      solution: {
        steps: [
          t`Input power $= 220 \times 5.0$ $= 1100\ \mathrm{W}$.`,
          t`Output power $= 110 \times 9.0 = 990\ \mathrm{W}$.`,
          t`$\eta$ $= \dfrac{990}{1100} \times 100\%$ $= 90\%$.`,
        ],
      },
    },
  ],
};
