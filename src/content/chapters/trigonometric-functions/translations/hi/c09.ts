import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "hi",
  status: "approved",
  source: "126a312fc820c9",
  hook: {
    prompt: t`क्या कोई angle है जिसके लिए $\sec\theta = \frac{1}{2}$? और कोई जिसके लिए $\tan\theta = 100$?`,
    reveal: t`किसी angle के लिए $\sec\theta = \frac{1}{2}$ नहीं होता: $\sec\theta = \frac{r}{x}$ और आकार में $x$ कभी $r$ से बड़ा नहीं होता, इसलिए $\sec\theta$ कभी $-1$ और $1$ के बीच नहीं होता। पर $\tan\theta = 100$ ठीक है: बिंदु $(1, 100)$ लीजिए, तब $\tan\theta = \frac{y}{x} = 100$। हर function की अपनी **range** (परिसर) होती है।`,
  },
  intuition: [
    t`$\theta$ की terminal arm पर एक बिंदु $P(x, y)$ लीजिए, जो origin $O$ से $r$ दूरी पर है।`,
    t`हर निर्देशांक, आकार में (चिह्न को छोड़कर), एक समकोण त्रिभुज की भुजा है जिसकी सबसे लंबी भुजा $r$ है।`,
    t`इसलिए $\sin\theta = \frac{y}{r}$ और $\cos\theta = \frac{x}{r}$ हमेशा $-1$ और $1$ के बीच होते हैं, सिरों सहित।`,
    t`उनके **reciprocals**, यानी वही भिन्न उलटे, $\operatorname{cosec}\theta = \frac{r}{y}$ और $\sec\theta = \frac{r}{x}$, आकार में कम से कम $1$ होते हैं।`,
    t`पर $\tan\theta = \frac{y}{x}$ की कोई सीमा नहीं: $y$-अक्ष के पास $x$ बहुत छोटा होता है और $\frac{y}{x}$ बहुत बड़ा।`,
    t`एक पूरा चक्कर, $2\pi$, $P$ को उसी जगह वापस लाता है, इसलिए हर मान $2\pi$ के बाद दोहराता है।`,
  ],
  formal: [
    {
      title: t`Sine और cosine की range`,
      points: [
        t`किसी function की **range** उन सभी मानों का समुच्चय है जो वह लेता है।`,
        t`जैसे-जैसे $\theta$, $0$ से $2\pi$ तक जाता है, $\sin\theta$, $-1$ और $1$ के बीच ऊपर-नीचे होता है।`,
        t`इसका सबसे बड़ा मान $\sin\frac{\pi}{2} = \sin 90^\circ = 1$ है।`,
        t`इसका सबसे छोटा मान $\sin\frac{3\pi}{2} = \sin 270^\circ = -1$ है।`,
        t`इसलिए $\sin\theta$ की range $-1 \le \sin\theta \le 1$ है, दोनों सिरे शामिल।`,
        t`इसी तरह $-1 \le \cos\theta \le 1$, जहाँ $\cos 0^\circ = 1$ और $\cos 180^\circ = -1$।`,
      ],
    },
    {
      title: t`Secant और cosecant की range`,
      points: [
        t`$\sec\theta = \frac{1}{\cos\theta}$, $\cos\theta$ का reciprocal है।`,
        t`$\cos\theta$, $-1$ से $1$ की पट्टी में रहता है।`,
        t`उस पट्टी की किसी संख्या से एक को भाग देने पर आकार में कम से कम $1$ मिलता है: $\frac{1}{0.5} = 2$।`,
        t`इसलिए $\sec\theta \le -1$ या $\sec\theta \ge 1$: इसका graph कभी पट्टी में नहीं आता।`,
        t`जहाँ $\cos\theta = 0$, यानी $\frac{\pi}{2}$ और $\frac{3\pi}{2}$ पर, $\sec\theta$ परिभाषित नहीं है: हम $0$ से भाग नहीं दे सकते।`,
        t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ भी ऐसा ही है: $\operatorname{cosec}\theta \le -1$ या $\operatorname{cosec}\theta \ge 1$।`,
      ],
    },
    {
      title: t`Tangent और cotangent की range`,
      points: [
        t`जैसे-जैसे $\theta$, $0$ से $\frac{\pi}{2}$ की ओर बढ़ता है, $\tan\theta$ आपकी कही किसी भी संख्या से आगे निकल जाता है।`,
        t`जैसे-जैसे $\theta$, $0$ से $-\frac{\pi}{2}$ की ओर घटता है, $\tan\theta$ किसी भी संख्या से नीचे चला जाता है।`,
        t`$\theta = \pm\frac{\pi}{2}$ पर $x = 0$, इसलिए $\tan\theta = \frac{y}{x}$ परिभाषित नहीं है।`,
        t`हर क्षैतिज रेखा, जैसे $y = 2$ या $y = -1$, graph से मिलती है।`,
        t`इसलिए $\tan\theta$ हर वास्तविक मान लेता है, धनात्मक या ऋणात्मक, बड़ा या छोटा।`,
        t`$\cot\theta = \frac{x}{y}$ भी हर वास्तविक मान लेता है।`,
      ],
    },
    {
      title: t`असंभव मूलों को छोड़ना`,
      points: [
        t`कुछ समीकरण एक function में द्विघात बन जाते हैं, जैसे $\cos\theta$ में।`,
        t`उदाहरण के लिए, $3\cos^2\theta + 5\cos\theta - 2 = 0$।`,
        t`इसके गुणनखंड होते हैं: $(3\cos\theta - 1)(\cos\theta + 2) = 0$।`,
        t`इसलिए $\cos\theta = \frac{1}{3}$ या $\cos\theta = -2$।`,
        t`हर मूल को उस function की range से जाँचिए: यहाँ $\cos\theta$, $-1$ से $1$ तक है।`,
        t`Range के बाहर का मूल कोई angle नहीं देता: $-2$ छोड़िए, $\frac{1}{3}$ रखिए।`,
      ],
    },
    {
      title: t`न्यूनतम मान`,
      points: [
        t`किसी व्यंजक का **least value** (न्यूनतम मान) वह सबसे छोटा मान है जो वह सच में लेता है।`,
        t`$\tan\theta$ और $\cot\theta$ बँधे हुए हैं: $\tan\theta \cot\theta = 1$, इसलिए दोनों कभी एक साथ $0$ नहीं होते।`,
        t`क्योंकि $2\tan\theta\cot\theta = 2$, $\tan^2\theta + \cot^2\theta$ $= (\tan\theta - \cot\theta)^2 + 2$।`,
        t`वर्ग कभी ऋणात्मक नहीं होता, इसलिए $\tan^2\theta + \cot^2\theta \ge 2$।`,
        t`यह $2$ के बराबर तब होता है जब $\tan\theta = \cot\theta$, यानी $45^\circ$ पर: न्यूनतम मान $2$ है, $0$ नहीं।`,
        t`$\sin^2\theta + \cos^2\theta = 1$ लगाकर, $1 - 2\sin\theta\cos\theta$ $= (\sin\theta - \cos\theta)^2 \ge 0$।`,
      ],
    },
    {
      title: t`Sine और cosine का period`,
      points: [
        t`कोई function **periodic** (आवर्ती) होता है जब उसके मान $\theta$ में एक निश्चित कदम के बाद दोहराते हैं।`,
        t`ऐसा सबसे छोटा कदम उसका **period** (आवर्तकाल) है।`,
        t`एक पूरा चक्कर, $2\pi$, terminal arm को वापस ले आता है, इसलिए $\sin(\theta + 2\pi) = \sin\theta$।`,
        t`इसलिए $\sin\theta$ का graph हर $2\pi$ पर दोहराता है: इसका period $2\pi$ है।`,
        t`इसी तरह, $\cos(\theta + 2\pi) = \cos\theta$: $\cos\theta$ का period भी $2\pi$ है।`,
        t`उनके reciprocals, $\operatorname{cosec}\theta$ और $\sec\theta$, का भी।`,
      ],
    },
    {
      title: t`Tangent का period`,
      points: [
        t`आधा चक्कर, $\pi$, terminal arm पर के $P(x, y)$ को सामने वाले बिंदु $P'(-x, -y)$ पर ले जाता है।`,
        t`दोनों निर्देशांकों का चिह्न बदलता है, इसलिए $\frac{-y}{-x} = \frac{y}{x}$।`,
        t`इसलिए $\tan(\theta + \pi) = \tan\theta$: $\tan\theta$ केवल $\pi$ के बाद ही दोहराता है।`,
        t`$\tan\theta$ का period $\pi$ है, $2\pi$ नहीं।`,
        t`$\cot\theta = \frac{x}{y}$ भी नहीं बदलता, इसलिए इसका period भी $\pi$ है।`,
      ],
    },
    {
      title: t`Period का उपयोग`,
      points: [
        t`पूरे चक्कर, यानी $2\pi$ के गुणज, जोड़ने या हटाने से $\sin\theta$ नहीं बदलता।`,
        t`उदाहरण के लिए, $\sin\frac{41\pi}{4}$ लीजिए।`,
        t`पूरे चक्कर अलग कीजिए: $\frac{41\pi}{4} = 10\pi + \frac{\pi}{4}$, और $10\pi$ यानी $5$ पूरे चक्कर।`,
        t`इसलिए $\sin\frac{41\pi}{4} = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $2\sin^2\theta + 7\cos\theta = 5$, तो $\cos\theta$ के संभव मान ज्ञात कीजिए।`,
    steps: [
      t`सब कुछ $\cos\theta$ में लिखिए: $2(1 - \cos^2\theta) + 7\cos\theta = 5$।`,
      t`व्यवस्थित कीजिए: $2\cos^2\theta - 7\cos\theta + 3 = 0$, इसलिए $(2\cos\theta - 1)(\cos\theta - 3) = 0$।`,
      t`मूल हैं $\cos\theta = \frac{1}{2}$ और $\cos\theta = 3$।`,
      t`$\cos\theta$ कभी $1$ से ज़्यादा नहीं हो सकता, इसलिए $3$ असंभव है। $\frac{1}{2}$ ठीक है ($\theta = 60^\circ$)।`,
    ],
    answer: t`$\cos\theta = \frac{1}{2}$`,
  },
  remediation: {
    "C09-M1": t`हल करने के बाद हर मूल जाँचिए: $\sin\theta$ और $\cos\theta$, $[-1, 1]$ में होते हैं; $\sec\theta$ और $\operatorname{cosec}\theta$, $\le -1$ या $\ge 1$ होते हैं। Range के बाहर का मूल कोई angle नहीं देता, इसलिए उसे छोड़िए।`,
    "C09-M2": t`केवल $\sin\theta$ और $\cos\theta$, $[-1, 1]$ में बंद हैं। $\sec\theta = \frac{r}{x}$ और $\operatorname{cosec}\theta = \frac{r}{y}$ आकार में कम से कम $1$ होते हैं, और $\tan\theta$, $\cot\theta$ हर वास्तविक मान लेते हैं।`,
    "C09-M3": t`$90^\circ$ के बाद निर्देशांक $x$ और $y$ ऋणात्मक हो सकते हैं, इसलिए $\sin\theta$ और $\cos\theta$, $-1$ से $1$ तक जाते हैं और $\tan\theta$ ऋणात्मक हो सकता है। Range आकार की सीमा तय करती है, चिह्न की नहीं।`,
    "C09-M4": t`Range में उसके सिरे शामिल हैं: $\sin 90^\circ = 1$, $\sin 270^\circ = -1$, $\cos 0^\circ = 1$, $\cos 180^\circ = -1$। ठीक $1$ या $-1$ वाला मूल मान्य है।`,
    "C09-M5": t`$\tan^2\theta$ और $\cot^2\theta$ दोनों एक साथ $0$ नहीं हो सकते: उनका गुणनफल $1$ है। योग को एक पूर्ण वर्ग और एक संख्या के रूप में लिखिए, जैसे $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$।`,
    "C09-M6": t`गुणनखंडों को वापस गुणा करके जाँचिए: बीच का पद उसी चिह्न के साथ आना चाहिए जैसा समीकरण में है।`,
    "C09-M7": t`वह वर्ग लीजिए जिसका बीच का पद $-2pq$ है: $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$, और वह वर्ग $45^\circ$ पर $0$ है। $(p + q)^2$ के साथ बची हुई संख्या ऋणात्मक होती है, पर $\tan\theta + \cot\theta$ कभी $0$ नहीं होता, इसलिए वह सीमा कभी नहीं मिलती।`,
  },
  solutions: {
    "C09-Q1": [
      t`गुणनखंड कीजिए: $(2\cos\theta + 1)(\cos\theta + 5) = 0$, इसलिए $\cos\theta = -\frac{1}{2}$ या $\cos\theta = -5$।`,
      t`$\cos\theta$ कभी $-1$ से नीचे नहीं जाता, इसलिए $-5$ असंभव है।`,
      t`$-\frac{1}{2}$ मान्य है (उदाहरण के लिए $\theta = 120^\circ$)। इसलिए केवल $\cos\theta = -\frac{1}{2}$।`,
    ],
    "C09-Q2": [
      t`$\tan^2\theta = \sec^2\theta - 1$ रखिए: $5\sec^2\theta - 5 + 3 = 9\sec\theta$, इसलिए $5\sec^2\theta - 9\sec\theta - 2 = 0$।`,
      t`गुणनखंड कीजिए: $(5\sec\theta + 1)(\sec\theta - 2) = 0$, इसलिए $\sec\theta = -\frac{1}{5}$ या $\sec\theta = 2$।`,
      t`$\sec\theta$ कभी $-1$ और $1$ के बीच नहीं होता, इसलिए $-\frac{1}{5}$ असंभव है। इसलिए केवल $\sec\theta = 2$ (न्यून angle $\theta = 60^\circ$ है)।`,
    ],
    "C09-Q3": [
      t`$3\cos\theta = 4(1 + \sin\theta)$ लिखिए और वर्ग कीजिए: $9(1 - \sin^2\theta) = 16(1 + \sin\theta)^2$।`,
      t`व्यवस्थित कीजिए: $25\sin^2\theta + 32\sin\theta + 7 = 0$, इसलिए $(25\sin\theta + 7)(\sin\theta + 1) = 0$: $\sin\theta = -\frac{7}{25}$ या $\sin\theta = -1$।`,
      t`वर्ग करने से मूल बढ़ सकते हैं, इसलिए दोनों जाँचिए। $\sin\theta = -1$ से $\cos\theta = 0$: $0 + 4 = 4$। $\sin\theta = -\frac{7}{25}$ और $\cos\theta = \frac{24}{25}$ के साथ: $\frac{72}{25} + \frac{28}{25} = 4$।`,
      t`$-1$, $\sin\theta$ का सबसे छोटा मान है, range के बाहर नहीं। इसलिए $\sin\theta = -1$ या $\sin\theta = -\frac{7}{25}$।`,
    ],
    "C09-Q4": [
      t`$\sec^2\theta = 1 + \tan^2\theta$ रखिए: $1 + \tan^2\theta = \tan\theta + 3$, इसलिए $\tan^2\theta - \tan\theta - 2 = 0$।`,
      t`गुणनखंड कीजिए: $(\tan\theta - 2)(\tan\theta + 1) = 0$, इसलिए $\tan\theta = 2$ या $\tan\theta = -1$।`,
      t`$\tan\theta$ हर वास्तविक मान लेता है, इसलिए दोनों मान्य हैं ($\tan 135^\circ = -1$)। इसलिए $\tan\theta = 2$ या $\tan\theta = -1$।`,
    ],
    "C09-Q5": [
      t`$\sin^2\theta = 1 - \cos^2\theta$ रखिए: $2 - 2\cos^2\theta + \cos\theta = 1$, इसलिए $2\cos^2\theta - \cos\theta - 1 = 0$।`,
      t`गुणनखंड कीजिए: $(2\cos\theta + 1)(\cos\theta - 1) = 0$, इसलिए $\cos\theta = -\frac{1}{2}$ या $\cos\theta = 1$।`,
      t`दोनों $[-1, 1]$ में हैं; $1$ range का सबसे ऊपरी मान है और $\theta = 0^\circ$ पर मिलता है। इसलिए $\cos\theta = 1$ या $\cos\theta = -\frac{1}{2}$।`,
    ],
    "C09-Q6": [
      t`$2\tan\theta \cdot 3\cot\theta = 6$, इसलिए $4\tan^2\theta + 9\cot^2\theta = (2\tan\theta - 3\cot\theta)^2 + 12$।`,
      t`वर्ग कभी ऋणात्मक नहीं होता, इसलिए व्यंजक कम से कम $12$ है।`,
      t`यह $12$ के बराबर तब है जब $2\tan\theta = 3\cot\theta$, यानी $\tan^2\theta = \frac{3}{2}$, जो किसी $\theta$ के लिए मिलता है। न्यूनतम मान $12$ है।`,
    ],
  },
};
