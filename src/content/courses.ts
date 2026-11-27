import type { Chapter, ConceptId, GroupId, Standard, SubjectId } from "./types.ts";

/**
 * The course catalog: group → course → chapters (PLAN.md "Courses").
 *
 * Each group has one concept pool. A course covers some of its group's
 * concepts; mastery is per concept, so a concept mastered once counts in every
 * course that covers it. Which concepts a course covers is verified with the
 * owner: coverage stays `draft` (shown only on /review/courses) until they
 * approve it, and until then students see the whole chapter.
 */

export type Coverage = {
  ids: ConceptId[];
  /** Concepts kept in the list but doubtful; marked on the review grid. */
  unsure?: ConceptId[];
  status: "draft" | "approved";
};

/** A pool chapter a course takes concepts from. No coverage: the course covers the whole chapter. */
export type CoursePart = { chapter: string; coverage?: Coverage };

/**
 * A chapter in a course: one pool chapter, or several where the course teaches them as one
 * (MHT-CET's Limits is the pool's Limits and Continuity), or a share of one that the course
 * splits (NDA's Trigonometric Equations, Properties of Triangle and Inverse Trigonometry are
 * three shares of Std XII Trigonometric Functions, with lists that don't overlap).
 */
export type CourseChapter = CoursePart & {
  /** Its URL slug; default: the first pool chapter's. A share of a split pool chapter names its own. */
  slug?: string;
  /** The course's name for it; default: the first pool chapter's title. */
  title?: string;
  /** Default: the first pool chapter's standard. */
  standard?: Standard;
  /** The other pool chapters it takes in, in teaching order. */
  more?: CoursePart[];
  /** Its chapter's slug on PYQ Vault, where the course's past papers are practised. */
  pyqvault?: string;
};

/** A course chapter with its pool chapters looked up. */
export type ResolvedCourseChapter = {
  slug: string;
  title: string;
  subject: SubjectId;
  standard?: Standard;
  parts: { chapter: Chapter; coverage?: Coverage }[];
};

export type Course = {
  slug: string;
  title: string;
  /** For cards and chips: "JEE Main". */
  short: string;
  group: GroupId;
  tagline: string;
  /** A school board: its page shows one standard at a time, which the student picks. */
  board?: true;
  /** The year a board's page opens on for a student who hasn't picked one; default: its first. */
  defaultStandard?: Standard;
  /** The course's exam and subject on PYQ Vault (its URL slugs), for chapters that link there. */
  pyqvault?: { exam: string; subject: string };
  chapters: CourseChapter[];
};

export type Group = { id: GroupId; title: string; blurb: string };

export const GROUPS: Group[] = [
  { id: "school", title: "K-12", blurb: "Boards and entrance exams, from Class 9 to 12." },
  { id: "graduate", title: "Graduates", blurb: "Defence and services exams after graduation." },
];

export const SUBJECTS: Record<SubjectId, string> = { maths: "Maths", physics: "Physics", chemistry: "Chemistry", biology: "Biology" };

export const STANDARD_TITLE: Record<Standard, string> = { 9: "Std IX", 10: "Std X", 11: "Std XI", 12: "Std XII" };

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `C${String(from + i).padStart(2, "0")}`);

// Complex Numbers coverage, drafted from the syllabi 2026-10-14; awaiting the owner's check.
const CN_ALL = [...range(1, 8), "C10", "C11", "C12", "C14", "C15", "C16", "C19"];
const CN_LOCI = range(24, 27);

// MH Board and MHT-CET: what the Std XI book teaches, settled against its text and every exercise
// (and MHT-CET's 2026 papers); approved by the owner 2026-10-18. The book has circle and
// perpendicular-bisector loci but no rotation, nth roots beyond cube roots, modulus bounds, or
// argument and algebraic loci (C13, C18, C22, C26, C27).
const cnMaharashtra: Coverage = {
  ids: [...CN_ALL, "C09", "C17", "C20", "C21", "C23", "C24", "C25"],
  status: "approved",
};

// Linear Programming coverage, approved by the owner 2026-10-15. Class 12 in both boards and
// MHT-CET; JEE Main dropped it in 2024 and NDA's syllabus doesn't list it. C10 (unbounded
// regions) is no longer doubtful for MH Board and MHT-CET: the HSC papers ask it (2026-10-18).
// The book's concepts, in chapters where another course adds one the book doesn't teach: MHT-CET's
// Cayley–Hamilton, two circles and angle between curves, NDA's phase 2c concepts (owner, 2026-10-19), and the
// physics other courses ask (2026-11-26: PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA", phase 2), and the
// chemistry they ask (2026-11-27: PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA", phase 2).
// Keeps MH Board's and MHT-CET's maps as they were.
const book = (chapter: string, last: number): CourseChapter => ({ chapter, coverage: { ids: range(1, last), status: "approved" } });

// An NDA share of a pool chapter: the concepts NDA's syllabus asks, approved by the owner 2026-10-19.
const nda = (chapter: string, ids: ConceptId[]): CourseChapter => ({ chapter, coverage: { ids, status: "approved" } });

// A CBSE share of a pool chapter: what the rationalised NCERT book's exercises and CBSE's 2022–26 board
// papers ask, settled against both in PYQ Vault; approved on the owner's say-so 2026-10-20 ("you approve").
const cbse = (chapter: string, ids: ConceptId[]): CourseChapter => ({ chapter, coverage: { ids, status: "approved" } });

// Sequences and Series C19–C21 are Std X work for the Maharashtra Board's Std X Arithmetic Progression
// (PLAN.md "Std IX and X Maths"); every other use of the chapter keeps C01–C18.
const SERIES_XI = range(1, 18);

// A JEE Main share of a maths pool chapter: what the 2024 syllabus and the 2024–26 papers ask, settled against PYQ
// Vault's chapters and rulings; approved on the owner's "Ok" 2026-11-27 (PLAN.md "JEE Main Maths course").
const jeeMaths = (chapter: string, ids: ConceptId[]): CourseChapter => ({ chapter, coverage: { ids, status: "approved" } });

const lpp = (unsure: string[]): CourseChapter => ({
  chapter: "linear-programming",
  coverage: { ids: range(1, 13), unsure, status: "approved" },
});

// A course's share of a physics pool chapter, settled against its syllabus and papers and approved on the owner's
// say-so 2026-11-26 (PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA"); `unsure` marks doubtful concepts.
const phy = (chapter: string, ids: ConceptId[], unsure?: ConceptId[]): CourseChapter => ({
  chapter,
  coverage: unsure ? { ids, unsure, status: "approved" } : { ids, status: "approved" },
});

type NcertExam = "cbse" | "neet" | "jee";

/**
 * NCERT's Class 11 and 12 physics chapters, in book order, for CBSE, NEET and JEE Main, under each exam's
 * PYQ Vault names. Concepts sit where NCERT teaches them: calculus opens kinematics, friction and circular
 * dynamics are Laws of Motion, radiation is Thermal Properties, the transformer is Alternating Current and the
 * meters go with the galvanometer. CBSE keeps to the rationalised books; NEET adds what the NMC 2024 syllabus
 * and its 2021–26 papers ask; JEE Main goes further where its 2021–26 papers do, and drops what its 2024
 * syllabus did (Communication Systems, transistors, the cyclotron). Unsure: one or two papers, or the syllabus alone.
 */
