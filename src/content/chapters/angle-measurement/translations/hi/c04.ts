import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c04: ConceptTranslation = {
  id: "C04",
  lang: "hi",
  status: "approved",
  source: "0e535548ed878c",
  hook: {
    prompt: t`एक त्रिभुज के दो angles $\left(\frac{\pi}{4}\right)^c$ और $60^\circ$ हैं। **उसका तीसरा angle क्या है?** आप $\frac{\pi}{4}$ और $60$ को सीधे नहीं जोड़ सकते।`,
    reveal: t`पहले दोनों को एक इकाई में लाइए: $\left(\frac{\pi}{4}\right)^c = 45^\circ$। Angles का योग $180^\circ$ है, इसलिए तीसरा $180^\circ - 45^\circ - 60^\circ = 75^\circ$ है, यानी $\left(\frac{5\pi}{12}\right)^c$।`,
  },
  intuition: [
    t`**Polygon** (बहुभुज) सीधी **sides** (भुजाओं) से बनी एक बंद आकृति है: **triangle** (त्रिभुज) की तीन होती हैं, **quadrilateral** (चतुर्भुज) की चार।`,
    t`किसी **corner** (कोने) पर, वहाँ मिलने वाली दो sides के बीच अंदर का angle **interior angle** (अंतःकोण) है।`,
    t`सभी interior angles का योग polygon का **angle sum** (कोणों का योग) है।`,
    t`त्रिभुज के तीनों angles को साथ-साथ रखिए: वे एक सीधी रेखा भर देते हैं, यानी **straight angle** (सरल कोण), $180^\circ$ या $\pi^c$।`,
    t`इसलिए angles $A$, $B$, $C$ वाले त्रिभुज में $A + B + C = \pi^c = 180^\circ$।`,
    t`ज्यामिति किसी भी इकाई में एक ही रहती है; केवल संख्याएँ बदलती हैं।`,
  ],
  formal: [
    {
      title: t`Polygon त्रिभुजों में बँटते हैं`,
      points: [
        t`**Diagonal** (विकर्ण) वह रेखाखंड है जो ऐसे दो corners को जोड़ता है जो आपस में सटे न हों।`,
        t`$n$ sides वाले polygon, यानी **$n$-gon**, के एक corner से सारे diagonals खींचिए।`,
        t`Diagonals उसे $n - 2$ त्रिभुजों में बाँट देते हैं।`,
        t`उनके angles मिलकर polygon के interior angles बनाते हैं, इसलिए angle sum $(n - 2)\pi$ है।`,
        t`एक quadrilateral ($n = 4$) $2$ त्रिभुजों में बँटता है, इसलिए उसके angles का योग $2\pi^c = 360^\circ$ है।`,
        t`एक षट्भुज (hexagon) ($n = 6$) $4$ में बँटता है, इसलिए उसके angles का योग $4\pi^c = 720^\circ$ है।`,
      ],
    },
    {
      title: t`पहले एक इकाई`,
      points: [
        t`**Mixed units** (मिली-जुली इकाइयों) वाले angles, कुछ radians में और कुछ degrees में, जैसे के तैसे नहीं जोड़े जा सकते।`,
        t`जोड़ने या घटाने से पहले हर angle को एक ही इकाई में बदलिए।`,
        t`Radians, $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$ से degrees में बदलते हैं।`,
        t`इसलिए $\left(\frac{\pi}{5}\right)^c$ यानी $36^\circ$, $\frac{\pi}{5}$ degrees नहीं।`,
      ],
    },
    {
      title: t`ज्ञात angles घटाइए`,
      points: [
        t`**Known angles** (ज्ञात angles) वे हैं जो प्रश्न देता है, या आकृति तय करती है, जैसे समकोण।`,
        t`पहले angle sum में से ज्ञात angles घटाइए।`,
        t`फिर केवल बचे हुए भाग को अज्ञात angles में बाँटिए।`,
        t`**Right-angled triangle** (समकोण त्रिभुज) में एक समकोण, $\frac{\pi}{2}$, होता है।`,
        t`उसके बाकी दो angles **acute** (न्यून) होते हैं: हर एक समकोण से छोटा।`,
        t`दोनों acute angles $\pi - \frac{\pi}{2} = \frac{\pi}{2}$ को आपस में बाँटते हैं, $\pi$ को नहीं।`,
      ],
    },
    {
      title: t`अनुपात या A.P. में बाँटना`,
      points: [
        t`**Ratio** (अनुपात) $a : b : c$ में angles, एक ही संख्या $k$ के $a$, $b$ और $c$ गुने होते हैं: $ak$, $bk$, $ck$।`,
        t`Angles का योग $k$ तय करता है।`,
        t`त्रिभुज में $3 : 4 : 5$ के लिए, $12k = \pi$, इसलिए $k = \frac{\pi}{12}$।`,
        t`**Arithmetic progression (A.P.)** (समांतर श्रेढ़ी) में तीन angles एक ही कदम से बढ़ते हैं, यानी **common difference** (सार्व अंतर) $d$ से।`,
        t`इसलिए वे $a - d$, $a$, $a + d$ हैं, और उनका योग $3a$ है।`,
        t`त्रिभुज में $3a = \pi$, इसलिए बीच का angle $a = \frac{\pi}{3}$ है, $d$ चाहे जो हो।`,
      ],
    },
    {
      title: t`Regular polygon (सम बहुभुज)`,
      points: [
        t`**Regular polygon** की सभी sides बराबर होती हैं और सभी interior angles बराबर होते हैं।`,
        t`उसके $n$ बराबर angles, angle sum $(n - 2)\pi$ को आपस में बाँटते हैं।`,
        t`इसलिए हर interior angle $\frac{(n-2)\pi}{n}$ है।`,
        t`एक regular hexagon (षट्भुज) के angles का योग $4\pi$ है, इसलिए हर एक $\frac{4\pi}{6} = \frac{2\pi}{3}$, यानी $120^\circ$ है।`,
        t`$n = 10$ के लिए, हर एक $\frac{8\pi}{10} = \frac{4\pi}{5}$ है।`,
      ],
    },
    {
      title: t`Exterior angles (बहिष्कोण)`,
      points: [
        t`Polygon की एक side को किसी corner के आगे बढ़ाइए।`,
        t`उस बढ़ाई हुई रेखा और अगली side के बीच का angle, उस corner पर **exterior angle** है।`,
        t`यह वहाँ के interior angle के साथ एक सीधी रेखा पर है, इसलिए दोनों का योग $\pi$ है।`,
      ],
    },
    {
      title: t`Exterior angles मिलकर एक चक्कर बनाते हैं`,
      points: [
        t`Polygon के चारों ओर चलिए: हर corner पर आप उसके exterior angle जितना मुड़ते हैं।`,
        t`आप उसी दिशा में मुँह करके लौटते हैं जिसमें चले थे, इसलिए $n$ exterior angles मिलकर एक पूरा चक्कर, $2\pi$, बनाते हैं।`,
        t`Regular polygon में वे बराबर होते हैं, इसलिए हर एक $\frac{2\pi}{n}$ है।`,
        t`यह हर corner की सीधी रेखा से मेल खाता है: $\frac{2\pi}{n} = \pi - \frac{(n-2)\pi}{n}$।`,
        t`षट्भुज के लिए यह $\frac{\pi}{3}$ है; $n = 10$ के लिए, $\frac{\pi}{5}$।`,
      ],
    },
    {
      title: t`Sides की संख्या`,
      points: [
        t`Regular polygon के interior angle से आप पता लगा सकते हैं कि उसकी कितनी sides $n$ हैं।`,
        t`Exterior angle से होकर जाइए: interior angle को $\pi$ में से घटाइए।`,
        t`फिर $n$ पाने के लिए पूरे चक्कर $2\pi$ को उस exterior angle से भाग दीजिए।`,
        t`Interior $\frac{5\pi}{6}$ से exterior $\pi - \frac{5\pi}{6} = \frac{\pi}{6}$ मिलता है।`,
        t`इसलिए $n = \frac{2\pi}{\pi/6} = 12$।`,
      ],
    },
  ],
  worked: {
    prompt: t`एक त्रिभुज के angles A.P. में हैं और सबसे बड़ा angle सबसे छोटे का $3$ गुना है। Angles radians में ज्ञात कीजिए।`,
    steps: [
      t`Angles को $a - d$, $a$, $a + d$ लिखिए। इनका योग $\pi$ है: $3a = \pi$, इसलिए $a = \frac{\pi}{3}$।`,
      t`सबसे बड़ा, सबसे छोटे का $3$ गुना है: $a + d = 3(a - d)$, इसलिए $4d = 2a$ और $d = \frac{a}{2} = \frac{\pi}{6}$।`,
      t`Angles हैं $\frac{\pi}{3} - \frac{\pi}{6} = \frac{\pi}{6}$, $\frac{\pi}{3}$ और $\frac{\pi}{3} + \frac{\pi}{6} = \frac{\pi}{2}$।`,
      t`जाँच: $\frac{\pi}{6} + \frac{\pi}{3} + \frac{\pi}{2} = \pi$, और $\frac{\pi}{2} = 3 \times \frac{\pi}{6}$।`,
    ],
    answer: t`$\left(\frac{\pi}{6}\right)^c$, $\left(\frac{\pi}{3}\right)^c$ और $\left(\frac{\pi}{2}\right)^c$, यानी $30^\circ$, $60^\circ$ और $90^\circ$।`,
  },
  remediation: {
    "C04-M1": t`त्रिभुज के angles का योग $\pi^c = 180^\circ$ है, और चतुर्भुज के angles का $2\pi^c = 360^\circ$, क्योंकि वह दो त्रिभुजों में बँटता है। पूरा चक्कर, $2\pi$, एक बिंदु के चारों ओर के angles का योग है।`,
    "C04-M2": t`पहले योग में से ज्ञात angles घटाइए, और केवल बचे हुए को बाँटिए। समकोण त्रिभुज में दोनों acute angles $\frac{\pi}{2}$ को बाँटते हैं, $\pi$ को नहीं।`,
    "C04-M3": t`जोड़ने या घटाने से पहले हर angle को एक इकाई में बदलिए: $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$। उदाहरण के लिए $\left(\frac{\pi}{5}\right)^c$ यानी $36^\circ$, $\frac{\pi}{5}$ degrees नहीं।`,
    "C04-M4": t`$\frac{2\pi}{n}$, exterior angle है: $n$ exterior angles मिलकर एक पूरा चक्कर बनाते हैं। Interior angle $\pi - \frac{2\pi}{n} = \frac{(n-2)\pi}{n}$ है।`,
    "C04-M5": t`$(n - 2)\pi$ सभी $n$ interior angles का योग है। Regular polygon में वे बराबर होते हैं, इसलिए हर एक $\frac{(n-2)\pi}{n}$ है।`,
    "C04-M6": t`Interior angle और उसका exterior angle एक सीधी रेखा पर होते हैं, इसलिए उनका योग $\pi$ है, $2\pi$ नहीं: interior angle $\pi - \frac{2\pi}{n}$ है।`,
  },
  solutions: {
    "C04-Q1": [
      t`बदलिए: $\left(\frac{2\pi}{5}\right)^c = \left(\frac{2\pi}{5} \times \frac{180}{\pi}\right)^\circ = 72^\circ$।`,
      t`चतुर्भुज के angles का योग $360^\circ$ है, इसलिए बाकी तीन का योग $360^\circ - 72^\circ = 288^\circ$ है।`,
      t`वे $2k$, $3k$, $4k$ हैं: $9k = 288^\circ$, इसलिए $k = 32^\circ$ और angles $64^\circ$, $96^\circ$ और $128^\circ$ हैं। सबसे बड़ा $128^\circ$ है।`,
    ],
    "C04-Q2": [
      t`बदलिए: $\left(\frac{7\pi}{30}\right)^c = \left(\frac{7\pi}{30} \times \frac{180}{\pi}\right)^\circ = 42^\circ$। इसलिए acute angles $x > y$ के लिए $x - y = 42^\circ$।`,
      t`समकोण $180^\circ$ में से $90^\circ$ ले लेता है, इसलिए $x + y = 90^\circ$।`,
      t`जोड़ने पर: $2x = 132^\circ$, इसलिए $x = 66^\circ$ और $y = 24^\circ$। बड़ा acute angle $66^\circ$ है।`,
    ],
    "C04-Q3": [
      t`बदलिए: $\left(\frac{\pi}{2}\right)^c = 90^\circ$। बाकी तीन angles का योग $360^\circ - 90^\circ = 270^\circ$ है।`,
      t`उन्हें $a - 20^\circ$, $a$, $a + 20^\circ$ लिखिए: $3a = 270^\circ$, इसलिए $a = 90^\circ$।`,
      t`तीनों angles $70^\circ$, $90^\circ$ और $110^\circ$ हैं। सबसे छोटा $70^\circ$ है।`,
    ],
    "C04-Q4": [
      t`अष्टभुज की $n = 8$ sides हैं, इसलिए वह $8 - 2 = 6$ त्रिभुजों में बँटता है और उसके angles का योग $6\pi$ है।`,
      t`$8$ angles बराबर हैं, इसलिए हर एक $\frac{6\pi}{8} = \frac{3\pi}{4}$ है।`,
      t`जाँच: exterior angle $\pi - \frac{3\pi}{4} = \frac{\pi}{4} = \frac{2\pi}{8}$ है, जैसा होना चाहिए।`,
    ],
    "C04-Q5": [
      t`पंचभुज $5 - 2 = 3$ त्रिभुजों में बँटता है, इसलिए उसके angles का योग $3 \times 180^\circ = 540^\circ$ है।`,
      t`$5$ angles बराबर हैं, इसलिए हर एक $\frac{540^\circ}{5} = 108^\circ$ है।`,
      t`जाँच: exterior angle $180^\circ - 108^\circ = 72^\circ = \frac{360^\circ}{5}$ है, जैसा होना चाहिए।`,
    ],
  },
};
