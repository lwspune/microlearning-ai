import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Inheritance and Variation prerequisite graph (Balbharati Biology Std XII, Ch.3): Mendel's crosses and laws, test crosses, deviations from Mendel, chromosomes, linkage, sex determination, sex-linked inheritance and genetic disorders.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/inheritance-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Mendel's work
  {
    id: "C01", slug: "mendel-terms", title: "Mendel's experiments and genetic terms", group: "Mendel's work", tier: "core",
    oneLiner: t`Mendel crossed garden peas with seven pairs of contrasting traits; a gene's alternative forms are alleles, giving genotypes (TT, Tt, tt) and phenotypes (tall, dwarf)`,
    prereqs: [], ext: [], sources: [S("Chromosomes and Mechanism of Inheritance"), S("Genetic Terminology")],
  },
  {
    id: "C02", slug: "monohybrid-cross", title: "Monohybrid cross, dominance and segregation", group: "Mendel's work", tier: "core",
    oneLiner: t`Tall × dwarf gives all-tall F₁; selfing gives 3 tall : 1 dwarf (genotypes 1 : 2 : 1); alleles segregate into gametes, one each, so gametes are pure`,
    prereqs: ["C01"], ext: [], sources: [S("Mendel's Laws of Inheritance")],
  },
  {
    id: "C03", slug: "dihybrid-cross", title: "Dihybrid cross and independent assortment", group: "Mendel's work", tier: "core",
    oneLiner: t`RRYY × rryy gives RrYy, whose four kinds of gamete give 16 combinations: 9 : 3 : 3 : 1 phenotypes and 9 genotypes; genes on different chromosomes assort independently`,
    prereqs: ["C02"], ext: [], sources: [S("Mendel's Laws of Inheritance")],
  },
  {
    id: "C04", slug: "test-cross", title: "Back cross and test cross", group: "Mendel's work", tier: "core",
    oneLiner: t`A test cross is with the homozygous recessive: all dominant offspring mean a homozygous parent, 1 : 1 a heterozygous one; a back cross is with either parent`,
    prereqs: ["C02"], ext: [], sources: [S("Back Cross and Test Cross")],
  },
  // Beyond Mendel
  {
    id: "C05", slug: "incomplete-codominance", title: "Incomplete dominance and codominance", group: "Beyond Mendel", tier: "core",
    oneLiner: t`In incomplete dominance the heterozygote is intermediate (pink *Mirabilis*, 1 : 2 : 1); in codominance both alleles show (roan cattle, blood group AB)`,
    prereqs: ["C02"], ext: [], sources: [S("Deviations from Mendel's Findings")],
  },
  {
    id: "C06", slug: "multiple-alleles-pleiotropy", title: "Multiple alleles and pleiotropy", group: "Beyond Mendel", tier: "core",
    oneLiner: t`Three alleles Iᴬ, Iᴮ and i give six genotypes and four blood groups; one gene with many effects (sickle-cell anaemia) is pleiotropy, changing 3 : 1 to 1 : 2`,
    prereqs: ["C05"], ext: [], sources: [S("Deviations from Mendel's Findings")],
  },
  // Chromosomes
  {
    id: "C07", slug: "chromosomes", title: "Chromosome structure and types", group: "Chromosomes", tier: "core",
    oneLiner: t`Chromatids joined at the centromere (primary constriction), with telomeres at the ends; metacentric, submetacentric, acrocentric and telocentric; autosomes and sex chromosomes (allosomes)`,
    prereqs: [], ext: [], sources: [S("Chromosomes")],
  },
  {
    id: "C08", slug: "linkage-crossing-over", title: "The chromosomal theory, linkage and crossing over", group: "Chromosomes", tier: "core",
    oneLiner: t`Sutton and Boveri: chromosomes carry genes; genes on one chromosome are linked; crossing over in pachytene swaps segments of non-sister chromatids, more often between distant genes`,
    prereqs: ["C03", "C07"], ext: [], sources: [S("Chromosomal Theory of Inheritance"), S("Linkage and Crossing Over")],
  },
  // Sex and inheritance
  {
    id: "C09", slug: "sex-determination", title: "Sex determination", group: "Sex and inheritance", tier: "core",
    oneLiner: t`Humans are XX–XY, so the father's sperm decides the sex; grasshoppers XX–XO, birds ZW–ZZ; honey bee drones come from unfertilized eggs (haplo-diploidy)`,
    prereqs: ["C07"], ext: [], sources: [S("Sex Determination")],
  },
  {
    id: "C10", slug: "sex-linked-inheritance", title: "Sex-linked inheritance", group: "Sex and inheritance", tier: "core",
    oneLiner: t`X-linked recessive traits (colour blindness, haemophilia) show in males with one X and pass criss-cross through daughters; Y-linked (holandric) genes go father to son`,
    prereqs: ["C02", "C09"], ext: [], sources: [S("Sex Linked Inheritance")],
  },
  {
    id: "C11", slug: "genetic-disorders", title: "Genetic disorders", group: "Sex and inheritance", tier: "core",
    oneLiner: t`Non-disjunction gives aneuploids: Down's (trisomy 21, 47), Turner's (44 + XO), Klinefelter's (44 + XXY); PKU and sickle-cell anaemia are autosomal recessive`,
    prereqs: ["C07"], ext: [], sources: [S("Genetic Disorders"), S("Autosomal Inheritance")],
  },
];
