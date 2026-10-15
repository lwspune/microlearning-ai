import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`In a class test, every student is given $4$ bonus marks. **Does the standard deviation of the marks go up?**`,
    reveal: t`No. Every mark moves up by $4$, and so does the mean, so each deviation $x - \bar{x}$ stays the same, and so does $\sigma$. Halving every mark is different: each deviation halves, so $\sigma$ halves and the variance becomes a quarter of what it was.`,
  },
  explanation: {
    intuition: t`The S.D. measures how far the values sit from their mean. Add the same number to every value and the mean moves with them: the gaps don't change, so neither does $\sigma$. Multiply every value by $h$ and every gap is multiplied by $h$: $\sigma$ is multiplied by $|h|$ and the variance, built from squared gaps, by $h^2$. That is why you may swap big, awkward values $x$ for small ones $u = \frac{x - a}{h}$, find $\sigma_u$ easily, and then convert back.`,
    formal: t`**Change of origin.** For $y = x + c$ (or $x - c$): $\sigma_y = \sigma_x$ and $\sigma_y^2 = \sigma_x^2$. The mean moves by $c$; the spread does not.

**Change of scale.** For $y = hx$: every deviation is multiplied by $h$, so $\sigma_y^2 = h^2\sigma_x^2$ and $\sigma_y = |h|\,\sigma_x$.

**Both together.** With $u = \frac{x - a}{h}$, that is $x = a + hu$:
$$\sigma_x^2 = h^2\sigma_u^2, \qquad \sigma_x = |h|\,\sigma_u$$
The origin $a$ comes back only in the mean, $\bar{x} = a + h\bar{u}$, never in $\sigma$.

**The method.** Take $a$ near the middle value and $h$ the common gap (the class width). Find $\sum f u$ and $\sum f u^2$, then $\sigma_u^2 = \frac{\sum f u^2}{N} - \bar{u}^2$. Finally multiply: $\sigma_x^2 = h^2\sigma_u^2$.`,
    worked: {
      prompt: t`Find the standard deviation of $x$: $$\begin{array}{c|c} x & f \\ \hline 12 & 1 \\ 16 & 2 \\ 20 & 8 \\ 24 & 8 \\ 28 & 1 \end{array}$$`,
      steps: [
        t`The values are $4$ apart, so take $u = \frac{x - 20}{4}$: $u = -2, -1, 0, 1, 2$.`,
        t`$N = 20$, $\sum fu = -2 - 2 + 0 + 8 + 2 = 6$ and $\sum fu^2 = 4 + 2 + 0 + 8 + 4 = 18$.`,
        t`$\bar{u} = \frac{6}{20} = 0.3$, so $\sigma_u^2 = \frac{18}{20} - 0.3^2 = 0.9 - 0.09 = 0.81$ and $\sigma_u = 0.9$.`,
        t`Convert back: $\sigma_x = |h|\,\sigma_u = 4 \times 0.9 = 3.6$. The origin $20$ is not added.`,
      ],
      answer: t`$\sigma_x = 3.6$`,
    },
    visualSpec: t`Drag one slider to add a constant to every dot in a dot plot (the spread bar slides but keeps its width) and another to multiply by $h$ (the spread bar stretches by $|h|$).`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Adds the origin back to the S.D., as for the mean: $\sigma_x = h\sigma_u + a$ (or subtracts the constant from the variance)`,
      remediation: t`Only the mean moves with the origin: $\bar{x} = a + h\bar{u}$. Shifting every value shifts the mean by the same amount, so the deviations and $\sigma$ are unchanged: $\sigma_x = |h|\,\sigma_u$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M2",
      mistake: t`Multiplies the variance by $h$ instead of $h^2$`,
      remediation: t`Every deviation is multiplied by $h$, so every squared deviation, and the variance, is multiplied by $h^2$: $\sigma_x^2 = h^2\sigma_u^2$. Only the S.D. scales by $|h|$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: t`Thinks a change of scale, like a change of origin, leaves the spread unchanged, so reports $\sigma_u$ as $\sigma_x$`,
      remediation: t`Only the origin can be ignored. Dividing by $h$ shrinks every deviation, so convert back: $\sigma_x = |h|\,\sigma_u$ and $\sigma_x^2 = h^2\sigma_u^2$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M4",
      mistake: t`Divides by $h$ when converting back: $\sigma_x = \frac{\sigma_u}{h}$`,
      remediation: t`$u = \frac{x - a}{h}$ means $x = a + hu$, so $x$ is $h$ times as spread out as $u$. Multiply: $\sigma_x = |h|\,\sigma_u$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Multiplies the S.D. by $h^2$`,
      remediation: t`The $h^2$ belongs to the variance. The S.D. is its square root, so it scales by $|h|$: $\sigma_x = |h|\,\sigma_u$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M6",
      mistake: t`Keeps the sign of a negative multiplier: the S.D. of $kx + c$ taken as $k\sigma_x$`,
      remediation: t`An S.D. is never negative. For $y = kx + c$, $\sigma_y = |k|\,\sigma_x$: a negative $k$ flips the data over, but the spread only stretches by $|k|$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    t`C05-M6 only differs from the key for an S.D. with a negative multiplier (its model raises otherwise); C05-M2, C05-M3, C05-M4 and C05-M5 give the key when $|h| = 1$, and C05-M1 when the origin is $0$. Draw diagnosing items with $|h| \ne 1$ and a nonzero origin.`,
    t`Book data changed for clean answers, refs kept: SolvedEx.4 frequencies $13, 12, 15, 18, 17, 10, 15$ became $13, 11, 15, 17, 17, 12, 15$ (variance $93.75$); SolvedEx.6 frequencies $145, 125, 90, 40, 45, 55$ became $149, 120, 90, 40, 45, 56$ ($\sigma = 8.4$); Misc II Q10 frequencies $4, 12, 25, 28, 26, 5$ became $3, 12, 25, 27, 28, 5$ ($\sigma = 12$, mean not asked).`,
    t`Misc I Q7 is a pure shift ($x - 5$), where only C05-M1 differs from the key; its second set was changed to $2x - 5$ ($33, 37, \dots, 49$) so the scale matters. Q5 is authored, for the negative multiplier.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.2.3 SolvedEx.5" },
      stem: t`Find the standard deviation of the distribution below, taking $u = \frac{x - 90}{10}$, where $x$ is the class mark. $$\begin{array}{c|c} \text{C.I.} & f \\ \hline 45\text{–}55 & 7 \\ 55\text{–}65 & 20 \\ 65\text{–}75 & 27 \\ 75\text{–}85 & 23 \\ 85\text{–}95 & 13 \\ 95\text{–}105 & 6 \\ 105\text{–}115 & 3 \\ 115\text{–}125 & 1 \end{array}$$`,
      verify: { kind: "value", inputs: { p: "10", q: "90" }, params: { mode: "data", want: "sd", xs: ["50", "60", "70", "80", "90", "100", "110", "120"], fs: ["7", "20", "27", "23", "13", "6", "3", "1"] } },
      options: [
        { key: "A", text: t`$0.15$`, correct: false, misconceptionId: "C05-M4", value: "3/20" },
        { key: "B", text: t`$15$`, correct: true, value: "15" },
        { key: "C", text: t`$105$`, correct: false, misconceptionId: "C05-M1", value: "105" },
        { key: "D", text: t`$\frac{3 \sqrt{10}}{2}$`, correct: false, misconceptionId: "C05-M2", value: "3*sqrt(10)/2" },
      ],
      solution: {
        steps: [
          t`Class marks $50, 60, \dots, 120$ give $u = -4, -3, \dots, 3$. With $N = 100$: $\sum fu = -150$ and $\sum fu^2 = 450$.`,
          t`$\bar{u} = -1.5$, so $\sigma_u^2 = \frac{450}{100} - (-1.5)^2 = 4.5 - 2.25 = 2.25$ and $\sigma_u = 1.5$.`,
          t`Convert back: $\sigma_x = |h|\,\sigma_u = 10 \times 1.5 = 15$. The origin $90$ plays no part.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.2.3 SolvedEx.4" },
      stem: t`Find the variance of $x$, taking $u = \frac{x - 30}{5}$. $$\begin{array}{c|c} x & f \\ \hline 15 & 13 \\ 20 & 11 \\ 25 & 15 \\ 30 & 17 \\ 35 & 17 \\ 40 & 12 \\ 45 & 15 \end{array}$$`,
      verify: { kind: "value", inputs: { p: "5", q: "30" }, params: { mode: "data", want: "var", xs: ["15", "20", "25", "30", "35", "40", "45"], fs: ["13", "11", "15", "17", "17", "12", "15"] } },
      options: [
        { key: "A", text: t`$123.75$`, correct: false, misconceptionId: "C05-M1", value: "495/4" },
        { key: "B", text: t`$18.75$`, correct: false, misconceptionId: "C05-M2", value: "75/4" },
        { key: "C", text: t`$3.75$`, correct: false, misconceptionId: "C05-M3", value: "15/4" },
        { key: "D", text: t`$93.75$`, correct: true, value: "375/4" },
      ],
      solution: {
        steps: [
          t`$u = -3, -2, \dots, 3$ and $N = 100$: $\sum fu = 10$ and $\sum fu^2 = 376$.`,
          t`$\bar{u} = 0.1$, so $\sigma_u^2 = \frac{376}{100} - 0.1^2 = 3.76 - 0.01 = 3.75$.`,
          t`Convert back: $\sigma_x^2 = h^2\sigma_u^2 = 25 \times 3.75 = 93.75$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.2.3 SolvedEx.6" },
      stem: t`The heights of 500 plants are given below. Taking $u = \frac{x - 32.5}{5}$, where $x$ is the class mark, the standard deviation of the heights is: $$\begin{array}{c|c} \text{Height (cm)} & \text{Plants} \\ \hline 20\text{–}25 & 149 \\ 25\text{–}30 & 120 \\ 30\text{–}35 & 90 \\ 35\text{–}40 & 40 \\ 40\text{–}45 & 45 \\ 45\text{–}50 & 56 \end{array}$$`,
      verify: { kind: "value", inputs: { p: "5", q: "65/2" }, params: { mode: "data", want: "sd", xs: ["45/2", "55/2", "65/2", "75/2", "85/2", "95/2"], fs: ["149", "120", "90", "40", "45", "56"] } },
      options: [
        { key: "A", text: t`$8.4$`, correct: true, value: "42/5" },
        { key: "B", text: t`$40.9$`, correct: false, misconceptionId: "C05-M1", value: "409/10" },
        { key: "C", text: t`$1.68$`, correct: false, misconceptionId: "C05-M3", value: "42/25" },
        { key: "D", text: t`$42$`, correct: false, misconceptionId: "C05-M5", value: "42" },
      ],
      solution: {
        steps: [
          t`Class marks $22.5, 27.5, \dots, 47.5$ give $u = -2, -1, \dots, 3$. With $N = 500$: $\sum fu = -120$ and $\sum fu^2 = 1440$.`,
          t`$\bar{u} = -0.24$, so $\sigma_u^2 = \frac{1440}{500} - 0.24^2 = 2.88 - 0.0576 = 2.8224$ and $\sigma_u = 1.68$.`,
          t`Convert back: $\sigma_x = 5 \times 1.68 = 8.4$ cm.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q7" },
      stem: t`The variance of $19, 21, 23, 25$ and $27$ is $8$. The variance of $33, 37, 41, 45$ and $49$ is:`,
      verify: { kind: "value", inputs: { p: "2", q: "-5" }, params: { mode: "map", want: "var", xs: ["19", "21", "23", "25", "27"] } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C05-M2", value: "16" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C05-M3", value: "8" },
        { key: "C", text: t`$32$`, correct: true, value: "32" },
        { key: "D", text: t`$27$`, correct: false, misconceptionId: "C05-M1", value: "27" },
      ],
      solution: {
        steps: [
          t`Each new number is $2x - 5$: $2(19) - 5 = 33$, $2(21) - 5 = 37$, and so on up to $2(27) - 5 = 49$.`,
          t`Subtracting $5$ changes nothing; doubling multiplies the variance by $2^2 = 4$.`,
          t`The variance is $4 \times 8 = 32$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`The numbers $2, 4, 4, 4, 5, 5, 7, 9$ have standard deviation $2$. Each number $x$ is replaced by $10 - 3x$. The standard deviation of the new numbers is:`,
      verify: { kind: "value", inputs: { p: "-3", q: "10" }, params: { mode: "map", want: "sd", xs: ["2", "4", "4", "4", "5", "5", "7", "9"] } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$16$`, correct: false, misconceptionId: "C05-M1", value: "16" },
        { key: "C", text: t`$18$`, correct: false, misconceptionId: "C05-M5", value: "18" },
        { key: "D", text: t`$-6$`, correct: false, misconceptionId: "C05-M6", value: "-6" },
      ],
      solution: {
        steps: [
          t`For $y = 10 - 3x$, adding $10$ leaves the S.D. unchanged.`,
          t`Multiplying by $-3$ multiplies the S.D. by $|-3| = 3$, so $\sigma_y = 3 \times 2 = 6$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q10" },
      stem: t`The marks of 100 students are given below. Taking $u = \frac{x - 64.5}{10}$, where $x$ is the class mark, the standard deviation of the marks is: $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 40\text{–}49 & 3 \\ 50\text{–}59 & 12 \\ 60\text{–}69 & 25 \\ 70\text{–}79 & 27 \\ 80\text{–}89 & 28 \\ 90\text{–}99 & 5 \end{array}$$`,
      verify: { kind: "value", inputs: { p: "10", q: "129/2" }, params: { mode: "data", want: "sd", xs: ["89/2", "109/2", "129/2", "149/2", "169/2", "189/2"], fs: ["3", "12", "25", "27", "28", "5"] } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$\frac{6 \sqrt{10}}{5}$`, correct: false, misconceptionId: "C05-M2", value: "6*sqrt(10)/5" },
        { key: "C", text: t`$0.12$`, correct: false, misconceptionId: "C05-M4", value: "3/25" },
        { key: "D", text: t`$120$`, correct: false, misconceptionId: "C05-M5", value: "120" },
      ],
      solution: {
        steps: [
          t`Class marks $44.5, 54.5, \dots, 94.5$ give $u = -2, -1, \dots, 3$. With $N = 100$: $\sum fu = 80$ and $\sum fu^2 = 208$.`,
          t`$\bar{u} = 0.8$, so $\sigma_u^2 = \frac{208}{100} - 0.8^2 = 2.08 - 0.64 = 1.44$ and $\sigma_u = 1.2$.`,
          t`Convert back: $\sigma_x = 10 \times 1.2 = 12$ marks.`,
        ],
      },
    },
  ],
};
