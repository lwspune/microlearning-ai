import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Chloroethane turns into ethanol in warm aqueous $\ce{NaOH}$. Chlorobenzene needs $623\ \mathrm{K}$ and $300\ \mathrm{atm}$ to become phenol. Both have a $\ce{C-Cl}$ bond. Why is one so stubborn?`,
    reveal: t`In chlorobenzene a lone pair on chlorine is shared with the ring. The $\ce{C-Cl}$ bond becomes partly double, shorter and stronger, so it is very hard to break.`,
  },
  explanation: {
    intuition: [
      t`In a **haloarene** the halogen sits directly on a benzene ring, as in chlorobenzene, $\ce{C6H5Cl}$.`,
      t`A lone pair on the halogen spreads into the ring by **resonance**.`,
      t`So the $\ce{C-X}$ bond is partly double and hard to break.`,
      t`Nucleophiles therefore replace the halogen only under harsh conditions.`,
      t`Electrophiles still attack the ring, mostly at the ortho and para positions.`,
    ],
    formal: [
      {
        title: "Why haloarenes resist nucleophiles",
        points: [
          t`Resonance gives the $\ce{C-X}$ bond partial double bond character.`,
          t`The ring carbon is $sp^2$, which holds the bond electrons more tightly than $sp^3$.`,
          t`The phenyl cation would be very unstable, so $\mathrm{S_N1}$ is impossible.`,
          t`Chlorobenzene gives phenol only with $\ce{NaOH}$ at $623\ \mathrm{K}$ and $300\ \mathrm{atm}$.`,
        ],
      },
      {
        title: "Nitro groups help",
        points: [
          t`A $\ce{NO2}$ group **ortho** or **para** to the halogen pulls electrons from the ring.`,
          t`It stabilises the negatively charged intermediate formed when $\ce{OH-}$ attacks.`,
          t`p-Nitrochlorobenzene reacts with aqueous $\ce{NaOH}$ at about $443\ \mathrm{K}$.`,
          t`More such groups help more; a meta $\ce{NO2}$ cannot share the charge, so it helps little.`,
        ],
      },
      {
        title: "Electrophilic substitution",
        points: [
          t`The halogen pulls electrons by induction, so the ring reacts a little slower than benzene.`,
          t`Its lone pair, shared by resonance, raises electron density at ortho and para positions.`,
          t`So electrophiles enter ortho and para: chlorination, nitration, sulfonation, Friedel-Crafts.`,
          t`The ring keeps its aromatic system: it substitutes, it does not add.`,
        ],
      },
    ],
    worked: {
      prompt: t`Chlorobenzene is treated with $\ce{CH3Cl}$ and anhydrous $\ce{AlCl3}$. What are the products?`,
      steps: [
        t`$\ce{AlCl3}$ makes the electrophile $\ce{CH3+}$ (Friedel-Crafts alkylation).`,
        t`The ring, not the $\ce{C-Cl}$ bond, reacts: an electrophilic substitution.`,
        t`Chlorine directs ortho and para.`,
      ],
      answer: t`2-Chlorotoluene and 4-chlorotoluene`,
    },
    visualSpec: t`Slide a nitro group around the ring and watch where the negative charge of the intermediate can and cannot spread.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Thinks aryl halides substitute as easily as alkyl halides.",
      remediation: t`Resonance makes the aryl $\ce{C-X}$ bond partly double; it breaks only under harsh conditions.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: "Thinks a nitro group makes nucleophilic substitution of an aryl halide harder.",
      remediation: t`An ortho or para $\ce{NO2}$ withdraws electrons and stabilises the negative intermediate, so the halogen is replaced more easily.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Thinks the halogen directs electrophiles to the meta position, since it slows the ring.",
      remediation: "The halogen's lone pair raises electron density at ortho and para, so electrophiles go there.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks aryl halides can never undergo nucleophilic substitution.",
      remediation: t`They can, but only under harsh conditions, or easily when $\ce{NO2}$ groups sit ortho or para.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Thinks a benzene ring adds $\ce{Cl2}$ like an alkene.`,
      remediation: "With a Lewis acid catalyst in the dark, the ring substitutes and keeps its aromatic system.",
      fallback: { kind: "ext", topic: "electrophilic substitution in benzene (Std XI Chemistry)" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks the halogen deactivates the ring so strongly that it stops reacting.",
      remediation: "The halogen slows the ring only a little; electrophilic substitution still occurs, at ortho and para.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Thinks the electrophile replaces the halogen.",
      remediation: "An electrophile replaces a hydrogen on the ring; the halogen stays.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Thinks a nitro group helps from any position, meta included.",
      remediation: t`Only ortho and para $\ce{NO2}$ groups can take the negative charge by resonance; a meta one helps little.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.3 (i)" },
      stem: t`Chlorobenzene reacts with nucleophiles far less readily than chloroethane. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "why" } },
      options: [
        { key: "A", text: t`Aryl halides cannot undergo nucleophilic substitution under any conditions`, correct: false, misconceptionId: "C09-M4", value: "never_react" },
        { key: "B", text: t`The chlorine deactivates the ring, so nucleophiles are repelled from it`, correct: false, misconceptionId: "C09-M6", value: "halogen_deactivates" },
        { key: "C", text: t`Resonance gives its $\ce{C-Cl}$ bond partial double bond character, and the carbon is $sp^2$`, correct: true, value: "partial_double_bond" },
        { key: "D", text: t`It is not less reactive: both $\ce{C-Cl}$ bonds break equally easily`, correct: false, misconceptionId: "C09-M1", value: "not_less_reactive" },
      ],
      solution: {
        steps: [
          t`A lone pair on Cl is shared with the ring by resonance.`,
          t`The $\ce{C-Cl}$ bond is partly double and its carbon $sp^2$, so it is hard to break.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.6 (vii)" },
      stem: t`How is p-nitrochlorobenzene converted into p-nitrophenol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitro" } },
      options: [
        { key: "A", text: t`Aqueous $\ce{NaOH}$ at about $443\ \mathrm{K}$, then acid: easier than for chlorobenzene`, correct: true, value: "naoh_443k" },
        { key: "B", text: t`Aqueous $\ce{NaOH}$ at room temperature, as for an alkyl halide`, correct: false, misconceptionId: "C09-M1", value: "naoh_room_temp" },
        { key: "C", text: t`Aqueous $\ce{NaOH}$ above $623\ \mathrm{K}$ and $300\ \mathrm{atm}$: harder than for chlorobenzene`, correct: false, misconceptionId: "C09-M2", value: "harsher_than_chlorobenzene" },
        { key: "D", text: t`It cannot be done: aryl halides never undergo substitution`, correct: false, misconceptionId: "C09-M4", value: "impossible" },
      ],
      solution: {
        steps: [
          t`The para $\ce{NO2}$ group withdraws electrons and helps $\ce{OH-}$ attack.`,
          t`Aqueous $\ce{NaOH}$ at about $443\ \mathrm{K}$ gives sodium p-nitrophenoxide.`,
          t`Acid then gives p-nitrophenol.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (i)" },
      stem: t`Why does 1-chloro-4-nitrobenzene react with aqueous $\ce{NaOH}$ much more easily than chlorobenzene?`,
      verify: { kind: "value", inputs: {  }, params: { q: "pnitro" } },
      options: [
        { key: "A", text: t`It does not: the $\ce{NO2}$ group makes substitution harder`, correct: false, misconceptionId: "C09-M2", value: "not_easier" },
        { key: "B", text: t`Any $\ce{NO2}$ on the ring helps equally, meta included`, correct: false, misconceptionId: "C09-M8", value: "any_position" },
        { key: "C", text: t`Both react easily, like alkyl chlorides; $\ce{NO2}$ changes little`, correct: false, misconceptionId: "C09-M1", value: "alkyl_like" },
        { key: "D", text: t`The para $\ce{NO2}$ group withdraws electrons and stabilises the negative intermediate`, correct: true, value: "para_no2_withdraws" },
      ],
      solution: {
        steps: [
          t`$\ce{OH-}$ adds to the ring carbon holding Cl, giving a negative intermediate.`,
          t`A para $\ce{NO2}$ takes this charge by resonance and stabilises it.`,
          t`So the reaction goes far more easily than for chlorobenzene.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (ii-e)" },
      stem: t`Chlorobenzene is treated with chlorine in the presence of anhydrous $\ce{FeCl3}$, in the dark. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "chlor" } },
      options: [
        { key: "A", text: t`1,2- and 1,4-dichlorobenzene (ortho and para)`, correct: true, value: "ortho_para_dichloro" },
        { key: "B", text: t`1,3-dichlorobenzene (meta)`, correct: false, misconceptionId: "C09-M3", value: "meta_dichloro" },
        { key: "C", text: t`hexachlorocyclohexane, by addition to the ring`, correct: false, misconceptionId: "C09-M5", value: "addition_hexachloro" },
        { key: "D", text: t`No reaction: chlorine deactivates the ring too strongly`, correct: false, misconceptionId: "C09-M6", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`$\ce{FeCl3}$ makes the electrophile $\ce{Cl+}$; the ring substitutes.`,
          t`Chlorine already on the ring directs ortho and para.`,
          t`So 1,2- and 1,4-dichlorobenzene form.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`Chlorobenzene is warmed with concentrated $\ce{HNO3}$ and concentrated $\ce{H2SO4}$. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitrate" } },
      options: [
        { key: "A", text: t`No reaction: chlorine deactivates the ring too strongly`, correct: false, misconceptionId: "C09-M6", value: "no_reaction" },
        { key: "B", text: t`nitrobenzene, as $\ce{NO2}$ replaces the chlorine`, correct: false, misconceptionId: "C09-M7", value: "nitrobenzene" },
        { key: "C", text: t`1-chloro-2-nitrobenzene and 1-chloro-4-nitrobenzene`, correct: true, value: "ortho_para_chloronitro" },
        { key: "D", text: t`1-chloro-3-nitrobenzene`, correct: false, misconceptionId: "C09-M3", value: "meta_chloronitro" },
      ],
      solution: {
        steps: [
          t`The acids make the electrophile $\ce{NO2+}$; it replaces a ring hydrogen.`,
          t`Chlorine directs it ortho and para.`,
          t`So 1-chloro-2-nitrobenzene and 1-chloro-4-nitrobenzene form.`,
        ],
      },
    },
  ],
};
