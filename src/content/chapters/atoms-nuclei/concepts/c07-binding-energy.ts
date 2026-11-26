import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Weigh six protons and six neutrons one by one, then weigh a carbon-12 nucleus made of exactly those particles. The nucleus is lighter. Where did the missing mass go?`,
    reveal: t`Into the energy that binds the nucleus together. Forming it released energy $\Delta mc^2$; that same energy, the **binding energy**, must be supplied to pull it apart again.`,
  },
  explanation: {
    intuition: [
      t`A nucleus weighs less than the protons and neutrons that make it up: the difference is the **mass defect** $\Delta m$.`,
      t`By $E = mc^2$, that missing mass is the energy given out when the nucleons came together.`,
      t`To break the nucleus into separate nucleons, the same energy must be put back: the **binding energy**.`,
      t`Dividing by $A$ gives the **binding energy per nucleon**, a measure of how tightly each nucleon is held.`,
      t`It is largest, about $8.8\ \mathrm{MeV}$, for nuclei near iron-56.`,
    ],
    formal: [
      {
        title: "Mass defect and binding energy",
        points: [
          t`With atomic masses: $\Delta m$ $= Zm_H + \left(A - Z\right)m_n - M_{atom}$; the electrons cancel.`,
          t`With a bare nucleus: use the proton's mass, $Zm_p + \left(A - Z\right)m_n - M_{nucleus}$.`,
          t`Binding energy $E_B = \Delta mc^2$; with $\Delta m$ in u, $E_B$ $= \Delta m \times 931.5\ \mathrm{MeV}$.`,
        ],
      },
      {
        title: "Binding energy per nucleon",
        points: [
          t`$\dfrac{E_B}{A}$ is about $7$ to $9\ \mathrm{MeV}$ for most nuclei.`,
          t`It rises steeply for light nuclei, peaks near $^{56}\mathrm{Fe}$, and falls slowly for heavy ones.`,
          t`So joining light nuclei (fusion) or splitting heavy ones (fission) releases energy.`,
        ],
      },
    ],
    worked: {
      prompt: t`The atomic mass of $^{12}_6\mathrm{C}$ is exactly $12\ \mathrm{u}$. Find its binding energy and its binding energy per nucleon. (Take $m_H$ $= 1.007825\ \mathrm{u}$, $m_n = 1.00866\ \mathrm{u}$, $1\ \mathrm{u}$ $= 931.5\ \mathrm{MeV}/c^2$.)`,
      steps: [
        t`$\Delta m$ $= 6 \times 1.007825 + 6 \times 1.00866 - 12$ $= 0.09891\ \mathrm{u}$.`,
        t`$E_B = 0.09891 \times 931.5$ $\approx 92.1\ \mathrm{MeV}$.`,
        t`$\dfrac{E_B}{A} = \dfrac{92.1}{12}$ $\approx 7.68\ \mathrm{MeV}$ per nucleon.`,
      ],
      answer: t`$92.1\ \mathrm{MeV}$; $7.68\ \mathrm{MeV}$ per nucleon`,
    },
    visualSpec: t`Weigh a nucleus against its separate nucleons and watch the missing mass appear as binding energy.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Swaps the numbers of protons and neutrons.",
      remediation: t`$^7_3\mathrm{Li}$ has $Z = 3$ protons and $A - Z = 4$ neutrons.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M2",
      mistake: "Leaves the mass defect in u.",
      remediation: t`Multiply by $931.5$ to turn u into MeV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Gives the energy per nucleon when the total is asked for.",
      remediation: t`The binding energy is the whole $\Delta mc^2$; per nucleon is that divided by $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Uses the hydrogen atom's mass with a bare nucleus.",
      remediation: t`A bare nucleus has no electrons, so use the proton's mass, $1.00728\ \mathrm{u}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Gives the energy per nucleon when the total is asked for.",
      remediation: t`Here the whole binding energy is asked: do not divide by $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Gives the total binding energy, not per nucleon.",
      remediation: t`Divide the total by the number of nucleons, $A = 244$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Divides by $Z$.`,
      remediation: t`Per nucleon means per proton and neutron together: divide by $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Divides by $N$.`,
      remediation: t`Per nucleon means per proton and neutron together: divide by $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks the biggest nucleus is the most tightly bound.",
      remediation: "Heavy nuclei have more binding energy in all, but less per nucleon than iron.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks helium, being very stable, has the most per nucleon.",
      remediation: t`$^4\mathrm{He}$ is unusually stable for a light nucleus, about $7.1\ \mathrm{MeV}$, but iron reaches $8.8\ \mathrm{MeV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks the smallest nucleus is the most tightly bound.",
      remediation: t`The deuteron is weakly bound, about $1.1\ \mathrm{MeV}$ per nucleon.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Takes the whole rest energy of the nucleus as its binding energy.",
      remediation: "Only the mass defect, the missing mass, becomes binding energy.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.6" },
      stem: t`The atomic mass of $^7_3\mathrm{Li}$ is $7.016\ \mathrm{u}$. What is its binding energy? (Take $m_H = 1.007825\ \mathrm{u}$, $m_n = 1.00866\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mH: "1.007825", mn: "1.00866", Z: "3", A: "7", M: "7.016" }, params: { ask: "BE_atom" } },
      options: [
        { key: "A", text: t`$0.0421\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M2", value: "0.0421000000000000" },
        { key: "B", text: t`$5.6\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M3", value: "5.60000000000000" },
        { key: "C", text: t`$39.2\ \mathrm{MeV}$`, correct: true, value: "39.2000000000000" },
        { key: "D", text: t`$38.5\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M1", value: "38.5000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta m$ $= 3 \times 1.007825 + 4 \times 1.00866 - 7.016$ $\approx 0.04212\ \mathrm{u}$.`,
          t`$E_B$ $= 0.04212 \times 931.5 \approx 39.2\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.10" },
      stem: t`An alpha particle, the bare $^4_2\mathrm{He}$ nucleus, has a mass of $4.00151\ \mathrm{u}$. What is its binding energy? (Take $m_p = 1.00728\ \mathrm{u}$, $m_n = 1.00866\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mp: "1.00728", mn: "1.00866", mH: "1.007825", Z: "2", A: "4", M: "4.00151" }, params: { ask: "BE_nuc" } },
      options: [
        { key: "A", text: t`$0.0304\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M2", value: "0.0304000000000000" },
        { key: "B", text: t`$29.3\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M4", value: "29.3000000000000" },
        { key: "C", text: t`$7.07\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M5", value: "7.07000000000000" },
        { key: "D", text: t`$28.3\ \mathrm{MeV}$`, correct: true, value: "28.3000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta m$ $= 2 \times 1.00728 + 2 \times 1.00866 - 4.00151$ $= 0.03037\ \mathrm{u}$.`,
          t`$E_B$ $= 0.03037 \times 931.5 \approx 28.3\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.12" },
      stem: t`The atomic mass of $^{244}_{95}\mathrm{Am}$ is $244.06428\ \mathrm{u}$. What is its binding energy per nucleon? (Take $m_H = 1.007825\ \mathrm{u}$, $m_n = 1.00866\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mH: "1.007825", mn: "1.00866", Z: "95", A: "244", M: "244.06428" }, params: { ask: "BEA" } },
      options: [
        { key: "A", text: t`$12.3\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M8", value: "12.3000000000000" },
        { key: "B", text: t`$7.52\ \mathrm{MeV}$`, correct: true, value: "7.52000000000000" },
        { key: "C", text: t`$1830\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M6", value: "1830" },
        { key: "D", text: t`$19.3\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M7", value: "19.3000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta m$ $= 95 \times 1.007825 + 149 \times 1.00866 - 244.06428$ $\approx 1.9694\ \mathrm{u}$, so $E_B \approx 1834.5\ \mathrm{MeV}$.`,
          t`$\dfrac{E_B}{A}$ $= \dfrac{1834.5}{244} \approx 7.52\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`Which of these nuclei has the largest binding energy per nucleon?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "most" } },
      options: [
        { key: "A", text: t`$^{56}\mathrm{Fe}$`, correct: true, value: "iron56" },
        { key: "B", text: t`$^{238}\mathrm{U}$`, correct: false, misconceptionId: "C07-M9", value: "uranium238" },
        { key: "C", text: t`$^4\mathrm{He}$`, correct: false, misconceptionId: "C07-M10", value: "helium4" },
        { key: "D", text: t`$^2\mathrm{H}$`, correct: false, misconceptionId: "C07-M11", value: "deuteron2" },
      ],
      solution: {
        steps: [
          t`The binding energy per nucleon peaks near mass number $56$.`,
          t`$^{56}\mathrm{Fe}$, at about $8.8\ \mathrm{MeV}$, beats $^{238}\mathrm{U}$ ($7.6$), $^4\mathrm{He}$ ($7.1$) and $^2\mathrm{H}$ ($1.1$).`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`A deuteron, the bare $^2_1\mathrm{H}$ nucleus, has a mass of $2.01355\ \mathrm{u}$. What is its binding energy? (Take $m_p = 1.00728\ \mathrm{u}$, $m_n = 1.00866\ \mathrm{u}$, $1\ \mathrm{u} = 931.5\ \mathrm{MeV}/c^2$.)`,
      verify: { kind: "value", inputs: { mp: "1.00728", mn: "1.00866", mH: "1.007825", Z: "1", A: "2", M: "2.01355" }, params: { ask: "BE_nuc" } },
      options: [
        { key: "A", text: t`$0.00239\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M2", value: "0.00239000000000000" },
        { key: "B", text: t`$1.11\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M5", value: "1.11000000000000" },
        { key: "C", text: t`$1880\ \mathrm{MeV}$`, correct: false, misconceptionId: "C07-M12", value: "1880" },
        { key: "D", text: t`$2.23\ \mathrm{MeV}$`, correct: true, value: "2.23000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta m$ $= 1.00728 + 1.00866 - 2.01355$ $= 0.00239\ \mathrm{u}$.`,
          t`$E_B$ $= 0.00239 \times 931.5 \approx 2.23\ \mathrm{MeV}$.`,
        ],
      },
    },
  ],
};
