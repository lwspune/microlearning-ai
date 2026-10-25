import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "mr",
  status: "approved",
  source: "09b09daa9957cc",
  hook: {
    prompt: t`$75^\circ$ आणि $15^\circ$ यांपैकी कोणताच मानक angle नाही. **तरीही तुम्ही $\sin 75^\circ + \sin 15^\circ$ ची नेमकी किंमत काढू शकता का?**`,
    reveal: t`हो. बेरजेचे गुणाकारात रूपांतर करा: $\sin 75^\circ + \sin 15^\circ = 2\sin\frac{75^\circ + 15^\circ}{2}\cos\frac{75^\circ - 15^\circ}{2}$ $= 2\sin 45^\circ\cos 30^\circ$ $= 2 \cdot \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{3}}{2}$ $= \frac{\sqrt{6}}{2}$.`,
  },
  intuition: [
    t`**Product** (गुणाकार) म्हणजे गुणाकार; त्याचे भाग म्हणजे त्याचे **factors** (अवयव), जसे $2\sin A\cos B$ मधील $\sin A$ आणि $\cos B$.`,
    t`$\sin C + \sin D$ सारखी बेरीज पदाप्रमाणे सोपी करता येत नाही.`,
    t`गुणाकार सोपा करता येतो: अवयव रद्द होतात, आणि एखादा अवयव शून्य असेल तर गुणाकार $0$ होतो.`,
    t`बेरजेचे **factorise** करणे (अवयव पाडणे) म्हणजे ती गुणाकार म्हणून लिहिणे; ही सूत्रे दोन angles $C$ आणि $D$ साठी तेच करतात.`,
    t`गुणाकारातील angles म्हणजे **average** (सरासरी) $\frac{C+D}{2}$, म्हणजे $C$ आणि $D$ यांच्या बरोबर मधली दिशा.`,
    t`आणि **half-gap** (अर्धा फरक) $\frac{C-D}{2}$: $C$ सरासरीपेक्षा इतका पुढे आहे, आणि $D$ इतका मागे.`,
  ],
  formal: [
    {
      title: t`चार सूत्रे`,
      points: [
        t`$\sin C + \sin D$ बरोबर $2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$.`,
        t`$\sin C - \sin D$ बरोबर $2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$.`,
        t`$\cos C + \cos D$ बरोबर $2\cos\frac{C+D}{2}\cos\frac{C-D}{2}$.`,
        t`$\cos C - \cos D$ बरोबर $-2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$.`,
        t`प्रत्येक गुणाकार $2$, किंवा $-2$, ने सुरू होतो, आणि सरासरी व अर्धा फरक वापरतो.`,
      ],
    },
    {
      title: t`ही कुठून येतात`,
      points: [
        t`Compound-angle सूत्रांनी $\sin(A + B)$ आणि $\sin(A - B)$ यांची बेरीज करा.`,
        t`$\cos A\sin B$ ची पदे रद्द होतात, म्हणून $\sin(A + B) + \sin(A - B)$ बरोबर $2\sin A\cos B$.`,
        t`आता $C = A + B$ आणि $D = A - B$ ठेवा.`,
        t`मग $A = \frac{C+D}{2}$ आणि $B = \frac{C-D}{2}$, ज्यावरून पहिले सूत्र मिळते.`,
        t`उरलेली तीन याच पद्धतीने येतात.`,
        t`म्हणून ही उलटी वाचलेली compound-angle सूत्रे आहेत.`,
      ],
    },
    {
      title: t`चिन्हाचा सापळा`,
      points: [
        t`फक्त $\cos C - \cos D$ च्या पुढे वजा चिन्ह आहे.`,
        t`कारण $\cos(A + B) - \cos(A - B)$ बरोबर $-2\sin A\sin B$.`,
        t`जेव्हा $C < D$, अर्धा फरक ऋण असतो, म्हणून $\sin\frac{C-D}{2}$ सुद्धा ऋण असते.`,
        t`मग दोन वजा चिन्हे रद्द होतात.`,
        t`उदाहरणार्थ, $\cos 10^\circ - \cos 50^\circ$ बरोबर $-2\sin 30^\circ\sin(-20^\circ)$.`,
        t`$\sin(-20^\circ) = -\sin 20^\circ$ आणि $2\sin 30^\circ = 1$, म्हणून ते $\sin 20^\circ$ च्या बरोबर आहे.`,
      ],
    },
    {
      title: t`चार पदे`,
      points: [
        t`चार पदांमध्ये, ज्यांच्या angles ची बेरीज सारखी आहे अशा पदांच्या जोड्या लावा.`,
        t`मग प्रत्येक जोडी तोच अवयव देते.`,
        t`$\sin 7\theta + \sin 5\theta + \sin 3\theta + \sin\theta$ मध्ये, $7\theta$ ची $\theta$ शी, आणि $5\theta$ ची $3\theta$ शी जोडी लावा.`,
        t`दोन्ही जोड्यांची बेरीज $8\theta$ आहे: त्या $2\sin 4\theta\cos 3\theta$ आणि $2\sin 4\theta\cos\theta$ देतात.`,
        t`म्हणून बेरीज $2\sin 4\theta(\cos 3\theta + \cos\theta)$ आहे.`,
      ],
    },
    {
      title: t`भागाकार`,
      points: [
        t`**Quotient** (भागाकार) म्हणजे एका राशीला दुसरीने भागणे.`,
        t`अंश आणि छेदाचे वेगवेगळे अवयव पाडा.`,
        t`दोघांमध्ये सामाईक असलेला अवयव मग रद्द होतो.`,
        t`जे उरते ते बहुधा एकच tan किंवा cot असते.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\dfrac{\cos 3\theta - \cos 7\theta}{\sin 7\theta - \sin 3\theta}$ सोपे करा.`,
    steps: [
      t`अंश, cos चा फरक: $\cos 3\theta - \cos 7\theta$ $= -2\sin\frac{3\theta + 7\theta}{2}\sin\frac{3\theta - 7\theta}{2}$ $= -2\sin 5\theta\sin(-2\theta)$.`,
      t`$\sin(-2\theta) = -\sin 2\theta$, म्हणून दोन वजा चिन्हे रद्द होतात: अंश $2\sin 5\theta\sin 2\theta$ आहे.`,
      t`छेद, sin चा फरक: $\sin 7\theta - \sin 3\theta$ $= 2\cos\frac{7\theta + 3\theta}{2}\sin\frac{7\theta - 3\theta}{2}$ $= 2\cos 5\theta\sin 2\theta$.`,
      t`$2\sin 2\theta$ रद्द करा: $\dfrac{\sin 5\theta}{\cos 5\theta}$.`,
    ],
    answer: t`$\tan 5\theta$.`,
  },
  remediation: {
    "C08-M1": t`$\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$, कारण $\cos(A + B) - \cos(A - B) = -2\sin A\sin B$. $C = 0^\circ$, $D = 60^\circ$ ने तपासा: $\cos 0^\circ - \cos 60^\circ = \frac{1}{2}$, आणि $-2\sin 30^\circ\sin(-30^\circ) = \frac{1}{2}$.`,
    "C08-M2": t`गुणाकारातील angles म्हणजे बेरजेचा अर्धा आणि फरकाचा अर्धा: $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$. ते $C = A + B$, $D = A - B$ वरून येतात, म्हणून $A = \frac{C+D}{2}$ आणि $B = \frac{C-D}{2}$.`,
    "C08-M3": t`बेरजेचे sin म्हणजे sins ची बेरीज नाही: $\sin 30^\circ + \sin 60^\circ$ सुमारे $1.37$ आहे, $\sin 90^\circ = 1$ नाही. दोन sines किंवा cosines ची बेरीज $2$ गुणिले एक गुणाकार होते: $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$.`,
    "C08-M4": t`तो गुणाकार म्हणजे $\sin C + \sin D$. फरकासाठी sin आणि cos जागा बदलतात: $\sin C - \sin D = 2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$. sin अर्ध्या फरकावर आहे, म्हणून $C = D$ असताना ते $0$ होते, जसे व्हायला हवे.`,
    "C08-M5": t`चारही गुणाकार $2$ (किंवा $-2$) ने सुरू होतात. $C = D = 0$ ने तपासा: $\cos 0 + \cos 0 = 2$, आणि $2\cos 0\cos 0 = 2$.`,
  },
  solutions: {
    "C08-Q1": [
      t`अंश: $\sin 8x + \sin 2x = 2\sin\frac{8x + 2x}{2}\cos\frac{8x - 2x}{2} = 2\sin 5x\cos 3x$.`,
      t`छेद: $\cos 2x - \cos 8x = -2\sin\frac{2x + 8x}{2}\sin\frac{2x - 8x}{2} = -2\sin 5x\sin(-3x) = 2\sin 5x\sin 3x$.`,
      t`$2\sin 5x$ रद्द करा: $\dfrac{\cos 3x}{\sin 3x} = \cot 3x$.`,
    ],
    "C08-Q2": [
      t`अंश: $\sin 2x + \sin 2y = 2\sin(x + y)\cos(x - y)$.`,
      t`छेद: $\sin 2x - \sin 2y = 2\cos(x + y)\sin(x - y)$.`,
      t`भागा: $\dfrac{\sin(x + y)}{\cos(x + y)} \cdot \dfrac{\cos(x - y)}{\sin(x - y)} = \tan(x + y)\cot(x - y) = \dfrac{\tan(x + y)}{\tan(x - y)}$.`,
    ],
    "C08-Q3": [
      t`अंश: $\cos 9x - \cos 5x = -2\sin\frac{9x + 5x}{2}\sin\frac{9x - 5x}{2} = -2\sin 7x\sin 2x$.`,
      t`छेद: $\sin 17x - \sin 3x = 2\cos\frac{17x + 3x}{2}\sin\frac{17x - 3x}{2} = 2\cos 10x\sin 7x$.`,
      t`$2\sin 7x$ रद्द करा: $-\dfrac{\sin 2x}{\cos 10x}$.`,
    ],
    "C08-Q4": [
      t`$C = \frac{\pi}{4} + x$, $D = \frac{\pi}{4} - x$ घेऊन $\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$ वापरा: $\frac{C+D}{2} = \frac{\pi}{4}$ आणि $\frac{C-D}{2} = x$.`,
      t`म्हणून राशी $-2\sin\frac{\pi}{4}\sin x = -2 \cdot \frac{1}{\sqrt{2}}\sin x = -\sqrt{2}\sin x$ आहे.`,
    ],
    "C08-Q5": [
      t`ज्यांच्या angles ची बेरीज $120^\circ$ आहे अशा पदांच्या जोड्या लावा: $(\cos 80^\circ + \cos 40^\circ) + (\cos 70^\circ + \cos 50^\circ)$.`,
      t`$\cos 80^\circ + \cos 40^\circ = 2\cos 60^\circ\cos 20^\circ$ आणि $\cos 70^\circ + \cos 50^\circ = 2\cos 60^\circ\cos 10^\circ$.`,
      t`$2\cos 60^\circ = 1$, म्हणून बेरीज $\cos 20^\circ + \cos 10^\circ$ आहे.`,
    ],
    "C08-Q6": [
      t`$\sin 40^\circ = \sin(90^\circ - 50^\circ) = \cos 50^\circ$, म्हणून राशी $\cos 50^\circ - \cos 70^\circ$ आहे.`,
      t`$\cos 50^\circ - \cos 70^\circ = -2\sin 60^\circ\sin(-10^\circ) = 2 \cdot \frac{\sqrt{3}}{2}\sin 10^\circ = \sqrt{3}\sin 10^\circ$.`,
      t`$\sin 10^\circ = \cos 80^\circ$, म्हणून ते $\sqrt{3}\cos 80^\circ$ च्या बरोबर आहे.`,
    ],
  },
};
