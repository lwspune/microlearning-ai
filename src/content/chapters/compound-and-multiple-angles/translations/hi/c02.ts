import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c02: ConceptTranslation = {
  id: "C02",
  lang: "hi",
  status: "approved",
  source: "0cd736344ac79f",
  hook: {
    prompt: t`$\tan 20^\circ + \tan 25^\circ + \tan 20^\circ \tan 25^\circ$ निकालिए। कोई भी tan अच्छी संख्या नहीं है। **क्या उत्तर अच्छी संख्या हो सकता है?**`,
    reveal: t`हाँ: यह ठीक $1$ है। क्योंकि $20^\circ + 25^\circ = 45^\circ$, $\tan 45^\circ = \frac{\tan 20^\circ + \tan 25^\circ}{1 - \tan 20^\circ \tan 25^\circ} = 1$। भिन्न हटाइए: $\tan 20^\circ + \tan 25^\circ$ $= 1 - \tan 20^\circ \tan 25^\circ$, इसलिए योग $1$ है।`,
  },
  intuition: [
    t`याद कीजिए: **compound angle** दो angles का योग या अंतर है, जिसे $A \pm B$ लिखते हैं।`,
    t`किसी भी tan की तरह, $\tan(A + B)$, $\frac{\sin(A + B)}{\cos(A + B)}$ है।`,
    t`अंश और हर का sin और cos सूत्रों से विस्तार कीजिए।`,
    t`फिर अंश और हर को $\cos A\cos B$ से भाग दीजिए: हर पद tan बन जाता है।`,
    t`अंश $A \pm B$ वाला चिह्न रखता है; हर $\cos(A \pm B)$ वाला, यानी उलटा चिह्न लेता है।`,
    t`इसलिए $\tan(A + B)$ कभी केवल $\tan A + \tan B$ नहीं होता।`,
  ],
  formal: [
    {
      title: t`tan के दो सूत्र`,
      points: [
        t`$\tan(A + B)$ बराबर है $\frac{\tan A + \tan B}{1 - \tan A\tan B}$ के।`,
        t`$\tan(A - B)$ बराबर है $\frac{\tan A - \tan B}{1 + \tan A\tan B}$ के।`,
        t`अंश में वही चिह्न है जो कोष्ठक में।`,
        t`हर में उलटा चिह्न है।`,
      ],
    },
    {
      title: t`ये कहाँ से आते हैं`,
      points: [
        t`$\tan(A + B)$ से शुरू कीजिए, जो $\frac{\sin(A + B)}{\cos(A + B)}$ है।`,
        t`इसका अंश $\sin A\cos B + \cos A\sin B$ है।`,
        t`इसका हर $\cos A\cos B - \sin A\sin B$ है।`,
        t`अंश और हर के हर पद को $\cos A\cos B$ से भाग दीजिए।`,
        t`अंश $\tan A + \tan B$ बन जाता है, क्योंकि $\frac{\sin A\cos B}{\cos A\cos B} = \tan A$।`,
        t`हर $1 - \tan A\tan B$ बन जाता है, जिससे सूत्र मिलता है।`,
      ],
    },
    {
      title: t`जब एक angle π/4 हो`,
      points: [
        t`$\tan\frac{\pi}{4} = 1$, इसलिए सूत्रों में $A = \frac{\pi}{4}$ और $\tan A = 1$ रखिए।`,
        t`$\tan\left(\frac{\pi}{4} + x\right)$ बराबर है $\frac{1 + \tan x}{1 - \tan x}$ के।`,
        t`$\tan\left(\frac{\pi}{4} - x\right)$ बराबर है $\frac{1 - \tan x}{1 + \tan x}$ के।`,
        t`उलटा पढ़ें तो ये एक भिन्न को एक अकेले tan में बदल देते हैं।`,
        t`$\frac{\cos x + \sin x}{\cos x - \sin x}$ के लिए, पहले अंश और हर को $\cos x$ से भाग दीजिए।`,
        t`यह $\frac{1 + \tan x}{1 - \tan x}$ बन जाता है, जो $\tan\left(\frac{\pi}{4} + x\right)$ है।`,
      ],
    },
    {
      title: t`योग या अंतर का cot`,
      points: [
        t`किसी अनुपात का **reciprocal** वही अनुपात उलटा है: $\cot\theta = \frac{1}{\tan\theta}$।`,
        t`इसलिए $\cot(A \pm B)$, $\frac{1}{\tan(A \pm B)}$ है।`,
        t`पहले tan निकालिए, फिर उसे उलटिए।`,
        t`उदाहरण के लिए, $\cot(A - B)$ बराबर है $\frac{1 + \tan A\tan B}{\tan A - \tan B}$ के।`,
        t`tan सूत्र में tan की जगह बस cot मत लिखिए: वह ग़लत है।`,
      ],
    },
    {
      title: t`भिन्न हटाना`,
      points: [
        t`मान लीजिए $C = A + B$, तो $\tan C$ बराबर है $\frac{\tan A + \tan B}{1 - \tan A\tan B}$ के।`,
        t`दोनों पक्षों को हर से गुणा कीजिए: $\tan C(1 - \tan A\tan B)$ बराबर है $\tan A + \tan B$ के।`,
        t`कोष्ठक खोलिए: $\tan C - \tan A\tan B\tan C$ बराबर है $\tan A + \tan B$ के।`,
        t`$\tan A + \tan B$ को बाईं ओर ले जाइए, और $\tan A\tan B\tan C$ को दाईं ओर।`,
        t`इसलिए $\tan C - \tan A - \tan B$ बराबर है $\tan A\tan B\tan C$ के।`,
        t`उदाहरण के लिए, $3x = 2x + x$, इसलिए $\tan 3x - \tan 2x - \tan x$ बराबर है $\tan 3x\tan 2x\tan x$ के।`,
      ],
    },
  ],
  worked: {
    prompt: t`$\dfrac{\cos 27^\circ + \sin 27^\circ}{\cos 27^\circ - \sin 27^\circ}$ को सरल कीजिए।`,
    steps: [
      t`अंश और हर को $\cos 27^\circ$ से भाग दीजिए: $\dfrac{1 + \tan 27^\circ}{1 - \tan 27^\circ}$।`,
      t`$1$ को $\tan 45^\circ$ लिखिए: $\dfrac{\tan 45^\circ + \tan 27^\circ}{1 - \tan 45^\circ \tan 27^\circ}$।`,
      t`यह $A = 45^\circ$, $B = 27^\circ$ के साथ $\tan(A + B)$ का सूत्र है: ऊपर धन, नीचे ऋण।`,
    ],
    answer: t`$\tan(45^\circ + 27^\circ) = \tan 72^\circ$।`,
  },
  remediation: {
    "C02-M1": t`हर $\cos(A + B) = \cos A\cos B - \sin A\sin B$ से आता है, इसलिए उसका चिह्न अंश के चिह्न का उलटा है: $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$ और $\tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A\tan B}$।`,
    "C02-M2": t`योग का tan, tans का योग नहीं है: $\tan(45^\circ + 45^\circ)$ परिभाषित नहीं है, $2$ नहीं। $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$ लगाइए।`,
    "C02-M3": t`चिह्नों को कोष्ठक से मिलाइए: अंश में $A \pm B$ वाला चिह्न, हर में उलटा। इसलिए $\tan\left(\frac{\pi}{4} + x\right) = \frac{1 + \tan x}{1 - \tan x}$।`,
    "C02-M4": t`cot सूत्र tan के ढाँचे पर नहीं चलता। पहले $\tan(A - B)$ निकालिए और उसे उलटिए: $\cot(A - B) = \frac{1 + \tan A\tan B}{\tan A - \tan B}$।`,
    "C02-M5": t`भाग देने से पहले, quadrant से छूटे हुए अनुपात का चिह्न तय कीजिए। तीसरे quadrant में sin और cos दोनों ऋणात्मक हैं, इसलिए tan धनात्मक है; चौथे में tan ऋणात्मक है।`,
  },
  solutions: {
    "C02-Q1": [
      t`$105^\circ = 60^\circ + 45^\circ$, जहाँ $\tan 60^\circ = \sqrt{3}$ और $\tan 45^\circ = 1$।`,
      t`इसलिए $\tan 105^\circ = \dfrac{\sqrt{3} + 1}{1 - \sqrt{3} \cdot 1} = \dfrac{\sqrt{3} + 1}{1 - \sqrt{3}}$।`,
      t`अंश और हर को $1 + \sqrt{3}$ से गुणा कीजिए: $\dfrac{(\sqrt{3} + 1)^2}{1 - 3} = \dfrac{4 + 2\sqrt{3}}{-2} = -(2 + \sqrt{3})$।`,
    ],
    "C02-Q2": [
      t`$\frac{13\pi}{12} = \pi + \frac{\pi}{12}$। क्योंकि $\tan\pi = 0$, $\tan\left(\pi + \frac{\pi}{12}\right) = \dfrac{0 + \tan\frac{\pi}{12}}{1 - 0} = \tan\frac{\pi}{12}$।`,
      t`$\frac{\pi}{12} = \frac{\pi}{4} - \frac{\pi}{6}$: $\tan\frac{\pi}{12} = \dfrac{1 - \frac{1}{\sqrt{3}}}{1 + 1 \cdot \frac{1}{\sqrt{3}}} = \dfrac{\sqrt{3} - 1}{\sqrt{3} + 1}$।`,
      t`अंश और हर को $\sqrt{3} - 1$ से गुणा कीजिए: $\dfrac{(\sqrt{3} - 1)^2}{3 - 1} = \dfrac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3}$।`,
    ],
    "C02-Q3": [
      t`$A$ तीसरे quadrant में है, इसलिए $\cos A = -\frac{12}{13}$ और $\tan A = \dfrac{-5/13}{-12/13} = \frac{5}{12}$।`,
      t`$B$ चौथे quadrant में है, इसलिए $\sin B = -\frac{4}{5}$ और $\tan B = -\frac{4}{3}$।`,
      t`इसलिए $\tan(A + B) = \dfrac{\frac{5}{12} - \frac{4}{3}}{1 - \frac{5}{12}\left(-\frac{4}{3}\right)} = \dfrac{-\frac{11}{12}}{\frac{14}{9}} = -\frac{33}{56}$।`,
    ],
    "C02-Q4": [
      t`$\tan(A + B) = \dfrac{\frac{5}{6} + \frac{1}{11}}{1 - \frac{5}{6} \cdot \frac{1}{11}}$।`,
      t`अंश: $\frac{55 + 6}{66} = \frac{61}{66}$। हर: $1 - \frac{5}{66} = \frac{61}{66}$।`,
      t`इसलिए $\tan(A + B) = 1$; न्यून $A$ और $B$ के लिए इसका अर्थ है $A + B = \frac{\pi}{4}$।`,
    ],
    "C02-Q5": [
      t`$\tan\frac{\pi}{4} = 1$ के साथ: $\tan\left(\frac{\pi}{4} + x\right) = \dfrac{1 + \tan x}{1 - \tan x}$ और $\tan\left(\frac{\pi}{4} - x\right) = \dfrac{1 - \tan x}{1 + \tan x}$।`,
      t`भिन्न से भाग देने का अर्थ है उसके उलटे से गुणा करना: $\dfrac{1 + \tan x}{1 - \tan x} \cdot \dfrac{1 + \tan x}{1 - \tan x} = \left(\dfrac{1 + \tan x}{1 - \tan x}\right)^2$।`,
    ],
    "C02-Q6": [
      t`$\cot B - \cot A = \dfrac{1}{\tan B} - \dfrac{1}{\tan A} = \dfrac{\tan A - \tan B}{\tan A\tan B} = \dfrac{x}{\tan A\tan B}$। यह $y$ है, इसलिए $\tan A\tan B = \frac{x}{y}$।`,
      t`$\cot(A - B) = \dfrac{1}{\tan(A - B)} = \dfrac{1 + \tan A\tan B}{\tan A - \tan B} = \dfrac{1 + \frac{x}{y}}{x}$।`,
      t`$= \dfrac{x + y}{xy} = \frac{1}{x} + \frac{1}{y}$।`,
    ],
  },
};
