import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Mercury is a liquid at room temperature, yet tungsten, in the same block of the periodic table, melts only above $3400\,^\circ\mathrm{C}$. Both atoms are heavy. What makes the difference?`,
    reveal: t`Tungsten ($5d^4\,6s^2$) has many unpaired $d$ electrons, and they join its $6s$ electrons in metallic bonding, so its bonds are very strong. Mercury ($5d^{10}\,6s^2$) has a full $d$ subshell, so its $d$ electrons take no part and its bonding is weak.`,
  },
  explanation: {
    intuition: [
      t`Transition metals are hard, dense and high-melting, and they conduct heat and electricity well.`,
      t`Their $(n-1)d$ electrons join the $ns$ electrons in metallic bonding, so the bonds are strong.`,
      t`They change oxidation state easily, which makes many of them good catalysts.`,
      t`Their small, highly charged ions with empty $d$ orbitals bind molecules, forming complexes.`,
      t`Atoms of similar size mix into alloys, and small atoms slip into the gaps of their crystals.`,
    ],
    formal: [
      {
        title: "Metallic properties",
        points: [
          t`Transition metals are lustrous, hard and dense, with high melting and boiling points.`,
          t`They have high tensile strength, are malleable, and conduct heat and electricity well.`,
          t`Unpaired $(n-1)d$ electrons join the $ns$ electrons in **metallic bonding**.`,
          t`More unpaired electrons give stronger bonding, so melting points peak near the middle of a series.`,
          t`Zn, Cd and Hg have a full $d^{10}$ subshell, so they are soft and low-melting; Hg is a liquid.`,
          t`A high melting point comes from strong bonds, not heavy atoms: heavy Hg is a liquid.`,
        ],
      },
      {
        title: "Catalytic activity",
        points: [
          t`Many transition metals and their compounds are efficient **catalysts**.`,
          t`Examples: Fe in the Haber process, $\ce{V2O5}$ in the contact process, Ni in hydrogenating oils.`,
          t`Variable oxidation states let them form unstable intermediates, giving an easier path.`,
          t`Solid catalysts also adsorb reactants on their surface, which weakens the reactants' bonds.`,
          t`The catalyst is returned unchanged at the end; it is not used up.`,
        ],
      },
      {
        title: "Complex formation",
        points: [
          t`A **complex** has a central metal ion bonded to molecules or ions called **ligands**.`,
          t`Each ligand donates a lone pair of electrons to the metal ion.`,
          t`Examples: $\ce{[Cu(NH3)4]^2+}$, $\ce{[Fe(CN)6]^4-}$ and $\ce{[Zn(NH3)4]^2+}$.`,
          t`Transition-metal ions are small and highly charged, so they pull lone pairs strongly.`,
          t`They also have vacant $d$ orbitals of suitable energy to accept the lone pairs.`,
          t`Diamagnetic $\ce{Zn^2+}$ forms complexes too, so unpaired electrons are not the reason.`,
        ],
      },
      {
        title: "Interstitial compounds",
        points: [
          t`Small atoms such as H, B, C and N fit into the gaps, or **interstices**, of a metal crystal.`,
          t`The products, such as $\ce{TiC}$, $\ce{Mn4N}$ and $\ce{Fe3H}$, are **interstitial compounds**.`,
          t`They are often non-stoichiometric: their formulas need not match normal valencies.`,
          t`They are harder and higher-melting than the pure metal, and chemically fairly inert.`,
          t`They keep the metal's lustre and electrical conductivity; they are not ionic salts.`,
        ],
      },
      {
        title: "Alloys",
        points: [
          t`An **alloy** is a blend of a metal with other metals or non-metals.`,
          t`Transition-metal atoms have similar radii, so one can take another's place in the crystal.`,
          t`Their alloys are often harder and higher-melting than the pure metals.`,
          t`**Nichrome** is an alloy of Ni and Cr, used in the heating coils of heaters.`,
          t`Stainless steel is Fe with Cr and Ni; brass is Cu with Zn.`,
        ],
      },
    ],
    worked: {
      prompt: t`Chromium melts at $1907\,^\circ\mathrm{C}$ but zinc only at $420\,^\circ\mathrm{C}$. Explain the difference.`,
      steps: [
        t`Melting point measures the strength of metallic bonding.`,
        t`Cr is $3d^5\,4s^1$: six unpaired electrons can join the metallic bonding.`,
        t`Zn is $3d^{10}\,4s^2$: its full $3d$ subshell has no unpaired electron to share.`,
        t`So chromium's metallic bonds are much stronger, and it melts far higher.`,
      ],
      answer: t`Cr has six unpaired electrons for metallic bonding; zinc's full $3d^{10}$ adds none.`,
    },
    visualSpec: t`Slide across the 3d series and watch the number of unpaired d electrons and the melting point bar rise and fall together, dropping sharply at zinc.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Credits every d-block property, even melting points, alloys and interstitial compounds, to variable oxidation states.",
      remediation: "Variable oxidation states explain catalysis and the many compounds of a metal. Melting points come from metallic bonding, alloys from similar atom sizes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks heavy, dense atoms explain hardness, high melting points and strong binding.",
      remediation: t`Melting point and hardness depend on bond strength, not atomic mass. Heavy mercury is a liquid because its $d^{10}$ electrons add no metallic bonding.`,
      fallback: { kind: "ext", topic: "metallic bonding (Std XI Chemistry)" },
    },
    {
      id: "C05-M3",
      mistake: t`Treats transition metals like s-block metals: only the outer $ns$ electrons count, and they are simply reactive.`,
      remediation: t`The $(n-1)d$ electrons are close in energy to the $ns$ electrons and take part in bonding. That is what makes transition metals hard, catalytic and able to form complexes.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks a catalyst combines with the reactants for good, or supplies energy, and is used up.",
      remediation: "A catalyst forms only short-lived intermediates or holds reactants on its surface. It provides an easier path and is returned unchanged.",
      fallback: { kind: "ext", topic: "catalysis (Chemical Kinetics)" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks interstitial compounds are ordinary ionic compounds with fixed formulas.",
      remediation: "In interstitial compounds, small atoms sit in the gaps of the metal crystal. They are often non-stoichiometric, very hard, and still conduct like metals.",
      fallback: { kind: "ext", topic: "ionic and metallic bonding (Std XI Chemistry)" },
    },
    {
      id: "C05-M6",
      mistake: "Credits other properties, such as catalysis, complexes and alloys, to paramagnetism.",
      remediation: t`Paramagnetism only means unpaired electrons are attracted by a magnet. Diamagnetic $\ce{Zn^2+}$ still forms complexes, so look for the real cause.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (v)" },
      stem: t`The $3d$ metals other than zinc are hard and have high melting points. The main reason is that`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mp" } },
      options: [
        { key: "A", text: t`each atom gives just its two $4s$ electrons to the metallic bond, as calcium does`, correct: false, misconceptionId: "C05-M3", value: "mp_ns_only" },
        { key: "B", text: t`many unpaired $(n-1)d$ and $ns$ electrons join in strong metallic bonding`, correct: true, value: "mp_unpaired_d_bonding" },
        { key: "C", text: t`they show variable oxidation states, so each atom can lose several electrons`, correct: false, misconceptionId: "C05-M1", value: "mp_variable_states" },
        { key: "D", text: t`their atoms are heavy, and heavy atoms need much more heat to melt`, correct: false, misconceptionId: "C05-M2", value: "mp_heavy_atoms" },
      ],
      solution: {
        steps: [
          t`Hardness and melting point measure the strength of metallic bonding.`,
          t`In the $3d$ metals, unpaired $3d$ electrons join the $4s$ electrons in that bonding.`,
          t`So many unpaired $(n-1)d$ and $ns$ electrons give strong metallic bonds.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (v)" },
      stem: t`Iron in the Haber process and $\ce{V2O5}$ in the contact process act as catalysts. Transition metals and their compounds are good catalysts because`,
      verify: { kind: "value", inputs: {  }, params: { ask: "catalyst" } },
      options: [
        { key: "A", text: t`they are very reactive metals that lose their $4s$ electrons easily`, correct: false, misconceptionId: "C05-M3", value: "cat_reactive_metal" },
        { key: "B", text: t`they combine with the reactants for good, supplying the energy needed`, correct: false, misconceptionId: "C05-M4", value: "cat_used_up" },
        { key: "C", text: t`they are paramagnetic, so they attract reactant molecules magnetically`, correct: false, misconceptionId: "C05-M6", value: "cat_paramagnetic" },
        { key: "D", text: t`they show variable oxidation states and can adsorb reactants on their surface`, correct: true, value: "cat_variable_states_surface" },
      ],
      solution: {
        steps: [
          t`A catalyst gives an easier path and is returned unchanged.`,
          t`Transition metals change oxidation state easily, forming short-lived intermediates.`,
          t`As solids they also adsorb reactants on their surface, so the reason is variable oxidation states and surface adsorption.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (v)" },
      stem: t`Ions such as $\ce{Cu^2+}$ and $\ce{Zn^2+}$ readily form complexes with $\ce{NH3}$ molecules. The main reason is that`,
      verify: { kind: "value", inputs: {  }, params: { ask: "complex" } },
      options: [
        { key: "A", text: t`their ions are small and highly charged, with vacant $d$ orbitals to accept lone pairs`, correct: true, value: "cx_small_charged_vacant_d" },
        { key: "B", text: t`their atoms are heavy and dense, so molecules cling to them strongly`, correct: false, misconceptionId: "C05-M2", value: "cx_heavy_atoms" },
        { key: "C", text: t`they lose their $4s$ electrons easily, like the s-block metals`, correct: false, misconceptionId: "C05-M3", value: "cx_lose_4s_easily" },
        { key: "D", text: t`their ions are paramagnetic, with unpaired electrons to share`, correct: false, misconceptionId: "C05-M6", value: "cx_paramagnetic" },
      ],
      solution: {
        steps: [
          t`In a complex, each ligand such as $\ce{NH3}$ donates a lone pair to the metal ion.`,
          t`Diamagnetic $\ce{Zn^2+}$ forms complexes too, so unpaired electrons are not the reason.`,
          t`Small, highly charged ions with vacant $d$ orbitals pull in and accept the lone pairs.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`Small atoms such as H, C and N fit into the spaces of transition-metal crystals, giving compounds such as $\ce{TiC}$ and $\ce{Mn4N}$. These interstitial compounds are`,
      verify: { kind: "value", inputs: {  }, params: { ask: "interstitial" } },
      options: [
        { key: "A", text: t`softer and lower-melting than the metal, since the light atoms dilute it`, correct: false, misconceptionId: "C05-M2", value: "int_soft_light_atoms" },
        { key: "B", text: t`ionic compounds with fixed formulas that do not conduct, like salts`, correct: false, misconceptionId: "C05-M5", value: "int_ionic_fixed_formula" },
        { key: "C", text: t`hard, high-melting and often non-stoichiometric, and they conduct like metals`, correct: true, value: "int_hard_nonstoichiometric" },
        { key: "D", text: t`compounds in which the metal shows its highest oxidation state`, correct: false, misconceptionId: "C05-M1", value: "int_highest_state" },
      ],
      solution: {
        steps: [
          t`The small atoms sit in the gaps of the metal crystal; they do not form ions.`,
          t`So the compounds keep metallic conductivity and are often non-stoichiometric.`,
          t`The trapped atoms stiffen the crystal, making them hard and high-melting.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (iii)" },
      stem: t`Nickel and chromium mix to form nichrome, used in heater coils. Transition metals form alloys like this readily because`,
      verify: { kind: "value", inputs: {  }, params: { ask: "alloy" } },
      options: [
        { key: "A", text: t`their atoms are of similar size, so one can take another's place in the crystal`, correct: true, value: "alloy_similar_size" },
        { key: "B", text: t`they show variable oxidation states, so their atoms combine in many ratios`, correct: false, misconceptionId: "C05-M1", value: "alloy_variable_states" },
        { key: "C", text: t`they are heavy, dense metals whose atoms pack tightly together`, correct: false, misconceptionId: "C05-M2", value: "alloy_heavy_dense" },
        { key: "D", text: t`they are paramagnetic, so their atoms attract each other`, correct: false, misconceptionId: "C05-M6", value: "alloy_paramagnetic" },
      ],
      solution: {
        steps: [
          t`In an alloy, atoms of one metal take places in the crystal of another.`,
          t`This works when the atoms have similar radii, as nickel and chromium do.`,
          t`So transition metals form alloys readily because their atoms are of similar size.`,
        ],
      },
    },
  ],
};
