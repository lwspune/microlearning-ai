import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "hi",
  status: "approved",
  source: "0d25feeb5d386e",
  hook: {
    prompt: t`मान लीजिए $a + ib = 3 - 5i$, जहाँ $a$ और $b$ वास्तविक हैं। **$a$ और $b$ क्या होने चाहिए?**`,
    reveal: t`$a = 3$ और $b = -5$। Real parts मेल खाते हैं और imaginary parts मेल खाते हैं: complex numbers के बीच एक समीकरण असल में दो समीकरण है।`,
  },
  intuition: [
    t`याद कीजिए: $i$ वह नई संख्या है जिसमें $i^2 = -1$।`,
    t`**Complex number** (सम्मिश्र संख्या) एक वास्तविक संख्या जोड़ एक वास्तविक संख्या गुणा $i$ है, जैसे $3 - 5i$।`,
    t`इसलिए हर complex number के दो अलग भाग होते हैं, किसी बिंदु के दो निर्देशांकों की तरह।`,
    t`**Real part** (वास्तविक भाग) अकेली संख्या है, और **imaginary part** (काल्पनिक भाग) $i$ को गुणा करने वाली संख्या है।`,
    t`दो complex numbers तभी बराबर हैं जब दोनों भाग मेल खाएँ।`,
    t`इसलिए complex numbers के बीच एक समीकरण से वास्तविक संख्याओं के बीच दो समीकरण मिलते हैं।`,
  ],
  formal: [
    {
      title: t`Standard form (मानक रूप)`,
      points: [
        t`$z = x + iy$ के रूप में लिखा complex number, जहाँ $x$ और $y$ वास्तविक हैं, **standard form** में है।`,
        t`इसका real part $x$ है, $i$ के बिना वाला पद: हम $\operatorname{Re} z = x$ लिखते हैं।`,
        t`इसका imaginary part $y$ है, $i$ का **coefficient** (गुणांक), यानी उसे गुणा करने वाली संख्या: $\operatorname{Im} z = y$।`,
        t`Imaginary part वास्तविक संख्या $y$ है, $i$ के **बिना**।`,
        t`यह अपना चिह्न रखता है: $\operatorname{Im}(3 - 4i) = -4$।`,
      ],
    },
    {
      title: t`Complex numbers की समानता`,
      points: [
        t`मान लीजिए $a$, $b$, $c$ और $d$ वास्तविक संख्याएँ हैं।`,
        t`तब $a + ib = c + id$ ठीक तब जब $a = c$ और $b = d$।`,
        t`यानी real parts बराबर हैं और imaginary parts बराबर हैं।`,
        t`यह दोनों ओर से चलता है: मेल खाते भाग बराबर संख्याएँ देते हैं, और बराबर संख्याओं के भाग मेल खाते हैं।`,
        t`समान को समान से मिलाइए: real part को कभी imaginary part से नहीं।`,
      ],
    },
    {
      title: t`तुलना से पहले standard form`,
      points: [
        t`भागों की तुलना तभी कीजिए जब हर पक्ष $x + iy$ के रूप में हो।`,
        t`उदाहरण के लिए, $i(2 + 5i)$ लीजिए।`,
        t`गुणा कीजिए: $i(2 + 5i) = 2i + 5i^2$।`,
        t`$i^2$ की जगह $-1$ रखिए: यह $2i - 5$ है।`,
        t`Standard form में यह $-5 + 2i$ है, real part $-5$ और imaginary part $2$ के साथ।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $(x - 1) + i(2y + 3) = 4 - i$, जहाँ $x, y$ वास्तविक हैं, तो $x$ और $y$ ज्ञात कीजिए।`,
    steps: [
      t`Real parts बराबर रखिए: $x - 1 = 4$, इसलिए $x = 5$।`,
      t`Imaginary parts बराबर रखिए: $2y + 3 = -1$, इसलिए $y = -2$।`,
    ],
    answer: t`$x = 5,\ y = -2$`,
  },
  remediation: {
    "C03-M1": t`$\operatorname{Im}(a + ib) = b$, एक वास्तविक संख्या। $i$ केवल बताता है कि यह कौन-सा भाग है।`,
    "C03-M2": t`Imaginary part, $i$ का गुणांक है, $i$ के बिना वाला पद नहीं।`,
    "C03-M3": t`Imaginary part अपना चिह्न रखता है: $\operatorname{Im}(3 - 4i) = -4$।`,
    "C03-M4": t`समान को समान से मिलाइए: real part को real part से, imaginary part को imaginary part से।`,
    "C03-M5": t`$x + p = c$ हल करने के लिए, दोनों पक्षों से $p$ घटाइए: $x = c - p$।`,
    "C03-M6": t`हर भाग को उसके चिह्न के साथ उतारिए। $5 + 3i$ में imaginary part $+3$ है, इसलिए $y - 1 = 3$।`,
  },
  solutions: {
    "C03-Q1": [
      t`Imaginary part, $i$ का गुणांक है, चिह्न समेत, $i$ के बिना।`,
      t`$3 - 4i$ में वह गुणांक $-4$ है, इसलिए $\operatorname{Im}(3 - 4i) = -4$।`,
    ],
    "C03-Q2": [
      t`पहले standard form में लाइए: $i(-4 - i) = -4i - i^2 = 1 - 4i$।`,
      t`$i$ का गुणांक $-4$ है, इसलिए imaginary part $-4$ है।`,
    ],
    "C03-Q3": [
      t`Real parts बराबर रखिए: $x + 2 = 5$, इसलिए $x = 3$।`,
      t`Imaginary parts बराबर रखिए: $y - 1 = 3$, इसलिए $y = 4$।`,
    ],
    "C03-Q4": [
      t`Real parts बराबर रखिए: $2x - 1 = 5$, इसलिए $2x = 6$ और $x = 3$।`,
      t`Imaginary parts बराबर रखिए: $3y + 2 = -4$, इसलिए $3y = -6$ और $y = -2$।`,
    ],
    "C03-Q5": [
      t`इसे standard form में लिखिए: $-6i = 0 + (-6)i$।`,
      t`$i$ का गुणांक $-6$ है, इसलिए $\operatorname{Im}(-6i) = -6$। Real part $0$ है।`,
    ],
  },
};
