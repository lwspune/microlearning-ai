import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c15: ConceptTranslation = {
  id: "C15",
  lang: "mr",
  status: "approved",
  source: "10ba82eeb9c1d9",
  hook: {
    prompt: t`$x$ आणि $y$ न वापरता बिंदू $1 + i$ चे वर्णन करा. **कोणत्या दोन संख्या एखाद्याला तो नेमका कुठे आहे ते सांगतील?**`,
    reveal: t`तो origin पासून किती दूर आहे ($\sqrt2$) आणि कोणत्या दिशेला निर्देश करतो ($\dfrac\pi4$). हेच polar form आहे: $\sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
  },
  intuition: [
    t`कोणताही शून्येतर complex number $z = x + iy$ हा एक बिंदू आहे, ज्याच्यापर्यंत $0$ पासून एक बाण जातो.`,
    t`त्याची **length** (लांबी) म्हणजे $z$ हा $0$ पासून किती दूर आहे: आठवा, तो modulus $r = \lvert z \rvert$ आहे.`,
    t`त्याची **direction** (दिशा) म्हणजे त्याचा argument $\theta = \arg z$: **initial arm**, म्हणजे positive real axis, पासून बाणापर्यंतचा फेरा.`,
    t`आडवे जाताना, बाण $x = r\cos\theta$ इतके अंतर कापतो: real part.`,
    t`वर जाताना, तो $y = r\sin\theta$ इतके अंतर कापतो: imaginary part.`,
    t`लांबी आणि दिशेने लिहिल्यावर, गुणाकार आणि घात घेणे सोपे होते, जसे पुढचे पाठ दाखवतात.`,
  ],
  formal: [
    {
      title: t`Polar form (ध्रुवीय रूप)`,
      points: [
        t`$x = r\cos\theta$ आणि $y = r\sin\theta$ हे $z = x + iy$ मध्ये ठेवा.`,
        t`त्यावरून $z = r\cos\theta + i\,r\sin\theta$ मिळते.`,
        t`सामाईक अवयव $r$ बाहेर काढा: $z = r(\cos\theta + i\sin\theta)$.`,
        t`हे $z$ चे **polar form** आहे: त्याची लांबी $r$, मग त्याची दिशा $\theta$.`,
        t`लांबी $r = \lvert z \rvert = \sqrt{x^2 + y^2}$ आहे.`,
        t`दिशा $\theta = \arg z$ आहे: आठवा, मुख्य किंमत, $(-\pi, \pi]$ मध्ये, चरणावरून ठरवलेली.`,
      ],
    },
    {
      title: t`Euler form (ऑयलर रूप)`,
      points: [
        t`थोडक्यात, $\cos\theta + i\sin\theta$ हे $e^{i\theta}$ असे लिहितात: हेच **Euler's formula** (ऑयलरचे सूत्र) आहे.`,
        t`म्हणून $z = re^{i\theta}$: हे $z$ चे **Euler form** आहे.`,
        t`उदाहरणार्थ, $1 + i$ ची लांबी $\sqrt{1 + 1} = \sqrt2$ आणि दिशा $\frac\pi4$ आहे.`,
        t`म्हणून त्याचे polar form $\sqrt2\left(\cos\frac\pi4 + i\sin\frac\pi4\right)$ आहे.`,
        t`आणि त्याचे Euler form $\sqrt2\,e^{i\pi/4}$ आहे.`,
      ],
    },
    {
      title: t`परत x + iy कडे`,
      points: [
        t`परत जाण्यासाठी, $2\left(\cos\frac\pi3 + i\sin\frac\pi3\right)$ घ्या: लांबी $2$, दिशा $\frac\pi3$.`,
        t`Cosine वरून real part मिळतो: $x = r\cos\theta = 2\cos\frac\pi3 = 1$.`,
        t`Sine वरून imaginary part मिळतो: $y = r\sin\theta = 2\sin\frac\pi3 = \sqrt3$.`,
        t`म्हणून संख्या $1 + \sqrt3\,i$ आहे.`,
        t`लांबी $r$ दोन्ही भागांना गुणते, फक्त cosine ला नाही.`,
        t`सर्वसाधारणपणे, $r(\cos\theta + i\sin\theta)$ बरोबर $r\cos\theta + i\,r\sin\theta$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$2 - 2i$ हे polar form मध्ये लिहा.`,
    steps: [
      t`$r = \sqrt{4 + 4} = 2\sqrt2$.`,
      t`बिंदू चरण IV मध्ये आहे आणि संदर्भ कोन $\dfrac\pi4$ आहे, म्हणून $\theta = -\dfrac\pi4$.`,
      t`म्हणून $2 - 2i$ $= 2\sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$.`,
    ],
    answer: t`$2\sqrt2\left(\cos\left(-\frac\pi4\right) + i\sin\left(-\frac\pi4\right)\right)$ $= 2\sqrt2\,e^{-i\pi/4}$`,
  },
  remediation: {
    "C15-M1": t`$\tan^{-1}$ फक्त उजवीकडे निर्देश करणारे कोन देतो. कोनाला बिंदूच्या चरणावरून जागा द्या.`,
    "C15-M2": t`$r$ हे अंतर आहे: $r = \sqrt{x^2 + y^2}$.`,
    "C15-M3": t`$x = r\cos\theta$ हा real part आहे आणि $y = r\sin\theta$ हा imaginary part आहे.`,
    "C15-M4": t`$r(\cos\theta + i\sin\theta) = r\cos\theta + i\,r\sin\theta$: $r$ दोन्ही भागांना गुणतो.`,
    "C15-M5": t`संदर्भ कोन फक्त फेऱ्याचा आकार देतो. चरण चिन्हे ठरवतो: $-3i$ खाली निर्देश करतो, म्हणून $\theta = -\dfrac\pi2$, आणि चरण II मध्ये $\cos\theta < 0$.`,
  },
  solutions: {
    "C15-Q1": [
      t`$r = \sqrt{3 + 1} = 2$.`,
      t`बिंदू चरण II मध्ये आहे आणि संदर्भ कोन $\dfrac\pi6$ आहे, म्हणून $\theta = \pi - \dfrac\pi6 = \dfrac{5\pi}{6}$.`,
      t`म्हणून $-\sqrt3 + i = 2\left(\cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6}\right)$.`,
    ],
    "C15-Q2": [
      t`$r = \sqrt{1 + 3} = 2$.`,
      t`बिंदू चरण III मध्ये आहे आणि संदर्भ कोन $\dfrac\pi3$ आहे, म्हणून $\theta = -\left(\pi - \dfrac\pi3\right) = -\dfrac{2\pi}{3}$.`,
      t`म्हणून $-1 - \sqrt3\,i = 2\left(\cos\left(-\dfrac{2\pi}{3}\right) + i\sin\left(-\dfrac{2\pi}{3}\right)\right)$.`,
    ],
    "C15-Q3": [
      t`$r = \lvert -3i \rvert = 3$.`,
      t`बिंदू negative imaginary axis वर आहे, म्हणून $\theta = -\dfrac\pi2$.`,
      t`म्हणून $-3i = 3\left(\cos\left(-\dfrac\pi2\right) + i\sin\left(-\dfrac\pi2\right)\right)$.`,
    ],
    "C15-Q4": [
      t`$r = \lvert -2 \rvert = 2$.`,
      t`बिंदू negative real axis वर आहे, म्हणून $\theta = \pi$.`,
      t`म्हणून $-2 = 2(\cos\pi + i\sin\pi)$.`,
    ],
    "C15-Q5": [
      t`$x = r\cos\theta = 4\cos\dfrac{2\pi}{3} = 4 \cdot \left(-\dfrac12\right) = -2$.`,
      t`$y = r\sin\theta = 4\sin\dfrac{2\pi}{3} = 4 \cdot \dfrac{\sqrt3}{2} = 2\sqrt3$.`,
      t`म्हणून संख्या $-2 + 2\sqrt3\,i$ आहे.`,
    ],
    "C15-Q6": [
      t`$x = r\cos\theta = 6\cos\left(-\dfrac\pi6\right) = 6 \cdot \dfrac{\sqrt3}{2} = 3\sqrt3$.`,
      t`$y = r\sin\theta = 6\sin\left(-\dfrac\pi6\right) = 6 \cdot \left(-\dfrac12\right) = -3$.`,
      t`म्हणून संख्या $3\sqrt3 - 3i$ आहे.`,
    ],
  },
};
