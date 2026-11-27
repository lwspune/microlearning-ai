import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Respiration and Circulation prerequisite graph (Balbharati Biology Std XII, Ch.8): respiratory surfaces, the human respiratory tract, breathing and lung volumes, gas transport and disorders, types of circulation, blood and lymph, the heart, the cardiac cycle and ECG, blood vessels and blood pressure.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/respiration-circulation-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Respiration
  {
    id: "C01", slug: "respiratory-surfaces", title: "Respiratory surfaces", group: "Respiration", tier: "core",
    oneLiner: t`Gases are exchanged across a moist, thin, large, vascular surface: plasma membrane in Amoeba, tracheae in insects, book lungs in scorpions, book gills in Limulus, gills in fish, lungs in birds`,
    prereqs: [], ext: [], sources: [S("Organs of Respiratory Exchange")],
  },
  {
    id: "C02", slug: "respiratory-tract", title: "The human respiratory tract", group: "Respiration", tier: "core",
    oneLiner: t`Nose (split by the mesethmoid cartilage), pharynx, larynx (voice box), epiglottis, trachea held open by C-shaped cartilage rings, and about 700 million thin alveoli`,
    prereqs: ["C01"], ext: [], sources: [S("Human Respiratory System")],
  },
  {
    id: "C03", slug: "breathing-lung-volumes", title: "Breathing and lung volumes", group: "Respiration", tier: "core",
    oneLiner: t`Inspiration: diaphragm and external intercostals contract, the thorax enlarges and air rushes in; vital capacity = TV + IRV + ERV`,
    prereqs: ["C02"], ext: [], sources: [S("Mechanism of Respiration")],
  },
  {
    id: "C04", slug: "gas-transport-disorders", title: "Gas transport and respiratory disorders", group: "Respiration", tier: "core",
    oneLiner: t`97% of oxygen travels as oxyhaemoglobin; CO binds haemoglobin about 250 times more strongly than oxygen; asthma, emphysema and sinusitis disturb breathing`,
    prereqs: ["C03"], ext: [], sources: [S("Mechanism of Respiration"), S("Common Disorders of Respiratory System")],
  },
  // Circulation
  {
    id: "C05", slug: "circulation-types", title: "Open and closed circulation", group: "Circulation", tier: "core",
    oneLiner: t`Unicellular organisms use cyclosis; arthropods have open circulation through haemocoels; annelids and vertebrates have closed circulation in vessels under high pressure`,
    prereqs: [], ext: [], sources: [S("Transportation in Living Organisms"), S("Circulation in Animals")],
  },
  // Blood
  {
    id: "C06", slug: "blood-plasma-rbc-platelets", title: "Blood: plasma, RBCs and platelets", group: "Blood", tier: "core",
    oneLiner: t`Plasma is 55% of blood and 90% water; mature RBCs have no nucleus; platelets bud from megakaryocytes; thrombin turns fibrinogen into a fibrin clot`,
    prereqs: ["C05"], ext: [], sources: [S("Circulatory System in Human"), S("Red Blood Corpuscles"), S("Platelets")],
  },
  {
    id: "C07", slug: "wbc-lymph", title: "White blood cells and lymph", group: "Blood", tier: "core",
    oneLiner: t`WBCs squeeze out of capillaries by diapedesis; monocytes are the largest; too few WBCs is leucopenia; tissue fluid that enters lymph vessels becomes lymph, which has no RBCs or platelets`,
    prereqs: ["C06"], ext: [], sources: [S("White Blood Corpuscles"), S("Lymphatic System")],
  },
  // Heart
  {
    id: "C08", slug: "heart-structure", title: "Structure of the heart", group: "Heart", tier: "core",
    oneLiner: t`Four chambers in a pericardium; the left ventricle is thickest; tricuspid, bicuspid, semilunar, Eustachian and Thebesian valves keep blood flowing one way`,
    prereqs: ["C05"], ext: [], sources: [S("Heart")],
  },
  {
    id: "C09", slug: "cardiac-cycle-ecg", title: "Cardiac cycle and ECG", group: "Heart", tier: "core",
    oneLiner: t`The myogenic SA node paces the heart; one 0.8 s cycle is atrial systole 0.1 s, ventricular systole 0.3 s, joint diastole 0.4 s; cardiac output = stroke volume × heart rate; P wave = atrial depolarization`,
    prereqs: ["C08"], ext: [], sources: [S("Working Mechanism of Human Heart"), S("Electrocardiogram")],
  },
  {
    id: "C10", slug: "vessels-blood-pressure", title: "Blood vessels and blood pressure", group: "Heart", tier: "core",
    oneLiner: t`Thick-walled arteries carry high-pressure blood and show the pulse; veins have valves; normal blood pressure is 120/80 mmHg; angina is chest pain from poor blood supply to heart muscle`,
    prereqs: ["C09"], ext: [], sources: [S("Blood Vessels"), S("Blood Pressure")],
  },
];
