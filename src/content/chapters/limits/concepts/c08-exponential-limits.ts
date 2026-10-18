import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`At $x = 0$, $\dfrac{3^x - 1}{x}$ is $\frac{0}{0}$. Yet at $x = 0.01$ it is $1.1047$, at $x = 0.001$ it is $1.0992$, and at $x = 0.0001$ it is $1.0987$. **What number is it heading for?**`,
    reveal: t`It heads for $\log 3 = 1.0986\ldots$, the natural log of $3$. For every base $a > 0$, $\frac{a^x - 1}{x}$ heads for $\log a$; for the base $e$ that is $\log e = 1$.`,
  },
  explanation: {
    intuition: [
      t`Here **log** means the **natural logarithm**: the log to base $e$, where $e \approx 2.718$.`,
      t`Put $x = 0$ in $\frac{3^x - 1}{x}$: the top is $3^0 - 1 = 0$, so we get $\frac{0}{0}$.`,
      t`Yet near $0$ the values settle: $1.1047$ at $x = 0.01$, then $1.0992$ at $x = 0.001$.`,
      t`They head for $\log 3 \approx 1.0986$.`,
      t`For any base $a > 0$, $\frac{a^x - 1}{x}$ heads for $\log a$ as $x \to 0$.`,
      t`With the base $e$ the limit is $\log e = 1$: that is what makes $e$ special.`,
    ],
    formal: [
      {
        title: "The two standard results",
        points: [
          t`For any base $a > 0$: $\lim_{x \to 0} \frac{a^x - 1}{x} = \log a$.`,
          t`With $a = e$: $\lim_{x \to 0} \frac{e^x - 1}{x} = \log e = 1$.`,
          t`Only the base $e$ gives $1$: with $a = 3$ the limit is $\log 3 \approx 1.0986$.`,
          t`With $kx$ in the power, write $\frac{a^{kx} - 1}{x} = k \cdot \frac{a^{kx} - 1}{kx}$.`,
          t`As $x \to 0$, $kx \to 0$ too, so the limit is $k \log a$: keep the $k$.`,
          t`So $\frac{e^{5x} - 1}{x} \to 5$, and $\frac{2^{3x} - 1}{x} \to 3 \log 2$.`,
        ],
      },
      {
        title: "Make each term standard",
        points: [
          t`To **group** a numerator is to rewrite it as a sum of brackets $(a^x - 1)$.`,
          t`$a^x - b^x = (a^x - 1) - (b^x - 1)$: the two $1$s cancel.`,
          t`Divide by $x$: $\frac{a^x - b^x}{x} \to \log a - \log b$.`,
          t`A number in front stays: $\frac{c(a^x - 1)}{x} \to c \log a$.`,
          t`So write $7^{x + 1} = 7 \cdot 7^x$ first, and group $7^{x + 1} - 7$ as $7(7^x - 1)$.`,
          t`The $1$s you subtract must use up the numerator's constant exactly.`,
        ],
      },
      {
        title: "Combine with the laws of logs",
        points: [
          t`$\log p + \log q = \log pq$, and $\log p - \log q = \log \frac{p}{q}$.`,
          t`$k \log a = \log a^k$, so $2 \log 3 = \log 9$.`,
          t`There is no law for $\log(p + q)$: $\log 7 - \log 2$ is $\log \frac{7}{2}$, not $\log 5$.`,
          t`$\log \frac{p}{q}$ is not $\frac{\log p}{\log q}$: $\log \frac{7}{2} \approx 1.25$, but $\frac{\log 7}{\log 2} \approx 2.81$.`,
          t`$\log p \cdot \log q$ is not $\log pq$: $(\log 3)^2 \approx 1.21$, but $\log 9 \approx 2.20$.`,
        ],
      },
      {
        title: "A quotient of two such limits",
        points: [
          t`For $\frac{a^x - b^x}{c^x - 1}$, divide the numerator and the denominator by $x$.`,
          t`The top over $x$ tends to $\log a - \log b$; the bottom over $x$ tends to $\log c$.`,
          t`The bottom's limit is not $0$, so the limit of the quotient is the quotient of the limits.`,
          t`The answer is $\frac{\log a - \log b}{\log c}$: a fraction of logs, left as it is.`,
          t`For example, $\frac{e^x - 1}{7^x - 1} \to \frac{1}{\log 7}$.`,
        ],
      },
      {
        title: "Two brackets over x squared",
        points: [
          t`Over $x^2$, look for two brackets: $(ab)^x - a^x - b^x + 1$ $= (a^x - 1)(b^x - 1)$.`,
          t`Split $x^2 = x \cdot x$ and give each bracket one $x$.`,
          t`The limit is the product $\log a \cdot \log b$: multiply the logs.`,
          t`Substituting $x = 0$ gives $\frac{0}{0}$, which is not $0$: it only says more work is needed.`,
          t`If $x \to 1$, put $h = x - 1$: then $h \to 0$ and the same results apply in $h$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\lim_{x \to 0} \dfrac{15^x - 5^x - 3^x + 1}{x^2}$.`,
      steps: [
        t`Substitute $x = 0$: the top is $1 - 1 - 1 + 1 = 0$ and the bottom is $0$. So $\frac{0}{0}$: more work.`,
        t`$15^x = 5^x \cdot 3^x$, so the top is $5^x(3^x - 1) - (3^x - 1)$ $= (5^x - 1)(3^x - 1)$.`,
        t`Split $x^2 = x \cdot x$: the fraction is $\frac{5^x - 1}{x} \cdot \frac{3^x - 1}{x}$.`,
        t`Each factor tends to its log, so the limit is $\log 5 \cdot \log 3$.`,
      ],
      answer: t`$\log 5 \cdot \log 3$`,
    },
    figure: {
      alt: "The graph of y = (3ˣ − 1)/x for x from −2 to 2: a rising curve with a gap at x = 0. Then a hollow dot fills the gap at height log 3, about 1.1, labelled as the limit.",
      axes: "xy",
      view: { x: [-2, 2], y: [0, 4] },
      elements: [
        { kind: "curve", points: [[-2, 0.444], [-1.95, 0.453], [-1.9, 0.461], [-1.85, 0.47], [-1.8, 0.479], [-1.75, 0.488], [-1.7, 0.497], [-1.65, 0.507], [-1.6, 0.517], [-1.55, 0.528], [-1.5, 0.538], [-1.45, 0.549], [-1.4, 0.561], [-1.35, 0.573], [-1.3, 0.585], [-1.25, 0.597], [-1.2, 0.61], [-1.15, 0.624], [-1.1, 0.638], [-1.05, 0.652], [-1, 0.667], [-0.95, 0.682], [-0.9, 0.698], [-0.85, 0.714], [-0.8, 0.731], [-0.75, 0.748], [-0.7, 0.766], [-0.65, 0.785], [-0.6, 0.805], [-0.55, 0.825], [-0.5, 0.845], [-0.45, 0.867], [-0.4, 0.889], [-0.35, 0.912], [-0.3, 0.936], [-0.25, 0.961], [-0.2, 0.986], [-0.15, 1.013], [-0.1, 1.04], [-0.05, 1.069]], step: 3 },
        { kind: "curve", points: [[0.05, 1.129], [0.1, 1.161], [0.15, 1.194], [0.2, 1.229], [0.25, 1.264], [0.3, 1.301], [0.35, 1.34], [0.4, 1.38], [0.45, 1.421], [0.5, 1.464], [0.55, 1.509], [0.6, 1.555], [0.65, 1.604], [0.7, 1.654], [0.75, 1.706], [0.8, 1.76], [0.85, 1.817], [0.9, 1.875], [0.95, 1.936], [1, 2], [1.05, 2.066], [1.1, 2.135], [1.15, 2.206], [1.2, 2.281], [1.25, 2.359], [1.3, 2.439], [1.35, 2.523], [1.4, 2.611], [1.45, 2.702], [1.5, 2.797], [1.55, 2.896], [1.6, 3], [1.65, 3.107], [1.7, 3.219], [1.75, 3.336], [1.8, 3.458], [1.85, 3.585], [1.9, 3.718], [1.95, 3.856], [2, 4]], step: 3 },
        { kind: "point", at: [0, 1.099], hollow: true, step: 4 },
        { kind: "label", at: [0, 1.099], label: "limit log 3 ≈ 1.099", labelAt: "se", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Slide the base $a$ and watch the graph of $\frac{a^x - 1}{x}$: the hollow dot at $x = 0$ sits at height $\log a$, and reaches $1$ exactly when $a = e$.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Combines logs inside one log term by term: takes $\log p - \log q$ as $\log(p - q)$, and $\log p + \log q$ as $\log(p + q)$`,
      remediation: t`There is no law for $\log(p \pm q)$. Use $\log p + \log q = \log pq$ and $\log p - \log q = \log \frac{p}{q}$.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
    {
      id: "C08-M2",
      mistake: t`Uses $\frac{e^x - 1}{x} \to 1$ for every base, so each $\frac{a^x - 1}{x}$ becomes $1$`,
      remediation: t`Only the base $e$ gives $1$. For any base $a > 0$, $\frac{a^x - 1}{x} \to \log a$, and $\log e = 1$ is the special case.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Drops the number multiplying the standard limit: takes $\frac{a^{kx} - 1}{x}$ as $\log a$, and $c(a^x - 1)$ over $x$ as $\log a$`,
      remediation: t`Write $\frac{a^{kx} - 1}{x} = k \cdot \frac{a^{kx} - 1}{kx}$, so the limit is $k \log a$. A number in front, like the $3$ in $3^{x + 1} = 3 \cdot 3^x$, stays too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Mixes up $\log p - \log q$ (that is, $\log \frac{p}{q}$) with $\frac{\log p}{\log q}$, in either direction`,
      remediation: t`$\log \frac{p}{q} = \log p - \log q$, which is not $\frac{\log p}{\log q}$. When the top and the bottom each give a log, the answer is a fraction of logs: leave it so.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
    {
      id: "C08-M5",
      mistake: t`Takes a product of logs as the log of the product: $\log p \cdot \log q$ as $\log pq$, so $(\log 2)^2$ as $\log 4$`,
      remediation: t`$\log pq = \log p + \log q$, a sum, not a product. Two brackets over $x \cdot x$ each give their own log, and the limit is $\log p \cdot \log q$.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
    {
      id: "C08-M6",
      mistake: t`Reads the $\frac{0}{0}$ from substituting as $0$`,
      remediation: t`$\frac{0}{0}$ is indeterminate: it gives no value. Group the terms into standard limits like $\frac{a^x - 1}{x}$, then take the limit.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "log is the natural log (base e) throughout, as in the book.",
    "Q4 (Ex 7.6 I Q5) and Q6 (Ex 7.6 I Q4) are adapted so that no trigonometric limit (C07, not a prerequisite) is needed: Q4's numerator 8^(sin x) - 2^(tan x) becomes 8^x - 2^x, and Q6's denominator sin x becomes x. The answers are the same as the book questions' (log 2 and log(40/9)).",
    "C08-M2 gives the key whenever every base is e; C08-M6 gives the key when the limit is 0. Draw from items with a base other than e and a nonzero limit.",
    "C08-M1 applies only where the combined number inside its log is positive (not Q6); C08-M5 only to a product of brackets over x^2 (params.kind product).",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/7.6 SolvedEx.2" },
      stem: t`$\lim_{x \to 0} \dfrac{5^x - 3^x}{x}$ equals:`,
      verify: { kind: "value", inputs: { a: "0" }, params: { f: "(5**x - 3**x)/x", kind: "sum", num: ["1,5,1", "-1,3,1"] } },
      options: [
        { key: "A", text: t`$\log \frac{5}{3}$`, correct: true, value: "log(5/3)" },
        { key: "B", text: t`$\log 2$`, correct: false, misconceptionId: "C08-M1", value: "log(2)" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "D", text: t`$\dfrac{\log 5}{\log 3}$`, correct: false, misconceptionId: "C08-M4", value: "log(5)/log(3)" },
      ],
      solution: {
        steps: [
          t`Write $5^x - 3^x = (5^x - 1) - (3^x - 1)$.`,
          t`Divide by $x$: the limit is $\log 5 - \log 3$.`,
          t`$\log 5 - \log 3 = \log \frac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 I Q2" },
      stem: t`$\lim_{x \to 0} \dfrac{5^x + 3^x - 2^x - 1}{x}$ equals:`,
      verify: { kind: "value", inputs: { a: "0" }, params: { f: "(5**x + 3**x - 2**x - 1)/x", kind: "sum", num: ["1,5,1", "1,3,1", "-1,2,1", "-1,1,0"] } },
      options: [
        { key: "A", text: t`$\log 6$`, correct: false, misconceptionId: "C08-M1", value: "log(6)" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C08-M2", value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C08-M6", value: "0" },
        { key: "D", text: t`$\log \frac{15}{2}$`, correct: true, value: "log(15/2)" },
      ],
      solution: {
        steps: [
          t`Group: $(5^x - 1) + (3^x - 1) - (2^x - 1)$. This uses up the $-1$.`,
          t`Divide by $x$: the limit is $\log 5 + \log 3 - \log 2$.`,
          t`$= \log \frac{5 \times 3}{2} = \log \frac{15}{2}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 I Q1" },
      stem: t`$\lim_{x \to 0} \dfrac{9^x - 5^x}{4^x - 1}$ equals:`,
      verify: { kind: "value", inputs: { a: "0" }, params: { f: "(9**x - 5**x)/(4**x - 1)", kind: "ratio", num: ["1,9,1", "-1,5,1"], den: ["1,4,1", "-1,1,0"] } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C08-M1", value: "1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "C", text: t`$\log \frac{9}{20}$`, correct: false, misconceptionId: "C08-M4", value: "log(9/20)" },
        { key: "D", text: t`$\dfrac{\log \frac{9}{5}}{\log 4}$`, correct: true, value: "log(9/5)/log(4)" },
      ],
      solution: {
        steps: [
          t`Divide the numerator and the denominator by $x$.`,
          t`Top: $\frac{9^x - 5^x}{x} \to \log 9 - \log 5$ $= \log \frac{9}{5}$.`,
          t`Bottom: $\frac{4^x - 1}{x} \to \log 4$.`,
          t`The limit is $\dfrac{\log \frac{9}{5}}{\log 4}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 I Q5" },
      stem: t`$\lim_{x \to 0} \dfrac{8^x - 2^x}{e^{2x} - 1}$ equals:`,
      verify: { kind: "value", inputs: { a: "0" }, params: { f: "(8**x - 2**x)/(exp(2*x) - 1)", kind: "ratio", num: ["1,8,1", "-1,2,1"], den: ["1,E,2", "-1,1,0"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "B", text: t`$\frac{1}{2}\log 6$`, correct: false, misconceptionId: "C08-M1", value: "log(6)/2" },
        { key: "C", text: t`$\log 2$`, correct: true, value: "log(2)" },
        { key: "D", text: t`$\log 4$`, correct: false, misconceptionId: "C08-M3", value: "log(4)" },
      ],
      solution: {
        steps: [
          t`Divide the numerator and the denominator by $x$.`,
          t`Top: $\frac{8^x - 2^x}{x} \to \log 8 - \log 2$ $= \log 4$.`,
          t`Bottom: $\frac{e^{2x} - 1}{x} = 2 \cdot \frac{e^{2x} - 1}{2x} \to 2$.`,
          t`The limit is $\frac{\log 4}{2} = \frac{2 \log 2}{2}$ $= \log 2$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Misc II Q19" },
      stem: t`$\lim_{x \to 1} \dfrac{4^{x - 1} - 2^x + 1}{(x - 1)^2}$ equals:`,
      verify: { kind: "value", inputs: { a: "1" }, params: { f: "(4**(x - 1) - 2**x + 1)/(x - 1)**2", kind: "product", fac: ["2", "2"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C08-M6", value: "0" },
        { key: "B", text: t`$(\log 2)^2$`, correct: true, value: "log(2)**2" },
        { key: "C", text: t`$\log 4$`, correct: false, misconceptionId: "C08-M5", value: "log(4)" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C08-M2", value: "1" },
      ],
      solution: {
        steps: [
          t`Put $h = x - 1$, so $h \to 0$. Then $4^{x - 1} = 4^h$ and $2^x = 2 \cdot 2^h$.`,
          t`Top: $4^h - 2 \cdot 2^h + 1$ $= (2^h - 1)^2$.`,
          t`So the fraction is $\frac{2^h - 1}{h} \cdot \frac{2^h - 1}{h}$.`,
          t`The limit is $\log 2 \cdot \log 2 = (\log 2)^2$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 I Q4" },
      stem: t`$\lim_{x \to 0} \dfrac{6^x + 5^x + 4^x - 3^{x + 1}}{x}$ equals:`,
      verify: { kind: "value", inputs: { a: "0" }, params: { f: "(6**x + 5**x + 4**x - 3**(x + 1))/x", kind: "sum", num: ["1,6,1", "1,5,1", "1,4,1", "-3,3,1"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "B", text: t`$\dfrac{\log 120}{\log 27}$`, correct: false, misconceptionId: "C08-M4", value: "log(120)/log(27)" },
        { key: "C", text: t`$\log \frac{40}{9}$`, correct: true, value: "log(40/9)" },
        { key: "D", text: t`$\log 40$`, correct: false, misconceptionId: "C08-M3", value: "log(40)" },
      ],
      solution: {
        steps: [
          t`Write $3^{x + 1} = 3 \cdot 3^x$ and group: $(6^x - 1) + (5^x - 1)$ $+ (4^x - 1) - 3(3^x - 1)$.`,
          t`Divide by $x$: $\log 6 + \log 5 + \log 4 - 3 \log 3$.`,
          t`$= \log 120 - \log 27$ $= \log \frac{120}{27} = \log \frac{40}{9}$.`,
        ],
      },
    },
  ],
};
