import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "hi",
  status: "approved",
  source: "123a24905078e5",
  hook: {
    prompt: t`यदि $\tan\theta + \frac{1}{\tan\theta} = 2$, तो $\tan^2\theta + \frac{1}{\tan^2\theta}$ क्या है? **क्या यह $4$ है?**`,
    reveal: t`नहीं, यह $2$ है। योग का वर्ग करने पर एक बीच का पद आता है: $\tan^2\theta + 2\tan\theta \cdot \frac{1}{\tan\theta} + \frac{1}{\tan^2\theta} = 4$, और वह बीच का पद $2$ है। इसलिए $\tan^2\theta + \frac{1}{\tan^2\theta} = 4 - 2 = 2$। जाँच: $\tan\theta = 1$ सही बैठता है, और $1 + 1 = 2$।`,
  },
  intuition: [
    t`**Identity** (सर्वसमिका) एक ऐसा समीकरण है जो हर उस angle के लिए सही है जहाँ उसके दोनों पक्ष परिभाषित हों।`,
    t`एक angle $\theta$ को standard position में रखिए, और उसकी terminal arm पर $O$ के अलावा एक बिंदु $P(x, y)$ चुनिए।`,
    t`$P$ से $x$-अक्ष पर लंब डालिए: इससे एक समकोण त्रिभुज बनता है जिसकी **legs** (छोटी भुजाएँ) $x$ और $y$ हैं।`,
    t`उसकी सबसे लंबी भुजा, hypotenuse, $r = OP$ है, यानी $O$ से $P$ की दूरी।`,
    t`पाइथागोरस से, $x^2 + y^2 = r^2$, तब भी जब $x$ या $y$ ऋणात्मक हो: वर्ग करने से चिह्न हट जाता है।`,
    t`इस एक तथ्य को $r^2$ से, $x^2$ से या $y^2$ से भाग दीजिए, और तीनों **fundamental identities** (मूल सर्वसमिकाएँ) निकल आती हैं।`,
  ],
  formal: [
    {
      title: t`Sine और cosine`,
      points: [
        t`त्रिभुज की हर भुजा को $r$ से भाग दीजिए: hypotenuse $1$ बन जाता है।`,
        t`Legs $\frac{x}{r}$ और $\frac{y}{r}$ बन जाती हैं, जो $\cos\theta$ और $\sin\theta$ हैं।`,
        t`इस छोटे त्रिभुज में पाइथागोरस से $\left(\frac{x}{r}\right)^2 + \left(\frac{y}{r}\right)^2 = 1$ मिलता है: यह $x^2 + y^2 = r^2$ को $r^2$ से भाग देना है।`,
        t`$(\sin\theta)^2$ को, यानी $\sin\theta$ के वर्ग को, हम $\sin^2\theta$ लिखते हैं, और बाकी functions के लिए भी ऐसे ही।`,
        t`इसलिए $\sin^2\theta + \cos^2\theta = 1$।`,
        t`यह हर angle $\theta$ के लिए सही है, क्योंकि $r$ कभी $0$ नहीं होता।`,
      ],
    },
    {
      title: t`Tangent और secant`,
      points: [
        t`अब हर भुजा को $x$ से भाग दीजिए: $x$-अक्ष के साथ वाली leg $1$ बन जाती है।`,
        t`बाकी दो भुजाएँ $\frac{y}{x} = \tan\theta$ और $\frac{r}{x} = \sec\theta$ बन जाती हैं।`,
        t`पाइथागोरस से $1 + \left(\frac{y}{x}\right)^2 = \left(\frac{r}{x}\right)^2$ मिलता है: यह $x^2 + y^2 = r^2$ को $x^2$ से भाग देना है।`,
        t`इसलिए $1 + \tan^2\theta = \sec^2\theta$।`,
        t`यह वहाँ सही है जहाँ $x \ne 0$, यानी जहाँ $\tan\theta$ और $\sec\theta$ परिभाषित हैं।`,
        t`इसलिए $\tan$ की जोड़ी $\sec$ से है: दोनों में $x$ नीचे है।`,
      ],
    },
    {
      title: t`Cotangent और cosecant`,
      points: [
        t`अब हर भुजा को $y$ से भाग दीजिए: खड़ी leg, जिसकी लंबाई $y$ है, $1$ बन जाती है।`,
        t`बाकी दो भुजाएँ $\frac{x}{y} = \cot\theta$ और $\frac{r}{y} = \operatorname{cosec}\theta$ बन जाती हैं।`,
        t`पाइथागोरस से $\left(\frac{x}{y}\right)^2 + 1 = \left(\frac{r}{y}\right)^2$ मिलता है: यह $x^2 + y^2 = r^2$ को $y^2$ से भाग देना है।`,
        t`इसलिए $\cot^2\theta + 1 = \operatorname{cosec}^2\theta$, जिसे आमतौर पर $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ लिखते हैं।`,
        t`यह वहाँ सही है जहाँ $y \ne 0$, यानी जहाँ $\cot\theta$ और $\operatorname{cosec}\theta$ परिभाषित हैं।`,
        t`इसलिए $\cot$ की जोड़ी $\operatorname{cosec}$ से है: दोनों में $y$ नीचे है।`,
      ],
    },
    {
      title: t`Identity को पुनर्व्यवस्थित करना`,
      points: [
        t`Identity को किसी भी समीकरण की तरह, एक पद को दूसरी ओर ले जाकर, पुनर्व्यवस्थित किया जा सकता है।`,
        t`जब कोई पद $=$ चिह्न पार करता है, तो उसका चिह्न बदल जाता है।`,
        t`$\sin^2\theta + \cos^2\theta = 1$ से: $\cos^2\theta - 1 = -\sin^2\theta$, $\sin^2\theta$ नहीं।`,
        t`$1 + \tan^2\theta = \sec^2\theta$ से: $\sec^2\theta - \tan^2\theta = 1$।`,
        t`$1 + \cot^2\theta = \operatorname{cosec}^2\theta$ से: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$।`,
      ],
    },
    {
      title: t`वर्ग करने पर बीच का पद रहता है`,
      points: [
        t`योग का वर्ग करने पर एक बीच का पद आता है: $(a + b)^2 = a^2 + 2ab + b^2$।`,
        t`$a = \sin^2\theta$ और $b = \cos^2\theta$ लीजिए, ताकि $a + b = 1$।`,
        t`तब $a^2 = \sin^4\theta$, जिसका अर्थ है $(\sin\theta)^4$, और $b^2 = \cos^4\theta$।`,
        t`इसलिए $\sin^4\theta + \cos^4\theta = (a + b)^2 - 2ab$।`,
        t`यानी $(\sin^2\theta + \cos^2\theta)^2 - 2\sin^2\theta\cos^2\theta$ $= 1 - 2\sin^2\theta\cos^2\theta$।`,
        t`यह $1$ नहीं है: बीच का पद $2ab$ घटाना ज़रूरी है।`,
      ],
    },
    {
      title: t`Factor pairs (गुणनखंड जोड़ी)`,
      points: [
        t`दो वर्गों के अंतर के गुणनखंड होते हैं: $(a + b)(a - b) = a^2 - b^2$।`,
        t`इसलिए $(\sec\theta + \tan\theta)(\sec\theta - \tan\theta)$ $= \sec^2\theta - \tan^2\theta = 1$।`,
        t`ये दो गुणनखंड एक **factor pair** हैं: इनका गुणनफल $1$ है, इसलिए हर एक दूसरे का reciprocal है।`,
        t`इसलिए यदि $\sec\theta + \tan\theta = k$, तो $\sec\theta - \tan\theta = \frac{1}{k}$।`,
        t`दोनों को जोड़ने पर $2\sec\theta = k + \frac{1}{k}$ मिलता है, और घटाने पर $2\tan\theta = k - \frac{1}{k}$।`,
        t`यही $\operatorname{cosec}\theta + \cot\theta$ और $\operatorname{cosec}\theta - \cot\theta$ के लिए भी चलता है, जिनका गुणनफल भी $1$ है।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\operatorname{cosec}\theta + \cot\theta = 5$, तो $\sec\theta$ ज्ञात कीजिए।`,
    steps: [
      t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta)$ $= \operatorname{cosec}^2\theta - \cot^2\theta = 1$, इसलिए $\operatorname{cosec}\theta - \cot\theta = \frac{1}{5}$।`,
      t`दोनों समीकरण जोड़िए: $2\operatorname{cosec}\theta = 5 + \frac{1}{5} = \frac{26}{5}$, इसलिए $\operatorname{cosec}\theta = \frac{13}{5}$। इन्हें घटाइए: $2\cot\theta = 5 - \frac{1}{5} = \frac{24}{5}$, इसलिए $\cot\theta = \frac{12}{5}$।`,
      t`$\sin\theta = \frac{5}{13}$, और $\cos\theta = \cot\theta \cdot \sin\theta$ $= \frac{12}{5} \cdot \frac{5}{13} = \frac{12}{13}$।`,
      t`इसलिए $\sec\theta = \frac{1}{\cos\theta} = \frac{13}{12}$।`,
    ],
    answer: t`$\sec\theta = \frac{13}{12}$।`,
  },
  remediation: {
    "C05-M1": t`$\sin^2\theta + \cos^2\theta = 1$ को $\cos^2\theta$ से भाग दीजिए: $\tan^2\theta + 1 = \sec^2\theta$। $\sin^2\theta$ से भाग देने पर $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ मिलता है, इसलिए $\tan$ की जोड़ी $\sec$ से है और $\cot$ की $\operatorname{cosec}$ से।`,
    "C05-M2": t`केवल $\sin^2\theta + \cos^2\theta = 1$ का यह रूप है। बाकी हैं $1 + \tan^2\theta = \sec^2\theta$ और $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\sec^2\theta$, $\tan^2\theta$ से $1$ ज़्यादा है, $1$ में से उसे घटाकर नहीं।`,
    "C05-M3": t`इसके बजाय गुणनखंड कीजिए: $(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$। अगर एक गुणनखंड $k$ है, तो दूसरा $\frac{1}{k}$ है, $1$ नहीं।`,
    "C05-M4": t`$(a + b)^2 = a^2 + 2ab + b^2$। $\tan\theta + \cot\theta$ में बीच का पद $2\tan\theta\cot\theta = 2$ है, इसलिए $\tan^2\theta + \cot^2\theta$, वर्ग से $2$ कम है।`,
    "C05-M5": t`जब कोई पद $=$ चिह्न पार करता है, तो उसका चिह्न बदल जाता है। $\sin^2\theta + \cos^2\theta = 1$ से: $\cos^2\theta - 1 = -\sin^2\theta$। $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ से: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$।`,
    "C05-M6": t`उत्तर देने से पहले देखिए कि प्रश्न क्या पूछता है। आख़िरी कदम पूरा कीजिए: reciprocal लीजिए, या $1 + \tan^2\theta = \sec^2\theta$ और $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ से $1$ जोड़िए।`,
  },
  solutions: {
    "C05-Q1": [
      t`यह वर्गों का अंतर है: $(\sec A + \cos A)(\sec A - \cos A) = \sec^2 A - \cos^2 A$।`,
      t`$\sec^2 A = 1 + \tan^2 A$ और $\cos^2 A = 1 - \sin^2 A$।`,
      t`इसलिए यह $(1 + \tan^2 A) - (1 - \sin^2 A) = \tan^2 A + \sin^2 A$ के बराबर है।`,
    ],
    "C05-Q2": [
      t`$\sin^2 A + \cos^2 A = 1$ से: $\cos^2 A - 1 = -\sin^2 A$।`,
      t`$\cot^2 A + 1 = \operatorname{cosec}^2 A$।`,
      t`इसलिए यह $-\sin^2 A \cdot \operatorname{cosec}^2 A = -1$ के बराबर है।`,
    ],
    "C05-Q3": [
      t`वर्ग कीजिए: $\tan^2\theta + 2\tan\theta\cot\theta + \cot^2\theta = 9$। क्योंकि $\tan\theta\cot\theta = 1$, $\tan^2\theta + \cot^2\theta = 9 - 2 = 7$।`,
      t`इसलिए $\sec^2\theta + \operatorname{cosec}^2\theta = (1 + \tan^2\theta) + (1 + \cot^2\theta) = 2 + 7 = 9$।`,
    ],
    "C05-Q4": [
      t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$, इसलिए $\operatorname{cosec}\theta - \cot\theta = \frac{2}{5}$।`,
      t`घटाइए: $2\cot\theta = \frac{5}{2} - \frac{2}{5} = \frac{21}{10}$, इसलिए $\cot\theta = \frac{21}{20}$।`,
      t`इसलिए $\tan\theta = \frac{1}{\cot\theta} = \frac{20}{21}$।`,
    ],
    "C05-Q5": [
      t`$(\operatorname{cosec}\theta - \cot\theta)(\operatorname{cosec}\theta + \cot\theta) = 1$, इसलिए $\operatorname{cosec}\theta + \cot\theta = \frac{1}{q}$।`,
      t`जोड़िए: $2\operatorname{cosec}\theta = q + \frac{1}{q} = \frac{1 + q^2}{q}$, इसलिए $\operatorname{cosec}\theta = \frac{1 + q^2}{2q}$।`,
      t`इसलिए $\sin\theta = \frac{1}{\operatorname{cosec}\theta} = \frac{2q}{1 + q^2}$।`,
    ],
    "C05-Q6": [
      t`$(\sec\theta + \tan\theta)(\sec\theta - \tan\theta) = 1$, इसलिए $\sec\theta - \tan\theta = \frac{1}{3}$।`,
      t`जोड़िए: $2\sec\theta = 3 + \frac{1}{3} = \frac{10}{3}$, इसलिए $\sec\theta = \frac{5}{3}$।`,
      t`इसलिए $\cos\theta = \frac{1}{\sec\theta} = \frac{3}{5}$।`,
    ],
  },
};
