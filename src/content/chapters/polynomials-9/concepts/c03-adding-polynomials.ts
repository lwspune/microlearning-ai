import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Riya writes $(5x + 3) - (2x + 1) = 3x + 4$. Is she right?`,
    reveal: t`No. The minus sign changes every term in the bracket: $5x + 3 - 2x - 1$ $= 3x + 2$.`,
  },
  explanation: {
    intuition: [
      t`**Like terms** have the same variables with the same powers, like $3x^2$ and $-5x^2$.`,
      t`Only like terms can be added. Their coefficients add; the variables and powers stay the same.`,
      t`$3x^2 + 5x^2 = 8x^2$, just as 3 apples and 5 apples make 8 apples.`,
      t`$x^2$ and $x$ are **unlike terms**: their powers differ. So $x^2 + x$ stays as it is.`,
      t`To subtract a polynomial, change the sign of **every** term in it, then add.`,
    ],
    formal: [
      {
        title: "Adding polynomials",
        points: [
          t`To add polynomials, write them together and group the like terms.`,
          t`Add $2y^2 + 7y + 5$ and $3y^2 - 4y - 3$.`,
          t`Group: $(2y^2 + 3y^2) + (7y - 4y)$ $+ (5 - 3)$.`,
          t`So the sum is $5y^2 + 3y + 2$.`,
          t`A term with no like term in the other polynomial is written down as it is.`,
          t`With two variables, check every power: $m^2n$ and $mn^2$ are unlike, so they stay apart.`,
        ],
      },
      {
        title: "Subtracting polynomials",
        points: [
          t`To subtract a polynomial, change the sign of every term in it and add.`,
          t`So $-(5a^2 - 2a) = -5a^2 + 2a$. Both signs change.`,
          t`Subtract $5a^2 - 2a$ from $7a^2 + 5a + 6$: the polynomial after 'from' comes first.`,
          t`$(7a^2 + 5a + 6) - (5a^2 - 2a)$ $= 7a^2 + 5a + 6 - 5a^2 + 2a$.`,
          t`Group like terms: $(7a^2 - 5a^2) + (5a + 2a) + 6$ $= 2a^2 + 7a + 6$.`,
          t`The polynomial to add to $A$ to get $B$ is $B - A$.`,
        ],
      },
      {
        title: "Word situations as polynomials",
        points: [
          t`Letters stand for numbers that are not known yet.`,
          t`The village Lat has $a$ trees, and $b$ more grow every year.`,
          t`After $x$ years it has $a + bx$ trees: a polynomial in $x$.`,
          t`A two-digit number with tens digit $m$ and units digit $n$ is $10m + n$.`,
          t`When some people leave, subtract: those left are the total minus those who went.`,
        ],
      },
    ],
    worked: {
      prompt: t`Subtract $4p^2 - 3pq + 2$ from $7p^2 + pq - 5$.`,
      steps: [
        t`The polynomial after 'from' comes first: $(7p^2 + pq - 5)$ $- (4p^2 - 3pq + 2)$.`,
        t`Change the sign of every term in the second bracket: $-4p^2 + 3pq - 2$.`,
        t`So we get $7p^2 + pq - 5 - 4p^2 + 3pq - 2$.`,
        t`Group like terms: $(7p^2 - 4p^2) + (pq + 3pq)$ $+ (-5 - 2)$.`,
        t`So the answer is $3p^2 + 4pq - 7$.`,
      ],
      answer: t`$3p^2 + 4pq - 7$`,
    },
    visualSpec: t`Drop term tiles into bins sorted by letters and powers; a minus card in front of a bracket flips the sign of every tile in it before they fall in, and each bin shows its total.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Changes the sign of only the first term of the polynomial being subtracted: A − (b + c) worked as A − b + c",
      remediation: t`A minus sign in front of a bracket changes the sign of every term inside it: $-(b + c) = -b - c$.`,
      fallback: { kind: "ext", topic: "subtracting algebraic expressions (Std VIII)" },
    },
    {
      id: "C03-M2",
      mistake: "Subtracts in the wrong order: 'subtract A from B' or 'B minus A' worked as A − B",
      remediation: t`'Subtract $A$ from $B$' means $B - A$: the polynomial after 'from' comes first. Swapping them flips every sign of the answer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Treats terms with the same letters as like terms whatever their powers: 2x² + 3x = 5x², 3a²b + 2ab² = 5a²b",
      remediation: t`Like terms need the same variables with the same powers. $x^2$ and $x$ are unlike, and so are $a^2b$ and $ab^2$; they stay as separate terms.`,
      fallback: { kind: "ext", topic: "like and unlike terms (Std VIII)" },
    },
    {
      id: "C03-M4",
      mistake: "Adds the powers as well when adding like terms: 2x² + 3x² = 5x⁴",
      remediation: t`When like terms are added, only the coefficients add. The power stays the same: $2x^2 + 3x^2 = 5x^2$.`,
      fallback: { kind: "ext", topic: "adding like terms (Std VIII)" },
    },
    {
      id: "C03-M5",
      mistake: "Adds where it should subtract: ignores the minus sign in front of a bracket",
      remediation: "A minus in front of a bracket means subtract that whole polynomial: change the sign of each of its terms, then add.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Writes down only the terms that combine and drops a term that has no like term in the other polynomial",
      remediation: "A term with no like term is not lost: copy it into the answer as it is.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1, C03-M2 and C03-M5 need a subtracted polynomial; C03-M2 is modelled only for one polynomial minus another. C03-M3 gives the key when no unlike terms share their letters, C03-M4 when no two like terms have letters, and C03-M6 when every term has a like term: draw diagnosing items where they differ.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q2(ii)" },
      stem: t`Add: $-7m^4 + 5m^3 + \sqrt{2}$ and $5m^4 - 3m^3 + 2m^2 + 3m - 6$`,
      verify: { kind: "value", inputs: {  }, params: { polys: "-7*m**4,5*m**3,sqrt(2)|5*m**4,-3*m**3,2*m**2,3*m,-6", signs: "++" } },
      options: [
        { key: "A", text: t`$-2m^{8} + 2m^{6} + 2m^{2} + 3m + \sqrt{2} - 6$`, correct: false, misconceptionId: "C03-M4", value: "-2*m**8 + 2*m**6 + 2*m**2 + 3*m - 6 + sqrt(2)" },
        { key: "B", text: t`$-2m^{4} + 2m^{3} + \sqrt{2} - 6$`, correct: false, misconceptionId: "C03-M6", value: "-2*m**4 + 2*m**3 - 6 + sqrt(2)" },
        { key: "C", text: t`$-2m^{4} + 2m^{3} + 2m^{2} + 3m + \sqrt{2} - 6$`, correct: true, value: "-2*m**4 + 2*m**3 + 2*m**2 + 3*m - 6 + sqrt(2)" },
        { key: "D", text: t`$5m^{4} + \sqrt{2} - 6$`, correct: false, misconceptionId: "C03-M3", value: "5*m**4 - 6 + sqrt(2)" },
      ],
      solution: {
        steps: [
          t`Group like terms: $(-7m^4 + 5m^4) + (5m^3 - 3m^3)$ $= -2m^4 + 2m^3$.`,
          t`$2m^2$ and $3m$ have no like terms, so copy them. The constants give $\sqrt{2} - 6$.`,
          t`So the sum is $-2m^4 + 2m^3 + 2m^2 + 3m$ $+ \sqrt{2} - 6$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q3(ii)" },
      stem: t`Subtract the second polynomial from the first: $2ab^2 + 3a^2b - 4ab$ ; $3ab - 8ab^2 + 2a^2b$`,
      verify: { kind: "value", inputs: {  }, params: { polys: "2*a*b**2,3*a**2*b,-4*a*b|3*a*b,-8*a*b**2,2*a**2*b", signs: "+-" } },
      options: [
        { key: "A", text: t`$4ab^{2}$`, correct: false, misconceptionId: "C03-M3", value: "4*a*b**2" },
        { key: "B", text: t`$a^{4}b^{2} + 10a^{2}b^{4} - 7a^{2}b^{2}$`, correct: false, misconceptionId: "C03-M4", value: "a**2*b**2*(a**2 + 10*b**2 - 7)" },
        { key: "C", text: t`$a^{2}b + 10ab^{2} - 7ab$`, correct: true, value: "a*b*(a + 10*b - 7)" },
        { key: "D", text: t`$5a^{2}b - 6ab^{2} - 7ab$`, correct: false, misconceptionId: "C03-M1", value: "a*b*(5*a - 6*b - 7)" },
      ],
      solution: {
        steps: [
          t`Change the sign of every term of the second: $-3ab + 8ab^2 - 2a^2b$.`,
          t`Group: $(2ab^2 + 8ab^2) + (3a^2b - 2a^2b)$ $+ (-4ab - 3ab)$.`,
          t`$a^2b$ and $ab^2$ are unlike terms. So the answer is $a^2b + 10ab^2 - 7ab$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q3(i)" },
      stem: t`Subtract the second polynomial from the first: $x^2 - 9x + \sqrt{3}$ ; $-19x + \sqrt{3} + 7x^2$`,
      verify: { kind: "value", inputs: {  }, params: { polys: "x**2,-9*x,sqrt(3)|-19*x,sqrt(3),7*x**2", signs: "+-" } },
      options: [
        { key: "A", text: t`$6x^{2} - 10x$`, correct: false, misconceptionId: "C03-M2", value: "2*x*(3*x - 5)" },
        { key: "B", text: t`$-6x^{4} + 10x^{2}$`, correct: false, misconceptionId: "C03-M4", value: "x**2*(10 - 6*x**2)" },
        { key: "C", text: t`$8x^{2} - 28x + 2 \sqrt{3}$`, correct: false, misconceptionId: "C03-M5", value: "8*x**2 - 28*x + 2*sqrt(3)" },
        { key: "D", text: t`$-6x^{2} + 10x$`, correct: true, value: "2*x*(5 - 3*x)" },
      ],
      solution: {
        steps: [
          t`Write $(x^2 - 9x + \sqrt{3})$ $- (7x^2 - 19x + \sqrt{3})$.`,
          t`Change every sign in the second bracket: $x^2 - 9x + \sqrt{3}$ $- 7x^2 + 19x - \sqrt{3}$.`,
          t`Group: $(x^2 - 7x^2) + (-9x + 19x)$ $+ (\sqrt{3} - \sqrt{3})$.`,
          t`So the answer is $-6x^2 + 10x$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q14" },
      stem: t`Which polynomial is to be subtracted from $x^2 + 13x + 7$ to get the polynomial $3x^2 + 5x - 4$?`,
      verify: { kind: "value", inputs: {  }, params: { polys: "x**2,13*x,7|3*x**2,5*x,-4", signs: "+-" } },
      options: [
        { key: "A", text: t`$2x^{2} - 8x - 11$`, correct: false, misconceptionId: "C03-M2", value: "2*x**2 - 8*x - 11" },
        { key: "B", text: t`$4x^{2} + 18x + 3$`, correct: false, misconceptionId: "C03-M5", value: "4*x**2 + 18*x + 3" },
        { key: "C", text: t`$-2x^{2} + 8x + 11$`, correct: true, value: "-2*x**2 + 8*x + 11" },
        { key: "D", text: t`$-2x^{2} + 18x + 3$`, correct: false, misconceptionId: "C03-M1", value: "-2*x**2 + 18*x + 3" },
      ],
      solution: {
        steps: [
          t`Let the polynomial be $P$. Then $(x^2 + 13x + 7) - P$ $= 3x^2 + 5x - 4$.`,
          t`So $P = (x^2 + 13x + 7)$ $- (3x^2 + 5x - 4)$.`,
          t`$P = x^2 + 13x + 7 - 3x^2 - 5x + 4$.`,
          t`Group like terms: $P = -2x^2 + 8x + 11$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q13" },
      stem: t`Simplify: $(8m^2 + 3m - 6) - (9m - 7) + (3m^2 - 2m + 4)$`,
      verify: { kind: "value", inputs: {  }, params: { polys: "8*m**2,3*m,-6|9*m,-7|3*m**2,-2*m,4", signs: "+-+" } },
      options: [
        { key: "A", text: t`$11m^{2} - 8m + 5$`, correct: true, value: "11*m**2 - 8*m + 5" },
        { key: "B", text: t`$11m^{2} - 8m - 9$`, correct: false, misconceptionId: "C03-M1", value: "11*m**2 - 8*m - 9" },
        { key: "C", text: t`$3m^{2} + 5$`, correct: false, misconceptionId: "C03-M3", value: "3*m**2 + 5" },
        { key: "D", text: t`$11m^{2} + 10m - 9$`, correct: false, misconceptionId: "C03-M5", value: "11*m**2 + 10*m - 9" },
      ],
      solution: {
        steps: [
          t`The minus changes both terms of $(9m - 7)$: $8m^2 + 3m - 6 - 9m + 7$ $+ 3m^2 - 2m + 4$.`,
          t`Group: $(8m^2 + 3m^2) + (3m - 9m - 2m)$ $+ (-6 + 7 + 4)$.`,
          t`So the answer is $11m^2 - 8m + 5$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q11" },
      stem: t`At the end of 2016, the population of the village Kovad is $5x^2 - 3y^2 + 2xy$. At the beginning of 2017, $x^2 + xy - y^2$ persons went to another village for education. What is the remaining population of Kovad?`,
      verify: { kind: "value", inputs: {  }, params: { polys: "5*x**2,-3*y**2,2*x*y|x**2,x*y,-y**2", signs: "+-" } },
      options: [
        { key: "A", text: t`$4x^{2} + xy - 2y^{2}$`, correct: true, value: "4*x**2 + x*y - 2*y**2" },
        { key: "B", text: t`$4x^{2} + 3xy - 4y^{2}$`, correct: false, misconceptionId: "C03-M1", value: "4*x**2 + 3*x*y - 4*y**2" },
        { key: "C", text: t`$4x^{4} + x^{2}y^{2} - 2y^{4}$`, correct: false, misconceptionId: "C03-M4", value: "4*x**4 + x**2*y**2 - 2*y**4" },
        { key: "D", text: t`$6x^{2} + 3xy - 4y^{2}$`, correct: false, misconceptionId: "C03-M5", value: "6*x**2 + 3*x*y - 4*y**2" },
      ],
      solution: {
        steps: [
          t`Remaining = population minus those who left: $(5x^2 - 3y^2 + 2xy)$ $- (x^2 + xy - y^2)$.`,
          t`Change every sign in the second bracket: $5x^2 - 3y^2 + 2xy$ $- x^2 - xy + y^2$.`,
          t`Group: $(5x^2 - x^2) + (2xy - xy)$ $+ (-3y^2 + y^2)$.`,
          t`So the remaining population is $4x^2 + xy - 2y^2$.`,
        ],
      },
    },
  ],
};
