import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "mr",
  status: "approved",
  source: "1b1f7087dc4384",
  hook: {
    prompt: t`$x = 2$ वर $x^2$ आणि $2^x$ समान आहेत: दोन्ही $4$ आहेत. **तिथे त्यांच्या आलेखांचा slope सारखाच आहे का?**`,
    reveal: t`नाही. $x^2$ घाताचा नियम पाळते: त्याचा slope $2x$ आहे, जो $x = 2$ वर $4$ आहे. $2^x$ स्वतःचा नियम पाळते: त्याचा slope $2^x\log 2$ आहे, जो $4\log 2 \approx 2.77$ आहे. मूल्य सारखे, नियम वेगळे: प्रत्येक फल कोणता नियम पाळते ते तुम्हाला माहीत असले पाहिजे.`,
  },
  intuition: [
    t`आठवा: $f'(x)$ म्हणजे $h \to 0$ होताना $\frac{f(x + h) - f(x)}{h}$ चे limit.`,
    t`तो $y = f(x)$ च्या tangent चा slope आहे; प्रत्येक वेळी limit शोधणे वेळखाऊ आहे.`,
    t`म्हणून आपण तो प्रत्येक मूलभूत फलासाठी एकदा शोधतो आणि निष्कर्ष ठेवतो.`,
    t`हे निष्कर्ष म्हणजे **प्रमाणित derivatives**: एक सारणी जी तुम्ही पाढ्यासारखी वापरता.`,
    t`दोन रूपे सारखी दिसतात: $x^n$ मध्ये पाया बदलतो, $a^x$ मध्ये घात बदलतो.`,
    t`ती वेगवेगळे नियम पाळतात, म्हणून आधी विचारा की तुमच्याकडे कोणते रूप आहे.`,
  ],
  formal: [
    {
      title: t`x चे घात`,
      points: [
        t`कोणत्याही वास्तव घात $n$ साठी: $\frac{d}{dx}x^n = nx^{n-1}$.`,
        t`घात अवयव म्हणून खाली आणा, मग घात $1$ ने कमी करा: $\frac{d}{dx}x^5 = 5x^4$.`,
        t`मूळ हा घात आहे: $\sqrt{x} = x^{\frac{1}{2}}$, म्हणून $\frac{d}{dx}\sqrt{x} = \frac{1}{2\sqrt{x}}$.`,
        t`$\frac{1}{x^n}$ सारखा **व्यस्त** आधी $x^{-n}$, म्हणजे ऋण घात, असा लिहिला जातो.`,
        t`मग $\frac{d}{dx}x^{-n} = -nx^{-n-1}$: घातासोबत ऋण चिन्हही खाली येते.`,
        t`म्हणून $\frac{d}{dx}\frac{1}{x} = \frac{d}{dx}x^{-1}$ $= -\frac{1}{x^2}$.`,
      ],
    },
    {
      title: t`घातांकी आणि लघुगणकी फले`,
      points: [
        t`इथे **log** म्हणजे नैसर्गिक log, पाया $e \approx 2.718$ वर.`,
        t`$a^x$ ($a > 0$) मध्ये पाया ठरावीक संख्या आहे आणि घात बदलतो.`,
        t`$\frac{d}{dx}a^x = a^x\log a$: फल आपले रूप ठेवते आणि $\log a$ मिळवते.`,
        t`$a = e$ सह, $\log e = 1$, म्हणून $\frac{d}{dx}e^x = e^x$: फक्त $e^x$ हे स्वतःचेच derivative आहे.`,
        t`घाताचा नियम लागू होत नाही: $\frac{d}{dx}2^x = 2^x\log 2$, $x \cdot 2^{x-1}$ नाही.`,
        t`$x > 0$ साठी: $\frac{d}{dx}\log x = \frac{1}{x}$.`,
      ],
    },
    {
      title: t`त्रिकोणमितीय फले`,
      points: [
        t`कोन रेडियनमध्ये आहेत; या नियमांना त्याची गरज आहे.`,
        t`$\frac{d}{dx}\sin x = \cos x$, आणि $\frac{d}{dx}\cos x = -\sin x$.`,
        t`$\frac{d}{dx}\tan x = \sec^2 x$, आणि $\frac{d}{dx}\cot x$ $= -\operatorname{cosec}^2 x$.`,
        t`$\frac{d}{dx}\sec x = \sec x\tan x$, आणि $\frac{d}{dx}\operatorname{cosec} x$ $= -\operatorname{cosec} x\cot x$.`,
        t`यांची अदलाबदल करू नका: $\tan x$ पासून $\sec^2 x$ मिळते, तर $\sec x$ पासून $\sec x\tan x$.`,
        t`**सह-फलांच्या**, $\cos$, $\cot$ आणि $\operatorname{cosec}$, प्रत्येकाच्या derivative मध्ये ऋण चिन्ह असते.`,
      ],
    },
    {
      title: t`व्यस्त आणि स्थिरांक`,
      points: [
        t`$\operatorname{cosec} x = \frac{1}{\sin x}$, तरीही त्याचे derivative $\frac{1}{\cos x}$ नाही.`,
        t`derivative उलटल्याने व्यस्ताचे derivative मिळत नाही.`,
        t`$\operatorname{cosec}$, $\sec$ आणि $\cot$ साठी सारणी वापरा; $\frac{1}{x^n}$ आधी $x^{-n}$ असे लिहा.`,
        t`**स्थिरांक**, म्हणजे $7^7$ किंवा $\log 2$ सारखी ठरावीक संख्या, कधीच बदलत नाही: त्याचे derivative $0$ आहे.`,
      ],
    },
    {
      title: t`बिंदूवरील slope`,
      points: [
        t`$f'(a)$ म्हणजे $x = a$ वर $y = f(x)$ च्या tangent चा slope.`,
        t`म्हणून आधी विकलन करून $f'(x)$ मिळवा, आणि त्यानंतरच $x = a$ ठेवा.`,
        t`$f(x) = x^2$ साठी: $f'(x) = 2x$, म्हणून $f'(1) = 2$.`,
        t`आधी $x = 1$ ठेवल्यास फक्त संख्या $f(1) = 1$ मिळते.`,
        t`तिचे derivative $0$ आहे: सपाट रेषा $y = 1$ चा slope, वक्राचा नाही.`,
      ],
    },
  ],
  worked: {
    prompt: t`$f(x) = \dfrac{1}{x^{\frac{2}{3}}}$ असेल, तर $f'(8)$ शोधा.`,
    steps: [
      t`एक व्यस्त: $f(x) = x^{-\frac{2}{3}}$ लिहा, म्हणून $n = -\frac{2}{3}$.`,
      t`घाताचा नियम: $f'(x) = -\frac{2}{3}x^{-\frac{2}{3} - 1}$ $= -\frac{2}{3}x^{-\frac{5}{3}}$.`,
      t`आताच $x = 8$ ठेवा: $8^{-\frac{5}{3}} = \frac{1}{2^5} = \frac{1}{32}$.`,
      t`$f'(8) = -\frac{2}{3} \cdot \frac{1}{32}$ $= -\frac{1}{48}$ आहे.`,
    ],
    answer: t`$f'(8) = -\frac{1}{48}$`,
  },
  remediation: {
    "C03-M1": t`घाताचा नियम $x^n$ साठी आहे, जिथे घात ठरावीक आहे. $a^x$ मध्ये घात बदलतो, म्हणून $\frac{d}{dx}a^x = a^x\log a$ वापरा.`,
    "C03-M2": t`$\frac{d}{dx}a^x = a^x\log a$. फक्त $a = e$ साठी $\log a = 1$, म्हणून फक्त $e^x$ हे स्वतःचेच derivative आहे.`,
    "C03-M3": t`derivative उलटल्याने व्यस्ताचे विकलन होत नाही. $\frac{1}{x^n}$ हे $x^{-n}$ लिहा, आणि $\operatorname{cosec}$, $\sec$ आणि $\cot$ साठी सारणी वापरा.`,
    "C03-M4": t`आधी विकलन करून $f'(x)$ मिळवा, मग $x = a$ ठेवा. $f(a)$ ही ठरावीक संख्या आहे, म्हणून तिचे derivative नेहमी $0$ असते आणि slope बद्दल काहीच सांगत नाही.`,
    "C03-M5": t`$\tan x$ पासून $\sec^2 x$ मिळते आणि $\sec x$ पासून $\sec x\tan x$. तसेच $\cot x$ पासून $-\operatorname{cosec}^2 x$ आणि $\operatorname{cosec} x$ पासून $-\operatorname{cosec} x\cot x$.`,
    "C03-M6": t`सह-फले $\cos$, $\cot$ आणि $\operatorname{cosec}$ यांच्या derivatives मध्ये ऋण चिन्ह असते. ऋण घात $n$ सह, $nx^{n-1}$ मधील अवयव $n$ सुद्धा ऋण असतो.`,
  },
  solutions: {
    "C03-Q1": [
      t`$7^x$ चा पाया ठरावीक आणि घात बदलता आहे, म्हणून $\frac{d}{dx}7^x = 7^x\log 7$.`,
      t`आताच $x = 2$ ठेवा: $f'(2) = 7^2\log 7 = 49\log 7$.`,
    ],
    "C03-Q2": [
      t`एक व्यस्त: $f(x) = x^{-\frac{3}{2}}$ लिहा, म्हणून $n = -\frac{3}{2}$.`,
      t`$f'(x) = -\frac{3}{2}x^{-\frac{5}{2}}$: घात $-\frac{3}{2}$ वरून $-\frac{5}{2}$ पर्यंत कमी होतो.`,
      t`$x = 4$ वर: $4^{-\frac{5}{2}} = \frac{1}{2^5} = \frac{1}{32}$, म्हणून $f'(4) = -\frac{3}{64}$.`,
    ],
    "C03-Q3": [
      t`$\operatorname{cosec} x$ हे सह-फल आहे, म्हणून त्याच्या derivative मध्ये ऋण चिन्ह असते.`,
      t`सारणीवरून: $\frac{d}{dx}\operatorname{cosec} x$ $= -\operatorname{cosec} x\cot x$.`,
    ],
    "C03-Q4": [
      t`$\cot x$ हे सह-फल आहे, म्हणून त्याच्या derivative मध्ये ऋण चिन्ह असते.`,
      t`सारणीवरून: $\frac{d}{dx}\cot x = -\operatorname{cosec}^2 x$.`,
    ],
    "C03-Q5": [
      t`सारणीवरून: $f'(x) = \sec x\tan x$.`,
      t`$x = \frac{\pi}{3}$ वर: $\sec\frac{\pi}{3} = 2$ आणि $\tan\frac{\pi}{3} = \sqrt{3}$.`,
      t`म्हणून $f'\left(\frac{\pi}{3}\right) = 2\sqrt{3}$.`,
    ],
    "C03-Q6": [
      t`पाया $5$ ठरावीक आहे आणि घात बदलतो, म्हणून $\frac{d}{dx}5^x = 5^x\log 5$.`,
      t`आताच $x = 3$ ठेवा: $f'(3) = 5^3\log 5 = 125\log 5$.`,
    ],
  },
};
