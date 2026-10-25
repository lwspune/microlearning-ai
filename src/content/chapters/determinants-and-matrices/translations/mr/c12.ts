import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c12: ConceptTranslation = {
  id: "C12",
  lang: "mr",
  status: "approved",
  source: "078b3c38e30cd8",
  hook: {
    prompt: t`$\begin{bmatrix} 2 & 5 & 1 \\ -5 & 4 & 6 \\ -1 & -6 & 3 \end{bmatrix}$ मध्ये कर्णाबाहेरचा प्रत्येक घटक त्याच्या आरशातील प्रतिमेचा ऋण आहे: $5$ आणि $-5$, $1$ आणि $-1$, $6$ आणि $-6$. **हा matrix skew-symmetric आहे का?**`,
    reveal: t`नाही. Skew-symmetric म्हणजे **प्रत्येक** $i$ आणि $j$ साठी $a_{ij} = -a_{ji}$, कर्णासह. तिथे ते सांगते $a_{ii} = -a_{ii}$, म्हणून $a_{ii} = 0$. हा कर्ण $2, 4, 3$ आहे, म्हणून matrix skew-symmetric नाही. तो symmetric सुद्धा नाही ($5 \ne -5$): तो दोन्हीपैकी काहीच नाही.`,
  },
  intuition: [
    t`आठवा: square matrix चा **leading diagonal** त्याच्या वर-डाव्या घटकापासून खाली-उजव्यापर्यंत जातो.`,
    t`Matrix त्या कर्णावर दुमडा: प्रत्येक घटक $a_{ij}$ त्याच्या **mirror image** (आरशातील प्रतिमा) $a_{ji}$ वर येतो.`,
    t`आठवा: प्रत्येक $a_{ij}$ ची $a_{ji}$ शी अदलाबदल म्हणजे नेमके transpose $A^T$ करतो तेच.`,
    t`Matrix **symmetric** (सममित) असतो जर प्रत्येक घटक समान घटकावर येतो, आणि **skew-symmetric** (विषम सममित) जर त्याच्या ऋणावर.`,
    t`कर्ण स्वतःवरच येतो, म्हणून skew-symmetric matrix चा प्रत्येक कर्ण घटक त्याच्याच ऋणाइतका असतो: $0$.`,
    t`प्रत्येक square matrix दोन्हींचे मिश्रण आहे: $A + A^T$ चा अर्धा symmetric आहे, $A - A^T$ चा अर्धा skew-symmetric.`,
  ],
  formal: [
    {
      title: t`Symmetric matrices (सममित आव्यूह)`,
      points: [
        t`Square matrix $A$ हा **symmetric** असतो जेव्हा $A^T = A$.`,
        t`घटकवार, ते सांगते की सर्व $i$ आणि $j$ साठी $a_{ij} = a_{ji}$.`,
        t`म्हणून आरशातील घटकांची प्रत्येक जोडी समान आहे, चिन्हासह: इथे $5$ आणि $5$, $1$ आणि $1$, $6$ आणि $6$.`,
        t`कर्ण घटक स्वतःचीच आरशातील प्रतिमा आहे, म्हणून कर्ण घटक काहीही असू शकतात.`,
      ],
    },
    {
      title: t`Skew-symmetric matrices (विषम सममित आव्यूह)`,
      points: [
        t`Square matrix $A$ हा **skew-symmetric** असतो जेव्हा $A^T = -A$.`,
        t`घटकवार, ते सांगते की सर्व $i$ आणि $j$ साठी $a_{ij} = -a_{ji}$.`,
        t`म्हणून आरशातील घटकांची प्रत्येक जोडी ऋणांची जोडी आहे: इथे $5$ आणि $-5$, $-1$ आणि $1$, $6$ आणि $-6$.`,
        t`$i = j$ घेतल्यावर ते सांगते $a_{ii} = -a_{ii}$, म्हणून **प्रत्येक कर्ण घटक $0$ आहे**.`,
      ],
    },
    {
      title: t`दोन्ही, एक किंवा काहीच नाही`,
      points: [
        t`आठवा: **diagonal matrix** मध्ये leading diagonal बाहेरचा प्रत्येक घटक $0$ असतो.`,
        t`त्याच्या आरशातील जोड्या सर्व $0$ आणि $0$ आहेत, म्हणून diagonal matrix नेहमी symmetric असतो.`,
        t`त्याचा एखादा कर्ण घटक $0$ नसेल, तर तो skew-symmetric नाही: तो फक्त symmetric आहे.`,
        t`जो matrix दोन्ही आहे त्यात $a_{ij} = a_{ji} = -a_{ji}$, म्हणून प्रत्येक घटक $0$ आहे.`,
        t`म्हणून **zero matrix** $O$, ज्याचा प्रत्येक घटक $0$ आहे, हाच दोन्ही असणारा एकमेव matrix आहे.`,
        t`एखादा matrix **दोन्हीपैकी काहीच नाही** असू शकतो: जसे त्याच्या आरशातील जोड्या ऋण असतील पण कर्ण पूर्ण $0$ नसेल.`,
      ],
    },
    {
      title: t`अज्ञात घटक शोधणे`,
      points: [
        t`$A$ symmetric असेल, तर अज्ञात असलेला घटक त्याच्या आरशातील प्रतिमेइतका ठेवा.`,
        t`$A$ skew-symmetric असेल, तर तो त्याच्या आरशातील प्रतिमेच्या **ऋणाइतका** ठेवा.`,
        t`ऋण घेण्याआधी संपूर्ण आरशातील घटक कंसात ठेवा.`,
        t`म्हणून $-(3x - 1) = -3x + 1$, $-3x - 1$ नाही.`,
        t`मग ते समीकरण अज्ञातासाठी सोडवा.`,
      ],
    },
    {
      title: t`नेहमी खरी असणारी दोन तथ्ये`,
      points: [
        t`कोणताही square matrix $A$ घ्या, आणि आठवा की $(A^T)^T = A$ आणि बेरीज पदानुसार transpose होते.`,
        t`म्हणून $(A + A^T)^T = A^T + A$, जे पुन्हा $A + A^T$ आहे.`,
        t`त्यामुळे $A + A^T$ नेहमी symmetric असतो.`,
        t`त्याचप्रमाणे $(A - A^T)^T = A^T - A$.`,
        t`ते म्हणजे $-(A - A^T)$, म्हणून $A - A^T$ नेहमी skew-symmetric असतो.`,
      ],
    },
    {
      title: t`Square matrix ची विभागणी`,
      points: [
        t`प्रत्येक square matrix $A$ ही बेरीज $A = P + Q$ आहे, ज्यात $P$ symmetric आहे आणि $Q$ skew-symmetric.`,
        t`Symmetric भाग $P = \frac{1}{2}(A + A^T)$ आहे.`,
        t`Skew-symmetric भाग $Q = \frac{1}{2}(A - A^T)$ आहे.`,
        t`प्रत्येक घटकाचा अर्धा केल्याने matrix चा प्रकार बदलत नाही, म्हणून $P$ अजूनही symmetric आहे आणि $Q$ अजूनही skew-symmetric.`,
        t`त्यांची बेरीज केल्यावर $A^T$ ची पदे रद्द होतात: $P + Q = \frac{1}{2}(2A) = A$.`,
        t`अर्धे न करता दोन्हींची बेरीज $2A$ येते, $A$ नाही.`,
      ],
    },
  ],
  worked: {
    prompt: t`$A = \begin{bmatrix} 5 & 2 & -4 \\ 3 & -7 & 2 \\ 4 & -5 & -3 \end{bmatrix}$ हा एक symmetric आणि एक skew-symmetric matrix यांची बेरीज म्हणून मांडा.`,
    steps: [
      t`Transpose लिहा: rows चे columns होतात. $A^T = \begin{bmatrix} 5 & 3 & 4 \\ 2 & -7 & -5 \\ -4 & 2 & -3 \end{bmatrix}$.`,
      t`$A + A^T = \begin{bmatrix} 10 & 5 & 0 \\ 5 & -14 & -3 \\ 0 & -3 & -6 \end{bmatrix}$, म्हणून $P = \frac{1}{2}(A + A^T)$ $= \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$. आरशातील घटक समान आहेत: $P$ symmetric आहे.`,
      t`$A - A^T = \begin{bmatrix} 0 & -1 & -8 \\ 1 & 0 & 7 \\ 8 & -7 & 0 \end{bmatrix}$, म्हणून $Q = \frac{1}{2}(A - A^T)$ $= \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$. आरशातील घटक ऋण आहेत आणि कर्ण $0$ आहे: $Q$ skew-symmetric आहे.`,
      t`$P + Q$ चा एक घटक तपासा: row 1, column 2 मध्ये, $\frac{5}{2} + \left(-\frac{1}{2}\right)$ $= 2 = a_{12}$. इतर प्रत्येक घटकही असाच मिळून $A$ देतो.`,
    ],
    answer: t`$A = \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$ $+ \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$, symmetric अधिक skew-symmetric.`,
  },
  remediation: {
    "C12-M1": t`$a_{ij} = -a_{ji}$ प्रत्येक $i$ आणि $j$ साठी खरे असले पाहिजे, कर्णासह, जिथे ते सांगते $a_{ii} = -a_{ii}$. म्हणून skew-symmetric matrix चा प्रत्येक कर्ण घटक $0$ असतो, आणि शून्येतर घटक असलेला diagonal matrix फक्त symmetric असतो.`,
    "C12-M2": t`$(A + A^T) + (A - A^T) = 2A$, $A$ नाही. दोन्हींचा अर्धा करा: $P = \frac{1}{2}(A + A^T)$ आणि $Q = \frac{1}{2}(A - A^T)$.`,
    "C12-M3": t`Symmetric म्हणजे $A^T = A$: आरशातील घटक समान. Skew-symmetric म्हणजे $A^T = -A$: आरशातील घटक ऋण आणि कर्ण $0$. म्हणून $A$ चा symmetric भाग $\frac{1}{2}(A + A^T)$ आहे, आणि skew भाग $\frac{1}{2}(A - A^T)$.`,
    "C12-M4": t`Symmetry ही leading diagonal बद्दल आहे, वर-डावीकडून खाली-उजवीकडे: $a_{ij}$ ची जोडी $a_{ji}$ शी होते, म्हणजे row आणि column क्रमांक अदलाबदल केलेल्या घटकाशी, नेमकी $A^T$ प्रमाणे.`,
    "C12-M5": t`Symmetric साठी नेमके $a_{ij} = a_{ji}$ हवे, चिन्हासह. एकमेकांचे ऋण असलेले आरशातील घटक, शून्य कर्णासह, matrix ला skew-symmetric करतात, symmetric नाही.`,
    "C12-M6": t`ऋण चिन्ह संपूर्ण घटकाला गुणते: $-(2x - 3) = -2x + 3$. ऋण घेण्याआधी घटक कंसात ठेवा.`,
  },
  solutions: {
    "C12-Q1": [
      t`Rows आणि columns ची अदलाबदल केल्यावर diagonal matrix तसाच राहतो, म्हणून $A^T = A$: $A$ symmetric आहे.`,
      t`$-A$ चा कर्ण $-3, -5, -\frac{1}{3}$ आहे, म्हणून $A^T \ne -A$. Skew-symmetric matrix साठी प्रत्येक कर्ण घटक $0$ असला पाहिजे.`,
      t`म्हणून $A$ फक्त symmetric आहे.`,
    ],
    "C12-Q2": [
      t`आरशातील जोड्यांची तुलना करा: $a_{21} = -1 - 2i = -a_{12}$, $a_{31} = 2 - i = -(i - 2) = -a_{13}$, आणि $a_{32} = 7 = -a_{23}$.`,
      t`प्रत्येक कर्ण घटक $0$ आहे. म्हणून $A^T = -A$: $A$ skew-symmetric आहे.`,
      t`तो symmetric नाही: $a_{12} = 1 + 2i$ पण $a_{21} = -1 - 2i$, आणि शून्येतर संख्या कधीच तिच्या ऋणाइतकी नसते. म्हणून $A$ फक्त skew-symmetric आहे.`,
    ],
    "C12-Q3": [
      t`Skew-symmetric म्हणजे $a_{21} = -a_{12}$, म्हणून $2x - 3 = -7$.`,
      t`$2x = -4$, म्हणून $x = -2$.`,
      t`तपासणी: $a_{21} = -7 = -a_{12}$, जोड्या $4, -4$ आणि $9, -9$ ऋण आहेत, आणि कर्ण $0$ आहे. म्हणून $x = -2$.`,
    ],
    "C12-Q4": [
      t`$A^T = \begin{bmatrix} 4 & 3 \\ -2 & -5 \end{bmatrix}$, म्हणून $A + A^T = \begin{bmatrix} 8 & 1 \\ 1 & -10 \end{bmatrix}$.`,
      t`$P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 4 & \frac{1}{2} \\ \frac{1}{2} & -5 \end{bmatrix}$.`,
      t`तपासणी: $Q = A - P = \begin{bmatrix} 0 & -\frac{5}{2} \\ \frac{5}{2} & 0 \end{bmatrix}$ हा skew-symmetric आहे, जसा असायला हवा.`,
    ],
    "C12-Q5": [
      t`$A^T = \begin{bmatrix} 3 & -2 & -4 \\ 3 & -2 & -5 \\ -1 & 1 & 2 \end{bmatrix}$.`,
      t`$A - A^T = \begin{bmatrix} 0 & 5 & 3 \\ -5 & 0 & 6 \\ -3 & -6 & 0 \end{bmatrix}$.`,
      t`$Q = \frac{1}{2}(A - A^T) = \begin{bmatrix} 0 & \frac{5}{2} & \frac{3}{2} \\ -\frac{5}{2} & 0 & 3 \\ -\frac{3}{2} & -3 & 0 \end{bmatrix}$: शून्य कर्ण, आरशातील घटक ऋण.`,
    ],
    "C12-Q6": [
      t`$A^T = \begin{bmatrix} 1 & 3 & -2 \\ 2 & 2 & -3 \\ 4 & 1 & 2 \end{bmatrix}$.`,
      t`$A + A^T = \begin{bmatrix} 2 & 5 & 2 \\ 5 & 4 & -2 \\ 2 & -2 & 4 \end{bmatrix}$.`,
      t`$P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 1 & \frac{5}{2} & 1 \\ \frac{5}{2} & 2 & -1 \\ 1 & -1 & 2 \end{bmatrix}$: आरशातील घटक समान आहेत.`,
    ],
  },
};
