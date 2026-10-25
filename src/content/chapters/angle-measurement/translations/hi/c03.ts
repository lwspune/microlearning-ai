import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "hi",
  status: "approved",
  source: "146f4c790f0b63",
  hook: {
    prompt: t`किसी circle की radius को उसकी परिधि पर, एक मुड़े हुए arc की तरह, बिछा दीजिए। **यह arc centre पर जो angle बनाता है, वह $60^\circ$ से ज़्यादा है या कम?**`,
    reveal: t`कम। Radius के बराबर एक सीधी chord $60^\circ$ बनाती है (वह दोनों radii के साथ एक समबाहु त्रिभुज बनाती है), और उन्हीं दो बिंदुओं के बीच का arc chord से लंबा होता है। Radius के बराबर arc $1^c = \left(\frac{180}{\pi}\right)^\circ \approx 57.3^\circ$ बनाता है: एक **radian**।`,
  },
  intuition: [
    t`Degrees पूरे चक्कर को $360$ बराबर भागों में बाँटती हैं।`,
    t`**Radians** चक्कर को circle से ही मापते हैं।`,
    t`Circle की **radius** (त्रिज्या) $r$ उसके centre $O$ से उसकी परिधि तक की दूरी है।`,
    t`$r$ लंबाई की एक arm को $O$ के चारों ओर $OA$ से $OB$ तक घुमाइए।`,
    t`उसका सिरा परिधि के एक टुकड़े, **arc** (चाप) $AB$, पर चलता है।`,
    t`जब arc $AB$ की लंबाई radius के बराबर हो, तो arm **एक radian** घूमी है, जिसे $1^c$ लिखते हैं।`,
  ],
  formal: [
    {
      title: t`हर circle में एक जैसा`,
      points: [
        t`एक radian हर circle में, छोटा हो या बड़ा, एक ही angle है।`,
        t`$r$ radius का एक circle लीजिए, और उससे दुगुना, $2r$ radius का एक।`,
        t`उनके centre $O$ के चारों ओर एक arm को $1^c$ घुमाइए।`,
        t`छोटे circle पर, यह $r$ लंबा arc काटती है।`,
        t`बड़े circle पर, यह $2r$ लंबा arc काटती है: दुगुना लंबा।`,
        t`Arms अपनी जगह से नहीं हिलतीं, इसलिए centre पर angle अब भी $1^c$ है।`,
      ],
    },
    {
      title: t`मुख्य तथ्य`,
      points: [
        t`Circle की पूरी परिधि $2\pi r$ लंबी होती है, जहाँ $\pi$ संख्या $3.14159\ldots$ है।`,
        t`एक arm को initial arm से आधा चक्कर, $180^\circ$, घुमाइए।`,
        t`आधा चक्कर आधी परिधि तय करता है, यानी $\pi r$ लंबा arc।`,
        t`उस arc में $\pi$ radii समाती हैं, यानी तीन से थोड़ी ज़्यादा।`,
        t`इसलिए आधा चक्कर $\pi$ radians है: $\pi^c = 180^\circ$, यही मुख्य तथ्य है।`,
        t`पूरा चक्कर $2\pi^c = 360^\circ$ है, $\pi^c$ नहीं।`,
      ],
    },
    {
      title: t`Degrees से radians`,
      points: [
        t`Degrees को radians में बदलने के लिए, $\frac{\pi}{180}$ से गुणा कीजिए।`,
        t`मुख्य तथ्य, $\pi^c = 180^\circ$, को $180$ से भाग दीजिए: $1^\circ = \left(\frac{\pi}{180}\right)^c$।`,
        t`इसलिए $\theta^\circ = \left(\theta \times \frac{\pi}{180}\right)^c$।`,
        t`उदाहरण के लिए, $70^\circ$ का angle लीजिए।`,
        t`तब $70^\circ = \left(70 \times \frac{\pi}{180}\right)^c = \left(\frac{7\pi}{18}\right)^c$।`,
      ],
    },
    {
      title: t`Radians से degrees`,
      points: [
        t`Radians को degrees में बदलने के लिए, $\frac{180}{\pi}$ से गुणा कीजिए।`,
        t`एक radian degrees में कितना है, यह जानने के लिए मुख्य तथ्य, $\pi^c = 180^\circ$, को $\pi$ से भाग दीजिए।`,
        t`इससे मिलता है $1^c = \left(\frac{180}{\pi}\right)^\circ \approx 57^\circ 17' 45''$।`,
        t`इसलिए $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$।`,
        t`गुणक सही है या नहीं, इसे मुख्य तथ्य पर आज़माइए।`,
        t`उसे $180^\circ$ को $\pi^c$ में, या $\pi^c$ को $180^\circ$ में बदलना चाहिए।`,
      ],
    },
    {
      title: t`ऋणात्मक angles`,
      points: [
        t`**Negative angle** (ऋणात्मक angle) एक clockwise घुमाव है।`,
        t`इकाई बदलने से दिशा नहीं बदलती, इसलिए ऋण चिह्न बना रहता है।`,
        t`Anticlockwise घुमाने पर, $90^\circ = \left(\frac{\pi}{2}\right)^c$।`,
        t`Clockwise घुमाने पर, $-90^\circ = -\left(\frac{\pi}{2}\right)^c$।`,
        t`इसी तरह, $\left(-\frac{\pi}{18}\right)^c = -10^\circ$।`,
      ],
    },
    {
      title: t`पहले minutes`,
      points: [
        t`Degrees और minutes वाले angle, $D^\circ M'$, को बदलने से पहले degrees की एक संख्या बनाना ज़रूरी है।`,
        t`एक minute, degree का $\frac{1}{60}$ भाग है, इसलिए $M' = \left(\frac{M}{60}\right)^\circ$।`,
        t`उदाहरण के लिए, $40^\circ 15'$ का angle लीजिए।`,
        t`उसके minutes $15' = \left(\frac{15}{60}\right)^\circ = 0.25^\circ$ हैं।`,
        t`इसलिए $40^\circ 15' = \left(40\frac{15}{60}\right)^\circ = 40.25^\circ$, $40.15^\circ$ नहीं।`,
        t`फिर हमेशा की तरह $\frac{\pi}{180}$ से गुणा कीजिए।`,
      ],
    },
    {
      title: t`जहाँ π न दिखे`,
      points: [
        t`बिना $\pi$ का radian माप, जैसे $3^c$, फिर भी radians में ही है।`,
        t`यह तीन radii लंबा arc है, $3^\circ$ नहीं।`,
        t`इसे भी उसी तरह, $\frac{180}{\pi}$ से गुणा करके बदलिए: $3^c = \left(\frac{540}{\pi}\right)^\circ$।`,
        t`जब प्रश्न कहे, तब $\pi = \frac{22}{7}$ लीजिए।`,
        t`तब $\frac{540 \times 7}{22} = \frac{1890}{11}$, इसलिए $3^c \approx 171.8^\circ$।`,
      ],
    },
  ],
  worked: {
    prompt: t`$75^\circ 30'$ को radians में बदलिए।`,
    steps: [
      t`पहले minutes: $30' = \left(\frac{30}{60}\right)^\circ$ $= \left(\frac{1}{2}\right)^\circ$, इसलिए $75^\circ 30' = \left(75\frac{1}{2}\right)^\circ$ $= \left(\frac{151}{2}\right)^\circ$।`,
      t`Degrees से radians: $\frac{\pi}{180}$ से गुणा कीजिए। $\frac{151}{2} \times \frac{\pi}{180} = \frac{151\pi}{360}$।`,
      t`जाँच: $90^\circ = \left(\frac{\pi}{2}\right)^c$ $= \left(\frac{180\pi}{360}\right)^c$। हमारा angle $90^\circ$ से थोड़ा कम है, और $\frac{151\pi}{360}$ भी $\frac{180\pi}{360}$ से थोड़ा कम है।`,
    ],
    answer: t`$75^\circ 30' = \left(\frac{151\pi}{360}\right)^c$`,
  },
  remediation: {
    "C03-M1": t`Degrees से radians: $\frac{\pi}{180}$ से गुणा कीजिए। Radians से degrees: $\frac{180}{\pi}$ से गुणा कीजिए। अपने गुणक को मुख्य तथ्य पर जाँचिए: $180^\circ$ को $\pi^c$ बनना चाहिए, और $\pi^c$ को $180^\circ$।`,
    "C03-M2": t`पूरा चक्कर $2\pi r$ लंबा arc तय करता है, इसलिए वह $2\pi$ radians है। आधा चक्कर $\pi^c = 180^\circ$ है, $360^\circ$ नहीं।`,
    "C03-M3": t`एक minute, degree का $\frac{1}{60}$ भाग है, $\frac{1}{100}$ नहीं: $30' = \left(\frac{30}{60}\right)^\circ = 0.5^\circ$। पहले minutes को degree के भिन्न में बदलिए, फिर रूपांतर कीजिए।`,
    "C03-M4": t`$180^\circ$ के बराबर $\pi^c$ है, $1^c$ नहीं। इसलिए $1^\circ = \left(\frac{\pi}{180}\right)^c$ और $1^c = \left(\frac{180}{\pi}\right)^\circ$: गुणक में $\pi$ बना रहता है।`,
    "C03-M5": t`ऋणात्मक angle एक clockwise घुमाव है, और इकाई बदलने से दिशा नहीं बदलती। चिह्न बनाए रखिए: उदाहरण के लिए $-90^\circ = -\left(\frac{\pi}{2}\right)^c$।`,
  },
  solutions: {
    "C03-Q1": [
      t`$156^\circ$ आधे चक्कर से थोड़ा कम है। क्योंकि $\pi^c = 180^\circ$, $1^\circ = \left(\frac{\pi}{180}\right)^c$: $\frac{\pi}{180}$ से गुणा कीजिए।`,
      t`$156 \times \frac{\pi}{180} = \frac{156\pi}{180} = \frac{13\pi}{15}$, अंश और हर दोनों को $12$ से भाग देकर।`,
      t`इसलिए $156^\circ = \left(\frac{13\pi}{15}\right)^c$, $\pi^c = 180^\circ$ से थोड़ा कम, जैसा अपेक्षित था।`,
    ],
    "C03-Q2": [
      t`Radians से degrees: क्योंकि $\pi^c = 180^\circ$, $\frac{180}{\pi}$ से गुणा कीजिए।`,
      t`$\frac{22\pi}{15} \times \frac{180}{\pi} = 22 \times 12 = 264$, इसलिए $\left(\frac{22\pi}{15}\right)^c = 264^\circ$: आधा चक्कर और $84^\circ$ और।`,
    ],
    "C03-Q3": [
      t`पहले minutes: $30' = \left(\frac{30}{60}\right)^\circ = 0.5^\circ$, इसलिए $65^\circ 30' = 65.5^\circ = \left(\frac{131}{2}\right)^\circ$। यह $65.3^\circ$ नहीं है: एक minute, degree का साठवाँ भाग है।`,
      t`$\frac{\pi}{180}$ से गुणा कीजिए: $\frac{131}{2} \times \frac{\pi}{180} = \frac{131\pi}{360}$, इसलिए $65^\circ 30' = \left(\frac{131\pi}{360}\right)^c$।`,
    ],
    "C03-Q4": [
      t`ऋण चिह्न का अर्थ है $132^\circ$ का clockwise घुमाव। इकाई बदलने से दिशा नहीं बदलेगी, इसलिए चिह्न रखिए और $132^\circ$ को बदलिए।`,
      t`$132 \times \frac{\pi}{180} = \frac{132\pi}{180} = \frac{11\pi}{15}$, अंश और हर को $12$ से भाग देकर। इसलिए $-132^\circ = -\left(\frac{11\pi}{15}\right)^c$।`,
    ],
    "C03-Q5": [
      t`$5^c$ में $\pi$ नहीं है, फिर भी यह radians में है। क्योंकि $1^c = \left(\frac{180}{\pi}\right)^\circ$, $5^c = \left(\frac{900}{\pi}\right)^\circ$।`,
      t`$\pi = \frac{22}{7}$ लेकर: $\frac{900 \times 7}{22} = \frac{6300}{22} = \frac{3150}{11}$। इसलिए $5^c = \left(\frac{3150}{11}\right)^\circ \approx 286.4^\circ$, $57.3^\circ$ के पाँच गुने से थोड़ा कम।`,
    ],
    "C03-Q6": [
      t`पहले degrees: $\left(\frac{1}{5}\right)^c = \left(\frac{1}{5} \times \frac{180}{\pi}\right)^\circ = \left(\frac{36}{\pi}\right)^\circ = \left(\frac{36 \times 7}{22}\right)^\circ = \left(\frac{126}{11}\right)^\circ = 11\frac{5}{11}^\circ$।`,
      t`अब minutes: $\frac{5}{11}^\circ = \frac{5}{11} \times 60' = \frac{300}{11}' = 27\frac{3}{11}'$।`,
      t`Seconds: $\frac{3}{11}' = \frac{3}{11} \times 60'' = \frac{180}{11}'' = 16\frac{4}{11}''$। इसलिए $\left(\frac{1}{5}\right)^c = 11^\circ\ 27'\ 16\frac{4}{11}''$।`,
    ],
  },
};
