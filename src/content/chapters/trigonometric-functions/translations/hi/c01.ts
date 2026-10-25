import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c01: ConceptTranslation = {
  id: "C01",
  lang: "hi",
  status: "approved",
  source: "12293f9c9ca6f8",
  hook: {
    prompt: t`बिंदु $P(4, 3)$ और $Q(8, 6)$ एक ही terminal arm पर हैं। $P$ से मापने पर $\sin\theta = \frac{3}{OP}$; $Q$ से, $\sin\theta = \frac{6}{OQ}$। **कौन-सा बिंदु बड़ा मान देता है?**`,
    reveal: t`कोई नहीं। $OP = \sqrt{16 + 9} = 5$ और $OQ = \sqrt{64 + 36} = 10$, इसलिए $P$ से $\sin\theta = \frac{3}{5}$ और $Q$ से $\frac{6}{10} = \frac{3}{5}$। बिंदु को दुगुना करने से $y$ और $r$ साथ-साथ दुगुने होते हैं, इसलिए अनुपात वही रहता है। Trigonometric functions केवल arm पर निर्भर करते हैं, इस पर नहीं कि आप उस पर कौन-सा बिंदु चुनते हैं।`,
  },
  intuition: [
    t`एक angle $\theta$ को standard position में रखिए: उसका शीर्ष origin $O$ पर, और initial arm धनात्मक $x$-अक्ष पर।`,
    t`Arm को $\theta$ जितना anticlockwise घुमाइए: जहाँ वह रुकती है, वह **terminal arm** है।`,
    t`Terminal arm पर $O$ के अलावा कोई भी बिंदु $P(x, y)$ चुनिए।`,
    t`$P$ से $x$-अक्ष पर एक **perpendicular** (लंब) डालिए: वह रेखा जो अक्ष से समकोण पर मिलती है।`,
    t`इससे एक समकोण त्रिभुज बनता है: अक्ष के साथ वाली उसकी भुजा $x$ है, और खड़ी भुजा $y$।`,
    t`उसकी सबसे लंबी भुजा, **hypotenuse** (कर्ण), $OP$ है; उसकी लंबाई $r$, $O$ से $P$ की दूरी है।`,
  ],
  formal: [
    {
      title: t`Sine, cosine और tangent`,
      points: [
        t`$\theta$ के छह **trigonometric functions** (त्रिकोणमितीय फलन) $x$, $y$ और $r$ के अनुपात हैं।`,
        t`त्रिभुज में पाइथागोरस प्रमेय से, $r = OP = \sqrt{x^2 + y^2}$।`,
        t`$\theta$ का **sine** है $\sin\theta = \frac{y}{r}$।`,
        t`$\theta$ का **cosine** है $\cos\theta = \frac{x}{r}$।`,
        t`$\theta$ का **tangent** है $\tan\theta = \frac{y}{x}$, जो केवल $x \ne 0$ होने पर परिभाषित है।`,
      ],
    },
    {
      title: t`Reciprocal functions (व्युत्क्रम फलन)`,
      points: [
        t`किसी भिन्न का **reciprocal** (व्युत्क्रम) वही भिन्न उलटकर है: $\frac{y}{r}$ का $\frac{r}{y}$।`,
        t`**Cosecant**, $\operatorname{cosec}\theta = \frac{r}{y}$, $\sin\theta$ का reciprocal है: दोनों $y$ लेते हैं।`,
        t`**Secant**, $\sec\theta = \frac{r}{x}$, $\cos\theta$ का reciprocal है: दोनों $x$ लेते हैं।`,
        t`**Cotangent**, $\cot\theta = \frac{x}{y}$, $\tan\theta$ का reciprocal है।`,
        t`हर एक केवल वहीं परिभाषित है जहाँ उसके भिन्न का हर $0$ न हो।`,
      ],
    },
    {
      title: t`चिह्न निर्देशांकों से आते हैं`,
      points: [
        t`त्रिभुज की भुजाओं के विपरीत, $x$ और $y$ निर्देशांक हैं, इसलिए उनके चिह्न होते हैं।`,
        t`उन्हें उनके चिह्नों के साथ रखिए; $r$ एक दूरी है, इसलिए वह हमेशा धनात्मक होता है।`,
        t`इसलिए $90^\circ$ से बड़े angles के लिए कुछ अनुपात ऋणात्मक आते हैं।`,
        t`उदाहरण के लिए, बिंदु $P(-12, 35)$ लीजिए।`,
        t`$O$ से उसकी दूरी $r = \sqrt{144 + 1225} = 37$ है।`,
        t`इसलिए $\sin\theta = \frac{35}{37}$, $\cos\theta = -\frac{12}{37}$ और $\tan\theta = -\frac{35}{12}$।`,
      ],
    },
    {
      title: t`Unit circle पर`,
      points: [
        t`**Unit circle** (इकाई वृत्त) $O$ के चारों ओर radius $1$ का circle है; उसका समीकरण $x^2 + y^2 = 1$ है।`,
        t`मान लीजिए terminal arm उसे $P(x, y)$ पर मिलती है: तब $r = OP = 1$।`,
        t`इसलिए $\cos\theta = \frac{x}{r} = \frac{x}{1} = x$।`,
        t`और $\sin\theta = \frac{y}{r} = \frac{y}{1} = y$।`,
        t`इसलिए $P = (\cos\theta, \sin\theta)$: उसके निर्देशांक cosine और sine हैं।`,
      ],
    },
  ],
  worked: {
    prompt: t`Standard position में उस angle $\theta$ के सभी trigonometric functions ज्ञात कीजिए जिसकी terminal arm $P(-20, -21)$ से होकर जाती है।`,
    steps: [
      t`$x = -20$, $y = -21$, इसलिए $r = \sqrt{(-20)^2 + (-21)^2}$ $= \sqrt{400 + 441}$ $= \sqrt{841} = 29$।`,
      t`$\sin\theta = \frac{y}{r}$ $= -\frac{21}{29}$ और $\cos\theta = \frac{x}{r}$ $= -\frac{20}{29}$: दोनों ऋणात्मक, क्योंकि $x$ और $y$ ऋणात्मक हैं।`,
      t`$\tan\theta = \frac{y}{x}$ $= \frac{-21}{-20} = \frac{21}{20}$: दोनों ऋण चिह्न कट जाते हैं।`,
      t`Reciprocals के लिए हर एक को उलटिए: $\operatorname{cosec}\theta = -\frac{29}{21}$, $\sec\theta = -\frac{29}{20}$, $\cot\theta = \frac{20}{21}$।`,
    ],
    answer: t`$\sin\theta = -\frac{21}{29}$, $\cos\theta = -\frac{20}{29}$, $\tan\theta = \frac{21}{20}$, $\operatorname{cosec}\theta = -\frac{29}{21}$, $\sec\theta = -\frac{29}{20}$, $\cot\theta = \frac{20}{21}$।`,
  },
  remediation: {
    "C01-M1": t`$r$ दूरी $OP$ है, इसलिए $r = \sqrt{x^2 + y^2}$। वर्ग जोड़िए, फिर भाग देने से पहले वर्गमूल लीजिए।`,
    "C01-M2": t`$\sin\theta$ खड़ा निर्देशांक लेता है, $\sin\theta = \frac{y}{r}$, और $\cos\theta$ पड़ा निर्देशांक, $\cos\theta = \frac{x}{r}$। उनके reciprocals वही निर्देशांक रखते हैं: $\operatorname{cosec}\theta = \frac{r}{y}$, $\sec\theta = \frac{r}{x}$।`,
    "C01-M3": t`$x$ और $y$ को उनके चिह्नों के साथ रखिए; केवल $r$ हमेशा धनात्मक है। इसलिए $\sin\theta$ और $\operatorname{cosec}\theta$ का चिह्न $y$ वाला होता है, और $\cos\theta$ और $\sec\theta$ का $x$ वाला।`,
    "C01-M4": t`$\sin\theta$ और $\cos\theta$ में $r$ नीचे है; उनके reciprocals $\operatorname{cosec}\theta$ और $\sec\theta$ में $r$ ऊपर। भाग देने से पहले देखिए कि कौन-सा function पूछा गया है।`,
  },
  solutions: {
    "C01-Q1": [
      t`$x = 3$, $y = -4$, इसलिए $r = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$।`,
      t`$\sin\theta = \frac{y}{r} = \frac{-4}{5} = -\frac{4}{5}$। ऋण चिह्न $y$ से आता है; $r$ धनात्मक है।`,
    ],
    "C01-Q2": [
      t`$x = -5$, $y = 12$, इसलिए $r = \sqrt{(-5)^2 + 12^2} = \sqrt{169} = 13$।`,
      t`$\sec\theta$, $\cos\theta = \frac{x}{r}$ का reciprocal है, इसलिए $\sec\theta = \frac{r}{x} = \frac{13}{-5} = -\frac{13}{5}$।`,
    ],
    "C01-Q3": [
      t`$x = -8$, $y = 15$, इसलिए $r = \sqrt{(-8)^2 + 15^2} = \sqrt{289} = 17$।`,
      t`$\cos\theta = \frac{x}{r} = \frac{-8}{17} = -\frac{8}{17}$। यह पड़ा निर्देशांक लेता है, और उसका ऋण चिह्न बना रहता है।`,
    ],
    "C01-Q4": [
      t`$x = -7$, $y = -24$, इसलिए $r = \sqrt{(-7)^2 + (-24)^2} = \sqrt{625} = 25$।`,
      t`$\operatorname{cosec}\theta$, $\sin\theta = \frac{y}{r}$ का reciprocal है, इसलिए $\operatorname{cosec}\theta = \frac{r}{y} = \frac{25}{-24} = -\frac{25}{24}$।`,
    ],
    "C01-Q5": [
      t`$x = 12$, $y = -5$, इसलिए $r = \sqrt{12^2 + (-5)^2} = \sqrt{169} = 13$।`,
      t`$\cos\theta = \frac{x}{r} = \frac{12}{13}$। यह धनात्मक है क्योंकि $x$ धनात्मक है; ऋणात्मक $y$, $\cos\theta$ में आता ही नहीं।`,
    ],
    "C01-Q6": [
      t`$x = 2$, $y = -1$, इसलिए $r = \sqrt{2^2 + (-1)^2} = \sqrt{5}$। यह पूर्ण वर्ग नहीं है: surd को वैसे ही रखिए।`,
      t`इसलिए $\operatorname{cosec}\theta = \frac{r}{y} = \frac{\sqrt{5}}{-1} = -\sqrt{5}$।`,
    ],
  },
};
