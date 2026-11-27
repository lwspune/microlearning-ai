import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Human Nutrition prerequisite graph (Balbharati Biology Std XI, Ch.14): the structure of teeth and human dentition, the alimentary canal and its wall, the salivary glands, liver and pancreas, how digestion is timed and where each enzyme works, absorption and assimilation, and nutritional and digestive disorders.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/human-nutrition-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Structure
  {
    id: "C01", slug: "teeth-dentition", title: "Teeth and dentition", group: "Structure", tier: "core",
    oneLiner: t`A tooth has a crown, neck and root; enamel covers the crown, dentin gives its shape and cementum fixes the root; human dentition is thecodont, diphyodont and heterodont, with 32 teeth`,
    prereqs: [], ext: [], sources: [S("Human Digestive System")],
  },
  {
    id: "C02", slug: "alimentary-canal", title: "The alimentary canal", group: "Structure", tier: "core",
    oneLiner: t`The oesophagus pushes the bolus by peristalsis past the cardiac sphincter; the stomach mucosa forms rugae and gastric glands; mesenteries hold the 6 m small intestine in its coils`,
    prereqs: ["C01"], ext: [], sources: [S("Human Digestive System"), S("Histology of Alimentary Canal")],
  },
  // Glands
  {
    id: "C03", slug: "digestive-glands", title: "Digestive glands", group: "Glands", tier: "core",
    oneLiner: t`Three pairs of salivary glands make saliva; the liver makes bile and detoxifies with its Kupffer cells; the pancreas is heterocrine: acini make pancreatic juice, islets make hormones`,
    prereqs: ["C02"], ext: [], sources: [S("Digestive Glands")],
  },
  // Process
  {
    id: "C04", slug: "physiology-digestion", title: "Physiology of digestion", group: "Process", tier: "core",
    oneLiner: t`Each enzyme works in its own medium: pepsin in acid, trypsin in alkali; HCl and enterokinase activate proenzymes; nerves and hormones such as gastrin, secretin and CCK time the secretions`,
    prereqs: ["C03"], ext: [], sources: [S("Physiology of Digestion")],
  },
  {
    id: "C05", slug: "absorption-assimilation", title: "Absorption, assimilation and egestion", group: "Process", tier: "core",
    oneLiner: t`Glucose and fructose need no digestion and pass into the blood capillaries of the villi; sucrose must first be split by sucrase; the stomach absorbs little apart from water, alcohol and some drugs`,
    prereqs: ["C04"], ext: [], sources: [S("Absorption, Assimilation and Egestion")],
  },
  // Health
  {
    id: "C06", slug: "nutritional-disorders", title: "Nutritional and digestive disorders", group: "Health", tier: "core",
    oneLiner: t`Kwashiorkor is protein deficiency in children of one to three years; jaundice is abnormal bilirubin metabolism; alcoholism damages the liver: fatty liver, hepatitis, fibrosis and cirrhosis`,
    prereqs: ["C05"], ext: [], sources: [S("Nutritional and Digestive Disorders")],
  },
];
