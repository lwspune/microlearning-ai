import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c06: ConceptTranslation = {
  id: "C06",
  lang: "hi",
  status: "approved",
  source: "1ff49d5fbec439",
  hook: {
    prompt: t`$\sin 2A$, $2\sin A$ नहीं है। **क्या $\sin 3A$ बराबर है $3\sin A$ के?** $A = 90^\circ$ लेकर देखिए।`,
    reveal: t`नहीं। $\sin 270^\circ = -1$, पर $3\sin 90^\circ = 3$। सही सूत्र $\sin 3A = 3\sin A - 4\sin^3 A$ है, और $A = 90^\circ$ पर यह $3 - 4 = -1$ देता है, जैसा देना चाहिए।`,
  },
  intuition: [
    t`**Triple angle** (त्रिगुण कोण) किसी angle का तीन गुना है, जैसे $\sin 3A$ में $3A$।`,
    t`$3A = 2A + A$ लिखिए, फिर योग के सूत्र और double-angle सूत्रों से विस्तार कीजिए।`,
    t`फिर हर $\cos^2 A$ को $1 - \sin^2 A$ में बदलिए, ताकि केवल $\sin A$ बचे।`,
    t`एक **cube** (घन), जैसे $\sin^3 A$, यानी $(\sin A)^3$, आता है: $\sin A$ के तीन गुणनखंड आपस में गुणा होते हैं।`,
    t`इसलिए $3$ कभी सीधे बाहर नहीं आता: $\sin 3A$, $3\sin A$ नहीं है।`,
    t`कौन-सा पद पहले आता है यह याद रखने के लिए, सूत्र को $A = 0$ या $A = 90^\circ$ पर जाँचिए।`,
  ],
  formal: [
    {
      title: t`2A + A से sin 3A`,
      points: [
        t`$\sin 3A$ को $\sin(2A + A)$ लिखिए और योग का सूत्र लगाइए।`,
        t`यह बराबर है $\sin 2A\cos A + \cos 2A\sin A$ के।`,
        t`$\sin 2A = 2\sin A\cos A$ और $\cos 2A = 1 - 2\sin^2 A$ रखिए।`,
        t`पहला पद $2\sin A\cos^2 A$ बनता है, जो $2\sin A(1 - \sin^2 A)$ है, यानी $2\sin A - 2\sin^3 A$।`,
        t`दूसरा पद $(1 - 2\sin^2 A)\sin A$ बनता है, जो $\sin A - 2\sin^3 A$ है।`,
        t`इन्हें जोड़िए: $\sin 3A = 3\sin A - 4\sin^3 A$।`,
      ],
    },
    {
      title: t`cos 3A और tan 3A`,
      points: [
        t`$\cos 3A$ और $\tan 3A$ भी इसी तरह, $\cos(2A + A)$ और $\tan(2A + A)$ से आते हैं।`,
        t`cos के लिए, हर $\sin^2 A$ को $1 - \cos^2 A$ में बदलिए, ताकि केवल $\cos A$ बचे।`,
        t`$\cos 3A = 4\cos^3 A - 3\cos A$।`,
        t`$\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$।`,
      ],
    },
    {
      title: t`कौन-सा पद पहले आता है?`,
      points: [
        t`sin, $3\sin A$ से शुरू होता है; cos, $4\cos^3 A$ से।`,
        t`sin जाँचने के लिए, $A = 90^\circ$ लीजिए, जहाँ $\sin A = 1$।`,
        t`तब $3A = 270^\circ$, और $\sin 270^\circ = -1$।`,
        t`सूत्र मेल खाता है: $3\sin A - 4\sin^3 A = 3 - 4 = -1$।`,
        t`cos जाँचने के लिए, $A = 0$ लीजिए: $\cos 0 = 4 - 3 = 1$।`,
        t`tan में दोनों $3$ साथ चलते हैं: ऊपर $3\tan A$, नीचे $3\tan^2 A$।`,
      ],
    },
    {
      title: t`60° वाला परिवार`,
      points: [
        t`तीन angles लीजिए: $A$, $60^\circ - A$ और $60^\circ + A$।`,
        t`$\cos(60^\circ - A)\cos(60^\circ + A)$ बराबर है $\cos^2 60^\circ - \sin^2 A$ के।`,
        t`यह $\frac{1}{4} - \sin^2 A$ है, क्योंकि $\cos 60^\circ = \frac{1}{2}$।`,
        t`इसलिए $\cos A$ गुणा $\cos(60^\circ - A)\cos(60^\circ + A)$, $\frac{1}{4}\cos 3A$ है।`,
        t`इसी तरह, $\sin A$ गुणा $\sin(60^\circ - A)\sin(60^\circ + A)$, $\frac{1}{4}\sin 3A$ है।`,
        t`sin वाले गुणनफल को cos वाले से भाग दीजिए: $\tan A$ गुणा $\tan(60^\circ - A)\tan(60^\circ + A)$, $\tan 3A$ है।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\sin 20^\circ\sin 40^\circ\sin 80^\circ$ ज्ञात कीजिए।`,
    steps: [
      t`$40^\circ = 60^\circ - 20^\circ$ और $80^\circ = 60^\circ + 20^\circ$, इसलिए यह $A = 20^\circ$ के साथ $\sin A$ गुणा $\sin(60^\circ - A)\sin(60^\circ + A)$ है।`,
      t`$\sin(60^\circ - A)\sin(60^\circ + A)$ $= \sin^2 60^\circ - \sin^2 A$ $= \frac{3}{4} - \sin^2 A$।`,
      t`$\sin A$ से गुणा कीजिए: $\frac{3}{4}\sin A - \sin^3 A$ $= \frac{1}{4}(3\sin A - 4\sin^3 A)$ $= \frac{1}{4}\sin 3A$।`,
      t`$A = 20^\circ$ के साथ: $\frac{1}{4}\sin 60^\circ$ $= \frac{1}{4}\cdot\frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{8}$।`,
    ],
    answer: t`$\sin 20^\circ\sin 40^\circ\sin 80^\circ$ $= \frac{\sqrt{3}}{8}$`,
  },
  remediation: {
    "C06-M1": t`3 को बाहर नहीं निकाला जा सकता: $\sin 3A = 3\sin A - 4\sin^3 A$ और $\cos 3A = 4\cos^3 A - 3\cos A$। $A = 90^\circ$ पर $\sin 270^\circ = -1$, $3$ नहीं।`,
    "C06-M2": t`sin, $3\sin A$ से शुरू होता है, cos, $4\cos^3 A$ से: $\sin 3A = 3\sin A - 4\sin^3 A$, $\cos 3A = 4\cos^3 A - 3\cos A$। $A = 0$ पर जाँचिए: $\cos 0 = 4 - 3 = 1$।`,
    "C06-M3": t`sin और cos में घन के साथ 4 होता है: $\sin 3A = 3\sin A - 4\sin^3 A$, $\cos 3A = 4\cos^3 A - 3\cos A$। केवल tan के अंश, $3\tan A - \tan^3 A$, में घन अकेला है।`,
    "C06-M4": t`$\tan 3A$ का हर $1 - 3\tan^2 A$ है: $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$। ऊपर के 3 के साथ नीचे भी 3 है।`,
    "C06-M5": t`गुणनफल $\cos^3 x - \frac{3}{4}\cos x$ बनता है, जो $4\cos^3 x - 3\cos x$ का चौथाई है, इसलिए यह $\frac{1}{4}\cos 3x$ है। $x = 0$ पर यह $1 \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$ है, $1$ नहीं।`,
    "C06-M6": t`गुणनफल का चार गुना $\cos 3x$ है, इसलिए गुणनफल खुद $\frac{1}{4}\cos 3x$ है: 4 से भाग दीजिए, गुणा नहीं।`,
  },
  solutions: {
    "C06-Q1": [
      t`$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$, इसलिए $\cos^3\theta - \cos 3\theta = 3\cos\theta - 3\cos^3\theta = 3\cos\theta(1 - \cos^2\theta)$।`,
      t`$\sin 3\theta = 3\sin\theta - 4\sin^3\theta$, इसलिए $\sin^3\theta + \sin 3\theta = 3\sin\theta - 3\sin^3\theta = 3\sin\theta(1 - \sin^2\theta)$।`,
      t`भाग दीजिए: $3(1 - \cos^2\theta) + 3(1 - \sin^2\theta) = 3\sin^2\theta + 3\cos^2\theta = 3$।`,
    ],
    "C06-Q2": [
      t`$\sin 3A = 3\sin A - 4\sin^3 A$।`,
      t`$= 3 \cdot \frac{1}{4} - 4 \cdot \frac{1}{64} = \frac{3}{4} - \frac{1}{16} = \frac{11}{16}$।`,
    ],
    "C06-Q3": [
      t`$\cos(60^\circ - x)\cos(60^\circ + x) = \cos^2 60^\circ - \sin^2 x = \frac{1}{4} - \sin^2 x$।`,
      t`$\cos x$ से गुणा कीजिए: $\frac{1}{4}\cos x - (1 - \cos^2 x)\cos x = \cos^3 x - \frac{3}{4}\cos x$।`,
      t`$= \frac{1}{4}(4\cos^3 x - 3\cos x) = \frac{1}{4}\cos 3x$।`,
    ],
    "C06-Q4": [
      t`$\tan A = \frac{1}{2}$ के साथ $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$।`,
      t`अंश: $\frac{3}{2} - \frac{1}{8} = \frac{11}{8}$। हर: $1 - \frac{3}{4} = \frac{1}{4}$।`,
      t`इसलिए $\tan 3A = \frac{11}{8} \div \frac{1}{4} = \frac{11}{2}$।`,
    ],
    "C06-Q5": [
      t`$\sin 3x + \sin x = 4\sin x - 4\sin^3 x$ और $\cos 3x - \cos x = 4\cos^3 x - 4\cos x$।`,
      t`इसलिए व्यंजक $4\sin^2 x - 4\sin^4 x + 4\cos^4 x - 4\cos^2 x$ है।`,
      t`$4(\cos^4 x - \sin^4 x) = 4(\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x) = 4(\cos^2 x - \sin^2 x)$, जो $-4(\cos^2 x - \sin^2 x)$ को काट देता है। व्यंजक $0$ है।`,
    ],
    "C06-Q6": [
      t`$\cos 3A = 4\cos^3 A - 3\cos A$।`,
      t`$= 4 \cdot \frac{1}{27} - 3 \cdot \frac{1}{3} = \frac{4}{27} - 1 = -\frac{23}{27}$।`,
    ],
  },
};
