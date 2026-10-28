import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "hi",
  status: "approved",
  source: "1c1dfd516cd54f",
  hook: {
    prompt: t`वृत्त पर, $P$ पर tangent, $OP$ पर लंब होता है। Ellipse $\frac{x^2}{8} + \frac{y^2}{2} = 1$ और उस पर बिंदु $P(2, 1)$ लीजिए। **क्या $P$ पर tangent, $OP$ पर लंब है?**`,
    reveal: t`नहीं। $P$ पर tangent $\frac{2x}{8} + \frac{y}{2} = 1$ है, यानी $x + 2y = 4$, slope $-\frac12$ के साथ। $OP$ का slope $\frac12$ है। गुणनफल $-\frac14$ है, $-1$ नहीं। Ellipse एक खिंचा हुआ वृत्त है: खिंचाव tangent को tangent ही रखता है, पर समकोण नहीं रखता।`,
  },
  intuition: [
    t`Ellipse, जैसे $\frac{x^2}{8} + \frac{y^2}{2} = 1$, एक अक्ष के साथ खिंचा हुआ वृत्त है।`,
    t`Slope $-\frac12$ की रेखाएँ इसकी ओर खिसकाइए: दूर होने पर, रेखा ellipse से **चूक** जाती है।`,
    t`पास आने पर, यह इसे एक बिंदु, $P(2, 1)$, पर **स्पर्श** करती है: **tangent** (स्पर्श रेखा) ऐसे बस स्पर्श करने वाली रेखा है।`,
    t`और पास आने पर, यह ellipse को दो बिंदुओं पर **काटती** है।`,
    t`खिसकाते रहिए, तो यह दूसरी ओर फिर स्पर्श करती है: हर slope दो tangents देता है।`,
    t`खिंचाव tangents को tangents ही रखता है पर समकोणों को मोड़ देता है: $P$ पर tangent, $OP$ से समकोण पर नहीं है।`,
  ],
  formal: [
    {
      title: t`किसी बिंदु पर tangent`,
      points: [
        t`Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ पर एक बिंदु $P(x_1, y_1)$ लीजिए।`,
        t`वृत्त का नियम याद कीजिए: $x^2$ को $xx_1$ से, और $y^2$ को $yy_1$ से बदलिए।`,
        t`इसलिए $P$ पर tangent $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ है।`,
        t`इसके लिए $P$ का ellipse पर होना ज़रूरी है: पहले $\frac{x_1^2}{a^2} + \frac{y_1^2}{b^2} = 1$ जाँचिए।`,
        t`$\frac{x^2}{8} + \frac{y^2}{2} = 1$ पर, $(2, 1)$ पर tangent $\frac{2x}{8} + \frac{y}{2} = 1$ है, यानी $x + 2y = 4$।`,
      ],
    },
    {
      title: t`उत्केंद्र कोण (eccentric angle)`,
      points: [
        t`$O$ के चारों ओर त्रिज्या $a$ का वृत्त बनाइए: यह major axis के दोनों सिरों से होकर जाता है।`,
        t`लंबाई $a$ की एक भुजा को $x$-अक्ष से कोण $\theta$ घुमाइए, उस वृत्त पर $Q(a\cos\theta, a\sin\theta)$ तक।`,
        t`$Q$ से सीधे नीचे ellipse तक जाइए: आप $P(a\cos\theta, b\sin\theta)$ पर पहुँचते हैं।`,
        t`यह $\theta$, $P$ का **उत्केंद्र कोण** (eccentric angle) कहलाता है।`,
        t`$P$ हर $\theta$ के लिए ellipse पर है, क्योंकि $\cos^2\theta + \sin^2\theta = 1$।`,
        t`$\theta$, $OQ$ का कोण है, $OP$ का नहीं: $\theta = \frac{\pi}{4}$ पर, $P$, $\left(\frac{a}{\sqrt2}, \frac{b}{\sqrt2}\right)$ है, $y = x$ पर नहीं।`,
      ],
    },
    {
      title: t`कोण θ पर tangent`,
      points: [
        t`$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ में $x_1 = a\cos\theta$ और $y_1 = b\sin\theta$ रखिए।`,
        t`$x$ वाला पद $\frac{x \cdot a\cos\theta}{a^2}$ कटकर $\frac{x\cos\theta}{a}$ बनता है; $y$ वाला पद $\frac{y\sin\theta}{b}$।`,
        t`इसलिए $\theta$ पर tangent $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ है।`,
        t`जोड़ियाँ रखिए: $a$, $x$ और $\cos\theta$ के साथ जाता है, और $b$, $y$ और $\sin\theta$ के साथ।`,
        t`$\theta = \frac{\pi}{4}$ पर $\frac{x^2}{8} + \frac{y^2}{2} = 1$ पर, यह $\frac{x}{4} + \frac{y}{2} = 1$ है, यानी $x + 2y = 4$।`,
      ],
    },
    {
      title: t`स्पर्श होने की शर्त`,
      points: [
        t`Slope $m$ की एक रेखा $y = mx + c$ लीजिए।`,
        t`इसे ellipse में रखिए: $x$ में एक द्विघात मिलता है, जिसके मूल वे $x$ हैं जहाँ वे मिलते हैं।`,
        t`रेखा तब स्पर्श करती है जब दोनों मूल बराबर हों: तब यह ellipse से केवल एक बार मिलती है।`,
        t`यह ठीक तब होता है जब $c^2 = a^2m^2 + b^2$।`,
        t`जोड़ी पर ध्यान दीजिए: $a^2$, $x^2$ के नीचे की संख्या, $m^2$ के साथ जाती है।`,
        t`त्रिज्या $a$ के वृत्त के लिए यह $c^2 = a^2(1 + m^2)$ था: यह केवल $b = a$ की स्थिति है।`,
      ],
    },
    {
      title: t`हर slope के दो tangents`,
      points: [
        t`दोनों पक्षों का वर्गमूल लीजिए: $c = \pm\sqrt{a^2m^2 + b^2}$।`,
        t`इसलिए slope $m$ के tangents $y = mx \pm \sqrt{a^2m^2 + b^2}$ हैं।`,
        t`वे विपरीत ओर स्पर्श करते हैं, एक $c > 0$ के साथ और एक $c < 0$ के साथ: दोनों मूल रखिए।`,
        t`Tangent $y = mx + c$ अपने **point of contact** (स्पर्श बिंदु) $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right)$ पर स्पर्श करता है।`,
        t`$m = -\frac12$ के साथ $\frac{x^2}{8} + \frac{y^2}{2} = 1$ पर: $c^2 = 8 \cdot \frac14 + 2 = 4$, इसलिए $c = \pm 2$।`,
        t`इसलिए tangents $y = -\frac12 x \pm 2$ हैं, जो $(2, 1)$ और $(-2, -1)$ पर स्पर्श करते हैं।`,
      ],
    },
    {
      title: t`किसी रेखा के समांतर या लंब`,
      points: [
        t`याद कीजिए: $Ax + By + C = 0$ का slope $-\frac{A}{B}$ है; इसलिए $x + 2y = 8$ का slope $-\frac12$ है।`,
        t`रेखा के **समांतर** tangent, जो उसके साथ-साथ चलता है, का slope वही है: यहाँ $-\frac12$।`,
        t`इस पर **लंब** tangent, समकोण पर, का slope $\frac{B}{A}$ है: यहाँ $2$।`,
        t`जाँच: लंब slopes का गुणनफल $-1$ होता है, और $-\frac12 \times 2 = -1$।`,
        t`Slope ज्ञात होने पर, $c^2 = a^2m^2 + b^2$ दोनों tangents देता है।`,
      ],
    },
    {
      title: t`बाहर के बिंदु से tangents`,
      points: [
        t`बिंदु $Q(x_0, y_0)$, ellipse के **बाहर** है जब $\frac{x_0^2}{a^2} + \frac{y_0^2}{b^2} > 1$।`,
        t`बिंदु वाला नियम मत लगाइए: $Q$, ellipse पर नहीं है, और $Q(4, 0)$ के लिए यह $x = 2$ देता है, जो इसे काटती है।`,
        t`इसके बजाय, $Q$ से होकर tangent $y = mx + c$ है, जहाँ $y_0 = mx_0 + c$।`,
        t`$c = y_0 - mx_0$ को $c^2 = a^2m^2 + b^2$ में रखिए; इसके दो मूल $m$ दोनों slopes हैं।`,
        t`$Q(4, 0)$ के लिए: $c = -4m$, इसलिए $16m^2 = 8m^2 + 2$ और $m = \pm\frac12$।`,
        t`ऊर्ध्वाधर रेखा $x = x_0$ भी जाँचिए, जिसका कोई slope नहीं: यह केवल $x_0 = \pm a$ पर स्पर्श करती है।`,
      ],
    },
  ],
  worked: {
    prompt: t`दिखाइए कि रेखा $x - y = 5$, ellipse $9x^2 + 16y^2 = 144$ का tangent है, और point of contact ज्ञात कीजिए।`,
    steps: [
      t`$144$ से भाग दीजिए: $\frac{x^2}{16} + \frac{y^2}{9} = 1$, इसलिए $a^2 = 16$ और $b^2 = 9$।`,
      t`रेखा $y = x - 5$ है: $m = 1$, $c = -5$। तब $c^2 = 25$ और $a^2m^2 + b^2 = 16 + 9 = 25$। ये बराबर हैं, इसलिए रेखा tangent है।`,
      t`Point of contact $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right)$ $= \left(\frac{16}{5}, -\frac{9}{5}\right)$ है।`,
      t`जाँच: $\left(\frac{16}{5}, -\frac95\right)$ पर tangent $\frac{x}{16}\cdot\frac{16}{5}$ $+ \frac{y}{9}\cdot\left(-\frac95\right) = 1$ है, यानी $\frac{x}{5} - \frac{y}{5} = 1$, दी गई रेखा $x - y = 5$।`,
    ],
    answer: t`रेखा tangent है; यह $\left(\frac{16}{5}, -\frac{9}{5}\right)$ पर स्पर्श करती है।`,
  },
  remediation: {
    "C09-M1": t`Ellipse एक खिंचा हुआ वृत्त है, और खिंचाव समकोणों को मोड़ देता है: $P$ पर tangent, $OP$ पर लंब नहीं है (vertices को छोड़कर)। $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ और $c^2 = a^2m^2 + b^2$ लगाइए।`,
    "C09-M2": t`$a^2$, $x^2$ के नीचे की संख्या है, इसलिए यह $m^2$ के साथ जाती है: $c^2 = a^2m^2 + b^2$। इसी तरह $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ में $a$, $x$ के साथ जाता है।`,
    "C09-M3": t`$c^2 = a^2m^2 + b^2$ से $c = \pm\sqrt{a^2m^2 + b^2}$ मिलता है: हर slope के दो tangents हैं, ellipse की हर ओर एक।`,
    "C09-M4": t`समांतर रेखाओं के slopes बराबर होते हैं; लंब slopes का गुणनफल $-1$ होता है। $Ax + By + C = 0$ का slope $-\frac{A}{B}$ है, इसलिए उस पर लंब रेखा का slope $\frac{B}{A}$ है।`,
    "C09-M5": t`$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ तभी tangent है जब $(x_1, y_1)$, ellipse पर हो। बाहर के बिंदु से, बिंदु को $c^2 = a^2m^2 + b^2$ के साथ $y = mx + c$ में रखिए और दोनों slopes के लिए हल कीजिए।`,
    "C09-M6": t`उत्केंद्र कोण $\theta$ वाला बिंदु $(a\cos\theta, b\sin\theta)$ है। जब तक $a = b$ न हो, $OP$, $x$-अक्ष से कोण $\theta$ नहीं बनाता: $\theta = \frac{\pi}{4}$ पर बिंदु $\left(\frac{a}{\sqrt2}, \frac{b}{\sqrt2}\right)$ है, $y = x$ पर नहीं।`,
  },
  solutions: {
    "C09-Q1": [
      t`$5x^2 + 9y^2 = 45$, $\frac{x^2}{9} + \frac{y^2}{5} = 1$ है: $a^2 = 9$, $b^2 = 5$।`,
      t`रेखा $y = \frac43 x + \frac{k}{3}$ है: $m = \frac43$, $c = \frac{k}{3}$।`,
      t`यह तब स्पर्श करती है जब $c^2 = a^2m^2 + b^2$: $\frac{k^2}{9} = 9 \cdot \frac{16}{9} + 5 = 21$, इसलिए $k^2 = 189$ और $k = \pm 3\sqrt{21}$।`,
    ],
    "C09-Q2": [
      t`$x^2 + 4y^2 = 9$, $\frac{x^2}{9} + \frac{y^2}{9/4} = 1$ है: $a^2 = 9$, $b^2 = \frac94$। रेखा $2x + 3y - 5 = 0$ का slope $-\frac23$ है, इसलिए समांतर tangent का $m = -\frac23$।`,
      t`$c^2 = a^2m^2 + b^2 = 9 \cdot \frac49 + \frac94 = \frac{25}{4}$, इसलिए $c = \pm\frac52$।`,
      t`$y = -\frac23 x \pm \frac52$; $6$ से गुणा कीजिए: $4x + 6y = \pm 15$।`,
    ],
    "C09-Q3": [
      t`$4x^2 + 9y^2 = 36$, $\frac{x^2}{9} + \frac{y^2}{4} = 1$ है: $a^2 = 9$, $b^2 = 4$। रेखा $3x + 4y = 17$ का slope $-\frac34$ है, इसलिए लंब tangent का $m = \frac43$।`,
      t`$c^2 = a^2m^2 + b^2 = 9 \cdot \frac{16}{9} + 4 = 20$, इसलिए $c = \pm 2\sqrt5$।`,
      t`$c = 2\sqrt5$ लीजिए: $y = \frac43 x + 2\sqrt5$; $3$ से गुणा कीजिए: $3y = 4x + 6\sqrt5$। (दूसरी $3y = 4x - 6\sqrt5$ है।)`,
    ],
    "C09-Q4": [
      t`यहाँ $a = 5$, $b = 3$, $\theta = \frac{\pi}{4}$। बिंदु $P(a\cos\theta, b\sin\theta) = \left(\frac{5}{\sqrt2}, \frac{3}{\sqrt2}\right)$ है।`,
      t`$\theta$ पर tangent $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ है: $\frac{x}{5\sqrt2} + \frac{y}{3\sqrt2} = 1$।`,
      t`$15\sqrt2$ से गुणा कीजिए: $3x + 5y = 15\sqrt2$।`,
    ],
    "C09-Q5": [
      t`$a^2 = 5$, $b^2 = 4$। बिंदु $(2, -2)$ से $\frac45 + 1 > 1$ मिलता है: यह बाहर है, इसलिए यह point of contact नहीं है। इससे होकर tangent $y + 2 = m(x - 2)$ है, जहाँ $c = -2 - 2m$।`,
      t`यह तब स्पर्श करती है जब $c^2 = a^2m^2 + b^2$: $(2 + 2m)^2 = 5m^2 + 4$, इसलिए $m^2 - 8m = 0$ और $m = 0$ या $m = 8$।`,
      t`$m = 0$: $y = -2$। $m = 8$: $y + 2 = 8(x - 2)$, यानी $8x - y = 18$।`,
    ],
    "C09-Q6": [
      t`$x^2 + 4y^2 = 20$, $\frac{x^2}{20} + \frac{y^2}{5} = 1$ है: $a^2 = 20$, $b^2 = 5$। रेखा $4x + 3y = 7$ का slope $-\frac43$ है, इसलिए tangents का $m = \frac34$।`,
      t`$c^2 = a^2m^2 + b^2 = 20 \cdot \frac{9}{16} + 5 = \frac{65}{4}$, इसलिए $c = \pm\frac{\sqrt{65}}{2}$।`,
      t`$y = \frac34 x \pm \frac{\sqrt{65}}{2}$; $4$ से गुणा कीजिए: $4y = 3x \pm 2\sqrt{65}$।`,
    ],
  },
};
