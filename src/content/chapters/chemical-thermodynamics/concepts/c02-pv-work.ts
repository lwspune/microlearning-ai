import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A gas is let into a large evacuated box and spreads to fill it. How much work does the gas do?`,
    reveal: t`None. Work needs something to push against; in a vacuum $P_{ext} = 0$, so $W = -P_{ext}\Delta V = 0$.`,
  },
  explanation: {
    intuition: [
      t`A gas does work when it expands and pushes back its surroundings.`,
      t`The work depends on the **external pressure** $P_{ext}$ it pushes against and on its change in volume.`,
      t`In chemistry, work done **on** the system is positive: it adds energy to the system.`,
      t`So in an expansion, where the system does the work, $W$ is negative.`,
      t`A gas expanding into a vacuum pushes nothing, so it does no work.`,
    ],
    formal: [
      {
        title: "Work against constant pressure",
        points: [
          t`A gas in a cylinder pushes a piston of area $A$ through a distance $d$ against $P_{ext}$.`,
          t`The force is $P_{ext}A$, so the gas does work $P_{ext}A\,d = P_{ext}\Delta V$.`,
          t`Work done on the system is the negative of this: $W = -P_{ext}\Delta V$.`,
          t`Here $\Delta V = V_2 - V_1$, the final volume minus the initial volume.`,
        ],
      },
      {
        title: "Sign of work",
        points: [
          t`Expansion: $V_2 > V_1$, so $\Delta V$ is positive and $W$ negative; the system does work.`,
          t`Compression: $V_2 < V_1$, so $\Delta V$ is negative and $W$ positive; work is done on the system.`,
          t`Free expansion into a vacuum: $P_{ext} = 0$, so $W = 0$.`,
        ],
      },
      {
        title: "Units of work",
        points: [
          t`With $P$ in bar and $V$ in $\mathrm{dm^3}$, $W$ comes out in $\mathrm{dm^3\,bar}$.`,
          t`$1\ \mathrm{dm^3\,bar} = 100\ \mathrm{J}$ and $1\ \mathrm{L\,atm} = 101.3\ \mathrm{J}$.`,
          t`$1\ \mathrm{L} = 1\ \mathrm{dm^3} = 1000\ \mathrm{mL}$: convert mL before using these factors.`,
          t`With $P$ in Pa and $V$ in $\mathrm{m^3}$, $W$ comes out directly in J.`,
        ],
      },
      {
        title: "Work in gas reactions",
        points: [
          t`At constant $T$ and $P$, the volume of a gas is proportional to its moles.`,
          t`In $\ce{C2H4(g) + HCl(g)}$ $\ce{-> C2H5Cl(g)}$, two volumes of gas give one, so the volume falls.`,
          t`Only the gas that actually reacts counts: the gas used up first sets the amount.`,
          t`A fall in volume makes $W$ positive: the surroundings do work on the system.`,
        ],
      },
    ],
    worked: {
      prompt: t`Three moles of an ideal gas expand isothermally from $15\ \mathrm{dm^3}$ to $20\ \mathrm{dm^3}$ against a constant external pressure of $1.2\ \mathrm{bar}$. Find the work in $\mathrm{dm^3\,bar}$ and in J.`,
      steps: [
        t`$W = -P_{ext}(V_2 - V_1)$ with $P_{ext} = 1.2\ \mathrm{bar}$.`,
        t`$W = -1.2 \times (20 - 15)$ $= -6\ \mathrm{dm^3\,bar}$.`,
        t`$W = -6 \times 100 = -600\ \mathrm{J}$.`,
        t`The sign is negative: the gas does work on the surroundings.`,
      ],
      answer: t`$W = -6\ \mathrm{dm^3\,bar} = -600\ \mathrm{J}$`,
    },
    visualSpec: t`Push a piston in and out against a set external pressure and watch the sign and size of W change.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Drops the minus sign: takes $W = +P_{ext}\Delta V$.`,
      remediation: t`The book counts work done on the system as positive, so $W = -P_{ext}\Delta V$: an expansion gives a negative $W$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Leaves the work in $\mathrm{dm^3\,bar}$ (or $\mathrm{L\,atm}$) and reads it as joules.`,
      remediation: t`Convert to joules: $1\ \mathrm{dm^3\,bar} = 100\ \mathrm{J}$ and $1\ \mathrm{L\,atm} = 101.3\ \mathrm{J}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Uses the final volume in place of the change in volume.",
      remediation: t`Work depends on the change in volume, $\Delta V = V_2 - V_1$, not on the final volume.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Thinks a gas expanding into a vacuum also does work against $P_{ext}$.`,
      remediation: t`In a vacuum $P_{ext} = 0$, so that stage does no work; count only the stage against a pressure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Takes mL as $\mathrm{dm^3}$, forgetting to divide by 1000.`,
      remediation: t`$1000\ \mathrm{mL} = 1\ \mathrm{dm^3}$: convert mL to $\mathrm{dm^3}$ before using $1\ \mathrm{dm^3\,bar} = 100\ \mathrm{J}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#32" },
      stem: t`In the synthesis of $\ce{NH3}$ the volume falls from $9.0\ \mathrm{dm^3}$ to $4.0\ \mathrm{dm^3}$ against a constant external pressure of $43\ \mathrm{bar}$. What is the work done, in kJ? ($1\ \mathrm{dm^3\,bar} = 100\ \mathrm{J}$)`,
      verify: { kind: "value", inputs: { P: "43", V1: "9", V2: "4" }, params: { ask: "W", out: "kJ" } },
      options: [
        { key: "A", text: t`$+21.5\ \mathrm{kJ}$`, correct: true, value: "21.5000000000000" },
        { key: "B", text: t`$-21.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C02-M1", value: "-21.5000000000000" },
        { key: "C", text: t`$+0.215\ \mathrm{kJ}$`, correct: false, misconceptionId: "C02-M2", value: "0.215000000000000" },
        { key: "D", text: t`$-17.2\ \mathrm{kJ}$`, correct: false, misconceptionId: "C02-M3", value: "-17.2000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta V = 4.0 - 9.0 = -5.0\ \mathrm{dm^3}$.`,
          t`$W = -43 \times (-5.0)$ $= +215\ \mathrm{dm^3\,bar}$.`,
          t`$W = 215 \times 100\ \mathrm{J}$ $= +21.5\ \mathrm{kJ}$, done on the system.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#14" },
      stem: t`One mole of a gas expands from $2\ \mathrm{L}$ to $5\ \mathrm{L}$ against a constant pressure of $3\ \mathrm{atm}$. What is the work done, in joules? ($1\ \mathrm{L\,atm} = 101.3\ \mathrm{J}$)`,
      verify: { kind: "value", inputs: { P: "3", V1: "2", V2: "5" }, params: { ask: "W", unit: "atm" } },
      options: [
        { key: "A", text: t`$+912\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M1", value: "912" },
        { key: "B", text: t`$-9\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M2", value: "-9" },
        { key: "C", text: t`$-1520\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M3", value: "-1520" },
        { key: "D", text: t`$-912\ \mathrm{J}$`, correct: true, value: "-912" },
      ],
      solution: {
        steps: [
          t`$\Delta V = 5 - 2 = 3\ \mathrm{L}$.`,
          t`$W = -3 \times 3 = -9\ \mathrm{L\,atm}$.`,
          t`$W = -9 \times 101.3$ $= -912\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.3" },
      stem: t`$200\ \mathrm{mL}$ of ethylene and $150\ \mathrm{mL}$ of $\ce{HCl}$ gas react at $1\ \mathrm{bar}$: $\ce{C2H4(g) + HCl(g)}$ $\ce{-> C2H5Cl(g)}$. What is the $PV$ work?`,
      verify: { kind: "value", inputs: { P: "1", a: "200", b: "150" }, params: { ask: "rxn" } },
      options: [
        { key: "A", text: t`$+15000\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M5", value: "15000" },
        { key: "B", text: t`$+15\ \mathrm{J}$`, correct: true, value: "15" },
        { key: "C", text: t`$-15\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M1", value: "-15" },
        { key: "D", text: t`$+0.15\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M2", value: "0.150000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{HCl}$ is used up: $150\ \mathrm{mL}$ of each gas reacts and gives $150\ \mathrm{mL}$ of product.`,
          t`The volume falls by $150\ \mathrm{mL} = 0.150\ \mathrm{dm^3}$.`,
          t`$W = -1 \times (-0.150)$ $= +0.150\ \mathrm{dm^3\,bar} = +15\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.2" },
      stem: t`Two moles of an ideal gas are compressed from $25\ \mathrm{dm^3}$ to $13\ \mathrm{dm^3}$ by a constant external pressure. The work obtained is $4862.4\ \mathrm{J}$. What is the external pressure?`,
      verify: { kind: "value", inputs: { W: "4862.4", V1: "25", V2: "13" }, params: { ask: "P" } },
      options: [
        { key: "A", text: t`$3.74\ \mathrm{bar}$`, correct: false, misconceptionId: "C02-M3", value: "3.74000000000000" },
        { key: "B", text: t`$4.05\ \mathrm{bar}$`, correct: true, value: "4.05000000000000" },
        { key: "C", text: t`$-4.05\ \mathrm{bar}$`, correct: false, misconceptionId: "C02-M1", value: "-4.05000000000000" },
        { key: "D", text: t`$405\ \mathrm{bar}$`, correct: false, misconceptionId: "C02-M2", value: "405" },
      ],
      solution: {
        steps: [
          t`$W = 4862.4\ \mathrm{J} = 48.624\ \mathrm{dm^3\,bar}$; $\Delta V = 13 - 25 = -12\ \mathrm{dm^3}$.`,
          t`$48.624 = -P_{ext} \times (-12)$.`,
          t`$P_{ext} = \dfrac{48.624}{12} = 4.05\ \mathrm{bar}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#28" },
      stem: t`A gas expands from $10\ \mathrm{dm^3}$ to $15\ \mathrm{dm^3}$ into a vacuum, then from $15\ \mathrm{dm^3}$ to $20\ \mathrm{dm^3}$ against a constant $2\ \mathrm{bar}$. What is the total work done?`,
      verify: { kind: "value", inputs: { P: "2", V1: "10", Vm: "15", V2: "20" }, params: { ask: "W" } },
      options: [
        { key: "A", text: t`$-2000\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M4", value: "-2000" },
        { key: "B", text: t`$-1000\ \mathrm{J}$`, correct: true, value: "-1000" },
        { key: "C", text: t`$+1000\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M1", value: "1000" },
        { key: "D", text: t`$-4000\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M3", value: "-4000" },
      ],
      solution: {
        steps: [
          t`Into a vacuum $P_{ext} = 0$: the first stage does no work.`,
          t`Second stage: $W = -2 \times (20 - 15)$ $= -10\ \mathrm{dm^3\,bar}$.`,
          t`Total $W = -10 \times 100 = -1000\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
