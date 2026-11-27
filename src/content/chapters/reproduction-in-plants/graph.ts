import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Reproduction in Lower and Higher Plants prerequisite graph (Balbharati Biology Std XII, Ch.1): asexual and vegetative reproduction, the flower, male and female gametophytes, pollination, double fertilization, endosperm, embryo, seed and fruit, apomixis and polyembryony.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/repro-plants-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Asexual reproduction
  {
    id: "C01", slug: "asexual-reproduction", title: "Asexual reproduction and vegetative propagation", group: "Asexual reproduction", tier: "core",
    oneLiner: t`One parent, no gametes: offspring are clones; plants multiply by runners, rhizomes, bulbs, tubers and leaf buds, or by cutting, grafting, layering and micropropagation`,
    prereqs: [], ext: [], sources: [S("Asexual Reproduction")],
  },
  // Sexual reproduction
  {
    id: "C02", slug: "flower-parts", title: "The flower and its sex organs", group: "Sexual reproduction", tier: "core",
    oneLiner: t`The androecium (stamens) makes pollen in anthers; the gynoecium (pistil) has a stigma, a style and an ovary holding ovules`,
    prereqs: [], ext: [], sources: [S("Sexual Reproduction")],
  },
  // Male gametophyte
  {
    id: "C03", slug: "microsporogenesis", title: "Microsporogenesis and the pollen grain", group: "Male gametophyte", tier: "core",
    oneLiner: t`Microspore mother cells in the anther divide by meiosis into tetrads, fed by the tapetum; the pollen wall is a sporopollenin exine with germ pores over a cellulose intine`,
    prereqs: ["C02"], ext: [], sources: [S("Microsporogenesis")],
  },
  {
    id: "C04", slug: "male-gametophyte", title: "The male gametophyte", group: "Male gametophyte", tier: "core",
    oneLiner: t`The pollen grain divides into a large vegetative (tube) cell and a small generative cell, which forms two male gametes; one meiosis gives four pollen grains, eight gametes`,
    prereqs: ["C03"], ext: [], sources: [S("Microsporogenesis")],
  },
  // Female gametophyte
  {
    id: "C05", slug: "ovule-megasporogenesis", title: "The ovule and megasporogenesis", group: "Female gametophyte", tier: "core",
    oneLiner: t`An anatropous ovule has integuments, micropyle, nucellus, chalaza and funicle; its megaspore mother cell divides by meiosis into a linear tetrad, one megaspore surviving`,
    prereqs: ["C02"], ext: [], sources: [S("Structure of Anatropous Ovule"), S("Megasporogenesis")],
  },
  {
    id: "C06", slug: "embryo-sac", title: "The embryo sac", group: "Female gametophyte", tier: "core",
    oneLiner: t`Three mitoses of the functional megaspore give a 7-celled, 8-nucleate embryo sac: the egg and two synergids, three antipodals, and a central cell with two polar nuclei`,
    prereqs: ["C05"], ext: [], sources: [S("Megasporogenesis")],
  },
  // Pollination
  {
    id: "C07", slug: "pollination", title: "Pollination and its agents", group: "Pollination", tier: "core",
    oneLiner: t`Autogamy, geitonogamy and xenogamy; wind, water and animals carry pollen, and flowers suit their agent: light dry pollen for wind, sticky pollen and nectar for insects`,
    prereqs: ["C04"], ext: [], sources: [S("Pollination")],
  },
  {
    id: "C08", slug: "outbreeding-devices", title: "Outbreeding devices and pollen-pistil interaction", group: "Pollination", tier: "core",
    oneLiner: t`Unisexuality, dichogamy, herkogamy and self-incompatibility prevent self-pollination; the stigma recognises compatible pollen and lets only it grow a tube`,
    prereqs: ["C07"], ext: [], sources: [S("Outbreeding Devices"), S("Pollen-Pistil Interaction")],
  },
  // Fertilization
  {
    id: "C09", slug: "double-fertilization", title: "Double fertilization", group: "Fertilization", tier: "core",
    oneLiner: t`The pollen tube enters through the micropyle and a synergid; one male gamete fuses with the egg (2n zygote), the other with the secondary nucleus (3n primary endosperm nucleus)`,
    prereqs: ["C06", "C08"], ext: [], sources: [S("Double Fertilization")],
  },
  // After fertilization
  {
    id: "C10", slug: "endosperm-embryo", title: "Endosperm and embryo", group: "After fertilization", tier: "core",
    oneLiner: t`The primary endosperm nucleus forms nuclear, cellular or helobial endosperm; the zygote grows into a dicot embryo (two cotyledons) or a monocot one (scutellum, coleoptile, coleorhiza)`,
    prereqs: ["C09"], ext: [], sources: [S("Development of Endosperm"), S("Development of Embryo")],
  },
  {
    id: "C11", slug: "seed-fruit", title: "Seeds and fruits", group: "After fertilization", tier: "core",
    oneLiner: t`The ovule becomes the seed (integuments the testa and tegmen, the funicle's scar the hilum) and the ovary the fruit; seeds are endospermic or non-endospermic`,
    prereqs: ["C10"], ext: [], sources: [S("Seed and Fruit Development")],
  },
  {
    id: "C12", slug: "apomixis-polyembryony", title: "Apomixis, polyembryony and parthenocarpy", group: "After fertilization", tier: "core",
    oneLiner: t`Apomixis forms seeds without fertilization; polyembryony gives several embryos in one seed (nucellar in Citrus); parthenocarpy gives seedless fruits`,
    prereqs: ["C11"], ext: [], sources: [S("Apomixis"), S("Polyembryony"), S("Parthenocarpy")],
  },
];
