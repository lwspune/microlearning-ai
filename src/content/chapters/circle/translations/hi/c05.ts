import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "hi",
  status: "approved",
  source: "1cac5b7bd8ea0f",
  hook: {
    prompt: t`एक मनका centre $(2, 1)$ और radius $5$ वाले वृत्ताकार तार पर घूमता है। **क्या एक संख्या ठीक-ठीक बता सकती है कि मनका कहाँ है?**`,
    reveal: t`हाँ: कोण $\theta$ जो मनके तक की radius धनात्मक $x$-दिशा से बनाती है। मनका $(2 + 5\cos\theta,\ 1 + 5\sin\theta)$ पर है, और जैसे-जैसे $\theta$, $0$ से $2\pi$ तक चलता है, वह तार का एक चक्कर लगाता है।`,
  },
  intuition: [
    t`याद कीजिए: वृत्त अपने **centre** (केंद्र) $C(h, k)$ से एक दूरी $r$, अपनी **radius** (त्रिज्या), पर का हर बिंदु है।`,
    t`$C$ पर खड़े होकर **धनात्मक $x$-दिशा** की ओर मुँह कीजिए, जिधर $x$-अक्ष इशारा करता है।`,
    t`कोण $\theta$ से वामावर्त घूमिए, फिर $r$ इकाई चलिए: आप वृत्त पर $P(x, y)$ पर पहुँचते हैं।`,
    t`रास्ते में आप $r\cos\theta$ आड़े और $r\sin\theta$ ऊपर चले।`,
    t`इसलिए $x = h + r\cos\theta$ और $y = k + r\sin\theta$।`,
    t`हर $\theta$ एक बिंदु देता है, और जैसे $\theta$, $0$ से $2\pi$ तक जाता है, $P$ एक चक्कर लगाता है।`,
  ],
  formal: [
    {
      title: t`Parametric equations (प्राचलिक समीकरण)`,
      points: [
        t`Radius $CP$ को धनात्मक $x$-दिशा से कोण $\theta$ से घुमाइए।`,
        t`तब $P$ के लिए $x = h + r\cos\theta$ और $y = k + r\sin\theta$।`,
        t`**Parameter** (प्राचल) वह एक संख्या है जो बिंदु तय करती है: यहाँ यह $\theta$ है।`,
        t`जो समीकरण $x$ और $y$ को parameter के रूप में देते हैं, वे **parametric equations** हैं।`,
        t`$0 \le \theta < 2\pi$ लेने से $P$ वृत्त का एक चक्कर लगाता है।`,
        t`Origin पर centre वाले $x^2 + y^2 = r^2$ के लिए, ये $x = r\cos\theta$, $y = r\sin\theta$ हैं।`,
      ],
    },
    {
      title: t`हर θ क्यों बैठता है`,
      points: [
        t`$C$ से $P$ तक $r\cos\theta$ आड़ा और $r\sin\theta$ ऊपर है।`,
        t`इसलिए $x - h = r\cos\theta$ और $y - k = r\sin\theta$; वर्ग करके जोड़िए।`,
        t`इससे $(x - h)^2 + (y - k)^2$ $= r^2(\cos^2\theta + \sin^2\theta)$ मिलता है।`,
        t`याद कीजिए: हर कोण $\theta$ के लिए $\cos^2\theta + \sin^2\theta = 1$।`,
        t`इसलिए $(x - h)^2 + (y - k)^2 = r^2$: हर $\theta$ के लिए $P$ वृत्त पर है।`,
      ],
    },
    {
      title: t`समीकरण से`,
      points: [
        t`वृत्त को parametric रूप में लिखने के लिए, पहले उसका centre और radius ज्ञात कीजिए।`,
        t`यदि $x^2$ का गुणांक $1$ के अलावा कुछ हो, तो उससे भाग दीजिए: यहाँ, $2$ से।`,
        t`फिर वर्ग पूरे कीजिए: $(x - 2)^2 + (y + 1)^2 = 9$।`,
        t`इसलिए centre $(2, -1)$ है और $r^2 = 9$, इसलिए $r = 3$।`,
        t`$\cos\theta$ के आगे की संख्या $r = 3$ है, $r^2 = 9$ नहीं।`,
        t`इसलिए $x = 2 + 3\cos\theta$ और $y = -1 + 3\sin\theta$।`,
      ],
    },
    {
      title: t`वापस centre और radius`,
      points: [
        t`$x = h - r\sin\theta$, $y = k - r\cos\theta$ लीजिए: ऋण चिह्न, और $x$-समीकरण में $\sin$।`,
        t`वापस जाने के लिए, $\sin\theta$ और $\cos\theta$ वाले पद अलग कीजिए: $x - h = -r\sin\theta$, $y - k = -r\cos\theta$।`,
        t`वर्ग करके जोड़िए: $\sin^2\theta + \cos^2\theta = 1$ से $\theta$ हट जाता है।`,
        t`इससे $(x - h)^2 + (y - k)^2 = r^2$ बचता है।`,
        t`इसलिए centre अब भी $(h, k)$ है और radius अब भी $r$।`,
        t`चिह्न और अदला-बदली केवल यह बदलते हैं कि $P$ कहाँ से शुरू होता है और किस ओर घूमता है।`,
      ],
    },
  ],
  worked: {
    prompt: t`वृत्त $x^2 + y^2 - 6x + 4y - 3 = 0$ के parametric equations ज्ञात कीजिए।`,
    steps: [
      t`वर्ग पूरे कीजिए: $(x^2 - 6x + 9) + (y^2 + 4y + 4)$ बराबर है $3 + 9 + 4$ के, इसलिए $(x - 3)^2 + (y + 2)^2 = 16$।`,
      t`Centre $C(3, -2)$ है और $r^2 = 16$, इसलिए $r = 4$।`,
      t`मान लीजिए CP धनात्मक $x$-दिशा से कोण $\theta$ बनाती है। तब $x - 3 = 4\cos\theta$ और $y + 2 = 4\sin\theta$।`,
      t`इसलिए $x = 3 + 4\cos\theta$ और $y = -2 + 4\sin\theta$।`,
    ],
    answer: t`$x = 3 + 4\cos\theta$, $y = -2 + 4\sin\theta$`,
  },
  remediation: {
    "C05-M1": t`$\cos\theta$ और $\sin\theta$ के आगे की संख्या radius $r$ है, एक लंबाई। जब समीकरण $r^2 = 25$ दे, तो $5\cos\theta$ लिखिए, $25\cos\theta$ नहीं।`,
    "C05-M2": t`$(x - h)^2$ में centre का निर्देशांक $h$ है: $(x - 3)^2$ का अर्थ $h = 3$ है। $x = h + r\cos\theta$ में अचर पद centre का निर्देशांक वैसा ही है, चिह्न सहित।`,
    "C05-M3": t`$x = r\cos\theta$, $y = r\sin\theta$ केवल origin पर केंद्रित वृत्त के लिए है। Centre $(h, k)$ के लिए, centre से शुरू कीजिए: $x = h + r\cos\theta$, $y = k + r\sin\theta$।`,
    "C05-M4": t`$=$ चिह्न पार करने पर पद का चिह्न बदलता है: $x^2 + y^2 + 2gx + 2fy + c = 0$ से $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$ मिलता है।`,
    "C05-M5": t`पहले पूरे समीकरण को $x^2$ के गुणांक से भाग दीजिए, ताकि $x^2$ और $y^2$ का गुणांक $1$ हो; तभी centre और radius पढ़िए।`,
    "C05-M6": t`हर समीकरण अपना निर्देशांक देता है: $x$-समीकरण का अचर $h$ है और $y$-समीकरण का $k$, चाहे वहाँ $\cos\theta$ आए या $\sin\theta$।`,
  },
  solutions: {
    "C05-Q1": [
      t`$(x - h)^2 + (y - k)^2 = r^2$ से तुलना कीजिए: $h = 3$, $k = -4$ और $r^2 = 25$, इसलिए radius $r = 5$ है, $25$ नहीं।`,
      t`$x - 3 = 5\cos\theta$ और $y + 4 = 5\sin\theta$ रखिए। तब $(x - 3)^2 + (y + 4)^2 = 25(\cos^2\theta + \sin^2\theta) = 25$, इसलिए हर $\theta$ वृत्त का एक बिंदु देता है।`,
      t`Parametric equations $x = 3 + 5\cos\theta$, $y = -4 + 5\sin\theta$ हैं।`,
    ],
    "C05-Q2": [
      t`वर्ग पूरे कीजिए: $(x^2 + 2x + 1) + (y^2 - 4y + 4) = 4 + 1 + 4$, इसलिए $(x + 1)^2 + (y - 2)^2 = 9$। पार ले जाया गया $-4$, $+4$ बन जाता है।`,
      t`Centre $(-1, 2)$ है और $r = \sqrt{9} = 3$।`,
      t`$x + 1 = 3\cos\theta$, $y - 2 = 3\sin\theta$ के साथ: $x = -1 + 3\cos\theta$, $y = 2 + 3\sin\theta$।`,
    ],
    "C05-Q3": [
      t`पहले $3$ से भाग दीजिए, ताकि $x^2$ और $y^2$ का गुणांक $1$ हो: $x^2 + y^2 - \frac{4}{3}x + 2y - \frac{4}{3} = 0$।`,
      t`वर्ग पूरे कीजिए: $\left(x - \frac{2}{3}\right)^2 + (y + 1)^2 = \frac{4}{9} + 1 + \frac{4}{3} = \frac{25}{9}$। Centre $\left(\frac{2}{3}, -1\right)$, radius $\frac{5}{3}$।`,
      t`इसलिए $x = \frac{2}{3} + \frac{5}{3}\cos\theta$, $y = -1 + \frac{5}{3}\sin\theta$।`,
    ],
    "C05-Q4": [
      t`वर्ग पूरे कीजिए: $\left(x + \frac{m}{2}\right)^2 + \left(y + \frac{m}{2}\right)^2 = \frac{m^2}{4} + \frac{m^2}{4} = \frac{m^2}{2}$।`,
      t`Centre $\left(-\frac{m}{2}, -\frac{m}{2}\right)$; radius $\sqrt{\frac{m^2}{2}} = \frac{m}{\sqrt{2}}$, क्योंकि $m > 0$।`,
      t`इसलिए $x = -\frac{m}{2} + \frac{m}{\sqrt{2}}\cos\theta$, $y = -\frac{m}{2} + \frac{m}{\sqrt{2}}\sin\theta$।`,
    ],
    "C05-Q5": [
      t`त्रिकोणमितीय पद अलग कीजिए: $x - 3 = -4\sin\theta$ और $y - 2 = -4\cos\theta$।`,
      t`वर्ग करके जोड़िए: $(x - 3)^2 + (y - 2)^2 = 16(\sin^2\theta + \cos^2\theta) = 16$।`,
      t`इसलिए centre $(3, 2)$ है और radius $4$ है। ऋण चिह्न और अदला-बदली किए गए $\sin$ और $\cos$ केवल यह बदलते हैं कि बिंदु कहाँ से शुरू होता है और किस ओर घूमता है।`,
    ],
    "C05-Q6": [
      t`त्रिकोणमितीय पद अलग कीजिए: $x + 2 = 3\sin\theta$ और $y - 1 = 3\cos\theta$।`,
      t`वर्ग करके जोड़िए: $(x + 2)^2 + (y - 1)^2 = 9(\sin^2\theta + \cos^2\theta) = 9$। Centre $(-2, 1)$ है, क्रमशः $x$-समीकरण और $y$-समीकरण से, और radius $3$ है।`,
    ],
  },
};
