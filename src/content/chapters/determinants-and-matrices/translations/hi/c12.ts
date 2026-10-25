import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c12: ConceptTranslation = {
  id: "C12",
  lang: "hi",
  status: "approved",
  source: "078b3c38e30cd8",
  hook: {
    prompt: t`$\begin{bmatrix} 2 & 5 & 1 \\ -5 & 4 & 6 \\ -1 & -6 & 3 \end{bmatrix}$ में विकर्ण से बाहर का हर घटक अपने दर्पण प्रतिबिंब का ऋण है: $5$ और $-5$, $1$ और $-1$, $6$ और $-6$। **क्या यह matrix skew-symmetric है?**`,
    reveal: t`नहीं। Skew-symmetric का अर्थ है **हर** $i$ और $j$ के लिए $a_{ij} = -a_{ji}$, विकर्ण समेत। वहाँ यह कहता है $a_{ii} = -a_{ii}$, इसलिए $a_{ii} = 0$। यह विकर्ण $2, 4, 3$ है, इसलिए matrix skew-symmetric नहीं है। यह symmetric भी नहीं है ($5 \ne -5$): यह दोनों में से कोई नहीं है।`,
  },
  intuition: [
    t`याद कीजिए: square matrix का **leading diagonal** उसके ऊपर-बाएँ घटक से नीचे-दाएँ तक चलता है।`,
    t`Matrix को उस विकर्ण के साथ मोड़िए: हर घटक $a_{ij}$ अपने **mirror image** (दर्पण प्रतिबिंब) $a_{ji}$ पर आ जाता है।`,
    t`याद कीजिए: हर $a_{ij}$ की $a_{ji}$ से अदला-बदली ठीक वही है जो transpose $A^T$ करता है।`,
    t`Matrix **symmetric** (सममित) है अगर हर घटक बराबर वाले पर आए, और **skew-symmetric** (विषम सममित) अगर अपने ऋण पर।`,
    t`विकर्ण खुद पर आता है, इसलिए skew-symmetric matrix का हर विकर्ण घटक अपने ही ऋण के बराबर है: $0$।`,
    t`हर square matrix दोनों का मिश्रण है: $A + A^T$ का आधा symmetric है, $A - A^T$ का आधा skew-symmetric।`,
  ],
  formal: [
    {
      title: t`Symmetric matrices (सममित आव्यूह)`,
      points: [
        t`Square matrix $A$ **symmetric** है जब $A^T = A$।`,
        t`घटक-दर-घटक, यह कहता है कि सभी $i$ और $j$ के लिए $a_{ij} = a_{ji}$।`,
        t`इसलिए दर्पण घटकों का हर युग्म बराबर है, चिह्न समेत: यहाँ $5$ और $5$, $1$ और $1$, $6$ और $6$।`,
        t`विकर्ण घटक अपना ही दर्पण प्रतिबिंब है, इसलिए विकर्ण घटक कुछ भी हो सकते हैं।`,
      ],
    },
    {
      title: t`Skew-symmetric matrices (विषम सममित आव्यूह)`,
      points: [
        t`Square matrix $A$ **skew-symmetric** है जब $A^T = -A$।`,
        t`घटक-दर-घटक, यह कहता है कि सभी $i$ और $j$ के लिए $a_{ij} = -a_{ji}$।`,
        t`इसलिए दर्पण घटकों का हर युग्म ऋणों का युग्म है: यहाँ $5$ और $-5$, $-1$ और $1$, $6$ और $-6$।`,
        t`$i = j$ के साथ यह कहता है $a_{ii} = -a_{ii}$, इसलिए **हर विकर्ण घटक $0$ है**।`,
      ],
    },
    {
      title: t`दोनों, एक या कोई नहीं`,
      points: [
        t`याद कीजिए: **diagonal matrix** में leading diagonal से बाहर का हर घटक $0$ होता है।`,
        t`इसके दर्पण युग्म सभी $0$ और $0$ हैं, इसलिए diagonal matrix हमेशा symmetric होता है।`,
        t`अगर इसका कोई विकर्ण घटक $0$ नहीं है, तो यह skew-symmetric नहीं है: यह केवल symmetric है।`,
        t`जो matrix दोनों हो उसमें $a_{ij} = a_{ji} = -a_{ji}$, इसलिए हर घटक $0$ है।`,
        t`इसलिए **zero matrix** $O$, जिसका हर घटक $0$ है, अकेला matrix है जो दोनों है।`,
        t`कोई matrix **दोनों में से कोई नहीं** भी हो सकता है: जैसे उसके दर्पण युग्म ऋण हों पर विकर्ण पूरा $0$ न हो।`,
      ],
    },
    {
      title: t`अज्ञात घटक ज्ञात करना`,
      points: [
        t`अगर $A$ symmetric है, तो अज्ञात वाले घटक को उसके दर्पण प्रतिबिंब के बराबर रखिए।`,
        t`अगर $A$ skew-symmetric है, तो उसे उसके दर्पण प्रतिबिंब के **ऋण** के बराबर रखिए।`,
        t`ऋण लेने से पहले पूरे दर्पण घटक को कोष्ठक में रखिए।`,
        t`इसलिए $-(3x - 1) = -3x + 1$, न कि $-3x - 1$।`,
        t`फिर उस समीकरण को अज्ञात के लिए हल कीजिए।`,
      ],
    },
    {
      title: t`दो हमेशा सही तथ्य`,
      points: [
        t`कोई भी square matrix $A$ लीजिए, और याद कीजिए कि $(A^T)^T = A$ और योग पद-दर-पद transpose होता है।`,
        t`इसलिए $(A + A^T)^T = A^T + A$, जो फिर से $A + A^T$ है।`,
        t`इससे $A + A^T$ हमेशा symmetric होता है।`,
        t`इसी तरह $(A - A^T)^T = A^T - A$।`,
        t`यह $-(A - A^T)$ है, इसलिए $A - A^T$ हमेशा skew-symmetric होता है।`,
      ],
    },
    {
      title: t`Square matrix को बाँटना`,
      points: [
        t`हर square matrix $A$ एक योग $A = P + Q$ है, जिसमें $P$ symmetric है और $Q$ skew-symmetric।`,
        t`Symmetric भाग $P = \frac{1}{2}(A + A^T)$ है।`,
        t`Skew-symmetric भाग $Q = \frac{1}{2}(A - A^T)$ है।`,
        t`हर घटक को आधा करने से matrix का प्रकार नहीं बदलता, इसलिए $P$ अब भी symmetric है और $Q$ अब भी skew-symmetric।`,
        t`इन्हें जोड़ने पर $A^T$ वाले पद कट जाते हैं: $P + Q = \frac{1}{2}(2A) = A$।`,
        t`आधे किए बिना दोनों का योग $2A$ होता है, $A$ नहीं।`,
      ],
    },
  ],
  worked: {
    prompt: t`$A = \begin{bmatrix} 5 & 2 & -4 \\ 3 & -7 & 2 \\ 4 & -5 & -3 \end{bmatrix}$ को एक symmetric और एक skew-symmetric matrix के योग के रूप में व्यक्त कीजिए।`,
    steps: [
      t`Transpose लिखिए: rows, columns बन जाती हैं। $A^T = \begin{bmatrix} 5 & 3 & 4 \\ 2 & -7 & -5 \\ -4 & 2 & -3 \end{bmatrix}$।`,
      t`$A + A^T = \begin{bmatrix} 10 & 5 & 0 \\ 5 & -14 & -3 \\ 0 & -3 & -6 \end{bmatrix}$, इसलिए $P = \frac{1}{2}(A + A^T)$ $= \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$। दर्पण घटक बराबर हैं: $P$ symmetric है।`,
      t`$A - A^T = \begin{bmatrix} 0 & -1 & -8 \\ 1 & 0 & 7 \\ 8 & -7 & 0 \end{bmatrix}$, इसलिए $Q = \frac{1}{2}(A - A^T)$ $= \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$। दर्पण घटक ऋण हैं और विकर्ण $0$ है: $Q$ skew-symmetric है।`,
      t`$P + Q$ का एक घटक जाँचिए: row 1, column 2 में, $\frac{5}{2} + \left(-\frac{1}{2}\right)$ $= 2 = a_{12}$। बाकी हर घटक भी इसी तरह जुड़कर $A$ देता है।`,
    ],
    answer: t`$A = \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$ $+ \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$, symmetric जोड़ skew-symmetric।`,
  },
  remediation: {
    "C12-M1": t`$a_{ij} = -a_{ji}$ हर $i$ और $j$ के लिए सही होना चाहिए, विकर्ण समेत, जहाँ यह कहता है $a_{ii} = -a_{ii}$। इसलिए skew-symmetric matrix का हर विकर्ण घटक $0$ है, और शून्येतर घटक वाला diagonal matrix केवल symmetric है।`,
    "C12-M2": t`$(A + A^T) + (A - A^T) = 2A$, $A$ नहीं। दोनों को आधा कीजिए: $P = \frac{1}{2}(A + A^T)$ और $Q = \frac{1}{2}(A - A^T)$।`,
    "C12-M3": t`Symmetric का अर्थ है $A^T = A$: दर्पण घटक बराबर हैं। Skew-symmetric का अर्थ है $A^T = -A$: दर्पण घटक ऋण हैं और विकर्ण $0$ है। इसलिए $A$ का symmetric भाग $\frac{1}{2}(A + A^T)$ है, और skew भाग $\frac{1}{2}(A - A^T)$।`,
    "C12-M4": t`Symmetry, leading diagonal के बारे में है, ऊपर-बाएँ से नीचे-दाएँ: $a_{ij}$ का युग्म $a_{ji}$ से बनता है, यानी row और column क्रमांक बदले हुए घटक से, ठीक $A^T$ की तरह।`,
    "C12-M5": t`Symmetric के लिए ठीक $a_{ij} = a_{ji}$ चाहिए, चिह्न समेत। एक-दूसरे के ऋण वाले दर्पण घटक, शून्य विकर्ण के साथ, matrix को skew-symmetric बनाते हैं, symmetric नहीं।`,
    "C12-M6": t`ऋण चिह्न पूरे घटक को गुणा करता है: $-(2x - 3) = -2x + 3$। ऋण लेने से पहले घटक को कोष्ठक में रखिए।`,
  },
  solutions: {
    "C12-Q1": [
      t`Rows और columns की अदला-बदली से diagonal matrix वैसा ही रहता है, इसलिए $A^T = A$: $A$ symmetric है।`,
      t`$-A$ का विकर्ण $-3, -5, -\frac{1}{3}$ है, इसलिए $A^T \ne -A$। Skew-symmetric matrix के लिए हर विकर्ण घटक $0$ होना चाहिए।`,
      t`इसलिए $A$ केवल symmetric है।`,
    ],
    "C12-Q2": [
      t`दर्पण युग्मों की तुलना कीजिए: $a_{21} = -1 - 2i = -a_{12}$, $a_{31} = 2 - i = -(i - 2) = -a_{13}$, और $a_{32} = 7 = -a_{23}$।`,
      t`हर विकर्ण घटक $0$ है। इसलिए $A^T = -A$: $A$ skew-symmetric है।`,
      t`यह symmetric नहीं है: $a_{12} = 1 + 2i$ पर $a_{21} = -1 - 2i$, और शून्येतर संख्या कभी अपने ऋण के बराबर नहीं होती। इसलिए $A$ केवल skew-symmetric है।`,
    ],
    "C12-Q3": [
      t`Skew-symmetric का अर्थ है $a_{21} = -a_{12}$, इसलिए $2x - 3 = -7$।`,
      t`$2x = -4$, इसलिए $x = -2$।`,
      t`जाँच: $a_{21} = -7 = -a_{12}$, युग्म $4, -4$ और $9, -9$ ऋण हैं, और विकर्ण $0$ है। इसलिए $x = -2$।`,
    ],
    "C12-Q4": [
      t`$A^T = \begin{bmatrix} 4 & 3 \\ -2 & -5 \end{bmatrix}$, इसलिए $A + A^T = \begin{bmatrix} 8 & 1 \\ 1 & -10 \end{bmatrix}$।`,
      t`$P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 4 & \frac{1}{2} \\ \frac{1}{2} & -5 \end{bmatrix}$।`,
      t`जाँच: $Q = A - P = \begin{bmatrix} 0 & -\frac{5}{2} \\ \frac{5}{2} & 0 \end{bmatrix}$ skew-symmetric है, जैसा होना चाहिए।`,
    ],
    "C12-Q5": [
      t`$A^T = \begin{bmatrix} 3 & -2 & -4 \\ 3 & -2 & -5 \\ -1 & 1 & 2 \end{bmatrix}$।`,
      t`$A - A^T = \begin{bmatrix} 0 & 5 & 3 \\ -5 & 0 & 6 \\ -3 & -6 & 0 \end{bmatrix}$।`,
      t`$Q = \frac{1}{2}(A - A^T) = \begin{bmatrix} 0 & \frac{5}{2} & \frac{3}{2} \\ -\frac{5}{2} & 0 & 3 \\ -\frac{3}{2} & -3 & 0 \end{bmatrix}$: शून्य विकर्ण, दर्पण घटक ऋण।`,
    ],
    "C12-Q6": [
      t`$A^T = \begin{bmatrix} 1 & 3 & -2 \\ 2 & 2 & -3 \\ 4 & 1 & 2 \end{bmatrix}$।`,
      t`$A + A^T = \begin{bmatrix} 2 & 5 & 2 \\ 5 & 4 & -2 \\ 2 & -2 & 4 \end{bmatrix}$।`,
      t`$P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 1 & \frac{5}{2} & 1 \\ \frac{5}{2} & 2 & -1 \\ 1 & -1 & 2 \end{bmatrix}$: दर्पण घटक बराबर हैं।`,
    ],
  },
};
