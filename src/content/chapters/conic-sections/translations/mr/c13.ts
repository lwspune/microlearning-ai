import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c13: ConceptTranslation = {
  id: "C13",
  lang: "mr",
  status: "approved",
  source: "05e5399f910d80",
  hook: {
    prompt: t`वर्तुळासाठी, प्रत्येक slope च्या दोन tangents असतात. **Hyperbola $\dfrac{x^2}{4} - y^2 = 1$ ला slope $\dfrac14$ असलेली tangent आहे का?**`,
    reveal: t`नाही. रेषा $y = \frac14 x + c$ तेव्हाच स्पर्श करते जेव्हा $c^2 = a^2m^2 - b^2 = 4 \cdot \frac{1}{16} - 1 = -\frac34$, आणि कोणताही वास्तव $c$ असे करत नाही. Slope $\frac14$ ची प्रत्येक रेषा hyperbola ला छेदते, प्रत्येक शाखेवर एकदा. Tangent ही $\frac{b}{a} = \frac12$ पेक्षा जास्त तीव्र असली पाहिजे.`,
  },
  intuition: [
    t`आठवा: **tangent** (स्पर्शिका) म्हणजे वक्राला एका बिंदूत, त्याला न ओलांडता, स्पर्श करणारी रेषा.`,
    t`रेषा $y = mx + c$ ही $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ मध्ये ठेवा: $x$ मधील एक वर्गसमीकरण, ज्याची मुळे म्हणजे ते जिथे भेटतात त्या जागा.`,
    t`दोन्ही मुळे समान असताना रेषा tangent असते: एक भेटबिंदू, दोनदा मोजलेला.`,
    t`हे नेमके तेव्हा होते जेव्हा $c^2 = a^2m^2 - b^2$: hyperbola चे वजा चिन्ह कायम राहते.`,
    t`$\frac{x^2}{9} - \frac{y^2}{5} = 1$ आणि slope $1$ साठी: $c^2 = 9 - 5 = 4$, म्हणून tangents $y = x \pm 2$ आहेत.`,
    t`जर $a^2m^2 < b^2$, तर slope $m$ ची कोणतीही रेषा स्पर्श करत नाही: इथे slope $-\frac12$ अपयशी ठरतो, कारण $\frac94 < 5$.`,
  ],
  formal: [
    {
      title: t`आधी a² आणि b² वाचा`,
      points: [
        t`Tangent सूत्रांना **प्रमाणित रूप** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ हवे, उजवीकडे $1$ सह.`,
        t`म्हणून $16x^2 - 25y^2 = 400$ घ्या, आणि दोन्ही बाजूंना स्थिरांक $400$ ने भागा.`,
        t`त्यावरून $\frac{x^2}{25} - \frac{y^2}{16} = 1$ मिळते.`,
        t`म्हणून $a^2 = 25$ आणि $b^2 = 16$, सहगुणक $16$ आणि $25$ नव्हे.`,
      ],
    },
    {
      title: t`बिंदूवरील tangent`,
      points: [
        t`Hyperbola वरील एक बिंदू $P(x_1, y_1)$ घ्या: नियमासाठी $P$ वक्रावर असणे आवश्यक आहे.`,
        t`$x^2$ च्या जागी $xx_1$, आणि $y^2$ च्या जागी $yy_1$ ठेवा.`,
        t`वजा चिन्ह ठेवा, आणि उजवीकडचा $1$ सुद्धा.`,
        t`$P$ वरील tangent $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ आहे.`,
        t`$\frac{x^2}{16} - \frac{y^2}{9} = 1$ वर $\left(5, \frac94\right)$ ला: $\frac{5x}{16} - \frac{y}{4} = 1$, म्हणजे $5x - 4y = 16$.`,
      ],
    },
    {
      title: t`बिंदू θ वरील tangent`,
      points: [
        t`**Auxiliary circle** (सहाय्यक वर्तुळ) $x^2 + y^2 = a^2$ म्हणजे $O$ वर centre असलेले, दोन्ही vertices मधून जाणारे वर्तुळ.`,
        t`एक भुजा $x$-अक्षापासून कोन $\theta$ फिरून या वर्तुळावरील बिंदू $Q$ पर्यंत पोहोचते.`,
        t`$Q$ वरील वर्तुळाची tangent $x$-अक्षाला $N(a\sec\theta, 0)$ मध्ये भेटते.`,
        t`$N$ च्या थेट वर $P(a\sec\theta, b\tan\theta)$ आहे, लघुकोन $\theta$ साठी: $\theta$ हा $P$ चा **उत्केंद्री कोन** आहे.`,
        t`$P$ हा hyperbola वर आहे, कारण $\sec^2\theta - \tan^2\theta = 1$.`,
        t`$x_1 = a\sec\theta$ आणि $y_1 = b\tan\theta$ ठेवा: tangent $\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1$ आहे.`,
      ],
    },
    {
      title: t`Slope m असलेल्या tangents`,
      points: [
        t`Slope $m$ ची रेषा $y = mx + c$ hyperbola ला नेमकी तेव्हा स्पर्श करते जेव्हा $c^2 = a^2m^2 - b^2$.`,
        t`दोन्ही प्रकारे वर्गमूळ घ्या: $c = \pm\sqrt{a^2m^2 - b^2}$.`,
        t`म्हणून slope $m$ च्या tangents $y = mx \pm \sqrt{a^2m^2 - b^2}$ आहेत.`,
        t`त्या दोन आहेत, प्रत्येक एका शाखेला स्पर्श करते.`,
        t`जर $a^2m^2 < b^2$, तर वर्गमूळ वास्तव नाही: कोणत्याही tangent चा slope $m$ नाही.`,
      ],
    },
    {
      title: t`Point of contact (स्पर्शबिंदू)`,
      points: [
        t`**Point of contact** म्हणजे tangent वक्राला जिथे स्पर्श करते तो एकमेव बिंदू.`,
        t`Tangent $y = mx + c$ ही $\left(-\frac{a^2m}{c}, -\frac{b^2}{c}\right)$ वर स्पर्श करते.`,
        t`रेषा $y = mx + c$ अशी लिहिल्यानंतरच $m$ आणि $c$ वाचा.`,
        t`उदाहरणार्थ, $5x - 4y = 16$ म्हणजे $y = \frac54 x - 4$: म्हणून $m = \frac54$ आणि $c = -4$.`,
        t`$\frac{x^2}{16} - \frac{y^2}{9} = 1$ वर ती $\left(\frac{-20}{-4}, \frac{-9}{-4}\right)$ वर स्पर्श करते, म्हणजे $\left(5, \frac94\right)$.`,
      ],
    },
  ],
  worked: {
    prompt: t`रेषा $4x - 3y = 16$ ही hyperbola $16x^2 - 25y^2 = 400$ ला स्पर्श करते हे दाखवा, आणि point of contact शोधा.`,
    steps: [
      t`$400$ ने भागा: $\dfrac{x^2}{25} - \dfrac{y^2}{16} = 1$, म्हणून $a^2 = 25$, $b^2 = 16$.`,
      t`रेषा $y = \frac43 x - \frac{16}{3}$ अशी लिहा: $m = \frac43$, $c = -\frac{16}{3}$.`,
      t`$a^2m^2 - b^2$ $= 25 \cdot \frac{16}{9} - 16$ $= \frac{256}{9}$, आणि $c^2 = \frac{256}{9}$. ते समान आहेत, म्हणून रेषा tangent आहे.`,
      t`Point of contact: $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$, जिथे $x = \dfrac{-25 \cdot \frac43}{-\frac{16}{3}}$ $= \dfrac{25}{4}$ आणि $y = \dfrac{-16}{-\frac{16}{3}}$ $= 3$: बिंदू $\left(\dfrac{25}{4}, 3\right)$. तपासणी: $16 \cdot \frac{625}{16} - 25 \cdot 9$ $= 625 - 225 = 400$.`,
    ],
    answer: t`रेषा tangent आहे; ती $\left(\frac{25}{4}, 3\right)$ वर स्पर्श करते.`,
  },
  remediation: {
    "C13-M1": t`Hyperbola चे वजा चिन्ह प्रत्येक tangent सूत्रात येते: $\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1$, $c^2 = a^2m^2 - b^2$, आणि point of contact $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$.`,
    "C13-M2": t`आधी स्थिरांकाने भागा: $3x^2 - 2y^2 = 6$ म्हणजे $\dfrac{x^2}{2} - \dfrac{y^2}{3} = 1$, म्हणून $a^2 = 2$ आणि $b^2 = 3$. सामान्यतः $a^2 = \dfrac{C}{A}$ आणि $b^2 = \dfrac{C}{B}$.`,
    "C13-M3": t`Tangent ही $OP$ ला लंब फक्त वर्तुळावरच असते. Hyperbola वर $P(x_1, y_1)$ ला $\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1$ वापरा, आणि $y = mx + c$ जिथे स्पर्श करते त्या बिंदूसाठी $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$.`,
    "C13-M4": t`$c$ वाचण्याआधी $y$ साठी सोडवा: $3x - 2y = 8$ वरून $y = \frac32 x - 4$, म्हणून $m = \frac32$ आणि $c = -4$.`,
    "C13-M5": t`$c^2 = a^2m^2 - b^2$ वरून $c = \pm\sqrt{a^2m^2 - b^2}$ मिळते. प्रत्येक slope च्या दोन tangents आहेत, प्रत्येक शाखेवर एक, म्हणून दोन रेषा आणि $k$ च्या दोन किमती.`,
    "C13-M6": t`Hyperbola वर बिंदू $(a\sec\theta, b\tan\theta)$ आहे, कारण $\sec^2\theta - \tan^2\theta = 1$. तिथली tangent $\dfrac{x\sec\theta}{a} - \dfrac{y\tan\theta}{b} = 1$ आहे.`,
  },
  solutions: {
    "C13-Q1": [
      t`$12$ ने भागा: $\dfrac{x^2}{4} - \dfrac{y^2}{3} = 1$, म्हणून $a^2 = 4$, $b^2 = 3$.`,
      t`$(4, 3)$ त्यावर आहे: $\frac{16}{4} - \frac{9}{3} = 1$. तिथली tangent $\dfrac{4x}{4} - \dfrac{3y}{3} = 1$ आहे.`,
      t`म्हणून tangent $x - y = 1$ आहे.`,
    ],
    "C13-Q2": [
      t`$a = 12$, $b = 5$. उत्केंद्री कोन $\theta$ असलेला बिंदू $(a\sec\theta, b\tan\theta)$ आहे.`,
      t`$\sec\frac{\pi}{3} = 2$, $\tan\frac{\pi}{3} = \sqrt3$, म्हणून $P = (24, 5\sqrt3)$.`,
      t`Tangent: $\dfrac{24x}{144} - \dfrac{5\sqrt3\,y}{25} = 1$, म्हणजे $\dfrac{x}{6} - \dfrac{\sqrt3\,y}{5} = 1$.`,
      t`$30$ ने गुणा: $5x - 6\sqrt3\,y = 30$.`,
    ],
    "C13-Q3": [
      t`$20$ ने भागा: $\dfrac{x^2}{4} - \dfrac{y^2}{5} = 1$, म्हणून $a^2 = 4$, $b^2 = 5$. रेषा $3x + 2y + 12 = 0$ चा slope $-\frac32$ आहे, आणि tangents चाही.`,
      t`$c^2 = a^2m^2 - b^2 = 4 \cdot \frac94 - 5 = 4$, म्हणून $c = \pm 2$.`,
      t`$y = -\frac32 x \pm 2$; $2$ ने गुणा: $3x + 2y = \pm 4$.`,
    ],
    "C13-Q4": [
      t`$48$ ने भागा: $\dfrac{x^2}{16} - \dfrac{y^2}{48} = 1$, म्हणून $a^2 = 16$, $b^2 = 48$. रेषा $x + 2y - 7 = 0$ चा slope $-\frac12$ आहे, म्हणून tangents चा slope $2$ आहे.`,
      t`$c^2 = a^2m^2 - b^2 = 16 \cdot 4 - 48 = 16$, म्हणून $c = \pm 4$.`,
      t`Tangents $y = 2x + 4$ आणि $y = 2x - 4$ आहेत, म्हणजे $y = 2x \pm 4$.`,
    ],
    "C13-Q5": [
      t`Hyperbola $\dfrac{x^2}{5} - \dfrac{y^2}{5/4} = 1$ आहे: $a^2 = 5$, $b^2 = \frac54$. रेषा $y = \frac34 x - \frac{k}{4}$ आहे: $m = \frac34$, $c = -\frac{k}{4}$.`,
      t`$c^2 = a^2m^2 - b^2$: $\dfrac{k^2}{16} = 5 \cdot \dfrac{9}{16} - \dfrac54 = \dfrac{25}{16}$.`,
      t`$k^2 = 25$, म्हणून $k = \pm 5$: रेषा $3x - 4y = 5$ आणि $3x - 4y = -5$ दोन्ही स्पर्श करतात.`,
    ],
    "C13-Q6": [
      t`$24$ ने भागा: $\dfrac{x^2}{6} - \dfrac{y^2}{8} = 1$, म्हणून $a^2 = 6$, $b^2 = 8$.`,
      t`रेषा $y = 2x - 4$ आहे: $m = 2$, $c = -4$. तपासणी: $a^2m^2 - b^2 = 24 - 8 = 16 = c^2$, म्हणून ती स्पर्श करते.`,
      t`Point of contact: $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right) = \left(\dfrac{-12}{-4}, \dfrac{-8}{-4}\right) = (3, 2)$ आहे.`,
    ],
  },
};
