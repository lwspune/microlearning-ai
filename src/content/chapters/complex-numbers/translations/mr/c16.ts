import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c16: ConceptTranslation = {
  id: "C16",
  lang: "mr",
  status: "approved",
  source: "10a6f255b226d6",
  hook: {
    prompt: t`$i \times i = -1$. **दिशेच्या दृष्टीने, कोन $\dfrac\pi2$ चे काय झाले?**`,
    reveal: t`तो दुप्पट झाला: $\dfrac\pi2 + \dfrac\pi2 = \pi$, $-1$ ची दिशा. गुणाकाराने कोन मिळवले जातात.`,
  },
  intuition: [
    t`आठवा: polar form एखादा complex number त्याच्या लांबीने, **modulus**, आणि त्याच्या कोनाने, **argument**, सांगते.`,
    t`$z_1 = \sqrt3 + i$ घ्या: लांबी $2$, **initial arm**, म्हणजे positive real axis, पासून कोन $\dfrac\pi6$ वर.`,
    t`$z_2 = 1 + \sqrt3\,i$ घ्या: लांबी $2$, कोन $\dfrac\pi3$ वर.`,
    t`त्यांचा गुणाकार $z_1z_2 = 4i$ आहे, ज्याची लांबी $2 \times 2 = 4$ आहे: लांबींचा **गुणाकार** होतो.`,
    t`त्याचा कोन $\dfrac\pi6 + \dfrac\pi3 = \dfrac\pi2$ आहे: $z_1$ च्या कोनापासून, $z_2$ च्या कोनाइतके पुढे फिरा, म्हणून कोन **मिळवले** जातात.`,
    t`**Quotient** (भागाकार), म्हणजे भागण्याचे उत्तर, हे उलटवते: लांबींचा भागाकार करा आणि कोन वजा करा, अंश वजा छेद.`,
  ],
  formal: [
    {
      title: t`Polar form मध्ये गुणाकार`,
      points: [
        t`$z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ घ्या, modulus $r_1$ आणि argument $\theta_1$ सह.`,
        t`$z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$ घ्या, modulus $r_2$ आणि argument $\theta_2$ सह.`,
        t`गुणाकार $z_1z_2$ चा modulus $r_1r_2$ आहे: moduli चा गुणाकार होतो.`,
        t`त्याचा argument $\theta_1 + \theta_2$ आहे: arguments मिळवले जातात.`,
        t`म्हणून $z_1z_2$ बरोबर $r_1r_2\big(\cos(\theta_1 + \theta_2)$ $+\, i\sin(\theta_1 + \theta_2)\big)$.`,
        t`थोडक्यात: $\arg(z_1z_2) = \arg z_1 + \arg z_2$.`,
      ],
    },
    {
      title: t`Polar form मध्ये भागाकार`,
      points: [
        t`**Quotient** $\dfrac{z_1}{z_2}$, $z_2 \ne 0$ साठी, म्हणजे $z_2$ ने गुणल्यावर $z_1$ परत देणारी संख्या.`,
        t`म्हणून त्याचा modulus गुणिले $r_2$ म्हणजे $r_1$: moduli चा भागाकार होतो, ज्यावरून $\dfrac{r_1}{r_2}$ मिळते.`,
        t`त्याचा argument अधिक $\theta_2$ म्हणजे $\theta_1$: arguments वजा होतात, अंश वजा छेद.`,
        t`म्हणून $\dfrac{z_1}{z_2}$ बरोबर $\dfrac{r_1}{r_2}\big(\cos(\theta_1 - \theta_2)$ $+\, i\sin(\theta_1 - \theta_2)\big)$.`,
        t`थोडक्यात: $\arg\dfrac{z_1}{z_2} = \arg z_1 - \arg z_2$.`,
      ],
    },
    {
      title: t`परत principal argument कडे`,
      points: [
        t`आठवा: **principal argument** म्हणजे $(-\pi, \pi]$ मधील argument ची एकमेव किंमत.`,
        t`एक पूर्ण फेरा, $2\pi$, त्याच दिशेवर संपतो, म्हणून हे नियम फक्त **$2\pi$ च्या एखाद्या पटीपर्यंत** खरे आहेत.`,
        t`बेरीज किंवा फरक $(-\pi, \pi]$ च्या बाहेर आला, तर तो परत आणण्यासाठी $2\pi$ मिळवा किंवा वजा करा.`,
        t`$z_1 = -1 + \sqrt3\,i$, कोन $\dfrac{2\pi}3$ वर, आणि $z_2 = i$, कोन $\dfrac\pi2$ वर, घ्या.`,
        t`कोन मिळवले जातात: $\dfrac{2\pi}3 + \dfrac\pi2 = \dfrac{7\pi}6$, जो $\pi$ पेक्षा जास्त आहे, $z_1z_2 = -\sqrt3 - i$ साठी.`,
        t`$2\pi$ वजा करा: $\dfrac{7\pi}6 - 2\pi = -\dfrac{5\pi}6$, principal argument, घड्याळाच्या दिशेने मोजलेला.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\dfrac{6\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)}{3\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)}$ काढा.`,
    steps: [
      t`Moduli चा भागाकार करा: $\dfrac63 = 2$.`,
      t`Arguments वजा करा, अंश वजा छेद: $\dfrac{2\pi}3 - \dfrac\pi6 = \dfrac\pi2$.`,
      t`म्हणून भागाकार $2\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right) = 2i$ आहे.`,
    ],
    answer: t`$2i$`,
  },
  remediation: {
    "C16-M1": t`गुणाकारासाठी लांबींचा गुणाकार होतो आणि भागाकारासाठी भागाकार; फक्त **कोन** मिळवले किंवा वजा केले जातात.`,
    "C16-M2": t`गुणाकार: कोन मिळवा. भागाकार: ते वजा करा.`,
    "C16-M3": t`$\dfrac{z_1}{z_2}$ साठी कोन $\theta_1 - \theta_2$ आहे: अंश वजा छेद.`,
    "C16-M4": t`तो $(-\pi, \pi]$ मध्ये आणण्यासाठी $2\pi$ मिळवा किंवा वजा करा: $\dfrac{5\pi}4 - 2\pi = -\dfrac{3\pi}4$.`,
    "C16-M5": t`$z_2$ ने गुणल्याने $\arg z_2$ इतके फिरते **आणि** $\lvert z_2 \rvert$ इतके ताणले जाते: moduli चा गुणाकार होतो, $r_1 r_2$.`,
    "C16-M6": t`घड्याळाच्या दिशेने मोजलेला कोन ऋण असतो: $\dfrac{5\pi}4$ म्हणजे घड्याळाच्या दिशेने $\dfrac{3\pi}4$, म्हणून principal argument $-\dfrac{3\pi}4$ आहे.`,
  },
  solutions: {
    "C16-Q1": [
      t`Moduli चा गुणाकार करा: $2 \times 3 = 6$.`,
      t`Arguments मिळवा: $\dfrac\pi3 + \dfrac\pi6 = \dfrac\pi2$.`,
      t`म्हणून गुणाकार $6\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$ आहे, जो $6i$ आहे.`,
    ],
    "C16-Q2": [
      t`Moduli चा भागाकार करा: $\dfrac82 = 4$.`,
      t`Arguments वजा करा, अंश वजा छेद: $\dfrac{5\pi}6 - \dfrac\pi3 = \dfrac\pi2$.`,
      t`म्हणून भागाकार $4\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$ आहे, जो $4i$ आहे.`,
    ],
    "C16-Q3": [
      t`Polar forms: $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$ आणि $\sqrt3 + i = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$.`,
      t`Moduli चा गुणाकार करा: $\sqrt2 \times 2 = 2\sqrt2$.`,
      t`Arguments मिळवा: $\dfrac\pi4 + \dfrac\pi6 = \dfrac{5\pi}{12}$, म्हणून गुणाकार $2\sqrt2\left(\cos\dfrac{5\pi}{12} + i\sin\dfrac{5\pi}{12}\right)$ आहे.`,
    ],
    "C16-Q4": [
      t`Polar forms: $1 + \sqrt3\,i = 2\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right)$ आणि $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
      t`Moduli चा भागाकार करा: $\dfrac{2}{\sqrt2} = \sqrt2$.`,
      t`Arguments वजा करा, अंश वजा छेद: $\dfrac\pi3 - \dfrac\pi4 = \dfrac\pi{12}$, म्हणून भागाकार $\sqrt2\left(\cos\dfrac\pi{12} + i\sin\dfrac\pi{12}\right)$ आहे.`,
    ],
    "C16-Q5": [
      t`Arguments मिळवा: $\dfrac{3\pi}4 + \dfrac\pi2 = \dfrac{5\pi}4$.`,
      t`$\dfrac{5\pi}4$ हा $(-\pi, \pi]$ च्या बाहेर आहे, म्हणून $2\pi$ वजा करा: $\dfrac{5\pi}4 - 2\pi = -\dfrac{3\pi}4$.`,
    ],
  },
};
