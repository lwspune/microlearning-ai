import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c10: ConceptTranslation = {
  id: "C10",
  lang: "mr",
  status: "approved",
  source: "02b21b9a90422f",
  hook: {
    prompt: t`$A = \begin{bmatrix} 2 & -4 \\ 1 & -2 \end{bmatrix}$ हा zero matrix नाही. **$A^2$ हा zero matrix असू शकतो का?**`,
    reveal: t`होय. $A^2 = A \cdot A$: row 1 गुणिले column 1 म्हणजे $2(2) + (-4)(1) = 0$, आणि इतर तिन्ही घटकही $0$ येतात. म्हणून $A \ne O$ असूनही $A^2 = O$. संख्यांमध्ये, $a^2 = 0$ वरून $a = 0$ च असते; matrices मध्ये तसे नाही.`,
  },
  intuition: [
    t`Matrices चा गुणाकार संख्यांच्या गुणाकारासारखा नाही.`,
    t`आठवा: $AB$ चा प्रत्येक घटक म्हणजे $A$ ची एक row गुणिले $B$ चा एक column.`,
    t`$BA$ त्याऐवजी $B$ च्या rows $A$ च्या columns शी जोडतो, म्हणून दोन्ही सहसा वेगळे येतात.`,
    t`आठवा: **null matrix** (शून्य आव्यूह, zero matrix) $O$ चा प्रत्येक घटक $0$ असतो.`,
    t`Rows आणि columns पूर्णपणे रद्द होऊ शकतात: दोन **non-zero** (शून्येतर) matrices, ज्यांच्यातील प्रत्येकाचा एखादा घटक $0$ नाही, गुणून $O$ देऊ शकतात.`,
    t`म्हणून क्रम बदलणारा संख्यांचा नियम, जसा $(a + b)^2 = a^2 + 2ab + b^2$ मध्ये $ba = ab$, matrices साठी पुन्हा तपासला पाहिजे.`,
  ],
  formal: [
    {
      title: t`क्रम महत्त्वाचा आहे`,
      points: [
        t`सर्वसाधारणपणे $AB \ne BA$: दोन अवयवांचा क्रम महत्त्वाचा आहे.`,
        t`$A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ आणि $B = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ घ्या.`,
        t`$A$ च्या rows गुणिले $B$ चे columns वरून $AB = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ मिळतो.`,
        t`$B$ च्या rows गुणिले $A$ चे columns वरून $BA = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$ मिळतो.`,
        t`दोन्ही गुणाकार वेगळे आहेत, म्हणून प्रत्येक गुणाकार लिहिलेल्या क्रमानेच ठेवा.`,
      ],
    },
    {
      title: t`शून्य गुणाकार`,
      points: [
        t`$A \ne O$ आणि $B \ne O$ असूनही $AB = O$ होऊ शकतो.`,
        t`सुरुवातीच्या प्रश्नात, $A = \begin{bmatrix} 2 & -4 \\ 1 & -2 \end{bmatrix}$ हा $O$ नाही.`,
        t`तरीही $A \cdot A = O$: $A$ ची प्रत्येक row गुणिले $A$ चा प्रत्येक column $0$ येतो.`,
        t`म्हणून $AB = O$ वरून $A = O$ किंवा $B = O$ असा निष्कर्ष काढता येत नाही.`,
        t`संख्यांमध्ये, $ab = 0$ वरून $a = 0$ किंवा $b = 0$ च असते; matrices मध्ये तसे नाही.`,
      ],
    },
    {
      title: t`Matrix चे घात`,
      points: [
        t`आठवा: **square matrix** मध्ये जितक्या rows तितकेच columns असतात, म्हणून $A \cdot A$ व्याख्यित आहे.`,
        t`त्याचा **square** (वर्ग) $A^2$ म्हणजे $A \cdot A$, row गुणिले column ने काढलेला.`,
        t`त्याचा **cube** (घन) $A^3$ म्हणजे $A^2 \cdot A$: वर्गाला आणखी एकदा $A$ ने गुणा.`,
        t`घटकांचा एकेक करून वर्ग कधीच करू नका: तो matrix गुणाकार नाही.`,
        t`$A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ साठी, row गुणिले column वरून $A^2 = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ मिळतो.`,
        t`प्रत्येक घटकाचा वर्ग केल्यास स्वतः $A$ परत मिळाला असता, जे चूक आहे.`,
      ],
    },
    {
      title: t`कंस सोडवणे`,
      points: [
        t`विस्तारासाठी, पहिल्या कंसातील प्रत्येक पदाला दुसऱ्यातील प्रत्येक पदाने, त्यांचा क्रम राखून, गुणा.`,
        t`$(A + B)^2$ म्हणजे $(A + B)(A + B)$.`,
        t`म्हणून $(A + B)^2 = A^2 + AB + BA + B^2$.`,
        t`त्याचप्रमाणे $(A + B)(A - B)$ बरोबर $A^2 - AB + BA - B^2$.`,
        t`मधली पदे $AB$ आणि $BA$ सहसा वेगवेगळे matrices असतात, म्हणून ती एकत्र होत नाहीत.`,
        t`ही $A^2 + 2AB + B^2$ आणि $A^2 - B^2$ पर्यंत तेव्हाच लहान होतात जेव्हा $AB = BA$.`,
      ],
    },
    {
      title: t`Unit matrix (एकक आव्यूह)`,
      points: [
        t`आठवा: **unit matrix** (एकक आव्यूह, identity) $I$ च्या कर्णावर, वर-डावीकडून खाली-उजवीकडे, $1$ आणि इतरत्र $0$ असतात.`,
        t`$AI = IA = A$: $I$ ने कोणत्याही बाजूने गुणल्यास $A$ बदलत नाही.`,
        t`म्हणून $(A + I)(A - I)$ बरोबर $A^2 - AI + IA - I^2$.`,
        t`मधली पदे रद्द होतात आणि $I^2 = I$, म्हणून $(A + I)(A - I) = A^2 - I$.`,
        t`$A^2 - 3A + 2I$ मध्ये, पद $2I = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$ फक्त कर्ण बदलते, प्रत्येक घटक नाही.`,
      ],
    },
    {
      title: t`अज्ञात संख्या शोधणे`,
      points: [
        t`काही प्रश्न $A^2 - 3A + kI = O$ सारख्या समीकरणातील संख्या $k$ विचारतात.`,
        t`सर्व पदे एका बाजूला ठेवा, म्हणजे समीकरण (एक matrix) $= O$ असे वाचले जाईल.`,
        t`ती बाजू घटकवार एक matrix म्हणून काढा.`,
        t`मग प्रत्येक घटक $0$ इतका ठेवा आणि $k$ साठी सोडवा.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $A = \begin{bmatrix} 1 & 0 \\ -1 & 7 \end{bmatrix}$, तर $A^2 - 8A - kI = O$ होण्यासाठी $k$ काढा, जिथे $I$ हा unit matrix आणि $O$ हा null matrix आहे, दोन्ही कोटी $2$ चे.`,
    steps: [
      t`$A^2 = A \cdot A$, row गुणिले column: $\begin{bmatrix} 1 + 0 & 0 + 0 \\ -1 - 7 & 0 + 49 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 \\ -8 & 49 \end{bmatrix}$.`,
      t`$8A = \begin{bmatrix} 8 & 0 \\ -8 & 56 \end{bmatrix}$, म्हणून $A^2 - 8A$ $= \begin{bmatrix} -7 & 0 \\ 0 & -7 \end{bmatrix}$.`,
      t`$kI = \begin{bmatrix} k & 0 \\ 0 & k \end{bmatrix}$ मध्ये $k$ फक्त कर्णावर आहे, म्हणून $A^2 - 8A - kI$ $= \begin{bmatrix} -7 - k & 0 \\ 0 & -7 - k \end{bmatrix}$.`,
      t`हे $O$ असते जेव्हा $-7 - k = 0$, म्हणून $k = -7$.`,
    ],
    answer: t`$k = -7$`,
  },
  remediation: {
    "C10-M1": t`सर्वसाधारणपणे $AB \ne BA$: $AB$ मध्ये $A$ च्या rows $B$ च्या columns बरोबर, आणि $BA$ मध्ये उलट. प्रत्येक गुणाकार लिहिलेल्या क्रमानेच ठेवा, म्हणून $(A + B)^2 = A^2 + AB + BA + B^2$.`,
    "C10-M2": t`$A^2$ म्हणजे $A \cdot A$: प्रत्येक घटक म्हणजे $A$ ची एक row गुणिले $A$ चा एक column. संगत घटक गुणणे म्हणजे matrix गुणाकार नव्हे.`,
    "C10-M3": t`$I$ हा unit matrix आहे: कर्णावर $1$ आणि इतरत्र $0$. म्हणून $cI$ फक्त कर्ण घटकांमध्ये $c$ मिळवतो.`,
    "C10-M4": t`$(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2$. मधली पदे $AB + BA$ राहतात, जोपर्यंत त्यांची बेरीज $O$ होत नाही.`,
    "C10-M5": t`$AB$ चा घटक $(i, j)$ म्हणजे $A$ ची row $i$ गुणिले $B$ चा **column** $j$. पहिल्या matrix च्या row मध्ये आडवे आणि दुसऱ्याच्या column मध्ये खाली जा.`,
    "C10-M6": t`प्रत्येक पद एका बाजूला आणा, म्हणजे समीकरण (एक matrix) $= O$ असे वाचले जाईल, मग प्रत्येक घटक $0$ ठेवा. बाजू बदलणारे पद आपले चिन्ह बदलते.`,
  },
  solutions: {
    "C10-Q1": [
      t`$BA$ हा $B$ च्या rows $A$ च्या columns बरोबर घेतो. $B$ ची row 1 म्हणजे $(4, 1)$: $4(1) + 1(4) = 8$ आणि $4(-3) + 1(2) = -10$.`,
      t`$B$ ची row 2 म्हणजे $(3, -2)$: $3(1) + (-2)(4) = -5$ आणि $3(-3) + (-2)(2) = -13$.`,
      t`म्हणून $BA = \begin{bmatrix} 8 & -10 \\ -5 & -13 \end{bmatrix}$. $AB = \begin{bmatrix} -5 & 7 \\ 22 & 0 \end{bmatrix}$ शी तुलना करा: इथे $AB \ne BA$.`,
    ],
    "C10-Q2": [
      t`$A + B = \begin{bmatrix} 13 & 0 \\ 20 & -3 \end{bmatrix}$.`,
      t`$(A + B)^2 = (A + B)(A + B)$. Row 1: $13(13) + 0 = 169$ आणि $0 + 0 = 0$. Row 2: $20(13) + (-3)(20) = 200$ आणि $0 + (-3)(-3) = 9$.`,
      t`म्हणून $(A + B)^2 = \begin{bmatrix} 169 & 0 \\ 200 & 9 \end{bmatrix}$. इथे $BA = O$ पण $AB = \begin{bmatrix} 80 & -64 \\ 100 & -80 \end{bmatrix}$, म्हणून $(A + B)^2 = A^2 + AB + B^2$, $A^2 + 2AB + B^2$ नाही.`,
    ],
    "C10-Q3": [
      t`$A^2 = A \cdot A = \begin{bmatrix} 9 - 1 & 3 + 2 \\ -3 - 2 & -1 + 4 \end{bmatrix} = \begin{bmatrix} 8 & 5 \\ -5 & 3 \end{bmatrix}$.`,
      t`$5A = \begin{bmatrix} 15 & 5 \\ -5 & 10 \end{bmatrix}$ आणि $7I = \begin{bmatrix} 7 & 0 \\ 0 & 7 \end{bmatrix}$.`,
      t`$A^2 - 5A + 7I = \begin{bmatrix} 8 - 15 + 7 & 5 - 5 + 0 \\ -5 + 5 + 0 & 3 - 10 + 7 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = O$.`,
    ],
    "C10-Q4": [
      t`$A^2 = A \cdot A = \begin{bmatrix} 9 - 8 & -6 + 4 \\ 12 - 8 & -8 + 4 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 4 & -4 \end{bmatrix}$.`,
      t`$kA - 2I = \begin{bmatrix} 3k - 2 & -2k \\ 4k & -2k - 2 \end{bmatrix}$.`,
      t`समान matrices चे घटक समान असतात. घटक $(1, 2)$: $-2 = -2k$, म्हणून $k = 1$. इतर घटक जुळतात: $3 - 2 = 1$, $4 = 4$, $-2 - 2 = -4$. म्हणून $k = 1$.`,
    ],
    "C10-Q5": [
      t`$A^2 = A \cdot A = \begin{bmatrix} 9 + 20 & -15 - 10 \\ -12 - 8 & 20 + 4 \end{bmatrix} = \begin{bmatrix} 29 & -25 \\ -20 & 24 \end{bmatrix}$.`,
      t`$5A = \begin{bmatrix} 15 & -25 \\ -20 & 10 \end{bmatrix}$, म्हणून $A^2 - 5A = \begin{bmatrix} 14 & 0 \\ 0 & 14 \end{bmatrix}$.`,
      t`मग $A^2 - 5A + kI = \begin{bmatrix} 14 + k & 0 \\ 0 & 14 + k \end{bmatrix} = O$ वरून $14 + k = 0$, म्हणून $k = -14$.`,
    ],
    "C10-Q6": [
      t`$AI = IA = A$, म्हणून $(A + I)(A - I) = A^2 - AI + IA - I^2 = A^2 - I$.`,
      t`$A^2 = A \cdot A$, row गुणिले column: $\begin{bmatrix} 11 & 10 & 4 \\ 25 & 40 & 2 \\ 35 & 7 & 23 \end{bmatrix}$. उदाहरणार्थ, घटक $(2, 2)$ म्हणजे $5(2) + 4(4) + 2(7) = 40$.`,
      t`प्रत्येक कर्ण घटकातून $1$ वजा करा: $(A + I)(A - I) = \begin{bmatrix} 10 & 10 & 4 \\ 25 & 39 & 2 \\ 35 & 7 & 22 \end{bmatrix}$.`,
    ],
  },
};
