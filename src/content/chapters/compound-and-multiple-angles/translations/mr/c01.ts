import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c01: ConceptTranslation = {
  id: "C01",
  lang: "mr",
  status: "approved",
  source: "02a616df0e7a14",
  hook: {
    prompt: t`$\sin(30^\circ + 60^\circ)$ हे $\sin 30^\circ + \sin 60^\circ$ सारखेच आहे का?`,
    reveal: t`नाही. $\sin(30^\circ + 60^\circ) = \sin 90^\circ = 1$, पण $\sin 30^\circ + \sin 60^\circ = \frac{1}{2} + \frac{\sqrt{3}}{2} \approx 1.37$, जे कोणत्याही sine पेक्षा जास्त आहे. बेरजेच्या sine साठी दोन्ही angles चे sines **आणि** cosines लागतात.`,
  },
  intuition: [
    t`**Compound angle** (संयुक्त कोन) म्हणजे दोन angles ची बेरीज किंवा फरक, जसे $A + B$ किंवा $A - B$.`,
    t`Sine आणि cosine यावर विभागले जात नाहीत: $\sin(A + B)$ म्हणजे $\sin A + \sin B$ नाही.`,
    t`Unit circle वर, arm initial arm पासून $A$ एवढी फिरवा.`,
    t`मग ती आणखी $B$ फिरवा: एकूण ही $A + B$ ची एक फेरी आहे.`,
    t`शेवटच्या बिंदूच्या निर्देशकांत दोन्ही फेऱ्यांचे sines आणि cosines मिसळलेले असतात, म्हणून प्रत्येक सूत्रात दोन गुणाकार असतात.`,
    t`Sine चे गुणाकार functions मिसळतात, $\sin \cdot \cos$ आणि $\cos \cdot \sin$; cosine चे गुणाकार सारख्याला सारख्याशी जोडतात.`,
  ],
  formal: [
    {
      title: t`बेरीज किंवा फरकाचे sine`,
      points: [
        t`$\sin(A + B)$ बरोबर $\sin A\cos B + \cos A\sin B$.`,
        t`$\sin(A - B)$ बरोबर $\sin A\cos B - \cos A\sin B$.`,
        t`Sine चिन्ह तसेच ठेवते: angle मधील अधिक चिन्ह गुणाकारांमध्ये अधिक चिन्ह देते.`,
        t`दोन्ही एकदम $\pm$ ने लिहा, ज्याला "अधिक किंवा वजा" असे वाचतात.`,
        t`$\sin(A \pm B)$ बरोबर $\sin A\cos B \pm \cos A\sin B$.`,
      ],
    },
    {
      title: t`बेरीज किंवा फरकाचे cosine`,
      points: [
        t`$\cos(A + B)$ बरोबर $\cos A\cos B - \sin A\sin B$.`,
        t`$\cos(A - B)$ बरोबर $\cos A\cos B + \sin A\sin B$.`,
        t`Cosine चिन्ह उलटे करते: angle मधील अधिक चिन्ह गुणाकारांमध्ये वजा चिन्ह देते.`,
        t`$\cos(A \pm B)$ बरोबर $\cos A\cos B \mp \sin A\sin B$.`,
        t`इथे $\mp$ म्हणजे उलटा $\pm$: एकतर सर्व वरची चिन्हे एकत्र वाचा, किंवा सर्व खालची.`,
      ],
    },
    {
      title: t`B = 0 ने तपासणी`,
      points: [
        t`$B = 0$ ठेवा, जिथे $\sin 0 = 0$ आणि $\cos 0 = 1$.`,
        t`मग $\sin(A + 0)$ वरून $\sin A$ मिळाले पाहिजे.`,
        t`फक्त मिश्र गुणाकारच असे करतात: $\sin A \cdot 1 + \cos A \cdot 0$ $= \sin A$.`,
        t`सारख्याला सारख्याशी जोडणारे गुणाकार $\cos A \cdot 1 - \sin A \cdot 0$ $= \cos A$ देतील, जे चुकीचे function आहे.`,
      ],
    },
    {
      title: t`पहिला angle पहिलाच ठेवा`,
      points: [
        t`$\sin(A - B)$ मध्ये पहिला angle पहिलाच ठेवा.`,
        t`Sine **odd** (विषम) आहे: ऋण angle ऋण किंमत देतो, $\sin(-\theta) = -\sin\theta$.`,
        t`म्हणून $\sin(B - A) = -\sin(A - B)$: angles ची अदलाबदल केल्यास चिन्ह बदलते.`,
        t`Cosine **even** (सम) आहे: ऋण angle तीच किंमत देतो, $\cos(-\theta) = \cos\theta$.`,
        t`म्हणून cos साठी क्रमाने फरक पडत नाही: $\cos(B - A) = \cos(A - B)$.`,
      ],
    },
    {
      title: t`नेमक्या किमती`,
      points: [
        t`Angle चे मानक angles मध्ये विभाजन करा, जसे $75^\circ = 45^\circ + 30^\circ$.`,
        t`सूत्राने त्याचा विस्तार करा, आणि मानक angles वरच्या माहीत किमती ठेवा.`,
        t`मग छेदाचे **rationalise** करा (परिमेयीकरण): अंश आणि छेदाला गुणून छेदातील मूळ काढून टाका.`,
      ],
    },
    {
      title: t`एक गुणोत्तर आणि quadrant दिलेला`,
      points: [
        t`बहुधा प्रत्येक angle चे एक गुणोत्तर दिलेले असते, सोबत angle ज्या quadrant मध्ये आहे तो.`,
        t`दुसरे गुणोत्तर $\sin^2\theta + \cos^2\theta = 1$ वरून काढा.`,
        t`उदाहरणार्थ, $\cos\theta = \pm\sqrt{1 - \sin^2\theta}$: फक्त वर्गमुळावरून चिन्ह मिळत नाही.`,
        t`त्याचे चिन्ह quadrant वरून घ्या.`,
      ],
    },
    {
      title: t`सूत्रे उलटी वाचा`,
      points: [
        t`प्रत्येक सूत्र उजवीकडून डावीकडेही चालते.`,
        t`$\cos X\cos Y + \sin X\sin Y$ बरोबर $\cos(X - Y)$.`,
        t`$\sin X\cos Y - \cos X\sin Y$ बरोबर $\sin(X - Y)$.`,
        t`म्हणून cos गुणाकारांमधील अधिक चिन्ह म्हणजे angles चा फरक.`,
        t`अशा प्रकारे एखादी लांब राशी आटून एका गुणोत्तरात येऊ शकते.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\sin A = \frac{7}{25}$, $\frac{\pi}{2} < A < \pi$, आणि $\cos B = -\frac{4}{5}$, $\pi < B < \frac{3\pi}{2}$, तर $\sin(A - B)$ काढा.`,
    steps: [
      t`$A$ दुसऱ्या quadrant मध्ये आहे, जिथे cos ऋण आहे: $\cos A = -\sqrt{1 - \frac{49}{625}}$ $= -\frac{24}{25}$.`,
      t`$B$ तिसऱ्या quadrant मध्ये आहे, जिथे sin ऋण आहे: $\sin B = -\sqrt{1 - \frac{16}{25}}$ $= -\frac{3}{5}$.`,
      t`$\sin(A - B)$ $= \sin A\cos B - \cos A\sin B$ $= \frac{7}{25}\left(-\frac{4}{5}\right)$ $- \left(-\frac{24}{25}\right)\left(-\frac{3}{5}\right)$.`,
      t`$= -\frac{28}{125} - \frac{72}{125}$ $= -\frac{100}{125} = -\frac{4}{5}$.`,
    ],
    answer: t`$\sin(A - B) = -\frac{4}{5}$.`,
  },
  remediation: {
    "C01-M1": t`Sine आणि cosine बेरजेवर विभागले जात नाहीत: $\sin 30^\circ + \sin 60^\circ$ हे $1$ पेक्षा जास्त आहे. $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$ आणि $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$ वापरा.`,
    "C01-M2": t`Cos सूत्रात चिन्ह उलटते: $\cos(A + B) = \cos A\cos B - \sin A\sin B$ आणि $\cos(A - B) = \cos A\cos B + \sin A\sin B$. गुणाकारांमधील अधिक चिन्ह म्हणजे angles चा फरक.`,
    "C01-M3": t`sin functions मिसळते: $\sin A\cos B \pm \cos A\sin B$. cos सारख्याला सारख्याशी जोडते: $\cos A\cos B \mp \sin A\sin B$. $B = 0$ ने तपासा: $\sin(A + 0)$ वरून $\sin A$ मिळाले पाहिजे.`,
    "C01-M4": t`$\cos A = \pm\sqrt{1 - \sin^2 A}$ नंतर, चिन्ह $A$ च्या quadrant वरून घ्या: cos दुसऱ्या आणि तिसऱ्या quadrant मध्ये ऋण आहे, sin तिसऱ्या आणि चौथ्यात.`,
    "C01-M5": t`sin odd आहे: $\sin(-\theta) = -\sin\theta$, म्हणून $\sin(B - A) = -\sin(A - B)$ आणि पहिला angle पहिलाच राहिला पाहिजे. cos even आहे: $\cos(-\theta) = \cos\theta$.`,
    "C01-M6": t`$\sin 30^\circ = \cos 60^\circ = \frac{1}{2}$ आणि $\sin 60^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2}$. Sine $0^\circ$ पासून $90^\circ$ पर्यंत वाढते, म्हणून $\sin 30^\circ$ लहान आहे.`,
  },
  solutions: {
    "C01-Q1": [
      t`$\sin(45^\circ - 30^\circ) = \sin 45^\circ\cos 30^\circ - \cos 45^\circ\sin 30^\circ$.`,
      t`$= \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{3}}{2} - \frac{1}{\sqrt{2}} \cdot \frac{1}{2} = \frac{\sqrt{3} - 1}{2\sqrt{2}}$.`,
      t`अंश आणि छेदाला $\sqrt{2}$ ने गुणा: $\sin 15^\circ = \frac{\sqrt{6} - \sqrt{2}}{4}$.`,
    ],
    "C01-Q2": [
      t`Cos सूत्रात चिन्ह उलटते: $\cos(60^\circ + 45^\circ) = \cos 60^\circ\cos 45^\circ - \sin 60^\circ\sin 45^\circ$.`,
      t`$= \frac{1}{2} \cdot \frac{1}{\sqrt{2}} - \frac{\sqrt{3}}{2} \cdot \frac{1}{\sqrt{2}} = \frac{1 - \sqrt{3}}{2\sqrt{2}}$.`,
      t`अंश आणि छेदाला $\sqrt{2}$ ने गुणा: $\cos 105^\circ = \frac{\sqrt{2} - \sqrt{6}}{4}$, ऋण, जसे दुसऱ्या quadrant मधील angle साठी असायला हवे.`,
    ],
    "C01-Q3": [
      t`$A$ तिसऱ्या quadrant मध्ये आहे: $\cos A = -\sqrt{1 - \frac{25}{169}} = -\frac{12}{13}$. $B$ चौथ्यात आहे: $\sin B = -\sqrt{1 - \frac{9}{25}} = -\frac{4}{5}$.`,
      t`$\cos(A - B) = \cos A\cos B + \sin A\sin B = \left(-\frac{12}{13}\right)\frac{3}{5} + \left(-\frac{5}{13}\right)\left(-\frac{4}{5}\right)$.`,
      t`$= -\frac{36}{65} + \frac{20}{65} = -\frac{16}{65}$.`,
    ],
    "C01-Q4": [
      t`$A$ तिसऱ्या quadrant मध्ये आहे: $\cos A = -\sqrt{1 - \frac{64}{289}} = -\frac{15}{17}$. $B$ पहिल्यात आहे: $\sin B = \frac{3}{5}$.`,
      t`$\sin(A + B) = \sin A\cos B + \cos A\sin B = \left(-\frac{8}{17}\right)\frac{4}{5} + \left(-\frac{15}{17}\right)\frac{3}{5}$.`,
      t`$= -\frac{32}{85} - \frac{45}{85} = -\frac{77}{85}$.`,
    ],
    "C01-Q5": [
      t`अधिक चिन्हाने जोडलेले सारखे गुणाकार म्हणजे $\cos X\cos Y + \sin X\sin Y = \cos(X - Y)$.`,
      t`$X = (n+1)A$ आणि $Y = (n+2)A$ घेऊन, राशी $\cos[(n+1)A - (n+2)A] = \cos(-A)$ आहे.`,
      t`cos even आहे, म्हणून $\cos(-A) = \cos A$, $n$ काहीही असो.`,
    ],
    "C01-Q6": [
      t`पहिला angle पहिलाच ठेवा: $\sin\left(\frac{\pi}{4} - A\right) = \sin\frac{\pi}{4}\cos A - \cos\frac{\pi}{4}\sin A$.`,
      t`$= \frac{1}{\sqrt{2}}\cos A - \frac{1}{\sqrt{2}}\sin A$.`,
      t`$\sqrt{2}$ ने गुणा: $\sqrt{2}\,\sin\left(\frac{\pi}{4} - A\right) = \cos A - \sin A$.`,
    ],
  },
};
