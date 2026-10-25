import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c11: ConceptTranslation = {
  id: "C11",
  lang: "mr",
  status: "approved",
  source: "0066962580c61a",
  hook: {
    prompt: t`$A$ हा $2 \times 3$ matrix आहे आणि $B$ हा $3 \times 4$, म्हणून $AB$ हा $2 \times 4$ आहे. **$(AB)^T = A^TB^T$ आहे का?**`,
    reveal: t`तसे असूच शकत नाही: $A^T$ हा $3 \times 2$ आहे आणि $B^T$ हा $4 \times 3$, म्हणून $A^TB^T$ चा गुणाकारसुद्धा करता येत नाही. क्रम उलटा: $B^TA^T$ म्हणजे $(4 \times 3)(3 \times 2) = 4 \times 2$, जी $(AB)^T$ ची कोटी आहे. आणि ते समान आहे: $(AB)^T = B^TA^T$.`,
  },
  intuition: [
    t`Matrix $A$ चा **transpose** (परिवर्त) करणे म्हणजे त्याच्या rows columns म्हणून लिहिणे: उत्तर $A^T$ आहे, ज्याला "A transpose" असे वाचतात.`,
    t`$A$ ची row 1, डावीकडून उजवीकडे वाचलेली, $A^T$ चा column 1 होते, वरून खाली वाचलेला.`,
    t`Row 2 चा column 2 होतो, आणि प्रत्येक row साठी असेच.`,
    t`आठवा: कोटी $m \times n$ म्हणजे $m$ rows आणि $n$ columns; म्हणून $A^T$ हा $n \times m$ आहे.`,
    t`हे **leading diagonal**, वर-डावीकडून खाली-उजवीकडे, भोवती उलटणे आहे: त्याचे घटक जागीच राहतात, इतर अदलाबदल होतात.`,
    t`बेरीज आणि संख्येच्या पटी पदानुसार transpose होतात, पण गुणाकार **reverse order** (उलट्या क्रमाने) transpose होतो.`,
  ],
  formal: [
    {
      title: t`Matrix चा transpose`,
      points: [
        t`आठवा: $A = [a_{ij}]_{m \times n}$ मध्ये घटक $a_{ij}$ हा row $i$, column $j$ मध्ये आहे.`,
        t`त्याचा **transpose** म्हणजे $A^T = [a_{ji}]_{n \times m}$, ज्यात $n$ rows आणि $m$ columns आहेत.`,
        t`$A^T$ चा $(i, j)$ घटक म्हणजे $A$ चा $(j, i)$ घटक.`,
        t`उदाहरणार्थ, $A = \begin{bmatrix} a & b & c \\ d & e & f \end{bmatrix}$ हा $2 \times 3$ आहे.`,
        t`त्याचा transpose $A^T = \begin{bmatrix} a & d \\ b & e \\ c & f \end{bmatrix}$ आहे, जो $3 \times 2$ आहे.`,
      ],
    },
    {
      title: t`Row 1 column 1 मध्ये खाली जाते`,
      points: [
        t`$A$ ची प्रत्येक row डावीकडून उजवीकडे वाचा.`,
        t`ती $A^T$ चा संगत column म्हणून वरून खाली लिहा.`,
        t`म्हणून row 1 column 1 मध्ये खाली जाते, आणि row 2 column 2 मध्ये.`,
        t`Leading diagonal, $a_{11}, a_{22}, \ldots$, जिथे आहे तिथेच राहतो.`,
        t`Transpose म्हणजे त्या कर्णाभोवती उलटणे, पाव फेरा नव्हे.`,
      ],
    },
    {
      title: t`Transpose चे गुणधर्म`,
      points: [
        t`दोनदा उलटा आणि तुम्ही सुरुवातीच्या जागी परत येता: $(A^T)^T = A$.`,
        t`समान कोटीच्या $A$ आणि $B$ साठी, बेरीज पदानुसार transpose होते.`,
        t`म्हणजे $(A + B)^T = A^T + B^T$.`,
        t`संख्येची पट आपली संख्या ठेवते: कोणत्याही संख्या $k$ साठी $(kA)^T = kA^T$.`,
      ],
    },
    {
      title: t`उलट्या क्रमाचा नियम`,
      points: [
        t`गुणाकार **reverse order** ने transpose होतो: $(AB)^T = B^TA^T$, $A^TB^T$ नाही.`,
        t`कोटी तपासा: समजा $A$ हा $m \times n$ आहे आणि $B$ हा $n \times p$.`,
        t`मग $AB$ हा $m \times p$ आहे, म्हणून $(AB)^T$ हा $p \times m$ आहे.`,
        t`$B^T$ हा $p \times n$ आहे आणि $A^T$ हा $n \times m$, म्हणून $B^TA^T$ सुद्धा $p \times m$ आहे.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $A = \begin{bmatrix} 1 & 2 \\ 3 & 0 \end{bmatrix}$ आणि $B = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix}$, तर $(AB)^T$ काढा आणि तो $B^TA^T$ इतका आहे, $A^TB^T$ इतका नाही, हे तपासा.`,
    steps: [
      t`$AB = \begin{bmatrix} 0 + 4 & -1 + 2 \\ 0 + 0 & -3 + 0 \end{bmatrix}$ $= \begin{bmatrix} 4 & 1 \\ 0 & -3 \end{bmatrix}$.`,
      t`Rows चे columns होतात: $(AB)^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$.`,
      t`$B^T = \begin{bmatrix} 0 & 2 \\ -1 & 1 \end{bmatrix}$, $A^T = \begin{bmatrix} 1 & 3 \\ 2 & 0 \end{bmatrix}$, म्हणून $B^TA^T$ $= \begin{bmatrix} 0 + 4 & 0 + 0 \\ -1 + 2 & -3 + 0 \end{bmatrix}$ $= \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$. ते जुळते.`,
      t`दुसऱ्या क्रमाने, $A^TB^T$ $= \begin{bmatrix} 0 - 3 & 2 + 3 \\ 0 + 0 & 4 + 0 \end{bmatrix}$ $= \begin{bmatrix} -3 & 5 \\ 0 & 4 \end{bmatrix}$, जो वेगळा आहे.`,
    ],
    answer: t`$(AB)^T = B^TA^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$, तर $A^TB^T$ हा वेगळा matrix आहे.`,
  },
  remediation: {
    "C11-M1": t`गुणाकार उलट्या क्रमाने transpose होतो: $(AB)^T = B^TA^T$. $A$ हा $3 \times 2$ आणि $B$ हा $2 \times 3$ असेल, तर $(AB)^T$ हा $3 \times 3$ आहे पण $A^TB^T$ फक्त $2 \times 2$.`,
    "C11-M2": t`क्रम उलटा **आणि** प्रत्येक अवयवाचा transpose घ्या: $(AB)^T = B^TA^T$. किंवा सरळ $AB$ काढा आणि मग त्याच्या rows columns म्हणून लिहा.`,
    "C11-M3": t`Transpose म्हणजे leading diagonal भोवती उलटणे, फिरवणे नव्हे: row 1 चा column 1 होतो, row 2 चा column 2. $A^T$ चा $(i, j)$ घटक म्हणजे $A$ चा $(j, i)$ घटक.`,
    "C11-M4": t`कोटी $m \times n$ वरून $n \times m$ करणे पुरेसे नाही: घटक हलले पाहिजेत. $A$ ची row 1, डावीकडून उजवीकडे वाचलेली, $A^T$ चा column 1 होते, वरून खाली वाचलेला.`,
    "C11-M5": t`प्रश्नातील प्रत्येक transpose पूर्ण करा: बेरीज किंवा गुणाकार काढल्यावर, त्याच्या rows columns म्हणून लिहा. $3 \times 2$ उत्तराचे $2 \times 3$ होते.`,
    "C11-M6": t`प्रत्येक row आपल्या column मध्ये **खाली** जाते: row 1 चा पहिला घटक column 1 मध्ये सर्वात वर बसतो. Leading diagonal $a_{11}, a_{22}, \ldots$ जिथे आहे तिथेच राहतो.`,
  },
  solutions: {
    "C11-Q1": [
      t`$A$ हा $2 \times 3$ आहे, म्हणून $A^T$ हा $3 \times 2$ आहे.`,
      t`Row 1, $(2, -6, 1)$, चा column 1 होतो; row 2, $(-4, 0, 5)$, चा column 2 होतो.`,
      t`$A^T = \begin{bmatrix} 2 & -4 \\ -6 & 0 \\ 1 & 5 \end{bmatrix}$.`,
    ],
    "C11-Q2": [
      t`$2A = \begin{bmatrix} 10 & -6 \\ 8 & -6 \\ -4 & 2 \end{bmatrix}$, एक $3 \times 2$ matrix.`,
      t`त्याच्या rows चे columns होतात: $(2A)^T = \begin{bmatrix} 10 & 8 & -4 \\ -6 & -6 & 2 \end{bmatrix}$.`,
      t`तपासणी: $A^T = \begin{bmatrix} 5 & 4 & -2 \\ -3 & -3 & 1 \end{bmatrix}$, आणि $2A^T$ वरून तोच matrix मिळतो, जसे $(kA)^T = kA^T$ सांगते.`,
    ],
    "C11-Q3": [
      t`$A^T = \begin{bmatrix} 7 & 0 \\ 3 & 4 \\ 0 & -2 \end{bmatrix}$ आणि $B^T = \begin{bmatrix} 0 & 2 \\ -2 & 1 \\ 3 & -4 \end{bmatrix}$, म्हणून $4B^T = \begin{bmatrix} 0 & 8 \\ -8 & 4 \\ 12 & -16 \end{bmatrix}$.`,
      t`घटकवार मिळवा: $A^T + 4B^T = \begin{bmatrix} 7 & 8 \\ -5 & 8 \\ 12 & -18 \end{bmatrix}$.`,
      t`तपासणी: $A + 4B = \begin{bmatrix} 7 & -5 & 12 \\ 8 & 8 & -18 \end{bmatrix}$, आणि त्याचा transpose तोच आहे, कारण $(A + 4B)^T = A^T + 4B^T$.`,
    ],
    "C11-Q4": [
      t`$B^T = \begin{bmatrix} -3 & 2 \\ 4 & -1 \\ 1 & -3 \end{bmatrix}$, म्हणून $3A - 5B^T = \begin{bmatrix} 6 + 15 & -9 - 10 \\ 9 - 20 & -6 + 5 \\ -3 - 5 & 12 + 15 \end{bmatrix} = \begin{bmatrix} 21 & -19 \\ -11 & -1 \\ -8 & 27 \end{bmatrix}$.`,
      t`त्याचा transpose घ्या: $(3A - 5B^T)^T = \begin{bmatrix} 21 & -11 & -8 \\ -19 & -1 & 27 \end{bmatrix}$.`,
      t`हे $3A^T - 5B$ आहे, कारण $(B^T)^T = B$.`,
    ],
    "C11-Q5": [
      t`$A$ हा $3 \times 2$ आहे आणि $B$ हा $2 \times 3$, म्हणून $AB$ हा $3 \times 3$ आहे, आणि $(AB)^T$ सुद्धा.`,
      t`$AB = \begin{bmatrix} 0 - 2 & 6 + 1 & -8 - 1 \\ 0 - 4 & 9 + 2 & -12 - 2 \\ 0 + 2 & 12 - 1 & -16 + 1 \end{bmatrix} = \begin{bmatrix} -2 & 7 & -9 \\ -4 & 11 & -14 \\ 2 & 11 & -15 \end{bmatrix}$.`,
      t`Rows चे columns होतात: $(AB)^T = \begin{bmatrix} -2 & -4 & 2 \\ 7 & 11 & 11 \\ -9 & -14 & -15 \end{bmatrix}$, जो $B^TA^T$ आहे.`,
    ],
    "C11-Q6": [
      t`$A$ हा $3 \times 2$ आहे आणि $B$ हा $2 \times 3$, म्हणून $(AB)^T$ हा $3 \times 3$ आहे. $A^TB^T$ सारखे $2 \times 2$ उत्तर शक्य नाही.`,
      t`$AB = \begin{bmatrix} 2 + 8 & -2 - 4 & 4 + 0 \\ 3 + 4 & -3 - 2 & 6 + 0 \\ 0 - 2 & 0 + 1 & 0 + 0 \end{bmatrix} = \begin{bmatrix} 10 & -6 & 4 \\ 7 & -5 & 6 \\ -2 & 1 & 0 \end{bmatrix}$.`,
      t`Rows चे columns होतात: $(AB)^T = \begin{bmatrix} 10 & 7 & -2 \\ -6 & -5 & 1 \\ 4 & 6 & 0 \end{bmatrix}$, जो $B^TA^T$ आहे.`,
    ],
  },
};
