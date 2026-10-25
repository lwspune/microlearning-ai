import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "mr",
  status: "approved",
  source: "0b12a6c68e0d9e",
  hook: {
    prompt: t`$\cos 60^\circ = \frac{1}{2}$. $\cos 30^\circ$ हे त्याचे अर्धे, $\frac{1}{4}$, आहे का? **फक्त $\cos 60^\circ$ वरून $\cos 30^\circ$ कसे काढायचे?**`,
    reveal: t`अर्धे करून नाही: angle अर्धा झाला म्हणून गुणोत्तर अर्धे होत नाही. $\cos 2A = 2\cos^2 A - 1$ हे $2A = 60^\circ$ घेऊन उलटे वाचा: $\cos^2 30^\circ = \frac{1 + \cos 60^\circ}{2} = \frac{3}{4}$. म्हणून $\cos 30^\circ = \frac{\sqrt{3}}{2}$, धन कारण $30^\circ$ quadrant I मध्ये आहे.`,
  },
  intuition: [
    t`Angle $x$ चा **half angle** (अर्धकोन) म्हणजे $\frac{x}{2}$: $x$ हा त्याच्या दुप्पट आहे.`,
    t`**Half-angle formula** (अर्धकोन सूत्र) $x$ च्या एका गुणोत्तरावरून $\frac{x}{2}$ चे गुणोत्तर देते.`,
    t`ते म्हणजे उलटे वाचलेले double-angle सूत्र.`,
    t`$\cos x = 1 - 2\sin^2\frac{x}{2}$ मध्ये $\sin^2\frac{x}{2}$ साठी सोडवा: ते फक्त $\cos x$ वरून मिळते.`,
    t`सूत्र वर्ग देते, म्हणून त्याचे मूळ $\pm$ सह येते, आणि सूत्र निवड करू शकत नाही.`,
    t`Angle $\frac{x}{2}$ निवड करतो: त्याचा quadrant शोधण्यासाठी $x$ ज्या मध्यांतरात आहे ते अर्धे करा.`,
  ],
  formal: [
    {
      title: t`Half angles चे sin आणि cos`,
      points: [
        t`$\cos 2A$ च्या दोन रूपांत $A = \frac{x}{2}$ ठेवा, म्हणजे $2A = x$.`,
        t`$\cos x = 1 - 2\sin^2\frac{x}{2}$, म्हणून $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$.`,
        t`$\cos x = 2\cos^2\frac{x}{2} - 1$, म्हणून $\cos^2\frac{x}{2} = \frac{1 + \cos x}{2}$.`,
        t`वजा चिन्ह $\sin$ सोबत जाते.`,
        t`$x = 0$ ला तपासा: $\sin 0 = 0$, आणि $1 - \cos 0 = 0$.`,
      ],
    },
    {
      title: t`दुसऱ्या बाजूने वाचा`,
      points: [
        t`दुसऱ्या बाजूने वाचल्यास, सूत्रे $x$ मधील राशींचे $\frac{x}{2}$ मधील राशींत रूपांतर करतात.`,
        t`$1 - \cos x = 2\sin^2\frac{x}{2}$.`,
        t`$1 + \cos x = 2\cos^2\frac{x}{2}$.`,
        t`आणि $\sin 2A = 2\sin A\cos A$ वरून: $\sin x = 2\sin\frac{x}{2}\cos\frac{x}{2}$.`,
        t`सोपे करताना ही सूत्रे अशीच वापरा.`,
      ],
    },
    {
      title: t`Half angle चा tan`,
      points: [
        t`$\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$.`,
        t`का: त्याचा अंश $2\sin\frac{x}{2}\cos\frac{x}{2}$ आहे, आणि छेद $2\cos^2\frac{x}{2}$.`,
        t`$2\cos\frac{x}{2}$ रद्द करा: उरते $\frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = \tan\frac{x}{2}$.`,
        t`इथे मूळ नाही, म्हणून चिन्ह आपोआप येते.`,
        t`त्याचा वर्ग, $\tan^2\frac{x}{2}$, म्हणजे $\frac{1 - \cos x}{1 + \cos x}$.`,
      ],
    },
    {
      title: t`चिन्ह निवडणे`,
      points: [
        t`आधी दोन्ही चिन्हांसह वर्गमूळ घ्या: $\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}$.`,
        t`समजा $\pi < x < \frac{3\pi}{2}$: $x$ ची arm quadrant III मध्ये आहे.`,
        t`मध्यांतराची दोन्ही टोके अर्धी करा: $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$.`,
        t`म्हणून $\frac{x}{2}$ quadrant II मध्ये आहे, जिथे $\sin\frac{x}{2} > 0$ आणि $\cos\frac{x}{2} < 0$.`,
        t`चिन्ह $\frac{x}{2}$ चे आहे, $x$ चे नाही: quadrant III मुळे $\sin$ ऋण झाले असते.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\cos x = \frac{1}{9}$ आणि $\frac{3\pi}{2} < x < 2\pi$, तर $\sin\frac{x}{2}$, $\cos\frac{x}{2}$ आणि $\tan\frac{x}{2}$ काढा.`,
    steps: [
      t`मध्यांतर अर्धे करा: $\frac{3\pi}{4} < \frac{x}{2} < \pi$. म्हणून $\frac{x}{2}$ quadrant II मध्ये आहे: $\sin\frac{x}{2} > 0$, $\cos\frac{x}{2} < 0$.`,
      t`$\sin^2\frac{x}{2} = \frac{1 - \frac{1}{9}}{2}$ $= \frac{4}{9}$, म्हणून $\sin\frac{x}{2} = \frac{2}{3}$.`,
      t`$\cos^2\frac{x}{2} = \frac{1 + \frac{1}{9}}{2}$ $= \frac{5}{9}$, म्हणून $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$.`,
      t`$\tan\frac{x}{2} = \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}}$ $= \frac{2}{3} \div \left(-\frac{\sqrt{5}}{3}\right)$ $= -\frac{2}{\sqrt{5}}$. लक्षात घ्या की $x$ स्वतः quadrant IV मध्ये आहे, जिथे $\sin$ ऋण आहे: त्याचे चिन्ह $\sin\frac{x}{2}$ साठी चुकीचे ठरले असते.`,
    ],
    answer: t`$\sin\frac{x}{2} = \frac{2}{3}$, $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$, $\tan\frac{x}{2} = -\frac{2}{\sqrt{5}}$.`,
  },
  remediation: {
    "C05-M1": t`वजा चिन्ह $\sin$ सोबत जाते: $\cos x = 1 - 2\sin^2\frac{x}{2}$ वरून $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$. $x = 0$ ला तपासा: $\sin 0 = 0$, आणि $1 - \cos 0 = 0$.`,
    "C05-M2": t`सूत्र वर्ग देते, $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$. शेवटी वर्गमूळ घ्या: $\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}$.`,
    "C05-M3": t`$\frac{x}{2}$ कुठे आहे ते शोधण्यासाठी $x$ ची व्याप्ती अर्धी करा, आणि त्या quadrant चे चिन्ह घ्या. $\pi < x < \frac{3\pi}{2}$ साठी, $\frac{x}{2}$ quadrant II मध्ये आहे, quadrant III मध्ये नाही.`,
    "C05-M4": t`Angle अर्धा झाला म्हणून गुणोत्तर अर्धे होत नाही: $\sin 30^\circ = \frac{1}{2}$, $\frac{1}{2}\sin 60^\circ$ नाही. $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$, किंवा $\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$ वापरा.`,
    "C05-M5": t`$1 - \cos x = 2\sin^2\frac{x}{2}$, म्हणून 2 ने भागा: $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$. $x = \pi$ ला तपासा: $\sin^2\frac{\pi}{2} = 1$, आणि $\frac{1 - \cos\pi}{2} = 1$.`,
  },
  solutions: {
    "C05-Q1": [
      t`$\frac{\pi}{8}$ हा $\frac{\pi}{4}$ चा अर्धा आहे आणि quadrant I मध्ये आहे, म्हणून $\sin\frac{\pi}{8} > 0$.`,
      t`$\sin^2\frac{\pi}{8} = \frac{1 - \cos\frac{\pi}{4}}{2} = \frac{1 - \frac{1}{\sqrt{2}}}{2} = \frac{2 - \sqrt{2}}{4}$.`,
      t`धन मूळ घ्या: $\sin\frac{\pi}{8} = \frac{\sqrt{2 - \sqrt{2}}}{2}$.`,
    ],
    "C05-Q2": [
      t`$x = \frac{\pi}{4}$ घेऊन: $\tan\frac{\pi}{8} = \frac{\sin\frac{\pi}{4}}{1 + \cos\frac{\pi}{4}} = \frac{\frac{1}{\sqrt{2}}}{1 + \frac{1}{\sqrt{2}}} = \frac{1}{\sqrt{2} + 1}$.`,
      t`परिमेयीकरण करा: $\frac{1}{\sqrt{2} + 1} \cdot \frac{\sqrt{2} - 1}{\sqrt{2} - 1} = \sqrt{2} - 1$.`,
      t`ते धन आहे, जसे असायला हवे: $\frac{\pi}{8}$ quadrant I मध्ये आहे. म्हणून $\tan\frac{\pi}{8} = \sqrt{2} - 1$.`,
    ],
    "C05-Q3": [
      t`$\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$. Quadrant II मध्ये $\cos x < 0$, म्हणून $\cos x = -\frac{3}{5}$.`,
      t`व्याप्ती अर्धी करा: $\frac{\pi}{4} < \frac{x}{2} < \frac{\pi}{2}$, quadrant I, म्हणून $\cos\frac{x}{2} > 0$.`,
      t`$\cos^2\frac{x}{2} = \frac{1 + \left(-\frac{3}{5}\right)}{2} = \frac{1}{5}$, म्हणून $\cos\frac{x}{2} = \frac{1}{\sqrt{5}}$.`,
    ],
    "C05-Q4": [
      t`$\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$. Quadrant III मध्ये $\cos x < 0$ आणि $\sin x < 0$, म्हणून $\cos x = -\frac{3}{5}$ आणि $\sin x = -\frac{4}{5}$.`,
      t`व्याप्ती अर्धी करा: $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$, quadrant II, म्हणून $\tan\frac{x}{2} < 0$.`,
      t`$\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x} = \frac{-\frac{4}{5}}{\frac{2}{5}} = -2$, अपेक्षेप्रमाणे ऋण.`,
    ],
    "C05-Q5": [
      t`दोन्ही $\sin\frac{\theta}{2}$ आणि $\cos\frac{\theta}{2}$ मध्ये लिहा: $\tan\frac{\theta}{2} + \cot\frac{\theta}{2} = \frac{\sin^2\frac{\theta}{2} + \cos^2\frac{\theta}{2}}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{1}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}}$.`,
      t`$\cot\frac{\theta}{2} - \tan\frac{\theta}{2} = \frac{\cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2}}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{\cos\theta}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}}$.`,
      t`भागा: छेद रद्द होतात, आणि उरते $\frac{1}{\cos\theta} = \sec\theta$.`,
    ],
    "C05-Q6": [
      t`$\sin x\tan\frac{x}{2} = 2\sin\frac{x}{2}\cos\frac{x}{2} \cdot \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = 2\sin^2\frac{x}{2}$.`,
      t`$2\sin^2\frac{x}{2} = 1 - \cos x$.`,
      t`म्हणून राशी $1 - \cos x + 2\cos x = 1 + \cos x$ आहे.`,
    ],
  },
};
