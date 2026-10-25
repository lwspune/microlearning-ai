import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "hi",
  status: "approved",
  source: "0b12a6c68e0d9e",
  hook: {
    prompt: t`$\cos 60^\circ = \frac{1}{2}$। क्या $\cos 30^\circ$ उसका आधा, $\frac{1}{4}$, है? **केवल $\cos 60^\circ$ से $\cos 30^\circ$ कैसे निकालें?**`,
    reveal: t`आधा करके नहीं: angle आधा होने पर अनुपात आधा नहीं होता। $\cos 2A = 2\cos^2 A - 1$ को $2A = 60^\circ$ के साथ उलटा पढ़िए: $\cos^2 30^\circ = \frac{1 + \cos 60^\circ}{2} = \frac{3}{4}$। इसलिए $\cos 30^\circ = \frac{\sqrt{3}}{2}$, धनात्मक क्योंकि $30^\circ$ quadrant I में है।`,
  },
  intuition: [
    t`किसी angle $x$ का **half angle** (अर्ध कोण) $\frac{x}{2}$ है: $x$ उसका दुगुना है।`,
    t`**Half-angle formula** (अर्ध कोण सूत्र) $x$ के एक अनुपात से $\frac{x}{2}$ का अनुपात देता है।`,
    t`यह उलटा पढ़ा गया double-angle सूत्र है।`,
    t`$\cos x = 1 - 2\sin^2\frac{x}{2}$ में $\sin^2\frac{x}{2}$ के लिए हल कीजिए: यह केवल $\cos x$ से मिल जाता है।`,
    t`सूत्र एक वर्ग देता है, इसलिए उसका मूल $\pm$ के साथ आता है, और सूत्र चुन नहीं सकता।`,
    t`Angle $\frac{x}{2}$ चुनता है: उसका quadrant जानने के लिए $x$ वाले अंतराल को आधा कीजिए।`,
  ],
  formal: [
    {
      title: t`Half angles के sin और cos`,
      points: [
        t`$\cos 2A$ के दो रूपों में $A = \frac{x}{2}$ रखिए, ताकि $2A = x$।`,
        t`$\cos x = 1 - 2\sin^2\frac{x}{2}$, इसलिए $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$।`,
        t`$\cos x = 2\cos^2\frac{x}{2} - 1$, इसलिए $\cos^2\frac{x}{2} = \frac{1 + \cos x}{2}$।`,
        t`ऋण चिह्न $\sin$ के साथ जाता है।`,
        t`$x = 0$ पर जाँचिए: $\sin 0 = 0$, और $1 - \cos 0 = 0$।`,
      ],
    },
    {
      title: t`दूसरी ओर से पढ़िए`,
      points: [
        t`दूसरी ओर से पढ़ें, तो सूत्र $x$ वाले व्यंजकों को $\frac{x}{2}$ वाले व्यंजकों में बदल देते हैं।`,
        t`$1 - \cos x = 2\sin^2\frac{x}{2}$।`,
        t`$1 + \cos x = 2\cos^2\frac{x}{2}$।`,
        t`और $\sin 2A = 2\sin A\cos A$ से: $\sin x = 2\sin\frac{x}{2}\cos\frac{x}{2}$।`,
        t`सरल करते समय इन्हें इसी तरह इस्तेमाल कीजिए।`,
      ],
    },
    {
      title: t`Half angle का tan`,
      points: [
        t`$\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$।`,
        t`क्यों: इसका अंश $2\sin\frac{x}{2}\cos\frac{x}{2}$ है, और हर $2\cos^2\frac{x}{2}$।`,
        t`$2\cos\frac{x}{2}$ काटिए: बचता है $\frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = \tan\frac{x}{2}$।`,
        t`यहाँ कोई मूल नहीं है, इसलिए चिह्न अपने आप आ जाता है।`,
        t`इसका वर्ग, $\tan^2\frac{x}{2}$, $\frac{1 - \cos x}{1 + \cos x}$ है।`,
      ],
    },
    {
      title: t`चिह्न चुनना`,
      points: [
        t`पहले दोनों चिह्नों के साथ वर्गमूल लीजिए: $\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}$।`,
        t`मान लीजिए $\pi < x < \frac{3\pi}{2}$: $x$ की arm quadrant III में है।`,
        t`अंतराल के दोनों सिरों को आधा कीजिए: $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$।`,
        t`इसलिए $\frac{x}{2}$ quadrant II में है, जहाँ $\sin\frac{x}{2} > 0$ और $\cos\frac{x}{2} < 0$।`,
        t`चिह्न $\frac{x}{2}$ का है, $x$ का नहीं: quadrant III से $\sin$ ऋणात्मक हो जाता।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\cos x = \frac{1}{9}$ और $\frac{3\pi}{2} < x < 2\pi$, तो $\sin\frac{x}{2}$, $\cos\frac{x}{2}$ और $\tan\frac{x}{2}$ ज्ञात कीजिए।`,
    steps: [
      t`अंतराल को आधा कीजिए: $\frac{3\pi}{4} < \frac{x}{2} < \pi$। इसलिए $\frac{x}{2}$ quadrant II में है: $\sin\frac{x}{2} > 0$, $\cos\frac{x}{2} < 0$।`,
      t`$\sin^2\frac{x}{2} = \frac{1 - \frac{1}{9}}{2}$ $= \frac{4}{9}$, इसलिए $\sin\frac{x}{2} = \frac{2}{3}$।`,
      t`$\cos^2\frac{x}{2} = \frac{1 + \frac{1}{9}}{2}$ $= \frac{5}{9}$, इसलिए $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$।`,
      t`$\tan\frac{x}{2} = \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}}$ $= \frac{2}{3} \div \left(-\frac{\sqrt{5}}{3}\right)$ $= -\frac{2}{\sqrt{5}}$। ध्यान दीजिए कि $x$ खुद quadrant IV में है, जहाँ $\sin$ ऋणात्मक है: उसका चिह्न $\sin\frac{x}{2}$ के लिए ग़लत होता।`,
    ],
    answer: t`$\sin\frac{x}{2} = \frac{2}{3}$, $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$, $\tan\frac{x}{2} = -\frac{2}{\sqrt{5}}$।`,
  },
  remediation: {
    "C05-M1": t`ऋण चिह्न $\sin$ के साथ जाता है: $\cos x = 1 - 2\sin^2\frac{x}{2}$ से $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$। $x = 0$ पर जाँचिए: $\sin 0 = 0$, और $1 - \cos 0 = 0$।`,
    "C05-M2": t`सूत्र वर्ग देता है, $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$। अंत में वर्गमूल लीजिए: $\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}$।`,
    "C05-M3": t`$\frac{x}{2}$ कहाँ है यह जानने के लिए $x$ की परिसीमा आधी कीजिए, और उस quadrant का चिह्न लीजिए। $\pi < x < \frac{3\pi}{2}$ के लिए, $\frac{x}{2}$ quadrant II में है, quadrant III में नहीं।`,
    "C05-M4": t`Angle आधा होने पर अनुपात आधा नहीं होता: $\sin 30^\circ = \frac{1}{2}$, $\frac{1}{2}\sin 60^\circ$ नहीं। $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$, या $\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$ लगाइए।`,
    "C05-M5": t`$1 - \cos x = 2\sin^2\frac{x}{2}$, इसलिए 2 से भाग दीजिए: $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$। $x = \pi$ पर जाँचिए: $\sin^2\frac{\pi}{2} = 1$, और $\frac{1 - \cos\pi}{2} = 1$।`,
  },
  solutions: {
    "C05-Q1": [
      t`$\frac{\pi}{8}$, $\frac{\pi}{4}$ का आधा है और quadrant I में है, इसलिए $\sin\frac{\pi}{8} > 0$।`,
      t`$\sin^2\frac{\pi}{8} = \frac{1 - \cos\frac{\pi}{4}}{2} = \frac{1 - \frac{1}{\sqrt{2}}}{2} = \frac{2 - \sqrt{2}}{4}$।`,
      t`धनात्मक मूल लीजिए: $\sin\frac{\pi}{8} = \frac{\sqrt{2 - \sqrt{2}}}{2}$।`,
    ],
    "C05-Q2": [
      t`$x = \frac{\pi}{4}$ के साथ: $\tan\frac{\pi}{8} = \frac{\sin\frac{\pi}{4}}{1 + \cos\frac{\pi}{4}} = \frac{\frac{1}{\sqrt{2}}}{1 + \frac{1}{\sqrt{2}}} = \frac{1}{\sqrt{2} + 1}$।`,
      t`परिमेयकरण कीजिए: $\frac{1}{\sqrt{2} + 1} \cdot \frac{\sqrt{2} - 1}{\sqrt{2} - 1} = \sqrt{2} - 1$।`,
      t`यह धनात्मक है, जैसा होना चाहिए: $\frac{\pi}{8}$ quadrant I में है। इसलिए $\tan\frac{\pi}{8} = \sqrt{2} - 1$।`,
    ],
    "C05-Q3": [
      t`$\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$। Quadrant II में $\cos x < 0$, इसलिए $\cos x = -\frac{3}{5}$।`,
      t`परिसीमा आधी कीजिए: $\frac{\pi}{4} < \frac{x}{2} < \frac{\pi}{2}$, quadrant I, इसलिए $\cos\frac{x}{2} > 0$।`,
      t`$\cos^2\frac{x}{2} = \frac{1 + \left(-\frac{3}{5}\right)}{2} = \frac{1}{5}$, इसलिए $\cos\frac{x}{2} = \frac{1}{\sqrt{5}}$।`,
    ],
    "C05-Q4": [
      t`$\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$। Quadrant III में $\cos x < 0$ और $\sin x < 0$, इसलिए $\cos x = -\frac{3}{5}$ और $\sin x = -\frac{4}{5}$।`,
      t`परिसीमा आधी कीजिए: $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$, quadrant II, इसलिए $\tan\frac{x}{2} < 0$।`,
      t`$\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x} = \frac{-\frac{4}{5}}{\frac{2}{5}} = -2$, अपेक्षा के अनुसार ऋणात्मक।`,
    ],
    "C05-Q5": [
      t`दोनों को $\sin\frac{\theta}{2}$ और $\cos\frac{\theta}{2}$ में लिखिए: $\tan\frac{\theta}{2} + \cot\frac{\theta}{2} = \frac{\sin^2\frac{\theta}{2} + \cos^2\frac{\theta}{2}}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{1}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}}$।`,
      t`$\cot\frac{\theta}{2} - \tan\frac{\theta}{2} = \frac{\cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2}}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{\cos\theta}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}}$।`,
      t`भाग दीजिए: हर कट जाते हैं, और बचता है $\frac{1}{\cos\theta} = \sec\theta$।`,
    ],
    "C05-Q6": [
      t`$\sin x\tan\frac{x}{2} = 2\sin\frac{x}{2}\cos\frac{x}{2} \cdot \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = 2\sin^2\frac{x}{2}$।`,
      t`$2\sin^2\frac{x}{2} = 1 - \cos x$।`,
      t`इसलिए व्यंजक $1 - \cos x + 2\cos x = 1 + \cos x$ है।`,
    ],
  },
};
