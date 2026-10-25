import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "hi",
  status: "approved",
  source: "173ab61550a68e",
  hook: {
    prompt: t`एक बिंदु ऐसे चलता है कि $x = \cos\theta$ और $y = \sin\theta$, जबकि $\theta$ हर मान लेता है। **क्या केवल $x$ और $y$ में, बिना $\theta$ के, कोई एक समीकरण है जिसे हर ऐसा बिंदु संतुष्ट करे?**`,
    reveal: t`हाँ। वर्ग करके जोड़िए: $x^2 + y^2 = \cos^2\theta + \sin^2\theta = 1$, $\theta$ चाहे जो हो। हर बिंदु circle $x^2 + y^2 = 1$ पर है। ऐसा समीकरण ढूँढना $\theta$ का **eliminating** (विलोपन) कहलाता है।`,
  },
  intuition: [
    t`$\theta$ को एक छिपा हुआ dial समझिए: dial की हर स्थिति एक बिंदु $(x, y)$ देती है।`,
    t`$\theta$ को **eliminate** करना (विलोपित करना) यानी उससे छुटकारा पाना, और केवल $x$ और $y$ में एक समीकरण बचाना।`,
    t`पहले हर trigonometric function को **subject** (कर्ता) बनाइए: उसे एक तरफ़ अकेला लाइए, जैसे $\cos\theta = \frac{x}{a}$।`,
    t`**Identity** वह समीकरण है जो हर $\theta$ के लिए सही हो, जैसे $\cos^2\theta + \sin^2\theta = 1$।`,
    t`दोनों functions को ऐसी identity में रखिए जो उन्हें जोड़ती हो, और $\theta$ हट जाता है।`,
    t`पूरा कौशल है सही identity चुनना और बीजगणित साफ़-सुथरे ढंग से करना।`,
  ],
  formal: [
    {
      title: t`तीन कदमों में विधि`,
      points: [
        t`कदम 1: हर trigonometric function को subject बनाइए।`,
        t`$x = a\cos\theta$ में, $\cos\theta$ को गुणा करने वाली संख्या $a$ उसका **coefficient** (गुणांक) है।`,
        t`दोनों पक्षों को coefficient से भाग दीजिए: $\cos\theta = \frac{x}{a}$।`,
        t`कदम 2: वह identity चुनिए जो functions की जोड़ी को जोड़ती है।`,
        t`कदम 3: **substitute** कीजिए (रखिए), हर function की जगह उसका भिन्न रखकर।`,
        t`उत्तर को $x$ और $y$ में एक समीकरण के रूप में लिखिए।`,
      ],
    },
    {
      title: t`कौन-सी identity लगाएँ`,
      points: [
        t`functions की हर जोड़ी अपनी एक identity से जुड़ी है।`,
        t`cos और sin: $\cos^2\theta + \sin^2\theta = 1$।`,
        t`sec और tan: $\sec^2\theta - \tan^2\theta = 1$।`,
        t`cosec और cot: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$।`,
        t`केवल sin और cos जुड़ते हैं; बाकी दो जोड़ियाँ घटती हैं।`,
        t`जब वे घटती हैं, तो sec या cosec पहले आता है।`,
      ],
    },
    {
      title: t`मानक परिणाम`,
      points: [
        t`$x = a\cos\theta$ और $y = b\sin\theta$ लीजिए।`,
        t`Coefficients से भाग दीजिए: $\cos\theta = \frac{x}{a}$ और $\sin\theta = \frac{y}{b}$।`,
        t`cos और sin, $\cos^2\theta + \sin^2\theta = 1$ से जुड़े हैं।`,
        t`रखिए: $\left(\frac{x}{a}\right)^2 + \left(\frac{y}{b}\right)^2 = 1$।`,
        t`वर्ग पूरे भिन्न पर लगता है, अंश और हर दोनों पर: $\left(\frac{x}{a}\right)^2 = \frac{x^2}{a^2}$।`,
        t`इसलिए $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$।`,
      ],
    },
    {
      title: t`अचर पद`,
      points: [
        t`**Constant term** (अचर पद) अकेली खड़ी संख्या है, जैसे $x = h + a\cos\theta$ में $h$।`,
        t`इसे पहले हटाइए: दोनों पक्षों में से $h$ घटाइए, ताकि $x - h = a\cos\theta$।`,
        t`फिर coefficient से भाग दीजिए: $\cos\theta = \frac{x - h}{a}$।`,
      ],
    },
    {
      title: t`घन वाले functions`,
      points: [
        t`$x = a\cos^3\theta$ में function का **cubed** (घन) है: $\cos^3\theta$ का अर्थ है $(\cos\theta)^3$।`,
        t`Coefficient से भाग दीजिए: $\cos^3\theta = \frac{x}{a}$।`,
        t`**Cube root** (घनमूल), यानी घात $\frac{1}{3}$, घन को उलट देता है।`,
        t`इसलिए पहले घनमूल लीजिए: $\cos\theta = \left(\frac{x}{a}\right)^{1/3}$।`,
        t`फिर identity के लिए उसका वर्ग कीजिए: $\cos^2\theta = \left(\frac{x}{a}\right)^{2/3}$।`,
      ],
    },
  ],
  worked: {
    prompt: t`$x = 2 + 3\cos\theta$, $y = 5 + 3\sin\theta$ से $\theta$ का विलोपन कीजिए।`,
    steps: [
      t`अचरों को दूसरी ओर ले जाइए: $x - 2 = 3\cos\theta$ और $y - 5 = 3\sin\theta$।`,
      t`$3$ से भाग दीजिए: $\cos\theta = \frac{x - 2}{3}$ और $\sin\theta = \frac{y - 5}{3}$।`,
      t`cos और sin, $\cos^2\theta + \sin^2\theta = 1$ से जुड़े हैं, इसलिए $\frac{(x - 2)^2}{9} + \frac{(y - 5)^2}{9} = 1$।`,
      t`$9$ से गुणा कीजिए: $(x - 2)^2 + (y - 5)^2 = 9$।`,
    ],
    answer: t`$(x - 2)^2 + (y - 5)^2 = 9$: एक circle जिसका centre $(2, 5)$ और radius $3$ है।`,
  },
  remediation: {
    "C08-M1": t`केवल $\cos^2\theta + \sin^2\theta = 1$ एक योग है। sec और tan के लिए $\sec^2\theta - \tan^2\theta = 1$ लगाइए; cosec और cot के लिए $\operatorname{cosec}^2\theta - \cot^2\theta = 1$।`,
    "C08-M2": t`क्योंकि $\sec^2\theta = 1 + \tan^2\theta$, sec वाला पद बड़ा है: $\sec^2\theta - \tan^2\theta = 1$। इसी तरह, $\operatorname{cosec}^2\theta - \cot^2\theta = 1$, जिसमें cosec पहले है।`,
    "C08-M3": t`घात पूरे भिन्न पर लगती है, अंश और हर दोनों पर: $\left(\frac{x}{a}\right)^n = \frac{x^n}{a^n}$।`,
    "C08-M4": t`दोनों पक्षों में से अचर घटाइए: $x = h + a\cos\theta$ से $x - h = a\cos\theta$ मिलता है, इसलिए $\cos\theta = \frac{x - h}{a}$।`,
    "C08-M5": t`पहले घनमूल लीजिए: $\cos\theta = \left(\frac{x}{a}\right)^{1/3}$, इसलिए $\cos^2\theta = \left(\frac{x}{a}\right)^{2/3}$। $\frac{x}{a}$ का वर्ग करने से $\cos^6\theta$ मिलता है, और $\cos^6\theta + \sin^6\theta$, $1$ नहीं है।`,
    "C08-M6": t`$\cos\theta$ को अकेला करने के लिए, दोनों पक्षों को उसके coefficient से भाग दीजिए: $x = a\cos\theta$ से $\cos\theta = \frac{x}{a}$ मिलता है।`,
  },
  solutions: {
    "C08-Q1": [
      t`$\sec\theta = \frac{x}{3}$ और $\tan\theta = \frac{y}{4}$।`,
      t`sec और tan, $\sec^2\theta - \tan^2\theta = 1$ से जुड़े हैं।`,
      t`इसलिए $\frac{x^2}{9} - \frac{y^2}{16} = 1$।`,
    ],
    "C08-Q2": [
      t`$\operatorname{cosec}\theta = \frac{x}{6}$ और $\cot\theta = \frac{y}{8}$।`,
      t`cosec और cot, $\operatorname{cosec}^2\theta - \cot^2\theta = 1$ से जुड़े हैं।`,
      t`इसलिए $\frac{x^2}{36} - \frac{y^2}{64} = 1$।`,
    ],
    "C08-Q3": [
      t`अचरों को हटाइए: $x - 5 = 6\operatorname{cosec}\theta$ और $y - 3 = 8\cot\theta$।`,
      t`इसलिए $\operatorname{cosec}\theta = \frac{x - 5}{6}$ और $\cot\theta = \frac{y - 3}{8}$।`,
      t`$\operatorname{cosec}^2\theta - \cot^2\theta = 1$ से $\frac{(x - 5)^2}{36} - \frac{(y - 3)^2}{64} = 1$ मिलता है।`,
    ],
    "C08-Q4": [
      t`$2x = 3 - 4\tan\theta$ से: $4\tan\theta = 3 - 2x$, इसलिए $\tan\theta = \frac{3 - 2x}{4}$।`,
      t`$3y = 5 + 3\sec\theta$ से: $3\sec\theta = 3y - 5$, इसलिए $\sec\theta = \frac{3y - 5}{3}$।`,
      t`$\sec^2\theta - \tan^2\theta = 1$ से $\frac{(3y - 5)^2}{9} - \frac{(3 - 2x)^2}{16} = 1$ मिलता है।`,
      t`क्योंकि $(3 - 2x)^2 = (2x - 3)^2$, यह $\frac{(3y - 5)^2}{9} - \frac{(2x - 3)^2}{16} = 1$ है।`,
    ],
    "C08-Q5": [
      t`$\cos^3\theta = \frac{x}{8}$, इसलिए $\cos\theta = \left(\frac{x}{8}\right)^{1/3} = \frac{x^{1/3}}{2}$। इसी तरह $\sin\theta = \frac{y^{1/3}}{3}$।`,
      t`वर्ग कीजिए: $\cos^2\theta = \frac{x^{2/3}}{4}$ और $\sin^2\theta = \frac{y^{2/3}}{9}$।`,
      t`$\cos^2\theta + \sin^2\theta = 1$ से $\frac{x^{2/3}}{4} + \frac{y^{2/3}}{9} = 1$ मिलता है।`,
    ],
    "C08-Q6": [
      t`अचरों को हटाइए: $x - 3 = 2\cos\theta$ और $y - 1 = 4\sin\theta$।`,
      t`इसलिए $\cos\theta = \frac{x - 3}{2}$ और $\sin\theta = \frac{y - 1}{4}$।`,
      t`$\cos^2\theta + \sin^2\theta = 1$ से $\frac{(x - 3)^2}{4} + \frac{(y - 1)^2}{16} = 1$ मिलता है।`,
    ],
  },
};
