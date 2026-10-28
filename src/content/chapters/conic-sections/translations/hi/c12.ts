import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c12: ConceptTranslation = {
  id: "C12",
  lang: "hi",
  status: "approved",
  source: "00175e44cca288",
  hook: {
    prompt: t`एक hyperbola के vertices $(\pm 1, 0)$ और foci $(\pm 3, 0)$ हैं। Ellipse का नियम $b^2 = a^2 - a^2e^2$, $1 - 9 = -8$ देता है। **तो यहाँ $b^2$ क्या है?**`,
    reveal: t`Hyperbola में foci, vertices से आगे होते हैं, इसलिए $ae > a$ और नियम पलट जाता है: $a^2e^2 = a^2 + b^2$। तब $b^2 = 9 - 1 = 8$, और hyperbola $x^2 - \frac{y^2}{8} = 1$ है।`,
  },
  intuition: [
    t`Hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ में दो अज्ञात हैं, $a$ और $b$, इसलिए दो तथ्य इसे तय करते हैं।`,
    t`**आँकड़े** वे तथ्य हैं जो प्रश्न देता है: हर एक को centre $O$ से दूरी के रूप में पढ़िए।`,
    t`एक vertex, centre से $a$ दूर है, और **conjugate axis** (संयुग्मी अक्ष), वक्र के आर-पार अक्ष, का एक सिरा $b$।`,
    t`एक focus, centre से $ae$ दूर है, और एक directrix उससे $\frac{a}{e}$।`,
    t`एक vertex से conjugate axis के एक सिरे तक भी $ae$ है, इसलिए $a^2e^2 = a^2 + b^2$।`,
    t`यह ellipse का संबंध है, चिह्न पलटा हुआ, क्योंकि hyperbola के foci उसके vertices से आगे होते हैं।`,
  ],
  formal: [
    {
      title: t`हर तथ्य एक दूरी है`,
      points: [
        t`प्रश्न का दिया हर तथ्य centre $O$ से दूरी है, किसी अक्ष के साथ मापी गई।`,
        t`याद कीजिए: vertices $(\pm a, 0)$ हैं, और उन्हें जोड़ने वाला **transverse axis** (अनुप्रस्थ अक्ष) $2a$ लंबा है।`,
        t`Conjugate axis, वक्र के आर-पार, के सिरे $(0, \pm b)$ हैं और यह $2b$ लंबा है।`,
        t`Foci $(\pm ae, 0)$ हैं, इसलिए foci के बीच की दूरी $2ae$ है।`,
        t`नियताएँ $x = \pm\frac{a}{e}$ हैं, इसलिए उनके बीच की दूरी $\frac{2a}{e}$ है।`,
      ],
    },
    {
      title: t`पहले लंबाइयाँ आधी कीजिए`,
      points: [
        t`निर्देशांक centre से मापा जाता है, इसलिए focus $(ae, 0)$ आधी लंबाई $ae$ देता है।`,
        t`दी गई लंबाई centre के दोनों ओर फैली होती है, जैसे foci के बीच की दूरी $2ae$।`,
        t`इसलिए कोई अक्ष, या foci या नियताओं के बीच की दूरी, दोगुनी है: $2a$, $2b$, $2ae$ या $\frac{2a}{e}$।`,
        t`उदाहरण के लिए, $8$ दूर foci का अर्थ $2ae = 8$ है, इसलिए $ae = 4$।`,
        t`उपयोग करने से पहले हर दी गई लंबाई आधी कीजिए।`,
      ],
    },
    {
      title: t`a, b और ae को जोड़ना`,
      points: [
        t`याद कीजिए: hyperbola के लिए, $b^2 = a^2(e^2 - 1)$।`,
        t`गुणा करने पर, $b^2 = a^2e^2 - a^2$, यानी $a^2e^2 = a^2 + b^2$।`,
        t`यह पाइथागोरस है: vertex से conjugate axis के सिरे तक $ae$ है, लंबी भुजा।`,
        t`Focus, centre से उतनी ही दूरी $ae$ पर है, vertex से आगे, क्योंकि $ae > a$।`,
        t`इसलिए आप $a^2$ और $b^2$ जोड़ते हैं: ellipse का $a^2e^2 = a^2 - b^2$ लागू नहीं होता।`,
      ],
    },
    {
      title: t`एक बिंदु, फिर समीकरण`,
      points: [
        t`Hyperbola पर का बिंदु $(x_1, y_1)$ उसके समीकरण को संतुष्ट करता है।`,
        t`इसलिए $\frac{x_1^2}{a^2} - \frac{y_1^2}{b^2} = 1$: $a^2$ और $b^2$ में एक समीकरण।`,
        t`उदाहरण के लिए, एक hyperbola $(3, 0)$ और $(6, 9)$ से होकर जाता है।`,
        t`$(3, 0)$, $x$-अक्ष पर है, इसलिए यह एक vertex है, और $a^2 = 9$।`,
        t`तब $(6, 9)$ से $\frac{36}{9} - \frac{81}{b^2} = 1$ मिलता है, इसलिए $b^2 = 27$।`,
        t`$a^2$ और $b^2$ को $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ में रखिए: यहाँ $\frac{x^2}{9} - \frac{y^2}{27} = 1$।`,
      ],
    },
  ],
  worked: {
    prompt: t`Centre origin पर, transverse axis $12$ और एक focus $(3\sqrt{5}, 0)$ पर वाले hyperbola का समीकरण ज्ञात कीजिए।`,
    steps: [
      t`Transverse axis $2a = 12$ है, इसलिए $a = 6$ और $a^2 = 36$। Vertices $(\pm 6, 0)$ हैं।`,
      t`Focus $(ae, 0)$, $(3\sqrt{5}, 0)$ है, इसलिए $ae = 3\sqrt{5}$ और $a^2e^2 = 45$।`,
      t`$a^2 + b^2 = a^2e^2$: $36 + b^2 = 45$, इसलिए $b^2 = 9$। Conjugate axis के सिरे $(0, \pm 3)$ हैं।`,
      t`Hyperbola $\frac{x^2}{36} - \frac{y^2}{9} = 1$ है।`,
    ],
    answer: t`$\frac{x^2}{36} - \frac{y^2}{9} = 1$`,
  },
  remediation: {
    "C12-M1": t`Hyperbola के foci उसके vertices से आगे होते हैं, इसलिए $ae > a$ और $a^2e^2 = a^2 + b^2$, यानी $b^2 = a^2(e^2 - 1)$। Ellipse का ऋण चिह्न यहाँ नहीं आता।`,
    "C12-M2": t`ये लंबाइयाँ centre के दोनों ओर फैली हैं: transverse axis $2a$, conjugate axis $2b$, foci $2ae$ दूर, नियताएँ $\frac{2a}{e}$ दूर। उपयोग करने से पहले लंबाई आधी कीजिए।`,
    "C12-M3": t`Vertices $(\pm a, 0)$ वक्र पर हैं; foci $(\pm ae, 0)$ और बाहर हैं, क्योंकि $e > 1$। Focus, $ae$ देता है, $a$ नहीं।`,
    "C12-M4": t`Transverse axis vertices को जोड़ता है और foci की रेखा के साथ है, इसलिए इसकी लंबाई $2a$ है; conjugate axis, इसके आर-पार, की लंबाई $2b$ है।`,
    "C12-M5": t`$b^2 = a^2(e^2 - 1) = a^2e^2 - a^2$: focal distance $ae$ के वर्ग में से $a^2$ घटाइए।`,
  },
  solutions: {
    "C12-Q1": [
      t`Focus $(-7, 0)$ से $ae = 7$ मिलता है (foci $(\pm 7, 0)$ हैं), इसलिए $a^2e^2 = 49$। Conjugate axis $2b = 10$ से $b = 5$, इसलिए $b^2 = 25$।`,
      t`Hyperbola के लिए $a^2e^2 = a^2 + b^2$: $49 = a^2 + 25$, इसलिए $a^2 = 24$ और vertices $(\pm 2\sqrt{6}, 0)$ हैं।`,
      t`Hyperbola $\frac{x^2}{24} - \frac{y^2}{25} = 1$ है।`,
    ],
    "C12-Q2": [
      t`Foci $2ae = 10$ दूर हैं, इसलिए $ae = 5$। Conjugate axis $2b = 6$ है, इसलिए $b = 3$।`,
      t`$a^2 = a^2e^2 - b^2 = 25 - 9 = 16$, इसलिए vertices $(\pm 4, 0)$ हैं।`,
      t`Hyperbola $\frac{x^2}{16} - \frac{y^2}{9} = 1$ है।`,
    ],
    "C12-Q3": [
      t`नियताएँ $x = \pm\frac{a}{e}$ हैं, इसलिए $\frac{2a}{e} = \frac{18}{5}$ से $\frac{a}{e} = \frac{9}{5}$ मिलता है।`,
      t`$a = \frac{9}{5} \times \frac{5}{3} = 3$, इसलिए $a^2 = 9$। Vertices $(\pm 3, 0)$ हैं और foci $(\pm ae, 0) = (\pm 5, 0)$।`,
      t`$b^2 = a^2(e^2 - 1) = 9\left(\frac{25}{9} - 1\right) = 16$। Hyperbola $\frac{x^2}{9} - \frac{y^2}{16} = 1$ है।`,
    ],
    "C12-Q4": [
      t`Foci $(\pm ae, 0)$, $(\pm 2, 0)$ हैं, इसलिए $ae = 2$।`,
      t`$a = \frac{2}{3/2} = \frac{4}{3}$, इसलिए $a^2 = \frac{16}{9}$ और vertices $\left(\pm\frac{4}{3}, 0\right)$ हैं।`,
      t`$b^2 = a^2e^2 - a^2 = 4 - \frac{16}{9} = \frac{20}{9}$। Hyperbola $\frac{x^2}{16/9} - \frac{y^2}{20/9} = 1$ है, यानी $\frac{9x^2}{16} - \frac{9y^2}{20} = 1$।`,
    ],
    "C12-Q5": [
      t`Conjugate axis $2b = 5$ है, इसलिए $b = \frac{5}{2}$। Foci $2ae = 13$ दूर हैं, इसलिए $ae = \frac{13}{2}$।`,
      t`$a^2 = a^2e^2 - b^2 = \frac{169}{4} - \frac{25}{4} = 36$, इसलिए vertices $(\pm 6, 0)$ हैं।`,
      t`Hyperbola $\frac{x^2}{36} - \frac{y^2}{25/4} = 1$ है, यानी $\frac{x^2}{36} - \frac{4y^2}{25} = 1$।`,
    ],
    "C12-Q6": [
      t`Foci $2ae = 12$ दूर हैं, इसलिए $ae = 6$ और foci $(\pm 6, 0)$ हैं।`,
      t`$a = \frac{6}{3/2} = 4$, इसलिए $a^2 = 16$ और vertices $(\pm 4, 0)$ हैं।`,
      t`$b^2 = a^2e^2 - a^2 = 36 - 16 = 20$। Hyperbola $\frac{x^2}{16} - \frac{y^2}{20} = 1$ है।`,
    ],
  },
};
