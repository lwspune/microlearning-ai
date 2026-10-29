import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "hi",
  status: "approved",
  source: "1b1f7087dc4384",
  hook: {
    prompt: t`$x = 2$ पर $x^2$ और $2^x$ बराबर हैं: दोनों $4$ हैं। **क्या वहाँ उनके आलेखों का slope समान है?**`,
    reveal: t`नहीं। $x^2$ घात नियम का पालन करता है: इसका slope $2x$ है, जो $x = 2$ पर $4$ है। $2^x$ अपने नियम का पालन करता है: इसका slope $2^x\log 2$ है, जो $4\log 2 \approx 2.77$ है। मान समान, नियम अलग: आपको पता होना चाहिए कि हर फलन किस नियम का पालन करता है।`,
  },
  intuition: [
    t`याद कीजिए: $f'(x)$, $h \to 0$ होने पर $\frac{f(x + h) - f(x)}{h}$ का limit है।`,
    t`यह $y = f(x)$ की tangent का slope है; हर बार limit ज्ञात करना धीमा है।`,
    t`इसलिए हम इसे हर मूल फलन के लिए एक बार ज्ञात करते हैं और परिणाम रख लेते हैं।`,
    t`ये परिणाम **मानक derivatives** हैं: एक सारणी जिसका उपयोग आप पहाड़े की तरह करते हैं।`,
    t`दो रूप एक जैसे दिखते हैं: $x^n$ में आधार बदलता है, $a^x$ में घात बदलती है।`,
    t`वे अलग नियमों का पालन करते हैं, इसलिए पहले पूछिए कि आपके पास कौन-सा रूप है।`,
  ],
  formal: [
    {
      title: t`x की घातें`,
      points: [
        t`किसी भी वास्तविक घात $n$ के लिए: $\frac{d}{dx}x^n = nx^{n-1}$।`,
        t`घात को गुणनखंड के रूप में नीचे लाइए, फिर घात को $1$ घटाइए: $\frac{d}{dx}x^5 = 5x^4$।`,
        t`मूल एक घात है: $\sqrt{x} = x^{\frac{1}{2}}$, इसलिए $\frac{d}{dx}\sqrt{x} = \frac{1}{2\sqrt{x}}$।`,
        t`$\frac{1}{x^n}$ जैसे **व्युत्क्रम** को पहले $x^{-n}$, एक ऋणात्मक घात, के रूप में लिखा जाता है।`,
        t`तब $\frac{d}{dx}x^{-n} = -nx^{-n-1}$: घात के साथ ऋण चिह्न भी नीचे आता है।`,
        t`इसलिए $\frac{d}{dx}\frac{1}{x} = \frac{d}{dx}x^{-1}$ $= -\frac{1}{x^2}$।`,
      ],
    },
    {
      title: t`घातांकीय और लघुगणकीय फलन`,
      points: [
        t`यहाँ **log** प्राकृतिक log है, आधार $e \approx 2.718$ पर।`,
        t`$a^x$ ($a > 0$) में आधार एक निश्चित संख्या है और घात बदलती है।`,
        t`$\frac{d}{dx}a^x = a^x\log a$: फलन अपना रूप बनाए रखता है और $\log a$ पाता है।`,
        t`$a = e$ के साथ, $\log e = 1$, इसलिए $\frac{d}{dx}e^x = e^x$: केवल $e^x$ अपना ही derivative है।`,
        t`घात नियम लागू नहीं होता: $\frac{d}{dx}2^x = 2^x\log 2$, $x \cdot 2^{x-1}$ नहीं।`,
        t`$x > 0$ के लिए: $\frac{d}{dx}\log x = \frac{1}{x}$।`,
      ],
    },
    {
      title: t`त्रिकोणमितीय फलन`,
      points: [
        t`कोण रेडियन में हैं; इन नियमों को इसकी ज़रूरत है।`,
        t`$\frac{d}{dx}\sin x = \cos x$, और $\frac{d}{dx}\cos x = -\sin x$।`,
        t`$\frac{d}{dx}\tan x = \sec^2 x$, और $\frac{d}{dx}\cot x$ $= -\operatorname{cosec}^2 x$।`,
        t`$\frac{d}{dx}\sec x = \sec x\tan x$, और $\frac{d}{dx}\operatorname{cosec} x$ $= -\operatorname{cosec} x\cot x$।`,
        t`इन्हें अदला-बदली मत कीजिए: $\tan x$ से $\sec^2 x$ मिलता है, जबकि $\sec x$ से $\sec x\tan x$।`,
        t`**सह-फलनों**, $\cos$, $\cot$ और $\operatorname{cosec}$, में से हर एक के derivative में ऋण चिह्न है।`,
      ],
    },
    {
      title: t`व्युत्क्रम और अचर`,
      points: [
        t`$\operatorname{cosec} x = \frac{1}{\sin x}$, फिर भी इसका derivative $\frac{1}{\cos x}$ नहीं है।`,
        t`किसी derivative को उलटने से व्युत्क्रम का derivative नहीं मिलता।`,
        t`$\operatorname{cosec}$, $\sec$ और $\cot$ के लिए सारणी का उपयोग कीजिए; $\frac{1}{x^n}$ को पहले $x^{-n}$ लिखिए।`,
        t`**अचर**, यानी $7^7$ या $\log 2$ जैसी निश्चित संख्या, कभी नहीं बदलता: इसका derivative $0$ है।`,
      ],
    },
    {
      title: t`किसी बिंदु पर slope`,
      points: [
        t`$f'(a)$, $x = a$ पर $y = f(x)$ की tangent का slope है।`,
        t`इसलिए पहले अवकलन करके $f'(x)$ पाइए, और उसके बाद ही $x = a$ रखिए।`,
        t`$f(x) = x^2$ के लिए: $f'(x) = 2x$, इसलिए $f'(1) = 2$।`,
        t`पहले $x = 1$ रखने से केवल संख्या $f(1) = 1$ मिलती है।`,
        t`उसका derivative $0$ है: सपाट रेखा $y = 1$ का slope, वक्र का नहीं।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $f(x) = \dfrac{1}{x^{\frac{2}{3}}}$, तो $f'(8)$ ज्ञात कीजिए।`,
    steps: [
      t`एक व्युत्क्रम: $f(x) = x^{-\frac{2}{3}}$ लिखिए, इसलिए $n = -\frac{2}{3}$।`,
      t`घात नियम: $f'(x) = -\frac{2}{3}x^{-\frac{2}{3} - 1}$ $= -\frac{2}{3}x^{-\frac{5}{3}}$।`,
      t`अब जाकर $x = 8$ रखिए: $8^{-\frac{5}{3}} = \frac{1}{2^5} = \frac{1}{32}$।`,
      t`$f'(8) = -\frac{2}{3} \cdot \frac{1}{32}$ $= -\frac{1}{48}$ है।`,
    ],
    answer: t`$f'(8) = -\frac{1}{48}$`,
  },
  remediation: {
    "C03-M1": t`घात नियम $x^n$ के लिए है, जहाँ घात निश्चित है। $a^x$ में घात बदलती है, इसलिए $\frac{d}{dx}a^x = a^x\log a$ का उपयोग कीजिए।`,
    "C03-M2": t`$\frac{d}{dx}a^x = a^x\log a$। केवल $a = e$ के लिए $\log a = 1$, इसलिए केवल $e^x$ अपना ही derivative है।`,
    "C03-M3": t`किसी derivative को उलटने से व्युत्क्रम का अवकलन नहीं होता। $\frac{1}{x^n}$ को $x^{-n}$ लिखिए, और $\operatorname{cosec}$, $\sec$ और $\cot$ के लिए सारणी का उपयोग कीजिए।`,
    "C03-M4": t`पहले अवकलन करके $f'(x)$ पाइए, फिर $x = a$ रखिए। $f(a)$ एक निश्चित संख्या है, इसलिए उसका derivative हमेशा $0$ है और slope के बारे में कुछ नहीं बताता।`,
    "C03-M5": t`$\tan x$ से $\sec^2 x$ मिलता है और $\sec x$ से $\sec x\tan x$। इसी तरह $\cot x$ से $-\operatorname{cosec}^2 x$ और $\operatorname{cosec} x$ से $-\operatorname{cosec} x\cot x$।`,
    "C03-M6": t`सह-फलनों $\cos$, $\cot$ और $\operatorname{cosec}$ के derivatives में ऋण चिह्न है। ऋणात्मक घात $n$ के साथ, $nx^{n-1}$ में गुणनखंड $n$ भी ऋणात्मक है।`,
  },
  solutions: {
    "C03-Q1": [
      t`$7^x$ का आधार निश्चित और घात परिवर्ती है, इसलिए $\frac{d}{dx}7^x = 7^x\log 7$।`,
      t`अब जाकर $x = 2$ रखिए: $f'(2) = 7^2\log 7 = 49\log 7$।`,
    ],
    "C03-Q2": [
      t`एक व्युत्क्रम: $f(x) = x^{-\frac{3}{2}}$ लिखिए, इसलिए $n = -\frac{3}{2}$।`,
      t`$f'(x) = -\frac{3}{2}x^{-\frac{5}{2}}$: घात $-\frac{3}{2}$ से घटकर $-\frac{5}{2}$ होती है।`,
      t`$x = 4$ पर: $4^{-\frac{5}{2}} = \frac{1}{2^5} = \frac{1}{32}$, इसलिए $f'(4) = -\frac{3}{64}$।`,
    ],
    "C03-Q3": [
      t`$\operatorname{cosec} x$ एक सह-फलन है, इसलिए इसके derivative में ऋण चिह्न होता है।`,
      t`सारणी से: $\frac{d}{dx}\operatorname{cosec} x$ $= -\operatorname{cosec} x\cot x$।`,
    ],
    "C03-Q4": [
      t`$\cot x$ एक सह-फलन है, इसलिए इसके derivative में ऋण चिह्न होता है।`,
      t`सारणी से: $\frac{d}{dx}\cot x = -\operatorname{cosec}^2 x$।`,
    ],
    "C03-Q5": [
      t`सारणी से: $f'(x) = \sec x\tan x$।`,
      t`$x = \frac{\pi}{3}$ पर: $\sec\frac{\pi}{3} = 2$ और $\tan\frac{\pi}{3} = \sqrt{3}$।`,
      t`इसलिए $f'\left(\frac{\pi}{3}\right) = 2\sqrt{3}$।`,
    ],
    "C03-Q6": [
      t`आधार $5$ निश्चित है और घात बदलती है, इसलिए $\frac{d}{dx}5^x = 5^x\log 5$।`,
      t`अब जाकर $x = 3$ रखिए: $f'(3) = 5^3\log 5 = 125\log 5$।`,
    ],
  },
};
