import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c06: ConceptTranslation = {
  id: "C06",
  lang: "mr",
  status: "approved",
  source: "1579ef95ca2184",
  hook: {
    prompt: t`दोन pizza slices एकाच angle ने कापले आहेत, पण एका pizza ची **radius दुसऱ्याच्या दुप्पट** आहे. मोठ्या slice मध्ये किती पट pizza आहे?`,
    reveal: t`चार पट, दोन नाही. Slice चे क्षेत्रफळ $\frac{1}{2}r^2\theta$ आहे: angle $\theta$ तोच आहे, आणि $r$ दुप्पट केल्याने $r^2$ चार पट होतो. Crust, म्हणजे arc $s = r\theta$, फक्त दुप्पट होतो.`,
  },
  intuition: [
    t`**Disc** (चकती) म्हणजे circle च्या आतला सपाट भाग.`,
    t`**Radius** म्हणजे centre पासून circle पर्यंत जाणारी रेषा.`,
    t`Radius centre भोवती एका angle $\theta$ ने फिरवा: centre जवळ होणारा angle म्हणजे **central angle** (केंद्रीय कोन).`,
    t`दोन radii मधला जो तुकडा ती व्यापते, तो **sector** (वर्तुळपाकळी) आहे, pizza च्या slice सारखा.`,
    t`Sector ची वाकलेली कड म्हणजे एक **arc**, radii च्या टोकांमधील circle चा तुकडा: slice चा crust.`,
    t`पूर्ण फेरी, $2\pi$ radians, संपूर्ण disc व्यापते, आणि अर्धी फेरी अर्धी: मोठा angle, मोठा slice.`,
  ],
  formal: [
    {
      title: t`Sector चे क्षेत्रफळ`,
      points: [
        t`**Area of a sector** (sector चे क्षेत्रफळ) म्हणजे disc मधील त्याचा वाटा, जिचे संपूर्ण क्षेत्रफळ $\pi r^2$ आहे.`,
        t`एक radius 1 radian फिरवा, म्हणजे पूर्ण फेरीचा $\frac{1}{2\pi}$ भाग.`,
        t`ती disc चा तेवढाच भाग व्यापते: $\frac{1}{2\pi} \times \pi r^2 = \frac{1}{2}r^2$.`,
        t`आणखी 1 radian फिरवा, म्हणजे ती आणखी एक $\frac{1}{2}r^2$ व्यापते.`,
        t`म्हणून $\theta$ radians मध्ये $\theta$ पट असते: $A = \frac{1}{2}r^2\theta$.`,
        t`$\theta$ radians मध्ये असेल, तर हा disc चा $\frac{\theta}{2\pi}$ वाटा आहे: $\frac{\theta}{2\pi} \times \pi r^2 = \frac{1}{2}r^2\theta$.`,
      ],
    },
    {
      title: t`Arc वरून क्षेत्रफळ`,
      points: [
        t`क्षेत्रफळ arc वरूनही, म्हणजे sector च्या वाकलेल्या कडेवरून, काढता येते.`,
        t`**Arc length** (arc ची लांबी) $s$ म्हणजे arc ची लांबी: $s = r\theta$.`,
        t`कारण $A = \frac{1}{2}r^2\theta$, यावरून $A = \frac{1}{2}r \times r\theta = \frac{1}{2}rs$ मिळते.`,
        t`हे अशा त्रिकोणाचे क्षेत्रफळ आहे ज्याचा पाया $s$ आणि उंची $r$ आहे.`,
        t`Sector चे पातळ slices करा: प्रत्येक जवळजवळ $r$ उंचीचा त्रिकोण आहे, आणि त्यांचे पाये arc बाजूने एकापुढे एक जुळतात.`,
      ],
    },
    {
      title: t`आधी radius आणि radians`,
      points: [
        t`सूत्रांना **radius** $r$ आणि **radians** मधील angle हवा.`,
        t`क्षेत्रफळाने दिलेले circle आधी $r$ देते: $\pi r^2 = 49\pi$ म्हणजे $r^2 = 49$, म्हणून $r = 7$.`,
        t`$d^\circ$ चा angle आधी बदला: $\theta = d \times \frac{\pi}{180}$, म्हणून $60^\circ = \frac{\pi}{3}$.`,
        t`मग $A = \frac{1}{2} \times 49 \times \frac{\pi}{3}$ $= \frac{49\pi}{6}$.`,
        t`$\theta$ च्या जागी $60$ ठेवल्यास क्षेत्रफळ $\frac{180}{\pi} \approx 57$ पट मोठे येते.`,
      ],
    },
    {
      title: t`Sector ची perimeter`,
      points: [
        t`Sector ची **perimeter** (परिमिती) म्हणजे त्याच्या संपूर्ण सीमेची लांबी, सगळीकडून.`,
        t`एका radius वरून बाहेर जा, जिची लांबी $r$ आहे.`,
        t`मग arc वरून जा, ज्याची लांबी $s = r\theta$ आहे.`,
        t`मग दुसऱ्या radius वरून परत या, जिची लांबी $r$ आहे.`,
        t`म्हणून perimeter $r + r + s = 2r + r\theta$ आहे.`,
        t`दोन्ही radii मोजल्या जातात, फक्त arc नाही.`,
      ],
    },
    {
      title: t`Segment चे क्षेत्रफळ`,
      points: [
        t`Sector $OAB$ चे क्षेत्रफळ $\frac{1}{2}r^2\theta$ आहे.`,
        t`**Chord** $AB$ म्हणजे arc ची दोन टोके जोडणारी सरळ रेषा.`,
        t`ती त्रिकोण $OAB$ वेगळा करते, ज्याच्या दोन बाजू $r$ आहेत आणि त्यांच्यामधील angle $\theta$ आहे, ज्याचे क्षेत्रफळ $\frac{1}{2}r^2\sin\theta$ आहे.`,
        t`**Segment** (वर्तुळखंड) म्हणजे arc आणि त्याची chord यांच्यामधील disc चा तुकडा.`,
        t`तो म्हणजे sector वजा त्रिकोण: $\frac{1}{2}r^2\theta - \frac{1}{2}r^2\sin\theta$.`,
        t`$r = 12$ cm आणि $\theta = 30^\circ = \frac{\pi}{6}$ साठी, तो $12\pi - 36 = 12(\pi - 3)$ sq. cm आहे.`,
      ],
    },
  ],
  worked: {
    prompt: t`एका circle चे क्षेत्रफळ $225\pi$ sq. cm आहे. Centre जवळ $120^\circ$ subtend करणाऱ्या arc ची लांबी, आणि संबंधित sector चे क्षेत्रफळ काढा.`,
    steps: [
      t`$\pi r^2 = 225\pi$, म्हणून $r^2 = 225$ आणि $r = 15$ cm.`,
      t`Radians मध्ये: $\theta = 120 \times \frac{\pi}{180} = \frac{2\pi}{3}$.`,
      t`आता arc: $s = r\theta = 15 \times \frac{2\pi}{3}$ $= 10\pi$ cm.`,
      t`आता sector: $A = \frac{1}{2}rs = \frac{1}{2} \times 15 \times 10\pi$ $= 75\pi$ sq. cm. तपासा: $\frac{1}{2}r^2\theta = \frac{1}{2} \times 225 \times \frac{2\pi}{3}$ $= 75\pi$.`,
    ],
    answer: t`Arc $10\pi$ cm आहे आणि sector चे क्षेत्रफळ $75\pi$ sq. cm आहे.`,
  },
  remediation: {
    "C06-M1": t`$A = \frac{1}{2}r^2\theta$ आणि $s = r\theta$ फक्त तेव्हाच बरोबर येतात जेव्हा $\theta$ radians मध्ये असतो. आधी रूपांतर करा: degrees ना $\frac{\pi}{180}$ ने गुणा.`,
    "C06-M2": t`Sector हा अशा त्रिकोणासारखा आहे ज्याचा पाया arc $s$ आणि उंची $r$ आहे, म्हणून $A = \frac{1}{2}rs = \frac{1}{2}r^2\theta$. $\frac{1}{2}$ राहतो.`,
    "C06-M3": t`$s = r\theta$ ही arc ची लांबी आहे, cm मध्ये. Sector चे क्षेत्रफळ $\frac{1}{2}r^2\theta = \frac{1}{2}rs$ आहे, sq. cm मध्ये.`,
    "C06-M4": t`Sector मध्ये chord वरचा त्रिकोणही येतो. Arc आणि chord मधील क्षेत्रफळ म्हणजे sector वजा तो त्रिकोण, ज्याचे क्षेत्रफळ $\frac{1}{2}r^2\sin\theta$ आहे.`,
    "C06-M5": t`Sector ची सीमा म्हणजे arc आणि दोन radii, म्हणून त्याची perimeter $2r + s$ आहे. Arc मिळवण्यासाठी $2r$ वजा करा.`,
    "C06-M6": t`Sector ला दोन सरळ कडा आहेत, दोन्ही radii: perimeter $= r + r + s = 2r + s$.`,
  },
  solutions: {
    "C06-Q1": [
      t`$\pi r^2 = 25\pi$, म्हणून $r = 5$ cm.`,
      t`Radians मध्ये: $\theta = 144 \times \frac{\pi}{180} = \frac{4\pi}{5}$.`,
      t`म्हणून $A = \frac{1}{2}r^2\theta = \frac{1}{2} \times 25 \times \frac{4\pi}{5} = 10\pi$ sq. cm.`,
    ],
    "C06-Q2": [
      t`$\pi r^2 = 9\pi$, म्हणून $r = 3$ cm, आणि $\theta = 60^\circ = \frac{\pi}{3}$.`,
      t`आता arc: $s = r\theta = 3 \times \frac{\pi}{3} = \pi$ cm.`,
      t`सीमेत दोन radii आणि arc आहेत: perimeter $= 3 + 3 + \pi = 6 + \pi$ cm.`,
    ],
    "C06-Q3": [
      t`$\pi r^2 = 64\pi$, म्हणून $r = 8$ cm.`,
      t`Perimeter $= 2r + s$: $16 + s = 56$, म्हणून arc $s = 40$ cm आहे.`,
      t`म्हणून $A = \frac{1}{2}rs = \frac{1}{2} \times 8 \times 40 = 160$ sq. cm.`,
    ],
    "C06-Q4": [
      t`$\theta = 30^\circ = \frac{\pi}{6}$. Sector OPQ चे क्षेत्रफळ: $\frac{1}{2}r^2\theta = \frac{1}{2} \times 225 \times \frac{\pi}{6} = \frac{75\pi}{4}$.`,
      t`त्रिकोण OPQ: $\frac{1}{2}r^2\sin\theta = \frac{1}{2} \times 225 \times \frac{1}{2} = \frac{225}{4}$.`,
      t`Arc आणि chord मधील क्षेत्रफळ $=$ sector $-$ त्रिकोण $= \frac{75\pi}{4} - \frac{225}{4} = \frac{75}{4}(\pi - 3)$ sq. cm.`,
    ],
    "C06-Q5": [
      t`$\pi r^2 = 81\pi$, म्हणून $r = 9$ cm.`,
      t`Radians मध्ये: $\theta = 300 \times \frac{\pi}{180} = \frac{5\pi}{3}$.`,
      t`म्हणून $A = \frac{1}{2}r^2\theta = \frac{1}{2} \times 81 \times \frac{5\pi}{3} = \frac{135\pi}{2}$ sq. cm.`,
    ],
    "C06-Q6": [
      t`तार दोन्ही radii आणि arc वरून जाते: $2r + s = 20$.`,
      t`$10 + s = 20$, म्हणून arc $s = 10$ m आहे.`,
      t`म्हणून $A = \frac{1}{2}rs = \frac{1}{2} \times 5 \times 10 = 25$ sq. m.`,
    ],
  },
};
