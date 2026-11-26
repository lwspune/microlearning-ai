import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Liquid oxygen poured between the poles of a strong magnet clings there. Liquid nitrogen pours straight through. Both are diatomic. What makes oxygen different?`,
    reveal: t`An $\ce{O2}$ molecule has two unpaired electrons, one in each of two $\pi^*$ orbitals, so a magnet attracts it. All of $\ce{N2}$'s electrons are paired.`,
  },
  explanation: {
    intuition: [
      t`**Allotropes** are different forms of the same element; oxygen has two, **dioxygen** $\ce{O2}$ and **ozone** $\ce{O3}$.`,
      t`In the laboratory, dioxygen is made by heating potassium chlorate, $\ce{KClO3}$.`,
      t`A **paramagnetic** substance is attracted by a magnet; it needs unpaired electrons.`,
      t`$\ce{O2}$ is paramagnetic, even though it has an even number of electrons.`,
      t`Ozone is a bent molecule and a powerful **oxidising agent**: it readily gives up one O atom.`,
      t`High in the air, an ozone layer blocks harmful UV light; NO and CFCs thin it.`,
    ],
    formal: [
      {
        title: "Preparing dioxygen",
        points: [
          t`Heat potassium chlorate with a little manganese dioxide, $\ce{MnO2}$.`,
          t`$\ce{2KClO3}$ $\ce{->[\Delta] 2KCl + 3O2}$`,
          t`$\ce{MnO2}$ is a **catalyst**: it lowers the temperature of decomposition and is not used up.`,
          t`Some metal oxides also give dioxygen on heating: $\ce{2PbO2 -> 2PbO + O2}$.`,
          t`Uses: breathing support in hospitals, and oxy-acetylene flames for welding and cutting metals.`,
        ],
      },
      {
        title: "Why dioxygen is paramagnetic",
        points: [
          t`The Lewis structure $\ce{O=O}$ shows every electron paired, so it predicts $\ce{O2}$ is diamagnetic.`,
          t`Molecular orbital theory fills the orbitals of $\ce{O2}$ in order of energy:`,
          t`$\mathrm{KK}\ \sigma(2s)^2$ $\sigma^*(2s)^2\ \sigma(2p_z)^2$`,
          t`$\pi(2p_x)^2\ \pi(2p_y)^2$ $\pi^*(2p_x)^1\ \pi^*(2p_y)^1$`,
          t`The two $\pi^*$ orbitals have equal energy, so by **Hund's rule** the last two electrons go in singly.`,
          t`Two unpaired electrons make $\ce{O2}$ paramagnetic: an even count does not mean all paired.`,
        ],
      },
      {
        title: "Structure of ozone",
        points: [
          t`Ozone is an **angular** (bent) molecule; the $\ce{O-O-O}$ angle is about $117^\circ$.`,
          t`The central O carries a lone pair, which bends the molecule.`,
          t`Ozone is a **resonance hybrid** of two forms: $\ce{O=O-O}$ and $\ce{O-O=O}$.`,
          t`So both O-O bonds are identical, $128$ pm, between a single and a double bond.`,
          t`All its electrons are paired, so ozone is **diamagnetic**.`,
        ],
      },
      {
        title: "Ozone, a powerful oxidant",
        points: [
          t`Ozone readily breaks up, giving **nascent oxygen**, a free O atom: $\ce{O3 -> O2 + [O]}$.`,
          t`The nascent oxygen oxidises; the $\ce{O2}$ is set free unchanged.`,
          t`It frees iodine from moist KI: $\ce{2KI + H2O + O3}$ $\ce{-> 2KOH + I2 + O2}$.`,
          t`It oxidises coloured matter to colourless matter with no water, so it is a **dry bleach**.`,
          t`Towards peroxides it acts as a reducing agent: $\ce{H2O2 + O3 -> H2O + 2O2}$.`,
          t`Uses: purifying air in crowded places, sterilising drinking water, bleaching oils and starch.`,
        ],
      },
      {
        title: "Why ozone can explode",
        points: [
          t`Ozone is less stable than dioxygen and decomposes to it: $\ce{2O3 -> 3O2}$.`,
          t`The change gives out heat, so $\Delta H$ is negative.`,
          t`Three molecules form from two, so entropy rises and $\Delta S$ is positive.`,
          t`Both make $\Delta G$ large and negative, so concentrated ozone can explode.`,
        ],
      },
      {
        title: "The ozone layer",
        points: [
          t`The ozone layer in the upper atmosphere absorbs harmful ultraviolet light from the Sun.`,
          t`Nitric oxide from car and supersonic jet exhausts destroys it: $\ce{NO + O3 -> NO2 + O2}$.`,
          t`**Chlorofluorocarbons** (CFCs, freons) from aerosols and refrigerators also thin it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Lead sulfide, PbS, is treated with ozone. Write the balanced equation.`,
      steps: [
        t`Each ozone molecule gives one O atom: $\ce{O3 -> O2 + [O]}$.`,
        t`Sulfide sulfur $(-2)$ is oxidised to sulfate $(+6)$: PbS becomes $\ce{PbSO4}$, gaining four O atoms.`,
        t`So four $\ce{O3}$ molecules are used, and four $\ce{O2}$ molecules are set free.`,
        t`$\ce{PbS + 4O3 -> PbSO4 + 4O2}$`,
      ],
      answer: t`$\ce{PbS + 4O3 -> PbSO4 + 4O2}$`,
    },
    visualSpec: t`Drop the sixteen electrons of $\ce{O2}$ into its molecular orbitals one by one and watch a magnet start to pull when the two $\pi^*$ orbitals each get one.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks a molecule with an even number of electrons has them all paired, so O2 must be diamagnetic.",
      remediation: t`An even count does not mean all paired. In $\ce{O2}$ the last two electrons go singly into two $\pi^*$ orbitals of equal energy, so $\ce{O2}$ is paramagnetic.`,
      fallback: { kind: "ext", topic: "molecular orbital theory (Std XI Chemistry)" },
    },
    {
      id: "C04-M2",
      mistake: "Ignores Hund's rule and pairs the two pi* electrons of O2 in one orbital.",
      remediation: t`By Hund's rule, electrons entering orbitals of equal energy, $\pi^*2p_x$ and $\pi^*2p_y$, go in singly first. So $\ce{O2}$ has two unpaired electrons.`,
      fallback: { kind: "ext", topic: "Hund's rule (Std XI Chemistry)" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks each O atom keeps its own two unpaired 2p electrons in a molecule, so O2 has four and O3 is a radical.",
      remediation: t`Bonding pairs up the atoms' unpaired electrons. $\ce{O2}$ keeps just two, in its $\pi^*$ orbitals; $\ce{O3}$ has none, so it is diamagnetic and not a radical.`,
      fallback: { kind: "ext", topic: "chemical bonding (Std XI Chemistry)" },
    },
    {
      id: "C04-M4",
      mistake: "Ignores resonance: draws ozone with one O=O double bond and one longer, weaker O-O single bond.",
      remediation: t`Ozone is a resonance hybrid of $\ce{O=O-O}$ and $\ce{O-O=O}$. Both bonds are the same, $128$ pm, between a single and a double bond.`,
      fallback: { kind: "ext", topic: "resonance (Std XI Chemistry)" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks ozone is linear, like CO2, forgetting the lone pair on the central O atom.",
      remediation: t`The central O of ozone carries a lone pair, which bends the molecule to about $117^\circ$. $\ce{CO2}$ is linear because its C has no lone pair.`,
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks ozone hands over all three of its O atoms when it oxidises, setting no O2 free.",
      remediation: t`Ozone gives one O atom at a time: $\ce{O3 -> O2 + [O]}$. The nascent oxygen oxidises, and the $\ce{O2}$ is set free.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks every bleach works through water, as chlorine does, so ozone too needs moisture.",
      remediation: "Chlorine needs water to make its oxidant. Ozone carries its own: its nascent oxygen oxidises the colour with no water, so it is a dry bleach.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M2 is caught only by C04-Q1 and C04-M7 only by C04-Q4; the magnetism items share C04-M1 and C04-M3.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#2" },
      stem: t`A dioxygen molecule, $\ce{O2}$, has 16 electrons, an even number. Which statement about its magnetism is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "o2_magnetism" } },
      options: [
        { key: "A", text: t`Paramagnetic: each O atom keeps its two unpaired 2p electrons, four in all`, correct: false, misconceptionId: "C04-M3", value: "para_four_from_atoms" },
        { key: "B", text: t`Paramagnetic: $\pi^*2p_x$ and $\pi^*2p_y$ each hold one unpaired electron`, correct: true, value: "para_two_pi_star" },
        { key: "C", text: t`Diamagnetic: an even number of electrons must all be paired`, correct: false, misconceptionId: "C04-M1", value: "dia_even_count" },
        { key: "D", text: t`Diamagnetic: the two $\pi^*$ electrons pair up in one orbital`, correct: false, misconceptionId: "C04-M2", value: "dia_pi_star_paired" },
      ],
      solution: {
        steps: [
          t`$\ce{O2}$ ends $\pi(2p_y)^2$ $\pi^*(2p_x)^1\ \pi^*(2p_y)^1$.`,
          t`The two $\pi^*$ orbitals have equal energy, so by Hund's rule the last two electrons go in singly.`,
          t`Two unpaired electrons make $\ce{O2}$ paramagnetic, though its total count is even.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (xix)" },
      stem: t`Which describes the ozone molecule, $\ce{O3}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "o3_structure" } },
      options: [
        { key: "A", text: t`Bent; one short O=O and one longer O-O bond; diamagnetic`, correct: false, misconceptionId: "C04-M4", value: "bent_unequal_dia" },
        { key: "B", text: t`Linear; both O-O bonds 128 pm; diamagnetic`, correct: false, misconceptionId: "C04-M5", value: "linear_equal_dia" },
        { key: "C", text: t`Bent; both O-O bonds 128 pm; paramagnetic`, correct: false, misconceptionId: "C04-M3", value: "bent_equal_para" },
        { key: "D", text: t`Bent; both O-O bonds 128 pm; diamagnetic`, correct: true, value: "bent_equal_dia" },
      ],
      solution: {
        steps: [
          t`The central O has a lone pair, so ozone is bent, about $117^\circ$.`,
          t`It is a resonance hybrid of $\ce{O=O-O}$ and $\ce{O-O=O}$, so both bonds are $128$ pm.`,
          t`All its electrons are paired, so it is diamagnetic.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.8" },
      stem: t`Which statement about $\ce{O2}$ and $\ce{O3}$ is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "o2_vs_o3" } },
      options: [
        { key: "A", text: t`$\ce{O2}$ is paramagnetic; $\ce{O3}$ is bent and diamagnetic`, correct: true, value: "o2_para_o3_bent_dia" },
        { key: "B", text: t`$\ce{O2}$ is paramagnetic; $\ce{O3}$ is linear, like $\ce{CO2}$`, correct: false, misconceptionId: "C04-M5", value: "o2_para_o3_linear" },
        { key: "C", text: t`Both are diamagnetic, since each has an even number of electrons`, correct: false, misconceptionId: "C04-M1", value: "both_dia" },
        { key: "D", text: t`Both are paramagnetic, since their O atoms keep unpaired electrons`, correct: false, misconceptionId: "C04-M3", value: "both_para" },
      ],
      solution: {
        steps: [
          t`$\ce{O2}$ has one electron in each $\pi^*$ orbital: two unpaired, so it is paramagnetic.`,
          t`$\ce{O3}$ has a lone pair on its central O, so it is bent, and has no unpaired electrons, so it is diamagnetic.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#7" },
      stem: t`The bleaching action of ozone is called a dry bleach. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dry_bleach" } },
      options: [
        { key: "A", text: t`Its unpaired electrons attack the dye directly, so no water is needed`, correct: false, misconceptionId: "C04-M3", value: "unpaired_attack" },
        { key: "B", text: t`Ozone is a dry gas; like chlorine, it still needs moisture to bleach`, correct: false, misconceptionId: "C04-M7", value: "needs_moisture" },
        { key: "C", text: t`$\ce{O3 -> O2 + [O]}$, and the nascent oxygen oxidises the colour; no water is needed`, correct: true, value: "nascent_o_no_water" },
        { key: "D", text: t`Each $\ce{O3}$ adds all three of its O atoms to the dye, so no water is needed`, correct: false, misconceptionId: "C04-M6", value: "all_three_o" },
      ],
      solution: {
        steps: [
          t`Ozone breaks up to give nascent oxygen: $\ce{O3 -> O2 + [O]}$.`,
          t`The nascent oxygen oxidises coloured matter to colourless matter.`,
          t`No water takes part, unlike chlorine's bleaching, so it is called a dry bleach.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.9" },
      stem: t`Ozone at high concentration can be dangerously explosive. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "o3_explosive" } },
      options: [
        { key: "A", text: t`Its unpaired electrons set off a runaway chain reaction`, correct: false, misconceptionId: "C04-M3", value: "radical_chain" },
        { key: "B", text: t`Its change to $\ce{O2}$ gives out heat and raises entropy, so $\Delta G$ is large and negative`, correct: true, value: "dh_neg_ds_pos" },
        { key: "C", text: t`Each $\ce{O3}$ splits at once into three free O atoms, which react violently`, correct: false, misconceptionId: "C04-M6", value: "three_free_atoms" },
        { key: "D", text: t`Its weak O-O single bond snaps suddenly and releases energy`, correct: false, misconceptionId: "C04-M4", value: "single_bond_snaps" },
      ],
      solution: {
        steps: [
          t`Ozone decomposes to the more stable dioxygen, $\ce{2O3 -> 3O2}$, giving out heat: $\Delta H < 0$.`,
          t`Three molecules form from two, so $\Delta S > 0$.`,
          t`So $\Delta G = \Delta H - T\Delta S$ is large and negative, and concentrated ozone can explode.`,
        ],
      },
    },
  ],
};
