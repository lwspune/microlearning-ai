import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Diamond and graphite are both pure carbon, yet one is hard and clear and the other soft and black. Sulfur also has two common solids. How can one element have two different solids?`,
    reveal: t`The same units are arranged differently. Rhombic and monoclinic sulfur hold identical $\ce{S8}$ rings, packed in two different ways.`,
  },
  explanation: {
    intuition: [
      t`**Allotropy** is the existence of an element in two or more forms, called **allotropes**.`,
      t`Sulfur's two important allotropes are **rhombic** ($\alpha$) and **monoclinic** ($\beta$) sulfur.`,
      t`Both are made of the same molecule, a puckered ring of eight atoms, $\ce{S8}$.`,
      t`They differ only in how the rings pack, so their crystals and properties differ.`,
      t`Rhombic sulfur is the stable form below $369$ K; monoclinic is stable above it.`,
      t`Hot sulfur vapour contains $\ce{S2}$ molecules, which, like $\ce{O2}$, are paramagnetic.`,
    ],
    formal: [
      {
        title: "Rhombic sulfur",
        points: [
          t`Rhombic ($\alpha$) sulfur is pale yellow, in orthorhombic crystals.`,
          t`It melts at $385.8$ K; its density is $2.069\ \mathrm{g\,cm^{-3}}$.`,
          t`It is insoluble in water but dissolves in carbon disulfide, $\ce{CS2}$.`,
          t`It crystallises when a solution of sulfur in $\ce{CS2}$ is evaporated.`,
          t`It is the stable form at room temperature.`,
        ],
      },
      {
        title: "Monoclinic sulfur",
        points: [
          t`Monoclinic ($\beta$) sulfur forms bright yellow, needle-shaped crystals.`,
          t`It melts at $393$ K; its density is $1.989\ \mathrm{g\,cm^{-3}}$.`,
          t`It too dissolves in $\ce{CS2}$.`,
          t`It is the stable form only above $369$ K.`,
        ],
      },
      {
        title: "The transition temperature",
        points: [
          t`The **transition temperature** is the temperature at which two allotropes are equally stable.`,
          t`For sulfur it is $369$ K.`,
          t`Heated above $369$ K, rhombic sulfur slowly changes into monoclinic sulfur.`,
          t`Kept below $369$ K, monoclinic sulfur slowly changes back into rhombic sulfur.`,
          t`Monoclinic melts higher, yet is unstable at room temperature: melting point does not decide stability.`,
        ],
      },
      {
        title: "Same rings, different packing",
        points: [
          t`Each sulfur atom bonds singly to two others, so the atoms close into puckered $\ce{S8}$ rings.`,
          t`Rhombic and monoclinic sulfur both contain these $\ce{S8}$ rings.`,
          t`The rings stack in a different pattern in each, giving a denser rhombic crystal.`,
          t`Other ring forms, such as $\ce{S6}$, are known, but they are less common.`,
        ],
      },
      {
        title: "Paramagnetic sulfur vapour",
        points: [
          t`At high temperature, around $1000$ K, sulfur vapour is mainly $\ce{S2}$ molecules.`,
          t`Like $\ce{O2}$, $\ce{S2}$ has two unpaired electrons in its two antibonding $\pi^*$ orbitals.`,
          t`So sulfur vapour is **paramagnetic**: a magnet attracts it.`,
          t`In the $\ce{S8}$ ring every electron is paired, so solid sulfur is diamagnetic.`,
        ],
      },
      {
        title: "Other group 16 allotropes",
        points: [
          t`Oxygen has two allotropes, dioxygen $\ce{O2}$ and ozone $\ce{O3}$.`,
          t`Selenium has a non-metallic **red** form and a metallic **grey** form.`,
          t`Grey selenium is a **photoconductor**: it conducts when light falls on it, so it is used in photocells and photocopiers.`,
        ],
      },
    ],
    worked: {
      prompt: t`How is monoclinic sulfur made from rhombic sulfur in the laboratory?`,
      steps: [
        t`Melt rhombic sulfur in a dish; the liquid is far above the transition temperature.`,
        t`Let it cool until a crust forms on the surface.`,
        t`Pierce two holes in the crust and pour out the liquid still inside.`,
        t`Needle-shaped crystals of monoclinic sulfur are left lining the dish.`,
      ],
      answer: t`Melt it, cool until a crust forms, pierce the crust and pour off the liquid: needles of monoclinic sulfur remain.`,
    },
    visualSpec: t`Slide a temperature bar past $369$ K and watch the $\ce{S8}$ rings repack between the rhombic and the monoclinic crystal, then heat on to see $\ce{S2}$ appear in the vapour.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks a new crystal form needs a new molecule, so monoclinic sulfur is S6 while rhombic is S8.",
      remediation: t`Rhombic and monoclinic sulfur are both made of $\ce{S8}$ rings. Only the way the rings pack in the crystal differs.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks the higher-melting form must be the one stable at room temperature, so takes monoclinic as stable and reverses the 369 K change.",
      remediation: t`Melting point does not decide stability. Rhombic sulfur is stable below $369$ K and monoclinic above it, though monoclinic melts higher.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks an even number of electrons means all are paired, so no sulfur molecule can be paramagnetic.",
      remediation: t`Like $\ce{O2}$, $\ce{S2}$ puts its last two electrons singly into two $\pi^*$ orbitals of equal energy. These two unpaired electrons make it paramagnetic.`,
      fallback: { kind: "ext", topic: "molecular orbital theory (Std XI Chemistry)" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks allotropes, being the same molecule, must share every physical property, with no change between them.",
      remediation: t`Packing changes the crystal: rhombic sulfur is denser, melts lower and is stable below $369$ K; monoclinic is the stable form above it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Expects sulfur to copy oxygen, with diatomic S2 molecules in solid sulfur too.",
      remediation: t`Sulfur forms weak $\pi$ bonds, so each S atom bonds singly to two others, closing $\ce{S8}$ rings. $\ce{S2}$ appears only in hot vapour.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M6",
      mistake: "Takes paramagnetism as one of oxygen's anomalies, so expects no sulfur species to show it.",
      remediation: t`Solid sulfur, $\ce{S8}$, is diamagnetic, unlike $\ce{O2}$. But sulfur vapour holds $\ce{S2}$, which is paramagnetic just like $\ce{O2}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C05-M3 and C05-M6 both lead to no paramagnetic form; C05-Q3 gives them different reasons.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.4 (i)" },
      stem: t`What are rhombic sulfur and monoclinic sulfur built of?`,
      verify: { kind: "value", inputs: {  }, params: { q: "molecules" } },
      options: [
        { key: "A", text: t`$\ce{S8}$ rings in both, packed alike, so all their properties match`, correct: false, misconceptionId: "C05-M4", value: "identical_all" },
        { key: "B", text: t`$\ce{S8}$ rings in rhombic sulfur, $\ce{S6}$ rings in monoclinic sulfur`, correct: false, misconceptionId: "C05-M1", value: "s8_and_s6" },
        { key: "C", text: t`$\ce{S8}$ rings in both, packed differently in the two crystals`, correct: true, value: "s8_both_packing" },
        { key: "D", text: t`$\ce{S2}$ molecules in both, like $\ce{O2}$`, correct: false, misconceptionId: "C05-M5", value: "s2_both" },
      ],
      solution: {
        steps: [
          t`Each S atom bonds singly to two others, closing puckered $\ce{S8}$ rings.`,
          t`Rhombic and monoclinic sulfur both contain these $\ce{S8}$ rings.`,
          t`They differ in how the rings pack, which is why their density and melting point differ.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.4 (i)" },
      stem: t`Rhombic sulfur melts at $385.8$ K and monoclinic sulfur at $393$ K. Which form is stable at room temperature, and what happens at $369$ K?`,
      verify: { kind: "value", inputs: {  }, params: { q: "stable" } },
      options: [
        { key: "A", text: t`Rhombic; above $369$ K it changes into monoclinic sulfur`, correct: true, value: "rhombic_to_monoclinic" },
        { key: "B", text: t`Rhombic; above $369$ K its $\ce{S8}$ rings break into the $\ce{S6}$ rings of monoclinic`, correct: false, misconceptionId: "C05-M1", value: "rhombic_s8_to_s6" },
        { key: "C", text: t`Both equally, at every temperature; neither changes into the other`, correct: false, misconceptionId: "C05-M4", value: "both_no_change" },
        { key: "D", text: t`Monoclinic, the higher-melting form; above $369$ K it changes into rhombic`, correct: false, misconceptionId: "C05-M2", value: "monoclinic_to_rhombic" },
      ],
      solution: {
        steps: [
          t`Rhombic sulfur is the stable form below the transition temperature, $369$ K.`,
          t`Above $369$ K, rhombic sulfur changes into monoclinic sulfur, still made of $\ce{S8}$ rings.`,
          t`Monoclinic's higher melting point does not make it the stable form at room temperature.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.7" },
      stem: t`Which form of sulfur is paramagnetic?`,
      verify: { kind: "value", inputs: {  }, params: { q: "magnetic" } },
      options: [
        { key: "A", text: t`None: every sulfur molecule has an even number of electrons`, correct: false, misconceptionId: "C05-M3", value: "none_even" },
        { key: "B", text: t`Sulfur vapour, which is partly $\ce{S2}$ molecules`, correct: true, value: "s2_vapour" },
        { key: "C", text: t`None: in group 16, only oxygen is paramagnetic`, correct: false, misconceptionId: "C05-M6", value: "none_oxygen_only" },
        { key: "D", text: t`Rhombic and monoclinic sulfur, built of $\ce{S2}$ molecules like $\ce{O2}$`, correct: false, misconceptionId: "C05-M5", value: "solids_s2" },
      ],
      solution: {
        steps: [
          t`In solid sulfur's $\ce{S8}$ rings every electron is paired, so the solids are diamagnetic.`,
          t`Hot sulfur vapour contains $\ce{S2}$, which, like $\ce{O2}$, has one electron in each $\pi^*$ orbital.`,
          t`Two unpaired electrons make the vapour paramagnetic.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.4 (i)" },
      stem: t`How does rhombic sulfur compare with monoclinic sulfur?`,
      verify: { kind: "value", inputs: {  }, params: { q: "data" } },
      options: [
        { key: "A", text: t`It has the same density and melting point`, correct: false, misconceptionId: "C05-M4", value: "same_data" },
        { key: "B", text: t`It is denser, because its $\ce{S8}$ molecules are heavier than the $\ce{S6}$ of monoclinic`, correct: false, misconceptionId: "C05-M1", value: "rhombic_denser_heavier_s8" },
        { key: "C", text: t`It is the stable form, so it melts higher ($393$ K against $385.8$ K)`, correct: false, misconceptionId: "C05-M2", value: "rhombic_higher_mp" },
        { key: "D", text: t`It is denser ($2.069$ against $1.989\ \mathrm{g\,cm^{-3}}$) and melts lower`, correct: true, value: "rhombic_denser_lower_mp" },
      ],
      solution: {
        steps: [
          t`Rhombic sulfur: density $2.069\ \mathrm{g\,cm^{-3}}$, melting point $385.8$ K.`,
          t`Monoclinic sulfur: density $1.989\ \mathrm{g\,cm^{-3}}$, melting point $393$ K.`,
          t`Both are $\ce{S8}$; rhombic packs its rings more closely, so it is denser, and it melts lower.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.4 (i)" },
      stem: t`Needle-shaped crystals of monoclinic sulfur are kept at room temperature for a few days. What happens?`,
      verify: { kind: "value", inputs: {  }, params: { q: "standing" } },
      options: [
        { key: "A", text: t`They slowly change into rhombic sulfur; the same $\ce{S8}$ rings repack`, correct: true, value: "to_rhombic_s8" },
        { key: "B", text: t`They stay monoclinic: the higher-melting form is the stable one`, correct: false, misconceptionId: "C05-M2", value: "stays_stable" },
        { key: "C", text: t`Their $\ce{S6}$ rings join up into the $\ce{S8}$ rings of rhombic sulfur`, correct: false, misconceptionId: "C05-M1", value: "s6_join_s8" },
        { key: "D", text: t`Nothing can change: the two forms are alike in every property`, correct: false, misconceptionId: "C05-M4", value: "nothing_same" },
      ],
      solution: {
        steps: [
          t`Room temperature is below the transition temperature, $369$ K.`,
          t`There rhombic sulfur is the stable form, so monoclinic needles slowly change into it.`,
          t`The $\ce{S8}$ rings stay whole; they only repack.`,
        ],
      },
    },
  ],
};
