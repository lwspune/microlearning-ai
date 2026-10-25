import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c10: ConceptTranslation = {
  id: "C10",
  lang: "hi",
  status: "approved",
  source: "094bc1b01e7b89",
  hook: {
    prompt: t`बिंदु $(3, \sqrt3)$ और $(-3, -\sqrt3)$ दोनों के लिए $\tan\theta = \dfrac{y}{x} = \dfrac{1}{\sqrt3}$ है और दोनों origin से $2\sqrt3$ दूर हैं। **क्या दोनों के polar co-ordinates $\left(2\sqrt3, \dfrac{\pi}{6}\right)$ हैं?**`,
    reveal: t`नहीं। वे origin से होकर जाने वाली एक ही रेखा पर हैं, पर उसके उलटी ओर। $(3, \sqrt3)$, $\dfrac{\pi}{6}$ पर है; $(-3, -\sqrt3)$, quadrant III में, $\pi + \dfrac{\pi}{6} = \dfrac{7\pi}{6}$ पर है। अनुपात $\dfrac{y}{x}$ रेखा देता है; quadrant ओर चुनता है।`,
  },
  intuition: [
    t`किसी बिंदु $P$ के **Cartesian co-ordinates** (कार्तीय निर्देशांक) $(x, y)$ कहते हैं: $x$ आगे चलिए, फिर $y$ ऊपर।`,
    t`**Polar co-ordinates** (ध्रुवीय निर्देशांक) $(r, \theta)$ उसी बिंदु तक दूसरे तरीके से पहुँचते हैं: पहले घुमाव, फिर चलना।`,
    t`पहले एक arm को धनात्मक $x$-अक्ष से anticlockwise, angle $\theta$ जितना, तब तक घुमाइए जब तक वह $P$ की ओर न हो जाए।`,
    t`फिर arm के साथ चलिए: $r$, दूरी $OP$ है, origin $O$ से $P$ तक।`,
    t`Arm, $x$-अक्ष और $P$ से डाला गया लंब एक समकोण त्रिभुज बनाते हैं।`,
    t`उसकी भुजाएँ दोनों को जोड़ती हैं: $x = r\cos\theta$ और $y = r\sin\theta$।`,
  ],
  formal: [
    {
      title: t`Polar से Cartesian`,
      points: [
        t`मान लीजिए हम किसी बिंदु $P$ के polar co-ordinates $(r, \theta)$ जानते हैं।`,
        t`क्योंकि $\cos\theta = \frac{x}{r}$, उसका $x$-निर्देशांक $x = r\cos\theta$ है।`,
        t`क्योंकि $\sin\theta = \frac{y}{r}$, उसका $y$-निर्देशांक $y = r\sin\theta$ है।`,
        t`उदाहरण के लिए, $P\left(2, \frac{3\pi}{4}\right)$ लीजिए, जिसकी arm quadrant II में है।`,
        t`तब $x = 2\cos\frac{3\pi}{4} = -\sqrt2$ और $y = 2\sin\frac{3\pi}{4} = \sqrt2$।`,
        t`चिह्न रखिए: $\cos\frac{3\pi}{4}$ ऋणात्मक है, इसलिए $P(-\sqrt2, \sqrt2)$ quadrant II में है।`,
      ],
    },
    {
      title: t`Cartesian से polar`,
      points: [
        t`अब उलटी ओर चलिए: $P(x, y)$ से शुरू करके $(r, \theta)$ ज्ञात कीजिए।`,
        t`$OP$ एक समकोण त्रिभुज का hypotenuse है जिसकी बाकी दो भुजाएँ $|x|$ और $|y|$ हैं।`,
        t`इसलिए, पाइथागोरस से, $r = \sqrt{x^2 + y^2}$।`,
        t`$\theta$ वह angle है जिसके लिए $\cos\theta = \frac{x}{r}$ और $\sin\theta = \frac{y}{r}$।`,
        t`$\theta$ को $0 \le \theta < 2\pi$ में लीजिए, ताकि हर बिंदु को केवल एक $\theta$ मिले।`,
      ],
    },
    {
      title: t`एक ही रेखा, उलटी ओर`,
      points: [
        t`$\tan\theta = \frac{y}{x}$ केवल $O$ से होकर जाने वाली वह रेखा तय करता है जिस पर $P$ है।`,
        t`उदाहरण के लिए, $(3, \sqrt3)$ और $(-3, -\sqrt3)$ दोनों से $\frac{y}{x} = \frac{1}{\sqrt3}$ मिलता है।`,
        t`वे उसी एक रेखा पर हैं, पर $O$ के उलटी ओर।`,
        t`$(3, \sqrt3)$ quadrant I में है, $\theta = \frac{\pi}{6}$ पर।`,
        t`$(-3, -\sqrt3)$ quadrant III में है, $\theta = \pi + \frac{\pi}{6} = \frac{7\pi}{6}$ पर।`,
        t`इसलिए **plot the point first** (पहले बिंदु आलेखित कीजिए): उसका quadrant $O$ की ओर चुनता है।`,
      ],
    },
    {
      title: t`θ को उसके quadrant में रखना`,
      points: [
        t`**Reference angle** $\alpha$, arm $OP$ और $x$-अक्ष के बीच का न्यून angle है।`,
        t`इसे $\tan\alpha = \left|\frac{y}{x}\right|$ से ज्ञात कीजिए।`,
        t`Quadrant I में: $\theta = \alpha$।`,
        t`Quadrant II में: $\theta = \pi - \alpha$, क्योंकि arm ऋणात्मक $x$-अक्ष से पहले रुकती है।`,
        t`Quadrant III में: $\theta = \pi + \alpha$, क्योंकि arm ऋणात्मक $x$-अक्ष से आगे निकल जाती है।`,
        t`Quadrant IV में: $\theta = 2\pi - \alpha$, क्योंकि arm पूरे चक्कर से पहले रुकती है।`,
      ],
    },
    {
      title: t`Degrees या radians`,
      points: [
        t`पुस्तक कभी-कभी $\theta$ को radians की जगह degrees में देती है।`,
        t`उदाहरण के लिए, वह $(3, 3)$ के polar co-ordinates को $(3\sqrt2, 45^\circ)$ लिखती है।`,
        t`यह $\left(3\sqrt2, \frac{\pi}{4}\right)$ के समान है, क्योंकि $45^\circ = \frac{\pi}{4}$।`,
      ],
    },
  ],
  worked: {
    prompt: t`बिंदु $(2, -2\sqrt3)$ के polar co-ordinates $(r, \theta)$ ज्ञात कीजिए, जहाँ $0 \le \theta < 2\pi$।`,
    steps: [
      t`आलेखित कीजिए: $x > 0$ और $y < 0$, इसलिए बिंदु quadrant IV में है।`,
      t`$r = \sqrt{2^2 + (2\sqrt3)^2}$ $= \sqrt{4 + 12} = 4$।`,
      t`Reference angle: $\tan\alpha = \left|\dfrac{-2\sqrt3}{2}\right|$ $= \sqrt3$, इसलिए $\alpha = \dfrac{\pi}{3}$।`,
      t`Quadrant IV में: $\theta = 2\pi - \dfrac{\pi}{3}$ $= \dfrac{5\pi}{3}$। जाँच: $4\cos\dfrac{5\pi}{3} = 2$ और $4\sin\dfrac{5\pi}{3} = -2\sqrt3$।`,
    ],
    answer: t`$\left(4, \dfrac{5\pi}{3}\right)$। जाल: $\dfrac{\pi}{3}$ पर रुक जाना, जो quadrant I की ओर इशारा करता है।`,
  },
  remediation: {
    "C10-M1": t`$\left|\dfrac{y}{x}\right|$ से मिला न्यून angle केवल reference angle है, और वह quadrant I की ओर इशारा करता है। बिंदु आलेखित कीजिए और $\theta$ को उसके अपने quadrant में रखिए; उलटी ओर जाते समय, $\cos\theta$ और $\sin\theta$ को उस quadrant के चिह्न दीजिए।`,
    "C10-M2": t`$\theta$ धनात्मक $x$-अक्ष से मापा जाता है, इसलिए $x = r\cos\theta$, $y = r\sin\theta$ और $\tan\theta = \dfrac{y}{x}$।`,
    "C10-M3": t`$r$, origin से दूरी है, $r = \sqrt{x^2 + y^2}$। अंत में वर्गमूल लीजिए।`,
    "C10-M4": t`Quadrant II में arm ऋणात्मक $x$-अक्ष से पहले रुकती है, इसलिए $\theta = \pi - \alpha$; quadrant III में वह उससे आगे निकल चुकी है, इसलिए $\theta = \pi + \alpha$।`,
    "C10-M5": t`$r$, एक समकोण त्रिभुज का hypotenuse है जिसकी legs $|x|$ और $|y|$ हैं, इसलिए $r = \sqrt{x^2 + y^2}$, उनका योग नहीं।`,
  },
  solutions: {
    "C10-Q1": [
      t`$r = \sqrt{1^2 + (\sqrt3)^2} = \sqrt4 = 2$।`,
      t`दोनों निर्देशांक धनात्मक हैं, इसलिए बिंदु quadrant I में है: $\tan\theta = \dfrac{\sqrt3}{1} = \sqrt3$ से $\theta = \dfrac{\pi}{3}$ मिलता है।`,
      t`Polar co-ordinates $\left(2, \dfrac{\pi}{3}\right)$ हैं। जाँच: $2\cos\dfrac{\pi}{3} = 1$ और $2\sin\dfrac{\pi}{3} = \sqrt3$।`,
    ],
    "C10-Q2": [
      t`$r = \sqrt{(-1)^2 + (-1)^2} = \sqrt2$।`,
      t`$x < 0$ और $y < 0$: quadrant III। Reference angle: $\tan\alpha = \left|\dfrac{-1}{-1}\right| = 1$, इसलिए $\alpha = \dfrac{\pi}{4}$।`,
      t`Quadrant III में: $\theta = \pi + \dfrac{\pi}{4} = \dfrac{5\pi}{4}$। Polar co-ordinates $\left(\sqrt2, \dfrac{5\pi}{4}\right)$ हैं।`,
    ],
    "C10-Q3": [
      t`$r = \sqrt{(-\sqrt3)^2 + 1^2} = \sqrt4 = 2$।`,
      t`$x < 0$ और $y > 0$: quadrant II। Reference angle: $\tan\alpha = \left|\dfrac{1}{-\sqrt3}\right| = \dfrac{1}{\sqrt3}$, इसलिए $\alpha = \dfrac{\pi}{6}$।`,
      t`Quadrant II में: $\theta = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$। Polar co-ordinates $\left(2, \dfrac{5\pi}{6}\right)$ हैं।`,
    ],
    "C10-Q4": [
      t`$r = \sqrt{5^2 + (-5)^2} = \sqrt{50} = 5\sqrt2$।`,
      t`$x > 0$ और $y < 0$: quadrant IV। Reference angle: $\tan\alpha = \left|\dfrac{-5}{5}\right| = 1$, इसलिए $\alpha = \dfrac{\pi}{4}$।`,
      t`Quadrant IV में: $\theta = 2\pi - \dfrac{\pi}{4} = \dfrac{7\pi}{4}$। Polar co-ordinates $\left(5\sqrt2, \dfrac{7\pi}{4}\right)$ हैं।`,
    ],
    "C10-Q5": [
      t`$\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ quadrant II में है, जहाँ cosine ऋणात्मक है और sine धनात्मक: $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$, $\sin\dfrac{2\pi}{3} = \dfrac{\sqrt3}{2}$।`,
      t`$x = 4 \cdot \left(-\dfrac{1}{2}\right) = -2$ और $y = 4 \cdot \dfrac{\sqrt3}{2} = 2\sqrt3$। बिंदु $(-2, 2\sqrt3)$ है।`,
    ],
    "C10-Q6": [
      t`$\dfrac{7\pi}{6} = \pi + \dfrac{\pi}{6}$ quadrant III में है, जहाँ cosine और sine दोनों ऋणात्मक हैं: $\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt3}{2}$, $\sin\dfrac{7\pi}{6} = -\dfrac{1}{2}$।`,
      t`$x = 6 \cdot \left(-\dfrac{\sqrt3}{2}\right) = -3\sqrt3$ और $y = 6 \cdot \left(-\dfrac{1}{2}\right) = -3$। बिंदु $(-3\sqrt3, -3)$ है।`,
    ],
  },
};
