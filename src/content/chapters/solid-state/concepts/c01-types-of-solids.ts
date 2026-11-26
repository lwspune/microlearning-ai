import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Quartz crystal and glass are both made mostly of silica, $\ce{SiO2}$. Heat them: quartz melts at one sharp temperature, but glass slowly softens over a range. Why the difference?`,
    reveal: t`Quartz is **crystalline**: its particles repeat in one regular pattern through the whole crystal, so every part melts at the same temperature. Glass is **amorphous**: its particles are ordered only over short distances, so different regions give way at different temperatures.`,
  },
  explanation: {
    intuition: [
      t`A **solid** keeps its shape because its particles are held in fixed positions.`,
      t`In a **crystalline solid** the particles repeat in a regular pattern through the whole solid: **long-range order**.`,
      t`In an **amorphous solid**, like glass or rubber, the order lasts only over short distances.`,
      t`So a crystalline solid melts at one sharp temperature; an amorphous one softens over a range.`,
      t`Crystalline solids are sorted by their particles: ions, atoms, molecules or metal ions.`,
      t`The forces between those particles decide hardness, melting point and conduction.`,
    ],
    formal: [
      {
        title: "Crystalline and amorphous solids",
        points: [
          t`**Crystalline solids** have a definite shape and long-range order, and melt sharply ($\ce{NaCl}$ at $801\,^\circ\mathrm{C}$).`,
          t`**Amorphous solids** such as glass, rubber and plastics have irregular shapes and only short-range order.`,
          t`An amorphous solid softens gradually over a range of temperatures.`,
          t`Softness does not make a solid amorphous: ice is soft but crystalline, and melts sharply at $0\,^\circ\mathrm{C}$.`,
        ],
      },
      {
        title: "Ionic and metallic solids",
        points: [
          t`In an **ionic solid**, cations and anions are held by strong electrostatic attraction ($\ce{NaCl}$, $\ce{MgO}$).`,
          t`Ionic solids are hard and brittle, with high melting points.`,
          t`They do not conduct as solids, since the ions cannot move; molten or dissolved, they conduct.`,
          t`In a **metallic solid**, metal ions sit in a sea of delocalised electrons ($\ce{Cu}$, $\ce{Fe}$).`,
          t`Those mobile electrons let a metal conduct even as a solid; metals are also malleable and lustrous.`,
        ],
      },
      {
        title: "Covalent network solids",
        points: [
          t`In a **covalent network solid**, atoms are joined by covalent bonds into one giant network.`,
          t`Diamond and quartz ($\ce{SiO2}$) are very hard, with very high melting points.`,
          t`Graphite is a network too, but its flat layers slide over each other, so it is soft.`,
          t`Graphite conducts because each carbon atom has one electron free to move along its layer.`,
        ],
      },
      {
        title: "Molecular solids",
        points: [
          t`In a **molecular solid**, separate molecules are held to each other by weak intermolecular forces.`,
          t`The covalent bonds inside a molecule do not join it to its neighbours.`,
          t`So molecular solids are soft, melt at low temperatures and do not conduct.`,
          t`They are still crystalline: their molecules repeat in a regular pattern.`,
        ],
      },
      {
        title: "Three kinds of molecular solid",
        points: [
          t`**Non-polar molecular solids**: non-polar molecules held by weak London forces ($\ce{H2}$, $\ce{Cl2}$, $\ce{I2}$).`,
          t`**Polar molecular solids**: polar molecules held by dipole-dipole forces ($\ce{HCl}$, $\ce{SO2}$).`,
          t`**Hydrogen bonded molecular solids**: hydrogen bonds join molecules with $\ce{O-H}$, $\ce{N-H}$ or $\ce{F-H}$ bonds (ice).`,
          t`Polar bonds can still give a non-polar molecule: in linear $\ce{O=C=O}$ the two bond dipoles cancel.`,
        ],
      },
    ],
    worked: {
      prompt: t`Silicon carbide, $\ce{SiC}$, is extremely hard, melts near $2700\,^\circ\mathrm{C}$ and does not conduct, even when molten. Which type of solid is it?`,
      steps: [
        t`Very hard with a very high melting point: strong bonds run through the whole solid.`,
        t`No conduction even when molten: there are no ions and no free electrons, so it is neither ionic nor metallic.`,
        t`Weak forces between molecules would make it soft and low melting, so it is not molecular.`,
        t`So its atoms are joined by covalent bonds into one giant network.`,
      ],
      answer: t`a covalent network solid`,
    },
    visualSpec: t`Sort a deck of solids into the four classes by dragging each onto its particles and forces, then heat each to see a sharp melt or a slow softening.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Classifies by hardness alone: very hard means covalent network, soft means molecular.",
      remediation: "Hardness alone does not decide the class: ionic solids are hard too, and graphite is soft but a covalent network. Look at the particles and the forces between them.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Takes any solid that conducts (as a solid or when molten) or shines to be metallic.",
      remediation: "A metal conducts **as a solid**, through its free electrons. A melt that conducts means mobile ions, and a shine alone proves nothing.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks the covalent bonds inside molecules make a covalent network solid.",
      remediation: "In a molecular solid the covalent bonds stay inside each molecule; only weak intermolecular forces hold molecules together. A network needs covalent bonds running through the whole solid.",
      fallback: { kind: "ext", topic: "intermolecular forces (Std XI Chemistry)" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks a soft, low-melting solid must be amorphous.",
      remediation: "Amorphous means no long-range order, shown by softening over a range of temperatures. Soft molecular solids still melt sharply: they are crystalline.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks a solid that does not conduct as a solid must be molecular.",
      remediation: "Ionic solids do not conduct as solids either, because their ions are fixed; unlike molecular solids, they conduct when molten.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Names the molecular subclass by bond polarity alone, ignoring shape and hydrogen bonding.",
      remediation: t`Look at the whole molecule: a symmetric one like $\ce{O=C=O}$ is non-polar, and molecules with $\ce{O-H}$ bonds are held by hydrogen bonds.`,
      fallback: { kind: "ext", topic: "polarity of molecules (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.2 (vii)" },
      stem: t`A solid is hard and brittle and does not conduct electricity. When it melts, the liquid conducts. What type of solid is it?`,
      verify: { kind: "value", inputs: {  }, params: { sub: "salt" } },
      options: [
        { key: "A", text: t`an ionic solid`, correct: true, value: "ionic" },
        { key: "B", text: t`a covalent network solid`, correct: false, misconceptionId: "C01-M1", value: "covalent_network" },
        { key: "C", text: t`a metallic solid`, correct: false, misconceptionId: "C01-M2", value: "metallic" },
        { key: "D", text: t`a molecular solid`, correct: false, misconceptionId: "C01-M5", value: "molecular" },
      ],
      solution: {
        steps: [
          t`No conduction as a solid, but the melt conducts: the solid holds ions locked in place, and melting sets them free.`,
          t`A metal would conduct as a solid too, so it is not metallic.`,
          t`Hard and brittle fits the strong attraction between ions: it is an ionic solid.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solid-state-12-pyq#3" },
      stem: t`Solid iodine forms soft, shiny, dark crystals made of $\ce{I2}$ molecules, and they sublime on gentle warming. Iodine exists as`,
      verify: { kind: "value", inputs: {  }, params: { sub: "iodine" } },
      options: [
        { key: "A", text: t`a non-polar molecular solid`, correct: true, value: "nonpolar_molecular" },
        { key: "B", text: t`a metallic solid`, correct: false, misconceptionId: "C01-M2", value: "metallic" },
        { key: "C", text: t`a covalent network solid`, correct: false, misconceptionId: "C01-M3", value: "covalent_network" },
        { key: "D", text: t`an amorphous solid`, correct: false, misconceptionId: "C01-M4", value: "amorphous" },
      ],
      solution: {
        steps: [
          t`The particles are separate $\ce{I2}$ molecules held by weak forces, so iodine is soft and sublimes easily.`,
          t`Both atoms of $\ce{I2}$ are the same, so the molecule is non-polar: only London forces hold the molecules together.`,
          t`Its shine does not make it metallic: it does not conduct. Iodine is a non-polar molecular solid.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.1 (i)" },
      stem: t`Dry ice, solid $\ce{CO2}$, is soft and is made of $\ce{CO2}$ molecules. It turns to gas at one fixed temperature, $-78\,^\circ\mathrm{C}$. What kind of solid is it?`,
      verify: { kind: "value", inputs: {  }, params: { sub: "dry_ice" } },
      options: [
        { key: "A", text: t`an amorphous solid`, correct: false, misconceptionId: "C01-M4", value: "amorphous" },
        { key: "B", text: t`a polar molecular solid`, correct: false, misconceptionId: "C01-M6", value: "polar_molecular" },
        { key: "C", text: t`a non-polar molecular solid`, correct: true, value: "nonpolar_molecular" },
        { key: "D", text: t`a covalent network solid`, correct: false, misconceptionId: "C01-M3", value: "covalent_network" },
      ],
      solution: {
        steps: [
          t`The particles are separate $\ce{CO2}$ molecules: the strong bonds are inside each molecule, so it is a molecular solid.`,
          t`It changes state at one fixed temperature, so it is crystalline, although soft.`,
          t`$\ce{O=C=O}$ is linear, so its two bond dipoles cancel and the molecule is non-polar.`,
          t`Dry ice is a non-polar molecular solid.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.2 (i)" },
      stem: t`Graphite is soft, shiny grey and conducts electricity. Its carbon atoms are held by covalent bonds in endless flat layers. What type of solid is it?`,
      verify: { kind: "value", inputs: {  }, params: { sub: "graphite" } },
      options: [
        { key: "A", text: t`a covalent network solid`, correct: true, value: "covalent_network" },
        { key: "B", text: t`a molecular solid`, correct: false, misconceptionId: "C01-M1", value: "molecular" },
        { key: "C", text: t`a metallic solid`, correct: false, misconceptionId: "C01-M2", value: "metallic" },
        { key: "D", text: t`an amorphous solid`, correct: false, misconceptionId: "C01-M4", value: "amorphous" },
      ],
      solution: {
        steps: [
          t`The particles are carbon atoms joined by covalent bonds into giant layers: a covalent network.`,
          t`It is soft because its layers slide over each other, not because weak forces hold it.`,
          t`It conducts because each carbon has one free electron, not because it is a metal. Graphite is a covalent network solid.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (ii)" },
      stem: t`Ice is a soft solid made of $\ce{H2O}$ molecules, and it melts sharply at $0\,^\circ\mathrm{C}$. What kind of solid is it?`,
      verify: { kind: "value", inputs: {  }, params: { sub: "ice" } },
      options: [
        { key: "A", text: t`a hydrogen bonded molecular solid`, correct: true, value: "h_bonded_molecular" },
        { key: "B", text: t`a covalent network solid`, correct: false, misconceptionId: "C01-M3", value: "covalent_network" },
        { key: "C", text: t`an amorphous solid`, correct: false, misconceptionId: "C01-M4", value: "amorphous" },
        { key: "D", text: t`a polar molecular solid`, correct: false, misconceptionId: "C01-M6", value: "polar_molecular" },
      ],
      solution: {
        steps: [
          t`The particles are $\ce{H2O}$ molecules, so ice is a molecular solid; it melts sharply, so it is crystalline.`,
          t`Each molecule has $\ce{O-H}$ bonds, so neighbouring molecules are held by hydrogen bonds.`,
          t`Ice is a hydrogen bonded molecular solid.`,
        ],
      },
    },
  ],
};
