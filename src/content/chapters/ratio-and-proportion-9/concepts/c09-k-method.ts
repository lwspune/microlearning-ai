import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`$\dfrac{4}{6} = \dfrac{10}{15}$. Is $\dfrac{4 \times 10}{6 \times 15}$ equal to $\dfrac{4}{6}$ too?`,
    reveal: t`No. Each ratio is $k = \dfrac{2}{3}$, but $\dfrac{40}{90} = \dfrac{4}{9} = k^2$. Writing $4 = 6k$ and $10 = 15k$ shows why: the two $k$'s multiply. This is the k-method.`,
  },
  explanation: {
    intuition: [
      t`Equal ratios all share one value. Call it $k$, the **common ratio**.`,
      t`For $\dfrac{6}{9} = \dfrac{8}{12}$, both ratios equal $\dfrac{2}{3}$, so $k = \dfrac{2}{3}$.`,
      t`Each numerator is its denominator times $k$: $6 = 9k$ and $8 = 12k$.`,
      t`With letters, put $bk$ in place of $a$ wherever $a$ appears.`,
      t`The letters then cancel, and an expression in $k$ alone is left.`,
      t`If both sides of a result reduce to the same expression in $k$, the result is proved.`,
    ],
    formal: [
      {
        title: "Setting each ratio to k",
        points: [
          t`$a$, $b$, $c$, $d$ are **in proportion** when $\dfrac{a}{b} = \dfrac{c}{d}$.`,
          t`Let $\dfrac{a}{b} = \dfrac{c}{d} = k$. This $k$ is the common ratio.`,
          t`Multiply across: $a = bk$ and $c = dk$.`,
          t`The numerator is the denominator times $k$, not the other way round.`,
          t`Replace $a$ and $c$ everywhere. Keep $b$ and $d$ as they are.`,
        ],
      },
      {
        title: "Proving a result",
        points: [
          t`Show that $\dfrac{5a - 3c}{5b - 3d}$ $= \dfrac{7a - 2c}{7b - 2d}$.`,
          t`LHS $= \dfrac{5bk - 3dk}{5b - 3d}$ $= \dfrac{k(5b - 3d)}{5b - 3d} = k$.`,
          t`RHS $= \dfrac{7bk - 2dk}{7b - 2d}$ $= \dfrac{k(7b - 2d)}{7b - 2d} = k$.`,
          t`Both sides equal $k$, so LHS $=$ RHS.`,
          t`Simplify LHS and RHS separately. Never start from the result you must prove.`,
        ],
      },
      {
        title: "Powers of k",
        points: [
          t`$k$ takes the same power as its letter: $a^2 = (bk)^2 = b^2k^2$.`,
          t`A product of two replaced letters also gives $k^2$: $ac = bk \cdot dk = bdk^2$.`,
          t`So $\dfrac{a^2 + c^2}{b^2 + d^2}$ $= \dfrac{k^2(b^2 + d^2)}{b^2 + d^2} = k^2$, not $k$.`,
          t`Some expressions give neither: $\dfrac{a + b}{b} = \dfrac{bk + b}{b}$ $= k + 1$.`,
          t`Cancel only common **factors**. In $\dfrac{k^2 + 2}{k^2 + 3}$, the $k^2$ does not cancel.`,
        ],
      },
      {
        title: "Continued proportion",
        points: [
          t`$a$, $b$, $c$ are in **continued proportion** when $\dfrac{a}{b} = \dfrac{b}{c}$.`,
          t`Let $\dfrac{a}{b} = \dfrac{b}{c} = k$. Start from the last ratio: $b = ck$.`,
          t`Then $a = bk = ck \times k = ck^2$.`,
          t`Now $a$ and $b$ are both $c$ times a power of $k$.`,
          t`Check: $b^2 = c^2k^2$ and $ac = ck^2 \times c = c^2k^2$, so $b^2 = ac$.`,
          t`After the replacement, $c$ cancels and an expression in $k$ is left.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\dfrac{a}{b} = \dfrac{c}{d}$, show that $\dfrac{3a^2 + 2c^2}{3b^2 + 2d^2}$ $= \dfrac{ac}{bd}$.`,
      steps: [
        t`Let $\dfrac{a}{b} = \dfrac{c}{d} = k$, so $a = bk$ and $c = dk$.`,
        t`LHS numerator: $3b^2k^2 + 2d^2k^2$ $= k^2(3b^2 + 2d^2)$.`,
        t`So LHS $= \dfrac{k^2(3b^2 + 2d^2)}{3b^2 + 2d^2} = k^2$.`,
        t`RHS $= \dfrac{bk \cdot dk}{bd} = \dfrac{bdk^2}{bd} = k^2$.`,
        t`Both sides equal $k^2$, so LHS $=$ RHS.`,
      ],
      answer: t`Both sides simplify to $k^2$, so the result is proved.`,
    },
    visualSpec: t`Two equal ratios with one slider for $k$: the numerators update as $bk$ and $dk$, and a chosen expression shows its value tracking $k$, $k^2$ or another expression in $k$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Continued proportion: writes a = ck as well as b = ck, forgetting a = bk = ck^2",
      remediation: t`In continued proportion $b = ck$, and then $a = bk = ck \times k = ck^2$. So $a$ carries $k^2$, not $k$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: "Turns the ratio upside down: from a/b = k writes b = ak, so a = b/k",
      remediation: t`$\dfrac{a}{b} = k$ means $a = bk$: the numerator is the denominator times $k$.`,
      fallback: { kind: "ext", topic: "solving simple equations (Std VIII)" },
    },
    {
      id: "C09-M3",
      mistake: "Squares the letter but not k: (bk)^2 = b^2 k",
      remediation: t`A power applies to every factor in the bracket: $(bk)^2 = b^2k^2$, so $k$ is squared too.`,
      fallback: { kind: "ext", topic: "laws of indices (Std VIII)" },
    },
    {
      id: "C09-M4",
      mistake: "Believes the k-method always ends at k, whatever the expression",
      remediation: t`The value depends on the expression. Replace the letters and simplify: $a^2$ or $ac$ brings in $k^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Continued proportion: squares the wrong letter, a = c^2 k",
      remediation: t`From $b = ck$ and $a = bk$ we get $a = ck^2$. The square goes on $k$, not on $c$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M6",
      mistake: "Cancels terms common to the numerator and the denominator instead of common factors",
      remediation: t`Only common factors cancel. $k^2 + k + 1$ and $k^2 - k + 1$ share no factor, so the fraction stays as it is.`,
      fallback: { kind: "ext", topic: "simplifying algebraic fractions (Std VIII)" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.5 SolvedEx.6" },
      stem: t`$a$, $b$, $c$ are in continued proportion and $\dfrac{a}{b} = \dfrac{b}{c} = k$. Then $a$, in terms of $c$ and $k$, is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cont", expr: "a" } },
      options: [
        { key: "A", text: t`$\dfrac{c}{k^2}$`, correct: false, misconceptionId: "C09-M2", value: "c/k**2" },
        { key: "B", text: t`$c^2k$`, correct: false, misconceptionId: "C09-M5", value: "c**2*k" },
        { key: "C", text: t`$ck^2$`, correct: true, value: "c*k**2" },
        { key: "D", text: t`$ck$`, correct: false, misconceptionId: "C09-M1", value: "c*k" },
      ],
      solution: {
        steps: [
          t`From $\dfrac{b}{c} = k$: $b = ck$.`,
          t`From $\dfrac{a}{b} = k$: $a = bk$.`,
          t`So $a = ck \times k = ck^2$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q9(i)" },
      stem: t`$a$, $b$, $c$, $d$ are in proportion and $\dfrac{a}{b} = \dfrac{c}{d} = k$. Then $\dfrac{11a^2 + 9ac}{11b^2 + 9bd}$ simplifies to`,
      verify: { kind: "value", inputs: {  }, params: { kind: "prop", expr: "(11*a**2 + 9*a*c)/(11*b**2 + 9*b*d)" } },
      options: [
        { key: "A", text: t`$k^2$`, correct: true, value: "k**2" },
        { key: "B", text: t`$\dfrac{1}{k^2}$`, correct: false, misconceptionId: "C09-M2", value: "k**(-2)" },
        { key: "C", text: t`$\dfrac{k(11b + 9dk)}{11b + 9d}$`, correct: false, misconceptionId: "C09-M3", value: "k*(11*b + 9*d*k)/(11*b + 9*d)" },
        { key: "D", text: t`$k$`, correct: false, misconceptionId: "C09-M4", value: "k" },
      ],
      solution: {
        steps: [
          t`Put $a = bk$ and $c = dk$.`,
          t`Numerator: $11b^2k^2 + 9bk \cdot dk$ $= k^2(11b^2 + 9bd)$.`,
          t`Divide by $11b^2 + 9bd$: the value is $k^2$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q9(iii)" },
      stem: t`$a$, $b$, $c$, $d$ are in proportion and $\dfrac{a}{b} = \dfrac{c}{d} = k$. Then $\dfrac{a^2 + ab + b^2}{a^2 - ab + b^2}$ simplifies to`,
      verify: { kind: "value", inputs: {  }, params: { kind: "prop", expr: "(a**2 + a*b + b**2)/(a**2 - a*b + b**2)" } },
      options: [
        { key: "A", text: t`$2k + 1$`, correct: false, misconceptionId: "C09-M3", value: "2*k + 1" },
        { key: "B", text: t`$k$`, correct: false, misconceptionId: "C09-M4", value: "k" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C09-M6", value: "-1" },
        { key: "D", text: t`$\dfrac{k^2 + k + 1}{k^2 - k + 1}$`, correct: true, value: "(k**2 + k + 1)/(k**2 - k + 1)" },
      ],
      solution: {
        steps: [
          t`Put $a = bk$.`,
          t`Numerator: $b^2k^2 + b^2k + b^2$ $= b^2(k^2 + k + 1)$.`,
          t`Denominator: $b^2k^2 - b^2k + b^2$ $= b^2(k^2 - k + 1)$.`,
          t`Cancel $b^2$: the value is $\dfrac{k^2 + k + 1}{k^2 - k + 1}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.5 SolvedEx.5" },
      stem: t`$a$, $b$, $c$ are in continued proportion and $\dfrac{a}{b} = \dfrac{b}{c} = k$. Then $\dfrac{(a + b)^2}{ab}$ simplifies to`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cont", expr: "(a + b)**2/(a*b)" } },
      options: [
        { key: "A", text: t`$\dfrac{(k + 1)^2}{k}$`, correct: true, value: "(k + 1)**2/k" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C09-M1", value: "4" },
        { key: "C", text: t`$k$`, correct: false, misconceptionId: "C09-M4", value: "k" },
        { key: "D", text: t`$\dfrac{(c + 1)^2}{c}$`, correct: false, misconceptionId: "C09-M5", value: "(c + 1)**2/c" },
      ],
      solution: {
        steps: [
          t`Put $b = ck$ and $a = ck^2$.`,
          t`$a + b = ck(k + 1)$, so $(a + b)^2 = c^2k^2(k + 1)^2$.`,
          t`$ab = ck^2 \times ck = c^2k^3$.`,
          t`Divide: the value is $\dfrac{(k + 1)^2}{k}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q10(i)" },
      stem: t`$a$, $b$, $c$ are in continued proportion and $\dfrac{a}{b} = \dfrac{b}{c} = k$. Then $\dfrac{a}{a + 2b}$ simplifies to`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cont", expr: "a/(a + 2*b)" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{2k + 1}$`, correct: false, misconceptionId: "C09-M2", value: "1/(2*k + 1)" },
        { key: "B", text: t`$\dfrac{c}{c + 2}$`, correct: false, misconceptionId: "C09-M5", value: "c/(c + 2)" },
        { key: "C", text: t`$\dfrac{k}{k + 2}$`, correct: true, value: "k/(k + 2)" },
        { key: "D", text: t`$\dfrac{1}{3}$`, correct: false, misconceptionId: "C09-M1", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Put $b = ck$ and $a = ck^2$.`,
          t`$\dfrac{a}{a + 2b} = \dfrac{ck^2}{ck^2 + 2ck}$ $= \dfrac{ck^2}{ck(k + 2)}$.`,
          t`Cancel $ck$: the value is $\dfrac{k}{k + 2}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q10(ii)" },
      stem: t`$a$, $b$, $c$ are in continued proportion and $\dfrac{a}{b} = \dfrac{b}{c} = k$. Then $\dfrac{a - b}{a - c}$ simplifies to`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cont", expr: "(a - b)/(a - c)" } },
      options: [
        { key: "A", text: t`$\dfrac{k(c - 1)}{ck - 1}$`, correct: false, misconceptionId: "C09-M5", value: "k*(c - 1)/(c*k - 1)" },
        { key: "B", text: t`$\dfrac{k}{k + 1}$`, correct: true, value: "k/(k + 1)" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C09-M1", value: "0" },
        { key: "D", text: t`$\dfrac{1}{k + 1}$`, correct: false, misconceptionId: "C09-M2", value: "1/(k + 1)" },
      ],
      solution: {
        steps: [
          t`Put $b = ck$ and $a = ck^2$.`,
          t`$a - b = ck^2 - ck = ck(k - 1)$.`,
          t`$a - c = ck^2 - c = c(k - 1)(k + 1)$.`,
          t`Cancel $c(k - 1)$: the value is $\dfrac{k}{k + 1}$.`,
        ],
      },
    },
  ],
};
