import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "mr",
  status: "approved",
  source: "0dd7bdb1a959ef",
  hook: {
    prompt: t`Calculator शिवाय: $\cos 100^\circ$ हे $\cos 10^\circ$, $-\cos 10^\circ$, $\sin 10^\circ$ की $-\sin 10^\circ$ च्या बरोबर आहे?`,
    reveal: t`$100^\circ = 90^\circ + 10^\circ$. $90^\circ$ मिळवल्याने cos चे sin होते. आणि $100^\circ$ दुसऱ्या quadrant मध्ये आहे, जिथे cos ऋण आहे. म्हणून $\cos 100^\circ = -\sin 10^\circ$. प्रत्येक allied angle दोन प्रश्न ठरवतात: function बदलते का, आणि quadrant कोणते चिन्ह देतो?`,
  },
  intuition: [
    t`Unit circle वर angle $\theta$ साठी बिंदू $P(\cos\theta, \sin\theta)$ घ्या.`,
    t`एखादा angle $\theta$ शी **allied** (संलग्न) असतो जेव्हा त्यांची बेरीज किंवा फरक $90^\circ$ चा पट असतो, जसे $90^\circ + \theta$.`,
    t`$90^\circ$ मिळवा, म्हणजे $P$ एक **quarter turn** (पाव फेरी) घेऊन $(-\sin\theta, \cos\theta)$ वर पोहोचतो.`,
    t`त्याचे $x$ आणि $y$ जागा बदलतात, एकाला ऋण चिन्ह लागते, म्हणून cos आणि sin सुद्धा जागा बदलतात.`,
    t`$180^\circ$ मिळवा, म्हणजे एक **half turn** (अर्धी फेरी) $P$ ला centre पलीकडे $(-\cos\theta, -\sin\theta)$ वर उलटवते.`,
    t`मग $x$ आणि $y$ आपल्या भूमिका ठेवतात आणि फक्त चिन्ह बदलतात; $360^\circ$, $P$ ला बरोबर परत आणते.`,
  ],
  formal: [
    {
      title: t`Function बदला की ठेवा`,
      points: [
        t`Allied angle $n \cdot 90^\circ \pm \theta$ असा लिहा, जिथे $n$ पूर्ण संख्या आहे.`,
        t`$\theta$ ला **acute** (लघुकोन) माना, $0^\circ$ आणि $90^\circ$ यांच्या दरम्यान; निष्कर्ष तरीही प्रत्येक $\theta$ साठी खरा राहतो.`,
        t`$90^\circ$ आणि $270^\circ$ हे $90^\circ$ चे **odd multiples** (विषम पट) आहेत: $n$ म्हणजे $1$ किंवा $3$.`,
        t`$180^\circ$ आणि $360^\circ$ हे $90^\circ$ चे **even multiples** (सम पट) आहेत: $n$ म्हणजे $2$ किंवा $4$.`,
        t`विषम पटासाठी बदला: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$.`,
        t`सम पटासाठी function तसेच ठेवा.`,
      ],
    },
    {
      title: t`चिन्ह quadrant वरून घ्या`,
      points: [
        t`चिन्ह **original** (मूळ) function चे असते, ज्यापासून तुम्ही सुरुवात केली.`,
        t`ते चिन्ह त्या quadrant मध्ये घ्या जिथे $n \cdot 90^\circ \pm \theta$ आहे.`,
        t`उदाहरणार्थ, $90^\circ + \theta$ quadrant II मध्ये आहे, कारण $\theta$ लघुकोन आहे.`,
        t`Quadrant II मध्ये, जिथे $x < 0$, cos ऋण आहे.`,
        t`Cos चे sin होते, म्हणून $\cos(90^\circ + \theta) = -\sin\theta$.`,
      ],
    },
    {
      title: t`कोष्टक: quadrants I आणि II`,
      points: [
        t`प्रत्येक ओळ एका allied angle चे sin, cos आणि tan याच क्रमाने देते.`,
        t`$90^\circ - \theta$ (quadrant I) ला, ते $\cos\theta$, $\sin\theta$ आणि $\cot\theta$ आहेत.`,
        t`$90^\circ + \theta$ (quadrant II) ला, ते $\cos\theta$, $-\sin\theta$ आणि $-\cot\theta$ आहेत.`,
        t`$180^\circ - \theta$ (quadrant II) ला, ते $\sin\theta$, $-\cos\theta$ आणि $-\tan\theta$ आहेत.`,
      ],
    },
    {
      title: t`कोष्टक: quadrants III आणि IV`,
      points: [
        t`$180^\circ + \theta$ (quadrant III) ला, ते $-\sin\theta$, $-\cos\theta$ आणि $\tan\theta$ आहेत.`,
        t`$270^\circ - \theta$ (quadrant III) ला, ते $-\cos\theta$, $-\sin\theta$ आणि $\cot\theta$ आहेत.`,
        t`$270^\circ + \theta$ (quadrant IV) ला, ते $-\cos\theta$, $\sin\theta$ आणि $-\cot\theta$ आहेत.`,
        t`$360^\circ - \theta$ (quadrant IV) ला, ते $-\sin\theta$, $\cos\theta$ आणि $-\tan\theta$ आहेत.`,
        t`प्रत्येक ओळ दोन नियमांतून येते: बदला की ठेवा, मग चिन्ह.`,
      ],
    },
    {
      title: t`मोठे आणि ऋण angles`,
      points: [
        t`इथे $f$ म्हणजे सहापैकी कोणतेही function.`,
        t`आधी पूर्ण फेऱ्या काढून टाका: कोणत्याही पूर्णांक $k$ साठी $f(k \cdot 360^\circ + \theta) = f(\theta)$.`,
        t`फक्त cos आणि sec **even** (सम) आहेत: ते $-\theta$ ला $\theta$ सारखीच किंमत देतात.`,
        t`म्हणून $\cos(-\theta) = \cos\theta$ आणि $\sec(-\theta) = \sec\theta$.`,
        t`उरलेली चार **odd** (विषम) आहेत: त्यांचे चिन्ह बदलते, जसे $\sin(-\theta) = -\sin\theta$.`,
      ],
    },
    {
      title: t`कोष्टक कुठून येते`,
      points: [
        t`प्रत्येक ओळ म्हणजे $90^\circ$, $180^\circ$, $270^\circ$ किंवा $360^\circ$ वरच्या किमती घेऊन बेरीज किंवा फरकाचे सूत्र.`,
        t`उदाहरणार्थ, $\cos(90^\circ + \theta)$ घ्या आणि बेरजेचे सूत्र वापरा.`,
        t`ते $\cos 90^\circ\cos\theta$ $- \sin 90^\circ\sin\theta$ च्या बरोबर आहे.`,
        t`कारण $\cos 90^\circ = 0$ आणि $\sin 90^\circ = 1$, हे $-\sin\theta$ आहे.`,
      ],
    },
    {
      title: t`जोड्या लागणाऱ्या बेरजा`,
      points: [
        t`अशा angles कडे पाहा ज्यांची बेरीज $180^\circ$ किंवा $360^\circ$ होते.`,
        t`उदाहरणार्थ, $55^\circ + 125^\circ = 180^\circ$.`,
        t`Unit circle वर त्यांचे बिंदू $y$-अक्षात एकमेकांची आरशातील प्रतिबिंबे आहेत.`,
        t`म्हणून $\cos 125^\circ = \cos(180^\circ - 55^\circ)$, म्हणजे $-\cos 55^\circ$.`,
        t`मग $\cos 55^\circ + \cos 125^\circ = 0$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\sec(-855^\circ)$ ची किंमत काढा.`,
    steps: [
      t`sec even आहे: $\sec(-855^\circ) = \sec 855^\circ$.`,
      t`पूर्ण फेऱ्या काढून टाका: $855^\circ - 2 \times 360^\circ$ $= 135^\circ$, म्हणून हे $\sec 135^\circ$ आहे.`,
      t`$135^\circ = 90^\circ + 45^\circ$, $90^\circ$ चा विषम पट: sec चे cosec होते. $135^\circ$ दुसऱ्या quadrant मध्ये आहे, जिथे sec (cos प्रमाणे) ऋण आहे.`,
      t`म्हणून $\sec 135^\circ = -\operatorname{cosec} 45^\circ$ $= -\sqrt{2}$.`,
    ],
    answer: t`$\sec(-855^\circ) = -\sqrt{2}$.`,
  },
  remediation: {
    "C03-M1": t`फक्त $90^\circ$ चा विषम पट ($90^\circ$, $270^\circ$) function बदलतो: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$. $180^\circ$ आणि $360^\circ$ ला function तेच राहते.`,
    "C03-M2": t`बदलण्यापूर्वी चिन्ह ठरवा: ते तुम्ही ज्या function पासून सुरुवात केली त्याचे चिन्ह, angle ज्या quadrant मध्ये आहे तिथले. $\cos(90^\circ + \theta)$ ऋण आहे कारण दुसऱ्या quadrant मध्ये cos ऋण आहे, म्हणून ते $-\sin\theta$ च्या बरोबर आहे.`,
    "C03-M3": t`प्रत्येक allied angle एखाद्या quadrant मध्ये येतो, आणि तिथले मूळ function चे चिन्ह पुढे लागते: $\sin(180^\circ + \theta) = -\sin\theta$ कारण तिसऱ्या quadrant मध्ये sin ऋण आहे.`,
    "C03-M4": t`फक्त cos आणि sec even आहेत: $\cos(-\theta) = \cos\theta$, $\sec(-\theta) = \sec\theta$. sin, tan, cot आणि cosec odd आहेत, म्हणून ऋण चिन्ह बाहेर येते: $\tan(-\theta) = -\tan\theta$.`,
    "C03-M5": t`तुम्ही फक्त $360^\circ$ च्या पूर्ण फेऱ्याच काढू शकता. उरलेला $90^\circ$, $180^\circ$ किंवा $270^\circ$ तरीही function किंवा त्याचे चिन्ह बदलतो: $\cos 200^\circ = \cos(180^\circ + 20^\circ) = -\cos 20^\circ$, $\cos 20^\circ$ नाही.`,
  },
  solutions: {
    "C03-Q1": [
      t`एक पूर्ण फेरी काढून टाका: $690^\circ - 360^\circ = 330^\circ$, म्हणून $\sin 690^\circ = \sin 330^\circ$.`,
      t`$330^\circ = 360^\circ - 30^\circ$, $90^\circ$ चा सम पट: sin, sin च राहते. $330^\circ$ चौथ्या quadrant मध्ये आहे, जिथे sin ऋण आहे.`,
      t`म्हणून $\sin 690^\circ = -\sin 30^\circ = -\frac{1}{2}$.`,
    ],
    "C03-Q2": [
      t`पूर्ण फेऱ्या काढून टाका: $840^\circ - 2 \times 360^\circ = 120^\circ$, म्हणून $\tan 840^\circ = \tan 120^\circ$.`,
      t`$120^\circ = 90^\circ + 30^\circ$, $90^\circ$ चा विषम पट: tan चे cot होते. $120^\circ$ दुसऱ्या quadrant मध्ये आहे, जिथे tan ऋण आहे.`,
      t`म्हणून $\tan 840^\circ = -\cot 30^\circ = -\sqrt{3}$.`,
    ],
    "C03-Q3": [
      t`sin आणि tan odd आहेत: $\sin(-150^\circ) = -\sin 150^\circ$ आणि $\tan(-600^\circ) = -\tan 600^\circ$.`,
      t`$\sin 150^\circ = \sin(90^\circ + 60^\circ) = \cos 60^\circ = \frac{1}{2}$: sin चे cos होते, आणि दुसऱ्या quadrant मध्ये sin धन आहे.`,
      t`$\tan 600^\circ = \tan 240^\circ = \tan(180^\circ + 60^\circ) = \tan 60^\circ = \sqrt{3}$: तिसऱ्या quadrant मध्ये tan धन आहे.`,
      t`गुणाकार $\left(-\frac{1}{2}\right)\left(-\sqrt{3}\right) = \frac{\sqrt{3}}{2}$ आहे.`,
    ],
    "C03-Q4": [
      t`$\sec 840^\circ = \sec 120^\circ = \sec(180^\circ - 60^\circ) = -\sec 60^\circ = -2$, आणि $\cot(-945^\circ) = -\cot 225^\circ = -\cot(180^\circ + 45^\circ) = -1$.`,
      t`$\sin 600^\circ = \sin 240^\circ = \sin(180^\circ + 60^\circ) = -\frac{\sqrt{3}}{2}$, आणि $\tan(-690^\circ) = -\tan 330^\circ = -(-\tan 30^\circ) = \frac{1}{\sqrt{3}}$.`,
      t`किंमत $(-2)(-1) + \left(-\frac{\sqrt{3}}{2}\right)\left(\frac{1}{\sqrt{3}}\right) = 2 - \frac{1}{2} = \frac{3}{2}$ आहे.`,
    ],
    "C03-Q5": [
      t`अंश: $\cos(\pi + x) = -\cos x$ आणि $\cos(-x) = \cos x$, म्हणून तो $-\cos^2 x$ आहे.`,
      t`छेद: $\sin(\pi - x) = \sin x$ आणि $\cos\left(\frac{\pi}{2} + x\right) = -\sin x$, म्हणून तो $-\sin^2 x$ आहे.`,
      t`$\dfrac{-\cos^2 x}{-\sin^2 x} = \cot^2 x$.`,
    ],
    "C03-Q6": [
      t`अंश: $\cot\left(\frac{\pi}{2} + \theta\right) = -\tan\theta$, $\sin(-\theta) = -\sin\theta$, $\cot(\pi - \theta) = -\cot\theta$. कारण $\tan\theta\cot\theta = 1$, तो $-\sin\theta$ आहे.`,
      t`छेद: $\cos(2\pi - \theta) = \cos\theta$, $\sin(\pi + \theta) = -\sin\theta$, $\tan(2\pi - \theta) = -\tan\theta$. तो $\cos\theta\sin\theta\tan\theta = \sin^2\theta$ आहे.`,
      t`$\dfrac{-\sin\theta}{\sin^2\theta} = -\dfrac{1}{\sin\theta} = -\operatorname{cosec}\theta$.`,
    ],
  },
};
