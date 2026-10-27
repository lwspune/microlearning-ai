import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "mr",
  status: "approved",
  source: "0bfb66867e00da",
  hook: {
    prompt: t`$A(4, 12)$, $B(2, 2)$, $C(22, 2)$ असलेल्या $\triangle ABC$ मध्ये, $A$ पासूनची median आणि $A$ पासूनचा altitude दोन्ही $A$ पासून खाली बाजू $BC$ पर्यंत जातात. **त्या एकच रेषा आहेत का?**`,
    reveal: t`नाही. Median $BC$ च्या मध्यबिंदूवर, $D(12, 2)$ वर, संपते. Altitude $BC$ ला काटकोनात भेटतो: $BC$ आडवी आहे, म्हणून altitude ही उभी रेषा $x = 4$ आहे, जी $(4, 2)$ वर पोहोचते. त्या तेव्हाच एक होतात जेव्हा $AB = AC$.`,
  },
  intuition: [
    t`$\triangle ABC$ मध्ये, प्रत्येक कोपरा एक **vertex** (शिरोबिंदू) आहे, आणि शिरोबिंदूसमोरची बाजू म्हणजे त्याची **समोरची बाजू**.`,
    t`त्रिकोणाची प्रत्येक विशेष रेषा एक बिंदू आणि एक दिशा, किंवा दोन बिंदू, यांनी ठरते.`,
    t`**Median** (मध्यगा) शिरोबिंदूला समोरच्या बाजूच्या **मध्यबिंदूशी**, म्हणजे तिच्या बरोबर अर्ध्यावरच्या बिंदूशी, जोडते.`,
    t`**Altitude** (शिरोलंब) शिरोबिंदूपासून समोरच्या बाजूपर्यंत जातो, तिला काटकोनात भेटत.`,
    t`बाजूचा **perpendicular bisector** (लंबदुभाजक) तिच्या मध्यबिंदूतून, बाजूशी काटकोनात जातो.`,
    t`दोन altitudes **orthocentre** (लंबसंपात) मध्ये भेटतात; दोन perpendicular bisectors **circumcentre** (परिकेंद्र) मध्ये भेटतात.`,
  ],
  formal: [
    {
      title: t`बिंदूतून जाणारी parallel`,
      points: [
        t`एक बिंदू $P(x_1, y_1)$ आणि slope $m$ असलेली एक दिलेली रेषा घ्या.`,
        t`आठवा: parallel (समांतर) रेषांचे slopes समान असतात.`,
        t`म्हणून $P$ मधून जाणाऱ्या parallel चा slope तोच $m$ आहे: इथे $\frac{1}{2}$.`,
        t`Point–slope form नुसार, ती $y - y_1 = m(x - x_1)$ आहे.`,
      ],
    },
    {
      title: t`बिंदूतून जाणारा perpendicular`,
      points: [
        t`आठवा: दोन रेषा perpendicular (लंब) असतात जेव्हा त्यांच्या slopes चा गुणाकार $-1$ असतो.`,
        t`म्हणून slope $m$ असलेल्या रेषेला perpendicular चा slope $-\frac{1}{m}$ आहे, $m$ चा **ऋण व्यस्त**.`,
        t`तो मिळवण्यासाठी, $m$ उलटा करा आणि त्याचे चिन्ह बदला: $\frac{1}{2}$ चे $-2$ होते.`,
        t`$P(x_1, y_1)$ मधून, perpendicular $y - y_1 = -\frac{1}{m}(x - x_1)$ आहे.`,
      ],
    },
    {
      title: t`उभ्या आणि आडव्या रेषा`,
      points: [
        t`उभ्या रेषेला slope नाही, म्हणून तिच्यासाठी $-\frac{1}{m}$ वापरता येत नाही.`,
        t`उभ्या रेषेला perpendicular आडवा असतो: $P(x_1, y_1)$ मधून, तो $y = y_1$ आहे.`,
        t`आडव्या रेषेचा slope $0$ आहे, आणि $-\frac{1}{0}$ सुद्धा व्याख्यित नाही.`,
        t`आडव्या रेषेला perpendicular उभा असतो: $P(x_1, y_1)$ मधून, तो $x = x_1$ आहे.`,
      ],
    },
    {
      title: t`Foot of the perpendicular (लंबपाद)`,
      points: [
        t`एक रेषा आणि तिच्यावर नसलेला एक बिंदू $P$ घ्या.`,
        t`$P$ पासूनचा perpendicular रेषेला $F$ मध्ये भेटतो, जो **foot of the perpendicular** आहे.`,
        t`$F$ शोधण्यासाठी, आधी $P$ मधून perpendicular लिहा: त्याचा slope $-\frac{1}{m}$ आहे.`,
        t`मग तो रेषेच्या समीकरणासोबत सोडवा: त्यांची सामाईक उकल म्हणजे $F$.`,
      ],
    },
    {
      title: t`शिरोबिंदू A पासूनच्या रेषा`,
      points: [
        t`समजा $D$ हा $BC$ चा मध्यबिंदू आहे, आणि $m_{BC}$ हा $BC$ चा slope.`,
        t`Median $AD$ ही $A$ आणि $D$ मधून जाते: two-point form वापरा.`,
        t`$A$ पासूनचा altitude $A$ मधून जातो, slope $-\frac{1}{m_{BC}}$ सह.`,
        t`$BC$ चा perpendicular bisector $D$ मधून जातो, त्याच slope $-\frac{1}{m_{BC}}$ सह.`,
        t`म्हणून altitude आणि perpendicular bisector parallel आहेत.`,
        t`तिन्ही एकच रेषा तेव्हाच असतात जेव्हा $AB = AC$.`,
      ],
    },
    {
      title: t`Altitudes कुठे भेटतात`,
      points: [
        t`त्रिकोणाचे तिन्ही altitudes नेहमी एकाच बिंदूतून जातात.`,
        t`तो बिंदू म्हणजे **orthocentre** $H$.`,
        t`$H$ शोधण्यासाठी, दोन altitudes ची समीकरणे लिहा आणि ती एकत्र सोडवा.`,
      ],
    },
    {
      title: t`Perpendicular bisectors कुठे भेटतात`,
      points: [
        t`बाजूंचे तिन्ही perpendicular bisectors नेहमी एकाच बिंदूतून जातात.`,
        t`तो बिंदू म्हणजे **circumcentre** $S$.`,
        t`तो $A$, $B$ आणि $C$ पासून समान अंतरावर आहे.`,
        t`म्हणून $S$ केंद्र असलेले, $A$ मधून जाणारे वर्तुळ $B$ आणि $C$ मधूनही जाते.`,
        t`$S$ शोधण्यासाठी, दोन perpendicular bisectors ची समीकरणे एकत्र सोडवा.`,
      ],
    },
    {
      title: t`Medians कुठे भेटतात`,
      points: [
        t`त्रिकोणाच्या तिन्ही medians एकाच बिंदूतून जातात, **centroid** (मध्यसंपात) $G$.`,
        t`शिरोबिंदू $(x_1, y_1)$, $(x_2, y_2)$ आणि $(x_3, y_3)$ असे घ्या.`,
        t`$G$ चा $x$-निर्देशक $\frac{x_1 + x_2 + x_3}{3}$ आहे, तिघांची सरासरी.`,
        t`त्याचा $y$-निर्देशक $\frac{y_1 + y_2 + y_3}{3}$ आहे.`,
        t`इथे $x = \frac{1 + 3 + 13}{3} = \frac{17}{3}$ आणि $y = \frac{8 + 1 + 6}{3} = 5$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$P(3, 5)$ पासून रेषा $x - 2y + 2 = 0$ वरील foot of the perpendicular शोधा.`,
    steps: [
      t`रेषा $y = \frac{1}{2}x + 1$ आहे, म्हणून तिचा slope $m = \frac{1}{2}$ आहे.`,
      t`$P$ पासूनच्या perpendicular चा slope $-\frac{1}{m} = -2$ आहे: $y - 5 = -2(x - 3)$, म्हणजे $2x + y - 11 = 0$.`,
      t`रेषेसोबत सोडवा: $y = 11 - 2x$ वरून $x - 2(11 - 2x) + 2 = 0$ मिळते, म्हणून $5x = 20$, $x = 4$ आणि $y = 3$.`,
    ],
    answer: t`Foot of the perpendicular $(4, 3)$ आहे.`,
  },
  remediation: {
    "C08-M1": t`Perpendicular slope म्हणजे ऋण व्यस्त, $-\frac{1}{m}$, म्हणून दोन्ही slopes चा गुणाकार $-1$ असतो. फक्त चिन्ह बदलल्यास अशी रेषा मिळते जी ना parallel ना perpendicular.`,
    "C08-M2": t`उलटा करा **आणि** चिन्ह बदला: perpendicular slope $-\frac{1}{m}$ आहे. Slopes $m$ आणि $\frac{1}{m}$ चा गुणाकार $+1$ आहे, $-1$ नाही.`,
    "C08-M3": t`समान slopes मुळे parallel रेषा मिळते. Slope $m$ असलेल्या रेषेला perpendicular रेषेचा slope $-\frac{1}{m}$ असतो.`,
    "C08-M4": t`Median शिरोबिंदूपासून समोरच्या बाजूच्या **मध्यबिंदूपर्यंत** जाते. Altitude शिरोबिंदूपासून समोरच्या बाजूला **काटकोनात** जातो. त्या शिरोबिंदूवरच्या दोन बाजू समान असतील तेव्हाच त्या एकच रेषा असतात.`,
    "C08-M5": t`$BC$ चा perpendicular bisector $BC$ च्या मध्यबिंदूतून काटकोनात जातो, आणि सहसा $A$ मधून जात नाही. $A$ पासूनची रेषा $A$ मधून गेलीच पाहिजे: median साठी मध्यबिंदूपर्यंत, altitude साठी काटकोनात.`,
    "C08-M6": t`$(x_1, y_1)$ आणि $(x_2, y_2)$ चा मध्यबिंदू $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$ आहे: बेरीज करा, मग निम्मे करा.`,
  },
  solutions: {
    "C08-Q1": [
      t`रेषा $3x + y = 3$ म्हणजे $y = -3x + 3$, म्हणून तिचा slope $m = -3$ आहे.`,
      t`Perpendicular चा slope $-\frac{1}{m} = \frac{1}{3}$ आहे. $(2, 2)$ मधून: $y - 2 = \frac{1}{3}(x - 2)$, म्हणून $y = \frac{1}{3}x + \frac{4}{3}$.`,
      t`$x = 0$ ठेवा: $y$-intercept $\frac{4}{3}$ आहे.`,
    ],
    "C08-Q2": [
      t`समजा $M(-2, 9)$ हा पाद आहे. Slope $OM = \frac{9 - 0}{-2 - 0} = -\frac{9}{2}$.`,
      t`रेषा $OM$ ला perpendicular आहे, म्हणून तिचा slope $-\frac{1}{m} = \frac{2}{9}$ आहे, आणि ती $M(-2, 9)$ मधून जाते.`,
      t`$y - 9 = \frac{2}{9}(x + 2)$, म्हणून $9y - 81 = 2x + 4$: रेषा $2x - 9y + 85 = 0$ आहे.`,
    ],
    "C08-Q3": [
      t`$E$ हा $AC$ चा मध्यबिंदू आहे: $E = \left(\frac{1 + 2}{2}, \frac{-2 - 5}{2}\right) = \left(\frac{3}{2}, -\frac{7}{2}\right)$.`,
      t`Slope $BE = \frac{-\frac{7}{2} - 3}{\frac{3}{2} + 2} = \frac{-\frac{13}{2}}{\frac{7}{2}} = -\frac{13}{7}$ आहे.`,
      t`$B(-2, 3)$ मधून: $y - 3 = -\frac{13}{7}(x + 2)$, म्हणून $7y - 21 = -13x - 26$: median $13x + 7y + 5 = 0$ आहे.`,
    ],
    "C08-Q4": [
      t`$B$ मधून जाणारा altitude समोरच्या बाजूला $AC$ ला perpendicular आहे. Slope $AC = \frac{-3 - 5}{-4 - 2} = \frac{4}{3}$.`,
      t`म्हणून altitude चा slope $-\frac{1}{m} = -\frac{3}{4}$ आहे, आणि तो $B(6, -1)$ मधून जातो.`,
      t`$y + 1 = -\frac{3}{4}(x - 6)$, म्हणून $4y + 4 = -3x + 18$: altitude $3x + 4y - 14 = 0$ आहे.`,
    ],
    "C08-Q5": [
      t`$A$ पासूनचा altitude: slope $BC = \frac{2 - 6}{-1 - 7} = \frac{1}{2}$, म्हणून altitude चा slope $-2$ आहे: $y + 2 = -2(x - 3)$, म्हणजे $2x + y - 4 = 0$.`,
      t`$B$ पासूनचा altitude: slope $AC = \frac{2 + 2}{-1 - 3} = -1$, म्हणून altitude चा slope $1$ आहे: $y - 6 = x - 7$, म्हणजे $x - y - 1 = 0$.`,
      t`सोडवा: $2x + y - 4 = 0$ मध्ये $y = x - 1$ ठेवल्यावर $3x = 5$ मिळते, म्हणून $x = \frac{5}{3}$ आणि $y = \frac{2}{3}$. Orthocentre $\left(\frac{5}{3}, \frac{2}{3}\right)$ आहे.`,
    ],
    "C08-Q6": [
      t`$AB$ चा perpendicular bisector: मध्यबिंदू $(2, 1)$; slope $AB = \frac{-1 - 3}{6 + 2} = -\frac{1}{2}$, म्हणून bisector चा slope $2$ आहे: $y - 1 = 2(x - 2)$, म्हणजे $y = 2x - 3$.`,
      t`$AC$ चा perpendicular bisector: मध्यबिंदू $\left(-\frac{1}{2}, \frac{7}{2}\right)$; slope $AC = \frac{4 - 3}{1 + 2} = \frac{1}{3}$, म्हणून bisector चा slope $-3$ आहे: $y - \frac{7}{2} = -3\left(x + \frac{1}{2}\right)$, म्हणजे $y = -3x + 2$.`,
      t`$2x - 3 = -3x + 2$ सोडवा: $x = 1$, $y = -1$. Circumcentre $(1, -1)$ आहे; तो प्रत्येक शिरोबिंदूपासून $5$ अंतरावर आहे.`,
    ],
  },
};
