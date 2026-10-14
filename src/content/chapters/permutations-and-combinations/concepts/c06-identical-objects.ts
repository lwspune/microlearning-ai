import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`The word UBUNTU has $6$ letters, so there are $6! = 720$ ways to put them in order. **How many different words do you actually get?**`,
    reveal: t`Only $120$. The three U's look the same, so swapping them changes nothing: each word turns up $3! = 6$ times among the $720$ orders. So there are $\frac{720}{6} = 120$ different words.`,
  },
  explanation: {
    intuition: t`Give the alike letters name tags, like $A_1, A_2, A_3$. Now every letter is different and there are $n!$ orders. Remove the tags: the $3!$ orders that only shuffle $A_1, A_2, A_3$ among themselves all become the same word. So each word was counted $3!$ times, and you divide by $3!$. Every group of alike letters divides out its own factorial.`,
    formal: t`**The rule.** $n$ objects, of which $p$ are alike of one kind, $q$ are alike of another kind, and so on, the rest all different, can be arranged in

$$\frac{n!}{p!\,q!\,\ldots} \text{ ways.}$$

**Why factorials.** $p$ alike letters, if tagged, could be shuffled among themselves in $p!$ ways, not $p$ ways. ASSASSIN has $8$ letters: S four times, A twice. So it has $\frac{8!}{4!\,2!} = \frac{40320}{48} = 840$ arrangements. Each kind gets its own factorial: $4! \times 2!$, never $(4 + 2)!$.

**Together.** Glue the letters into one block. Arrange the block with the other letters using the rule, then arrange the letters inside the block, again dividing for any alike letters there. Multiply.

**Never together, or no leading 0.** Count all the arrangements, then take away the bad ones: never together $=$ all $-$ together. A number can't begin with $0$: take away the arrangements that start with $0$.`,
    worked: {
      prompt: t`How many arrangements of the letters of the word CALCULATOR are there? In how many of them do the vowels come together?`,
      steps: [
        t`CALCULATOR has $10$ letters: C, A and L twice each, and U, T, O, R once. All arrangements: $\frac{10!}{2!\,2!\,2!} = \frac{3628800}{8} = 453600$.`,
        t`The vowels are A, U, A, O. Glue them into one block $P$. Now there are $7$ things to arrange: $P$, C, L, C, L, T, R, with C twice and L twice: $\frac{7!}{2!\,2!} = \frac{5040}{4} = 1260$.`,
        t`Inside the block, A, U, A, O can be arranged in $\frac{4!}{2!} = 12$ ways, since A is used twice.`,
        t`Vowels together: $1260 \times 12 = 15120$.`,
      ],
      answer: t`$453600$ arrangements in all; in $15120$ of them the vowels come together.`,
    },
    visualSpec: t`Tag the alike letters $A_1, A_2, A_3$ and drag them to shuffle: all $3!$ tagged orders light up as one word when the tags are hidden, and the count $\frac{n!}{3!}$ updates as you add or remove alike letters.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Treating alike letters as different: n! arrangements (and g! inside a block)",
      remediation: t`Swapping two alike letters gives the same word, so $n!$ counts each word many times. Divide by $p!$ for each group of $p$ alike letters: $\frac{n!}{p!\,q!\,\ldots}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M2",
      mistake: "Dividing by the counts p × q × ... instead of p! q! ...",
      remediation: t`$p$ alike letters, if they were tagged, could be shuffled among themselves in $p!$ ways, not $p$ ways. So three alike letters are overcounted $3! = 6$ times: divide by $p!\,q!\,\ldots$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M3",
      mistake: "Putting all the repeated letters into one alike group: dividing by (p + q + ...)!",
      remediation: t`Each kind of alike letter is its own group: A's shuffle only with A's, and N's only with N's. Divide by $p!$ for one kind times $q!$ for the other, $p!\,q!$, not $(p + q)!$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Counting every arrangement and forgetting to take away the ones that break the condition (letters side by side, or a 0 in the first place)",
      remediation: t`When a condition rules some arrangements out, count all of them, then subtract the bad ones. Never together $=$ all $-$ together; and a number can't begin with $0$, so take away the arrangements that start with $0$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M2 gives the key when no letter is used 3 or more times (p = p! for p = 2); draw it from a word with a letter used 3+ times.",
    "C06-M3 needs at least two kinds of repeated letters; with one kind it gives the key.",
    "C06-M4 is only detectable on never-together and leading-zero items (cond apart or lead).",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.4 Q1(v)" },
      stem: t`The number of different arrangements of the letters of the word BALBHARATI is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "BALBHARATI", cond: "all" } },
      options: [
        { key: "A", text: t`$3628800$`, correct: false, misconceptionId: "C06-M1", value: "3628800" },
        { key: "B", text: t`$604800$`, correct: false, misconceptionId: "C06-M2", value: "604800" },
        { key: "C", text: t`$30240$`, correct: false, misconceptionId: "C06-M3", value: "30240" },
        { key: "D", text: t`$302400$`, correct: true, value: "302400" },
      ],
      solution: {
        steps: [
          t`BALBHARATI has $10$ letters: B twice, A three times, and L, H, R, T, I once each.`,
          t`Arrangements: $\frac{10!}{2!\,3!} = \frac{3628800}{12} = 302400$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.4 Q5" },
      stem: t`The letters of the word MATHEMATICAL are arranged so that all the vowels come together. The number of such arrangements is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "MATHEMATICAL", cond: "together", grp: "AEI" } },
      options: [
        { key: "A", text: t`$201600$`, correct: true, value: "201600" },
        { key: "B", text: t`$4838400$`, correct: false, misconceptionId: "C06-M1", value: "4838400" },
        { key: "C", text: t`$403200$`, correct: false, misconceptionId: "C06-M2", value: "403200" },
        { key: "D", text: t`$33600$`, correct: false, misconceptionId: "C06-M3", value: "33600" },
      ],
      solution: {
        steps: [
          t`MATHEMATICAL has $12$ letters. The vowels are A, E, A, I, A (A three times); the consonants are M, T, H, M, T, C, L.`,
          t`Glue the $5$ vowels into one block. Now there are $8$ things: the block and the $7$ consonants, with M twice and T twice: $\frac{8!}{2!\,2!} = \frac{40320}{4} = 10080$.`,
          t`Inside the block: $\frac{5!}{3!} = 20$ ways, since A is used three times.`,
          t`Vowels together: $10080 \times 20 = 201600$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc I Q9" },
      stem: t`The number of arrangements of the letters of the word BANANA in which the two N's do not appear side by side is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "BANANA", cond: "apart", x: "N" } },
      options: [
        { key: "A", text: t`$40$`, correct: true, value: "40" },
        { key: "B", text: t`$480$`, correct: false, misconceptionId: "C06-M1", value: "480" },
        { key: "C", text: t`$80$`, correct: false, misconceptionId: "C06-M2", value: "80" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C06-M4", value: "60" },
      ],
      solution: {
        steps: [
          t`BANANA has $6$ letters: B once, A three times, N twice. All arrangements: $\frac{6!}{3!\,2!} = \frac{720}{12} = 60$.`,
          t`N's together: glue NN into one block. Then B, A, A, A and the block are $5$ things with A three times: $\frac{5!}{3!} = 20$.`,
          t`N's not side by side: $60 - 20 = 40$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q5" },
      stem: t`How many numbers formed by using all seven digits $3, 2, 0, 4, 3, 2, 3$ exceed one million?`,
      verify: { kind: "value", inputs: {  }, params: { word: "3204323", cond: "lead", x: "0" } },
      options: [
        { key: "A", text: t`$420$`, correct: false, misconceptionId: "C06-M4", value: "420" },
        { key: "B", text: t`$360$`, correct: true, value: "360" },
        { key: "C", text: t`$4320$`, correct: false, misconceptionId: "C06-M1", value: "4320" },
        { key: "D", text: t`$720$`, correct: false, misconceptionId: "C06-M2", value: "720" },
      ],
      solution: {
        steps: [
          t`The digits are $3$ three times, $2$ twice, and $0$, $4$ once. All arrangements: $\frac{7!}{3!\,2!} = \frac{5040}{12} = 420$.`,
          t`A $7$-digit number exceeds one million unless it starts with $0$ (then it is really a $6$-digit number). Those starting with $0$ arrange the other six digits $3, 3, 3, 2, 2, 4$: $\frac{6!}{3!\,2!} = \frac{720}{12} = 60$.`,
          t`Numbers exceeding one million: $420 - 60 = 360$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.4 Q1(iii)" },
      stem: t`The number of different arrangements of the letters of the word REPRESENT is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "REPRESENT", cond: "all" } },
      options: [
        { key: "A", text: t`$30240$`, correct: true, value: "30240" },
        { key: "B", text: t`$362880$`, correct: false, misconceptionId: "C06-M1", value: "362880" },
        { key: "C", text: t`$60480$`, correct: false, misconceptionId: "C06-M2", value: "60480" },
        { key: "D", text: t`$3024$`, correct: false, misconceptionId: "C06-M3", value: "3024" },
      ],
      solution: {
        steps: [
          t`REPRESENT has $9$ letters: R twice, E three times, and P, S, N, T once each.`,
          t`Arrangements: $\frac{9!}{2!\,3!} = \frac{362880}{12} = 30240$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.4 Q6" },
      stem: t`The number of different arrangements of the letters of the word MAHARASHTRA is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "MAHARASHTRA", cond: "all" } },
      options: [
        { key: "A", text: t`$2494800$`, correct: false, misconceptionId: "C06-M2", value: "2494800" },
        { key: "B", text: t`$990$`, correct: false, misconceptionId: "C06-M3", value: "990" },
        { key: "C", text: t`$415800$`, correct: true, value: "415800" },
        { key: "D", text: t`$39916800$`, correct: false, misconceptionId: "C06-M1", value: "39916800" },
      ],
      solution: {
        steps: [
          t`MAHARASHTRA has $11$ letters: A four times, H twice, R twice, and M, S, T once each.`,
          t`Arrangements: $\frac{11!}{4!\,2!\,2!} = \frac{39916800}{96} = 415800$.`,
        ],
      },
    },
  ],
};
