import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`$\dfrac{dy}{dx} = \dfrac{x + y}{x}$ won't separate: $x$ and $y$ are tangled together. But the right side is $1 + \dfrac{y}{x}$. **What one substitution untangles it?**`,
    reveal: t`Call the ratio $v = \dfrac{y}{x}$, so $y = vx$ and $\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$. The equation becomes $v + x\dfrac{dv}{dx} = 1 + v$, so $x\dfrac{dv}{dx} = 1$, which separates. Then $v = \log|x| + c$, and $y = x\log|x| + cx$.`,
  },
  explanation: {
    intuition: [
      t`Some equations have $\dfrac{dy}{dx}$ depending only on the ratio $\dfrac{y}{x}$.`,
      t`For example, $\dfrac{dy}{dx} = \dfrac{x^2 + y^2}{xy}$ is $\dfrac{1 + (y/x)^2}{y/x}$.`,
      t`Along any line through the origin, $\dfrac{y}{x}$ is fixed, so the slope is the same all along it.`,
      t`Such equations don't separate as they stand: $x$ and $y$ are mixed in every term.`,
      t`So give the ratio its own name, $v = \dfrac{y}{x}$, and work with $v$ and $x$.`,
      t`The new equation in $v$ and $x$ always separates, and you know how to solve that.`,
    ],
    formal: [
      {
        title: "Spotting a homogeneous equation",
        points: [
          t`A **homogeneous function of degree $n$** satisfies $f(tx, ty) = t^nf(x, y)$.`,
          t`So $x^2 + xy$ and $3y^2$ are homogeneous of degree $2$: every term has total degree $2$.`,
          t`$\dfrac{dy}{dx} = \dfrac{f(x, y)}{g(x, y)}$ is a **homogeneous equation** when $f$ and $g$ have the same degree.`,
          t`Then dividing top and bottom by $x^n$ leaves a function of $\dfrac{y}{x}$ alone, $F\left(\dfrac{y}{x}\right)$.`,
          t`$\dfrac{x + y^2}{x}$ is not homogeneous: its terms have degrees $1$ and $2$.`,
        ],
      },
      {
        title: "Putting y = vx",
        points: [
          t`Put $y = vx$, where $v$ is a new variable that changes with $x$.`,
          t`$vx$ is a product of two functions of $x$, so use the product rule.`,
          t`$\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$: both terms are needed.`,
          t`So $\dfrac{dy}{dx} = F(v)$ becomes $v + x\dfrac{dv}{dx} = F(v)$.`,
          t`Move $v$ across: $x\dfrac{dv}{dx} = F(v) - v$.`,
        ],
      },
      {
        title: "Separate, integrate, put back",
        points: [
          t`Divide by $x$ and by $F(v) - v$ to separate the variables.`,
          t`This gives $\dfrac{dv}{F(v) - v} = \dfrac{dx}{x}$: the $x$ goes under $dx$.`,
          t`Integrate both sides; the right side gives $\log|x| + c$.`,
          t`Put back $v = \dfrac{y}{x}$, so the solution is in $x$ and $y$ again.`,
        ],
      },
      {
        title: "Using a given condition",
        points: [
          t`A **particular solution** is the one curve that passes through a given point.`,
          t`A condition like $y = 6$ when $x = 2$ is about $y$, not $v$.`,
          t`In terms of $v$ it reads $v = \dfrac{6}{2} = 3$, not $v = 6$.`,
          t`Or put back $v = \dfrac{y}{x}$ first, then substitute $x = 2$ and $y = 6$ to find $c$.`,
          t`Check: differentiate your answer and put it into the original equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $x\dfrac{dy}{dx} = x\tan\left(\dfrac{y}{x}\right) + y$, given $y = \dfrac{\pi}{3}$ when $x = 2$.`,
      steps: [
        t`Divide by $x$: $\dfrac{dy}{dx} = \tan v + v$, with $v = \dfrac{y}{x}$.`,
        t`Put $y = vx$: $v + x\dfrac{dv}{dx} = \tan v + v$, so $x\dfrac{dv}{dx} = \tan v$.`,
        t`Separate: $\cot v\,dv = \dfrac{dx}{x}$. Integrate: $\log|\sin v| = \log|x| + \log c$, so $\sin v = cx$.`,
        t`Put back $v$: $\sin\left(\dfrac{y}{x}\right) = cx$. At $x = 2$, $y = \dfrac{\pi}{3}$: $v = \dfrac{\pi}{6}$, so $\dfrac{1}{2} = 2c$ and $c = \dfrac{1}{4}$.`,
      ],
      answer: t`$\sin\left(\dfrac{y}{x}\right) = \dfrac{x}{4}$`,
    },
    visualSpec: t`Drag a point along a line through the origin: the slope marks of a homogeneous equation stay parallel along the whole line, because the slope depends only on $\dfrac{y}{x}$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Writing $\dfrac{dy}{dx} = x\dfrac{dv}{dx}$ after putting $y = vx$, dropping the $v$ of the product rule`,
      remediation: t`$v$ changes with $x$, so $vx$ is a product: $\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$. Keep both terms, then move $v$ across to get $x\dfrac{dv}{dx} = F(v) - v$.`,
      fallback: { kind: "ext", topic: "product rule for derivatives" },
    },
    {
      id: "C06-M2",
      mistake: t`Writing $\dfrac{dy}{dx} = v + \dfrac{dv}{dx}$, dropping the $x$`,
      remediation: t`By the product rule, $\dfrac{d}{dx}(vx) = v \cdot 1 + x\dfrac{dv}{dx}$. That $x$ in front of $\dfrac{dv}{dx}$ is what puts $\dfrac{dx}{x}$ on the right after you separate.`,
      fallback: { kind: "ext", topic: "product rule for derivatives" },
    },
    {
      id: "C06-M3",
      mistake: t`Using the condition $y = y_0$ at $x = x_0$ directly as $v = y_0$`,
      remediation: t`The condition gives $y$, not $v$. Convert it with $v = \dfrac{y}{x}$, or put back $v = \dfrac{y}{x}$ first and then substitute the given $x$ and $y$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M4",
      mistake: t`Stopping at the value of $v$ and giving it as $y$`,
      remediation: t`$v$ is only a helper: $v = \dfrac{y}{x}$. Put it back, so $y = vx$, before you give the answer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Separating $x\dfrac{dv}{dx} = G(v)$ as $\dfrac{dv}{G(v)} = x\,dx$`,
      remediation: t`From $x\dfrac{dv}{dx} = G(v)$, divide by $x$: $\dfrac{dv}{G(v)} = \dfrac{dx}{x}$. The $x$ goes under $dx$, and its integral is $\log|x|$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M6",
      mistake: t`Taking $v = \dfrac{x}{y}$ instead of $\dfrac{y}{x}$`,
      remediation: t`The substitution is $y = vx$, so $v = \dfrac{y}{x}$, with $y$ on top. Use that same ratio for the condition and when you put $v$ back.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M3 gives the key whenever the condition is at $x_0 = 1$ (then $y_0 = v_0$): diagnose it with $x_0 \ne 1$.`,
    t`C06-M4 gives the key when the value is asked at $x = 1$ (then $y = v$): diagnose it at $x \ne 1$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.4 Q.12" },
      stem: t`Put $y = vx$ in $x^2\dfrac{dy}{dx} = x^2 + xy + y^2$. Then $\dfrac{dv}{dx}$ equals:`,
      verify: { kind: "value", inputs: { F: "1 + v + v**2" }, params: { ask: "dvdx" } },
      options: [
        { key: "A", text: t`$\dfrac{1 + v + v^2}{x}$`, correct: false, misconceptionId: "C06-M1", value: "(v**2 + v + 1)/x" },
        { key: "B", text: t`$1 + v^2$`, correct: false, misconceptionId: "C06-M2", value: "v**2 + 1" },
        { key: "C", text: t`$x(1 + v^2)$`, correct: false, misconceptionId: "C06-M5", value: "x*(v**2 + 1)" },
        { key: "D", text: t`$\dfrac{1 + v^2}{x}$`, correct: true, value: "(v**2 + 1)/x" },
      ],
      solution: {
        steps: [
          t`Divide by $x^2$: $\dfrac{dy}{dx} = 1 + v + v^2$, with $v = \dfrac{y}{x}$.`,
          t`Put $y = vx$: $v + x\dfrac{dv}{dx} = 1 + v + v^2$, so $x\dfrac{dv}{dx} = 1 + v^2$.`,
          t`Divide by $x$: $\dfrac{dv}{dx} = \dfrac{1 + v^2}{x}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.4 Q.2" },
      stem: t`$y$ satisfies $(x^2 - y^2)\,dx - 2xy\,dy = 0$, with $y = 1$ when $x = 2$, and $y > 0$. The value of $y$ when $x = 3$ is:`,
      verify: { kind: "value", inputs: { F: "(1 - v**2)/(2*v)", x0: "2", y0: "1", x1: "3" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$\dfrac{5}{3}$`, correct: true, value: "5/3" },
        { key: "B", text: t`$\dfrac{3\sqrt{2}}{2}$`, correct: false, misconceptionId: "C06-M1", value: "3*sqrt(2)/2" },
        { key: "C", text: t`$\dfrac{\sqrt{43}}{3}$`, correct: false, misconceptionId: "C06-M3", value: "sqrt(43)/3" },
        { key: "D", text: t`$\dfrac{5}{9}$`, correct: false, misconceptionId: "C06-M4", value: "5/9" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dy}{dx} = \dfrac{x^2 - y^2}{2xy} = \dfrac{1 - v^2}{2v}$. Put $y = vx$: $x\dfrac{dv}{dx} = \dfrac{1 - v^2}{2v} - v$ $= \dfrac{1 - 3v^2}{2v}$.`,
          t`Separate: $\dfrac{2v\,dv}{1 - 3v^2} = \dfrac{dx}{x}$, so $-\dfrac{1}{3}\log|1 - 3v^2| = \log|x| + c$, that is $x^3(1 - 3v^2) = k$.`,
          t`Put back $v = \dfrac{y}{x}$: $x^3 - 3xy^2 = k$. At $x = 2$, $y = 1$: $k = 8 - 6 = 2$.`,
          t`At $x = 3$: $27 - 9y^2 = 2$, so $y^2 = \dfrac{25}{9}$ and $y = \dfrac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.4 Q.10" },
      stem: t`$y$ satisfies $xy\dfrac{dy}{dx} = x^2 + 2y^2$, with $y(2) = 2$ and $y > 0$. Then $y(4)$ is:`,
      verify: { kind: "value", inputs: { F: "(1 + 2*v**2)/v", x0: "2", y0: "2", x1: "4" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$4\sqrt{7}$`, correct: true, value: "4*sqrt(7)" },
        { key: "B", text: t`$4\sqrt{19}$`, correct: false, misconceptionId: "C06-M3", value: "4*sqrt(19)" },
        { key: "C", text: t`$\sqrt{7}$`, correct: false, misconceptionId: "C06-M4", value: "sqrt(7)" },
        { key: "D", text: t`$\dfrac{4}{\sqrt{7}}$`, correct: false, misconceptionId: "C06-M6", value: "4*sqrt(7)/7" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dy}{dx} = \dfrac{x^2 + 2y^2}{xy} = \dfrac{1 + 2v^2}{v}$. Put $y = vx$: $x\dfrac{dv}{dx} = \dfrac{1 + 2v^2}{v} - v$ $= \dfrac{1 + v^2}{v}$.`,
          t`Separate: $\dfrac{v\,dv}{1 + v^2} = \dfrac{dx}{x}$, so $\dfrac{1}{2}\log(1 + v^2) = \log|x| + c$, that is $1 + v^2 = kx^2$.`,
          t`Put back $v = \dfrac{y}{x}$: $x^2 + y^2 = kx^4$. At $x = 2$, $y = 2$: $8 = 16k$, so $k = \dfrac{1}{2}$.`,
          t`At $x = 4$: $16 + y^2 = 128$, so $y^2 = 112$ and $y = 4\sqrt{7}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.4 Q.5" },
      stem: t`$y$ satisfies $(x^2 - y^2)\,dx + 2xy\,dy = 0$, with $y = 2$ when $x = 2$, and $y > 0$. The value of $y$ when $x = 1$ is:`,
      verify: { kind: "value", inputs: { F: "(v**2 - 1)/(2*v)", x0: "2", y0: "2", x1: "1" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C06-M6", value: "sqrt(3)/3" },
        { key: "B", text: t`$\sqrt{3}$`, correct: true, value: "sqrt(3)" },
        { key: "C", text: t`$\sqrt{2e - 1}$`, correct: false, misconceptionId: "C06-M2", value: "sqrt(-1 + 2*E)" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C06-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dy}{dx} = \dfrac{y^2 - x^2}{2xy} = \dfrac{v^2 - 1}{2v}$. Put $y = vx$: $x\dfrac{dv}{dx} = \dfrac{v^2 - 1}{2v} - v$ $= -\dfrac{1 + v^2}{2v}$.`,
          t`Separate: $\dfrac{2v\,dv}{1 + v^2} = -\dfrac{dx}{x}$, so $\log(1 + v^2) = -\log|x| + c$, that is $x(1 + v^2) = k$.`,
          t`Put back $v = \dfrac{y}{x}$: $x^2 + y^2 = kx$. At $x = 2$, $y = 2$: $8 = 2k$, so $k = 4$.`,
          t`At $x = 1$: $1 + y^2 = 4$, so $y = \sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.4 Q.15" },
      stem: t`The particular solution of $(x^2 + y^2)\,dx - 2xy\,dy = 0$ with $y = 3$ when $x = 2$ is:`,
      verify: { kind: "value", inputs: { F: "(1 + v**2)/(2*v)", x0: "2", y0: "3" }, params: { ask: "sol" } },
      options: [
        { key: "A", text: t`$y^2 = x^2 + \dfrac{5x}{2}$`, correct: true, value: "x*(2*x + 5)/2" },
        { key: "B", text: t`$y^2 = \dfrac{13x^3}{8} - x^2$`, correct: false, misconceptionId: "C06-M1", value: "x**2*(13*x - 8)/8" },
        { key: "C", text: t`$y^2 = x^2 + 16x$`, correct: false, misconceptionId: "C06-M3", value: "x*(x + 16)" },
        { key: "D", text: t`$y^2 = \dfrac{9x^3}{9x - 10}$`, correct: false, misconceptionId: "C06-M6", value: "9*x**3/(9*x - 10)" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dy}{dx} = \dfrac{x^2 + y^2}{2xy} = \dfrac{1 + v^2}{2v}$. Put $y = vx$: $x\dfrac{dv}{dx} = \dfrac{1 + v^2}{2v} - v$ $= \dfrac{1 - v^2}{2v}$.`,
          t`Separate: $\dfrac{2v\,dv}{1 - v^2} = \dfrac{dx}{x}$, so $-\log|1 - v^2| = \log|x| + c$, that is $x(1 - v^2) = k$.`,
          t`Put back $v = \dfrac{y}{x}$: $x^2 - y^2 = kx$. At $x = 2$, $y = 3$: $4 - 9 = 2k$, so $k = -\dfrac{5}{2}$.`,
          t`So $x^2 - y^2 = -\dfrac{5x}{2}$, that is $y^2 = x^2 + \dfrac{5x}{2}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Ex.1 (i) homogeneous" },
      stem: t`Put $y = vx$ in $x^2y\,dx - (x^3 + y^3)\,dy = 0$. Then $\dfrac{dv}{dx}$ equals:`,
      verify: { kind: "value", inputs: { F: "v/(1 + v**3)" }, params: { ask: "dvdx" } },
      options: [
        { key: "A", text: t`$-\dfrac{v^4}{1 + v^3}$`, correct: false, misconceptionId: "C06-M2", value: "-v**4/(v**3 + 1)" },
        { key: "B", text: t`$-\dfrac{xv^4}{1 + v^3}$`, correct: false, misconceptionId: "C06-M5", value: "-v**4*x/(v**3 + 1)" },
        { key: "C", text: t`$-\dfrac{v^4}{x(1 + v^3)}$`, correct: true, value: "-v**4/(x*(v**3 + 1))" },
        { key: "D", text: t`$\dfrac{v}{x(1 + v^3)}$`, correct: false, misconceptionId: "C06-M1", value: "v/(x*(v**3 + 1))" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dy}{dx} = \dfrac{x^2y}{x^3 + y^3}$. Divide top and bottom by $x^3$: $\dfrac{dy}{dx} = \dfrac{v}{1 + v^3}$.`,
          t`Put $y = vx$: $v + x\dfrac{dv}{dx} = \dfrac{v}{1 + v^3}$, so $x\dfrac{dv}{dx} = \dfrac{v}{1 + v^3} - v$.`,
          t`$\dfrac{v - v - v^4}{1 + v^3} = -\dfrac{v^4}{1 + v^3}$, so $\dfrac{dv}{dx} = -\dfrac{v^4}{x(1 + v^3)}$.`,
        ],
      },
    },
  ],
};
