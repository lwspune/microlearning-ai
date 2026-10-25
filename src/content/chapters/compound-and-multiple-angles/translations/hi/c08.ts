import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "hi",
  status: "approved",
  source: "09b09daa9957cc",
  hook: {
    prompt: t`न $75^\circ$ मानक angle है न $15^\circ$। **क्या फिर भी आप $\sin 75^\circ + \sin 15^\circ$ का सटीक मान निकाल सकते हैं?**`,
    reveal: t`हाँ। योग को गुणनफल में बदलिए: $\sin 75^\circ + \sin 15^\circ = 2\sin\frac{75^\circ + 15^\circ}{2}\cos\frac{75^\circ - 15^\circ}{2}$ $= 2\sin 45^\circ\cos 30^\circ$ $= 2 \cdot \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{3}}{2}$ $= \frac{\sqrt{6}}{2}$।`,
  },
  intuition: [
    t`**Product** (गुणनफल) एक गुणा है; उसके भाग उसके **factors** (गुणनखंड) हैं, जैसे $2\sin A\cos B$ में $\sin A$ और $\cos B$।`,
    t`$\sin C + \sin D$ जैसे योग को पद-दर-पद सरल नहीं किया जा सकता।`,
    t`गुणनफल को किया जा सकता है: गुणनखंड कटते हैं, और कोई एक गुणनखंड शून्य हो तो गुणनफल $0$ होता है।`,
    t`किसी योग का **factorise** करना (गुणनखंड करना) यानी उसे गुणनफल के रूप में लिखना; ये सूत्र दो angles $C$ और $D$ के लिए यही करते हैं।`,
    t`गुणनफल के angles हैं **average** (औसत) $\frac{C+D}{2}$, यानी $C$ और $D$ के ठीक बीच की दिशा।`,
    t`और **half-gap** (आधा अंतर) $\frac{C-D}{2}$: $C$ औसत से इतना आगे है, और $D$ इतना पीछे।`,
  ],
  formal: [
    {
      title: t`चार सूत्र`,
      points: [
        t`$\sin C + \sin D$ बराबर है $2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$ के।`,
        t`$\sin C - \sin D$ बराबर है $2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$ के।`,
        t`$\cos C + \cos D$ बराबर है $2\cos\frac{C+D}{2}\cos\frac{C-D}{2}$ के।`,
        t`$\cos C - \cos D$ बराबर है $-2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$ के।`,
        t`हर गुणनफल $2$, या $-2$, से शुरू होता है, और औसत तथा आधा अंतर लेता है।`,
      ],
    },
    {
      title: t`ये कहाँ से आते हैं`,
      points: [
        t`Compound-angle सूत्रों से $\sin(A + B)$ और $\sin(A - B)$ जोड़िए।`,
        t`$\cos A\sin B$ वाले पद कट जाते हैं, इसलिए $\sin(A + B) + \sin(A - B)$ बराबर है $2\sin A\cos B$ के।`,
        t`अब $C = A + B$ और $D = A - B$ रखिए।`,
        t`तब $A = \frac{C+D}{2}$ और $B = \frac{C-D}{2}$, जिससे पहला सूत्र मिलता है।`,
        t`बाकी तीन भी इसी तरह आते हैं।`,
        t`इसलिए ये उलटे पढ़े गए compound-angle सूत्र हैं।`,
      ],
    },
    {
      title: t`चिह्न का जाल`,
      points: [
        t`केवल $\cos C - \cos D$ के आगे ऋण चिह्न है।`,
        t`ऐसा इसलिए क्योंकि $\cos(A + B) - \cos(A - B)$ बराबर है $-2\sin A\sin B$ के।`,
        t`जब $C < D$, आधा अंतर ऋणात्मक होता है, इसलिए $\sin\frac{C-D}{2}$ भी ऋणात्मक होता है।`,
        t`तब दोनों ऋण चिह्न कट जाते हैं।`,
        t`उदाहरण के लिए, $\cos 10^\circ - \cos 50^\circ$ बराबर है $-2\sin 30^\circ\sin(-20^\circ)$ के।`,
        t`$\sin(-20^\circ) = -\sin 20^\circ$ और $2\sin 30^\circ = 1$, इसलिए यह $\sin 20^\circ$ के बराबर है।`,
      ],
    },
    {
      title: t`चार पद`,
      points: [
        t`चार पदों में, उन पदों की जोड़ी बनाइए जिनके angles का योग एक जैसा हो।`,
        t`तब हर जोड़ी एक ही गुणनखंड देती है।`,
        t`$\sin 7\theta + \sin 5\theta + \sin 3\theta + \sin\theta$ में, $7\theta$ को $\theta$ के साथ, और $5\theta$ को $3\theta$ के साथ जोड़िए।`,
        t`दोनों जोड़ियों का योग $8\theta$ है: वे $2\sin 4\theta\cos 3\theta$ और $2\sin 4\theta\cos\theta$ देती हैं।`,
        t`इसलिए योग $2\sin 4\theta(\cos 3\theta + \cos\theta)$ है।`,
      ],
    },
    {
      title: t`भागफल`,
      points: [
        t`**Quotient** (भागफल) एक व्यंजक को दूसरे से भाग देना है।`,
        t`अंश और हर के अलग-अलग गुणनखंड कीजिए।`,
        t`दोनों में साझा गुणनखंड तब कट जाता है।`,
        t`जो बचता है वह अक्सर एक अकेला tan या cot होता है।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\dfrac{\cos 3\theta - \cos 7\theta}{\sin 7\theta - \sin 3\theta}$ को सरल कीजिए।`,
    steps: [
      t`अंश, cos का अंतर: $\cos 3\theta - \cos 7\theta$ $= -2\sin\frac{3\theta + 7\theta}{2}\sin\frac{3\theta - 7\theta}{2}$ $= -2\sin 5\theta\sin(-2\theta)$।`,
      t`$\sin(-2\theta) = -\sin 2\theta$, इसलिए दोनों ऋण चिह्न कट जाते हैं: अंश $2\sin 5\theta\sin 2\theta$ है।`,
      t`हर, sin का अंतर: $\sin 7\theta - \sin 3\theta$ $= 2\cos\frac{7\theta + 3\theta}{2}\sin\frac{7\theta - 3\theta}{2}$ $= 2\cos 5\theta\sin 2\theta$।`,
      t`$2\sin 2\theta$ काटिए: $\dfrac{\sin 5\theta}{\cos 5\theta}$।`,
    ],
    answer: t`$\tan 5\theta$।`,
  },
  remediation: {
    "C08-M1": t`$\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$, क्योंकि $\cos(A + B) - \cos(A - B) = -2\sin A\sin B$। $C = 0^\circ$, $D = 60^\circ$ से जाँचिए: $\cos 0^\circ - \cos 60^\circ = \frac{1}{2}$, और $-2\sin 30^\circ\sin(-30^\circ) = \frac{1}{2}$।`,
    "C08-M2": t`गुणनफल के angles योग का आधा और अंतर का आधा हैं: $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$। ये $C = A + B$, $D = A - B$ से आते हैं, इसलिए $A = \frac{C+D}{2}$ और $B = \frac{C-D}{2}$।`,
    "C08-M3": t`योग का sin, sins का योग नहीं है: $\sin 30^\circ + \sin 60^\circ$ लगभग $1.37$ है, $\sin 90^\circ = 1$ नहीं। दो sines या cosines का योग $2$ गुणा एक गुणनफल बनता है: $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$।`,
    "C08-M4": t`वह गुणनफल $\sin C + \sin D$ है। अंतर के लिए sin और cos जगह बदलते हैं: $\sin C - \sin D = 2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$। sin आधे अंतर पर है, इसलिए $C = D$ होने पर यह $0$ होता है, जैसा होना चाहिए।`,
    "C08-M5": t`चारों गुणनफल $2$ (या $-2$) से शुरू होते हैं। $C = D = 0$ से जाँचिए: $\cos 0 + \cos 0 = 2$, और $2\cos 0\cos 0 = 2$।`,
  },
  solutions: {
    "C08-Q1": [
      t`अंश: $\sin 8x + \sin 2x = 2\sin\frac{8x + 2x}{2}\cos\frac{8x - 2x}{2} = 2\sin 5x\cos 3x$।`,
      t`हर: $\cos 2x - \cos 8x = -2\sin\frac{2x + 8x}{2}\sin\frac{2x - 8x}{2} = -2\sin 5x\sin(-3x) = 2\sin 5x\sin 3x$।`,
      t`$2\sin 5x$ काटिए: $\dfrac{\cos 3x}{\sin 3x} = \cot 3x$।`,
    ],
    "C08-Q2": [
      t`अंश: $\sin 2x + \sin 2y = 2\sin(x + y)\cos(x - y)$।`,
      t`हर: $\sin 2x - \sin 2y = 2\cos(x + y)\sin(x - y)$।`,
      t`भाग दीजिए: $\dfrac{\sin(x + y)}{\cos(x + y)} \cdot \dfrac{\cos(x - y)}{\sin(x - y)} = \tan(x + y)\cot(x - y) = \dfrac{\tan(x + y)}{\tan(x - y)}$।`,
    ],
    "C08-Q3": [
      t`अंश: $\cos 9x - \cos 5x = -2\sin\frac{9x + 5x}{2}\sin\frac{9x - 5x}{2} = -2\sin 7x\sin 2x$।`,
      t`हर: $\sin 17x - \sin 3x = 2\cos\frac{17x + 3x}{2}\sin\frac{17x - 3x}{2} = 2\cos 10x\sin 7x$।`,
      t`$2\sin 7x$ काटिए: $-\dfrac{\sin 2x}{\cos 10x}$।`,
    ],
    "C08-Q4": [
      t`$C = \frac{\pi}{4} + x$, $D = \frac{\pi}{4} - x$ के साथ $\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$ लगाइए: $\frac{C+D}{2} = \frac{\pi}{4}$ और $\frac{C-D}{2} = x$।`,
      t`इसलिए व्यंजक $-2\sin\frac{\pi}{4}\sin x = -2 \cdot \frac{1}{\sqrt{2}}\sin x = -\sqrt{2}\sin x$ है।`,
    ],
    "C08-Q5": [
      t`उन पदों की जोड़ी बनाइए जिनके angles का योग $120^\circ$ है: $(\cos 80^\circ + \cos 40^\circ) + (\cos 70^\circ + \cos 50^\circ)$।`,
      t`$\cos 80^\circ + \cos 40^\circ = 2\cos 60^\circ\cos 20^\circ$ और $\cos 70^\circ + \cos 50^\circ = 2\cos 60^\circ\cos 10^\circ$।`,
      t`$2\cos 60^\circ = 1$, इसलिए योग $\cos 20^\circ + \cos 10^\circ$ है।`,
    ],
    "C08-Q6": [
      t`$\sin 40^\circ = \sin(90^\circ - 50^\circ) = \cos 50^\circ$, इसलिए व्यंजक $\cos 50^\circ - \cos 70^\circ$ है।`,
      t`$\cos 50^\circ - \cos 70^\circ = -2\sin 60^\circ\sin(-10^\circ) = 2 \cdot \frac{\sqrt{3}}{2}\sin 10^\circ = \sqrt{3}\sin 10^\circ$।`,
      t`$\sin 10^\circ = \cos 80^\circ$, इसलिए यह $\sqrt{3}\cos 80^\circ$ के बराबर है।`,
    ],
  },
};
