import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "hi",
  status: "approved",
  source: "0ec0b50d2902c8",
  hook: {
    prompt: t`$\sin^2\theta + \cos^2\theta = 1$। **क्या $\sin^6\theta + \cos^6\theta$ भी $1$ है?** $\theta = 45^\circ$ लेकर देखिए।`,
    reveal: t`नहीं। $45^\circ$ पर, $\sin^6\theta = \cos^6\theta = \left(\frac{1}{\sqrt{2}}\right)^6 = \frac{1}{8}$, इसलिए योग $\frac{1}{4}$ है। इसे $(\sin^2\theta)^3 + (\cos^2\theta)^3$ लिखिए और $a + b = 1$ के साथ $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$ लगाइए: $\sin^6\theta + \cos^6\theta = 1 - 3\sin^2\theta\cos^2\theta$। $45^\circ$ पर यह $1 - \frac{3}{4} = \frac{1}{4}$ है।`,
  },
  intuition: [
    t`किसी व्यंजक को **simplify** करना (सरल करना) यानी उसे छोटे रूप में लिखना, जिसका मान हर $\theta$ के लिए वही रहे।`,
    t`Trigonometric अनुपात छह हैं, पर सभी $\sin\theta$ और $\cos\theta$ से बने हैं।`,
    t`इसलिए उलझे हुए व्यंजक को केवल $\sin\theta$ और $\cos\theta$ में लिखिए: वह साधारण भिन्न बन जाता है।`,
    t`फिर **identity** $\sin^2\theta + \cos^2\theta = 1$, जो हर $\theta$ के लिए सही समीकरण है, बाकी साफ़ कर देती है।`,
    t`जब $\tan\theta$ दिया हो, तब $\sin\theta$ और $\cos\theta$ अलग-अलग नहीं चाहिए।`,
    t`अंश और हर दोनों को $\cos\theta$ से भाग दीजिए, और हर $\sin\theta$, $\tan\theta$ बन जाता है।`,
  ],
  formal: [
    {
      title: t`सब कुछ sin और cos में बदलिए`,
      points: [
        t`पहले हर अनुपात को $\sin\theta$ और $\cos\theta$ के रूप में लिखिए।`,
        t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ और $\cot\theta = \frac{\cos\theta}{\sin\theta}$।`,
        t`$\sec\theta = \frac{1}{\cos\theta}$ और $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$।`,
        t`फिर भिन्नों को एक **common denominator** (समान हर) पर लाइए, एक ऐसा हर जो सब में साझा हो।`,
        t`अंत में, साफ़ करने के लिए $\sin^2\theta + \cos^2\theta = 1$ लगाइए।`,
      ],
    },
    {
      title: t`जब tan θ दिया हो`,
      points: [
        t`**Term** (पद) किसी योग का एक टुकड़ा है, जैसे $2\sin\theta + 3\cos\theta$ में $2\sin\theta$।`,
        t`मान लीजिए अंश और हर के हर पद में एक $\sin\theta$ या एक $\cos\theta$ है।`,
        t`अंश और हर को $\cos\theta$ से भाग दीजिए: भिन्न का मान वही रहता है।`,
        t`हर $\sin\theta$, $\tan\theta$ बन जाता है, और हर $\cos\theta$, $1$, पद चाहे जहाँ हो।`,
        t`इसलिए $\frac{a\sin\theta + b\cos\theta}{c\sin\theta + d\cos\theta} = \frac{a\tan\theta + b}{c\tan\theta + d}$।`,
        t`अब $\tan\theta$ का दिया हुआ मान रखिए।`,
      ],
    },
    {
      title: t`जब पद वर्ग हों`,
      points: [
        t`जब पद वर्ग हों, जैसे $\sin^2\theta$ और $\cos^2\theta$, तो अंश और हर को $\cos^2\theta$ से भाग दीजिए।`,
        t`तब $\frac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta$ और $\frac{\cos^2\theta}{\cos^2\theta} = 1$।`,
        t`या identities $\sec^2\theta = 1 + \tan^2\theta$ और $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ लगाइए।`,
        t`दिया हुआ $\tan\theta$, $\cot\theta = \frac{1}{\tan\theta}$ भी देता है, इसलिए दोनों identities लगाई जा सकती हैं।`,
        t`हर एक में $1$ रखिए: $\sec^2\theta$, $\tan^2\theta$ नहीं है।`,
      ],
    },
    {
      title: t`बीजगणित की identities से विस्तार`,
      points: [
        t`कोष्ठक का **expand** करना (विस्तार करना) यानी उसे गुणा करके अलग-अलग पदों में खोलना।`,
        t`$(a + b)^2 = a^2 + 2ab + b^2$।`,
        t`$(a - b)^2 = a^2 - 2ab + b^2$।`,
        t`बीच का पद $2ab$ रखिए: $(a + b)^2$, $a^2 + b^2$ नहीं है।`,
        t`घनों के लिए, $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$।`,
      ],
    },
    {
      title: t`गुणनफल जो एक के बराबर हैं`,
      points: [
        t`किसी अनुपात का **reciprocal** वही अनुपात उलटा है, जैसे $\sec\theta = \frac{1}{\cos\theta}$।`,
        t`अनुपात गुणा उसका reciprocal $1$ होता है।`,
        t`इसलिए $\sin\theta\operatorname{cosec}\theta = 1$, $\cos\theta\sec\theta = 1$ और $\tan\theta\cot\theta = 1$।`,
        t`इन गुणनफलों पर नज़र रखिए: विस्तार के बाद ये अक्सर बीच वाले पद में छिपे होते हैं।`,
        t`और, समान हर पर, $\tan\theta + \cot\theta = \frac{\sin^2\theta + \cos^2\theta}{\sin\theta\cos\theta}$।`,
        t`इसका अंश $1$ है, इसलिए $\tan\theta + \cot\theta = \frac{1}{\sin\theta\cos\theta} = \sec\theta\operatorname{cosec}\theta$।`,
      ],
    },
    {
      title: t`L = R सिद्ध करना`,
      points: [
        t`Identity $L = R$ को **prove** करना (सिद्ध करना) यानी दिखाना कि बायाँ पक्ष $L$ हमेशा दायें पक्ष $R$ के बराबर है।`,
        t`ज़्यादा जटिल पक्ष से शुरू कीजिए।`,
        t`उसे तब तक सरल कीजिए जब तक वह दूसरा पक्ष न बन जाए।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\tan A = \frac{4}{3}$, तो $\dfrac{2\sin A - 3\cos A}{2\sin A + 3\cos A}$ ज्ञात कीजिए।`,
    steps: [
      t`हर पद में एक $\sin A$ या एक $\cos A$ है, इसलिए अंश और हर को $\cos A$ से भाग दीजिए: $\frac{\sin A}{\cos A} = \tan A$ और $\frac{\cos A}{\cos A} = 1$।`,
      t`व्यंजक $\dfrac{2\tan A - 3}{2\tan A + 3}$ बन जाता है।`,
      t`$\tan A = \frac{4}{3}$ रखिए: अंश $\frac{8}{3} - 3 = -\frac{1}{3}$ है और हर $\frac{8}{3} + 3 = \frac{17}{3}$।`,
    ],
    answer: t`$\dfrac{2\sin A - 3\cos A}{2\sin A + 3\cos A} = -\dfrac{1}{17}$।`,
  },
  remediation: {
    "C07-M1": t`$\sec\theta = \frac{1}{\cos\theta}$ और $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: हर जोड़ी में ठीक एक 'co' है। सरल करने से पहले हर अनुपात को इसी तरह लिखिए।`,
    "C07-M2": t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ और $\cot\theta = \frac{\cos\theta}{\sin\theta}$। इसलिए $\cos\theta$ से भाग देने पर $\sin\theta$, $\tan\theta$ बन जाता है, और $\tan\theta = \frac{p}{q}$ का अर्थ है $\sin\theta : \cos\theta = p : q$।`,
    "C07-M3": t`$(a + b)^2 = a^2 + 2ab + b^2$ और $(a - b)^2 = a^2 - 2ab + b^2$। बीच का पद रखिए: $\sin\theta\operatorname{cosec}\theta = 1$ जैसे गुणनफल अक्सर वहीं छिपे होते हैं।`,
    "C07-M4": t`आप केवल वही गुणनखंड काट सकते हैं जो पूरे अंश और पूरे हर में हो। हर पद को एक ही चीज़ से भाग दीजिए, जैसे $\cos\theta$, या पहले पदों को मिलाइए।`,
    "C07-M5": t`$\cos\theta$ से भाग देने पर हर $\sin\theta$, $\tan\theta$ बन जाता है और हर $\cos\theta$, $1$, पद चाहे जहाँ हो: $c\cos\theta + d\sin\theta$, $c + d\tan\theta$ बन जाता है।`,
    "C07-M6": t`$\sec^2\theta = 1 + \tan^2\theta$ और $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$। अंतर में $1$ कट जाते हैं, पर योग में जुड़ जाते हैं, इसलिए हर एक गिनिए।`,
  },
  solutions: {
    "C07-Q1": [
      t`अंश और हर को $\cos\theta$ से भाग दीजिए। हर में, $4\cos\theta$, $4$ बन जाता है और $3\sin\theta$, $3\tan\theta$: $\dfrac{2\tan\theta + 3}{4 + 3\tan\theta}$।`,
      t`$\tan\theta = \frac{1}{2}$ रखिए: अंश $1 + 3 = 4$ है और हर $4 + \frac{3}{2} = \frac{11}{2}$।`,
      t`मान $4 \div \frac{11}{2} = \frac{8}{11}$ है।`,
    ],
    "C07-Q2": [
      t`$\cot\theta = \sqrt{7}$, इसलिए $\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 8$, और $\sec^2\theta = 1 + \tan^2\theta = 1 + \frac{1}{7} = \frac{8}{7}$।`,
      t`अंश: $8 - \frac{8}{7} = \frac{48}{7}$। हर: $8 + \frac{8}{7} = \frac{64}{7}$।`,
      t`मान $\frac{48}{64} = \frac{3}{4}$ है।`,
    ],
    "C07-Q3": [
      t`विस्तार कीजिए: $\sin^2\theta + 2\sin\theta\operatorname{cosec}\theta + \operatorname{cosec}^2\theta + \cos^2\theta + 2\cos\theta\sec\theta + \sec^2\theta$।`,
      t`$\sin\theta\operatorname{cosec}\theta = 1$, $\cos\theta\sec\theta = 1$ और $\sin^2\theta + \cos^2\theta = 1$, इसलिए यह $5 + \operatorname{cosec}^2\theta + \sec^2\theta$ है।`,
      t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ और $\sec^2\theta = 1 + \tan^2\theta$, इसलिए यह सरल होकर $\tan^2\theta + \cot^2\theta + 7$ बनता है।`,
    ],
    "C07-Q4": [
      t`विस्तार कीजिए: $(\tan^2\theta + 2\tan\theta\sec\theta + \sec^2\theta) + (\tan^2\theta - 2\tan\theta\sec\theta + \sec^2\theta) = 2\tan^2\theta + 2\sec^2\theta$।`,
      t`$\sec^2\theta = 1 + \tan^2\theta$, इसलिए यह $2\tan^2\theta + 2 + 2\tan^2\theta = 4\tan^2\theta + 2$ है।`,
      t`$\sin$ और $\cos$ में यह $\frac{4\sin^2\theta + 2\cos^2\theta}{\cos^2\theta} = 2\left(\frac{1 + \sin^2\theta}{1 - \sin^2\theta}\right)$ है, पुस्तक वाला रूप।`,
    ],
    "C07-Q5": [
      t`$\sec\theta = \frac{1}{\cos\theta}$ और $\tan\theta = \frac{\sin\theta}{\cos\theta}$, इसलिए अंश $\frac{1 - \sin\theta}{\cos\theta}$ है और हर $\frac{1 + \sin\theta}{\cos\theta}$।`,
      t`$\cos\theta$ कट जाता है, और बचता है $\dfrac{1 - \sin\theta}{1 + \sin\theta}$।`,
    ],
    "C07-Q6": [
      t`विस्तार कीजिए: $\sin^2\theta + 2\sin\theta\sec\theta + \sec^2\theta + \cos^2\theta + 2\cos\theta\operatorname{cosec}\theta + \operatorname{cosec}^2\theta$।`,
      t`$\sin\theta\sec\theta = \tan\theta$ और $\cos\theta\operatorname{cosec}\theta = \cot\theta$, इसलिए यह $1 + 2(\tan\theta + \cot\theta) + \sec^2\theta + \operatorname{cosec}^2\theta$ है।`,
      t`$\tan\theta + \cot\theta = \frac{1}{\sin\theta\cos\theta} = \sec\theta\operatorname{cosec}\theta$, और $\sec^2\theta + \operatorname{cosec}^2\theta = \frac{\sin^2\theta + \cos^2\theta}{\sin^2\theta\cos^2\theta} = \sec^2\theta\operatorname{cosec}^2\theta$।`,
      t`इसलिए यह $1 + 2\sec\theta\operatorname{cosec}\theta + \sec^2\theta\operatorname{cosec}^2\theta = (1 + \sec\theta\operatorname{cosec}\theta)^2$ है।`,
    ],
  },
};
