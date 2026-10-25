import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c02: ConceptTranslation = {
  id: "C02",
  lang: "mr",
  status: "approved",
  source: "106df773c3c4f8",
  hook: {
    prompt: t`$\theta = 200^\circ$ ला, **सहा trigonometric functions पैकी किती धन आहेत?**`,
    reveal: t`दोन. $200^\circ$ ची arm Quadrant III मध्ये आहे, जिथे तिच्यावरच्या बिंदूसाठी $x < 0$ आणि $y < 0$, तर $r > 0$. म्हणून $\sin\theta = \frac{y}{r}$ आणि $\cos\theta = \frac{x}{r}$ ऋण आहेत, आणि cosec आणि sec सुद्धा. पण $\tan\theta = \frac{y}{x}$ म्हणजे ऋण भागिले ऋण: धन, आणि $\cot\theta$ सुद्धा.`,
  },
  intuition: [
    t`संख्येचे **sign** (चिन्ह) सांगते की ती धन, $+$, आहे की ऋण, $-$.`,
    t`एक angle $\theta$ standard position मध्ये ठेवा, आणि त्याच्या terminal arm वर कोणताही बिंदू $P(x, y)$ निवडा.`,
    t`Origin पासून त्याचे अंतर, $r = OP$, नेहमी धन असते.`,
    t`म्हणून प्रत्येक trigonometric function चे चिन्ह फक्त $x$ आणि $y$ च्या चिन्हांतून येते.`,
    t`Arm फिरून पुढच्या quadrant मध्ये गेली की $x$ किंवा $y$ चे चिन्ह बदलते, आणि त्यासोबत काही functions चे चिन्हही.`,
  ],
  formal: [
    {
      title: t`x आणि y ची चिन्हे`,
      points: [
        t`Terminal arm Quadrant I मध्ये असते तेव्हा तिच्यावरच्या बिंदूसाठी $x > 0$ आणि $y > 0$.`,
        t`Quadrant II मध्ये, $x < 0$ आणि $y > 0$ असतात.`,
        t`Quadrant III मध्ये, $x < 0$ आणि $y < 0$ असतात.`,
        t`Quadrant IV मध्ये, $x > 0$ आणि $y < 0$ असतात.`,
      ],
    },
    {
      title: t`प्रत्येक function चे चिन्ह`,
      points: [
        t`$\sin\theta = \frac{y}{r}$ आणि $\operatorname{cosec}\theta = \frac{r}{y}$ ला $y$ चे चिन्ह मिळते, कारण $r > 0$.`,
        t`$\cos\theta = \frac{x}{r}$ आणि $\sec\theta = \frac{r}{x}$ ला $x$ चे चिन्ह मिळते.`,
        t`$\tan\theta = \frac{y}{x}$ आणि $\cot\theta = \frac{x}{y}$ धन असतात जेव्हा $x$ आणि $y$ ची चिन्हे सारखी असतात.`,
        t`$x$ आणि $y$ ची चिन्हे उलट असतात तेव्हा ते ऋण असतात.`,
        t`म्हणून reciprocal ला, जसे $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, नेहमी त्याच्या जोडीदाराचेच चिन्ह असते.`,
      ],
    },
    {
      title: t`All Sin Tan Cos (लक्षात ठेवण्याची युक्ती)`,
      points: [
        t`**All Sin Tan Cos** हे वाक्य सांगते की Quadrant I पासून anticlockwise जाताना कोणती functions धन आहेत.`,
        t`Quadrant I मध्ये सर्व सहा functions धन आहेत.`,
        t`Quadrant II मध्ये फक्त sin आणि cosec धन आहेत.`,
        t`Quadrant III मध्ये फक्त tan आणि cot धन आहेत.`,
        t`Quadrant IV मध्ये फक्त cos आणि sec धन आहेत.`,
        t`प्रत्येक quadrant मध्ये उरलेली functions ऋण असतात.`,
      ],
    },
    {
      title: t`Angle कोणत्या quadrant मध्ये`,
      points: [
        t`$0^\circ$ आणि $90^\circ$ यांच्या दरम्यान, terminal arm Quadrant I मध्ये असते.`,
        t`$90^\circ$ आणि $180^\circ$ यांच्या दरम्यान, ती Quadrant II मध्ये असते.`,
        t`$180^\circ$ आणि $270^\circ$ यांच्या दरम्यान, ती Quadrant III मध्ये असते.`,
        t`$270^\circ$ आणि $360^\circ$ यांच्या दरम्यान, ती Quadrant IV मध्ये असते.`,
        t`Radians मध्ये, quadrants मधील अक्ष $\frac{\pi}{2} \approx 1.57$, $\pi \approx 3.14$ आणि $\frac{3\pi}{2} \approx 4.71$ वर आहेत.`,
      ],
    },
    {
      title: t`पूर्ण फेऱ्या काढून टाकणे`,
      points: [
        t`एक पूर्ण फेरी, $360^\circ$, arm ला ती जिथून निघाली तिथेच परत आणते.`,
        t`म्हणून आधी पूर्ण फेऱ्या **drop** करा (वजा करा): त्यांनी quadrant बदलत नाही.`,
        t`उदाहरणार्थ, $400^\circ = 360^\circ + 40^\circ$ तिथेच थांबतो जिथे $40^\circ$, Quadrant I मध्ये.`,
        t`$180^\circ$ कधीही वजा करू नका: अर्धी फेरी arm ला उलट दिशेला नेते.`,
      ],
    },
    {
      title: t`दोन sign conditions`,
      points: [
        t`**Sign condition** (चिन्हाची अट) सांगते की एखादे function धन आहे की ऋण, जसे $\sin\theta < 0$.`,
        t`प्रत्येक अट दोन quadrants मध्ये खरी असते: $\sin\theta < 0$, Quadrants III आणि IV मध्ये, जिथे $y < 0$.`,
        t`आणि $\tan\theta > 0$, Quadrants I आणि III मध्ये, जिथे $x$ आणि $y$ ची चिन्हे सारखी आहेत.`,
        t`दोन अटी दिल्या असतील तर $\theta$ त्या दोघांच्या सामाईक quadrant मध्ये असतो.`,
        t`इथे दोन्ही फक्त Quadrant III मध्ये खऱ्या आहेत, म्हणून $\theta$ Quadrant III मध्ये आहे.`,
      ],
    },
  ],
  worked: {
    prompt: t`कोणते मोठे आहे, $\sin 1856^\circ$ की $\sin 2006^\circ$?`,
    steps: [
      t`$1856^\circ = 5 \times 360^\circ + 56^\circ$: हा $56^\circ$ शी coterminal आहे, Quadrant I मध्ये. तिथे $y > 0$, म्हणून $\sin 1856^\circ = \frac{y}{r} > 0$.`,
      t`$2006^\circ = 5 \times 360^\circ + 206^\circ$: हा $206^\circ$ शी coterminal आहे, Quadrant III मध्ये. तिथे $y < 0$, म्हणून $\sin 2006^\circ < 0$.`,
      t`धन संख्या ऋण संख्येपेक्षा मोठी असते.`,
    ],
    answer: t`$\sin 1856^\circ$ मोठे आहे.`,
  },
  remediation: {
    "C02-M1": t`$\sin\theta = \frac{y}{r}$ आणि $\cos\theta = \frac{x}{r}$: sin आणि cosec ला $y$ चे चिन्ह, cos आणि sec ला $x$ चे चिन्ह. Quadrant II मध्ये $x < 0 < y$, म्हणून sin धन आहे आणि cos ऋण.`,
    "C02-M2": t`Quadrant I पासून anticlockwise क्रम आहे All, Sin, Tan, Cos. Quadrant III मध्ये $x$ आणि $y$ दोन्ही ऋण आहेत, म्हणून $\frac{y}{x}$ धन आहे: tan आणि cot. Quadrant IV मध्ये फक्त $x$ धन आहे: cos आणि sec.`,
    "C02-M3": t`Reciprocal चिन्ह बदलत नाही, कारण $\frac{1}{\text{a negative}}$ ऋण असते. cosec ला sin चे चिन्ह, sec ला cos चे, आणि cot ला tan चे चिन्ह असते.`,
    "C02-M4": t`$0^\circ$ आणि $90^\circ$ यांच्या दरम्यानचा angle आधीच Quadrant I मध्ये असतो, म्हणून $n$ पूर्ण काटकोनांनंतर arm quadrant $n + 1$ मध्ये असते. उदाहरणार्थ, $270^\circ < 315^\circ < 360^\circ$, म्हणून $315^\circ$ Quadrant IV मध्ये आहे.`,
    "C02-M5": t`फक्त $360^\circ$ ची पूर्ण फेरी arm ला त्याच जागी परत आणते; $180^\circ$ ची अर्धी फेरी तिला समोरच्या quadrant मध्ये नेते. फक्त $360^\circ$ च्या पटी वजा करा.`,
    "C02-M6": t`$4^c$ म्हणजे 4 radians, आणि $1^c = \frac{180^\circ}{\pi} \approx 57.3^\circ$, म्हणून $4^c \approx 229^\circ$. Radian मधील angle ची तुलना $\frac{\pi}{2} \approx 1.57$, $\pi \approx 3.14$ आणि $\frac{3\pi}{2} \approx 4.71$ शी करा.`,
  },
  solutions: {
    "C02-Q1": [
      t`$270^\circ < 300^\circ < 360^\circ$, म्हणून $300^\circ$ ची terminal arm Quadrant IV मध्ये आहे. तिने तीन काटकोन पार केले आहेत, म्हणून ती चौथ्या quadrant मध्ये आहे.`,
      t`Quadrant IV मध्ये $y < 0$ आणि $r > 0$, म्हणून $\sin 300^\circ = \frac{y}{r}$ ऋण आहे. Quadrant IV, ऋण.`,
    ],
    "C02-Q2": [
      t`$640^\circ = 360^\circ + 280^\circ$. पूर्ण फेरी काढून टाका: $640^\circ$ हा $280^\circ$ शी coterminal आहे.`,
      t`$270^\circ < 280^\circ < 360^\circ$, म्हणून arm Quadrant IV मध्ये आहे, जिथे $x > 0$.`,
      t`$\sec 640^\circ = \frac{r}{x}$, जिथे $r > 0$ आणि $x > 0$, म्हणून ते धन आहे. Quadrant IV, धन.`,
    ],
    "C02-Q3": [
      t`$600^\circ = 360^\circ + 240^\circ$. पूर्ण फेरी काढून टाका: $600^\circ$ हा $240^\circ$ शी coterminal आहे.`,
      t`$180^\circ < 240^\circ < 270^\circ$, म्हणून arm Quadrant III मध्ये आहे, जिथे $y < 0$.`,
      t`$\operatorname{cosec} 600^\circ = \frac{r}{y}$, जिथे $r > 0$ आणि $y < 0$, म्हणून ते ऋण आहे, $\sin 600^\circ$ सारख्याच चिन्हाचे. Quadrant III, ऋण.`,
    ],
    "C02-Q4": [
      t`$1999^\circ = 5 \times 360^\circ + 199^\circ$. पाचही पूर्ण फेऱ्या काढून टाका: $1999^\circ$ हा $199^\circ$ शी coterminal आहे.`,
      t`$180^\circ < 199^\circ < 270^\circ$, म्हणून arm Quadrant III मध्ये आहे, जिथे $x < 0$ आणि $y < 0$.`,
      t`$\cot 1999^\circ = \frac{x}{y}$ म्हणजे ऋण भागिले ऋण, म्हणून ते धन आहे: Quadrant III मध्ये tan आणि cot ही धन जोडी आहे. Quadrant III, धन.`,
    ],
    "C02-Q5": [
      t`$4^c = 4 \times \frac{180^\circ}{\pi} \approx 229^\circ$. Radians मध्ये: $\pi \approx 3.14 < 4 < 4.71 \approx \frac{3\pi}{2}$.`,
      t`$180^\circ < 229^\circ < 270^\circ$, म्हणून $4^c$ ची arm Quadrant III मध्ये आहे, जिथे $x < 0$. म्हणून $\cos 4^c = \frac{x}{r}$ ऋण आहे. Quadrant III, ऋण.`,
      t`$4^\circ$ हा Quadrant I मध्ये आहे, म्हणून $\cos 4^\circ > 0 > \cos 4^c$: दोघांपैकी $\cos 4^\circ$ मोठे आहे.`,
    ],
    "C02-Q6": [
      t`$\cos\theta = \frac{x}{r} > 0$ म्हणजे $x > 0$: Quadrant I किंवा IV.`,
      t`$\cot\theta = \frac{x}{y} < 0$ म्हणजे $x$ आणि $y$ ची चिन्हे उलट आहेत: Quadrant II किंवा IV.`,
      t`दोन्ही फक्त Quadrant IV मध्ये खऱ्या आहेत, म्हणून $\theta$ Quadrant IV मध्ये आहे.`,
    ],
  },
};
