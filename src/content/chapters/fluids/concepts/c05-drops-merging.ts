import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Small raindrops in a cloud join into bigger ones. Does joining take energy, or give it out?`,
    reveal: t`It gives energy out. One big drop has less surface than the many small ones that made it, so some surface energy is released.`,
  },
  explanation: {
    intuition: [
      t`When drops merge, the liquid's volume stays the same.`,
      t`But one big drop has less surface than the small drops it came from.`,
      t`Less surface means less surface energy, so energy is released, often as heat.`,
      t`Breaking one drop into many does the opposite: it makes new surface and needs work.`,
      t`So liquids naturally form as few, as large and as round drops as they can.`,
    ],
    formal: [
      {
        title: "Finding the new radius",
        points: [
          t`Volume is conserved: $n \times \dfrac{4}{3}\pi r^3 = \dfrac{4}{3}\pi R^3$.`,
          t`So $R = n^{1/3}r$: 8 drops merge into one of twice the radius, 27 into three times.`,
          t`The radius does not grow $n$ times; only the volume does.`,
          t`Splitting a drop of radius $R$ into $n$ droplets gives each a radius $r = \dfrac{R}{n^{1/3}}$.`,
        ],
      },
      {
        title: "Energy released or needed",
        points: [
          t`Surface before merging: $n \times 4\pi r^2$. After: $4\pi R^2$, which is smaller.`,
          t`Energy released $= T \times 4\pi\left(nr^2 - R^2\right)$.`,
          t`Work to split a drop $= T \times 4\pi\left(nr^2 - R^2\right)$ too, now with $r$ the droplets' radius.`,
          t`Each drop has only one surface, so there is no factor of 2 as for a bubble.`,
          t`Use the change in energy, not the energy of either state alone.`,
        ],
      },
    ],
    worked: {
      prompt: t`Sixty-four droplets of water, each of radius $0.5\ \mathrm{mm}$, merge into one drop. Taking $T = 0.072\ \mathrm{N/m}$, how much energy is released?`,
      steps: [
        t`Volume is conserved: $R^3 = 64r^3$, so $R = 4r = 2\ \mathrm{mm}$.`,
        t`Surface lost $= 4\pi\left(64r^2 - 16r^2\right) = 192\pi r^2$.`,
        t`$= 192\pi \times (5 \times 10^{-4})^2$ $\approx 1.51 \times 10^{-4}\ \mathrm{m^2}$.`,
        t`Energy released $= T \times 1.51 \times 10^{-4}$ $\approx 1.09 \times 10^{-5}\ \mathrm{J}$.`,
      ],
      answer: t`$\approx 1.09 \times 10^{-5}\ \mathrm{J}$`,
    },
    visualSpec: t`Merge more and more droplets with a slider and watch the total volume stay fixed while the total surface, and its energy, falls.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks the surface areas simply add, like the volumes.",
      remediation: "Volumes add; areas do not. One drop of the same total volume has less surface than many small ones, so energy is released.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives the surface energy of one state instead of the change.",
      remediation: t`The energy released or needed is the difference, $T \times 4\pi\left(nr^2 - R^2\right)$, not the energy of the drops before or after.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: "Counts two surfaces for each drop, as for a bubble.",
      remediation: "A drop is liquid all through and has one outer surface. Only a soap bubble or film has two.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: "Leaves dyne/cm unconverted.",
      remediation: t`$1\ \mathrm{dyne/cm} = 10^{-3}\ \mathrm{N/m}$: convert before multiplying by an area in m².`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Scales the radius by $n$, as if radii added like volumes.`,
      remediation: t`Volume goes as $r^3$, so $R = n^{1/3}r$. For example, 8 droplets make a drop of twice the radius, not 8 times.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Leaves millimetres unconverted.",
      remediation: "Divide millimetres by 1000 to get metres, so areas come out in m².",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks gravity pulls the drops into one.",
      remediation: "Gravity between two small drops is far too weak. They join because one drop has less surface, and so less surface energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks the drops join to gain surface energy.",
      remediation: "Systems settle into the state of least energy. Joining lowers the total surface, and with it the surface energy.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.20" },
      stem: t`Twenty-seven water droplets, each of radius $0.1\ \mathrm{mm}$, merge into a single drop. The surface tension of water is $0.072\ \mathrm{N/m}$. How much surface energy is released?`,
      verify: { kind: "value", inputs: { n: "27", r_mm: "0.1", T: "0.072" }, params: { ask: "merge_E" } },
      options: [
        { key: "A", text: t`$3.26 \times 10^{-7}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "3.26000000000000e-7" },
        { key: "B", text: t`$1.63 \times 10^{-7}\ \mathrm{J}$`, correct: true, value: "1.63000000000000e-7" },
        { key: "C", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M1", value: "0" },
        { key: "D", text: t`$8.14 \times 10^{-8}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "8.14000000000000e-8" },
      ],
      solution: {
        steps: [
          t`Volume is conserved: $R^3 = 27r^3$, so $R = 3r$.`,
          t`Surface lost $= 4\pi\left(27r^2 - 9r^2\right) = 72\pi r^2 = 72\pi \times 10^{-8}\ \mathrm{m^2}$.`,
          t`Energy released $= 0.072 \times 72\pi \times 10^{-8}$ $\approx 1.63 \times 10^{-7}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.21" },
      stem: t`A mercury drop of radius $0.2\ \mathrm{cm}$ is broken into 8 identical droplets. The surface tension of mercury is $435.5\ \mathrm{dyne/cm}$. How much work is done?`,
      verify: { kind: "value", inputs: { n: "8", R_cm: "0.2", T_dyne: "435.5" }, params: { ask: "split_W" } },
      options: [
        { key: "A", text: t`$4.38 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "4.38000000000000e-5" },
        { key: "B", text: t`$0.0219\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "0.0219000000000000" },
        { key: "C", text: t`$1.92 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "1.92000000000000e-5" },
        { key: "D", text: t`$2.19 \times 10^{-5}\ \mathrm{J}$`, correct: true, value: "2.19000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$T = 0.4355\ \mathrm{N/m}$, $R = 2 \times 10^{-3}\ \mathrm{m}$; 8 droplets each have $r = \dfrac{R}{2}$.`,
          t`New surface $= 4\pi\left(8r^2 - R^2\right) = 4\pi\left(2R^2 - R^2\right) = 4\pi R^2$.`,
          t`$W = 0.4355 \times 4\pi \times 4 \times 10^{-6}$ $\approx 2.19 \times 10^{-5}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.12" },
      stem: t`Eight water droplets, each of radius $0.2\ \mathrm{mm}$, merge into a single drop. By how much does the total surface area decrease?`,
      verify: { kind: "value", inputs: { n: "8", r_mm: "0.2" }, params: { ask: "merge_dA" } },
      options: [
        { key: "A", text: t`$2.01 \times 10^{-6}\ \mathrm{m^2}$`, correct: true, value: "2.01000000000000e-6" },
        { key: "B", text: t`$0\ \mathrm{m^2}$`, correct: false, misconceptionId: "C05-M1", value: "0" },
        { key: "C", text: t`$2.81 \times 10^{-5}\ \mathrm{m^2}$`, correct: false, misconceptionId: "C05-M5", value: "2.81000000000000e-5" },
        { key: "D", text: t`$2.01\ \mathrm{m^2}$`, correct: false, misconceptionId: "C05-M6", value: "2.01000000000000" },
      ],
      solution: {
        steps: [
          t`Volume is conserved: $R^3 = 8r^3$, so $R = 2r$.`,
          t`Decrease $= 4\pi\left(8r^2 - 4r^2\right) = 16\pi r^2$.`,
          t`$= 16\pi \times (2 \times 10^{-4})^2 \approx 2.01 \times 10^{-6}\ \mathrm{m^2}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.3" },
      stem: t`Two mercury drops touch and at once form a single drop. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "why" } },
      options: [
        { key: "A", text: t`Gravity pulls the two drops together into one`, correct: false, misconceptionId: "C05-M7", value: "gravity" },
        { key: "B", text: t`Joining gives them more surface energy, which they gain`, correct: false, misconceptionId: "C05-M8", value: "more_energy" },
        { key: "C", text: t`One drop has less surface than two, so the surface energy falls`, correct: true, value: "less_surface" },
        { key: "D", text: t`Their volumes add, so their surfaces simply add as well`, correct: false, misconceptionId: "C05-M1", value: "areas_add" },
      ],
      solution: {
        steps: [
          t`Two drops have more surface than one drop of the same total volume.`,
          t`Joining lowers the surface, and so the surface energy, which is what the drops settle into.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`A thousand water droplets, each of radius $1\ \mathrm{mm}$, merge into one drop. The surface tension of water is $0.072\ \mathrm{N/m}$. How much surface energy is released?`,
      verify: { kind: "value", inputs: { n: "1000", r_mm: "1", T: "0.072" }, params: { ask: "merge_E" } },
      options: [
        { key: "A", text: t`$8.14 \times 10^{-4}\ \mathrm{J}$`, correct: true, value: "0.000814000000000000" },
        { key: "B", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M1", value: "0" },
        { key: "C", text: t`$9.05 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "9.05000000000000e-5" },
        { key: "D", text: t`$0.904\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "0.904000000000000" },
      ],
      solution: {
        steps: [
          t`$R^3 = 1000r^3$, so $R = 10r$.`,
          t`Surface lost $= 4\pi\left(1000r^2 - 100r^2\right) = 3600\pi r^2 = 3600\pi \times 10^{-6}\ \mathrm{m^2}$.`,
          t`Energy released $= 0.072 \times 3600\pi \times 10^{-6}$ $\approx 8.14 \times 10^{-4}\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
