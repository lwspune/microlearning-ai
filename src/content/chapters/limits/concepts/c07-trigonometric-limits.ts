import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`In **radian** mode a calculator gives $\frac{\sin 0.001}{0.001} \approx 0.99999$. In **degree** mode the same keys give $0.01745$. **Which one shows the limit of $\frac{\sin x}{x}$ as $x \to 0$?**`,
    reveal: t`Both, for different angles. In radians the ratio heads for $1$. In degrees, $x^\circ$ is $\frac{\pi x}{180}$ radians, so it heads for $\frac{\pi}{180} \approx 0.01745$. The famous $1$ needs radians.`,
  },
  explanation: {
    intuition: [
      t`As $\theta \to 0$, both $\sin\theta$ and $\theta$ go to $0$: $\frac{\sin\theta}{\theta}$ starts as the indeterminate $\frac{0}{0}$.`,
      t`Measured in **radians**, a small angle's sine is almost the angle itself: $\sin 0.1 \approx 0.0998$.`,
      t`So the ratio heads for $1$: $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$.`,
      t`Near $0$, $\cos\theta$ is close to $1$, so $\tan\theta$ is close to $\sin\theta$ and $\frac{\tan\theta}{\theta} \to 1$ too.`,
      t`The rule needs the **same** angle on top and below: $\frac{\sin 5x}{5x} \to 1$.`,
      t`So $\frac{\sin 5x}{x} = 5 \cdot \frac{\sin 5x}{5x}$, which tends to $5$, not $1$.`,
    ],
    formal: [
      {
        title: "Why the limit is 1",
        points: [
          t`Draw a circle of radius $1$, centre $O$, and an angle $\theta$ at $O$, with $0 < \theta < \frac{\pi}{2}$.`,
          t`In radians the arc $AP$ has length exactly $\theta$: that is what a radian means.`,
          t`The height $PM = \sin\theta$ is shorter than the arc, so $\sin\theta < \theta$.`,
          t`The tangent $AT = \tan\theta$ is longer than the arc, so $\theta < \tan\theta$.`,
          t`Divide $\sin\theta < \theta < \tan\theta$ by $\sin\theta$ and flip: $\cos\theta < \frac{\sin\theta}{\theta} < 1$.`,
          t`As $\theta \to 0$, $\cos\theta \to 1$, so the ratio is **squeezed** to $1$; negative $\theta$ gives the same.`,
        ],
        figure: {
          alt: "A circle of radius 1 with centre O. The radius OA lies along the axis and OP makes an angle θ with it. The arc AP has length θ; the height PM is sin θ, shorter than the arc; the tangent AT up to OP extended is tan θ, longer than the arc.",
          axes: "none",
          view: { x: [-0.3, 1.5], y: [-0.3, 1.25] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [1, 0], tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [0.697, 0.717], tone: "muted", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 45.84, label: "θ", step: 1 },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", step: 1 },
            { kind: "point", at: [1, 0], label: "A", labelAt: "se", step: 1 },
            { kind: "point", at: [0.697, 0.717], label: "P", labelAt: "nw", step: 1 },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 45.84, tone: "good", step: 2 },
            { kind: "label", at: [0.95, 0.2], label: "arc θ", labelAt: "w", tone: "good", step: 2 },
            { kind: "segment", from: [0.697, 0.717], to: [0.697, 0], label: "sin θ", labelAt: "w", step: 3 },
            { kind: "point", at: [0.697, 0], label: "M", labelAt: "s", step: 3 },
            { kind: "segment", from: [0.697, 0.717], to: [1, 1.03], dashed: true, tone: "muted", step: 4 },
            { kind: "segment", from: [1, 0], to: [1, 1.03], tone: "bad", step: 4 },
            { kind: "label", at: [1, 0.8], label: "tan θ", labelAt: "e", tone: "bad", step: 4 },
            { kind: "point", at: [1, 1.03], label: "T", labelAt: "ne", step: 4 },
          ],
        },
      },
      {
        title: "Match the angle",
        points: [
          t`The rule works for any angle $u$ that tends to $0$: $\lim_{u \to 0}\frac{\sin u}{u} = 1$.`,
          t`In $\frac{\sin 3x}{x}$ the angle is $3x$, and $3x \to 0$ as $x \to 0$.`,
          t`Multiply and divide by $3$: $\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x}$.`,
          t`Now the angle and the denominator match, so the fraction tends to $1$ and the limit is $3$.`,
          t`In general $\frac{\sin kx}{x} \to k$ and $\frac{\tan kx}{x} \to k$: the $k$ comes out on top.`,
          t`For a ratio, divide the top and the bottom by $x$: $\frac{\sin 6x}{\sin 2x} \to \frac{6}{2} = 3$.`,
        ],
      },
      {
        title: "When there is a cosine",
        points: [
          t`$1 - \cos\theta$ is not $\sin^2\theta$: that identity is $1 - \cos^2\theta = \sin^2\theta$.`,
          t`Use the half angle: $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$.`,
          t`Match the half angle: $\theta^2 = 4\left(\frac{\theta}{2}\right)^2$.`,
          t`So $\frac{1 - \cos\theta}{\theta^2}$ $= \frac{2}{4}\left(\frac{\sin(\theta/2)}{\theta/2}\right)^2$ $\to \frac{1}{2}$.`,
          t`For a difference of cosines, first use $\cos C - \cos D$ $= -2\sin\frac{C + D}{2}\sin\frac{C - D}{2}$.`,
        ],
      },
      {
        title: "Angles in degrees",
        points: [
          t`The limit $1$ holds only in radians, because only then does the arc equal the angle.`,
          t`An angle of $x^\circ$ is $\frac{\pi x}{180}$ radians, so $\sin x^\circ = \sin\frac{\pi x}{180}$.`,
          t`Match: $\frac{\sin x^\circ}{x}$ $= \frac{\pi}{180} \cdot \frac{\sin(\pi x/180)}{\pi x/180}$.`,
          t`So $\lim_{x \to 0}\frac{\sin x^\circ}{x} = \frac{\pi}{180}$, about $0.01745$.`,
          t`Each sine of a degree angle brings its own factor $\frac{\pi}{180}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\lim_{x \to 0} \dfrac{\sec x - 1}{x^2}$.`,
      steps: [
        t`Write $\sec x - 1 = \frac{1 - \cos x}{\cos x}$, and use $1 - \cos x = 2\sin^2\frac{x}{2}$.`,
        t`So the fraction is $\frac{2\sin^2(x/2)}{x^2} \cdot \frac{1}{\cos x}$.`,
        t`Match the angle $\frac{x}{2}$: $x^2 = 4\left(\frac{x}{2}\right)^2$, so $\frac{2\sin^2(x/2)}{x^2}$ $= \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2$.`,
        t`As $x \to 0$: $\frac{1}{2} \times 1^2 \times \frac{1}{\cos 0} = \frac{1}{2}$.`,
      ],
      answer: t`$\frac{1}{2}$`,
    },
    figure: {
      alt: "The line y = x and the curve y = sin x, with x in radians. Near the origin the two almost coincide, so sin x is almost x for a small angle.",
      axes: "xy",
      view: { x: [-2.5, 2.5], y: [-1.6, 1.6] },
      elements: [
        { kind: "curve", points: [[-1.6, -1.6], [-1.56, -1.56], [-1.52, -1.52], [-1.48, -1.48], [-1.44, -1.44], [-1.4, -1.4], [-1.36, -1.36], [-1.32, -1.32], [-1.28, -1.28], [-1.24, -1.24], [-1.2, -1.2], [-1.16, -1.16], [-1.12, -1.12], [-1.08, -1.08], [-1.04, -1.04], [-1, -1], [-0.96, -0.96], [-0.92, -0.92], [-0.88, -0.88], [-0.84, -0.84], [-0.8, -0.8], [-0.76, -0.76], [-0.72, -0.72], [-0.68, -0.68], [-0.64, -0.64], [-0.6, -0.6], [-0.56, -0.56], [-0.52, -0.52], [-0.48, -0.48], [-0.44, -0.44], [-0.4, -0.4], [-0.36, -0.36], [-0.32, -0.32], [-0.28, -0.28], [-0.24, -0.24], [-0.2, -0.2], [-0.16, -0.16], [-0.12, -0.12], [-0.08, -0.08], [-0.04, -0.04], [0, 0], [0.04, 0.04], [0.08, 0.08], [0.12, 0.12], [0.16, 0.16], [0.2, 0.2], [0.24, 0.24], [0.28, 0.28], [0.32, 0.32], [0.36, 0.36], [0.4, 0.4], [0.44, 0.44], [0.48, 0.48], [0.52, 0.52], [0.56, 0.56], [0.6, 0.6], [0.64, 0.64], [0.68, 0.68], [0.72, 0.72], [0.76, 0.76], [0.8, 0.8], [0.84, 0.84], [0.88, 0.88], [0.92, 0.92], [0.96, 0.96], [1, 1], [1.04, 1.04], [1.08, 1.08], [1.12, 1.12], [1.16, 1.16], [1.2, 1.2], [1.24, 1.24], [1.28, 1.28], [1.32, 1.32], [1.36, 1.36], [1.4, 1.4], [1.44, 1.44], [1.48, 1.48], [1.52, 1.52], [1.56, 1.56], [1.6, 1.6]], step: 2, tone: "muted", dashed: true },
        { kind: "curve", points: [[-2.5, -0.598], [-2.438, -0.647], [-2.375, -0.694], [-2.312, -0.737], [-2.25, -0.778], [-2.188, -0.816], [-2.125, -0.85], [-2.062, -0.882], [-2, -0.909], [-1.938, -0.934], [-1.875, -0.954], [-1.812, -0.971], [-1.75, -0.984], [-1.688, -0.993], [-1.625, -0.999], [-1.562, -1], [-1.5, -0.997], [-1.438, -0.991], [-1.375, -0.981], [-1.312, -0.967], [-1.25, -0.949], [-1.188, -0.927], [-1.125, -0.902], [-1.062, -0.874], [-1, -0.841], [-0.938, -0.806], [-0.875, -0.768], [-0.812, -0.726], [-0.75, -0.682], [-0.688, -0.635], [-0.625, -0.585], [-0.562, -0.533], [-0.5, -0.479], [-0.438, -0.424], [-0.375, -0.366], [-0.312, -0.307], [-0.25, -0.247], [-0.188, -0.186], [-0.125, -0.125], [-0.062, -0.062], [0, 0], [0.062, 0.062], [0.125, 0.125], [0.188, 0.186], [0.25, 0.247], [0.312, 0.307], [0.375, 0.366], [0.438, 0.424], [0.5, 0.479], [0.562, 0.533], [0.625, 0.585], [0.688, 0.635], [0.75, 0.682], [0.812, 0.726], [0.875, 0.768], [0.938, 0.806], [1, 0.841], [1.062, 0.874], [1.125, 0.902], [1.188, 0.927], [1.25, 0.949], [1.312, 0.967], [1.375, 0.981], [1.438, 0.991], [1.5, 0.997], [1.562, 1], [1.625, 0.999], [1.688, 0.993], [1.75, 0.984], [1.812, 0.971], [1.875, 0.954], [1.938, 0.934], [2, 0.909], [2.062, 0.882], [2.125, 0.85], [2.188, 0.816], [2.25, 0.778], [2.312, 0.737], [2.375, 0.694], [2.438, 0.647], [2.5, 0.598]], step: 2 },
        { kind: "label", at: [1.3, 1.3], label: "y = x", labelAt: "nw", tone: "muted", step: 2 },
        { kind: "label", at: [2, 0.909], label: "y = sin x", labelAt: "s", step: 2 },
      ],
    },
    visualSpec: t`Drag $\theta$ towards $0$ on a circle of radius $1$: the height $\sin\theta$, the arc $\theta$ and the tangent $\tan\theta$ close in on each other, while a readout of $\frac{\sin\theta}{\theta}$ heads for $1$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Takes $\frac{\sin k\theta}{\theta}$ as $1$: uses the standard limit without matching the angle to the denominator`,
      remediation: t`$\frac{\sin u}{u} \to 1$ needs the same angle on top and below. Write $\frac{\sin k\theta}{\theta} = k \cdot \frac{\sin k\theta}{k\theta}$, so it tends to $k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Matches the angle the wrong way round: takes $\frac{\sin k\theta}{\theta}$ as $\frac{1}{k}$`,
      remediation: t`To match, multiply and divide by $k$: $\frac{\sin k\theta}{\theta} = k \cdot \frac{\sin k\theta}{k\theta} \to k$. The coefficient comes out on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Uses angles given in degrees as if they were radians",
      remediation: t`$\frac{\sin\theta}{\theta} \to 1$ holds only in radians. Convert first: $x^\circ = \frac{\pi x}{180}$ radians, so each sine of a degree angle brings a factor $\frac{\pi}{180}$.`,
      fallback: { kind: "ext", topic: "converting degrees to radians" },
    },
    {
      id: "C07-M4",
      mistake: t`Takes $1 - \cos\theta$ as $\sin^2\theta$, mixing it up with $1 - \cos^2\theta$`,
      remediation: t`$1 - \cos^2\theta = \sin^2\theta$, but $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$. Use the half angle, then match $\frac{\theta}{2}$ to the denominator.`,
      fallback: { kind: "ext", topic: "trigonometric identities (half-angle formulae)" },
    },
    {
      id: "C07-M5",
      mistake: t`Drops the $2$ in $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$`,
      remediation: t`Keep the $2$: $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$. Check at $\theta = \pi$: both sides are $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Reads $\frac{0}{0}$ as $0$, because $\sin 0 = 0$ makes the numerator $0$`,
      remediation: t`Putting $x = 0$ gives $\frac{0}{0}$, which is indeterminate, not $0$. Rewrite with $\frac{\sin u}{u}$, match the angle, then let $x \to 0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C07-M1 and C07-M2 act on params.g (the form left after the identities, with only sin and tan of multiples of x) and need an angle with a coefficient other than 1; on sin(x)/x itself they give the key.",
    "C07-M4 and C07-M5 need a 1 - cos u in params.f; on a ratio of two such terms (Q4) they give the key, so they are not tagged there.",
    "C07-M3 applies only to items with angles in degrees (params.deg = 1).",
    "Q1 and Q4 use symbolic nonzero constants m and n, as the book does.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.4 I Q1" },
      stem: t`For nonzero constants $m$ and $n$, $\lim_{\theta \to 0} \dfrac{\sin m\theta}{\tan n\theta}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "sin(m*x)/tan(n*x)" } },
      options: [
        { key: "A", text: t`$\frac{n}{m}$`, correct: false, misconceptionId: "C07-M2", value: "n/m" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C07-M6", value: "0" },
        { key: "C", text: t`$\frac{m}{n}$`, correct: true, value: "m/n" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`Divide the top and the bottom by $\theta$: the limit is $\frac{\sin m\theta}{\theta}$ over $\frac{\tan n\theta}{\theta}$.`,
          t`Match each angle: $\frac{\sin m\theta}{\theta} = m \cdot \frac{\sin m\theta}{m\theta} \to m$.`,
          t`Likewise $\frac{\tan n\theta}{\theta} = n \cdot \frac{\tan n\theta}{n\theta} \to n$, so the limit is $\frac{m}{n}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.4 I Q2" },
      stem: t`$\lim_{\theta \to 0} \dfrac{1 - \cos 2\theta}{\theta^2}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(1 - cos(2*x))/x**2", g: "2*sin(x)**2/x**2" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C07-M4", value: "4" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C07-M5", value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C07-M6", value: "0" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Half angle: $1 - \cos 2\theta = 2\sin^2\theta$.`,
          t`So the fraction is $2\left(\frac{\sin\theta}{\theta}\right)^2$: the angle already matches.`,
          t`As $\theta \to 0$ it tends to $2 \times 1^2 = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.4 I Q3" },
      stem: t`$\lim_{x \to 0} \dfrac{x \tan x}{1 - \cos x}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "x*tan(x)/(1 - cos(x))", g: "x*tan(x)/(2*sin(x/2)**2)" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C07-M5", value: "4" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "1/2" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C07-M4", value: "1" },
      ],
      solution: {
        steps: [
          t`$1 - \cos x = 2\sin^2\frac{x}{2}$; divide the top and the bottom by $x^2$.`,
          t`Top: $\frac{x \tan x}{x^2} = \frac{\tan x}{x} \to 1$.`,
          t`Bottom: $\frac{2\sin^2(x/2)}{x^2}$ $= \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2$ $\to \frac{1}{2}$.`,
          t`The limit is $1 \div \frac{1}{2} = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.4 II Q1" },
      stem: t`For nonzero constants $m$ and $n$, $\lim_{x \to 0} \dfrac{1 - \cos nx}{1 - \cos mx}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(1 - cos(n*x))/(1 - cos(m*x))", g: "sin(n*x/2)**2/sin(m*x/2)**2" } },
      options: [
        { key: "A", text: t`$\frac{n^{2}}{m^{2}}$`, correct: true, value: "n**2/m**2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
        { key: "C", text: t`$\frac{m^{2}}{n^{2}}$`, correct: false, misconceptionId: "C07-M2", value: "m**2/n**2" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C07-M6", value: "0" },
      ],
      solution: {
        steps: [
          t`Half angle: $1 - \cos nx = 2\sin^2\frac{nx}{2}$ and $1 - \cos mx = 2\sin^2\frac{mx}{2}$.`,
          t`Divide by $x^2$ and match: $\frac{\sin(nx/2)}{x} \to \frac{n}{2}$ and $\frac{\sin(mx/2)}{x} \to \frac{m}{2}$.`,
          t`The limit is $\frac{(n/2)^2}{(m/2)^2} = \frac{n^2}{m^2}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/7.4 SolvedEx.8" },
      stem: t`$\lim_{x \to 0} \dfrac{\cos 5x^\circ - \cos 3x^\circ}{x^2}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(cos(5*x) - cos(3*x))/x**2", g: "-2*sin(4*x)*sin(x)/x**2", deg: "1" } },
      options: [
        { key: "A", text: t`$-8$`, correct: false, misconceptionId: "C07-M3", value: "-8" },
        { key: "B", text: t`$-2\left(\frac{\pi}{180}\right)^2$`, correct: false, misconceptionId: "C07-M1", value: "-pi**2/16200" },
        { key: "C", text: t`$-\frac{1}{2}\left(\frac{\pi}{180}\right)^2$`, correct: false, misconceptionId: "C07-M2", value: "-pi**2/64800" },
        { key: "D", text: t`$-8\left(\frac{\pi}{180}\right)^2$`, correct: true, value: "-pi**2/4050" },
      ],
      solution: {
        steps: [
          t`$\cos C - \cos D$ $= -2\sin\frac{C + D}{2}\sin\frac{C - D}{2}$, so the top is $-2\sin 4x^\circ \sin x^\circ$.`,
          t`In radians $\sin 4x^\circ = \sin\frac{4\pi x}{180}$, so $\frac{\sin 4x^\circ}{x} \to \frac{4\pi}{180}$.`,
          t`Likewise $\frac{\sin x^\circ}{x} \to \frac{\pi}{180}$.`,
          t`The limit is $-2 \times \frac{4\pi}{180} \times \frac{\pi}{180}$ $= -8\left(\frac{\pi}{180}\right)^2$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/7.4 SolvedEx.6" },
      stem: t`$\lim_{x \to 0} \dfrac{2\sin x - \sin 2x}{x^3}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(2*sin(x) - sin(2*x))/x**3", g: "4*sin(x)*sin(x/2)**2/x**3" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C07-M1", value: "4" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C07-M2", value: "16" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C07-M6", value: "0" },
      ],
      solution: {
        steps: [
          t`$\sin 2x = 2\sin x\cos x$, so the top is $2\sin x(1 - \cos x)$ $= 4\sin x\sin^2\frac{x}{2}$.`,
          t`Split $x^3 = x \cdot x^2$; the first part is $\frac{\sin x}{x} \to 1$.`,
          t`Match the half angle: $\frac{\sin^2(x/2)}{x^2}$ $= \frac{1}{4}\left(\frac{\sin(x/2)}{x/2}\right)^2$ $\to \frac{1}{4}$.`,
          t`The limit is $4 \times 1 \times \frac{1}{4} = 1$.`,
        ],
      },
    },
  ],
};
