import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c04: ConceptTranslation = {
  id: "C04",
  lang: "hi",
  status: "approved",
  source: "10b5e5a2afde68",
  hook: {
    prompt: t`Calculator के बिना: $\sin 1830^\circ$, $\sin 30^\circ$ से बड़ा है या छोटा?`,
    reveal: t`कोई नहीं: दोनों बराबर हैं। $1830^\circ = 5 \times 360^\circ + 30^\circ$। पाँच पूरे चक्कर arm को वहीं वापस ले आते हैं जहाँ से वह चली थी, फिर वह $30^\circ$ और घूमती है। वही arm, वही बिंदु $P$, इसलिए $\sin 1830^\circ = \sin 30^\circ = \frac{1}{2}$।`,
  },
  intuition: [
    t`Angle घुमाव को मापता है: यहाँ arm, initial arm से $50^\circ$ घूमती है।`,
    t`एक **whole turn** (पूरा चक्कर), $360^\circ$ या $2\pi$, arm को वहीं वापस ले आता है जहाँ से वह चली थी।`,
    t`इसलिए उस पर का बिंदु $P(x, y)$ भी वापस आ जाता है, और छहों functions दोहराते हैं।`,
    t`इसीलिए हम पहले पूरे चक्कर हटाते हैं।`,
    t`**Negative angle** (ऋणात्मक angle) **clockwise** घूमता है, जैसे घड़ी की सुइयाँ: $-50^\circ$, $x$-अक्ष के नीचे रुकता है।`,
    t`उसकी arm, $50^\circ$ वाली arm का $x$-अक्ष में प्रतिबिंब है, उसकी **mirror image** (दर्पण प्रतिबिंब): $x$ वही रहता है, $y$ का चिह्न बदलता है।`,
  ],
  formal: [
    {
      title: t`पूरे चक्कर हटाइए`,
      points: [
        t`$2n\pi$ जोड़ना, जहाँ $n$ कोई भी पूर्णांक है, $n$ पूरे चक्कर जोड़ता है।`,
        t`Arm वहीं रुकती है जहाँ थी, उसी बिंदु $P$ पर, इसलिए $\sin(2n\pi + \theta) = \sin\theta$।`,
        t`इसी तरह, $\cos(2n\pi + \theta) = \cos\theta$।`,
        t`यही cosec और sec के लिए भी सही है।`,
        t`Tan और cot जल्दी दोहराते हैं, हर $\pi$ पर: $\tan(n\pi + \theta) = \tan\theta$।`,
        t`आधा चक्कर $x$ और $y$ दोनों के चिह्न बदल देता है, इसलिए $\tan\theta = \frac{y}{x}$ वही रहता है।`,
      ],
    },
    {
      title: t`Degrees और radians में पूरे चक्कर`,
      points: [
        t`Degrees में, $360^\circ$ के गुणज घटाइए।`,
        t`उदाहरण के लिए, $765^\circ = 2 \times 360^\circ + 45^\circ$: दो पूरे चक्कर और $45^\circ$ और।`,
        t`इसलिए $\cos 765^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$।`,
        t`Radians में, $2\pi$ के गुणज घटाइए: $\frac{41\pi}{4} = 10\pi + \frac{\pi}{4}$।`,
        t`इसलिए $\sin\frac{41\pi}{4} = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$।`,
      ],
    },
    {
      title: t`ऋणात्मक angles`,
      points: [
        t`$\theta$ की arm पर एक बिंदु $P(x, y)$ लीजिए, जो $O$ से $r$ दूरी पर है।`,
        t`उसका दर्पण प्रतिबिंब $(x, -y)$, $-\theta$ की arm पर है, वह भी $O$ से $r$ दूरी पर।`,
        t`इसलिए $\sin(-\theta) = \frac{-y}{r} = -\sin\theta$।`,
        t`और $\cos(-\theta) = \frac{x}{r} = \cos\theta$: $x$ नहीं बदलता।`,
        t`और $\tan(-\theta) = \frac{-y}{x} = -\tan\theta$।`,
        t`इसलिए cosec और cot का चिह्न भी बदलता है; sec का नहीं।`,
      ],
    },
    {
      title: t`Reference angle (संदर्भ कोण)`,
      points: [
        t`पहले पूरे चक्कर हटाइए, ताकि angle $\theta$, $0^\circ$ और $360^\circ$ के बीच आ जाए।`,
        t`उसका **reference angle**, उसकी arm और $x$-अक्ष के बीच का न्यून angle है, जो $90^\circ$ से कम होता है।`,
        t`Quadrant II में, reference angle $180^\circ - \theta$ है।`,
        t`Quadrant III में, यह $\theta - 180^\circ$ है।`,
        t`Quadrant IV में, यह $360^\circ - \theta$ है।`,
      ],
    },
    {
      title: t`Reference angle और चिह्न`,
      points: [
        t`मान वही होता है जो reference angle पर, quadrant के चिह्न के साथ।`,
        t`उदाहरण के लिए, $240^\circ$ quadrant III में है।`,
        t`उसका reference angle $240^\circ - 180^\circ = 60^\circ$ है।`,
        t`Quadrant III में, जहाँ $y < 0$, sin ऋणात्मक है।`,
        t`इसलिए $\sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$।`,
      ],
    },
    {
      title: t`केवल पूरे चक्कर`,
      points: [
        t`केवल पूरा चक्कर arm को उसी जगह वापस लाता है।`,
        t`चौथाई चक्कर, $90^\circ$, arm को दूसरे quadrant में ले जाता है।`,
        t`इसलिए $90^\circ$ को $360^\circ$ की तरह नहीं हटाया जा सकता।`,
        t`आधा चक्कर, $180^\circ$, भी नहीं हटाया जा सकता, tan और cot को छोड़कर।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\cos(-480^\circ)$ ज्ञात कीजिए।`,
    steps: [
      t`ऋणात्मक angle के लिए cos का चिह्न नहीं बदलता: $\cos(-480^\circ) = \cos 480^\circ$।`,
      t`एक पूरा चक्कर हटाइए: $480^\circ = 360^\circ + 120^\circ$, इसलिए $\cos 480^\circ = \cos 120^\circ$।`,
      t`$120^\circ$ quadrant II में है। उसका reference angle $180^\circ - 120^\circ = 60^\circ$ है।`,
      t`Quadrant II में cos ऋणात्मक है: $\cos 120^\circ = -\cos 60^\circ$ $= -\frac{1}{2}$।`,
    ],
    answer: t`$\cos(-480^\circ) = -\frac{1}{2}$`,
  },
  remediation: {
    "C04-M1": t`Reference angle केवल आकार देता है। चिह्न उस quadrant से लीजिए जहाँ arm रुकती है: quadrant III में केवल tan और cot धनात्मक हैं, इसलिए $\sin 240^\circ = -\sin 60^\circ$।`,
    "C04-M2": t`ऋणात्मक angle clockwise घूमता है, इसलिए $P(x, y)$, $(x, -y)$ बन जाता है। Sin, tan, cosec और cot का चिह्न बदलता है: $\sin(-\theta) = -\sin\theta$। केवल cos और sec वही रहते हैं।`,
    "C04-M3": t`Clockwise घूमने से केवल $y$ पलटता है; $x$ वही रहता है। इसलिए $\cos(-\theta) = \cos\theta$ और $\sec(-\theta) = \sec\theta$। केवल sin, tan, cosec और cot का चिह्न बदलता है।`,
    "C04-M4": t`Reference angle **$x$-अक्ष** से बना न्यून angle है: quadrant II में $180^\circ - \theta$, III में $\theta - 180^\circ$, IV में $360^\circ - \theta$। $120^\circ$ के लिए यह $60^\circ$ है, $30^\circ$ नहीं।`,
    "C04-M5": t`केवल पूरा चक्कर ($360^\circ$ या $2\pi$) arm को उसी जगह वापस लाता है, इसलिए केवल पूरे चक्कर हटाए जा सकते हैं। चौथाई चक्कर arm को अगले quadrant में ले जाता है और मान बदल देता है।`,
    "C04-M6": t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ और $\sec\theta = \frac{1}{\cos\theta}$। पहले sin या cos, चिह्न सहित, निकालिए, फिर उसे उलटिए।`,
  },
  solutions: {
    "C04-Q1": [
      t`$150^\circ$ quadrant II में है। उसका reference angle $180^\circ - 150^\circ = 30^\circ$ है।`,
      t`Quadrant II में cos ऋणात्मक है।`,
      t`इसलिए $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$।`,
    ],
    "C04-Q2": [
      t`पूरा चक्कर हटाइए: $\frac{23\pi}{6} = 2\pi + \frac{11\pi}{6}$, इसलिए $\sin\frac{23\pi}{6} = \sin\frac{11\pi}{6}$।`,
      t`$\frac{11\pi}{6}$ ($330^\circ$) quadrant IV में है। उसका reference angle $2\pi - \frac{11\pi}{6} = \frac{\pi}{6}$ है।`,
      t`Quadrant IV में sin ऋणात्मक है: $\sin\frac{23\pi}{6} = -\sin\frac{\pi}{6} = -\frac{1}{2}$।`,
    ],
    "C04-Q3": [
      t`पूरे चक्कर हटाइए: $1200^\circ = 3 \times 360^\circ + 120^\circ$, इसलिए $\tan 1200^\circ = \tan 120^\circ$।`,
      t`$120^\circ$ quadrant II में है। उसका reference angle $60^\circ$ है, और वहाँ tan ऋणात्मक है।`,
      t`इसलिए $\tan 1200^\circ = -\tan 60^\circ = -\sqrt{3}$।`,
    ],
    "C04-Q4": [
      t`Angle के साथ cosec का चिह्न बदलता है: $\operatorname{cosec}(-210^\circ) = -\operatorname{cosec} 210^\circ$।`,
      t`$210^\circ$ quadrant III में है, reference angle $30^\circ$। वहाँ sin और cosec ऋणात्मक हैं: $\operatorname{cosec} 210^\circ = -\operatorname{cosec} 30^\circ = -2$।`,
      t`इसलिए $\operatorname{cosec}(-210^\circ) = -(-2) = 2$।`,
    ],
    "C04-Q5": [
      t`ऋणात्मक angle के लिए sec का चिह्न नहीं बदलता: $\sec(-330^\circ) = \sec 330^\circ$।`,
      t`$330^\circ$ quadrant IV में है, reference angle $360^\circ - 330^\circ = 30^\circ$। वहाँ cos और sec धनात्मक हैं।`,
      t`इसलिए $\sec 330^\circ = \frac{1}{\cos 30^\circ} = \frac{1}{\sqrt{3}/2} = \frac{2}{\sqrt{3}}$।`,
    ],
    "C04-Q6": [
      t`$300^\circ$ quadrant IV में है। उसका reference angle $360^\circ - 300^\circ = 60^\circ$ है।`,
      t`Quadrant IV में sin ऋणात्मक है: $\sin 300^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$।`,
      t`इसलिए $\operatorname{cosec} 300^\circ = \frac{1}{\sin 300^\circ} = -\frac{2}{\sqrt{3}}$।`,
    ],
  },
};
