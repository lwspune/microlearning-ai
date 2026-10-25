import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c16: ConceptTranslation = {
  id: "C16",
  lang: "hi",
  status: "approved",
  source: "10a6f255b226d6",
  hook: {
    prompt: t`$i \times i = -1$। **दिशा के हिसाब से, कोण $\dfrac\pi2$ का क्या हुआ?**`,
    reveal: t`वह दोगुना हो गया: $\dfrac\pi2 + \dfrac\pi2 = \pi$, $-1$ की दिशा। गुणा करने से कोण जुड़ते हैं।`,
  },
  intuition: [
    t`याद कीजिए: polar form किसी complex number को उसकी लंबाई, **modulus**, और उसके कोण, **argument**, से बताता है।`,
    t`$z_1 = \sqrt3 + i$ लीजिए: लंबाई $2$, **initial arm**, यानी positive real axis, से कोण $\dfrac\pi6$ पर।`,
    t`$z_2 = 1 + \sqrt3\,i$ लीजिए: लंबाई $2$, कोण $\dfrac\pi3$ पर।`,
    t`इनका गुणनफल $z_1z_2 = 4i$ है, जिसकी लंबाई $2 \times 2 = 4$ है: लंबाइयाँ **गुणा** होती हैं।`,
    t`इसका कोण $\dfrac\pi6 + \dfrac\pi3 = \dfrac\pi2$ है: $z_1$ के कोण से, $z_2$ के कोण जितना आगे घूमिए, इसलिए कोण **जुड़ते** हैं।`,
    t`**Quotient** (भागफल), यानी भाग का परिणाम, इसे पलट देता है: लंबाइयों को भाग दीजिए और कोण घटाइए, अंश घटा हर।`,
  ],
  formal: [
    {
      title: t`Polar form में गुणा`,
      points: [
        t`$z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ लीजिए, modulus $r_1$ और argument $\theta_1$ के साथ।`,
        t`$z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$ लीजिए, modulus $r_2$ और argument $\theta_2$ के साथ।`,
        t`गुणनफल $z_1z_2$ का modulus $r_1r_2$ है: moduli गुणा होते हैं।`,
        t`इसका argument $\theta_1 + \theta_2$ है: arguments जुड़ते हैं।`,
        t`इसलिए $z_1z_2$ बराबर है $r_1r_2\big(\cos(\theta_1 + \theta_2)$ $+\, i\sin(\theta_1 + \theta_2)\big)$ के।`,
        t`संक्षेप में: $\arg(z_1z_2) = \arg z_1 + \arg z_2$।`,
      ],
    },
    {
      title: t`Polar form में भाग`,
      points: [
        t`**Quotient** $\dfrac{z_1}{z_2}$, $z_2 \ne 0$ के लिए, वह संख्या है जो $z_2$ से गुणा होकर $z_1$ वापस देती है।`,
        t`इसलिए इसका modulus गुणा $r_2$, $r_1$ है: moduli भाग होते हैं, जिससे $\dfrac{r_1}{r_2}$ मिलता है।`,
        t`इसका argument जोड़ $\theta_2$, $\theta_1$ है: arguments घटते हैं, अंश घटा हर।`,
        t`इसलिए $\dfrac{z_1}{z_2}$ बराबर है $\dfrac{r_1}{r_2}\big(\cos(\theta_1 - \theta_2)$ $+\, i\sin(\theta_1 - \theta_2)\big)$ के।`,
        t`संक्षेप में: $\arg\dfrac{z_1}{z_2} = \arg z_1 - \arg z_2$।`,
      ],
    },
    {
      title: t`वापस principal argument पर`,
      points: [
        t`याद कीजिए: **principal argument**, $(-\pi, \pi]$ में argument का एकमात्र मान है।`,
        t`एक पूरा घुमाव, $2\pi$, उसी दिशा पर ख़त्म होता है, इसलिए ये नियम केवल **$2\pi$ के किसी गुणज तक** सही हैं।`,
        t`अगर योग या अंतर $(-\pi, \pi]$ से बाहर आए, तो उसे वापस लाने के लिए $2\pi$ जोड़िए या घटाइए।`,
        t`$z_1 = -1 + \sqrt3\,i$, कोण $\dfrac{2\pi}3$ पर, और $z_2 = i$, कोण $\dfrac\pi2$ पर, लीजिए।`,
        t`कोण जुड़ते हैं: $\dfrac{2\pi}3 + \dfrac\pi2 = \dfrac{7\pi}6$, जो $\pi$ से अधिक है, $z_1z_2 = -\sqrt3 - i$ के लिए।`,
        t`$2\pi$ घटाइए: $\dfrac{7\pi}6 - 2\pi = -\dfrac{5\pi}6$, principal argument, दक्षिणावर्त नापा गया।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\dfrac{6\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)}{3\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)}$ ज्ञात कीजिए।`,
    steps: [
      t`Moduli को भाग दीजिए: $\dfrac63 = 2$।`,
      t`Arguments घटाइए, अंश घटा हर: $\dfrac{2\pi}3 - \dfrac\pi6 = \dfrac\pi2$।`,
      t`इसलिए भागफल $2\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right) = 2i$ है।`,
    ],
    answer: t`$2i$`,
  },
  remediation: {
    "C16-M1": t`गुणनफल के लिए लंबाइयाँ गुणा होती हैं और भागफल के लिए भाग; केवल **कोण** जुड़ते या घटते हैं।`,
    "C16-M2": t`गुणनफल: कोण जोड़िए। भागफल: उन्हें घटाइए।`,
    "C16-M3": t`$\dfrac{z_1}{z_2}$ के लिए कोण $\theta_1 - \theta_2$ है: अंश घटा हर।`,
    "C16-M4": t`इसे $(-\pi, \pi]$ में लाने के लिए $2\pi$ जोड़िए या घटाइए: $\dfrac{5\pi}4 - 2\pi = -\dfrac{3\pi}4$।`,
    "C16-M5": t`$z_2$ से गुणा करना $\arg z_2$ जितना घुमाता है **और** $\lvert z_2 \rvert$ जितना खींचता है: moduli गुणा होते हैं, $r_1 r_2$।`,
    "C16-M6": t`दक्षिणावर्त नापा गया कोण ऋणात्मक है: $\dfrac{5\pi}4$, दक्षिणावर्त $\dfrac{3\pi}4$ है, इसलिए principal argument $-\dfrac{3\pi}4$ है।`,
  },
  solutions: {
    "C16-Q1": [
      t`Moduli गुणा कीजिए: $2 \times 3 = 6$।`,
      t`Arguments जोड़िए: $\dfrac\pi3 + \dfrac\pi6 = \dfrac\pi2$।`,
      t`इसलिए गुणनफल $6\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$ है, जो $6i$ है।`,
    ],
    "C16-Q2": [
      t`Moduli को भाग दीजिए: $\dfrac82 = 4$।`,
      t`Arguments घटाइए, अंश घटा हर: $\dfrac{5\pi}6 - \dfrac\pi3 = \dfrac\pi2$।`,
      t`इसलिए भागफल $4\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$ है, जो $4i$ है।`,
    ],
    "C16-Q3": [
      t`Polar forms: $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$ और $\sqrt3 + i = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$।`,
      t`Moduli गुणा कीजिए: $\sqrt2 \times 2 = 2\sqrt2$।`,
      t`Arguments जोड़िए: $\dfrac\pi4 + \dfrac\pi6 = \dfrac{5\pi}{12}$, इसलिए गुणनफल $2\sqrt2\left(\cos\dfrac{5\pi}{12} + i\sin\dfrac{5\pi}{12}\right)$ है।`,
    ],
    "C16-Q4": [
      t`Polar forms: $1 + \sqrt3\,i = 2\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right)$ और $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$।`,
      t`Moduli को भाग दीजिए: $\dfrac{2}{\sqrt2} = \sqrt2$।`,
      t`Arguments घटाइए, अंश घटा हर: $\dfrac\pi3 - \dfrac\pi4 = \dfrac\pi{12}$, इसलिए भागफल $\sqrt2\left(\cos\dfrac\pi{12} + i\sin\dfrac\pi{12}\right)$ है।`,
    ],
    "C16-Q5": [
      t`Arguments जोड़िए: $\dfrac{3\pi}4 + \dfrac\pi2 = \dfrac{5\pi}4$।`,
      t`$\dfrac{5\pi}4$, $(-\pi, \pi]$ से बाहर है, इसलिए $2\pi$ घटाइए: $\dfrac{5\pi}4 - 2\pi = -\dfrac{3\pi}4$।`,
    ],
  },
};
