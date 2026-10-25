import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "mr",
  status: "approved",
  source: "0ec0b50d2902c8",
  hook: {
    prompt: t`$\sin^2\theta + \cos^2\theta = 1$. **$\sin^6\theta + \cos^6\theta$ सुद्धा $1$ आहे का?** $\theta = 45^\circ$ घेऊन पाहा.`,
    reveal: t`नाही. $45^\circ$ ला, $\sin^6\theta = \cos^6\theta = \left(\frac{1}{\sqrt{2}}\right)^6 = \frac{1}{8}$, म्हणून बेरीज $\frac{1}{4}$ आहे. ते $(\sin^2\theta)^3 + (\cos^2\theta)^3$ असे लिहा आणि $a + b = 1$ घेऊन $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$ वापरा: $\sin^6\theta + \cos^6\theta = 1 - 3\sin^2\theta\cos^2\theta$. $45^\circ$ ला ते $1 - \frac{3}{4} = \frac{1}{4}$ आहे.`,
  },
  intuition: [
    t`राशी **simplify** करणे (सोपी करणे) म्हणजे ती लहान रूपात लिहिणे, जिची किंमत प्रत्येक $\theta$ साठी तीच राहते.`,
    t`Trigonometric गुणोत्तरे सहा आहेत, पण सर्व $\sin\theta$ आणि $\cos\theta$ पासून बनलेली आहेत.`,
    t`म्हणून गुंतागुंतीची राशी फक्त $\sin\theta$ आणि $\cos\theta$ मध्ये लिहा: ती साधे अपूर्णांक होते.`,
    t`मग **identity** $\sin^2\theta + \cos^2\theta = 1$, जे प्रत्येक $\theta$ साठी खरे समीकरण आहे, बाकीचे स्वच्छ करते.`,
    t`$\tan\theta$ दिलेले असेल, तेव्हा $\sin\theta$ आणि $\cos\theta$ वेगवेगळे लागत नाहीत.`,
    t`अंश आणि छेद दोघांना $\cos\theta$ ने भागा, आणि प्रत्येक $\sin\theta$ चे $\tan\theta$ होते.`,
  ],
  formal: [
    {
      title: t`सर्व काही sin आणि cos मध्ये बदला`,
      points: [
        t`आधी प्रत्येक गुणोत्तर $\sin\theta$ आणि $\cos\theta$ च्या रूपात लिहा.`,
        t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ आणि $\cot\theta = \frac{\cos\theta}{\sin\theta}$.`,
        t`$\sec\theta = \frac{1}{\cos\theta}$ आणि $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$.`,
        t`मग अपूर्णांक एका **common denominator** (सामाईक छेद) वर आणा, असा छेद जो सर्वांमध्ये सामाईक आहे.`,
        t`शेवटी, स्वच्छ करण्यासाठी $\sin^2\theta + \cos^2\theta = 1$ वापरा.`,
      ],
    },
    {
      title: t`जेव्हा tan θ दिलेले असते`,
      points: [
        t`**Term** (पद) म्हणजे बेरजेचा एक तुकडा, जसे $2\sin\theta + 3\cos\theta$ मधील $2\sin\theta$.`,
        t`समजा अंश आणि छेदाच्या प्रत्येक पदात एक $\sin\theta$ किंवा एक $\cos\theta$ आहे.`,
        t`अंश आणि छेदाला $\cos\theta$ ने भागा: अपूर्णांकाची किंमत तीच राहते.`,
        t`प्रत्येक $\sin\theta$ चे $\tan\theta$ होते, आणि प्रत्येक $\cos\theta$ चा $1$ होतो, पद कुठेही असो.`,
        t`म्हणून $\frac{a\sin\theta + b\cos\theta}{c\sin\theta + d\cos\theta} = \frac{a\tan\theta + b}{c\tan\theta + d}$.`,
        t`आता $\tan\theta$ ची दिलेली किंमत ठेवा.`,
      ],
    },
    {
      title: t`जेव्हा पदे वर्ग असतात`,
      points: [
        t`पदे वर्ग असतील, जसे $\sin^2\theta$ आणि $\cos^2\theta$, तर अंश आणि छेदाला $\cos^2\theta$ ने भागा.`,
        t`मग $\frac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta$ आणि $\frac{\cos^2\theta}{\cos^2\theta} = 1$.`,
        t`किंवा identities $\sec^2\theta = 1 + \tan^2\theta$ आणि $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ वापरा.`,
        t`दिलेले $\tan\theta$ हे $\cot\theta = \frac{1}{\tan\theta}$ सुद्धा देते, म्हणून दोन्ही identities वापरता येतात.`,
        t`प्रत्येकातला $1$ ठेवा: $\sec^2\theta$ म्हणजे $\tan^2\theta$ नाही.`,
      ],
    },
    {
      title: t`बीजगणिती identities ने विस्तार`,
      points: [
        t`कंस **expand** करणे (विस्तार करणे) म्हणजे गुणाकार करून त्याची वेगवेगळी पदे करणे.`,
        t`$(a + b)^2 = a^2 + 2ab + b^2$.`,
        t`$(a - b)^2 = a^2 - 2ab + b^2$.`,
        t`मधले पद $2ab$ ठेवा: $(a + b)^2$ म्हणजे $a^2 + b^2$ नाही.`,
        t`घनांसाठी, $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$.`,
      ],
    },
    {
      title: t`एक होणारे गुणाकार`,
      points: [
        t`गुणोत्तराचा **reciprocal** म्हणजे तेच गुणोत्तर उलटे, जसे $\sec\theta = \frac{1}{\cos\theta}$.`,
        t`गुणोत्तर गुणिले त्याचा reciprocal म्हणजे $1$.`,
        t`म्हणून $\sin\theta\operatorname{cosec}\theta = 1$, $\cos\theta\sec\theta = 1$ आणि $\tan\theta\cot\theta = 1$.`,
        t`या गुणाकारांकडे लक्ष ठेवा: विस्तारानंतर ते बहुधा मधल्या पदात लपलेले असतात.`,
        t`तसेच, सामाईक छेदावर, $\tan\theta + \cot\theta = \frac{\sin^2\theta + \cos^2\theta}{\sin\theta\cos\theta}$.`,
        t`याचा अंश $1$ आहे, म्हणून $\tan\theta + \cot\theta = \frac{1}{\sin\theta\cos\theta} = \sec\theta\operatorname{cosec}\theta$.`,
      ],
    },
    {
      title: t`L = R सिद्ध करणे`,
      points: [
        t`Identity $L = R$ **prove** करणे (सिद्ध करणे) म्हणजे डावी बाजू $L$ नेहमी उजव्या बाजू $R$ च्या बरोबर असते हे दाखवणे.`,
        t`जास्त गुंतागुंतीच्या बाजूपासून सुरुवात करा.`,
        t`ती दुसरी बाजू होईपर्यंत सोपी करत राहा.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\tan A = \frac{4}{3}$, तर $\dfrac{2\sin A - 3\cos A}{2\sin A + 3\cos A}$ काढा.`,
    steps: [
      t`प्रत्येक पदात एक $\sin A$ किंवा एक $\cos A$ आहे, म्हणून अंश आणि छेदाला $\cos A$ ने भागा: $\frac{\sin A}{\cos A} = \tan A$ आणि $\frac{\cos A}{\cos A} = 1$.`,
      t`राशी $\dfrac{2\tan A - 3}{2\tan A + 3}$ होते.`,
      t`$\tan A = \frac{4}{3}$ ठेवा: अंश $\frac{8}{3} - 3 = -\frac{1}{3}$ आहे आणि छेद $\frac{8}{3} + 3 = \frac{17}{3}$.`,
    ],
    answer: t`$\dfrac{2\sin A - 3\cos A}{2\sin A + 3\cos A} = -\dfrac{1}{17}$.`,
  },
  remediation: {
    "C07-M1": t`$\sec\theta = \frac{1}{\cos\theta}$ आणि $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: प्रत्येक जोडीत बरोबर एकच 'co' आहे. सोपे करण्यापूर्वी प्रत्येक गुणोत्तर असे लिहा.`,
    "C07-M2": t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ आणि $\cot\theta = \frac{\cos\theta}{\sin\theta}$. म्हणून $\cos\theta$ ने भागल्यावर $\sin\theta$ चे $\tan\theta$ होते, आणि $\tan\theta = \frac{p}{q}$ म्हणजे $\sin\theta : \cos\theta = p : q$.`,
    "C07-M3": t`$(a + b)^2 = a^2 + 2ab + b^2$ आणि $(a - b)^2 = a^2 - 2ab + b^2$. मधले पद ठेवा: $\sin\theta\operatorname{cosec}\theta = 1$ सारखे गुणाकार बहुधा तिथेच लपलेले असतात.`,
    "C07-M4": t`तुम्ही फक्त असाच अवयव रद्द करू शकता जो संपूर्ण अंशात आणि संपूर्ण छेदात असतो. प्रत्येक पदाला एकाच गोष्टीने भागा, जसे $\cos\theta$, किंवा आधी पदे एकत्र करा.`,
    "C07-M5": t`$\cos\theta$ ने भागल्यावर प्रत्येक $\sin\theta$ चे $\tan\theta$ होते आणि प्रत्येक $\cos\theta$ चा $1$ होतो, पद कुठेही असो: $c\cos\theta + d\sin\theta$ चे $c + d\tan\theta$ होते.`,
    "C07-M6": t`$\sec^2\theta = 1 + \tan^2\theta$ आणि $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$. वजाबाकीत $1$ रद्द होतात, पण बेरजेत ते मिळतात, म्हणून प्रत्येक मोजा.`,
  },
  solutions: {
    "C07-Q1": [
      t`अंश आणि छेदाला $\cos\theta$ ने भागा. छेदात, $4\cos\theta$ चे $4$ होते आणि $3\sin\theta$ चे $3\tan\theta$: $\dfrac{2\tan\theta + 3}{4 + 3\tan\theta}$.`,
      t`$\tan\theta = \frac{1}{2}$ ठेवा: अंश $1 + 3 = 4$ आहे आणि छेद $4 + \frac{3}{2} = \frac{11}{2}$.`,
      t`किंमत $4 \div \frac{11}{2} = \frac{8}{11}$ आहे.`,
    ],
    "C07-Q2": [
      t`$\cot\theta = \sqrt{7}$, म्हणून $\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 8$, आणि $\sec^2\theta = 1 + \tan^2\theta = 1 + \frac{1}{7} = \frac{8}{7}$.`,
      t`अंश: $8 - \frac{8}{7} = \frac{48}{7}$. छेद: $8 + \frac{8}{7} = \frac{64}{7}$.`,
      t`किंमत $\frac{48}{64} = \frac{3}{4}$ आहे.`,
    ],
    "C07-Q3": [
      t`विस्तार करा: $\sin^2\theta + 2\sin\theta\operatorname{cosec}\theta + \operatorname{cosec}^2\theta + \cos^2\theta + 2\cos\theta\sec\theta + \sec^2\theta$.`,
      t`$\sin\theta\operatorname{cosec}\theta = 1$, $\cos\theta\sec\theta = 1$ आणि $\sin^2\theta + \cos^2\theta = 1$, म्हणून हे $5 + \operatorname{cosec}^2\theta + \sec^2\theta$ आहे.`,
      t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ आणि $\sec^2\theta = 1 + \tan^2\theta$, म्हणून हे सोपे होऊन $\tan^2\theta + \cot^2\theta + 7$ होते.`,
    ],
    "C07-Q4": [
      t`विस्तार करा: $(\tan^2\theta + 2\tan\theta\sec\theta + \sec^2\theta) + (\tan^2\theta - 2\tan\theta\sec\theta + \sec^2\theta) = 2\tan^2\theta + 2\sec^2\theta$.`,
      t`$\sec^2\theta = 1 + \tan^2\theta$, म्हणून हे $2\tan^2\theta + 2 + 2\tan^2\theta = 4\tan^2\theta + 2$ आहे.`,
      t`$\sin$ आणि $\cos$ मध्ये हे $\frac{4\sin^2\theta + 2\cos^2\theta}{\cos^2\theta} = 2\left(\frac{1 + \sin^2\theta}{1 - \sin^2\theta}\right)$ आहे, पुस्तकातले रूप.`,
    ],
    "C07-Q5": [
      t`$\sec\theta = \frac{1}{\cos\theta}$ आणि $\tan\theta = \frac{\sin\theta}{\cos\theta}$, म्हणून अंश $\frac{1 - \sin\theta}{\cos\theta}$ आहे आणि छेद $\frac{1 + \sin\theta}{\cos\theta}$.`,
      t`$\cos\theta$ रद्द होतो, आणि उरते $\dfrac{1 - \sin\theta}{1 + \sin\theta}$.`,
    ],
    "C07-Q6": [
      t`विस्तार करा: $\sin^2\theta + 2\sin\theta\sec\theta + \sec^2\theta + \cos^2\theta + 2\cos\theta\operatorname{cosec}\theta + \operatorname{cosec}^2\theta$.`,
      t`$\sin\theta\sec\theta = \tan\theta$ आणि $\cos\theta\operatorname{cosec}\theta = \cot\theta$, म्हणून हे $1 + 2(\tan\theta + \cot\theta) + \sec^2\theta + \operatorname{cosec}^2\theta$ आहे.`,
      t`$\tan\theta + \cot\theta = \frac{1}{\sin\theta\cos\theta} = \sec\theta\operatorname{cosec}\theta$, आणि $\sec^2\theta + \operatorname{cosec}^2\theta = \frac{\sin^2\theta + \cos^2\theta}{\sin^2\theta\cos^2\theta} = \sec^2\theta\operatorname{cosec}^2\theta$.`,
      t`म्हणून हे $1 + 2\sec\theta\operatorname{cosec}\theta + \sec^2\theta\operatorname{cosec}^2\theta = (1 + \sec\theta\operatorname{cosec}\theta)^2$ आहे.`,
    ],
  },
};
