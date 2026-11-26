import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A car battery can be recharged hundreds of times, but a torch's dry cell is thrown away once it runs down. What makes the difference?`,
    reveal: t`In the lead battery the product, $\ce{PbSO4}$, stays on the plates, so a current pushed the other way reverses both electrode reactions. The dry cell's reactions cannot be reversed like this: it is a primary cell.`,
  },
  explanation: {
    intuition: [
      t`Everyday batteries are galvanic cells built to be small, steady and safe.`,
      t`Each has an anode that is oxidised, a cathode that is reduced, and an electrolyte between them.`,
      t`A **primary cell** is used once; a **secondary cell** can be recharged by forcing its reaction backwards.`,
      t`A **fuel cell** keeps working as long as its fuel and oxygen are supplied.`,
      t`To know a cell is to know its anode, cathode, electrolyte and electrode reactions.`,
    ],
    formal: [
      {
        title: "Leclanché dry cell",
        points: [
          t`Anode (−): the zinc container; cathode (+): a graphite rod in a paste of $\ce{MnO2}$ and carbon.`,
          t`Electrolyte: a moist paste of $\ce{NH4Cl}$ and $\ce{ZnCl2}$.`,
          t`Anode: $\ce{Zn(s) -> Zn^2+(aq) + 2e-}$.`,
          t`Cathode: $\ce{2MnO2 + 2NH4+ + 2e-}$ $\ce{-> Mn2O3 + 2NH3 + H2O}$.`,
          t`It gives about $1.5$ V and is a primary cell: it cannot be recharged.`,
        ],
      },
      {
        title: "Lead storage battery",
        points: [
          t`Anode (−): spongy lead; cathode (+): a lead grid packed with $\ce{PbO2}$; electrolyte: $38\%$ $\ce{H2SO4}$.`,
          t`Anode: $\ce{Pb + SO4^2- -> PbSO4 + 2e-}$.`,
          t`Cathode: $\ce{PbO2 + 4H+ + SO4^2- + 2e-}$ $\ce{-> PbSO4 + 2H2O}$.`,
          t`Overall: $\ce{Pb + PbO2 + 2H2SO4}$ $\ce{-> 2PbSO4 + 2H2O}$.`,
          t`$\ce{H2SO4}$ is used up as the cell discharges, so its density and the cell potential fall.`,
          t`Each cell gives about $2$ V; six in series make a $12$ V battery.`,
        ],
      },
      {
        title: "Recharging the lead battery",
        points: [
          t`An external potential slightly above $2$ V drives the cell as an electrolytic cell.`,
          t`Each electrode reaction reverses, and the two electrodes swap roles.`,
          t`The lead plate becomes the cathode: $\ce{PbSO4 + 2e- -> Pb + SO4^2-}$.`,
          t`The $\ce{PbO2}$ plate becomes the anode: $\ce{PbSO4 + 2H2O}$ $\ce{-> PbO2 + 4H+ + SO4^2- + 2e-}$.`,
          t`$\ce{H2SO4}$ is made again, so the cell potential rises.`,
        ],
      },
      {
        title: "The NICAD cell",
        points: [
          t`Anode: cadmium; cathode: $\ce{NiO2}$ on nickel; the electrolyte is basic.`,
          t`Anode: $\ce{Cd + 2OH- -> Cd(OH)2 + 2e-}$.`,
          t`Cathode: $\ce{NiO2 + 2H2O + 2e-}$ $\ce{-> Ni(OH)2 + 2OH-}$.`,
          t`Overall: $\ce{Cd + NiO2 + 2H2O}$ $\ce{-> Cd(OH)2 + Ni(OH)2}$.`,
          t`The products are solids that stay on the electrodes, so the cell can be recharged; it gives about $1.4$ V.`,
        ],
      },
      {
        title: "Hydrogen–oxygen fuel cell",
        points: [
          t`Electrodes: porous carbon with a little platinum as catalyst; electrolyte: hot aqueous $\ce{KOH}$.`,
          t`$\ce{H2}$ is bubbled through the anode (−) and $\ce{O2}$ through the cathode (+).`,
          t`Anode: $\ce{2H2 + 4OH- -> 4H2O + 4e-}$.`,
          t`Cathode: $\ce{O2 + 2H2O + 4e- -> 4OH-}$.`,
          t`Overall: $\ce{2H2 + O2 -> 2H2O}$, about $1.23$ V; fuel cells powered the Apollo spacecraft.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the electrode reactions of the Leclanché dry cell and add them to get the overall cell reaction.`,
      steps: [
        t`Anode, the zinc container, is oxidised: $\ce{Zn -> Zn^2+ + 2e-}$.`,
        t`Cathode, at the graphite rod: $\ce{2MnO2 + 2NH4+ + 2e-}$ $\ce{-> Mn2O3 + 2NH3 + H2O}$.`,
        t`Both involve two electrons, so the electrons cancel when the two are added.`,
        t`Overall: $\ce{Zn + 2MnO2 + 2NH4+}$ $\ce{-> Zn^2+ + Mn2O3}$ $\ce{+ 2NH3 + H2O}$.`,
      ],
      answer: t`$\ce{Zn + 2MnO2 + 2NH4+}$ $\ce{-> Zn^2+ + Mn2O3}$ $\ce{+ 2NH3 + H2O}$`,
    },
    visualSpec: t`Switch a lead battery between discharging and recharging and watch the plates swap roles, PbSO₄ form or vanish, and the acid's density meter fall or rise.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Mixes up the reactions of discharging and recharging.",
      remediation: t`Discharging makes $\ce{PbSO4}$ at both plates; recharging reverses each reaction, and the two electrodes swap roles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Gives the other electrode's reaction, a reduction for the oxidation or the reverse.",
      remediation: "Oxidation, the loss of electrons, happens at the anode; reduction, the gain of electrons, at the cathode.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C10-M3",
      mistake: "Leaves the electrolyte's ions out of the electrode reaction.",
      remediation: t`The electrolyte takes part: $\ce{SO4^2-}$ turns lead into $\ce{PbSO4}$, and $\ce{OH-}$ turns $\ce{H2}$ into water and $\ce{Cd}$ into $\ce{Cd(OH)2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Gives the overall cell reaction for one electrode's reaction.",
      remediation: "An electrode reaction shows the electrons gained or lost; the overall reaction adds the two, and its electrons cancel.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (ix)" },
      stem: t`The oxidation reaction that takes place in the lead storage battery during discharge is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reaction", cell: "lead", process: "dis", kind: "ox" } },
      options: [
        { key: "A", text: t`$\ce{PbSO4 + 2H2O}$ $\ce{-> PbO2 + 4H+ + SO4^2- + 2e-}$`, correct: false, misconceptionId: "C10-M1", value: "pbso4_rech_ox" },
        { key: "B", text: t`$\ce{PbO2 + 4H+ + SO4^2- + 2e-}$ $\ce{-> PbSO4 + 2H2O}$`, correct: false, misconceptionId: "C10-M2", value: "pbo2_dis_red" },
        { key: "C", text: t`$\ce{Pb(s) -> Pb^2+(aq) + 2e-}$`, correct: false, misconceptionId: "C10-M3", value: "pb_bare_ox" },
        { key: "D", text: t`$\ce{Pb(s) + SO4^2-(aq)}$ $\ce{-> PbSO4(s) + 2e-}$`, correct: true, value: "pb_dis_ox" },
      ],
      solution: {
        steps: [
          t`During discharge the spongy lead anode is oxidised to $\ce{Pb^2+}$.`,
          t`This meets $\ce{SO4^2-}$ from the acid at once: $\ce{Pb + SO4^2- -> PbSO4 + 2e-}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (ix)" },
      stem: t`When the lead storage battery is being recharged, the reaction at the cathode is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reaction", cell: "lead", process: "rech", kind: "red" } },
      options: [
        { key: "A", text: t`$\ce{PbSO4(s) + 2e-}$ $\ce{-> Pb(s) + SO4^2-(aq)}$`, correct: true, value: "pbso4_rech_red" },
        { key: "B", text: t`$\ce{PbO2 + 4H+ + SO4^2- + 2e-}$ $\ce{-> PbSO4 + 2H2O}$`, correct: false, misconceptionId: "C10-M1", value: "pbo2_dis_red" },
        { key: "C", text: t`$\ce{PbSO4 + 2H2O}$ $\ce{-> PbO2 + 4H+ + SO4^2- + 2e-}$`, correct: false, misconceptionId: "C10-M2", value: "pbso4_rech_ox" },
        { key: "D", text: t`$\ce{2PbSO4 + 2H2O}$ $\ce{-> Pb + PbO2 + 2H2SO4}$`, correct: false, misconceptionId: "C10-M4", value: "lead_rech_overall" },
      ],
      solution: {
        steps: [
          t`On recharging the electrodes swap roles: the lead plate becomes the cathode.`,
          t`There $\ce{PbSO4}$ is reduced back to lead: $\ce{PbSO4 + 2e- -> Pb + SO4^2-}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#10" },
      stem: t`In the $\ce{H2}$–$\ce{O2}$ fuel cell, with hot aqueous $\ce{KOH}$ as the electrolyte, the reaction at the anode is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reaction", cell: "fuel", process: "dis", kind: "ox" } },
      options: [
        { key: "A", text: t`$\ce{2H2(g) + O2(g) -> 2H2O(l)}$`, correct: false, misconceptionId: "C10-M4", value: "fuel_overall" },
        { key: "B", text: t`$\ce{2H2(g) + 4OH-(aq)}$ $\ce{-> 4H2O(l) + 4e-}$`, correct: true, value: "h2_fuel_ox" },
        { key: "C", text: t`$\ce{O2(g) + 2H2O(l) + 4e-}$ $\ce{-> 4OH-(aq)}$`, correct: false, misconceptionId: "C10-M2", value: "o2_fuel_red" },
        { key: "D", text: t`$\ce{H2(g) -> 2H+(aq) + 2e-}$`, correct: false, misconceptionId: "C10-M3", value: "h2_bare_ox" },
      ],
      solution: {
        steps: [
          t`Hydrogen is oxidised at the anode, in hot $\ce{KOH}$.`,
          t`$\ce{OH-}$ ions turn it into water: $\ce{2H2 + 4OH- -> 4H2O + 4e-}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.3 (xi)" },
      stem: t`In the NICAD cell, with a basic electrolyte, the reaction at the anode while the cell gives current is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reaction", cell: "nicad", process: "dis", kind: "ox" } },
      options: [
        { key: "A", text: t`$\ce{Cd(s) -> Cd^2+(aq) + 2e-}$`, correct: false, misconceptionId: "C10-M3", value: "cd_bare_ox" },
        { key: "B", text: t`$\ce{Cd + NiO2 + 2H2O}$ $\ce{-> Cd(OH)2 + Ni(OH)2}$`, correct: false, misconceptionId: "C10-M4", value: "nicad_overall" },
        { key: "C", text: t`$\ce{Cd(s) + 2OH-(aq)}$ $\ce{-> Cd(OH)2(s) + 2e-}$`, correct: true, value: "cd_nicad_ox" },
        { key: "D", text: t`$\ce{NiO2(s) + 2H2O(l) + 2e-}$ $\ce{-> Ni(OH)2(s) + 2OH-(aq)}$`, correct: false, misconceptionId: "C10-M2", value: "nio2_nicad_red" },
      ],
      solution: {
        steps: [
          t`Cadmium, the anode, is oxidised in the basic electrolyte.`,
          t`$\ce{Cd + 2OH- -> Cd(OH)2 + 2e-}$; the solid $\ce{Cd(OH)2}$ stays on the electrode.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#15" },
      stem: t`In the lead accumulator, the reaction at the cathode during discharging is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reaction", cell: "lead", process: "dis", kind: "red" } },
      options: [
        { key: "A", text: t`$\ce{PbO2 + 4H+ + SO4^2- + 2e-}$ $\ce{-> PbSO4 + 2H2O}$`, correct: true, value: "pbo2_dis_red" },
        { key: "B", text: t`$\ce{PbSO4(s) + 2e-}$ $\ce{-> Pb(s) + SO4^2-(aq)}$`, correct: false, misconceptionId: "C10-M1", value: "pbso4_rech_red" },
        { key: "C", text: t`$\ce{PbO2 + 4H+ + 2e-}$ $\ce{-> Pb^2+ + 2H2O}$`, correct: false, misconceptionId: "C10-M3", value: "pbo2_bare_red" },
        { key: "D", text: t`$\ce{Pb + PbO2 + 2H2SO4}$ $\ce{-> 2PbSO4 + 2H2O}$`, correct: false, misconceptionId: "C10-M4", value: "lead_dis_overall" },
      ],
      solution: {
        steps: [
          t`During discharge, $\ce{PbO2}$ at the cathode is reduced.`,
          t`With the acid it becomes $\ce{PbSO4}$: $\ce{PbO2 + 4H+ + SO4^2- + 2e-}$ $\ce{-> PbSO4 + 2H2O}$.`,
        ],
      },
    },
  ],
};
