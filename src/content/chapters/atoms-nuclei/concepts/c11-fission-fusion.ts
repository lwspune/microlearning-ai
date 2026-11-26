import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Burning one carbon atom in oxygen releases about $4\ \mathrm{eV}$. Splitting one uranium-235 nucleus releases about $200\ \mathrm{MeV}$. Roughly how many times more is that?`,
    reveal: t`About 50 million times. Burning only rearranges electrons; splitting a nucleus turns a small part of its mass into energy, $\Delta mc^2$, and nuclear binding is millions of times stronger.`,
  },
  explanation: {
    intuition: [
      t`The binding energy per nucleon is largest near iron; heavy and very light nuclei are less tightly bound.`,
      t`In **fission** a heavy nucleus splits into two middle-weight nuclei, which are more tightly bound.`,
      t`In **fusion** two light nuclei join into a heavier one, which is more tightly bound.`,
      t`Either way the products weigh less than what went in; the missing mass is given out as energy, $\Delta mc^2$.`,
      t`Fission of one $^{235}\mathrm{U}$ nucleus gives about $200\ \mathrm{MeV}$; fusion is what powers the Sun.`,
    ],
    formal: [
      {
        title: "Nuclear fission",
        points: [
          t`$^{235}_{92}\mathrm{U}$ absorbs a slow neutron and becomes $^{236}_{92}\mathrm{U}$, which splits.`,
          t`It splits into two middle-weight nuclei, such as barium and krypton, and 2 or 3 neutrons.`,
          t`The energy released is $Q$ $= \left[m_{parent} - \sum m_{products}\right]c^2$, about $200\ \mathrm{MeV}$ a fission.`,
          t`Most of it appears as the kinetic energy of the fragments, that is, as heat.`,
        ],
      },
      {
        title: "Chain reaction",
        points: [
          t`Each fission gives out, on average, about $2.7$ neutrons.`,
          t`Once slowed down, each can cause another fission, which gives out still more neutrons.`,
          t`This cascade is a **chain reaction**; left alone, the number of fissions grows very fast.`,
          t`If on average just one neutron from each fission causes another, the rate stays steady.`,
        ],
      },
      {
        title: "Parts of a nuclear reactor",
        points: [
          t`**Fuel**: $^{235}\mathrm{U}$, the nuclei that undergo fission.`,
          t`**Moderator** (heavy water or graphite): slows the fast neutrons so that they can cause fission.`,
          t`**Control rods** (cadmium or boron): absorb the surplus neutrons and keep the rate steady.`,
          t`**Coolant** (water or heavy water): carries the heat away to raise steam that drives turbines.`,
          t`**Shielding** (thick concrete): stops the radiation from reaching people outside.`,
        ],
      },
      {
        title: "A reactor and a bomb",
        points: [
          t`Both get their energy from a fission chain reaction.`,
          t`In a reactor the chain reaction is **controlled**: the energy comes out steadily, at a useful rate.`,
          t`In a bomb it is **uncontrolled**: fissions multiply unchecked and release huge energy in a very short time.`,
        ],
      },
      {
        title: "Nuclear fusion",
        points: [
          t`Two light nuclei join to form a heavier, more tightly bound nucleus.`,
          t`They must come within about $1\ \mathrm{fm}$ for the nuclear force to act, against their electric repulsion.`,
          t`That needs a temperature of millions of kelvin, so it is called **thermonuclear** fusion.`,
          t`In the Sun, four protons fuse into a helium nucleus: $4p \rightarrow \alpha + 2e^+ +$ neutrinos.`,
          t`The energy released is $Q$ $= \left[\sum m_{reactants} - \sum m_{products}\right]c^2$.`,
        ],
      },
      {
        title: "Fuel for a given power",
        points: [
          t`Energy needed in time $t$: $E = Pt$, with $t$ in seconds.`,
          t`Energy of one fission in joules: $1\ \mathrm{MeV}$ $= 10^6 \times 1.6 \times 10^{-19}\ \mathrm{J}$.`,
          t`Number of fissions $n$ $= \dfrac{E}{\text{energy per fission}}$.`,
          t`Mass of fuel $= \dfrac{n}{N_A} \times M$, with $M$ the molar mass.`,
        ],
      },
    ],
    worked: {
      prompt: t`Uranium-236 can also split as $^{236}_{92}\mathrm{U} \rightarrow {}^{140}_{56}\mathrm{Ba} + {}^{94}_{36}\mathrm{Kr} + 2n$. With atomic masses $236.0456\ \mathrm{u}$, $139.9106\ \mathrm{u}$ and $93.9341\ \mathrm{u}$ in that order, how much energy does one such fission give? (Take $m_n = 1.00866\ \mathrm{u}$, $1\ \mathrm{u}$ $= 931.5\ \mathrm{MeV}/c^2$.)`,
      steps: [
        t`The electrons balance, $92 = 56 + 36$, so use the atomic masses; the 2 neutrons go on the right.`,
        t`Mass after $= 139.9106 + 93.9341 + 2 \times 1.00866$ $= 235.86202\ \mathrm{u}$.`,
        t`$\Delta m = 236.0456 - 235.86202$ $= 0.18358\ \mathrm{u}$.`,
        t`$Q$ $= 0.18358 \times 931.5 \approx 171\ \mathrm{MeV}$, near the usual $200\ \mathrm{MeV}$ a fission.`,
      ],
      answer: t`$171\ \mathrm{MeV}$`,
    },
    visualSpec: t`Fire a slow neutron at a uranium nucleus and watch it split, its neutrons go on to split more, and control rods soak some up to hold the rate steady.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Leaves out the mass of the neutrons given out.",
      remediation: t`The 2 neutrons are products too: subtract $2m_n$ along with the two fragments.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Leaves the mass difference in u.",
      remediation: t`Multiply the mass difference in u by $931.5$ to get the energy in MeV.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M3",
      mistake: "Gives the energy per nucleon when the energy of the fission is asked.",
      remediation: t`$Q$ is the whole energy of one fission: do not divide by $A$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M4",
      mistake: "Ignores the mass of the two positrons made.",
      remediation: t`The two positrons carry mass away: subtract $2m_e$ as well as $m_\alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Subtracts the mass of only one positron.",
      remediation: t`The reaction makes two positrons: subtract $2m_e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Uses the bare proton's mass with atomic masses.",
      remediation: t`Count electrons: two helium atoms carry 4, so the left side needs the hydrogen atom, $m_H = 1.007825\ \mathrm{u}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M7",
      mistake: "Counts only one alpha particle.",
      remediation: t`The reaction gives two alpha particles: subtract $2m_{He}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Works out the fuel for one second instead of one day.",
      remediation: t`The energy for a day is $Pt$ with $t = 24 \times 3600\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: t`Converts MeV to joules with $1.6 \times 10^{-19}$ alone.`,
      remediation: t`$1\ \mathrm{MeV}$ $= 10^6 \times 1.6 \times 10^{-19}\ \mathrm{J}$ $= 1.6 \times 10^{-13}\ \mathrm{J}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Stops at the number of moles and reads it as kilograms.",
      remediation: t`Multiply the number of moles by the molar mass, $235\ \mathrm{g/mol}$, to get the mass.`,
      fallback: { kind: "ext", topic: "mole concept (Std XI Chemistry)" },
    },
    {
      id: "C11-M11",
      mistake: "Confuses the moderator with the control rods.",
      remediation: "The moderator slows the neutrons down; the control rods absorb the surplus ones.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Confuses the moderator with the coolant.",
      remediation: "The moderator slows the neutrons down; the coolant carries the heat away.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Confuses the moderator with the shielding.",
      remediation: "The moderator slows neutrons inside the core; the shielding around the reactor keeps radiation in.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Thinks the light nuclei attract each other electrically.",
      remediation: "Nuclei are positive and repel each other; fusion needs a very high temperature to overcome that repulsion.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: "Thinks fusion turns all the mass into energy.",
      remediation: "Only the mass defect, a tiny fraction of the mass, is given out as energy.",
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M16",
      mistake: "Thinks the high temperature is the source of the energy.",
      remediation: "The heat only lets the nuclei get close; the energy comes from the rise in binding energy per nucleon.",
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.12" },
      stem: t`Find the energy released in the fission $^{236}_{92}\mathrm{U} \rightarrow {}^{137}_{53}\mathrm{I} + {}^{97}_{39}\mathrm{Y} + 2n$. The atomic masses are $236.04557\ \mathrm{u}$, $136.91787\ \mathrm{u}$ and $96.91827\ \mathrm{u}$ respectively. (Take $m_n = 1.00865\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mX: "236.04557", m1: "136.91787", m2: "96.91827", nn: "2", mn: "1.00865", A: "236" }, params: { ask: "fiss" } },
      options: [
        { key: "A", text: t`$179\ \mathrm{MeV}$`, correct: true, value: "179" },
        { key: "B", text: t`$2060\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M1", value: "2060" },
        { key: "C", text: t`$0.192\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M2", value: "0.192000000000000" },
        { key: "D", text: t`$0.758\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M3", value: "0.758000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta m = 236.04557 - 136.91787$ $- 96.91827 - 2 \times 1.00865$ $= 0.19213\ \mathrm{u}$.`,
          t`$Q$ $= 0.19213 \times 931.5 \approx 179\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.13" },
      stem: t`Inside the Sun, $4p \rightarrow \alpha + 2e^+ +$ neutrinos. Find the energy released, neglecting the energy given to the neutrinos. (Take $m_p = 1.00728\ \mathrm{u}$, $m_\alpha = 4.001506\ \mathrm{u}$, $m_e = 0.00055\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mp: "1.00728", ma: "4.001506", me: "0.00055" }, params: { ask: "fus" } },
      options: [
        { key: "A", text: t`$25.2\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M5", value: "25.2000000000000" },
        { key: "B", text: t`$0.0265\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M2", value: "0.0265000000000000" },
        { key: "C", text: t`$24.7\ \mathrm{MeV}$`, correct: true, value: "24.7000000000000" },
        { key: "D", text: t`$25.7\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M4", value: "25.7000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta m$ $= 4 \times 1.00728 - 4.001506$ $- 2 \times 0.00055$ $= 0.026514\ \mathrm{u}$.`,
          t`$Q$ $= 0.026514 \times 931.5 \approx 24.7\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.13" },
      stem: t`Find the energy released in $^7_3\mathrm{Li} + p \rightarrow 2\alpha$. The atomic masses are $7.016\ \mathrm{u}$ for $^7_3\mathrm{Li}$ and $4.0026\ \mathrm{u}$ for $^4_2\mathrm{He}$. (Take $m_H = 1.007825\ \mathrm{u}$ for a hydrogen atom, $m_p = 1.00728\ \mathrm{u}$ for a bare proton, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mLi: "7.016", mH: "1.007825", mp: "1.00728", mHe: "4.0026" }, params: { ask: "react" } },
      options: [
        { key: "A", text: t`$16.8\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M6", value: "16.8000000000000" },
        { key: "B", text: t`$3750\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M7", value: "3750" },
        { key: "C", text: t`$0.0186\ \mathrm{MeV}$`, correct: false, misconceptionId: "C11-M2", value: "0.0186000000000000" },
        { key: "D", text: t`$17.3\ \mathrm{MeV}$`, correct: true, value: "17.3000000000000" },
      ],
      solution: {
        steps: [
          t`Two helium atoms carry 4 electrons, so the left side needs the hydrogen atom's mass, $m_H$.`,
          t`$\Delta m = 7.016 + 1.007825$ $- 2 \times 4.0026$ $= 0.018625\ \mathrm{u}$.`,
          t`$Q$ $= 0.018625 \times 931.5 \approx 17.3\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.23" },
      stem: t`What mass of $^{235}\mathrm{U}$ must undergo fission each day to give $3000\ \mathrm{MW}$ of thermal power? Each fission gives $202.79\ \mathrm{MeV}$. (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$, $N_A = 6.02 \times 10^{23}\ \mathrm{mol^{-1}}$ and the molar mass $235\ \mathrm{g/mol}$.)`,
      verify: { kind: "value", inputs: { P_MW: "3000", E_MeV: "20279/100", M: "235", NA: "602*10**21", e: "16*10**-20" }, params: { ask: "fuel" } },
      options: [
        { key: "A", text: t`$3.12 \times 10^{6}\ \mathrm{kg}$`, correct: false, misconceptionId: "C11-M9", value: "3120000" },
        { key: "B", text: t`$13.3\ \mathrm{kg}$`, correct: false, misconceptionId: "C11-M10", value: "13.3000000000000" },
        { key: "C", text: t`$3.12\ \mathrm{kg}$`, correct: true, value: "3.12000000000000" },
        { key: "D", text: t`$3.61 \times 10^{-5}\ \mathrm{kg}$`, correct: false, misconceptionId: "C11-M8", value: "3.61000000000000e-5" },
      ],
      solution: {
        steps: [
          t`Energy in a day: $E = 3000 \times 10^6 \times 86400$ $= 2.592 \times 10^{14}\ \mathrm{J}$.`,
          t`One fission: $202.79 \times 1.6 \times 10^{-13}$ $= 3.245 \times 10^{-11}\ \mathrm{J}$, so $n \approx 7.99 \times 10^{24}$.`,
          t`$m$ $= \dfrac{7.99 \times 10^{24}}{6.02 \times 10^{23}} \times 235\ \mathrm{g}$ $\approx 3120\ \mathrm{g}$ $= 3.12\ \mathrm{kg}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.9" },
      stem: t`What does the moderator do in a nuclear reactor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "moder" } },
      options: [
        { key: "A", text: t`It absorbs the surplus neutrons and keeps the rate of fission steady`, correct: false, misconceptionId: "C11-M11", value: "absorb_neutrons_m" },
        { key: "B", text: t`It carries the heat away from the core to raise steam`, correct: false, misconceptionId: "C11-M12", value: "carry_heat_m" },
        { key: "C", text: t`It stops radiation from escaping out of the reactor`, correct: false, misconceptionId: "C11-M13", value: "stop_radiation_m" },
        { key: "D", text: t`It slows down the fast neutrons so that they can cause fission of $^{235}\mathrm{U}$`, correct: true, value: "slow_neutrons_m" },
      ],
      solution: {
        steps: [
          t`Fission of $^{235}\mathrm{U}$ is caused by slow neutrons, but each fission gives out fast ones.`,
          t`The moderator, such as heavy water or graphite, slows them down so the chain reaction goes on.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.8" },
      stem: t`Why does the fusion of two light nuclei into a heavier one release energy?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "why" } },
      options: [
        { key: "A", text: t`The very high temperature needed is itself the source of the energy`, correct: false, misconceptionId: "C11-M16", value: "heat_source_f" },
        { key: "B", text: t`The product has a larger binding energy per nucleon, so it weighs less than the nuclei that formed it`, correct: true, value: "higher_bea_f" },
        { key: "C", text: t`The light nuclei attract each other electrically, and that attraction gives out the energy`, correct: false, misconceptionId: "C11-M14", value: "electric_pull_f" },
        { key: "D", text: t`All the mass of the light nuclei is turned into energy`, correct: false, misconceptionId: "C11-M15", value: "all_mass_f" },
      ],
      solution: {
        steps: [
          t`Light nuclei have a small binding energy per nucleon; the heavier product has a larger one.`,
          t`So the product weighs less than the reactants, and the mass defect is given out as energy, $\Delta mc^2$.`,
        ],
      },
    },
  ],
};
