import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c06: ConceptTranslation = {
  id: "C06",
  lang: "mr",
  status: "approved",
  source: "008af896d5a78a",
  hook: {
    prompt: t`$\cos\theta = \frac{8}{17}$. **$\sin\theta = \frac{15}{17}$ आहे का?**`,
    reveal: t`असेलच असे नाही. $\sin^2\theta = 1 - \frac{64}{289} = \frac{225}{289}$, म्हणून $\sin\theta = \frac{15}{17}$ किंवा $-\frac{15}{17}$. दोन्ही बसतात: $\cos\theta$ पहिल्या quadrant मध्येही धन आहे आणि चौथ्यातही. पहिल्यात $\sin\theta = \frac{15}{17}$; चौथ्यात $\sin\theta = -\frac{15}{17}$. एक किंमत इतर प्रत्येक गुणोत्तराचे माप ठरवते, पण त्याचे चिन्ह फक्त quadrant ठरवतो.`,
  },
  intuition: [
    t`समजा तुम्हाला फक्त एक गुणोत्तर माहीत आहे, जसे $\cos\theta = \frac{8}{17}$.`,
    t`कारण $\cos\theta = \frac{x}{r}$, terminal arm वर असा बिंदू घ्या ज्यासाठी $x = 8$ आणि $r = 17$.`,
    t`पायथागोरसने $y^2 = 17^2 - 8^2 = 225$, म्हणून $y = 15$ किंवा $y = -15$.`,
    t`दोन्ही बाबतीत काटकोन त्रिकोणाच्या बाजू $8$, $15$ आणि $17$ आहेत, म्हणून प्रत्येक गुणोत्तराचे **size** (माप), म्हणजे चिन्हाशिवाय त्याची किंमत, ठरलेले आहे.`,
    t`त्याचे **sign** (चिन्ह), धन की ऋण, ठरलेले नाही: बिंदू Quadrant I मध्ये असू शकतो किंवा Quadrant IV मध्ये.`,
    t`म्हणून identity फक्त वर्ग देते, जसे $\sin^2\theta$, आणि कोणते वर्गमूळ घ्यायचे ते quadrant ठरवतो.`,
  ],
  formal: [
    {
      title: t`Identity वरून माप`,
      points: [
        t`आधी दिलेले गुणोत्तर दुसऱ्याशी जोडणारी identity वापरा.`,
        t`$\sin^2\theta + \cos^2\theta = 1$ ही $\sin\theta$ आणि $\cos\theta$ ला जोडते.`,
        t`$\sec^2\theta = 1 + \tan^2\theta$ ही $\sec\theta$ आणि $\tan\theta$ ला जोडते.`,
        t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ ही $\operatorname{cosec}\theta$ आणि $\cot\theta$ ला जोडते.`,
        t`प्रत्येक दुसऱ्या गुणोत्तराचा **square** (वर्ग) देते, जसे $\sin^2\theta$, गुणोत्तर स्वतः नाही.`,
        t`धन वर्गाची दोन **square roots** (वर्गमुळे) असतात, एक धन आणि एक ऋण: $\sin^2\theta = \frac{225}{289}$ वरून $\sin\theta = \pm\frac{15}{17}$.`,
      ],
    },
    {
      title: t`Quadrant वरून चिन्ह`,
      points: [
        t`$\theta$ ज्या quadrant मध्ये आहे त्याच्याशी ज्याचे चिन्ह जुळते ते वर्गमूळ ठेवा.`,
        t`Quadrant I मध्ये सर्व सहा गुणोत्तरे धन आहेत.`,
        t`Quadrant II मध्ये फक्त $\sin$ आणि $\operatorname{cosec}$ धन आहेत.`,
        t`Quadrant III मध्ये फक्त $\tan$ आणि $\cot$ धन आहेत.`,
        t`Quadrant IV मध्ये फक्त $\cos$ आणि $\sec$ धन आहेत.`,
        t`$\cos\theta$ हे एखाद्या वर्गसमीकरणाचे मूळ असेल, तर ज्याचे चिन्ह quadrant शी जुळते ते मूळ ठेवा.`,
      ],
    },
    {
      title: t`मध्यांतरावरून quadrant`,
      points: [
        t`Quadrant बहुतेक वेळा **interval** (मध्यांतर) म्हणून दिलेला असतो: दोन किमती ज्यांच्या दरम्यान $\theta$ आहे.`,
        t`$0 < \theta < \frac{\pi}{2}$, $0^\circ$ पासून $90^\circ$ पर्यंत, म्हणजे Quadrant I.`,
        t`$\frac{\pi}{2} < \theta < \pi$, $90^\circ$ पासून $180^\circ$ पर्यंत, म्हणजे Quadrant II.`,
        t`$\pi < \theta < \frac{3\pi}{2}$, $180^\circ$ पासून $270^\circ$ पर्यंत, म्हणजे Quadrant III.`,
        t`$\frac{3\pi}{2} < \theta < 2\pi$, $270^\circ$ पासून $360^\circ$ पर्यंत, म्हणजे Quadrant IV.`,
      ],
    },
    {
      title: t`उरलेली, वर्गमुळांशिवाय`,
      points: [
        t`Identity आणि quadrant नंतर, उरलेल्या गुणोत्तरांसाठी आणखी वर्गमुळे लागत नाहीत.`,
        t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$, ज्यात $\sin$ वर आहे, म्हणून $\sin\theta = \tan\theta\cos\theta$.`,
        t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, $\sin\theta$ चा **reciprocal**: एकाला त्याने भागणे.`,
        t`$\sec\theta = \frac{1}{\cos\theta}$, $\cos\theta$ चा reciprocal.`,
        t`$\cot\theta = \frac{1}{\tan\theta}$, $\tan\theta$ चा reciprocal.`,
        t`ही आपोआप चिन्हे सोबत आणतात: reciprocal ला त्याच्या जोडीदाराचेच चिन्ह असते.`,
      ],
    },
    {
      title: t`राशीची किंमत`,
      points: [
        t`राशीची किंमत काढण्यासाठी, तिच्यातील प्रत्येक गुणोत्तर चिन्हासह काढा, मग ठेवा.`,
        t`उदाहरणार्थ, $\tan\theta = -\frac{20}{21}$ घ्या, जिथे $\theta$ Quadrant IV मध्ये आहे, जिथे $x > 0$ आणि $y < 0$.`,
        t`मग $\sec^2\theta = 1 + \frac{400}{441} = \frac{841}{441}$.`,
        t`Quadrant IV मध्ये $\sec\theta$ धन आहे, म्हणून $\sec\theta = \frac{29}{21}$ आणि $\cos\theta = \frac{21}{29}$.`,
        t`मग $\sin\theta = \tan\theta\cos\theta = -\frac{20}{29}$.`,
        t`म्हणून $2\sin\theta + 3\cos\theta = -\frac{40}{29} + \frac{63}{29}$, म्हणजे $\frac{23}{29}$.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\sec\theta = -3$ आणि $\pi < \theta < \frac{3\pi}{2}$, तर $\theta$ ची उरलेली पाच trigonometric functions काढा.`,
    steps: [
      t`$\cos\theta = \frac{1}{\sec\theta} = -\frac{1}{3}$.`,
      t`$\tan^2\theta = \sec^2\theta - 1 = 9 - 1 = 8$, म्हणून $\tan\theta = \pm 2\sqrt{2}$.`,
      t`$\pi < \theta < \frac{3\pi}{2}$ म्हणजे तिसरा quadrant, जिथे $\tan$ धन आहे: $\tan\theta = 2\sqrt{2}$ आणि $\cot\theta = \frac{1}{2\sqrt{2}}$.`,
      t`$\sin\theta = \tan\theta\cos\theta$, म्हणजे $2\sqrt{2}\left(-\frac{1}{3}\right) = -\frac{2\sqrt{2}}{3}$, म्हणून $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$.`,
    ],
    answer: t`$\cos\theta = -\frac{1}{3}$, $\tan\theta = 2\sqrt{2}$, $\cot\theta = \frac{1}{2\sqrt{2}}$, $\sin\theta = -\frac{2\sqrt{2}}{3}$, $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$.`,
  },
  remediation: {
    "C06-M1": t`Identity वर्ग देते, म्हणून गुणोत्तर म्हणजे त्याच्या वर्गमुळाचे $\pm$. चिन्ह quadrant ठरवतो: उदाहरणार्थ, तिसऱ्या quadrant मध्ये $\sin$ आणि $\cos$ दोन्ही ऋण आहेत.`,
    "C06-M2": t`$\tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta}$, ज्यात $\sin$ वर आहे. त्याचा reciprocal $\cot\theta = \frac{\cos\theta}{\sin\theta}$ आहे.`,
    "C06-M3": t`$\sec\theta = \frac{1}{\cos\theta}$ आणि $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: प्रत्येक जोडीत बरोबर एकच **co** आहे. म्हणून $\sec\theta$ वरून आधी $\cos\theta$ मिळते.`,
    "C06-M4": t`Identity गुणोत्तराचा वर्ग देते. पुढे जाण्यापूर्वी वर्गमूळ घ्या: $\cos^2\theta = \frac{4}{9}$ वरून $\cos\theta = \pm\frac{2}{3}$ मिळते.`,
  },
  solutions: {
    "C06-Q1": [
      t`$\sin^2\theta = 1 - \cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$, म्हणून $\sin\theta = \pm\frac{4}{5}$.`,
      t`$180^\circ < \theta < 270^\circ$ म्हणजे तिसरा quadrant, जिथे $\sin$ ऋण आहे: $\sin\theta = -\frac{4}{5}$.`,
      t`म्हणून $\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-4/5}{-3/5} = \frac{4}{3}$.`,
    ],
    "C06-Q2": [
      t`$\tan^2 A = \sec^2 A - 1 = \frac{625}{49} - 1 = \frac{576}{49}$, म्हणून $\tan A = \pm\frac{24}{7}$.`,
      t`दुसऱ्या quadrant मध्ये फक्त $\sin$ आणि $\operatorname{cosec}$ धन आहेत, म्हणून $\tan A = -\frac{24}{7}$.`,
    ],
    "C06-Q3": [
      t`$\tan^2 x = \sec^2 x - 1 = \frac{169}{25} - 1 = \frac{144}{25}$, म्हणून $\tan x = \pm\frac{12}{5}$.`,
      t`चौथ्या quadrant मध्ये $\tan$ ऋण आहे: $\tan x = -\frac{12}{5}$.`,
      t`म्हणून $\cot x = \frac{1}{\tan x} = -\frac{5}{12}$.`,
    ],
    "C06-Q4": [
      t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 1 + \frac{9}{16} = \frac{25}{16}$. तिसऱ्या quadrant मध्ये $\operatorname{cosec}$ ऋण आहे: $\operatorname{cosec}\theta = -\frac{5}{4}$, म्हणून $\sin\theta = -\frac{4}{5}$.`,
      t`$\cos\theta = \cot\theta\sin\theta = \frac{3}{4}\left(-\frac{4}{5}\right) = -\frac{3}{5}$.`,
      t`$4\operatorname{cosec}\theta + 5\cos\theta = 4\left(-\frac{5}{4}\right) + 5\left(-\frac{3}{5}\right) = -5 - 3 = -8$.`,
    ],
    "C06-Q5": [
      t`$\sin A = \frac{3}{5}$ आणि $\sin B = \frac{4}{5}$. दुसऱ्या quadrant मध्ये $\cos$ ऋण आहे.`,
      t`$\cos^2 A = 1 - \frac{9}{25} = \frac{16}{25}$, म्हणून $\cos A = -\frac{4}{5}$ आणि $\tan A = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
      t`$\cos^2 B = 1 - \frac{16}{25} = \frac{9}{25}$, म्हणून $\cos B = -\frac{3}{5}$ आणि $\tan B = \frac{4/5}{-3/5} = -\frac{4}{3}$.`,
      t`$4\tan A + 3\tan B = 4\left(-\frac{3}{4}\right) + 3\left(-\frac{4}{3}\right) = -3 - 4 = -7$.`,
    ],
    "C06-Q6": [
      t`$25\cos^2\theta + 5\cos\theta - 12 = (5\cos\theta - 3)(5\cos\theta + 4) = 0$, म्हणून $\cos\theta = \frac{3}{5}$ किंवा $-\frac{4}{5}$.`,
      t`$\frac{\pi}{2} < \alpha < \pi$ म्हणजे दुसरा quadrant, जिथे $\cos$ ऋण आहे: $\cos\alpha = -\frac{4}{5}$.`,
      t`$\sin^2\alpha = 1 - \frac{16}{25} = \frac{9}{25}$, आणि दुसऱ्या quadrant मध्ये $\sin$ धन आहे: $\sin\alpha = \frac{3}{5}$.`,
      t`म्हणून $\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
    ],
  },
};