function ncertPhysics(exam: NcertExam): CourseChapter[] {
  const by = <T>(choice: Record<NcertExam, T>): T => choice[exam];
  const xi = (slug: string, title: string, entry: CourseChapter): CourseChapter => ({ ...entry, slug, title, standard: 11 });
  const xii = (slug: string, title: string, entry: CourseChapter): CourseChapter => ({ ...entry, slug, title, standard: 12 });
  const nuclei = by({ cbse: phy("atoms-nuclei", ["C06", "C07", "C11"]), neet: phy("atoms-nuclei", range(6, 11), ["C09", "C10"]), jee: phy("atoms-nuclei", range(6, 11)) });
  return [
    by({
      cbse: xi("units-and-measurement", "Units and Measurement", phy("units-measurements", ["C01", ...range(3, 7)], ["C05", "C06"])),
      neet: xi("units-and-measurements", "Units and Measurements", phy("units-measurements", ["C01", ...range(3, 8)])),
      jee: xi("units-and-measurements", "Units and Measurements", phy("units-measurements", range(1, 8), ["C02"])),
    }),
    xi("motion-in-a-straight-line", "Motion in a Straight Line", { ...phy("mathematical-methods", ["C06", "C07"]), more: [phy("motion-in-a-plane", ["C01", "C02"])] }),
    xi("motion-in-a-plane", "Motion in a Plane", {
      ...phy("mathematical-methods", range(1, 5)),
      // Relative velocity went from the rationalised book.
      more: [phy("motion-in-a-plane", by({ cbse: ["C03", "C05", "C06"], neet: range(3, 6), jee: range(3, 6) })), phy("rotational-dynamics", ["C01"])],
    }),
    xi("laws-of-motion", "Laws of Motion", {
      ...phy("laws-of-motion", ["C01", "C02", "C04"]),
      // JEE asks the conical pendulum.
      more: [phy("mechanical-properties-solids", ["C07"]), phy("rotational-dynamics", by({ cbse: range(2, 4), neet: range(2, 4), jee: range(2, 5) }))],
    }),
    xi("work-energy-and-power", "Work, Energy and Power", { ...phy("laws-of-motion", ["C03", "C08", "C05"]), more: [phy("rotational-dynamics", ["C06"])] }),
    xi("rotational-motion", "System of Particles and Rotational Motion", {
      ...phy("laws-of-motion", ["C06", "C07"]),
      // CBSE's book dropped the axes theorems and rolling.
      more: [phy("rotational-dynamics", by({ cbse: ["C07", "C08", "C10", "C11"], neet: range(7, 12), jee: range(7, 12) }))],
    }),
    // Binary stars, buoyancy and gas mixtures are JEE only.
    xi("gravitation", "Gravitation", exam === "jee" ? { chapter: "gravitation" } : phy("gravitation", range(1, 7))),
    xi("mechanical-properties-of-solids", "Mechanical Properties of Solids", phy("mechanical-properties-solids", range(1, 5))),
    xi("mechanical-properties-of-fluids", "Mechanical Properties of Fluids", phy("fluids", exam === "jee" ? ["C01", "C02", "C12", ...range(3, 11)] : range(1, 11))),
    // Thermal stress is JEE only.
    xi("thermal-properties-of-matter", "Thermal Properties of Matter", {
      ...(exam === "jee" ? { chapter: "thermal-properties" } : phy("thermal-properties", range(1, 8))),
      more: [phy("kinetic-theory", range(8, 11), ["C08", "C09"])],
    }),
    xi("thermodynamics", "Thermodynamics", by({ cbse: phy("thermodynamics", range(1, 11)), neet: phy("thermodynamics", range(1, 11)), jee: { chapter: "thermodynamics" } })),
    xi("kinetic-theory", "Kinetic Theory", phy("kinetic-theory", exam === "jee" ? [...range(1, 7), "C13", "C14"] : range(1, 7))),
    xi(
      "oscillations",
      "Oscillations",
      by({
        cbse: phy("oscillations", range(1, 9), ["C09"]),
        neet: phy("oscillations", range(1, 9), ["C09"]),
        jee: phy("oscillations", [...range(1, 9), "C11", "C12"], ["C11"]),
      }),
    ),
    xi("waves", "Waves", {
      ...phy("sound", by({ cbse: range(1, 3), neet: range(1, 3), jee: [...range(1, 3), "C05"] })),
      more: [
        by({
          cbse: phy("superposition-of-waves", [...range(1, 6), ...range(8, 11), "C13", "C14"], ["C09"]),
          neet: phy("superposition-of-waves", [...range(1, 6), "C08", "C10", "C11", "C13", "C14"]),
          jee: phy("superposition-of-waves", [...range(1, 6), ...range(8, 14)], ["C12"]),
        }),
      ],
    }),
    ...(exam === "jee"
      ? [xii("electrostatics", "Electrostatics", { chapter: "electrostatics", more: [{ chapter: "electrostatics-12" }] })]
      : [
          xii("electric-charges-and-fields", "Electric Charges and Fields", { ...phy("electrostatics", range(1, 6)), more: [phy("electrostatics-12", range(1, 4))] }),
          xii("electrostatic-potential-and-capacitance", "Electrostatic Potential and Capacitance", phy("electrostatics-12", range(5, 14))),
        ]),
    // CBSE's book dropped the metre bridge and potentiometer; NEET asks the bridge.
    xii("current-electricity", "Current Electricity", {
      ...phy("electric-current", range(1, 6)),
      more: [phy("current-electricity", by({ cbse: range(1, 4), neet: range(1, 5), jee: range(1, 8) }))],
    }),
    xii("moving-charges-and-magnetism", "Moving Charges and Magnetism", {
      ...phy("magnetic-fields-current", ["C01", "C02", "C04", "C05", "C06", "C10", "C11", "C07", "C08", "C09"]),
      more: [phy("current-electricity", ["C09", "C10"]), phy("magnetic-materials", ["C03"])],
    }),
    // JEE asks the Earth's field, hysteresis and permanent magnets.
    xii(
      "magnetism-and-matter",
      "Magnetism and Matter",
      by({
        cbse: { ...phy("magnetism", range(1, 3)), more: [phy("magnetic-materials", ["C01", "C02", ...range(4, 6)], ["C02"])] },
        neet: { ...phy("magnetism", range(1, 3)), more: [phy("magnetic-materials", ["C01", "C02", ...range(4, 6)])] },
        jee: { chapter: "magnetism", more: [phy("magnetic-materials", ["C01", "C02", ...range(4, 8)])] },
      }),
    ),
    xii(
      "electromagnetic-induction",
      "Electromagnetic Induction",
      exam === "cbse"
        ? phy("electromagnetic-induction", [...range(1, 5), "C08", "C10", "C11", "C06"])
        : phy("electromagnetic-induction", [...range(1, 5), "C07", "C08", "C10", "C11", "C06"], ["C07"]),
    ),
    xii("alternating-current", "Alternating Current", {
      ...phy("ac-circuits", exam === "cbse" ? [...range(1, 7), "C09"] : [...range(1, 7), "C09", "C10"]),
      more: [phy("electromagnetic-induction", ["C13"])],
    }),
    // Displacement current first, as NCERT has it.
    xii("electromagnetic-waves", "Electromagnetic Waves", phy("em-waves-communication", ["C06", "C01", "C02", "C07"])),
    exam === "jee"
      ? xii("ray-optics", "Ray Optics", phy("optics", [...range(1, 6), "C08", "C11"]))
      : xii(
          "ray-optics-and-optical-instruments",
          "Ray Optics and Optical Instruments",
          exam === "cbse" ? phy("optics", [...range(1, 6), "C08", "C11", "C07"], ["C07"]) : phy("optics", [...range(1, 6), "C08", "C11"]),
        ),
    // CBSE's syllabus has no polarisation and its 2023–26 papers ask none, though the book keeps Malus.
    xii(
      "wave-optics",
      "Wave Optics",
      exam === "cbse"
        ? phy("wave-optics", [...range(1, 4), "C08", "C10", "C09", "C11", "C13", "C14", "C06"], ["C06"])
        : phy("wave-optics", [...range(1, 4), "C08", "C10", "C09", "C11", "C13", "C14", "C06", "C07"]),
    ),
    xii(
      "dual-nature-of-radiation-and-matter",
      "Dual Nature of Radiation and Matter",
      // Electron emission opens NCERT's chapter; JEE's syllabus starts at the photoelectric effect.
      by({
        cbse: phy("dual-nature", ["C09", "C03", "C01", "C04", "C05", "C02", "C06", "C07"]),
        neet: phy("dual-nature", ["C09", "C03", "C01", "C04", "C05", "C02", "C06", "C07", "C08"], ["C08"]),
        jee: phy("dual-nature", ["C03", "C01", "C04", "C05", "C02", "C06", "C07", "C08"], ["C08"]),
      }),
    ),
    // NCERT 12.6, de Broglie's explanation of Bohr's postulate, is CBSE and NEET.
    xii("atoms", "Atoms", phy("atoms-nuclei", exam === "jee" ? range(1, 5) : [...range(1, 5), "C12"])),
    xii("nuclei", "Nuclei", nuclei),
    xii("semiconductor-electronics", exam === "cbse" ? "Semiconductor Electronics: Materials, Devices and Simple Circuits" : "Semiconductor Electronics", {
      chapter: "semiconductors",
      more: [phy("semiconductor-devices", exam === "cbse" ? ["C02"] : ["C02", "C04", "C05", "C09", "C10"])],
    }),
  ];
}

// A course's share of a chemistry pool chapter, settled against its syllabus, papers and PYQ Vault's rulings, approved
// on the owner's say-so 2026-11-27 (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA"); `unsure` marks doubtful concepts.
const chm = (chapter: string, ids: ConceptId[], unsure?: ConceptId[]): CourseChapter => ({
  chapter,
  coverage: unsure ? { ids, unsure, status: "approved" } : { ids, status: "approved" },
});

