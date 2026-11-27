import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Reproduction in Lower and Higher Animals prerequisite graph (Balbharati Biology Std XII, Ch.2): asexual reproduction in animals, the human reproductive systems, gametogenesis, the menstrual cycle, fertilization, development, pregnancy, parturition, and reproductive health.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/repro-animals-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Asexual reproduction
  {
    id: "C01", slug: "asexual-reproduction-animals", title: "Asexual reproduction in animals", group: "Asexual reproduction", tier: "core",
    oneLiner: t`Binary fission (*Amoeba*), budding (*Hydra*), gemmules (sponges) and regeneration: one parent, mitosis only, offspring identical`,
    prereqs: [], ext: [], sources: [S("Asexual Reproduction in Animals")],
  },
  // Reproductive systems
  {
    id: "C02", slug: "male-reproductive-system", title: "The male reproductive system", group: "Reproductive systems", tier: "core",
    oneLiner: t`Testes make sperms in seminiferous tubules and testosterone in Leydig cells; sperms pass through epididymis and vas deferens; seminal vesicles, prostate and Cowper's glands add semen`,
    prereqs: [], ext: [], sources: [S("Sexual Reproduction in Animals")],
  },
  {
    id: "C03", slug: "female-reproductive-system", title: "The female reproductive system", group: "Reproductive systems", tier: "core",
    oneLiner: t`Ovaries hold follicles; the oviduct's ampulla is where fertilization happens; the uterus (womb) has an endometrium for implantation; a Graafian follicle releases the ovum`,
    prereqs: [], ext: [], sources: [S("Sexual Reproduction in Animals")],
  },
  // Gametogenesis
  {
    id: "C04", slug: "spermatogenesis", title: "Spermatogenesis and the sperm", group: "Gametogenesis", tier: "core",
    oneLiner: t`Spermatogonia → primary spermatocytes (2n) → secondary spermatocytes (n) → spermatids → sperms by spermiogenesis; one primary spermatocyte gives four sperms; acrosome, nucleus, nebenkern, tail`,
    prereqs: ["C02"], ext: [], sources: [S("Gametogenesis")],
  },
  {
    id: "C05", slug: "oogenesis", title: "Oogenesis and the ovum", group: "Gametogenesis", tier: "core",
    oneLiner: t`Oogonia → primary oocytes, arrested in prophase I; at ovulation a secondary oocyte and a polar body; one primary oocyte gives one ovum; zona pellucida and corona radiata surround it`,
    prereqs: ["C03"], ext: [], sources: [S("Gametogenesis")],
  },
  // The cycle
  {
    id: "C06", slug: "menstrual-cycle", title: "The menstrual cycle", group: "The cycle", tier: "core",
    oneLiner: t`About 28 days: menstrual (days 1–5), proliferative under estrogen, ovulation on day 14 after an LH surge, secretory under progesterone from the corpus luteum, which becomes the corpus albicans`,
    prereqs: ["C05"], ext: [], sources: [S("Menstrual Cycle")],
  },
  // Fertilization
  {
    id: "C07", slug: "fertilization", title: "Fertilization", group: "Fertilization", tier: "core",
    oneLiner: t`Capacitated sperms reach the ampulla; the acrosome's enzymes break through the corona radiata and zona pellucida; the pronuclei fuse into a diploid zygote with one nucleus`,
    prereqs: ["C04", "C06"], ext: [], sources: [S("Fertilization")],
  },
  // Development
  {
    id: "C08", slug: "cleavage-implantation", title: "Cleavage, blastocyst and implantation", group: "Development", tier: "core",
    oneLiner: t`Cleavage gives blastomeres and a morula; the blastocyst has a trophoblast, an inner cell mass and the cells of Rauber; it implants in the endometrium about day 7`,
    prereqs: ["C07"], ext: [], sources: [S("Embryonic Development")],
  },
  {
    id: "C09", slug: "pregnancy-placenta", title: "Gastrulation, pregnancy and the placenta", group: "Development", tier: "core",
    oneLiner: t`Gastrulation forms three germ layers; the young is an embryo for 8 weeks, then a foetus; the placenta passes food, oxygen and antibodies and makes hCG, estrogen and progesterone`,
    prereqs: ["C08"], ext: [], sources: [S("Embryonic Development"), S("Pregnancy"), S("Placenta")],
  },
  {
    id: "C10", slug: "parturition-lactation", title: "Parturition and lactation", group: "Development", tier: "core",
    oneLiner: t`Foetal ACTH and corticosteroids and a rising estrogen–progesterone ratio start labour; oxytocin drives contractions; colostrum, rich in IgA antibodies, is the first milk`,
    prereqs: ["C09"], ext: [], sources: [S("Parturition"), S("Lactation")],
  },
  // Reproductive health
  {
    id: "C11", slug: "birth-control", title: "Reproductive health and birth control", group: "Reproductive health", tier: "core",
    oneLiner: t`The RCH programme; temporary methods (natural, barrier, IUDs, oral pills) and permanent ones (vasectomy, tubectomy)`,
    prereqs: ["C06"], ext: [], sources: [S("Reproductive Health"), S("Birth Control")],
  },
  {
    id: "C12", slug: "infertility-std", title: "Infertility and sexually transmitted diseases", group: "Reproductive health", tier: "core",
    oneLiner: t`Assisted reproduction: IVF, ZIFT, GIFT, artificial insemination; STDs such as gonorrhoea (*Neisseria*), syphilis (*Treponema*), genital herpes and AIDS`,
    prereqs: ["C07", "C11"], ext: [], sources: [S("Infertility"), S("Sexually Transmitted Diseases")],
  },
];
