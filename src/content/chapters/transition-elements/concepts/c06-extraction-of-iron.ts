import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Iron straight from a blast furnace snaps if you strike it hard. A steel spanner made from the same iron bends instead. What makes the difference?`,
    reveal: t`Carbon. Furnace iron holds a lot of dissolved carbon, which makes it hard and brittle. Steel keeps much less, so it is tough without being brittle.`,
  },
  explanation: {
    intuition: [
      t`**Metallurgy** is the commercial extraction of a metal from its **ore**.`,
      t`An ore comes mixed with **gangue**: sand, clay and other unwanted earthy matter.`,
      t`So the gangue is removed first, and the ore is turned into an oxide.`,
      t`**Reduction** then takes the oxygen away, using a reducing agent such as carbon monoxide.`,
      t`Iron is made this way from haematite, $\ce{Fe2O3}$, in a tall **blast furnace**.`,
      t`The iron that comes out holds carbon, and its carbon content sets how hard it is.`,
    ],
    formal: [
      {
        title: "Steps of metallurgy",
        points: [
          t`**Concentration** removes gangue: washing, gravity or magnetic separation, froth flotation or leaching.`,
          t`**Roasting** or **calcination** heats the concentrated ore in air, turning it into the oxide.`,
          t`Volatile impurities such as sulphur and arsenic escape as their oxides.`,
          t`**Reduction** (smelting) turns the oxide into metal, using coke, CO, aluminium or electrolysis.`,
          t`**Refining** purifies the crude metal: liquation, distillation, oxidation or electro-refining.`,
          t`Heat alone does not give the metal: a reducing agent must take the oxygen away.`,
        ],
      },
      {
        title: "Charging the blast furnace",
        points: [
          t`Haematite is concentrated and roasted, $\ce{4FeO + O2 -> 2Fe2O3}$, then sintered into lumps.`,
          t`The **charge**, roasted ore with coke and limestone, goes in at the top.`,
          t`Hot air is blown in near the bottom through pipes called **tuyeres**.`,
          t`The charge sinks while hot gases rise past it.`,
          t`So the furnace is hottest at the bottom, about 2000 K, and coolest at the top, about 500 K.`,
        ],
      },
      {
        title: "Combustion and reduction zones",
        points: [
          t`**Zone of combustion** (bottom, about 2000 K): coke burns in the air blast.`,
          t`$\ce{2C + O2 -> 2CO}$: this supplies the heat, and the carbon monoxide rises.`,
          t`**Zone of reduction** (near the top, about 900 K): CO is the chief reducing agent.`,
          t`$\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$, giving porous **spongy iron**.`,
          t`Coke reduces a little of the ore directly: $\ce{Fe2O3 + 3C}$ $\ce{-> 2Fe + 3CO}$.`,
        ],
      },
      {
        title: "Slag formation and fusion",
        points: [
          t`A **flux** is added to combine with the gangue and form a fusible **slag**.`,
          t`The silica gangue is acidic, so the flux is a basic one: limestone, $\ce{CaCO3}$.`,
          t`**Zone of slag formation** (about 1200 K): $\ce{CaCO3 -> CaO + CO2}$.`,
          t`Then $\ce{CaO + SiO2 -> CaSiO3}$: the silica leaves as slag.`,
          t`**Zone of fusion**: spongy iron melts and dissolves C, Si, Mn, P and S.`,
          t`The light slag floats on the molten iron, and each is tapped off separately.`,
        ],
      },
      {
        title: "Cast iron, wrought iron, steel",
        points: [
          t`Molten iron run into moulds is **pig iron**, with about 4% carbon.`,
          t`Carbon makes iron harder and less malleable and ductile.`,
          t`**Cast iron** (remelted pig iron), about 4% carbon: hard and brittle; pipes, pots, pans.`,
          t`**Wrought iron**, below 0.2% carbon: very soft; bolts, rivets and bars.`,
          t`**Steel**, 0.2 to 2% carbon: neither too hard nor too soft; tools, ships, buildings.`,
        ],
      },
      {
        title: "Van Arkel refining",
        points: [
          t`Very pure zirconium and titanium are made by the **van Arkel method**.`,
          t`Impure Zr is heated with iodine at about 870 K: $\ce{Zr + 2I2 -> ZrI4}$.`,
          t`$\ce{ZrI4}$ is volatile; impurities form no volatile iodides and stay behind.`,
          t`On a tungsten filament at about 1800 K, $\ce{ZrI4 -> Zr + 2I2}$.`,
          t`Pure Zr coats the filament, and the iodine goes back to react again.`,
        ],
      },
    ],
    worked: {
      prompt: t`Crude titanium contains oxygen and nitrogen. How does the van Arkel method turn it into pure titanium?`,
      steps: [
        t`Heat the crude Ti with iodine in an evacuated vessel: $\ce{Ti + 2I2 -> TiI4}$.`,
        t`$\ce{TiI4}$ is volatile and passes into the vapour; oxygen and nitrogen form no volatile iodides and stay behind.`,
        t`The vapour meets a tungsten filament heated electrically to a high temperature.`,
        t`There $\ce{TiI4 -> Ti + 2I2}$: pure Ti builds up on the filament, and the iodine is used again.`,
      ],
      answer: t`Ti leaves the impurities as volatile $\ce{TiI4}$, which splits on the hot filament into pure Ti and iodine`,
    },
    visualSpec: t`A cut-away blast furnace where the charge sinks and hot gases rise; tap a zone to see its temperature and the reaction that happens there.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks heat alone does the work: heating the ore gives the metal, melts the gangue away and purifies it.",
      remediation: "Heat speeds reactions but removes nothing by itself. A reducing agent (CO) takes the oxygen, a flux takes the gangue, and refining purifies the metal.",
      fallback: { kind: "ext", topic: "redox reactions (Std XI Chemistry)" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks solid coke does the furnace's chemistry itself, reducing the ore and clearing the gangue.",
      remediation: "Coke mainly burns at the bottom, giving heat and carbon monoxide. The rising CO is the chief reducing agent; limestone, not coke, removes the gangue.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks the blast furnace is hottest at the top, where the charge goes in.",
      remediation: "Hot air is blown in near the bottom, where coke burns at about 2000 K. The gases cool as they rise, so the top is about 500 K and the zone of reduction about 900 K.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks more carbon makes iron softer and more malleable.",
      remediation: "Carbon makes iron harder and more brittle. Cast iron (about 4% carbon) is hard and brittle; wrought iron (below 0.2%) is very soft.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks the blast furnace gives pure iron, and carbon is added only later to make steel.",
      remediation: "Molten iron dissolves carbon, silicon, manganese, phosphorus and sulphur, so pig iron holds about 4% carbon. Steel is made by removing carbon down to 0.2 to 2%.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Confuses the flux with the gangue: thinks silica is added, and the gangue is removed only at the end.",
      remediation: "The gangue is the unwanted silica in the ore; most of it is removed first, by concentration. The flux is what is added, limestone, to carry the rest off as slag.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (xii)" },
      stem: t`Haematite is smelted in a blast furnace; its gangue is mostly silica. Which substance is the flux, and what does it do?`,
      verify: { kind: "value", inputs: {  }, params: { q: "flux" } },
      options: [
        { key: "A", text: t`Silica, $\ce{SiO2}$: it turns the limestone into slag, $\ce{CaSiO3}$`, correct: false, misconceptionId: "C06-M6", value: "silica_flux" },
        { key: "B", text: t`No flux is needed: the heat of the furnace melts the silica away`, correct: false, misconceptionId: "C06-M1", value: "no_flux_heat" },
        { key: "C", text: t`Coke: as it burns, it carries the silica off as a gas`, correct: false, misconceptionId: "C06-M2", value: "coke_flux" },
        { key: "D", text: t`Limestone, $\ce{CaCO3}$: its $\ce{CaO}$ turns the silica into slag, $\ce{CaSiO3}$`, correct: true, value: "limestone_flux" },
      ],
      solution: {
        steps: [
          t`The gangue, silica, is an acidic oxide, so a basic flux is needed.`,
          t`Limestone decomposes in the furnace: $\ce{CaCO3 -> CaO + CO2}$.`,
          t`$\ce{CaO + SiO2 -> CaSiO3}$: the silica leaves as fusible slag.`,
          t`So limestone is the flux; its $\ce{CaO}$ turns the silica into slag.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#28" },
      stem: t`In the blast furnace, what reduces most of the $\ce{Fe2O3}$ to iron, and where?`,
      verify: { kind: "value", inputs: {  }, params: { q: "reduce" } },
      options: [
        { key: "A", text: t`Carbon monoxide, near the top of the furnace, at about 900 K`, correct: true, value: "co_top_900" },
        { key: "B", text: t`Solid coke, near the top of the furnace, at about 900 K`, correct: false, misconceptionId: "C06-M2", value: "coke_top_900" },
        { key: "C", text: t`Carbon monoxide, near the top of the furnace, at about 2000 K`, correct: false, misconceptionId: "C06-M3", value: "co_top_2000" },
        { key: "D", text: t`No reducing agent: at about 2000 K heat alone splits the oxide`, correct: false, misconceptionId: "C06-M1", value: "heat_alone_2000" },
      ],
      solution: {
        steps: [
          t`Coke burns at the bottom of the furnace, at about 2000 K, to carbon monoxide.`,
          t`The CO rises and cools; in the zone of reduction near the top it is about 900 K.`,
          t`There $\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$ reduces most of the ore.`,
          t`So carbon monoxide does it, near the top, at about 900 K.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#25" },
      stem: t`Which reaction mainly takes place in the zone of reduction of the blast furnace?`,
      verify: { kind: "value", inputs: {  }, params: { q: "zone" } },
      options: [
        { key: "A", text: t`$\ce{Fe2O3 + 3C -> 2Fe + 3CO}$`, correct: false, misconceptionId: "C06-M2", value: "eq_coke" },
        { key: "B", text: t`$\ce{2Fe2O3 -> 4Fe + 3O2}$`, correct: false, misconceptionId: "C06-M1", value: "eq_heat" },
        { key: "C", text: t`$\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$`, correct: true, value: "eq_co" },
        { key: "D", text: t`$\ce{2C + O2 -> 2CO}$`, correct: false, misconceptionId: "C06-M3", value: "eq_burn" },
      ],
      solution: {
        steps: [
          t`The zone of reduction lies near the top, at about 900 K; coke burns lower down, in the zone of combustion.`,
          t`Carbon monoxide rising from below is the chief reducing agent there.`,
          t`So the main reaction is $\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (iii)" },
      stem: t`Molten iron from the blast furnace is run into moulds as pig iron. Which statement about pig iron is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "pig" } },
      options: [
        { key: "A", text: t`It is pure iron, because the furnace's heat burns off every impurity`, correct: false, misconceptionId: "C06-M1", value: "pig_pure_heat" },
        { key: "B", text: t`It holds about 4% carbon, so it is hard and brittle`, correct: true, value: "pig_4c_hard" },
        { key: "C", text: t`It is pure iron; carbon is added only later, to make steel`, correct: false, misconceptionId: "C06-M5", value: "pig_pure_steel_most" },
        { key: "D", text: t`It holds about 4% carbon, so it is soft and malleable`, correct: false, misconceptionId: "C06-M4", value: "pig_4c_soft" },
      ],
      solution: {
        steps: [
          t`In the zone of fusion the iron melts and dissolves carbon and other elements.`,
          t`So pig iron holds about 4% carbon.`,
          t`Carbon makes iron harder and less malleable, so pig iron is hard and brittle.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (ix)" },
      stem: t`In what order are the main steps of metallurgy carried out, after mining and crushing?`,
      verify: { kind: "value", inputs: {  }, params: { q: "steps" } },
      options: [
        { key: "A", text: t`Concentration, roasting (which gives the metal), refining`, correct: false, misconceptionId: "C06-M1", value: "conc_roast_ref" },
        { key: "B", text: t`Roasting, reduction, concentration, refining`, correct: false, misconceptionId: "C06-M6", value: "roast_red_conc_ref" },
        { key: "C", text: t`Concentration, roasting, reduction (the metal comes out pure)`, correct: false, misconceptionId: "C06-M5", value: "conc_roast_red" },
        { key: "D", text: t`Concentration, roasting, reduction, refining`, correct: true, value: "conc_roast_red_ref" },
      ],
      solution: {
        steps: [
          t`First the gangue is removed: concentration.`,
          t`Roasting then turns the ore into the oxide and drives off volatile impurities.`,
          t`Only reduction removes the oxygen to give the metal, which is still impure.`,
          t`So the order is concentration, roasting, reduction, refining.`,
        ],
      },
    },
  ],
};