/**
 * NCERT's Class 11 and 12 chemistry chapters, in book order, for CBSE, NEET and JEE Main, under each exam's PYQ Vault
 * names. CBSE keeps to the rationalised books; NEET adds The p-Block Elements (NMC 2024 syllabus); JEE Main follows its
 * 2024 syllabus, with gas laws and redox inside Some Basic Concepts as PYQ Vault files them. Concepts sit where NCERT
 * teaches them: hydrogen bonding and Fajans' rules are Chemical Bonding, purification and chromatography open the
 * organic techniques, and the d-block has no metallurgy.
 */
function ncertChemistry(exam: NcertExam): CourseChapter[] {
  const jee = exam === "jee";
  const xi = (slug: string, title: string, entry: CourseChapter): CourseChapter => ({ ...entry, slug, title, standard: 11 });
  const xii = (slug: string, title: string, entry: CourseChapter): CourseChapter => ({ ...entry, slug, title, standard: 12 });
  return [
    // JEE adds equivalents and normality (analytical C09); NDA's general science (C08, C09) is NDA's alone.
    xi("some-basic-concepts-of-chemistry", "Some Basic Concepts of Chemistry", {
      ...chm("basic-concepts-chemistry", range(1, 7)),
      more: [
        jee ? { chapter: "analytical-chemistry" } : chm("analytical-chemistry", range(1, 8)),
        ...(jee ? [chm("states-of-matter", ["C01", "C03", "C04", "C05", "C06"], ["C06"]), { chapter: "redox-reactions" }] : []),
      ],
    }),
    xi("structure-of-atom", "Structure of Atom", { chapter: "structure-of-atom" }),
    xi("classification-of-elements", jee ? "Classification of Elements and Periodicity" : "Classification of Elements and Periodicity in Properties", {
      chapter: "periodic-table",
    }),
    xi("chemical-bonding", "Chemical Bonding and Molecular Structure", {
      chapter: "chemical-bonding",
      more: [chm("states-of-matter", ["C02"]), chm("s-block-elements", ["C05"])],
    }),
    xi("chemical-thermodynamics", jee ? "Chemical Thermodynamics" : "Thermodynamics", { chapter: "chemical-thermodynamics" }),
    xi("equilibrium", "Equilibrium", { chapter: "chemical-equilibrium", more: [{ chapter: "ionic-equilibria" }] }),
    ...(jee ? [] : [xi("redox-reactions", "Redox Reactions", { chapter: "redox-reactions" })]),
    xi("organic-chemistry", "Organic Chemistry – Some Basic Principles and Techniques", {
      chapter: "organic-chemistry-basics",
      more: [{ chapter: "analytical-techniques" }],
    }),
    xi("hydrocarbons", "Hydrocarbons", { chapter: "hydrocarbons" }),
    xii("solutions", "Solutions", { chapter: "solutions" }),
    // Corrosion is JEE's; the rationalised book dropped it.
    xii("electrochemistry", "Electrochemistry", jee ? { chapter: "electrochemistry" } : chm("electrochemistry", range(1, 10))),
    // JEE asks first-order kinetics through radioactive decay.
    xii("chemical-kinetics", "Chemical Kinetics", { chapter: "chemical-kinetics", ...(jee ? { more: [chm("nuclear-chemistry", ["C05"])] } : {}) }),
    // The rationalised CBSE book dropped the p-block; NEET's and JEE's 2024 syllabi keep groups 13 to 18.
    ...(exam === "cbse" ? [] : [xii("p-block-elements", "The p-Block Elements", { chapter: "p-block-13-14-15", more: [{ chapter: "p-block-16-17-18" }] })]),
    // JEE adds salt analysis and the oxides.
    xii("d-and-f-block-elements", "The d- and f-Block Elements", chm("transition-elements", [...range(1, 5), ...range(7, 9), ...(jee ? ["C10", "C11"] : [])])),
    // Metal carbonyls are NEET's and JEE's; the rationalised book dropped them.
    xii("coordination-compounds", "Coordination Compounds", exam === "cbse" ? chm("coordination-compounds", range(1, 10)) : { chapter: "coordination-compounds" }),
    xii("haloalkanes-and-haloarenes", "Haloalkanes and Haloarenes", { chapter: "halogen-derivatives" }),
    xii("alcohols-phenols-and-ethers", "Alcohols, Phenols and Ethers", { chapter: "alcohols-phenols-ethers" }),
    xii("aldehydes-ketones-and-carboxylic-acids", "Aldehydes, Ketones and Carboxylic Acids", { chapter: "aldehydes-ketones-acids" }),
    xii("amines", "Amines", { chapter: "amines" }),
    xii("biomolecules", "Biomolecules", { chapter: "biomolecules" }),
  ];
}

