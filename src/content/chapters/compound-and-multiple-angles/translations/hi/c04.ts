import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c04: ConceptTranslation = {
  id: "C04",
  lang: "hi",
  status: "approved",
  source: "05236aafc2f35c",
  hook: {
    prompt: t`$2\sin 30^\circ = 2 \times \frac{1}{2} = 1$। **तो क्या $\sin 60^\circ = 1$ है?**`,
    reveal: t`नहीं: $\sin 60^\circ = \frac{\sqrt{3}}{2}$। Angle दुगुना करने से sine दुगुना नहीं होता। $60^\circ = 30^\circ + 30^\circ$ लिखिए और योग का सूत्र लगाइए: $\sin 60^\circ = 2\sin 30^\circ\cos 30^\circ$ $= 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2}$ $= \frac{\sqrt{3}}{2}$। अतिरिक्त गुणनखंड $\cos 30^\circ$ ही इसे $1$ से नीचे खींचता है।`,
  },
  intuition: [
    t`**Multiple angle** (अपवर्त्य कोण) एक पूर्ण संख्या गुणा एक angle है, जैसे $2A$ या $3A$।`,
    t`यहाँ एक arm, initial arm से angle $A$, यानी $30^\circ$, घूमती है।`,
    t`वह फिर से $A$ घूमती है, $2A$ तक, यानी **double angle** (द्विगुण कोण): इसलिए $2A = A + A$, एक योग।`,
    t`**Double-angle formulas**, $\sin 2A$, $\cos 2A$ और $\tan 2A$ के लिए, $B = A$ रखकर योग के सूत्रों से आते हैं।`,
    t`Angle दुगुना करने से sine दुगुना नहीं होता: इस न्यून $A$ के लिए, $\sin 2A$, $2\sin A$ से कम है।`,
    t`उलटा पढ़ें, दाएँ से बाएँ, तो ये सूत्र $1 - \cos 2A$ को एक अकेले वर्ग में, और $\sin A\cos A$ को $\sin 2A$ के आधे में बदल देते हैं।`,
  ],
  formal: [
    {
      title: t`Double angle का sine`,
      points: [
        t`योग के सूत्र से शुरू कीजिए: $\sin(A + B)$ बराबर है $\sin A\cos B + \cos A\sin B$ के।`,
        t`$B = A$ रखिए: दायाँ पक्ष $\sin A\cos A + \cos A\sin A$ बन जाता है।`,
        t`ये दो बराबर पद हैं, इसलिए इनका योग इनमें से एक का दुगुना है।`,
        t`इसलिए $\sin 2A = 2\sin A\cos A$।`,
        t`$2$ और $\cos A$ दोनों रखिए: $\sin 2A$, $2\sin A$ नहीं है।`,
      ],
    },
    {
      title: t`Double angle का cosine`,
      points: [
        t`योग के सूत्र से शुरू कीजिए: $\cos(A + B)$ बराबर है $\cos A\cos B - \sin A\sin B$ के।`,
        t`$B = A$ रखिए: दायाँ पक्ष $\cos A\cos A - \sin A\sin A$ बन जाता है।`,
        t`इसलिए $\cos 2A = \cos^2 A - \sin^2 A$।`,
        t`पहले cosine का वर्ग आता है, फिर ऋण चिह्न।`,
      ],
    },
    {
      title: t`cos 2A के तीन रूप`,
      points: [
        t`क्योंकि $\sin^2 A + \cos^2 A = 1$, एक वर्ग को दूसरे से बदला जा सकता है।`,
        t`$\cos^2 A$ की जगह $1 - \sin^2 A$ रखिए: $\cos 2A = 1 - 2\sin^2 A$।`,
        t`$\sin^2 A$ की जगह $1 - \cos^2 A$ रखिए: $\cos 2A = 2\cos^2 A - 1$।`,
        t`इसलिए $\cos 2A$ के तीन रूप हैं, और तीनों बराबर हैं।`,
        t`वह रूप चुनिए जो आपके पास वाले को काट दे।`,
      ],
    },
    {
      title: t`Double angle का tangent`,
      points: [
        t`योग के सूत्र से शुरू कीजिए: $\tan(A + B)$ बराबर है $\frac{\tan A + \tan B}{1 - \tan A\tan B}$ के।`,
        t`$B = A$ रखिए: दायाँ पक्ष $\frac{\tan A + \tan A}{1 - \tan A\tan A}$ बन जाता है।`,
        t`इसलिए $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$।`,
        t`हर में $\tan(A + B)$ वाला ऋण चिह्न रहता है।`,
      ],
    },
    {
      title: t`सूत्रों को उलटा पढ़ना`,
      points: [
        t`दाएँ से बाएँ पढ़ें, तो सूत्र वर्गों और गुणनफलों को double angles में बदल देते हैं।`,
        t`$\cos 2A = 1 - 2\sin^2 A$ से: $1 - \cos 2A = 2\sin^2 A$।`,
        t`$\cos 2A = 2\cos^2 A - 1$ से: $1 + \cos 2A = 2\cos^2 A$।`,
        t`Sine का वर्ग ऋण चिह्न के साथ जाता है: $A = 0$ पर, $1 - \cos 0 = 0 = 2\sin^2 0$।`,
        t`$\sin 2A = 2\sin A\cos A$ से: $\sin A\cos A = \frac{1}{2}\sin 2A$।`,
      ],
    },
    {
      title: t`एक अनुपात और quadrant से`,
      points: [
        t`अक्सर $A$ का एक अनुपात दिया होता है, साथ में वह quadrant जिसमें $A$ है।`,
        t`पहले $\sin A$ और $\cos A$ ज्ञात कीजिए, quadrant से मिले चिह्नों के साथ।`,
        t`फिर उन्हें double-angle सूत्रों में रखिए।`,
        t`$\sin 2A$ और $\tan 2A$ उन चिह्नों पर निर्भर करते हैं।`,
        t`$\cos 2A$ में केवल वर्ग आते हैं, इसलिए चिह्नों से वह नहीं बदलता।`,
      ],
    },
    {
      title: t`कोई भी angle दुगुना हो सकता है`,
      points: [
        t`हर angle अपने आधे का दुगुना है: $6\theta = 2(3\theta)$।`,
        t`इसलिए सूत्र $A$ की जगह $3\theta$ के साथ भी काम करते हैं।`,
        t`उदाहरण के लिए, $\sin 6\theta = 2\sin 3\theta\cos 3\theta$।`,
      ],
    },
    {
      title: t`Cosines जिनके angles दुगुने होते जाते हैं`,
      points: [
        t`$\cos\theta\cos 2\theta\cos 4\theta$ में, हर angle पिछले का दुगुना है।`,
        t`आगे $\sin\theta$ रखिए, और गुणनफल **folds up** (सिमटता जाता है): एक बार में एक जोड़ी, वह एक sine में जुड़ता है।`,
        t`पहले, $2\sin\theta\cos\theta = \sin 2\theta$।`,
        t`फिर, $2\sin 2\theta\cos 2\theta = \sin 4\theta$।`,
        t`फिर, $2\sin 4\theta\cos 4\theta = \sin 8\theta$।`,
        t`तीन कदमों में तीन 2 लगे, इसलिए $8\sin\theta\cos\theta\cos 2\theta\cos 4\theta$ बराबर है $\sin 8\theta$ के।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\tan A = -\frac{3}{4}$ और $\frac{3\pi}{2} < A < 2\pi$, तो $\sin 2A$, $\cos 2A$ और $\tan 2A$ ज्ञात कीजिए।`,
    steps: [
      t`चौथे quadrant में $\cos A > 0$ और $\sin A < 0$। $\sec^2 A = 1 + \frac{9}{16}$ $= \frac{25}{16}$, इसलिए $\cos A = \frac{4}{5}$ और $\sin A = \tan A\cos A$ $= -\frac{3}{5}$।`,
      t`$\sin 2A = 2\sin A\cos A$ $= 2\left(-\frac{3}{5}\right)\left(\frac{4}{5}\right)$ $= -\frac{24}{25}$।`,
      t`$\cos 2A = \cos^2 A - \sin^2 A$ $= \frac{16}{25} - \frac{9}{25}$ $= \frac{7}{25}$।`,
      t`$\tan 2A = \dfrac{2\tan A}{1 - \tan^2 A}$ $= \dfrac{-\frac{3}{2}}{1 - \frac{9}{16}}$ $= -\frac{3}{2} \cdot \frac{16}{7}$ $= -\frac{24}{7}$। जाँच: $\frac{\sin 2A}{\cos 2A} = \frac{-24/25}{7/25}$ $= -\frac{24}{7}$।`,
    ],
    answer: t`$\sin 2A = -\frac{24}{25}$, $\cos 2A = \frac{7}{25}$, $\tan 2A = -\frac{24}{7}$।`,
  },
  remediation: {
    "C04-M1": t`$\sin 2A$, $\sin(A + A)$ है, $\sin A$ का दुगुना नहीं: योग का सूत्र $\sin 2A = 2\sin A\cos A$ देता है। $A = 30^\circ$ से जाँचिए: $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $1$ नहीं।`,
    "C04-M2": t`$\cos 2A = \cos(A + A) = \cos^2 A - \sin^2 A$, पहले cosine। इसलिए $1 - \cos 2A = 2\sin^2 A$ और $1 + \cos 2A = 2\cos^2 A$; $A = 0$ से जाँचिए।`,
    "C04-M3": t`$\sin(A + A)$ के दो बराबर पद जुड़ते हैं: $\sin 2A = 2\sin A\cos A$ और $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$। उलटा पढ़ें, तो $\sin A\cos A = \frac{1}{2}\sin 2A$।`,
    "C04-M4": t`$\tan(A + A) = \frac{\tan A + \tan A}{1 - \tan A\tan A}$ से, $\tan 2A$ का हर $1 - \tan^2 A$ है। रूप $\frac{2\tan A}{1 + \tan^2 A}$, $\sin 2A$ है।`,
    "C04-M5": t`दुगुना करने से पहले quadrant से $\sin x$ और $\cos x$ के चिह्न तय कीजिए। $\frac{\pi}{2} < x < \pi$ में $\sin x > 0$ और $\cos x < 0$, इसलिए $\sin 2x$ और $\tan x$ ऋणात्मक हैं।`,
    "C04-M6": t`$\sin 2A$, angle $2A$ का sine है; $\sin^2 A$ का अर्थ है $(\sin A)^2$। ये अलग हैं: $\sin 2A = 2\sin A\cos A$ और $\cos 2A = \cos^2 A - \sin^2 A$।`,
  },
  solutions: {
    "C04-Q1": [
      t`$\frac{\pi}{2} < x < \pi$ में $\cos x < 0$ और $\sin x > 0$: $\cos x = \frac{1}{\sec x} = -\frac{5}{13}$ और $\sin x = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$।`,
      t`इसलिए $\sin 2x = 2\sin x\cos x = 2 \cdot \frac{12}{13} \cdot \left(-\frac{5}{13}\right) = -\frac{120}{169}$।`,
    ],
    "C04-Q2": [
      t`$\frac{\pi}{2} < x < \pi$ में: $\cos x = -\frac{5}{13}$, $\sin x = \frac{12}{13}$, इसलिए $\tan x = -\frac{12}{5}$।`,
      t`$\tan 2x = \dfrac{2\tan x}{1 - \tan^2 x} = \dfrac{-\frac{24}{5}}{1 - \frac{144}{25}} = \dfrac{-\frac{24}{5}}{-\frac{119}{25}}$।`,
      t`$= \frac{24}{5} \cdot \frac{25}{119} = \frac{120}{119}$।`,
    ],
    "C04-Q3": [
      t`Cosine के सूत्रों को उलटा पढ़िए: $1 - \cos 2\theta = 2\sin^2\theta$ और $1 + \cos 2\theta = 2\cos^2\theta$।`,
      t`इसलिए $\dfrac{1 - \cos 2\theta}{1 + \cos 2\theta} = \dfrac{2\sin^2\theta}{2\cos^2\theta} = \tan^2\theta$।`,
    ],
    "C04-Q4": [
      t`$\sin 2x = 2\sin x\cos x$, इसलिए $2\operatorname{cosec} 2x = \dfrac{2}{2\sin x\cos x} = \dfrac{1}{\sin x\cos x}$।`,
      t`$1 = \sin^2 x + \cos^2 x$ लिखिए: $\dfrac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \dfrac{\sin x}{\cos x} + \dfrac{\cos x}{\sin x} = \tan x + \cot x$।`,
    ],
    "C04-Q5": [
      t`$2\cot 2A = \dfrac{2}{\tan 2A} = 2 \cdot \dfrac{1 - \tan^2 A}{2\tan A} = \dfrac{1 - \tan^2 A}{\tan A}$।`,
      t`भिन्न को तोड़िए: $\dfrac{1}{\tan A} - \tan A = \cot A - \tan A$।`,
    ],
    "C04-Q6": [
      t`$4\theta$, $2\theta$ का दुगुना है: $\sin 4\theta = 2\sin 2\theta\cos 2\theta$।`,
      t`फिर दुगुना कीजिए: $= 2(2\sin\theta\cos\theta)(\cos^2\theta - \sin^2\theta)$।`,
      t`गुणा करके खोलिए: $= 4\sin\theta\cos^3\theta - 4\cos\theta\sin^3\theta$।`,
    ],
  },
};
