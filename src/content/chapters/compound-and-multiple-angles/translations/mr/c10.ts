import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c10: ConceptTranslation = {
  id: "C10",
  lang: "mr",
  status: "approved",
  source: "0c63e1a8ede6ea",
  hook: {
    prompt: t`एका त्रिकोणाचे angles $40^\circ$, $60^\circ$ आणि $80^\circ$ आहेत. Calculator देतो $\tan 40^\circ + \tan 60^\circ + \tan 80^\circ \approx 8.2424$, आणि $\tan 40^\circ \tan 60^\circ \tan 80^\circ \approx 8.2424$ सुद्धा. **हा योगायोग आहे का?**`,
    reveal: t`नाही. हे काटकोन नसलेल्या प्रत्येक त्रिकोणात घडते. कारण $40^\circ + 60^\circ = 180^\circ - 80^\circ$, $\tan(40^\circ + 60^\circ) = -\tan 80^\circ$. डावी बाजू tan सूत्राने लिहा आणि अपूर्णांक काढून टाका: तिन्ही tans ची बेरीज त्यांच्या गुणाकाराएवढी येते.`,
  },
  intuition: [
    t`कोणत्याही त्रिकोण $ABC$ मध्ये तिन्ही angles ची बेरीज $\pi$, म्हणजे $180^\circ$, असते: $A + B + C = \pi$.`,
    t`म्हणून $A + B = \pi - C$, म्हणजे $C$ चा **supplement** (पूरक कोन): $C$ ला $\pi$ पर्यंत पूर्ण करणारा angle.`,
    t`त्यांची बेरीज $\pi$ आहे, म्हणून $A + B$ आणि $C$ हे **allied angles** आहेत: ज्यांची बेरीज किंवा फरक काटकोनाचा पट असतो असे angles.`,
    t`Allied-angle नियम $A + B$ च्या प्रत्येक गुणोत्तराचे $C$ च्या गुणोत्तरात रूपांतर करतात: sin चे चिन्ह तसेच राहते, cos आणि tan चे बदलते.`,
    t`याचे अर्धे करा: $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, म्हणजे $\frac{C}{2}$ चा **complement** (कोटिकोन), जो त्याला $\frac{\pi}{2}$ पर्यंत पूर्ण करतो.`,
    t`Complement साठी, प्रत्येक गुणोत्तर त्याच्या **co-ratio** (सह-गुणोत्तर) मध्ये बदलते: sin चे cos, cos चे sin, tan चे cot.`,
  ],
  formal: [
    {
      title: t`पूर्ण angles`,
      points: [
        t`त्रिकोणात $A + B = \pi - C$, म्हणून $A + B$ चे प्रत्येक गुणोत्तर म्हणजे $\pi - C$ चे गुणोत्तर.`,
        t`$\sin(A + B) = \sin C$.`,
        t`$\cos(A + B) = -\cos C$.`,
        t`$\tan(A + B) = -\tan C$.`,
        t`ही उलटीही वाचता येतात: $\sin C = \sin(A + B)$ आणि $-\cos C = \cos(A + B)$.`,
      ],
    },
    {
      title: t`Half angles (अर्धकोन)`,
      points: [
        t`अर्धे केल्यावर, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, म्हणून प्रत्येक गुणोत्तर $\frac{C}{2}$ चे co-ratio होते.`,
        t`$\sin\frac{A + B}{2} = \cos\frac{C}{2}$.`,
        t`$\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
        t`$\tan\frac{A + B}{2} = \cot\frac{C}{2}$.`,
        t`इथे पूर्ण angles प्रमाणे चिन्हे बदलत नाहीत: प्रत्येक गुणोत्तर फक्त त्याच्या co-ratio मध्ये बदलते.`,
      ],
    },
    {
      title: t`tans ची बेरीज = tans चा गुणाकार`,
      points: [
        t`$\tan(A + B) = -\tan C$ हे बेरजेच्या tan च्या सूत्राने लिहा.`,
        t`$\frac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$.`,
        t`अपूर्णांक काढून टाका: दोन्ही बाजूंना $1 - \tan A\tan B$ ने गुणा.`,
        t`पदे एकत्र करा: $\tan A + \tan B + \tan C$ $= \tan A\tan B\tan C$.`,
        t`हे तेव्हा खरे आहे जेव्हा कोणताही angle काटकोन नसतो, म्हणजे प्रत्येक tan व्याख्यित असतो.`,
      ],
    },
    {
      title: t`cot आणि अर्धकोनांची रूपे`,
      points: [
        t`tan च्या identity ला गुणाकार $\tan A\tan B\tan C$ ने भागा.`,
        t`यावरून $\cot A\cot B + \cot B\cot C$ $+ \cot C\cot A = 1$ मिळते.`,
        t`Half angles साठी, त्याऐवजी $\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \cot\frac{C}{2}$ पासून सुरुवात करा.`,
        t`त्याच पायऱ्या देतात $\tan\frac{A}{2}\tan\frac{B}{2} + \tan\frac{B}{2}\tan\frac{C}{2}$ $+ \tan\frac{C}{2}\tan\frac{A}{2} = 1$.`,
      ],
    },
    {
      title: t`sines आणि cosines च्या बेरजा`,
      points: [
        t`**Sum into product** (बेरजेतून गुणाकार) सूत्रे दोन sines, किंवा दोन cosines, यांच्या बेरजेचे गुणाकारात रूपांतर करतात.`,
        t`त्यांपैकी एक दोन पदांवर वापरा: $A + B$ चे, किंवा $\frac{A + B}{2}$ चे, एक गुणोत्तर बाहेर येते.`,
        t`त्याचे $C$ च्या, किंवा $\frac{C}{2}$ च्या, गुणोत्तरात रूपांतर करा.`,
        t`तिसरे पद, जसे $\sin C$, $\cos C$ किंवा $\cos 2C$, असे लिहा की त्यातही ते गुणोत्तर असेल.`,
        t`**Common factor** (सामाईक अवयव) बाहेर काढा, म्हणजे आता दोन्ही भागांत असलेले गुणोत्तर.`,
        t`$C$ चे दुसरे गुणोत्तर पुन्हा $A + B$ च्या गुणोत्तरात बदला, आणि पुन्हा बेरजेतून गुणाकार वापरा.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\triangle ABC$ मध्ये, $\cos 2A + \cos 2B + \cos 2C$ सोपे करा.`,
    steps: [
      t`$\cos 2A + \cos 2B$ $= 2\cos(A + B)\cos(A - B)$ $= -2\cos C\cos(A - B)$, कारण $\cos(A + B) = -\cos C$.`,
      t`अवयव $\cos C$ सामाईक करण्यासाठी $\cos 2C = 2\cos^2 C - 1$ असे लिहा: बेरीज $-2\cos C\left[\cos(A - B) - \cos C\right]$ $- 1$ आहे.`,
      t`$-\cos C$ चे पुन्हा $\cos(A + B)$ करा: कंस $\cos(A - B) + \cos(A + B)$ $= 2\cos A\cos B$ आहे.`,
    ],
    answer: t`$\cos 2A + \cos 2B + \cos 2C$ $= -1 - 4\cos A\cos B\cos C$.`,
  },
  remediation: {
    "C10-M1": t`$A + B = \pi - C$, म्हणून $\cos(A + B) = -\cos C$ आणि $\tan(A + B) = -\tan C$; फक्त sin चे चिन्ह तसेच राहते. Half angles हे complements आहेत, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, म्हणून प्रत्येक गुणोत्तर बदलते: $\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
    "C10-M2": t`दोन्ही भागांचे अर्धे करा: $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$. म्हणून $\sin\frac{A + B}{2} = \cos\frac{C}{2}$, $\cos\frac{A + B}{2} = \sin\frac{C}{2}$ आणि $\tan\frac{A + B}{2} = \cot\frac{C}{2}$.`,
    "C10-M3": t`$A + B = \pi - C$ हा supplement आहे, complement नाही: गुणोत्तर तेच राहते आणि फक्त चिन्ह बदलू शकते, $\sin(A + B) = \sin C$, $\cos(A + B) = -\cos C$. Co-ratios मध्ये बदलणे half angles साठी आहे, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$.`,
    "C10-M4": t`$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$, म्हणून $\tan A + \tan B = \tan(A + B)(1 - \tan A\tan B)$. त्रिकोणात, $\tan(A + B) = -\tan C$.`,
    "C10-M5": t`$A + B + C = \pi$ वरून $A + B = \pi - C$ मिळते, $-C$ नाही. मग $\sin(A + B) = \sin(\pi - C) = \sin C$: धन, जसे त्रिकोणाच्या angle चे sine असायला हवे.`,
    "C10-M6": t`वजा चिन्ह ठेवा: $\cos P - \cos Q = -2\sin\frac{P + Q}{2}\sin\frac{P - Q}{2}$. $P = 0$, $Q = \pi$ ने तपासा: डावी बाजू $1 - (-1) = 2$ आहे, आणि उजवीसुद्धा.`,
  },
  solutions: {
    "C10-Q1": [
      t`$\sin 2A + \sin 2B = 2\sin(A + B)\cos(A - B) = 2\sin C\cos(A - B)$, कारण $\sin(A + B) = \sin(\pi - C) = \sin C$.`,
      t`$\sin 2C = 2\sin C\cos C$, म्हणून राशी $2\sin C\left[\cos(A - B) - \cos C\right]$ आहे.`,
      t`$-\cos C = \cos(A + B)$, म्हणून कंस $\cos(A - B) + \cos(A + B) = 2\cos A\cos B$ आहे.`,
      t`म्हणून $\sin 2A + \sin 2B - \sin 2C = 4\cos A\cos B\sin C$.`,
    ],
    "C10-Q2": [
      t`$\sin A + \sin B = 2\sin\frac{A + B}{2}\cos\frac{A - B}{2} = 2\cos\frac{C}{2}\cos\frac{A - B}{2}$, कारण $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$.`,
      t`$\sin C = 2\sin\frac{C}{2}\cos\frac{C}{2}$, म्हणून बेरीज $2\cos\frac{C}{2}\left[\cos\frac{A - B}{2} + \sin\frac{C}{2}\right]$ आहे.`,
      t`$\sin\frac{C}{2} = \cos\frac{A + B}{2}$, म्हणून कंस $\cos\frac{A - B}{2} + \cos\frac{A + B}{2} = 2\cos\frac{A}{2}\cos\frac{B}{2}$ आहे.`,
      t`म्हणून $\sin A + \sin B + \sin C = 4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$.`,
    ],
    "C10-Q3": [
      t`$\cos A + \cos B = 2\cos\frac{A + B}{2}\cos\frac{A - B}{2} = 2\sin\frac{C}{2}\cos\frac{A - B}{2}$, कारण $\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
      t`$\cos C = 1 - 2\sin^2\frac{C}{2}$, म्हणून बेरीज $1 + 2\sin\frac{C}{2}\left[\cos\frac{A - B}{2} - \sin\frac{C}{2}\right]$ आहे.`,
      t`$\sin\frac{C}{2} = \cos\frac{A + B}{2}$, आणि $\cos\frac{A - B}{2} - \cos\frac{A + B}{2} = -2\sin\frac{A}{2}\sin\left(-\frac{B}{2}\right) = 2\sin\frac{A}{2}\sin\frac{B}{2}$.`,
      t`म्हणून $\cos A + \cos B + \cos C = 1 + 4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$.`,
    ],
    "C10-Q4": [
      t`$A + B = \pi - C$, म्हणून $\tan(A + B) = -\tan C$.`,
      t`$\dfrac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$, म्हणून $\tan A + \tan B = -\tan C\,(1 - \tan A\tan B)$.`,
      t`म्हणून $\tan A + \tan B = \tan A\tan B\tan C - \tan C$: म्हणजेच $\tan A + \tan B + \tan C = \tan A\tan B\tan C$.`,
    ],
    "C10-Q5": [
      t`$\frac{A}{2} + \frac{B}{2} = \frac{\pi}{2} - \frac{C}{2}$, म्हणून $\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \cot\frac{C}{2}$.`,
      t`$\dfrac{\tan\frac{A}{2} + \tan\frac{B}{2}}{1 - \tan\frac{A}{2}\tan\frac{B}{2}} = \cot\frac{C}{2}$, म्हणून $\tan\frac{A}{2} + \tan\frac{B}{2} = \cot\frac{C}{2}\left(1 - \tan\frac{A}{2}\tan\frac{B}{2}\right)$.`,
      t`म्हणून $\tan\frac{A}{2} + \tan\frac{B}{2} = \cot\frac{C}{2} - \tan\frac{A}{2}\tan\frac{B}{2}\cot\frac{C}{2}$. $\tan\frac{C}{2}$ ने गुणल्यावर identity $\sum \tan\frac{A}{2}\tan\frac{B}{2} = 1$ मिळते.`,
    ],
  },
};