export const courses: Course[] = [
  {
    slug: "mh-board",
    title: "Maharashtra Board",
    short: "MH Board",
    group: "school",
    tagline: "Maharashtra State Board, SSC and HSC Science",
    board: true,
    // Std XI and XII students came first; Std IX and X joined on 2026-10-21 (owner: open on XI).
    defaultStandard: 11,
    // Book order: Std IX Part 1 and Part 2, Std X Part 1 and Part 2, Std XI Part 1, then Part 2, then Std XII; physics after maths.
    // A chapter without coverage is covered whole.
    chapters: [
      { chapter: "sets-9" },
      { chapter: "real-numbers-9" },
      { chapter: "polynomials-9" },
      { chapter: "ratio-and-proportion-9" },
      { chapter: "linear-equations-9" },
      { chapter: "financial-planning-9" },
      { chapter: "statistics-9" },
      { chapter: "basic-geometry-9" },
      { chapter: "parallel-lines-9" },
      { chapter: "triangles-9" },
      { chapter: "constructions-9" },
      { chapter: "quadrilaterals-9" },
      { chapter: "circle-9" },
      { chapter: "coordinate-geometry-9" },
      { chapter: "trigonometry-9" },
      { chapter: "surface-area-volume-9" },
      { chapter: "linear-equations-10" },
      { chapter: "quadratic-equations-10" },
      {
        chapter: "sequences-and-series",
        slug: "arithmetic-progression",
        title: "Arithmetic Progression",
        standard: 10,
        coverage: { ids: ["C15", "C19", "C16", "C20", "C17", "C18", "C21"], status: "approved" },
      },
      { chapter: "financial-planning-10" },
      { chapter: "probability-10" },
      { chapter: "statistics-10" },
      { chapter: "similarity-10" },
      { chapter: "pythagoras-10" },
      { chapter: "circle-10" },
      { chapter: "constructions-10" },
      { chapter: "coordinate-geometry-10" },
      { chapter: "trigonometry-10" },
      { chapter: "mensuration-10" },
      { chapter: "angle-measurement" },
      { chapter: "trigonometric-functions" },
      book("compound-and-multiple-angles", 10),
      book("determinants-and-matrices", 12),
      book("straight-line", 12),
      book("circle", 8),
      book("conic-sections", 14),
      { chapter: "measures-of-dispersion" },
      book("probability", 10),
      book("functions", 11),
      book("limits", 9),
      { chapter: "continuity" },
      { chapter: "differentiation" },
      { chapter: "complex-numbers", coverage: cnMaharashtra },
      book("sequences-and-series", 18),
      book("permutations-and-combinations", 14),
      book("binomial-theorem", 9),
      { chapter: "sets-and-relations" },
      { chapter: "mathematical-logic" },
      book("matrices", 11),
      book("trigonometric-functions-12", 15),
      { chapter: "pair-of-straight-lines" },
      { chapter: "vectors" },
      { chapter: "line-and-plane" },
      { chapter: "differentiation-12" },
      book("application-of-derivatives", 10),
      { chapter: "indefinite-integration" },
      book("definite-integration", 7),
      { chapter: "application-of-definite-integration" },
      book("differential-equations", 9),
      { chapter: "probability-distributions" },
      { chapter: "binomial-distribution" },
      lpp([]),
      // Std XII Physics, Balbharati book order (PLAN.md "Std XI and XII Physics").
      book("units-measurements", 7),
      { chapter: "mathematical-methods" },
      { chapter: "motion-in-a-plane" },
      book("laws-of-motion", 7),
      book("gravitation", 7),
      { chapter: "mechanical-properties-solids" },
      book("thermal-properties", 8),
      { chapter: "sound" },
      book("optics", 8),
      book("electrostatics", 6),
      book("electric-current", 6),
      { chapter: "magnetism" },
      book("em-waves-communication", 5),
      { chapter: "semiconductors" },
      { chapter: "rotational-dynamics" },
      book("fluids", 11),
      book("kinetic-theory", 12),
      { chapter: "thermodynamics" },
      { chapter: "oscillations" },
      { chapter: "superposition-of-waves" },
      { chapter: "wave-optics" },
      { chapter: "electrostatics-12" },
      { chapter: "current-electricity" },
      { chapter: "magnetic-fields-current" },
      { chapter: "magnetic-materials" },
      { chapter: "electromagnetic-induction" },
      { chapter: "ac-circuits" },
      book("dual-nature", 8),
      book("atoms-nuclei", 11),
      { chapter: "semiconductor-devices" },
      // Std XI Chemistry, Balbharati book order (PLAN.md "Std XI and XII Chemistry").
      book("basic-concepts-chemistry", 7),
      book("analytical-chemistry", 8),
      { chapter: "analytical-techniques" },
      book("structure-of-atom", 7),
      { chapter: "chemical-bonding" },
      { chapter: "redox-reactions" },
      { chapter: "periodic-table" },
      book("s-block-elements", 6),
      book("p-block-13-14-15", 7),
      { chapter: "states-of-matter" },
      { chapter: "adsorption-colloids" },
      { chapter: "chemical-equilibrium" },
      { chapter: "nuclear-chemistry" },
      book("organic-chemistry-basics", 8),
      book("hydrocarbons", 8),
      book("everyday-chemistry", 7),
      // Std XII Chemistry, Balbharati book order (PLAN.md "Std XI and XII Chemistry").
      { chapter: "solid-state" },
      { chapter: "solutions" },
      { chapter: "ionic-equilibria" },
      { chapter: "chemical-thermodynamics" },
      book("electrochemistry", 10),
      { chapter: "chemical-kinetics" },
      { chapter: "p-block-16-17-18" },
      book("transition-elements", 9),
      book("coordination-compounds", 10),
      { chapter: "halogen-derivatives" },
      { chapter: "alcohols-phenols-ethers" },
      { chapter: "aldehydes-ketones-acids" },
      { chapter: "amines" },
      book("biomolecules", 7),
      { chapter: "polymers" },
      { chapter: "green-chemistry-nanochemistry" },
      // Std XII Biology, Balbharati book order (PLAN.md "Std XI and XII Biology").
      { chapter: "reproduction-in-plants" },
      { chapter: "reproduction-in-animals" },
      { chapter: "inheritance-and-variation" },
      { chapter: "molecular-basis-of-inheritance" },
      { chapter: "origin-and-evolution-of-life" },
      { chapter: "plant-water-relation" },
      { chapter: "plant-growth-mineral-nutrition" },
      { chapter: "respiration-circulation" },
    ],
  },
  {
    slug: "cbse",
    title: "CBSE",
    short: "CBSE",
    group: "school",
    tagline: "CBSE Science, NCERT syllabus",
    board: true,
    // NCERT's chapters and names, as PYQ Vault has them (PLAN.md "CBSE Maths course"). The rationalised
    // books dropped mathematical induction, general and middle terms, A.P. as a topic of its own, polar
    // form, tangents and normals, Rolle and the mean value theorems, planes and the binomial distribution;
    // the 2026 papers ask no random variables. Linear Inequalities, Introduction to Three Dimensional
    // Geometry and absolute extrema were built for CBSE (phase 2).
    chapters: [
      { ...cbse("sets-and-relations", [...range(1, 5), "C09"]), slug: "sets", title: "Sets" },
      {
        ...cbse("sets-and-relations", range(12, 14)),
        slug: "relations-and-functions",
        title: "Relations and Functions",
        more: [cbse("functions", [...range(1, 3), "C05", "C06", "C08", "C09"])],
      },
      {
        ...cbse("angle-measurement", [...range(1, 3), "C05"]),
        slug: "trigonometric-functions",
        title: "Trigonometric Functions",
        more: [cbse("trigonometric-functions", [...range(1, 7), "C09"]), cbse("compound-and-multiple-angles", [...range(1, 6), "C08", "C09"])],
      },
      // Ex 4.1 and its miscellaneous exercise only: no polar form, square roots or quadratics.
      { ...cbse("complex-numbers", [...range(1, 8), ...range(10, 12)]), title: "Complex Numbers and Quadratic Equations" },
      { chapter: "linear-inequalities" },
      cbse("permutations-and-combinations", [...range(1, 6), ...range(8, 12)]),
      cbse("binomial-theorem", ["C01", "C06", "C07", "C10"]),
      // G.P. and the means; the miscellaneous exercise leans on A.P. from Class 10.
      cbse("sequences-and-series", [...range(15, 17), ...range(1, 5), "C10", "C11"]),
      { ...cbse("straight-line", ["C01", ...range(3, 12)]), title: "Straight Lines", slug: "straight-lines" },
      {
        ...cbse("circle", ["C01", "C03", "C04"]),
        slug: "conic-sections",
        title: "Conic Sections",
        more: [cbse("conic-sections", [...range(1, 3), ...range(6, 8), "C11", "C12"])],
      },
      { chapter: "introduction-to-3d-geometry" },
      {
        ...cbse("limits", [...range(1, 5), "C07"]),
        slug: "limits-and-derivatives",
        title: "Limits and Derivatives",
        more: [cbse("differentiation", ["C01", ...range(3, 6)])],
      },
      // Mean deviation (with correcting a mean), then the book's range, variance and S.D.
      { ...cbse("statistics", ["C04", "C10"]), more: [cbse("measures-of-dispersion", range(1, 5))] },
      cbse("probability", range(1, 6)),
      {
        ...cbse("sets-and-relations", ["C15", "C16"]),
        slug: "relations-and-functions-12",
        title: "Relations and Functions",
        standard: 12,
        more: [cbse("functions", ["C04", "C10", "C11"])],
      },
      { ...cbse("trigonometric-functions-12", range(12, 15)), slug: "inverse-trigonometric-functions", title: "Inverse Trigonometric Functions" },
      { ...cbse("determinants-and-matrices", range(7, 12)), slug: "matrices", title: "Matrices", standard: 12 },
      {
        ...cbse("determinants-and-matrices", ["C01", "C02", "C06"]),
        slug: "determinants",
        title: "Determinants",
        standard: 12,
        more: [cbse("matrices", [...range(4, 9), "C11"])],
      },
      {
        ...cbse("continuity", [...range(1, 3), "C05"]),
        slug: "continuity-and-differentiability",
        title: "Continuity and Differentiability",
        standard: 12,
        more: [cbse("differentiation", ["C02"]), { chapter: "differentiation-12" }],
      },
      cbse("application-of-derivatives", ["C03", "C04", ...range(8, 10), "C12"]),
      {
        ...cbse("indefinite-integration", [...range(1, 4), ...range(6, 11)]),
        slug: "integrals",
        title: "Integrals",
        more: [cbse("definite-integration", [...range(2, 7), "C10"])],
      },
      { chapter: "application-of-definite-integration", slug: "application-of-integrals", title: "Application of Integrals" },
      cbse("differential-equations", ["C01", "C03", "C04", ...range(6, 9)]),
      { ...cbse("vectors", [...range(1, 6), "C08", "C09"]), slug: "vector-algebra", title: "Vector Algebra" },
      {
        ...cbse("vectors", ["C07"]),
        slug: "three-dimensional-geometry",
        title: "Three Dimensional Geometry",
        more: [cbse("line-and-plane", range(1, 5))],
      },
      lpp(["C12", "C13"]),
      { ...cbse("probability", range(7, 10)), slug: "probability-12", standard: 12 },
      ...ncertPhysics("cbse"),
      ...ncertChemistry("cbse"),
    ],
  },
  {
    slug: "mht-cet",
    title: "MHT-CET",
    short: "MHT-CET",
    group: "school",
    tagline: "Maharashtra engineering entrance",
    // Two-way link with PYQ Vault, piloted on Circle (owner, 2026-10-19; PLAN.md "PYQ Vault link").
    pyqvault: { exam: "mht-cet", subject: "maths" },
    // PYQ Vault's chapters and names (owner, 2026-10-19; PLAN.md "MHT-CET Maths course"): the whole
    // Std XII book and the Std XI chapters CET asks. Measures of Dispersion is out: none of the 2025–26
    // papers ask it, and the syllabus reportedly swapped it for Conic Sections.
    chapters: [
      book("compound-and-multiple-angles", 10),
      book("straight-line", 12),
      { chapter: "circle", pyqvault: "circle" },
      book("conic-sections", 14),
      { chapter: "complex-numbers", coverage: cnMaharashtra },
      book("permutations-and-combinations", 14),
      {
        // 3 of the 69 PYQs are about sets; keep what Functions builds on (roster form, power set,
        // intervals, Cartesian product, relations). Approved by the owner 2026-10-19.
        chapter: "sets-and-relations",
        coverage: { ids: ["C01", "C02", "C09", "C10", "C11", "C12", "C13"], status: "approved" },
        title: "Sets, Relations and Functions",
        more: [book("functions", 11)],
      },
      { ...book("limits", 9), more: [{ chapter: "continuity" }] },
      { chapter: "mathematical-logic" },
      // Examined as Std XII matrices; the Std XI determinants come first.
      { ...book("determinants-and-matrices", 12), standard: 12, more: [{ chapter: "matrices" }] },
      book("trigonometric-functions-12", 15),
      { chapter: "pair-of-straight-lines" },
      { chapter: "vectors" },
      { chapter: "line-and-plane" },
      lpp([]),
      { chapter: "differentiation", standard: 12, more: [{ chapter: "differentiation-12" }] },
      // The book's ten and MHT-CET's angle between curves; CBSE's absolute extrema (C12) stays out.
      { ...book("application-of-derivatives", 11), title: "Applications of Derivative" },
      { chapter: "indefinite-integration" },
      book("definite-integration", 7),
      { chapter: "application-of-definite-integration", title: "Applications of Definite Integral" },
      book("differential-equations", 9),
      { ...book("probability", 10), title: "Probability Distribution", standard: 12, more: [{ chapter: "probability-distributions" }] },
      { chapter: "binomial-distribution" },
      // Physics: PYQ Vault's 24 chapters (owner, 2026-11-26; PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET
      // and NDA"), the books' chapters whole, in book order. CET examines the Std XI and XII halves of
      // electrostatics, current, magnetism and semiconductors as one chapter each; it doesn't list Std XI's
      // Electromagnetic Waves and Communication System.
      { ...book("units-measurements", 7), title: "Units and Measurement" },
      { chapter: "mathematical-methods", slug: "motion-in-a-plane", title: "Motion in a Plane", more: [{ chapter: "motion-in-a-plane" }] },
      book("laws-of-motion", 7),
      book("gravitation", 7),
      { chapter: "mechanical-properties-solids" },
      book("thermal-properties", 8),
      { chapter: "sound" },
      { ...book("optics", 8), title: "Optics (Ray)" },
      { chapter: "rotational-dynamics" },
      book("fluids", 11),
      { ...book("kinetic-theory", 12), title: "Kinetic Theory of Gases" },
      { chapter: "thermodynamics" },
      { chapter: "oscillations" },
      { chapter: "superposition-of-waves" },
      { chapter: "wave-optics" },
      { ...book("electrostatics", 6), standard: 12, more: [{ chapter: "electrostatics-12" }] },
      { ...book("electric-current", 6), slug: "current-electricity", title: "Current Electricity", standard: 12, more: [{ chapter: "current-electricity" }] },
      { chapter: "magnetic-fields-current", title: "Magnetic Fields Due to Electric Current" },
      { chapter: "magnetism", slug: "magnetic-materials", title: "Magnetic Materials", standard: 12, more: [{ chapter: "magnetic-materials" }] },
      { chapter: "electromagnetic-induction" },
      { chapter: "ac-circuits" },
      book("dual-nature", 8),
      book("atoms-nuclei", 11),
      { chapter: "semiconductors", slug: "semiconductor-devices", title: "Semiconductor Devices", standard: 12, more: [{ chapter: "semiconductor-devices" }] },
      // Chemistry: PYQ Vault's 30 chapters (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA"), the books'
      // chapters whole, in book order. CET splits Hydrocarbons four ways, files the analytical chapter's formulas and
      // stoichiometry (book 2.4 to 2.7) under Some Basic Concepts, and doesn't list Analytical Techniques, Chemical
      // Equilibrium, Nuclear Chemistry or Chemistry in Everyday Life.
      { ...book("basic-concepts-chemistry", 7), more: [chm("analytical-chemistry", range(4, 8))] },
      book("structure-of-atom", 7),
      { chapter: "chemical-bonding", title: "Chemical Bonding and Molecular Structure" },
      { chapter: "redox-reactions" },
      { chapter: "periodic-table" },
      book("s-block-elements", 6),
      book("p-block-13-14-15", 7),
      { chapter: "states-of-matter" },
      { chapter: "adsorption-colloids", slug: "surface-chemistry", title: "Surface Chemistry" },
      book("organic-chemistry-basics", 8),
      { ...chm("hydrocarbons", range(1, 2)), slug: "alkanes", title: "Alkanes" },
      { ...chm("hydrocarbons", range(3, 5)), slug: "alkenes", title: "Alkenes" },
      { ...chm("hydrocarbons", ["C06"]), slug: "alkynes", title: "Alkynes" },
      { ...chm("hydrocarbons", range(7, 8)), slug: "aromatic-compounds", title: "Aromatic Compounds" },
      { chapter: "solid-state" },
      { chapter: "solutions", title: "Solutions and Colligative Properties" },
      { chapter: "ionic-equilibria" },
      { chapter: "chemical-thermodynamics", title: "Chemical Thermodynamics and Energetics" },
      book("electrochemistry", 10),
      { chapter: "chemical-kinetics" },
      { chapter: "p-block-16-17-18" },
      book("transition-elements", 9),
      book("coordination-compounds", 10),
      { chapter: "halogen-derivatives" },
      { chapter: "alcohols-phenols-ethers" },
      { chapter: "aldehydes-ketones-acids" },
      { chapter: "amines" },
      book("biomolecules", 7),
      { chapter: "polymers" },
      { chapter: "green-chemistry-nanochemistry" },
    ],
  },
  {
    slug: "jee-main",
    title: "JEE Main",
    short: "JEE Main",
    group: "school",
    tagline: "National engineering entrance",
    // Maths: PYQ Vault's chapters and names (owner, 2026-11-27: "Ok"; PLAN.md "JEE Main Maths course"), in NCERT's
    // order. The 2024 syllabus dropped mathematical reasoning, heights and distances, properties of triangles, planes,
    // linear programming and the binomial theorem for other indices; their concepts stay out.
    chapters: [
      { chapter: "sets-and-relations", slug: "relations-and-functions", title: "Relations and Functions", more: [{ chapter: "functions" }] },
      {
        ...jeeMaths("angle-measurement", ["C01", "C03"]),
        slug: "trigonometric-identities",
        title: "Trigonometric Identities",
        more: [jeeMaths("trigonometric-functions", range(1, 9)), { chapter: "compound-and-multiple-angles" }],
      },
      { chapter: "complex-numbers" },
      { chapter: "quadratic-equations" },
      { chapter: "permutations-and-combinations" },
      jeeMaths("binomial-theorem", [...range(1, 7), "C10", "C11"]),
      jeeMaths("sequences-and-series", [...SERIES_XI, "C22"]),
      { chapter: "straight-line", slug: "straight-lines", title: "Straight Lines" },
      { chapter: "circle", slug: "conic-sections", title: "Conic Sections", more: [{ chapter: "conic-sections" }] },
      { chapter: "limits", slug: "limits-and-continuity", title: "Limits and Continuity", more: [{ chapter: "continuity" }] },
      // Mean, median, mode and mean deviation, then the book's variance and S.D.; no graphs, correlation or regression.
      { ...jeeMaths("statistics", ["C01", ...range(3, 8), "C10"]), more: [{ chapter: "measures-of-dispersion" }] },
      { ...jeeMaths("trigonometric-functions-12", range(12, 15)), slug: "inverse-trigonometric-functions", title: "Inverse Trigonometric Functions" },
      { ...jeeMaths("trigonometric-functions-12", range(1, 5)), slug: "trigonometric-equations", title: "Trigonometric Equations" },
      {
        ...jeeMaths("determinants-and-matrices", range(7, 13)),
        slug: "matrices",
        title: "Matrices",
        standard: 12,
        more: [jeeMaths("matrices", ["C12"])],
      },
      {
        ...jeeMaths("determinants-and-matrices", range(1, 6)),
        slug: "determinants",
        title: "Determinants",
        standard: 12,
        more: [jeeMaths("matrices", range(3, 11))],
      },
      { chapter: "differentiation", standard: 12, more: [{ chapter: "differentiation-12" }] },
      { chapter: "application-of-derivatives" },
      { chapter: "indefinite-integration" },
      { chapter: "definite-integration" },
      { chapter: "application-of-definite-integration", slug: "application-of-integrals", title: "Application of Integrals" },
      { chapter: "differential-equations" },
      // Direction cosines (Vectors C07) are 3D Geometry; lines only, since planes left the syllabus.
      { ...jeeMaths("vectors", [...range(1, 6), ...range(8, 13)]), slug: "vector-algebra", title: "Vector Algebra" },
      {
        chapter: "introduction-to-3d-geometry",
        slug: "three-dimensional-geometry",
        title: "Three Dimensional Geometry",
        standard: 12,
        more: [jeeMaths("vectors", ["C07"]), jeeMaths("line-and-plane", range(1, 5))],
      },
      // Discrete random variables only.
      { chapter: "probability", standard: 12, more: [jeeMaths("probability-distributions", range(1, 4)), { chapter: "binomial-distribution" }] },
      ...ncertPhysics("jee"),
      ...ncertChemistry("jee"),
    ],
  },
  {
    slug: "neet",
    title: "NEET",
    short: "NEET",
    group: "school",
    tagline: "National medical entrance",
    // Physics (owner, 2026-11-26), then chemistry (2026-11-27); Experimental Skills is left out (no PYQs). Biology waits.
    chapters: [...ncertPhysics("neet"), ...ncertChemistry("neet")],
  },
  {
    slug: "nda",
    title: "NDA",
    short: "NDA",
    group: "school",
    tagline: "UPSC NDA & NA, Mathematics, Physics and Chemistry",
    // PYQ Vault's chapters that the pool covers (owner, 2026-10-19; PLAN.md "NDA Maths course"); the
    // phase 2b chapters (Logarithms, Height & Distance, Binary Numbers, the sphere) are built for NDA.
    // NDA's syllabus has no polar coordinates, Rolle or mean value theorems, approximations,
    // continuous distributions, linear programming beyond graphing inequations, or Std XII angle
    // between curves and two circles. The owner approved every list on 2026-10-19.
    chapters: [
      { chapter: "angle-measurement", title: "Trigonometric Identities", more: [nda("trigonometric-functions", range(1, 9)), { chapter: "compound-and-multiple-angles" }] },
      { chapter: "heights-and-distances", title: "Height & Distance" },
      { ...nda("straight-line", range(1, 12)), title: "Lines" },
      { ...nda("circle", range(1, 8)), title: "Circles" },
      { ...nda("conic-sections", range(1, 14)), title: "Conics" },
      // Averages, graphs, mean deviation, correlation and regression, then the book's variance and S.D.
      { chapter: "statistics", more: [{ chapter: "measures-of-dispersion" }] },
      { chapter: "probability" },
      { chapter: "quadratic-equations" },
      {
        chapter: "complex-numbers",
        coverage: {
          ids: [...CN_ALL, "C09", "C13", "C17", "C20", "C21", "C22", "C23", ...CN_LOCI],
          unsure: ["C09", "C13", "C22", ...CN_LOCI],
          status: "approved",
        },
      },
      { ...nda("sequences-and-series", SERIES_XI), title: "Sequence & Series" },
      { ...nda("permutations-and-combinations", range(1, 14)), title: "Permutation & Combination" },
      nda("binomial-theorem", range(1, 10)),
      { chapter: "sets-and-relations", title: "Sets & Relations" },
      { chapter: "binary-numbers" },
      // Functions' logarithm rules (C07) open NDA's Logarithms; Functions keeps the rest.
      { ...nda("functions", ["C07"]), slug: "logarithms", title: "Logarithms", more: [{ chapter: "logarithms" }] },
      nda("functions", [...range(1, 6), ...range(8, 12)]),
      { ...nda("limits", range(1, 9)), title: "Limits & Continuity", more: [nda("continuity", range(1, 5))] },
      // One-variable inequalities first (NDA asks double inequalities and signs; built for CBSE, owner
      // 2026-10-21), then "linear inequations of two variables by graphs": the graphing half of Linear Programming.
      { chapter: "linear-inequalities", more: [nda("linear-programming", range(1, 4))] },
      { chapter: "determinants-and-matrices", title: "Matrices & Determinants", standard: 12, more: [{ chapter: "matrices" }] },
      // Std XII Trigonometric Functions is three NDA chapters (C06, polar coordinates, isn't in NDA).
      { ...nda("trigonometric-functions-12", range(1, 5)), slug: "trigonometric-equations", title: "Trigonometric Equations" },
      { ...nda("trigonometric-functions-12", [...range(7, 11), "C16"]), slug: "properties-of-triangle", title: "Properties of Triangle" },
      { ...nda("trigonometric-functions-12", range(12, 15)), slug: "inverse-trigonometry", title: "Inverse Trigonometry" },
      // Direction cosines (Vectors C07) are 3D Geometry in NDA.
      nda("vectors", [...range(1, 6), ...range(8, 13)]),
      { chapter: "line-and-plane", title: "3D Geometry", more: [nda("vectors", ["C07"]), { chapter: "sphere" }] },
      { chapter: "differentiation", standard: 12, more: [{ chapter: "differentiation-12" }] },
      nda("application-of-derivatives", [...range(1, 4), ...range(8, 10)]),
      { chapter: "indefinite-integration" },
      { chapter: "definite-integration" },
      { chapter: "application-of-definite-integration", title: "Applications of Integration" },
      nda("differential-equations", range(1, 9)),
      // "Random variable as function on a sample space", then the binomial distribution.
      { ...nda("probability-distributions", range(1, 4)), title: "Binomial Distribution", slug: "binomial-distribution", more: [{ chapter: "binomial-distribution" }] },
      // Physics: PYQ Vault's 14 chapters (owner, 2026-11-26); Energy Sources and Astronomy and Space are built for
      // NDA, and the general-knowledge topics (scientists, acronyms) are left out. NDA asks Class 9–12
      // basics in one step, so each takes what NDA's syllabus or its 2017–26 papers ask. Heat sits in Std XI, where
      // most of its papers are (calorimetry, thermometry).
      { ...phy("units-measurements", [...range(1, 4), "C07"], ["C07"]), slug: "units-measurement-and-dimensions", title: "Units, Measurement and Dimensions", standard: 11 },
      {
        ...phy("mathematical-methods", range(1, 5), ["C05"]),
        slug: "kinematics-and-motion",
        title: "Kinematics and Motion",
        standard: 11,
        more: [{ chapter: "motion-in-a-plane" }, phy("rotational-dynamics", [...range(1, 4), "C06"], ["C04"])],
      },
      {
        ...phy("laws-of-motion", ["C01", "C02", "C04", "C06"]),
        slug: "laws-of-motion-and-forces",
        title: "Laws of Motion and Forces",
        standard: 11,
        // Friction is taught in the MH Solids chapter; PYQ Vault files moment of inertia here.
        more: [phy("mechanical-properties-solids", ["C07"]), phy("rotational-dynamics", ["C07"])],
      },
      // Collisions need work and energy (NCERT teaches them here); torque and equilibrium are the pool's share of simple machines.
      { ...phy("laws-of-motion", ["C03", "C08", "C05", "C07", "C09"]), slug: "work-energy-and-power", title: "Work, Energy and Power", standard: 11 },
      { ...phy("gravitation", range(1, 7)), standard: 11 },
      {
        ...phy("thermal-properties", range(1, 7)),
        slug: "heat-and-thermodynamics",
        title: "Heat and Thermodynamics",
        standard: 11,
        more: [phy("thermodynamics", [...range(1, 8), "C10"]), phy("kinetic-theory", ["C07"], ["C07"])],
      },
      { ...phy("sound", [...range(1, 4), "C06"]), standard: 11, more: [phy("superposition-of-waves", ["C13"])] },
      {
        ...phy("optics", range(1, 10), ["C07"]),
        slug: "light-and-optics",
        title: "Light and Optics",
        standard: 11,
        // PYQ Vault files the spectrum here; one 2023 paper asks that light is transverse.
        more: [phy("em-waves-communication", ["C01", "C02"]), phy("wave-optics", ["C06"], ["C06"])],
      },
      { ...phy("fluids", ["C01", "C02", "C12", "C03", "C06", "C07"], ["C06"]), slug: "fluid-mechanics-and-properties-of-matter", title: "Fluid Mechanics and Properties of Matter", standard: 12 },
      { ...phy("oscillations", [...range(1, 3), ...range(7, 9)]), slug: "oscillations-and-waves", title: "Oscillations and Waves", standard: 12 },
      {
        ...phy("electrostatics", range(1, 4)),
        slug: "electricity-and-magnetism",
        title: "Electricity and Magnetism",
        standard: 12,
        more: [
          phy("electrostatics-12", ["C05", "C08", "C10", "C11", "C12"], ["C11", "C12"]),
          { chapter: "electric-current" },
          phy("current-electricity", [...range(1, 3), "C09", "C10"], ["C09", "C10"]),
          { chapter: "magnetism" },
          phy("magnetic-fields-current", ["C01", ...range(4, 6), ...range(9, 11)], ["C09"]),
          phy("magnetic-materials", ["C01", "C05", "C08"], ["C08"]),
          // Generators and transformers come from the papers; motional emf stands in for Fleming's right-hand rule.
          phy("electromagnetic-induction", ["C01", "C02", "C04", "C06", "C13"], ["C04"]),
          phy("ac-circuits", ["C01"], ["C01"]),
        ],
      },
      {
        ...phy("dual-nature", [...range(1, 4), "C06"], ["C06"]),
        slug: "modern-physics",
        title: "Modern Physics",
        standard: 12,
        more: [
          phy("atoms-nuclei", [...range(1, 4), ...range(6, 8), "C11"]),
          phy("semiconductors", range(1, 4), ["C01", "C04"]),
          phy("semiconductor-devices", ["C05"], ["C05"]),
        ],
      },
      // Built for NDA: general science the books don't teach.
      { chapter: "energy-sources" },
      { chapter: "astronomy-and-space" },
      // Chemistry: PYQ Vault's NDA chapters but Practical Chemistry (three questions, one paper), placed by its rulings
      // against the books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA"). NDA asks Class 9 and 10
      // general science, so each takes the books' basics, filed under Std XI.
      {
        ...chm("basic-concepts-chemistry", ["C01", "C08"]),
        slug: "matter-and-its-states",
        title: "Matter and Its States",
        standard: 11,
        more: [chm("states-of-matter", ["C01", "C07"]), chm("adsorption-colloids", ["C05", "C07"]), { chapter: "analytical-techniques" }],
      },
      {
        ...chm("structure-of-atom", range(1, 7), ["C06"]),
        slug: "atomic-structure-and-periodic-classification",
        title: "Atomic Structure and Periodic Classification",
        standard: 11,
        more: [{ chapter: "periodic-table" }],
      },
      // Bond counting needs overlap and hybridisation; valency sits beside oxidation numbers.
      { ...chm("chemical-bonding", ["C01", "C02", "C04", "C05", "C06", "C07"], ["C05", "C07"]), standard: 11, more: [chm("redox-reactions", ["C02"])] },
      {
        ...chm("basic-concepts-chemistry", range(3, 7)),
        slug: "mole-concept-and-stoichiometry",
        title: "Mole Concept and Stoichiometry",
        standard: 11,
        more: [chm("analytical-chemistry", range(4, 7), ["C07"])],
      },
      // The types of reactions, then displacement as redox, exothermic reactions, electrolysis and precipitation.
      {
        ...chm("basic-concepts-chemistry", ["C09"]),
        slug: "chemical-reactions",
        title: "Chemical Reactions",
        standard: 11,
        more: [
          chm("redox-reactions", ["C01", "C04"]),
          chm("chemical-thermodynamics", ["C07"], ["C07"]),
          chm("electrochemistry", ["C04"]),
          chm("ionic-equilibria", ["C09"], ["C09"]),
        ],
      },
      {
        ...chm("ionic-equilibria", ["C01", "C03", "C05"]),
        slug: "acids-bases-and-salts",
        title: "Acids, Bases and Salts",
        standard: 11,
        more: [chm("s-block-elements", ["C06"]), chm("everyday-chemistry", ["C09"])],
      },
      // Water's anomalies are hydrogen bonding.
      { ...chm("s-block-elements", ["C01", "C02", "C07"]), slug: "hydrogen-and-water", title: "Hydrogen and Water", standard: 11, more: [chm("states-of-matter", ["C02"])] },
      {
        ...chm("p-block-13-14-15", ["C04", "C05"]),
        slug: "carbon-and-its-compounds",
        title: "Carbon and Its Compounds",
        standard: 11,
        more: [
          chm("organic-chemistry-basics", ["C01", "C02", "C04"]),
          chm("hydrocarbons", ["C01", "C04", "C07"], ["C07"]),
          chm("everyday-chemistry", ["C03", "C04"]),
        ],
      },
      // The reactivity series is the electrochemical series; alloys and extraction are the d-block chapter's.
      {
        ...chm("s-block-elements", ["C04"]),
        slug: "metals-and-non-metals",
        title: "Metals and Non-Metals",
        standard: 11,
        more: [chm("electrochemistry", ["C07", "C11"]), chm("transition-elements", ["C05", "C06"])],
      },
      // The Haber, contact and other industrial processes.
      {
        ...chm("chemical-equilibrium", ["C07"]),
        slug: "industrial-and-applied-chemistry",
        title: "Industrial and Applied Chemistry",
        standard: 11,
        more: [chm("p-block-13-14-15", ["C07"]), chm("p-block-16-17-18", ["C04", "C06"], ["C04"]), chm("everyday-chemistry", ["C08"])],
      },
      { ...chm("everyday-chemistry", ["C01", "C02", "C05", "C06", "C07"]), slug: "chemistry-in-everyday-life", standard: 11 },
    ],
  },
  { slug: "cds", title: "CDS", short: "CDS", group: "graduate", tagline: "UPSC CDS, Elementary Mathematics", chapters: [] },
  { slug: "afcat", title: "AFCAT", short: "AFCAT", group: "graduate", tagline: "Air Force entrance, Numerical Ability", chapters: [] },
  { slug: "capf", title: "CAPF", short: "CAPF", group: "graduate", tagline: "UPSC CAPF (AC), General Ability", chapters: [] },
];

