import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "hi",
  status: "approved",
  source: "0d38927805168d",
  hook: {
    prompt: t`जैसे $x \to 0$, $(1 + x)^{\frac{1}{x}}$ का आधार $1$ की ओर जाता है, और $1$ की कोई भी घात $1$ है। फिर भी $1.01^{100} \approx 2.705$ और $1.001^{1000} \approx 2.717$। **यह किसकी ओर जा रहा है?**`,
    reveal: t`$1$ की ओर नहीं। आधार धीरे-धीरे $1$ की ओर सरकता है जबकि घात $\frac{1}{x}$ तेज़ी से बढ़ती है, और दोनों संख्या $e \approx 2.718$ पर संतुलित होते हैं। $1$ के पास का आधार, बहुत बड़ी घात पर, ज़रूरी नहीं कि $1$ के पास हो।`,
  },
  intuition: [
    t`इस अध्याय में $\log$ का अर्थ $\log_e$ है, यानी natural logarithm, जैसा पुस्तक में है।`,
    t`$0$ के पास, $\log(1 + x)$ लगभग ठीक $x$ है: $x = 0.01$ पर यह $0.00995$ है।`,
    t`इसलिए $x \to 0$ होने पर भिन्न $\frac{\log(1 + x)}{x}$, $1$ पर स्थिर होता है।`,
    t`संख्या $e \approx 2.718$ वह है जिस पर $x \to 0$ होने पर $(1 + x)^{\frac{1}{x}}$ स्थिर होता है।`,
    t`**Indeterminate form**, जैसे $\frac{0}{0}$ या $1^\infty$, अपने आप limit नहीं बताता।`,
    t`दोनों तथ्य एक ही हैं: $(1 + x)^{\frac{1}{x}}$ का $\log$ ठीक $\frac{\log(1 + x)}{x}$ है।`,
  ],
  formal: [
    {
      title: t`दो standard limits`,
      points: [
        t`**परिणाम 1:** $\lim_{x \to 0} \frac{\log(1 + x)}{x} = 1$।`,
        t`**परिणाम 2:** $\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e$।`,
        t`वे जुड़े हुए हैं: $\log\left[(1 + x)^{\frac{1}{x}}\right]$ $= \frac{\log(1 + x)}{x}$, जो $1 = \log e$ की ओर जाता है।`,
        t`$x = 0$ पर वे $\frac{0}{0}$ और $1^\infty$ दिखते हैं, इसलिए $x = 0$ रखने से कुछ पता नहीं चलता।`,
      ],
    },
    {
      title: t`पहले परिणाम का उपयोग`,
      points: [
        t`किसी अचर $k \ne 0$ के लिए: $\frac{\log(1 + kx)}{x}$ $= k \cdot \frac{\log(1 + kx)}{kx}$।`,
        t`जैसे $x \to 0$, $kx \to 0$ भी, इसलिए अंतिम भिन्न $1$ की ओर जाता है।`,
        t`इसलिए $\lim_{x \to 0} \frac{\log(1 + kx)}{x} = k$।`,
        t`उदाहरण: $\frac{\log(1 + 7x)}{x} \to 7$, $\frac{1}{7}$ नहीं।`,
        t`ऋण चिह्न $k$ को ऋणात्मक बनाता है: $\frac{\log(1 - 2x)}{x} \to -2$।`,
      ],
    },
    {
      title: t`दूसरे परिणाम का उपयोग`,
      points: [
        t`घात को अंदर वाले से मिलाइए: $(1 + kx)^{\frac{1}{x}}$ $= \left[(1 + kx)^{\frac{1}{kx}}\right]^k$।`,
        t`कोष्ठक $e$ की ओर जाता है, इसलिए $(1 + kx)^{\frac{1}{x}} \to e^k$।`,
        t`घात में अचर $m$ घातांक को गुणा करता है: $(1 + kx)^{\frac{m}{x}} \to e^{km}$।`,
        t`ऋण चिह्न बना रहता है: $(1 - 3x)^{\frac{1}{x}} \to e^{-3}$।`,
        t`**$1^\infty$, $1$ नहीं है।** आधार $1$ की ओर जाता है, पर घात बढ़ती है; limit दोनों पर निर्भर है।`,
      ],
    },
    {
      title: t`पहले इसे 1 + छोटा बनाइए`,
      points: [
        t`दोनों परिणामों को ठीक $1 +$ (कुछ छोटा) चाहिए; आगे का अचर पहले बाहर निकालना होगा।`,
        t`$a + bx = a\left(1 + \frac{b}{a}x\right)$, इसलिए जो गुणांक मायने रखता है वह $\frac{b}{a}$ है, $b$ नहीं।`,
        t`log के लिए, $\log a$ अलग हो जाता है: $\log(5 + x)$ $= \log 5 + \log\left(1 + \frac{x}{5}\right)$।`,
        t`$\frac{a + bx}{a + dx}$ जैसे भागफल में, दोनों $a$ कट जाते हैं और $\frac{1 + \frac{b}{a}x}{1 + \frac{d}{a}x}$ बचता है।`,
        t`फिर अंश और हर पर अलग-अलग परिणाम लगाइए, और भाग दीजिए।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\displaystyle\lim_{x \to 0} \left(\frac{3x + 2}{2 - 5x}\right)^{\frac{1}{3x}}$ का मान ज्ञात कीजिए।`,
    steps: [
      t`अंश और हर से $2$ बाहर निकालिए: $\frac{2 + 3x}{2 - 5x}$ $= \frac{1 + \frac{3x}{2}}{1 - \frac{5x}{2}}$।`,
      t`अंश: $\left(1 + \frac{3x}{2}\right)^{\frac{1}{x}} \to e^{\frac{3}{2}}$।`,
      t`हर: $\left(1 - \frac{5x}{2}\right)^{\frac{1}{x}} \to e^{-\frac{5}{2}}$; ऋण चिह्न बना रहता है।`,
      t`इसलिए घात $\frac{1}{x}$ के साथ भागफल $e^{\frac{3}{2} + \frac{5}{2}} = e^4$ की ओर जाता है।`,
      t`घात $\frac{1}{3x}$, $\frac{1}{x}$ का एक-तिहाई है: limit $\left(e^4\right)^{\frac{1}{3}} = e^{\frac{4}{3}}$ है।`,
    ],
    answer: t`$e^{\frac{4}{3}}$`,
  },
  remediation: {
    "C09-M1": t`$1^\infty$ एक indeterminate form है: आधार $1$ के पास आता है जबकि घात बढ़ती है। $(1 + kx)^{\frac{1}{x}} \to e^k$ का उपयोग कीजिए।`,
    "C09-M2": t`मानक परिणामों को $1 +$ (कुछ छोटा) चाहिए। पहले $a + bx = a\left(1 + \frac{b}{a}x\right)$ लिखिए: गुणांक $\frac{b}{a}$ है।`,
    "C09-M3": t`घात को अंदर वाले से मिलाइए: $(1 + kx)^{\frac{1}{x}} = \left[(1 + kx)^{\frac{1}{kx}}\right]^k \to e^k$। इसी तरह $\frac{\log(1 + kx)}{x} \to k$।`,
    "C09-M4": t`$1 - qx$, $1 + (-q)x$ है, इसलिए $k = -q$ और $(1 - qx)^{\frac{1}{x}} \to e^{-q}$। फिर इससे भाग देने पर घातांक में $q$ जुड़ता है।`,
    "C09-M5": t`$\frac{\log(1 + kx)}{x} \to k$, एक सादी संख्या, जबकि $(1 + kx)^{\frac{1}{x}} \to e^k$, $e$ की एक घात।`,
    "C09-M6": t`$(1 + kx)^{\frac{m}{x}} = \left[(1 + kx)^{\frac{1}{x}}\right]^m \to e^{km}$: $m$ घातांक को गुणा करता है।`,
  },
  solutions: {
    "C09-Q1": [
      t`घात को अंदर वाले से मिलाइए: $\left(1 + \frac{5x}{6}\right)^{\frac{1}{x}}$ $= \left[\left(1 + \frac{5x}{6}\right)^{\frac{6}{5x}}\right]^{\frac{5}{6}}$।`,
      t`कोष्ठक $e$ की ओर जाता है, इसलिए limit $e^{\frac{5}{6}}$ है।`,
    ],
    "C09-Q2": [
      t`अंश और हर से $3$ बाहर निकालिए: $\frac{3 + x}{3 - x}$ $= \frac{1 + \frac{x}{3}}{1 - \frac{x}{3}}$।`,
      t`अंश: $\left(1 + \frac{x}{3}\right)^{\frac{1}{x}} \to e^{\frac{1}{3}}$। हर: $\left(1 - \frac{x}{3}\right)^{\frac{1}{x}} \to e^{-\frac{1}{3}}$।`,
      t`इसलिए limit $e^{\frac{1}{3} + \frac{1}{3}} = e^{\frac{2}{3}}$ है।`,
    ],
    "C09-Q3": [
      t`अंश और हर से $3$ बाहर निकालिए: $\frac{3 + 5x}{3 - 2x}$ $= \frac{1 + \frac{5x}{3}}{1 - \frac{2x}{3}}$।`,
      t`घात $\frac{1}{x}$ के साथ: अंश $\to e^{\frac{5}{3}}$, हर $\to e^{-\frac{2}{3}}$, इसलिए भागफल $\to e^{\frac{7}{3}}$।`,
      t`घात $\frac{2}{x}$, $\frac{1}{x}$ की दुगनी है: limit $\left(e^{\frac{7}{3}}\right)^2 = e^{\frac{14}{3}}$ है।`,
    ],
    "C09-Q4": [
      t`$\log 3$ अलग कीजिए: $\log(3 - x) = \log 3 + \log\left(1 - \frac{x}{3}\right)$, और $3 + x$ के लिए भी इसी तरह।`,
      t`दोनों $\log 3$ कट जाते हैं, और $\frac{\log\left(1 - \frac{x}{3}\right)}{x}$ $- \frac{\log\left(1 + \frac{x}{3}\right)}{x}$ बचता है।`,
      t`ये $-\frac{1}{3}$ और $\frac{1}{3}$ की ओर जाते हैं, इसलिए limit $-\frac{1}{3} - \frac{1}{3} = -\frac{2}{3}$ है।`,
    ],
    "C09-Q5": [
      t`अंश और हर से $3$ बाहर निकालिए: $\frac{3 + 5x}{3 - 4x}$ $= \frac{1 + \frac{5x}{3}}{1 - \frac{4x}{3}}$।`,
      t`अंश: $\left(1 + \frac{5x}{3}\right)^{\frac{1}{x}} \to e^{\frac{5}{3}}$। हर: $\left(1 - \frac{4x}{3}\right)^{\frac{1}{x}} \to e^{-\frac{4}{3}}$।`,
      t`इसलिए limit $e^{\frac{5}{3} + \frac{4}{3}} = e^3$ है।`,
    ],
    "C09-Q6": [
      t`$x = 2 + h$ रखिए: जैसे $x \to 2$, $h \to 0$, और भिन्न $\frac{\log(2 + h) - \log 2}{h}$ बन जाता है।`,
      t`अंश $\log\frac{2 + h}{2} = \log\left(1 + \frac{h}{2}\right)$ है।`,
      t`इसलिए limit $\lim_{h \to 0} \frac{\log\left(1 + \frac{h}{2}\right)}{h} = \frac{1}{2}$ है।`,
    ],
  },
};
