import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "mr",
  status: "approved",
  source: "126a312fc820c9",
  hook: {
    prompt: t`असा एखादा angle आहे का ज्यासाठी $\sec\theta = \frac{1}{2}$? आणि असा ज्यासाठी $\tan\theta = 100$?`,
    reveal: t`कोणत्याही angle साठी $\sec\theta = \frac{1}{2}$ नसते: $\sec\theta = \frac{r}{x}$ आणि मापाने $x$ कधीच $r$ पेक्षा मोठा नसतो, म्हणून $\sec\theta$ कधीच $-1$ आणि $1$ यांच्या दरम्यान नसते. पण $\tan\theta = 100$ चालते: बिंदू $(1, 100)$ घ्या, मग $\tan\theta = \frac{y}{x} = 100$. प्रत्येक function ची स्वतःची **range** (व्याप्ती) असते.`,
  },
  intuition: [
    t`$\theta$ च्या terminal arm वर एक बिंदू $P(x, y)$ घ्या, जो origin $O$ पासून $r$ अंतरावर आहे.`,
    t`प्रत्येक निर्देशक, मापाने (चिन्ह सोडून), अशा काटकोन त्रिकोणाची बाजू आहे ज्याची सर्वात लांब बाजू $r$ आहे.`,
    t`म्हणून $\sin\theta = \frac{y}{r}$ आणि $\cos\theta = \frac{x}{r}$ नेहमी $-1$ आणि $1$ यांच्या दरम्यान असतात, टोकांसह.`,
    t`त्यांचे **reciprocals**, म्हणजे तेच अपूर्णांक उलटे, $\operatorname{cosec}\theta = \frac{r}{y}$ आणि $\sec\theta = \frac{r}{x}$, मापाने किमान $1$ असतात.`,
    t`पण $\tan\theta = \frac{y}{x}$ ला मर्यादा नाही: $y$-अक्षाजवळ $x$ खूप लहान असतो आणि $\frac{y}{x}$ खूप मोठा.`,
    t`एक पूर्ण फेरी, $2\pi$, $P$ ला त्याच जागी परत आणते, म्हणून प्रत्येक किंमत $2\pi$ नंतर पुन्हा येते.`,
  ],
  formal: [
    {
      title: t`Sine आणि cosine ची range`,
      points: [
        t`Function ची **range** म्हणजे ते घेत असलेल्या सर्व किमतींचा संच.`,
        t`$\theta$ जसा $0$ पासून $2\pi$ पर्यंत जातो, तसे $\sin\theta$, $-1$ आणि $1$ यांच्या दरम्यान वर-खाली होते.`,
        t`त्याची सर्वात मोठी किंमत $\sin\frac{\pi}{2} = \sin 90^\circ = 1$ आहे.`,
        t`त्याची सर्वात लहान किंमत $\sin\frac{3\pi}{2} = \sin 270^\circ = -1$ आहे.`,
        t`म्हणून $\sin\theta$ ची range $-1 \le \sin\theta \le 1$ आहे, दोन्ही टोके समाविष्ट.`,
        t`त्याचप्रमाणे $-1 \le \cos\theta \le 1$, जिथे $\cos 0^\circ = 1$ आणि $\cos 180^\circ = -1$.`,
      ],
    },
    {
      title: t`Secant आणि cosecant ची range`,
      points: [
        t`$\sec\theta = \frac{1}{\cos\theta}$, म्हणजे $\cos\theta$ चा reciprocal.`,
        t`$\cos\theta$ हे $-1$ ते $1$ या पट्ट्यातच राहते.`,
        t`त्या पट्ट्यातील संख्येने एकाला भागल्यास मापाने किमान $1$ मिळते: $\frac{1}{0.5} = 2$.`,
        t`म्हणून $\sec\theta \le -1$ किंवा $\sec\theta \ge 1$: त्याचा graph कधीच पट्ट्यात येत नाही.`,
        t`जिथे $\cos\theta = 0$, म्हणजे $\frac{\pi}{2}$ आणि $\frac{3\pi}{2}$ ला, $\sec\theta$ व्याख्यित नाही: आपण $0$ ने भागू शकत नाही.`,
        t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ सुद्धा असेच वागते: $\operatorname{cosec}\theta \le -1$ किंवा $\operatorname{cosec}\theta \ge 1$.`,
      ],
    },
    {
      title: t`Tangent आणि cotangent ची range`,
      points: [
        t`$\theta$ जसा $0$ पासून $\frac{\pi}{2}$ कडे वाढतो, तसे $\tan\theta$ तुम्ही सांगाल त्या कोणत्याही संख्येपुढे जाते.`,
        t`$\theta$ जसा $0$ पासून $-\frac{\pi}{2}$ कडे कमी होतो, तसे $\tan\theta$ कोणत्याही संख्येच्या खाली जाते.`,
        t`$\theta = \pm\frac{\pi}{2}$ ला $x = 0$, म्हणून $\tan\theta = \frac{y}{x}$ व्याख्यित नाही.`,
        t`प्रत्येक आडवी रेषा, जसे $y = 2$ किंवा $y = -1$, graph ला भेटते.`,
        t`म्हणून $\tan\theta$ प्रत्येक वास्तव किंमत घेते, धन किंवा ऋण, मोठी किंवा लहान.`,
        t`$\cot\theta = \frac{x}{y}$ सुद्धा प्रत्येक वास्तव किंमत घेते.`,
      ],
    },
    {
      title: t`अशक्य मुळे नाकारणे`,
      points: [
        t`काही समीकरणे एका function मध्ये वर्गसमीकरण होतात, जसे $\cos\theta$ मध्ये.`,
        t`उदाहरणार्थ, $3\cos^2\theta + 5\cos\theta - 2 = 0$.`,
        t`याचे अवयव पडतात: $(3\cos\theta - 1)(\cos\theta + 2) = 0$.`,
        t`म्हणून $\cos\theta = \frac{1}{3}$ किंवा $\cos\theta = -2$.`,
        t`प्रत्येक मूळ त्या function च्या range शी तपासा: इथे $\cos\theta$ हे $-1$ ते $1$ आहे.`,
        t`Range बाहेरचे मूळ कोणताही angle देत नाही: $-2$ सोडा, $\frac{1}{3}$ ठेवा.`,
      ],
    },
    {
      title: t`किमान किमती`,
      points: [
        t`राशीची **least value** (किमान किंमत) म्हणजे ती प्रत्यक्षात घेत असलेली सर्वात लहान किंमत.`,
        t`$\tan\theta$ आणि $\cot\theta$ बांधलेले आहेत: $\tan\theta \cot\theta = 1$, म्हणून दोन्ही कधीच एकाच वेळी $0$ नसतात.`,
        t`कारण $2\tan\theta\cot\theta = 2$, $\tan^2\theta + \cot^2\theta$ $= (\tan\theta - \cot\theta)^2 + 2$.`,
        t`वर्ग कधीच ऋण नसतो, म्हणून $\tan^2\theta + \cot^2\theta \ge 2$.`,
        t`ते $2$ एवढे तेव्हा होते जेव्हा $\tan\theta = \cot\theta$, म्हणजे $45^\circ$ ला: किमान किंमत $2$ आहे, $0$ नाही.`,
        t`$\sin^2\theta + \cos^2\theta = 1$ वापरून, $1 - 2\sin\theta\cos\theta$ $= (\sin\theta - \cos\theta)^2 \ge 0$.`,
      ],
    },
    {
      title: t`Sine आणि cosine चा period`,
      points: [
        t`Function **periodic** (आवर्ती) असते जेव्हा त्याच्या किमती $\theta$ मध्ये एका ठरलेल्या पायरीनंतर पुन्हा येतात.`,
        t`अशी सर्वात लहान पायरी म्हणजे त्याचा **period** (आवर्तनकाल).`,
        t`एक पूर्ण फेरी, $2\pi$, terminal arm ला परत आणते, म्हणून $\sin(\theta + 2\pi) = \sin\theta$.`,
        t`म्हणून $\sin\theta$ चा graph प्रत्येक $2\pi$ नंतर पुन्हा येतो: त्याचा period $2\pi$ आहे.`,
        t`त्याचप्रमाणे, $\cos(\theta + 2\pi) = \cos\theta$: $\cos\theta$ चा period सुद्धा $2\pi$ आहे.`,
        t`त्यांच्या reciprocals, $\operatorname{cosec}\theta$ आणि $\sec\theta$, चाही.`,
      ],
    },
    {
      title: t`Tangent चा period`,
      points: [
        t`अर्धी फेरी, $\pi$, terminal arm वरच्या $P(x, y)$ ला समोरच्या बिंदू $P'(-x, -y)$ वर नेते.`,
        t`दोन्ही निर्देशकांची चिन्हे बदलतात, म्हणून $\frac{-y}{-x} = \frac{y}{x}$.`,
        t`म्हणून $\tan(\theta + \pi) = \tan\theta$: $\tan\theta$ फक्त $\pi$ नंतरच पुन्हा येते.`,
        t`$\tan\theta$ चा period $\pi$ आहे, $2\pi$ नाही.`,
        t`$\cot\theta = \frac{x}{y}$ सुद्धा बदलत नाही, म्हणून त्याचा period सुद्धा $\pi$ आहे.`,
      ],
    },
    {
      title: t`Period चा वापर`,
      points: [
        t`पूर्ण फेऱ्या, म्हणजे $2\pi$ च्या पटी, मिळवल्या किंवा काढल्या तरी $\sin\theta$ बदलत नाही.`,
        t`उदाहरणार्थ, $\sin\frac{41\pi}{4}$ घ्या.`,
        t`पूर्ण फेऱ्या वेगळ्या करा: $\frac{41\pi}{4} = 10\pi + \frac{\pi}{4}$, आणि $10\pi$ म्हणजे $5$ पूर्ण फेऱ्या.`,
        t`म्हणून $\sin\frac{41\pi}{4} = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $2\sin^2\theta + 7\cos\theta = 5$, तर $\cos\theta$ च्या शक्य किमती काढा.`,
    steps: [
      t`सर्व काही $\cos\theta$ मध्ये लिहा: $2(1 - \cos^2\theta) + 7\cos\theta = 5$.`,
      t`मांडणी नीट करा: $2\cos^2\theta - 7\cos\theta + 3 = 0$, म्हणून $(2\cos\theta - 1)(\cos\theta - 3) = 0$.`,
      t`मुळे आहेत $\cos\theta = \frac{1}{2}$ आणि $\cos\theta = 3$.`,
      t`$\cos\theta$ कधीच $1$ पेक्षा जास्त असू शकत नाही, म्हणून $3$ अशक्य आहे. $\frac{1}{2}$ चालते ($\theta = 60^\circ$).`,
    ],
    answer: t`$\cos\theta = \frac{1}{2}$`,
  },
  remediation: {
    "C09-M1": t`सोडवल्यानंतर प्रत्येक मूळ तपासा: $\sin\theta$ आणि $\cos\theta$, $[-1, 1]$ मध्ये असतात; $\sec\theta$ आणि $\operatorname{cosec}\theta$, $\le -1$ किंवा $\ge 1$ असतात. Range बाहेरचे मूळ कोणताही angle देत नाही, म्हणून ते सोडा.`,
    "C09-M2": t`फक्त $\sin\theta$ आणि $\cos\theta$ हेच $[-1, 1]$ मध्ये अडकलेले आहेत. $\sec\theta = \frac{r}{x}$ आणि $\operatorname{cosec}\theta = \frac{r}{y}$ मापाने किमान $1$ असतात, आणि $\tan\theta$, $\cot\theta$ प्रत्येक वास्तव किंमत घेतात.`,
    "C09-M3": t`$90^\circ$ नंतर निर्देशक $x$ आणि $y$ ऋण असू शकतात, म्हणून $\sin\theta$ आणि $\cos\theta$ हे $-1$ पासून $1$ पर्यंत जातात आणि $\tan\theta$ ऋण असू शकते. Range मापाला मर्यादा घालते, चिन्हाला नाही.`,
    "C09-M4": t`Range मध्ये तिची टोके समाविष्ट असतात: $\sin 90^\circ = 1$, $\sin 270^\circ = -1$, $\cos 0^\circ = 1$, $\cos 180^\circ = -1$. बरोबर $1$ किंवा $-1$ असलेले मूळ चालते.`,
    "C09-M5": t`$\tan^2\theta$ आणि $\cot^2\theta$ दोन्ही एकाच वेळी $0$ असू शकत नाहीत: त्यांचा गुणाकार $1$ आहे. बेरीज पूर्ण वर्ग अधिक एक संख्या अशी लिहा, जसे $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$.`,
    "C09-M6": t`अवयवांचा परत गुणाकार करून तपासा: मधले पद समीकरणातल्याच चिन्हासह आले पाहिजे.`,
    "C09-M7": t`ज्याचे मधले पद $-2pq$ आहे तो वर्ग वापरा: $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$, आणि तो वर्ग $45^\circ$ ला $0$ होतो. $(p + q)^2$ वापरल्यास उरलेली संख्या ऋण येते, पण $\tan\theta + \cot\theta$ कधीच $0$ नसते, म्हणून ती मर्यादा कधीच गाठली जात नाही.`,
  },
  solutions: {
    "C09-Q1": [
      t`अवयव पाडा: $(2\cos\theta + 1)(\cos\theta + 5) = 0$, म्हणून $\cos\theta = -\frac{1}{2}$ किंवा $\cos\theta = -5$.`,
      t`$\cos\theta$ कधीच $-1$ च्या खाली जात नाही, म्हणून $-5$ अशक्य आहे.`,
      t`$-\frac{1}{2}$ चालते (उदाहरणार्थ $\theta = 120^\circ$). म्हणून फक्त $\cos\theta = -\frac{1}{2}$.`,
    ],
    "C09-Q2": [
      t`$\tan^2\theta = \sec^2\theta - 1$ ठेवा: $5\sec^2\theta - 5 + 3 = 9\sec\theta$, म्हणून $5\sec^2\theta - 9\sec\theta - 2 = 0$.`,
      t`अवयव पाडा: $(5\sec\theta + 1)(\sec\theta - 2) = 0$, म्हणून $\sec\theta = -\frac{1}{5}$ किंवा $\sec\theta = 2$.`,
      t`$\sec\theta$ कधीच $-1$ आणि $1$ यांच्या दरम्यान नसते, म्हणून $-\frac{1}{5}$ अशक्य आहे. म्हणून फक्त $\sec\theta = 2$ (लघुकोन $\theta = 60^\circ$ आहे).`,
    ],
    "C09-Q3": [
      t`$3\cos\theta = 4(1 + \sin\theta)$ असे लिहा आणि वर्ग करा: $9(1 - \sin^2\theta) = 16(1 + \sin\theta)^2$.`,
      t`मांडणी नीट करा: $25\sin^2\theta + 32\sin\theta + 7 = 0$, म्हणून $(25\sin\theta + 7)(\sin\theta + 1) = 0$: $\sin\theta = -\frac{7}{25}$ किंवा $\sin\theta = -1$.`,
      t`वर्ग केल्याने मुळे वाढू शकतात, म्हणून दोन्ही तपासा. $\sin\theta = -1$ वरून $\cos\theta = 0$: $0 + 4 = 4$. $\sin\theta = -\frac{7}{25}$ आणि $\cos\theta = \frac{24}{25}$ घेऊन: $\frac{72}{25} + \frac{28}{25} = 4$.`,
      t`$-1$ ही $\sin\theta$ ची सर्वात लहान किंमत आहे, range बाहेरची नाही. म्हणून $\sin\theta = -1$ किंवा $\sin\theta = -\frac{7}{25}$.`,
    ],
    "C09-Q4": [
      t`$\sec^2\theta = 1 + \tan^2\theta$ ठेवा: $1 + \tan^2\theta = \tan\theta + 3$, म्हणून $\tan^2\theta - \tan\theta - 2 = 0$.`,
      t`अवयव पाडा: $(\tan\theta - 2)(\tan\theta + 1) = 0$, म्हणून $\tan\theta = 2$ किंवा $\tan\theta = -1$.`,
      t`$\tan\theta$ प्रत्येक वास्तव किंमत घेते, म्हणून दोन्ही चालतात ($\tan 135^\circ = -1$). म्हणून $\tan\theta = 2$ किंवा $\tan\theta = -1$.`,
    ],
    "C09-Q5": [
      t`$\sin^2\theta = 1 - \cos^2\theta$ ठेवा: $2 - 2\cos^2\theta + \cos\theta = 1$, म्हणून $2\cos^2\theta - \cos\theta - 1 = 0$.`,
      t`अवयव पाडा: $(2\cos\theta + 1)(\cos\theta - 1) = 0$, म्हणून $\cos\theta = -\frac{1}{2}$ किंवा $\cos\theta = 1$.`,
      t`दोन्ही $[-1, 1]$ मध्ये आहेत; $1$ ही range ची सर्वात वरची किंमत आहे आणि $\theta = 0^\circ$ ला मिळते. म्हणून $\cos\theta = 1$ किंवा $\cos\theta = -\frac{1}{2}$.`,
    ],
    "C09-Q6": [
      t`$2\tan\theta \cdot 3\cot\theta = 6$, म्हणून $4\tan^2\theta + 9\cot^2\theta = (2\tan\theta - 3\cot\theta)^2 + 12$.`,
      t`वर्ग कधीच ऋण नसतो, म्हणून राशी किमान $12$ आहे.`,
      t`ती $12$ एवढी तेव्हा होते जेव्हा $2\tan\theta = 3\cot\theta$, म्हणजे $\tan^2\theta = \frac{3}{2}$, जे एखाद्या $\theta$ साठी मिळते. किमान किंमत $12$ आहे.`,
    ],
  },
};