/** A course's chapters grouped by school year, 9th to 12th, then any without one; course order within each. */
export function byStandard<T extends { standard?: Standard }>(list: T[]): { standard?: Standard; chapters: T[] }[] {
  return ([9, 10, 11, 12, undefined] as const)
    .map((standard) => ({ standard, chapters: list.filter((c) => c.standard === standard) }))
    .filter((g) => g.chapters.length > 0);
}

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Structural checks on the catalog; [] = valid. */
export function validateCatalog(list: Course[], chapters: Chapter[]): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const groups = new Set(GROUPS.map((g) => g.id));
  for (const course of list) {
    if (seen.has(course.slug)) errors.push(`duplicate course slug ${course.slug}`);
    seen.add(course.slug);
    if (!SLUG.test(course.slug)) errors.push(`${course.slug}: slug must be lowercase words joined by hyphens`);
    if (!groups.has(course.group)) errors.push(`${course.slug}: unknown group ${course.group}`);

    const slugs = new Set<string>();
    for (const entry of course.chapters) {
      const slug = slugOf(entry);
      if (slugs.has(slug)) errors.push(`${course.slug}: course chapter slug ${slug} used twice`);
      slugs.add(slug);
      if (!SLUG.test(slug)) errors.push(`${course.slug}: course chapter slug ${slug} must be lowercase words joined by hyphens`);
      if (entry.pyqvault !== undefined) {
        if (!course.pyqvault) errors.push(`${course.slug}: chapter ${slug} links to PYQ Vault, but the course names no PYQ Vault exam`);
        if (!SLUG.test(entry.pyqvault)) errors.push(`${course.slug}: PYQ Vault slug ${entry.pyqvault} must be lowercase words joined by hyphens`);
      }
    }
    errors.push(...validateShares(course, chapters));

    for (const entry of course.chapters.flatMap(partsOf)) {
      const chapter = chapters.find((c) => c.slug === entry.chapter);
      if (!chapter) {
        errors.push(`${course.slug}: unknown chapter ${entry.chapter}`);
        continue;
      }
      if (chapter.group !== course.group) {
        errors.push(`${course.slug}: chapter ${chapter.slug} belongs to the ${chapter.group} pool, not ${course.group}`);
      }
      if (chapter.group === "school" && chapter.standard === undefined) {
        errors.push(`${course.slug}: chapter ${chapter.slug} needs a standard (9 to 12)`);
      }
      if (entry.coverage) errors.push(...validateCoverage(`${course.slug}/${chapter.slug}`, entry.coverage, chapter));
    }
  }
  return errors;
}

