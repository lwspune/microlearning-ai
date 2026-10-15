import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The radius of a table, garland or ring in the figures. */
const R = 1.3;

/** The place on the ring about `c` at `deg` degrees, `r` from its centre. */
const on = (c: Pt, deg: number, r = R): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(c[0] + r * Math.cos(a)).toFixed(3), +(c[1] + r * Math.sin(a)).toFixed(3)];
};

/** Where a label sits so it points out of the ring from a place at `deg` degrees. */
const outward = (deg: number): FigureElement["labelAt"] => {
  const dirs = ["e", "ne", "n", "nw", "w", "sw", "s", "se"] as const;
  return dirs[Math.round((((deg % 360) + 360) % 360) / 45) % 8];
};

/** Places round a ring, each a point labelled outward with its person or bead. */
const seats = (c: Pt, people: [string, number][], step?: number, tone?: FigureElement["tone"]): FigureElement[] =>
  people.map(([label, deg]) => ({
    kind: "point",
    at: on(c, deg),
    label,
    labelAt: outward(deg),
    ...(tone ? { tone } : {}),
    ...(step === undefined ? {} : { step }),
  }));

const left: Pt = [-2.4, 0];
const right: Pt = [2.4, 0];

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`In a row, $A$, $B$ and $C$ can stand in $3! = 6$ orders. **How many different seatings do they have at a round table?**`,
    reveal: t`Only $2$. Turn the seating $A, B, C$ one seat round and you get $B, C, A$, then $C, A, B$: everyone keeps the same neighbours, so these three are one seating. The $6$ row orders fall into groups of $3$, giving $\frac{6}{3} = 2$: either $B$ is on $A$'s right or $C$ is.`,
  },
  explanation: {
    intuition: [
      t`In a **row**, the seats run from a first to a last, so moving everyone along one seat gives a new order.`,
      t`A **round table** has no first seat: everyone sits round a circle.`,
      t`Turn the whole seating one seat round: everyone keeps the same two **neighbours**, the people beside them, so it is the same seating.`,
      t`Read round from each of its $n$ seats in turn, and one seating gives $n$ different row orders.`,
      t`So the $n!$ row orders make $\frac{n!}{n} = (n-1)!$ seatings.`,
      t`A **garland** or **necklace** can also be turned over, which swaps **clockwise**, the way a clock's hands go, and anticlockwise.`,
    ],
    figure: {
      alt: "Two round tables. At the first, A, B, C and D sit anticlockwise. At the second, the same seating is turned one seat round anticlockwise: an arm turns from A's old seat to A's new one, and D, A, B, C now sit where A, B, C, D sat. Everyone has the same two neighbours, so it is the same seating.",
      axes: "none",
      view: { x: [-4.3, 4.3], y: [-2.4, 2] },
      elements: [
        { kind: "circle", centre: left, r: R, tone: "muted", step: 2 },
        ...seats(left, [["A", 0], ["B", 90], ["C", 180], ["D", 270]], 2),
        { kind: "label", at: [-2.4, -1.75], label: "a seating", labelAt: "s", tone: "muted", step: 2 },
        { kind: "circle", centre: right, r: R, tone: "muted", step: 3 },
        ...seats(right, [["D", 0], ["A", 90], ["B", 180], ["C", 270]], 3),
        { kind: "segment", from: right, to: on(right, 0, 1.1), label: "start", labelAt: "s", tone: "good", step: 3 },
        { kind: "turn", centre: right, r: 1.1, from: 0, to: 90, step: 3 },
        { kind: "label", at: [2.4, -1.75], label: "turned one seat", labelAt: "s", tone: "muted", step: 3 },
        { kind: "label", at: [0, 0], label: "same", labelAt: "n", tone: "good", step: 3 },
      ],
    },
    formal: [
      {
        title: "Round table: fix one person",
        points: [
          t`At a plain round table no seat is marked out: the seats are **not numbered**.`,
          t`Seat one person, $A$, anywhere: every seat is the same until someone sits.`,
          t`Now each other seat is fixed by how many places on from $A$ it is.`,
          t`So the other $n - 1$ people fill these seats like a row: $(n-1)!$ ways.`,
          t`For example, $5$ people sit round a table in $4! = 24$ ways.`,
        ],
        figure: {
          alt: "A round table with five seats. A sits at the top. The other four seats, going anticlockwise from A, are the 1st, 2nd, 3rd and 4th places on from A: fixed places, like seats in a row. The other 4 people fill them in 4! = 24 ways.",
          axes: "none",
          view: { x: [-2.4, 2.4], y: [-2.3, 2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: R, tone: "muted" },
            ...seats([0, 0], [["A", 90]], 2, "good"),
            ...seats([0, 0], [["1st", 162], ["2nd", 234], ["3rd", 306], ["4th", 18]], 3),
            { kind: "label", at: [0, -1.75], label: "4! = 24 ways", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "Numbered seats",
        points: [
          t`When the seats are **numbered**, every seat is different from the others.`,
          t`Then turning everyone round gives a new seating: each person moves to a new number.`,
          t`So it is like a row: $n$ people fill $n$ numbered seats in $n!$ ways.`,
        ],
      },
      {
        title: "Garlands and necklaces",
        points: [
          t`Here beads $A$, $B$, $C$, $D$ go anticlockwise round a garland.`,
          t`Turn it over, and the same beads go $A, B, C, D$ clockwise.`,
          t`People at a table can't be turned over, so there these are two seatings; on a garland they are one.`,
          t`So each garland is counted twice among the $(n-1)!$ table seatings.`,
          t`So $n$ different things make $\frac{(n-1)!}{2}$ garlands or necklaces.`,
          t`This needs $n \ge 3$: with only $2$ things, both ways round are already the same.`,
        ],
        figure: {
          alt: "Two rings of beads. On the first, A, B, C and D go anticlockwise, with a dashed line through A and C. Turned over about that line, the second ring has A and C in place and B and D swapped: now A, B, C, D go clockwise. It is the same garland.",
          axes: "none",
          view: { x: [-4.3, 4.3], y: [-2.4, 2] },
          elements: [
            { kind: "circle", centre: left, r: R, tone: "muted" },
            ...seats(left, [["A", 90], ["B", 180], ["C", 270], ["D", 0]], 1),
            { kind: "label", at: [-2.4, -1.8], label: "anticlockwise", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: on(left, 270, 1), to: on(left, 90, 1), dashed: true, tone: "muted", step: 2 },
            { kind: "circle", centre: right, r: R, tone: "muted", step: 2 },
            ...seats(right, [["A", 90], ["B", 0], ["C", 270], ["D", 180]], 2),
            { kind: "label", at: [2.4, -1.8], label: "clockwise", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [0, 0], label: "same", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Some people always together",
        points: [
          t`Recall: people who must sit together are glued into one **block**, which moves as one unit.`,
          t`Glue the $k$ particular people into one block.`,
          t`The block and the other $n - k$ people make $n - k + 1$ **units**, the things to seat round the table.`,
          t`Round the table, these $n - k + 1$ units sit in $(n-k)!$ ways.`,
          t`Inside the block, the $k$ people can be ordered in $k!$ ways.`,
          t`So there are $(n-k)! \times k!$ seatings.`,
        ],
      },
      {
        title: "Never together",
        points: [
          t`For **never together**, count the opposite and take it away from all the seatings.`,
          t`Never together $=$ all $-$ together.`,
          t`For two people, never together means never side by side.`,
          t`For example, $5$ people with two of them apart: $4! - 3! \times 2!$ $= 24 - 12 = 12$.`,
        ],
      },
      {
        title: "No two side by side",
        points: [
          t`To keep $w$ women apart, no two side by side, seat the $m$ men first ($w \le m$).`,
          t`The $m$ men sit round the table in $(m-1)!$ ways.`,
          t`Between each pair of neighbouring men is one **gap**: $m$ gaps in all.`,
          t`Each woman takes a different gap, so no two women sit side by side.`,
          t`The gaps are now fixed places, like seats in a row, so the women fill them in $^mP_w$ ways.`,
          t`Only the first group seated takes $(m-1)!$: in all, $(m-1)! \times {}^mP_w$.`,
        ],
        figure: {
          alt: "A round table with 4 men, M, seated first. Between each pair of neighbouring men is a gap: 4 gaps in all. Three women, W, each take a different gap, so no two women sit side by side; one gap stays empty.",
          axes: "none",
          view: { x: [-2.4, 2.4], y: [-2.1, 2.1] },
          elements: [
            { kind: "circle", centre: [0, 0], r: R, tone: "muted" },
            ...seats([0, 0], [["M", 90], ["M", 180], ["M", 270], ["M", 0]], 2),
            ...seats([0, 0], [["gap", 45], ["gap", 135], ["gap", 225], ["gap", 315]], 3, "muted").map(
              (e): FigureElement => (e.kind === "point" ? { ...e, hollow: true } : e),
            ),
            ...([45, 135, 225] as const).map((deg): FigureElement => ({
              kind: "point",
              at: on([0, 0], deg),
              label: "W",
              labelAt: outward(deg + 180),
              tone: "good",
              step: 4,
            })),
          ],
        },
      },
    ],
    worked: {
      prompt: t`8 persons, two of them brothers, sit at a round table. In how many ways can they sit so that exactly one person sits between the brothers?`,
      steps: [
        t`Choose the person who sits between the brothers: $6$ ways. The brothers can take the two sides in $2! = 2$ ways.`,
        t`Glue brother, person, brother into one block. The block and the other $5$ persons make $6$ units round the table.`,
        t`$6$ units round a table: $(6-1)! = 5! = 120$ ways.`,
        t`Multiply the choices: $6 \times 2 \times 120 = 1440$.`,
      ],
      answer: t`$1440$ ways.`,
    },
    visualSpec: t`Drag people round a circular table and spin the ring: every turn keeps the same neighbours and lights up as one seating, while flipping a garland over shows its mirror order matching too.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Treats a round table like a row: takes $u!$ for the $u$ people or units round the table instead of $(u-1)!$, so each turn of one seating is counted again`,
      remediation: t`Turning everyone one seat round gives the same seating, since every neighbour stays the same. Fix one person (or block) and arrange the rest: $(u-1)!$ for $u$ units round a table, not $u!$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Mixes up when to halve: halves for people at a table, as if clockwise and anticlockwise were the same, or doesn't halve for a garland or necklace",
      remediation: "Halve only when the ring can be turned over, like a garland or necklace: then clockwise and anticlockwise orders look the same. People at a table have a left and a right side, so the two orders are different seatings.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Forgets the order inside the block: counts the units round the table, but not the $k!$ ways the $k$ glued people can sit inside their block`,
      remediation: t`Seating the block as one unit is only half the job. Then multiply by $k!$, the ways to order the $k$ people inside the block.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses the circle rule twice: after the first group is seated, takes $(r-1)!$ again for the second group or for the order inside a block`,
      remediation: t`Only the first group seated round the table takes the minus one. After that, every place is fixed by its neighbours, like the places in a row, so $r$ people fill $r$ such places in $r!$ ways, not $(r-1)!$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    "With a block of 2 at a table, C07-M2 and C07-M3 both halve the answer, and C07-M4 matches C07-M3; diagnose them with a block of 3 or more, or with 'never together' (C07-Q1, C07-Q5).",
    "C07-M3 needs a block, so it can't show on alternating seatings; C07-M4 is modelled only for a block of 3 or more and for two groups of the same size that alternate.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc I Q10" },
      stem: t`The number of ways in which 5 male and 2 female members of a committee can be seated around a round table so that the two females are not seated together is:`,
      verify: { kind: "value", inputs: { n: "7" }, params: { kind: "apart" } },
      options: [
        { key: "A", text: t`$240$`, correct: false, misconceptionId: "C07-M2", value: "240" },
        { key: "B", text: t`$600$`, correct: false, misconceptionId: "C07-M3", value: "600" },
        { key: "C", text: t`$480$`, correct: true, value: "480" },
        { key: "D", text: t`$3600$`, correct: false, misconceptionId: "C07-M1", value: "3600" },
      ],
      solution: {
        steps: [
          t`All $7$ members round the table: $(7-1)! = 720$ ways.`,
          t`The two females together: glue them into a block. The block and $5$ males make $6$ units: $(6-1)! = 120$, times $2! = 2$ inside the block, so $240$.`,
          t`Not together $=$ all $-$ together $= 720 - 240 = 480$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.5.4 SolvedEx.3" },
      stem: t`In how many ways can 12 different flowers be arranged in a garland so that 4 particular flowers are always together?`,
      verify: { kind: "value", inputs: { n: "12", k: "4" }, params: { kind: "together", flip: "yes" } },
      options: [
        { key: "A", text: t`$967680$`, correct: false, misconceptionId: "C07-M2", value: "967680" },
        { key: "B", text: t`$20160$`, correct: false, misconceptionId: "C07-M3", value: "20160" },
        { key: "C", text: t`$120960$`, correct: false, misconceptionId: "C07-M4", value: "120960" },
        { key: "D", text: t`$483840$`, correct: true, value: "483840" },
      ],
      solution: {
        steps: [
          t`Glue the $4$ particular flowers into one block. The block and the other $8$ flowers make $9$ units.`,
          t`A garland can be turned over, so $9$ units give $\frac{(9-1)!}{2} = \frac{8!}{2} = 20160$ garlands.`,
          t`The $4$ flowers inside the block can be ordered in $4! = 24$ ways: $20160 \times 24 = 483840$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.5.4 SolvedEx.6(ii)" },
      stem: t`In how many ways can 6 gentlemen and 6 ladies sit around a table so that no two ladies sit side by side?`,
      verify: { kind: "value", inputs: { m: "6", w: "6" }, params: { kind: "alternate" } },
      options: [
        { key: "A", text: t`$14400$`, correct: false, misconceptionId: "C07-M4", value: "14400" },
        { key: "B", text: t`$86400$`, correct: true, value: "86400" },
        { key: "C", text: t`$518400$`, correct: false, misconceptionId: "C07-M1", value: "518400" },
        { key: "D", text: t`$43200$`, correct: false, misconceptionId: "C07-M2", value: "43200" },
      ],
      solution: {
        steps: [
          t`Seat the $6$ gentlemen round the table: $(6-1)! = 120$ ways.`,
          t`Between each pair of neighbouring gentlemen is one gap: $6$ gaps, now fixed places. The $6$ ladies fill them in $6! = 720$ ways.`,
          t`$120 \times 720 = 86400$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.5 Q5" },
      stem: t`A committee of 10 members sits around a table. In how many arrangements do the president, the vice president and the secretary sit together?`,
      verify: { kind: "value", inputs: { n: "10", k: "3" }, params: { kind: "together" } },
      options: [
        { key: "A", text: t`$30240$`, correct: true, value: "30240" },
        { key: "B", text: t`$241920$`, correct: false, misconceptionId: "C07-M1", value: "241920" },
        { key: "C", text: t`$5040$`, correct: false, misconceptionId: "C07-M3", value: "5040" },
        { key: "D", text: t`$10080$`, correct: false, misconceptionId: "C07-M4", value: "10080" },
      ],
      solution: {
        steps: [
          t`Glue the president, vice president and secretary into one block. The block and the other $7$ members make $8$ units.`,
          t`$8$ units round a table: $(8-1)! = 7! = 5040$ ways.`,
          t`The three inside the block: $3! = 6$ orders. $5040 \times 6 = 30240$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.5 Q10" },
      stem: t`Fifteen persons sit around a table. The number of arrangements in which two specified persons do not sit side by side is:`,
      verify: { kind: "value", inputs: { n: "15" }, params: { kind: "apart" } },
      options: [
        { key: "A", text: t`$13 \times 14!$`, correct: false, misconceptionId: "C07-M1", value: "1133317785600" },
        { key: "B", text: t`$6 \times 13!$`, correct: false, misconceptionId: "C07-M2", value: "37362124800" },
        { key: "C", text: t`$13 \times 13!$`, correct: false, misconceptionId: "C07-M3", value: "80951270400" },
        { key: "D", text: t`$12 \times 13!$`, correct: true, value: "74724249600" },
      ],
      solution: {
        steps: [
          t`All $15$ persons round the table: $(15-1)! = 14!$ ways.`,
          t`The two side by side: the block and $13$ others make $14$ units, $(14-1)! = 13!$ ways, times $2!$ inside the block: $2 \times 13!$.`,
          t`Not side by side: $14! - 2 \times 13! = 14 \times 13! - 2 \times 13! = 12 \times 13!$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.5.4 SolvedEx.7(ii)" },
      stem: t`In how many ways can 4 married couples sit around a circular table so that men and women alternate?`,
      verify: { kind: "value", inputs: { m: "4", w: "4" }, params: { kind: "alternate" } },
      options: [
        { key: "A", text: t`$144$`, correct: true, value: "144" },
        { key: "B", text: t`$576$`, correct: false, misconceptionId: "C07-M1", value: "576" },
        { key: "C", text: t`$72$`, correct: false, misconceptionId: "C07-M2", value: "72" },
        { key: "D", text: t`$36$`, correct: false, misconceptionId: "C07-M4", value: "36" },
      ],
      solution: {
        steps: [
          t`Seat the $4$ women on alternate seats round the table: $(4-1)! = 6$ ways.`,
          t`That leaves $4$ seats, one between each pair of women, now fixed places. The $4$ men fill them in $4! = 24$ ways.`,
          t`$6 \times 24 = 144$.`,
        ],
      },
    },
  ],
};
