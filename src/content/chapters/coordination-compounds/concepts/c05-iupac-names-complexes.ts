import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`$\ce{[Co(NH3)6]Cl3}$ is hexaamminecobalt(III) chloride, but $\ce{Na3[Co(NO2)6]}$ is sodium hexanitrocobaltate(III). Why is cobalt 'cobalt' in one name and 'cobaltate' in the other?`,
    reveal: t`In the first, cobalt sits in a positive complex ion, so it keeps its name. In the second, the complex ion $\ce{[Co(NO2)6]^3-}$ is negative, and the metal of an anionic complex ends in -ate.`,
  },
  explanation: {
    intuition: [
      t`An IUPAC name is read off the formula by fixed rules, so each complex has one name.`,
      t`Like a salt such as sodium chloride, the cation is named first and the anion second.`,
      t`Inside the complex, the ligands come first, then the metal.`,
      t`The metal's oxidation state follows in Roman numerals, in brackets.`,
      t`A metal in a negative complex ion takes the ending -ate.`,
    ],
    formal: [
      {
        title: "Order of the name",
        points: [
          t`Name the cation first, then the anion, with a space between: sodium hexanitrocobaltate(III).`,
          t`Within the coordination sphere, name the ligands first, then the metal.`,
          t`Write the metal's oxidation state in Roman numerals in brackets: cobalt(III).`,
          t`A neutral complex has no counter ion, so its name is one word: tetracarbonylnickel(0).`,
          t`Counter ions take no number prefix: $\ce{Na3[Co(NO2)6]}$ is sodium, not trisodium, hexanitrocobaltate(III).`,
        ],
      },
      {
        title: "Naming the ligands",
        points: [
          t`Anionic ligands end in -o: chloro ($\ce{Cl-}$), bromo ($\ce{Br-}$), cyano ($\ce{CN-}$), nitro ($\ce{NO2-}$), oxalato.`,
          t`Neutral ligands keep special names: ammine ($\ce{NH3}$), aqua ($\ce{H2O}$), carbonyl ($\ce{CO}$).`,
          t`Ethylenediamine (en) keeps its own name.`,
          t`Show how many of each with di-, tri-, tetra-, penta-, hexa-: tetraammine, dichloro.`,
          t`For a ligand like en, whose name already has a number in it, use bis-, tris- and brackets: bis(ethylenediamine).`,
        ],
      },
      {
        title: "Alphabetical order",
        points: [
          t`List the ligands in alphabetical order of their names, not in the formula's order.`,
          t`Ignore the number prefixes when sorting: tetraammine sorts under a, dichloro under c.`,
          t`So $\ce{[Co(NH3)4Cl2]+}$ is tetraamminedichlorocobalt(III), ammine before chloro.`,
          t`$\ce{[Cr(H2O)4Cl2]+}$ and $\ce{[CrCl2(H2O)4]+}$ get the same name.`,
        ],
      },
      {
        title: "Anionic complexes end in -ate",
        points: [
          t`In a cationic or neutral complex, the metal keeps its usual name: cobalt, platinum.`,
          t`In an anionic complex, the metal's name ends in -ate: cobaltate, platinate, nickelate.`,
          t`Some metals use their Latin roots: ferrate (Fe), cuprate (Cu), argentate (Ag), aurate (Au).`,
          t`The oxidation state is the metal's, not the charge on the complex ion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the IUPAC name of $\ce{K3[Fe(C2O4)3]}$.`,
      steps: [
        t`The cation, $\ce{K+}$, comes first: potassium.`,
        t`Three $\ce{K+}$ balance the sphere, so it is $\ce{[Fe(C2O4)3]^3-}$: anionic, so iron becomes ferrate.`,
        t`Three oxalate ligands: trioxalato. Charge balance: $x + 3(-2) = -3$, so $x = +3$.`,
        t`Name: potassium trioxalatoferrate(III).`,
      ],
      answer: t`potassium trioxalatoferrate(III)`,
    },
    visualSpec: t`Build a name from a formula block by block: the ligand tiles slide into alphabetical order, the metal tile flips to its -ate form when the sphere's charge turns negative, and a Roman numeral drops in from the charge balance.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Lists the ligands in the order the formula writes them, not alphabetically.",
      remediation: "Ligands are always named in alphabetical order, whatever order the formula uses.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Alphabetises the ligands with their number prefixes, so dichloro sorts under d.",
      remediation: "Ignore di-, tri-, tetra- when sorting: ammine (a) comes before chloro (c), so tetraammine comes before dichloro.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Keeps the plain metal name in an anionic complex.",
      remediation: "When the complex ion is negative, the metal's name ends in -ate: platinate, ferrate.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: "Writes the charge on the complex ion as the metal's oxidation state.",
      remediation: "The Roman numeral is the metal's oxidation state. Find it from the charge balance: sphere charge minus the ligands' charges.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M5",
      mistake: "Gives the metal an -ate ending in a cationic or neutral complex.",
      remediation: "Only an anionic complex takes -ate. In a cationic or neutral complex the metal keeps its usual name.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M6",
      mistake: "Puts a number prefix on the counter ion, as in tetrapotassium or dichloride.",
      remediation: "Number prefixes are used only for ligands. The counter ion is named once, without a prefix.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#13" },
      stem: t`What is the IUPAC name of $\ce{[PtBr2(NH3)4]Br2}$?`,
      verify: { kind: "value", inputs: {  }, params: { metal: "Pt", lig: "Br:2,NH3:4", out: "Br:2" } },
      options: [
        { key: "A", text: t`tetraamminedibromoplatinum(IV) dibromide`, correct: false, misconceptionId: "C05-M6", value: "tetraamminedibromoplatinum_IV_dibromide" },
        { key: "B", text: t`tetraamminedibromoplatinum(IV) bromide`, correct: true, value: "tetraamminedibromoplatinum_IV_bromide" },
        { key: "C", text: t`dibromotetraammineplatinum(IV) bromide`, correct: false, misconceptionId: "C05-M2", value: "dibromotetraammineplatinum_IV_bromide" },
        { key: "D", text: t`tetraamminedibromoplatinate(IV) bromide`, correct: false, misconceptionId: "C05-M5", value: "tetraamminedibromoplatinate_IV_bromide" },
      ],
      solution: {
        steps: [
          t`Two $\ce{Br-}$ outside, so the sphere is $\ce{[PtBr2(NH3)4]^2+}$: cationic, so platinum keeps its name.`,
          t`$x + 2(-1) + 4(0) = +2$ gives platinum $+4$.`,
          t`Ammine before bromo: tetraamminedibromoplatinum(IV) bromide.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#7" },
      stem: t`What is the IUPAC name of $\ce{K4[Fe(CN)6]}$?`,
      verify: { kind: "value", inputs: {  }, params: { metal: "Fe", lig: "CN:6", out: "K:4" } },
      options: [
        { key: "A", text: t`potassium hexacyanoiron(II)`, correct: false, misconceptionId: "C05-M3", value: "potassium_hexacyanoiron_II" },
        { key: "B", text: t`potassium hexacyanoferrate(IV)`, correct: false, misconceptionId: "C05-M4", value: "potassium_hexacyanoferrate_IV" },
        { key: "C", text: t`tetrapotassium hexacyanoferrate(II)`, correct: false, misconceptionId: "C05-M6", value: "tetrapotassium_hexacyanoferrate_II" },
        { key: "D", text: t`potassium hexacyanoferrate(II)`, correct: true, value: "potassium_hexacyanoferrate_II" },
      ],
      solution: {
        steps: [
          t`Four $\ce{K+}$ outside, so the sphere is $\ce{[Fe(CN)6]^4-}$: anionic, so iron becomes ferrate.`,
          t`$x + 6(-1) = -4$ gives iron $+2$.`,
          t`Cation first, without a prefix: potassium hexacyanoferrate(II).`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Solved Ex.9.1" },
      stem: t`What is the IUPAC name of $\ce{[Co(NH3)5Cl]Cl2}$?`,
      verify: { kind: "value", inputs: {  }, params: { metal: "Co", lig: "NH3:5,Cl:1", out: "Cl:2" } },
      options: [
        { key: "A", text: t`pentaamminechlorocobalt(III) chloride`, correct: true, value: "pentaamminechlorocobalt_III_chloride" },
        { key: "B", text: t`chloropentaamminecobalt(III) chloride`, correct: false, misconceptionId: "C05-M2", value: "chloropentaamminecobalt_III_chloride" },
        { key: "C", text: t`pentaamminechlorocobalt(II) chloride`, correct: false, misconceptionId: "C05-M4", value: "pentaamminechlorocobalt_II_chloride" },
        { key: "D", text: t`pentaamminechlorocobaltate(III) chloride`, correct: false, misconceptionId: "C05-M5", value: "pentaamminechlorocobaltate_III_chloride" },
      ],
      solution: {
        steps: [
          t`Two $\ce{Cl-}$ outside, so the sphere is $\ce{[Co(NH3)5Cl]^2+}$: cationic, so cobalt keeps its name.`,
          t`$x + 5(0) + (-1) = +2$ gives cobalt $+3$.`,
          t`Ammine before chloro: pentaamminechlorocobalt(III) chloride.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#8" },
      stem: t`What is the IUPAC name of $\ce{[Co(NO2)3(NH3)3]}$? Each $\ce{NO2-}$ bonds through N.`,
      verify: { kind: "value", inputs: {  }, params: { metal: "Co", lig: "NO2:3,NH3:3" } },
      options: [
        { key: "A", text: t`triamminetrinitrocobalt(0)`, correct: false, misconceptionId: "C05-M4", value: "triamminetrinitrocobalt_0" },
        { key: "B", text: t`triamminetrinitrocobaltate(III)`, correct: false, misconceptionId: "C05-M5", value: "triamminetrinitrocobaltate_III" },
        { key: "C", text: t`triamminetrinitrocobalt(III)`, correct: true, value: "triamminetrinitrocobalt_III" },
        { key: "D", text: t`trinitrotriamminecobalt(III)`, correct: false, misconceptionId: "C05-M1", value: "trinitrotriamminecobalt_III" },
      ],
      solution: {
        steps: [
          t`No counter ions: the complex is neutral, so cobalt keeps its name and the name is one word.`,
          t`$x + 3(-1) + 3(0) = 0$ gives cobalt $+3$.`,
          t`Ammine before nitro: triamminetrinitrocobalt(III).`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.3 (v)" },
      stem: t`What is the IUPAC name of $\ce{K[PtCl3(NH3)]}$?`,
      verify: { kind: "value", inputs: {  }, params: { metal: "Pt", lig: "Cl:3,NH3:1", out: "K:1" } },
      options: [
        { key: "A", text: t`potassium amminetrichloroplatinate(II)`, correct: true, value: "potassium_amminetrichloroplatinate_II" },
        { key: "B", text: t`potassium trichloroammineplatinate(II)`, correct: false, misconceptionId: "C05-M1", value: "potassium_trichloroammineplatinate_II" },
        { key: "C", text: t`potassium amminetrichloroplatinum(II)`, correct: false, misconceptionId: "C05-M3", value: "potassium_amminetrichloroplatinum_II" },
        { key: "D", text: t`potassium amminetrichloroplatinate(I)`, correct: false, misconceptionId: "C05-M4", value: "potassium_amminetrichloroplatinate_I" },
      ],
      solution: {
        steps: [
          t`One $\ce{K+}$ outside, so the sphere is $\ce{[PtCl3(NH3)]-}$: anionic, so platinum becomes platinate.`,
          t`$x + 3(-1) + 1(0) = -1$ gives platinum $+2$.`,
          t`Cation first, ammine before chloro: potassium amminetrichloroplatinate(II).`,
        ],
      },
    },
  ],
};
