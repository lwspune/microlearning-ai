import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Blowing a big soap bubble takes real effort, though the soap solution is thin and light. Where does that work go?`,
    reveal: t`Into new surface. Each square metre of new surface stores an energy $T$, and a bubble has two surfaces, inside and outside.`,
  },
  explanation: {
    intuition: [
      t`To make a liquid surface bigger, molecules must be pulled up from inside against the inward pull.`,
      t`That takes work, which is stored in the surface as **surface energy**.`,
      t`For each unit of new area, the work is the surface tension $T$.`,
      t`So the work to make new area $\Delta A$ is $W = T\,\Delta A$.`,
      t`A soap film or bubble has two surfaces, so its new area counts twice.`,
    ],
    formal: [
      {
        title: "Surface energy and surface tension",
        points: [
          t`A film on a frame pulls a sliding wire of length $L$ with a force $2TL$.`,
          t`Moving the wire out by $dx$ against that pull takes work $dW = 2TL\,dx$.`,
          t`The new area is $dA = 2L\,dx$, counting both surfaces, so $dW = T\,dA$.`,
          t`So surface energy per unit area equals the surface tension: $T = \dfrac{W}{\Delta A}$, in J/m² or N/m.`,
        ],
      },
      {
        title: "Bubbles, films and drops",
        points: [
          t`A drop of radius $r$ has one surface, with energy $4\pi r^2T$.`,
          t`A soap bubble has two: blowing it from nothing takes $2 \times 4\pi r^2T = 8\pi r^2T$.`,
          t`Enlarging a bubble from $r_1$ to $r_2$ takes $8\pi T\left(r_2^2 - r_1^2\right)$.`,
          t`Stretching a film on a frame takes $2T\,\Delta A$, where $\Delta A$ is the change in the frame's area.`,
          t`Convert first: $1\ \mathrm{dyne/cm} = 10^{-3}\ \mathrm{N/m}$, and lengths go into metres.`,
        ],
      },
    ],
    worked: {
      prompt: t`How much work does it take to blow a soap bubble of radius $5\ \mathrm{cm}$, if the surface tension is $0.04\ \mathrm{N/m}$?`,
      steps: [
        t`$r = 0.05\ \mathrm{m}$, and a bubble has two surfaces.`,
        t`New area $= 2 \times 4\pi r^2 = 8\pi \times 0.0025$ $= 0.02\pi\ \mathrm{m^2}$.`,
        t`$W = T\,\Delta A = 0.04 \times 0.02\pi$.`,
        t`$W \approx 2.51 \times 10^{-3}\ \mathrm{J}$.`,
      ],
      answer: t`$W \approx 2.51 \times 10^{-3}\ \mathrm{J}$`,
    },
    visualSpec: t`Blow up a bubble with a slider and watch its two surfaces' area, and the work stored in them, grow with $r^2$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Miscounts the surfaces.",
      remediation: "A soap bubble or film has two surfaces, so its area counts twice; a liquid drop has only one.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M2",
      mistake: "Doesn't square the radius.",
      remediation: t`A sphere's surface is $4\pi r^2$: square $r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Leaves centimetres unconverted.",
      remediation: t`Convert lengths to metres, and areas from cm² to m² by multiplying by $10^{-4}$, before multiplying by $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Mixes up the radius and the diameter.",
      remediation: t`$4\pi r^2$ uses the radius, half the diameter. If the diameter is asked, double the radius at the end.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Uses the final area instead of the change in area.",
      remediation: t`Work goes only into the new surface: $W = T(A_2 - A_1)$, times two for a film.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Leaves dyne/cm unconverted.",
      remediation: t`$1\ \mathrm{dyne} = 10^{-5}\ \mathrm{N}$ and $1\ \mathrm{cm} = 10^{-2}\ \mathrm{m}$, so $1\ \mathrm{dyne/cm} = 10^{-3}\ \mathrm{N/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Squares the change in radius.",
      remediation: t`The change in area is $4\pi\left(r_2^2 - r_1^2\right)$, not $4\pi(r_2 - r_1)^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Uses the area of a circle, $\pi r^2$, for a sphere's surface.`,
      remediation: t`A sphere's surface area is $4\pi r^2$, four times the area of a circle of the same radius.`,
      fallback: { kind: "ext", topic: "volume and surface area of a sphere (Std X Maths)" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Solved Ex.2.5" },
      stem: t`How much work is done in blowing a soap bubble to a radius of $1\ \mathrm{cm}$? The surface tension of the soap solution is $2.5 \times 10^{-2}\ \mathrm{N/m}$.`,
      verify: { kind: "value", inputs: { r_cm: "1", T: "0.025" }, params: { ask: "blow" } },
      options: [
        { key: "A", text: t`$0.00628\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M2", value: "0.00628000000000000" },
        { key: "B", text: t`$0.628\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "0.628000000000000" },
        { key: "C", text: t`$6.28 \times 10^{-5}\ \mathrm{J}$`, correct: true, value: "6.28000000000000e-5" },
        { key: "D", text: t`$3.14 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "3.14000000000000e-5" },
      ],
      solution: {
        steps: [
          t`A bubble has two surfaces: new area $= 2 \times 4\pi r^2 = 8\pi \times 10^{-4}\ \mathrm{m^2}$.`,
          t`$W = T\,\Delta A = 2.5 \times 10^{-2} \times 8\pi \times 10^{-4}$ $\approx 6.28 \times 10^{-5}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.1 (iii)" },
      stem: t`What is the surface energy stored in a soap bubble of diameter $6\ \mathrm{cm}$, if the surface tension is $0.04\ \mathrm{N/m}$?`,
      verify: { kind: "value", inputs: { d_cm: "6", T: "0.04" }, params: { ask: "stored" } },
      options: [
        { key: "A", text: t`$4.52 \times 10^{-4}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "0.000452000000000000" },
        { key: "B", text: t`$9.05\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "9.05000000000000" },
        { key: "C", text: t`$0.00362\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M4", value: "0.00362000000000000" },
        { key: "D", text: t`$9.05 \times 10^{-4}\ \mathrm{J}$`, correct: true, value: "0.000905000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 3\ \mathrm{cm} = 0.03\ \mathrm{m}$; with two surfaces, the area is $8\pi r^2 = 8\pi \times 9 \times 10^{-4}$.`,
          t`$E = 0.04 \times 8\pi \times 9 \times 10^{-4}$ $\approx 9.05 \times 10^{-4}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.23" },
      stem: t`A soap film on a square wire frame is stretched from $2\ \mathrm{cm} \times 2\ \mathrm{cm}$ to $3\ \mathrm{cm} \times 3\ \mathrm{cm}$. The surface tension of the film is $3 \times 10^{-2}\ \mathrm{N/m}$. How much work is done?`,
      verify: { kind: "value", inputs: { a_cm: "2", b_cm: "3", T: "0.03" }, params: { ask: "frame" } },
      options: [
        { key: "A", text: t`$0.3\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "0.300000000000000" },
        { key: "B", text: t`$5.4 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M5", value: "5.40000000000000e-5" },
        { key: "C", text: t`$3 \times 10^{-5}\ \mathrm{J}$`, correct: true, value: "3.00000000000000e-5" },
        { key: "D", text: t`$1.5 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "1.50000000000000e-5" },
      ],
      solution: {
        steps: [
          t`The frame's area grows by $9 - 4 = 5\ \mathrm{cm^2} = 5 \times 10^{-4}\ \mathrm{m^2}$, and the film has two surfaces.`,
          t`$W = 2T\,\Delta A = 2 \times 0.03 \times 5 \times 10^{-4} = 3 \times 10^{-5}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.2(vi)" },
      stem: t`A soap bubble in air is enlarged from a radius of $1\ \mathrm{cm}$ to $2\ \mathrm{cm}$. The surface tension of the soap solution is $30\ \mathrm{dyne/cm}$. Taking $\pi = 3.142$, how much work is done?`,
      verify: { kind: "value", inputs: { r1_cm: "1", r2_cm: "2", T_dyne: "30", pi_book: "3.142" }, params: { ask: "enlarge" } },
      options: [
        { key: "A", text: t`$3.02 \times 10^{-4}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M5", value: "0.000302000000000000" },
        { key: "B", text: t`$0.226\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M6", value: "0.226000000000000" },
        { key: "C", text: t`$7.54 \times 10^{-5}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M7", value: "7.54000000000000e-5" },
        { key: "D", text: t`$2.26 \times 10^{-4}\ \mathrm{J}$`, correct: true, value: "0.000226000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 30\ \mathrm{dyne/cm} = 0.03\ \mathrm{N/m}$; $r_1 = 0.01\ \mathrm{m}$ and $r_2 = 0.02\ \mathrm{m}$.`,
          t`$W = 8\pi T\left(r_2^2 - r_1^2\right) = 8 \times 3.142 \times 0.03 \times 3 \times 10^{-4}$.`,
          t`$W \approx 2.26 \times 10^{-4}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.3(iii)" },
      stem: t`The energy of the free surface of a liquid drop is $2\pi$ times the surface tension of the liquid, all in SI units. What is the diameter of the drop?`,
      verify: { kind: "value", inputs: { k: "2" }, params: { ask: "drop_d" } },
      options: [
        { key: "A", text: t`$2.83\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M8", value: "2.83000000000000" },
        { key: "B", text: t`$1.41\ \mathrm{m}$`, correct: true, value: "1.41000000000000" },
        { key: "C", text: t`$1\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M1", value: "1" },
        { key: "D", text: t`$0.707\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M4", value: "0.707000000000000" },
      ],
      solution: {
        steps: [
          t`A drop has one surface: its energy is $4\pi r^2T = 2\pi T$.`,
          t`So $r^2 = \dfrac{1}{2}$ and $r \approx 0.707\ \mathrm{m}$.`,
          t`Diameter $= 2r \approx 1.41\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
