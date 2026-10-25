import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c01: ConceptTranslation = {
  id: "C01",
  lang: "mr",
  status: "approved",
  source: "12293f9c9ca6f8",
  hook: {
    prompt: t`बिंदू $P(4, 3)$ आणि $Q(8, 6)$ एकाच terminal arm वर आहेत. $P$ पासून मोजल्यास $\sin\theta = \frac{3}{OP}$; $Q$ पासून, $\sin\theta = \frac{6}{OQ}$. **कोणता बिंदू मोठी किंमत देतो?**`,
    reveal: t`कोणताच नाही. $OP = \sqrt{16 + 9} = 5$ आणि $OQ = \sqrt{64 + 36} = 10$, म्हणून $P$ पासून $\sin\theta = \frac{3}{5}$ आणि $Q$ पासून $\frac{6}{10} = \frac{3}{5}$. बिंदू दुप्पट केल्याने $y$ आणि $r$ एकत्र दुप्पट होतात, म्हणून गुणोत्तर तेच राहते. Trigonometric functions फक्त arm वर अवलंबून असतात, तुम्ही तिच्यावरचा कोणता बिंदू निवडता यावर नाही.`,
  },
  intuition: [
    t`एक angle $\theta$ standard position मध्ये ठेवा: त्याचा शिरोबिंदू origin $O$ वर, आणि initial arm धन $x$-अक्षावर.`,
    t`Arm $\theta$ एवढी anticlockwise फिरवा: ती जिथे थांबते, ती **terminal arm** आहे.`,
    t`Terminal arm वर $O$ सोडून कोणताही बिंदू $P(x, y)$ निवडा.`,
    t`$P$ पासून $x$-अक्षावर **perpendicular** (लंब) टाका: अक्षाला काटकोनात मिळणारी रेषा.`,
    t`यामुळे एक काटकोन त्रिकोण तयार होतो: अक्षालगतची त्याची बाजू $x$ आहे, आणि उभी बाजू $y$.`,
    t`त्याची सर्वात लांब बाजू, **hypotenuse** (कर्ण), $OP$ आहे; तिची लांबी $r$ म्हणजे $O$ पासून $P$ चे अंतर.`,
  ],
  formal: [
    {
      title: t`Sine, cosine आणि tangent`,
      points: [
        t`$\theta$ ची सहा **trigonometric functions** (त्रिकोणमितीय फलने) म्हणजे $x$, $y$ आणि $r$ यांची गुणोत्तरे.`,
        t`त्रिकोणात पायथागोरसच्या प्रमेयाने, $r = OP = \sqrt{x^2 + y^2}$.`,
        t`$\theta$ चे **sine** म्हणजे $\sin\theta = \frac{y}{r}$.`,
        t`$\theta$ चे **cosine** म्हणजे $\cos\theta = \frac{x}{r}$.`,
        t`$\theta$ चे **tangent** म्हणजे $\tan\theta = \frac{y}{x}$, जे फक्त $x \ne 0$ असताना व्याख्यित आहे.`,
      ],
    },
    {
      title: t`Reciprocal functions (व्यस्त फलने)`,
      points: [
        t`अपूर्णांकाचा **reciprocal** (व्यस्त) म्हणजे तोच अपूर्णांक उलटा करून: $\frac{y}{r}$ चा $\frac{r}{y}$.`,
        t`**Cosecant**, $\operatorname{cosec}\theta = \frac{r}{y}$, हे $\sin\theta$ चे reciprocal आहे: दोन्ही $y$ वापरतात.`,
        t`**Secant**, $\sec\theta = \frac{r}{x}$, हे $\cos\theta$ चे reciprocal आहे: दोन्ही $x$ वापरतात.`,
        t`**Cotangent**, $\cot\theta = \frac{x}{y}$, हे $\tan\theta$ चे reciprocal आहे.`,
        t`प्रत्येक फक्त तिथेच व्याख्यित आहे जिथे त्याच्या अपूर्णांकाचा छेद $0$ नाही.`,
      ],
    },
    {
      title: t`चिन्हे निर्देशकांतून येतात`,
      points: [
        t`त्रिकोणाच्या बाजूंप्रमाणे नाही, $x$ आणि $y$ हे निर्देशक आहेत, म्हणून त्यांना चिन्हे असतात.`,
        t`ते त्यांच्या चिन्हांसह ठेवा; $r$ हे अंतर आहे, म्हणून ते नेहमी धन असते.`,
        t`म्हणून $90^\circ$ पेक्षा मोठ्या angles साठी काही गुणोत्तरे ऋण येतात.`,
        t`उदाहरणार्थ, बिंदू $P(-12, 35)$ घ्या.`,
        t`$O$ पासून त्याचे अंतर $r = \sqrt{144 + 1225} = 37$ आहे.`,
        t`म्हणून $\sin\theta = \frac{35}{37}$, $\cos\theta = -\frac{12}{37}$ आणि $\tan\theta = -\frac{35}{12}$.`,
      ],
    },
    {
      title: t`Unit circle वर`,
      points: [
        t`**Unit circle** (एकक वर्तुळ) म्हणजे $O$ भोवती radius $1$ चे circle; त्याचे समीकरण $x^2 + y^2 = 1$ आहे.`,
        t`समजा terminal arm त्याला $P(x, y)$ वर भेटते: मग $r = OP = 1$.`,
        t`म्हणून $\cos\theta = \frac{x}{r} = \frac{x}{1} = x$.`,
        t`आणि $\sin\theta = \frac{y}{r} = \frac{y}{1} = y$.`,
        t`म्हणून $P = (\cos\theta, \sin\theta)$: त्याचे निर्देशक म्हणजे cosine आणि sine.`,
      ],
    },
  ],
  worked: {
    prompt: t`Standard position मधील ज्या angle $\theta$ ची terminal arm $P(-20, -21)$ मधून जाते, त्याची सर्व trigonometric functions काढा.`,
    steps: [
      t`$x = -20$, $y = -21$, म्हणून $r = \sqrt{(-20)^2 + (-21)^2}$ $= \sqrt{400 + 441}$ $= \sqrt{841} = 29$.`,
      t`$\sin\theta = \frac{y}{r}$ $= -\frac{21}{29}$ आणि $\cos\theta = \frac{x}{r}$ $= -\frac{20}{29}$: दोन्ही ऋण, कारण $x$ आणि $y$ ऋण आहेत.`,
      t`$\tan\theta = \frac{y}{x}$ $= \frac{-21}{-20} = \frac{21}{20}$: दोन ऋण चिन्हे रद्द होतात.`,
      t`Reciprocals साठी प्रत्येक उलटा करा: $\operatorname{cosec}\theta = -\frac{29}{21}$, $\sec\theta = -\frac{29}{20}$, $\cot\theta = \frac{20}{21}$.`,
    ],
    answer: t`$\sin\theta = -\frac{21}{29}$, $\cos\theta = -\frac{20}{29}$, $\tan\theta = \frac{21}{20}$, $\operatorname{cosec}\theta = -\frac{29}{21}$, $\sec\theta = -\frac{29}{20}$, $\cot\theta = \frac{20}{21}$.`,
  },
  remediation: {
    "C01-M1": t`$r$ म्हणजे अंतर $OP$, म्हणून $r = \sqrt{x^2 + y^2}$. वर्गांची बेरीज करा, मग भागाकार करण्यापूर्वी वर्गमूळ घ्या.`,
    "C01-M2": t`$\sin\theta$ उभा निर्देशक वापरते, $\sin\theta = \frac{y}{r}$, आणि $\cos\theta$ आडवा, $\cos\theta = \frac{x}{r}$. त्यांचे reciprocals तोच निर्देशक ठेवतात: $\operatorname{cosec}\theta = \frac{r}{y}$, $\sec\theta = \frac{r}{x}$.`,
    "C01-M3": t`$x$ आणि $y$ त्यांच्या चिन्हांसह ठेवा; फक्त $r$ नेहमी धन असते. म्हणून $\sin\theta$ आणि $\operatorname{cosec}\theta$ ला $y$ चे चिन्ह मिळते, आणि $\cos\theta$ आणि $\sec\theta$ ला $x$ चे.`,
    "C01-M4": t`$\sin\theta$ आणि $\cos\theta$ मध्ये $r$ खाली असते; त्यांच्या reciprocals $\operatorname{cosec}\theta$ आणि $\sec\theta$ मध्ये $r$ वर. भागाकार करण्यापूर्वी कोणते function विचारले आहे ते पाहा.`,
  },
  solutions: {
    "C01-Q1": [
      t`$x = 3$, $y = -4$, म्हणून $r = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$.`,
      t`$\sin\theta = \frac{y}{r} = \frac{-4}{5} = -\frac{4}{5}$. ऋण चिन्ह $y$ मधून येते; $r$ धन आहे.`,
    ],
    "C01-Q2": [
      t`$x = -5$, $y = 12$, म्हणून $r = \sqrt{(-5)^2 + 12^2} = \sqrt{169} = 13$.`,
      t`$\sec\theta$ हे $\cos\theta = \frac{x}{r}$ चे reciprocal आहे, म्हणून $\sec\theta = \frac{r}{x} = \frac{13}{-5} = -\frac{13}{5}$.`,
    ],
    "C01-Q3": [
      t`$x = -8$, $y = 15$, म्हणून $r = \sqrt{(-8)^2 + 15^2} = \sqrt{289} = 17$.`,
      t`$\cos\theta = \frac{x}{r} = \frac{-8}{17} = -\frac{8}{17}$. ते आडवा निर्देशक वापरते, आणि त्याचे ऋण चिन्ह राहते.`,
    ],
    "C01-Q4": [
      t`$x = -7$, $y = -24$, म्हणून $r = \sqrt{(-7)^2 + (-24)^2} = \sqrt{625} = 25$.`,
      t`$\operatorname{cosec}\theta$ हे $\sin\theta = \frac{y}{r}$ चे reciprocal आहे, म्हणून $\operatorname{cosec}\theta = \frac{r}{y} = \frac{25}{-24} = -\frac{25}{24}$.`,
    ],
    "C01-Q5": [
      t`$x = 12$, $y = -5$, म्हणून $r = \sqrt{12^2 + (-5)^2} = \sqrt{169} = 13$.`,
      t`$\cos\theta = \frac{x}{r} = \frac{12}{13}$. ते धन आहे कारण $x$ धन आहे; ऋण $y$ हा $\cos\theta$ मध्ये येतच नाही.`,
    ],
    "C01-Q6": [
      t`$x = 2$, $y = -1$, म्हणून $r = \sqrt{2^2 + (-1)^2} = \sqrt{5}$. हा पूर्ण वर्ग नाही: surd तसाच ठेवा.`,
      t`म्हणून $\operatorname{cosec}\theta = \frac{r}{y} = \frac{\sqrt{5}}{-1} = -\sqrt{5}$.`,
    ],
  },
};
