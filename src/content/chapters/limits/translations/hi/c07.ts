import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "hi",
  status: "approved",
  source: "0cacfa424cba94",
  hook: {
    prompt: t`**radian** मोड में कैलकुलेटर $\frac{\sin 0.001}{0.001} \approx 0.99999$ देता है। **डिग्री** मोड में वही बटन $0.01745$ देते हैं। **$x \to 0$ होने पर $\frac{\sin x}{x}$ का limit इनमें से कौन दिखाता है?**`,
    reveal: t`दोनों, अलग-अलग कोणों के लिए। radians में अनुपात $1$ की ओर जाता है। डिग्री में, $x^\circ$, $\frac{\pi x}{180}$ radians है, इसलिए यह $\frac{\pi}{180} \approx 0.01745$ की ओर जाता है। प्रसिद्ध $1$ के लिए radians चाहिए।`,
  },
  intuition: [
    t`जैसे $\theta \to 0$, $\sin\theta$ और $\theta$ दोनों $0$ की ओर जाते हैं: $\frac{\sin\theta}{\theta}$ अनिर्धार्य $\frac{0}{0}$ से शुरू होता है।`,
    t`**radians** में मापने पर, छोटे कोण का sine लगभग स्वयं कोण होता है: $\sin 0.1 \approx 0.0998$।`,
    t`इसलिए अनुपात $1$ की ओर जाता है: $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$।`,
    t`$0$ के पास $\cos\theta$, $1$ के पास है, इसलिए $\tan\theta$, $\sin\theta$ के पास है और $\frac{\tan\theta}{\theta} \to 1$ भी।`,
    t`नियम के लिए ऊपर और नीचे **वही** कोण चाहिए: $\frac{\sin 5x}{5x} \to 1$।`,
    t`इसलिए $\frac{\sin 5x}{x} = 5 \cdot \frac{\sin 5x}{5x}$, जो $5$ की ओर जाता है, $1$ की ओर नहीं।`,
  ],
  formal: [
    {
      title: t`Limit 1 क्यों है`,
      points: [
        t`त्रिज्या $1$, केंद्र $O$ वाला एक वृत्त बनाइए, और $O$ पर कोण $\theta$, जहाँ $0 < \theta < \frac{\pi}{2}$।`,
        t`radians में चाप $AP$ की लंबाई ठीक $\theta$ है: radian का अर्थ यही है।`,
        t`ऊँचाई $PM = \sin\theta$ चाप से छोटी है, इसलिए $\sin\theta < \theta$।`,
        t`स्पर्श रेखा $AT = \tan\theta$ चाप से लंबी है, इसलिए $\theta < \tan\theta$।`,
        t`$\sin\theta < \theta < \tan\theta$ को $\sin\theta$ से भाग देकर उलटिए: $\cos\theta < \frac{\sin\theta}{\theta} < 1$।`,
        t`जैसे $\theta \to 0$, $\cos\theta \to 1$, इसलिए अनुपात **दबकर** $1$ पर आ जाता है; ऋणात्मक $\theta$ से भी यही मिलता है।`,
      ],
    },
    {
      title: t`कोण का मिलान कीजिए`,
      points: [
        t`नियम $0$ की ओर जाने वाले किसी भी कोण $u$ के लिए काम करता है: $\lim_{u \to 0}\frac{\sin u}{u} = 1$।`,
        t`$\frac{\sin 3x}{x}$ में कोण $3x$ है, और $x \to 0$ होने पर $3x \to 0$।`,
        t`$3$ से गुणा और भाग कीजिए: $\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x}$।`,
        t`अब कोण और हर मेल खाते हैं, इसलिए भिन्न $1$ की ओर जाता है और limit $3$ है।`,
        t`सामान्यतः $\frac{\sin kx}{x} \to k$ और $\frac{\tan kx}{x} \to k$: $k$ ऊपर आ जाता है।`,
        t`अनुपात के लिए, अंश और हर को $x$ से भाग दीजिए: $\frac{\sin 6x}{\sin 2x} \to \frac{6}{2} = 3$।`,
      ],
    },
    {
      title: t`जब cosine हो`,
      points: [
        t`$1 - \cos\theta$, $\sin^2\theta$ नहीं है: वह सर्वसमिका $1 - \cos^2\theta = \sin^2\theta$ है।`,
        t`अर्धकोण का उपयोग कीजिए: $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$।`,
        t`अर्धकोण का मिलान कीजिए: $\theta^2 = 4\left(\frac{\theta}{2}\right)^2$।`,
        t`इसलिए $\frac{1 - \cos\theta}{\theta^2}$ $= \frac{2}{4}\left(\frac{\sin(\theta/2)}{\theta/2}\right)^2$ $\to \frac{1}{2}$।`,
        t`cosines के अंतर के लिए, पहले $\cos C - \cos D$ $= -2\sin\frac{C + D}{2}\sin\frac{C - D}{2}$ का उपयोग कीजिए।`,
      ],
    },
    {
      title: t`डिग्री में कोण`,
      points: [
        t`Limit $1$ केवल radians में सही है, क्योंकि तभी चाप कोण के बराबर होता है।`,
        t`$x^\circ$ का कोण $\frac{\pi x}{180}$ radians है, इसलिए $\sin x^\circ = \sin\frac{\pi x}{180}$।`,
        t`मिलान कीजिए: $\frac{\sin x^\circ}{x}$ $= \frac{\pi}{180} \cdot \frac{\sin(\pi x/180)}{\pi x/180}$।`,
        t`इसलिए $\lim_{x \to 0}\frac{\sin x^\circ}{x} = \frac{\pi}{180}$, लगभग $0.01745$।`,
        t`डिग्री कोण का हर sine अपना गुणनखंड $\frac{\pi}{180}$ लाता है।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\lim_{x \to 0} \dfrac{\sec x - 1}{x^2}$ का मान ज्ञात कीजिए।`,
    steps: [
      t`$\sec x - 1 = \frac{1 - \cos x}{\cos x}$ लिखिए, और $1 - \cos x = 2\sin^2\frac{x}{2}$ का उपयोग कीजिए।`,
      t`इसलिए भिन्न $\frac{2\sin^2(x/2)}{x^2} \cdot \frac{1}{\cos x}$ है।`,
      t`कोण $\frac{x}{2}$ का मिलान कीजिए: $x^2 = 4\left(\frac{x}{2}\right)^2$, इसलिए $\frac{2\sin^2(x/2)}{x^2}$ $= \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2$।`,
      t`जैसे $x \to 0$: $\frac{1}{2} \times 1^2 \times \frac{1}{\cos 0} = \frac{1}{2}$।`,
    ],
    answer: t`$\frac{1}{2}$`,
  },
  remediation: {
    "C07-M1": t`$\frac{\sin u}{u} \to 1$ के लिए ऊपर और नीचे वही कोण चाहिए। $\frac{\sin k\theta}{\theta} = k \cdot \frac{\sin k\theta}{k\theta}$ लिखिए, इसलिए यह $k$ की ओर जाता है।`,
    "C07-M2": t`मिलान के लिए $k$ से गुणा और भाग कीजिए: $\frac{\sin k\theta}{\theta} = k \cdot \frac{\sin k\theta}{k\theta} \to k$। गुणांक ऊपर आ जाता है।`,
    "C07-M3": t`$\frac{\sin\theta}{\theta} \to 1$ केवल radians में सही है। पहले बदलिए: $x^\circ = \frac{\pi x}{180}$ radians, इसलिए डिग्री कोण का हर sine एक गुणनखंड $\frac{\pi}{180}$ लाता है।`,
    "C07-M4": t`$1 - \cos^2\theta = \sin^2\theta$, पर $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$। अर्धकोण का उपयोग कीजिए, फिर $\frac{\theta}{2}$ का हर से मिलान कीजिए।`,
    "C07-M5": t`$2$ को बनाए रखिए: $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$। $\theta = \pi$ पर जाँचिए: दोनों ओर $2$ है।`,
    "C07-M6": t`$x = 0$ रखने पर $\frac{0}{0}$ मिलता है, जो अनिर्धार्य है, $0$ नहीं। $\frac{\sin u}{u}$ के रूप में फिर से लिखिए, कोण का मिलान कीजिए, फिर $x \to 0$ होने दीजिए।`,
  },
  solutions: {
    "C07-Q1": [
      t`अंश और हर को $\theta$ से भाग दीजिए: limit $\frac{\sin m\theta}{\theta}$ बटा $\frac{\tan n\theta}{\theta}$ है।`,
      t`हर कोण का मिलान कीजिए: $\frac{\sin m\theta}{\theta} = m \cdot \frac{\sin m\theta}{m\theta} \to m$।`,
      t`इसी तरह $\frac{\tan n\theta}{\theta} = n \cdot \frac{\tan n\theta}{n\theta} \to n$, इसलिए limit $\frac{m}{n}$ है।`,
    ],
    "C07-Q2": [
      t`अर्धकोण: $1 - \cos 2\theta = 2\sin^2\theta$।`,
      t`इसलिए भिन्न $2\left(\frac{\sin\theta}{\theta}\right)^2$ है: कोण पहले से मेल खाता है।`,
      t`जैसे $\theta \to 0$, यह $2 \times 1^2 = 2$ की ओर जाता है।`,
    ],
    "C07-Q3": [
      t`$1 - \cos x = 2\sin^2\frac{x}{2}$; अंश और हर को $x^2$ से भाग दीजिए।`,
      t`अंश: $\frac{x \tan x}{x^2} = \frac{\tan x}{x} \to 1$।`,
      t`हर: $\frac{2\sin^2(x/2)}{x^2}$ $= \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2$ $\to \frac{1}{2}$।`,
      t`Limit $1 \div \frac{1}{2} = 2$ है।`,
    ],
    "C07-Q4": [
      t`अर्धकोण: $1 - \cos nx = 2\sin^2\frac{nx}{2}$ और $1 - \cos mx = 2\sin^2\frac{mx}{2}$।`,
      t`$x^2$ से भाग देकर मिलान कीजिए: $\frac{\sin(nx/2)}{x} \to \frac{n}{2}$ और $\frac{\sin(mx/2)}{x} \to \frac{m}{2}$।`,
      t`Limit $\frac{(n/2)^2}{(m/2)^2} = \frac{n^2}{m^2}$ है।`,
    ],
    "C07-Q5": [
      t`$\cos C - \cos D$ $= -2\sin\frac{C + D}{2}\sin\frac{C - D}{2}$, इसलिए अंश $-2\sin 4x^\circ \sin x^\circ$ है।`,
      t`radians में $\sin 4x^\circ = \sin\frac{4\pi x}{180}$, इसलिए $\frac{\sin 4x^\circ}{x} \to \frac{4\pi}{180}$।`,
      t`इसी तरह $\frac{\sin x^\circ}{x} \to \frac{\pi}{180}$।`,
      t`Limit $-2 \times \frac{4\pi}{180} \times \frac{\pi}{180}$ $= -8\left(\frac{\pi}{180}\right)^2$ है।`,
    ],
    "C07-Q6": [
      t`$\sin 2x = 2\sin x\cos x$, इसलिए अंश $2\sin x(1 - \cos x)$ $= 4\sin x\sin^2\frac{x}{2}$ है।`,
      t`$x^3 = x \cdot x^2$ में बाँटिए; पहला भाग $\frac{\sin x}{x} \to 1$ है।`,
      t`अर्धकोण का मिलान कीजिए: $\frac{\sin^2(x/2)}{x^2}$ $= \frac{1}{4}\left(\frac{\sin(x/2)}{x/2}\right)^2$ $\to \frac{1}{4}$।`,
      t`Limit $4 \times 1 \times \frac{1}{4} = 1$ है।`,
    ],
  },
};
