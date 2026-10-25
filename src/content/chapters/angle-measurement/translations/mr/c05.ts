import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "mr",
  status: "approved",
  source: "01210d1ef61ad5",
  hook: {
    prompt: t`$30$ cm लांब windscreen wiper चे टोक $120^\circ$ फिरते. एक मित्र म्हणतो की टोक $30 \times 120 = 3600$ cm जाते, म्हणजे $36$ मीटर. **चूक कुठे झाली?**`,
    reveal: t`$s = r\theta$ फक्त तेव्हाच चालते जेव्हा $\theta$ **radians** मध्ये असतो. $120^\circ = \frac{2\pi}{3}$, म्हणून $s = 30 \times \frac{2\pi}{3} = 20\pi \approx 62.8$ cm. हे पटते: हा संपूर्ण circle चा एक तृतीयांश आहे, ज्याचा circumference $60\pi \approx 188$ cm आहे.`,
  },
  intuition: [
    t`**Circle** (वर्तुळ) म्हणजे एका स्थिर बिंदूपासून, त्याच्या **centre** (केंद्र) $O$ पासून, एकाच अंतरावर, म्हणजे **radius** $r$ वर, असलेले सर्व बिंदू.`,
    t`Radius $O$ भोवती फिरवा, म्हणजे तिचे टोक एक **arc** काढते, जो circle चा एक तुकडा आहे.`,
    t`Arc हा radius जितकी फिरली त्या angle ला **subtend** करतो (आंतरतो): म्हणजे centre जवळचा angle.`,
    t`एक **radian** म्हणजे असा angle ज्याचा arc बरोबर एक radius लांब आहे.`,
    t`$2.5$ radians पर्यंत फिरवत राहा: टोक आणखी एका radius-लांबीचा arc काढते, मग त्याच्या अर्ध्याचा.`,
    t`म्हणून $\theta$ radians, $\theta$ radius-लांबींचा arc कापतात.`,
  ],
  formal: [
    {
      title: t`Arc ची लांबी`,
      points: [
        t`$r$ radius चे एक circle घ्या, ज्याचे centre $O$ आहे.`,
        t`Radius $O$ भोवती angle $\theta^c$, म्हणजे $\theta$ radians, फिरवा.`,
        t`तिचे टोक एक arc काढते; **length of the arc** (arc ची लांबी), $s$, म्हणजे circle वरून एका टोकापासून दुसऱ्या टोकापर्यंतचे अंतर.`,
        t`म्हणून $s = r\theta$, जिथे $\theta$ radians मध्ये आहे.`,
        t`Arc हा radius च्याच एककात येतो: cm मधील radius वरून cm मधील arc.`,
        t`Radius दुप्पट करा, किंवा angle दुप्पट करा, की arc दुप्पट होतो.`,
      ],
    },
    {
      title: t`Degrees मधील angle: आधी रूपांतर`,
      points: [
        t`**Degrees** मधील angle $s = r\theta$ मध्ये वापरण्यापूर्वी radians मध्ये बदलला पाहिजे.`,
        t`$\theta^c = \theta^\circ \times \frac{\pi}{180}$ ने रूपांतर करा.`,
        t`हे **circumference** (परीघ) $2\pi r$ चा, म्हणजे circle च्या संपूर्ण वेढ्याचा, $\frac{\theta^\circ}{360}$ भाग घेण्यासारखेच आहे.`,
        t`पाव फेरी म्हणजे $90^\circ = \frac{\pi}{2}$.`,
        t`म्हणून तिचा arc $s = \frac{\pi r}{2}$ आहे, म्हणजे $2\pi r$ चा एक चतुर्थांश.`,
        t`थेट $90$ ठेवले असते तर $90r$ मिळाले असते, जे संपूर्ण circle पेक्षाही खूप लांब आहे.`,
      ],
    },
    {
      title: t`Radius किंवा angle शोधणे`,
      points: [
        t`$s = r\theta$ ची मांडणी बदलून radius, $r = \frac{s}{\theta}$, आणि angle, $\theta = \frac{s}{r}$, मिळतात.`,
        t`Angle radians मध्ये येतो; degrees साठी $\frac{180}{\pi}$ ने गुणा.`,
        t`$4$ cm radius चे एक circle घ्या.`,
        t`Radius च्या टोकापासून सुरू करून $6$ cm लांबीचा एक arc खुणावा.`,
        t`हा arc centre जवळ $\theta = \frac{6}{4} = 1.5$ radians subtend करतो.`,
        t`Degrees मध्ये, तो $1.5 \times \frac{180}{\pi} = \left(\frac{270}{\pi}\right)^\circ$ आहे, सुमारे $86^\circ$.`,
      ],
    },
    {
      title: t`दोन circles मध्ये समान arcs`,
      points: [
        t`दोन circles घ्या, ज्यांच्या radii $r_1$ आणि $r_2$ आहेत.`,
        t`प्रत्येकात radius फिरते: पहिल्यात $\theta_1$, दुसऱ्यात $\theta_2$.`,
        t`टोके **same length** (समान लांबीचे) $s$ arcs काढतात, म्हणून $s = r_1\theta_1 = r_2\theta_2$.`,
        t`म्हणून $r_1 : r_2 = \theta_2 : \theta_1$.`,
        t`Angles च्या जागा अदलाबदल होतात: लहान angle साठी मोठे circle लागते.`,
        t`आधी दोन्ही angles एकाच एककात आणा.`,
      ],
    },
    {
      title: t`समान arcs: एक उदाहरण`,
      points: [
        t`$3$ cm आणि $2$ cm radii ची circles घ्या.`,
        t`पहिल्यात radius $\frac{\pi}{6}$ फिरते; दुसऱ्यात $\frac{\pi}{4}$.`,
        t`दोन्ही टोके $\frac{\pi}{2}$ cm लांबीचे arcs काढतात: $3 \times \frac{\pi}{6} = 2 \times \frac{\pi}{4} = \frac{\pi}{2}$.`,
        t`म्हणून $3 : 2 = \frac{\pi}{4} : \frac{\pi}{6}$: लहान angle मोठ्या circle सोबत जातो.`,
      ],
    },
    {
      title: t`गोष्टीतले circle शोधा`,
      points: [
        t`शाब्दिक प्रश्नात, **centre** म्हणजे स्थिर राहणारा बिंदू.`,
        t`**Radius** म्हणजे त्याभोवती झुलणारी गोष्ट: pendulum ची लांबी म्हणजे radius.`,
        t`**Arc** म्हणजे radius चे दूरचे टोक काढते तो मार्ग: pendulum च्या bob चा मार्ग.`,
        t`खुंटीला बांधलेली ताणलेली दोरी म्हणजे radius, आणि चाललेला मार्ग म्हणजे arc.`,
        t`Diameter दिला असेल तर त्याचा अर्धा करा: $r$ नेहमी radius च असते.`,
      ],
    },
    {
      title: t`Chord म्हणजे arc नाही`,
      points: [
        t`**Chord** (जीवा) म्हणजे circle वरचे दोन बिंदू जोडणारा सरळ रेषाखंड.`,
        t`त्याच दोन बिंदूंमधील arc बाहेरच्या बाजूला वाकलेला असतो, म्हणून तो chord पेक्षा लांब असतो.`,
        t`Radius एवढी लांब chord $AB$ घ्या: $OA = AB = r$.`,
        t`$O$ ला $B$ शी जोडा: त्रिकोण $OAB$ समभुज आहे, म्हणून $\angle AOB = 60^\circ = \frac{\pi}{3}$.`,
        t`त्याचा arc $r \times \frac{\pi}{3} \approx 1.05r$ आहे, chord पेक्षा थोडा लांब.`,
        t`म्हणून ही chord $1$ radian कापत नाही: एक radian तिथे असतो जिथे **arc**, chord नव्हे, radius एवढा असतो.`,
      ],
    },
  ],
  worked: {
    prompt: t`$21$ cm लांबीचा एक pendulum $36^\circ$ च्या angle मध्ये आंदोलन करतो. त्याच्या मार्गाची लांबी काढा.`,
    steps: [
      t`Bob एका circle च्या arc वरून जातो, ज्याची radius म्हणजे pendulum ची लांबी: $r = 21$ cm.`,
      t`Angle चे रूपांतर करा: $\theta = 36 \times \frac{\pi}{180}$ $= \frac{\pi}{5}$ radians.`,
      t`$s = r\theta = 21 \times \frac{\pi}{5}$ $= \frac{21\pi}{5}$ cm. $\pi \approx \frac{22}{7}$ घेऊन, ते $\frac{21}{5} \times \frac{22}{7} = 13.2$ cm आहे.`,
    ],
    answer: t`मार्ग $\frac{21\pi}{5} \approx 13.2$ cm लांब आहे.`,
  },
  remediation: {
    "C05-M1": t`$s = r\theta$ मध्ये $\theta$ radians मध्ये हवा. आधी $\theta^c = \theta^\circ \times \frac{\pi}{180}$ ने रूपांतर करा; आणि $\frac{s}{r}$ radians मध्ये येतो, म्हणून degrees साठी $\frac{180}{\pi}$ ने गुणा.`,
    "C05-M2": t`Degrees पासून radians: $\frac{\pi}{180}$ ने गुणा, म्हणजे $180^\circ$ चे $\pi$ होते. Radians पासून degrees: $\frac{180}{\pi}$ ने गुणा, म्हणजे $\pi$ चे $180^\circ$ होतात.`,
    "C05-M3": t`Arc म्हणजे $s = r\theta$, cm मधील लांबी. $\frac{1}{2}r^2\theta$ हे sector चे क्षेत्रफळ आहे, sq. cm मध्ये, जे पुढे येते.`,
    "C05-M4": t`समान arcs वरून $r_1\theta_1 = r_2\theta_2$ मिळते, म्हणून $r_1 : r_2 = \theta_2 : \theta_1$. लहान angle असलेले circle मोठे असते.`,
    "C05-M5": t`एक radian तिथे असतो जिथे **arc** radius एवढा असतो. Radius एवढी **chord** centre सोबत समभुज त्रिकोण करते, म्हणून ती $60^\circ = \frac{\pi}{3}$ subtend करते, आणि arc chord पेक्षा लांब असतो.`,
    "C05-M6": t`$s = r\theta$ मधील $r$ म्हणजे radius. Diameter दिला असेल तर आधी त्याचा अर्धा करा.`,
  },
  solutions: {
    "C05-Q1": [
      t`Radius म्हणजे diameter चा अर्धा: $r = 7$ cm.`,
      t`Angle चे रूपांतर करा: $\theta = 54 \times \frac{\pi}{180} = \frac{3\pi}{10}$ radians.`,
      t`$s = r\theta = 7 \times \frac{3\pi}{10} = \frac{21\pi}{10}$ cm, सुमारे $6.6$ cm.`,
    ],
    "C05-Q2": [
      t`Bob एका arc वरून जातो ज्याची radius म्हणजे pendulum ची लांबी: $r = 14$ cm.`,
      t`Angle चे रूपांतर करा: $\theta = 12 \times \frac{\pi}{180} = \frac{\pi}{15}$ radians.`,
      t`म्हणून $s = r\theta = 14 \times \frac{\pi}{15} = \frac{14\pi}{15}$ cm.`,
    ],
    "C05-Q3": [
      t`दोरी म्हणजे radius आणि चाललेले $88$ m म्हणजे arc. Angle चे रूपांतर करा: $\theta = 72 \times \frac{\pi}{180} = \frac{2\pi}{5}$ radians.`,
      t`$s = r\theta$ वरून $r = \frac{s}{\theta} = 88 \times \frac{5}{2\pi} = \frac{220}{\pi}$ m मिळते.`,
      t`$\pi \approx \frac{22}{7}$ घेऊन: $r = 220 \times \frac{7}{22} = 70$ m.`,
    ],
    "C05-Q4": [
      t`तार म्हणजे arc, म्हणून $s = 10$ आणि $r = 4$: $\theta = \frac{s}{r} = \frac{10}{4} = \frac{5}{2}$ radians.`,
      t`Degrees मध्ये: $\frac{5}{2} \times \frac{180}{\pi} = \left(\frac{450}{\pi}\right)^\circ$, सुमारे $143^\circ$.`,
    ],
    "C05-Q5": [
      t`दोन्ही angles radians मध्ये: $60^\circ = \frac{\pi}{3}$, आणि दुसरा आधीच $\frac{5\pi}{12}$ आहे.`,
      t`Arcs समान आहेत: $r_1 \times \frac{\pi}{3} = r_2 \times \frac{5\pi}{12}$.`,
      t`म्हणून $\frac{r_1}{r_2} = \frac{5\pi}{12} \div \frac{\pi}{3} = \frac{5}{4}$: $r_1 : r_2 = 5 : 4$. लहान angle असलेले circle मोठे आहे.`,
    ],
    "C05-Q6": [
      t`Chord ची टोके $A$, $B$ centre $O$ शी जोडा: $OA = OB = AB = 9$ cm, म्हणून त्रिकोण $OAB$ समभुज आहे.`,
      t`म्हणून $\angle AOB = 60^\circ = \frac{\pi}{3}$ radians.`,
      t`$s = r\theta = 9 \times \frac{\pi}{3} = 3\pi$ cm, सुमारे $9.42$ cm: $9$ cm च्या chord पेक्षा थोडा लांब.`,
    ],
  },
};
