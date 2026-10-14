import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`In a row, $A$, $B$ and $C$ can stand in $3! = 6$ orders. **How many different seatings do they have at a round table?**`,
    reveal: t`Only $2$. Turn the seating $A, B, C$ one seat round and you get $B, C, A$, then $C, A, B$: everyone keeps the same neighbours, so these three are one seating. The $6$ row orders fall into groups of $3$, giving $\frac{6}{3} = 2$: either $B$ is on $A$'s right or $C$ is.`,
  },
  explanation: {
    intuition: t`A row has a first seat, so moving everyone along changes the arrangement. A round table has no first seat: turn everyone one place round and nothing has changed, since each person has the same left and right neighbour. So each round-table seating shows up $n$ times among the $n!$ row orders, and there are $\frac{n!}{n} = (n-1)!$ of them. The easy way to see it: seat one person anywhere, then arrange the other $n - 1$ in the fixed seats next to him, like a row. A garland or necklace can also be turned over, which makes clockwise and anticlockwise the same, so you halve once more.`,
    formal: t`**Round table, seats not numbered.** $n$ different people: $(n-1)!$ seatings. Fix one person; the rest fill the other seats like a row.

**Seats numbered.** Every seat is different, as in a row: $n!$.

**Garland or necklace** (it can be turned over), $n \ge 3$ different things: $\frac{(n-1)!}{2}$.

**Some always together.** Glue the $k$ into one block. The block and the other $n - k$ make $n - k + 1$ units round the table: $(n-k)!$ ways, times $k!$ for the order inside the block. **Never together** = all $-$ together.

**No two of one group side by side.** Seat the $m$ men first: $(m-1)!$. The $m$ gaps between them are now fixed places, so $w$ women fill them in $^mP_w$ ways. Only the first group seated gets the $(m-1)!$.`,
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
