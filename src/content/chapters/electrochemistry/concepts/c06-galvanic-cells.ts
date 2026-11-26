import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A zinc strip dipped in copper sulfate solution gets coated with copper, and the solution warms up. No current flows through any wire. How can the same reaction light a bulb?`,
    reveal: t`Keep its two halves apart. Zinc gives up electrons in one beaker, $\ce{Cu^2+}$ takes them in another, and the electrons travel through a wire on the way. That is a galvanic cell.`,
  },
  explanation: {
    intuition: [
      t`A **redox reaction** passes electrons from the species oxidised, which loses them, to the species reduced, which gains them.`,
      t`A **galvanic cell** runs the two halves in separate vessels, so the electrons must travel through a wire.`,
      t`The electrode where oxidation happens is the **anode**; reduction happens at the **cathode**.`,
      t`Electrons leave the anode, so it is negative; the cathode receives them and is positive.`,
      t`A **salt bridge** joins the two solutions; its ions move to keep each solution electrically neutral.`,
      t`Only a spontaneous redox reaction drives a galvanic cell: its chemical energy becomes electrical energy.`,
    ],
    formal: [
      {
        title: "The Daniell cell",
        points: [
          t`Zinc dips in $\ce{ZnSO4}$ solution and copper in $\ce{CuSO4}$ solution.`,
          t`Anode (−): $\ce{Zn(s) -> Zn^2+(aq) + 2e-}$.`,
          t`Cathode (+): $\ce{Cu^2+(aq) + 2e- -> Cu(s)}$.`,
          t`Cell reaction: $\ce{Zn(s) + Cu^2+(aq)}$ $\ce{-> Zn^2+(aq) + Cu(s)}$.`,
          t`Electrons flow from zinc to copper through the external wire, never through the solutions.`,
        ],
      },
      {
        title: "The salt bridge",
        points: [
          t`A **salt bridge** is a U-tube of gel holding a strong electrolyte such as $\ce{KCl}$ or $\ce{KNO3}$.`,
          t`As $\ce{Zn^2+}$ forms, the anode solution would turn positive, so anions from the bridge move in.`,
          t`As $\ce{Cu^2+}$ is used up, the cathode solution would turn negative, so cations move in.`,
          t`So the bridge keeps both solutions neutral and completes the circuit by the movement of ions.`,
          t`It also stops the two solutions from mixing.`,
        ],
      },
      {
        title: "Writing the cell formula",
        points: [
          t`The anode is written on the left and the cathode on the right.`,
          t`The anode is written in the order of its oxidation, metal then ion: $\ce{Zn | Zn^2+}$.`,
          t`The cathode is written in the order of its reduction, ion then metal: $\ce{Cu^2+ | Cu}$.`,
          t`A single vertical line is a **phase boundary**, between an electrode and its solution.`,
          t`A double vertical line stands for the salt bridge: $\ce{Zn | Zn^2+ || Cu^2+ | Cu}$.`,
        ],
      },
      {
        title: "Reference electrodes",
        points: [
          t`The potential of a single electrode cannot be measured: a voltmeter reads only a difference between two electrodes.`,
          t`So an electrode is paired with a **reference electrode**, whose potential is known and fixed.`,
          t`The **standard hydrogen electrode** (SHE) is the primary reference; its potential is taken as exactly $0$ V.`,
          t`It is platinum in $1\ \mathrm{M}$ $\ce{H+}$, with $\ce{H2}$ gas at $1$ atm bubbled over it.`,
          t`The **calomel electrode**, mercury and $\ce{Hg2Cl2}$ in $\ce{KCl}$ solution, is a handier secondary reference.`,
        ],
      },
    ],
    worked: {
      prompt: t`The reaction $\ce{Zn(s) + 2Ag+(aq)}$ $\ce{-> Zn^2+(aq) + 2Ag(s)}$ drives a galvanic cell. Name its anode and cathode with their signs, and write the cell formula.`,
      steps: [
        t`Zinc loses electrons, $\ce{Zn -> Zn^2+ + 2e-}$: oxidation, so zinc is the anode (−).`,
        t`$\ce{Ag+}$ gains electrons, $\ce{Ag+ + e- -> Ag}$: reduction, so silver is the cathode (+).`,
        t`Electrons go from zinc to silver through the wire; ions in the salt bridge keep the solutions neutral.`,
        t`Anode on the left, metal first; cathode on the right, ion first: $\ce{Zn | Zn^2+ || Ag+ | Ag}$.`,
      ],
      answer: t`Anode zinc (−), cathode silver (+); $\ce{Zn | Zn^2+ || Ag+ | Ag}$`,
    },
    visualSpec: t`Send electrons along the wire from zinc to copper and watch ions stream through the salt bridge to keep both beakers neutral.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks the anode of a galvanic cell is positive, as in electrolysis.",
      remediation: "In a galvanic cell the anode releases electrons into the wire, so it is negative; the cathode takes them in and is positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Calls the electrode where oxidation happens the cathode.",
      remediation: "In every cell, oxidation happens at the anode and reduction at the cathode.",
      fallback: { kind: "ext", topic: "oxidation and reduction (Std XI Chemistry)" },
    },
    {
      id: "C06-M3",
      mistake: "Writes or reads the cell formula with the cathode on the left.",
      remediation: "By convention the anode, where oxidation happens, is written on the left and the cathode on the right.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks electrons travel through the salt bridge or the solutions.",
      remediation: "Electrons flow only through the external wire; inside the cell, ions carry the charge, moving through the salt bridge.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Swaps the meanings of the single and double vertical lines.",
      remediation: "A single line is a phase boundary, between an electrode and its solution; the double line is the salt bridge.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Writes the anode with its ion first, as for a cathode.",
      remediation: t`The anode is written in the order of its oxidation, metal then ion: $\ce{Zn | Zn^2+}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.2 (viii)" },
      stem: t`A galvanic cell is built from the electrode reactions $\ce{Au^3+(aq) + 3e- -> Au(s)}$ and $\ce{Mg(s) -> Mg^2+(aq) + 2e-}$. Its cell formula is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", an: "Mg", cat: "Au" } },
      options: [
        { key: "A", text: t`$\ce{Au | Au^3+ || Mg^2+ | Mg}$`, correct: false, misconceptionId: "C06-M3", value: "Au_s_Aui_d_Mgi_s_Mg" },
        { key: "B", text: t`$\ce{Mg || Mg^2+ | Au^3+ || Au}$`, correct: false, misconceptionId: "C06-M5", value: "Mg_d_Mgi_s_Aui_d_Au" },
        { key: "C", text: t`$\ce{Mg^2+ | Mg || Au^3+ | Au}$`, correct: false, misconceptionId: "C06-M6", value: "Mgi_s_Mg_d_Aui_s_Au" },
        { key: "D", text: t`$\ce{Mg | Mg^2+ || Au^3+ | Au}$`, correct: true, value: "Mg_s_Mgi_d_Aui_s_Au" },
      ],
      solution: {
        steps: [
          t`Magnesium is oxidised, so it is the anode, written on the left, metal first: $\ce{Mg | Mg^2+}$.`,
          t`$\ce{Au^3+}$ is reduced, so gold is the cathode, on the right, ion first: $\ce{Au^3+ | Au}$.`,
          t`The salt bridge, a double line, joins them: $\ce{Mg | Mg^2+ || Au^3+ | Au}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.2 (x)" },
      stem: t`In the cell formula $\ce{Ni | Ni^2+ || Cu^2+ | Cu}$, what do the single and the double vertical lines stand for?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lines" } },
      options: [
        { key: "A", text: t`Single: a boundary between an electrode and its solution; double: the salt bridge`, correct: true, value: "single_phase_double_bridge" },
        { key: "B", text: t`Single: the salt bridge; double: a boundary between an electrode and its solution`, correct: false, misconceptionId: "C06-M5", value: "single_bridge_double_phase" },
        { key: "C", text: t`Single: a boundary between an electrode and its solution; double: the path the electrons take between the solutions`, correct: false, misconceptionId: "C06-M4", value: "double_electron_path" },
        { key: "D", text: t`Single: a boundary between an electrode and its solution; double: the salt bridge, with the cathode on its left`, correct: false, misconceptionId: "C06-M3", value: "double_cathode_left" },
      ],
      solution: {
        steps: [
          t`A single line separates two phases, such as nickel metal and its solution.`,
          t`The double line stands for the salt bridge joining the two solutions.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`In the cell $\ce{Fe | Fe^2+ || Cu^2+ | Cu}$, which statement about the iron electrode is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "electrode", side: "left" } },
      options: [
        { key: "A", text: t`It is the anode, the negative electrode: iron is oxidised there`, correct: true, value: "anode_neg_ox" },
        { key: "B", text: t`It is the anode, the positive electrode: iron is oxidised there`, correct: false, misconceptionId: "C06-M1", value: "anode_pos_ox" },
        { key: "C", text: t`It is the cathode: iron is oxidised there`, correct: false, misconceptionId: "C06-M2", value: "cathode_ox" },
        { key: "D", text: t`It is the anode: its electrons cross the salt bridge to the copper`, correct: false, misconceptionId: "C06-M4", value: "anode_e_bridge" },
      ],
      solution: {
        steps: [
          t`Iron is on the left, so it is the anode: $\ce{Fe -> Fe^2+ + 2e-}$ is oxidation.`,
          t`It releases electrons into the wire, so it is the negative electrode.`,
          t`The electrons reach the copper through the wire; only ions move through the salt bridge.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`In the cell $\ce{Ni | Ni^2+ || Ag+ | Ag}$, which statement about the silver electrode is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "electrode", side: "right" } },
      options: [
        { key: "A", text: t`It is the anode, the negative electrode: silver is oxidised there`, correct: false, misconceptionId: "C06-M3", value: "anode_neg_ox" },
        { key: "B", text: t`It is the cathode, the positive electrode: $\ce{Ag+}$ ions are reduced there`, correct: true, value: "cathode_pos_red" },
        { key: "C", text: t`It is the cathode, the negative electrode: $\ce{Ag+}$ ions are reduced there`, correct: false, misconceptionId: "C06-M1", value: "cathode_neg_red" },
        { key: "D", text: t`It is the anode: $\ce{Ag+}$ ions are reduced there`, correct: false, misconceptionId: "C06-M2", value: "anode_red" },
      ],
      solution: {
        steps: [
          t`Silver is on the right, so it is the cathode: $\ce{Ag+ + e- -> Ag}$ is reduction.`,
          t`It takes electrons in from the wire, so it is the positive electrode.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`The reaction $\ce{Cu(s) + 2Ag+(aq)}$ $\ce{-> Cu^2+(aq) + 2Ag(s)}$ is carried out in a galvanic cell. Its cell formula is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", an: "Cu", cat: "Ag" } },
      options: [
        { key: "A", text: t`$\ce{Cu | Cu^2+ || Ag+ | Ag}$`, correct: true, value: "Cu_s_Cui_d_Agi_s_Ag" },
        { key: "B", text: t`$\ce{Ag | Ag+ || Cu^2+ | Cu}$`, correct: false, misconceptionId: "C06-M3", value: "Ag_s_Agi_d_Cui_s_Cu" },
        { key: "C", text: t`$\ce{Cu || Cu^2+ | Ag+ || Ag}$`, correct: false, misconceptionId: "C06-M5", value: "Cu_d_Cui_s_Agi_d_Ag" },
        { key: "D", text: t`$\ce{Cu^2+ | Cu || Ag+ | Ag}$`, correct: false, misconceptionId: "C06-M6", value: "Cui_s_Cu_d_Agi_s_Ag" },
      ],
      solution: {
        steps: [
          t`Copper is oxidised: it is the anode, on the left, metal first: $\ce{Cu | Cu^2+}$.`,
          t`$\ce{Ag+}$ is reduced: silver is the cathode, on the right, ion first: $\ce{Ag+ | Ag}$.`,
          t`So the cell is $\ce{Cu | Cu^2+ || Ag+ | Ag}$.`,
        ],
      },
    },
  ],
};
