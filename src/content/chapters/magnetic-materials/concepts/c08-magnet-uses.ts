import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A scrapyard crane lifts a car with a magnet, then drops it at the flick of a switch. A fridge magnet clings for years. Why is one made of soft iron and the other of steel or alnico?`,
    reveal: t`Because each needs a different hysteresis loop. The crane's core must let go when the current stops: low retentivity. A permanent magnet must keep its magnetism and resist losing it: high retentivity and coercivity.`,
  },
  explanation: {
    intuition: [
      t`A material's hysteresis loop tells you what job it suits.`,
      t`A **permanent magnet** must stay magnetised and resist stray fields: a wide loop.`,
      t`An **electromagnet**'s core must magnetise strongly and let go when the current stops: a narrow loop and a large permeability.`,
      t`A transformer core is taken round its loop fifty times a second, so its loop must be narrow to waste little energy.`,
      t`Iron also draws field lines into itself, so a hollow iron box **shields** the space inside it.`,
    ],
    formal: [
      {
        title: "Permanent magnets",
        points: [
          t`Need high **retentivity**, to stay strongly magnetised, and high **coercivity**, to resist demagnetising.`,
          t`So: a wide loop, a **hard** material such as steel, alnico or a ferrite.`,
        ],
      },
      {
        title: "Electromagnets and cores",
        points: [
          t`A soft iron core in a solenoid gives $B = \mu_0\mu_rnI$; with $\mu_r$ in the thousands the field grows a thousandfold.`,
          t`Low retentivity lets the core lose its magnetism when the current is switched off.`,
          t`A transformer core needs low coercivity and retentivity: a narrow loop, little energy lost each cycle.`,
          t`Uses: cranes, electric bells, loudspeakers, circuit breakers.`,
        ],
      },
      {
        title: "Magnetic shielding",
        points: [
          t`Iron's large permeability draws field lines into its walls.`,
          t`So few lines cross the hollow of an iron box: the field inside is much weaker, though not zero.`,
          t`Delicate instruments are shielded this way.`,
        ],
      },
    ],
    worked: {
      prompt: t`A solenoid of $600$ turns over $30\ \mathrm{cm}$ is wound on a soft iron core of relative permeability $800$, and carries $0.5\ \mathrm{A}$. Find the field in the core. (Take $\mu_0$ $= 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      steps: [
        t`$n = \dfrac{600}{0.30} = 2000$ turns per metre.`,
        t`$B = \mu_0\mu_rnI$ $= 4\pi \times 10^{-7} \times 800 \times 2000 \times 0.5$.`,
        t`$B \approx 1.01\ \mathrm{T}$.`,
      ],
      answer: t`$1.01\ \mathrm{T}$`,
    },
    visualSpec: t`Switch a crane's electromagnet on and off with a soft iron core and with a steel core, and compare what each does to the load.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Thinks a transformer core must keep its magnetism.",
      remediation: "The core is reversed every half cycle; high retentivity would only waste energy. It needs low retentivity.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Chooses a permanent magnet's properties for a core.",
      remediation: "High coercivity and retentivity make a wide loop, with a large energy loss every cycle.",
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks high coercivity makes a narrow loop.",
      remediation: t`Coercivity is the loop's half-width on the $H$ axis: a narrow loop needs low coercivity.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M4",
      mistake: "Thinks only retentivity matters for a permanent magnet.",
      remediation: "With low coercivity a small stray field would demagnetise it: it needs high coercivity too.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks soft iron's properties for a permanent magnet.",
      remediation: "Low retentivity means it would hardly stay magnetised at all.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks only coercivity matters for a permanent magnet.",
      remediation: "With low retentivity it keeps little magnetism to begin with: it needs high retentivity too.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks an electromagnet's core should keep its magnetism.",
      remediation: "An electromagnet must let go when switched off, so its core needs low retentivity.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks an electromagnet's core should resist demagnetising.",
      remediation: "Its magnetism must vanish with the current: low coercivity, not high.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Thinks low permeability lets the field through.",
      remediation: t`A large permeability multiplies the field: $B = \mu_0\mu_rnI$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks iron does not change the field inside the box.",
      remediation: "Iron's large permeability draws the field lines into its walls, away from the hollow.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks the iron gathers the field into the hollow.",
      remediation: "The lines crowd into the iron walls themselves; the hollow inside is left with fewer.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the shielding is perfect.",
      remediation: "A few lines still cross the hollow: the field inside is much weaker but not zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: t`Forgets $\mu_r$.`,
      remediation: t`The core multiplies the solenoid's field: $B = \mu_0\mu_rnI$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: t`Uses the number of turns $N$ for $n$.`,
      remediation: t`$n$ is turns per metre: $n = \dfrac{N}{L}$.`,
      fallback: { kind: "ext", topic: "field inside a solenoid (Magnetic Fields due to Electric Current, Ch.10)" },
    },
    {
      id: "C08-M15",
      mistake: "Leaves the length in cm.",
      remediation: t`Turns per metre need the length in metres: $50\ \mathrm{cm} = 0.5\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.1 (ii)" },
      stem: t`Soft iron is used to make the core of a transformer because of its`,
      verify: { kind: "value", inputs: {  }, params: { ask: "core" } },
      options: [
        { key: "A", text: t`low coercivity and low retentivity`, correct: true, value: "lowc_lowr" },
        { key: "B", text: t`low coercivity and high retentivity`, correct: false, misconceptionId: "C08-M1", value: "lowc_highr" },
        { key: "C", text: t`high coercivity and high retentivity`, correct: false, misconceptionId: "C08-M2", value: "highc_highr" },
        { key: "D", text: t`high coercivity and low retentivity`, correct: false, misconceptionId: "C08-M3", value: "highc_lowr" },
      ],
      solution: {
        steps: [
          t`The core is taken round its loop every cycle, losing the loop's area as heat each time.`,
          t`A narrow loop means low coercivity and low retentivity: soft iron.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.2 (iii)" },
      stem: t`What should the retentivity and coercivity of a permanent magnet be?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "perm" } },
      options: [
        { key: "A", text: t`High retentivity, low coercivity`, correct: false, misconceptionId: "C08-M4", value: "highr_lowc" },
        { key: "B", text: t`Both low`, correct: false, misconceptionId: "C08-M5", value: "lowr_lowc" },
        { key: "C", text: t`Low retentivity, high coercivity`, correct: false, misconceptionId: "C08-M6", value: "lowr_highc" },
        { key: "D", text: t`Both high`, correct: true, value: "highr_highc" },
      ],
      solution: {
        steps: [
          t`High retentivity keeps it strongly magnetised.`,
          t`High coercivity stops stray fields demagnetising it: both high.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.2 (i)" },
      stem: t`Which property of soft iron makes it useful as the core of an electromagnet?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "electro" } },
      options: [
        { key: "A", text: t`A high retentivity, so it holds its magnetism`, correct: false, misconceptionId: "C08-M7", value: "highr" },
        { key: "B", text: t`A high coercivity, so it resists being demagnetised`, correct: false, misconceptionId: "C08-M8", value: "highc" },
        { key: "C", text: t`A low permeability, so the field passes through it freely`, correct: false, misconceptionId: "C08-M9", value: "lowmu" },
        { key: "D", text: t`A large permeability with a low retentivity`, correct: true, value: "highmu_lowr" },
      ],
      solution: {
        steps: [
          t`A large permeability multiplies the solenoid's field.`,
          t`Low retentivity lets the magnetism vanish when the current stops.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.1 (i)" },
      stem: t`How does the Earth's magnetic field at a point inside a hollow iron box compare with the field outside?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "box" } },
      options: [
        { key: "A", text: t`More than outside`, correct: false, misconceptionId: "C08-M11", value: "more" },
        { key: "B", text: t`Exactly zero`, correct: false, misconceptionId: "C08-M12", value: "zero" },
        { key: "C", text: t`Less than outside`, correct: true, value: "less" },
        { key: "D", text: t`The same as outside`, correct: false, misconceptionId: "C08-M10", value: "same" },
      ],
      solution: {
        steps: [
          t`Iron's large permeability draws the field lines into the walls.`,
          t`Few lines cross the hollow, so the field inside is less than outside.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`An electromagnet has $400$ turns wound over $50\ \mathrm{cm}$ on a soft iron core of relative permeability $500$, and carries $1\ \mathrm{A}$. What field does it produce inside the core? (Take $\mu_0$ $= 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { N: "400", L_cm: "50", mur: "500", I: "1" }, params: { ask: "em" } },
      options: [
        { key: "A", text: t`$0.00503\ \mathrm{T}$`, correct: false, misconceptionId: "C08-M15", value: "0.00503000000000000" },
        { key: "B", text: t`$0.503\ \mathrm{T}$`, correct: true, value: "0.503000000000000" },
        { key: "C", text: t`$0.00101\ \mathrm{T}$`, correct: false, misconceptionId: "C08-M13", value: "0.00101000000000000" },
        { key: "D", text: t`$0.251\ \mathrm{T}$`, correct: false, misconceptionId: "C08-M14", value: "0.251000000000000" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{400}{0.5} = 800$ turns per metre.`,
          t`$B = \mu_0\mu_rnI$ $= 4\pi \times 10^{-7} \times 500 \times 800 \times 1$.`,
          t`$B \approx 0.503\ \mathrm{T}$.`,
        ],
      },
    },
  ],
};
