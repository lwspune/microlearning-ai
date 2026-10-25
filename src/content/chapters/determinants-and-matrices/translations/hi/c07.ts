import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "hi",
  status: "approved",
  source: "13975684d4f0b7",
  hook: {
    prompt: t`$2 \times 4$ matrix और $4 \times 2$ matrix, दोनों में $8$ घटक हैं। **क्या दोनों का आकार एक जैसा है?**`,
    reveal: t`नहीं। कोटि हमेशा **rows $\times$ columns** होती है: $2 \times 4$ matrix में $2$ rows और $4$ columns हैं, इसलिए वह चौड़ा है; $4 \times 2$ matrix में $4$ rows और $2$ columns हैं, इसलिए वह लंबा है। केवल घटकों की संख्या, $mn = 8$, एक जैसी है।`,
  },
  intuition: [
    t`**Matrix** (आव्यूह) संख्याओं की एक आयताकार सारणी है, जिसके **entries** (घटक) आड़ी **rows** और खड़े **columns** में रखे होते हैं।`,
    t`सब कुछ **row first, then column** (पहले row, फिर column) गिना जाता है: $m \times n$ matrix में $m$ rows और $n$ columns होते हैं।`,
    t`$a_{ij}$, row $i$, column $j$ का घटक है: पहला अनुलग्न row है।`,
    t`**Square matrix** (वर्ग आव्यूह) में जितनी rows उतने ही columns होते हैं; उसका **diagonal** (विकर्ण) ऊपर-बाएँ से नीचे-दाएँ चलता है।`,
    t`उस विकर्ण के आसपास एक तय पैटर्न में शून्य उसे एक नाम देते हैं: triangular, diagonal, scalar या identity।`,
    t`Square matrix का एक determinant भी होता है, और जब वह determinant $0$ हो तो उसे **singular** (अव्युत्क्रमणीय) कहते हैं।`,
  ],
  formal: [
    {
      title: t`कोटि और घटक`,
      points: [
        t`Matrix की **order** (कोटि) उसका आकार है, rows $\times$ columns: $m$ rows और $n$ columns से $m \times n$ मिलता है।`,
        t`$m \times n$ matrix में $mn$ घटक होते हैं।`,
        t`$2 \times 3$ और $3 \times 2$ matrix, दोनों में $6$ घटक हैं, पर कोटियाँ अलग हैं।`,
        t`हम $A = [a_{ij}]_{m \times n}$ लिखते हैं: row $i$, column $j$ का घटक $a_{ij}$ है।`,
        t`Row क्रमांक $i$, $1$ से $m$ तक चलता है; column क्रमांक $j$, $1$ से $n$ तक।`,
      ],
    },
    {
      title: t`आकार के अनुसार matrices`,
      points: [
        t`**Row matrix** (पंक्ति आव्यूह) में केवल एक row होती है: उसकी कोटि $1 \times n$ है।`,
        t`**Column matrix** (स्तंभ आव्यूह) में केवल एक column होता है: उसकी कोटि $m \times 1$ है।`,
        t`**Square matrix** (वर्ग आव्यूह) में $m = n$: उसकी कोटि $n \times n$ है।`,
        t`उसका **leading diagonal** (मुख्य विकर्ण), या केवल विकर्ण, $a_{11}, a_{22}, \dots, a_{nn}$ है: $i = j$ वाले घटक।`,
        t`**Zero matrix** (शून्य आव्यूह), जिसे $O$ लिखते हैं, का हर घटक $0$ है।`,
      ],
    },
    {
      title: t`Upper और lower triangular`,
      points: [
        t`आगे के सभी प्रकार square matrices हैं, जिनके नाम विकर्ण के आसपास के शून्यों से रखे गए हैं।`,
        t`विकर्ण के नीचे row क्रमांक बड़ा होता है, $i > j$; उसके ऊपर, $i < j$।`,
        t`**Upper triangular** (उपरि त्रिभुजाकार): $i > j$ के लिए $a_{ij} = 0$, इसलिए विकर्ण के **नीचे** का हर घटक $0$ है।`,
        t`इसके बाकी घटक विकर्ण पर या उसके ऊपर, ऊपरी त्रिभुज में, होते हैं: इसीलिए यह नाम।`,
        t`**Lower triangular** (निम्न त्रिभुजाकार): $i < j$ के लिए $a_{ij} = 0$, इसलिए विकर्ण के **ऊपर** का हर घटक $0$ है।`,
        t`इसलिए नाम उस त्रिभुज से रखिए जिसे बाकी घटक भरते हैं, शून्यों की जगह से नहीं।`,
      ],
    },
    {
      title: t`Diagonal, scalar और identity`,
      points: [
        t`**Diagonal matrix** (विकर्ण आव्यूह) वह square matrix है जिसमें $i \ne j$ होने पर $a_{ij} = 0$: विकर्ण से बाहर का हर घटक $0$ है।`,
        t`**Scalar matrix** (अदिश आव्यूह) वह diagonal matrix है जिसके सभी विकर्ण घटक एक ही संख्या $k$ के बराबर हैं।`,
        t`बराबर विकर्ण घटक काफ़ी नहीं हैं: विकर्ण से बाहर का हर घटक भी $0$ होना चाहिए।`,
        t`**Identity matrix** (तत्समक आव्यूह) $I$, $k = 1$ वाला scalar matrix है।`,
      ],
    },
    {
      title: t`प्रकार एक-दूसरे में कैसे समाते हैं`,
      points: [
        t`हर identity matrix, $k = 1$ वाला scalar matrix है।`,
        t`हर scalar matrix एक diagonal matrix है।`,
        t`Diagonal matrix में अपने विकर्ण के नीचे और ऊपर, दोनों ओर शून्य होते हैं।`,
        t`इसलिए diagonal matrix, upper triangular भी है और lower triangular भी।`,
      ],
    },
    {
      title: t`Singular और non-singular`,
      points: [
        t`याद कीजिए: square matrix $A$ का एक determinant होता है, एक संख्या जिसे $|A|$ लिखते हैं।`,
        t`$A$ **singular** है अगर $|A| = 0$।`,
        t`$A$ **non-singular** (व्युत्क्रमणीय) है अगर $|A| \ne 0$।`,
        t`जो matrix square नहीं है उसका कोई determinant नहीं होता, इसलिए वह दोनों में से कोई नहीं है।`,
      ],
    },
  ],
  worked: {
    prompt: t`$a_{ij} = 2i - j$ के साथ $A = [a_{ij}]_{2 \times 3}$ बनाइए।`,
    steps: [
      t`कोटि $2 \times 3$ का अर्थ है $2$ rows ($i = 1, 2$) और $3$ columns ($j = 1, 2, 3$): $6$ घटक।`,
      t`Row 1 ($i = 1$) में: $a_{11} = 2 - 1 = 1$, $a_{12} = 2 - 2 = 0$, $a_{13} = 2 - 3 = -1$।`,
      t`Row 2 ($i = 2$) में: $a_{21} = 4 - 1 = 3$, $a_{22} = 4 - 2 = 2$, $a_{23} = 4 - 3 = 1$।`,
      t`हर row को matrix की एक row के साथ लिखिए। $A$ square नहीं है, इसलिए इसका कोई determinant नहीं और यह square प्रकारों में से कोई नहीं है।`,
    ],
    answer: t`$A = \begin{bmatrix} 1 & 0 & -1 \\ 3 & 2 & 1 \end{bmatrix}$`,
  },
  remediation: {
    "C07-M1": t`कोटि हमेशा rows $\times$ columns होती है: $3 \times 2$ का अर्थ है $3$ rows और $2$ columns। इसलिए $i$, rows $1$ से $3$ पर चलता है, और $j$, columns $1$ से $2$ पर।`,
    "C07-M2": t`$a_{ij}$, row $i$, column $j$ का घटक है: पहला अनुलग्न row है। Row $2$, column $1$ के घटक के लिए $i = 2$, $j = 1$ रखिए।`,
    "C07-M3": t`हर $i$ के लिए, घटक $a_{i1}, a_{i2}, \dots$ row $i$ के **साथ-साथ** जाते हैं। कोटि $3 \times 2$ वाले matrix में अंत में $3$ rows और $2$ columns होते हैं, जो कोटि आपको दी गई थी।`,
    "C07-M4": t`Upper triangular का अर्थ है शून्येतर घटक ऊपरी त्रिभुज में हैं: $i > j$ के लिए $a_{ij} = 0$, इसलिए शून्य विकर्ण के **नीचे** हैं। विकर्ण के ऊपर शून्य इसे lower triangular बनाते हैं।`,
    "C07-M5": t`Scalar matrix पहले एक diagonal matrix है: विकर्ण से बाहर का हर घटक $0$ है। उसके बाद ही सभी विकर्ण घटक बराबर होने चाहिए।`,
    "C07-M6": t`Singular का अर्थ है $|A| = 0$; non-singular का अर्थ है $|A| \ne 0$। पहले $|A|$ निकालिए, फिर नाम दीजिए।`,
  },
  solutions: {
    "C07-Q1": [
      t`कोटि $3 \times 2$: $3$ rows ($i = 1, 2, 3$), $2$ columns ($j = 1, 2$)।`,
      t`Row 1 में: $a_{11} = 1 - 3 = -2$, $a_{12} = 1 - 6 = -5$। Row 2 में: $a_{21} = -1$, $a_{22} = -4$। Row 3 में: $a_{31} = 0$, $a_{32} = -3$।`,
      t`$A = \begin{bmatrix} -2 & -5 \\ -1 & -4 \\ 0 & -3 \end{bmatrix}$।`,
    ],
    "C07-Q2": [
      t`कोटि $3 \times 2$: $3$ rows ($i = 1, 2, 3$), $2$ columns ($j = 1, 2$)। Row $i$ का हर $5 - i$ है।`,
      t`Row 1 ($4$ से भाग): $a_{11} = 0$, $a_{12} = \frac{1}{4}$। Row 2 ($3$ से भाग): $a_{21} = \frac{1}{3}$, $a_{22} = 0$। Row 3 ($2$ से भाग): $a_{31} = \frac{4}{2} = 2$, $a_{32} = \frac{1}{2}$।`,
      t`$A = \begin{bmatrix} 0 & \frac{1}{4} \\ \frac{1}{3} & 0 \\ 2 & \frac{1}{2} \end{bmatrix}$।`,
    ],
    "C07-Q3": [
      t`विकर्ण के नीचे, $a_{21} = a_{31} = a_{32} = 0$: इसलिए $A$ upper triangular है। उसके ऊपर, $a_{12} = -2 \ne 0$, इसलिए यह lower triangular नहीं है।`,
      t`$|A|$ का row 3 पर विस्तार कीजिए: वहाँ का हर घटक $0$ है, इसलिए $|A| = 0$। $A$ singular है, non-singular नहीं।`,
      t`$a_{23}$, row 2, column 3 में है: $a_{23} = -5$, $0$ नहीं। सही कथन: $A$ एक upper triangular matrix है।`,
    ],
    "C07-Q4": [
      t`$a_{21}$, row 2, column 1 में है: $a_{21} = 3$। और $a_{12}$, row 1, column 2 में, $0$ है।`,
      t`शून्य $a_{12}, a_{13}, a_{23}$ विकर्ण के ऊपर हैं, इसलिए $A$ lower triangular है, upper triangular नहीं।`,
      t`दो शून्यों वाली row 1 पर विस्तार कीजिए: $|A| = 2\big((-1)(1) - (0)(3)\big) = -2 \ne 0$। $A$ non-singular है। सही कथन: $a_{21} = 3$।`,
    ],
    "C07-Q5": [
      t`$|B| = 7 \times 7 - 5 \times (-4) = 49 + 20 = 69$।`,
      t`$|B| \ne 0$, इसलिए $B$ non-singular है। इसके विकर्ण से बाहर के घटक $5$ और $-4$, $0$ नहीं हैं, इसलिए यह diagonal नहीं है, और इसलिए scalar भी नहीं।`,
      t`$b_{12}$, row 1, column 2 में है: $b_{12} = 5$। सही कथन: $|B| = 69$।`,
    ],
  },
};
