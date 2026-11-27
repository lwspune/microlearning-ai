import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A muscle looks like plain red meat. Under a microscope it is striped. What makes the stripes?`,
    reveal: t`Repeated units called sarcomeres: dark bands of thick myosin and light bands of thin actin, lined up end to end.`,
  },
  explanation: {
    intuition: [
      t`Each myofibril is a chain of many **sarcomeres**.`,
      t`Thin **actin** and thick **myosin** filaments overlap like crossed fingers.`,
      t`Muscles work in **antagonistic pairs** with opposite actions.`,
    ],
    formal: [
      {
        title: "The sarcomere",
        points: [
          t`A **sarcomere** is the region between two successive **Z lines**; it is the functional unit.`,
          t`The dark **A band** holds myosin with actin; its centre is the light **H zone** with the **M line**.`,
          t`The light **I bands** contain only actin; adjacent I bands are separated by a Z line.`,
        ],
      },
      {
        title: "Actin and myosin",
        points: [
          t`**Actin** (thin): **F actin** of polymerised G actin, two **tropomyosin** strands, and **troponin**.`,
          t`At rest tropomyosin covers the **active sites**; troponin has affinity for calcium ions.`,
          t`**Myosin** (thick) is made of meromyosins; its globular heads form **cross bridges** with **ATPase** activity.`,
        ],
      },
    ],
    worked: {
      prompt: t`In which band of a sarcomere would you find only thin filaments?`,
      steps: [
        t`Thin filaments are actin; thick ones are myosin.`,
        t`The A band has myosin with actin; the I band has actin alone.`,
      ],
      answer: t`The I band`,
    },
    visualSpec: t`A sarcomere strip between two Z lines: the dark A band in the middle, light I bands at the sides, the H zone and M line at the centre.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks myofibril.",
      remediation: "A myofibril is a chain of many sarcomeres.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks Z-band.",
      remediation: "The Z line is only the boundary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks cross bridges.",
      remediation: "These are myosin heads within it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says only myosin.",
      remediation: "Myosin lies in the A band.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says both overlap.",
      remediation: "Overlap is in the A band.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks M line.",
      remediation: "The M line is in the H zone.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks troponin.",
      remediation: "Troponin binds calcium; tropomyosin covers.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks G actin.",
      remediation: "G actin builds F actin.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks myosin head.",
      remediation: "The head binds there only in contraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says calcium affinity.",
      remediation: "That is troponin, on the thin filament.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says covers sites.",
      remediation: "That is tropomyosin.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says G actin strands.",
      remediation: "That is F actin, the thin filament's backbone.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks flexor–extensor.",
      remediation: "Flexion and extension are opposite actions.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks adductor–abductor.",
      remediation: "Adduction and abduction are opposite.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks levator–depressor.",
      remediation: "Raising and lowering are opposite.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(A)" },
      stem: t`The functional unit of striated muscle is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "unit" } },
      options: [
        { key: "A", text: t`sarcomere`, correct: true, value: "sarcomere_t" },
        { key: "B", text: t`myofibril`, correct: false, misconceptionId: "C01-M1", value: "myofibril_t" },
        { key: "C", text: t`Z-band`, correct: false, misconceptionId: "C01-M2", value: "z_band" },
        { key: "D", text: t`cross bridges`, correct: false, misconceptionId: "C01-M3", value: "cross_bridges" },
      ],
      solution: {
        steps: [
          t`Unit between two Z lines.`,
          t`Sarcomere.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q4(A)" },
      stem: t`The light I band of a sarcomere contains`,
      verify: { kind: "value", inputs: {  }, params: { q: "i_band" } },
      options: [
        { key: "A", text: t`only thin actin filaments`, correct: true, value: "actin_only" },
        { key: "B", text: t`only thick myosin filaments`, correct: false, misconceptionId: "C01-M4", value: "myosin_only" },
        { key: "C", text: t`overlapping actin and myosin filaments`, correct: false, misconceptionId: "C01-M5", value: "actin_and_myosin" },
        { key: "D", text: t`the M line`, correct: false, misconceptionId: "C01-M6", value: "m_line" },
      ],
      solution: {
        steps: [
          t`Light band.`,
          t`Only actin.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q4(A)" },
      stem: t`In a resting muscle, the active sites on F actin are covered by`,
      verify: { kind: "value", inputs: {  }, params: { q: "cover" } },
      options: [
        { key: "A", text: t`G actin`, correct: false, misconceptionId: "C01-M8", value: "g_actin" },
        { key: "B", text: t`the myosin head`, correct: false, misconceptionId: "C01-M9", value: "myosin_head" },
        { key: "C", text: t`tropomyosin`, correct: true, value: "tropomyosin_t" },
        { key: "D", text: t`troponin`, correct: false, misconceptionId: "C01-M7", value: "troponin_t" },
      ],
      solution: {
        steps: [
          t`Two strands on F actin.`,
          t`Tropomyosin.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q4(B)" },
      stem: t`Which feature belongs to the myosin head and not to the thin filament?`,
      verify: { kind: "value", inputs: {  }, params: { q: "head" } },
      options: [
        { key: "A", text: t`ATPase activity that splits ATP`, correct: true, value: "atpase_activity" },
        { key: "B", text: t`strong affinity for calcium ions`, correct: false, misconceptionId: "C01-M10", value: "calcium_affinity" },
        { key: "C", text: t`covering the active sites at rest`, correct: false, misconceptionId: "C01-M11", value: "covers_sites" },
        { key: "D", text: t`a double strand of polymerised G actin`, correct: false, misconceptionId: "C01-M12", value: "g_actin_strands" },
      ],
      solution: {
        steps: [
          t`The head splits ATP.`,
          t`ATPase activity.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(D)" },
      stem: t`Which one of the following is NOT an antagonistic muscle pair?`,
      verify: { kind: "value", inputs: {  }, params: { q: "antagonist" } },
      options: [
        { key: "A", text: t`Sphincter–supinator`, correct: true, value: "sphincter_supinator" },
        { key: "B", text: t`Flexor–extensor`, correct: false, misconceptionId: "C01-M13", value: "flexor_extensor" },
        { key: "C", text: t`Adductor–abductor`, correct: false, misconceptionId: "C01-M14", value: "adductor_abductor" },
        { key: "D", text: t`Levator–depressor`, correct: false, misconceptionId: "C01-M15", value: "levator_depressor" },
      ],
      solution: {
        steps: [
          t`A sphincter closes an opening; a supinator turns the palm.`,
          t`Not a pair.`,
        ],
      },
    },
  ],
};
