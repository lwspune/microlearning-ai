import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c12: ConceptTranslation = {
  id: "C12",
  lang: "mr",
  status: "approved",
  source: "089116425a1ca0",
  hook: {
    prompt: t`$\lvert 3 + 4i \rvert = 5$ आणि $\lvert 1 + i \rvert = \sqrt2$. **गुणाकार न करता $\lvert (3 + 4i)(1 + i) \rvert$ चा अंदाज लावा.**`,
    reveal: t`$5\sqrt2$: moduli चा गुणाकार होतो. तपासणी: $(3 + 4i)(1 + i) = -1 + 7i$, आणि $\lvert -1 + 7i \rvert = \sqrt{50} = 5\sqrt2$.`,
  },
  intuition: [
    t`आठवा: **modulus** $\lvert z \rvert$ म्हणजे $0$ पासून $z$ पर्यंतच्या बाणाची लांबी: $\lvert 1 + i \rvert = \sqrt2$.`,
    t`$2i$ पर्यंतचा बाण $2$ लांब आहे: $\lvert 2i \rvert = 2$.`,
    t`दोन्ही संख्यांचा गुणाकार करा: $(1 + i) \cdot 2i = -2 + 2i$.`,
    t`त्याची लांबी $\sqrt{4 + 4} = 2\sqrt2$ आहे, जी $\sqrt2 \times 2$ आहे.`,
    t`म्हणून गुणल्याने लांबींचा गुणाकार होतो, भागल्याने भागाकार होतो, आणि $z \cdot z \cdot z$ सारखा घात लांबीला त्याच घातापर्यंत नेतो.`,
    t`बेरजा वेगळ्या असतात: complex numbers मिळवल्याने त्यांच्या लांबी मिळत **नाहीत**.`,
  ],
  formal: [
    {
      title: t`गुणाकाराचा modulus`,
      points: [
        t`$z_1 = 2 + i$ घ्या: त्याचा modulus $\sqrt{4 + 1} = \sqrt5$ आहे.`,
        t`$z_2 = 1 + 2i$ घ्या: त्याचा modulus सुद्धा $\sqrt{1 + 4} = \sqrt5$ आहे.`,
        t`त्यांचा गुणाकार $(2 + i)(1 + 2i) = 5i$ आहे.`,
        t`त्याचा modulus $5$ आहे, जो $\sqrt5 \times \sqrt5$ आहे.`,
        t`हे कोणत्याही दोन complex numbers साठी खरे आहे: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$.`,
        t`Moduli चा गुणाकार होतो: $\lvert z_1z_2 \rvert$ म्हणजे $\lvert z_1 \rvert + \lvert z_2 \rvert$ नाही.`,
      ],
    },
    {
      title: t`भागाकाराचा modulus`,
      points: [
        t`**Quotient** (भागाकार) म्हणजे भागाकाराचे उत्तर, जसे $z_2 \ne 0$ सह $\frac{z_1}{z_2}$.`,
        t`$z_1 = -1 + 3i$ घ्या: त्याचा modulus $\sqrt{1 + 9} = \sqrt{10}$ आहे.`,
        t`$z_2 = 1 - i$ घ्या: त्याचा modulus $\sqrt{1 + 1} = \sqrt2$ आहे.`,
        t`त्यांचा भागाकार $\frac{-1 + 3i}{1 - i} = -2 + i$ आहे, ज्याचा modulus $\sqrt5$ आहे.`,
        t`आणि $\sqrt5 = \frac{\sqrt{10}}{\sqrt2}$: म्हणून $\left\lvert \frac{z_1}{z_2} \right\rvert = \frac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$.`,
        t`Moduli चा भागाकार होतो: ते वजा करू नका.`,
      ],
    },
    {
      title: t`घाताचा modulus`,
      points: [
        t`**Power** (घात) $z^n$ म्हणजे $z$ च्या $n$ प्रतींचा गुणाकार, एखाद्या पूर्ण संख्या $n$ साठी.`,
        t`$z = \sqrt3 + i$ घ्या: त्याचा modulus $\sqrt{3 + 1} = 2$ आहे.`,
        t`मग $z^2 = 2 + 2\sqrt3\,i$, ज्याचा modulus $\sqrt{4 + 12} = 4$ आहे, जो $2^2$ आहे.`,
        t`आणि $z^3 = 8i$, ज्याचा modulus $8$ आहे, जो $2^3$ आहे.`,
        t`$z$ ची प्रत्येक प्रत लांबीला $\lvert z \rvert$ ने गुणते, म्हणून $\lvert z^n \rvert = \lvert z \rvert^n$.`,
        t`हा घात आहे, $n$ पट नाही: $\lvert z^n \rvert$ म्हणजे $n\lvert z \rvert$ नाही.`,
      ],
    },
    {
      title: t`वास्तव संख्या गुणिले z`,
      points: [
        t`$z = 2 + i$ घ्या: त्याचा modulus $\sqrt5$ आहे.`,
        t`मग $-2z = -4 - 2i$: त्याचा बाण उलट दिशेला आहे आणि दुप्पट लांब आहे.`,
        t`त्याचा modulus $\sqrt{16 + 4} = 2\sqrt5$ आहे, $-2\sqrt5$ नाही.`,
        t`वास्तव $k$ साठी, $\lvert k \rvert$ म्हणजे चिन्हाशिवायचा $k$: $\lvert -2 \rvert = 2$.`,
        t`म्हणून प्रत्येक वास्तव $k$ साठी $\lvert kz \rvert = \lvert k \rvert\,\lvert z \rvert$: modulus हे अंतर आहे, कधीच ऋण नाही.`,
        t`घात असेल, तर तो फक्त $z$ वर असतो: $\lvert kz^n \rvert = \lvert k \rvert\,\lvert z \rvert^n$.`,
      ],
    },
    {
      title: t`Conjugate आणि modulus`,
      points: [
        t`आठवा: $z = a + ib$ चा **conjugate** $\bar z = a - ib$ आहे, real axis मधील त्याची आरशातील प्रतिमा.`,
        t`आरशातील प्रतिमा $0$ पासून मूळ इतकीच दूर असते, म्हणून $\lvert \bar z \rvert = \lvert z \rvert$.`,
        t`$z = 4 + 3i$ साठी, $z$ आणि $\bar z = 4 - 3i$ दोन्हींचा modulus $5$ आहे.`,
        t`हेही आठवा: $z\bar z = a^2 + b^2$, एक वास्तव संख्या.`,
        t`पायथागोरसनुसार, तो अंतराचा वर्ग आहे: $z\bar z = \lvert z \rvert^2$.`,
        t`इथे $z\bar z = 16 + 9 = 25$: $\lvert z \rvert = 5$ चा **वर्ग**, स्वतः $5$ नाही.`,
      ],
    },
    {
      title: t`बेरजा वेगळ्या होत नाहीत`,
      points: [
        t`$z_1 = 4$ घ्या, ज्याचा modulus $4$ आहे.`,
        t`$z_2 = 3i$, ज्याचा modulus $3$ आहे, त्याचा बाण $z_1$ च्या टोकावर ठेवून मिळवा.`,
        t`बेरीज $z_1 + z_2 = 4 + 3i$ म्हणजे $0$ पासून थेट शेवटापर्यंतचा बाण.`,
        t`त्याचा modulus $\sqrt{16 + 9} = 5$ आहे, $4 + 3 = 7$ नाही.`,
        t`थेट जाणे, $z_1$ आणि मग $z_2$ या वळणाच्या मार्गापेक्षा लहान आहे.`,
        t`म्हणून $\lvert z_1 + z_2 \rvert$ सहसा $\lvert z_1 \rvert + \lvert z_2 \rvert$ पेक्षा कमी असतो: moduli मिळत नाहीत.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\lvert (2 + i)^3(1 - i) \rvert$ काढा.`,
    steps: [
      t`प्रत्येक भागाचा modulus घ्या: $\lvert 2 + i \rvert = \sqrt5$ आणि $\lvert 1 - i \rvert = \sqrt2$.`,
      t`घात modulus ला त्या घातापर्यंत नेतो: $\lvert (2 + i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$.`,
      t`गुणा: $5\sqrt5\cdot\sqrt2 = 5\sqrt{10}$.`,
    ],
    answer: t`$5\sqrt{10}$`,
  },
  remediation: {
    "C12-M1": t`$z\bar z = x^2 + y^2 = \lvert z \rvert^2$: modulus चा **वर्ग**.`,
    "C12-M2": t`Moduli चा गुणाकार होतो: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$.`,
    "C12-M3": t`घात modulus ला त्याच घातापर्यंत नेतो: $\lvert z^n \rvert = \lvert z \rvert^n$.`,
    "C12-M4": t`Moduli चा भागाकार होतो: $\left\lvert \dfrac{z_1}{z_2} \right\rvert = \dfrac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$.`,
    "C12-M5": t`Modulus हे अंतर आहे, कधीच ऋण नाही: $\lvert -2 \rvert = 2$.`,
    "C12-M6": t`घात फक्त ज्या अवयवावर असतो त्याचाच असतो: $\lvert k z^n \rvert = \lvert k \rvert\,\lvert z \rvert^n$.`,
    "C12-M7": t`घातांक फक्त गुणाकारात मिळतात, $r^3 \cdot r^2 = r^5$. बेरीज बेरीजच राहते: $3^3 + 3^2 = 27 + 9$.`,
  },
  solutions: {
    "C12-Q1": [
      t`प्रत्येक भागाचा modulus घ्या: $\lvert 3 + 4i \rvert = 5$ आणि $\lvert 1 - 2i \rvert = \sqrt5$.`,
      t`घात modulus ला त्या घातापर्यंत नेतो: $\lvert (3 + 4i)^2 \rvert = 5^2 = 25$.`,
      t`गुणा: $25\sqrt5$.`,
    ],
    "C12-Q2": [
      t`प्रत्येक भागाचा modulus घ्या: $\lvert 1 + i \rvert = \sqrt2$ आणि $\lvert 3 + 4i \rvert = 5$.`,
      t`घात modulus ला त्या घातापर्यंत नेतो: $\lvert (1 + i)^4 \rvert = (\sqrt2)^4 = 4$.`,
      t`गुणा: $4 \times 5 = 20$.`,
    ],
    "C12-Q3": [
      t`प्रत्येक भागाचा modulus घ्या: $\lvert 2 - i \rvert = \sqrt5$ आणि $\lvert 1 + 2i \rvert = \sqrt5$.`,
      t`घात modulus ला त्या घातापर्यंत नेतो: $\lvert (2 - i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$.`,
      t`भागा: $\dfrac{5\sqrt5}{\sqrt5} = 5$.`,
    ],
    "C12-Q4": [
      t`वास्तव अवयव आपला आकार देतो: $\lvert -2 \rvert = 2$.`,
      t`घात modulus ला त्या घातापर्यंत नेतो: $\lvert z^3 \rvert = 5^3 = 125$.`,
      t`गुणा: $2 \times 125 = 250$. Modulus कधीच ऋण नसतो.`,
    ],
    "C12-Q5": [
      t`घात modulus ला त्या घातापर्यंत नेतो: $\lvert z^3 \rvert = 3^3 = 27$.`,
      t`$z\bar z = \lvert z \rvert^2 = 9$.`,
      t`मिळवा: $27 + 9 = 36$. इथे मिळवणे चालते: या दोन वास्तव संख्या आहेत.`,
    ],
  },
};
