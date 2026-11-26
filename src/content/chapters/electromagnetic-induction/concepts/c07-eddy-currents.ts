import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`An airport metal detector finds a coin in your pocket, though a coin is not a magnet and carries no current. What does it sense?`,
    reveal: t`Eddy currents. The detector's coil carries an alternating current, so its field keeps changing. That changing flux drives loops of current inside any metal, and their own field changes the flux through the detector's coil, which it notices.`,
  },
  explanation: {
    intuition: [
      t`Faraday's law needs only a changing flux through a closed path, not a coil of wire.`,
      t`A solid piece of metal holds countless closed paths, one inside another.`,
      t`So a changing flux through a metal block drives loops of current round inside it.`,
      t`These swirling loops are **eddy currents**, named after the eddies in a stream.`,
      t`By Lenz's law they oppose the change that makes them, and they heat the metal.`,
    ],
    formal: [
      {
        title: "Eddy currents",
        points: [
          t`**Eddy currents** (Foucault currents) are induced currents that circulate in closed loops in the body of a solid conductor.`,
          t`They appear when the field through the conductor changes, or the conductor moves through a non-uniform field.`,
          t`A conductor at rest in a steady field has no change of flux, so no eddy currents.`,
          t`They flow in the sense that opposes the change, so they oppose any relative motion.`,
          t`A faster change gives a larger emf round each loop, so larger eddy currents.`,
          t`The metal has resistance, so eddy currents turn energy into heat.`,
        ],
      },
      {
        title: "Damping and braking",
        points: [
          t`A copper-disc pendulum swinging between magnet poles stops within a few swings: **electromagnetic damping**.`,
          t`Copper is not attracted by a magnet; the retarding force comes from the eddy currents.`,
          t`The pendulum's mechanical energy is not destroyed: it becomes heat in the disc.`,
          t`A galvanometer coil is wound on a metal frame, so eddy currents stop its swings and the pointer settles at once (**dead-beat**).`,
          t`**Electromagnetic brakes**: a strong field across a metal disc on a train's axle slows the wheels without contact.`,
          t`The braking force falls with the speed and vanishes at rest, so these brakes cannot hold a parked train.`,
        ],
      },
      {
        title: "Heating and sensing",
        points: [
          t`**Induction furnace**: a rapidly alternating current in a coil induces large eddy currents in metal inside it, melting the metal.`,
          t`The faster the current alternates, the faster the flux changes, and the greater the heating.`,
          t`An induction cooktop heats a metal pan the same way; its glass top, an insulator, stays cool.`,
          t`**Metal detectors** sense the eddy currents their alternating field drives in hidden metal.`,
          t`**Speedometers and energy meters** use the drag of eddy currents on a moving aluminium disc.`,
          t`In an **induction motor**, eddy currents in the rotor, pushed by a rotating field, turn it.`,
        ],
      },
      {
        title: "Unwanted eddy currents",
        points: [
          t`In transformer and motor cores, eddy currents only waste energy as heat.`,
          t`So a core is **laminated**: built of thin iron sheets, insulated from one another.`,
          t`The sheets lie along the flux, which runs through them as freely as through a solid block.`,
          t`The insulation breaks the large loops the currents would follow across the core.`,
          t`Each current is confined to a thin sheet, so the eddy currents and the heat they waste fall sharply.`,
          t`Slots cut deep into a metal plate break up its eddy currents the same way.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two pendulums swing between the poles of the same magnet: a solid copper plate, and the same plate with many deep slots cut into it. Which swings for longer, and why?`,
      steps: [
        t`As each plate swings into and out of the field, the flux through it changes, so emfs are induced in both.`,
        t`In the solid plate, eddy currents circulate in large loops of low resistance: they are large, and they strongly oppose the motion.`,
        t`The slots cut those loops; current can circulate only round each narrow strip, so the eddy currents are much smaller.`,
        t`The slotted plate is damped far less, so it swings for longer.`,
      ],
      answer: t`The slotted plate, since its slots break up the eddy currents.`,
    },
    visualSpec: t`Swing a solid and a slotted copper plate between magnet poles and watch the eddy-current loops and how soon each stops.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Thinks a current is induced only in a coil of wire, never in a solid piece of metal.",
      remediation: "Faraday's law holds round any closed path. A solid conductor holds countless closed paths, so a changing flux drives eddy currents round inside it.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks a steady field drives eddy currents in a conductor at rest.",
      remediation: "An emf is induced only while the flux changes. A conductor at rest in a steady field carries no eddy currents.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M3",
      mistake: "Thinks a slower change induces more current, since it has longer to act.",
      remediation: "The induced emf is the rate of change of flux. A slower change gives a smaller emf, so smaller eddy currents.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M4",
      mistake: "Mixes up eddy-current forces with magnetic attraction.",
      remediation: "Copper and aluminium are not attracted by a magnet. The force on a moving copper disc comes from the eddy currents induced in it, which oppose its motion.",
      fallback: { kind: "ext", topic: "magnetic materials (Magnetic Materials, Ch.11)" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks the pendulum's mechanical energy is destroyed or stored in the magnet.",
      remediation: t`Energy is conserved. The eddy currents flow through the disc's resistance, so all the mechanical energy, $mgh$, becomes heat in the disc.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks the insulating layers of a laminated core block the flux.",
      remediation: "The sheets lie along the flux, which runs through them freely. The insulation only cuts the loops the eddy currents would follow.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks thin sheets, having more resistance, waste more heat.",
      remediation: "Each sheet confines its eddy current to a thin path round a small area, so the emf and current are much smaller. The heat wasted falls sharply.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Uses the height in $\mathrm{cm}$ as if it were in metres.`,
      remediation: t`$5.0\ \mathrm{cm}$ $= 0.050\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Forgets $g$ in the potential energy.`,
      remediation: t`Potential energy is $mgh$, with $g = 9.8\ \mathrm{m/s^2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (iii)" },
      stem: t`A thick, solid copper block lies at rest near an electromagnet. When are eddy currents induced in the block?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "when" } },
      options: [
        { key: "A", text: t`Never: a solid block is not a coil of wire, so no current can be induced in it`, correct: false, misconceptionId: "C07-M1", value: "never_block" },
        { key: "B", text: t`Only if the block is made of iron, which the magnet attracts`, correct: false, misconceptionId: "C07-M4", value: "iron_only" },
        { key: "C", text: t`Only while the magnetic field through the block is changing`, correct: true, value: "changing" },
        { key: "D", text: t`Whenever a field passes through the block, even a steady one`, correct: false, misconceptionId: "C07-M2", value: "steady" },
      ],
      solution: {
        steps: [
          t`An emf is induced round a closed path only while the flux through it changes.`,
          t`A solid block holds many closed paths, and copper conducts, though a magnet does not attract it.`,
          t`So eddy currents flow only while the field through the block is changing.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (iv)" },
      stem: t`The copper disc of a pendulum swings between the poles of a strong magnet, and the pendulum comes to rest after only a few swings. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pend" } },
      options: [
        { key: "A", text: t`The magnet attracts the copper and pulls the disc to a stop between its poles`, correct: false, misconceptionId: "C07-M4", value: "attract" },
        { key: "B", text: t`No current can flow in a solid disc, so it is slowed by the air near the magnet`, correct: false, misconceptionId: "C07-M1", value: "air_only" },
        { key: "C", text: t`The steady field drives currents through the disc even at rest, clamping it in place`, correct: false, misconceptionId: "C07-M2", value: "clamp" },
        { key: "D", text: t`The changing flux induces eddy currents in the disc, and these oppose its motion`, correct: true, value: "eddy_oppose" },
      ],
      solution: {
        steps: [
          t`As the disc swings into and out of the field, the flux through it keeps changing.`,
          t`This induces eddy currents in the copper; by Lenz's law they oppose the disc's motion.`,
          t`So the swings die out quickly; copper itself is not attracted by the magnet.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (iv)" },
      stem: t`A copper-disc pendulum of mass $0.20\ \mathrm{kg}$ is released from rest $5.0\ \mathrm{cm}$ above its lowest point. It swings between the poles of a magnet until it stops at its lowest point. Ignoring air resistance, how much heat is produced in the disc?`,
      verify: { kind: "value", inputs: { m: "0.20", h_cm: "5.0" }, params: { ask: "heat" } },
      options: [
        { key: "A", text: t`$0.01\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M9", value: "0.0100000000000000" },
        { key: "B", text: t`$0.098\ \mathrm{J}$`, correct: true, value: "0.0980000000000000" },
        { key: "C", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M5", value: "0" },
        { key: "D", text: t`$9.8\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M8", value: "9.80000000000000" },
      ],
      solution: {
        steps: [
          t`The pendulum loses all its potential energy, $mgh$, and ends at rest.`,
          t`With no air resistance, eddy currents turn all of it into heat in the disc.`,
          t`Heat $= 0.20 \times 9.8 \times 0.050$ $= 0.098\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`An electromagnetic brake on a train sends a strong magnetic field through a metal disc on each axle. How does its braking force change as the train slows down?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "brake" } },
      options: [
        { key: "A", text: t`It weakens as the train slows and vanishes at rest, so it cannot hold a parked train`, correct: true, value: "fades" },
        { key: "B", text: t`It stays the same right down to rest, so it can hold a parked train still`, correct: false, misconceptionId: "C07-M2", value: "holds" },
        { key: "C", text: t`It grows as the train slows, since the disc spends longer in the field`, correct: false, misconceptionId: "C07-M3", value: "grows" },
        { key: "D", text: t`There is no braking force: the disc is not a coil, so no current is induced in it`, correct: false, misconceptionId: "C07-M1", value: "no_force" },
      ],
      solution: {
        steps: [
          t`The faster the disc turns, the faster the flux through its parts changes, and the larger the eddy currents.`,
          t`So the braking force falls as the train slows.`,
          t`At rest the flux no longer changes: no eddy currents, no braking force.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (iii)" },
      stem: t`A transformer core is built of thin iron sheets, insulated from one another, instead of one solid block of iron. What does this do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lam" } },
      options: [
        { key: "A", text: t`The insulation keeps the flux out of the core, so less eddy current is induced`, correct: false, misconceptionId: "C07-M6", value: "blocks_flux" },
        { key: "B", text: t`It increases the eddy-current heating, since thin sheets have a larger resistance`, correct: false, misconceptionId: "C07-M7", value: "more_heat" },
        { key: "C", text: t`It only saves weight: no current is induced in a solid core, which has no coil of wire`, correct: false, misconceptionId: "C07-M1", value: "weight_only" },
        { key: "D", text: t`It breaks up the paths of the eddy currents, so far less energy is wasted as heat`, correct: true, value: "cuts_paths" },
      ],
      solution: {
        steps: [
          t`The sheets lie along the flux, so the flux runs through the core as before.`,
          t`The insulation breaks the large loops eddy currents would follow across a solid core.`,
          t`The eddy currents are much smaller, so far less energy is wasted as heat.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (iii)" },
      stem: t`In an induction furnace, a lump of metal sits inside a coil that carries an alternating current. How is the metal heated?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "furnace" } },
      options: [
        { key: "A", text: t`By eddy currents induced in the metal; the faster the current alternates, the greater the heating`, correct: true, value: "eddy_fast" },
        { key: "B", text: t`By eddy currents induced in the metal; the slower the current alternates, the greater the heating`, correct: false, misconceptionId: "C07-M3", value: "eddy_slow" },
        { key: "C", text: t`By heat flowing in from the hot coil: no current can be induced in a lump of metal`, correct: false, misconceptionId: "C07-M1", value: "conduction" },
        { key: "D", text: t`By eddy currents induced in the metal; a steady direct current in the coil would heat it as well`, correct: false, misconceptionId: "C07-M2", value: "dc_same" },
      ],
      solution: {
        steps: [
          t`The alternating current makes the flux through the metal change all the time.`,
          t`That drives large eddy currents in the metal, which heat it through its own resistance.`,
          t`Faster alternation means a faster change of flux, larger currents and more heating; a steady current would induce none.`,
        ],
      },
    },
  ],
};
