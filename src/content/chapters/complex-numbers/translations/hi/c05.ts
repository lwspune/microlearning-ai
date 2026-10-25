import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "hi",
  status: "approved",
  source: "1abeb5a658595a",
  hook: {
    prompt: t`$3 + 4i$ और $3 - 4i$ लीजिए। इन्हें जोड़िए, फिर गुणा कीजिए। **दोनों उत्तरों में क्या समान है?**`,
    reveal: t`दोनों वास्तविक हैं: योग $6$ है और गुणनफल $9 + 16 = 25$ है। कोई संख्या और उसका conjugate मिलकर हमेशा वास्तविक संख्याएँ देते हैं।`,
  },
  intuition: [
    t`$z = a + ib$ को बिंदु $(a, b)$ की तरह सोचिए: real part आड़ा, imaginary part ऊपर।`,
    t`क्षैतिज अक्ष, जिस पर Re लिखा है, **real axis** (वास्तविक अक्ष) है: वास्तविक संख्याएँ इसी पर होती हैं।`,
    t`$z$ का **conjugate** (संयुग्मी), जिसे $\bar z$ लिखते हैं और "z bar" पढ़ते हैं, real part रखता है और imaginary part का चिह्न पलट देता है।`,
    t`इसलिए $\bar z$, real axis में $z$ का **mirror image** (दर्पण प्रतिबिंब) है: उससे उतना ही नीचे जितना $z$ ऊपर है।`,
    t`$z$ और $\bar z$ जोड़ने से imaginary parts कट जाते हैं, इसलिए $z + \bar z$, real axis पर होता है।`,
    t`इन्हें गुणा करने से भी imaginary parts कट जाते हैं, इसलिए $z\bar z$ भी एक वास्तविक संख्या है।`,
  ],
  formal: [
    {
      title: t`a + ib का conjugate`,
      points: [
        t`$z = a + ib$ के लिए, जहाँ $a$ और $b$ वास्तविक हैं, conjugate $\bar z = a - ib$ है।`,
        t`उदाहरण के लिए, $\overline{2 + 3i} = 2 - 3i$: बिंदु ऊँचाई $3$ से $-3$ पर गिरता है।`,
        t`और $\overline{-3 - 2i} = -3 + 2i$: real axis के नीचे का बिंदु उसके ऊपर आ जाता है।`,
        t`Real part कभी नहीं बदलता, इसलिए $\bar z$, $z$ के ठीक ऊपर या नीचे होता है।`,
      ],
    },
    {
      title: t`योग और अंतर`,
      points: [
        t`जोड़ना: $z + \bar z = (a + ib) + (a - ib)$।`,
        t`Imaginary parts कट जाते हैं, $2a$ बचता है: यह $2\operatorname{Re} z$ है, real part का दोगुना।`,
        t`घटाना: $z - \bar z = (a + ib) - (a - ib)$।`,
        t`अब real parts कट जाते हैं, $2ib$ बचता है: यह $2i\operatorname{Im} z$ है।`,
        t`$i$ रखिए: $z - \bar z$ **purely imaginary** (शुद्ध काल्पनिक) है, यानी उसका real part $0$ है।`,
      ],
    },
    {
      title: t`संख्या गुणा उसका conjugate`,
      points: [
        t`गुणा करना: $z\bar z = (a + ib)(a - ib)$।`,
        t`फैलाइए: $a^2 - iab + iab - i^2b^2$।`,
        t`बीच के पद कट जाते हैं, और $i^2 = -1$, $-i^2b^2$ को $+b^2$ बना देता है।`,
        t`इसलिए $z\bar z = a^2 + b^2$, एक वास्तविक संख्या।`,
        t`पाइथागोरस से, $a^2 + b^2$, $0$ से $z$ तक की दूरी का वर्ग है।`,
        t`इसलिए $z\bar z$ कभी ऋणात्मक नहीं होता।`,
      ],
    },
    {
      title: t`योग का conjugate`,
      points: [
        t`$z_1 = 2 + i$ और $z_2 = 1 + 2i$ लीजिए: इनका योग $3 + 3i$ है।`,
        t`इनके conjugates, $2 - i$ और $1 - 2i$, जुड़कर $3 - 3i$ देते हैं।`,
        t`यह $3 + 3i$ का conjugate है: इसलिए $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$।`,
        t`पूरा चित्र real axis में पलटता है, इसलिए योग भी उसके साथ पलटता है।`,
      ],
    },
    {
      title: t`गुणनफल का conjugate`,
      points: [
        t`$z_1 = 1 + i$ और $z_2 = 2 + i$ लीजिए: इनका गुणनफल $1 + 3i$ है।`,
        t`इनके conjugates गुणा होकर $(1 - i)(2 - i) = 1 - 3i$ देते हैं, दर्पण प्रतिबिंब।`,
        t`इसलिए $\overline{z_1 z_2} = \bar z_1\,\bar z_2$: गुणनफल का conjugate, conjugates का गुणनफल है।`,
        t`हर गुणनखंड का conjugate लीजिए, या पहले गुणा करके फिर उत्तर का conjugate लीजिए।`,
        t`केवल एक गुणनखंड का conjugate कभी मत लीजिए: $(1 - i)(2 + i) = 3 - i$, एक अलग संख्या।`,
      ],
    },
  ],
  worked: {
    prompt: t`$z = 1 - 6i$ के लिए, $z + \bar z$ और $z\bar z$ ज्ञात कीजिए।`,
    steps: [
      t`Imaginary part का चिह्न पलटिए: $\bar z = 1 + 6i$।`,
      t`योग: $(1 - 6i) + (1 + 6i) = 2$।`,
      t`गुणनफल: $(1 - 6i)(1 + 6i) = 1 - 36i^2$, जो $1 + 36 = 37$ है।`,
    ],
    answer: t`$z + \bar z = 2$ और $z\bar z = 37$।`,
  },
  remediation: {
    "C05-M1": t`Conjugate, real part रखता है और imaginary part का चिह्न पलटता है: $\overline{a + ib} = a - ib$।`,
    "C05-M2": t`वह $-z$ है, $\bar z$ नहीं। केवल imaginary part का चिह्न बदलता है।`,
    "C05-M3": t`$(a + ib)(a - ib) = a^2 - i^2b^2 = a^2 + b^2$। $i^2$ ऋण को धन बना देता है, इसलिए $z\bar z$ कभी ऋणात्मक नहीं होता।`,
    "C05-M4": t`$z - \bar z = (a + ib) - (a - ib) = 2ib$। उत्तर purely imaginary है: $i$ रखिए।`,
    "C05-M5": t`$\overline{z_1 z_2} = \bar z_1\,\bar z_2$: दोनों गुणनखंडों का conjugate लीजिए, या पहले गुणा करके फिर परिणाम का conjugate लीजिए।`,
  },
  solutions: {
    "C05-Q1": [
      t`Conjugate लीजिए: $\bar z = 5 + 2i$।`,
      t`गुणा कीजिए: $(5 - 2i)(5 + 2i) = 25 - 4i^2$।`,
      t`$i^2 = -1$ लगाइए: $25 + 4 = 29$।`,
    ],
    "C05-Q2": [
      t`Conjugate लीजिए: $\bar z = 2 - 7i$।`,
      t`दोनों भाग घटाइए: $(2 - 2) + \big(7 - (-7)\big)i = 14i$। $i$ रखिए।`,
    ],
    "C05-Q3": [
      t`पहले गुणा कीजिए: $(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 5 + 5i$।`,
      t`परिणाम का conjugate लीजिए, imaginary part का चिह्न पलटकर: $5 - 5i$।`,
    ],
    "C05-Q4": [
      t`Conjugate लीजिए: $\bar z = -1 - 3i$।`,
      t`गुणा कीजिए: $(-1 + 3i)(-1 - 3i) = 1 - 9i^2$।`,
      t`$i^2 = -1$ लगाइए: $1 + 9 = 10$।`,
    ],
    "C05-Q5": [
      t`पहले गुणा कीजिए: $(2 - i)(4 + i) = 8 + 2i - 4i - i^2 = 9 - 2i$।`,
      t`परिणाम का conjugate लीजिए: $9 + 2i$।`,
    ],
    "C05-Q6": [
      t`Conjugate लीजिए: $\bar z = 4 + i$।`,
      t`दोनों भाग घटाइए: $(4 - 4) + (-1 - 1)i = -2i$। $i$ रखिए।`,
    ],
  },
};
