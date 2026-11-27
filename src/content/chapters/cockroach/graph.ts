import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Study of Animal Type: Cockroach prerequisite graph (Balbharati Biology Std XI, Ch.11): the systematic position and body of the cockroach, its mouthparts and alimentary canal, tracheal respiration, ganglionated nervous system and compound eye, open circulation, and the female reproductive system.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/cockroach-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Body plan
  {
    id: "C01", slug: "cockroach-body", title: "Classification and external features", group: "Body plan", tier: "core",
    oneLiner: t`*Periplaneta americana* is an arthropod (jointed legs, chitinous exoskeleton) of class Insecta; each segment has a dorsal tergum, and only the male has anal styles`,
    prereqs: [], ext: [], sources: [S("Habit, Habitat and Systematic Position"), S("External Morphology")],
  },
  // Digestion
  {
    id: "C02", slug: "mouthparts-foregut", title: "Mouthparts and foregut", group: "Digestion", tier: "core",
    oneLiner: t`Chewing and biting mouthparts; saliva enters at the base of the hypopharynx; the foregut is pharynx, oesophagus, crop (stores food) and gizzard (teeth crush, bristles filter)`,
    prereqs: ["C01"], ext: [], sources: [S("External Morphology"), S("Digestive System")],
  },
  {
    id: "C03", slug: "midgut-hindgut", title: "Midgut and hindgut", group: "Digestion", tier: "core",
    oneLiner: t`The mesenteron (stomach and hepatic caeca) digests and absorbs; Malpighian tubules open at the midgut-hindgut junction; the colon and rectal pads take back water`,
    prereqs: ["C02"], ext: [], sources: [S("Digestive System")],
  },
  // Respiration
  {
    id: "C04", slug: "tracheal-respiration", title: "Tracheal respiration", group: "Respiration", tier: "core",
    oneLiner: t`Ten pairs of spiracles open into chitin-ringed tracheae and fine tracheoles that carry air straight to the tissues, with no help from blood`,
    prereqs: ["C01"], ext: [], sources: [S("Respiratory System")],
  },
  // Control
  {
    id: "C05", slug: "nervous-system-eye", title: "Nervous system and compound eye", group: "Control", tier: "core",
    oneLiner: t`A ventral, solid, ganglionated system: the supra-oesophageal ganglia are the brain, the ventral cord has nine ganglia, and the compound eye of ommatidia gives a mosaic image`,
    prereqs: ["C01"], ext: [], sources: [S("Nervous System and Sense Organs")],
  },
  // Circulation
  {
    id: "C06", slug: "open-circulation", title: "Open circulation", group: "Circulation", tier: "core",
    oneLiner: t`Colourless haemolymph bathes the organs in three sinuses; the 13-chambered dorsal heart takes blood in through ostia in diastole and pumps it forward in systole`,
    prereqs: ["C01"], ext: [], sources: [S("Circulatory System")],
  },
  // Reproduction
  {
    id: "C07", slug: "female-reproduction", title: "Female reproductive system", group: "Reproduction", tier: "core",
    oneLiner: t`Two ovaries of eight ovarioles lead by oviducts to the genital chamber, where eggs are fertilized by sperms from the spermatheca; colleterial glands form the ootheca`,
    prereqs: ["C01"], ext: [], sources: [S("Reproductive System")],
  },
];
