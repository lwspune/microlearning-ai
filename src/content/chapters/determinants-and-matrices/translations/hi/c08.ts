import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "hi",
  status: "approved",
  source: "03eb0e88bf11a7",
  hook: {
    prompt: t`$2\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ और $2\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}$ एक जैसे दिखते हैं। **क्या दोनों में $2$ एक ही काम करता है?**`,
    reveal: t`नहीं। Determinant एक संख्या है, $4 - 6 = -2$, इसलिए उसका $2$ गुना $-4$ है: $2$ एक row में जा सकता है। Matrix पूरी सारणी है, इसलिए $2$ हर घटक को गुणा करता है: $\begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$। इसका determinant $16 - 24 = -8$ है, $-4$ नहीं।`,
  },
  intuition: [
    t`याद कीजिए: **matrix** संख्याओं की एक सारणी है, जो rows और columns में रखी होती है।`,
    t`एक बिक्री पत्रक सोचिए, जिसमें हर दुकान के लिए एक row और हर विषय के लिए एक column है।`,
    t`ऐसे दो पत्रक जोड़ने के लिए, **matching cells** (संगत खाने) जोड़िए: जो एक ही row और एक ही column में हों।`,
    t`इसलिए दोनों पत्रकों का आकार एक जैसा होना चाहिए: rows और columns की संख्या बराबर।`,
    t`पत्रक को किसी संख्या $k$ से बढ़ाने पर हर खाना $k$ से गुणा हो जाता है।`,
    t`यह सब **entry by entry** (घटक-दर-घटक) चलता है: साधारण अंकगणित, हर स्थान पर एक साथ।`,
  ],
  formal: [
    {
      title: t`Matrices का योग`,
      points: [
        t`याद कीजिए: **order** (कोटि) $m \times n$ वाले matrix में $m$ rows और $n$ columns होते हैं।`,
        t`याद कीजिए: $a_{ij}$, $A$ का row $i$, column $j$ वाला घटक है।`,
        t`दो matrices की **same order** (समान कोटि) होती है जब उनकी rows और columns की संख्या बराबर हो।`,
        t`केवल समान कोटि वाले matrices जोड़े जा सकते हैं।`,
        t`**Matching entries** (संगत घटक), यानी एक ही स्थान वाले, जोड़िए: $(A + B)_{ij} = a_{ij} + b_{ij}$।`,
        t`इसलिए $2 \times 3$ और $3 \times 2$ matrix नहीं जोड़े जा सकते।`,
      ],
    },
    {
      title: t`Scalar से गुणा`,
      points: [
        t`**Scalar** (अदिश) एक साधारण संख्या है, matrix नहीं।`,
        t`**Scalar multiple** (अदिश गुणज) $kA$, $A$ के **हर** घटक को $k$ से गुणा करता है: $(kA)_{ij} = k\,a_{ij}$।`,
        t`Determinant में गुणनखंड केवल एक row में जाता है; matrix में वह हर घटक में जाता है।`,
        t`याद कीजिए: identity matrix $I$ के विकर्ण पर $1$ और बाकी जगह $0$ होता है।`,
        t`इसलिए $kI$ के विकर्ण पर $k$ और बाकी जगह $0$ होता है।`,
      ],
    },
    {
      title: t`Matrices का अंतर`,
      points: [
        t`**Negative** (ऋण) $-B = (-1)B$, वह $B$ है जिसके हर घटक का चिह्न बदल दिया गया है।`,
        t`घटाना ऋण को जोड़ना है: $A - B = A + (-1)B$।`,
        t`इसलिए संगत घटक घटाइए: $(A - B)_{ij} = a_{ij} - b_{ij}$।`,
        t`ऋणात्मक घटक घटाने से वह जुड़ता है: $a - (-b) = a + b$।`,
      ],
    },
    {
      title: t`योग के नियम`,
      points: [
        t`याद कीजिए: **zero matrix** $O$ का हर घटक $0$ है।`,
        t`जोड़ने का क्रम मायने नहीं रखता: $A + B = B + A$।`,
        t`समूह बनाने का तरीका मायने नहीं रखता: $(A + B) + C = A + (B + C)$।`,
        t`$O$ जोड़ने से कुछ नहीं बदलता: $A + O = A$।`,
        t`Scalar योग के हर matrix को गुणा करता है: $k(A + B) = kA + kB$।`,
        t`ये समान कोटि वाले matrices के लिए सही हैं, क्योंकि ये हर घटक की संख्याओं के लिए सही हैं।`,
      ],
    },
    {
      title: t`बराबर matrices`,
      points: [
        t`दो matrices **equal** (बराबर) हैं जब उनकी कोटि समान हो और उनके सभी संगत घटक बराबर हों।`,
        t`**Matrix equation** (आव्यूह समीकरण) कहता है कि दो matrices बराबर हैं।`,
        t`इसलिए एक matrix समीकरण से हर घटक के लिए एक साधारण समीकरण मिलता है।`,
        t`उदाहरण के लिए, $\begin{bmatrix} x & 2 \end{bmatrix} = \begin{bmatrix} 5 & 2 \end{bmatrix}$ से $x = 5$ मिलता है।`,
      ],
    },
    {
      title: t`Matrix समीकरण हल करना`,
      points: [
        t`अज्ञात matrix $X$ के लिए matrix समीकरण वैसे ही हल कीजिए जैसे संख्या वाला समीकरण।`,
        t`$=$ चिह्न पार करने वाला पद चिह्न बदलता है: $pA + kX = C$ से $kX = C - pA$ मिलता है।`,
        t`फिर हर घटक को $\frac{1}{k}$ से गुणा कीजिए: $kX = M$ से $X = \frac{1}{k}M$ मिलता है।`,
        t`$X$ और $Y$ में दो समीकरण हों, तो युगपत समीकरणों की तरह एक अज्ञात हटाइए।`,
        t`उसे हटाने के लिए, ज़रूरत हो तो एक को गुणा करके, दोनों समीकरणों को जोड़िए या घटाइए।`,
      ],
    },
  ],
  worked: {
    prompt: t`$X$ और $Y$ ज्ञात कीजिए यदि $2X - Y = \begin{bmatrix} 3 & -1 \\ 4 & 2 \end{bmatrix}$ और $X + Y = \begin{bmatrix} 3 & 4 \\ -1 & 1 \end{bmatrix}$।`,
    steps: [
      t`दोनों समीकरण जोड़ने से $Y$ हट जाता है: $(2X - Y) + (X + Y) = 3X$।`,
      t`घटक-दर-घटक जोड़िए: $3X = \begin{bmatrix} 3 + 3 & -1 + 4 \\ 4 + (-1) & 2 + 1 \end{bmatrix}$, इसलिए $3X = \begin{bmatrix} 6 & 3 \\ 3 & 3 \end{bmatrix}$।`,
      t`हर घटक को $\frac{1}{3}$ से गुणा कीजिए: $X = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$।`,
      t`$X + Y$ से: $Y = \begin{bmatrix} 3 & 4 \\ -1 & 1 \end{bmatrix} - \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$, इसलिए $Y = \begin{bmatrix} 1 & 3 \\ -2 & 0 \end{bmatrix}$। जाँच: $2X - Y = \begin{bmatrix} 4 - 1 & 2 - 3 \\ 2 - (-2) & 2 - 0 \end{bmatrix}$, जो $\begin{bmatrix} 3 & -1 \\ 4 & 2 \end{bmatrix}$ है।`,
    ],
    answer: t`$X = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ और $Y = \begin{bmatrix} 1 & 3 \\ -2 & 0 \end{bmatrix}$।`,
  },
  remediation: {
    "C08-M1": t`संख्या गुणा matrix हर घटक को गुणा करता है: $kA = [k\,a_{ij}]$। केवल determinant में गुणनखंड एक ही row में जाता है।`,
    "C08-M2": t`$I$ के विकर्ण पर $1$ और बाकी हर जगह $0$ है, इसलिए $kI$ के विकर्ण पर $k$ और उसके बाहर $0$ है। $kI$ जोड़ने से केवल विकर्ण घटक बदलते हैं।`,
    "C08-M3": t`$=$ चिह्न पार करने वाला पद चिह्न बदलता है: $pA + kX = C$ से $kX = C - pA$ मिलता है, और $x + c = r$ से $x = r - c$।`,
    "C08-M4": t`अंत में हर घटक को $\frac{1}{k}$ से गुणा कीजिए: $kX = M$ से $X = \frac{1}{k}M$ मिलता है। घटक वाले समीकरण में भी यही: $-x = 5$ से $x = -5$।`,
    "C08-M5": t`ऋणात्मक घटक घटाने से वह जुड़ता है: $a - (-b) = a + b$, और $-k \times (-b) = kb$। घटाते समय या ऋणात्मक संख्या से गुणा करते समय हर घटक का चिह्न जाँचिए।`,
  },
  solutions: {
    "C08-Q1": [
      t`$2B = \begin{bmatrix} 2 & -6 \\ 8 & -14 \end{bmatrix}$ और $6I = \begin{bmatrix} 6 & 0 \\ 0 & 6 \end{bmatrix}$।`,
      t`घटक-दर-घटक: $A - 2B + 6I = \begin{bmatrix} 1 - 2 + 6 & -2 + 6 + 0 \\ 5 - 8 + 0 & 3 + 14 + 6 \end{bmatrix}$।`,
      t`इसलिए $A - 2B + 6I = \begin{bmatrix} 5 & 4 \\ -3 & 23 \end{bmatrix}$।`,
    ],
    "C08-Q2": [
      t`$3A$ और $-4B$ को चिह्न बदलकर दूसरी ओर ले जाइए: $5X = C - 3A + 4B$।`,
      t`$C - 3A + 4B = \begin{bmatrix} 2 - 3 - 4 & 4 + 6 - 8 \\ -1 - 9 + 16 & -4 + 15 + 8 \\ -3 + 18 + 4 & 6 - 0 + 20 \end{bmatrix} = \begin{bmatrix} -5 & 2 \\ 6 & 19 \\ 19 & 26 \end{bmatrix}$।`,
      t`हर घटक को $\frac{1}{5}$ से गुणा कीजिए: $X = \begin{bmatrix} -1 & \frac{2}{5} \\ \frac{6}{5} & \frac{19}{5} \\ \frac{19}{5} & \frac{26}{5} \end{bmatrix}$।`,
    ],
    "C08-Q3": [
      t`पहले समीकरण में से दूसरा घटाइए: $(X + Y) - (X - 2Y) = Y + 2Y = 3Y$।`,
      t`$3Y = \begin{bmatrix} 2 - (-2) & -1 - 1 \\ 1 - 3 & 3 - (-1) \\ -3 - 4 & -2 - (-2) \end{bmatrix} = \begin{bmatrix} 4 & -2 \\ -2 & 4 \\ -7 & 0 \end{bmatrix}$।`,
      t`हर घटक को $\frac{1}{3}$ से गुणा कीजिए: $Y = \begin{bmatrix} \frac{4}{3} & -\frac{2}{3} \\ -\frac{2}{3} & \frac{4}{3} \\ -\frac{7}{3} & 0 \end{bmatrix}$।`,
    ],
    "C08-Q4": [
      t`घटक-दर-घटक घटाइए और हर घटक को दाएँ पक्ष से मिलाइए। दूसरी row, पहला column: $x - (-3) = 4$, इसलिए $x + 3 = 4$ और $x = 1$।`,
      t`तीसरी row, दूसरा column: $6 - y = 4$, इसलिए $-y = -2$ और $y = 2$।`,
      t`बाकी घटक मेल खाते हैं: $5 - 1 = 4$, $7 - 2 = 5$, $1 - 5 = -4$, $2 - 2 = 0$। इसलिए $x = 1$, $y = 2$।`,
    ],
    "C08-Q5": [
      t`$Y$ हटाने के लिए, पहले समीकरण का $3$ गुना घटा दूसरा लीजिए: $(9X - 3Y) - (X - 3Y) = 8X$।`,
      t`$8X = 3\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} - \begin{bmatrix} 0 & -1 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix} 3 - 0 & -3 + 1 \\ -3 - 0 & 3 + 1 \end{bmatrix} = \begin{bmatrix} 3 & -2 \\ -3 & 4 \end{bmatrix}$।`,
      t`हर घटक को $\frac{1}{8}$ से गुणा कीजिए: $X = \begin{bmatrix} \frac{3}{8} & -\frac{1}{4} \\ -\frac{3}{8} & \frac{1}{2} \end{bmatrix}$।`,
    ],
  },
};
