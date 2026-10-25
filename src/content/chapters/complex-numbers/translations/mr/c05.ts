import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "mr",
  status: "approved",
  source: "1abeb5a658595a",
  hook: {
    prompt: t`$3 + 4i$ आणि $3 - 4i$ घ्या. त्यांची बेरीज करा, मग गुणाकार करा. **दोन्ही उत्तरांत काय सामाईक आहे?**`,
    reveal: t`दोन्ही वास्तव आहेत: बेरीज $6$ आहे आणि गुणाकार $9 + 16 = 25$ आहे. एखादी संख्या आणि तिचा conjugate मिळून नेहमी वास्तव संख्या देतात.`,
  },
  intuition: [
    t`$z = a + ib$ हा बिंदू $(a, b)$ समजा: real part आडवा, imaginary part वर.`,
    t`आडवा अक्ष, ज्यावर Re लिहिले आहे, तो **real axis** (वास्तव अक्ष) आहे: वास्तव संख्या त्याच्यावर असतात.`,
    t`$z$ चा **conjugate** (संयुग्मी), जो $\bar z$ असा लिहितात आणि "z bar" असा वाचतात, real part ठेवतो आणि imaginary part चे चिन्ह उलटतो.`,
    t`म्हणून $\bar z$ ही real axis मधील $z$ ची **mirror image** (आरशातील प्रतिमा) आहे: $z$ जितका वर तितकाच खाली.`,
    t`$z$ आणि $\bar z$ मिळवल्याने imaginary parts रद्द होतात, म्हणून $z + \bar z$ हा real axis वर असतो.`,
    t`त्यांचा गुणाकार केल्यानेही imaginary parts रद्द होतात, म्हणून $z\bar z$ सुद्धा वास्तव संख्या आहे.`,
  ],
  formal: [
    {
      title: t`a + ib चा conjugate`,
      points: [
        t`$z = a + ib$ साठी, जिथे $a$ आणि $b$ वास्तव आहेत, conjugate म्हणजे $\bar z = a - ib$.`,
        t`उदाहरणार्थ, $\overline{2 + 3i} = 2 - 3i$: बिंदू उंची $3$ वरून $-3$ वर येतो.`,
        t`आणि $\overline{-3 - 2i} = -3 + 2i$: real axis च्या खालचा बिंदू त्याच्या वर जातो.`,
        t`Real part कधीच बदलत नाही, म्हणून $\bar z$ हा $z$ च्या बरोबर वर किंवा खाली असतो.`,
      ],
    },
    {
      title: t`बेरीज आणि फरक`,
      points: [
        t`बेरीज: $z + \bar z = (a + ib) + (a - ib)$.`,
        t`Imaginary parts रद्द होतात, $2a$ उरतो: हा $2\operatorname{Re} z$ आहे, real part च्या दुप्पट.`,
        t`वजाबाकी: $z - \bar z = (a + ib) - (a - ib)$.`,
        t`आता real parts रद्द होतात, $2ib$ उरतो: हा $2i\operatorname{Im} z$ आहे.`,
        t`$i$ ठेवा: $z - \bar z$ हा **purely imaginary** (शुद्ध काल्पनिक) आहे, म्हणजे त्याचा real part $0$ आहे.`,
      ],
    },
    {
      title: t`संख्या गुणिले तिचा conjugate`,
      points: [
        t`गुणाकार: $z\bar z = (a + ib)(a - ib)$.`,
        t`विस्तार करा: $a^2 - iab + iab - i^2b^2$.`,
        t`मधली पदे रद्द होतात, आणि $i^2 = -1$ मुळे $-i^2b^2$ चे $+b^2$ होते.`,
        t`म्हणून $z\bar z = a^2 + b^2$, एक वास्तव संख्या.`,
        t`पायथागोरसनुसार, $a^2 + b^2$ हा $0$ पासून $z$ पर्यंतच्या अंतराचा वर्ग आहे.`,
        t`म्हणून $z\bar z$ कधीच ऋण नसतो.`,
      ],
    },
    {
      title: t`बेरजेचा conjugate`,
      points: [
        t`$z_1 = 2 + i$ आणि $z_2 = 1 + 2i$ घ्या: त्यांची बेरीज $3 + 3i$ आहे.`,
        t`त्यांचे conjugates, $2 - i$ आणि $1 - 2i$, मिळून $3 - 3i$ देतात.`,
        t`तो $3 + 3i$ चा conjugate आहे: म्हणून $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$.`,
        t`संपूर्ण चित्र real axis मध्ये उलटते, म्हणून बेरीजही त्याच्याबरोबर उलटते.`,
      ],
    },
    {
      title: t`गुणाकाराचा conjugate`,
      points: [
        t`$z_1 = 1 + i$ आणि $z_2 = 2 + i$ घ्या: त्यांचा गुणाकार $1 + 3i$ आहे.`,
        t`त्यांच्या conjugates चा गुणाकार $(1 - i)(2 - i) = 1 - 3i$ आहे, आरशातील प्रतिमा.`,
        t`म्हणून $\overline{z_1 z_2} = \bar z_1\,\bar z_2$: गुणाकाराचा conjugate म्हणजे conjugates चा गुणाकार.`,
        t`प्रत्येक अवयवाचा conjugate घ्या, किंवा आधी गुणाकार करून मग उत्तराचा conjugate घ्या.`,
        t`फक्त एकाच अवयवाचा conjugate कधीच घेऊ नका: $(1 - i)(2 + i) = 3 - i$, ही वेगळी संख्या आहे.`,
      ],
    },
  ],
  worked: {
    prompt: t`$z = 1 - 6i$ साठी, $z + \bar z$ आणि $z\bar z$ काढा.`,
    steps: [
      t`Imaginary part चे चिन्ह उलटा: $\bar z = 1 + 6i$.`,
      t`बेरीज: $(1 - 6i) + (1 + 6i) = 2$.`,
      t`गुणाकार: $(1 - 6i)(1 + 6i) = 1 - 36i^2$, जो $1 + 36 = 37$ आहे.`,
    ],
    answer: t`$z + \bar z = 2$ आणि $z\bar z = 37$.`,
  },
  remediation: {
    "C05-M1": t`Conjugate real part ठेवतो आणि imaginary part चे चिन्ह उलटतो: $\overline{a + ib} = a - ib$.`,
    "C05-M2": t`तो $-z$ आहे, $\bar z$ नाही. फक्त imaginary part चे चिन्ह बदलते.`,
    "C05-M3": t`$(a + ib)(a - ib) = a^2 - i^2b^2 = a^2 + b^2$. $i^2$ मुळे वजाचे अधिक होते, म्हणून $z\bar z$ कधीच ऋण नसतो.`,
    "C05-M4": t`$z - \bar z = (a + ib) - (a - ib) = 2ib$. उत्तर purely imaginary आहे: $i$ ठेवा.`,
    "C05-M5": t`$\overline{z_1 z_2} = \bar z_1\,\bar z_2$: दोन्ही अवयवांचे conjugate घ्या, किंवा आधी गुणाकार करून मग उत्तराचा conjugate घ्या.`,
  },
  solutions: {
    "C05-Q1": [
      t`Conjugate घ्या: $\bar z = 5 + 2i$.`,
      t`गुणा: $(5 - 2i)(5 + 2i) = 25 - 4i^2$.`,
      t`$i^2 = -1$ वापरा: $25 + 4 = 29$.`,
    ],
    "C05-Q2": [
      t`Conjugate घ्या: $\bar z = 2 - 7i$.`,
      t`दोन्ही भाग वजा करा: $(2 - 2) + \big(7 - (-7)\big)i = 14i$. $i$ ठेवा.`,
    ],
    "C05-Q3": [
      t`आधी गुणा: $(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 5 + 5i$.`,
      t`उत्तराचा conjugate घ्या, imaginary part चे चिन्ह उलटून: $5 - 5i$.`,
    ],
    "C05-Q4": [
      t`Conjugate घ्या: $\bar z = -1 - 3i$.`,
      t`गुणा: $(-1 + 3i)(-1 - 3i) = 1 - 9i^2$.`,
      t`$i^2 = -1$ वापरा: $1 + 9 = 10$.`,
    ],
    "C05-Q5": [
      t`आधी गुणा: $(2 - i)(4 + i) = 8 + 2i - 4i - i^2 = 9 - 2i$.`,
      t`उत्तराचा conjugate घ्या: $9 + 2i$.`,
    ],
    "C05-Q6": [
      t`Conjugate घ्या: $\bar z = 4 + i$.`,
      t`दोन्ही भाग वजा करा: $(4 - 4) + (-1 - 1)i = -2i$. $i$ ठेवा.`,
    ],
  },
};
