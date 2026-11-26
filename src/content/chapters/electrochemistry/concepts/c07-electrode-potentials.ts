import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A voltmeter needs two terminals, so it can never read the potential of one electrode on its own. How, then, does a table list a potential for every single electrode?`,
    reveal: t`Every electrode is measured against one agreed partner, the standard hydrogen electrode, whose potential is set at $0$ V. The table lists each electrode's potential relative to it.`,
  },
  explanation: {
    intuition: [
      t`An electrode's **reduction potential** measures how strongly it takes electrons, that is, how readily it is reduced.`,
      t`It is measured against the standard hydrogen electrode, whose potential is taken as $0$ V.`,
      t`**Standard conditions** are every solution at $1\ \mathrm{M}$ and every gas at $1$ atm, at $298$ K; the potential is then $E^0$.`,
      t`In a cell, the electrode with the higher $E^0$ takes the electrons: it is the cathode.`,
      t`The cell's potential is the gap between the two: $E^0_{cell} = E^0_{cathode} - E^0_{anode}$.`,
      t`The **electrochemical series** lists the half reactions in order of their $E^0$.`,
    ],
    formal: [
      {
        title: "Standard reduction potentials",
        points: [
          t`Each half reaction is written as a reduction, $\ce{M^n+ + ne- -> M}$, with its $E^0$.`,
          t`Paired with the SHE, the cell's potential, with a sign, is the electrode's $E^0$.`,
          t`A positive $E^0$ (copper, $0.34$ V) means its ion is reduced more readily than $\ce{H+}$.`,
          t`A negative $E^0$ (zinc, $-0.76$ V) means its metal is oxidised more readily than $\ce{H2}$.`,
        ],
      },
      {
        title: "Standard cell potential",
        points: [
          t`$E^0_{cell} = E^0_{cathode} - E^0_{anode}$, both taken as reduction potentials.`,
          t`Daniell cell: $E^0_{cell} = 0.34 - (-0.76)$ $= 1.10$ V.`,
          t`$E^0$ is an **intensive** property: it does not depend on how much substance reacts.`,
          t`So $E^0$ is never multiplied by the coefficients of the balanced equation.`,
          t`A positive $E^0_{cell}$ means the reaction is spontaneous as written; a negative one, that the reverse is.`,
        ],
      },
      {
        title: "The electrochemical series",
        points: [
          t`The half reactions are listed as reductions, in order of $E^0$.`,
          t`Species on the left (oxidised forms) are oxidising agents; those on the right (reduced forms) are reducing agents.`,
          t`The higher the $E^0$, the stronger the oxidising agent: $\ce{F2}$, at the top, is the strongest.`,
          t`The lower the $E^0$, the stronger the reducing agent: $\ce{Li}$, at the bottom, is the strongest.`,
          t`A metal with a negative $E^0$ displaces hydrogen from dilute acids.`,
          t`A metal displaces from solution the ions of any metal with a higher $E^0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell is made from $\ce{Zn^2+ | Zn}$ ($E^0 = -0.76$ V) and $\ce{Ag+ | Ag}$ ($E^0 = 0.80$ V). Which is the cathode, and what is $E^0_{cell}$? Does zinc displace silver from silver nitrate solution?`,
      steps: [
        t`Silver has the higher $E^0$, so $\ce{Ag+}$ is reduced: silver is the cathode and zinc the anode.`,
        t`$E^0_{cell} = E^0_{Ag} - E^0_{Zn}$ $= 0.80 - (-0.76)$ $= 1.56$ V.`,
        t`The reaction $\ce{Zn + 2Ag+ -> Zn^2+ + 2Ag}$ has this same $E^0$: the 2 does not double it.`,
        t`$E^0_{cell}$ is positive, so the reaction is spontaneous: zinc displaces silver.`,
      ],
      answer: t`Silver is the cathode; $E^0_{cell} = 1.56$ V; yes, zinc displaces silver`,
    },
    visualSpec: t`Slide two electrodes along the electrochemical series and watch the cathode, the anode and the gap between them, E°cell, update.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Adds the two reduction potentials.",
      remediation: t`Both are reduction potentials, so take the difference: $E^0_{cell} = E^0_{cathode} - E^0_{anode}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Subtracts the cathode's potential from the anode's.",
      remediation: t`The cathode is the electrode where reduction happens: $E^0_{cell} = E^0_{cathode} - E^0_{anode}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M3",
      mistake: t`Multiplies each $E^0$ by its coefficient in the balanced equation.`,
      remediation: t`$E^0$ is intensive: it stays the same however many times the half reaction is multiplied.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Reads the series backwards, taking a higher $E^0$ as a stronger reducing agent.`,
      remediation: t`A higher $E^0$ means a stronger pull on electrons, a stronger oxidising agent; the lowest $E^0$ marks the strongest reducing agent.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Takes the species on the wrong side of a half reaction.",
      remediation: "Oxidising agents are the oxidised forms, on the left of each reduction; reducing agents are the reduced forms, on the right.",
      fallback: { kind: "ext", topic: "oxidising and reducing agents (Std XI Chemistry)" },
    },
    {
      id: "C07-M6",
      mistake: t`Ranks by the size of $E^0$, ignoring its sign.`,
      remediation: t`$-1.66$ V is lower than $-0.40$ V: rank by the signed value, from the most negative to the most positive.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.2 (v)" },
      stem: t`With $E^0_{Ni} = -0.25$ V and $E^0_{Al} = -1.66$ V, the standard potential of the cell in which $\ce{2Al(s) + 3Ni^2+(aq)}$ $\ce{-> 2Al^3+(aq) + 3Ni(s)}$ takes place is`,
      verify: { kind: "value", inputs: { Ec: "-0.25", Ea: "-1.66", cc: "3", ca: "2" }, params: { ask: "E0cell" } },
      options: [
        { key: "A", text: t`$-1.41\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M2", value: "-1.41000000000000" },
        { key: "B", text: t`$2.57\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M3", value: "2.57000000000000" },
        { key: "C", text: t`$1.41\ \mathrm{V}$`, correct: true, value: "1.41000000000000" },
        { key: "D", text: t`$-1.91\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M1", value: "-1.91000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{Ni^2+}$ is reduced, so nickel is the cathode; aluminium is oxidised, the anode.`,
          t`$E^0_{cell} = -0.25 - (-1.66)$ $= 1.41$ V; the coefficients 2 and 3 do not enter.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#17" },
      stem: t`$E^0_{cell}$ of the cell $\ce{Cu | Cu^2+ || Ag+ | Ag}$, with both ions at $1\ \mathrm{M}$, is $0.463$ V. If the standard potential of the silver electrode is $0.800$ V, the standard potential of the copper electrode is`,
      verify: { kind: "value", inputs: { E0: "0.463", Ec: "0.800", cc: "2", ca: "1" }, params: { ask: "E_anode" } },
      options: [
        { key: "A", text: t`$-0.337\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M1", value: "-0.337000000000000" },
        { key: "B", text: t`$1.26\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M2", value: "1.26000000000000" },
        { key: "C", text: t`$1.14\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M3", value: "1.14000000000000" },
        { key: "D", text: t`$0.337\ \mathrm{V}$`, correct: true, value: "0.337000000000000" },
      ],
      solution: {
        steps: [
          t`Silver is the cathode and copper the anode: $E^0_{cell} = E^0_{Ag} - E^0_{Cu}$.`,
          t`$0.463 = 0.800 - E^0_{Cu}$, so $E^0_{Cu} = 0.337$ V.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (vi)" },
      stem: t`The standard reduction potentials are $0.80$ V for $\ce{Ag+ + e- -> Ag}$, $0.53$ V for $\ce{I2 + 2e- -> 2I-}$, $-0.13$ V for $\ce{Pb^2+ + 2e- -> Pb}$ and $-0.44$ V for $\ce{Fe^2+ + 2e- -> Fe}$. The strongest oxidising and reducing agents are, respectively,`,
      verify: { kind: "value", inputs: {  }, params: { ask: "strongest", couples: ["Agp/Ag/0.80", "I2/Im/0.53", "Pb2p/Pb/-0.13", "Fe2p/Fe/-0.44"] } },
      options: [
        { key: "A", text: t`$\ce{Ag+}$ and $\ce{Pb}$`, correct: false, misconceptionId: "C07-M6", value: "Agp_and_Pb" },
        { key: "B", text: t`$\ce{Ag+}$ and $\ce{Fe}$`, correct: true, value: "Agp_and_Fe" },
        { key: "C", text: t`$\ce{Fe^2+}$ and $\ce{Ag}$`, correct: false, misconceptionId: "C07-M4", value: "Fe2p_and_Ag" },
        { key: "D", text: t`$\ce{Ag}$ and $\ce{Fe^2+}$`, correct: false, misconceptionId: "C07-M5", value: "Ag_and_Fe2p" },
      ],
      solution: {
        steps: [
          t`The highest $E^0$, $0.80$ V, is that of $\ce{Ag+}$, on the left: the strongest oxidising agent.`,
          t`The lowest, $-0.44$ V, gives $\ce{Fe}$, on the right: the strongest reducing agent.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (xii)" },
      stem: t`The standard potentials of the couples are given in brackets: $\ce{Al^3+}$ ($-1.66$ V), $\ce{Cl2}$ ($1.36$ V), $\ce{Cd^2+}$ ($-0.40$ V), $\ce{Fe}$ ($-0.44$ V), $\ce{I2}$ ($0.54$ V), $\ce{Br-}$ ($1.09$ V). Which list gives the oxidising agents among them, in order of increasing strength?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "order", species: ["Al3p/-1.66/L", "Cl2/1.36/L", "Cd2p/-0.40/L", "Fe/-0.44/R", "I2/0.54/L", "Brm/1.09/R"] } },
      options: [
        { key: "A", text: t`$\ce{Al^3+} < \ce{Cd^2+}$ $< \ce{I2} < \ce{Cl2}$`, correct: true, value: "Al3p_lt_Cd2p_lt_I2_lt_Cl2" },
        { key: "B", text: t`$\ce{Cl2} < \ce{I2}$ $< \ce{Cd^2+} < \ce{Al^3+}$`, correct: false, misconceptionId: "C07-M4", value: "Cl2_lt_I2_lt_Cd2p_lt_Al3p" },
        { key: "C", text: t`$\ce{Al^3+} < \ce{Fe} < \ce{Cd^2+}$ $< \ce{I2} < \ce{Br-} < \ce{Cl2}$`, correct: false, misconceptionId: "C07-M5", value: "Al3p_lt_Fe_lt_Cd2p_lt_I2_lt_Brm_lt_Cl2" },
        { key: "D", text: t`$\ce{Cd^2+} < \ce{I2}$ $< \ce{Cl2} < \ce{Al^3+}$`, correct: false, misconceptionId: "C07-M6", value: "Cd2p_lt_I2_lt_Cl2_lt_Al3p" },
      ],
      solution: {
        steps: [
          t`$\ce{Fe}$ and $\ce{Br-}$ are reduced forms, on the right of their half reactions: they are reducing agents.`,
          t`The other four are oxidising agents, stronger as $E^0$ rises: $-1.66 < -0.40 < 0.54 < 1.36$.`,
          t`So $\ce{Al^3+} < \ce{Cd^2+}$ $< \ce{I2} < \ce{Cl2}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (xiv)" },
      stem: t`The standard reduction potentials of $\ce{Sn^2+ | Sn}$ and $\ce{Br2 | Br-}$ are $-0.136$ V and $1.09$ V. The standard potential of a cell in which $\ce{2Br-(aq) + Sn^2+(aq)}$ $\ce{-> Br2(l) + Sn(s)}$ takes place is`,
      verify: { kind: "value", inputs: { Ec: "-0.136", Ea: "1.09", cc: "1", ca: "2" }, params: { ask: "E0cell" } },
      options: [
        { key: "A", text: t`$0.954\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M1", value: "0.954000000000000" },
        { key: "B", text: t`$1.23\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M2", value: "1.23000000000000" },
        { key: "C", text: t`$-2.32\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M3", value: "-2.32000000000000" },
        { key: "D", text: t`$-1.23\ \mathrm{V}$`, correct: true, value: "-1.23000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{Sn^2+}$ is reduced, so tin is the cathode; $\ce{Br-}$ is oxidised, so bromine is the anode.`,
          t`$E^0_{cell} = -0.136 - 1.09$ $= -1.23$ V; the 2 before $\ce{Br-}$ does not enter.`,
          t`It is negative, so the reaction is not spontaneous as written.`,
        ],
      },
    },
  ],
};
