import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "hi",
  status: "approved",
  source: "15b4b725055e34",
  hook: {
    prompt: t`$(x)' = 1$ और $(\sin x)' = \cos x$। **तो क्या $x\sin x$ का derivative बस $1 \cdot \cos x = \cos x$ है?**`,
    reveal: t`नहीं। दोनों गुणनखंड बदलते हैं, और हर परिवर्तन गिना जाता है: $(x\sin x)' = x\cos x + \sin x$। $x = \pi$ पर यह $-\pi$ है, $\cos\pi = -1$ नहीं।`,
  },
  intuition: [
    t`**गुणनफल** $uv$, $x$ के दो फलनों का गुणा है, जैसे $x^2\sin x$।`,
    t`जब $x$ बदलता है, तो दोनों गुणनखंड एक साथ बदलते हैं।`,
    t`हर गुणनखंड का परिवर्तन गिना जाता है, दूसरे गुणनखंड के आकार से गुणा होकर।`,
    t`इसलिए $(uv)' = uv' + vu'$: दो पद, धन चिह्न से जुड़े।`,
    t`यह $u'v'$ नहीं है: वह दोनों परिवर्तनों को गुणा करता है और दोनों गुणनखंड खो देता है।`,
    t`$x \cdot x = x^2$ से जाँचिए: नियम $x + x = 2x$ देता है, जो सही है।`,
  ],
  formal: [
    {
      title: t`नियम क्यों सही है`,
      points: [
        t`$uv$ को भुजाओं $u$ और $v$ वाले आयत के क्षेत्रफल के रूप में सोचिए।`,
        t`जब $x$ थोड़ा बढ़ता है, $u$, $\Delta u$ से बढ़ता है, एक छोटा परिवर्तन: क्षेत्रफल $v\,\Delta u$ की एक पट्टी बनती है।`,
        t`और $v$, $\Delta v$ से बढ़ता है: ऊपर क्षेत्रफल $u\,\Delta v$ की एक पट्टी बनती है।`,
        t`कोना $\Delta u\,\Delta v$ छोटा परिवर्तन गुणा छोटा परिवर्तन है, इसलिए limit में वह लुप्त हो जाता है।`,
        t`इसलिए क्षेत्रफल लगभग $u\,\Delta v + v\,\Delta u$ से बढ़ता है।`,
        t`$\Delta x$ से भाग दीजिए और $\Delta x \to 0$ होने दीजिए: $(uv)' = uv' + vu'$।`,
      ],
    },
    {
      title: t`Product rule (गुणनफल नियम)`,
      points: [
        t`मान लीजिए $u$ और $v$, $x$ के ऐसे फलन हैं जिनके derivatives हैं।`,
        t`**Product rule (गुणनफल नियम):** $\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$।`,
        t`शब्दों में: पहला गुणा दूसरे का derivative, धन दूसरा गुणा पहले का derivative।`,
        t`दोनों पदों का क्रम मायने नहीं रखता, पर दोनों में हमेशा धन चिह्न होता है।`,
        t`उदाहरण: $(x^2\sin x)' = x^2\cos x + \sin x \cdot 2x$।`,
        t`आगे की संख्या एक अचर गुणज है, अवकलन करने वाला गुणनखंड नहीं: $(5uv)' = 5(uv)'$।`,
      ],
    },
    {
      title: t`तीन गुणनखंड, घटाए गए गुणनफल`,
      points: [
        t`तीन गुणनखंडों के लिए, एक बार में एक गुणनखंड का अवकलन कीजिए और बाक़ी दो को वैसा ही रखिए।`,
        t`इसलिए $(uvw)' = u'vw + uv'w + uvw'$: तीन पद, हर गुणनखंड के लिए एक।`,
        t`**घटाया गया गुणनफल** वह है जिसके आगे ऋण चिह्न हो, जैसे $-x\cos x$।`,
        t`पहले कोष्ठक में $(uv)'$ ज्ञात कीजिए, फिर पूरा कोष्ठक घटाइए।`,
        t`इसलिए $-(uv)' = -u'v - uv'$: दोनों पदों का चिह्न बदल जाता है।`,
        t`उदाहरण: $(-x\cos x)' = -(\cos x - x\sin x)$ $= -\cos x + x\sin x$।`,
      ],
    },
  ],
  worked: {
    prompt: t`$x$ के सापेक्ष $y = x^4\cos x - e^x\log x$ का अवकलन कीजिए।`,
    steps: [
      t`दो गुणनफल: $x^4\cos x$, और आगे ऋण चिह्न के साथ $e^x\log x$।`,
      t`$(x^4\cos x)' = x^4(-\sin x) + \cos x \cdot 4x^3$ $= 4x^3\cos x - x^4\sin x$।`,
      t`$(e^x\log x)' = e^x \cdot \frac{1}{x} + \log x \cdot e^x$ $= \frac{e^x}{x} + e^x\log x$।`,
      t`पूरा कोष्ठक घटाइए: $-\left(\frac{e^x}{x} + e^x\log x\right)$ $= -\frac{e^x}{x} - e^x\log x$।`,
    ],
    answer: t`$\frac{dy}{dx} = 4x^3\cos x - x^4\sin x$ $- \frac{e^x}{x} - e^x\log x$`,
  },
  remediation: {
    "C05-M1": t`गुणनफल का derivative, derivatives का गुणनफल नहीं है। Product rule का उपयोग कीजिए, $(uv)' = uv' + vu'$: हर पद एक गुणनखंड को वैसा ही रखता है।`,
    "C05-M2": t`केवल एक निश्चित संख्या आगे अछूती रह सकती है। दोनों गुणनखंड $x$ के साथ बदलते हैं, इसलिए दूसरा पद जोड़िए: $(uv)' = uv' + vu'$।`,
    "C05-M3": t`Product rule के पदों के बीच धन चिह्न है: $(uv)' = uv' + vu'$। ऋण चिह्न quotient rule का है।`,
    "C05-M4": t`पहले कोष्ठक में $(uv)' = u'v + uv'$ ज्ञात कीजिए, फिर पूरा कोष्ठक घटाइए: $-(uv)' = -u'v - uv'$।`,
    "C05-M5": t`हर गुणनखंड की बारी अवकलन की आती है, इसलिए तीन गुणनखंडों से तीन पद मिलते हैं: $(uvw)' = u'vw + uv'w + uvw'$।`,
  },
  solutions: {
    "C05-Q1": [
      t`$u = x^5$ और $v = \tan x$ लीजिए, इसलिए $u' = 5x^4$ और $v' = \sec^2 x$।`,
      t`$\frac{dy}{dx} = uv' + vu'$ $= x^5\sec^2 x + 5x^4\tan x$ है।`,
    ],
    "C05-Q2": [
      t`$(x^4)' = 4x^3$, और $(x^2e^x)' = x^2e^x + e^x \cdot 2x$।`,
      t`पूरा कोष्ठक घटाइए: $\frac{dy}{dx} = 4x^3 - (x^2e^x + 2xe^x)$।`,
      t`इसलिए $\frac{dy}{dx} = 4x^3 - 2xe^x - x^2e^x$।`,
    ],
    "C05-Q3": [
      t`$\frac{dy}{dx} = x^3 \cdot \frac{1}{x} + \log x \cdot 3x^2$ $= x^2 + 3x^2\log x$ है।`,
      t`$x = e$ पर, $\log e = 1$: $e^2 + 3e^2 = 4e^2$।`,
    ],
    "C05-Q4": [
      t`तीन गुणनखंडों से तीन पद मिलते हैं, हर एक में एक गुणनखंड का अवकलन।`,
      t`$(x^{\frac{3}{2}})' = \frac{3}{2}\sqrt{x}$, $(e^x)' = e^x$ और $(\log x)' = \frac{1}{x}$।`,
      t`पद हैं $\frac{3}{2}\sqrt{x}e^x\log x$, फिर $x^{\frac{3}{2}}e^x\log x$, फिर $x^{\frac{3}{2}}e^x \cdot \frac{1}{x}$ $= \sqrt{x}e^x$।`,
      t`$\sqrt{x}e^x$ बाहर निकालिए: $\frac{dy}{dx} =$ $\sqrt{x}e^x\left(\frac{3}{2}\log x + x\log x + 1\right)$।`,
    ],
    "C05-Q5": [
      t`$(e^x\sec x)' = e^x\sec x\tan x + e^x\sec x$ $= e^x\sec x(1 + \tan x)$ है।`,
      t`$(x^{\frac{5}{3}}\log x)'$ $= x^{\frac{5}{3}} \cdot \frac{1}{x}$ $+ \frac{5}{3}x^{\frac{2}{3}}\log x$ $= x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$ है।`,
      t`दूसरे को पूरा घटाइए: $\frac{dy}{dx} = e^x\sec x(1 + \tan x)$ $- x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$।`,
    ],
    "C05-Q6": [
      t`$(7^x)' = 7^x\log 7$ और $(x^7)' = 7x^6$।`,
      t`$\frac{dy}{dx} = 7^x \cdot 7x^6 + x^7 \cdot 7^x\log 7$ है।`,
      t`$x = 1$ पर: $7 \cdot 7 + 7\log 7 = 49 + 7\log 7$।`,
    ],
  },
};
