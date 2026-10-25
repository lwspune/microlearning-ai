import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c04: ConceptTranslation = {
  id: "C04",
  lang: "mr",
  status: "approved",
  source: "10b5e5a2afde68",
  hook: {
    prompt: t`Calculator शिवाय: $\sin 1830^\circ$ हे $\sin 30^\circ$ पेक्षा मोठे आहे की लहान?`,
    reveal: t`कोणतेच नाही: दोन्ही समान आहेत. $1830^\circ = 5 \times 360^\circ + 30^\circ$. पाच पूर्ण फेऱ्या arm ला ती जिथून निघाली तिथेच परत आणतात, मग ती आणखी $30^\circ$ फिरते. तीच arm, तोच बिंदू $P$, म्हणून $\sin 1830^\circ = \sin 30^\circ = \frac{1}{2}$.`,
  },
  intuition: [
    t`Angle फिरणे मोजतो: इथे arm initial arm पासून $50^\circ$ फिरते.`,
    t`एक **whole turn** (पूर्ण फेरी), $360^\circ$ किंवा $2\pi$, arm ला ती जिथून निघाली तिथेच परत आणते.`,
    t`म्हणून तिच्यावरचा बिंदू $P(x, y)$ सुद्धा परत येतो, आणि सहाही functions पुन्हा तीच येतात.`,
    t`म्हणूनच आपण आधी पूर्ण फेऱ्या काढून टाकतो.`,
    t`**Negative angle** (ऋण angle) **clockwise** फिरतो, घड्याळाच्या काट्यांसारखा: $-50^\circ$ हा $x$-अक्षाच्या खाली थांबतो.`,
    t`त्याची arm म्हणजे $50^\circ$ च्या arm चे $x$-अक्षातील प्रतिबिंब, तिची **mirror image** (आरशातील प्रतिमा): $x$ तसाच राहतो, $y$ चे चिन्ह बदलते.`,
  ],
  formal: [
    {
      title: t`पूर्ण फेऱ्या काढून टाका`,
      points: [
        t`$2n\pi$ मिळवणे, जिथे $n$ कोणताही पूर्णांक आहे, म्हणजे $n$ पूर्ण फेऱ्या मिळवणे.`,
        t`Arm जिथे होती तिथेच थांबते, त्याच बिंदू $P$ वर, म्हणून $\sin(2n\pi + \theta) = \sin\theta$.`,
        t`त्याचप्रमाणे, $\cos(2n\pi + \theta) = \cos\theta$.`,
        t`हेच cosec आणि sec साठीही खरे आहे.`,
        t`Tan आणि cot लवकर पुन्हा येतात, प्रत्येक $\pi$ ला: $\tan(n\pi + \theta) = \tan\theta$.`,
        t`अर्धी फेरी $x$ आणि $y$ दोघांची चिन्हे बदलते, म्हणून $\tan\theta = \frac{y}{x}$ तसेच राहते.`,
      ],
    },
    {
      title: t`Degrees आणि radians मधील पूर्ण फेऱ्या`,
      points: [
        t`Degrees मध्ये, $360^\circ$ च्या पटी वजा करा.`,
        t`उदाहरणार्थ, $765^\circ = 2 \times 360^\circ + 45^\circ$: दोन पूर्ण फेऱ्या आणि आणखी $45^\circ$.`,
        t`म्हणून $\cos 765^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$.`,
        t`Radians मध्ये, $2\pi$ च्या पटी वजा करा: $\frac{41\pi}{4} = 10\pi + \frac{\pi}{4}$.`,
        t`म्हणून $\sin\frac{41\pi}{4} = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
      ],
    },
    {
      title: t`ऋण angles`,
      points: [
        t`$\theta$ च्या arm वर एक बिंदू $P(x, y)$ घ्या, जो $O$ पासून $r$ अंतरावर आहे.`,
        t`त्याचे आरशातील प्रतिबिंब $(x, -y)$ हे $-\theta$ च्या arm वर आहे, तेही $O$ पासून $r$ अंतरावर.`,
        t`म्हणून $\sin(-\theta) = \frac{-y}{r} = -\sin\theta$.`,
        t`आणि $\cos(-\theta) = \frac{x}{r} = \cos\theta$: $x$ बदलत नाही.`,
        t`आणि $\tan(-\theta) = \frac{-y}{x} = -\tan\theta$.`,
        t`म्हणून cosec आणि cot चेही चिन्ह बदलते; sec चे नाही.`,
      ],
    },
    {
      title: t`Reference angle (संदर्भ कोन)`,
      points: [
        t`आधी पूर्ण फेऱ्या काढून टाका, म्हणजे angle $\theta$, $0^\circ$ आणि $360^\circ$ यांच्या दरम्यान येईल.`,
        t`त्याचा **reference angle** म्हणजे त्याची arm आणि $x$-अक्ष यांच्यामधील लघुकोन, जो $90^\circ$ पेक्षा कमी असतो.`,
        t`Quadrant II मध्ये, reference angle $180^\circ - \theta$ आहे.`,
        t`Quadrant III मध्ये, तो $\theta - 180^\circ$ आहे.`,
        t`Quadrant IV मध्ये, तो $360^\circ - \theta$ आहे.`,
      ],
    },
    {
      title: t`Reference angle आणि चिन्ह`,
      points: [
        t`किंमत म्हणजे reference angle वरची किंमत, quadrant च्या चिन्हासह.`,
        t`उदाहरणार्थ, $240^\circ$ हा quadrant III मध्ये आहे.`,
        t`त्याचा reference angle $240^\circ - 180^\circ = 60^\circ$ आहे.`,
        t`Quadrant III मध्ये, जिथे $y < 0$, sin ऋण आहे.`,
        t`म्हणून $\sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$.`,
      ],
    },
    {
      title: t`फक्त पूर्ण फेऱ्या`,
      points: [
        t`फक्त पूर्ण फेरीच arm ला त्याच जागी परत आणते.`,
        t`पाव फेरी, $90^\circ$, arm ला दुसऱ्या quadrant मध्ये नेते.`,
        t`म्हणून $90^\circ$ हे $360^\circ$ सारखे काढून टाकता येत नाही.`,
        t`अर्धी फेरी, $180^\circ$, सुद्धा काढून टाकता येत नाही, tan आणि cot सोडून.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\cos(-480^\circ)$ काढा.`,
    steps: [
      t`ऋण angle साठी cos चे चिन्ह बदलत नाही: $\cos(-480^\circ) = \cos 480^\circ$.`,
      t`एक पूर्ण फेरी काढून टाका: $480^\circ = 360^\circ + 120^\circ$, म्हणून $\cos 480^\circ = \cos 120^\circ$.`,
      t`$120^\circ$ हा quadrant II मध्ये आहे. त्याचा reference angle $180^\circ - 120^\circ = 60^\circ$ आहे.`,
      t`Quadrant II मध्ये cos ऋण आहे: $\cos 120^\circ = -\cos 60^\circ$ $= -\frac{1}{2}$.`,
    ],
    answer: t`$\cos(-480^\circ) = -\frac{1}{2}$`,
  },
  remediation: {
    "C04-M1": t`Reference angle फक्त माप देतो. चिन्ह arm जिथे थांबते त्या quadrant वरून घ्या: quadrant III मध्ये फक्त tan आणि cot धन आहेत, म्हणून $\sin 240^\circ = -\sin 60^\circ$.`,
    "C04-M2": t`ऋण angle clockwise फिरतो, म्हणून $P(x, y)$ चा $(x, -y)$ होतो. Sin, tan, cosec आणि cot चे चिन्ह बदलते: $\sin(-\theta) = -\sin\theta$. फक्त cos आणि sec तसेच राहतात.`,
    "C04-M3": t`Clockwise फिरल्याने फक्त $y$ उलटतो; $x$ तसाच राहतो. म्हणून $\cos(-\theta) = \cos\theta$ आणि $\sec(-\theta) = \sec\theta$. फक्त sin, tan, cosec आणि cot चे चिन्ह बदलते.`,
    "C04-M4": t`Reference angle म्हणजे **$x$-अक्षाशी** होणारा लघुकोन: quadrant II मध्ये $180^\circ - \theta$, III मध्ये $\theta - 180^\circ$, IV मध्ये $360^\circ - \theta$. $120^\circ$ साठी तो $60^\circ$ आहे, $30^\circ$ नाही.`,
    "C04-M5": t`फक्त पूर्ण फेरी ($360^\circ$ किंवा $2\pi$) arm ला त्याच जागी परत आणते, म्हणून फक्त पूर्ण फेऱ्याच काढून टाकता येतात. पाव फेरी arm ला पुढच्या quadrant मध्ये नेते आणि किंमत बदलते.`,
    "C04-M6": t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ आणि $\sec\theta = \frac{1}{\cos\theta}$. आधी sin किंवा cos, चिन्हासह, काढा, मग ते उलटे करा.`,
  },
  solutions: {
    "C04-Q1": [
      t`$150^\circ$ हा quadrant II मध्ये आहे. त्याचा reference angle $180^\circ - 150^\circ = 30^\circ$ आहे.`,
      t`Quadrant II मध्ये cos ऋण आहे.`,
      t`म्हणून $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.`,
    ],
    "C04-Q2": [
      t`पूर्ण फेरी काढून टाका: $\frac{23\pi}{6} = 2\pi + \frac{11\pi}{6}$, म्हणून $\sin\frac{23\pi}{6} = \sin\frac{11\pi}{6}$.`,
      t`$\frac{11\pi}{6}$ ($330^\circ$) हा quadrant IV मध्ये आहे. त्याचा reference angle $2\pi - \frac{11\pi}{6} = \frac{\pi}{6}$ आहे.`,
      t`Quadrant IV मध्ये sin ऋण आहे: $\sin\frac{23\pi}{6} = -\sin\frac{\pi}{6} = -\frac{1}{2}$.`,
    ],
    "C04-Q3": [
      t`पूर्ण फेऱ्या काढून टाका: $1200^\circ = 3 \times 360^\circ + 120^\circ$, म्हणून $\tan 1200^\circ = \tan 120^\circ$.`,
      t`$120^\circ$ हा quadrant II मध्ये आहे. त्याचा reference angle $60^\circ$ आहे, आणि तिथे tan ऋण आहे.`,
      t`म्हणून $\tan 1200^\circ = -\tan 60^\circ = -\sqrt{3}$.`,
    ],
    "C04-Q4": [
      t`Angle सोबत cosec चे चिन्ह बदलते: $\operatorname{cosec}(-210^\circ) = -\operatorname{cosec} 210^\circ$.`,
      t`$210^\circ$ हा quadrant III मध्ये आहे, reference angle $30^\circ$. तिथे sin आणि cosec ऋण आहेत: $\operatorname{cosec} 210^\circ = -\operatorname{cosec} 30^\circ = -2$.`,
      t`म्हणून $\operatorname{cosec}(-210^\circ) = -(-2) = 2$.`,
    ],
    "C04-Q5": [
      t`ऋण angle साठी sec चे चिन्ह बदलत नाही: $\sec(-330^\circ) = \sec 330^\circ$.`,
      t`$330^\circ$ हा quadrant IV मध्ये आहे, reference angle $360^\circ - 330^\circ = 30^\circ$. तिथे cos आणि sec धन आहेत.`,
      t`म्हणून $\sec 330^\circ = \frac{1}{\cos 30^\circ} = \frac{1}{\sqrt{3}/2} = \frac{2}{\sqrt{3}}$.`,
    ],
    "C04-Q6": [
      t`$300^\circ$ हा quadrant IV मध्ये आहे. त्याचा reference angle $360^\circ - 300^\circ = 60^\circ$ आहे.`,
      t`Quadrant IV मध्ये sin ऋण आहे: $\sin 300^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$.`,
      t`म्हणून $\operatorname{cosec} 300^\circ = \frac{1}{\sin 300^\circ} = -\frac{2}{\sqrt{3}}$.`,
    ],
  },
};