/**
 * A pool chapter in several parts of a course is split: every part needs a list, and no concept
 * may be in two, except in course chapters of different years (a board teaches A.P. in Std X and
 * again in Std XI).
 */
function validateShares(course: Course, chapters: Chapter[]): string[] {
  const errors: string[] = [];
  const bySlug = new Map<string, { part: CoursePart; standard?: Standard }[]>();
  for (const entry of course.chapters) {
    const standard = entry.standard ?? chapters.find((c) => c.slug === partsOf(entry)[0].chapter)?.standard;
    for (const part of partsOf(entry)) bySlug.set(part.chapter, [...(bySlug.get(part.chapter) ?? []), { part, standard }]);
  }
  for (const [slug, held] of bySlug) {
    if (held.length < 2) continue;
    const shares = held.map((h) => h.part);
    if (shares.some((p) => !p.coverage)) {
      // Two parts of one course chapter, or a whole chapter listed again, rather than a split.
      const sameEntry = course.chapters.some((e) => partsOf(e).filter((p) => p.chapter === slug).length > 1);
      errors.push(sameEntry || shares.every((p) => !p.coverage) ? `${course.slug}: chapter ${slug} listed twice` : `${course.slug}: chapter ${slug} is split, so every part needs a list`);
      continue;
    }
    const seen = new Set<string>();
    for (const { part, standard } of held) {
      for (const id of part.coverage!.ids) {
        const key = `${standard} ${id}`;
        if (seen.has(key)) errors.push(`${course.slug}: concept ${id} of chapter ${slug} is in two course chapters`);
        seen.add(key);
      }
    }
  }
  return errors;
}

