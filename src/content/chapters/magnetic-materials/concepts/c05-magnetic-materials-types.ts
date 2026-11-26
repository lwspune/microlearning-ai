import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A magnet snaps onto an iron nail, barely tugs at aluminium foil, and very slightly pushes water away. Why do materials answer a magnet so differently?`,
    reveal: t`Because their atoms differ. Some atoms carry no moment of their own, some carry moments that point at random, and in iron the moments line up in whole **domains**.`,
  },
  explanation: {
    intuition: [
      t`In a **diamagnetic** atom the electrons' moments cancel. A field induces a small moment *against* itself, so the material is weakly repelled.`,
      t`A **paramagnetic** atom has its own moment, but the moments point at random. A field lines a few of them up: weak attraction.`,
      t`In a **ferromagnetic** material, neighbouring moments lock together into **domains**. A field grows and turns whole domains, so the attraction is strong.`,
    ],
    formal: [
      {
        title: "Diamagnetic materials",
        points: [
          t`No permanent atomic moment; the applied field induces a moment opposite to itself.`,
          t`$\chi$ is small and negative, so $\mu_r$ is slightly less than $1$.`,
          t`They move from a stronger to a weaker field. $\chi$ does not depend on temperature.`,
          t`Examples: bismuth, copper, water.`,
        ],
      },
      {
        title: "Paramagnetic materials",
        points: [
          t`Permanent atomic moments, pointing at random until a field partly aligns them.`,
          t`$\chi$ is small and positive, so $\mu_r$ is slightly more than $1$; $M \propto H$.`,
          t`They move weakly towards a stronger field, and $\chi$ falls as the temperature rises.`,
          t`Examples: aluminium, sodium, oxygen.`,
        ],
      },
      {
        title: "Ferromagnetic materials",
        points: [
          t`Neighbouring moments are locked parallel in **domains**, each magnetized fully.`,
          t`Domains point at random until a field grows and turns them.`,
          t`$\chi$ runs to hundreds or thousands, $M$ is not proportional to $H$, and magnetization stays when the field goes.`,
          t`Examples: iron, cobalt, nickel.`,
        ],
      },
    ],
    worked: {
      prompt: t`A domain in nickel is a cube of side $2\ \mu\mathrm{m}$ holding $7.3 \times 10^{11}$ atoms, each of moment $5.6 \times 10^{-24}\ \mathrm{A\,m^2}$. Find its magnetization if all the moments are aligned.`,
      steps: [
        t`$V$ $= \left(2 \times 10^{-6}\right)^3$ $= 8 \times 10^{-18}\ \mathrm{m^3}$.`,
        t`$m_{max}$ $= 7.3 \times 10^{11} \times 5.6 \times 10^{-24}$ $\approx 4.09 \times 10^{-12}\ \mathrm{A\,m^2}$.`,
        t`$M = \dfrac{m_{max}}{V}$ $= \dfrac{4.09 \times 10^{-12}}{8 \times 10^{-18}}$ $\approx 5.1 \times 10^5\ \mathrm{A/m}$.`,
      ],
      answer: t`$5.1 \times 10^5\ \mathrm{A/m}$`,
    },
    visualSpec: t`Bring a magnet to bismuth, aluminium and iron and watch the atomic moments: induced against the field, partly aligned, and whole domains turning.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Multiplies a density in $\mathrm{g/cm^3}$ by a volume in $\mathrm{m^3}$.`,
      remediation: t`Put the volume in $\mathrm{cm^3}$ to match: $\left(10^{-4}\ \mathrm{cm}\right)^3$ $= 10^{-12}\ \mathrm{cm^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives the number of moles, not of atoms.",
      remediation: "Mass over molar mass gives moles; multiply by Avogadro's number to count atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Multiplies by the molar mass.",
      remediation: t`$N$ $= \dfrac{\text{mass}}{\text{molar mass}} \times N_A$: divide by the molar mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Gives the moment, not the magnetization.",
      remediation: t`Magnetization is moment per unit volume: divide $m_{max}$ by $V$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: t`Divides by the volume in $\mathrm{cm^3}$.`,
      remediation: t`$M$ is in $\mathrm{A/m}$, so divide by the volume in $\mathrm{m^3}$: $10^{-18}\ \mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Forgets the number of atoms.",
      remediation: t`The domain's moment is every atom's moment added: $m_{max} = N\mu$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Mixes up diamagnetic and paramagnetic.",
      remediation: t`A diamagnet's induced moment opposes the field, so $\chi$ is negative and $\mu_r < 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks a diamagnet shuts the field out completely.",
      remediation: t`Ordinary diamagnets have $\chi$ only about $-10^{-5}$: the field inside is barely weaker.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Applies Curie's law to a diamagnet.",
      remediation: t`Diamagnetism is induced, not aligned against heat, so its $\chi$ does not change with temperature.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Treats water as attracted by a magnet.",
      remediation: "Water is diamagnetic: it is pushed out of the strong field between the poles, so it dips there.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Thinks water is not magnetic at all.",
      remediation: "Every material responds a little; water is weakly diamagnetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Treats a diamagnet like a magnet with poles.",
      remediation: "A diamagnet has no poles of its own: it is pushed from any strong field towards a weaker one.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks only ferromagnets have permanent atomic moments.",
      remediation: "Paramagnetic atoms have them too; what they lack is the coupling that lines them up in domains.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks paramagnets are not attracted by a magnet.",
      remediation: "Paramagnets are attracted too, only weakly.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: t`Thinks $M$ is proportional to $H$ in a ferromagnet.`,
      remediation: t`That holds for paramagnets; a ferromagnet's $M$ depends on its history (hysteresis).`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Solved Ex.11.3" },
      stem: t`A domain in iron is a cube of side $1\ \mu\mathrm{m}$. Iron has molar mass $55\ \mathrm{g/mol}$ and density $7.9\ \mathrm{g/cm^3}$; take Avogadro's number as $6.023 \times 10^{23}$. About how many iron atoms does the domain hold?`,
      verify: { kind: "value", inputs: { a_um: "1", rho: "7.9", Mm: "55", NA: "6.023e23" }, params: { ask: "N" } },
      options: [
        { key: "A", text: t`$2.62 \times 10^{14}$`, correct: false, misconceptionId: "C05-M3", value: "262000000000000" },
        { key: "B", text: t`$8.65 \times 10^{10}$`, correct: true, value: "86500000000" },
        { key: "C", text: t`$86500$`, correct: false, misconceptionId: "C05-M1", value: "86500" },
        { key: "D", text: t`$1.44 \times 10^{-13}$`, correct: false, misconceptionId: "C05-M2", value: "1.44000000000000e-13" },
      ],
      solution: {
        steps: [
          t`$V$ $= \left(10^{-4}\ \mathrm{cm}\right)^3$ $= 10^{-12}\ \mathrm{cm^3}$, so the mass is $7.9 \times 10^{-12}\ \mathrm{g}$.`,
          t`$N$ $= \dfrac{7.9 \times 10^{-12} \times 6.023 \times 10^{23}}{55}$.`,
          t`$N \approx 8.65 \times 10^{10}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Solved Ex.11.3" },
      stem: t`A domain in iron is a cube of side $1\ \mu\mathrm{m}$. Iron has molar mass $55\ \mathrm{g/mol}$ and density $7.9\ \mathrm{g/cm^3}$; take Avogadro's number as $6.023 \times 10^{23}$. Each atom is a dipole of moment $9.27 \times 10^{-24}\ \mathrm{A\,m^2}$. What is the domain's magnetization if every moment is aligned?`,
      verify: { kind: "value", inputs: { a_um: "1", rho: "7.9", Mm: "55", NA: "6.023e23", mu: "9.27e-24" }, params: { ask: "M" } },
      options: [
        { key: "A", text: t`$8.02 \times 10^{-13}\ \mathrm{A/m}$`, correct: false, misconceptionId: "C05-M4", value: "8.02000000000000e-13" },
        { key: "B", text: t`$0.802\ \mathrm{A/m}$`, correct: false, misconceptionId: "C05-M5", value: "0.802000000000000" },
        { key: "C", text: t`$9.27 \times 10^{-6}\ \mathrm{A/m}$`, correct: false, misconceptionId: "C05-M6", value: "9.27000000000000e-6" },
        { key: "D", text: t`$8.02 \times 10^{5}\ \mathrm{A/m}$`, correct: true, value: "802000" },
      ],
      solution: {
        steps: [
          t`$N \approx 8.65 \times 10^{10}$, so $m_{max}$ $= 8.65 \times 10^{10} \times 9.27 \times 10^{-24}$ $\approx 8.02 \times 10^{-13}\ \mathrm{A\,m^2}$.`,
          t`$M = \dfrac{m_{max}}{V}$ $= \dfrac{8.02 \times 10^{-13}}{10^{-18}}$.`,
          t`$M \approx 8.02 \times 10^5\ \mathrm{A/m}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.1 (iii)" },
      stem: t`Which statement is true of a diamagnetic material?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dia" } },
      options: [
        { key: "A", text: t`$\chi$ is small and negative, so $\mu_r$ is slightly less than $1$`, correct: true, value: "neg_small" },
        { key: "B", text: t`$\chi$ is small and positive, so $\mu_r$ is slightly more than $1$`, correct: false, misconceptionId: "C05-M7", value: "pos_small" },
        { key: "C", text: t`$\chi = -1$, so $\mu_r = 0$ and no field enters it`, correct: false, misconceptionId: "C05-M8", value: "minus_one" },
        { key: "D", text: t`$\chi$ falls as the temperature rises, as $\dfrac{1}{T}$`, correct: false, misconceptionId: "C05-M9", value: "curie" },
      ],
      solution: {
        steps: [
          t`A diamagnet's induced moment opposes the field, so $\chi$ is negative, about $-10^{-5}$.`,
          t`$\mu_r = 1 + \chi$ is then slightly less than $1$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.5(iii)" },
      stem: t`A watch glass holding a little water is placed over two unlike magnetic poles close together. What does the water's surface do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "water" } },
      options: [
        { key: "A", text: t`It stays flat`, correct: false, misconceptionId: "C05-M11", value: "flat" },
        { key: "B", text: t`It is pulled over to the north pole's side`, correct: false, misconceptionId: "C05-M12", value: "one_pole" },
        { key: "C", text: t`It dips in the middle`, correct: true, value: "depression" },
        { key: "D", text: t`It rises in the middle`, correct: false, misconceptionId: "C05-M10", value: "elevation" },
      ],
      solution: {
        steps: [
          t`The field is strongest in the middle, between the close poles.`,
          t`Water is diamagnetic, so it is pushed towards the weaker field at the edges: the surface dips in the middle.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.5(iii)" },
      stem: t`Which property do ferromagnetic materials have that paramagnetic materials lack?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ferro" } },
      options: [
        { key: "A", text: t`Domains, which keep them magnetized after the field is removed`, correct: true, value: "retains" },
        { key: "B", text: t`Atoms with permanent magnetic dipole moments`, correct: false, misconceptionId: "C05-M13", value: "permanent" },
        { key: "C", text: t`Attraction towards a magnet`, correct: false, misconceptionId: "C05-M14", value: "attracted" },
        { key: "D", text: t`A magnetization proportional to $H$`, correct: false, misconceptionId: "C05-M15", value: "proportional" },
      ],
      solution: {
        steps: [
          t`Both have atoms with permanent moments, and both are attracted.`,
          t`Only a ferromagnet's moments lock into domains, which stay lined up after the field goes.`,
        ],
      },
    },
  ],
};
