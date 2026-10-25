import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "hi",
  status: "approved",
  source: "1cafa36337fa8b",
  hook: {
    prompt: t`3:00 बजे घड़ी की सुइयाँ $90^\circ$ दूर होती हैं। 3:30 तक minute hand आधा चक्कर घूम चुकी है, 12 से 6 तक। **क्या अब सुइयों के बीच का angle $90^\circ$ है?**`,
    reveal: t`नहीं, यह $75^\circ$ है। उन 30 मिनटों में hour hand भी चली: 3 से 4 की आधी दूरी, यानी $15^\circ$। 12 से गिनें तो hour hand $90^\circ + 15^\circ = 105^\circ$ पर है और minute hand $180^\circ$ पर, इसलिए वे $180^\circ - 105^\circ = 75^\circ$ दूर हैं।`,
  },
  intuition: [
    t`**Clock face** (घड़ी का डायल) एक circle है, इसलिए एक बार पूरा घूमना एक पूरा चक्कर, $360^\circ$, है।`,
    t`बारह **hour marks** (घंटे के निशान) इसे बराबर भागों में बाँटते हैं: एक निशान से अगले तक $360^\circ \div 12 = 30^\circ$।`,
    t`दो **hands** (सुइयाँ) centre के चारों ओर घूमती हैं, दोनों एक ही दिशा में, **clockwise**: 12 से 1 से 2 और आगे।`,
    t`एक घंटे में लंबी **minute hand** (मिनट की सुई) एक बार पूरी घूमती है, और छोटी **hour hand** (घंटे की सुई) केवल एक निशान आगे बढ़ती है।`,
    t`Hour hand लगातार चलती है, झटकों में नहीं: साढ़े तीन बजे वह 3 और 4 के ठीक बीच में होती है।`,
    t`**Angle between the hands** (सुइयों के बीच का angle) centre पर एक सुई से दूसरी सुई तक का angle है।`,
  ],
  formal: [
    {
      title: t`Minute hand की चाल`,
      points: [
        t`किसी सुई की **rate** (चाल) यह है कि वह एक मिनट में कितना घूमती है।`,
        t`Minute hand 60 मिनट में एक पूरा चक्कर, $360^\circ$, लगाती है, इसलिए उसकी चाल $360^\circ \div 60 = 6^\circ$ प्रति मिनट है।`,
        t`पाँच मिनट में वह $30^\circ$ घूमती है, एक hour mark से अगले तक।`,
        t`घंटे के $m$ मिनट बाद, वह 12 से $6m$ degrees clockwise घूम चुकी होती है।`,
        t`25 मिनट बाद, यह $6 \times 25 = 150^\circ$ है, यानी 5 की ओर।`,
      ],
    },
    {
      title: t`Hour hand की चाल`,
      points: [
        t`Hour hand 60 मिनट में एक hour mark, $30^\circ$, आगे बढ़ती है।`,
        t`इसलिए उसकी चाल $30^\circ \div 60 = \frac{1}{2}^\circ$ प्रति मिनट है, minute hand की चाल का बारहवाँ भाग।`,
        t`घंटे के $m$ मिनट बाद, वह अपने hour mark से $\frac{m}{2}$ degrees आगे होती है, अगले निशान की ओर।`,
        t`1:00 से 1:40 तक, minute hand 12 से घूमकर 8 तक जाती है।`,
        t`उन 40 मिनटों में hour hand 1 से $\frac{40}{2} = 20^\circ$ आगे घूमती है, 2 की ओर दो-तिहाई रास्ता।`,
      ],
    },
    {
      title: t`Minute hand की बढ़त`,
      points: [
        t`Minute hand, hour hand से उतना **gain** करती है (आगे निकलती है) जितना वह उसी समय में ज़्यादा घूमती है।`,
        t`12:00 से 12:20 तक, minute hand $120^\circ$ घूमती है, 12 से 4 तक।`,
        t`उन्हीं 20 मिनटों में hour hand उसी दिशा में केवल $10^\circ$ घूमती है।`,
        t`दोनों clockwise घूमती हैं, इसलिए तेज़ चाल में से धीमी घटाइए: हर मिनट वह $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ$ आगे निकलती है।`,
        t`$m$ मिनट में वह $\frac{11m}{2}$ degrees आगे निकलती है।`,
        t`इसलिए 12:20 तक सुइयों के बीच का अंतर बढ़कर $20 \times 5\frac{1}{2}^\circ = 110^\circ$ हो गया है।`,
      ],
    },
    {
      title: t`सुइयों की स्थितियाँ`,
      points: [
        t`किसी सुई की **position** (स्थिति) 12 से clockwise मापा गया उसका angle है।`,
        t`$h$ घंटे $m$ मिनट का समय लीजिए, जहाँ 12 बजे $h = 0$ है।`,
        t`Hour hand को हर पूरे घंटे के लिए $30^\circ$ और मिनटों के लिए $\frac{m}{2}$ और मिलते हैं: वह $30h + \frac{m}{2}$ पर है।`,
        t`Minute hand $6m$ पर है।`,
        t`8:20 पर hour hand $30 \times 8 + \frac{20}{2} = 240^\circ + 10^\circ = 250^\circ$ पर है।`,
        t`Minute hand $6 \times 20 = 120^\circ$ पर है, 4 की ओर।`,
      ],
    },
    {
      title: t`स्थितियों से angle`,
      points: [
        t`सुइयों के बीच का angle उनकी स्थितियों का अंतर है: $\theta = \left|30h + \frac{m}{2} - 6m\right|$।`,
        t`यह सरल होकर $\theta = \left|30h - \frac{11m}{2}\right|$ बनता है।`,
        t`Hour hand घंटे की शुरुआत में $30h$ आगे होती है, और minute hand उससे $\frac{11m}{2}$ आगे निकलती है।`,
        t`8:20 पर, $\theta = 250^\circ - 120^\circ = 130^\circ$।`,
      ],
    },
    {
      title: t`छोटा या reflex angle`,
      points: [
        t`सुइयाँ पूरे चक्कर को दो angles में बाँटती हैं जिनका योग $360^\circ$ है।`,
        t`**Reflex angle** (प्रतिवर्ती कोण) वह है जो $180^\circ$ से बड़ा हो; दूसरा, जो अधिकतम $180^\circ$ हो, **smaller angle** (छोटा angle) है।`,
        t`अगर $\theta > 180^\circ$, तो छोटा angle $360^\circ - \theta$ है।`,
        t`9:10 पर, $\theta = |270 - 55| = 215^\circ$, यह reflex angle है।`,
        t`इसलिए छोटा angle $360^\circ - 215^\circ = 145^\circ$ है।`,
        t`देखिए कि प्रश्न कौन-सा angle पूछ रहा है।`,
      ],
    },
    {
      title: t`आधी degrees`,
      points: [
        t`एक degree 60 **minutes of angle** (कोण के minutes) में बँटती है, घड़ी के मिनटों में नहीं: $1^\circ = 60'$।`,
        t`इसलिए आधी degree $30'$ है, $50'$ नहीं।`,
        t`आधी degrees hour hand के $\frac{m}{2}$ से आती हैं, जब $m$ विषम हो।`,
        t`2:15 पर hour hand 12 से $60^\circ + 7.5^\circ = 67.5^\circ$ पर है।`,
        t`यानी $67^\circ 30'$।`,
        t`Minute hand की $5\frac{1}{2}^\circ$ प्रति मिनट की बढ़त $5^\circ 30'$ है।`,
      ],
    },
  ],
  worked: {
    prompt: t`पौने बारह (11:45) बजे घड़ी की hour hand और minute hand के बीच का छोटा angle degrees और minutes में ज्ञात कीजिए।`,
    steps: [
      t`Minute hand: 12 से $6 \times 45 = 270^\circ$, यानी 9 की ओर।`,
      t`Hour hand: 11 तक $30 \times 11 = 330^\circ$, और 45 मिनटों के लिए $\frac{45}{2} = 22.5^\circ$ और: $352.5^\circ$, 12 से केवल $7.5^\circ$ पहले।`,
      t`घटाइए: $352.5^\circ - 270^\circ = 82.5^\circ$। सूत्र से भी यही मिलता है: $\left|330 - \frac{11 \times 45}{2}\right|$ $= |330 - 247.5|$ $= 82.5$। यह $180^\circ$ से कम है, इसलिए यही छोटा angle है।`,
      t`$0.5^\circ = 30'$, इसलिए $82.5^\circ = 82^\circ 30'$ है।`,
    ],
    answer: t`छोटा angle $82^\circ 30'$ है (reflex angle $277^\circ 30'$ है)।`,
  },
  remediation: {
    "C07-M1": t`Hour hand भी चलती है: हर मिनट $\frac{1}{2}^\circ$। $m$ मिनट बाद वह अपने hour mark से $\frac{m}{2}$ degrees आगे होती है, 12 से $30h + \frac{m}{2}$ degrees पर।`,
    "C07-M2": t`दोनों सुइयाँ clockwise घूमती हैं। $m$ मिनट बाद hour hand अपने hour mark से $\frac{m}{2}$ degrees **आगे** होती है, अगली संख्या की ओर, इसलिए minute hand हर मिनट उससे $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ$ आगे निकलती है।`,
    "C07-M3": t`सुइयों के बीच के दो angles का योग $360^\circ$ है। छोटा अधिकतम $180^\circ$ होता है और reflex angle $180^\circ$ से ज़्यादा: वही दीजिए जो प्रश्न पूछे।`,
    "C07-M4": t`$1^\circ = 60'$, इसलिए $\frac{1}{2}^\circ = 30'$: $22.5^\circ = 22^\circ 30'$, $22^\circ 50'$ नहीं।`,
  },
  solutions: {
    "C07-Q1": [
      t`Minute hand: 12 से $6 \times 20 = 120^\circ$, यानी 4 की ओर।`,
      t`Hour hand: $30 \times 2 + \frac{20}{2} = 60^\circ + 10^\circ = 70^\circ$, 2 से 3 की ओर एक-तिहाई रास्ता।`,
      t`$120^\circ - 70^\circ = 50^\circ$। यह $180^\circ$ से कम है, इसलिए छोटा angle $50^\circ$ है।`,
    ],
    "C07-Q2": [
      t`Minute hand: 12 से $6 \times 10 = 60^\circ$, यानी 2 की ओर।`,
      t`Hour hand: $30 \times 11 + \frac{10}{2} = 330^\circ + 5^\circ = 335^\circ$, 12 से $25^\circ$ पहले।`,
      t`$335^\circ - 60^\circ = 275^\circ$ reflex angle है, लंबे रास्ते वाला। छोटा angle $360^\circ - 275^\circ = 85^\circ$ है: 12 तक $25^\circ$ और फिर 2 तक $60^\circ$।`,
    ],
    "C07-Q3": [
      t`Minute hand: 12 से $6 \times 45 = 270^\circ$, यानी 9 की ओर।`,
      t`Hour hand: $30 \times 5 + \frac{45}{2} = 150^\circ + 22.5^\circ = 172.5^\circ$, 5 से 6 की ओर तीन-चौथाई रास्ता।`,
      t`$270^\circ - 172.5^\circ = 97.5^\circ$, जो $180^\circ$ से कम है, इसलिए यही छोटा angle है। $0.5^\circ = 30'$, इसलिए $97.5^\circ = 97^\circ 30'$।`,
    ],
    "C07-Q4": [
      t`Minute hand: 12 से $6 \times 45 = 270^\circ$, ठीक 9 की ओर।`,
      t`Hour hand: $30 \times 9 + \frac{45}{2} = 270^\circ + 22.5^\circ = 292.5^\circ$, 9 से 10 की ओर तीन-चौथाई रास्ता।`,
      t`$292.5^\circ - 270^\circ = 22.5^\circ$, और $0.5^\circ = 30'$, इसलिए छोटा angle $22^\circ 30'$ है।`,
    ],
    "C07-Q5": [
      t`Minute hand: 60 मिनट में $360^\circ$, इसलिए $6^\circ$ प्रति मिनट। आकृति में, 12:10 पर, वह $60^\circ$ घूम चुकी है।`,
      t`Hour hand: 60 मिनट में $30^\circ$, इसलिए $\frac{1}{2}^\circ$ प्रति मिनट, उसी दिशा में। 12:10 पर वह $5^\circ$ घूम चुकी है।`,
      t`हर मिनट minute hand $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ = 5^\circ 30'$ आगे निकलती है। 10 मिनटों में यह $55^\circ$ है, आकृति का अंतर।`,
    ],
    "C07-Q6": [
      t`Minute hand: 12 से $6 \times 10 = 60^\circ$, यानी 2 की ओर।`,
      t`Hour hand: $30 \times 10 + \frac{10}{2} = 300^\circ + 5^\circ = 305^\circ$, 10 से 11 की ओर छठा भाग।`,
      t`$305^\circ - 60^\circ = 245^\circ$। यह $180^\circ$ से ज़्यादा है, इसलिए यह reflex angle, $245^\circ$, है; छोटा angle $360^\circ - 245^\circ = 115^\circ$ है।`,
    ],
  },
};