function validateCoverage(where: string, coverage: Coverage, chapter: Chapter): string[] {
  const errors: string[] = [];
  if (coverage.ids.length === 0) errors.push(`${where}: coverage lists no concepts`);
  const known = new Set(chapter.graph.map((n) => n.id));
  const listed = new Set<ConceptId>();
  for (const id of coverage.ids) {
    if (listed.has(id)) errors.push(`${where}: concept ${id} listed twice`);
    listed.add(id);
    if (!known.has(id)) errors.push(`${where}: unknown concept ${id}`);
  }
  for (const id of coverage.unsure ?? []) {
    if (!listed.has(id)) errors.push(`${where}: unsure concept ${id} is not in the list`);
  }
  return errors;
}

/** The pool chapters a course chapter takes concepts from: its first, then the others. */
export function partsOf(entry: CourseChapter): CoursePart[] {
  return [{ chapter: entry.chapter, coverage: entry.coverage }, ...(entry.more ?? [])];
}

/** A course chapter's URL slug. */
export function slugOf(entry: CourseChapter): string {
  return entry.slug ?? entry.chapter;
}

/**
 * The concepts of `chapter` a part of `course` shows: its list once approved (or for reviewers),
 * and the whole chapter until then. A share of a split chapter shows its list at once: a split
 * places concepts in course chapters and drops none, so there is nothing to wait for.
 */
