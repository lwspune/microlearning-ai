import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Sulfur forms $\ce{SF6}$, with sulfur in the $+6$ state. Why does oxygen never form $\ce{OF6}$?`,
    reveal: t`Oxygen's outer shell ($n = 2$) has no $d$ orbitals. It cannot unpair its electrons to form six bonds, so it never goes above $+2$.`,
  },
  explanation: {
    intuition: [
      t`Oxygen and fluorine head groups 16 and 17.`,
      t`They are much smaller and more electronegative than the members below them.`,
      t`Their outer shell, $n = 2$, has only s and p orbitals: no $d$ orbitals.`,
      t`These three facts make oxygen and fluorine behave unlike the rest of their groups.`,
    ],
    formal: [
      {
        title: "Causes of the anomaly",
        points: [
          t`**Anomalous behaviour** means a first member behaving unlike the rest of its group.`,
          t`Small size: O and F are the smallest atoms of their groups.`,
          t`High electronegativity: F is the most electronegative element and O the next.`,
          t`No $d$ orbitals: they cannot hold more than eight electrons in the outer shell.`,
        ],
      },
      {
        title: "Oxygen: atomicity and state",
        points: [
          t`**Atomicity** is the number of atoms in one molecule.`,
          t`Small O atoms form strong $p\pi$-$p\pi$ double bonds, so oxygen is diatomic, $\ce{O=O}$.`,
          t`Larger S, Se and Te atoms prefer single bonds: sulfur forms $\ce{S8}$ rings, Se and Te form chains.`,
          t`Small $\ce{O2}$ molecules attract each other weakly, so oxygen is a gas.`,
          t`Big $\ce{S8}$ molecules have strong van der Waals forces, so sulfur is a solid.`,
        ],
      },
      {
        title: "Oxygen: oxidation states",
        points: [
          t`Oxygen shows $-2$ (common), $-1$ in peroxides such as $\ce{H2O2}$, and $+2$ in $\ce{OF2}$.`,
          t`It is positive only with fluorine, the one element more electronegative than oxygen.`,
          t`S, Se and Te also show $+4$ and $+6$, using their $d$ orbitals.`,
          t`Oxygen has no $d$ orbitals, so it cannot reach $+4$ or $+6$.`,
        ],
      },
      {
        title: "Fluorine: a weak F-F bond",
        points: [
          t`**Bond dissociation enthalpy** is the energy needed to break one mole of a bond.`,
          t`$\ce{F2}$ needs only $158.8$, while $\ce{Cl2}$ needs $242.6\ \mathrm{kJ\,mol^{-1}}$.`,
          t`The F atoms are so small that their lone pairs sit close together and repel strongly.`,
          t`This repulsion weakens the F-F bond, so fluorine is very reactive.`,
          t`Bond enthalpy is a different thing from boiling point, which depends on forces between molecules.`,
        ],
      },
      {
        title: "Fluorine: oxidation state",
        points: [
          t`Fluorine shows only $-1$; Cl, Br and I show $-1$, $+1$, $+3$, $+5$ and $+7$.`,
          t`Being the most electronegative element, F can never be given a positive state.`,
          t`With no $d$ orbitals, F cannot unpair its electrons to form more bonds.`,
          t`So F forms no **polyhalide ions** (ions of three or more halogen atoms) like $\ce{I3-}$.`,
        ],
      },
      {
        title: "Hydrogen bonding in hydrides",
        points: [
          t`A **hydrogen bond** is the attraction between H on F, O or N and a lone pair on another such atom.`,
          t`Only the small, very electronegative F and O form strong hydrogen bonds here.`,
          t`So $\ce{HF}$ is a liquid (b.p. 293 K) and water boils at 373 K.`,
          t`$\ce{HCl}$ and $\ce{H2S}$ cannot hydrogen bond strongly, so they are gases.`,
          t`Water boils above $\ce{HF}$: each $\ce{H2O}$ has two H atoms and two lone pairs, so it forms more hydrogen bonds.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange $\ce{HF}$, $\ce{HCl}$, $\ce{HBr}$ and $\ce{HI}$ in increasing order of boiling point.`,
      steps: [
        t`$\ce{HCl}$, $\ce{HBr}$ and $\ce{HI}$ have only van der Waals forces, which grow with size.`,
        t`So $\ce{HCl}$ (189 K) < $\ce{HBr}$ (206 K) < $\ce{HI}$ (238 K).`,
        t`$\ce{HF}$ molecules are joined by hydrogen bonds, so $\ce{HF}$ boils highest (293 K).`,
      ],
      answer: t`$\ce{HCl}$ < $\ce{HBr}$ < $\ce{HI}$ < $\ce{HF}$`,
    },
    visualSpec: t`Toggle hydrogen bonds on and off and watch the boiling points of HF and water drop into line.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks smaller atoms always form stronger bonds, so F-F (and O-O) bonds are the strongest.",
      remediation: t`Small size helps, but in F-F and O-O single bonds the lone pairs sit close and repel. The F-F bond ($158.8\ \mathrm{kJ\,mol^{-1}}$) is weaker than Cl-Cl ($242.6$).`,
      fallback: { kind: "ext", topic: "chemical bonding (Std XI Chemistry)" },
    },
    {
      id: "C02-M2",
      mistake: "Mixes the covalent bond inside a molecule with the forces between molecules.",
      remediation: "Melting and boiling depend on the forces between molecules (van der Waals, hydrogen bonds), not on the bonds inside them.",
      fallback: { kind: "ext", topic: "intermolecular forces (Std XI Chemistry)" },
    },
    {
      id: "C02-M3",
      mistake: "Knows the F-F bond is weak but makes it the weakest halogen bond of all.",
      remediation: t`F-F ($158.8$) is weaker than Cl-Cl and Br-Br, but I-I ($151.1\ \mathrm{kJ\,mol^{-1}}$) is weaker still.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Ignores hydrogen bonding: thinks boiling points of hydrides simply rise with molar mass.",
      remediation: t`Strong hydrogen bonds join $\ce{HF}$ and $\ce{H2O}$ molecules, so they boil far above heavier $\ce{HCl}$ and $\ce{H2S}$.`,
      fallback: { kind: "ext", topic: "hydrogen bonding (Std XI Chemistry)" },
    },
    {
      id: "C02-M5",
      mistake: t`Thinks hydrogen bonding scales with electronegativity alone, so $\ce{HF}$ boils above water.`,
      remediation: t`Each $\ce{H2O}$ has two H atoms and two lone pairs and forms more hydrogen bonds than $\ce{HF}$. Water boils higher: 373 K against 293 K.`,
      fallback: { kind: "ext", topic: "hydrogen bonding (Std XI Chemistry)" },
    },
    {
      id: "C02-M6",
      mistake: t`Gives oxygen and fluorine vacant $d$ orbitals like the heavier members of their groups.`,
      remediation: t`The $n = 2$ shell has only s and p orbitals. O and F cannot expand their octet, so O stops at $+2$ and F shows only $-1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.5" },
      stem: t`Arrange $\ce{F2}$, $\ce{Cl2}$, $\ce{Br2}$ and $\ce{I2}$ in decreasing order of bond dissociation enthalpy.`,
      verify: { kind: "value", inputs: {  }, params: { q: "bde", set: "F2,Cl2,Br2,I2" } },
      options: [
        { key: "A", text: t`$\ce{Cl2}$ > $\ce{Br2}$ > $\ce{F2}$ > $\ce{I2}$`, correct: true, value: "ord_cl2_br2_f2_i2" },
        { key: "B", text: t`$\ce{F2}$ > $\ce{Cl2}$ > $\ce{Br2}$ > $\ce{I2}$`, correct: false, misconceptionId: "C02-M1", value: "ord_f2_cl2_br2_i2" },
        { key: "C", text: t`$\ce{I2}$ > $\ce{Br2}$ > $\ce{Cl2}$ > $\ce{F2}$`, correct: false, misconceptionId: "C02-M2", value: "ord_i2_br2_cl2_f2" },
        { key: "D", text: t`$\ce{Cl2}$ > $\ce{Br2}$ > $\ce{I2}$ > $\ce{F2}$`, correct: false, misconceptionId: "C02-M3", value: "ord_cl2_br2_i2_f2" },
      ],
      solution: {
        steps: [
          t`Values: Cl-Cl $242.6$, Br-Br $192.8$, F-F $158.8$, I-I $151.1\ \mathrm{kJ\,mol^{-1}}$.`,
          t`F-F is weak because lone pairs on the small F atoms repel, but I-I is weaker still.`,
          t`Order: $\ce{Cl2}$ > $\ce{Br2}$ > $\ce{F2}$ > $\ce{I2}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#3" },
      stem: t`Arrange $\ce{H2O}$, $\ce{H2S}$, $\ce{HF}$ and $\ce{HCl}$ in increasing order of boiling point.`,
      verify: { kind: "value", inputs: {  }, params: { q: "bp", set: "H2O,H2S,HF,HCl" } },
      options: [
        { key: "A", text: t`$\ce{H2O}$ < $\ce{HF}$ < $\ce{H2S}$ < $\ce{HCl}$`, correct: false, misconceptionId: "C02-M4", value: "ord_h2o_hf_h2s_hcl" },
        { key: "B", text: t`$\ce{HCl}$ < $\ce{H2S}$ < $\ce{H2O}$ < $\ce{HF}$`, correct: false, misconceptionId: "C02-M5", value: "ord_hcl_h2s_h2o_hf" },
        { key: "C", text: t`$\ce{H2S}$ < $\ce{HCl}$ < $\ce{H2O}$ < $\ce{HF}$`, correct: false, misconceptionId: "C02-M2", value: "ord_h2s_hcl_h2o_hf" },
        { key: "D", text: t`$\ce{HCl}$ < $\ce{H2S}$ < $\ce{HF}$ < $\ce{H2O}$`, correct: true, value: "ord_hcl_h2s_hf_h2o" },
      ],
      solution: {
        steps: [
          t`$\ce{HCl}$ (189 K) and $\ce{H2S}$ (213 K) have no strong hydrogen bonds.`,
          t`$\ce{HF}$ (293 K) and $\ce{H2O}$ (373 K) are hydrogen bonded.`,
          t`Water forms more hydrogen bonds per molecule, so it boils highest.`,
          t`Order: $\ce{HCl}$ < $\ce{H2S}$ < $\ce{HF}$ < $\ce{H2O}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#18" },
      stem: t`Which statement about fluorine is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "fluorine" } },
      options: [
        { key: "A", text: t`$\ce{HF}$ boils below $\ce{HCl}$, because $\ce{HF}$ is the lighter molecule`, correct: false, misconceptionId: "C02-M4", value: "hf_boils_below_hcl" },
        { key: "B", text: t`It shows only the $-1$ state and forms no polyhalide ion like $\ce{I3-}$`, correct: true, value: "f_minus1_no_polyhalide" },
        { key: "C", text: t`Like iodine, it forms the polyhalide ion $\ce{F3-}$ by expanding its octet`, correct: false, misconceptionId: "C02-M6", value: "f3_minus_like_iodine" },
        { key: "D", text: t`Its $\ce{F-F}$ bond is the strongest of all the halogen-halogen bonds`, correct: false, misconceptionId: "C02-M1", value: "ff_strongest_bond" },
      ],
      solution: {
        steps: [
          t`F is the most electronegative element and has no $d$ orbitals.`,
          t`So it shows only $-1$ and cannot hold the extra electrons a polyhalide ion needs.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#2" },
      stem: t`Which statement about oxygen is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxygen" } },
      options: [
        { key: "A", text: t`Water boils below $\ce{HF}$, because F is more electronegative than O`, correct: false, misconceptionId: "C02-M5", value: "h2o_boils_below_hf" },
        { key: "B", text: t`It shows only $-2$, $-1$ and $+2$, because it has no $d$ orbitals`, correct: true, value: "o_states_no_d" },
        { key: "C", text: t`Like sulfur, it reaches $+4$ and $+6$ by using its $d$ orbitals`, correct: false, misconceptionId: "C02-M6", value: "o_plus6_like_s" },
        { key: "D", text: t`$\ce{O2}$ is a gas because its $\ce{O=O}$ bond is weak`, correct: false, misconceptionId: "C02-M2", value: "o2_gas_weak_bond" },
      ],
      solution: {
        steps: [
          t`Oxygen is $-2$ normally, $-1$ in peroxides and $+2$ in $\ce{OF2}$.`,
          t`It has no $d$ orbitals, so it cannot reach $+4$ or $+6$ as sulfur does.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.3" },
      stem: t`Oxygen exists as $\ce{O2}$ molecules, but sulfur as $\ce{S8}$ rings. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "atomicity" } },
      options: [
        { key: "A", text: t`S uses its $d$ orbitals to bond to more atoms than O can`, correct: false, misconceptionId: "C02-M6", value: "s_d_orbitals" },
        { key: "B", text: t`Small O atoms form strong $p\pi$-$p\pi$ double bonds; S atoms prefer single bonds`, correct: true, value: "o_double_bonds" },
        { key: "C", text: t`O is smaller, so an O-O single bond is stronger than an S-S bond`, correct: false, misconceptionId: "C02-M1", value: "o_single_bonds_strong" },
        { key: "D", text: t`$\ce{O2}$ is a gas, so its molecules must be small`, correct: false, misconceptionId: "C02-M2", value: "o2_gas_so_small" },
      ],
      solution: {
        steps: [
          t`Small O atoms overlap well sideways and form strong $p\pi$-$p\pi$ double bonds: $\ce{O=O}$.`,
          t`Larger S atoms form weak $\pi$ bonds, so each S makes two single bonds and the atoms close into $\ce{S8}$ rings.`,
        ],
      },
    },
  ],
};
