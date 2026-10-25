import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c10: ConceptTranslation = {
  id: "C10",
  lang: "hi",
  status: "approved",
  source: "02b21b9a90422f",
  hook: {
    prompt: t`$A = \begin{bmatrix} 2 & -4 \\ 1 & -2 \end{bmatrix}$ zero matrix नहीं है। **क्या $A^2$ zero matrix हो सकता है?**`,
    reveal: t`हाँ। $A^2 = A \cdot A$: row 1 गुणा column 1 है $2(2) + (-4)(1) = 0$, और बाकी तीनों घटक भी $0$ आते हैं। इसलिए $A \ne O$ होते हुए भी $A^2 = O$। संख्याओं में, $a^2 = 0$ से $a = 0$ ही होता है; matrices में ऐसा नहीं है।`,
  },
  intuition: [
    t`Matrices का गुणा संख्याओं के गुणा जैसा नहीं है।`,
    t`याद कीजिए: $AB$ का हर घटक $A$ की एक row गुणा $B$ का एक column है।`,
    t`$BA$ इसके बजाय $B$ की rows को $A$ के columns से जोड़ता है, इसलिए दोनों आमतौर पर अलग आते हैं।`,
    t`याद कीजिए: **null matrix** (शून्य आव्यूह, zero matrix) $O$ का हर घटक $0$ है।`,
    t`Rows और columns पूरी तरह कट सकते हैं: दो **non-zero** (शून्येतर) matrices, जिनमें से हर एक का कोई घटक $0$ नहीं है, गुणा होकर $O$ दे सकते हैं।`,
    t`इसलिए संख्याओं का जो नियम क्रम बदलता है, जैसे $(a + b)^2 = a^2 + 2ab + b^2$ में $ba = ab$, उसे matrices के लिए फिर से जाँचना होगा।`,
  ],
  formal: [
    {
      title: t`क्रम मायने रखता है`,
      points: [
        t`सामान्यतः $AB \ne BA$: दोनों गुणनखंडों का क्रम मायने रखता है।`,
        t`$A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ और $B = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ लीजिए।`,
        t`$A$ की rows गुणा $B$ के columns से $AB = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ मिलता है।`,
        t`$B$ की rows गुणा $A$ के columns से $BA = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$ मिलता है।`,
        t`दोनों गुणनफल अलग हैं, इसलिए हर गुणनफल को उसी क्रम में रखिए जिसमें वह लिखा है।`,
      ],
    },
    {
      title: t`शून्य गुणनफल`,
      points: [
        t`$A \ne O$ और $B \ne O$ होते हुए भी $AB = O$ हो सकता है।`,
        t`शुरुआती प्रश्न में, $A = \begin{bmatrix} 2 & -4 \\ 1 & -2 \end{bmatrix}$, $O$ नहीं है।`,
        t`फिर भी $A \cdot A = O$: $A$ की हर row गुणा $A$ का हर column $0$ आता है।`,
        t`इसलिए $AB = O$ से आप यह निष्कर्ष नहीं निकाल सकते कि $A = O$ या $B = O$।`,
        t`संख्याओं में, $ab = 0$ से $a = 0$ या $b = 0$ होता ही है; matrices में ऐसा नहीं है।`,
      ],
    },
    {
      title: t`Matrix की घातें`,
      points: [
        t`याद कीजिए: **square matrix** में जितनी rows उतने ही columns होते हैं, इसलिए $A \cdot A$ परिभाषित है।`,
        t`इसका **square** (वर्ग) $A^2$ का अर्थ है $A \cdot A$, row गुणा column से निकाला गया।`,
        t`इसका **cube** (घन) $A^3$ का अर्थ है $A^2 \cdot A$: वर्ग को एक बार और $A$ से गुणा कीजिए।`,
        t`घटकों का एक-एक करके वर्ग कभी मत कीजिए: वह matrix गुणा नहीं है।`,
        t`$A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ के लिए, row गुणा column से $A^2 = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ मिलता है।`,
        t`हर घटक का वर्ग करने से खुद $A$ वापस मिलता, जो ग़लत है।`,
      ],
    },
    {
      title: t`कोष्ठक खोलना`,
      points: [
        t`विस्तार के लिए, पहले कोष्ठक के हर पद को दूसरे के हर पद से, उनका क्रम बनाए रखते हुए, गुणा कीजिए।`,
        t`$(A + B)^2$ का अर्थ है $(A + B)(A + B)$।`,
        t`इसलिए $(A + B)^2 = A^2 + AB + BA + B^2$।`,
        t`इसी तरह $(A + B)(A - B)$ बराबर है $A^2 - AB + BA - B^2$ के।`,
        t`बीच के पद $AB$ और $BA$ आमतौर पर अलग matrices होते हैं, इसलिए वे मिलते नहीं।`,
        t`ये $A^2 + 2AB + B^2$ और $A^2 - B^2$ तक तभी छोटे होते हैं जब $AB = BA$।`,
      ],
    },
    {
      title: t`Unit matrix (इकाई आव्यूह)`,
      points: [
        t`याद कीजिए: **unit matrix** (इकाई आव्यूह, identity) $I$ के विकर्ण पर, ऊपर-बाएँ से नीचे-दाएँ, $1$ और बाकी जगह $0$ होते हैं।`,
        t`$AI = IA = A$: $I$ से किसी भी ओर गुणा करने पर $A$ नहीं बदलता।`,
        t`इसलिए $(A + I)(A - I)$ बराबर है $A^2 - AI + IA - I^2$ के।`,
        t`बीच के पद कट जाते हैं और $I^2 = I$, इसलिए $(A + I)(A - I) = A^2 - I$।`,
        t`$A^2 - 3A + 2I$ में, पद $2I = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$ केवल विकर्ण बदलता है, हर घटक नहीं।`,
      ],
    },
    {
      title: t`अज्ञात संख्या ज्ञात करना`,
      points: [
        t`कुछ प्रश्न $A^2 - 3A + kI = O$ जैसे समीकरण में एक संख्या $k$ पूछते हैं।`,
        t`सभी पद एक ओर रखिए, ताकि समीकरण (एक matrix) $= O$ जैसा पढ़ा जाए।`,
        t`उस ओर को घटक-दर-घटक एक matrix के रूप में निकालिए।`,
        t`फिर हर घटक को $0$ के बराबर रखिए और $k$ के लिए हल कीजिए।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $A = \begin{bmatrix} 1 & 0 \\ -1 & 7 \end{bmatrix}$, तो $k$ ज्ञात कीजिए ताकि $A^2 - 8A - kI = O$, जहाँ $I$ unit matrix है और $O$ null matrix, दोनों कोटि $2$ के।`,
    steps: [
      t`$A^2 = A \cdot A$, row गुणा column: $\begin{bmatrix} 1 + 0 & 0 + 0 \\ -1 - 7 & 0 + 49 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 \\ -8 & 49 \end{bmatrix}$।`,
      t`$8A = \begin{bmatrix} 8 & 0 \\ -8 & 56 \end{bmatrix}$, इसलिए $A^2 - 8A$ $= \begin{bmatrix} -7 & 0 \\ 0 & -7 \end{bmatrix}$।`,
      t`$kI = \begin{bmatrix} k & 0 \\ 0 & k \end{bmatrix}$ में $k$ केवल विकर्ण पर है, इसलिए $A^2 - 8A - kI$ $= \begin{bmatrix} -7 - k & 0 \\ 0 & -7 - k \end{bmatrix}$।`,
      t`यह $O$ है जब $-7 - k = 0$, इसलिए $k = -7$।`,
    ],
    answer: t`$k = -7$`,
  },
  remediation: {
    "C10-M1": t`सामान्यतः $AB \ne BA$: $AB$ में $A$ की rows $B$ के columns के साथ, और $BA$ में उलटा। हर गुणनफल को लिखे क्रम में रखिए, इसलिए $(A + B)^2 = A^2 + AB + BA + B^2$।`,
    "C10-M2": t`$A^2$ का अर्थ है $A \cdot A$: हर घटक $A$ की एक row गुणा $A$ का एक column है। संगत घटकों को गुणा करना matrix गुणा नहीं है।`,
    "C10-M3": t`$I$, unit matrix है: विकर्ण पर $1$ और बाकी जगह $0$। इसलिए $cI$ केवल विकर्ण घटकों में $c$ जोड़ता है।`,
    "C10-M4": t`$(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2$। बीच के पद $AB + BA$ बने रहते हैं जब तक उनका योग $O$ न हो।`,
    "C10-M5": t`$AB$ का घटक $(i, j)$, $A$ की row $i$ गुणा $B$ का **column** $j$ है। पहले matrix की row में आड़े और दूसरे के column में नीचे चलिए।`,
    "C10-M6": t`हर पद को एक ओर लाइए, ताकि समीकरण (एक matrix) $= O$ जैसा पढ़ा जाए, फिर हर घटक को $0$ रखिए। ओर बदलने वाला पद अपना चिह्न बदलता है।`,
  },
  solutions: {
    "C10-Q1": [
      t`$BA$, $B$ की rows को $A$ के columns के साथ लेता है। $B$ की row 1, $(4, 1)$ है: $4(1) + 1(4) = 8$ और $4(-3) + 1(2) = -10$।`,
      t`$B$ की row 2, $(3, -2)$ है: $3(1) + (-2)(4) = -5$ और $3(-3) + (-2)(2) = -13$।`,
      t`इसलिए $BA = \begin{bmatrix} 8 & -10 \\ -5 & -13 \end{bmatrix}$। तुलना कीजिए $AB = \begin{bmatrix} -5 & 7 \\ 22 & 0 \end{bmatrix}$ से: यहाँ $AB \ne BA$।`,
    ],
    "C10-Q2": [
      t`$A + B = \begin{bmatrix} 13 & 0 \\ 20 & -3 \end{bmatrix}$।`,
      t`$(A + B)^2 = (A + B)(A + B)$। Row 1: $13(13) + 0 = 169$ और $0 + 0 = 0$। Row 2: $20(13) + (-3)(20) = 200$ और $0 + (-3)(-3) = 9$।`,
      t`इसलिए $(A + B)^2 = \begin{bmatrix} 169 & 0 \\ 200 & 9 \end{bmatrix}$। यहाँ $BA = O$ पर $AB = \begin{bmatrix} 80 & -64 \\ 100 & -80 \end{bmatrix}$, इसलिए $(A + B)^2 = A^2 + AB + B^2$, न कि $A^2 + 2AB + B^2$।`,
    ],
    "C10-Q3": [
      t`$A^2 = A \cdot A = \begin{bmatrix} 9 - 1 & 3 + 2 \\ -3 - 2 & -1 + 4 \end{bmatrix} = \begin{bmatrix} 8 & 5 \\ -5 & 3 \end{bmatrix}$।`,
      t`$5A = \begin{bmatrix} 15 & 5 \\ -5 & 10 \end{bmatrix}$ और $7I = \begin{bmatrix} 7 & 0 \\ 0 & 7 \end{bmatrix}$।`,
      t`$A^2 - 5A + 7I = \begin{bmatrix} 8 - 15 + 7 & 5 - 5 + 0 \\ -5 + 5 + 0 & 3 - 10 + 7 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = O$।`,
    ],
    "C10-Q4": [
      t`$A^2 = A \cdot A = \begin{bmatrix} 9 - 8 & -6 + 4 \\ 12 - 8 & -8 + 4 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 4 & -4 \end{bmatrix}$।`,
      t`$kA - 2I = \begin{bmatrix} 3k - 2 & -2k \\ 4k & -2k - 2 \end{bmatrix}$।`,
      t`बराबर matrices के घटक बराबर होते हैं। घटक $(1, 2)$: $-2 = -2k$, इसलिए $k = 1$। बाकी घटक मेल खाते हैं: $3 - 2 = 1$, $4 = 4$, $-2 - 2 = -4$। इसलिए $k = 1$।`,
    ],
    "C10-Q5": [
      t`$A^2 = A \cdot A = \begin{bmatrix} 9 + 20 & -15 - 10 \\ -12 - 8 & 20 + 4 \end{bmatrix} = \begin{bmatrix} 29 & -25 \\ -20 & 24 \end{bmatrix}$।`,
      t`$5A = \begin{bmatrix} 15 & -25 \\ -20 & 10 \end{bmatrix}$, इसलिए $A^2 - 5A = \begin{bmatrix} 14 & 0 \\ 0 & 14 \end{bmatrix}$।`,
      t`फिर $A^2 - 5A + kI = \begin{bmatrix} 14 + k & 0 \\ 0 & 14 + k \end{bmatrix} = O$ से $14 + k = 0$, इसलिए $k = -14$।`,
    ],
    "C10-Q6": [
      t`$AI = IA = A$, इसलिए $(A + I)(A - I) = A^2 - AI + IA - I^2 = A^2 - I$।`,
      t`$A^2 = A \cdot A$, row गुणा column: $\begin{bmatrix} 11 & 10 & 4 \\ 25 & 40 & 2 \\ 35 & 7 & 23 \end{bmatrix}$। उदाहरण के लिए, घटक $(2, 2)$ है $5(2) + 4(4) + 2(7) = 40$।`,
      t`हर विकर्ण घटक में से $1$ घटाइए: $(A + I)(A - I) = \begin{bmatrix} 10 & 10 & 4 \\ 25 & 39 & 2 \\ 35 & 7 & 22 \end{bmatrix}$।`,
    ],
  },
};
