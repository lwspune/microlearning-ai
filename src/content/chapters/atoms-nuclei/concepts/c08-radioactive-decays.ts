import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Uranium, with $Z = 92$, ends up, after a long chain of decays, as lead, with $Z = 82$. How can a nucleus turn into a different element?`,
    reveal: t`By radioactive decay. An alpha decay carries off 2 protons; a beta decay turns a neutron into a proton or back. Counting $A$ and $Z$ on both sides tells you exactly what each step makes.`,
  },
  explanation: {
    intuition: [
      t`An unstable nucleus **decays**: it gives out a particle or a photon and becomes more stable.`,
      t`The nucleus before the decay is the **parent**; the one left after it is the **daughter**.`,
      t`In **alpha decay** the nucleus gives out an alpha particle, a helium nucleus $^4_2\mathrm{He}$.`,
      t`In **beta decay** a neutron turns into a proton, or a proton into a neutron, and an electron or positron is given out.`,
      t`In **gamma decay** an excited nucleus drops to a lower energy level and gives out a photon.`,
      t`In every decay the mass number $A$ and the charge number $Z$ are separately conserved.`,
    ],
    formal: [
      {
        title: "Alpha decay",
        points: [
          t`$^A_Z\mathrm{X} \rightarrow {}^{A-4}_{Z-2}\mathrm{Y} + {}^4_2\mathrm{He}$.`,
          t`The alpha particle carries 2 protons and 2 neutrons, so $A$ falls by 4 and $Z$ by 2.`,
          t`It happens in heavy nuclei, where the repulsion of many protons is too strong for the nuclear force.`,
          t`Example: $^{228}_{90}\mathrm{Th} \rightarrow {}^{224}_{88}\mathrm{Ra} + \alpha$.`,
        ],
      },
      {
        title: "Beta minus and beta plus",
        points: [
          t`In **$\beta^-$ decay**, $n \rightarrow p + e^- + \bar{\nu}$, where $\bar{\nu}$ is an **antineutrino**.`,
          t`So $^A_Z\mathrm{X} \rightarrow {}^A_{Z+1}\mathrm{Y} + e^- + \bar{\nu}$: $A$ stays the same, $Z$ rises by 1.`,
          t`In **$\beta^+$ decay**, $p \rightarrow n + e^+ + \nu$: a **positron** $e^+$ (a positive electron) and a **neutrino** $\nu$.`,
          t`So $^A_Z\mathrm{X} \rightarrow {}^A_{Z-1}\mathrm{Y} + e^+ + \nu$: $A$ stays the same, $Z$ falls by 1.`,
          t`The electron or positron is made in the nucleus at the moment of decay; it is not an orbital electron.`,
        ],
      },
      {
        title: "Why the neutrino is needed",
        points: [
          t`Beta particles from one kind of nucleus come out with every energy from zero up to a largest value.`,
          t`With only two products, each would always get the same fixed share of the energy.`,
          t`So a third particle must share the energy: the neutrino (or antineutrino), with no charge and almost no mass.`,
          t`The beta particle has its largest energy, $Q$, when the neutrino gets almost none.`,
        ],
      },
      {
        title: "Gamma decay",
        points: [
          t`After an alpha or beta decay the daughter is often left in an **excited state**, written $^A_Z\mathrm{X}^*$.`,
          t`It drops to a lower level: $^A_Z\mathrm{X}^* \rightarrow {}^A_Z\mathrm{X} + \gamma$.`,
          t`Neither $A$ nor $Z$ changes; only the energy of the nucleus falls.`,
          t`The gamma photon's energy $h\nu$ is the difference between the two nuclear energy levels.`,
        ],
      },
      {
        title: "Energy released, Q",
        points: [
          t`$Q$ = (mass before $-$ mass after) $\times c^2$; with masses in u, multiply by $931.5\ \mathrm{MeV}$.`,
          t`With atomic masses, count the electrons on the two sides.`,
          t`Alpha: $Q$ $= \left[m_X - m_Y - m_{He}\right]c^2$; the electrons balance.`,
          t`$\beta^-$: $Q = \left[m_X - m_Y\right]c^2$; the daughter atom's extra electron stands for the emitted one.`,
          t`$\beta^+$: $Q$ $= \left[m_X - m_Y - 2m_e\right]c^2$; the parent has one electron more, and a positron is made.`,
          t`A decay can happen on its own only when $Q$ is positive.`,
        ],
      },
    ],
    worked: {
      prompt: t`Carbon-11 decays as $^{11}_6\mathrm{C} \rightarrow {}^{11}_5\mathrm{B} + e^+ +$ neutrino. The atomic masses are $11.01143\ \mathrm{u}$ for $^{11}\mathrm{C}$ and $11.0093\ \mathrm{u}$ for $^{11}\mathrm{B}$. Find the energy released. (Take $m_e = 0.00055\ \mathrm{u}$, $1\ \mathrm{u}$ $= 931.5\ \mathrm{MeV}/c^2$.)`,
      steps: [
        t`$A$ stays 11 and $Z$ falls from 6 to 5: a proton has become a neutron, so this is $\beta^+$ decay.`,
        t`The carbon atom has 6 electrons, boron only 5, and a positron is made: subtract $2m_e$.`,
        t`$\Delta m$ $= 11.01143 - 11.0093 - 2 \times 0.00055$ $= 0.00103\ \mathrm{u}$.`,
        t`$Q$ $= 0.00103 \times 931.5 \approx 0.96\ \mathrm{MeV}$.`,
      ],
      answer: t`$0.96\ \mathrm{MeV}$`,
    },
    visualSpec: t`Place a nucleus on a chart of neutron number against proton number and watch each decay move it: alpha two steps down each way, beta one step across.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Takes the alpha particle as two protons.",
      remediation: t`An alpha particle is a helium nucleus, $^4_2\mathrm{He}$: 2 protons and 2 neutrons, so $A$ falls by 4.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M2",
      mistake: t`Swaps the changes in $A$ and $Z$.`,
      remediation: t`$A$ counts all the nucleons and falls by 4; $Z$ counts the protons and falls by 2.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M3",
      mistake: t`Lowers $A$ but leaves $Z$ unchanged, as if the alpha particle carried no charge.`,
      remediation: t`The alpha particle carries 2 protons away, so $Z$ falls by 2 and the element changes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Thinks giving out an electron lowers $Z$.`,
      remediation: t`In $\beta^-$ decay a neutron becomes a proton, so $Z$ rises by 1. It is $\beta^+$ decay, with a positron, that lowers $Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Counts the emitted electron as a nucleon.",
      remediation: t`An electron is not a nucleon: $A$ stays the same in beta decay.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks the beta electron comes from an electron orbit.",
      remediation: "The beta electron is made in the nucleus as a neutron turns into a proton, so the nucleus itself changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Leaves out the neutrino.",
      remediation: "A positron always comes with a neutrino, which shares the energy of the decay.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Pairs the positron with an antineutrino.",
      remediation: t`$\beta^-$ gives an electron and an antineutrino; $\beta^+$ gives a positron and a neutrino.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Leaves the mass difference in u.",
      remediation: t`Multiply the mass difference in u by $931.5$ to get the energy in MeV.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M10",
      mistake: "Subtracts electron masses in an alpha decay too.",
      remediation: t`In alpha decay the electrons balance: 94 on the left, $92 + 2$ on the right. Use the atomic masses as they are.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Subtracts the parent's mass from the products' mass.",
      remediation: t`Energy released is mass before minus mass after; a decay that happens on its own has $Q > 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: t`Subtracts only one electron mass in $\beta^+$ decay.`,
      remediation: t`With atomic masses, $\beta^+$ needs $2m_e$: one for the parent's extra electron, one for the positron made.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: t`Subtracts no electron mass in $\beta^+$ decay, as for $\beta^-$.`,
      remediation: t`Only in $\beta^-$ do the electrons balance. In $\beta^+$ the daughter atom has one electron fewer and a positron is made: subtract $2m_e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Thinks the neutrino is needed to balance the charge.",
      remediation: "The charge balances without it, and the neutrino is neutral. It is needed to share the energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Thinks the neutrino is needed to balance the mass number.",
      remediation: t`The neutrino is not a nucleon and has almost no mass; $A$ balances without it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M16",
      mistake: "Confuses the neutrino with a gamma photon.",
      remediation: "A gamma photon comes from an excited nucleus. The neutrino is a separate neutral particle that shares the beta decay energy.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.14" },
      stem: t`Radium-226, $^{226}_{88}\mathrm{Ra}$, decays by emitting an alpha particle. What is the daughter nucleus?`,
      verify: { kind: "value", inputs: { A: "226", Z: "88" }, params: { ask: "alpha_d" } },
      options: [
        { key: "A", text: t`$^{222}_{86}\mathrm{Rn}$`, correct: true, value: "nuclide_222_86" },
        { key: "B", text: t`$^{224}_{86}\mathrm{Rn}$`, correct: false, misconceptionId: "C08-M1", value: "nuclide_224_86" },
        { key: "C", text: t`$^{224}_{84}\mathrm{Po}$`, correct: false, misconceptionId: "C08-M2", value: "nuclide_224_84" },
        { key: "D", text: t`$^{222}_{88}\mathrm{Ra}$`, correct: false, misconceptionId: "C08-M3", value: "nuclide_222_88" },
      ],
      solution: {
        steps: [
          t`An alpha particle is $^4_2\mathrm{He}$: $A$ falls by 4 and $Z$ by 2.`,
          t`$A = 226 - 4 = 222$ and $Z = 88 - 2 = 86$: radon, $^{222}_{86}\mathrm{Rn}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.14" },
      stem: t`Oxygen-19, $^{19}_{8}\mathrm{O}$, decays by emitting an electron ($\beta^-$ decay). What is the daughter nucleus?`,
      verify: { kind: "value", inputs: { A: "19", Z: "8" }, params: { ask: "betam_d" } },
      options: [
        { key: "A", text: t`$^{19}_{7}\mathrm{N}$`, correct: false, misconceptionId: "C08-M4", value: "nuclide_19_7" },
        { key: "B", text: t`$^{18}_{9}\mathrm{F}$`, correct: false, misconceptionId: "C08-M5", value: "nuclide_18_9" },
        { key: "C", text: t`$^{19}_{8}\mathrm{O}$, unchanged`, correct: false, misconceptionId: "C08-M6", value: "nuclide_19_8" },
        { key: "D", text: t`$^{19}_{9}\mathrm{F}$`, correct: true, value: "nuclide_19_9" },
      ],
      solution: {
        steps: [
          t`In $\beta^-$ decay a neutron becomes a proton: $A$ stays the same and $Z$ rises by 1.`,
          t`$A = 19$ and $Z = 8 + 1 = 9$: fluorine, $^{19}_9\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.14" },
      stem: t`Complete the decay $^{12}_{7}\mathrm{N} \rightarrow {}^{12}_{6}\mathrm{C} + \ ?$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "emit" } },
      options: [
        { key: "A", text: t`$e^-$ + antineutrino`, correct: false, misconceptionId: "C08-M4", value: "electron_antinu" },
        { key: "B", text: t`$e^+$ only`, correct: false, misconceptionId: "C08-M7", value: "positron_only" },
        { key: "C", text: t`$e^+$ + antineutrino`, correct: false, misconceptionId: "C08-M8", value: "positron_antinu" },
        { key: "D", text: t`$e^+$ + neutrino`, correct: true, value: "positron_nu" },
      ],
      solution: {
        steps: [
          t`$A$ stays 12 and $Z$ falls from 7 to 6: a proton has become a neutron.`,
          t`That is $\beta^+$ decay, which gives out a positron and a neutrino.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.7" },
      stem: t`Plutonium-238 decays by alpha emission: $^{238}\mathrm{Pu} \rightarrow {}^{234}\mathrm{U} + {}^{4}\mathrm{He}$. The atomic masses are $m_{Pu} = 238.04955\ \mathrm{u}$, $m_U = 234.04095\ \mathrm{u}$ and $m_{He} = 4.002603\ \mathrm{u}$. How much energy is released? (Take $m_e = 0.00055\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mX: "238.04955", mY: "234.04095", mHe: "4.002603", me: "0.00055" }, params: { ask: "Q_alpha" } },
      options: [
        { key: "A", text: t`$4.56\ \mathrm{MeV}$`, correct: false, misconceptionId: "C08-M10", value: "4.56000000000000" },
        { key: "B", text: t`$-5.59\ \mathrm{MeV}$`, correct: false, misconceptionId: "C08-M11", value: "-5.59000000000000" },
        { key: "C", text: t`$5.59\ \mathrm{MeV}$`, correct: true, value: "5.59000000000000" },
        { key: "D", text: t`$0.006\ \mathrm{MeV}$`, correct: false, misconceptionId: "C08-M9", value: "0.00600000000000000" },
      ],
      solution: {
        steps: [
          t`The electrons balance, $94 = 92 + 2$, so use the atomic masses as given.`,
          t`$\Delta m = 238.04955 - 234.04095$ $- 4.002603 = 0.005997\ \mathrm{u}$.`,
          t`$Q$ $= 0.005997 \times 931.5 \approx 5.59\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.8" },
      stem: t`Sodium-22 decays by positron emission: $^{22}_{11}\mathrm{Na} \rightarrow {}^{22}_{10}\mathrm{Ne} + e^+ +$ neutrino. The atomic masses are $21.994437\ \mathrm{u}$ for $^{22}\mathrm{Na}$ and $21.991385\ \mathrm{u}$ for $^{22}\mathrm{Ne}$. What is the largest kinetic energy the positron can have? (Take $m_e = 0.00055\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mX: "21.994437", mY: "21.991385", me: "0.00055" }, params: { ask: "Q_bplus" } },
      options: [
        { key: "A", text: t`$2.84\ \mathrm{MeV}$`, correct: false, misconceptionId: "C08-M13", value: "2.84000000000000" },
        { key: "B", text: t`$1.82\ \mathrm{MeV}$`, correct: true, value: "1.82000000000000" },
        { key: "C", text: t`$0.00195\ \mathrm{MeV}$`, correct: false, misconceptionId: "C08-M9", value: "0.00195000000000000" },
        { key: "D", text: t`$2.33\ \mathrm{MeV}$`, correct: false, misconceptionId: "C08-M12", value: "2.33000000000000" },
      ],
      solution: {
        steps: [
          t`This is $\beta^+$ decay with atomic masses, so subtract $2m_e = 0.0011\ \mathrm{u}$.`,
          t`$\Delta m = 21.994437 - 21.991385$ $- 0.0011 = 0.001952\ \mathrm{u}$.`,
          t`$Q$ $= 0.001952 \times 931.5 \approx 1.82\ \mathrm{MeV}$: the positron has this when the neutrino gets almost nothing.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.7" },
      stem: t`Why must a third particle, the neutrino (or antineutrino), be given out in beta decay?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "nu" } },
      options: [
        { key: "A", text: t`To keep the mass number the same on the two sides of the decay`, correct: false, misconceptionId: "C08-M15", value: "balance_mass_no" },
        { key: "B", text: t`To carry away the extra energy of the nucleus as a high-energy photon`, correct: false, misconceptionId: "C08-M16", value: "photon_nu" },
        { key: "C", text: t`Beta particles come out with a spread of energies up to $Q$; another particle must carry the rest`, correct: true, value: "spread_of_energy" },
        { key: "D", text: t`To balance the electric charge on the two sides of the decay`, correct: false, misconceptionId: "C08-M14", value: "balance_charge" },
      ],
      solution: {
        steps: [
          t`The charge and the mass number already balance without a third particle.`,
          t`But beta particles come out with a continuous spread of energies up to $Q$.`,
          t`So a neutral, nearly massless particle, the neutrino, must carry off the rest of the energy.`,
        ],
      },
    },
  ],
};
