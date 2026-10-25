import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "mr",
  status: "approved",
  source: "0ddd5b8c4d35d7",
  hook: {
    prompt: t`Calculator शिवाय: $\cos 1^\circ \cdot \cos 2^\circ \cdot \cos 3^\circ \cdots \cos 179^\circ = ?$`,
    reveal: t`$0$. अवयवांपैकी एक $\cos 90^\circ$ आहे. $90^\circ$ ला terminal arm वरचा बिंदू $(0, 1)$ आहे, म्हणून $\cos 90^\circ = \frac{x}{r} = 0$. एक शून्य अवयव संपूर्ण गुणाकार $0$ करतो, उरलेले $178$ अवयव काहीही असोत.`,
  },
  intuition: [
    t`प्रत्येक किंमत terminal arm वरच्या एका बिंदू $P(x, y)$ मधून येते, जो $O$ पासून $r$ अंतरावर आहे.`,
    t`मग $\sin\theta = \frac{y}{r}$, $\cos\theta = \frac{x}{r}$ आणि $\tan\theta = \frac{y}{x}$ असतात.`,
    t`**Standard angles** (मानक कोन) म्हणजे $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$, $90^\circ$ आणि quadrantal angles $180^\circ$, $270^\circ$, $360^\circ$.`,
    t`$30^\circ$, $45^\circ$ आणि $60^\circ$ ला, अर्धा चौरस किंवा अर्धा समभुज त्रिकोण नेमक्या बाजू देतो.`,
    t`म्हणून त्यांच्या किमती नेमक्या **surds** (करणी) आहेत: $\sqrt{2}$ आणि $\sqrt{3}$ सारखी मुळे, जी मुळाच्याच रूपात ठेवली जातात.`,
    t`अक्षांवर $r = 1$ घ्या आणि बिंदूवरून थेट $\cos\theta = x$ आणि $\sin\theta = y$ वाचा.`,
  ],
  formal: [
    {
      title: t`45° वरील किमती`,
      points: [
        t`Arm initial arm पासून $45^\circ$ फिरवा, आणि तिच्यावर बिंदू $P(1, 1)$ खुणावा.`,
        t`$P$ पासून लंब टाका: हा त्रिकोण $1$ बाजूच्या चौरसाचा अर्धा भाग आहे, जो त्याच्या कर्णावर कापला आहे.`,
        t`पायथागोरसने, कर्ण $r = OP = \sqrt{1^2 + 1^2} = \sqrt{2}$ आहे.`,
        t`म्हणून $\sin 45^\circ = \frac{y}{r} = \frac{1}{\sqrt{2}}$ आणि $\cos 45^\circ = \frac{x}{r} = \frac{1}{\sqrt{2}}$.`,
        t`आणि $\tan 45^\circ = \frac{y}{x} = \frac{1}{1} = 1$.`,
      ],
    },
    {
      title: t`30° वरील किमती`,
      points: [
        t`**Equilateral triangle** (समभुज त्रिकोण) च्या तिन्ही बाजू समान आणि तिन्ही angles $60^\circ$ असतात; $2$ बाजूंचा एक घ्या.`,
        t`तो $x$-अक्षालगत अर्धा कापा: प्रत्येक अर्ध्याची लहान बाजू $1$ आणि सर्वात लांब बाजू $2$ आहे.`,
        t`पायथागोरसने, कापलेली रेषा $\sqrt{2^2 - 1^2} = \sqrt{3}$ लांब आहे.`,
        t`हा छेद $O$ वरच्या $60^\circ$ angle चे दोन समान भाग करतो, म्हणून वरच्या अर्ध्यात तिथे $30^\circ$ आहे.`,
        t`Arm $30^\circ$ फिरवा: ती वरच्या कोपऱ्यावर, $P(\sqrt{3}, 1)$ वर, थांबते, जिथे $r = 2$.`,
        t`म्हणून $\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$ आणि $\tan 30^\circ = \frac{1}{\sqrt{3}}$.`,
      ],
    },
    {
      title: t`60° वरील किमती`,
      points: [
        t`तोच अर्धा त्रिकोण त्याची लहान बाजू $1$ $x$-अक्षावर ठेवून आडवा ठेवा.`,
        t`आता $O$ वरचा त्याचा angle $60^\circ$ चा आहे.`,
        t`Arm $60^\circ$ फिरवा: ती वरच्या कोपऱ्यावर, $Q(1, \sqrt{3})$ वर, थांबते, जिथे $r = 2$.`,
        t`म्हणून $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$ आणि $\tan 60^\circ = \sqrt{3}$.`,
        t`किमती $30^\circ$ शी अदलाबदल होतात: $\sin 60^\circ = \cos 30^\circ$ आणि $\cos 60^\circ = \sin 30^\circ$.`,
        t`Sine angle सोबत वाढते, म्हणून $\sin 30^\circ = \frac{1}{2}$ लहान आहे आणि $\sin 60^\circ = \frac{\sqrt{3}}{2}$ मोठे.`,
      ],
    },
    {
      title: t`अक्षांवरील किमती`,
      points: [
        t`Terminal arm एखाद्या अक्षावर असेल तेव्हा $r = 1$ वरचा बिंदू घ्या: मग $\cos\theta = x$ आणि $\sin\theta = y$.`,
        t`$0^\circ$ आणि $360^\circ$ ला बिंदू $(1, 0)$ आहे, म्हणून $\cos 0^\circ = 1$ आणि $\sin 0^\circ = 0$.`,
        t`$90^\circ$ ला तो $(0, 1)$ आहे, म्हणून $\cos 90^\circ = 0$ आणि $\sin 90^\circ = 1$.`,
        t`$180^\circ = \pi$ ला तो $(-1, 0)$ आहे, म्हणून $\cos 180^\circ = -1$ आणि $\sin 180^\circ = 0$.`,
        t`$270^\circ = \frac{3\pi}{2}$ ला तो $(0, -1)$ आहे, म्हणून $\cos 270^\circ = 0$ आणि $\sin 270^\circ = -1$.`,
        t`अक्षाच्या ऋण अर्ध्यावरचा बिंदू ऋण किंमत देतो.`,
      ],
    },
    {
      title: t`किमतींचे कोष्टक`,
      points: [
        t`$0^\circ$ ते $90^\circ$ पर्यंत, standard angles म्हणजे $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$ आणि $90^\circ$.`,
        t`Radians मध्ये, ते $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$ आणि $\frac{\pi}{2}$ आहेत.`,
        t`$r = 1$ घेऊन, $\sin\theta$ म्हणजे उंची $y$, जी $0$ पासून $1$ पर्यंत वाढते: $0$, $\frac{1}{2}$, $\frac{1}{\sqrt{2}}$, $\frac{\sqrt{3}}{2}$, $1$.`,
        t`आणि $\cos\theta$ म्हणजे रुंदी $x$, जी $1$ पासून $0$ पर्यंत कमी होते: $1$, $\frac{\sqrt{3}}{2}$, $\frac{1}{\sqrt{2}}$, $\frac{1}{2}$, $0$.`,
        t`$\tan\theta$ च्या किमती $0$, $\frac{1}{\sqrt{3}}$, $1$, $\sqrt{3}$ आहेत, आणि $90^\circ$ ला, जिथे $x = 0$, ते व्याख्यित नाही.`,
      ],
    },
    {
      title: t`Reciprocal functions (व्यस्त फलने)`,
      points: [
        t`संख्येचा **reciprocal** (व्यस्त) म्हणजे $1$ ला त्या संख्येने भागणे: $2$ चा reciprocal $\frac{1}{2}$ आहे.`,
        t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, म्हणून $\operatorname{cosec} 30^\circ = \frac{1}{1/2} = 2$.`,
        t`$\sec\theta = \frac{1}{\cos\theta}$ आणि $\cot\theta = \frac{1}{\tan\theta}$ असतात.`,
        t`अपूर्णांक तेव्हा व्याख्यित नसतो जेव्हा त्याचा **denominator** (छेद), रेषेखालची संख्या, $0$ असतो.`,
        t`म्हणून $\tan 90^\circ$ आणि $\sec 90^\circ$ व्याख्यित नाहीत, कारण $\cos 90^\circ = 0$.`,
        t`आणि $\cot 0^\circ$ आणि $\operatorname{cosec} 0^\circ$ व्याख्यित नाहीत, कारण $\sin 0^\circ = 0$.`,
      ],
    },
    {
      title: t`राशीची किंमत काढणे`,
      points: [
        t`राशी **evaluate** करणे (किंमत काढणे) म्हणजे तिची किंमत शोधणे.`,
        t`आधी प्रत्येक angle शोधा: $\sin 2\theta$ म्हणजे angle $2\theta$ चे sine.`,
        t`$\theta = 30^\circ$ साठी, ते $\sin 60^\circ = \frac{\sqrt{3}}{2}$ आहे, $2\sin 30^\circ = 1$ नाही.`,
        t`मग कोष्टकातून प्रत्येक किंमत ठेवा.`,
        t`मग घात काढा: $\sin^2\theta$ म्हणजे $(\sin\theta)^2$.`,
        t`उदाहरणार्थ, $\cos^2 30^\circ = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}$.`,
      ],
    },
    {
      title: t`लांब गुणाकार`,
      points: [
        t`**Product** (गुणाकार) मध्ये, एकमेकांनी गुणलेल्या संख्या म्हणजे त्याचे **factors** (अवयव).`,
        t`कोणताही एक अवयव $0$ असेल, तर संपूर्ण गुणाकार $0$ होतो.`,
        t`$\tan 1^\circ \tan 2^\circ \cdots \tan 89^\circ$ मध्ये, $\tan\theta$ ची जोडी $\tan(90^\circ - \theta)$ शी लावा: $\tan 1^\circ$ ची $\tan 89^\circ$ शी.`,
        t`$x$ आणि $y$ ची अदलाबदल करा: $\theta$ वरच्या arm वरचा $P(x, y)$, $90^\circ - \theta$ वरच्या arm वर $Q(y, x)$ होतो.`,
        t`म्हणून $\tan(90^\circ - \theta) = \frac{x}{y} = \cot\theta$, आणि प्रत्येक जोडी $\tan\theta \cot\theta = 1$ आहे.`,
        t`मधला अवयव $\tan 45^\circ = 1$ आहे, म्हणून संपूर्ण गुणाकार $1$ आहे.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\theta = 60^\circ$, तर $\frac{1 + \tan^2\theta}{2\tan\theta}$ काढा.`,
    steps: [
      t`$\tan 60^\circ = \frac{\sin 60^\circ}{\cos 60^\circ}$ $= \frac{\sqrt{3}/2}{1/2}$ $= \sqrt{3}$.`,
      t`वर्ग करा: $\tan^2 60^\circ = 3$, म्हणून अंश $1 + 3 = 4$ आहे.`,
      t`छेद $2\sqrt{3}$ आहे, म्हणून किंमत $\frac{4}{2\sqrt{3}}$ $= \frac{2}{\sqrt{3}}$ आहे.`,
    ],
    answer: t`$\frac{2}{\sqrt{3}}$`,
  },
  remediation: {
    "C03-M1": t`$30^\circ$ ला बिंदू $(\sqrt{3}, 1)$ आहे आणि $r = 2$, म्हणून $\sin 30^\circ = \frac{1}{2}$ आणि $\cos 30^\circ = \frac{\sqrt{3}}{2}$. Sine $0^\circ$ पासून $90^\circ$ पर्यंत वाढते, म्हणून $\sin 30^\circ = \frac{1}{2}$ लहान आहे आणि $\sin 60^\circ = \frac{\sqrt{3}}{2}$ मोठे.`,
    "C03-M2": t`अक्षावर $r = 1$ घ्या: $\cos\theta$ म्हणजे बिंदूचा $x$-निर्देशक आणि $\sin\theta$ म्हणजे त्याचा $y$-निर्देशक. $90^\circ$ ला बिंदू $(0, 1)$ आहे, म्हणून $\cos 90^\circ = 0$ आणि $\sin 90^\circ = 1$.`,
    "C03-M3": t`$180^\circ$ ला बिंदू $(-1, 0)$ आहे, म्हणून $\cos 180^\circ = -1$; $270^\circ$ ला तो $(0, -1)$ आहे, म्हणून $\sin 270^\circ = -1$. अक्षाच्या ऋण अर्ध्यावरचा बिंदू ऋण किंमत देतो.`,
    "C03-M4": t`$\sec\theta = \frac{1}{\cos\theta}$ आणि $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: प्रत्येक जोडी "co" असलेले function आणि "co" नसलेले function अशी आहे, म्हणून $\sec$ ची जोडी $\cos$ शी आणि $\operatorname{cosec}$ ची $\sin$ शी. म्हणून $\operatorname{cosec} 30^\circ = \frac{1}{\sin 30^\circ} = 2$.`,
    "C03-M5": t`$\sin 2\theta$ म्हणजे angle $2\theta$ चे sine: आधी $2\theta$ काढा, मग त्याचे sine घ्या. $\theta = 30^\circ$ साठी, $\sin 2\theta = \sin 60^\circ = \frac{\sqrt{3}}{2}$, $2\sin 30^\circ = 1$ नाही.`,
    "C03-M6": t`$\cos^2\theta$ म्हणजे $(\cos\theta)^2$: किंमत काढा, मग तिचा वर्ग करा. उदाहरणार्थ $\cos^2 30^\circ = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}$.`,
  },
  solutions: {
    "C03-Q1": [
      t`$\cot 45^\circ = 1$, $\sin 30^\circ = \frac{1}{2}$ आणि $\sec 60^\circ = \frac{1}{\cos 60^\circ} = 2$.`,
      t`वर्ग करा: $\sec^2 60^\circ = 2^2 = 4$.`,
      t`$4(1) - 4 + \frac{1}{2} = \frac{1}{2}$.`,
    ],
    "C03-Q2": [
      t`$r = 1$ घेऊन: $(1, 0)$ वरून $\cos 0 = 1$, $(-1, 0)$ वरून $\cos\pi = -1$, आणि $(0, -1)$ वरून $\sin\frac{3\pi}{2} = -1$.`,
      t`वर्ग करा: $\sin^2\frac{3\pi}{2} = (-1)^2 = 1$.`,
      t`$1 + 2(-1) + 3(1) = 2$.`,
    ],
    "C03-Q3": [
      t`आधी angles शोधा: $2\theta = 60^\circ$ आणि $3\theta = 90^\circ$.`,
      t`$\cos 60^\circ = \frac{1}{2}$, आणि बिंदू $(0, 1)$ वरून $\sin 90^\circ = 1$.`,
      t`$\frac{1}{2} + 1 = \frac{3}{2}$.`,
    ],
    "C03-Q4": [
      t`$\sin 30^\circ = \frac{1}{2}$ आणि $\cos 45^\circ = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.`,
      t`$180^\circ$ ला बिंदू $(-1, 0)$ आहे, म्हणून $\cos 180^\circ = -1$.`,
      t`$\frac{1}{2} + \frac{\sqrt{2}}{2} - 1 = \frac{\sqrt{2} - 1}{2}$.`,
    ],
    "C03-Q5": [
      t`$\operatorname{cosec} 45^\circ = \frac{1}{\sin 45^\circ} = \sqrt{2}$, म्हणून $\operatorname{cosec}^2 45^\circ = 2$.`,
      t`$\cot 30^\circ = \frac{\cos 30^\circ}{\sin 30^\circ} = \sqrt{3}$ आणि $\sec 60^\circ = \frac{1}{\cos 60^\circ} = 2$.`,
      t`$2 + \sqrt{3} + 2 = 4 + \sqrt{3}$.`,
    ],
    "C03-Q6": [
      t`आधी angle शोधा: $2\theta = 90^\circ$, म्हणून $\sin 2\theta = \sin 90^\circ = 1$.`,
      t`$\cos 45^\circ = \frac{1}{\sqrt{2}}$, म्हणून $\cos^2 45^\circ = \frac{1}{2}$.`,
      t`$2(1) + \frac{1}{2} = \frac{5}{2}$.`,
    ],
  },
};
