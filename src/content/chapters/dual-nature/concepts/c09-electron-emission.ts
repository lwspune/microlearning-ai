import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A copper wire is full of free electrons: they carry the current through it. Why don't they simply drift out of the wire into the air?`,
    reveal: t`At the surface the positive ions of the metal pull back any electron that starts to leave. It escapes only if it is given a certain least energy, the metal's work function.`,
  },
  explanation: {
    intuition: [
      t`A metal has **free electrons** that wander through it and carry current.`,
      t`They do not leak out: at the surface, the metal's positive ions pull them back.`,
      t`An electron escapes only if something gives it enough energy to break free.`,
      t`The least energy that frees an electron is the metal's **work function**, $\phi_0$.`,
      t`An electron leaves a metal only if it gets at least the work function $\phi_0$: by heat, a strong field, or light.`,
      t`The smaller a metal's $\phi_0$, the more readily it gives out electrons.`,
    ],
    formal: [
      {
        title: "The surface barrier",
        points: [
          t`Inside a metal, free electrons move among the positive ions, and the pulls on them cancel.`,
          t`An electron at the surface has ions on one side only, so it is pulled back in.`,
          t`Leaving needs energy: this step at the surface is the **potential barrier**, or surface barrier.`,
          t`The **work function** $\phi_0$ is the least energy that lifts an electron over the barrier.`,
          t`Given less than $\phi_0$, the electron stays in; given at least $\phi_0$, it can leave.`,
        ],
        figure: {
          alt: "An energy picture of a metal's surface. Step 1: free electrons sit on a low energy level inside the metal. Step 3: at the surface the level steps up to a higher one outside, in the vacuum: the potential barrier. Step 4: an arrow from the inside level up to the outside level is the work function. Step 5: an electron given that much energy sits on the outside level, free.",
          axes: "none",
          view: { x: [0, 10], y: [-0.4, 4.2] },
          elements: [
            { kind: "segment", from: [0.4, 1], to: [5, 1], step: 1 },
            { kind: "point", at: [1.2, 1], step: 1 },
            { kind: "point", at: [2.4, 1], step: 1 },
            { kind: "point", at: [3.6, 1], step: 1 },
            { kind: "label", at: [2.4, 1.05], label: "free electrons", labelAt: "n", step: 1 },
            { kind: "label", at: [2.4, 0.7], label: "metal", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [5, 1], to: [5, 3.4], tone: "bad", step: 3 },
            { kind: "segment", from: [5, 3.4], to: [9.6, 3.4], step: 3 },
            { kind: "label", at: [5, 2.2], label: "barrier", labelAt: "w", tone: "bad", step: 3 },
            { kind: "label", at: [8.6, 0.7], label: "vacuum", labelAt: "s", tone: "muted", step: 3 },
            { kind: "segment", from: [5, 1], to: [7.4, 1], dashed: true, tone: "muted", step: 4 },
            { kind: "vector", from: [7.4, 1], to: [7.4, 3.4], tone: "good", step: 4 },
            { kind: "label", at: [7.4, 2.2], label: "φ₀", labelAt: "e", tone: "good", step: 4 },
            { kind: "point", at: [8.9, 3.4], tone: "good", step: 5 },
            { kind: "label", at: [8.9, 3.45], label: "freed", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "The electron volt",
        points: [
          t`In joules, work functions are tiny, so they are given in **electron volts** (eV).`,
          t`$1\ \mathrm{eV}$ is the energy an electron gains when it moves through a potential difference of $1\ \mathrm{V}$.`,
          t`That energy is $e \times 1\ \mathrm{V}$, with $e = 1.6 \times 10^{-19}\ \mathrm{C}$.`,
          t`So $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$.`,
          t`eV to joules: multiply by $1.6 \times 10^{-19}$. Joules to eV: divide by it.`,
          t`Check the size: a work function is a few eV, or a few times $10^{-19}\ \mathrm{J}$.`,
        ],
      },
      {
        title: "Work functions of metals",
        points: [
          t`$\phi_0$ depends on the metal, and on its surface: dirt or an oxide layer changes it.`,
          t`All electrons are alike; what differs is how strongly each metal's ions hold them.`,
          t`Caesium has the lowest work function, about $2.14\ \mathrm{eV}$.`,
          t`Potassium $2.30\ \mathrm{eV}$, sodium $2.75\ \mathrm{eV}$, copper $4.65\ \mathrm{eV}$; platinum is high, about $5.65\ \mathrm{eV}$.`,
          t`The smaller $\phi_0$, the less energy each electron needs, so the more readily the metal emits.`,
          t`Compare work functions only in one unit: convert any given in joules to eV first.`,
        ],
      },
      {
        title: "Three ways to free electrons",
        points: [
          t`**Thermionic emission**: heating gives the free electrons enough thermal energy to escape.`,
          t`It frees electrons from a hot filament, as in old radio valves and in X-ray tubes.`,
          t`**Field emission**: a very strong electric field, about $10^8\ \mathrm{V/m}$, pulls electrons out of a cold metal.`,
          t`It happens across the gap of a spark plug.`,
          t`**Photoelectric emission**: light of high enough frequency gives the electrons the energy, as in a photocell.`,
          t`Name the process by what supplies the energy: heat, field or light. A filament's glow frees nothing.`,
        ],
      },
      {
        title: "Emission by light",
        points: [
          t`Light delivers energy in packets called **photons**; a photon's energy rises with the light's frequency.`,
          t`An electron takes in one photon's energy at once; it does not store up energy from several.`,
          t`If one photon gives less than $\phi_0$, no electron leaves, however bright the light or long it shines.`,
          t`Visible photons carry from about $1.8\ \mathrm{eV}$ (red) to $3.1\ \mathrm{eV}$ (violet).`,
          t`The alkali metals (lithium, sodium, potassium, rubidium, caesium) have $\phi_0$ below about $3\ \mathrm{eV}$: visible light frees electrons.`,
          t`Zinc, cadmium and magnesium have larger $\phi_0$ and need ultraviolet light.`,
        ],
      },
    ],
    worked: {
      prompt: t`The work function of calcium is $3.20\ \mathrm{eV}$ and that of copper is $7.44 \times 10^{-19}\ \mathrm{J}$. Which metal gives out electrons more readily? Do photons of $4.0\ \mathrm{eV}$ free electrons from each?`,
      steps: [
        t`Put both in eV. Copper: $\dfrac{7.44 \times 10^{-19}}{1.6 \times 10^{-19}}$ $= 4.65\ \mathrm{eV}$.`,
        t`Calcium's $\phi_0$, $3.20\ \mathrm{eV}$, is the smaller, so calcium gives out electrons more readily.`,
        t`Calcium: $4.0\ \mathrm{eV} > 3.20\ \mathrm{eV}$, so each photon can free an electron.`,
        t`Copper: $4.0\ \mathrm{eV} < 4.65\ \mathrm{eV}$, so no electron leaves, however bright the light.`,
      ],
      answer: t`Calcium; $4.0\ \mathrm{eV}$ photons free electrons from calcium but not from copper`,
    },
    visualSpec: t`Drag a slider for the energy given to one electron and watch it fall back below the barrier or leave once the energy reaches $\phi_0$, for metals of different work function.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Thinks a larger work function means the metal gives out electrons more easily.",
      remediation: t`$\phi_0$ is the energy an electron must be given to escape: the smaller it is, the more readily the metal emits.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Thinks every metal has the same work function, since all electrons are alike.",
      remediation: t`The electrons are alike, but each metal's ions hold them differently: $\phi_0$ depends on the metal and its surface.`,
      fallback: { kind: "ext", topic: "free electrons in metals (Current Electricity)" },
    },
    {
      id: "C09-M3",
      mistake: t`Thinks bright enough light frees electrons even when each photon carries less than $\phi_0$.`,
      remediation: t`Brighter light brings more photons, not bigger ones. If one photon gives less than $\phi_0$, no electron leaves.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks light frees electrons by slowly warming the metal, so electrons store up energy over time.",
      remediation: "An electron takes one photon's energy at once and does not store it: emission by light is not a heating effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Names the emission after what the device gives out: a glowing filament or a bright spark suggests emission by light.",
      remediation: "Name the process by its energy source: heat in a filament (thermionic), a strong field in a spark plug (field).",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Swaps thermionic and field emission.",
      remediation: t`Thermionic: heating supplies the energy. Field: a very strong electric field, about $10^8\ \mathrm{V/m}$, pulls electrons out of a cold metal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Treats an electron volt as a joule, leaving the number unchanged.",
      remediation: t`$1\ \mathrm{eV}$ is the energy of charge $e$ across $1\ \mathrm{V}$, $1.6 \times 10^{-19}\ \mathrm{J}$: convert before comparing or answering.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: t`Converts the wrong way: divides by $1.6 \times 10^{-19}$ to get joules, or multiplies to get eV.`,
      remediation: t`eV to joules: multiply by $1.6 \times 10^{-19}$; joules to eV: divide. A work function is a few eV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: t`Writes $1\ \mathrm{eV} = 1.6 \times 10^{19}\ \mathrm{J}$, dropping the minus sign of the power.`,
      remediation: t`$1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$: an electron's energies are tiny in joules.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-12 2026 55/5/1 Q27" },
      stem: t`A metal has work function $\phi_0 = 1.96\ \mathrm{eV}$. What is the least energy, in joules, needed to pull an electron out of it?`,
      verify: { kind: "value", inputs: { phi_eV: "1.96" }, params: { ask: "to_J" } },
      options: [
        { key: "A", text: t`$1.22 \times 10^{19}\ \mathrm{J}$`, correct: false, misconceptionId: "C09-M8", value: "12200000000000000000" },
        { key: "B", text: t`$3.14 \times 10^{19}\ \mathrm{J}$`, correct: false, misconceptionId: "C09-M9", value: "31400000000000000000" },
        { key: "C", text: t`$3.14 \times 10^{-19}\ \mathrm{J}$`, correct: true, value: "3.14000000000000e-19" },
        { key: "D", text: t`$1.96\ \mathrm{J}$`, correct: false, misconceptionId: "C09-M7", value: "1.96000000000000" },
      ],
      solution: {
        steps: [
          t`eV to joules: multiply by $1.6 \times 10^{-19}$.`,
          t`$1.96 \times 1.6 \times 10^{-19}$ $= 3.14 \times 10^{-19}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-12 2024 55/2/1 Q8" },
      stem: t`The least energy needed to free an electron from a photosensitive surface is $5.30 \times 10^{-19}\ \mathrm{J}$. What is its work function in electron volts?`,
      verify: { kind: "value", inputs: { E_J: "5.30e-19" }, params: { ask: "to_eV" } },
      options: [
        { key: "A", text: t`$3.31\ \mathrm{eV}$`, correct: true, value: "3.31000000000000" },
        { key: "B", text: t`$5.3 \times 10^{-19}\ \mathrm{eV}$`, correct: false, misconceptionId: "C09-M7", value: "5.30000000000000e-19" },
        { key: "C", text: t`$8.48 \times 10^{-38}\ \mathrm{eV}$`, correct: false, misconceptionId: "C09-M8", value: "8.48000000000000e-38" },
        { key: "D", text: t`$3.31 \times 10^{-38}\ \mathrm{eV}$`, correct: false, misconceptionId: "C09-M9", value: "3.31000000000000e-38" },
      ],
      solution: {
        steps: [
          t`Joules to eV: divide by $1.6 \times 10^{-19}$.`,
          t`$\dfrac{5.30 \times 10^{-19}}{1.6 \times 10^{-19}}$ $= 3.31\ \mathrm{eV}$.`,
          t`Check: a few eV, the right size for a work function.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-12 2024 55/3/2 Q20" },
      stem: t`The work functions of three metals are: caesium $2.14\ \mathrm{eV}$, sodium $4.40 \times 10^{-19}\ \mathrm{J}$ and platinum $5.65\ \mathrm{eV}$. Which metal gives out electrons most readily?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "readily" } },
      options: [
        { key: "A", text: t`Platinum`, correct: false, misconceptionId: "C09-M1", value: "platinum" },
        { key: "B", text: t`All three alike: their free electrons are the same particles`, correct: false, misconceptionId: "C09-M2", value: "all_alike" },
        { key: "C", text: t`Sodium`, correct: false, misconceptionId: "C09-M7", value: "sodium" },
        { key: "D", text: t`Caesium`, correct: true, value: "caesium" },
      ],
      solution: {
        steps: [
          t`Put all three in eV. Sodium: $\dfrac{4.40 \times 10^{-19}}{1.6 \times 10^{-19}}$ $= 2.75\ \mathrm{eV}$.`,
          t`Caesium's $2.14\ \mathrm{eV}$ is the smallest, so its electrons need the least energy to leave.`,
          t`So caesium gives out electrons most readily.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`Match each device with the way electrons leave its metal: (i) the hot filament of an old radio valve, (ii) the electrodes of a spark plug, (iii) the cathode of a photocell.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "match" } },
      options: [
        { key: "A", text: t`(i) thermionic, (ii) field, (iii) photoelectric`, correct: true, value: "T_F_P" },
        { key: "B", text: t`(i) thermionic, (ii) field, (iii) thermionic`, correct: false, misconceptionId: "C09-M4", value: "T_F_T" },
        { key: "C", text: t`(i) photoelectric, (ii) photoelectric, (iii) photoelectric`, correct: false, misconceptionId: "C09-M5", value: "P_P_P" },
        { key: "D", text: t`(i) field, (ii) thermionic, (iii) photoelectric`, correct: false, misconceptionId: "C09-M6", value: "F_T_P" },
      ],
      solution: {
        steps: [
          t`(i) In a hot filament, heat supplies the energy: thermionic emission.`,
          t`(ii) In a spark plug, a very strong field pulls electrons out: field emission.`,
          t`(iii) In a photocell, light supplies the energy: photoelectric emission.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "cbse-12 2024 55/3/3 Q20" },
      stem: t`Light of wavelength $600\ \mathrm{nm}$ falls on potassium, whose work function is $2.3\ \mathrm{eV}$. Each photon of this light carries about $3.3 \times 10^{-19}\ \mathrm{J}$. Are electrons emitted?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "will_emit" } },
      options: [
        { key: "A", text: t`Yes, after a while, once each electron has stored up $2.3\ \mathrm{eV}$`, correct: false, misconceptionId: "C09-M4", value: "yes_after_delay" },
        { key: "B", text: t`Yes: $3.3$ is more than $2.3$, so each photon has enough`, correct: false, misconceptionId: "C09-M7", value: "yes_raw_numbers" },
        { key: "C", text: t`No: a photon gives at most about $2.1\ \mathrm{eV}$, below $2.3\ \mathrm{eV}$`, correct: true, value: "no_emission" },
        { key: "D", text: t`Not by dim light, but bright enough light would free them`, correct: false, misconceptionId: "C09-M3", value: "yes_if_bright" },
      ],
      solution: {
        steps: [
          t`In eV, each photon carries $\dfrac{3.3 \times 10^{-19}}{1.6 \times 10^{-19}}$ $\approx 2.1\ \mathrm{eV}$.`,
          t`An electron takes one photon's energy at a time, and $2.1\ \mathrm{eV} < 2.3\ \mathrm{eV}$.`,
          t`So no electron leaves, however bright the light or however long it shines.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "cbse-12 2023 55/2/1 Q10" },
      stem: t`Which one of these metals gives out no electrons when lit by visible light: rubidium, sodium, cadmium or caesium?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "visible" } },
      options: [
        { key: "A", text: t`None: bright enough visible light frees electrons from any metal`, correct: false, misconceptionId: "C09-M3", value: "none_bright" },
        { key: "B", text: t`Cadmium`, correct: true, value: "cadmium" },
        { key: "C", text: t`Caesium`, correct: false, misconceptionId: "C09-M1", value: "caesium" },
        { key: "D", text: t`None: every metal holds its electrons equally, so all four behave alike`, correct: false, misconceptionId: "C09-M2", value: "none_alike" },
      ],
      solution: {
        steps: [
          t`Visible photons carry at most about $3.1\ \mathrm{eV}$.`,
          t`Rubidium, sodium and caesium are alkali metals, with $\phi_0$ below about $3\ \mathrm{eV}$: visible light frees their electrons.`,
          t`Cadmium's $\phi_0$ is about $4.2\ \mathrm{eV}$, so only ultraviolet light frees its electrons.`,
        ],
      },
    },
  ],
};