export function partScope(course: Course, part: { coverage?: Coverage }, chapter: Chapter, { includeDraft = false } = {}): Set<ConceptId> {
  const coverage = part.coverage;
  const split = partsFor(course, chapter.slug).length > 1;
  if (coverage && (coverage.status === "approved" || includeDraft || split)) return new Set(coverage.ids);
  return new Set(chapter.graph.map((n) => n.id));
}

/** Every part of the course that takes in pool chapter `chapterSlug` (several when the course splits it). */
export function partsFor(course: Course, chapterSlug: string): { entry: CourseChapter; part: CoursePart }[] {
  return course.chapters.flatMap((entry) => partsOf(entry).filter((p) => p.chapter === chapterSlug).map((part) => ({ entry, part })));
}

/**
 * The course chapter that takes in pool chapter `chapterSlug`, or null. With `concept`, the
 * one whose share holds that concept, when the course splits the chapter; of several (a concept
 * taught in two years), the one in `standard` if given, else the first.
 */
export function entryFor(
  course: Course,
  chapterSlug: string,
  concept?: { id: ConceptId; chapter: Chapter },
  prefer?: { standard: Standard; chapters: Chapter[] },
): CourseChapter | null {
  const found = partsFor(course, chapterSlug);
  const holding = concept ? found.filter(({ part }) => partScope(course, part, concept.chapter).has(concept.id)) : [];
  const inYear = prefer && holding.find(({ entry }) => resolveEntry(entry, prefer.chapters).standard === prefer.standard);
  return (inYear ?? holding[0] ?? found[0])?.entry ?? null;
}

/** Looks up a course chapter's pool chapters (the catalog is validated, so they exist). */
export function resolveEntry(entry: CourseChapter, chapters: Chapter[]): ResolvedCourseChapter {
  const parts = partsOf(entry).map((p) => ({ chapter: chapters.find((c) => c.slug === p.chapter)!, coverage: p.coverage }));
  const first = parts[0].chapter;
  return { slug: slugOf(entry), title: entry.title ?? first.title, subject: first.subject, standard: entry.standard ?? first.standard, parts };
}

/**
 * Where a lesson in `chapter` leads back to: the course chapter that takes it in (for a split
 * chapter, the one holding concept `conceptId`, in the student's `standard` if it is in two
 * years), or the chapter's own map.
 */
export function mapLink(
  course: Course | null,
  chapter: Chapter,
  chapters: Chapter[],
  conceptId?: ConceptId,
  standard?: Standard | null,
): { href: string; title: string } {
  const prefer = standard ? { standard, chapters } : undefined;
  const entry = course && entryFor(course, chapter.slug, conceptId ? { id: conceptId, chapter } : undefined, prefer);
  if (!course || !entry) return { href: `/learn/${chapter.slug}`, title: chapter.title };
  const resolved = resolveEntry(entry, chapters);
  return { href: `/courses/${course.slug}/${resolved.slug}`, title: `${course.short} · ${resolved.title}` };
}

const PYQ_VAULT = "https://www.pyqvault.com";

/** Where a course chapter's past papers are practised on PYQ Vault, or null if it doesn't link there. */
export function practiceLink(course: Course, entry: CourseChapter): { href: string; label: string } | null {
  if (!course.pyqvault || !entry.pyqvault) return null;
  const { exam, subject } = course.pyqvault;
  return {
    href: `${PYQ_VAULT}/questions/${exam}/${subject}/${entry.pyqvault}?ref=conceptladder`,
    label: `Practise ${course.short} questions on PYQ Vault`,
  };
}

export function coursesIn(group: GroupId, list: Course[] = courses): Course[] {
  return list.filter((c) => c.group === group);
}

export function findCourse(slug: string | null | undefined, list: Course[] = courses): Course | null {
  return list.find((c) => c.slug === slug) ?? null;
}

/** A group id from untrusted input (a cookie), or null. */
export function parseGroup(value: string | null | undefined): GroupId | null {
  return GROUPS.find((g) => g.id === value)?.id ?? null;
}

/** The year a board's page opens on: the one the student picked, else the course's default, else the first. */
export function openingStandard(course: Course, standards: Standard[], remembered: Standard | null): Standard {
  if (remembered && standards.includes(remembered)) return remembered;
  if (course.defaultStandard && standards.includes(course.defaultStandard)) return course.defaultStandard;
  return standards[0];
}

/** The subject a board's Std opens on: the one the student picked, if that Std has it, else its first. */
export function openingSubject(subjects: SubjectId[], remembered: SubjectId | null): SubjectId {
  return remembered && subjects.includes(remembered) ? remembered : subjects[0];
}

/** A subject from untrusted input (a cookie), or null. */
export function parseSubject(value: string | null | undefined): SubjectId | null {
  return value && Object.hasOwn(SUBJECTS, value) ? (value as SubjectId) : null;
}

/** A standard from untrusted input (a cookie), or null. */
export function parseStandard(value: string | null | undefined): Standard | null {
  const standard = Number(value);
  return value && String(standard) === value && standard in STANDARD_TITLE ? (standard as Standard) : null;
}

/**
 * The concepts of `chapter` the course covers. Students get the whole chapter
 * until the coverage is approved; reviewers can ask for the draft.
 */
export function coveredIds(course: Course, chapter: Chapter, { includeDraft = false } = {}): Set<ConceptId> {
  return new Set(partsFor(course, chapter.slug).flatMap(({ part }) => [...partScope(course, part, chapter, { includeDraft })]));
}

/** Concepts of `chapter` that exactly one course covers, mapped to that course's slug. */
export function uniqueConcepts(chapter: Chapter, list: Course[] = courses, opts: { includeDraft?: boolean } = {}): Map<ConceptId, string> {
  const unique = new Map<ConceptId, string>();
  for (const node of chapter.graph) {
    const owners = list.filter((c) => coveredIds(c, chapter, opts).has(node.id));
    if (owners.length === 1) unique.set(node.id, owners[0].slug);
  }
  return unique;
}

/** `href` with `course=<slug>` added, so the student finds their way back to the course. */
export function withCourse(href: string, course: string | undefined): string {
  if (!course) return href;
  return `${href}${href.includes("?") ? "&" : "?"}course=${encodeURIComponent(course)}`;
}

/** What a student can open in the course today: its chapters, and the published concepts it covers. */
export function courseSize(course: Course, chapters: Chapter[]): { chapters: number; concepts: number } {
  let concepts = 0;
  // Each pool chapter once, even when the course splits it.
  for (const slug of new Set(course.chapters.flatMap(partsOf).map((p) => p.chapter))) {
    const chapter = chapters.find((c) => c.slug === slug);
    if (!chapter) continue;
    const covered = coveredIds(course, chapter);
    concepts += chapter.concepts.filter((c) => c.status === "approved" && covered.has(c.id)).length;
  }
  return { chapters: course.chapters.length, concepts };
}
