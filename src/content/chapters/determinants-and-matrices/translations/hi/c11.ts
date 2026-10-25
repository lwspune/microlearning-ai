import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c11: ConceptTranslation = {
  id: "C11",
  lang: "hi",
  status: "approved",
  source: "0066962580c61a",
  hook: {
    prompt: t`$A$ एक $2 \times 3$ matrix है और $B$, $3 \times 4$, इसलिए $AB$, $2 \times 4$ है। **क्या $(AB)^T = A^TB^T$?**`,
    reveal: t`ऐसा हो ही नहीं सकता: $A^T$, $3 \times 2$ है और $B^T$, $4 \times 3$, इसलिए $A^TB^T$ का गुणा भी नहीं हो सकता। क्रम उलटिए: $B^TA^T$ है $(4 \times 3)(3 \times 2) = 4 \times 2$, जो $(AB)^T$ की कोटि है। और यह बराबर है: $(AB)^T = B^TA^T$।`,
  },
  intuition: [
    t`Matrix $A$ का **transpose** (परिवर्त) करना उसकी rows को columns के रूप में लिखना है: परिणाम $A^T$ है, जिसे "A transpose" पढ़ते हैं।`,
    t`$A$ की row 1, बाएँ से दाएँ पढ़ी गई, $A^T$ का column 1 बनती है, ऊपर से नीचे पढ़ा गया।`,
    t`Row 2, column 2 बनती है, और इसी तरह हर row।`,
    t`याद कीजिए: कोटि $m \times n$ का अर्थ है $m$ rows और $n$ columns; इसलिए $A^T$, $n \times m$ है।`,
    t`यह **leading diagonal**, ऊपर-बाएँ से नीचे-दाएँ, के परितः पलटना है: उसके घटक वहीं रहते हैं, बाकी आपस में बदलते हैं।`,
    t`योग और संख्या-गुणज पद-दर-पद transpose होते हैं, पर गुणनफल **reverse order** (उलटे क्रम) में transpose होता है।`,
  ],
  formal: [
    {
      title: t`Matrix का transpose`,
      points: [
        t`याद कीजिए: $A = [a_{ij}]_{m \times n}$ में घटक $a_{ij}$, row $i$, column $j$ में है।`,
        t`इसका **transpose** $A^T = [a_{ji}]_{n \times m}$ है, जिसमें $n$ rows और $m$ columns हैं।`,
        t`$A^T$ का $(i, j)$ घटक, $A$ का $(j, i)$ घटक है।`,
        t`उदाहरण के लिए, $A = \begin{bmatrix} a & b & c \\ d & e & f \end{bmatrix}$, $2 \times 3$ है।`,
        t`इसका transpose $A^T = \begin{bmatrix} a & d \\ b & e \\ c & f \end{bmatrix}$ है, जो $3 \times 2$ है।`,
      ],
    },
    {
      title: t`Row 1, column 1 में नीचे जाती है`,
      points: [
        t`$A$ की हर row को बाएँ से दाएँ पढ़िए।`,
        t`उसे $A^T$ के संगत column के रूप में ऊपर से नीचे लिखिए।`,
        t`इसलिए row 1, column 1 में नीचे जाती है, और row 2, column 2 में।`,
        t`Leading diagonal, $a_{11}, a_{22}, \ldots$, जहाँ है वहीं रहता है।`,
        t`Transpose उस विकर्ण के परितः पलटना है, चौथाई घुमाव नहीं।`,
      ],
    },
    {
      title: t`Transpose के गुणधर्म`,
      points: [
        t`दो बार पलटिए और आप वहीं लौट आते हैं जहाँ से शुरू किया था: $(A^T)^T = A$।`,
        t`समान कोटि वाले $A$ और $B$ के लिए, योग पद-दर-पद transpose होता है।`,
        t`यानी $(A + B)^T = A^T + B^T$।`,
        t`संख्या-गुणज अपनी संख्या बनाए रखता है: किसी भी संख्या $k$ के लिए $(kA)^T = kA^T$।`,
      ],
    },
    {
      title: t`उलटे क्रम का नियम`,
      points: [
        t`गुणनफल **reverse order** में transpose होता है: $(AB)^T = B^TA^T$, $A^TB^T$ नहीं।`,
        t`कोटियाँ जाँचिए: मान लीजिए $A$, $m \times n$ है और $B$, $n \times p$।`,
        t`तब $AB$, $m \times p$ है, इसलिए $(AB)^T$, $p \times m$ है।`,
        t`$B^T$, $p \times n$ है और $A^T$, $n \times m$, इसलिए $B^TA^T$ भी $p \times m$ है।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $A = \begin{bmatrix} 1 & 2 \\ 3 & 0 \end{bmatrix}$ और $B = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix}$, तो $(AB)^T$ ज्ञात कीजिए और जाँचिए कि यह $B^TA^T$ के बराबर है, $A^TB^T$ के नहीं।`,
    steps: [
      t`$AB = \begin{bmatrix} 0 + 4 & -1 + 2 \\ 0 + 0 & -3 + 0 \end{bmatrix}$ $= \begin{bmatrix} 4 & 1 \\ 0 & -3 \end{bmatrix}$।`,
      t`Rows, columns बन जाती हैं: $(AB)^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$।`,
      t`$B^T = \begin{bmatrix} 0 & 2 \\ -1 & 1 \end{bmatrix}$, $A^T = \begin{bmatrix} 1 & 3 \\ 2 & 0 \end{bmatrix}$, इसलिए $B^TA^T$ $= \begin{bmatrix} 0 + 4 & 0 + 0 \\ -1 + 2 & -3 + 0 \end{bmatrix}$ $= \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$। यह मेल खाता है।`,
      t`दूसरे क्रम में, $A^TB^T$ $= \begin{bmatrix} 0 - 3 & 2 + 3 \\ 0 + 0 & 4 + 0 \end{bmatrix}$ $= \begin{bmatrix} -3 & 5 \\ 0 & 4 \end{bmatrix}$, जो अलग है।`,
    ],
    answer: t`$(AB)^T = B^TA^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$, जबकि $A^TB^T$ एक अलग matrix है।`,
  },
  remediation: {
    "C11-M1": t`गुणनफल उलटे क्रम में transpose होता है: $(AB)^T = B^TA^T$। अगर $A$, $3 \times 2$ है और $B$, $2 \times 3$, तो $(AB)^T$, $3 \times 3$ है पर $A^TB^T$ केवल $2 \times 2$।`,
    "C11-M2": t`क्रम उलटिए **और** हर गुणनखंड का transpose लीजिए: $(AB)^T = B^TA^T$। या सीधे $AB$ निकालिए और फिर उसकी rows को columns के रूप में लिखिए।`,
    "C11-M3": t`Transpose, leading diagonal के परितः पलटना है, घुमाव नहीं: row 1, column 1 बनती है, row 2, column 2। $A^T$ का $(i, j)$ घटक, $A$ का $(j, i)$ घटक है।`,
    "C11-M4": t`कोटि को $m \times n$ से $n \times m$ करना काफ़ी नहीं: घटकों को खिसकना होगा। $A$ की row 1, बाएँ से दाएँ पढ़ी गई, $A^T$ का column 1 बनती है, ऊपर से नीचे पढ़ा गया।`,
    "C11-M5": t`प्रश्न का हर transpose पूरा कीजिए: योग या गुणनफल निकल जाने के बाद, उसकी rows को columns के रूप में लिखिए। $3 \times 2$ परिणाम $2 \times 3$ बन जाता है।`,
    "C11-M6": t`हर row अपने column में **नीचे** जाती है: row 1 का पहला घटक column 1 में सबसे ऊपर बैठता है। Leading diagonal $a_{11}, a_{22}, \ldots$ जहाँ है वहीं रहता है।`,
  },
  solutions: {
    "C11-Q1": [
      t`$A$, $2 \times 3$ है, इसलिए $A^T$, $3 \times 2$ है।`,
      t`Row 1, $(2, -6, 1)$, column 1 बनती है; row 2, $(-4, 0, 5)$, column 2 बनती है।`,
      t`$A^T = \begin{bmatrix} 2 & -4 \\ -6 & 0 \\ 1 & 5 \end{bmatrix}$।`,
    ],
    "C11-Q2": [
      t`$2A = \begin{bmatrix} 10 & -6 \\ 8 & -6 \\ -4 & 2 \end{bmatrix}$, एक $3 \times 2$ matrix।`,
      t`इसकी rows, columns बनती हैं: $(2A)^T = \begin{bmatrix} 10 & 8 & -4 \\ -6 & -6 & 2 \end{bmatrix}$।`,
      t`जाँच: $A^T = \begin{bmatrix} 5 & 4 & -2 \\ -3 & -3 & 1 \end{bmatrix}$, और $2A^T$ से वही matrix मिलता है, जैसा $(kA)^T = kA^T$ कहता है।`,
    ],
    "C11-Q3": [
      t`$A^T = \begin{bmatrix} 7 & 0 \\ 3 & 4 \\ 0 & -2 \end{bmatrix}$ और $B^T = \begin{bmatrix} 0 & 2 \\ -2 & 1 \\ 3 & -4 \end{bmatrix}$, इसलिए $4B^T = \begin{bmatrix} 0 & 8 \\ -8 & 4 \\ 12 & -16 \end{bmatrix}$।`,
      t`घटक-दर-घटक जोड़िए: $A^T + 4B^T = \begin{bmatrix} 7 & 8 \\ -5 & 8 \\ 12 & -18 \end{bmatrix}$।`,
      t`जाँच: $A + 4B = \begin{bmatrix} 7 & -5 & 12 \\ 8 & 8 & -18 \end{bmatrix}$, और इसका transpose वही है, क्योंकि $(A + 4B)^T = A^T + 4B^T$।`,
    ],
    "C11-Q4": [
      t`$B^T = \begin{bmatrix} -3 & 2 \\ 4 & -1 \\ 1 & -3 \end{bmatrix}$, इसलिए $3A - 5B^T = \begin{bmatrix} 6 + 15 & -9 - 10 \\ 9 - 20 & -6 + 5 \\ -3 - 5 & 12 + 15 \end{bmatrix} = \begin{bmatrix} 21 & -19 \\ -11 & -1 \\ -8 & 27 \end{bmatrix}$।`,
      t`इसका transpose लीजिए: $(3A - 5B^T)^T = \begin{bmatrix} 21 & -11 & -8 \\ -19 & -1 & 27 \end{bmatrix}$।`,
      t`यह $3A^T - 5B$ है, क्योंकि $(B^T)^T = B$।`,
    ],
    "C11-Q5": [
      t`$A$, $3 \times 2$ है और $B$, $2 \times 3$, इसलिए $AB$, $3 \times 3$ है, और $(AB)^T$ भी।`,
      t`$AB = \begin{bmatrix} 0 - 2 & 6 + 1 & -8 - 1 \\ 0 - 4 & 9 + 2 & -12 - 2 \\ 0 + 2 & 12 - 1 & -16 + 1 \end{bmatrix} = \begin{bmatrix} -2 & 7 & -9 \\ -4 & 11 & -14 \\ 2 & 11 & -15 \end{bmatrix}$।`,
      t`Rows, columns बन जाती हैं: $(AB)^T = \begin{bmatrix} -2 & -4 & 2 \\ 7 & 11 & 11 \\ -9 & -14 & -15 \end{bmatrix}$, जो $B^TA^T$ है।`,
    ],
    "C11-Q6": [
      t`$A$, $3 \times 2$ है और $B$, $2 \times 3$, इसलिए $(AB)^T$, $3 \times 3$ है। $A^TB^T$ जैसा $2 \times 2$ उत्तर संभव नहीं।`,
      t`$AB = \begin{bmatrix} 2 + 8 & -2 - 4 & 4 + 0 \\ 3 + 4 & -3 - 2 & 6 + 0 \\ 0 - 2 & 0 + 1 & 0 + 0 \end{bmatrix} = \begin{bmatrix} 10 & -6 & 4 \\ 7 & -5 & 6 \\ -2 & 1 & 0 \end{bmatrix}$।`,
      t`Rows, columns बन जाती हैं: $(AB)^T = \begin{bmatrix} 10 & 7 & -2 \\ -6 & -5 & 1 \\ 4 & 6 & 0 \end{bmatrix}$, जो $B^TA^T$ है।`,
    ],
  },
};
