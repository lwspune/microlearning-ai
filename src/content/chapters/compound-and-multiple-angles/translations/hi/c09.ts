import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "hi",
  status: "approved",
  source: "11eb59e75a938c",
  hook: {
    prompt: t`न $\cos 52.5^\circ$ आपकी सारणी में है न $\cos 7.5^\circ$। **क्या फिर भी आप $\cos 52.5^\circ\cos 7.5^\circ$ का सटीक मान निकाल सकते हैं?**`,
    reveal: t`हाँ। दोनों angles का योग $60^\circ$ है और अंतर $45^\circ$, इसलिए $2\cos 52.5^\circ\cos 7.5^\circ = \cos 60^\circ + \cos 45^\circ$ $= \frac{1}{2} + \frac{\sqrt{2}}{2}$। इसे आधा कीजिए: $\cos 52.5^\circ\cos 7.5^\circ = \frac{1 + \sqrt{2}}{4}$।`,
  },
  intuition: [
    t`$\sin(A + B)$ से शुरू कीजिए, जो $\sin A\cos B + \cos A\sin B$ है।`,
    t`और $\sin(A - B)$, $\sin A\cos B - \cos A\sin B$ है।`,
    t`इन्हें जोड़िए: $\cos A\sin B$ वाले पद कट जाते हैं, और $2\sin A\cos B$ बचता है।`,
    t`इसके बजाय घटाइए, तो $2\cos A\sin B$ बचता है।`,
    t`$\cos(A - B)$ और $\cos(A + B)$ के साथ भी ऐसा ही कीजिए, तो $2\cos A\cos B$ और $2\sin A\sin B$ मिलते हैं।`,
    t`इसलिए एक **product** (गुणनफल), यानी एक अनुपात गुणा दूसरा, दो अनुपातों का योग बन जाता है, जिसे काटना, जोड़ना या मान निकालना आसान है।`,
  ],
  formal: [
    {
      title: t`चार सूत्र`,
      points: [
        t`$2\sin A\cos B$ बराबर है $\sin(A + B) + \sin(A - B)$ के।`,
        t`$2\cos A\sin B$ बराबर है $\sin(A + B) - \sin(A - B)$ के।`,
        t`$2\cos A\cos B$ बराबर है $\cos(A + B) + \cos(A - B)$ के।`,
        t`$2\sin A\sin B$ बराबर है $\cos(A - B) - \cos(A + B)$ के।`,
      ],
    },
    {
      title: t`Angles में आधे नहीं`,
      points: [
        t`दाईं ओर के angles केवल $A + B$ और $A - B$ हैं।`,
        t`इन सूत्रों में कोई आधा नहीं है।`,
        t`आधे **sum-into-product** (योग से गुणनफल) सूत्रों में आते हैं, जो उलटी दिशा में चलते हैं: वे योग को गुणनफल में बदलते हैं।`,
      ],
    },
    {
      title: t`दो cosines या दो sines`,
      points: [
        t`cos गुणा cos में धन चिह्न है: $\cos(A + B) + \cos(A - B)$।`,
        t`sin गुणा sin, अंतर का cos **घटा** योग का cos है।`,
        t`इसलिए $2\sin A\sin B$, $\cos(A - B) - \cos(A + B)$ है, जिसमें अंतर पहले आता है।`,
      ],
    },
    {
      title: t`sin गुणा cos`,
      points: [
        t`sin गुणा cos से sines मिलते हैं: $\sin(A + B)$ और $\sin(A - B)$।`,
        t`दोनों **factors** (गुणनखंडों), यानी गुणा हो रहे अनुपातों, का क्रम मायने रखता है: $2\cos A\sin B$ में ऋण चिह्न है।`,
        t`इसलिए इसे ऐसे लिखिए कि sin का angle $A$ हो, तो हमेशा धन चिह्न आता है।`,
        t`उदाहरण के लिए, $2\cos 5x\sin 2x = 2\sin 2x\cos 5x$।`,
        t`यह $\sin 7x + \sin(-3x)$ है, और $\sin(-3x) = -\sin 3x$।`,
        t`इसलिए $2\cos 5x\sin 2x = \sin 7x - \sin 3x$।`,
      ],
    },
    {
      title: t`2 ज़रूरी है`,
      points: [
        t`सूत्र गुणनफल का दुगुना देते हैं, गुणनफल नहीं।`,
        t`इसलिए $\sin A\cos B$ बराबर है $\frac{1}{2}[\sin(A + B) + \sin(A - B)]$ के।`,
      ],
    },
    {
      title: t`तीन या चार गुणनखंड`,
      points: [
        t`एक बार में दो गुणनखंड बदलिए।`,
        t`ज्ञात मान संख्याओं के रूप में रखिए, जैसे $\cos 60^\circ = \frac{1}{2}$ और $\sin 60^\circ = \frac{\sqrt{3}}{2}$।`,
        t`पद काटने के लिए $\cos(180^\circ - \theta) = -\cos\theta$ लगाइए।`,
        t`उदाहरण के लिए, $\cos 100^\circ$, $-\cos 80^\circ$ बन जाता है, जो $\cos 80^\circ$ वाले पद को काट सकता है।`,
      ],
    },
  ],
  worked: {
    prompt: t`दिखाइए कि $\cos 20^\circ\cos 40^\circ\cos 60^\circ\cos 80^\circ = \frac{1}{16}$।`,
    steps: [
      t`$\cos 60^\circ = \frac{1}{2}$, इसलिए गुणनफल $\frac{1}{2}$ गुणा $\cos 20^\circ\cos 40^\circ\cos 80^\circ$ है।`,
      t`$2\cos 40^\circ\cos 20^\circ$ $= \cos 60^\circ + \cos 20^\circ$ $= \frac{1}{2} + \cos 20^\circ$। इसलिए $\cos 20^\circ\cos 40^\circ\cos 80^\circ$ $= \frac{1}{2}\left(\frac{1}{2} + \cos 20^\circ\right)\cos 80^\circ$ $= \frac{1}{4}\cos 80^\circ$ $+ \frac{1}{2}\cos 20^\circ\cos 80^\circ$।`,
      t`$2\cos 80^\circ\cos 20^\circ$ $= \cos 100^\circ + \cos 60^\circ$ $= -\cos 80^\circ + \frac{1}{2}$, इसलिए $\frac{1}{2}\cos 20^\circ\cos 80^\circ$ $= \frac{1}{8} - \frac{1}{4}\cos 80^\circ$।`,
      t`जोड़िए: $\frac{1}{4}\cos 80^\circ + \frac{1}{8}$ $- \frac{1}{4}\cos 80^\circ = \frac{1}{8}$। फिर पहले कदम वाले $\frac{1}{2}$ से गुणा कीजिए।`,
    ],
    answer: t`$\frac{1}{2} \cdot \frac{1}{8} = \frac{1}{16}$।`,
  },
  remediation: {
    "C09-M1": t`विस्तारों को घटाइए: $\cos(A - B) - \cos(A + B) = 2\sin A\sin B$। अंतर का cos पहले आता है: $2\sin A\sin B = \cos(A - B) - \cos(A + B)$।`,
    "C09-M2": t`क्रम मायने रखता है: $2\sin A\cos B = \sin(A + B) + \sin(A - B)$ पर $2\cos A\sin B = \sin(A + B) - \sin(A - B)$। sin का angle पहले रखिए, तो हमेशा धन चिह्न आता है।`,
    "C09-M3": t`सूत्र गुणनफल का **दुगुना** देते हैं: $\sin A\cos B = \frac{1}{2}[\sin(A + B) + \sin(A - B)]$। $k$ गुणा गुणनफल के लिए, कोष्ठक का $\frac{k}{2}$ गुना लीजिए।`,
    "C09-M4": t`आधे केवल तब आते हैं जब योग को गुणनफल में बदला जाए। गुणनफल को योग में बदलते समय angles सीधे $A + B$ और $A - B$ होते हैं: $2\sin A\cos B = \sin(A + B) + \sin(A - B)$।`,
    "C09-M5": t`$\cos(A - B)$ और $\cos(A + B)$ जोड़ने से sin वाले पद कट जाते हैं, इसलिए धन चिह्न cos-cos के साथ जाता है: $2\cos A\cos B = \cos(A + B) + \cos(A - B)$। ऋण चिह्न से $2\sin A\sin B = \cos(A - B) - \cos(A + B)$ मिलता है।`,
  },
  solutions: {
    "C09-Q1": [
      t`$\sin 4x\cos 2x = \frac{1}{2} \cdot 2\sin 4x\cos 2x$।`,
      t`$A = 4x$, $B = 2x$ के साथ $2\sin A\cos B = \sin(A + B) + \sin(A - B)$: $2\sin 4x\cos 2x = \sin 6x + \sin 2x$।`,
      t`इसे आधा कीजिए: $\sin 4x\cos 2x = \frac{1}{2}(\sin 6x + \sin 2x)$।`,
    ],
    "C09-Q2": [
      t`मान लीजिए $P = \frac{x + y}{2}$ और $Q = \frac{x - y}{2}$। तब $P + Q = x$ और $P - Q = y$।`,
      t`$2\sin P\sin Q = \cos(P - Q) - \cos(P + Q) = \cos y - \cos x$।`,
      t`$4\sin P\sin Q$ उसका दुगुना है: $2\cos y - 2\cos x$।`,
    ],
    "C09-Q3": [
      t`$A = 35^\circ$, $B = 75^\circ$ के साथ $2\cos A\cos B = \cos(A + B) + \cos(A - B)$।`,
      t`$= \cos 110^\circ + \cos(-40^\circ)$, और $\cos(-40^\circ) = \cos 40^\circ$।`,
      t`इसलिए $2\cos 35^\circ\cos 75^\circ = \cos 110^\circ + \cos 40^\circ$।`,
    ],
    "C09-Q4": [
      t`$A = 20^\circ$, $B = 40^\circ$ के साथ $2\sin A\sin B = \cos(A - B) - \cos(A + B)$।`,
      t`$= \cos(-20^\circ) - \cos 60^\circ = \cos 20^\circ - \frac{1}{2}$।`,
    ],
    "C09-Q5": [
      t`$A = 75^\circ$, $B = 15^\circ$ के साथ $2\cos A\sin B = \sin(A + B) - \sin(A - B)$।`,
      t`$= \sin 90^\circ - \sin 60^\circ = 1 - \frac{\sqrt{3}}{2}$।`,
    ],
    "C09-Q6": [
      t`$\tan(60^\circ + x)\tan(60^\circ - x) = \dfrac{2\sin(60^\circ + x)\sin(60^\circ - x)}{2\cos(60^\circ + x)\cos(60^\circ - x)}$। Angles का अंतर $2x$ है और योग $120^\circ$।`,
      t`अंश: $\cos 2x - \cos 120^\circ = \cos 2x + \frac{1}{2}$। हर: $\cos 120^\circ + \cos 2x = \cos 2x - \frac{1}{2}$।`,
      t`अंश और हर को $2$ से गुणा कीजिए: $\dfrac{2\cos 2x + 1}{2\cos 2x - 1}$।`,
    ],
  },
};
