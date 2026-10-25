import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c10: ConceptTranslation = {
  id: "C10",
  lang: "hi",
  status: "approved",
  source: "0c63e1a8ede6ea",
  hook: {
    prompt: t`एक त्रिभुज के angles $40^\circ$, $60^\circ$ और $80^\circ$ हैं। Calculator देता है $\tan 40^\circ + \tan 60^\circ + \tan 80^\circ \approx 8.2424$, और $\tan 40^\circ \tan 60^\circ \tan 80^\circ \approx 8.2424$ भी। **क्या यह संयोग है?**`,
    reveal: t`नहीं। यह हर उस त्रिभुज में होता है जिसमें समकोण न हो। क्योंकि $40^\circ + 60^\circ = 180^\circ - 80^\circ$, $\tan(40^\circ + 60^\circ) = -\tan 80^\circ$। बाएँ पक्ष को tan सूत्र से लिखिए और भिन्न हटाइए: तीनों tans का योग उनके गुणनफल के बराबर निकलता है।`,
  },
  intuition: [
    t`किसी भी त्रिभुज $ABC$ में तीनों angles का योग $\pi$, यानी $180^\circ$, होता है: $A + B + C = \pi$।`,
    t`इसलिए $A + B = \pi - C$, यानी $C$ का **supplement** (संपूरक कोण): वह angle जो $C$ को $\pi$ तक पूरा करता है।`,
    t`इनका योग $\pi$ है, इसलिए $A + B$ और $C$ **allied angles** हैं: ऐसे angles जिनका योग या अंतर समकोण का गुणज हो।`,
    t`Allied-angle नियम $A + B$ के हर अनुपात को $C$ के अनुपात में बदलते हैं: sin का चिह्न वही रहता है, cos और tan का बदल जाता है।`,
    t`इसे आधा कीजिए: $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, यानी $\frac{C}{2}$ का **complement** (पूरक कोण), वह angle जो इसे $\frac{\pi}{2}$ तक पूरा करता है।`,
    t`Complement के लिए, हर अनुपात अपने **co-ratio** (सह-अनुपात) में बदल जाता है: sin से cos, cos से sin, tan से cot।`,
  ],
  formal: [
    {
      title: t`पूरे angles`,
      points: [
        t`त्रिभुज में $A + B = \pi - C$, इसलिए $A + B$ का हर अनुपात $\pi - C$ का अनुपात है।`,
        t`$\sin(A + B) = \sin C$।`,
        t`$\cos(A + B) = -\cos C$।`,
        t`$\tan(A + B) = -\tan C$।`,
        t`ये उलटे भी पढ़े जाते हैं: $\sin C = \sin(A + B)$ और $-\cos C = \cos(A + B)$।`,
      ],
    },
    {
      title: t`Half angles (अर्ध कोण)`,
      points: [
        t`आधा करने पर, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, इसलिए हर अनुपात $\frac{C}{2}$ का co-ratio बन जाता है।`,
        t`$\sin\frac{A + B}{2} = \cos\frac{C}{2}$।`,
        t`$\cos\frac{A + B}{2} = \sin\frac{C}{2}$।`,
        t`$\tan\frac{A + B}{2} = \cot\frac{C}{2}$।`,
        t`यहाँ पूरे angles की तरह चिह्न नहीं बदलते: हर अनुपात केवल अपने co-ratio में बदलता है।`,
      ],
    },
    {
      title: t`tans का योग = tans का गुणनफल`,
      points: [
        t`$\tan(A + B) = -\tan C$ को योग के tan वाले सूत्र से लिखिए।`,
        t`$\frac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$।`,
        t`भिन्न हटाइए: दोनों पक्षों को $1 - \tan A\tan B$ से गुणा कीजिए।`,
        t`पदों को इकट्ठा कीजिए: $\tan A + \tan B + \tan C$ $= \tan A\tan B\tan C$।`,
        t`यह तब सही है जब कोई angle समकोण न हो, ताकि हर tan परिभाषित हो।`,
      ],
    },
    {
      title: t`cot और अर्ध कोण वाले रूप`,
      points: [
        t`tan वाली identity को गुणनफल $\tan A\tan B\tan C$ से भाग दीजिए।`,
        t`इससे मिलता है $\cot A\cot B + \cot B\cot C$ $+ \cot C\cot A = 1$।`,
        t`Half angles के लिए, इसकी जगह $\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \cot\frac{C}{2}$ से शुरू कीजिए।`,
        t`वही कदम देते हैं $\tan\frac{A}{2}\tan\frac{B}{2} + \tan\frac{B}{2}\tan\frac{C}{2}$ $+ \tan\frac{C}{2}\tan\frac{A}{2} = 1$।`,
      ],
    },
    {
      title: t`sines और cosines के योग`,
      points: [
        t`**Sum into product** (योग से गुणनफल) सूत्र दो sines, या दो cosines, के योग को गुणनफल में बदलते हैं।`,
        t`इनमें से एक को दो पदों पर लगाइए: $A + B$ का, या $\frac{A + B}{2}$ का, एक अनुपात निकलता है।`,
        t`उसे $C$ के, या $\frac{C}{2}$ के, अनुपात में बदलिए।`,
        t`तीसरे पद, जैसे $\sin C$, $\cos C$ या $\cos 2C$, को ऐसे रूप में लिखिए जिसमें वह अनुपात भी हो।`,
        t`**Common factor** (साझा गुणनखंड) बाहर निकालिए, वह अनुपात जो अब दोनों भागों में है।`,
        t`$C$ के दूसरे अनुपात को वापस $A + B$ के अनुपात में बदलिए, और फिर से योग से गुणनफल लगाइए।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\triangle ABC$ में, $\cos 2A + \cos 2B + \cos 2C$ को सरल कीजिए।`,
    steps: [
      t`$\cos 2A + \cos 2B$ $= 2\cos(A + B)\cos(A - B)$ $= -2\cos C\cos(A - B)$, क्योंकि $\cos(A + B) = -\cos C$।`,
      t`गुणनखंड $\cos C$ साझा करने के लिए $\cos 2C = 2\cos^2 C - 1$ लिखिए: योग $-2\cos C\left[\cos(A - B) - \cos C\right]$ $- 1$ है।`,
      t`$-\cos C$ को वापस $\cos(A + B)$ में बदलिए: कोष्ठक $\cos(A - B) + \cos(A + B)$ $= 2\cos A\cos B$ है।`,
    ],
    answer: t`$\cos 2A + \cos 2B + \cos 2C$ $= -1 - 4\cos A\cos B\cos C$।`,
  },
  remediation: {
    "C10-M1": t`$A + B = \pi - C$, इसलिए $\cos(A + B) = -\cos C$ और $\tan(A + B) = -\tan C$; केवल sin का चिह्न वही रहता है। Half angles, complements हैं, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, इसलिए हर अनुपात बदलता है: $\cos\frac{A + B}{2} = \sin\frac{C}{2}$।`,
    "C10-M2": t`दोनों भागों को आधा कीजिए: $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$। इसलिए $\sin\frac{A + B}{2} = \cos\frac{C}{2}$, $\cos\frac{A + B}{2} = \sin\frac{C}{2}$ और $\tan\frac{A + B}{2} = \cot\frac{C}{2}$।`,
    "C10-M3": t`$A + B = \pi - C$ एक supplement है, complement नहीं: अनुपात वही रहता है और केवल चिह्न बदल सकता है, $\sin(A + B) = \sin C$, $\cos(A + B) = -\cos C$। Co-ratios में बदलना half angles के लिए है, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$।`,
    "C10-M4": t`$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$, इसलिए $\tan A + \tan B = \tan(A + B)(1 - \tan A\tan B)$। त्रिभुज में, $\tan(A + B) = -\tan C$।`,
    "C10-M5": t`$A + B + C = \pi$ से $A + B = \pi - C$ मिलता है, $-C$ नहीं। तब $\sin(A + B) = \sin(\pi - C) = \sin C$: धनात्मक, जैसा त्रिभुज के किसी angle का sine होना चाहिए।`,
    "C10-M6": t`ऋण चिह्न रखिए: $\cos P - \cos Q = -2\sin\frac{P + Q}{2}\sin\frac{P - Q}{2}$। $P = 0$, $Q = \pi$ से जाँचिए: बायाँ पक्ष $1 - (-1) = 2$ है, और दायाँ भी।`,
  },
  solutions: {
    "C10-Q1": [
      t`$\sin 2A + \sin 2B = 2\sin(A + B)\cos(A - B) = 2\sin C\cos(A - B)$, क्योंकि $\sin(A + B) = \sin(\pi - C) = \sin C$।`,
      t`$\sin 2C = 2\sin C\cos C$, इसलिए व्यंजक $2\sin C\left[\cos(A - B) - \cos C\right]$ है।`,
      t`$-\cos C = \cos(A + B)$, इसलिए कोष्ठक $\cos(A - B) + \cos(A + B) = 2\cos A\cos B$ है।`,
      t`इसलिए $\sin 2A + \sin 2B - \sin 2C = 4\cos A\cos B\sin C$।`,
    ],
    "C10-Q2": [
      t`$\sin A + \sin B = 2\sin\frac{A + B}{2}\cos\frac{A - B}{2} = 2\cos\frac{C}{2}\cos\frac{A - B}{2}$, क्योंकि $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$।`,
      t`$\sin C = 2\sin\frac{C}{2}\cos\frac{C}{2}$, इसलिए योग $2\cos\frac{C}{2}\left[\cos\frac{A - B}{2} + \sin\frac{C}{2}\right]$ है।`,
      t`$\sin\frac{C}{2} = \cos\frac{A + B}{2}$, इसलिए कोष्ठक $\cos\frac{A - B}{2} + \cos\frac{A + B}{2} = 2\cos\frac{A}{2}\cos\frac{B}{2}$ है।`,
      t`इसलिए $\sin A + \sin B + \sin C = 4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$।`,
    ],
    "C10-Q3": [
      t`$\cos A + \cos B = 2\cos\frac{A + B}{2}\cos\frac{A - B}{2} = 2\sin\frac{C}{2}\cos\frac{A - B}{2}$, क्योंकि $\cos\frac{A + B}{2} = \sin\frac{C}{2}$।`,
      t`$\cos C = 1 - 2\sin^2\frac{C}{2}$, इसलिए योग $1 + 2\sin\frac{C}{2}\left[\cos\frac{A - B}{2} - \sin\frac{C}{2}\right]$ है।`,
      t`$\sin\frac{C}{2} = \cos\frac{A + B}{2}$, और $\cos\frac{A - B}{2} - \cos\frac{A + B}{2} = -2\sin\frac{A}{2}\sin\left(-\frac{B}{2}\right) = 2\sin\frac{A}{2}\sin\frac{B}{2}$।`,
      t`इसलिए $\cos A + \cos B + \cos C = 1 + 4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$।`,
    ],
    "C10-Q4": [
      t`$A + B = \pi - C$, इसलिए $\tan(A + B) = -\tan C$।`,
      t`$\dfrac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$, इसलिए $\tan A + \tan B = -\tan C\,(1 - \tan A\tan B)$।`,
      t`इसलिए $\tan A + \tan B = \tan A\tan B\tan C - \tan C$: यह वही है जो $\tan A + \tan B + \tan C = \tan A\tan B\tan C$।`,
    ],
    "C10-Q5": [
      t`$\frac{A}{2} + \frac{B}{2} = \frac{\pi}{2} - \frac{C}{2}$, इसलिए $\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \cot\frac{C}{2}$।`,
      t`$\dfrac{\tan\frac{A}{2} + \tan\frac{B}{2}}{1 - \tan\frac{A}{2}\tan\frac{B}{2}} = \cot\frac{C}{2}$, इसलिए $\tan\frac{A}{2} + \tan\frac{B}{2} = \cot\frac{C}{2}\left(1 - \tan\frac{A}{2}\tan\frac{B}{2}\right)$।`,
      t`इसलिए $\tan\frac{A}{2} + \tan\frac{B}{2} = \cot\frac{C}{2} - \tan\frac{A}{2}\tan\frac{B}{2}\cot\frac{C}{2}$। $\tan\frac{C}{2}$ से गुणा करने पर identity $\sum \tan\frac{A}{2}\tan\frac{B}{2} = 1$ मिलती है।`,
    ],
  },
};
