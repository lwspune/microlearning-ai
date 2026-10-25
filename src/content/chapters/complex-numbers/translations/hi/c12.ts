import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c12: ConceptTranslation = {
  id: "C12",
  lang: "hi",
  status: "approved",
  source: "089116425a1ca0",
  hook: {
    prompt: t`$\lvert 3 + 4i \rvert = 5$ और $\lvert 1 + i \rvert = \sqrt2$। **गुणा किए बिना $\lvert (3 + 4i)(1 + i) \rvert$ का अनुमान लगाइए।**`,
    reveal: t`$5\sqrt2$: moduli गुणा होते हैं। जाँच: $(3 + 4i)(1 + i) = -1 + 7i$, और $\lvert -1 + 7i \rvert = \sqrt{50} = 5\sqrt2$।`,
  },
  intuition: [
    t`याद कीजिए: **modulus** $\lvert z \rvert$, $0$ से $z$ तक के तीर की लंबाई है: $\lvert 1 + i \rvert = \sqrt2$।`,
    t`$2i$ तक का तीर $2$ लंबा है: $\lvert 2i \rvert = 2$।`,
    t`दोनों संख्याओं को गुणा कीजिए: $(1 + i) \cdot 2i = -2 + 2i$।`,
    t`इसकी लंबाई $\sqrt{4 + 4} = 2\sqrt2$ है, जो $\sqrt2 \times 2$ है।`,
    t`इसलिए गुणा करने से लंबाइयाँ गुणा होती हैं, भाग देने से भाग होती हैं, और $z \cdot z \cdot z$ जैसी घात लंबाई को उसी घात तक ले जाती है।`,
    t`योग अलग हैं: complex numbers जोड़ने से उनकी लंबाइयाँ **नहीं** जुड़तीं।`,
  ],
  formal: [
    {
      title: t`गुणनफल का modulus`,
      points: [
        t`$z_1 = 2 + i$ लीजिए: इसका modulus $\sqrt{4 + 1} = \sqrt5$ है।`,
        t`$z_2 = 1 + 2i$ लीजिए: इसका modulus भी $\sqrt{1 + 4} = \sqrt5$ है।`,
        t`इनका गुणनफल $(2 + i)(1 + 2i) = 5i$ है।`,
        t`इसका modulus $5$ है, जो $\sqrt5 \times \sqrt5$ है।`,
        t`यह किन्हीं भी दो complex numbers के लिए सही है: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$।`,
        t`Moduli गुणा होते हैं: $\lvert z_1z_2 \rvert$, $\lvert z_1 \rvert + \lvert z_2 \rvert$ नहीं है।`,
      ],
    },
    {
      title: t`भागफल का modulus`,
      points: [
        t`**Quotient** (भागफल) भाग का उत्तर है, जैसे $z_2 \ne 0$ के साथ $\frac{z_1}{z_2}$।`,
        t`$z_1 = -1 + 3i$ लीजिए: इसका modulus $\sqrt{1 + 9} = \sqrt{10}$ है।`,
        t`$z_2 = 1 - i$ लीजिए: इसका modulus $\sqrt{1 + 1} = \sqrt2$ है।`,
        t`इनका भागफल $\frac{-1 + 3i}{1 - i} = -2 + i$ है, जिसका modulus $\sqrt5$ है।`,
        t`और $\sqrt5 = \frac{\sqrt{10}}{\sqrt2}$: इसलिए $\left\lvert \frac{z_1}{z_2} \right\rvert = \frac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$।`,
        t`Moduli भाग होते हैं: उन्हें घटाइए मत।`,
      ],
    },
    {
      title: t`घात का modulus`,
      points: [
        t`**Power** (घात) $z^n$, $z$ की $n$ प्रतियों का गुणनफल है, किसी पूर्ण संख्या $n$ के लिए।`,
        t`$z = \sqrt3 + i$ लीजिए: इसका modulus $\sqrt{3 + 1} = 2$ है।`,
        t`तब $z^2 = 2 + 2\sqrt3\,i$, जिसका modulus $\sqrt{4 + 12} = 4$ है, जो $2^2$ है।`,
        t`और $z^3 = 8i$, जिसका modulus $8$ है, जो $2^3$ है।`,
        t`$z$ की हर प्रति लंबाई को $\lvert z \rvert$ से गुणा करती है, इसलिए $\lvert z^n \rvert = \lvert z \rvert^n$।`,
        t`यह घात है, $n$ गुना नहीं: $\lvert z^n \rvert$, $n\lvert z \rvert$ नहीं है।`,
      ],
    },
    {
      title: t`वास्तविक संख्या गुणा z`,
      points: [
        t`$z = 2 + i$ लीजिए: इसका modulus $\sqrt5$ है।`,
        t`तब $-2z = -4 - 2i$: इसका तीर उलटी दिशा में है और दोगुना लंबा है।`,
        t`इसका modulus $\sqrt{16 + 4} = 2\sqrt5$ है, $-2\sqrt5$ नहीं।`,
        t`वास्तविक $k$ के लिए, $\lvert k \rvert$, बिना चिह्न का $k$ है: $\lvert -2 \rvert = 2$।`,
        t`इसलिए हर वास्तविक $k$ के लिए $\lvert kz \rvert = \lvert k \rvert\,\lvert z \rvert$: modulus एक दूरी है, कभी ऋणात्मक नहीं।`,
        t`घात हो, तो वह केवल $z$ पर है: $\lvert kz^n \rvert = \lvert k \rvert\,\lvert z \rvert^n$।`,
      ],
    },
    {
      title: t`Conjugate और modulus`,
      points: [
        t`याद कीजिए: $z = a + ib$ का **conjugate** $\bar z = a - ib$ है, real axis में इसका दर्पण प्रतिबिंब।`,
        t`दर्पण प्रतिबिंब $0$ से उतना ही दूर है जितना मूल, इसलिए $\lvert \bar z \rvert = \lvert z \rvert$।`,
        t`$z = 4 + 3i$ के लिए, $z$ और $\bar z = 4 - 3i$ दोनों का modulus $5$ है।`,
        t`यह भी याद कीजिए: $z\bar z = a^2 + b^2$, एक वास्तविक संख्या।`,
        t`पाइथागोरस से, यह दूरी का वर्ग है: $z\bar z = \lvert z \rvert^2$।`,
        t`यहाँ $z\bar z = 16 + 9 = 25$: $\lvert z \rvert = 5$ का **वर्ग**, खुद $5$ नहीं।`,
      ],
    },
    {
      title: t`योग नहीं बँटते`,
      points: [
        t`$z_1 = 4$ लीजिए, जिसका modulus $4$ है।`,
        t`$z_2 = 3i$, जिसका modulus $3$ है, उसके तीर को $z_1$ की नोक पर रखकर जोड़िए।`,
        t`योग $z_1 + z_2 = 4 + 3i$, $0$ से सीधे अंत तक का तीर है।`,
        t`इसका modulus $\sqrt{16 + 9} = 5$ है, $4 + 3 = 7$ नहीं।`,
        t`सीधा जाना, $z_1$ और फिर $z_2$ के मुड़े रास्ते से छोटा है।`,
        t`इसलिए $\lvert z_1 + z_2 \rvert$ आमतौर पर $\lvert z_1 \rvert + \lvert z_2 \rvert$ से कम होता है: moduli नहीं जुड़ते।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\lvert (2 + i)^3(1 - i) \rvert$ ज्ञात कीजिए।`,
    steps: [
      t`हर हिस्से का modulus लीजिए: $\lvert 2 + i \rvert = \sqrt5$ और $\lvert 1 - i \rvert = \sqrt2$।`,
      t`घात modulus को उस घात तक ले जाती है: $\lvert (2 + i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$।`,
      t`गुणा कीजिए: $5\sqrt5\cdot\sqrt2 = 5\sqrt{10}$।`,
    ],
    answer: t`$5\sqrt{10}$`,
  },
  remediation: {
    "C12-M1": t`$z\bar z = x^2 + y^2 = \lvert z \rvert^2$: modulus का **वर्ग**।`,
    "C12-M2": t`Moduli गुणा होते हैं: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$।`,
    "C12-M3": t`घात modulus को उसी घात तक ले जाती है: $\lvert z^n \rvert = \lvert z \rvert^n$।`,
    "C12-M4": t`Moduli भाग होते हैं: $\left\lvert \dfrac{z_1}{z_2} \right\rvert = \dfrac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$।`,
    "C12-M5": t`Modulus एक दूरी है, कभी ऋणात्मक नहीं: $\lvert -2 \rvert = 2$।`,
    "C12-M6": t`घात केवल उसी गुणनखंड की है जिस पर वह है: $\lvert k z^n \rvert = \lvert k \rvert\,\lvert z \rvert^n$।`,
    "C12-M7": t`घातांक केवल गुणनफल में जुड़ते हैं, $r^3 \cdot r^2 = r^5$। योग, योग ही रहता है: $3^3 + 3^2 = 27 + 9$।`,
  },
  solutions: {
    "C12-Q1": [
      t`हर हिस्से का modulus लीजिए: $\lvert 3 + 4i \rvert = 5$ और $\lvert 1 - 2i \rvert = \sqrt5$।`,
      t`घात modulus को उस घात तक ले जाती है: $\lvert (3 + 4i)^2 \rvert = 5^2 = 25$।`,
      t`गुणा कीजिए: $25\sqrt5$।`,
    ],
    "C12-Q2": [
      t`हर हिस्से का modulus लीजिए: $\lvert 1 + i \rvert = \sqrt2$ और $\lvert 3 + 4i \rvert = 5$।`,
      t`घात modulus को उस घात तक ले जाती है: $\lvert (1 + i)^4 \rvert = (\sqrt2)^4 = 4$।`,
      t`गुणा कीजिए: $4 \times 5 = 20$।`,
    ],
    "C12-Q3": [
      t`हर हिस्से का modulus लीजिए: $\lvert 2 - i \rvert = \sqrt5$ और $\lvert 1 + 2i \rvert = \sqrt5$।`,
      t`घात modulus को उस घात तक ले जाती है: $\lvert (2 - i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$।`,
      t`भाग दीजिए: $\dfrac{5\sqrt5}{\sqrt5} = 5$।`,
    ],
    "C12-Q4": [
      t`वास्तविक गुणनखंड अपना आकार देता है: $\lvert -2 \rvert = 2$।`,
      t`घात modulus को उस घात तक ले जाती है: $\lvert z^3 \rvert = 5^3 = 125$।`,
      t`गुणा कीजिए: $2 \times 125 = 250$। Modulus कभी ऋणात्मक नहीं होता।`,
    ],
    "C12-Q5": [
      t`घात modulus को उस घात तक ले जाती है: $\lvert z^3 \rvert = 3^3 = 27$।`,
      t`$z\bar z = \lvert z \rvert^2 = 9$।`,
      t`जोड़िए: $27 + 9 = 36$। यहाँ जोड़ना ठीक है: ये दो वास्तविक संख्याएँ हैं।`,
    ],
  },
};
