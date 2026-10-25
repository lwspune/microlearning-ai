import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "mr",
  status: "approved",
  source: "1cafa36337fa8b",
  hook: {
    prompt: t`3:00 वाजता घड्याळाचे काटे $90^\circ$ अंतरावर असतात. 3:30 पर्यंत minute hand अर्धी फेरी फिरला आहे, 12 पासून 6 पर्यंत. **आता काट्यांमधील angle $90^\circ$ आहे का?**`,
    reveal: t`नाही, तो $75^\circ$ आहे. त्या 30 मिनिटांत hour hand सुद्धा पुढे गेला: 3 ते 4 चे अर्धे अंतर, म्हणजे $15^\circ$. 12 पासून मोजले तर hour hand $90^\circ + 15^\circ = 105^\circ$ वर आहे आणि minute hand $180^\circ$ वर, म्हणून ते $180^\circ - 105^\circ = 75^\circ$ अंतरावर आहेत.`,
  },
  intuition: [
    t`**Clock face** (घड्याळाची तबकडी) एक circle आहे, म्हणून एकदा पूर्ण फिरणे म्हणजे एक पूर्ण फेरी, $360^\circ$.`,
    t`बारा **hour marks** (तासांच्या खुणा) तिचे समान भाग करतात: एका खुणेपासून पुढच्या खुणेपर्यंत $360^\circ \div 12 = 30^\circ$.`,
    t`दोन **hands** (काटे) centre भोवती फिरतात, दोन्ही एकाच दिशेने, **clockwise**: 12 पासून 1, 2 आणि पुढे.`,
    t`एका तासात लांब **minute hand** (मिनिट काटा) एकदा पूर्ण फिरतो, आणि लहान **hour hand** (तास काटा) फक्त एक खूण पुढे सरकतो.`,
    t`Hour hand सतत सरकतो, उड्या मारत नाही: साडेतीन वाजता तो 3 आणि 4 यांच्या बरोबर मध्ये असतो.`,
    t`**Angle between the hands** (काट्यांमधील angle) म्हणजे centre जवळ एका काट्यापासून दुसऱ्या काट्यापर्यंतचा angle.`,
  ],
  formal: [
    {
      title: t`Minute hand चा वेग`,
      points: [
        t`काट्याचा **rate** (वेग) म्हणजे तो एका मिनिटात किती फिरतो.`,
        t`Minute hand 60 मिनिटांत एक पूर्ण फेरी, $360^\circ$, घेतो, म्हणून त्याचा वेग $360^\circ \div 60 = 6^\circ$ प्रति मिनिट आहे.`,
        t`पाच मिनिटांत तो $30^\circ$ फिरतो, एका hour mark पासून पुढच्यापर्यंत.`,
        t`तासाच्या $m$ मिनिटांनंतर, तो 12 पासून $6m$ degrees clockwise फिरलेला असतो.`,
        t`25 मिनिटांनंतर, हे $6 \times 25 = 150^\circ$, म्हणजे 5 कडे.`,
      ],
    },
    {
      title: t`Hour hand चा वेग`,
      points: [
        t`Hour hand 60 मिनिटांत एक hour mark, $30^\circ$, पुढे सरकतो.`,
        t`म्हणून त्याचा वेग $30^\circ \div 60 = \frac{1}{2}^\circ$ प्रति मिनिट आहे, minute hand च्या वेगाचा बारावा भाग.`,
        t`तासाच्या $m$ मिनिटांनंतर, तो आपल्या hour mark पासून $\frac{m}{2}$ degrees पुढे असतो, पुढच्या खुणेकडे.`,
        t`1:00 ते 1:40 पर्यंत, minute hand 12 पासून फिरून 8 पर्यंत जातो.`,
        t`त्या 40 मिनिटांत hour hand 1 च्या $\frac{40}{2} = 20^\circ$ पुढे फिरतो, 2 कडे दोन-तृतीयांश अंतर.`,
      ],
    },
    {
      title: t`Minute hand ची आघाडी`,
      points: [
        t`Minute hand, hour hand वर तितकी **gain** करतो (आघाडी घेतो) जितका तो त्याच वेळेत जास्त फिरतो.`,
        t`12:00 ते 12:20 पर्यंत, minute hand $120^\circ$ फिरतो, 12 पासून 4 पर्यंत.`,
        t`त्याच 20 मिनिटांत hour hand त्याच दिशेने फक्त $10^\circ$ फिरतो.`,
        t`दोन्ही clockwise फिरतात, म्हणून जास्त वेगातून कमी वेग वजा करा: प्रत्येक मिनिटाला तो $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ$ आघाडी घेतो.`,
        t`$m$ मिनिटांत तो $\frac{11m}{2}$ degrees आघाडी घेतो.`,
        t`म्हणून 12:20 पर्यंत काट्यांमधील अंतर वाढून $20 \times 5\frac{1}{2}^\circ = 110^\circ$ झाले आहे.`,
      ],
    },
    {
      title: t`काट्यांच्या स्थिती`,
      points: [
        t`काट्याची **position** (स्थिती) म्हणजे 12 पासून clockwise मोजलेला त्याचा angle.`,
        t`$h$ तास $m$ मिनिटे अशी वेळ घ्या, जिथे 12 वाजता $h = 0$.`,
        t`Hour hand ला प्रत्येक पूर्ण तासासाठी $30^\circ$ आणि मिनिटांसाठी आणखी $\frac{m}{2}$ मिळतात: तो $30h + \frac{m}{2}$ वर असतो.`,
        t`Minute hand $6m$ वर असतो.`,
        t`8:20 ला hour hand $30 \times 8 + \frac{20}{2} = 240^\circ + 10^\circ = 250^\circ$ वर असतो.`,
        t`Minute hand $6 \times 20 = 120^\circ$ वर असतो, 4 कडे.`,
      ],
    },
    {
      title: t`स्थितींवरून angle`,
      points: [
        t`काट्यांमधील angle म्हणजे त्यांच्या स्थितींमधील फरक: $\theta = \left|30h + \frac{m}{2} - 6m\right|$.`,
        t`हे सोपे करून $\theta = \left|30h - \frac{11m}{2}\right|$ मिळते.`,
        t`तासाच्या सुरुवातीला hour hand $30h$ पुढे असतो, आणि minute hand त्याच्यावर $\frac{11m}{2}$ आघाडी घेतो.`,
        t`8:20 ला, $\theta = 250^\circ - 120^\circ = 130^\circ$.`,
      ],
    },
    {
      title: t`लहान की reflex angle`,
      points: [
        t`काटे पूर्ण फेरीचे दोन angles करतात, ज्यांची बेरीज $360^\circ$ असते.`,
        t`**Reflex angle** (विशालकोन) म्हणजे $180^\circ$ पेक्षा मोठा असलेला; दुसरा, जास्तीत जास्त $180^\circ$ चा, म्हणजे **smaller angle** (लहान angle).`,
        t`जर $\theta > 180^\circ$, तर लहान angle $360^\circ - \theta$ आहे.`,
        t`9:10 ला, $\theta = |270 - 55| = 215^\circ$, हा reflex angle आहे.`,
        t`म्हणून लहान angle $360^\circ - 215^\circ = 145^\circ$ आहे.`,
        t`प्रश्न कोणता angle विचारतो ते नीट वाचा.`,
      ],
    },
    {
      title: t`अर्ध्या degrees`,
      points: [
        t`एका degree चे 60 **minutes of angle** (कोनाची minutes) होतात, घड्याळाची मिनिटे नव्हे: $1^\circ = 60'$.`,
        t`म्हणून अर्धी degree म्हणजे $30'$, $50'$ नाही.`,
        t`अर्ध्या degrees hour hand च्या $\frac{m}{2}$ मधून येतात, जेव्हा $m$ विषम असतो.`,
        t`2:15 ला hour hand 12 पासून $60^\circ + 7.5^\circ = 67.5^\circ$ वर असतो.`,
        t`म्हणजे $67^\circ 30'$.`,
        t`Minute hand ची $5\frac{1}{2}^\circ$ प्रति मिनिट आघाडी म्हणजे $5^\circ 30'$.`,
      ],
    },
  ],
  worked: {
    prompt: t`पावणे बारा (11:45) वाजता घड्याळाच्या hour hand आणि minute hand मधील लहान angle degrees आणि minutes मध्ये काढा.`,
    steps: [
      t`Minute hand: 12 पासून $6 \times 45 = 270^\circ$, म्हणजे 9 कडे.`,
      t`Hour hand: 11 पर्यंत $30 \times 11 = 330^\circ$, आणि 45 मिनिटांसाठी आणखी $\frac{45}{2} = 22.5^\circ$: $352.5^\circ$, 12 च्या फक्त $7.5^\circ$ आधी.`,
      t`वजा करा: $352.5^\circ - 270^\circ = 82.5^\circ$. सूत्रानेही हेच मिळते: $\left|330 - \frac{11 \times 45}{2}\right|$ $= |330 - 247.5|$ $= 82.5$. हा $180^\circ$ पेक्षा कमी आहे, म्हणून हाच लहान angle आहे.`,
      t`$0.5^\circ = 30'$, म्हणून $82.5^\circ = 82^\circ 30'$ आहे.`,
    ],
    answer: t`लहान angle $82^\circ 30'$ आहे (reflex angle $277^\circ 30'$ आहे).`,
  },
  remediation: {
    "C07-M1": t`Hour hand सुद्धा सरकतो: प्रत्येक मिनिटाला $\frac{1}{2}^\circ$. $m$ मिनिटांनंतर तो आपल्या hour mark पासून $\frac{m}{2}$ degrees पुढे असतो, 12 पासून $30h + \frac{m}{2}$ degrees वर.`,
    "C07-M2": t`दोन्ही काटे clockwise फिरतात. $m$ मिनिटांनंतर hour hand आपल्या hour mark च्या $\frac{m}{2}$ degrees **पुढे** असतो, पुढच्या अंकाकडे, म्हणून minute hand प्रत्येक मिनिटाला त्याच्यावर $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ$ आघाडी घेतो.`,
    "C07-M3": t`काट्यांमधील दोन angles ची बेरीज $360^\circ$ असते. लहान angle जास्तीत जास्त $180^\circ$ असतो आणि reflex angle $180^\circ$ पेक्षा जास्त: प्रश्न विचारतो तोच द्या.`,
    "C07-M4": t`$1^\circ = 60'$, म्हणून $\frac{1}{2}^\circ = 30'$: $22.5^\circ = 22^\circ 30'$, $22^\circ 50'$ नाही.`,
  },
  solutions: {
    "C07-Q1": [
      t`Minute hand: 12 पासून $6 \times 20 = 120^\circ$, म्हणजे 4 कडे.`,
      t`Hour hand: $30 \times 2 + \frac{20}{2} = 60^\circ + 10^\circ = 70^\circ$, 2 पासून 3 कडे एक-तृतीयांश अंतर.`,
      t`$120^\circ - 70^\circ = 50^\circ$. हा $180^\circ$ पेक्षा कमी आहे, म्हणून लहान angle $50^\circ$ आहे.`,
    ],
    "C07-Q2": [
      t`Minute hand: 12 पासून $6 \times 10 = 60^\circ$, म्हणजे 2 कडे.`,
      t`Hour hand: $30 \times 11 + \frac{10}{2} = 330^\circ + 5^\circ = 335^\circ$, 12 च्या $25^\circ$ आधी.`,
      t`$335^\circ - 60^\circ = 275^\circ$ हा reflex angle आहे, लांबच्या बाजूने. लहान angle $360^\circ - 275^\circ = 85^\circ$ आहे: 12 पर्यंत $25^\circ$ आणि मग 2 पर्यंत $60^\circ$.`,
    ],
    "C07-Q3": [
      t`Minute hand: 12 पासून $6 \times 45 = 270^\circ$, म्हणजे 9 कडे.`,
      t`Hour hand: $30 \times 5 + \frac{45}{2} = 150^\circ + 22.5^\circ = 172.5^\circ$, 5 पासून 6 कडे तीन-चतुर्थांश अंतर.`,
      t`$270^\circ - 172.5^\circ = 97.5^\circ$, जो $180^\circ$ पेक्षा कमी आहे, म्हणून हाच लहान angle आहे. $0.5^\circ = 30'$, म्हणून $97.5^\circ = 97^\circ 30'$.`,
    ],
    "C07-Q4": [
      t`Minute hand: 12 पासून $6 \times 45 = 270^\circ$, बरोबर 9 कडे.`,
      t`Hour hand: $30 \times 9 + \frac{45}{2} = 270^\circ + 22.5^\circ = 292.5^\circ$, 9 पासून 10 कडे तीन-चतुर्थांश अंतर.`,
      t`$292.5^\circ - 270^\circ = 22.5^\circ$, आणि $0.5^\circ = 30'$, म्हणून लहान angle $22^\circ 30'$ आहे.`,
    ],
    "C07-Q5": [
      t`Minute hand: 60 मिनिटांत $360^\circ$, म्हणून $6^\circ$ प्रति मिनिट. आकृतीत, 12:10 ला, तो $60^\circ$ फिरला आहे.`,
      t`Hour hand: 60 मिनिटांत $30^\circ$, म्हणून $\frac{1}{2}^\circ$ प्रति मिनिट, त्याच दिशेने. 12:10 ला तो $5^\circ$ फिरला आहे.`,
      t`प्रत्येक मिनिटाला minute hand $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ = 5^\circ 30'$ आघाडी घेतो. 10 मिनिटांत हे $55^\circ$, आकृतीतील अंतर.`,
    ],
    "C07-Q6": [
      t`Minute hand: 12 पासून $6 \times 10 = 60^\circ$, म्हणजे 2 कडे.`,
      t`Hour hand: $30 \times 10 + \frac{10}{2} = 300^\circ + 5^\circ = 305^\circ$, 10 पासून 11 कडे सहावा भाग.`,
      t`$305^\circ - 60^\circ = 245^\circ$. हा $180^\circ$ पेक्षा जास्त आहे, म्हणून हा reflex angle, $245^\circ$, आहे; लहान angle $360^\circ - 245^\circ = 115^\circ$ आहे.`,
    ],
  },
};
