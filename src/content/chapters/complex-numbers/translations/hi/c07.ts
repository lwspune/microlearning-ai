import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "hi",
  status: "approved",
  source: "09aa24e3274e63",
  hook: {
    prompt: t`$k$ के किस मान के लिए $(k - 2) + 5i$, imaginary axis पर है? **क्या शून्य होना चाहिए?**`,
    reveal: t`Real part: $k - 2 = 0$, इसलिए $k = 2$। Imaginary axis पर हर बिंदु का real part शून्य होता है।`,
  },
  intuition: [
    t`याद कीजिए: $x + iy$ का real part $x$ और imaginary part $y$ है, और इसे बिंदु $(x, y)$ से दिखाते हैं।`,
    t`कोई संख्या **purely real** (शुद्ध वास्तविक), यानी केवल वास्तविक, है जब उसका imaginary part $0$ हो, जैसे $2$: वह real axis पर है।`,
    t`वह **purely imaginary** है जब उसका real part $0$ हो, जैसे $3i$: वह **imaginary axis** (काल्पनिक अक्ष), यानी खड़े अक्ष, पर है।`,
    t`इसलिए किसी संख्या को purely real या purely imaginary बनाने के लिए, **दूसरे** भाग को शून्य रखिए।`,
    t`अगर संख्या एक भिन्न है, तो पहले उसका **rationalise** (परिमेयीकरण) कीजिए: उसका हर वास्तविक बनाइए, जिससे $x + iy$ रूप मिले।`,
    t`परीक्षण उस सरल की गई संख्या पर लगता है, केवल उसके ऊपरी भाग, **numerator** (अंश), पर नहीं।`,
  ],
  formal: [
    {
      title: t`Purely real संख्याएँ`,
      points: [
        t`$z = x + iy$ लीजिए, जहाँ $x$ और $y$ वास्तविक हैं: यह purely real है जब $\operatorname{Im} z = 0$, यानी $y = 0$।`,
        t`याद कीजिए: conjugate $\bar z = x - iy$, real axis में $z$ का दर्पण प्रतिबिंब है।`,
        t`Real axis पर की संख्या अपना ही दर्पण प्रतिबिंब है: $z = 4$ के लिए, $\bar z = 4$ भी।`,
        t`चिह्नों में, $z = \bar z$ का अर्थ है $x + iy = x - iy$, इसलिए $y = -y$, इसलिए $y = 0$।`,
        t`हम $\iff$ लिखते हैं, जिसे "if and only if" (तभी और केवल तभी) पढ़ते हैं, जब हर कथन दूसरे से निकलता हो।`,
        t`इसलिए $z$ purely real है $\iff \operatorname{Im} z = 0$ $\iff z = \bar z$।`,
      ],
    },
    {
      title: t`Purely imaginary संख्याएँ`,
      points: [
        t`$z = x + iy$ purely imaginary है जब $\operatorname{Re} z = 0$, यानी $x = 0$, इसलिए $z = iy$।`,
        t`$z = 3i$ के लिए, real axis में दर्पण प्रतिबिंब $\bar z = -3i$ है, जो $-z$ है।`,
        t`सामान्यतः, $iy$ का conjugate $-iy$ है: इसलिए $\bar z = -z$।`,
        t`चिह्नों में, $z = -\bar z$ का अर्थ है $x + iy = -x + iy$, इसलिए $x = 0$।`,
        t`इसलिए $z$ purely imaginary है $\iff \operatorname{Re} z = 0$ $\iff z = -\bar z$।`,
        t`आमतौर पर साथ में $z \ne 0$ भी माँगा जाता है, क्योंकि $0$ दोनों अक्षों पर है।`,
      ],
    },
    {
      title: t`भिन्न: पहले परिमेयीकरण`,
      points: [
        t`भागफल $\dfrac pq$ के लिए, पहले उसे $x + iy$ के रूप में लिखिए।`,
        t`याद कीजिए: अंश और हर को हर के conjugate से गुणा कीजिए, जिससे हर वास्तविक बनता है।`,
        t`फिर उसके real part या imaginary part को शून्य रखिए।`,
        t`केवल अंश का वास्तविक या काल्पनिक होना परीक्षण **नहीं** है।`,
        t`उदाहरण के लिए, $\dfrac{3i}{2 + i}$ का अंश purely imaginary है।`,
        t`पर $\dfrac{3i(2 - i)}{5} = \dfrac{3 + 6i}{5}$, जो दोनों में से कोई नहीं है।`,
      ],
    },
  ],
  worked: {
    prompt: t`किस वास्तविक $x$ के लिए $\dfrac{x + 2i}{1 - i}$ purely real है?`,
    steps: [
      t`परिमेयीकरण कीजिए: $\dfrac{(x + 2i)(1 + i)}{2}$ $= \dfrac{(x - 2) + (x + 2)i}{2}$।`,
      t`Purely real का अर्थ है imaginary part शून्य है: $x + 2 = 0$।`,
    ],
    answer: t`$x = -2$`,
  },
  remediation: {
    "C07-M1": t`Purely imaginary का अर्थ है **real** part शून्य है; purely real का अर्थ है **imaginary** part शून्य है।`,
    "C07-M2": t`पहले परिमेयीकरण कीजिए। भिन्न purely real या purely imaginary हो सकती है तब भी जब उसका अंश न हो।`,
    "C07-M3": t`$b$ को चिह्न बदलकर दूसरी ओर ले जाइए: $x = -\dfrac ba$।`,
    "C07-M4": t`$b$ घटाइए, फिर $a$ से भाग दीजिए: $x = -\dfrac ba$। वापस रखकर जाँचिए कि वह भाग शून्य है।`,
    "C07-M5": t`भिन्न की रेखा पूरे अंश को भाग देती है: $\dfrac{x + 1}{2} = \dfrac x2 + \dfrac12$। भिन्न ठीक तब शून्य है जब उसका अंश शून्य हो।`,
  },
  solutions: {
    "C07-Q1": [
      t`Purely imaginary का अर्थ है real part शून्य है: $x - 3 = 0$, इसलिए $x = 3$।`,
      t`जाँचिए कि imaginary part भी शून्य न हो: $3 + 2 = 5$, इसलिए संख्या $5i$ है।`,
    ],
    "C07-Q2": [
      t`Purely real का अर्थ है imaginary part शून्य है: $x - 4 = 0$।`,
      t`इसलिए $x = 4$, और संख्या $2(4) + 1 = 9$ है।`,
    ],
    "C07-Q3": [
      t`परिमेयीकरण कीजिए: $\dfrac{(x + i)(1 - i)}{(1 + i)(1 - i)} = \dfrac{(x + 1) + (1 - x)i}{2}$।`,
      t`Purely imaginary का अर्थ है real part शून्य है: $x + 1 = 0$, इसलिए $x = -1$।`,
      t`जाँच: तब संख्या $\dfrac{2i}{2} = i$ है, जो शून्य नहीं है।`,
    ],
    "C07-Q4": [
      t`परिमेयीकरण कीजिए: $\dfrac{(2 + xi)(3 - 4i)}{25} = \dfrac{(6 + 4x) + (3x - 8)i}{25}$।`,
      t`Purely real का अर्थ है imaginary part शून्य है: $3x - 8 = 0$, इसलिए $x = \dfrac83$।`,
    ],
    "C07-Q5": [
      t`गुणा कीजिए: $(x + 3i)(2 + i) = 2x + xi + 6i + 3i^2 = (2x - 3) + (x + 6)i$।`,
      t`Purely imaginary का अर्थ है real part शून्य है: $2x - 3 = 0$, इसलिए $x = \dfrac32$।`,
    ],
  },
};
