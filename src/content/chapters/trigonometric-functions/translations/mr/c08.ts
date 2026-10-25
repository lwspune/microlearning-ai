import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "mr",
  status: "approved",
  source: "173ab61550a68e",
  hook: {
    prompt: t`एक बिंदू असा फिरतो की $x = \cos\theta$ आणि $y = \sin\theta$, आणि $\theta$ प्रत्येक किंमत घेतो. **फक्त $x$ आणि $y$ मध्ये, $\theta$ शिवाय, असे एक समीकरण आहे का जे असा प्रत्येक बिंदू पूर्ण करतो?**`,
    reveal: t`हो. वर्ग करून बेरीज करा: $x^2 + y^2 = \cos^2\theta + \sin^2\theta = 1$, $\theta$ काहीही असो. प्रत्येक बिंदू circle $x^2 + y^2 = 1$ वर आहे. असे समीकरण शोधणे म्हणजे $\theta$ चे **eliminating** (निरसन).`,
  },
  intuition: [
    t`$\theta$ ला एक लपलेला dial समजा: dial ची प्रत्येक स्थिती एक बिंदू $(x, y)$ देते.`,
    t`$\theta$ **eliminate** करणे (निरसन करणे) म्हणजे त्याला काढून टाकणे, आणि फक्त $x$ आणि $y$ मधले एक समीकरण उरवणे.`,
    t`आधी प्रत्येक trigonometric function ला **subject** (कर्ता) करा: त्याला एका बाजूला एकटे आणा, जसे $\cos\theta = \frac{x}{a}$.`,
    t`**Identity** म्हणजे प्रत्येक $\theta$ साठी खरे असणारे समीकरण, जसे $\cos^2\theta + \sin^2\theta = 1$.`,
    t`दोन्ही functions त्यांना जोडणाऱ्या identity मध्ये ठेवा, आणि $\theta$ निघून जातो.`,
    t`सगळे कौशल्य म्हणजे योग्य identity निवडणे आणि बीजगणित नीट करणे.`,
  ],
  formal: [
    {
      title: t`तीन पायऱ्यांतील पद्धत`,
      points: [
        t`पायरी 1: प्रत्येक trigonometric function ला subject करा.`,
        t`$x = a\cos\theta$ मध्ये, $\cos\theta$ ला गुणणारी संख्या $a$ म्हणजे त्याचा **coefficient** (सहगुणक).`,
        t`दोन्ही बाजूंना coefficient ने भागा: $\cos\theta = \frac{x}{a}$.`,
        t`पायरी 2: functions च्या जोडीला जोडणारी identity निवडा.`,
        t`पायरी 3: **substitute** करा (किंमत ठेवा), प्रत्येक function च्या जागी त्याचा अपूर्णांक ठेवून.`,
        t`उत्तर $x$ आणि $y$ मधले एक समीकरण म्हणून लिहा.`,
      ],
    },
    {
      title: t`कोणती identity वापरायची`,
      points: [
        t`functions ची प्रत्येक जोडी तिच्या स्वतःच्या identity ने जोडलेली असते.`,
        t`cos आणि sin: $\cos^2\theta + \sin^2\theta = 1$.`,
        t`sec आणि tan: $\sec^2\theta - \tan^2\theta = 1$.`,
        t`cosec आणि cot: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
        t`फक्त sin आणि cos ची बेरीज होते; उरलेल्या दोन जोड्यांची वजाबाकी.`,
        t`वजाबाकी असताना sec किंवा cosec आधी येते.`,
      ],
    },
    {
      title: t`मानक निष्कर्ष`,
      points: [
        t`$x = a\cos\theta$ आणि $y = b\sin\theta$ घ्या.`,
        t`Coefficients ने भागा: $\cos\theta = \frac{x}{a}$ आणि $\sin\theta = \frac{y}{b}$.`,
        t`cos आणि sin, $\cos^2\theta + \sin^2\theta = 1$ ने जोडलेले आहेत.`,
        t`किंमत ठेवा: $\left(\frac{x}{a}\right)^2 + \left(\frac{y}{b}\right)^2 = 1$.`,
        t`वर्ग संपूर्ण अपूर्णांकावर लागतो, अंश आणि छेद दोघांवर: $\left(\frac{x}{a}\right)^2 = \frac{x^2}{a^2}$.`,
        t`म्हणून $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.`,
      ],
    },
    {
      title: t`स्थिर पदे`,
      points: [
        t`**Constant term** (स्थिर पद) म्हणजे एकटी उभी असलेली संख्या, जसे $x = h + a\cos\theta$ मधील $h$.`,
        t`ती आधी हलवा: दोन्ही बाजूंतून $h$ वजा करा, म्हणजे $x - h = a\cos\theta$.`,
        t`मग coefficient ने भागा: $\cos\theta = \frac{x - h}{a}$.`,
      ],
    },
    {
      title: t`घन असलेली functions`,
      points: [
        t`$x = a\cos^3\theta$ मध्ये function चा **cubed** (घन) आहे: $\cos^3\theta$ म्हणजे $(\cos\theta)^3$.`,
        t`Coefficient ने भागा: $\cos^3\theta = \frac{x}{a}$.`,
        t`**Cube root** (घनमूळ), म्हणजे घात $\frac{1}{3}$, घनाला उलटे करते.`,
        t`म्हणून आधी घनमूळ घ्या: $\cos\theta = \left(\frac{x}{a}\right)^{1/3}$.`,
        t`मग identity साठी त्याचा वर्ग करा: $\cos^2\theta = \left(\frac{x}{a}\right)^{2/3}$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$x = 2 + 3\cos\theta$, $y = 5 + 3\sin\theta$ मधून $\theta$ चे निरसन करा.`,
    steps: [
      t`स्थिर पदे दुसऱ्या बाजूला न्या: $x - 2 = 3\cos\theta$ आणि $y - 5 = 3\sin\theta$.`,
      t`$3$ ने भागा: $\cos\theta = \frac{x - 2}{3}$ आणि $\sin\theta = \frac{y - 5}{3}$.`,
      t`cos आणि sin, $\cos^2\theta + \sin^2\theta = 1$ ने जोडलेले आहेत, म्हणून $\frac{(x - 2)^2}{9} + \frac{(y - 5)^2}{9} = 1$.`,
      t`$9$ ने गुणा: $(x - 2)^2 + (y - 5)^2 = 9$.`,
    ],
    answer: t`$(x - 2)^2 + (y - 5)^2 = 9$: एक circle ज्याचे centre $(2, 5)$ आणि radius $3$ आहे.`,
  },
  remediation: {
    "C08-M1": t`फक्त $\cos^2\theta + \sin^2\theta = 1$ ही बेरीज आहे. sec आणि tan साठी $\sec^2\theta - \tan^2\theta = 1$ वापरा; cosec आणि cot साठी $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
    "C08-M2": t`कारण $\sec^2\theta = 1 + \tan^2\theta$, sec चे पद मोठे आहे: $\sec^2\theta - \tan^2\theta = 1$. त्याचप्रमाणे, $\operatorname{cosec}^2\theta - \cot^2\theta = 1$, ज्यात cosec आधी आहे.`,
    "C08-M3": t`घात संपूर्ण अपूर्णांकावर लागतो, अंश आणि छेद दोघांवर: $\left(\frac{x}{a}\right)^n = \frac{x^n}{a^n}$.`,
    "C08-M4": t`दोन्ही बाजूंतून स्थिर पद वजा करा: $x = h + a\cos\theta$ वरून $x - h = a\cos\theta$ मिळते, म्हणून $\cos\theta = \frac{x - h}{a}$.`,
    "C08-M5": t`आधी घनमूळ घ्या: $\cos\theta = \left(\frac{x}{a}\right)^{1/3}$, म्हणून $\cos^2\theta = \left(\frac{x}{a}\right)^{2/3}$. $\frac{x}{a}$ चा वर्ग केल्यास $\cos^6\theta$ मिळते, आणि $\cos^6\theta + \sin^6\theta$ हे $1$ नाही.`,
    "C08-M6": t`$\cos\theta$ एकटे करण्यासाठी, दोन्ही बाजूंना त्याच्या coefficient ने भागा: $x = a\cos\theta$ वरून $\cos\theta = \frac{x}{a}$ मिळते.`,
  },
  solutions: {
    "C08-Q1": [
      t`$\sec\theta = \frac{x}{3}$ आणि $\tan\theta = \frac{y}{4}$.`,
      t`sec आणि tan, $\sec^2\theta - \tan^2\theta = 1$ ने जोडलेले आहेत.`,
      t`म्हणून $\frac{x^2}{9} - \frac{y^2}{16} = 1$.`,
    ],
    "C08-Q2": [
      t`$\operatorname{cosec}\theta = \frac{x}{6}$ आणि $\cot\theta = \frac{y}{8}$.`,
      t`cosec आणि cot, $\operatorname{cosec}^2\theta - \cot^2\theta = 1$ ने जोडलेले आहेत.`,
      t`म्हणून $\frac{x^2}{36} - \frac{y^2}{64} = 1$.`,
    ],
    "C08-Q3": [
      t`स्थिर पदे हलवा: $x - 5 = 6\operatorname{cosec}\theta$ आणि $y - 3 = 8\cot\theta$.`,
      t`म्हणून $\operatorname{cosec}\theta = \frac{x - 5}{6}$ आणि $\cot\theta = \frac{y - 3}{8}$.`,
      t`$\operatorname{cosec}^2\theta - \cot^2\theta = 1$ वरून $\frac{(x - 5)^2}{36} - \frac{(y - 3)^2}{64} = 1$ मिळते.`,
    ],
    "C08-Q4": [
      t`$2x = 3 - 4\tan\theta$ वरून: $4\tan\theta = 3 - 2x$, म्हणून $\tan\theta = \frac{3 - 2x}{4}$.`,
      t`$3y = 5 + 3\sec\theta$ वरून: $3\sec\theta = 3y - 5$, म्हणून $\sec\theta = \frac{3y - 5}{3}$.`,
      t`$\sec^2\theta - \tan^2\theta = 1$ वरून $\frac{(3y - 5)^2}{9} - \frac{(3 - 2x)^2}{16} = 1$ मिळते.`,
      t`कारण $(3 - 2x)^2 = (2x - 3)^2$, हे $\frac{(3y - 5)^2}{9} - \frac{(2x - 3)^2}{16} = 1$ आहे.`,
    ],
    "C08-Q5": [
      t`$\cos^3\theta = \frac{x}{8}$, म्हणून $\cos\theta = \left(\frac{x}{8}\right)^{1/3} = \frac{x^{1/3}}{2}$. त्याचप्रमाणे $\sin\theta = \frac{y^{1/3}}{3}$.`,
      t`वर्ग करा: $\cos^2\theta = \frac{x^{2/3}}{4}$ आणि $\sin^2\theta = \frac{y^{2/3}}{9}$.`,
      t`$\cos^2\theta + \sin^2\theta = 1$ वरून $\frac{x^{2/3}}{4} + \frac{y^{2/3}}{9} = 1$ मिळते.`,
    ],
    "C08-Q6": [
      t`स्थिर पदे हलवा: $x - 3 = 2\cos\theta$ आणि $y - 1 = 4\sin\theta$.`,
      t`म्हणून $\cos\theta = \frac{x - 3}{2}$ आणि $\sin\theta = \frac{y - 1}{4}$.`,
      t`$\cos^2\theta + \sin^2\theta = 1$ वरून $\frac{(x - 3)^2}{4} + \frac{(y - 1)^2}{16} = 1$ मिळते.`,
    ],
  },
};
