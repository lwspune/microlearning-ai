import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c12: ConceptTranslation = {
  id: "C12",
  lang: "mr",
  status: "approved",
  source: "00175e44cca288",
  hook: {
    prompt: t`एका hyperbola चे vertices $(\pm 1, 0)$ आणि foci $(\pm 3, 0)$ आहेत. Ellipse चा नियम $b^2 = a^2 - a^2e^2$ हा $1 - 9 = -8$ देतो. **मग इथे $b^2$ किती आहे?**`,
    reveal: t`Hyperbola मध्ये foci vertices च्या पलीकडे असतात, म्हणून $ae > a$ आणि नियम उलटतो: $a^2e^2 = a^2 + b^2$. मग $b^2 = 9 - 1 = 8$, आणि hyperbola $x^2 - \frac{y^2}{8} = 1$ आहे.`,
  },
  intuition: [
    t`Hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ मध्ये दोन अज्ञात आहेत, $a$ आणि $b$, म्हणून दोन गोष्टी तो ठरवतात.`,
    t`**माहिती** म्हणजे प्रश्न देत असलेल्या गोष्टी: प्रत्येक centre $O$ पासूनचे अंतर म्हणून वाचा.`,
    t`एक vertex centre पासून $a$ दूर आहे, आणि **conjugate axis** (अनुबद्ध अक्ष), वक्राच्या आरपार अक्ष, याचे एक टोक $b$.`,
    t`एक focus centre पासून $ae$ दूर आहे, आणि एक directrix त्याच्यापासून $\frac{a}{e}$.`,
    t`एका vertex पासून conjugate axis च्या एका टोकापर्यंतही $ae$ आहे, म्हणून $a^2e^2 = a^2 + b^2$.`,
    t`हा ellipse चा संबंध आहे, चिन्ह उलटलेले, कारण hyperbola चे foci त्याच्या vertices च्या पलीकडे असतात.`,
  ],
  formal: [
    {
      title: t`प्रत्येक गोष्ट एक अंतर आहे`,
      points: [
        t`प्रश्नाने दिलेली प्रत्येक गोष्ट centre $O$ पासूनचे अंतर आहे, एखाद्या अक्षावर मोजलेले.`,
        t`आठवा: vertices $(\pm a, 0)$ आहेत, आणि त्यांना जोडणारा **transverse axis** (छेदक अक्ष) $2a$ लांब आहे.`,
        t`Conjugate axis, वक्राच्या आरपार, त्याची टोके $(0, \pm b)$ आहेत आणि तो $2b$ लांब आहे.`,
        t`Foci $(\pm ae, 0)$ आहेत, म्हणून foci मधील अंतर $2ae$ आहे.`,
        t`नियंत्रिका $x = \pm\frac{a}{e}$ आहेत, म्हणून त्यांच्यामधील अंतर $\frac{2a}{e}$ आहे.`,
      ],
    },
    {
      title: t`आधी लांबी निम्मी करा`,
      points: [
        t`निर्देशक centre पासून मोजतात, म्हणून focus $(ae, 0)$ अर्धी लांबी $ae$ देतो.`,
        t`दिलेली लांबी centre च्या दोन्ही बाजूंना पसरलेली असते, जसे foci मधील अंतर $2ae$.`,
        t`म्हणून एखादा अक्ष, किंवा foci किंवा नियंत्रिकांमधील अंतर, दुप्पट असते: $2a$, $2b$, $2ae$ किंवा $\frac{2a}{e}$.`,
        t`उदाहरणार्थ, $8$ अंतरावरील foci म्हणजे $2ae = 8$, म्हणून $ae = 4$.`,
        t`वापरण्याआधी प्रत्येक दिलेली लांबी निम्मी करा.`,
      ],
    },
    {
      title: t`a, b आणि ae जोडणे`,
      points: [
        t`आठवा: hyperbola साठी, $b^2 = a^2(e^2 - 1)$.`,
        t`गुणाकार केल्यावर, $b^2 = a^2e^2 - a^2$, म्हणजे $a^2e^2 = a^2 + b^2$.`,
        t`हा पायथागोरस आहे: vertex पासून conjugate axis च्या टोकापर्यंत $ae$ आहे, लांब बाजू.`,
        t`Focus centre पासून तितक्याच अंतरावर $ae$ आहे, vertex च्या पलीकडे, कारण $ae > a$.`,
        t`म्हणून तुम्ही $a^2$ आणि $b^2$ मिळवता: ellipse चे $a^2e^2 = a^2 - b^2$ लागू होत नाही.`,
      ],
    },
    {
      title: t`एक बिंदू, मग समीकरण`,
      points: [
        t`Hyperbola वरील बिंदू $(x_1, y_1)$ त्याचे समीकरण पूर्ण करतो.`,
        t`म्हणून $\frac{x_1^2}{a^2} - \frac{y_1^2}{b^2} = 1$: $a^2$ आणि $b^2$ मधील एक समीकरण.`,
        t`उदाहरणार्थ, एक hyperbola $(3, 0)$ आणि $(6, 9)$ मधून जातो.`,
        t`$(3, 0)$ हा $x$-अक्षावर आहे, म्हणून तो एक vertex आहे, आणि $a^2 = 9$.`,
        t`मग $(6, 9)$ वरून $\frac{36}{9} - \frac{81}{b^2} = 1$ मिळते, म्हणून $b^2 = 27$.`,
        t`$a^2$ आणि $b^2$ हे $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ मध्ये ठेवा: इथे $\frac{x^2}{9} - \frac{y^2}{27} = 1$.`,
      ],
    },
  ],
  worked: {
    prompt: t`Centre origin वर, transverse axis $12$ आणि एक focus $(3\sqrt{5}, 0)$ वर असलेल्या hyperbola चे समीकरण शोधा.`,
    steps: [
      t`Transverse axis $2a = 12$ आहे, म्हणून $a = 6$ आणि $a^2 = 36$. Vertices $(\pm 6, 0)$ आहेत.`,
      t`Focus $(ae, 0)$ हा $(3\sqrt{5}, 0)$ आहे, म्हणून $ae = 3\sqrt{5}$ आणि $a^2e^2 = 45$.`,
      t`$a^2 + b^2 = a^2e^2$: $36 + b^2 = 45$, म्हणून $b^2 = 9$. Conjugate axis ची टोके $(0, \pm 3)$ आहेत.`,
      t`Hyperbola $\frac{x^2}{36} - \frac{y^2}{9} = 1$ आहे.`,
    ],
    answer: t`$\frac{x^2}{36} - \frac{y^2}{9} = 1$`,
  },
  remediation: {
    "C12-M1": t`Hyperbola चे foci त्याच्या vertices च्या पलीकडे असतात, म्हणून $ae > a$ आणि $a^2e^2 = a^2 + b^2$, म्हणजे $b^2 = a^2(e^2 - 1)$. Ellipse चे वजा चिन्ह इथे लागू होत नाही.`,
    "C12-M2": t`या लांबी centre च्या दोन्ही बाजूंना पसरलेल्या आहेत: transverse axis $2a$, conjugate axis $2b$, foci $2ae$ अंतरावर, नियंत्रिका $\frac{2a}{e}$ अंतरावर. वापरण्याआधी लांबी निम्मी करा.`,
    "C12-M3": t`Vertices $(\pm a, 0)$ वक्रावर आहेत; foci $(\pm ae, 0)$ आणखी बाहेर आहेत, कारण $e > 1$. Focus हा $ae$ देतो, $a$ नव्हे.`,
    "C12-M4": t`Transverse axis vertices ना जोडतो आणि foci च्या रेषेवर असतो, म्हणून त्याची लांबी $2a$ आहे; conjugate axis, त्याच्या आरपार, याची लांबी $2b$ आहे.`,
    "C12-M5": t`$b^2 = a^2(e^2 - 1) = a^2e^2 - a^2$: focal distance $ae$ च्या वर्गातून $a^2$ वजा करा.`,
  },
  solutions: {
    "C12-Q1": [
      t`Focus $(-7, 0)$ वरून $ae = 7$ (foci $(\pm 7, 0)$ आहेत), म्हणून $a^2e^2 = 49$. Conjugate axis $2b = 10$ वरून $b = 5$, म्हणून $b^2 = 25$.`,
      t`Hyperbola साठी $a^2e^2 = a^2 + b^2$: $49 = a^2 + 25$, म्हणून $a^2 = 24$ आणि vertices $(\pm 2\sqrt{6}, 0)$ आहेत.`,
      t`Hyperbola $\frac{x^2}{24} - \frac{y^2}{25} = 1$ आहे.`,
    ],
    "C12-Q2": [
      t`Foci $2ae = 10$ अंतरावर आहेत, म्हणून $ae = 5$. Conjugate axis $2b = 6$ आहे, म्हणून $b = 3$.`,
      t`$a^2 = a^2e^2 - b^2 = 25 - 9 = 16$, म्हणून vertices $(\pm 4, 0)$ आहेत.`,
      t`Hyperbola $\frac{x^2}{16} - \frac{y^2}{9} = 1$ आहे.`,
    ],
    "C12-Q3": [
      t`नियंत्रिका $x = \pm\frac{a}{e}$ आहेत, म्हणून $\frac{2a}{e} = \frac{18}{5}$ वरून $\frac{a}{e} = \frac{9}{5}$.`,
      t`$a = \frac{9}{5} \times \frac{5}{3} = 3$, म्हणून $a^2 = 9$. Vertices $(\pm 3, 0)$ आहेत आणि foci $(\pm ae, 0) = (\pm 5, 0)$.`,
      t`$b^2 = a^2(e^2 - 1) = 9\left(\frac{25}{9} - 1\right) = 16$. Hyperbola $\frac{x^2}{9} - \frac{y^2}{16} = 1$ आहे.`,
    ],
    "C12-Q4": [
      t`Foci $(\pm ae, 0)$ हे $(\pm 2, 0)$ आहेत, म्हणून $ae = 2$.`,
      t`$a = \frac{2}{3/2} = \frac{4}{3}$, म्हणून $a^2 = \frac{16}{9}$ आणि vertices $\left(\pm\frac{4}{3}, 0\right)$ आहेत.`,
      t`$b^2 = a^2e^2 - a^2 = 4 - \frac{16}{9} = \frac{20}{9}$. Hyperbola $\frac{x^2}{16/9} - \frac{y^2}{20/9} = 1$ आहे, म्हणजे $\frac{9x^2}{16} - \frac{9y^2}{20} = 1$.`,
    ],
    "C12-Q5": [
      t`Conjugate axis $2b = 5$ आहे, म्हणून $b = \frac{5}{2}$. Foci $2ae = 13$ अंतरावर आहेत, म्हणून $ae = \frac{13}{2}$.`,
      t`$a^2 = a^2e^2 - b^2 = \frac{169}{4} - \frac{25}{4} = 36$, म्हणून vertices $(\pm 6, 0)$ आहेत.`,
      t`Hyperbola $\frac{x^2}{36} - \frac{y^2}{25/4} = 1$ आहे, म्हणजे $\frac{x^2}{36} - \frac{4y^2}{25} = 1$.`,
    ],
    "C12-Q6": [
      t`Foci $2ae = 12$ अंतरावर आहेत, म्हणून $ae = 6$ आणि foci $(\pm 6, 0)$ आहेत.`,
      t`$a = \frac{6}{3/2} = 4$, म्हणून $a^2 = 16$ आणि vertices $(\pm 4, 0)$ आहेत.`,
      t`$b^2 = a^2e^2 - a^2 = 36 - 16 = 20$. Hyperbola $\frac{x^2}{16} - \frac{y^2}{20} = 1$ आहे.`,
    ],
  },
};
