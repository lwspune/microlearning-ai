import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Weigh a helium-4 nucleus and it is lighter than the 2 protons and 2 neutrons that make it. Where did the missing mass go?`,
    reveal: t`It was released as energy when the nucleons bound together: $E = mc^2$. That energy is the binding energy.`,
  },
  explanation: {
    intuition: [
      t`A nucleus weighs less than its separate nucleons: the **mass defect**.`,
      t`The missing mass became binding energy.`,
      t`Dividing by the number of nucleons gives binding energy per nucleon.`,
      t`The higher it is, the more stable the nucleus.`,
    ],
    formal: [
      {
        title: "Mass defect",
        points: [
          t`$\Delta m = Z\,m_{\mathrm{H}} + N\,m_{\mathrm{n}} - m_{\text{atom}}$.`,
          t`Binding energy = $\Delta m \times 931.5$ MeV (Δm in u).`,
        ],
        figure: {
          alt: "The same curve with oxygen-16 marked at about 8.0 MeV per nucleon: its 16 nucleons are bound by about 128 MeV in all.",
          axes: "xy",
          chart: { x: 50, y: 2, xTitle: "Mass number A", yTitle: "BE per nucleon (MeV)" },
          view: { x: [0, 250], y: [0, 10] },
          elements: [
            { kind: "segment", from: [2, 1.1], to: [4, 7.07], step: 1 },
            { kind: "segment", from: [4, 7.07], to: [6, 5.3], step: 1 },
            { kind: "segment", from: [6, 5.3], to: [12, 7.68], step: 1 },
            { kind: "segment", from: [12, 7.68], to: [16, 7.98], step: 1 },
            { kind: "segment", from: [16, 7.98], to: [30, 8.5], step: 1 },
            { kind: "segment", from: [30, 8.5], to: [56, 8.79], step: 1 },
            { kind: "segment", from: [56, 8.79], to: [100, 8.6], step: 1 },
            { kind: "segment", from: [100, 8.6], to: [150, 8.3], step: 1 },
            { kind: "segment", from: [150, 8.3], to: [200, 7.9], step: 1 },
            { kind: "segment", from: [200, 7.9], to: [238, 7.57], step: 1 },
            { kind: "point", at: [16, 7.98], label: "O-16", labelAt: "se", step: 2 },
          ],
        },
      },
      {
        title: "Binding energy per nucleon",
        points: [
          t`BE per nucleon = binding energy ÷ A.`,
          t`It peaks near iron-56 (about 8.8 MeV).`,
        ],
        figure: {
          alt: "Nuclei near the peak, around iron-56, are the most stable. Light nuclei gain stability by fusing (moving right up the curve); heavy nuclei by splitting (moving left up the curve).",
          axes: "xy",
          chart: { x: 50, y: 2, xTitle: "Mass number A", yTitle: "BE per nucleon (MeV)" },
          view: { x: [0, 250], y: [0, 10] },
          elements: [
            { kind: "segment", from: [2, 1.1], to: [4, 7.07], step: 1 },
            { kind: "segment", from: [4, 7.07], to: [6, 5.3], step: 1 },
            { kind: "segment", from: [6, 5.3], to: [12, 7.68], step: 1 },
            { kind: "segment", from: [12, 7.68], to: [16, 7.98], step: 1 },
            { kind: "segment", from: [16, 7.98], to: [30, 8.5], step: 1 },
            { kind: "segment", from: [30, 8.5], to: [56, 8.79], step: 1 },
            { kind: "segment", from: [56, 8.79], to: [100, 8.6], step: 1 },
            { kind: "segment", from: [100, 8.6], to: [150, 8.3], step: 1 },
            { kind: "segment", from: [150, 8.3], to: [200, 7.9], step: 1 },
            { kind: "segment", from: [200, 7.9], to: [238, 7.57], step: 1 },
            { kind: "point", at: [56, 8.79], label: "Fe-56", labelAt: "n", step: 1 },
            { kind: "label", at: [10, 4], label: "fusion →", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [240, 6.4], label: "← fission", labelAt: "w", tone: "good", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Helium-4 has a binding energy of 28.3 MeV. Find its binding energy per nucleon.`,
      steps: [
        t`Helium-4 has 4 nucleons.`,
        t`28.3 ÷ 4 = 7.07 MeV.`,
      ],
      answer: t`7.07 MeV`,
      figure: {
        alt: "Helium-4 sits on the curve at 28.3 ÷ 4 = 7.07 MeV per nucleon, a sharp peak among the light nuclei.",
        axes: "xy",
        chart: { x: 50, y: 2, xTitle: "Mass number A", yTitle: "BE per nucleon (MeV)" },
        view: { x: [0, 250], y: [0, 10] },
        elements: [
          { kind: "segment", from: [2, 1.1], to: [4, 7.07], step: 1 },
          { kind: "segment", from: [4, 7.07], to: [6, 5.3], step: 1 },
          { kind: "segment", from: [6, 5.3], to: [12, 7.68], step: 1 },
          { kind: "segment", from: [12, 7.68], to: [16, 7.98], step: 1 },
          { kind: "segment", from: [16, 7.98], to: [30, 8.5], step: 1 },
          { kind: "segment", from: [30, 8.5], to: [56, 8.79], step: 1 },
          { kind: "segment", from: [56, 8.79], to: [100, 8.6], step: 1 },
          { kind: "segment", from: [100, 8.6], to: [150, 8.3], step: 1 },
          { kind: "segment", from: [150, 8.3], to: [200, 7.9], step: 1 },
          { kind: "segment", from: [200, 7.9], to: [238, 7.57], step: 1 },
          { kind: "point", at: [4, 7.07], label: "He-4", labelAt: "ne", step: 2 },
        ],
      },
    },
    figure: {
      alt: "Binding energy per nucleon against mass number: it rises steeply for light nuclei, peaks at about 8.8 MeV near iron-56, then falls slowly to about 7.6 MeV for uranium-238.",
      axes: "xy",
      chart: { x: 50, y: 2, xTitle: "Mass number A", yTitle: "BE per nucleon (MeV)" },
      view: { x: [0, 250], y: [0, 10] },
      elements: [
        { kind: "segment", from: [2, 1.1], to: [4, 7.07], step: 1 },
        { kind: "segment", from: [4, 7.07], to: [6, 5.3], step: 1 },
        { kind: "segment", from: [6, 5.3], to: [12, 7.68], step: 1 },
        { kind: "segment", from: [12, 7.68], to: [16, 7.98], step: 1 },
        { kind: "segment", from: [16, 7.98], to: [30, 8.5], step: 1 },
        { kind: "segment", from: [30, 8.5], to: [56, 8.79], step: 1 },
        { kind: "segment", from: [56, 8.79], to: [100, 8.6], step: 1 },
        { kind: "segment", from: [100, 8.6], to: [150, 8.3], step: 1 },
        { kind: "segment", from: [150, 8.3], to: [200, 7.9], step: 1 },
        { kind: "segment", from: [200, 7.9], to: [238, 7.57], step: 1 },
        { kind: "point", at: [56, 8.79], label: "Fe-56", labelAt: "n", step: 2 },
      ],
    },
    visualSpec: t`Weigh nucleons apart and together, then plot binding energy per nucleon against mass number.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Divides by Z.",
      remediation: "Divide by A, the number of nucleons.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Multiplies.",
      remediation: "Per nucleon means divide by A.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Divides by N.",
      remediation: "All A nucleons share the binding energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Counts every nucleon as H.",
      remediation: "Use H mass for the Z protons and neutron mass for the N neutrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Counts every nucleon as a neutron.",
      remediation: "Z of them are H atoms (proton + electron).",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Subtracts the wrong way.",
      remediation: "Separate nucleons are heavier: Δm is positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives the total.",
      remediation: "Divide the binding energy by A.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Leaves out 931.5.",
      remediation: "Convert Δm in u to MeV first.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Divides by Z.",
      remediation: "Divide by A.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks uranium-235.",
      remediation: "Heavy nuclei lie below the peak; they release energy by fission.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks helium-4.",
      remediation: "He-4 is a local spike, but the peak is near iron-56.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks deuterium.",
      remediation: "Deuterium has a very low binding energy per nucleon.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (M)" },
      stem: t`The total binding energy of $^{58}_{28}\mathrm{Ni}$ is 508 MeV. What is its binding energy per nucleon?`,
      verify: { kind: "value", inputs: { E: "508", A: "58", Z: "28" }, params: { q: "per_nucleon_total" } },
      options: [
        { key: "A", text: t`$29500\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M2", value: "29500" },
        { key: "B", text: t`$16.9\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M3", value: "16.9000000000000" },
        { key: "C", text: t`$18.1\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M1", value: "18.1000000000000" },
        { key: "D", text: t`$8.76\ \mathrm{MeV}$`, correct: true, value: "8.76000000000000" },
      ],
      solution: {
        steps: [
          t`BE per nucleon = 508 ÷ 58.`,
          t`= 8.76 MeV.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (N)" },
      stem: t`The atomic mass of $^{32}_{16}\mathrm{S}$ is 31.97 u. Find its mass defect. (H atom 1.0078 u, neutron 1.0087 u)`,
      verify: { kind: "value", inputs: { Z: "16", N: "16", M: "31.97", mH: "1.0078", mn: "1.0087" }, params: { q: "defect" } },
      options: [
        { key: "A", text: t`$0.294\ \mathrm{u}$`, correct: true, value: "0.294000000000000" },
        { key: "B", text: t`$-0.294\ \mathrm{u}$`, correct: false, misconceptionId: "C03-M6", value: "-0.294000000000000" },
        { key: "C", text: t`$0.308\ \mathrm{u}$`, correct: false, misconceptionId: "C03-M5", value: "0.308000000000000" },
        { key: "D", text: t`$0.28\ \mathrm{u}$`, correct: false, misconceptionId: "C03-M4", value: "0.280000000000000" },
      ],
      solution: {
        steps: [
          t`16(1.0078) + 16(1.0087) = 32.264 u.`,
          t`Δm = 32.264 − 31.97 = 0.294 u.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Solved Ex.13.1" },
      stem: t`The atomic mass of $^{16}_{8}\mathrm{O}$ is 15.994 u. Find its binding energy per nucleon. (H 1.0078 u, n 1.0087 u, 1 u = 931.5 MeV)`,
      verify: { kind: "value", inputs: { Z: "8", N: "8", M: "15.994", mH: "1.0078", mn: "1.0087" }, params: { q: "be_per_nucleon" } },
      options: [
        { key: "A", text: t`$129\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M7", value: "129" },
        { key: "B", text: t`$8.03\ \mathrm{MeV}$`, correct: true, value: "8.03000000000000" },
        { key: "C", text: t`$16.1\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M9", value: "16.1000000000000" },
        { key: "D", text: t`$0.00862\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M8", value: "0.00862000000000000" },
      ],
      solution: {
        steps: [
          t`Δm = 8(1.0078) + 8(1.0087) − 15.994 = 0.138 u; × 931.5 = 128.5 MeV.`,
          t`128.5 ÷ 16 = 8.03 MeV.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (F)" },
      stem: t`Binding energy per nucleon is greatest for nuclei near`,
      verify: { kind: "value", inputs: {  }, params: { q: "peak" } },
      options: [
        { key: "A", text: t`helium-4`, correct: false, misconceptionId: "C03-M11", value: "helium_4" },
        { key: "B", text: t`deuterium`, correct: false, misconceptionId: "C03-M12", value: "deuterium" },
        { key: "C", text: t`iron-56`, correct: true, value: "iron_56" },
        { key: "D", text: t`uranium-235`, correct: false, misconceptionId: "C03-M10", value: "uranium_235" },
      ],
      solution: {
        steps: [
          t`The curve peaks at about 8.8 MeV.`,
          t`Near iron-56.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.4 (F)" },
      stem: t`The atomic mass of $^{84}_{36}\mathrm{Kr}$ is 83.913 u. Find its binding energy per nucleon. (H 1.0078 u, n 1.0087 u, 1 u = 931.5 MeV)`,
      verify: { kind: "value", inputs: { Z: "36", N: "48", M: "83.913", mH: "1.0078", mn: "1.0087" }, params: { q: "be_per_nucleon" } },
      options: [
        { key: "A", text: t`$20.3\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M9", value: "20.3000000000000" },
        { key: "B", text: t`$732\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M7", value: "732" },
        { key: "C", text: t`$0.00935\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M8", value: "0.00935000000000000" },
        { key: "D", text: t`$8.71\ \mathrm{MeV}$`, correct: true, value: "8.71000000000000" },
      ],
      solution: {
        steps: [
          t`Δm = 36(1.0078) + 48(1.0087) − 83.913 = 0.785 u; × 931.5 = 732 MeV.`,
          t`732 ÷ 84 = 8.71 MeV.`,
        ],
      },
    },
  ],
};
