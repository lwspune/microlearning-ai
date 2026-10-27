import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "mr",
  status: "approved",
  source: "1cac5b7bd8ea0f",
  hook: {
    prompt: t`एक मणी centre $(2, 1)$ आणि radius $5$ असलेल्या वर्तुळाकार तारेवरून फिरतो. **एकच संख्या मणी नेमका कुठे आहे ते सांगू शकते का?**`,
    reveal: t`होय: मण्यापर्यंतची radius धन $x$-दिशेशी करत असलेला कोन $\theta$. मणी $(2 + 5\cos\theta,\ 1 + 5\sin\theta)$ वर आहे, आणि $\theta$ हा $0$ पासून $2\pi$ पर्यंत जाताना तो तारेची एक फेरी पूर्ण करतो.`,
  },
  intuition: [
    t`आठवा: वर्तुळ म्हणजे त्याच्या **centre** (केंद्र) $C(h, k)$ पासून एका अंतरावर $r$, त्याची **radius** (त्रिज्या), असलेला प्रत्येक बिंदू.`,
    t`$C$ वर उभे राहून **धन $x$-दिशेकडे** तोंड करा, ज्या दिशेने $x$-अक्ष निर्देश करतो.`,
    t`कोन $\theta$ ने घड्याळाच्या उलट दिशेने वळा, मग $r$ एकक चाला: तुम्ही वर्तुळावरील $P(x, y)$ वर पोहोचता.`,
    t`वाटेत तुम्ही $r\cos\theta$ आडवे आणि $r\sin\theta$ वर सरकलात.`,
    t`म्हणून $x = h + r\cos\theta$ आणि $y = k + r\sin\theta$.`,
    t`प्रत्येक $\theta$ एक बिंदू देतो, आणि $\theta$ हा $0$ पासून $2\pi$ पर्यंत जाताना, $P$ एक फेरी पूर्ण करतो.`,
  ],
  formal: [
    {
      title: t`Parametric equations (प्रचलित समीकरणे)`,
      points: [
        t`Radius $CP$ धन $x$-दिशेपासून कोन $\theta$ ने फिरवा.`,
        t`मग $P$ साठी $x = h + r\cos\theta$ आणि $y = k + r\sin\theta$.`,
        t`**Parameter** (प्रचल) म्हणजे बिंदू ठरवणारी एक संख्या: इथे ती $\theta$ आहे.`,
        t`$x$ आणि $y$ हे parameter च्या स्वरूपात देणारी समीकरणे म्हणजे **parametric equations**.`,
        t`$0 \le \theta < 2\pi$ घेतल्याने $P$ वर्तुळाची एक फेरी पूर्ण करतो.`,
        t`Origin वर centre असलेल्या $x^2 + y^2 = r^2$ साठी, ती $x = r\cos\theta$, $y = r\sin\theta$ आहेत.`,
      ],
    },
    {
      title: t`प्रत्येक θ का बसतो`,
      points: [
        t`$C$ पासून $P$ पर्यंत $r\cos\theta$ आडवे आणि $r\sin\theta$ वर आहे.`,
        t`म्हणून $x - h = r\cos\theta$ आणि $y - k = r\sin\theta$; वर्ग करून मिळवा.`,
        t`त्यावरून $(x - h)^2 + (y - k)^2$ $= r^2(\cos^2\theta + \sin^2\theta)$ मिळते.`,
        t`आठवा: प्रत्येक कोन $\theta$ साठी $\cos^2\theta + \sin^2\theta = 1$.`,
        t`म्हणून $(x - h)^2 + (y - k)^2 = r^2$: प्रत्येक $\theta$ साठी $P$ वर्तुळावर आहे.`,
      ],
    },
    {
      title: t`समीकरणावरून`,
      points: [
        t`वर्तुळ parametric रूपात लिहिण्यासाठी, आधी त्याचा centre आणि radius शोधा.`,
        t`$x^2$ चा सहगुणक $1$ सोडून इतर असेल, तर त्याने भागा: इथे, $2$ ने.`,
        t`मग वर्ग पूर्ण करा: $(x - 2)^2 + (y + 1)^2 = 9$.`,
        t`म्हणून centre $(2, -1)$ आहे आणि $r^2 = 9$, म्हणून $r = 3$.`,
        t`$\cos\theta$ पुढची संख्या $r = 3$ आहे, $r^2 = 9$ नाही.`,
        t`म्हणून $x = 2 + 3\cos\theta$ आणि $y = -1 + 3\sin\theta$.`,
      ],
    },
    {
      title: t`परत centre आणि radius`,
      points: [
        t`$x = h - r\sin\theta$, $y = k - r\cos\theta$ घ्या: वजा चिन्हे, आणि $x$-समीकरणात $\sin$.`,
        t`परत जाण्यासाठी, $\sin\theta$ आणि $\cos\theta$ ची पदे वेगळी करा: $x - h = -r\sin\theta$, $y - k = -r\cos\theta$.`,
        t`वर्ग करून मिळवा: $\sin^2\theta + \cos^2\theta = 1$ मुळे $\theta$ निघून जातो.`,
        t`त्यामुळे $(x - h)^2 + (y - k)^2 = r^2$ उरते.`,
        t`म्हणून centre अजूनही $(h, k)$ आहे आणि radius अजूनही $r$.`,
        t`चिन्हे आणि अदलाबदल फक्त $P$ कुठून सुरू होतो आणि कोणत्या दिशेने फिरतो एवढेच बदलतात.`,
      ],
    },
  ],
  worked: {
    prompt: t`वर्तुळ $x^2 + y^2 - 6x + 4y - 3 = 0$ ची parametric equations शोधा.`,
    steps: [
      t`वर्ग पूर्ण करा: $(x^2 - 6x + 9) + (y^2 + 4y + 4)$ हे $3 + 9 + 4$ इतके आहे, म्हणून $(x - 3)^2 + (y + 2)^2 = 16$.`,
      t`Centre $C(3, -2)$ आहे आणि $r^2 = 16$, म्हणून $r = 4$.`,
      t`समजा CP धन $x$-दिशेशी कोन $\theta$ करते. मग $x - 3 = 4\cos\theta$ आणि $y + 2 = 4\sin\theta$.`,
      t`म्हणून $x = 3 + 4\cos\theta$ आणि $y = -2 + 4\sin\theta$.`,
    ],
    answer: t`$x = 3 + 4\cos\theta$, $y = -2 + 4\sin\theta$`,
  },
  remediation: {
    "C05-M1": t`$\cos\theta$ आणि $\sin\theta$ पुढची संख्या म्हणजे radius $r$, एक लांबी. समीकरण $r^2 = 25$ देत असेल, तर $5\cos\theta$ लिहा, $25\cos\theta$ नव्हे.`,
    "C05-M2": t`$(x - h)^2$ मध्ये centre चा निर्देशक $h$ आहे: $(x - 3)^2$ म्हणजे $h = 3$. $x = h + r\cos\theta$ मध्ये स्थिर पद म्हणजे centre चा निर्देशक जसा आहे तसा, चिन्हासह.`,
    "C05-M3": t`$x = r\cos\theta$, $y = r\sin\theta$ फक्त origin वर केंद्र असलेल्या वर्तुळासाठी आहे. Centre $(h, k)$ साठी, centre पासून सुरुवात करा: $x = h + r\cos\theta$, $y = k + r\sin\theta$.`,
    "C05-M4": t`$=$ चिन्ह ओलांडताना पदाचे चिन्ह बदलते: $x^2 + y^2 + 2gx + 2fy + c = 0$ वरून $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$ मिळते.`,
    "C05-M5": t`आधी संपूर्ण समीकरणाला $x^2$ च्या सहगुणकाने भागा, म्हणजे $x^2$ आणि $y^2$ चा सहगुणक $1$ होईल; तेव्हाच centre आणि radius वाचा.`,
    "C05-M6": t`प्रत्येक समीकरण आपला निर्देशक देते: $x$-समीकरणातील स्थिरांक $h$ आहे आणि $y$-समीकरणातील $k$, तिथे $\cos\theta$ येवो की $\sin\theta$.`,
  },
  solutions: {
    "C05-Q1": [
      t`$(x - h)^2 + (y - k)^2 = r^2$ शी तुलना करा: $h = 3$, $k = -4$ आणि $r^2 = 25$, म्हणून radius $r = 5$ आहे, $25$ नाही.`,
      t`$x - 3 = 5\cos\theta$ आणि $y + 4 = 5\sin\theta$ ठेवा. मग $(x - 3)^2 + (y + 4)^2 = 25(\cos^2\theta + \sin^2\theta) = 25$, म्हणून प्रत्येक $\theta$ वर्तुळाचा एक बिंदू देतो.`,
      t`Parametric equations $x = 3 + 5\cos\theta$, $y = -4 + 5\sin\theta$ आहेत.`,
    ],
    "C05-Q2": [
      t`वर्ग पूर्ण करा: $(x^2 + 2x + 1) + (y^2 - 4y + 4) = 4 + 1 + 4$, म्हणून $(x + 1)^2 + (y - 2)^2 = 9$. पलीकडे नेलेला $-4$, $+4$ होतो.`,
      t`Centre $(-1, 2)$ आहे आणि $r = \sqrt{9} = 3$.`,
      t`$x + 1 = 3\cos\theta$, $y - 2 = 3\sin\theta$ सह: $x = -1 + 3\cos\theta$, $y = 2 + 3\sin\theta$.`,
    ],
    "C05-Q3": [
      t`आधी $3$ ने भागा, म्हणजे $x^2$ आणि $y^2$ चा सहगुणक $1$ होईल: $x^2 + y^2 - \frac{4}{3}x + 2y - \frac{4}{3} = 0$.`,
      t`वर्ग पूर्ण करा: $\left(x - \frac{2}{3}\right)^2 + (y + 1)^2 = \frac{4}{9} + 1 + \frac{4}{3} = \frac{25}{9}$. Centre $\left(\frac{2}{3}, -1\right)$, radius $\frac{5}{3}$.`,
      t`म्हणून $x = \frac{2}{3} + \frac{5}{3}\cos\theta$, $y = -1 + \frac{5}{3}\sin\theta$.`,
    ],
    "C05-Q4": [
      t`वर्ग पूर्ण करा: $\left(x + \frac{m}{2}\right)^2 + \left(y + \frac{m}{2}\right)^2 = \frac{m^2}{4} + \frac{m^2}{4} = \frac{m^2}{2}$.`,
      t`Centre $\left(-\frac{m}{2}, -\frac{m}{2}\right)$; radius $\sqrt{\frac{m^2}{2}} = \frac{m}{\sqrt{2}}$, कारण $m > 0$.`,
      t`म्हणून $x = -\frac{m}{2} + \frac{m}{\sqrt{2}}\cos\theta$, $y = -\frac{m}{2} + \frac{m}{\sqrt{2}}\sin\theta$.`,
    ],
    "C05-Q5": [
      t`त्रिकोणमितीय पदे वेगळी करा: $x - 3 = -4\sin\theta$ आणि $y - 2 = -4\cos\theta$.`,
      t`वर्ग करून मिळवा: $(x - 3)^2 + (y - 2)^2 = 16(\sin^2\theta + \cos^2\theta) = 16$.`,
      t`म्हणून centre $(3, 2)$ आहे आणि radius $4$ आहे. वजा चिन्हे आणि अदलाबदल केलेले $\sin$ आणि $\cos$ फक्त बिंदू कुठून सुरू होतो आणि कोणत्या दिशेने फिरतो एवढेच बदलतात.`,
    ],
    "C05-Q6": [
      t`त्रिकोणमितीय पदे वेगळी करा: $x + 2 = 3\sin\theta$ आणि $y - 1 = 3\cos\theta$.`,
      t`वर्ग करून मिळवा: $(x + 2)^2 + (y - 1)^2 = 9(\sin^2\theta + \cos^2\theta) = 9$. Centre $(-2, 1)$ आहे, अनुक्रमे $x$-समीकरण आणि $y$-समीकरणावरून, आणि radius $3$ आहे.`,
    ],
  },
};
