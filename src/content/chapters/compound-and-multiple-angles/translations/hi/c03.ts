import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "hi",
  status: "approved",
  source: "0dd7bdb1a959ef",
  hook: {
    prompt: t`Calculator के बिना: क्या $\cos 100^\circ$ बराबर है $\cos 10^\circ$, $-\cos 10^\circ$, $\sin 10^\circ$ या $-\sin 10^\circ$ के?`,
    reveal: t`$100^\circ = 90^\circ + 10^\circ$। $90^\circ$ जोड़ने से cos, sin में बदल जाता है। और $100^\circ$ दूसरे quadrant में है, जहाँ cos ऋणात्मक है। इसलिए $\cos 100^\circ = -\sin 10^\circ$। हर allied angle दो प्रश्न तय करते हैं: क्या function बदलता है, और quadrant कौन-सा चिह्न देता है?`,
  },
  intuition: [
    t`Unit circle पर angle $\theta$ के लिए बिंदु $P(\cos\theta, \sin\theta)$ लीजिए।`,
    t`कोई angle $\theta$ से **allied** (संबद्ध) है जब उनका योग या अंतर $90^\circ$ का गुणज हो, जैसे $90^\circ + \theta$।`,
    t`$90^\circ$ जोड़िए, तो $P$ एक **quarter turn** (चौथाई चक्कर) घूमकर $(-\sin\theta, \cos\theta)$ पर पहुँचता है।`,
    t`इसके $x$ और $y$ आपस में जगह बदलते हैं, एक ऋण चिह्न के साथ, इसलिए cos और sin भी जगह बदलते हैं।`,
    t`$180^\circ$ जोड़िए, तो एक **half turn** (आधा चक्कर) $P$ को centre के पार $(-\cos\theta, -\sin\theta)$ पर पलट देता है।`,
    t`तब $x$ और $y$ अपनी भूमिका रखते हैं और केवल चिह्न बदलते हैं; $360^\circ$, $P$ को ठीक वापस ले आता है।`,
  ],
  formal: [
    {
      title: t`Function बदलिए या रखिए`,
      points: [
        t`Allied angle को $n \cdot 90^\circ \pm \theta$ लिखिए, जहाँ $n$ एक पूर्ण संख्या है।`,
        t`$\theta$ को **acute** (न्यून) मानिए, $0^\circ$ और $90^\circ$ के बीच; परिणाम फिर भी हर $\theta$ के लिए सही रहता है।`,
        t`$90^\circ$ और $270^\circ$, $90^\circ$ के **odd multiples** (विषम गुणज) हैं: $n$, $1$ या $3$ है।`,
        t`$180^\circ$ और $360^\circ$, $90^\circ$ के **even multiples** (सम गुणज) हैं: $n$, $2$ या $4$ है।`,
        t`विषम गुणज के लिए बदलिए: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$।`,
        t`सम गुणज के लिए function को वैसा ही रखिए।`,
      ],
    },
    {
      title: t`चिह्न quadrant से लीजिए`,
      points: [
        t`चिह्न **original** (मूल) function का होता है, जिससे आपने शुरू किया।`,
        t`वह चिह्न उस quadrant में लीजिए जिसमें $n \cdot 90^\circ \pm \theta$ है।`,
        t`उदाहरण के लिए, $90^\circ + \theta$ quadrant II में है, क्योंकि $\theta$ न्यून है।`,
        t`Quadrant II में, जहाँ $x < 0$, cos ऋणात्मक है।`,
        t`Cos, sin में बदल जाता है, इसलिए $\cos(90^\circ + \theta) = -\sin\theta$।`,
      ],
    },
    {
      title: t`सारणी: quadrants I और II`,
      points: [
        t`हर पंक्ति एक allied angle के sin, cos और tan इसी क्रम में देती है।`,
        t`$90^\circ - \theta$ (quadrant I) पर, ये $\cos\theta$, $\sin\theta$ और $\cot\theta$ हैं।`,
        t`$90^\circ + \theta$ (quadrant II) पर, ये $\cos\theta$, $-\sin\theta$ और $-\cot\theta$ हैं।`,
        t`$180^\circ - \theta$ (quadrant II) पर, ये $\sin\theta$, $-\cos\theta$ और $-\tan\theta$ हैं।`,
      ],
    },
    {
      title: t`सारणी: quadrants III और IV`,
      points: [
        t`$180^\circ + \theta$ (quadrant III) पर, ये $-\sin\theta$, $-\cos\theta$ और $\tan\theta$ हैं।`,
        t`$270^\circ - \theta$ (quadrant III) पर, ये $-\cos\theta$, $-\sin\theta$ और $\cot\theta$ हैं।`,
        t`$270^\circ + \theta$ (quadrant IV) पर, ये $-\cos\theta$, $\sin\theta$ और $-\cot\theta$ हैं।`,
        t`$360^\circ - \theta$ (quadrant IV) पर, ये $-\sin\theta$, $\cos\theta$ और $-\tan\theta$ हैं।`,
        t`हर पंक्ति दोनों नियमों से निकलती है: बदलिए या रखिए, फिर चिह्न।`,
      ],
    },
    {
      title: t`बड़े और ऋणात्मक angles`,
      points: [
        t`यहाँ $f$ छहों functions में से कोई भी है।`,
        t`पहले पूरे चक्कर हटाइए: किसी भी पूर्णांक $k$ के लिए $f(k \cdot 360^\circ + \theta) = f(\theta)$।`,
        t`केवल cos और sec **even** (सम) हैं: ये $-\theta$ पर वही मान देते हैं जो $\theta$ पर।`,
        t`इसलिए $\cos(-\theta) = \cos\theta$ और $\sec(-\theta) = \sec\theta$।`,
        t`बाकी चार **odd** (विषम) हैं: इनका चिह्न बदलता है, जैसे $\sin(-\theta) = -\sin\theta$।`,
      ],
    },
    {
      title: t`सारणी कहाँ से आती है`,
      points: [
        t`हर पंक्ति $90^\circ$, $180^\circ$, $270^\circ$ या $360^\circ$ पर के मानों के साथ योग या अंतर का सूत्र है।`,
        t`उदाहरण के लिए, $\cos(90^\circ + \theta)$ लीजिए और योग का सूत्र लगाइए।`,
        t`यह बराबर है $\cos 90^\circ\cos\theta$ $- \sin 90^\circ\sin\theta$ के।`,
        t`क्योंकि $\cos 90^\circ = 0$ और $\sin 90^\circ = 1$, यह $-\sin\theta$ है।`,
      ],
    },
    {
      title: t`जोड़ियाँ बनाने वाले योग`,
      points: [
        t`ऐसे angles ढूँढिए जिनका योग $180^\circ$ या $360^\circ$ हो।`,
        t`उदाहरण के लिए, $55^\circ + 125^\circ = 180^\circ$।`,
        t`Unit circle पर इनके बिंदु $y$-अक्ष में एक-दूसरे के दर्पण प्रतिबिंब हैं।`,
        t`इसलिए $\cos 125^\circ = \cos(180^\circ - 55^\circ)$, जो $-\cos 55^\circ$ है।`,
        t`तब $\cos 55^\circ + \cos 125^\circ = 0$।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\sec(-855^\circ)$ का मान ज्ञात कीजिए।`,
    steps: [
      t`sec even है: $\sec(-855^\circ) = \sec 855^\circ$।`,
      t`पूरे चक्कर हटाइए: $855^\circ - 2 \times 360^\circ$ $= 135^\circ$, इसलिए यह $\sec 135^\circ$ है।`,
      t`$135^\circ = 90^\circ + 45^\circ$, $90^\circ$ का विषम गुणज: sec, cosec में बदलता है। $135^\circ$ दूसरे quadrant में है, जहाँ sec (cos की तरह) ऋणात्मक है।`,
      t`इसलिए $\sec 135^\circ = -\operatorname{cosec} 45^\circ$ $= -\sqrt{2}$।`,
    ],
    answer: t`$\sec(-855^\circ) = -\sqrt{2}$।`,
  },
  remediation: {
    "C03-M1": t`केवल $90^\circ$ का विषम गुणज ($90^\circ$, $270^\circ$) function बदलता है: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$। $180^\circ$ और $360^\circ$ पर function वही रहता है।`,
    "C03-M2": t`बदलने से पहले चिह्न तय कीजिए: यह उस function का चिह्न है जिससे आपने शुरू किया, उस quadrant में जहाँ angle है। $\cos(90^\circ + \theta)$ ऋणात्मक है क्योंकि दूसरे quadrant में cos ऋणात्मक है, इसलिए यह $-\sin\theta$ के बराबर है।`,
    "C03-M3": t`हर allied angle किसी quadrant में आता है, और वहाँ मूल function का चिह्न आगे लगता है: $\sin(180^\circ + \theta) = -\sin\theta$ क्योंकि तीसरे quadrant में sin ऋणात्मक है।`,
    "C03-M4": t`केवल cos और sec even हैं: $\cos(-\theta) = \cos\theta$, $\sec(-\theta) = \sec\theta$। sin, tan, cot और cosec odd हैं, इसलिए ऋण चिह्न बाहर आता है: $\tan(-\theta) = -\tan\theta$।`,
    "C03-M5": t`आप केवल $360^\circ$ के पूरे चक्कर हटा सकते हैं। बचा हुआ $90^\circ$, $180^\circ$ या $270^\circ$ फिर भी function बदलता है या उसका चिह्न: $\cos 200^\circ = \cos(180^\circ + 20^\circ) = -\cos 20^\circ$, $\cos 20^\circ$ नहीं।`,
  },
  solutions: {
    "C03-Q1": [
      t`एक पूरा चक्कर हटाइए: $690^\circ - 360^\circ = 330^\circ$, इसलिए $\sin 690^\circ = \sin 330^\circ$।`,
      t`$330^\circ = 360^\circ - 30^\circ$, $90^\circ$ का सम गुणज: sin, sin ही रहता है। $330^\circ$ चौथे quadrant में है, जहाँ sin ऋणात्मक है।`,
      t`इसलिए $\sin 690^\circ = -\sin 30^\circ = -\frac{1}{2}$।`,
    ],
    "C03-Q2": [
      t`पूरे चक्कर हटाइए: $840^\circ - 2 \times 360^\circ = 120^\circ$, इसलिए $\tan 840^\circ = \tan 120^\circ$।`,
      t`$120^\circ = 90^\circ + 30^\circ$, $90^\circ$ का विषम गुणज: tan, cot में बदलता है। $120^\circ$ दूसरे quadrant में है, जहाँ tan ऋणात्मक है।`,
      t`इसलिए $\tan 840^\circ = -\cot 30^\circ = -\sqrt{3}$।`,
    ],
    "C03-Q3": [
      t`sin और tan odd हैं: $\sin(-150^\circ) = -\sin 150^\circ$ और $\tan(-600^\circ) = -\tan 600^\circ$।`,
      t`$\sin 150^\circ = \sin(90^\circ + 60^\circ) = \cos 60^\circ = \frac{1}{2}$: sin, cos में बदलता है, और दूसरे quadrant में sin धनात्मक है।`,
      t`$\tan 600^\circ = \tan 240^\circ = \tan(180^\circ + 60^\circ) = \tan 60^\circ = \sqrt{3}$: तीसरे quadrant में tan धनात्मक है।`,
      t`गुणनफल $\left(-\frac{1}{2}\right)\left(-\sqrt{3}\right) = \frac{\sqrt{3}}{2}$ है।`,
    ],
    "C03-Q4": [
      t`$\sec 840^\circ = \sec 120^\circ = \sec(180^\circ - 60^\circ) = -\sec 60^\circ = -2$, और $\cot(-945^\circ) = -\cot 225^\circ = -\cot(180^\circ + 45^\circ) = -1$।`,
      t`$\sin 600^\circ = \sin 240^\circ = \sin(180^\circ + 60^\circ) = -\frac{\sqrt{3}}{2}$, और $\tan(-690^\circ) = -\tan 330^\circ = -(-\tan 30^\circ) = \frac{1}{\sqrt{3}}$।`,
      t`मान $(-2)(-1) + \left(-\frac{\sqrt{3}}{2}\right)\left(\frac{1}{\sqrt{3}}\right) = 2 - \frac{1}{2} = \frac{3}{2}$ है।`,
    ],
    "C03-Q5": [
      t`अंश: $\cos(\pi + x) = -\cos x$ और $\cos(-x) = \cos x$, इसलिए यह $-\cos^2 x$ है।`,
      t`हर: $\sin(\pi - x) = \sin x$ और $\cos\left(\frac{\pi}{2} + x\right) = -\sin x$, इसलिए यह $-\sin^2 x$ है।`,
      t`$\dfrac{-\cos^2 x}{-\sin^2 x} = \cot^2 x$।`,
    ],
    "C03-Q6": [
      t`अंश: $\cot\left(\frac{\pi}{2} + \theta\right) = -\tan\theta$, $\sin(-\theta) = -\sin\theta$, $\cot(\pi - \theta) = -\cot\theta$। क्योंकि $\tan\theta\cot\theta = 1$, यह $-\sin\theta$ है।`,
      t`हर: $\cos(2\pi - \theta) = \cos\theta$, $\sin(\pi + \theta) = -\sin\theta$, $\tan(2\pi - \theta) = -\tan\theta$। यह $\cos\theta\sin\theta\tan\theta = \sin^2\theta$ है।`,
      t`$\dfrac{-\sin\theta}{\sin^2\theta} = -\dfrac{1}{\sin\theta} = -\operatorname{cosec}\theta$।`,
    ],
  },
};
