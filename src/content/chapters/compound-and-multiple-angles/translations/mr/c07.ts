import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "mr",
  status: "approved",
  source: "1ce85b85a7ef97",
  hook: {
    prompt: t`$\sin 30^\circ$ आणि $\sin 45^\circ$ हे set-square च्या त्रिकोणांतून येतात. कोणत्याही set square मध्ये $18^\circ$ चा angle नसतो, पण $5 \times 18^\circ = 90^\circ$. **त्यामुळे $\sin 18^\circ$ ची नेमकी surd किंमत का मिळते?**`,
    reveal: t`$5\theta = 90^\circ$ चे $2\theta + 3\theta$ असे विभाजन करा: मग $2\theta$ आणि $3\theta$ हे complements आहेत, म्हणून $\sin 2\theta = \cos 3\theta$. दोघांचा double आणि triple angle सूत्रांनी विस्तार करा आणि $\cos\theta$ ने भागा: उरते $\sin\theta$ मधील एक वर्गसमीकरण, $4\sin^2\theta + 2\sin\theta - 1 = 0$. वर्गसमीकरणाची मुळे surds असतात, म्हणून $\sin 18^\circ$ सुद्धा एक surd आहे.`,
  },
  intuition: [
    t`बहुतेक angles चे नेमके सुबक sine नसते, पण $18^\circ$ चे असते: पाच $18^\circ$ angles मिळून एक काटकोन होतो.`,
    t`$\theta = 18^\circ$ घ्या: त्यांपैकी दोन मिळून $2\theta = 36^\circ$ होतात.`,
    t`उरलेले तीन $3\theta = 54^\circ$ होतात, म्हणून $2\theta + 3\theta = 90^\circ$.`,
    t`ज्या angles ची बेरीज $90^\circ$ होते ते **complements** (कोटिकोन) आहेत, म्हणून $\sin 2\theta = \cos 3\theta$.`,
    t`Double आणि triple angle सूत्रे याचे $\sin\theta$ मधील **quadratic** (वर्गसमीकरण) मध्ये रूपांतर करतात, ज्यात $\sin^2\theta$ आहे.`,
    t`$\sin 18^\circ$ वरून $\cos 2\theta$ च्या सूत्राने $\cos 36^\circ$ मिळते, आणि मग कुटुंबातील उरलेल्या किमती.`,
  ],
  formal: [
    {
      title: t`sin 18° साठी समीकरण`,
      points: [
        t`$\theta = 18^\circ$ घ्या: मग $5\theta = 90^\circ$, म्हणून $2\theta = 90^\circ - 3\theta$.`,
        t`म्हणून $\sin 2\theta = \sin(90^\circ - 3\theta)$, म्हणजे $\cos 3\theta$.`,
        t`Double angle सूत्र: $\sin 2\theta = 2\sin\theta\cos\theta$.`,
        t`Triple angle सूत्र: $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$.`,
        t`म्हणून $2\sin\theta\cos\theta$ बरोबर $4\cos^3\theta - 3\cos\theta$.`,
      ],
    },
    {
      title: t`sin θ मधील वर्गसमीकरण`,
      points: [
        t`$\cos 18^\circ$ हे $0$ नाही, म्हणून दोन्ही बाजूंना $\cos\theta$ ने भागा.`,
        t`उरते $2\sin\theta = 4\cos^2\theta - 3$.`,
        t`$\cos^2\theta = 1 - \sin^2\theta$ ठेवा: उजवी बाजू $1 - 4\sin^2\theta$ होते.`,
        t`म्हणून $2\sin\theta = 1 - 4\sin^2\theta$.`,
        t`मांडणी बदलल्यावर, $4\sin^2\theta + 2\sin\theta - 1 = 0$: $\sin\theta$ मधील एक वर्गसमीकरण.`,
      ],
    },
    {
      title: t`वर्गसमीकरण सोडवणे`,
      points: [
        t`$ax^2 + bx + c = 0$ ची मुळे $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ आहेत.`,
        t`इथे $a = 4$, $b = 2$ आणि $c = -1$, म्हणून खाली $2a = 8$ आहे.`,
        t`म्हणून $\sin\theta = \frac{-2 \pm \sqrt{20}}{8}$, आणि $\sqrt{20} = 2\sqrt{5}$.`,
        t`म्हणजे $\sin\theta = \frac{-1 \pm \sqrt{5}}{4}$.`,
        t`$18^\circ$ हा **acute** (लघुकोन) आहे, $0^\circ$ आणि $90^\circ$ यांच्या दरम्यान, म्हणून $\sin 18^\circ$ धन आहे.`,
        t`धन मूळ ठेवा: $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$.`,
      ],
    },
    {
      title: t`दोन किमती`,
      points: [
        t`$\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$, सुमारे $0.31$.`,
        t`$\cos 2\theta$ चे सूत्र $\cos 36^\circ = 1 - 2\sin^2 18^\circ$ देते.`,
        t`त्यावरून $\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$ येते, सुमारे $0.81$.`,
        t`मापाची तपासणी: $\sin 18^\circ$ हे $\sin 30^\circ = \frac{1}{2}$ च्या खाली आहे.`,
        t`आणि $\cos 36^\circ$ हे $\cos 60^\circ = \frac{1}{2}$ च्या वर आहे.`,
        t`म्हणून $\sin 18^\circ$ मध्ये $-1$ आहे आणि $\cos 36^\circ$ मध्ये $+1$: त्यांची अदलाबदल करू नका.`,
      ],
    },
    {
      title: t`कुटुंबातील उरलेल्या किमती`,
      points: [
        t`$\cos 72^\circ = \sin 18^\circ$, कारण $72^\circ$ आणि $18^\circ$ complements आहेत.`,
        t`$\sin 54^\circ = \cos 36^\circ$, कारण $54^\circ$ आणि $36^\circ$ complements आहेत.`,
        t`Identity $\sin^2\theta + \cos^2\theta = 1$ वरून $\cos 18^\circ$ आणि $\sin 36^\circ$ मिळतात.`,
        t`$\cos 18^\circ = \sqrt{1 - \sin^2 18^\circ}$, धन मूळ, कारण $18^\circ$ लघुकोन आहे.`,
        t`$\sin 36^\circ = \sqrt{1 - \cos^2 36^\circ}$, त्याच कारणाने धन.`,
        t`आधी $1 - \sin^2 18^\circ$ एक अपूर्णांक म्हणून काढा, मग संपूर्णाचे मूळ घ्या.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\sin 54^\circ \cdot \cos 72^\circ$ काढा.`,
    steps: [
      t`$54^\circ = 90^\circ - 36^\circ$, म्हणून $\sin 54^\circ = \cos 36^\circ$, म्हणजे $\frac{\sqrt{5} + 1}{4}$.`,
      t`$72^\circ = 90^\circ - 18^\circ$, म्हणून $\cos 72^\circ = \sin 18^\circ$, म्हणजे $\frac{\sqrt{5} - 1}{4}$.`,
      t`गुणा: $\frac{(\sqrt{5} + 1)(\sqrt{5} - 1)}{16}$, म्हणजे $\frac{5 - 1}{16}$.`,
    ],
    answer: t`$\sin 54^\circ \cdot \cos 72^\circ$ बरोबर $\frac{1}{4}$.`,
  },
  remediation: {
    "C07-M1": t`माप तपासा: $\sin 18^\circ$ हे $\sin 30^\circ = \frac{1}{2}$ पेक्षा कमी आहे, म्हणून ते लहान, $\frac{\sqrt{5} - 1}{4} \approx 0.31$; $\cos 36^\circ$ हे $\cos 60^\circ = \frac{1}{2}$ पेक्षा जास्त आहे, म्हणून ते $\frac{\sqrt{5} + 1}{4} \approx 0.81$ आहे.`,
    "C07-M2": t`$18^\circ$ लघुकोन आहे, म्हणून $\sin 18^\circ > 0$: मुळे $\frac{-1 \pm \sqrt{5}}{4}$ पैकी $\frac{\sqrt{5} - 1}{4}$ ठेवा आणि ऋण मूळ नाकारा. मग $\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$, धन, जसे लघुकोनाचे cosine असायला हवे.`,
    "C07-M3": t`$\sin 2\theta = 2\sin\theta\cos\theta$: अवयव $\cos\theta$ राहतो. म्हणून $\sin 36^\circ = 2\sin 18^\circ\cos 18^\circ$; किंवा $\sin 36^\circ = \sqrt{1 - \cos^2 36^\circ}$ वापरा.`,
    "C07-M4": t`$\cos 2\theta = 1 - 2\sin^2\theta = 2\cos^2\theta - 1$. ज्यात $\sin\theta$ आहे त्यात $1$ आधी येतो: $\cos 36^\circ = 1 - 2\sin^2 18^\circ$.`,
    "C07-M5": t`$ax^2 + bx + c = 0$ ची मुळे $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ आहेत. $4\sin^2\theta + 2\sin\theta - 1 = 0$ साठी छेद $2 \times 4 = 8$ आहे: $\frac{-2 + 2\sqrt{5}}{8} = \frac{\sqrt{5} - 1}{4}$.`,
    "C07-M6": t`$\sqrt{a^2 - b^2}$ म्हणजे $a - b$ नाही. आधी $1 - \sin^2 18^\circ$ एक अपूर्णांक म्हणून काढा, मग संपूर्णाचे वर्गमूळ घ्या: $\cos 18^\circ = \sqrt{1 - \sin^2 18^\circ}$.`,
  },
  solutions: {
    "C07-Q1": [
      t`$\frac{\pi}{10} = 18^\circ$. $\theta = 18^\circ$ घेऊन, $2\theta = 90^\circ - 3\theta$, म्हणून $\sin 2\theta = \cos 3\theta$: $2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$.`,
      t`$\cos\theta$ ने भागा आणि $\cos^2\theta = 1 - \sin^2\theta$ ठेवा: $2\sin\theta = 1 - 4\sin^2\theta$, म्हणून $4\sin^2\theta + 2\sin\theta - 1 = 0$.`,
      t`$\sin\theta = \frac{-2 \pm \sqrt{4 + 16}}{8} = \frac{-1 \pm \sqrt{5}}{4}$. $18^\circ$ लघुकोन आहे, म्हणून धन मूळ ठेवा: $\sin\frac{\pi}{10} = \frac{\sqrt{5} - 1}{4}$.`,
    ],
    "C07-Q2": [
      t`$\cos 36^\circ = \cos 2(18^\circ) = 1 - 2\sin^2 18^\circ$, जिथे $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$.`,
      t`$\sin^2 18^\circ = \frac{5 - 2\sqrt{5} + 1}{16} = \frac{6 - 2\sqrt{5}}{16}$.`,
      t`म्हणून $\cos 36^\circ = 1 - \frac{6 - 2\sqrt{5}}{8} = \frac{2 + 2\sqrt{5}}{8} = \frac{\sqrt{5} + 1}{4}$, सुमारे $0.81$.`,
    ],
    "C07-Q3": [
      t`$\sin^2 36^\circ = 1 - \cos^2 36^\circ = 1 - \frac{(\sqrt{5} + 1)^2}{16}$.`,
      t`$(\sqrt{5} + 1)^2 = 6 + 2\sqrt{5}$, म्हणून $\sin^2 36^\circ = \frac{16 - 6 - 2\sqrt{5}}{16} = \frac{10 - 2\sqrt{5}}{16}$.`,
      t`$\sin 36^\circ > 0$, म्हणून $\sin 36^\circ = \frac{\sqrt{10 - 2\sqrt{5}}}{4}$.`,
    ],
    "C07-Q4": [
      t`$\cos^2 18^\circ = 1 - \sin^2 18^\circ = 1 - \frac{(\sqrt{5} - 1)^2}{16}$.`,
      t`$(\sqrt{5} - 1)^2 = 6 - 2\sqrt{5}$, म्हणून $\cos^2 18^\circ = \frac{16 - 6 + 2\sqrt{5}}{16} = \frac{10 + 2\sqrt{5}}{16}$.`,
      t`$\cos 18^\circ > 0$, म्हणून $\cos 18^\circ = \frac{\sqrt{10 + 2\sqrt{5}}}{4}$.`,
    ],
    "C07-Q5": [
      t`$\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$ आणि $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$.`,
      t`म्हणून $\cos 36^\circ - \sin 18^\circ = \frac{\sqrt{5} + 1 - \sqrt{5} + 1}{4} = \frac{2}{4} = \frac{1}{2}$.`,
    ],
    "C07-Q6": [
      t`$72^\circ = 90^\circ - 18^\circ$, म्हणून $\sin^2 72^\circ = \cos^2 18^\circ = 1 - \sin^2 18^\circ = 1 - \frac{6 - 2\sqrt{5}}{16} = \frac{10 + 2\sqrt{5}}{16}$.`,
      t`$\sin^2 60^\circ = \frac{3}{4} = \frac{12}{16}$.`,
      t`$\sin^2 72^\circ - \sin^2 60^\circ = \frac{10 + 2\sqrt{5} - 12}{16} = \frac{2\sqrt{5} - 2}{16} = \frac{\sqrt{5} - 1}{8}$.`,
    ],
  },
};
