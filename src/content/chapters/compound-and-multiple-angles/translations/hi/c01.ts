import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c01: ConceptTranslation = {
  id: "C01",
  lang: "hi",
  status: "approved",
  source: "02a616df0e7a14",
  hook: {
    prompt: t`क्या $\sin(30^\circ + 60^\circ)$ वही है जो $\sin 30^\circ + \sin 60^\circ$?`,
    reveal: t`नहीं। $\sin(30^\circ + 60^\circ) = \sin 90^\circ = 1$, पर $\sin 30^\circ + \sin 60^\circ = \frac{1}{2} + \frac{\sqrt{3}}{2} \approx 1.37$, जो किसी भी sine से ज़्यादा है। योग के sine के लिए दोनों angles के sines **और** cosines चाहिए।`,
  },
  intuition: [
    t`**Compound angle** (संयुक्त कोण) दो angles का योग या अंतर है, जैसे $A + B$ या $A - B$।`,
    t`Sine और cosine इस पर बँटते नहीं: $\sin(A + B)$, $\sin A + \sin B$ नहीं है।`,
    t`Unit circle पर, arm को initial arm से $A$ जितना घुमाइए।`,
    t`फिर उसे $B$ और घुमाइए: कुल मिलाकर यह $A + B$ का एक घुमाव है।`,
    t`अंतिम बिंदु के निर्देशांकों में दोनों घुमावों के sines और cosines मिले होते हैं, इसलिए हर सूत्र में दो गुणनफल हैं।`,
    t`Sine के गुणनफल functions को मिलाते हैं, $\sin \cdot \cos$ और $\cos \cdot \sin$; cosine के गुणनफल एक जैसे को एक जैसे से जोड़ते हैं।`,
  ],
  formal: [
    {
      title: t`योग या अंतर का sine`,
      points: [
        t`$\sin(A + B)$ बराबर है $\sin A\cos B + \cos A\sin B$ के।`,
        t`$\sin(A - B)$ बराबर है $\sin A\cos B - \cos A\sin B$ के।`,
        t`Sine चिह्न बनाए रखता है: angle में धन चिह्न, गुणनफलों के बीच धन चिह्न देता है।`,
        t`दोनों को एक साथ $\pm$ से लिखिए, जिसे "धन या ऋण" पढ़ते हैं।`,
        t`$\sin(A \pm B)$ बराबर है $\sin A\cos B \pm \cos A\sin B$ के।`,
      ],
    },
    {
      title: t`योग या अंतर का cosine`,
      points: [
        t`$\cos(A + B)$ बराबर है $\cos A\cos B - \sin A\sin B$ के।`,
        t`$\cos(A - B)$ बराबर है $\cos A\cos B + \sin A\sin B$ के।`,
        t`Cosine चिह्न पलट देता है: angle में धन चिह्न, गुणनफलों के बीच ऋण चिह्न देता है।`,
        t`$\cos(A \pm B)$ बराबर है $\cos A\cos B \mp \sin A\sin B$ के।`,
        t`यहाँ $\mp$, उलटा $\pm$ है: या तो सारे ऊपर वाले चिह्न साथ पढ़िए, या सारे नीचे वाले।`,
      ],
    },
    {
      title: t`B = 0 से जाँच`,
      points: [
        t`$B = 0$ रखिए, जहाँ $\sin 0 = 0$ और $\cos 0 = 1$।`,
        t`तब $\sin(A + 0)$ से $\sin A$ मिलना चाहिए।`,
        t`केवल मिले-जुले गुणनफल ऐसा करते हैं: $\sin A \cdot 1 + \cos A \cdot 0$ $= \sin A$।`,
        t`एक जैसे से एक जैसे वाले गुणनफल $\cos A \cdot 1 - \sin A \cdot 0$ $= \cos A$ देते, जो ग़लत function है।`,
      ],
    },
    {
      title: t`पहला angle पहले रखिए`,
      points: [
        t`$\sin(A - B)$ में पहला angle पहले रखिए।`,
        t`Sine **odd** (विषम) है: ऋणात्मक angle ऋणात्मक मान देता है, $\sin(-\theta) = -\sin\theta$।`,
        t`इसलिए $\sin(B - A) = -\sin(A - B)$: angles की अदला-बदली से चिह्न बदल जाता है।`,
        t`Cosine **even** (सम) है: ऋणात्मक angle वही मान देता है, $\cos(-\theta) = \cos\theta$।`,
        t`इसलिए cos के लिए क्रम से फ़र्क नहीं पड़ता: $\cos(B - A) = \cos(A - B)$।`,
      ],
    },
    {
      title: t`सटीक मान`,
      points: [
        t`Angle को मानक angles में तोड़िए, जैसे $75^\circ = 45^\circ + 30^\circ$।`,
        t`सूत्र से उसका विस्तार कीजिए, और मानक angles पर ज्ञात मान रखिए।`,
        t`फिर हर का **rationalise** कीजिए (परिमेयकरण): अंश और हर को गुणा करके हर से मूल हटाइए।`,
      ],
    },
    {
      title: t`एक अनुपात और quadrant दिया हो`,
      points: [
        t`अक्सर हर angle का एक अनुपात दिया होता है, साथ में वह quadrant जिसमें angle है।`,
        t`दूसरा अनुपात $\sin^2\theta + \cos^2\theta = 1$ से ज्ञात कीजिए।`,
        t`उदाहरण के लिए, $\cos\theta = \pm\sqrt{1 - \sin^2\theta}$: केवल वर्गमूल से चिह्न नहीं मिलता।`,
        t`उसका चिह्न quadrant से लीजिए।`,
      ],
    },
    {
      title: t`सूत्रों को उलटा पढ़िए`,
      points: [
        t`हर सूत्र दाएँ से बाएँ भी काम करता है।`,
        t`$\cos X\cos Y + \sin X\sin Y$ बराबर है $\cos(X - Y)$ के।`,
        t`$\sin X\cos Y - \cos X\sin Y$ बराबर है $\sin(X - Y)$ के।`,
        t`इसलिए cos गुणनफलों के बीच धन चिह्न का अर्थ है angles का अंतर।`,
        t`इस तरह एक लंबा व्यंजक सिमटकर एक अनुपात बन सकता है।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\sin A = \frac{7}{25}$, $\frac{\pi}{2} < A < \pi$, और $\cos B = -\frac{4}{5}$, $\pi < B < \frac{3\pi}{2}$, तो $\sin(A - B)$ ज्ञात कीजिए।`,
    steps: [
      t`$A$ दूसरे quadrant में है, जहाँ cos ऋणात्मक है: $\cos A = -\sqrt{1 - \frac{49}{625}}$ $= -\frac{24}{25}$।`,
      t`$B$ तीसरे quadrant में है, जहाँ sin ऋणात्मक है: $\sin B = -\sqrt{1 - \frac{16}{25}}$ $= -\frac{3}{5}$।`,
      t`$\sin(A - B)$ $= \sin A\cos B - \cos A\sin B$ $= \frac{7}{25}\left(-\frac{4}{5}\right)$ $- \left(-\frac{24}{25}\right)\left(-\frac{3}{5}\right)$।`,
      t`$= -\frac{28}{125} - \frac{72}{125}$ $= -\frac{100}{125} = -\frac{4}{5}$।`,
    ],
    answer: t`$\sin(A - B) = -\frac{4}{5}$।`,
  },
  remediation: {
    "C01-M1": t`Sine और cosine योग पर बँटते नहीं: $\sin 30^\circ + \sin 60^\circ$, $1$ से ज़्यादा है। $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$ और $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$ लगाइए।`,
    "C01-M2": t`Cos सूत्र में चिह्न पलटता है: $\cos(A + B) = \cos A\cos B - \sin A\sin B$ और $\cos(A - B) = \cos A\cos B + \sin A\sin B$। गुणनफलों के बीच धन चिह्न का अर्थ है angles का अंतर।`,
    "C01-M3": t`sin functions को मिलाता है: $\sin A\cos B \pm \cos A\sin B$। cos एक जैसे को एक जैसे से जोड़ता है: $\cos A\cos B \mp \sin A\sin B$। $B = 0$ से जाँचिए: $\sin(A + 0)$ से $\sin A$ मिलना चाहिए।`,
    "C01-M4": t`$\cos A = \pm\sqrt{1 - \sin^2 A}$ के बाद, चिह्न $A$ के quadrant से लीजिए: cos दूसरे और तीसरे quadrant में ऋणात्मक है, sin तीसरे और चौथे में।`,
    "C01-M5": t`sin odd है: $\sin(-\theta) = -\sin\theta$, इसलिए $\sin(B - A) = -\sin(A - B)$ और पहला angle पहले ही रहना चाहिए। cos even है: $\cos(-\theta) = \cos\theta$।`,
    "C01-M6": t`$\sin 30^\circ = \cos 60^\circ = \frac{1}{2}$ और $\sin 60^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2}$। Sine $0^\circ$ से $90^\circ$ तक बढ़ता है, इसलिए $\sin 30^\circ$ छोटा है।`,
  },
  solutions: {
    "C01-Q1": [
      t`$\sin(45^\circ - 30^\circ) = \sin 45^\circ\cos 30^\circ - \cos 45^\circ\sin 30^\circ$।`,
      t`$= \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{3}}{2} - \frac{1}{\sqrt{2}} \cdot \frac{1}{2} = \frac{\sqrt{3} - 1}{2\sqrt{2}}$।`,
      t`अंश और हर को $\sqrt{2}$ से गुणा कीजिए: $\sin 15^\circ = \frac{\sqrt{6} - \sqrt{2}}{4}$।`,
    ],
    "C01-Q2": [
      t`Cos सूत्र में चिह्न पलटता है: $\cos(60^\circ + 45^\circ) = \cos 60^\circ\cos 45^\circ - \sin 60^\circ\sin 45^\circ$।`,
      t`$= \frac{1}{2} \cdot \frac{1}{\sqrt{2}} - \frac{\sqrt{3}}{2} \cdot \frac{1}{\sqrt{2}} = \frac{1 - \sqrt{3}}{2\sqrt{2}}$।`,
      t`अंश और हर को $\sqrt{2}$ से गुणा कीजिए: $\cos 105^\circ = \frac{\sqrt{2} - \sqrt{6}}{4}$, ऋणात्मक, जैसा दूसरे quadrant के angle के लिए होना चाहिए।`,
    ],
    "C01-Q3": [
      t`$A$ तीसरे quadrant में है: $\cos A = -\sqrt{1 - \frac{25}{169}} = -\frac{12}{13}$। $B$ चौथे में है: $\sin B = -\sqrt{1 - \frac{9}{25}} = -\frac{4}{5}$।`,
      t`$\cos(A - B) = \cos A\cos B + \sin A\sin B = \left(-\frac{12}{13}\right)\frac{3}{5} + \left(-\frac{5}{13}\right)\left(-\frac{4}{5}\right)$।`,
      t`$= -\frac{36}{65} + \frac{20}{65} = -\frac{16}{65}$।`,
    ],
    "C01-Q4": [
      t`$A$ तीसरे quadrant में है: $\cos A = -\sqrt{1 - \frac{64}{289}} = -\frac{15}{17}$। $B$ पहले में है: $\sin B = \frac{3}{5}$।`,
      t`$\sin(A + B) = \sin A\cos B + \cos A\sin B = \left(-\frac{8}{17}\right)\frac{4}{5} + \left(-\frac{15}{17}\right)\frac{3}{5}$।`,
      t`$= -\frac{32}{85} - \frac{45}{85} = -\frac{77}{85}$।`,
    ],
    "C01-Q5": [
      t`धन चिह्न से जुड़े एक जैसे गुणनफल हैं $\cos X\cos Y + \sin X\sin Y = \cos(X - Y)$।`,
      t`$X = (n+1)A$ और $Y = (n+2)A$ लेकर, व्यंजक $\cos[(n+1)A - (n+2)A] = \cos(-A)$ है।`,
      t`cos even है, इसलिए $\cos(-A) = \cos A$, $n$ चाहे जो हो।`,
    ],
    "C01-Q6": [
      t`पहला angle पहले रखिए: $\sin\left(\frac{\pi}{4} - A\right) = \sin\frac{\pi}{4}\cos A - \cos\frac{\pi}{4}\sin A$।`,
      t`$= \frac{1}{\sqrt{2}}\cos A - \frac{1}{\sqrt{2}}\sin A$।`,
      t`$\sqrt{2}$ से गुणा कीजिए: $\sqrt{2}\,\sin\left(\frac{\pi}{4} - A\right) = \cos A - \sin A$।`,
    ],
  },
};
