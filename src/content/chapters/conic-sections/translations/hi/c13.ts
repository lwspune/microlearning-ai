import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c13: ConceptTranslation = {
  id: "C13",
  lang: "hi",
  status: "approved",
  source: "05e5399f910d80",
  hook: {
    prompt: t`वृत्त के लिए, हर slope के दो tangents होते हैं। **क्या hyperbola $\dfrac{x^2}{4} - y^2 = 1$ का slope $\dfrac14$ वाला tangent है?**`,
    reveal: t`नहीं। रेखा $y = \frac14 x + c$ तभी स्पर्श करती है जब $c^2 = a^2m^2 - b^2 = 4 \cdot \frac{1}{16} - 1 = -\frac34$, और कोई वास्तविक $c$ ऐसा नहीं करता। Slope $\frac14$ की हर रेखा hyperbola को काटती है, हर शाखा पर एक बार। Tangent को $\frac{b}{a} = \frac12$ से अधिक खड़ा होना चाहिए।`,
  },
  intuition: [
    t`याद कीजिए: **tangent** (स्पर्श रेखा) वह रेखा है जो वक्र को एक बिंदु पर स्पर्श करती है, उसे पार किए बिना।`,
    t`रेखा $y = mx + c$ को $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ में रखिए: $x$ में एक द्विघात, जिसके मूल वे जगहें हैं जहाँ वे मिलते हैं।`,
    t`रेखा tangent है जब दोनों मूल बराबर हों: एक मिलन-बिंदु, दो बार गिना गया।`,
    t`यह ठीक तब होता है जब $c^2 = a^2m^2 - b^2$: hyperbola का ऋण चिह्न बना रहता है।`,
    t`$\frac{x^2}{9} - \frac{y^2}{5} = 1$ और slope $1$ के लिए: $c^2 = 9 - 5 = 4$, इसलिए tangents $y = x \pm 2$ हैं।`,
    t`यदि $a^2m^2 < b^2$, तो slope $m$ की कोई रेखा स्पर्श नहीं करती: यहाँ slope $-\frac12$ विफल है, क्योंकि $\frac94 < 5$।`,
  ],
  formal: [
    {
      title: t`पहले a² और b² पढ़िए`,
      points: [
        t`Tangent सूत्रों को **मानक रूप** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ चाहिए, दाईं ओर $1$ के साथ।`,
        t`इसलिए $16x^2 - 25y^2 = 400$ लीजिए, और दोनों पक्षों को अचर $400$ से भाग दीजिए।`,
        t`इससे $\frac{x^2}{25} - \frac{y^2}{16} = 1$ मिलता है।`,
        t`इसलिए $a^2 = 25$ और $b^2 = 16$, गुणांक $16$ और $25$ नहीं।`,
      ],
    },
    {
      title: t`किसी बिंदु पर tangent`,
      points: [
        t`Hyperbola पर एक बिंदु $P(x_1, y_1)$ लीजिए: नियम के लिए $P$ का वक्र पर होना ज़रूरी है।`,
        t`$x^2$ को $xx_1$ से, और $y^2$ को $yy_1$ से बदलिए।`,
        t`ऋण चिह्न रखिए, और दाईं ओर $1$ भी।`,
        t`$P$ पर tangent $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ है।`,
        t`$\frac{x^2}{16} - \frac{y^2}{9} = 1$ पर $\left(5, \frac94\right)$ पर: $\frac{5x}{16} - \frac{y}{4} = 1$, यानी $5x - 4y = 16$।`,
      ],
    },
    {
      title: t`बिंदु θ पर tangent`,
      points: [
        t`**Auxiliary circle** (सहायक वृत्त) $x^2 + y^2 = a^2$, $O$ पर centre वाला, दोनों vertices से होकर जाने वाला वृत्त है।`,
        t`एक भुजा $x$-अक्ष से कोण $\theta$ घूमकर इस वृत्त पर बिंदु $Q$ तक पहुँचती है।`,
        t`$Q$ पर वृत्त का tangent $x$-अक्ष से $N(a\sec\theta, 0)$ पर मिलता है।`,
        t`$N$ के ठीक ऊपर $P(a\sec\theta, b\tan\theta)$ है, न्यून $\theta$ के लिए: $\theta$, $P$ का **उत्केंद्र कोण** है।`,
        t`$P$, hyperbola पर है, क्योंकि $\sec^2\theta - \tan^2\theta = 1$।`,
        t`$x_1 = a\sec\theta$ और $y_1 = b\tan\theta$ रखिए: tangent $\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1$ है।`,
      ],
    },
    {
      title: t`Slope m वाले tangents`,
      points: [
        t`Slope $m$ की रेखा $y = mx + c$, hyperbola को ठीक तब स्पर्श करती है जब $c^2 = a^2m^2 - b^2$।`,
        t`दोनों तरह वर्गमूल लीजिए: $c = \pm\sqrt{a^2m^2 - b^2}$।`,
        t`इसलिए slope $m$ के tangents $y = mx \pm \sqrt{a^2m^2 - b^2}$ हैं।`,
        t`ये दो हैं, हर शाखा को एक स्पर्श करता है।`,
        t`यदि $a^2m^2 < b^2$, तो मूल वास्तविक नहीं: किसी tangent का slope $m$ नहीं है।`,
      ],
    },
    {
      title: t`Point of contact (स्पर्श बिंदु)`,
      points: [
        t`**Point of contact** वह एक बिंदु है जहाँ tangent वक्र को स्पर्श करता है।`,
        t`Tangent $y = mx + c$, $\left(-\frac{a^2m}{c}, -\frac{b^2}{c}\right)$ पर स्पर्श करता है।`,
        t`रेखा को $y = mx + c$ लिखने के बाद ही $m$ और $c$ पढ़िए।`,
        t`उदाहरण के लिए, $5x - 4y = 16$, $y = \frac54 x - 4$ है: इसलिए $m = \frac54$ और $c = -4$।`,
        t`$\frac{x^2}{16} - \frac{y^2}{9} = 1$ पर यह $\left(\frac{-20}{-4}, \frac{-9}{-4}\right)$ पर स्पर्श करता है, यानी $\left(5, \frac94\right)$।`,
      ],
    },
  ],
  worked: {
    prompt: t`दिखाइए कि रेखा $4x - 3y = 16$, hyperbola $16x^2 - 25y^2 = 400$ को स्पर्श करती है, और point of contact ज्ञात कीजिए।`,
    steps: [
      t`$400$ से भाग दीजिए: $\dfrac{x^2}{25} - \dfrac{y^2}{16} = 1$, इसलिए $a^2 = 25$, $b^2 = 16$।`,
      t`रेखा को $y = \frac43 x - \frac{16}{3}$ लिखिए: $m = \frac43$, $c = -\frac{16}{3}$।`,
      t`$a^2m^2 - b^2$ $= 25 \cdot \frac{16}{9} - 16$ $= \frac{256}{9}$, और $c^2 = \frac{256}{9}$। ये बराबर हैं, इसलिए रेखा tangent है।`,
      t`Point of contact: $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$, जहाँ $x = \dfrac{-25 \cdot \frac43}{-\frac{16}{3}}$ $= \dfrac{25}{4}$ और $y = \dfrac{-16}{-\frac{16}{3}}$ $= 3$: बिंदु $\left(\dfrac{25}{4}, 3\right)$। जाँच: $16 \cdot \frac{625}{16} - 25 \cdot 9$ $= 625 - 225 = 400$।`,
    ],
    answer: t`रेखा tangent है; यह $\left(\frac{25}{4}, 3\right)$ पर स्पर्श करती है।`,
  },
  remediation: {
    "C13-M1": t`Hyperbola का ऋण चिह्न हर tangent सूत्र में आता है: $\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1$, $c^2 = a^2m^2 - b^2$, और point of contact $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$।`,
    "C13-M2": t`पहले अचर से भाग दीजिए: $3x^2 - 2y^2 = 6$, $\dfrac{x^2}{2} - \dfrac{y^2}{3} = 1$ है, इसलिए $a^2 = 2$ और $b^2 = 3$। सामान्यतः $a^2 = \dfrac{C}{A}$ और $b^2 = \dfrac{C}{B}$।`,
    "C13-M3": t`Tangent, $OP$ पर लंब केवल वृत्त पर होता है। Hyperbola पर $P(x_1, y_1)$ पर $\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1$ लगाइए, और जहाँ $y = mx + c$ स्पर्श करती है उस बिंदु के लिए $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$।`,
    "C13-M4": t`$c$ पढ़ने से पहले $y$ के लिए हल कीजिए: $3x - 2y = 8$ से $y = \frac32 x - 4$ मिलता है, इसलिए $m = \frac32$ और $c = -4$।`,
    "C13-M5": t`$c^2 = a^2m^2 - b^2$ से $c = \pm\sqrt{a^2m^2 - b^2}$ मिलता है। हर slope के दो tangents हैं, हर शाखा पर एक, इसलिए दो रेखाएँ और $k$ के दो मान।`,
    "C13-M6": t`Hyperbola पर बिंदु $(a\sec\theta, b\tan\theta)$ है, क्योंकि $\sec^2\theta - \tan^2\theta = 1$। वहाँ tangent $\dfrac{x\sec\theta}{a} - \dfrac{y\tan\theta}{b} = 1$ है।`,
  },
  solutions: {
    "C13-Q1": [
      t`$12$ से भाग दीजिए: $\dfrac{x^2}{4} - \dfrac{y^2}{3} = 1$, इसलिए $a^2 = 4$, $b^2 = 3$।`,
      t`$(4, 3)$ इस पर है: $\frac{16}{4} - \frac{9}{3} = 1$। वहाँ tangent $\dfrac{4x}{4} - \dfrac{3y}{3} = 1$ है।`,
      t`इसलिए tangent $x - y = 1$ है।`,
    ],
    "C13-Q2": [
      t`$a = 12$, $b = 5$। उत्केंद्र कोण $\theta$ वाला बिंदु $(a\sec\theta, b\tan\theta)$ है।`,
      t`$\sec\frac{\pi}{3} = 2$, $\tan\frac{\pi}{3} = \sqrt3$, इसलिए $P = (24, 5\sqrt3)$।`,
      t`Tangent: $\dfrac{24x}{144} - \dfrac{5\sqrt3\,y}{25} = 1$, यानी $\dfrac{x}{6} - \dfrac{\sqrt3\,y}{5} = 1$।`,
      t`$30$ से गुणा कीजिए: $5x - 6\sqrt3\,y = 30$।`,
    ],
    "C13-Q3": [
      t`$20$ से भाग दीजिए: $\dfrac{x^2}{4} - \dfrac{y^2}{5} = 1$, इसलिए $a^2 = 4$, $b^2 = 5$। रेखा $3x + 2y + 12 = 0$ का slope $-\frac32$ है, और tangents का भी।`,
      t`$c^2 = a^2m^2 - b^2 = 4 \cdot \frac94 - 5 = 4$, इसलिए $c = \pm 2$।`,
      t`$y = -\frac32 x \pm 2$; $2$ से गुणा कीजिए: $3x + 2y = \pm 4$।`,
    ],
    "C13-Q4": [
      t`$48$ से भाग दीजिए: $\dfrac{x^2}{16} - \dfrac{y^2}{48} = 1$, इसलिए $a^2 = 16$, $b^2 = 48$। रेखा $x + 2y - 7 = 0$ का slope $-\frac12$ है, इसलिए tangents का slope $2$ है।`,
      t`$c^2 = a^2m^2 - b^2 = 16 \cdot 4 - 48 = 16$, इसलिए $c = \pm 4$।`,
      t`Tangents $y = 2x + 4$ और $y = 2x - 4$ हैं, यानी $y = 2x \pm 4$।`,
    ],
    "C13-Q5": [
      t`Hyperbola $\dfrac{x^2}{5} - \dfrac{y^2}{5/4} = 1$ है: $a^2 = 5$, $b^2 = \frac54$। रेखा $y = \frac34 x - \frac{k}{4}$ है: $m = \frac34$, $c = -\frac{k}{4}$।`,
      t`$c^2 = a^2m^2 - b^2$: $\dfrac{k^2}{16} = 5 \cdot \dfrac{9}{16} - \dfrac54 = \dfrac{25}{16}$।`,
      t`$k^2 = 25$, इसलिए $k = \pm 5$: रेखाएँ $3x - 4y = 5$ और $3x - 4y = -5$ दोनों स्पर्श करती हैं।`,
    ],
    "C13-Q6": [
      t`$24$ से भाग दीजिए: $\dfrac{x^2}{6} - \dfrac{y^2}{8} = 1$, इसलिए $a^2 = 6$, $b^2 = 8$।`,
      t`रेखा $y = 2x - 4$ है: $m = 2$, $c = -4$। जाँच: $a^2m^2 - b^2 = 24 - 8 = 16 = c^2$, इसलिए यह स्पर्श करती है।`,
      t`Point of contact: $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right) = \left(\dfrac{-12}{-4}, \dfrac{-8}{-4}\right) = (3, 2)$ है।`,
    ],
  },
};
