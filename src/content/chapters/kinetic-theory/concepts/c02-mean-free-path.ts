import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Air molecules move at hundreds of metres a second, yet a smell takes many seconds to cross a room. Why so slow?`,
    reveal: t`Each molecule collides billions of times a second, changing direction every time. It travels only about $10^{-7}\ \mathrm{m}$ between collisions, so it zigzags slowly across the room.`,
  },
  explanation: {
    intuition: [
      t`A gas molecule moves in a straight line until it hits another molecule.`,
      t`Then it changes direction, so its path is a zigzag.`,
      t`The average distance it travels between two collisions is its **mean free path** $\lambda$.`,
      t`More molecules in the way, or bigger ones, mean shorter free paths.`,
      t`In air at room conditions, $\lambda$ is about $10^{-7}\ \mathrm{m}$.`,
    ],
    formal: [
      {
        title: "Mean free path",
        points: [
          t`Treat the molecules as spheres of diameter $d$: two collide when their centres come within $d$.`,
          t`Moving a distance $L$, a molecule sweeps out a cylinder of volume $\pi d^2L$.`,
          t`With $n$ molecules per unit volume, it meets $n\pi d^2L$ of them, so $\lambda = \dfrac{1}{\pi nd^2}$.`,
          t`Allowing for the motion of the other molecules adds a factor $\sqrt{2}$: $\lambda = \dfrac{1}{\sqrt{2}\,\pi nd^2}$.`,
        ],
      },
      {
        title: "What it depends on",
        points: [
          t`$\lambda \propto \dfrac{1}{n}$: double the number of molecules per unit volume and $\lambda$ halves.`,
          t`$\lambda \propto \dfrac{1}{d^2}$: molecules twice as wide have a quarter of the free path.`,
          t`For an ideal gas $n = \dfrac{P}{k_BT}$, so $\lambda = \dfrac{k_BT}{\sqrt{2}\,\pi d^2P}$.`,
          t`At constant pressure a hotter gas is thinner, so $\lambda$ grows in proportion to $T$.`,
          t`It does not depend on how fast the molecules move.`,
        ],
      },
    ],
    worked: {
      prompt: t`A gas has $2.5 \times 10^{25}$ molecules per cubic metre, each of diameter $3 \times 10^{-10}\ \mathrm{m}$. What is their mean free path?`,
      steps: [
        t`$\lambda = \dfrac{1}{\sqrt{2}\,\pi nd^2}$.`,
        t`$\pi nd^2 = \pi \times 2.5 \times 10^{25} \times 9 \times 10^{-20}$ $\approx 7.07 \times 10^6\ \mathrm{m^{-1}}$.`,
        t`$\sqrt{2} \times 7.07 \times 10^6 \approx 1.0 \times 10^7\ \mathrm{m^{-1}}$.`,
        t`$\lambda \approx 1.0 \times 10^{-7}\ \mathrm{m}$.`,
      ],
      answer: t`$\lambda \approx 1.0 \times 10^{-7}\ \mathrm{m}$`,
    },
    visualSpec: t`Follow one molecule zigzagging through a crowd of others, and change their number and size with sliders to watch its average free path shrink.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Leaves out the $\sqrt{2}$.`,
      remediation: t`The other molecules are moving too, which raises the rate of collisions by $\sqrt{2}$: $\lambda = \dfrac{1}{\sqrt{2}\,\pi nd^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Halves the given diameter, as if it were a radius.",
      remediation: t`$d$ in the formula is the molecular diameter itself: two molecules collide when their centres come within $d$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Converts picometres wrongly.",
      remediation: t`$1\ \mathrm{pm} = 10^{-12}\ \mathrm{m}$, while $1\ \mathrm{nm} = 10^{-9}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Uses $d$ where $d^2$ belongs.`,
      remediation: t`Each molecule sweeps out a target area $\pi d^2$, so the diameter is squared.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Puts the $\sqrt{2}$ on top.`,
      remediation: t`The extra collisions shorten the path, so the $\sqrt{2}$ goes underneath.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Takes the mean free path to grow with the number of molecules or their size.",
      remediation: t`More or bigger molecules get in the way, so the free path shrinks: $\lambda \propto \dfrac{1}{nd^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks the mean free path does not change.",
      remediation: t`$\lambda = \dfrac{k_BT}{\sqrt{2}\,\pi d^2P}$ changes with $n$, with $d$ and, at fixed pressure, with $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Takes the mean free path to go as $\dfrac{1}{n^2}$.`,
      remediation: t`$\lambda \propto \dfrac{1}{n}$; only the diameter is squared.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks faster, hotter molecules have shorter free paths.",
      remediation: t`Speed changes how often collisions happen, not how far apart they are. At constant pressure, heating thins the gas, so $\lambda$ grows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: t`Takes the mean free path to grow as $\sqrt{T}$, like the rms speed.`,
      remediation: t`At constant pressure $n = \dfrac{P}{k_BT}$, so $\lambda \propto T$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Solved Ex.3.1" },
      stem: t`Nitrogen molecules have a diameter of $324\ \mathrm{pm}$. Treating the gas as ideal, what is their mean free path at $0\ ^\circ\mathrm{C}$ and $1.01 \times 10^5\ \mathrm{Pa}$? Take $k_B = 1.38 \times 10^{-23}\ \mathrm{J/K}$.`,
      verify: { kind: "value", inputs: { t_c: "0", P: "1.01e5", d_pm: "324", k: "1.38e-23" }, params: { ask: "lambda" } },
      options: [
        { key: "A", text: t`$8 \times 10^{-8}\ \mathrm{m}$`, correct: true, value: "8.00000000000000e-8" },
        { key: "B", text: t`$1.13 \times 10^{-7}\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M1", value: "1.13000000000000e-7" },
        { key: "C", text: t`$3.2 \times 10^{-7}\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M2", value: "3.20000000000000e-7" },
        { key: "D", text: t`$8 \times 10^{-14}\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M3", value: "8.00000000000000e-14" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{P}{k_BT}$, so $\lambda = \dfrac{k_BT}{\sqrt{2}\,\pi d^2P}$, with $T = 273\ \mathrm{K}$ and $d = 3.24 \times 10^{-10}\ \mathrm{m}$.`,
          t`$\lambda = \dfrac{1.38 \times 10^{-23} \times 273}{\sqrt{2}\,\pi \times (3.24 \times 10^{-10})^2 \times 1.01 \times 10^5}$.`,
          t`$\lambda \approx 8.0 \times 10^{-8}\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.1(i)" },
      stem: t`Molecules of diameter $d$ have $n$ molecules per unit volume. What is their mean free path $\lambda$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{\pi nd^2}$`, correct: false, misconceptionId: "C02-M1", value: "1/(pi*d**2*n)" },
        { key: "B", text: t`$\dfrac{1}{\sqrt{2}\,\pi nd}$`, correct: false, misconceptionId: "C02-M4", value: "sqrt(2)/(2*pi*d*n)" },
        { key: "C", text: t`$\dfrac{\sqrt{2}}{\pi nd^2}$`, correct: false, misconceptionId: "C02-M5", value: "sqrt(2)/(pi*d**2*n)" },
        { key: "D", text: t`$\dfrac{1}{\sqrt{2}\,\pi nd^2}$`, correct: true, value: "sqrt(2)/(2*pi*d**2*n)" },
      ],
      solution: {
        steps: [
          t`Each molecule sweeps a cylinder of cross-section $\pi d^2$; the others' motion adds a factor $\sqrt{2}$.`,
          t`So $\lambda = \dfrac{1}{\sqrt{2}\,\pi nd^2}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.1 (ii)" },
      stem: t`The number of molecules per unit volume of a gas is doubled. By what factor does the mean free path change?`,
      verify: { kind: "value", inputs: { f: "2" }, params: { ask: "scale", what: "n" } },
      options: [
        { key: "A", text: t`It becomes a quarter`, correct: false, misconceptionId: "C02-M8", value: "1/4" },
        { key: "B", text: t`It halves`, correct: true, value: "1/2" },
        { key: "C", text: t`It doubles`, correct: false, misconceptionId: "C02-M6", value: "2" },
        { key: "D", text: t`It does not change`, correct: false, misconceptionId: "C02-M7", value: "1" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{1}{\sqrt{2}\,\pi nd^2}$, so $\lambda \propto \dfrac{1}{n}$.`,
          t`Doubling $n$ halves $\lambda$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Gas A has molecules twice as wide as those of gas B, with the same number of molecules per unit volume. How does the mean free path in A compare with that in B?`,
      verify: { kind: "value", inputs: { f: "2" }, params: { ask: "scale", what: "d" } },
      options: [
        { key: "A", text: t`The same`, correct: false, misconceptionId: "C02-M7", value: "1" },
        { key: "B", text: t`A quarter as long`, correct: true, value: "1/4" },
        { key: "C", text: t`Half as long`, correct: false, misconceptionId: "C02-M4", value: "1/2" },
        { key: "D", text: t`Four times as long`, correct: false, misconceptionId: "C02-M6", value: "4" },
      ],
      solution: {
        steps: [
          t`$\lambda \propto \dfrac{1}{d^2}$ for the same $n$.`,
          t`Twice the diameter gives $\dfrac{1}{4}$ of the mean free path.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`The absolute temperature of an ideal gas is doubled while its pressure is kept constant. By what factor does the mean free path change?`,
      verify: { kind: "value", inputs: { f: "2" }, params: { ask: "scale", what: "T" } },
      options: [
        { key: "A", text: t`It grows $\sqrt{2}$ times`, correct: false, misconceptionId: "C02-M10", value: "sqrt(2)" },
        { key: "B", text: t`It doubles`, correct: true, value: "2" },
        { key: "C", text: t`It does not change`, correct: false, misconceptionId: "C02-M7", value: "1" },
        { key: "D", text: t`It halves`, correct: false, misconceptionId: "C02-M9", value: "1/2" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{k_BT}{\sqrt{2}\,\pi d^2P}$, with $P$ fixed.`,
          t`So $\lambda \propto T$: doubling $T$ doubles $\lambda$.`,
        ],
      },
    },
  ],
};
