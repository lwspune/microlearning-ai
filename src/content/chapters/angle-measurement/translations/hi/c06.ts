import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c06: ConceptTranslation = {
  id: "C06",
  lang: "hi",
  status: "approved",
  source: "1579ef95ca2184",
  hook: {
    prompt: t`दो pizza slices एक ही angle पर काटे गए हैं, पर एक pizza की **radius दूसरे से दुगुनी** है। बड़े slice में कितने गुना pizza है?`,
    reveal: t`चार गुना, दो नहीं। Slice का क्षेत्रफल $\frac{1}{2}r^2\theta$ है: angle $\theta$ वही है, और $r$ दुगुना करने से $r^2$ चार गुना हो जाता है। Crust, यानी arc $s = r\theta$, केवल दुगुना होता है।`,
  },
  intuition: [
    t`**Disc** (चकती) circle के अंदर का समतल भाग है।`,
    t`**Radius** centre से circle तक जाने वाली रेखा है।`,
    t`Radius को centre के चारों ओर एक angle $\theta$ घुमाइए: centre पर बना angle **central angle** (केंद्रीय कोण) है।`,
    t`दोनों radii के बीच जो टुकड़ा वह घेरती है, वह **sector** (त्रिज्यखंड) है, pizza के slice जैसा।`,
    t`Sector का मुड़ा हुआ किनारा एक **arc** है, यानी radii के सिरों के बीच circle का टुकड़ा: slice का crust।`,
    t`पूरा चक्कर, $2\pi$ radians, पूरी disc घेरता है, और आधा चक्कर आधी: बड़ा angle, बड़ा slice।`,
  ],
  formal: [
    {
      title: t`Sector का क्षेत्रफल`,
      points: [
        t`**Area of a sector** (sector का क्षेत्रफल) disc में उसका हिस्सा है, जिसका पूरा क्षेत्रफल $\pi r^2$ है।`,
        t`एक radius को 1 radian घुमाइए, जो पूरे चक्कर का $\frac{1}{2\pi}$ भाग है।`,
        t`वह disc का उतना ही भाग घेरती है: $\frac{1}{2\pi} \times \pi r^2 = \frac{1}{2}r^2$।`,
        t`1 radian और घुमाइए, तो वह एक और $\frac{1}{2}r^2$ घेरती है।`,
        t`इसलिए $\theta$ radians में $\theta$ गुना होता है: $A = \frac{1}{2}r^2\theta$।`,
        t`$\theta$ radians में हो, तो यह disc का $\frac{\theta}{2\pi}$ हिस्सा है: $\frac{\theta}{2\pi} \times \pi r^2 = \frac{1}{2}r^2\theta$।`,
      ],
    },
    {
      title: t`Arc से क्षेत्रफल`,
      points: [
        t`क्षेत्रफल arc से भी ज्ञात किया जा सकता है, यानी sector के मुड़े हुए किनारे से।`,
        t`**Arc length** (arc की लंबाई) $s$, arc की लंबाई है: $s = r\theta$।`,
        t`क्योंकि $A = \frac{1}{2}r^2\theta$, इससे $A = \frac{1}{2}r \times r\theta = \frac{1}{2}rs$ मिलता है।`,
        t`यह उस त्रिभुज का क्षेत्रफल है जिसका आधार $s$ और ऊँचाई $r$ है।`,
        t`Sector को पतले slices में काटिए: हर एक लगभग $r$ ऊँचाई का त्रिभुज है, और उनके आधार arc के साथ-साथ जुड़ते जाते हैं।`,
      ],
    },
    {
      title: t`पहले radius और radians`,
      points: [
        t`सूत्रों को **radius** $r$ और **radians** में angle चाहिए।`,
        t`क्षेत्रफल से दिया circle पहले $r$ देता है: $\pi r^2 = 49\pi$ का अर्थ है $r^2 = 49$, इसलिए $r = 7$।`,
        t`$d^\circ$ के angle को पहले बदलिए: $\theta = d \times \frac{\pi}{180}$, इसलिए $60^\circ = \frac{\pi}{3}$।`,
        t`तब $A = \frac{1}{2} \times 49 \times \frac{\pi}{3}$ $= \frac{49\pi}{6}$।`,
        t`$\theta$ की जगह $60$ रखने पर क्षेत्रफल $\frac{180}{\pi} \approx 57$ गुना बड़ा आ जाता है।`,
      ],
    },
    {
      title: t`Sector का perimeter`,
      points: [
        t`Sector का **perimeter** (परिमाप) उसकी पूरी सीमा की लंबाई है, चारों ओर।`,
        t`एक radius पर बाहर जाइए, जिसकी लंबाई $r$ है।`,
        t`फिर arc पर चलिए, जिसकी लंबाई $s = r\theta$ है।`,
        t`फिर दूसरी radius पर वापस आइए, जिसकी लंबाई $r$ है।`,
        t`इसलिए perimeter $r + r + s = 2r + r\theta$ है।`,
        t`दोनों radii गिनी जाती हैं, केवल arc नहीं।`,
      ],
    },
    {
      title: t`Segment का क्षेत्रफल`,
      points: [
        t`Sector $OAB$ का क्षेत्रफल $\frac{1}{2}r^2\theta$ है।`,
        t`**Chord** $AB$, arc के दोनों सिरों को जोड़ने वाली सीधी रेखा है।`,
        t`यह त्रिभुज $OAB$ को अलग करती है, जिसकी दो भुजाएँ $r$ हैं और उनके बीच का angle $\theta$ है, जिसका क्षेत्रफल $\frac{1}{2}r^2\sin\theta$ है।`,
        t`**Segment** (वृत्तखंड) arc और उसकी chord के बीच का disc का टुकड़ा है।`,
        t`यह sector घटा त्रिभुज है: $\frac{1}{2}r^2\theta - \frac{1}{2}r^2\sin\theta$।`,
        t`$r = 12$ cm और $\theta = 30^\circ = \frac{\pi}{6}$ के लिए, यह $12\pi - 36 = 12(\pi - 3)$ sq. cm है।`,
      ],
    },
  ],
  worked: {
    prompt: t`एक circle का क्षेत्रफल $225\pi$ sq. cm है। Centre पर $120^\circ$ subtend करने वाले arc की लंबाई, और संबंधित sector का क्षेत्रफल ज्ञात कीजिए।`,
    steps: [
      t`$\pi r^2 = 225\pi$, इसलिए $r^2 = 225$ और $r = 15$ cm।`,
      t`Radians में: $\theta = 120 \times \frac{\pi}{180} = \frac{2\pi}{3}$।`,
      t`अब arc: $s = r\theta = 15 \times \frac{2\pi}{3}$ $= 10\pi$ cm।`,
      t`अब sector: $A = \frac{1}{2}rs = \frac{1}{2} \times 15 \times 10\pi$ $= 75\pi$ sq. cm। जाँच: $\frac{1}{2}r^2\theta = \frac{1}{2} \times 225 \times \frac{2\pi}{3}$ $= 75\pi$।`,
    ],
    answer: t`Arc $10\pi$ cm है और sector का क्षेत्रफल $75\pi$ sq. cm है।`,
  },
  remediation: {
    "C06-M1": t`$A = \frac{1}{2}r^2\theta$ और $s = r\theta$ केवल तभी सही हैं जब $\theta$ radians में हो। पहले बदलिए: degrees को $\frac{\pi}{180}$ से गुणा कीजिए।`,
    "C06-M2": t`Sector उस त्रिभुज जैसा है जिसका आधार arc $s$ और ऊँचाई $r$ है, इसलिए $A = \frac{1}{2}rs = \frac{1}{2}r^2\theta$। $\frac{1}{2}$ बना रहता है।`,
    "C06-M3": t`$s = r\theta$, arc की लंबाई है, cm में। Sector का क्षेत्रफल $\frac{1}{2}r^2\theta = \frac{1}{2}rs$ है, sq. cm में।`,
    "C06-M4": t`Sector में chord पर बना त्रिभुज भी शामिल है। Arc और chord के बीच का क्षेत्रफल, sector घटा वह त्रिभुज है, जिसका क्षेत्रफल $\frac{1}{2}r^2\sin\theta$ है।`,
    "C06-M5": t`Sector की सीमा arc और दोनों radii हैं, इसलिए उसका perimeter $2r + s$ है। Arc पाने के लिए $2r$ घटाइए।`,
    "C06-M6": t`Sector के दो सीधे किनारे हैं, दोनों radii: perimeter $= r + r + s = 2r + s$।`,
  },
  solutions: {
    "C06-Q1": [
      t`$\pi r^2 = 25\pi$, इसलिए $r = 5$ cm।`,
      t`Radians में: $\theta = 144 \times \frac{\pi}{180} = \frac{4\pi}{5}$।`,
      t`इसलिए $A = \frac{1}{2}r^2\theta = \frac{1}{2} \times 25 \times \frac{4\pi}{5} = 10\pi$ sq. cm।`,
    ],
    "C06-Q2": [
      t`$\pi r^2 = 9\pi$, इसलिए $r = 3$ cm, और $\theta = 60^\circ = \frac{\pi}{3}$।`,
      t`अब arc: $s = r\theta = 3 \times \frac{\pi}{3} = \pi$ cm।`,
      t`सीमा में दो radii और arc हैं: perimeter $= 3 + 3 + \pi = 6 + \pi$ cm।`,
    ],
    "C06-Q3": [
      t`$\pi r^2 = 64\pi$, इसलिए $r = 8$ cm।`,
      t`Perimeter $= 2r + s$: $16 + s = 56$, इसलिए arc $s = 40$ cm है।`,
      t`इसलिए $A = \frac{1}{2}rs = \frac{1}{2} \times 8 \times 40 = 160$ sq. cm।`,
    ],
    "C06-Q4": [
      t`$\theta = 30^\circ = \frac{\pi}{6}$। Sector OPQ का क्षेत्रफल: $\frac{1}{2}r^2\theta = \frac{1}{2} \times 225 \times \frac{\pi}{6} = \frac{75\pi}{4}$।`,
      t`त्रिभुज OPQ: $\frac{1}{2}r^2\sin\theta = \frac{1}{2} \times 225 \times \frac{1}{2} = \frac{225}{4}$।`,
      t`Arc और chord के बीच का क्षेत्रफल $=$ sector $-$ त्रिभुज $= \frac{75\pi}{4} - \frac{225}{4} = \frac{75}{4}(\pi - 3)$ sq. cm।`,
    ],
    "C06-Q5": [
      t`$\pi r^2 = 81\pi$, इसलिए $r = 9$ cm।`,
      t`Radians में: $\theta = 300 \times \frac{\pi}{180} = \frac{5\pi}{3}$।`,
      t`इसलिए $A = \frac{1}{2}r^2\theta = \frac{1}{2} \times 81 \times \frac{5\pi}{3} = \frac{135\pi}{2}$ sq. cm।`,
    ],
    "C06-Q6": [
      t`तार दोनों radii और arc पर चलता है: $2r + s = 20$।`,
      t`$10 + s = 20$, इसलिए arc $s = 10$ m है।`,
      t`इसलिए $A = \frac{1}{2}rs = \frac{1}{2} \times 5 \times 10 = 25$ sq. m।`,
    ],
  },
};
