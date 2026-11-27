import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Cell Structure and Organization prerequisite graph (Balbharati Biology Std XI, Ch.5): prokaryotic, eukaryotic, plant and animal cells, the fluid mosaic membrane, the cell wall and plasmodesmata, the endomembrane system, mitochondria and plastids, and the nucleus.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/cell-structure-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Cells
  {
    id: "C01", slug: "cell-types", title: "Kinds of cells", group: "Cells", tier: "core",
    oneLiner: t`Prokaryotic cells have no nuclear membrane and 70S ribosomes; eukaryotic cells have a nucleus and 80S ribosomes; plant cells add a cellulose wall, plastids and a large vacuole, and usually lack centrioles`,
    prereqs: [], ext: [], sources: [S("Prokaryotic and Eukaryotic Cells")],
  },
  // Boundaries
  {
    id: "C02", slug: "cell-membrane", title: "The cell membrane", group: "Boundaries", tier: "core",
    oneLiner: t`Singer and Nicolson's fluid mosaic model: proteins float in a fluid lipid bilayer, with carbohydrates as glycoproteins and glycolipids; the membrane is selectively permeable`,
    prereqs: ["C01"], ext: [], sources: [S("Cell Membrane and Cell Wall")],
  },
  {
    id: "C03", slug: "cell-wall", title: "The cell wall and plasmodesmata", group: "Boundaries", tier: "core",
    oneLiner: t`Plant, algal and prokaryotic cells have walls (cellulose in plants, peptidoglycan in bacteria); walls grow in area by intussusception and in thickness by apposition; plasmodesmata link plant cells`,
    prereqs: ["C01"], ext: [], sources: [S("Cell Membrane and Cell Wall")],
  },
  // Organelles
  {
    id: "C04", slug: "endomembrane-system", title: "The endomembrane system", group: "Organelles", tier: "core",
    oneLiner: t`Rough ER (with ribosomes) makes proteins and smooth ER makes lipids; proteins pass in vesicles to the Golgi (cis face in, trans face out) and on to lysosomes, which digest worn-out parts`,
    prereqs: ["C02"], ext: [], sources: [S("Endomembrane System")],
  },
  {
    id: "C05", slug: "mitochondria-plastids", title: "Mitochondria and plastids", group: "Organelles", tier: "core",
    oneLiner: t`Mitochondria make ATP by aerobic respiration on cristae with oxysomes; plastids are leucoplasts (storage), chromoplasts (colour) and chloroplasts (photosynthesis); both carry their own naked circular DNA`,
    prereqs: ["C02"], ext: [], sources: [S("Mitochondria and Plastids")],
  },
  {
    id: "C06", slug: "nucleus", title: "The nucleus", group: "Organelles", tier: "core",
    oneLiner: t`A double nuclear envelope, continuous with the ER, encloses nucleoplasm (karyolymph), chromatin and a membrane-less nucleolus of rRNA and proteins that makes ribosomes`,
    prereqs: ["C04"], ext: [], sources: [S("Nucleus and Chromatin")],
  },
];
