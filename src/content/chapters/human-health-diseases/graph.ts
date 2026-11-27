import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Human Health and Diseases prerequisite graph (Balbharati Biology Std XII, Ch.10): health and kinds of disease, protozoan, helminth, bacterial, viral and fungal diseases, AIDS and cancer, innate and acquired immunity, lymphocytes, antibodies and blood groups, and drugs and addiction.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/human-health-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Disease
  {
    id: "C01", slug: "health-and-disease", title: "Health and kinds of disease", group: "Disease", tier: "core",
    oneLiner: t`Health is complete physical, mental and social well-being; acquired diseases arise after birth and are communicable (spread from person to person) or non-communicable, like cancer`,
    prereqs: [], ext: [], sources: [S("Common Human Diseases")],
  },
  {
    id: "C02", slug: "protozoan-helminth-diseases", title: "Malaria, amoebiasis and filariasis", group: "Disease", tier: "core",
    oneLiner: t`Plasmodium sporozoites enter with a female Anopheles bite; Entamoeba spreads faeco-orally; Wuchereria bancrofti, carried by female Culex, causes elephantiasis`,
    prereqs: ["C01"], ext: [], sources: [S("Common Human Diseases")],
  },
  {
    id: "C03", slug: "bacterial-viral-fungal-diseases", title: "Typhoid, pneumonia, chicken pox and ringworm", group: "Disease", tier: "core",
    oneLiner: t`Salmonella typhi causes typhoid (Widal test); pneumonia spreads by droplets; the varicella virus causes chicken pox; ringworm is a fungal infection by Trichophyton and Microsporum`,
    prereqs: ["C01"], ext: [], sources: [S("Common Human Diseases")],
  },
  {
    id: "C04", slug: "aids-cancer", title: "AIDS and cancer", group: "Disease", tier: "core",
    oneLiner: t`HIV, an RNA retrovirus, destroys helper T cells; ELISA screens and Western blot confirms; malignant tumours invade other tissues, and carcinogens such as asbestos trigger them`,
    prereqs: ["C03", "C06"], ext: [], sources: [S("Common Human Diseases")],
  },
  // Immunity
  {
    id: "C05", slug: "immunity", title: "Innate and acquired immunity", group: "Immunity", tier: "core",
    oneLiner: t`Innate immunity is inborn and nonspecific: skin, lysozyme in tears, phagocytes, interferons; acquired immunity is specific and remembers; it is active (own antibodies) or passive (ready-made)`,
    prereqs: ["C01"], ext: [], sources: [S("Immunity")],
  },
  {
    id: "C06", slug: "lymphocytes", title: "B cells and T cells", group: "Immunity", tier: "core",
    oneLiner: t`Both arise from bone-marrow stem cells; B cells mature in marrow and become antibody-making plasma cells; T cells mature in the thymus: helper T cells activate B cells, cytotoxic T cells secrete perforins`,
    prereqs: ["C05"], ext: [], sources: [S("Immunity")],
  },
  {
    id: "C07", slug: "antibodies-blood-groups", title: "Antibodies and blood groups", group: "Immunity", tier: "core",
    oneLiner: t`An antibody is a Y-shaped immunoglobulin of two heavy and two light chains whose paratopes bind an antigen's epitopes; ABO and Rh antigens sit on RBCs`,
    prereqs: ["C06"], ext: [], sources: [S("Structure of Antibody")],
  },
  // Lifestyle
  {
    id: "C08", slug: "drugs-addiction", title: "Drugs and addiction", group: "Lifestyle", tier: "core",
    oneLiner: t`Heroin comes from opium, charas and ganja from Cannabis sativa, cocaine from the coca plant; nicotine and alcohol addict, causing emphysema, lung cancer and liver cirrhosis`,
    prereqs: [], ext: [], sources: [S("Drug Abuse"), S("Addiction"), S("Adolescence")],
  },
];
