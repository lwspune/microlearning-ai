import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`All $120$ arrangements of the letters of DELHI are listed in dictionary order. Is DELHI near the start or near the end? **Find its exact place without writing the list.**`,
    reveal: t`Near the start: it is **5th**. D and E are the two smallest letters and already sit first, so nothing is skipped there. With DE fixed, the third place holds L, but H and I are smaller: $2 \times 2! = 4$ words (DEHIL, DEHLI, DEIHL, DEILH) come first. DELHI is next.`,
  },
  explanation: {
    intuition: t`A dictionary lists words in blocks: every word starting with the smallest letter, then every word starting with the next one, and so on. With $n$ different letters, each block holds $(n-1)!$ words, because the other letters can be arranged in any order. To reach your word, skip the whole blocks of the smaller first letters. Inside your own block the same thing happens with the second letter, then the third. Count what you skip, then add $1$ for the word itself.`,
    formal: t`**Dictionary order**: compare the first letters; if they match, compare the second letters, and so on. $n$ different letters make $n!$ words.

**Rank of a word**
- **1.** Write its letters in alphabetical order.
- **2.** At each place, from the left, count the **unused** letters smaller than the letter there. Each one starts a block of (letters after this place)$!$ words.
- **3.** Add up these blocks: that is the number of words **before** the word.
- **4.** Rank $=$ words before $+ 1$.

**The $k$th word**: each first letter takes a block of $(n-1)!$ words. Find the block that holds $k$, fix its letter, count on from where that block starts, and repeat with blocks of $(n-2)!$, $(n-3)!$, ...

**Numbers** in increasing order work the same way, with digits in place of letters.`,
    worked: {
      prompt: t`All the words made from the letters of MOTHER, each used once, are listed in dictionary order. Find the rank of MOTHER.`,
      steps: [
        t`In order the letters are E, H, M, O, R, T. Before M come E and H: $2 \times 5! = 240$ words.`,
        t`Fix M. The second letter is O; of the unused E, H, O, R, T, the smaller ones are E and H: $2 \times 4! = 48$ words.`,
        t`Fix MO. The third letter is T; E, H and R are smaller: $3 \times 3! = 18$ words. Fix MOT. The fourth letter is H; only E is smaller: $1 \times 2! = 2$ words.`,
        t`Fix MOTH. E and R are left in order, so nothing more is skipped. Words before MOTHER: $240 + 48 + 18 + 2 = 308$.`,
      ],
      answer: t`MOTHER is the $308 + 1 = 309$th word.`,
    },
    visualSpec: t`Drag through a word's letters one place at a time: the full dictionary list folds into blocks, each block of a smaller letter shrinks to one bar labelled with its count, and the word's own position lights up at the end.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Taking the number of words before the word as its rank, or giving the rank when the number before is asked",
      remediation: t`Adding the blocks gives the number of words **before** yours. Your word comes right after them, so its rank is that count $+ 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "At each place, counting the smaller letters of the whole word, including letters already fixed in earlier places",
      remediation: "A letter fixed in an earlier place can't be used again. At each place count only the **unused** letters smaller than the one there.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M3",
      mistake: "Using one factorial too many: (letters left, including this place)! instead of (letters after this place)!",
      remediation: t`Once a letter is fixed in a place, only the places after it are free. In a 6-letter word each first letter starts $5! = 120$ words, not $6! = 720$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M4",
      mistake: "Stopping after the first letter: counting only the words with a smaller first letter",
      remediation: "After fixing the first letter, repeat the count for the second place, the third, and so on. Every place can push the word further down the list.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "For the kth word, taking k as the number of words before it, so giving the (k + 1)th word",
      remediation: t`The $k$th word has only $k - 1$ words before it. Count on from the start of its block until you reach place $k$ itself, not the place after it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M2 gives the key only for the last word (letters in reverse alphabetical order), C08-M3 only for the first word (letters in order), and C08-M4 whenever the letters after the first are in order (e.g. RAMN). Draw diagnosing items from other words.",
    "C08-M3 on a rank question gives more than n! whenever the first letter is not the smallest, which a student can rule out; tag it on rank items only when the first letter is the smallest (as in C08-Q3 and C08-Q6), or on kth-word items.",
    "C08-M2 is modelled on rank questions only, and C08-M1 on rank and count-before questions; C08-Q1 (the kth word) tags C08-M5, C08-M3 and C08-M4.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q3" },
      stem: t`All the words (with or without meaning) made by using every letter of REMAIN once are listed in dictionary order. The $40$th word in the list is:`,
      verify: { kind: "value", inputs: { k: "40" }, params: { word: "REMAIN", ask: "word" } },
      options: [
        { key: "A", text: t`AINMRE`, correct: true, value: "AINMRE" },
        { key: "B", text: t`AINREM`, correct: false, misconceptionId: "C08-M5", value: "AINREM" },
        { key: "C", text: t`AEMRNI`, correct: false, misconceptionId: "C08-M3", value: "AEMRNI" },
        { key: "D", text: t`AEIMNR`, correct: false, misconceptionId: "C08-M4", value: "AEIMNR" },
      ],
      solution: {
        steps: [
          t`In order the letters are A, E, I, M, N, R. The words starting with A are the first $5! = 120$, so the $40$th starts with A.`,
          t`Inside A, each second letter takes $4! = 24$ words: AE is $1$st to $24$th, AI is $25$th to $48$th. The $40$th starts with AI.`,
          t`Inside AI, each third letter takes $3! = 6$ words: AIE is $25$th to $30$th, AIM $31$st to $36$th, AIN $37$th to $42$nd.`,
          t`Inside AIN, each fourth letter takes $2! = 2$ words: AINE is $37$th and $38$th, AINM $39$th and $40$th. AINMER is $39$th, so the $40$th word is AINMRE.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q3" },
      stem: t`All the words (with or without meaning) made by using every letter of REMAIN once are listed in dictionary order. The rank of REMAIN in the list is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "REMAIN", ask: "rank" } },
      options: [
        { key: "A", text: t`$636$`, correct: false, misconceptionId: "C08-M1", value: "636" },
        { key: "B", text: t`$649$`, correct: false, misconceptionId: "C08-M2", value: "649" },
        { key: "C", text: t`$601$`, correct: false, misconceptionId: "C08-M4", value: "601" },
        { key: "D", text: t`$637$`, correct: true, value: "637" },
      ],
      solution: {
        steps: [
          t`In order the letters are A, E, I, M, N, R. Before R come A, E, I, M, N: $5 \times 5! = 600$ words.`,
          t`Fix R. Of the unused A, E, I, M, N, only A is smaller than E: $1 \times 4! = 24$. Fix RE. Of A, I, M, N, the letters A and I are smaller than M: $2 \times 3! = 12$.`,
          t`Fix REM. A, I, N are left in order, so nothing more is skipped. Words before: $600 + 24 + 12 = 636$, so REMAIN is $637$th.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`All the words (with or without meaning) made by using every letter of CROWN once are listed in dictionary order. The rank of CROWN in the list is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "CROWN", ask: "rank" } },
      options: [
        { key: "A", text: t`$15$`, correct: false, misconceptionId: "C08-M1", value: "15" },
        { key: "B", text: t`$28$`, correct: false, misconceptionId: "C08-M2", value: "28" },
        { key: "C", text: t`$57$`, correct: false, misconceptionId: "C08-M3", value: "57" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`In order the letters are C, N, O, R, W. C is the smallest, so no words come before it at the first place.`,
          t`Fix C. Of N, O, R, W, the letters N and O are smaller than R: $2 \times 3! = 12$. Fix CR. Of N, O, W, only N is smaller than O: $1 \times 2! = 2$. Fix CRO. Of N, W, only N is smaller than W: $1 \times 1! = 1$.`,
          t`Words before: $0 + 12 + 2 + 1 = 15$, so CROWN is $16$th.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`All the words (with or without meaning) made by using every letter of WORLD once are listed in dictionary order. How many words come before WORLD?`,
      verify: { kind: "value", inputs: {  }, params: { word: "WORLD", ask: "before" } },
      options: [
        { key: "A", text: t`$115$`, correct: false, misconceptionId: "C08-M2", value: "115" },
        { key: "B", text: t`$96$`, correct: false, misconceptionId: "C08-M4", value: "96" },
        { key: "C", text: t`$113$`, correct: true, value: "113" },
        { key: "D", text: t`$114$`, correct: false, misconceptionId: "C08-M1", value: "114" },
      ],
      solution: {
        steps: [
          t`In order the letters are D, L, O, R, W. Before W come D, L, O, R: $4 \times 4! = 96$ words.`,
          t`Fix W. Of D, L, O, R, the letters D and L are smaller than O: $2 \times 3! = 12$. Fix WO. Of D, L, R, the letters D and L are smaller than R: $2 \times 2! = 4$. Fix WOR. Of D, L, only D is smaller than L: $1 \times 1! = 1$.`,
          t`Words before WORLD: $96 + 12 + 4 + 1 = 113$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`All the $5$-digit numbers made from the digits $1, 2, 3, 4, 5$, with no digit repeated, are listed in increasing order. The position of $35142$ in the list is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "35142", ask: "rank" } },
      options: [
        { key: "A", text: t`$49$`, correct: false, misconceptionId: "C08-M4", value: "49" },
        { key: "B", text: t`$68$`, correct: true, value: "68" },
        { key: "C", text: t`$67$`, correct: false, misconceptionId: "C08-M1", value: "67" },
        { key: "D", text: t`$77$`, correct: false, misconceptionId: "C08-M2", value: "77" },
      ],
      solution: {
        steps: [
          t`First digit $3$: the numbers starting with $1$ or $2$ come first, $2 \times 4! = 48$ of them.`,
          t`Fix $3$. Of the unused $1, 2, 4, 5$, three are smaller than $5$: $3 \times 3! = 18$. Fix $35$. Nothing unused is smaller than $1$. Fix $351$. Of $2, 4$, only $2$ is smaller than $4$: $1 \times 1! = 1$.`,
          t`Numbers before $35142$: $48 + 18 + 0 + 1 = 67$, so its position is $68$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "authored" },
      stem: t`All the words (with or without meaning) made by using every letter of HISTORY once are listed in dictionary order. The rank of HISTORY in the list is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "HISTORY", ask: "rank" } },
      options: [
        { key: "A", text: t`$260$`, correct: false, misconceptionId: "C08-M2", value: "260" },
        { key: "B", text: t`$289$`, correct: false, misconceptionId: "C08-M3", value: "289" },
        { key: "C", text: t`$61$`, correct: true, value: "61" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C08-M1", value: "60" },
      ],
      solution: {
        steps: [
          t`In order the letters are H, I, O, R, S, T, Y. H and then I are the smallest letters, so nothing is skipped at the first two places.`,
          t`Fix HI. Of O, R, S, T, Y, the letters O and R are smaller than S: $2 \times 4! = 48$. Fix HIS. Of O, R, T, Y, the letters O and R are smaller than T: $2 \times 3! = 12$.`,
          t`Fix HIST. O, R, Y are left in order, so nothing more is skipped. Words before: $48 + 12 = 60$, so HISTORY is $61$st.`,
        ],
      },
    },
  ],
};
