import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "hi",
  status: "approved",
  source: "01210d1ef61ad5",
  hook: {
    prompt: t`$30$ cm लंबे windscreen wiper का सिरा $120^\circ$ घूमता है। एक दोस्त कहता है कि सिरा $30 \times 120 = 3600$ cm चलता है, यानी $36$ मीटर। **गलती कहाँ हुई?**`,
    reveal: t`$s = r\theta$ केवल तभी काम करता है जब $\theta$ **radians** में हो। $120^\circ = \frac{2\pi}{3}$, इसलिए $s = 30 \times \frac{2\pi}{3} = 20\pi \approx 62.8$ cm। यह ठीक लगता है: यह पूरे circle का एक तिहाई है, जिसकी circumference $60\pi \approx 188$ cm है।`,
  },
  intuition: [
    t`**Circle** (वृत्त) उन सभी बिंदुओं से बनता है जो एक निश्चित बिंदु, उसके **centre** (केंद्र) $O$, से एक ही दूरी, यानी **radius** $r$, पर हों।`,
    t`Radius को $O$ के चारों ओर घुमाइए, तो उसका सिरा एक **arc** बनाता है, जो circle का एक टुकड़ा है।`,
    t`Arc उस angle को **subtend** करता है (अंतरित करता है) जितना radius घूमा: यानी centre पर का angle।`,
    t`एक **radian** वह angle है जिसका arc ठीक एक radius लंबा हो।`,
    t`$2.5$ radians तक घुमाते जाइए: सिरा एक और radius-लंबाई का arc बनाता है, फिर उसका आधा।`,
    t`इसलिए $\theta$ radians, $\theta$ radius-लंबाइयों का arc काटते हैं।`,
  ],
  formal: [
    {
      title: t`Arc की लंबाई`,
      points: [
        t`$r$ radius का एक circle लीजिए, जिसका centre $O$ हो।`,
        t`Radius को $O$ के चारों ओर angle $\theta^c$, यानी $\theta$ radians, घुमाइए।`,
        t`उसका सिरा एक arc बनाता है; **length of the arc** (arc की लंबाई), $s$, circle पर एक छोर से दूसरे छोर तक की दूरी है।`,
        t`इसलिए $s = r\theta$, जहाँ $\theta$ radians में है।`,
        t`Arc उसी इकाई में आता है जिसमें radius: cm में radius से cm में arc।`,
        t`Radius दुगुनी कीजिए, या angle दुगुना कीजिए, तो arc दुगुना हो जाता है।`,
      ],
    },
    {
      title: t`Degrees में angle: पहले बदलिए`,
      points: [
        t`**Degrees** में दिए angle को $s = r\theta$ में रखने से पहले radians में बदलना ज़रूरी है।`,
        t`$\theta^c = \theta^\circ \times \frac{\pi}{180}$ से बदलिए।`,
        t`यह वैसा ही है जैसे **circumference** (परिधि) $2\pi r$, यानी circle के पूरे घेरे, का $\frac{\theta^\circ}{360}$ भाग लेना।`,
        t`चौथाई चक्कर $90^\circ = \frac{\pi}{2}$ है।`,
        t`इसलिए उसका arc $s = \frac{\pi r}{2}$ है, यानी $2\pi r$ का एक चौथाई।`,
        t`सीधे $90$ रखने पर $90r$ मिलता, जो पूरे circle से भी बहुत लंबा है।`,
      ],
    },
    {
      title: t`Radius या angle ज्ञात करना`,
      points: [
        t`$s = r\theta$ को बदलकर radius, $r = \frac{s}{\theta}$, और angle, $\theta = \frac{s}{r}$, मिलते हैं।`,
        t`Angle radians में आता है; degrees के लिए $\frac{180}{\pi}$ से गुणा कीजिए।`,
        t`$4$ cm radius का एक circle लीजिए।`,
        t`Radius के सिरे से शुरू करके $6$ cm लंबा एक arc चिह्नित कीजिए।`,
        t`यह arc centre पर $\theta = \frac{6}{4} = 1.5$ radians subtend करता है।`,
        t`Degrees में, यह $1.5 \times \frac{180}{\pi} = \left(\frac{270}{\pi}\right)^\circ$ है, लगभग $86^\circ$।`,
      ],
    },
    {
      title: t`दो circles में बराबर arcs`,
      points: [
        t`दो circles लीजिए, जिनकी radii $r_1$ और $r_2$ हैं।`,
        t`हर एक में radius घूमती है: पहले में $\theta_1$, दूसरे में $\theta_2$।`,
        t`सिरे **same length** (एक ही लंबाई) $s$ के arcs बनाते हैं, इसलिए $s = r_1\theta_1 = r_2\theta_2$।`,
        t`इसलिए $r_1 : r_2 = \theta_2 : \theta_1$।`,
        t`Angles की जगहें बदल जाती हैं: छोटे angle के लिए बड़ा circle चाहिए।`,
        t`पहले दोनों angles को एक ही इकाई में लाइए।`,
      ],
    },
    {
      title: t`बराबर arcs: एक उदाहरण`,
      points: [
        t`$3$ cm और $2$ cm radii के circles लीजिए।`,
        t`पहले में radius $\frac{\pi}{6}$ घूमती है; दूसरे में $\frac{\pi}{4}$।`,
        t`दोनों सिरे $\frac{\pi}{2}$ cm लंबे arcs बनाते हैं: $3 \times \frac{\pi}{6} = 2 \times \frac{\pi}{4} = \frac{\pi}{2}$।`,
        t`इसलिए $3 : 2 = \frac{\pi}{4} : \frac{\pi}{6}$: छोटा angle बड़े circle के साथ जाता है।`,
      ],
    },
    {
      title: t`कहानी में circle ढूँढिए`,
      points: [
        t`शाब्दिक प्रश्न में, **centre** वह बिंदु है जो स्थिर रहता है।`,
        t`**Radius** वह है जो उसके चारों ओर झूलती है: pendulum की लंबाई radius है।`,
        t`**Arc** वह रास्ता है जो radius का दूर वाला सिरा बनाता है: pendulum के bob का रास्ता।`,
        t`खूँटे से बँधी तनी हुई रस्सी radius है, और चला गया रास्ता arc है।`,
        t`अगर diameter दिया हो, तो उसे आधा कीजिए: $r$ हमेशा radius है।`,
      ],
    },
    {
      title: t`Chord, arc नहीं है`,
      points: [
        t`**Chord** (जीवा) circle के दो बिंदुओं को जोड़ने वाला सीधा रेखाखंड है।`,
        t`उन्हीं दो बिंदुओं के बीच का arc बाहर की ओर मुड़ा होता है, इसलिए वह chord से लंबा होता है।`,
        t`Radius जितनी लंबी एक chord $AB$ लीजिए: $OA = AB = r$।`,
        t`$O$ को $B$ से जोड़िए: त्रिभुज $OAB$ समबाहु है, इसलिए $\angle AOB = 60^\circ = \frac{\pi}{3}$।`,
        t`उसका arc $r \times \frac{\pi}{3} \approx 1.05r$ है, chord से थोड़ा लंबा।`,
        t`इसलिए यह chord $1$ radian नहीं काटती: एक radian वहाँ है जहाँ **arc**, न कि chord, radius के बराबर हो।`,
      ],
    },
  ],
  worked: {
    prompt: t`$21$ cm लंबा एक pendulum $36^\circ$ के angle में दोलन करता है। उसके रास्ते की लंबाई ज्ञात कीजिए।`,
    steps: [
      t`Bob एक circle के arc पर चलता है, जिसकी radius pendulum की लंबाई है: $r = 21$ cm।`,
      t`Angle बदलिए: $\theta = 36 \times \frac{\pi}{180}$ $= \frac{\pi}{5}$ radians।`,
      t`$s = r\theta = 21 \times \frac{\pi}{5}$ $= \frac{21\pi}{5}$ cm। $\pi \approx \frac{22}{7}$ लेकर, यह $\frac{21}{5} \times \frac{22}{7} = 13.2$ cm है।`,
    ],
    answer: t`रास्ता $\frac{21\pi}{5} \approx 13.2$ cm लंबा है।`,
  },
  remediation: {
    "C05-M1": t`$s = r\theta$ में $\theta$ radians में चाहिए। पहले $\theta^c = \theta^\circ \times \frac{\pi}{180}$ से बदलिए; और $\frac{s}{r}$ radians में आता है, इसलिए degrees पाने के लिए $\frac{180}{\pi}$ से गुणा कीजिए।`,
    "C05-M2": t`Degrees से radians: $\frac{\pi}{180}$ से गुणा कीजिए, ताकि $180^\circ$, $\pi$ बन जाए। Radians से degrees: $\frac{180}{\pi}$ से गुणा कीजिए, ताकि $\pi$, $180^\circ$ बन जाए।`,
    "C05-M3": t`Arc $s = r\theta$ है, cm में एक लंबाई। $\frac{1}{2}r^2\theta$, sector का क्षेत्रफल है, sq. cm में, जो आगे आता है।`,
    "C05-M4": t`बराबर arcs से $r_1\theta_1 = r_2\theta_2$ मिलता है, इसलिए $r_1 : r_2 = \theta_2 : \theta_1$। छोटे angle वाला circle बड़ा होता है।`,
    "C05-M5": t`एक radian वहाँ है जहाँ **arc** radius के बराबर हो। Radius के बराबर **chord** centre के साथ समबाहु त्रिभुज बनाती है, इसलिए वह $60^\circ = \frac{\pi}{3}$ subtend करती है, और arc chord से लंबा होता है।`,
    "C05-M6": t`$s = r\theta$ में $r$, radius है। जब diameter दिया हो, तो पहले उसे आधा कीजिए।`,
  },
  solutions: {
    "C05-Q1": [
      t`Radius, diameter का आधा है: $r = 7$ cm।`,
      t`Angle बदलिए: $\theta = 54 \times \frac{\pi}{180} = \frac{3\pi}{10}$ radians।`,
      t`$s = r\theta = 7 \times \frac{3\pi}{10} = \frac{21\pi}{10}$ cm, लगभग $6.6$ cm।`,
    ],
    "C05-Q2": [
      t`Bob एक arc पर चलता है जिसकी radius pendulum की लंबाई है: $r = 14$ cm।`,
      t`Angle बदलिए: $\theta = 12 \times \frac{\pi}{180} = \frac{\pi}{15}$ radians।`,
      t`इसलिए $s = r\theta = 14 \times \frac{\pi}{15} = \frac{14\pi}{15}$ cm।`,
    ],
    "C05-Q3": [
      t`रस्सी radius है और चले गए $88$ m arc हैं। Angle बदलिए: $\theta = 72 \times \frac{\pi}{180} = \frac{2\pi}{5}$ radians।`,
      t`$s = r\theta$ से $r = \frac{s}{\theta} = 88 \times \frac{5}{2\pi} = \frac{220}{\pi}$ m मिलता है।`,
      t`$\pi \approx \frac{22}{7}$ लेकर: $r = 220 \times \frac{7}{22} = 70$ m।`,
    ],
    "C05-Q4": [
      t`तार arc है, इसलिए $s = 10$ और $r = 4$: $\theta = \frac{s}{r} = \frac{10}{4} = \frac{5}{2}$ radians।`,
      t`Degrees में: $\frac{5}{2} \times \frac{180}{\pi} = \left(\frac{450}{\pi}\right)^\circ$, लगभग $143^\circ$।`,
    ],
    "C05-Q5": [
      t`दोनों angles radians में: $60^\circ = \frac{\pi}{3}$, और दूसरा पहले से ही $\frac{5\pi}{12}$ है।`,
      t`Arcs बराबर हैं: $r_1 \times \frac{\pi}{3} = r_2 \times \frac{5\pi}{12}$।`,
      t`इसलिए $\frac{r_1}{r_2} = \frac{5\pi}{12} \div \frac{\pi}{3} = \frac{5}{4}$: $r_1 : r_2 = 5 : 4$। छोटे angle वाला circle बड़ा है।`,
    ],
    "C05-Q6": [
      t`Chord के सिरों $A$, $B$ को centre $O$ से जोड़िए: $OA = OB = AB = 9$ cm, इसलिए त्रिभुज $OAB$ समबाहु है।`,
      t`इसलिए $\angle AOB = 60^\circ = \frac{\pi}{3}$ radians।`,
      t`$s = r\theta = 9 \times \frac{\pi}{3} = 3\pi$ cm, लगभग $9.42$ cm: $9$ cm की chord से थोड़ा लंबा।`,
    ],
  },
};
