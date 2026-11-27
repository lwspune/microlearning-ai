import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Plant Water Relation prerequisite graph (Balbharati Biology Std XII, Ch.6): soil water and the properties of water, diffusion, osmosis and imbibition, DPD and water potential, absorption by roots, transpiration, stomata, ascent of sap, and transport of minerals and food.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/plant-water-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Water
  {
    id: "C01", slug: "soil-water", title: "Water in the soil and its properties", group: "Water", tier: "core",
    oneLiner: t`Of gravitational, capillary, hygroscopic and combined water, only capillary water is available to roots; cohesion and adhesion give water its pull and surface tension`,
    prereqs: [], ext: [], sources: [S("Properties of Water"), S("Water Available to Roots for Absorption")],
  },
  {
    id: "C02", slug: "diffusion-osmosis", title: "Diffusion, osmosis and imbibition", group: "Water", tier: "core",
    oneLiner: t`Osmosis moves water through a semipermeable membrane into a hypertonic solution; a cell in a hypertonic solution plasmolyses; imbibition swells dry colloids such as wood`,
    prereqs: [], ext: [], sources: [S("Absorption of Water by Roots from Soil"), S("Plasmolysis")],
  },
  {
    id: "C03", slug: "dpd-water-potential", title: "Osmotic pressure, turgor and DPD", group: "Water", tier: "core",
    oneLiner: t`DPD = O.P. − T.P.; water moves to the cell with higher DPD; a fully turgid cell has DPD zero; water potential is DPD with its sign reversed`,
    prereqs: ["C02"], ext: [], sources: [S("Water Potential")],
  },
  // Uptake
  {
    id: "C04", slug: "root-absorption", title: "Absorption of water by roots", group: "Uptake", tier: "core",
    oneLiner: t`Root hairs take in capillary water, mostly passively by transpiration pull; water crosses the root by the apoplast (walls) and symplast (plasmodesmata) pathways`,
    prereqs: ["C01", "C03"], ext: [], sources: [S("Water Absorbing Organ"), S("Mechanism of Absorption of Water"), S("Path of Water Across the Root")],
  },
  // Water loss
  {
    id: "C05", slug: "transpiration", title: "Transpiration", group: "Water loss", tier: "core",
    oneLiner: t`Loss of water vapour from aerial parts, mostly through stomata; a necessary evil, since open stomata are needed for gas exchange; it rises at low air pressure and falls in humid air`,
    prereqs: ["C01"], ext: [], sources: [S("Transpiration")],
  },
  {
    id: "C06", slug: "stomata", title: "Stomata and their movement", group: "Water loss", tier: "core",
    oneLiner: t`Guard cells (kidney-shaped in dicots, dumbbell in grasses) open the pore when turgid: starch turns to sugar and K⁺ enters by day; sugar back to starch closes it`,
    prereqs: ["C03", "C05"], ext: [], sources: [S("Structure of Stomatal Apparatus")],
  },
  // Transport
  {
    id: "C07", slug: "ascent-of-sap", title: "Ascent of sap", group: "Transport", tier: "core",
    oneLiner: t`Root pressure (+1 to +2 bars) lifts water only 10–20 m and capillarity less; Dixon and Joly's cohesion–tension (transpiration pull) theory explains tall trees`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Translocation of Water")],
  },
  {
    id: "C08", slug: "minerals-food-transport", title: "Transport of minerals and food", group: "Transport", tier: "core",
    oneLiner: t`Minerals enter as ions, actively and independently of water; food moves in phloem as sucrose, radially (phloem to pith) and tangentially (phloem to cortex)`,
    prereqs: ["C04"], ext: [], sources: [S("Transport of Mineral Ions"), S("Transport of Food")],
  },
];
