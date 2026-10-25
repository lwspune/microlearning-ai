import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "mr",
  status: "approved",
  source: "13975684d4f0b7",
  hook: {
    prompt: t`$2 \times 4$ matrix आणि $4 \times 2$ matrix, दोन्हींत $8$ घटक आहेत. **त्यांचा आकार सारखाच आहे का?**`,
    reveal: t`नाही. कोटी नेहमी **rows $\times$ columns** असते: $2 \times 4$ matrix मध्ये $2$ rows आणि $4$ columns आहेत, म्हणून तो रुंद आहे; $4 \times 2$ matrix मध्ये $4$ rows आणि $2$ columns आहेत, म्हणून तो उंच आहे. फक्त घटकांची संख्या, $mn = 8$, सारखी आहे.`,
  },
  intuition: [
    t`**Matrix** (आव्यूह) म्हणजे संख्यांची आयताकृती सारणी, जिचे **entries** (घटक) आडव्या **rows** आणि उभ्या **columns** मध्ये मांडलेले असतात.`,
    t`सर्व काही **row first, then column** (आधी row, मग column) असे मोजले जाते: $m \times n$ matrix मध्ये $m$ rows आणि $n$ columns असतात.`,
    t`$a_{ij}$ हा row $i$, column $j$ मधील घटक आहे: पहिला अधोलेख row आहे.`,
    t`**Square matrix** (चौरस आव्यूह) मध्ये जितक्या rows तितकेच columns असतात; त्याचा **diagonal** (कर्ण) वर-डावीकडून खाली-उजवीकडे जातो.`,
    t`त्या कर्णाभोवती ठरलेल्या रचनेत असलेले शून्य त्याला नाव देतात: triangular, diagonal, scalar किंवा identity.`,
    t`Square matrix ला determinant सुद्धा असतो, आणि तो determinant $0$ असेल तेव्हा त्याला **singular** (एकल) म्हणतात.`,
  ],
  formal: [
    {
      title: t`कोटी आणि घटक`,
      points: [
        t`Matrix ची **order** (कोटी) म्हणजे त्याचा आकार, rows $\times$ columns: $m$ rows आणि $n$ columns वरून $m \times n$ मिळते.`,
        t`$m \times n$ matrix मध्ये $mn$ घटक असतात.`,
        t`$2 \times 3$ आणि $3 \times 2$ matrix, दोन्हींत $6$ घटक आहेत, पण कोटी वेगळ्या आहेत.`,
        t`आपण $A = [a_{ij}]_{m \times n}$ असे लिहितो: row $i$, column $j$ मधील घटक $a_{ij}$ आहे.`,
        t`Row क्रमांक $i$ हा $1$ ते $m$ जातो; column क्रमांक $j$ हा $1$ ते $n$ जातो.`,
      ],
    },
    {
      title: t`आकारानुसार matrices`,
      points: [
        t`**Row matrix** (ओळ आव्यूह) मध्ये फक्त एक row असते: त्याची कोटी $1 \times n$ आहे.`,
        t`**Column matrix** (स्तंभ आव्यूह) मध्ये फक्त एक column असतो: त्याची कोटी $m \times 1$ आहे.`,
        t`**Square matrix** (चौरस आव्यूह) मध्ये $m = n$: त्याची कोटी $n \times n$ आहे.`,
        t`त्याचा **leading diagonal** (प्रमुख कर्ण), किंवा फक्त कर्ण, म्हणजे $a_{11}, a_{22}, \dots, a_{nn}$: $i = j$ असलेले घटक.`,
        t`**Zero matrix** (शून्य आव्यूह), जो $O$ असा लिहितात, त्याचा प्रत्येक घटक $0$ असतो.`,
      ],
    },
    {
      title: t`Upper आणि lower triangular`,
      points: [
        t`पुढचे सर्व प्रकार square matrices आहेत, ज्यांची नावे कर्णाभोवतीच्या शून्यांवरून ठेवली आहेत.`,
        t`कर्णाच्या खाली row क्रमांक मोठा असतो, $i > j$; त्याच्या वर, $i < j$.`,
        t`**Upper triangular** (उच्च त्रिकोणी): $i > j$ साठी $a_{ij} = 0$, म्हणून कर्णाच्या **खालचा** प्रत्येक घटक $0$ आहे.`,
        t`त्याचे इतर घटक कर्णावर किंवा त्याच्या वर, वरच्या त्रिकोणात, असतात: म्हणून हे नाव.`,
        t`**Lower triangular** (निम्न त्रिकोणी): $i < j$ साठी $a_{ij} = 0$, म्हणून कर्णाच्या **वरचा** प्रत्येक घटक $0$ आहे.`,
        t`म्हणून नाव इतर घटक भरतात त्या त्रिकोणावरून द्या, शून्य कुठे आहेत त्यावरून नाही.`,
      ],
    },
    {
      title: t`Diagonal, scalar आणि identity`,
      points: [
        t`**Diagonal matrix** (कर्ण आव्यूह) म्हणजे $i \ne j$ असेल तेव्हा $a_{ij} = 0$ असलेला square matrix: कर्णाबाहेरचा प्रत्येक घटक $0$ आहे.`,
        t`**Scalar matrix** (अदिश आव्यूह) म्हणजे ज्याचे सर्व कर्ण घटक एकाच संख्येइतके, $k$, आहेत असा diagonal matrix.`,
        t`कर्ण घटक समान असणे पुरेसे नाही: कर्णाबाहेरचा प्रत्येक घटकही $0$ असला पाहिजे.`,
        t`**Identity matrix** (एकक आव्यूह) $I$ म्हणजे $k = 1$ असलेला scalar matrix.`,
      ],
    },
    {
      title: t`प्रकार एकमेकांत कसे बसतात`,
      points: [
        t`प्रत्येक identity matrix हा $k = 1$ असलेला scalar matrix आहे.`,
        t`प्रत्येक scalar matrix हा diagonal matrix आहे.`,
        t`Diagonal matrix मध्ये त्याच्या कर्णाच्या खाली आणि वर, दोन्हीकडे शून्य असतात.`,
        t`म्हणून diagonal matrix हा upper triangular सुद्धा आहे आणि lower triangular सुद्धा.`,
      ],
    },
    {
      title: t`Singular आणि non-singular`,
      points: [
        t`आठवा: square matrix $A$ ला एक determinant असतो, $|A|$ असे लिहिलेली एक संख्या.`,
        t`$|A| = 0$ असेल तर $A$ हा **singular** आहे.`,
        t`$|A| \ne 0$ असेल तर $A$ हा **non-singular** (अनेकल) आहे.`,
        t`जो matrix square नाही त्याला determinant नसतो, म्हणून तो दोन्हीपैकी काहीच नाही.`,
      ],
    },
  ],
  worked: {
    prompt: t`$a_{ij} = 2i - j$ असलेला $A = [a_{ij}]_{2 \times 3}$ तयार करा.`,
    steps: [
      t`कोटी $2 \times 3$ म्हणजे $2$ rows ($i = 1, 2$) आणि $3$ columns ($j = 1, 2, 3$): $6$ घटक.`,
      t`Row 1 ($i = 1$) मध्ये: $a_{11} = 2 - 1 = 1$, $a_{12} = 2 - 2 = 0$, $a_{13} = 2 - 3 = -1$.`,
      t`Row 2 ($i = 2$) मध्ये: $a_{21} = 4 - 1 = 3$, $a_{22} = 4 - 2 = 2$, $a_{23} = 4 - 3 = 1$.`,
      t`प्रत्येक row matrix च्या एका row मध्ये लिहा. $A$ square नाही, म्हणून त्याला determinant नाही आणि तो square प्रकारांपैकी कोणताच नाही.`,
    ],
    answer: t`$A = \begin{bmatrix} 1 & 0 & -1 \\ 3 & 2 & 1 \end{bmatrix}$`,
  },
  remediation: {
    "C07-M1": t`कोटी नेहमी rows $\times$ columns असते: $3 \times 2$ म्हणजे $3$ rows आणि $2$ columns. म्हणून $i$ हा rows $1$ ते $3$ वर, आणि $j$ हा columns $1$ ते $2$ वर जातो.`,
    "C07-M2": t`$a_{ij}$ हा row $i$, column $j$ मधील घटक आहे: पहिला अधोलेख row आहे. Row $2$, column $1$ मधील घटकासाठी $i = 2$, $j = 1$ ठेवा.`,
    "C07-M3": t`प्रत्येक $i$ साठी, घटक $a_{i1}, a_{i2}, \dots$ row $i$ **मध्ये आडवे** जातात. कोटी $3 \times 2$ असलेल्या matrix मध्ये शेवटी $3$ rows आणि $2$ columns असतात, जी कोटी तुम्हाला दिली होती.`,
    "C07-M4": t`Upper triangular म्हणजे शून्येतर घटक वरच्या त्रिकोणात आहेत: $i > j$ साठी $a_{ij} = 0$, म्हणून शून्य कर्णाच्या **खाली** आहेत. कर्णाच्या वर शून्य असतील तर तो lower triangular होतो.`,
    "C07-M5": t`Scalar matrix हा आधी diagonal matrix असतो: कर्णाबाहेरचा प्रत्येक घटक $0$ असतो. त्यानंतरच सर्व कर्ण घटक समान असले पाहिजेत.`,
    "C07-M6": t`Singular म्हणजे $|A| = 0$; non-singular म्हणजे $|A| \ne 0$. आधी $|A|$ काढा, मग नाव द्या.`,
  },
  solutions: {
    "C07-Q1": [
      t`कोटी $3 \times 2$: $3$ rows ($i = 1, 2, 3$), $2$ columns ($j = 1, 2$).`,
      t`Row 1 मध्ये: $a_{11} = 1 - 3 = -2$, $a_{12} = 1 - 6 = -5$. Row 2 मध्ये: $a_{21} = -1$, $a_{22} = -4$. Row 3 मध्ये: $a_{31} = 0$, $a_{32} = -3$.`,
      t`$A = \begin{bmatrix} -2 & -5 \\ -1 & -4 \\ 0 & -3 \end{bmatrix}$.`,
    ],
    "C07-Q2": [
      t`कोटी $3 \times 2$: $3$ rows ($i = 1, 2, 3$), $2$ columns ($j = 1, 2$). Row $i$ चा छेद $5 - i$ आहे.`,
      t`Row 1 ($4$ ने भागा): $a_{11} = 0$, $a_{12} = \frac{1}{4}$. Row 2 ($3$ ने भागा): $a_{21} = \frac{1}{3}$, $a_{22} = 0$. Row 3 ($2$ ने भागा): $a_{31} = \frac{4}{2} = 2$, $a_{32} = \frac{1}{2}$.`,
      t`$A = \begin{bmatrix} 0 & \frac{1}{4} \\ \frac{1}{3} & 0 \\ 2 & \frac{1}{2} \end{bmatrix}$.`,
    ],
    "C07-Q3": [
      t`कर्णाच्या खाली, $a_{21} = a_{31} = a_{32} = 0$: म्हणून $A$ हा upper triangular आहे. त्याच्या वर, $a_{12} = -2 \ne 0$, म्हणून तो lower triangular नाही.`,
      t`$|A|$ चा row 3 नुसार विस्तार करा: तिथला प्रत्येक घटक $0$ आहे, म्हणून $|A| = 0$. $A$ हा singular आहे, non-singular नाही.`,
      t`$a_{23}$ हा row 2, column 3 मध्ये आहे: $a_{23} = -5$, $0$ नाही. खरे विधान: $A$ हा upper triangular matrix आहे.`,
    ],
    "C07-Q4": [
      t`$a_{21}$ हा row 2, column 1 मध्ये आहे: $a_{21} = 3$. आणि $a_{12}$, row 1, column 2 मध्ये, $0$ आहे.`,
      t`शून्य $a_{12}, a_{13}, a_{23}$ कर्णाच्या वर आहेत, म्हणून $A$ हा lower triangular आहे, upper triangular नाही.`,
      t`दोन शून्य असलेल्या row 1 नुसार विस्तार करा: $|A| = 2\big((-1)(1) - (0)(3)\big) = -2 \ne 0$. $A$ हा non-singular आहे. खरे विधान: $a_{21} = 3$.`,
    ],
    "C07-Q5": [
      t`$|B| = 7 \times 7 - 5 \times (-4) = 49 + 20 = 69$.`,
      t`$|B| \ne 0$, म्हणून $B$ हा non-singular आहे. त्याचे कर्णाबाहेरचे घटक $5$ आणि $-4$ हे $0$ नाहीत, म्हणून तो diagonal नाही, आणि म्हणून scalar सुद्धा नाही.`,
      t`$b_{12}$ हा row 1, column 2 मध्ये आहे: $b_{12} = 5$. खरे विधान: $|B| = 69$.`,
    ],
  },
};
