import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c02: ConceptTranslation = {
  id: "C02",
  lang: "hi",
  status: "approved",
  source: "106df773c3c4f8",
  hook: {
    prompt: t`$\theta = 200^\circ$ पर, **छह trigonometric functions में से कितने धनात्मक हैं?**`,
    reveal: t`दो। $200^\circ$ की arm Quadrant III में है, जहाँ उस पर के बिंदु के लिए $x < 0$ और $y < 0$, जबकि $r > 0$। इसलिए $\sin\theta = \frac{y}{r}$ और $\cos\theta = \frac{x}{r}$ ऋणात्मक हैं, और cosec और sec भी। पर $\tan\theta = \frac{y}{x}$ ऋणात्मक बटा ऋणात्मक है: धनात्मक, और $\cot\theta$ भी।`,
  },
  intuition: [
    t`किसी संख्या का **sign** (चिह्न) बताता है कि वह धनात्मक, $+$, है या ऋणात्मक, $-$।`,
    t`एक angle $\theta$ को standard position में रखिए, और उसकी terminal arm पर कोई भी बिंदु $P(x, y)$ चुनिए।`,
    t`Origin से उसकी दूरी, $r = OP$, हमेशा धनात्मक होती है।`,
    t`इसलिए हर trigonometric function का चिह्न केवल $x$ और $y$ के चिह्नों से आता है।`,
    t`जब arm घूमकर अगले quadrant में जाती है, तो $x$ या $y$ का चिह्न बदलता है, और उसके साथ कुछ functions का चिह्न भी।`,
  ],
  formal: [
    {
      title: t`x और y के चिह्न`,
      points: [
        t`जब terminal arm Quadrant I में हो, तो उस पर के बिंदु के लिए $x > 0$ और $y > 0$।`,
        t`Quadrant II में, $x < 0$ और $y > 0$ होते हैं।`,
        t`Quadrant III में, $x < 0$ और $y < 0$ होते हैं।`,
        t`Quadrant IV में, $x > 0$ और $y < 0$ होते हैं।`,
      ],
    },
    {
      title: t`हर function का चिह्न`,
      points: [
        t`$\sin\theta = \frac{y}{r}$ और $\operatorname{cosec}\theta = \frac{r}{y}$ का चिह्न $y$ वाला होता है, क्योंकि $r > 0$।`,
        t`$\cos\theta = \frac{x}{r}$ और $\sec\theta = \frac{r}{x}$ का चिह्न $x$ वाला होता है।`,
        t`$\tan\theta = \frac{y}{x}$ और $\cot\theta = \frac{x}{y}$ तब धनात्मक होते हैं जब $x$ और $y$ के चिह्न एक जैसे हों।`,
        t`जब $x$ और $y$ के चिह्न उलटे हों, तब वे ऋणात्मक होते हैं।`,
        t`इसलिए reciprocal, जैसे $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, का चिह्न हमेशा अपने जोड़ीदार वाला होता है।`,
      ],
    },
    {
      title: t`All Sin Tan Cos (याद रखने का तरीका)`,
      points: [
        t`वाक्यांश **All Sin Tan Cos** बताता है कि Quadrant I से anticlockwise चलते हुए कौन-से functions धनात्मक हैं।`,
        t`Quadrant I में सभी छह functions धनात्मक हैं।`,
        t`Quadrant II में केवल sin और cosec धनात्मक हैं।`,
        t`Quadrant III में केवल tan और cot धनात्मक हैं।`,
        t`Quadrant IV में केवल cos और sec धनात्मक हैं।`,
        t`हर quadrant में बाकी functions ऋणात्मक होते हैं।`,
      ],
    },
    {
      title: t`Angle किस quadrant में है`,
      points: [
        t`$0^\circ$ और $90^\circ$ के बीच, terminal arm Quadrant I में होती है।`,
        t`$90^\circ$ और $180^\circ$ के बीच, वह Quadrant II में होती है।`,
        t`$180^\circ$ और $270^\circ$ के बीच, वह Quadrant III में होती है।`,
        t`$270^\circ$ और $360^\circ$ के बीच, वह Quadrant IV में होती है।`,
        t`Radians में, quadrants के बीच के अक्ष $\frac{\pi}{2} \approx 1.57$, $\pi \approx 3.14$ और $\frac{3\pi}{2} \approx 4.71$ पर हैं।`,
      ],
    },
    {
      title: t`पूरे चक्कर हटाना`,
      points: [
        t`एक पूरा चक्कर, $360^\circ$, arm को वहीं वापस ले आता है जहाँ से वह चली थी।`,
        t`इसलिए पहले पूरे चक्कर **drop** कीजिए (घटा दीजिए): वे quadrant नहीं बदलते।`,
        t`उदाहरण के लिए, $400^\circ = 360^\circ + 40^\circ$ वहीं रुकता है जहाँ $40^\circ$, Quadrant I में।`,
        t`$180^\circ$ कभी मत हटाइए: आधा चक्कर arm को उलटी दिशा में कर देता है।`,
      ],
    },
    {
      title: t`दो sign conditions`,
      points: [
        t`**Sign condition** (चिह्न की शर्त) बताती है कि कोई function धनात्मक है या ऋणात्मक, जैसे $\sin\theta < 0$।`,
        t`हर शर्त दो quadrants में सही होती है: $\sin\theta < 0$, Quadrants III और IV में, जहाँ $y < 0$।`,
        t`और $\tan\theta > 0$, Quadrants I और III में, जहाँ $x$ और $y$ के चिह्न एक जैसे हैं।`,
        t`दो शर्तें दी हों, तो $\theta$ उस quadrant में है जो दोनों में साझा है।`,
        t`यहाँ दोनों केवल Quadrant III में सही हैं, इसलिए $\theta$ Quadrant III में है।`,
      ],
    },
  ],
  worked: {
    prompt: t`कौन बड़ा है, $\sin 1856^\circ$ या $\sin 2006^\circ$?`,
    steps: [
      t`$1856^\circ = 5 \times 360^\circ + 56^\circ$: यह $56^\circ$ के साथ coterminal है, Quadrant I में। वहाँ $y > 0$, इसलिए $\sin 1856^\circ = \frac{y}{r} > 0$।`,
      t`$2006^\circ = 5 \times 360^\circ + 206^\circ$: यह $206^\circ$ के साथ coterminal है, Quadrant III में। वहाँ $y < 0$, इसलिए $\sin 2006^\circ < 0$।`,
      t`धनात्मक संख्या ऋणात्मक संख्या से बड़ी होती है।`,
    ],
    answer: t`$\sin 1856^\circ$ बड़ा है।`,
  },
  remediation: {
    "C02-M1": t`$\sin\theta = \frac{y}{r}$ और $\cos\theta = \frac{x}{r}$: sin और cosec का चिह्न $y$ वाला, cos और sec का चिह्न $x$ वाला। Quadrant II में $x < 0 < y$, इसलिए sin धनात्मक है और cos ऋणात्मक।`,
    "C02-M2": t`Quadrant I से anticlockwise क्रम है All, Sin, Tan, Cos। Quadrant III में $x$ और $y$ दोनों ऋणात्मक हैं, इसलिए $\frac{y}{x}$ धनात्मक है: tan और cot। Quadrant IV में केवल $x$ धनात्मक है: cos और sec।`,
    "C02-M3": t`Reciprocal चिह्न नहीं बदलता, क्योंकि $\frac{1}{\text{a negative}}$ ऋणात्मक है। cosec का चिह्न sin वाला, sec का cos वाला, और cot का tan वाला होता है।`,
    "C02-M4": t`$0^\circ$ और $90^\circ$ के बीच का angle पहले से Quadrant I में है, इसलिए $n$ पूरे समकोणों के बाद arm quadrant $n + 1$ में होती है। उदाहरण के लिए, $270^\circ < 315^\circ < 360^\circ$, इसलिए $315^\circ$ Quadrant IV में है।`,
    "C02-M5": t`केवल $360^\circ$ का पूरा चक्कर arm को उसी जगह वापस लाता है; $180^\circ$ का आधा चक्कर उसे सामने वाले quadrant में ले जाता है। केवल $360^\circ$ के गुणज घटाइए।`,
    "C02-M6": t`$4^c$ का अर्थ है 4 radians, और $1^c = \frac{180^\circ}{\pi} \approx 57.3^\circ$, इसलिए $4^c \approx 229^\circ$। Radian वाले angle की तुलना $\frac{\pi}{2} \approx 1.57$, $\pi \approx 3.14$ और $\frac{3\pi}{2} \approx 4.71$ से कीजिए।`,
  },
  solutions: {
    "C02-Q1": [
      t`$270^\circ < 300^\circ < 360^\circ$, इसलिए $300^\circ$ की terminal arm Quadrant IV में है। वह तीन समकोण पार कर चुकी है, इसलिए चौथे quadrant में है।`,
      t`Quadrant IV में $y < 0$ और $r > 0$, इसलिए $\sin 300^\circ = \frac{y}{r}$ ऋणात्मक है। Quadrant IV, ऋणात्मक।`,
    ],
    "C02-Q2": [
      t`$640^\circ = 360^\circ + 280^\circ$। पूरा चक्कर हटाइए: $640^\circ$, $280^\circ$ के साथ coterminal है।`,
      t`$270^\circ < 280^\circ < 360^\circ$, इसलिए arm Quadrant IV में है, जहाँ $x > 0$।`,
      t`$\sec 640^\circ = \frac{r}{x}$, जहाँ $r > 0$ और $x > 0$, इसलिए यह धनात्मक है। Quadrant IV, धनात्मक।`,
    ],
    "C02-Q3": [
      t`$600^\circ = 360^\circ + 240^\circ$। पूरा चक्कर हटाइए: $600^\circ$, $240^\circ$ के साथ coterminal है।`,
      t`$180^\circ < 240^\circ < 270^\circ$, इसलिए arm Quadrant III में है, जहाँ $y < 0$।`,
      t`$\operatorname{cosec} 600^\circ = \frac{r}{y}$, जहाँ $r > 0$ और $y < 0$, इसलिए यह ऋणात्मक है, $\sin 600^\circ$ जैसे ही चिह्न वाला। Quadrant III, ऋणात्मक।`,
    ],
    "C02-Q4": [
      t`$1999^\circ = 5 \times 360^\circ + 199^\circ$। पाँचों पूरे चक्कर हटाइए: $1999^\circ$, $199^\circ$ के साथ coterminal है।`,
      t`$180^\circ < 199^\circ < 270^\circ$, इसलिए arm Quadrant III में है, जहाँ $x < 0$ और $y < 0$।`,
      t`$\cot 1999^\circ = \frac{x}{y}$ ऋणात्मक बटा ऋणात्मक है, इसलिए धनात्मक है: Quadrant III में tan और cot धनात्मक जोड़ी हैं। Quadrant III, धनात्मक।`,
    ],
    "C02-Q5": [
      t`$4^c = 4 \times \frac{180^\circ}{\pi} \approx 229^\circ$। Radians में: $\pi \approx 3.14 < 4 < 4.71 \approx \frac{3\pi}{2}$।`,
      t`$180^\circ < 229^\circ < 270^\circ$, इसलिए $4^c$ की arm Quadrant III में है, जहाँ $x < 0$। इसलिए $\cos 4^c = \frac{x}{r}$ ऋणात्मक है। Quadrant III, ऋणात्मक।`,
      t`$4^\circ$ Quadrant I में है, इसलिए $\cos 4^\circ > 0 > \cos 4^c$: दोनों में $\cos 4^\circ$ बड़ा है।`,
    ],
    "C02-Q6": [
      t`$\cos\theta = \frac{x}{r} > 0$ का अर्थ है $x > 0$: Quadrant I या IV।`,
      t`$\cot\theta = \frac{x}{y} < 0$ का अर्थ है $x$ और $y$ के चिह्न उलटे हैं: Quadrant II या IV।`,
      t`दोनों केवल Quadrant IV में सही हैं, इसलिए $\theta$ Quadrant IV में है।`,
    ],
  },
};
