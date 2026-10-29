import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "mr",
  status: "approved",
  source: "15b4b725055e34",
  hook: {
    prompt: t`$(x)' = 1$ आणि $(\sin x)' = \cos x$. **मग $x\sin x$ चे derivative फक्त $1 \cdot \cos x = \cos x$ आहे का?**`,
    reveal: t`नाही. दोन्ही अवयव बदलतात, आणि प्रत्येक बदल मोजला जातो: $(x\sin x)' = x\cos x + \sin x$. $x = \pi$ वर ते $-\pi$ आहे, $\cos\pi = -1$ नाही.`,
  },
  intuition: [
    t`**गुणाकार** $uv$ म्हणजे $x$ ची दोन फले गुणलेली, जसे $x^2\sin x$.`,
    t`$x$ बदलते तेव्हा दोन्ही अवयव एकाच वेळी बदलतात.`,
    t`प्रत्येक अवयवाचा बदल मोजला जातो, दुसऱ्या अवयवाच्या आकाराने गुणला जाऊन.`,
    t`म्हणून $(uv)' = uv' + vu'$: दोन पदे, अधिक चिन्हाने जोडलेली.`,
    t`ते $u'v'$ नाही: ते दोन बदलांचा गुणाकार करते आणि दोन्ही अवयव गमावते.`,
    t`$x \cdot x = x^2$ ने तपासा: नियम $x + x = 2x$ देतो, जे बरोबर आहे.`,
  ],
  formal: [
    {
      title: t`नियम का खरा आहे`,
      points: [
        t`$uv$ ला बाजू $u$ आणि $v$ असलेल्या आयताचे क्षेत्रफळ समजा.`,
        t`$x$ थोडे वाढते तेव्हा $u$ हे $\Delta u$ ने वाढते, एक लहान बदल: क्षेत्रफळ $v\,\Delta u$ ची एक पट्टी तयार होते.`,
        t`आणि $v$ हे $\Delta v$ ने वाढते: वर क्षेत्रफळ $u\,\Delta v$ ची एक पट्टी तयार होते.`,
        t`कोपरा $\Delta u\,\Delta v$ म्हणजे लहान बदल गुणिले लहान बदल, म्हणून limit मध्ये तो नाहीसा होतो.`,
        t`म्हणून क्षेत्रफळ सुमारे $u\,\Delta v + v\,\Delta u$ ने वाढते.`,
        t`$\Delta x$ ने भागा आणि $\Delta x \to 0$ होऊ द्या: $(uv)' = uv' + vu'$.`,
      ],
    },
    {
      title: t`Product rule (गुणाकाराचा नियम)`,
      points: [
        t`समजा $u$ आणि $v$ ही $x$ ची अशी फले आहेत ज्यांना derivatives आहेत.`,
        t`**Product rule (गुणाकाराचा नियम):** $\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$.`,
        t`शब्दांत: पहिले गुणिले दुसऱ्याचे derivative, अधिक दुसरे गुणिले पहिल्याचे derivative.`,
        t`दोन पदांचा क्रम महत्त्वाचा नाही, पण दोन्हींना नेहमी अधिक चिन्ह असते.`,
        t`उदाहरण: $(x^2\sin x)' = x^2\cos x + \sin x \cdot 2x$.`,
        t`पुढची संख्या म्हणजे स्थिर पट, विकलन करायचा अवयव नव्हे: $(5uv)' = 5(uv)'$.`,
      ],
    },
    {
      title: t`तीन अवयव, वजा केलेले गुणाकार`,
      points: [
        t`तीन अवयवांसाठी, एका वेळी एका अवयवाचे विकलन करा आणि इतर दोन तसेच ठेवा.`,
        t`म्हणून $(uvw)' = u'vw + uv'w + uvw'$: तीन पदे, प्रत्येक अवयवासाठी एक.`,
        t`**वजा केलेला गुणाकार** म्हणजे ज्याच्या पुढे ऋण चिन्ह आहे असा, जसे $-x\cos x$.`,
        t`आधी कंसात $(uv)'$ शोधा, मग संपूर्ण कंस वजा करा.`,
        t`म्हणून $-(uv)' = -u'v - uv'$: दोन्ही पदांचे चिन्ह बदलते.`,
        t`उदाहरण: $(-x\cos x)' = -(\cos x - x\sin x)$ $= -\cos x + x\sin x$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$x$ च्या सापेक्ष $y = x^4\cos x - e^x\log x$ चे विकलन करा.`,
    steps: [
      t`दोन गुणाकार: $x^4\cos x$, आणि पुढे ऋण चिन्ह असलेला $e^x\log x$.`,
      t`$(x^4\cos x)' = x^4(-\sin x) + \cos x \cdot 4x^3$ $= 4x^3\cos x - x^4\sin x$.`,
      t`$(e^x\log x)' = e^x \cdot \frac{1}{x} + \log x \cdot e^x$ $= \frac{e^x}{x} + e^x\log x$.`,
      t`संपूर्ण कंस वजा करा: $-\left(\frac{e^x}{x} + e^x\log x\right)$ $= -\frac{e^x}{x} - e^x\log x$.`,
    ],
    answer: t`$\frac{dy}{dx} = 4x^3\cos x - x^4\sin x$ $- \frac{e^x}{x} - e^x\log x$`,
  },
  remediation: {
    "C05-M1": t`गुणाकाराचे derivative म्हणजे derivatives चा गुणाकार नव्हे. Product rule वापरा, $(uv)' = uv' + vu'$: प्रत्येक पद एक अवयव तसाच ठेवते.`,
    "C05-M2": t`फक्त ठरावीक संख्याच पुढे न बदलता राहू शकते. दोन्ही अवयव $x$ सोबत बदलतात, म्हणून दुसरे पद मिळवा: $(uv)' = uv' + vu'$.`,
    "C05-M3": t`Product rule च्या पदांमध्ये अधिक चिन्ह असते: $(uv)' = uv' + vu'$. ऋण चिन्ह quotient rule चे आहे.`,
    "C05-M4": t`आधी कंसात $(uv)' = u'v + uv'$ शोधा, मग संपूर्ण कंस वजा करा: $-(uv)' = -u'v - uv'$.`,
    "C05-M5": t`प्रत्येक अवयवाला विकलनाची पाळी येते, म्हणून तीन अवयवांतून तीन पदे मिळतात: $(uvw)' = u'vw + uv'w + uvw'$.`,
  },
  solutions: {
    "C05-Q1": [
      t`$u = x^5$ आणि $v = \tan x$ घ्या, म्हणून $u' = 5x^4$ आणि $v' = \sec^2 x$.`,
      t`$\frac{dy}{dx} = uv' + vu'$ $= x^5\sec^2 x + 5x^4\tan x$ आहे.`,
    ],
    "C05-Q2": [
      t`$(x^4)' = 4x^3$, आणि $(x^2e^x)' = x^2e^x + e^x \cdot 2x$.`,
      t`संपूर्ण कंस वजा करा: $\frac{dy}{dx} = 4x^3 - (x^2e^x + 2xe^x)$.`,
      t`म्हणून $\frac{dy}{dx} = 4x^3 - 2xe^x - x^2e^x$.`,
    ],
    "C05-Q3": [
      t`$\frac{dy}{dx} = x^3 \cdot \frac{1}{x} + \log x \cdot 3x^2$ $= x^2 + 3x^2\log x$ आहे.`,
      t`$x = e$ वर, $\log e = 1$: $e^2 + 3e^2 = 4e^2$.`,
    ],
    "C05-Q4": [
      t`तीन अवयवांतून तीन पदे मिळतात, प्रत्येकात एका अवयवाचे विकलन.`,
      t`$(x^{\frac{3}{2}})' = \frac{3}{2}\sqrt{x}$, $(e^x)' = e^x$ आणि $(\log x)' = \frac{1}{x}$.`,
      t`पदे आहेत $\frac{3}{2}\sqrt{x}e^x\log x$, मग $x^{\frac{3}{2}}e^x\log x$, मग $x^{\frac{3}{2}}e^x \cdot \frac{1}{x}$ $= \sqrt{x}e^x$.`,
      t`$\sqrt{x}e^x$ बाहेर काढा: $\frac{dy}{dx} =$ $\sqrt{x}e^x\left(\frac{3}{2}\log x + x\log x + 1\right)$.`,
    ],
    "C05-Q5": [
      t`$(e^x\sec x)' = e^x\sec x\tan x + e^x\sec x$ $= e^x\sec x(1 + \tan x)$ आहे.`,
      t`$(x^{\frac{5}{3}}\log x)'$ $= x^{\frac{5}{3}} \cdot \frac{1}{x}$ $+ \frac{5}{3}x^{\frac{2}{3}}\log x$ $= x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$ आहे.`,
      t`दुसरे संपूर्ण वजा करा: $\frac{dy}{dx} = e^x\sec x(1 + \tan x)$ $- x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$.`,
    ],
    "C05-Q6": [
      t`$(7^x)' = 7^x\log 7$ आणि $(x^7)' = 7x^6$.`,
      t`$\frac{dy}{dx} = 7^x \cdot 7x^6 + x^7 \cdot 7^x\log 7$ आहे.`,
      t`$x = 1$ वर: $7 \cdot 7 + 7\log 7 = 49 + 7\log 7$.`,
    ],
  },
};
