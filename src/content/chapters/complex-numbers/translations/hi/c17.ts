import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c17: ConceptTranslation = {
  id: "C17",
  lang: "hi",
  status: "approved",
  source: "154700b9853e04",
  hook: {
    prompt: t`$\cos\theta + i\sin\theta$ को खुद से गुणा करके उसका वर्ग कीजिए। **परिणाम का कोण क्या है?**`,
    reveal: t`$2\theta$। गुणा करने से कोण जुड़ते हैं, इसलिए वर्ग करने से कोण दोगुना होता है, और $n$वीं घात उसे $n$ गुना कर देती है।`,
  },
  intuition: [
    t`याद कीजिए: $z = r(\cos\theta + i\sin\theta)$ की लंबाई $r$, इसका **modulus**, और कोण $\theta$, इसका **argument**, है।`,
    t`**Power** (घात) $z$ की प्रतियों को गुणा करती है: $z^3 = z \cdot z \cdot z$।`,
    t`याद कीजिए: हर गुणा लंबाइयों को गुणा करता है और कोणों को जोड़ता है।`,
    t`इसलिए $z^2$ की लंबाई $r^2$ और कोण $\theta + \theta = 2\theta$ है।`,
    t`$z$ का एक और गुणनखंड $z^3$ देता है, लंबाई $r^3$ और कोण $3\theta$ के साथ।`,
    t`इसलिए $z^n$ की लंबाई $r^n$ और कोण $n\theta$ है: **De Moivre's theorem** (द मुआव्र का प्रमेय), लंबे विस्तार की जगह एक कदम।`,
  ],
  formal: [
    {
      title: t`De Moivre's theorem (द मुआव्र का प्रमेय)`,
      points: [
        t`कोण $\theta$ पर लंबाई $1$ वाली संख्या $\cos\theta + i\sin\theta$ है।`,
        t`**De Moivre's theorem**: $(\cos\theta + i\sin\theta)^n$ बराबर है $\cos n\theta + i\sin n\theta$ के।`,
        t`लंबाई $1$ ही रहती है, क्योंकि $1^n = 1$।`,
        t`कोण $n\theta$ बन जाता है: घन, $n = 3$, भुजा को $3\theta$ घुमाता है।`,
        t`यह हर पूर्णांक $n$ के लिए सही है: धनात्मक, शून्य या ऋणात्मक।`,
        t`ऋणात्मक $n$ भुजा को दक्षिणावर्त घुमाता है: $n = -1$ से कोण $-\theta$ मिलता है।`,
      ],
    },
    {
      title: t`Modulus की भी घात लीजिए`,
      points: [
        t`कोई भी $z = r(\cos\theta + i\sin\theta)$ लीजिए, जैसे $1 + i$, जिसमें $r = \sqrt2$ और $\theta = \frac\pi4$।`,
        t`तब $z^n = r^n(\cos n\theta + i\sin n\theta)$।`,
        t`लंबाई $r^n$ है, $r$ नहीं: modulus को घात $n$ तक ले जाइए।`,
        t`$r$ के $n$ गुणनखंड गुणा होते हैं: $r \cdot r \cdots r = r^n$, $nr$ नहीं।`,
        t`कोण $n\theta$ है: यहाँ $4 \times \frac\pi4 = \pi$, इसलिए $(1 + i)^4 = -4$।`,
      ],
    },
    {
      title: t`अंत में कोण घटाइए`,
      points: [
        t`याद कीजिए: **principal argument** $(-\pi, \pi]$ में का कोण है, $-\pi$ से ऊपर और $\pi$ तक।`,
        t`$z = \cos\frac{2\pi}3 + i\sin\frac{2\pi}3$ लीजिए, कोण $\frac{2\pi}3$ पर।`,
        t`तब $z^2$ का कोण $\frac{4\pi}3$ है, जो $(-\pi, \pi]$ से बाहर है।`,
        t`अंत में, एक पूरा घुमाव घटाइए: $\frac{4\pi}3 - 2\pi = -\frac{2\pi}3$।`,
        t`पूरा घुमाव भुजा को वहीं वापस लाता है जहाँ वह थी, इसलिए बिंदु वही है।`,
        t`इसलिए $z^2 = -\frac12 - \frac{\sqrt3}2 i$, principal argument $-\frac{2\pi}3$ के साथ।`,
      ],
    },
    {
      title: t`अदला-बदले भाग पहले फिर से लिखिए`,
      points: [
        t`De Moivre's theorem को $\cos\theta + i\sin\theta$ रूप चाहिए, जिसमें cosine, real part हो।`,
        t`$\sin\theta + i\cos\theta$ में दोनों भाग अदला-बदले हैं, इसलिए यह एक अलग भुजा पर है।`,
        t`वह भुजा imaginary axis से $\theta$ कम है, इसलिए उसका कोण $\frac\pi2 - \theta$ है।`,
        t`याद कीजिए: $\sin\theta = \cos\left(\frac\pi2 - \theta\right)$ और $\cos\theta = \sin\left(\frac\pi2 - \theta\right)$।`,
        t`इसलिए $\sin\theta + i\cos\theta$ बराबर है $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$ के।`,
        t`पहले इसे इस तरह फिर से लिखिए, फिर कोण $\frac\pi2 - \theta$ के साथ De Moivre लगाइए।`,
      ],
    },
  ],
  worked: {
    prompt: t`$(1 + \sqrt3\,i)^5$ ज्ञात कीजिए।`,
    steps: [
      t`Polar form: $r = 2$ और $\theta = \dfrac\pi3$।`,
      t`De Moivre से: $2^5\left(\cos\dfrac{5\pi}3 + i\sin\dfrac{5\pi}3\right)$।`,
      t`$\cos\dfrac{5\pi}3 = \dfrac12$ और $\sin\dfrac{5\pi}3 = -\dfrac{\sqrt3}2$, इसलिए परिणाम $32\left(\dfrac12 - \dfrac{\sqrt3}2 i\right)$ है।`,
    ],
    answer: t`$16 - 16\sqrt3\,i$`,
  },
  remediation: {
    "C17-M1": t`Modulus की भी घात ली जाती है: $r^n$।`,
    "C17-M2": t`De Moivre को $\cos\theta + i\sin\theta$ चाहिए। पहले $\sin\theta + i\cos\theta$ को $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$ लिखिए।`,
    "C17-M3": t`बार-बार गुणा करने से लंबाइयाँ गुणा होती हैं: $r\cdot r\cdots r = r^n$, $nr$ नहीं।`,
    "C17-M4": t`भाग अदला-बदले हैं, इसलिए कोण $\frac\pi2 - \theta$ है, $\theta$ नहीं।`,
    "C17-M5": t`हर गुणनखंड एक और $\theta$ जोड़ता है, इसलिए $n$ गुणनखंड $n\theta$ घुमाते हैं: $z^n = r^n(\cos n\theta + i\sin n\theta)$।`,
    "C17-M6": t`योग की घात, घातों का योग नहीं होती। इसे $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$ लिखिए, फिर De Moivre लगाइए।`,
  },
  solutions: {
    "C17-Q1": [
      t`Polar form में: $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$।`,
      t`De Moivre से: $(\sqrt2)^8\left(\cos\dfrac{8\pi}4 + i\sin\dfrac{8\pi}4\right) = 16(\cos 2\pi + i\sin 2\pi)$।`,
      t`$\cos 2\pi = 1$ और $\sin 2\pi = 0$, इसलिए परिणाम $16$ है।`,
    ],
    "C17-Q2": [
      t`De Moivre के रूप में फिर से लिखिए: $\sin\dfrac\pi6 + i\cos\dfrac\pi6 = \cos\dfrac\pi3 + i\sin\dfrac\pi3$।`,
      t`De Moivre से: $\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right)^3 = \cos\pi + i\sin\pi$।`,
      t`$\cos\pi = -1$ और $\sin\pi = 0$, इसलिए परिणाम $-1$ है।`,
    ],
    "C17-Q3": [
      t`Polar form में: $\sqrt3 + i = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$।`,
      t`De Moivre से: $2^6\left(\cos\dfrac{6\pi}6 + i\sin\dfrac{6\pi}6\right) = 64(\cos\pi + i\sin\pi)$।`,
      t`$\cos\pi = -1$ और $\sin\pi = 0$, इसलिए परिणाम $-64$ है।`,
    ],
    "C17-Q4": [
      t`Polar form में: $1 - i = \sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$।`,
      t`De Moivre से: $(\sqrt2)^4\big(\cos(-\pi) + i\sin(-\pi)\big) = 4\big(\cos(-\pi) + i\sin(-\pi)\big)$।`,
      t`$\cos(-\pi) = -1$ और $\sin(-\pi) = 0$, इसलिए परिणाम $-4$ है।`,
    ],
    "C17-Q5": [
      t`De Moivre के रूप में फिर से लिखिए: $\sin\dfrac\pi3 + i\cos\dfrac\pi3 = \cos\dfrac\pi6 + i\sin\dfrac\pi6$।`,
      t`De Moivre से: $\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)^2 = \cos\dfrac\pi3 + i\sin\dfrac\pi3$।`,
      t`इसलिए परिणाम $\dfrac12 + \dfrac{\sqrt3}{2}i$ है।`,
    ],
    "C17-Q6": [
      t`De Moivre से: modulus का घन कीजिए और कोण तिगुना: $2^3\left(\cos\dfrac{3\pi}4 + i\sin\dfrac{3\pi}4\right)$।`,
      t`$\cos\dfrac{3\pi}4 = -\dfrac{\sqrt2}2$ और $\sin\dfrac{3\pi}4 = \dfrac{\sqrt2}2$।`,
      t`इसलिए परिणाम $8 \cdot \dfrac{\sqrt2}{2}(-1 + i) = 4\sqrt2(-1 + i)$ है।`,
    ],
  },
};
