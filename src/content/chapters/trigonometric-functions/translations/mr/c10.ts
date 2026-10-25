import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c10: ConceptTranslation = {
  id: "C10",
  lang: "mr",
  status: "approved",
  source: "094bc1b01e7b89",
  hook: {
    prompt: t`बिंदू $(3, \sqrt3)$ आणि $(-3, -\sqrt3)$ दोघांसाठी $\tan\theta = \dfrac{y}{x} = \dfrac{1}{\sqrt3}$ आहे आणि दोघे origin पासून $2\sqrt3$ अंतरावर आहेत. **दोघांचे polar co-ordinates $\left(2\sqrt3, \dfrac{\pi}{6}\right)$ आहेत का?**`,
    reveal: t`नाही. ते origin मधून जाणाऱ्या एकाच रेषेवर आहेत, पण तिच्या उलट बाजूंना. $(3, \sqrt3)$ हा $\dfrac{\pi}{6}$ वर आहे; $(-3, -\sqrt3)$, quadrant III मध्ये, $\pi + \dfrac{\pi}{6} = \dfrac{7\pi}{6}$ वर आहे. गुणोत्तर $\dfrac{y}{x}$ रेषा देते; quadrant बाजू निवडतो.`,
  },
  intuition: [
    t`बिंदू $P$ चे **Cartesian co-ordinates** (कार्टेशियन निर्देशक) $(x, y)$ सांगतात: $x$ पुढे जा, मग $y$ वर.`,
    t`**Polar co-ordinates** (ध्रुवीय निर्देशक) $(r, \theta)$ त्याच बिंदूपर्यंत दुसऱ्या मार्गाने पोहोचतात: आधी फेरी, मग चालणे.`,
    t`आधी एक arm धन $x$-अक्षापासून anticlockwise, angle $\theta$ एवढी, ती $P$ कडे वळेपर्यंत फिरवा.`,
    t`मग arm वरून चाला: $r$ म्हणजे अंतर $OP$, origin $O$ पासून $P$ पर्यंत.`,
    t`Arm, $x$-अक्ष आणि $P$ पासून टाकलेला लंब मिळून एक काटकोन त्रिकोण होतो.`,
    t`त्याच्या बाजू दोघांना जोडतात: $x = r\cos\theta$ आणि $y = r\sin\theta$.`,
  ],
  formal: [
    {
      title: t`Polar पासून Cartesian`,
      points: [
        t`समजा आपल्याला बिंदू $P$ चे polar co-ordinates $(r, \theta)$ माहीत आहेत.`,
        t`कारण $\cos\theta = \frac{x}{r}$, त्याचा $x$-निर्देशक $x = r\cos\theta$ आहे.`,
        t`कारण $\sin\theta = \frac{y}{r}$, त्याचा $y$-निर्देशक $y = r\sin\theta$ आहे.`,
        t`उदाहरणार्थ, $P\left(2, \frac{3\pi}{4}\right)$ घ्या, ज्याची arm quadrant II मध्ये आहे.`,
        t`मग $x = 2\cos\frac{3\pi}{4} = -\sqrt2$ आणि $y = 2\sin\frac{3\pi}{4} = \sqrt2$.`,
        t`चिन्हे ठेवा: $\cos\frac{3\pi}{4}$ ऋण आहे, म्हणून $P(-\sqrt2, \sqrt2)$ quadrant II मध्ये आहे.`,
      ],
    },
    {
      title: t`Cartesian पासून polar`,
      points: [
        t`आता उलट दिशेने जा: $P(x, y)$ पासून सुरू करून $(r, \theta)$ काढा.`,
        t`$OP$ हा अशा काटकोन त्रिकोणाचा hypotenuse आहे ज्याच्या उरलेल्या दोन बाजू $|x|$ आणि $|y|$ आहेत.`,
        t`म्हणून, पायथागोरसने, $r = \sqrt{x^2 + y^2}$.`,
        t`$\theta$ म्हणजे असा angle ज्यासाठी $\cos\theta = \frac{x}{r}$ आणि $\sin\theta = \frac{y}{r}$.`,
        t`$\theta$ हा $0 \le \theta < 2\pi$ मध्ये घ्या, म्हणजे प्रत्येक बिंदूला एकच $\theta$ मिळतो.`,
      ],
    },
    {
      title: t`एकच रेषा, उलट बाजू`,
      points: [
        t`$\tan\theta = \frac{y}{x}$ फक्त $O$ मधून जाणारी ती रेषा ठरवते जिच्यावर $P$ आहे.`,
        t`उदाहरणार्थ, $(3, \sqrt3)$ आणि $(-3, -\sqrt3)$ दोघांवरून $\frac{y}{x} = \frac{1}{\sqrt3}$ मिळते.`,
        t`ते त्याच एका रेषेवर आहेत, पण $O$ च्या उलट बाजूंना.`,
        t`$(3, \sqrt3)$ हा quadrant I मध्ये आहे, $\theta = \frac{\pi}{6}$ वर.`,
        t`$(-3, -\sqrt3)$ हा quadrant III मध्ये आहे, $\theta = \pi + \frac{\pi}{6} = \frac{7\pi}{6}$ वर.`,
        t`म्हणून **plot the point first** (आधी बिंदू स्थापन करा): त्याचा quadrant $O$ ची बाजू निवडतो.`,
      ],
    },
    {
      title: t`θ ला त्याच्या quadrant मध्ये ठेवणे`,
      points: [
        t`**Reference angle** $\alpha$ म्हणजे arm $OP$ आणि $x$-अक्ष यांच्यामधील लघुकोन.`,
        t`तो $\tan\alpha = \left|\frac{y}{x}\right|$ वरून काढा.`,
        t`Quadrant I मध्ये: $\theta = \alpha$.`,
        t`Quadrant II मध्ये: $\theta = \pi - \alpha$, कारण arm ऋण $x$-अक्षाच्या आधी थांबते.`,
        t`Quadrant III मध्ये: $\theta = \pi + \alpha$, कारण arm ऋण $x$-अक्षाच्या पुढे जाते.`,
        t`Quadrant IV मध्ये: $\theta = 2\pi - \alpha$, कारण arm पूर्ण फेरीच्या आधी थांबते.`,
      ],
    },
    {
      title: t`Degrees की radians`,
      points: [
        t`पुस्तक कधी कधी $\theta$ radians ऐवजी degrees मध्ये देते.`,
        t`उदाहरणार्थ, ते $(3, 3)$ चे polar co-ordinates $(3\sqrt2, 45^\circ)$ असे लिहिते.`,
        t`हे $\left(3\sqrt2, \frac{\pi}{4}\right)$ सारखेच आहे, कारण $45^\circ = \frac{\pi}{4}$.`,
      ],
    },
  ],
  worked: {
    prompt: t`बिंदू $(2, -2\sqrt3)$ चे polar co-ordinates $(r, \theta)$ काढा, जिथे $0 \le \theta < 2\pi$.`,
    steps: [
      t`स्थापन करा: $x > 0$ आणि $y < 0$, म्हणून बिंदू quadrant IV मध्ये आहे.`,
      t`$r = \sqrt{2^2 + (2\sqrt3)^2}$ $= \sqrt{4 + 12} = 4$.`,
      t`Reference angle: $\tan\alpha = \left|\dfrac{-2\sqrt3}{2}\right|$ $= \sqrt3$, म्हणून $\alpha = \dfrac{\pi}{3}$.`,
      t`Quadrant IV मध्ये: $\theta = 2\pi - \dfrac{\pi}{3}$ $= \dfrac{5\pi}{3}$. तपासा: $4\cos\dfrac{5\pi}{3} = 2$ आणि $4\sin\dfrac{5\pi}{3} = -2\sqrt3$.`,
    ],
    answer: t`$\left(4, \dfrac{5\pi}{3}\right)$. सापळा: $\dfrac{\pi}{3}$ वर थांबणे, जो quadrant I कडे निर्देश करतो.`,
  },
  remediation: {
    "C10-M1": t`$\left|\dfrac{y}{x}\right|$ वरून मिळालेला लघुकोन फक्त reference angle आहे, आणि तो quadrant I कडे निर्देश करतो. बिंदू स्थापन करा आणि $\theta$ त्याच्या स्वतःच्या quadrant मध्ये ठेवा; उलट दिशेने जाताना, $\cos\theta$ आणि $\sin\theta$ ला त्या quadrant ची चिन्हे द्या.`,
    "C10-M2": t`$\theta$ हा धन $x$-अक्षापासून मोजला जातो, म्हणून $x = r\cos\theta$, $y = r\sin\theta$ आणि $\tan\theta = \dfrac{y}{x}$.`,
    "C10-M3": t`$r$ म्हणजे origin पासूनचे अंतर, $r = \sqrt{x^2 + y^2}$. शेवटी वर्गमूळ घ्या.`,
    "C10-M4": t`Quadrant II मध्ये arm ऋण $x$-अक्षाच्या आधी थांबते, म्हणून $\theta = \pi - \alpha$; quadrant III मध्ये ती त्याच्या पुढे गेलेली असते, म्हणून $\theta = \pi + \alpha$.`,
    "C10-M5": t`$r$ हा अशा काटकोन त्रिकोणाचा hypotenuse आहे ज्याच्या legs $|x|$ आणि $|y|$ आहेत, म्हणून $r = \sqrt{x^2 + y^2}$, त्यांची बेरीज नाही.`,
  },
  solutions: {
    "C10-Q1": [
      t`$r = \sqrt{1^2 + (\sqrt3)^2} = \sqrt4 = 2$.`,
      t`दोन्ही निर्देशक धन आहेत, म्हणून बिंदू quadrant I मध्ये आहे: $\tan\theta = \dfrac{\sqrt3}{1} = \sqrt3$ वरून $\theta = \dfrac{\pi}{3}$ मिळतो.`,
      t`Polar co-ordinates $\left(2, \dfrac{\pi}{3}\right)$ आहेत. तपासा: $2\cos\dfrac{\pi}{3} = 1$ आणि $2\sin\dfrac{\pi}{3} = \sqrt3$.`,
    ],
    "C10-Q2": [
      t`$r = \sqrt{(-1)^2 + (-1)^2} = \sqrt2$.`,
      t`$x < 0$ आणि $y < 0$: quadrant III. Reference angle: $\tan\alpha = \left|\dfrac{-1}{-1}\right| = 1$, म्हणून $\alpha = \dfrac{\pi}{4}$.`,
      t`Quadrant III मध्ये: $\theta = \pi + \dfrac{\pi}{4} = \dfrac{5\pi}{4}$. Polar co-ordinates $\left(\sqrt2, \dfrac{5\pi}{4}\right)$ आहेत.`,
    ],
    "C10-Q3": [
      t`$r = \sqrt{(-\sqrt3)^2 + 1^2} = \sqrt4 = 2$.`,
      t`$x < 0$ आणि $y > 0$: quadrant II. Reference angle: $\tan\alpha = \left|\dfrac{1}{-\sqrt3}\right| = \dfrac{1}{\sqrt3}$, म्हणून $\alpha = \dfrac{\pi}{6}$.`,
      t`Quadrant II मध्ये: $\theta = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$. Polar co-ordinates $\left(2, \dfrac{5\pi}{6}\right)$ आहेत.`,
    ],
    "C10-Q4": [
      t`$r = \sqrt{5^2 + (-5)^2} = \sqrt{50} = 5\sqrt2$.`,
      t`$x > 0$ आणि $y < 0$: quadrant IV. Reference angle: $\tan\alpha = \left|\dfrac{-5}{5}\right| = 1$, म्हणून $\alpha = \dfrac{\pi}{4}$.`,
      t`Quadrant IV मध्ये: $\theta = 2\pi - \dfrac{\pi}{4} = \dfrac{7\pi}{4}$. Polar co-ordinates $\left(5\sqrt2, \dfrac{7\pi}{4}\right)$ आहेत.`,
    ],
    "C10-Q5": [
      t`$\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ हा quadrant II मध्ये आहे, जिथे cosine ऋण आहे आणि sine धन: $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$, $\sin\dfrac{2\pi}{3} = \dfrac{\sqrt3}{2}$.`,
      t`$x = 4 \cdot \left(-\dfrac{1}{2}\right) = -2$ आणि $y = 4 \cdot \dfrac{\sqrt3}{2} = 2\sqrt3$. बिंदू $(-2, 2\sqrt3)$ आहे.`,
    ],
    "C10-Q6": [
      t`$\dfrac{7\pi}{6} = \pi + \dfrac{\pi}{6}$ हा quadrant III मध्ये आहे, जिथे cosine आणि sine दोन्ही ऋण आहेत: $\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt3}{2}$, $\sin\dfrac{7\pi}{6} = -\dfrac{1}{2}$.`,
      t`$x = 6 \cdot \left(-\dfrac{\sqrt3}{2}\right) = -3\sqrt3$ आणि $y = 6 \cdot \left(-\dfrac{1}{2}\right) = -3$. बिंदू $(-3\sqrt3, -3)$ आहे.`,
    ],
  },
};
