import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: is $\sin 1830^\circ$ bigger or smaller than $\sin 30^\circ$?`,
    reveal: t`Neither: they are equal. $1830^\circ = 5 \times 360^\circ + 30^\circ$. Five whole turns bring the arm back to where it started, then it turns $30^\circ$ more. Same arm, same point $P$, so $\sin 1830^\circ = \sin 30^\circ = \frac{1}{2}$.`,
  },
  explanation: {
    intuition: t`An angle measures turning. After one whole turn ($360^\circ$ or $2\pi$) the arm is back where it started, so the point $P(x, y)$ and all six functions repeat. So drop whole turns first. A negative angle turns clockwise: its arm is the mirror image, in the $x$-axis, of the arm for the same positive angle. The mirror keeps $x$ and flips the sign of $y$.`,
    formal: t`**Drop whole turns** ($n$ an integer)

$$\sin(2n\pi + \theta) = \sin\theta, \quad \cos(2n\pi + \theta) = \cos\theta$$

The same holds for cosec and sec. Tan and cot repeat sooner, every $\pi$: $\tan(n\pi + \theta) = \tan\theta$. In degrees, take away multiples of $360^\circ$: $\cos 765^\circ = \cos(2 \times 360^\circ + 45^\circ) = \cos 45^\circ = \frac{1}{\sqrt{2}}$, and $\sin\frac{41\pi}{4} = \sin\left(10\pi + \frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$.

**Negative angles.** $P(x, y)$ for $\theta$ becomes $(x, -y)$ for $-\theta$:

$$\sin(-\theta) = -\sin\theta, \quad \cos(-\theta) = \cos\theta, \quad \tan(-\theta) = -\tan\theta$$

So cosec and cot change sign too; sec does not.

**Reference angle and sign.** Once the angle is between $0^\circ$ and $360^\circ$, take the acute angle its arm makes with the $x$-axis: $180^\circ - \theta$ in quadrant II, $\theta - 180^\circ$ in III, $360^\circ - \theta$ in IV. The value is the value at this angle, with the sign of the quadrant: $\sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$.

**Only whole turns.** A quarter or half turn moves the arm to another quadrant, so $90^\circ$ or $180^\circ$ can't be dropped like $360^\circ$ (except $180^\circ$ for tan and cot).`,
    worked: {
      prompt: t`Find $\cos(-480^\circ)$.`,
      steps: [
        t`Cos keeps its sign for a negative angle: $\cos(-480^\circ) = \cos 480^\circ$.`,
        t`Drop one whole turn: $480^\circ = 360^\circ + 120^\circ$, so $\cos 480^\circ = \cos 120^\circ$.`,
        t`$120^\circ$ is in quadrant II. Its reference angle is $180^\circ - 120^\circ = 60^\circ$.`,
        t`Cos is negative in quadrant II: $\cos 120^\circ = -\cos 60^\circ = -\frac{1}{2}$.`,
      ],
      answer: t`$\cos(-480^\circ) = -\frac{1}{2}$`,
    },
    visualSpec: t`Drag the arm round and round: a turn counter climbs while $P$ and its six values repeat each turn; flip the sign of $\theta$ to see $P$ reflect in the $x$-axis.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Drops whole turns and finds the reference angle, but gives the value there without the quadrant's sign: $\sin 240^\circ = \sin 60^\circ$.`,
      remediation: t`The reference angle gives the size only. Take the sign from the quadrant where the arm stops: in quadrant III only tan and cot are positive, so $\sin 240^\circ = -\sin 60^\circ$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: t`Ignores the minus sign of a negative angle: $\sin(-\theta) = \sin\theta$.`,
      remediation: t`A negative angle turns clockwise, so $P(x, y)$ becomes $(x, -y)$. Sin, tan, cosec and cot change sign: $\sin(-\theta) = -\sin\theta$. Only cos and sec stay the same.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Takes the minus sign out of every function, cos and sec too: $\cos(-\theta) = -\cos\theta$.`,
      remediation: t`Turning clockwise flips only $y$; $x$ stays the same. So $\cos(-\theta) = \cos\theta$ and $\sec(-\theta) = \sec\theta$. Only sin, tan, cosec and cot change sign.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: t`Measures the reference angle to the $y$-axis ($120^\circ = 90^\circ + 30^\circ$, so uses $30^\circ$), keeping the right sign.`,
      remediation: t`The reference angle is the acute angle to the **$x$-axis**: $180^\circ - \theta$ in quadrant II, $\theta - 180^\circ$ in III, $360^\circ - \theta$ in IV. For $120^\circ$ it is $60^\circ$, not $30^\circ$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: t`Drops quarter turns as if they were whole turns: $\sin(90^\circ + \theta) = \sin\theta$, so $\sin 120^\circ = \sin 30^\circ$.`,
      remediation: t`Only a whole turn ($360^\circ$ or $2\pi$) brings the arm back to the same place, so only whole turns can be dropped. A quarter turn moves the arm into the next quadrant and changes the value.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Forgets to take the reciprocal: works out sin for cosec, cos for sec.",
      remediation: t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ and $\sec\theta = \frac{1}{\cos\theta}$. Find sin or cos first, sign included, then flip it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M1 gives the key whenever the value is positive; diagnose it on items with a negative key.",
    "C04-M2 gives the key on cos and sec, and agrees with C04-M1 when an odd function of a negative angle is negative; diagnose it on sin, tan, cosec or cot of a negative angle with a positive value (Q4).",
    "C04-M3 gives the key on sin, tan, cosec and cot, and agrees with C04-M1 when cos or sec of a negative angle is negative; diagnose it on cos or sec of a negative angle with a positive value (Q5).",
    t`C04-M4 and C04-M5 give the key when the reference angle is $45^\circ$; C04-M5 also gives the key when the angle lands in quadrant I after dropping turns (as in the book's $\cos 1140^\circ$). The two agree when the value is positive in quadrant II or IV (Q4, Q5 tag C04-M4).`,
    t`C04-M6 applies only to sec, cosec and cot; for cot it agrees with C04-M4 at $30^\circ$ and $60^\circ$ reference angles, so cot items can't separate them.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q1" },
      stem: t`$\cos 150^\circ =$`,
      verify: { kind: "value", inputs: { a: "5*pi/6" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C04-M4", value: "-1/2" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M5", value: "1/2" },
        { key: "C", text: t`$- \frac{\sqrt{3}}{2}$`, correct: true, value: "-sqrt(3)/2" },
        { key: "D", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$150^\circ$ is in quadrant II. Its reference angle is $180^\circ - 150^\circ = 30^\circ$.`,
          t`Cos is negative in quadrant II.`,
          t`$\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q14(i)" },
      stem: t`$\sin \frac{23\pi}{6} =$`,
      verify: { kind: "value", inputs: { a: "23*pi/6" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M1", value: "1/2" },
        { key: "B", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M4", value: "-sqrt(3)/2" },
        { key: "C", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(3)/2" },
        { key: "D", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
      ],
      solution: {
        steps: [
          t`Drop the whole turn: $\frac{23\pi}{6} = 2\pi + \frac{11\pi}{6}$, so $\sin\frac{23\pi}{6} = \sin\frac{11\pi}{6}$.`,
          t`$\frac{11\pi}{6}$ ($330^\circ$) is in quadrant IV. Its reference angle is $2\pi - \frac{11\pi}{6} = \frac{\pi}{6}$.`,
          t`Sin is negative in quadrant IV: $\sin\frac{23\pi}{6} = -\sin\frac{\pi}{6} = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q14(ii)" },
      stem: t`$\tan 1200^\circ =$`,
      verify: { kind: "value", inputs: { a: "20*pi/3" }, params: { f: "tan" } },
      options: [
        { key: "A", text: t`$-\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M4", value: "-sqrt(3)/3" },
        { key: "B", text: t`$\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(3)/3" },
        { key: "C", text: t`$- \sqrt{3}$`, correct: true, value: "-sqrt(3)" },
        { key: "D", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(3)" },
      ],
      solution: {
        steps: [
          t`Drop whole turns: $1200^\circ = 3 \times 360^\circ + 120^\circ$, so $\tan 1200^\circ = \tan 120^\circ$.`,
          t`$120^\circ$ is in quadrant II. Its reference angle is $60^\circ$, and tan is negative there.`,
          t`$\tan 1200^\circ = -\tan 60^\circ = -\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q1" },
      stem: t`$\operatorname{cosec}(-210^\circ) =$`,
      verify: { kind: "value", inputs: { a: "-7*pi/6" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C04-M2", value: "-2" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M4", value: "2*sqrt(3)/3" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M6", value: "1/2" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Cosec changes sign with the angle: $\operatorname{cosec}(-210^\circ) = -\operatorname{cosec} 210^\circ$.`,
          t`$210^\circ$ is in quadrant III, reference angle $30^\circ$. Sin and cosec are negative there: $\operatorname{cosec} 210^\circ = -\operatorname{cosec} 30^\circ = -2$.`,
          t`$\operatorname{cosec}(-210^\circ) = -(-2) = 2$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q1" },
      stem: t`$\sec(-330^\circ) =$`,
      verify: { kind: "value", inputs: { a: "-11*pi/6" }, params: { f: "sec" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M6", value: "sqrt(3)/2" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: true, value: "2*sqrt(3)/3" },
        { key: "C", text: t`$-\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M3", value: "-2*sqrt(3)/3" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C04-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`Sec keeps its sign for a negative angle: $\sec(-330^\circ) = \sec 330^\circ$.`,
          t`$330^\circ$ is in quadrant IV, reference angle $360^\circ - 330^\circ = 30^\circ$. Cos and sec are positive there.`,
          t`$\sec 330^\circ = \frac{1}{\cos 30^\circ} = \frac{1}{\sqrt{3}/2} = \frac{2}{\sqrt{3}}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q1" },
      stem: t`$\operatorname{cosec} 300^\circ =$`,
      verify: { kind: "value", inputs: { a: "5*pi/3" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$-\frac{2}{\sqrt{3}}$`, correct: true, value: "-2*sqrt(3)/3" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M1", value: "2*sqrt(3)/3" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C04-M4", value: "-2" },
        { key: "D", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M6", value: "-sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$300^\circ$ is in quadrant IV. Its reference angle is $360^\circ - 300^\circ = 60^\circ$.`,
          t`Sin is negative in quadrant IV: $\sin 300^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$.`,
          t`$\operatorname{cosec} 300^\circ = \frac{1}{\sin 300^\circ} = -\frac{2}{\sqrt{3}}$.`,
        ],
      },
    },
  ],
};
