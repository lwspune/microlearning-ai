import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "hi",
  status: "approved",
  source: "0ddd5b8c4d35d7",
  hook: {
    prompt: t`Calculator के बिना: $\cos 1^\circ \cdot \cos 2^\circ \cdot \cos 3^\circ \cdots \cos 179^\circ = ?$`,
    reveal: t`$0$। गुणनखंडों में से एक $\cos 90^\circ$ है। $90^\circ$ पर terminal arm का बिंदु $(0, 1)$ है, इसलिए $\cos 90^\circ = \frac{x}{r} = 0$। एक शून्य गुणनखंड पूरे गुणनफल को $0$ कर देता है, बाकी $178$ गुणनखंड चाहे जो हों।`,
  },
  intuition: [
    t`हर मान terminal arm पर के एक बिंदु $P(x, y)$ से आता है, जो $O$ से $r$ दूरी पर है।`,
    t`तब $\sin\theta = \frac{y}{r}$, $\cos\theta = \frac{x}{r}$ और $\tan\theta = \frac{y}{x}$ होते हैं।`,
    t`**Standard angles** (मानक कोण) हैं $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$, $90^\circ$ और quadrantal angles $180^\circ$, $270^\circ$, $360^\circ$।`,
    t`$30^\circ$, $45^\circ$ और $60^\circ$ पर, आधा वर्ग या आधा समबाहु त्रिभुज सटीक भुजाएँ देता है।`,
    t`इसलिए उनके मान सटीक **surds** (करणी) हैं: $\sqrt{2}$ और $\sqrt{3}$ जैसे मूल, जिन्हें मूल के रूप में ही छोड़ा जाता है।`,
    t`अक्षों पर, $r = 1$ लीजिए और बिंदु से सीधे $\cos\theta = x$ और $\sin\theta = y$ पढ़िए।`,
  ],
  formal: [
    {
      title: t`45° पर मान`,
      points: [
        t`Arm को initial arm से $45^\circ$ घुमाइए, और उस पर बिंदु $P(1, 1)$ चिह्नित कीजिए।`,
        t`$P$ से एक लंब डालिए: त्रिभुज $1$ भुजा वाले वर्ग का आधा है, जो उसके विकर्ण के साथ कटा है।`,
        t`पाइथागोरस से, विकर्ण $r = OP = \sqrt{1^2 + 1^2} = \sqrt{2}$ है।`,
        t`इसलिए $\sin 45^\circ = \frac{y}{r} = \frac{1}{\sqrt{2}}$ और $\cos 45^\circ = \frac{x}{r} = \frac{1}{\sqrt{2}}$।`,
        t`और $\tan 45^\circ = \frac{y}{x} = \frac{1}{1} = 1$।`,
      ],
    },
    {
      title: t`30° पर मान`,
      points: [
        t`**Equilateral triangle** (समबाहु त्रिभुज) की तीनों भुजाएँ बराबर और तीनों angles $60^\circ$ होते हैं; $2$ भुजाओं वाला एक लीजिए।`,
        t`इसे $x$-अक्ष के साथ आधा काटिए: हर आधे की छोटी भुजा $1$ और सबसे लंबी भुजा $2$ है।`,
        t`पाइथागोरस से, कटी हुई रेखा $\sqrt{2^2 - 1^2} = \sqrt{3}$ लंबी है।`,
        t`यह कटाव $O$ पर के $60^\circ$ angle को आधा करता है, इसलिए ऊपर वाले आधे में वहाँ $30^\circ$ है।`,
        t`Arm को $30^\circ$ घुमाइए: वह ऊपर के कोने, $P(\sqrt{3}, 1)$, पर रुकती है, जहाँ $r = 2$।`,
        t`इसलिए $\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$ और $\tan 30^\circ = \frac{1}{\sqrt{3}}$।`,
      ],
    },
    {
      title: t`60° पर मान`,
      points: [
        t`उसी आधे त्रिभुज को उसकी छोटी भुजा $1$ को $x$-अक्ष पर रखकर लिटाइए।`,
        t`अब $O$ पर उसका angle $60^\circ$ वाला है।`,
        t`Arm को $60^\circ$ घुमाइए: वह ऊपर के कोने, $Q(1, \sqrt{3})$, पर रुकती है, जहाँ $r = 2$।`,
        t`इसलिए $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$ और $\tan 60^\circ = \sqrt{3}$।`,
        t`मान $30^\circ$ से अदला-बदली करते हैं: $\sin 60^\circ = \cos 30^\circ$ और $\cos 60^\circ = \sin 30^\circ$।`,
        t`Sine angle के साथ बढ़ता है, इसलिए $\sin 30^\circ = \frac{1}{2}$ छोटा है और $\sin 60^\circ = \frac{\sqrt{3}}{2}$ बड़ा।`,
      ],
    },
    {
      title: t`अक्षों पर मान`,
      points: [
        t`जब terminal arm किसी अक्ष पर हो, तो $r = 1$ वाला बिंदु लीजिए: तब $\cos\theta = x$ और $\sin\theta = y$।`,
        t`$0^\circ$ और $360^\circ$ पर बिंदु $(1, 0)$ है, इसलिए $\cos 0^\circ = 1$ और $\sin 0^\circ = 0$।`,
        t`$90^\circ$ पर यह $(0, 1)$ है, इसलिए $\cos 90^\circ = 0$ और $\sin 90^\circ = 1$।`,
        t`$180^\circ = \pi$ पर यह $(-1, 0)$ है, इसलिए $\cos 180^\circ = -1$ और $\sin 180^\circ = 0$।`,
        t`$270^\circ = \frac{3\pi}{2}$ पर यह $(0, -1)$ है, इसलिए $\cos 270^\circ = 0$ और $\sin 270^\circ = -1$।`,
        t`किसी अक्ष के ऋणात्मक आधे पर का बिंदु ऋणात्मक मान देता है।`,
      ],
    },
    {
      title: t`मानों की सारणी`,
      points: [
        t`$0^\circ$ से $90^\circ$ तक, standard angles हैं $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$ और $90^\circ$।`,
        t`Radians में, ये हैं $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$ और $\frac{\pi}{2}$।`,
        t`$r = 1$ के साथ, $\sin\theta$ ऊँचाई $y$ है, जो $0$ से $1$ तक बढ़ती है: $0$, $\frac{1}{2}$, $\frac{1}{\sqrt{2}}$, $\frac{\sqrt{3}}{2}$, $1$।`,
        t`और $\cos\theta$ चौड़ाई $x$ है, जो $1$ से $0$ तक घटती है: $1$, $\frac{\sqrt{3}}{2}$, $\frac{1}{\sqrt{2}}$, $\frac{1}{2}$, $0$।`,
        t`$\tan\theta$ के मान $0$, $\frac{1}{\sqrt{3}}$, $1$, $\sqrt{3}$ हैं, और $90^\circ$ पर, जहाँ $x = 0$, यह परिभाषित नहीं है।`,
      ],
    },
    {
      title: t`Reciprocal functions (व्युत्क्रम फलन)`,
      points: [
        t`किसी संख्या का **reciprocal** (व्युत्क्रम) $1$ को उससे भाग देना है: $2$ का reciprocal $\frac{1}{2}$ है।`,
        t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, इसलिए $\operatorname{cosec} 30^\circ = \frac{1}{1/2} = 2$।`,
        t`$\sec\theta = \frac{1}{\cos\theta}$ और $\cot\theta = \frac{1}{\tan\theta}$ होते हैं।`,
        t`भिन्न तब परिभाषित नहीं होता जब उसका **denominator** (हर), रेखा के नीचे की संख्या, $0$ हो।`,
        t`इसलिए $\tan 90^\circ$ और $\sec 90^\circ$ परिभाषित नहीं हैं, क्योंकि $\cos 90^\circ = 0$।`,
        t`और $\cot 0^\circ$ और $\operatorname{cosec} 0^\circ$ परिभाषित नहीं हैं, क्योंकि $\sin 0^\circ = 0$।`,
      ],
    },
    {
      title: t`व्यंजक का मान निकालना`,
      points: [
        t`किसी व्यंजक को **evaluate** करना (मान निकालना) यानी उसका मान ज्ञात करना।`,
        t`पहले हर angle ज्ञात कीजिए: $\sin 2\theta$, angle $2\theta$ का sine है।`,
        t`$\theta = 30^\circ$ के लिए, यह $\sin 60^\circ = \frac{\sqrt{3}}{2}$ है, $2\sin 30^\circ = 1$ नहीं।`,
        t`फिर सारणी से हर मान रखिए।`,
        t`फिर घात निकालिए: $\sin^2\theta$ का अर्थ है $(\sin\theta)^2$।`,
        t`उदाहरण के लिए, $\cos^2 30^\circ = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}$।`,
      ],
    },
    {
      title: t`लंबे गुणनफल`,
      points: [
        t`**Product** (गुणनफल) में, आपस में गुणा की गई संख्याएँ उसके **factors** (गुणनखंड) हैं।`,
        t`अगर कोई भी गुणनखंड $0$ हो, तो पूरा गुणनफल $0$ होता है।`,
        t`$\tan 1^\circ \tan 2^\circ \cdots \tan 89^\circ$ में, $\tan\theta$ की जोड़ी $\tan(90^\circ - \theta)$ से बनाइए: $\tan 1^\circ$ की $\tan 89^\circ$ से।`,
        t`$x$ और $y$ की अदला-बदली कीजिए: $\theta$ वाली arm पर $P(x, y)$, $90^\circ - \theta$ वाली arm पर $Q(y, x)$ बन जाता है।`,
        t`इसलिए $\tan(90^\circ - \theta) = \frac{x}{y} = \cot\theta$, और हर जोड़ी $\tan\theta \cot\theta = 1$ है।`,
        t`बीच का गुणनखंड $\tan 45^\circ = 1$ है, इसलिए पूरा गुणनफल $1$ है।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\theta = 60^\circ$, तो $\frac{1 + \tan^2\theta}{2\tan\theta}$ ज्ञात कीजिए।`,
    steps: [
      t`$\tan 60^\circ = \frac{\sin 60^\circ}{\cos 60^\circ}$ $= \frac{\sqrt{3}/2}{1/2}$ $= \sqrt{3}$।`,
      t`वर्ग कीजिए: $\tan^2 60^\circ = 3$, इसलिए अंश $1 + 3 = 4$ है।`,
      t`हर $2\sqrt{3}$ है, इसलिए मान $\frac{4}{2\sqrt{3}}$ $= \frac{2}{\sqrt{3}}$ है।`,
    ],
    answer: t`$\frac{2}{\sqrt{3}}$`,
  },
  remediation: {
    "C03-M1": t`$30^\circ$ पर बिंदु $(\sqrt{3}, 1)$ है और $r = 2$, इसलिए $\sin 30^\circ = \frac{1}{2}$ और $\cos 30^\circ = \frac{\sqrt{3}}{2}$। Sine $0^\circ$ से $90^\circ$ तक बढ़ता है, इसलिए $\sin 30^\circ = \frac{1}{2}$ छोटा है और $\sin 60^\circ = \frac{\sqrt{3}}{2}$ बड़ा।`,
    "C03-M2": t`अक्ष पर $r = 1$ लीजिए: $\cos\theta$ बिंदु का $x$-निर्देशांक है और $\sin\theta$ उसका $y$-निर्देशांक। $90^\circ$ पर बिंदु $(0, 1)$ है, इसलिए $\cos 90^\circ = 0$ और $\sin 90^\circ = 1$।`,
    "C03-M3": t`$180^\circ$ पर बिंदु $(-1, 0)$ है, इसलिए $\cos 180^\circ = -1$; $270^\circ$ पर यह $(0, -1)$ है, इसलिए $\sin 270^\circ = -1$। किसी अक्ष के ऋणात्मक आधे पर का बिंदु ऋणात्मक मान देता है।`,
    "C03-M4": t`$\sec\theta = \frac{1}{\cos\theta}$ और $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: हर एक "co" वाले function को बिना "co" वाले से जोड़ता है, इसलिए $\sec$ की जोड़ी $\cos$ से है और $\operatorname{cosec}$ की $\sin$ से। इसलिए $\operatorname{cosec} 30^\circ = \frac{1}{\sin 30^\circ} = 2$।`,
    "C03-M5": t`$\sin 2\theta$, angle $2\theta$ का sine है: पहले $2\theta$ निकालिए, फिर उसका sine लीजिए। $\theta = 30^\circ$ के लिए, $\sin 2\theta = \sin 60^\circ = \frac{\sqrt{3}}{2}$, $2\sin 30^\circ = 1$ नहीं।`,
    "C03-M6": t`$\cos^2\theta$ का अर्थ है $(\cos\theta)^2$: मान निकालिए, फिर उसका वर्ग कीजिए। उदाहरण के लिए $\cos^2 30^\circ = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}$।`,
  },
  solutions: {
    "C03-Q1": [
      t`$\cot 45^\circ = 1$, $\sin 30^\circ = \frac{1}{2}$ और $\sec 60^\circ = \frac{1}{\cos 60^\circ} = 2$।`,
      t`वर्ग कीजिए: $\sec^2 60^\circ = 2^2 = 4$।`,
      t`$4(1) - 4 + \frac{1}{2} = \frac{1}{2}$।`,
    ],
    "C03-Q2": [
      t`$r = 1$ के साथ: $(1, 0)$ से $\cos 0 = 1$, $(-1, 0)$ से $\cos\pi = -1$, और $(0, -1)$ से $\sin\frac{3\pi}{2} = -1$।`,
      t`वर्ग कीजिए: $\sin^2\frac{3\pi}{2} = (-1)^2 = 1$।`,
      t`$1 + 2(-1) + 3(1) = 2$।`,
    ],
    "C03-Q3": [
      t`पहले angles ज्ञात कीजिए: $2\theta = 60^\circ$ और $3\theta = 90^\circ$।`,
      t`$\cos 60^\circ = \frac{1}{2}$, और बिंदु $(0, 1)$ से $\sin 90^\circ = 1$।`,
      t`$\frac{1}{2} + 1 = \frac{3}{2}$।`,
    ],
    "C03-Q4": [
      t`$\sin 30^\circ = \frac{1}{2}$ और $\cos 45^\circ = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$।`,
      t`$180^\circ$ पर बिंदु $(-1, 0)$ है, इसलिए $\cos 180^\circ = -1$।`,
      t`$\frac{1}{2} + \frac{\sqrt{2}}{2} - 1 = \frac{\sqrt{2} - 1}{2}$।`,
    ],
    "C03-Q5": [
      t`$\operatorname{cosec} 45^\circ = \frac{1}{\sin 45^\circ} = \sqrt{2}$, इसलिए $\operatorname{cosec}^2 45^\circ = 2$।`,
      t`$\cot 30^\circ = \frac{\cos 30^\circ}{\sin 30^\circ} = \sqrt{3}$ और $\sec 60^\circ = \frac{1}{\cos 60^\circ} = 2$।`,
      t`$2 + \sqrt{3} + 2 = 4 + \sqrt{3}$।`,
    ],
    "C03-Q6": [
      t`पहले angle ज्ञात कीजिए: $2\theta = 90^\circ$, इसलिए $\sin 2\theta = \sin 90^\circ = 1$।`,
      t`$\cos 45^\circ = \frac{1}{\sqrt{2}}$, इसलिए $\cos^2 45^\circ = \frac{1}{2}$।`,
      t`$2(1) + \frac{1}{2} = \frac{5}{2}$।`,
    ],
  },
};
