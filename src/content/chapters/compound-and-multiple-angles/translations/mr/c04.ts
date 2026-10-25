import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c04: ConceptTranslation = {
  id: "C04",
  lang: "mr",
  status: "approved",
  source: "05236aafc2f35c",
  hook: {
    prompt: t`$2\sin 30^\circ = 2 \times \frac{1}{2} = 1$. **मग $\sin 60^\circ = 1$ आहे का?**`,
    reveal: t`नाही: $\sin 60^\circ = \frac{\sqrt{3}}{2}$. Angle दुप्पट केल्याने sine दुप्पट होत नाही. $60^\circ = 30^\circ + 30^\circ$ असे लिहा आणि बेरजेचे सूत्र वापरा: $\sin 60^\circ = 2\sin 30^\circ\cos 30^\circ$ $= 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2}$ $= \frac{\sqrt{3}}{2}$. जास्तीचा अवयव $\cos 30^\circ$ च त्याला $1$ च्या खाली ओढतो.`,
  },
  intuition: [
    t`**Multiple angle** (पटीतील कोन) म्हणजे एक पूर्ण संख्या गुणिले एक angle, जसे $2A$ किंवा $3A$.`,
    t`इथे एक arm initial arm पासून angle $A$, म्हणजे $30^\circ$, फिरते.`,
    t`ती पुन्हा $A$ फिरते, $2A$ पर्यंत, म्हणजे **double angle** (दुप्पट कोन): म्हणून $2A = A + A$, एक बेरीज.`,
    t`**Double-angle formulas**, $\sin 2A$, $\cos 2A$ आणि $\tan 2A$ साठी, $B = A$ ठेवून बेरजेच्या सूत्रांतून येतात.`,
    t`Angle दुप्पट केल्याने sine दुप्पट होत नाही: या लघुकोन $A$ साठी, $\sin 2A$ हे $2\sin A$ पेक्षा कमी आहे.`,
    t`उलटे वाचल्यास, उजवीकडून डावीकडे, ही सूत्रे $1 - \cos 2A$ चे एका वर्गात, आणि $\sin A\cos A$ चे $\sin 2A$ च्या अर्ध्यात रूपांतर करतात.`,
  ],
  formal: [
    {
      title: t`Double angle चे sine`,
      points: [
        t`बेरजेच्या सूत्रापासून सुरुवात करा: $\sin(A + B)$ बरोबर $\sin A\cos B + \cos A\sin B$.`,
        t`$B = A$ ठेवा: उजवी बाजू $\sin A\cos A + \cos A\sin A$ होते.`,
        t`ही दोन समान पदे आहेत, म्हणून त्यांची बेरीज त्यांपैकी एकाच्या दुप्पट आहे.`,
        t`म्हणून $\sin 2A = 2\sin A\cos A$.`,
        t`$2$ आणि $\cos A$ दोन्ही ठेवा: $\sin 2A$ म्हणजे $2\sin A$ नाही.`,
      ],
    },
    {
      title: t`Double angle चे cosine`,
      points: [
        t`बेरजेच्या सूत्रापासून सुरुवात करा: $\cos(A + B)$ बरोबर $\cos A\cos B - \sin A\sin B$.`,
        t`$B = A$ ठेवा: उजवी बाजू $\cos A\cos A - \sin A\sin A$ होते.`,
        t`म्हणून $\cos 2A = \cos^2 A - \sin^2 A$.`,
        t`आधी cosine चा वर्ग येतो, मग वजा चिन्ह.`,
      ],
    },
    {
      title: t`cos 2A ची तीन रूपे`,
      points: [
        t`कारण $\sin^2 A + \cos^2 A = 1$, एक वर्ग दुसऱ्याने बदलता येतो.`,
        t`$\cos^2 A$ च्या जागी $1 - \sin^2 A$ ठेवा: $\cos 2A = 1 - 2\sin^2 A$.`,
        t`$\sin^2 A$ च्या जागी $1 - \cos^2 A$ ठेवा: $\cos 2A = 2\cos^2 A - 1$.`,
        t`म्हणून $\cos 2A$ ची तीन रूपे आहेत, आणि तिन्ही समान आहेत.`,
        t`तुमच्याकडे असलेले रद्द करणारे रूप निवडा.`,
      ],
    },
    {
      title: t`Double angle चे tangent`,
      points: [
        t`बेरजेच्या सूत्रापासून सुरुवात करा: $\tan(A + B)$ बरोबर $\frac{\tan A + \tan B}{1 - \tan A\tan B}$.`,
        t`$B = A$ ठेवा: उजवी बाजू $\frac{\tan A + \tan A}{1 - \tan A\tan A}$ होते.`,
        t`म्हणून $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$.`,
        t`छेदात $\tan(A + B)$ चे वजा चिन्ह राहते.`,
      ],
    },
    {
      title: t`सूत्रे उलटी वाचणे`,
      points: [
        t`उजवीकडून डावीकडे वाचल्यास, सूत्रे वर्ग आणि गुणाकारांचे double angles मध्ये रूपांतर करतात.`,
        t`$\cos 2A = 1 - 2\sin^2 A$ वरून: $1 - \cos 2A = 2\sin^2 A$.`,
        t`$\cos 2A = 2\cos^2 A - 1$ वरून: $1 + \cos 2A = 2\cos^2 A$.`,
        t`Sine चा वर्ग वजा चिन्हासोबत जातो: $A = 0$ ला, $1 - \cos 0 = 0 = 2\sin^2 0$.`,
        t`$\sin 2A = 2\sin A\cos A$ वरून: $\sin A\cos A = \frac{1}{2}\sin 2A$.`,
      ],
    },
    {
      title: t`एक गुणोत्तर आणि quadrant वरून`,
      points: [
        t`बहुधा $A$ चे एक गुणोत्तर दिलेले असते, सोबत $A$ ज्या quadrant मध्ये आहे तो.`,
        t`आधी $\sin A$ आणि $\cos A$ काढा, quadrant ने दिलेल्या चिन्हांसह.`,
        t`मग ते double-angle सूत्रांमध्ये ठेवा.`,
        t`$\sin 2A$ आणि $\tan 2A$ त्या चिन्हांवर अवलंबून असतात.`,
        t`$\cos 2A$ मध्ये फक्त वर्ग येतात, म्हणून चिन्हांमुळे ते बदलत नाही.`,
      ],
    },
    {
      title: t`कोणताही angle दुप्पट असू शकतो`,
      points: [
        t`प्रत्येक angle हा त्याच्या अर्ध्याच्या दुप्पट असतो: $6\theta = 2(3\theta)$.`,
        t`म्हणून सूत्रे $A$ च्या जागी $3\theta$ घेऊनही चालतात.`,
        t`उदाहरणार्थ, $\sin 6\theta = 2\sin 3\theta\cos 3\theta$.`,
      ],
    },
    {
      title: t`ज्यांचे angles दुप्पट होत जातात असे cosines`,
      points: [
        t`$\cos\theta\cos 2\theta\cos 4\theta$ मध्ये, प्रत्येक angle आधीच्याच्या दुप्पट आहे.`,
        t`पुढे $\sin\theta$ ठेवा, आणि गुणाकार **folds up** होतो (आटत जातो): एका वेळी एक जोडी, तो एका sine मध्ये जुळतो.`,
        t`आधी, $2\sin\theta\cos\theta = \sin 2\theta$.`,
        t`मग, $2\sin 2\theta\cos 2\theta = \sin 4\theta$.`,
        t`मग, $2\sin 4\theta\cos 4\theta = \sin 8\theta$.`,
        t`तीन पायऱ्यांत तीन 2 वापरले, म्हणून $8\sin\theta\cos\theta\cos 2\theta\cos 4\theta$ बरोबर $\sin 8\theta$.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\tan A = -\frac{3}{4}$ आणि $\frac{3\pi}{2} < A < 2\pi$, तर $\sin 2A$, $\cos 2A$ आणि $\tan 2A$ काढा.`,
    steps: [
      t`चौथ्या quadrant मध्ये $\cos A > 0$ आणि $\sin A < 0$. $\sec^2 A = 1 + \frac{9}{16}$ $= \frac{25}{16}$, म्हणून $\cos A = \frac{4}{5}$ आणि $\sin A = \tan A\cos A$ $= -\frac{3}{5}$.`,
      t`$\sin 2A = 2\sin A\cos A$ $= 2\left(-\frac{3}{5}\right)\left(\frac{4}{5}\right)$ $= -\frac{24}{25}$.`,
      t`$\cos 2A = \cos^2 A - \sin^2 A$ $= \frac{16}{25} - \frac{9}{25}$ $= \frac{7}{25}$.`,
      t`$\tan 2A = \dfrac{2\tan A}{1 - \tan^2 A}$ $= \dfrac{-\frac{3}{2}}{1 - \frac{9}{16}}$ $= -\frac{3}{2} \cdot \frac{16}{7}$ $= -\frac{24}{7}$. तपासा: $\frac{\sin 2A}{\cos 2A} = \frac{-24/25}{7/25}$ $= -\frac{24}{7}$.`,
    ],
    answer: t`$\sin 2A = -\frac{24}{25}$, $\cos 2A = \frac{7}{25}$, $\tan 2A = -\frac{24}{7}$.`,
  },
  remediation: {
    "C04-M1": t`$\sin 2A$ म्हणजे $\sin(A + A)$, $\sin A$ च्या दुप्पट नाही: बेरजेचे सूत्र $\sin 2A = 2\sin A\cos A$ देते. $A = 30^\circ$ ने तपासा: $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $1$ नाही.`,
    "C04-M2": t`$\cos 2A = \cos(A + A) = \cos^2 A - \sin^2 A$, आधी cosine. म्हणून $1 - \cos 2A = 2\sin^2 A$ आणि $1 + \cos 2A = 2\cos^2 A$; $A = 0$ ने तपासा.`,
    "C04-M3": t`$\sin(A + A)$ ची दोन समान पदे मिळतात: $\sin 2A = 2\sin A\cos A$ आणि $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$. उलटे वाचल्यास, $\sin A\cos A = \frac{1}{2}\sin 2A$.`,
    "C04-M4": t`$\tan(A + A) = \frac{\tan A + \tan A}{1 - \tan A\tan A}$ वरून, $\tan 2A$ चा छेद $1 - \tan^2 A$ आहे. $\frac{2\tan A}{1 + \tan^2 A}$ हे रूप म्हणजे $\sin 2A$.`,
    "C04-M5": t`दुप्पट करण्यापूर्वी quadrant वरून $\sin x$ आणि $\cos x$ ची चिन्हे ठरवा. $\frac{\pi}{2} < x < \pi$ मध्ये $\sin x > 0$ आणि $\cos x < 0$, म्हणून $\sin 2x$ आणि $\tan x$ ऋण आहेत.`,
    "C04-M6": t`$\sin 2A$ म्हणजे angle $2A$ चे sine; $\sin^2 A$ म्हणजे $(\sin A)^2$. ही वेगळी आहेत: $\sin 2A = 2\sin A\cos A$ आणि $\cos 2A = \cos^2 A - \sin^2 A$.`,
  },
  solutions: {
    "C04-Q1": [
      t`$\frac{\pi}{2} < x < \pi$ मध्ये $\cos x < 0$ आणि $\sin x > 0$: $\cos x = \frac{1}{\sec x} = -\frac{5}{13}$ आणि $\sin x = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$.`,
      t`म्हणून $\sin 2x = 2\sin x\cos x = 2 \cdot \frac{12}{13} \cdot \left(-\frac{5}{13}\right) = -\frac{120}{169}$.`,
    ],
    "C04-Q2": [
      t`$\frac{\pi}{2} < x < \pi$ मध्ये: $\cos x = -\frac{5}{13}$, $\sin x = \frac{12}{13}$, म्हणून $\tan x = -\frac{12}{5}$.`,
      t`$\tan 2x = \dfrac{2\tan x}{1 - \tan^2 x} = \dfrac{-\frac{24}{5}}{1 - \frac{144}{25}} = \dfrac{-\frac{24}{5}}{-\frac{119}{25}}$.`,
      t`$= \frac{24}{5} \cdot \frac{25}{119} = \frac{120}{119}$.`,
    ],
    "C04-Q3": [
      t`Cosine ची सूत्रे उलटी वाचा: $1 - \cos 2\theta = 2\sin^2\theta$ आणि $1 + \cos 2\theta = 2\cos^2\theta$.`,
      t`म्हणून $\dfrac{1 - \cos 2\theta}{1 + \cos 2\theta} = \dfrac{2\sin^2\theta}{2\cos^2\theta} = \tan^2\theta$.`,
    ],
    "C04-Q4": [
      t`$\sin 2x = 2\sin x\cos x$, म्हणून $2\operatorname{cosec} 2x = \dfrac{2}{2\sin x\cos x} = \dfrac{1}{\sin x\cos x}$.`,
      t`$1 = \sin^2 x + \cos^2 x$ असे लिहा: $\dfrac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \dfrac{\sin x}{\cos x} + \dfrac{\cos x}{\sin x} = \tan x + \cot x$.`,
    ],
    "C04-Q5": [
      t`$2\cot 2A = \dfrac{2}{\tan 2A} = 2 \cdot \dfrac{1 - \tan^2 A}{2\tan A} = \dfrac{1 - \tan^2 A}{\tan A}$.`,
      t`अपूर्णांक फोडा: $\dfrac{1}{\tan A} - \tan A = \cot A - \tan A$.`,
    ],
    "C04-Q6": [
      t`$4\theta$ हा $2\theta$ च्या दुप्पट आहे: $\sin 4\theta = 2\sin 2\theta\cos 2\theta$.`,
      t`पुन्हा दुप्पट करा: $= 2(2\sin\theta\cos\theta)(\cos^2\theta - \sin^2\theta)$.`,
      t`गुणाकार करून सोडवा: $= 4\sin\theta\cos^3\theta - 4\cos\theta\sin^3\theta$.`,
    ],
  },
};
