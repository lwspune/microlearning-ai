import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`The lines $x + y = 4$ and $x - y = 2$ cross at one point. **For which $k$ does the line $2x + 3y = k$ pass through that point too?**`,
    reveal: t`Adding the first two gives $2x = 6$, so they meet at $(3, 1)$. The third line passes through it only if $k = 2(3) + 3(1) = 9$. For any other $k$ the three lines share no point. A single determinant does this test for you.`,
  },
  explanation: {
    intuition: t`Two equations in $x$ and $y$ usually pin down one point. A third equation is a third line, and the three equations have a common solution only if that line also passes through the point. When it does, the rows $(a, b, c)$ of the three equations are tied together, and the determinant made from them is $0$. So to find $k$, you set one determinant to $0$ instead of solving. One catch: parallel lines also make it $0$, so check that the lines really meet.`,
    formal: t`**Condition of consistency.** If $a_1x + b_1y + c_1 = 0$, $a_2x + b_2y + c_2 = 0$ and $a_3x + b_3y + c_3 = 0$ are consistent (have a common solution), then

$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$$

**First, one form.** Write every equation as $ax + by + c = 0$. So $2x - y = 3$ becomes $2x - y - 3 = 0$: its constant is $-3$, not $3$.

**Then find $k$.** Expand along row 1 with signs $+ - +$, set the result to $0$ and solve for $k$.

**Zero is not enough.** For $x + y = 1$, $2x + 2y = 2$, $3x + 3y = 5$ the determinant is $0$, but $x + y = 1$ and $3x + 3y = 5$ are parallel: no common point, so not consistent. Reject any $k$ that makes two lines parallel.`,
    worked: {
      prompt: t`Find $k$ if the equations $3x - y = 5$, $x + y = 3$ and $kx + 2y - 8 = 0$ are consistent.`,
      steps: [
        t`Bring all three to the form $ax + by + c = 0$: $3x - y - 5 = 0$, $x + y - 3 = 0$, $kx + 2y - 8 = 0$.`,
        t`Consistent, so $\begin{vmatrix} 3 & -1 & -5 \\ 1 & 1 & -3 \\ k & 2 & -8 \end{vmatrix} = 0$.`,
        t`Expand along row 1 with $+ - +$: $3(-8 + 6) + 1(-8 + 3k) - 5(2 - k) = -6 - 8 + 3k - 10 + 5k = 8k - 24$.`,
        t`$8k - 24 = 0$, so $k = 3$. Check: the first two lines meet at $(2, 1)$, and $3(2) + 2(1) - 8 = 0$.`,
      ],
      answer: t`$k = 3$`,
    },
    visualSpec: t`Drag $k$ to swing the third line; it lights up when it passes through the point where the first two lines meet, and the determinant's value reaches $0$ at that moment.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Believes a zero determinant always means consistent, so keeps every root of the determinant equation",
      remediation: t`A zero determinant is needed, but parallel lines give $0$ too. Test each value of $k$: if it makes two lines parallel and distinct, they share no point, so reject it.`,
      fallback: { kind: "ext", topic: "parallel lines" },
    },
    {
      id: "C05-M2",
      mistake: t`Copies the constant of an equation written as $ax + by = c$ unchanged, next to equations in the form $ax + by + c = 0$`,
      remediation: t`Put every equation in the form $ax + by + c = 0$ before writing the determinant. An equation $ax + by = c$ becomes $ax + by - c = 0$, so its constant is $-c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Expands along row 1 with signs $+ + +$, dropping the minus on the middle term`,
      remediation: t`Expanding along row 1, the signs go $+ - +$: $a_1(\dots) - b_1(\dots) + c_1(\dots)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: t`Works out each $2 \times 2$ minor as $ad + bc$`,
      remediation: t`A $2 \times 2$ determinant $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ is $ad - bc$: the leading diagonal's product minus the other diagonal's.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M5",
      mistake: t`Solves the last step $ak + b = 0$ as $k = \frac{b}{a}$, flipping the sign`,
      remediation: t`From $ak + b = 0$, move $b$ across: $ak = -b$, so $k = -\frac{b}{a}$. Put your $k$ back into the equations to check.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 shows only when the determinant equation has a root that makes two lines parallel (it is then quadratic in $k$, as in C05-Q5); otherwise it gives the key.`,
    t`C05-M2 shows only when the equations are written in mixed forms (some $= 0$, some $= c$); with one form throughout, the constants column only changes sign and the model gives the key.`,
    t`C05-M5 can't be detected when the key is $k = 0$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q4(i)" },
      stem: t`Find $k$ if the equations $2x + 3y - 2 = 0$, $2x + 4y - k = 0$ and $x - 2y + 3k = 0$ are consistent.`,
      verify: { kind: "value", inputs: {  }, params: { eqs: ["2*x + 3*y - 2 = 0", "2*x + 4*y - k = 0", "x - 2*y + 3*k = 0"] } },
      options: [
        { key: "A", text: t`$-16$`, correct: false, misconceptionId: "C05-M5", value: "-16" },
        { key: "B", text: t`$16$`, correct: true, value: "16" },
        { key: "C", text: t`$- \frac{16}{41}$`, correct: false, misconceptionId: "C05-M3", value: "-16/41" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C05-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`All three are already in the form $ax + by + c = 0$, so $\begin{vmatrix} 2 & 3 & -2 \\ 2 & 4 & -k \\ 1 & -2 & 3k \end{vmatrix} = 0$.`,
          t`Expand along row 1 with $+ - +$: $2(12k - 2k) - 3(6k + k) - 2(-4 - 4) = 20k - 21k + 16 = 16 - k$.`,
          t`$16 - k = 0$, so $k = 16$. Check: the first two lines meet at $(-20, 14)$, and $-20 - 28 + 48 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q4(ii)" },
      stem: t`Find $k$ if the equations $kx - 3y + 1 = 0$, $x + 2y + 1 = 0$ and $x + y = 0$ are consistent.`,
      verify: { kind: "value", inputs: {  }, params: { eqs: ["k*x - 3*y + 1 = 0", "x + 2*y + 1 = 0", "x + y = 0"] } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C05-M3", value: "2" },
        { key: "B", text: t`$-6$`, correct: false, misconceptionId: "C05-M4", value: "-6" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C05-M5", value: "4" },
        { key: "D", text: t`$-4$`, correct: true, value: "-4" },
      ],
      solution: {
        steps: [
          t`$x + y = 0$ is $x + y + 0 = 0$, so $\begin{vmatrix} k & -3 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 0 \end{vmatrix} = 0$.`,
          t`Expand along row 1 with $+ - +$: $k(0 - 1) + 3(0 - 1) + 1(1 - 2) = -k - 3 - 1 = -k - 4$.`,
          t`$-k - 4 = 0$, so $k = -4$. Check: the last two lines meet at $(1, -1)$, and $-4 + 3 + 1 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q10(ii)" },
      stem: t`Find $k$ if the equations $3x + y - 2 = 0$, $kx + 2y - 3 = 0$ and $2x - y = 3$ are consistent.`,
      verify: { kind: "value", inputs: {  }, params: { eqs: ["3*x + y - 2 = 0", "k*x + 2*y - 3 = 0", "2*x - y = 3"] } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C05-M2", value: "11" },
        { key: "C", text: t`$-13$`, correct: false, misconceptionId: "C05-M3", value: "-13" },
        { key: "D", text: t`$\frac{11}{5}$`, correct: false, misconceptionId: "C05-M4", value: "11/5" },
      ],
      solution: {
        steps: [
          t`Write $2x - y = 3$ as $2x - y - 3 = 0$: its constant is $-3$. So $\begin{vmatrix} 3 & 1 & -2 \\ k & 2 & -3 \\ 2 & -1 & -3 \end{vmatrix} = 0$.`,
          t`Expand along row 1 with $+ - +$: $3(-6 - 3) - 1(-3k + 6) - 2(-k - 4) = -27 + 3k - 6 + 2k + 8 = 5k - 25$.`,
          t`$5k - 25 = 0$, so $k = 5$. Check: the first and third lines meet at $(1, -1)$, and $5 - 2 - 3 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q15" },
      stem: t`The lines $x - y = 6$, $4x - 3y = 20$ and $kx + 5y + 8 = 0$ are concurrent. Find $k$.`,
      verify: { kind: "value", inputs: {  }, params: { eqs: ["x - y = 6", "4*x - 3*y = 20", "k*x + 5*y + 8 = 0"] } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C05-M3", value: "-2" },
        { key: "B", text: t`$-6$`, correct: false, misconceptionId: "C05-M5", value: "-6" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C05-M2", value: "14" },
      ],
      solution: {
        steps: [
          t`Concurrent means the equations are consistent. In the form $ax + by + c = 0$: $x - y - 6 = 0$, $4x - 3y - 20 = 0$, $kx + 5y + 8 = 0$.`,
          t`$\begin{vmatrix} 1 & -1 & -6 \\ 4 & -3 & -20 \\ k & 5 & 8 \end{vmatrix} = 1(-24 + 100) + 1(32 + 20k) - 6(20 + 3k) = 76 + 32 + 20k - 120 - 18k = 2k - 12$.`,
          t`$2k - 12 = 0$, so $k = 6$. Check: the first two lines meet at $(2, -4)$, and $12 - 20 + 8 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`Find every value of $k$ for which the equations $x + y = 1$, $kx + 2y = 5$ and $2x + ky = -4$ are consistent.`,
      verify: { kind: "value", inputs: {  }, params: { eqs: ["x + y = 1", "k*x + 2*y = 5", "2*x + k*y = -4"] } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$-1$ or $2$`, correct: false, misconceptionId: "C05-M1", value: "{-1, 2}" },
        { key: "C", text: t`$-2$ or $11$`, correct: false, misconceptionId: "C05-M3", value: "{-2, 11}" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C05-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`In the form $ax + by + c = 0$: $\begin{vmatrix} 1 & 1 & -1 \\ k & 2 & -5 \\ 2 & k & 4 \end{vmatrix} = (8 + 5k) - (4k + 10) - (k^2 - 4) = -k^2 + k + 2 = -(k - 2)(k + 1)$.`,
          t`The determinant is $0$ at $k = 2$ or $k = -1$. At $k = 2$ the lines are $x + y = 1$, $2x + 2y = 5$ and $2x + 2y = -4$: all parallel, with no common point. Reject $k = 2$.`,
          t`At $k = -1$: $x + y = 1$ and $-x + 2y = 5$ meet at $(-1, 2)$, and $2(-1) + (-1)(2) = -4$. So $k = -1$ only.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q10(i)" },
      stem: t`Find $k$ if the equations $(k + 1)x + (k - 1)y + (k - 1) = 0$, $(k - 1)x + (k + 1)y + (k - 1) = 0$ and $(k - 1)x + (k - 1)y + (k + 1) = 0$ are consistent.`,
      verify: { kind: "value", inputs: {  }, params: { eqs: ["(k + 1)*x + (k - 1)*y + (k - 1) = 0", "(k - 1)*x + (k + 1)*y + (k - 1) = 0", "(k - 1)*x + (k - 1)*y + (k + 1) = 0"] } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: true, value: "1/3" },
        { key: "B", text: t`$-1$ or $0$`, correct: false, misconceptionId: "C05-M3", value: "{-1, 0}" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C05-M4", value: "-1" },
        { key: "D", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C05-M5", value: "-1/3" },
      ],
      solution: {
        steps: [
          t`Consistent means one point lies on all three lines. Subtract the second equation from the first: $2x - 2y = 0$, so $x = y$.`,
          t`Subtract the third from the second: $2y - 2 = 0$, so $y = 1$ and $x = 1$.`,
          t`Put $x = y = 1$ in the first: $(k + 1) + (k - 1) + (k - 1) = 3k - 1 = 0$, so $k = \frac{1}{3}$. The determinant of the coefficients and constants works out to $4(3k - 1)$, which gives the same $k$.`,
        ],
      },
    },
  ],
};
