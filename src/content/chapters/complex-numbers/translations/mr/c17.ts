import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c17: ConceptTranslation = {
  id: "C17",
  lang: "mr",
  status: "approved",
  source: "154700b9853e04",
  hook: {
    prompt: t`$\cos\theta + i\sin\theta$ ला स्वतःनेच गुणून त्याचा वर्ग करा. **उत्तराचा कोन किती आहे?**`,
    reveal: t`$2\theta$. गुणाकाराने कोन मिळवले जातात, म्हणून वर्ग केल्याने कोन दुप्पट होतो, आणि $n$ वा घात त्याला $n$ पट करतो.`,
  },
  intuition: [
    t`आठवा: $z = r(\cos\theta + i\sin\theta)$ ची लांबी $r$, म्हणजे त्याचा **modulus**, आणि कोन $\theta$, म्हणजे त्याचा **argument**, आहे.`,
    t`**Power** (घात) $z$ च्या प्रतींचा गुणाकार करतो: $z^3 = z \cdot z \cdot z$.`,
    t`आठवा: प्रत्येक गुणाकार लांबींचा गुणाकार करतो आणि कोन मिळवतो.`,
    t`म्हणून $z^2$ ची लांबी $r^2$ आणि कोन $\theta + \theta = 2\theta$ आहे.`,
    t`$z$ चा आणखी एक अवयव $z^3$ देतो, लांबी $r^3$ आणि कोन $3\theta$ सह.`,
    t`म्हणून $z^n$ ची लांबी $r^n$ आणि कोन $n\theta$ आहे: **De Moivre's theorem** (द मॉयव्हरचे प्रमेय), लांब विस्ताराऐवजी एक पायरी.`,
  ],
  formal: [
    {
      title: t`De Moivre's theorem (द मॉयव्हरचे प्रमेय)`,
      points: [
        t`कोन $\theta$ वर लांबी $1$ असलेली संख्या म्हणजे $\cos\theta + i\sin\theta$.`,
        t`**De Moivre's theorem**: $(\cos\theta + i\sin\theta)^n$ बरोबर $\cos n\theta + i\sin n\theta$.`,
        t`लांबी $1$ च राहते, कारण $1^n = 1$.`,
        t`कोन $n\theta$ होतो: घन, $n = 3$, भुजेला $3\theta$ ने फिरवतो.`,
        t`हे प्रत्येक पूर्णांक $n$ साठी खरे आहे: धन, शून्य किंवा ऋण.`,
        t`ऋण $n$ भुजेला घड्याळाच्या दिशेने फिरवतो: $n = -1$ वरून कोन $-\theta$ मिळतो.`,
      ],
    },
    {
      title: t`Modulus चाही घात घ्या`,
      points: [
        t`कोणताही $z = r(\cos\theta + i\sin\theta)$ घ्या, जसे $1 + i$, ज्यात $r = \sqrt2$ आणि $\theta = \frac\pi4$.`,
        t`मग $z^n = r^n(\cos n\theta + i\sin n\theta)$.`,
        t`लांबी $r^n$ आहे, $r$ नाही: modulus ला घात $n$ पर्यंत न्या.`,
        t`$r$ चे $n$ अवयव गुणले जातात: $r \cdot r \cdots r = r^n$, $nr$ नाही.`,
        t`कोन $n\theta$ आहे: इथे $4 \times \frac\pi4 = \pi$, म्हणून $(1 + i)^4 = -4$.`,
      ],
    },
    {
      title: t`शेवटी कोन कमी करा`,
      points: [
        t`आठवा: **principal argument** म्हणजे $(-\pi, \pi]$ मधील कोन, $-\pi$ च्या वर आणि $\pi$ पर्यंत.`,
        t`$z = \cos\frac{2\pi}3 + i\sin\frac{2\pi}3$ घ्या, कोन $\frac{2\pi}3$ वर.`,
        t`मग $z^2$ चा कोन $\frac{4\pi}3$ आहे, जो $(-\pi, \pi]$ च्या बाहेर आहे.`,
        t`शेवटी, एक पूर्ण फेरा वजा करा: $\frac{4\pi}3 - 2\pi = -\frac{2\pi}3$.`,
        t`पूर्ण फेरा भुजेला ती होती तिथेच परत आणतो, म्हणून बिंदू तोच आहे.`,
        t`म्हणून $z^2 = -\frac12 - \frac{\sqrt3}2 i$, principal argument $-\frac{2\pi}3$ सह.`,
      ],
    },
    {
      title: t`अदलाबदल झालेले भाग आधी पुन्हा लिहा`,
      points: [
        t`De Moivre's theorem ला $\cos\theta + i\sin\theta$ हे रूप हवे, ज्यात cosine हा real part असतो.`,
        t`$\sin\theta + i\cos\theta$ मध्ये दोन्ही भागांची अदलाबदल झाली आहे, म्हणून ते वेगळ्या भुजेवर आहे.`,
        t`ती भुजा imaginary axis पासून $\theta$ ने कमी आहे, म्हणून तिचा कोन $\frac\pi2 - \theta$ आहे.`,
        t`आठवा: $\sin\theta = \cos\left(\frac\pi2 - \theta\right)$ आणि $\cos\theta = \sin\left(\frac\pi2 - \theta\right)$.`,
        t`म्हणून $\sin\theta + i\cos\theta$ बरोबर $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$.`,
        t`आधी ते असे पुन्हा लिहा, मग कोन $\frac\pi2 - \theta$ सह De Moivre वापरा.`,
      ],
    },
  ],
  worked: {
    prompt: t`$(1 + \sqrt3\,i)^5$ काढा.`,
    steps: [
      t`Polar form: $r = 2$ आणि $\theta = \dfrac\pi3$.`,
      t`De Moivre नुसार: $2^5\left(\cos\dfrac{5\pi}3 + i\sin\dfrac{5\pi}3\right)$.`,
      t`$\cos\dfrac{5\pi}3 = \dfrac12$ आणि $\sin\dfrac{5\pi}3 = -\dfrac{\sqrt3}2$, म्हणून उत्तर $32\left(\dfrac12 - \dfrac{\sqrt3}2 i\right)$ आहे.`,
    ],
    answer: t`$16 - 16\sqrt3\,i$`,
  },
  remediation: {
    "C17-M1": t`Modulus चाही घात घेतला जातो: $r^n$.`,
    "C17-M2": t`De Moivre ला $\cos\theta + i\sin\theta$ हवे. आधी $\sin\theta + i\cos\theta$ हे $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$ असे लिहा.`,
    "C17-M3": t`पुन्हा पुन्हा गुणल्याने लांबींचा गुणाकार होतो: $r\cdot r\cdots r = r^n$, $nr$ नाही.`,
    "C17-M4": t`भागांची अदलाबदल झाली आहे, म्हणून कोन $\frac\pi2 - \theta$ आहे, $\theta$ नाही.`,
    "C17-M5": t`प्रत्येक अवयव आणखी एक $\theta$ मिळवतो, म्हणून $n$ अवयव $n\theta$ ने फिरवतात: $z^n = r^n(\cos n\theta + i\sin n\theta)$.`,
    "C17-M6": t`बेरजेचा घात म्हणजे घातांची बेरीज नव्हे. ते $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$ असे लिहा, मग De Moivre वापरा.`,
  },
  solutions: {
    "C17-Q1": [
      t`Polar form मध्ये: $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
      t`De Moivre नुसार: $(\sqrt2)^8\left(\cos\dfrac{8\pi}4 + i\sin\dfrac{8\pi}4\right) = 16(\cos 2\pi + i\sin 2\pi)$.`,
      t`$\cos 2\pi = 1$ आणि $\sin 2\pi = 0$, म्हणून उत्तर $16$ आहे.`,
    ],
    "C17-Q2": [
      t`De Moivre च्या रूपात पुन्हा लिहा: $\sin\dfrac\pi6 + i\cos\dfrac\pi6 = \cos\dfrac\pi3 + i\sin\dfrac\pi3$.`,
      t`De Moivre नुसार: $\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right)^3 = \cos\pi + i\sin\pi$.`,
      t`$\cos\pi = -1$ आणि $\sin\pi = 0$, म्हणून उत्तर $-1$ आहे.`,
    ],
    "C17-Q3": [
      t`Polar form मध्ये: $\sqrt3 + i = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$.`,
      t`De Moivre नुसार: $2^6\left(\cos\dfrac{6\pi}6 + i\sin\dfrac{6\pi}6\right) = 64(\cos\pi + i\sin\pi)$.`,
      t`$\cos\pi = -1$ आणि $\sin\pi = 0$, म्हणून उत्तर $-64$ आहे.`,
    ],
    "C17-Q4": [
      t`Polar form मध्ये: $1 - i = \sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$.`,
      t`De Moivre नुसार: $(\sqrt2)^4\big(\cos(-\pi) + i\sin(-\pi)\big) = 4\big(\cos(-\pi) + i\sin(-\pi)\big)$.`,
      t`$\cos(-\pi) = -1$ आणि $\sin(-\pi) = 0$, म्हणून उत्तर $-4$ आहे.`,
    ],
    "C17-Q5": [
      t`De Moivre च्या रूपात पुन्हा लिहा: $\sin\dfrac\pi3 + i\cos\dfrac\pi3 = \cos\dfrac\pi6 + i\sin\dfrac\pi6$.`,
      t`De Moivre नुसार: $\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)^2 = \cos\dfrac\pi3 + i\sin\dfrac\pi3$.`,
      t`म्हणून उत्तर $\dfrac12 + \dfrac{\sqrt3}{2}i$ आहे.`,
    ],
    "C17-Q6": [
      t`De Moivre नुसार: modulus चा घन करा आणि कोन तिप्पट करा: $2^3\left(\cos\dfrac{3\pi}4 + i\sin\dfrac{3\pi}4\right)$.`,
      t`$\cos\dfrac{3\pi}4 = -\dfrac{\sqrt2}2$ आणि $\sin\dfrac{3\pi}4 = \dfrac{\sqrt2}2$.`,
      t`म्हणून उत्तर $8 \cdot \dfrac{\sqrt2}{2}(-1 + i) = 4\sqrt2(-1 + i)$ आहे.`,
    ],
  },
};
