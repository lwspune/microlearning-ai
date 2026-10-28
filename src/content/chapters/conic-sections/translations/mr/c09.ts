import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "mr",
  status: "approved",
  source: "1c1dfd516cd54f",
  hook: {
    prompt: t`वर्तुळावर, $P$ वरील tangent ही $OP$ ला लंब असते. Ellipse $\frac{x^2}{8} + \frac{y^2}{2} = 1$ आणि त्यावरील बिंदू $P(2, 1)$ घ्या. **$P$ वरील tangent ही $OP$ ला लंब आहे का?**`,
    reveal: t`नाही. $P$ वरील tangent $\frac{2x}{8} + \frac{y}{2} = 1$ आहे, म्हणजे $x + 2y = 4$, slope $-\frac12$ सह. $OP$ चा slope $\frac12$ आहे. गुणाकार $-\frac14$ आहे, $-1$ नाही. Ellipse म्हणजे ताणलेले वर्तुळ: ताण tangent ला tangent च ठेवतो, पण काटकोन ठेवत नाही.`,
  },
  intuition: [
    t`Ellipse, जसे $\frac{x^2}{8} + \frac{y^2}{2} = 1$, म्हणजे एका अक्षाच्या दिशेने ताणलेले वर्तुळ.`,
    t`Slope $-\frac12$ च्या रेषा त्याच्याकडे सरकवा: दूर असताना, रेषा ellipse ला **चुकते**.`,
    t`जवळ आल्यावर, ती त्याला एका बिंदूत, $P(2, 1)$, **स्पर्श** करते: **tangent** (स्पर्शिका) म्हणजे अशी नुसता स्पर्श करणारी रेषा.`,
    t`आणखी जवळ आल्यावर, ती ellipse ला दोन बिंदूंत **छेदते**.`,
    t`सरकवत राहा, तर ती दुसऱ्या बाजूला पुन्हा स्पर्श करते: प्रत्येक slope दोन tangents देतो.`,
    t`ताण tangents ला tangents च ठेवतो पण काटकोन वाकवतो: $P$ वरील tangent ही $OP$ शी काटकोनात नाही.`,
  ],
  formal: [
    {
      title: t`बिंदूवरील tangent`,
      points: [
        t`Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ वरील एक बिंदू $P(x_1, y_1)$ घ्या.`,
        t`वर्तुळाचा नियम आठवा: $x^2$ च्या जागी $xx_1$, आणि $y^2$ च्या जागी $yy_1$ ठेवा.`,
        t`म्हणून $P$ वरील tangent $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ आहे.`,
        t`यासाठी $P$ ellipse वर असणे आवश्यक आहे: आधी $\frac{x_1^2}{a^2} + \frac{y_1^2}{b^2} = 1$ तपासा.`,
        t`$\frac{x^2}{8} + \frac{y^2}{2} = 1$ वर, $(2, 1)$ वरील tangent $\frac{2x}{8} + \frac{y}{2} = 1$ आहे, म्हणजे $x + 2y = 4$.`,
      ],
    },
    {
      title: t`उत्केंद्री कोन (eccentric angle)`,
      points: [
        t`$O$ भोवती त्रिज्या $a$ चे वर्तुळ काढा: ते major axis च्या दोन्ही टोकांमधून जाते.`,
        t`लांबी $a$ ची एक भुजा $x$-अक्षापासून कोन $\theta$ ने फिरवा, त्या वर्तुळावरील $Q(a\cos\theta, a\sin\theta)$ पर्यंत.`,
        t`$Q$ पासून सरळ खाली ellipse पर्यंत जा: तुम्ही $P(a\cos\theta, b\sin\theta)$ वर पोहोचता.`,
        t`या $\theta$ ला $P$ चा **उत्केंद्री कोन** (eccentric angle) म्हणतात.`,
        t`$P$ प्रत्येक $\theta$ साठी ellipse वर आहे, कारण $\cos^2\theta + \sin^2\theta = 1$.`,
        t`$\theta$ हा $OQ$ चा कोन आहे, $OP$ चा नव्हे: $\theta = \frac{\pi}{4}$ ला, $P$ हा $\left(\frac{a}{\sqrt2}, \frac{b}{\sqrt2}\right)$ आहे, $y = x$ वर नाही.`,
      ],
    },
    {
      title: t`कोन θ वरील tangent`,
      points: [
        t`$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ मध्ये $x_1 = a\cos\theta$ आणि $y_1 = b\sin\theta$ ठेवा.`,
        t`$x$ चे पद $\frac{x \cdot a\cos\theta}{a^2}$ रद्द होऊन $\frac{x\cos\theta}{a}$ होते; $y$ चे पद $\frac{y\sin\theta}{b}$.`,
        t`म्हणून $\theta$ वरील tangent $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ आहे.`,
        t`जोड्या ठेवा: $a$ हा $x$ आणि $\cos\theta$ सोबत जातो, आणि $b$ हा $y$ आणि $\sin\theta$ सोबत.`,
        t`$\theta = \frac{\pi}{4}$ ला $\frac{x^2}{8} + \frac{y^2}{2} = 1$ वर, ती $\frac{x}{4} + \frac{y}{2} = 1$ आहे, म्हणजे $x + 2y = 4$.`,
      ],
    },
    {
      title: t`स्पर्श होण्याची अट`,
      points: [
        t`Slope $m$ ची एक रेषा $y = mx + c$ घ्या.`,
        t`ती ellipse मध्ये ठेवा: $x$ मधील एक वर्गसमीकरण मिळते, ज्याची मुळे म्हणजे ते जिथे भेटतात ते $x$.`,
        t`दोन्ही मुळे समान असताना रेषा स्पर्श करते: मग ती ellipse ला फक्त एकदा भेटते.`,
        t`हे नेमके तेव्हा होते जेव्हा $c^2 = a^2m^2 + b^2$.`,
        t`जोडीकडे लक्ष द्या: $a^2$, $x^2$ खालची संख्या, $m^2$ सोबत जाते.`,
        t`त्रिज्या $a$ च्या वर्तुळासाठी ती $c^2 = a^2(1 + m^2)$ होती: ती फक्त $b = a$ ची स्थिती आहे.`,
      ],
    },
    {
      title: t`प्रत्येक slope च्या दोन tangents`,
      points: [
        t`दोन्ही बाजूंचे वर्गमूळ घ्या: $c = \pm\sqrt{a^2m^2 + b^2}$.`,
        t`म्हणून slope $m$ च्या tangents $y = mx \pm \sqrt{a^2m^2 + b^2}$ आहेत.`,
        t`त्या विरुद्ध बाजूंना स्पर्श करतात, एक $c > 0$ सह आणि एक $c < 0$ सह: दोन्ही मुळे ठेवा.`,
        t`Tangent $y = mx + c$ तिच्या **point of contact** (स्पर्शबिंदू) $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right)$ वर स्पर्श करते.`,
        t`$m = -\frac12$ सह $\frac{x^2}{8} + \frac{y^2}{2} = 1$ वर: $c^2 = 8 \cdot \frac14 + 2 = 4$, म्हणून $c = \pm 2$.`,
        t`म्हणून tangents $y = -\frac12 x \pm 2$ आहेत, ज्या $(2, 1)$ आणि $(-2, -1)$ वर स्पर्श करतात.`,
      ],
    },
    {
      title: t`रेषेला समांतर किंवा लंब`,
      points: [
        t`आठवा: $Ax + By + C = 0$ चा slope $-\frac{A}{B}$ आहे; म्हणून $x + 2y = 8$ चा slope $-\frac12$ आहे.`,
        t`रेषेला **समांतर** tangent, जी तिच्या बाजूने जाते, तिचा slope तोच आहे: इथे $-\frac12$.`,
        t`तिला **लंब** tangent, काटकोनात, तिचा slope $\frac{B}{A}$ आहे: इथे $2$.`,
        t`तपासणी: लंब slopes चा गुणाकार $-1$ असतो, आणि $-\frac12 \times 2 = -1$.`,
        t`Slope माहीत असल्यावर, $c^2 = a^2m^2 + b^2$ दोन्ही tangents देते.`,
      ],
    },
    {
      title: t`बाहेरच्या बिंदूपासून tangents`,
      points: [
        t`बिंदू $Q(x_0, y_0)$ ellipse च्या **बाहेर** असतो जेव्हा $\frac{x_0^2}{a^2} + \frac{y_0^2}{b^2} > 1$.`,
        t`बिंदूचा नियम वापरू नका: $Q$ ellipse वर नाही, आणि $Q(4, 0)$ साठी तो $x = 2$ देतो, जी त्याला छेदते.`,
        t`त्याऐवजी, $Q$ मधून जाणारी tangent $y = mx + c$ आहे, जिथे $y_0 = mx_0 + c$.`,
        t`$c = y_0 - mx_0$ हे $c^2 = a^2m^2 + b^2$ मध्ये ठेवा; त्याची दोन मुळे $m$ म्हणजे दोन slopes.`,
        t`$Q(4, 0)$ साठी: $c = -4m$, म्हणून $16m^2 = 8m^2 + 2$ आणि $m = \pm\frac12$.`,
        t`उभी रेषा $x = x_0$ सुद्धा तपासा, जिला slope नाही: ती फक्त $x_0 = \pm a$ असताना स्पर्श करते.`,
      ],
    },
  ],
  worked: {
    prompt: t`रेषा $x - y = 5$ ही ellipse $9x^2 + 16y^2 = 144$ ची tangent आहे हे दाखवा, आणि point of contact शोधा.`,
    steps: [
      t`$144$ ने भागा: $\frac{x^2}{16} + \frac{y^2}{9} = 1$, म्हणून $a^2 = 16$ आणि $b^2 = 9$.`,
      t`रेषा $y = x - 5$ आहे: $m = 1$, $c = -5$. मग $c^2 = 25$ आणि $a^2m^2 + b^2 = 16 + 9 = 25$. ते समान आहेत, म्हणून रेषा tangent आहे.`,
      t`Point of contact $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right)$ $= \left(\frac{16}{5}, -\frac{9}{5}\right)$ आहे.`,
      t`तपासणी: $\left(\frac{16}{5}, -\frac95\right)$ वरील tangent $\frac{x}{16}\cdot\frac{16}{5}$ $+ \frac{y}{9}\cdot\left(-\frac95\right) = 1$ आहे, म्हणजे $\frac{x}{5} - \frac{y}{5} = 1$, दिलेली रेषा $x - y = 5$.`,
    ],
    answer: t`रेषा tangent आहे; ती $\left(\frac{16}{5}, -\frac{9}{5}\right)$ वर स्पर्श करते.`,
  },
  remediation: {
    "C09-M1": t`Ellipse म्हणजे ताणलेले वर्तुळ, आणि ताण काटकोन वाकवतो: $P$ वरील tangent ही $OP$ ला लंब नसते (vertices सोडून). $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ आणि $c^2 = a^2m^2 + b^2$ वापरा.`,
    "C09-M2": t`$a^2$ म्हणजे $x^2$ खालची संख्या, म्हणून ती $m^2$ सोबत जाते: $c^2 = a^2m^2 + b^2$. तसेच $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ मध्ये $a$ हा $x$ सोबत जातो.`,
    "C09-M3": t`$c^2 = a^2m^2 + b^2$ वरून $c = \pm\sqrt{a^2m^2 + b^2}$ मिळते: प्रत्येक slope च्या दोन tangents आहेत, ellipse च्या प्रत्येक बाजूला एक.`,
    "C09-M4": t`समांतर रेषांचे slopes समान असतात; लंब slopes चा गुणाकार $-1$ असतो. $Ax + By + C = 0$ चा slope $-\frac{A}{B}$ आहे, म्हणून तिला लंब रेषेचा slope $\frac{B}{A}$ आहे.`,
    "C09-M5": t`$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ ही तेव्हाच tangent असते जेव्हा $(x_1, y_1)$ ellipse वर असतो. बाहेरच्या बिंदूपासून, बिंदू $c^2 = a^2m^2 + b^2$ सह $y = mx + c$ मध्ये ठेवा आणि दोन slopes साठी सोडवा.`,
    "C09-M6": t`उत्केंद्री कोन $\theta$ असलेला बिंदू $(a\cos\theta, b\sin\theta)$ आहे. $a = b$ नसेल तर, $OP$ हा $x$-अक्षाशी कोन $\theta$ करत नाही: $\theta = \frac{\pi}{4}$ ला बिंदू $\left(\frac{a}{\sqrt2}, \frac{b}{\sqrt2}\right)$ आहे, $y = x$ वर नाही.`,
  },
  solutions: {
    "C09-Q1": [
      t`$5x^2 + 9y^2 = 45$ म्हणजे $\frac{x^2}{9} + \frac{y^2}{5} = 1$: $a^2 = 9$, $b^2 = 5$.`,
      t`रेषा $y = \frac43 x + \frac{k}{3}$ आहे: $m = \frac43$, $c = \frac{k}{3}$.`,
      t`ती तेव्हा स्पर्श करते जेव्हा $c^2 = a^2m^2 + b^2$: $\frac{k^2}{9} = 9 \cdot \frac{16}{9} + 5 = 21$, म्हणून $k^2 = 189$ आणि $k = \pm 3\sqrt{21}$.`,
    ],
    "C09-Q2": [
      t`$x^2 + 4y^2 = 9$ म्हणजे $\frac{x^2}{9} + \frac{y^2}{9/4} = 1$: $a^2 = 9$, $b^2 = \frac94$. रेषा $2x + 3y - 5 = 0$ चा slope $-\frac23$ आहे, म्हणून समांतर tangent चा $m = -\frac23$.`,
      t`$c^2 = a^2m^2 + b^2 = 9 \cdot \frac49 + \frac94 = \frac{25}{4}$, म्हणून $c = \pm\frac52$.`,
      t`$y = -\frac23 x \pm \frac52$; $6$ ने गुणा: $4x + 6y = \pm 15$.`,
    ],
    "C09-Q3": [
      t`$4x^2 + 9y^2 = 36$ म्हणजे $\frac{x^2}{9} + \frac{y^2}{4} = 1$: $a^2 = 9$, $b^2 = 4$. रेषा $3x + 4y = 17$ चा slope $-\frac34$ आहे, म्हणून लंब tangent चा $m = \frac43$.`,
      t`$c^2 = a^2m^2 + b^2 = 9 \cdot \frac{16}{9} + 4 = 20$, म्हणून $c = \pm 2\sqrt5$.`,
      t`$c = 2\sqrt5$ घ्या: $y = \frac43 x + 2\sqrt5$; $3$ ने गुणा: $3y = 4x + 6\sqrt5$. (दुसरी $3y = 4x - 6\sqrt5$ आहे.)`,
    ],
    "C09-Q4": [
      t`इथे $a = 5$, $b = 3$, $\theta = \frac{\pi}{4}$. बिंदू $P(a\cos\theta, b\sin\theta) = \left(\frac{5}{\sqrt2}, \frac{3}{\sqrt2}\right)$ आहे.`,
      t`$\theta$ वरील tangent $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ आहे: $\frac{x}{5\sqrt2} + \frac{y}{3\sqrt2} = 1$.`,
      t`$15\sqrt2$ ने गुणा: $3x + 5y = 15\sqrt2$.`,
    ],
    "C09-Q5": [
      t`$a^2 = 5$, $b^2 = 4$. बिंदू $(2, -2)$ वरून $\frac45 + 1 > 1$ मिळते: तो बाहेर आहे, म्हणून तो point of contact नाही. त्यातून जाणारी tangent $y + 2 = m(x - 2)$ आहे, जिथे $c = -2 - 2m$.`,
      t`ती तेव्हा स्पर्श करते जेव्हा $c^2 = a^2m^2 + b^2$: $(2 + 2m)^2 = 5m^2 + 4$, म्हणून $m^2 - 8m = 0$ आणि $m = 0$ किंवा $m = 8$.`,
      t`$m = 0$: $y = -2$. $m = 8$: $y + 2 = 8(x - 2)$, म्हणजे $8x - y = 18$.`,
    ],
    "C09-Q6": [
      t`$x^2 + 4y^2 = 20$ म्हणजे $\frac{x^2}{20} + \frac{y^2}{5} = 1$: $a^2 = 20$, $b^2 = 5$. रेषा $4x + 3y = 7$ चा slope $-\frac43$ आहे, म्हणून tangents चा $m = \frac34$.`,
      t`$c^2 = a^2m^2 + b^2 = 20 \cdot \frac{9}{16} + 5 = \frac{65}{4}$, म्हणून $c = \pm\frac{\sqrt{65}}{2}$.`,
      t`$y = \frac34 x \pm \frac{\sqrt{65}}{2}$; $4$ ने गुणा: $4y = 3x \pm 2\sqrt{65}$.`,
    ],
  },
};
