import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "mr",
  status: "approved",
  source: "0d25feeb5d386e",
  hook: {
    prompt: t`समजा $a + ib = 3 - 5i$, जिथे $a$ आणि $b$ वास्तव आहेत. **$a$ आणि $b$ किती असले पाहिजेत?**`,
    reveal: t`$a = 3$ आणि $b = -5$. Real parts जुळतात आणि imaginary parts जुळतात: complex numbers मधील एक समीकरण म्हणजे खरे तर दोन समीकरणे.`,
  },
  intuition: [
    t`आठवा: $i$ ही $i^2 = -1$ असलेली नवीन संख्या आहे.`,
    t`**Complex number** (संमिश्र संख्या) म्हणजे एक वास्तव संख्या अधिक एक वास्तव संख्या गुणिले $i$, जसे $3 - 5i$.`,
    t`म्हणून प्रत्येक complex number चे दोन वेगळे भाग असतात, एखाद्या बिंदूच्या दोन निर्देशकांसारखे.`,
    t`**Real part** (वास्तव भाग) म्हणजे एकटी संख्या, आणि **imaginary part** (काल्पनिक भाग) म्हणजे $i$ ला गुणणारी संख्या.`,
    t`दोन complex numbers तेव्हाच समान असतात जेव्हा दोन्ही भाग जुळतात.`,
    t`म्हणून complex numbers मधील एका समीकरणातून वास्तव संख्यांमधील दोन समीकरणे मिळतात.`,
  ],
  formal: [
    {
      title: t`Standard form (प्रमाणित रूप)`,
      points: [
        t`$z = x + iy$ असा लिहिलेला complex number, जिथे $x$ आणि $y$ वास्तव आहेत, **standard form** मध्ये असतो.`,
        t`त्याचा real part $x$ आहे, $i$ नसलेले पद: आपण $\operatorname{Re} z = x$ असे लिहितो.`,
        t`त्याचा imaginary part $y$ आहे, $i$ चा **coefficient** (सहगुणक), म्हणजे त्याला गुणणारी संख्या: $\operatorname{Im} z = y$.`,
        t`Imaginary part म्हणजे वास्तव संख्या $y$, $i$ **शिवाय**.`,
        t`तो आपले चिन्ह ठेवतो: $\operatorname{Im}(3 - 4i) = -4$.`,
      ],
    },
    {
      title: t`Complex numbers ची समानता`,
      points: [
        t`समजा $a$, $b$, $c$ आणि $d$ वास्तव संख्या आहेत.`,
        t`मग $a + ib = c + id$ नेमके तेव्हा जेव्हा $a = c$ आणि $b = d$.`,
        t`म्हणजे real parts समान आहेत आणि imaginary parts समान आहेत.`,
        t`हे दोन्ही बाजूंनी चालते: जुळणारे भाग समान संख्या देतात, आणि समान संख्यांचे भाग जुळतात.`,
        t`सजातीयाशी सजातीय जुळवा: real part कधीच imaginary part शी नाही.`,
      ],
    },
    {
      title: t`तुलनेआधी standard form`,
      points: [
        t`प्रत्येक बाजू $x + iy$ या रूपात आल्यावरच भागांची तुलना करा.`,
        t`उदाहरणार्थ, $i(2 + 5i)$ घ्या.`,
        t`गुणाकार करा: $i(2 + 5i) = 2i + 5i^2$.`,
        t`$i^2$ च्या जागी $-1$ ठेवा: हे $2i - 5$ आहे.`,
        t`Standard form मध्ये ते $-5 + 2i$ आहे, real part $-5$ आणि imaginary part $2$ सह.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $(x - 1) + i(2y + 3) = 4 - i$, जिथे $x, y$ वास्तव आहेत, तर $x$ आणि $y$ काढा.`,
    steps: [
      t`Real parts समान ठेवा: $x - 1 = 4$, म्हणून $x = 5$.`,
      t`Imaginary parts समान ठेवा: $2y + 3 = -1$, म्हणून $y = -2$.`,
    ],
    answer: t`$x = 5,\ y = -2$`,
  },
  remediation: {
    "C03-M1": t`$\operatorname{Im}(a + ib) = b$, एक वास्तव संख्या. $i$ फक्त हा कोणता भाग आहे ते दाखवतो.`,
    "C03-M2": t`Imaginary part म्हणजे $i$ चा सहगुणक, $i$ नसलेले पद नव्हे.`,
    "C03-M3": t`Imaginary part आपले चिन्ह ठेवतो: $\operatorname{Im}(3 - 4i) = -4$.`,
    "C03-M4": t`सजातीयाशी सजातीय जुळवा: real part शी real part, imaginary part शी imaginary part.`,
    "C03-M5": t`$x + p = c$ सोडवण्यासाठी, दोन्ही बाजूंतून $p$ वजा करा: $x = c - p$.`,
    "C03-M6": t`प्रत्येक भाग त्याच्या चिन्हासह उतरवा. $5 + 3i$ मध्ये imaginary part $+3$ आहे, म्हणून $y - 1 = 3$.`,
  },
  solutions: {
    "C03-Q1": [
      t`Imaginary part म्हणजे $i$ चा सहगुणक, चिन्हासह, $i$ शिवाय.`,
      t`$3 - 4i$ मध्ये तो सहगुणक $-4$ आहे, म्हणून $\operatorname{Im}(3 - 4i) = -4$.`,
    ],
    "C03-Q2": [
      t`आधी standard form मध्ये आणा: $i(-4 - i) = -4i - i^2 = 1 - 4i$.`,
      t`$i$ चा सहगुणक $-4$ आहे, म्हणून imaginary part $-4$ आहे.`,
    ],
    "C03-Q3": [
      t`Real parts समान ठेवा: $x + 2 = 5$, म्हणून $x = 3$.`,
      t`Imaginary parts समान ठेवा: $y - 1 = 3$, म्हणून $y = 4$.`,
    ],
    "C03-Q4": [
      t`Real parts समान ठेवा: $2x - 1 = 5$, म्हणून $2x = 6$ आणि $x = 3$.`,
      t`Imaginary parts समान ठेवा: $3y + 2 = -4$, म्हणून $3y = -6$ आणि $y = -2$.`,
    ],
    "C03-Q5": [
      t`ते standard form मध्ये लिहा: $-6i = 0 + (-6)i$.`,
      t`$i$ चा सहगुणक $-6$ आहे, म्हणून $\operatorname{Im}(-6i) = -6$. Real part $0$ आहे.`,
    ],
  },
};
