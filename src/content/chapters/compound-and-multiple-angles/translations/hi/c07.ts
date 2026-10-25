import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "hi",
  status: "approved",
  source: "1ce85b85a7ef97",
  hook: {
    prompt: t`$\sin 30^\circ$ और $\sin 45^\circ$ set-square वाले त्रिभुजों से आते हैं। किसी set square में $18^\circ$ का angle नहीं होता, पर $5 \times 18^\circ = 90^\circ$। **इससे $\sin 18^\circ$ का सटीक surd मान क्यों मिलता है?**`,
    reveal: t`$5\theta = 90^\circ$ को $2\theta + 3\theta$ में तोड़िए: तब $2\theta$ और $3\theta$ complements हैं, इसलिए $\sin 2\theta = \cos 3\theta$। दोनों का double और triple angle सूत्रों से विस्तार कीजिए और $\cos\theta$ से भाग दीजिए: बचता है $\sin\theta$ में एक द्विघात, $4\sin^2\theta + 2\sin\theta - 1 = 0$। द्विघात के मूल surds होते हैं, इसलिए $\sin 18^\circ$ भी एक surd है।`,
  },
  intuition: [
    t`ज़्यादातर angles का कोई साफ़ सटीक sine नहीं होता, पर $18^\circ$ का होता है: पाँच $18^\circ$ angles मिलकर एक समकोण बनाते हैं।`,
    t`$\theta = 18^\circ$ लीजिए: इनमें से दो मिलकर $2\theta = 36^\circ$ बनाते हैं।`,
    t`बाकी तीन $3\theta = 54^\circ$ बनाते हैं, इसलिए $2\theta + 3\theta = 90^\circ$।`,
    t`जिन angles का योग $90^\circ$ हो, वे **complements** (पूरक कोण) हैं, इसलिए $\sin 2\theta = \cos 3\theta$।`,
    t`Double और triple angle सूत्र इसे $\sin\theta$ में एक **quadratic** (द्विघात समीकरण) में बदल देते हैं, जिसमें $\sin^2\theta$ है।`,
    t`$\sin 18^\circ$ से $\cos 2\theta$ के सूत्र द्वारा $\cos 36^\circ$ मिलता है, और फिर परिवार के बाकी मान।`,
  ],
  formal: [
    {
      title: t`sin 18° के लिए समीकरण`,
      points: [
        t`$\theta = 18^\circ$ लीजिए: तब $5\theta = 90^\circ$, इसलिए $2\theta = 90^\circ - 3\theta$।`,
        t`इसलिए $\sin 2\theta = \sin(90^\circ - 3\theta)$, जो $\cos 3\theta$ है।`,
        t`Double angle सूत्र: $\sin 2\theta = 2\sin\theta\cos\theta$।`,
        t`Triple angle सूत्र: $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$।`,
        t`इसलिए $2\sin\theta\cos\theta$ बराबर है $4\cos^3\theta - 3\cos\theta$ के।`,
      ],
    },
    {
      title: t`sin θ में द्विघात`,
      points: [
        t`$\cos 18^\circ$, $0$ नहीं है, इसलिए दोनों पक्षों को $\cos\theta$ से भाग दीजिए।`,
        t`बचता है $2\sin\theta = 4\cos^2\theta - 3$।`,
        t`$\cos^2\theta = 1 - \sin^2\theta$ रखिए: दायाँ पक्ष $1 - 4\sin^2\theta$ बन जाता है।`,
        t`इसलिए $2\sin\theta = 1 - 4\sin^2\theta$।`,
        t`पुनर्व्यवस्थित करने पर, $4\sin^2\theta + 2\sin\theta - 1 = 0$: $\sin\theta$ में एक द्विघात।`,
      ],
    },
    {
      title: t`द्विघात हल करना`,
      points: [
        t`$ax^2 + bx + c = 0$ के मूल $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ हैं।`,
        t`यहाँ $a = 4$, $b = 2$ और $c = -1$, इसलिए नीचे $2a = 8$ है।`,
        t`इसलिए $\sin\theta = \frac{-2 \pm \sqrt{20}}{8}$, और $\sqrt{20} = 2\sqrt{5}$।`,
        t`यानी $\sin\theta = \frac{-1 \pm \sqrt{5}}{4}$।`,
        t`$18^\circ$ **acute** (न्यून) है, $0^\circ$ और $90^\circ$ के बीच, इसलिए $\sin 18^\circ$ धनात्मक है।`,
        t`धनात्मक मूल रखिए: $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$।`,
      ],
    },
    {
      title: t`दो मान`,
      points: [
        t`$\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$, लगभग $0.31$।`,
        t`$\cos 2\theta$ का सूत्र $\cos 36^\circ = 1 - 2\sin^2 18^\circ$ देता है।`,
        t`इससे $\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$ निकलता है, लगभग $0.81$।`,
        t`आकार की जाँच: $\sin 18^\circ$, $\sin 30^\circ = \frac{1}{2}$ से नीचे है।`,
        t`और $\cos 36^\circ$, $\cos 60^\circ = \frac{1}{2}$ से ऊपर है।`,
        t`इसलिए $\sin 18^\circ$ में $-1$ है और $\cos 36^\circ$ में $+1$: इन्हें अदल-बदल मत कीजिए।`,
      ],
    },
    {
      title: t`परिवार के बाकी मान`,
      points: [
        t`$\cos 72^\circ = \sin 18^\circ$, क्योंकि $72^\circ$ और $18^\circ$ complements हैं।`,
        t`$\sin 54^\circ = \cos 36^\circ$, क्योंकि $54^\circ$ और $36^\circ$ complements हैं।`,
        t`Identity $\sin^2\theta + \cos^2\theta = 1$ से $\cos 18^\circ$ और $\sin 36^\circ$ मिलते हैं।`,
        t`$\cos 18^\circ = \sqrt{1 - \sin^2 18^\circ}$, धनात्मक मूल, क्योंकि $18^\circ$ न्यून है।`,
        t`$\sin 36^\circ = \sqrt{1 - \cos^2 36^\circ}$, इसी कारण धनात्मक।`,
        t`पहले $1 - \sin^2 18^\circ$ को एक भिन्न के रूप में निकालिए, फिर पूरे का मूल लीजिए।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\sin 54^\circ \cdot \cos 72^\circ$ ज्ञात कीजिए।`,
    steps: [
      t`$54^\circ = 90^\circ - 36^\circ$, इसलिए $\sin 54^\circ = \cos 36^\circ$, जो $\frac{\sqrt{5} + 1}{4}$ है।`,
      t`$72^\circ = 90^\circ - 18^\circ$, इसलिए $\cos 72^\circ = \sin 18^\circ$, जो $\frac{\sqrt{5} - 1}{4}$ है।`,
      t`गुणा कीजिए: $\frac{(\sqrt{5} + 1)(\sqrt{5} - 1)}{16}$, जो $\frac{5 - 1}{16}$ है।`,
    ],
    answer: t`$\sin 54^\circ \cdot \cos 72^\circ$ बराबर है $\frac{1}{4}$ के।`,
  },
  remediation: {
    "C07-M1": t`आकार जाँचिए: $\sin 18^\circ$, $\sin 30^\circ = \frac{1}{2}$ से कम है, इसलिए यह छोटा वाला है, $\frac{\sqrt{5} - 1}{4} \approx 0.31$; $\cos 36^\circ$, $\cos 60^\circ = \frac{1}{2}$ से ज़्यादा है, इसलिए यह $\frac{\sqrt{5} + 1}{4} \approx 0.81$ है।`,
    "C07-M2": t`$18^\circ$ न्यून है, इसलिए $\sin 18^\circ > 0$: मूलों $\frac{-1 \pm \sqrt{5}}{4}$ में से $\frac{\sqrt{5} - 1}{4}$ रखिए और ऋणात्मक को छोड़िए। तब $\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$, धनात्मक, जैसा न्यून angle का cosine होना चाहिए।`,
    "C07-M3": t`$\sin 2\theta = 2\sin\theta\cos\theta$: गुणनखंड $\cos\theta$ बना रहता है। इसलिए $\sin 36^\circ = 2\sin 18^\circ\cos 18^\circ$; या $\sin 36^\circ = \sqrt{1 - \cos^2 36^\circ}$ लगाइए।`,
    "C07-M4": t`$\cos 2\theta = 1 - 2\sin^2\theta = 2\cos^2\theta - 1$। जिसमें $\sin\theta$ हो, उसमें $1$ पहले आता है: $\cos 36^\circ = 1 - 2\sin^2 18^\circ$।`,
    "C07-M5": t`$ax^2 + bx + c = 0$ के मूल $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ हैं। $4\sin^2\theta + 2\sin\theta - 1 = 0$ के लिए हर $2 \times 4 = 8$ है: $\frac{-2 + 2\sqrt{5}}{8} = \frac{\sqrt{5} - 1}{4}$।`,
    "C07-M6": t`$\sqrt{a^2 - b^2}$, $a - b$ नहीं है। पहले $1 - \sin^2 18^\circ$ को एक भिन्न के रूप में निकालिए, फिर पूरे का वर्गमूल लीजिए: $\cos 18^\circ = \sqrt{1 - \sin^2 18^\circ}$।`,
  },
  solutions: {
    "C07-Q1": [
      t`$\frac{\pi}{10} = 18^\circ$। $\theta = 18^\circ$ के साथ, $2\theta = 90^\circ - 3\theta$, इसलिए $\sin 2\theta = \cos 3\theta$: $2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$।`,
      t`$\cos\theta$ से भाग दीजिए और $\cos^2\theta = 1 - \sin^2\theta$ रखिए: $2\sin\theta = 1 - 4\sin^2\theta$, इसलिए $4\sin^2\theta + 2\sin\theta - 1 = 0$।`,
      t`$\sin\theta = \frac{-2 \pm \sqrt{4 + 16}}{8} = \frac{-1 \pm \sqrt{5}}{4}$। $18^\circ$ न्यून है, इसलिए धनात्मक मूल रखिए: $\sin\frac{\pi}{10} = \frac{\sqrt{5} - 1}{4}$।`,
    ],
    "C07-Q2": [
      t`$\cos 36^\circ = \cos 2(18^\circ) = 1 - 2\sin^2 18^\circ$, जहाँ $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$।`,
      t`$\sin^2 18^\circ = \frac{5 - 2\sqrt{5} + 1}{16} = \frac{6 - 2\sqrt{5}}{16}$।`,
      t`इसलिए $\cos 36^\circ = 1 - \frac{6 - 2\sqrt{5}}{8} = \frac{2 + 2\sqrt{5}}{8} = \frac{\sqrt{5} + 1}{4}$, लगभग $0.81$।`,
    ],
    "C07-Q3": [
      t`$\sin^2 36^\circ = 1 - \cos^2 36^\circ = 1 - \frac{(\sqrt{5} + 1)^2}{16}$।`,
      t`$(\sqrt{5} + 1)^2 = 6 + 2\sqrt{5}$, इसलिए $\sin^2 36^\circ = \frac{16 - 6 - 2\sqrt{5}}{16} = \frac{10 - 2\sqrt{5}}{16}$।`,
      t`$\sin 36^\circ > 0$, इसलिए $\sin 36^\circ = \frac{\sqrt{10 - 2\sqrt{5}}}{4}$।`,
    ],
    "C07-Q4": [
      t`$\cos^2 18^\circ = 1 - \sin^2 18^\circ = 1 - \frac{(\sqrt{5} - 1)^2}{16}$।`,
      t`$(\sqrt{5} - 1)^2 = 6 - 2\sqrt{5}$, इसलिए $\cos^2 18^\circ = \frac{16 - 6 + 2\sqrt{5}}{16} = \frac{10 + 2\sqrt{5}}{16}$।`,
      t`$\cos 18^\circ > 0$, इसलिए $\cos 18^\circ = \frac{\sqrt{10 + 2\sqrt{5}}}{4}$।`,
    ],
    "C07-Q5": [
      t`$\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$ और $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$।`,
      t`इसलिए $\cos 36^\circ - \sin 18^\circ = \frac{\sqrt{5} + 1 - \sqrt{5} + 1}{4} = \frac{2}{4} = \frac{1}{2}$।`,
    ],
    "C07-Q6": [
      t`$72^\circ = 90^\circ - 18^\circ$, इसलिए $\sin^2 72^\circ = \cos^2 18^\circ = 1 - \sin^2 18^\circ = 1 - \frac{6 - 2\sqrt{5}}{16} = \frac{10 + 2\sqrt{5}}{16}$।`,
      t`$\sin^2 60^\circ = \frac{3}{4} = \frac{12}{16}$।`,
      t`$\sin^2 72^\circ - \sin^2 60^\circ = \frac{10 + 2\sqrt{5} - 12}{16} = \frac{2\sqrt{5} - 2}{16} = \frac{\sqrt{5} - 1}{8}$।`,
    ],
  },
};
