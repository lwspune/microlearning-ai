import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c06: ConceptTranslation = {
  id: "C06",
  lang: "hi",
  status: "approved",
  source: "008af896d5a78a",
  hook: {
    prompt: t`$\cos\theta = \frac{8}{17}$। **क्या $\sin\theta = \frac{15}{17}$ है?**`,
    reveal: t`ज़रूरी नहीं। $\sin^2\theta = 1 - \frac{64}{289} = \frac{225}{289}$, इसलिए $\sin\theta = \frac{15}{17}$ या $-\frac{15}{17}$। दोनों सही बैठते हैं: $\cos\theta$ पहले quadrant में भी धनात्मक है और चौथे में भी। पहले में $\sin\theta = \frac{15}{17}$; चौथे में $\sin\theta = -\frac{15}{17}$। एक मान बाकी हर अनुपात का आकार तय कर देता है, पर उसका चिह्न केवल quadrant तय करता है।`,
  },
  intuition: [
    t`मान लीजिए आप केवल एक अनुपात जानते हैं, जैसे $\cos\theta = \frac{8}{17}$।`,
    t`क्योंकि $\cos\theta = \frac{x}{r}$, terminal arm पर एक बिंदु लीजिए जिसके लिए $x = 8$ और $r = 17$।`,
    t`पाइथागोरस से $y^2 = 17^2 - 8^2 = 225$, इसलिए $y = 15$ या $y = -15$।`,
    t`दोनों हालत में समकोण त्रिभुज की भुजाएँ $8$, $15$ और $17$ हैं, इसलिए हर अनुपात का **size** (आकार), यानी चिह्न के बिना उसका मान, तय है।`,
    t`उसका **sign** (चिह्न), धन या ऋण, तय नहीं है: बिंदु Quadrant I में हो सकता है या Quadrant IV में।`,
    t`इसलिए identity केवल एक वर्ग देती है, जैसे $\sin^2\theta$, और quadrant तय करता है कि कौन-सा वर्गमूल लेना है।`,
  ],
  formal: [
    {
      title: t`Identity से आकार`,
      points: [
        t`पहले वह identity लगाइए जो दिए गए अनुपात को किसी दूसरे से जोड़ती है।`,
        t`$\sin^2\theta + \cos^2\theta = 1$, $\sin\theta$ और $\cos\theta$ को जोड़ती है।`,
        t`$\sec^2\theta = 1 + \tan^2\theta$, $\sec\theta$ और $\tan\theta$ को जोड़ती है।`,
        t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta$, $\operatorname{cosec}\theta$ और $\cot\theta$ को जोड़ती है।`,
        t`हर एक दूसरे अनुपात का **square** (वर्ग) देती है, जैसे $\sin^2\theta$, खुद अनुपात नहीं।`,
        t`धनात्मक वर्ग के दो **square roots** (वर्गमूल) होते हैं, एक धनात्मक और एक ऋणात्मक: $\sin^2\theta = \frac{225}{289}$ से $\sin\theta = \pm\frac{15}{17}$।`,
      ],
    },
    {
      title: t`Quadrant से चिह्न`,
      points: [
        t`वह वर्गमूल रखिए जिसका चिह्न उस quadrant से मेल खाए जिसमें $\theta$ है।`,
        t`Quadrant I में सभी छह अनुपात धनात्मक हैं।`,
        t`Quadrant II में केवल $\sin$ और $\operatorname{cosec}$ धनात्मक हैं।`,
        t`Quadrant III में केवल $\tan$ और $\cot$ धनात्मक हैं।`,
        t`Quadrant IV में केवल $\cos$ और $\sec$ धनात्मक हैं।`,
        t`अगर $\cos\theta$ किसी द्विघात समीकरण का मूल है, तो वह मूल रखिए जिसका चिह्न quadrant से मेल खाए।`,
      ],
    },
    {
      title: t`अंतराल से quadrant`,
      points: [
        t`Quadrant अक्सर एक **interval** (अंतराल) के रूप में दिया जाता है: दो मान जिनके बीच $\theta$ है।`,
        t`$0 < \theta < \frac{\pi}{2}$, $0^\circ$ से $90^\circ$ तक, Quadrant I है।`,
        t`$\frac{\pi}{2} < \theta < \pi$, $90^\circ$ से $180^\circ$ तक, Quadrant II है।`,
        t`$\pi < \theta < \frac{3\pi}{2}$, $180^\circ$ से $270^\circ$ तक, Quadrant III है।`,
        t`$\frac{3\pi}{2} < \theta < 2\pi$, $270^\circ$ से $360^\circ$ तक, Quadrant IV है।`,
      ],
    },
    {
      title: t`बाकी, बिना वर्गमूल के`,
      points: [
        t`Identity और quadrant के बाद, बाकी अनुपातों के लिए और वर्गमूल नहीं चाहिए।`,
        t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$, जिसमें $\sin$ ऊपर है, इसलिए $\sin\theta = \tan\theta\cos\theta$।`,
        t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, $\sin\theta$ का **reciprocal**: एक को उससे भाग देना।`,
        t`$\sec\theta = \frac{1}{\cos\theta}$, $\cos\theta$ का reciprocal।`,
        t`$\cot\theta = \frac{1}{\tan\theta}$, $\tan\theta$ का reciprocal।`,
        t`ये चिह्न अपने आप साथ ले आते हैं: reciprocal का चिह्न उसके जोड़ीदार वाला ही होता है।`,
      ],
    },
    {
      title: t`व्यंजक का मान`,
      points: [
        t`किसी व्यंजक का मान निकालने के लिए, उसमें आए हर अनुपात को चिह्न सहित निकालिए, फिर रखिए।`,
        t`उदाहरण के लिए, $\tan\theta = -\frac{20}{21}$ लीजिए, जहाँ $\theta$ Quadrant IV में है, जहाँ $x > 0$ और $y < 0$।`,
        t`तब $\sec^2\theta = 1 + \frac{400}{441} = \frac{841}{441}$।`,
        t`Quadrant IV में $\sec\theta$ धनात्मक है, इसलिए $\sec\theta = \frac{29}{21}$ और $\cos\theta = \frac{21}{29}$।`,
        t`तब $\sin\theta = \tan\theta\cos\theta = -\frac{20}{29}$।`,
        t`इसलिए $2\sin\theta + 3\cos\theta = -\frac{40}{29} + \frac{63}{29}$, जो $\frac{23}{29}$ है।`,
      ],
    },
  ],
  worked: {
    prompt: t`यदि $\sec\theta = -3$ और $\pi < \theta < \frac{3\pi}{2}$, तो $\theta$ के बाकी पाँच trigonometric functions ज्ञात कीजिए।`,
    steps: [
      t`$\cos\theta = \frac{1}{\sec\theta} = -\frac{1}{3}$।`,
      t`$\tan^2\theta = \sec^2\theta - 1 = 9 - 1 = 8$, इसलिए $\tan\theta = \pm 2\sqrt{2}$।`,
      t`$\pi < \theta < \frac{3\pi}{2}$ तीसरा quadrant है, जहाँ $\tan$ धनात्मक है: $\tan\theta = 2\sqrt{2}$ और $\cot\theta = \frac{1}{2\sqrt{2}}$।`,
      t`$\sin\theta = \tan\theta\cos\theta$, जो $2\sqrt{2}\left(-\frac{1}{3}\right) = -\frac{2\sqrt{2}}{3}$ है, इसलिए $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$।`,
    ],
    answer: t`$\cos\theta = -\frac{1}{3}$, $\tan\theta = 2\sqrt{2}$, $\cot\theta = \frac{1}{2\sqrt{2}}$, $\sin\theta = -\frac{2\sqrt{2}}{3}$, $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$।`,
  },
  remediation: {
    "C06-M1": t`Identity एक वर्ग देती है, इसलिए अनुपात उसके वर्गमूल का $\pm$ है। Quadrant चिह्न तय करता है: उदाहरण के लिए, तीसरे quadrant में $\sin$ और $\cos$ दोनों ऋणात्मक हैं।`,
    "C06-M2": t`$\tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta}$, जिसमें $\sin$ ऊपर है। इसका reciprocal $\cot\theta = \frac{\cos\theta}{\sin\theta}$ है।`,
    "C06-M3": t`$\sec\theta = \frac{1}{\cos\theta}$ और $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: हर जोड़ी में ठीक एक **co** है। इसलिए $\sec\theta$ से आपको पहले $\cos\theta$ मिलता है।`,
    "C06-M4": t`Identity अनुपात का वर्ग देती है। आगे बढ़ने से पहले वर्गमूल लीजिए: $\cos^2\theta = \frac{4}{9}$ से $\cos\theta = \pm\frac{2}{3}$ मिलता है।`,
  },
  solutions: {
    "C06-Q1": [
      t`$\sin^2\theta = 1 - \cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$, इसलिए $\sin\theta = \pm\frac{4}{5}$।`,
      t`$180^\circ < \theta < 270^\circ$ तीसरा quadrant है, जहाँ $\sin$ ऋणात्मक है: $\sin\theta = -\frac{4}{5}$।`,
      t`इसलिए $\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-4/5}{-3/5} = \frac{4}{3}$।`,
    ],
    "C06-Q2": [
      t`$\tan^2 A = \sec^2 A - 1 = \frac{625}{49} - 1 = \frac{576}{49}$, इसलिए $\tan A = \pm\frac{24}{7}$।`,
      t`दूसरे quadrant में केवल $\sin$ और $\operatorname{cosec}$ धनात्मक हैं, इसलिए $\tan A = -\frac{24}{7}$।`,
    ],
    "C06-Q3": [
      t`$\tan^2 x = \sec^2 x - 1 = \frac{169}{25} - 1 = \frac{144}{25}$, इसलिए $\tan x = \pm\frac{12}{5}$।`,
      t`चौथे quadrant में $\tan$ ऋणात्मक है: $\tan x = -\frac{12}{5}$।`,
      t`इसलिए $\cot x = \frac{1}{\tan x} = -\frac{5}{12}$।`,
    ],
    "C06-Q4": [
      t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 1 + \frac{9}{16} = \frac{25}{16}$। तीसरे quadrant में $\operatorname{cosec}$ ऋणात्मक है: $\operatorname{cosec}\theta = -\frac{5}{4}$, इसलिए $\sin\theta = -\frac{4}{5}$।`,
      t`$\cos\theta = \cot\theta\sin\theta = \frac{3}{4}\left(-\frac{4}{5}\right) = -\frac{3}{5}$।`,
      t`$4\operatorname{cosec}\theta + 5\cos\theta = 4\left(-\frac{5}{4}\right) + 5\left(-\frac{3}{5}\right) = -5 - 3 = -8$।`,
    ],
    "C06-Q5": [
      t`$\sin A = \frac{3}{5}$ और $\sin B = \frac{4}{5}$। दूसरे quadrant में $\cos$ ऋणात्मक है।`,
      t`$\cos^2 A = 1 - \frac{9}{25} = \frac{16}{25}$, इसलिए $\cos A = -\frac{4}{5}$ और $\tan A = \frac{3/5}{-4/5} = -\frac{3}{4}$।`,
      t`$\cos^2 B = 1 - \frac{16}{25} = \frac{9}{25}$, इसलिए $\cos B = -\frac{3}{5}$ और $\tan B = \frac{4/5}{-3/5} = -\frac{4}{3}$।`,
      t`$4\tan A + 3\tan B = 4\left(-\frac{3}{4}\right) + 3\left(-\frac{4}{3}\right) = -3 - 4 = -7$।`,
    ],
    "C06-Q6": [
      t`$25\cos^2\theta + 5\cos\theta - 12 = (5\cos\theta - 3)(5\cos\theta + 4) = 0$, इसलिए $\cos\theta = \frac{3}{5}$ या $-\frac{4}{5}$।`,
      t`$\frac{\pi}{2} < \alpha < \pi$ दूसरा quadrant है, जहाँ $\cos$ ऋणात्मक है: $\cos\alpha = -\frac{4}{5}$।`,
      t`$\sin^2\alpha = 1 - \frac{16}{25} = \frac{9}{25}$, और दूसरे quadrant में $\sin$ धनात्मक है: $\sin\alpha = \frac{3}{5}$।`,
      t`इसलिए $\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{3/5}{-4/5} = -\frac{3}{4}$।`,
    ],
  },
};
