import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "mr",
  status: "approved",
  source: "11eb59e75a938c",
  hook: {
    prompt: t`$\cos 52.5^\circ$ आणि $\cos 7.5^\circ$ यांपैकी कोणतेच तुमच्या कोष्टकात नाही. **तरीही तुम्ही $\cos 52.5^\circ\cos 7.5^\circ$ ची नेमकी किंमत काढू शकता का?**`,
    reveal: t`हो. दोन्ही angles ची बेरीज $60^\circ$ आहे आणि फरक $45^\circ$, म्हणून $2\cos 52.5^\circ\cos 7.5^\circ = \cos 60^\circ + \cos 45^\circ$ $= \frac{1}{2} + \frac{\sqrt{2}}{2}$. याचे अर्धे करा: $\cos 52.5^\circ\cos 7.5^\circ = \frac{1 + \sqrt{2}}{4}$.`,
  },
  intuition: [
    t`$\sin(A + B)$ पासून सुरुवात करा, जे $\sin A\cos B + \cos A\sin B$ आहे.`,
    t`आणि $\sin(A - B)$ म्हणजे $\sin A\cos B - \cos A\sin B$.`,
    t`त्यांची बेरीज करा: $\cos A\sin B$ ची पदे रद्द होतात, आणि $2\sin A\cos B$ उरते.`,
    t`त्याऐवजी वजाबाकी करा, म्हणजे $2\cos A\sin B$ उरते.`,
    t`$\cos(A - B)$ आणि $\cos(A + B)$ सोबतही असेच करा, म्हणजे $2\cos A\cos B$ आणि $2\sin A\sin B$ मिळतात.`,
    t`म्हणून एक **product** (गुणाकार), म्हणजे एक गुणोत्तर गुणिले दुसरे, दोन गुणोत्तरांची बेरीज होते, जी रद्द करणे, मिळवणे किंवा किंमत काढणे सोपे असते.`,
  ],
  formal: [
    {
      title: t`चार सूत्रे`,
      points: [
        t`$2\sin A\cos B$ बरोबर $\sin(A + B) + \sin(A - B)$.`,
        t`$2\cos A\sin B$ बरोबर $\sin(A + B) - \sin(A - B)$.`,
        t`$2\cos A\cos B$ बरोबर $\cos(A + B) + \cos(A - B)$.`,
        t`$2\sin A\sin B$ बरोबर $\cos(A - B) - \cos(A + B)$.`,
      ],
    },
    {
      title: t`Angles मध्ये अर्धे नाहीत`,
      points: [
        t`उजवीकडचे angles फक्त $A + B$ आणि $A - B$ आहेत.`,
        t`या सूत्रांमध्ये अर्धे नाहीत.`,
        t`अर्धे **sum-into-product** (बेरजेतून गुणाकार) सूत्रांमध्ये येतात, जी उलट दिशेने जातात: ती बेरजेचे गुणाकारात रूपांतर करतात.`,
      ],
    },
    {
      title: t`दोन cosines किंवा दोन sines`,
      points: [
        t`cos गुणिले cos मध्ये अधिक चिन्ह आहे: $\cos(A + B) + \cos(A - B)$.`,
        t`sin गुणिले sin म्हणजे फरकाचे cos **वजा** बेरजेचे cos.`,
        t`म्हणून $2\sin A\sin B$ म्हणजे $\cos(A - B) - \cos(A + B)$, ज्यात फरक आधी येतो.`,
      ],
    },
    {
      title: t`sin गुणिले cos`,
      points: [
        t`sin गुणिले cos वरून sines मिळतात: $\sin(A + B)$ आणि $\sin(A - B)$.`,
        t`दोन **factors** (अवयवांचा), म्हणजे गुणल्या जाणाऱ्या गुणोत्तरांचा, क्रम महत्त्वाचा आहे: $2\cos A\sin B$ मध्ये वजा चिन्ह आहे.`,
        t`म्हणून ते असे लिहा की sin चा angle $A$ असेल, मग नेहमी अधिक चिन्ह येते.`,
        t`उदाहरणार्थ, $2\cos 5x\sin 2x = 2\sin 2x\cos 5x$.`,
        t`ते म्हणजे $\sin 7x + \sin(-3x)$, आणि $\sin(-3x) = -\sin 3x$.`,
        t`म्हणून $2\cos 5x\sin 2x = \sin 7x - \sin 3x$.`,
      ],
    },
    {
      title: t`2 महत्त्वाचा आहे`,
      points: [
        t`सूत्रे गुणाकाराच्या दुप्पट देतात, गुणाकार नाही.`,
        t`म्हणून $\sin A\cos B$ बरोबर $\frac{1}{2}[\sin(A + B) + \sin(A - B)]$.`,
      ],
    },
    {
      title: t`तीन किंवा चार अवयव`,
      points: [
        t`एका वेळी दोन अवयवांचे रूपांतर करा.`,
        t`माहीत किमती संख्या म्हणून ठेवा, जसे $\cos 60^\circ = \frac{1}{2}$ आणि $\sin 60^\circ = \frac{\sqrt{3}}{2}$.`,
        t`पदे रद्द करण्यासाठी $\cos(180^\circ - \theta) = -\cos\theta$ वापरा.`,
        t`उदाहरणार्थ, $\cos 100^\circ$ चे $-\cos 80^\circ$ होते, जे $\cos 80^\circ$ चे पद रद्द करू शकते.`,
      ],
    },
  ],
  worked: {
    prompt: t`दाखवा की $\cos 20^\circ\cos 40^\circ\cos 60^\circ\cos 80^\circ = \frac{1}{16}$.`,
    steps: [
      t`$\cos 60^\circ = \frac{1}{2}$, म्हणून गुणाकार म्हणजे $\frac{1}{2}$ गुणिले $\cos 20^\circ\cos 40^\circ\cos 80^\circ$.`,
      t`$2\cos 40^\circ\cos 20^\circ$ $= \cos 60^\circ + \cos 20^\circ$ $= \frac{1}{2} + \cos 20^\circ$. म्हणून $\cos 20^\circ\cos 40^\circ\cos 80^\circ$ $= \frac{1}{2}\left(\frac{1}{2} + \cos 20^\circ\right)\cos 80^\circ$ $= \frac{1}{4}\cos 80^\circ$ $+ \frac{1}{2}\cos 20^\circ\cos 80^\circ$.`,
      t`$2\cos 80^\circ\cos 20^\circ$ $= \cos 100^\circ + \cos 60^\circ$ $= -\cos 80^\circ + \frac{1}{2}$, म्हणून $\frac{1}{2}\cos 20^\circ\cos 80^\circ$ $= \frac{1}{8} - \frac{1}{4}\cos 80^\circ$.`,
      t`बेरीज करा: $\frac{1}{4}\cos 80^\circ + \frac{1}{8}$ $- \frac{1}{4}\cos 80^\circ = \frac{1}{8}$. मग पहिल्या पायरीतील $\frac{1}{2}$ ने गुणा.`,
    ],
    answer: t`$\frac{1}{2} \cdot \frac{1}{8} = \frac{1}{16}$.`,
  },
  remediation: {
    "C09-M1": t`विस्तारांची वजाबाकी करा: $\cos(A - B) - \cos(A + B) = 2\sin A\sin B$. फरकाचे cos आधी येते: $2\sin A\sin B = \cos(A - B) - \cos(A + B)$.`,
    "C09-M2": t`क्रम महत्त्वाचा आहे: $2\sin A\cos B = \sin(A + B) + \sin(A - B)$ पण $2\cos A\sin B = \sin(A + B) - \sin(A - B)$. sin चा angle आधी ठेवा, मग नेहमी अधिक चिन्ह येते.`,
    "C09-M3": t`सूत्रे गुणाकाराच्या **दुप्पट** देतात: $\sin A\cos B = \frac{1}{2}[\sin(A + B) + \sin(A - B)]$. $k$ गुणिले गुणाकारासाठी, कंसाच्या $\frac{k}{2}$ पट घ्या.`,
    "C09-M4": t`अर्धे फक्त बेरजेचे गुणाकारात रूपांतर करताना येतात. गुणाकाराचे बेरजेत रूपांतर करताना angles सरळ $A + B$ आणि $A - B$ असतात: $2\sin A\cos B = \sin(A + B) + \sin(A - B)$.`,
    "C09-M5": t`$\cos(A - B)$ आणि $\cos(A + B)$ यांची बेरीज केल्यास sin ची पदे रद्द होतात, म्हणून अधिक चिन्ह cos-cos सोबत जाते: $2\cos A\cos B = \cos(A + B) + \cos(A - B)$. वजा चिन्हाने $2\sin A\sin B = \cos(A - B) - \cos(A + B)$ मिळते.`,
  },
  solutions: {
    "C09-Q1": [
      t`$\sin 4x\cos 2x = \frac{1}{2} \cdot 2\sin 4x\cos 2x$.`,
      t`$A = 4x$, $B = 2x$ घेऊन $2\sin A\cos B = \sin(A + B) + \sin(A - B)$: $2\sin 4x\cos 2x = \sin 6x + \sin 2x$.`,
      t`याचे अर्धे करा: $\sin 4x\cos 2x = \frac{1}{2}(\sin 6x + \sin 2x)$.`,
    ],
    "C09-Q2": [
      t`समजा $P = \frac{x + y}{2}$ आणि $Q = \frac{x - y}{2}$. मग $P + Q = x$ आणि $P - Q = y$.`,
      t`$2\sin P\sin Q = \cos(P - Q) - \cos(P + Q) = \cos y - \cos x$.`,
      t`$4\sin P\sin Q$ त्याच्या दुप्पट आहे: $2\cos y - 2\cos x$.`,
    ],
    "C09-Q3": [
      t`$A = 35^\circ$, $B = 75^\circ$ घेऊन $2\cos A\cos B = \cos(A + B) + \cos(A - B)$.`,
      t`$= \cos 110^\circ + \cos(-40^\circ)$, आणि $\cos(-40^\circ) = \cos 40^\circ$.`,
      t`म्हणून $2\cos 35^\circ\cos 75^\circ = \cos 110^\circ + \cos 40^\circ$.`,
    ],
    "C09-Q4": [
      t`$A = 20^\circ$, $B = 40^\circ$ घेऊन $2\sin A\sin B = \cos(A - B) - \cos(A + B)$.`,
      t`$= \cos(-20^\circ) - \cos 60^\circ = \cos 20^\circ - \frac{1}{2}$.`,
    ],
    "C09-Q5": [
      t`$A = 75^\circ$, $B = 15^\circ$ घेऊन $2\cos A\sin B = \sin(A + B) - \sin(A - B)$.`,
      t`$= \sin 90^\circ - \sin 60^\circ = 1 - \frac{\sqrt{3}}{2}$.`,
    ],
    "C09-Q6": [
      t`$\tan(60^\circ + x)\tan(60^\circ - x) = \dfrac{2\sin(60^\circ + x)\sin(60^\circ - x)}{2\cos(60^\circ + x)\cos(60^\circ - x)}$. Angles चा फरक $2x$ आहे आणि बेरीज $120^\circ$.`,
      t`अंश: $\cos 2x - \cos 120^\circ = \cos 2x + \frac{1}{2}$. छेद: $\cos 120^\circ + \cos 2x = \cos 2x - \frac{1}{2}$.`,
      t`अंश आणि छेदाला $2$ ने गुणा: $\dfrac{2\cos 2x + 1}{2\cos 2x - 1}$.`,
    ],
  },
};
