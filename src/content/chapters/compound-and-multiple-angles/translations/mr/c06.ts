import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c06: ConceptTranslation = {
  id: "C06",
  lang: "mr",
  status: "approved",
  source: "1ff49d5fbec439",
  hook: {
    prompt: t`$\sin 2A$ म्हणजे $2\sin A$ नाही. **$\sin 3A$ हे $3\sin A$ च्या बरोबर आहे का?** $A = 90^\circ$ घेऊन पाहा.`,
    reveal: t`नाही. $\sin 270^\circ = -1$, पण $3\sin 90^\circ = 3$. खरे सूत्र $\sin 3A = 3\sin A - 4\sin^3 A$ आहे, आणि $A = 90^\circ$ ला ते $3 - 4 = -1$ देते, जसे द्यायला हवे.`,
  },
  intuition: [
    t`**Triple angle** (तिप्पट कोन) म्हणजे एखाद्या angle च्या तिप्पट, जसे $\sin 3A$ मधील $3A$.`,
    t`$3A = 2A + A$ असे लिहा, मग बेरजेचे सूत्र आणि double-angle सूत्रांनी विस्तार करा.`,
    t`मग प्रत्येक $\cos^2 A$ चे $1 - \sin^2 A$ करा, म्हणजे फक्त $\sin A$ उरेल.`,
    t`एक **cube** (घन), जसे $\sin^3 A$, म्हणजे $(\sin A)^3$, येतो: $\sin A$ चे तीन अवयव एकमेकांनी गुणले जातात.`,
    t`म्हणून $3$ कधीच सरळ बाहेर येत नाही: $\sin 3A$ म्हणजे $3\sin A$ नाही.`,
    t`कोणते पद आधी येते हे लक्षात ठेवण्यासाठी, सूत्र $A = 0$ किंवा $A = 90^\circ$ ला तपासा.`,
  ],
  formal: [
    {
      title: t`2A + A वरून sin 3A`,
      points: [
        t`$\sin 3A$ हे $\sin(2A + A)$ असे लिहा आणि बेरजेचे सूत्र वापरा.`,
        t`ते $\sin 2A\cos A + \cos 2A\sin A$ च्या बरोबर आहे.`,
        t`$\sin 2A = 2\sin A\cos A$ आणि $\cos 2A = 1 - 2\sin^2 A$ ठेवा.`,
        t`पहिले पद $2\sin A\cos^2 A$ होते, म्हणजे $2\sin A(1 - \sin^2 A)$, किंवा $2\sin A - 2\sin^3 A$.`,
        t`दुसरे पद $(1 - 2\sin^2 A)\sin A$ होते, म्हणजे $\sin A - 2\sin^3 A$.`,
        t`त्यांची बेरीज करा: $\sin 3A = 3\sin A - 4\sin^3 A$.`,
      ],
    },
    {
      title: t`cos 3A आणि tan 3A`,
      points: [
        t`$\cos 3A$ आणि $\tan 3A$ सुद्धा याच पद्धतीने, $\cos(2A + A)$ आणि $\tan(2A + A)$ वरून येतात.`,
        t`cos साठी, प्रत्येक $\sin^2 A$ चे $1 - \cos^2 A$ करा, म्हणजे फक्त $\cos A$ उरेल.`,
        t`$\cos 3A = 4\cos^3 A - 3\cos A$.`,
        t`$\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$.`,
      ],
    },
    {
      title: t`कोणते पद आधी येते?`,
      points: [
        t`sin ची सुरुवात $3\sin A$ ने होते; cos ची $4\cos^3 A$ ने.`,
        t`sin तपासण्यासाठी, $A = 90^\circ$ घ्या, जिथे $\sin A = 1$.`,
        t`मग $3A = 270^\circ$, आणि $\sin 270^\circ = -1$.`,
        t`सूत्र जुळते: $3\sin A - 4\sin^3 A = 3 - 4 = -1$.`,
        t`cos तपासण्यासाठी, $A = 0$ घ्या: $\cos 0 = 4 - 3 = 1$.`,
        t`tan मध्ये दोन्ही $3$ सोबत जातात: वर $3\tan A$, खाली $3\tan^2 A$.`,
      ],
    },
    {
      title: t`60° चे कुटुंब`,
      points: [
        t`तीन angles घ्या: $A$, $60^\circ - A$ आणि $60^\circ + A$.`,
        t`$\cos(60^\circ - A)\cos(60^\circ + A)$ बरोबर $\cos^2 60^\circ - \sin^2 A$.`,
        t`ते $\frac{1}{4} - \sin^2 A$ आहे, कारण $\cos 60^\circ = \frac{1}{2}$.`,
        t`म्हणून $\cos A$ गुणिले $\cos(60^\circ - A)\cos(60^\circ + A)$ म्हणजे $\frac{1}{4}\cos 3A$.`,
        t`त्याचप्रमाणे, $\sin A$ गुणिले $\sin(60^\circ - A)\sin(60^\circ + A)$ म्हणजे $\frac{1}{4}\sin 3A$.`,
        t`sin च्या गुणाकाराला cos च्या गुणाकाराने भागा: $\tan A$ गुणिले $\tan(60^\circ - A)\tan(60^\circ + A)$ म्हणजे $\tan 3A$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\sin 20^\circ\sin 40^\circ\sin 80^\circ$ काढा.`,
    steps: [
      t`$40^\circ = 60^\circ - 20^\circ$ आणि $80^\circ = 60^\circ + 20^\circ$, म्हणून हे $A = 20^\circ$ घेऊन $\sin A$ गुणिले $\sin(60^\circ - A)\sin(60^\circ + A)$ आहे.`,
      t`$\sin(60^\circ - A)\sin(60^\circ + A)$ $= \sin^2 60^\circ - \sin^2 A$ $= \frac{3}{4} - \sin^2 A$.`,
      t`$\sin A$ ने गुणा: $\frac{3}{4}\sin A - \sin^3 A$ $= \frac{1}{4}(3\sin A - 4\sin^3 A)$ $= \frac{1}{4}\sin 3A$.`,
      t`$A = 20^\circ$ घेऊन: $\frac{1}{4}\sin 60^\circ$ $= \frac{1}{4}\cdot\frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{8}$.`,
    ],
    answer: t`$\sin 20^\circ\sin 40^\circ\sin 80^\circ$ $= \frac{\sqrt{3}}{8}$`,
  },
  remediation: {
    "C06-M1": t`3 बाहेर काढता येत नाही: $\sin 3A = 3\sin A - 4\sin^3 A$ आणि $\cos 3A = 4\cos^3 A - 3\cos A$. $A = 90^\circ$ ला $\sin 270^\circ = -1$, $3$ नाही.`,
    "C06-M2": t`sin ची सुरुवात $3\sin A$ ने, cos ची $4\cos^3 A$ ने: $\sin 3A = 3\sin A - 4\sin^3 A$, $\cos 3A = 4\cos^3 A - 3\cos A$. $A = 0$ ला तपासा: $\cos 0 = 4 - 3 = 1$.`,
    "C06-M3": t`sin आणि cos मध्ये घनासोबत 4 असतो: $\sin 3A = 3\sin A - 4\sin^3 A$, $\cos 3A = 4\cos^3 A - 3\cos A$. फक्त tan च्या अंशात, $3\tan A - \tan^3 A$, घन एकटा असतो.`,
    "C06-M4": t`$\tan 3A$ चा छेद $1 - 3\tan^2 A$ आहे: $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$. वरच्या 3 सोबत खालीही 3 आहे.`,
    "C06-M5": t`गुणाकार $\cos^3 x - \frac{3}{4}\cos x$ होतो, जो $4\cos^3 x - 3\cos x$ चा चतुर्थांश आहे, म्हणून तो $\frac{1}{4}\cos 3x$ आहे. $x = 0$ ला तो $1 \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$ आहे, $1$ नाही.`,
    "C06-M6": t`गुणाकाराच्या चारपट म्हणजे $\cos 3x$, म्हणून गुणाकार स्वतः $\frac{1}{4}\cos 3x$ आहे: 4 ने भागा, गुणू नका.`,
  },
  solutions: {
    "C06-Q1": [
      t`$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$, म्हणून $\cos^3\theta - \cos 3\theta = 3\cos\theta - 3\cos^3\theta = 3\cos\theta(1 - \cos^2\theta)$.`,
      t`$\sin 3\theta = 3\sin\theta - 4\sin^3\theta$, म्हणून $\sin^3\theta + \sin 3\theta = 3\sin\theta - 3\sin^3\theta = 3\sin\theta(1 - \sin^2\theta)$.`,
      t`भागा: $3(1 - \cos^2\theta) + 3(1 - \sin^2\theta) = 3\sin^2\theta + 3\cos^2\theta = 3$.`,
    ],
    "C06-Q2": [
      t`$\sin 3A = 3\sin A - 4\sin^3 A$.`,
      t`$= 3 \cdot \frac{1}{4} - 4 \cdot \frac{1}{64} = \frac{3}{4} - \frac{1}{16} = \frac{11}{16}$.`,
    ],
    "C06-Q3": [
      t`$\cos(60^\circ - x)\cos(60^\circ + x) = \cos^2 60^\circ - \sin^2 x = \frac{1}{4} - \sin^2 x$.`,
      t`$\cos x$ ने गुणा: $\frac{1}{4}\cos x - (1 - \cos^2 x)\cos x = \cos^3 x - \frac{3}{4}\cos x$.`,
      t`$= \frac{1}{4}(4\cos^3 x - 3\cos x) = \frac{1}{4}\cos 3x$.`,
    ],
    "C06-Q4": [
      t`$\tan A = \frac{1}{2}$ घेऊन $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$.`,
      t`अंश: $\frac{3}{2} - \frac{1}{8} = \frac{11}{8}$. छेद: $1 - \frac{3}{4} = \frac{1}{4}$.`,
      t`म्हणून $\tan 3A = \frac{11}{8} \div \frac{1}{4} = \frac{11}{2}$.`,
    ],
    "C06-Q5": [
      t`$\sin 3x + \sin x = 4\sin x - 4\sin^3 x$ आणि $\cos 3x - \cos x = 4\cos^3 x - 4\cos x$.`,
      t`म्हणून राशी $4\sin^2 x - 4\sin^4 x + 4\cos^4 x - 4\cos^2 x$ आहे.`,
      t`$4(\cos^4 x - \sin^4 x) = 4(\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x) = 4(\cos^2 x - \sin^2 x)$, जे $-4(\cos^2 x - \sin^2 x)$ ला रद्द करते. राशी $0$ आहे.`,
    ],
    "C06-Q6": [
      t`$\cos 3A = 4\cos^3 A - 3\cos A$.`,
      t`$= 4 \cdot \frac{1}{27} - 3 \cdot \frac{1}{3} = \frac{4}{27} - 1 = -\frac{23}{27}$.`,
    ],
  },
};
