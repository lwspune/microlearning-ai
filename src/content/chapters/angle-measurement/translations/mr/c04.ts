import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c04: ConceptTranslation = {
  id: "C04",
  lang: "mr",
  status: "approved",
  source: "0e535548ed878c",
  hook: {
    prompt: t`एका त्रिकोणाचे दोन angles $\left(\frac{\pi}{4}\right)^c$ आणि $60^\circ$ आहेत. **त्याचा तिसरा angle किती?** तुम्ही $\frac{\pi}{4}$ आणि $60$ थेट मिळवू शकत नाही.`,
    reveal: t`आधी दोन्ही एकाच एककात आणा: $\left(\frac{\pi}{4}\right)^c = 45^\circ$. Angles ची बेरीज $180^\circ$ असते, म्हणून तिसरा $180^\circ - 45^\circ - 60^\circ = 75^\circ$ आहे, म्हणजे $\left(\frac{5\pi}{12}\right)^c$.`,
  },
  intuition: [
    t`**Polygon** (बहुभुजाकृती) म्हणजे सरळ **sides** (बाजूंनी) बनलेली बंद आकृती: **triangle** (त्रिकोण) ला तीन असतात, **quadrilateral** (चौकोन) ला चार.`,
    t`एखाद्या **corner** (कोपऱ्या) वर, तिथे मिळणाऱ्या दोन sides मधील आतला angle म्हणजे **interior angle** (आंतरकोन).`,
    t`सर्व interior angles ची बेरीज म्हणजे polygon ची **angle sum** (कोनांची बेरीज).`,
    t`त्रिकोणाचे तिन्ही angles शेजारी शेजारी ठेवा: ते एक सरळ रेषा भरतात, म्हणजे **straight angle** (सरळ कोन), $180^\circ$ किंवा $\pi^c$.`,
    t`म्हणून angles $A$, $B$, $C$ असलेल्या त्रिकोणात $A + B + C = \pi^c = 180^\circ$.`,
    t`भूमिती कोणत्याही एककात तीच राहते; फक्त संख्या बदलतात.`,
  ],
  formal: [
    {
      title: t`Polygon चे त्रिकोणांत विभाजन`,
      points: [
        t`**Diagonal** (कर्ण) म्हणजे एकमेकांच्या शेजारी नसलेले दोन corners जोडणारा रेषाखंड.`,
        t`$n$ sides असलेल्या polygon च्या, म्हणजे **$n$-gon** च्या, एका corner पासून सर्व diagonals काढा.`,
        t`Diagonals त्याचे $n - 2$ त्रिकोणांत विभाजन करतात.`,
        t`त्यांचे angles मिळून polygon चे interior angles होतात, म्हणून angle sum $(n - 2)\pi$ आहे.`,
        t`Quadrilateral ($n = 4$) चे $2$ त्रिकोण होतात, म्हणून त्याच्या angles ची बेरीज $2\pi^c = 360^\circ$ आहे.`,
        t`षट्कोन (hexagon) ($n = 6$) चे $4$ होतात, म्हणून त्याच्या angles ची बेरीज $4\pi^c = 720^\circ$ आहे.`,
      ],
    },
    {
      title: t`आधी एकच एकक`,
      points: [
        t`**Mixed units** (मिश्र एककांतील) angles, काही radians मध्ये आणि काही degrees मध्ये, आहेत तसे मिळवता येत नाहीत.`,
        t`बेरीज किंवा वजाबाकी करण्यापूर्वी प्रत्येक angle एकाच एककात बदला.`,
        t`Radians चे degrees मध्ये रूपांतर $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$ ने होते.`,
        t`म्हणून $\left(\frac{\pi}{5}\right)^c$ म्हणजे $36^\circ$, $\frac{\pi}{5}$ degrees नाही.`,
      ],
    },
    {
      title: t`माहीत असलेले angles वजा करा`,
      points: [
        t`**Known angles** (माहीत असलेले angles) म्हणजे प्रश्नात दिलेले, किंवा आकृतीने ठरलेले, जसे काटकोन.`,
        t`आधी angle sum मधून माहीत असलेले angles वजा करा.`,
        t`मग फक्त उरलेला भाग अज्ञात angles मध्ये वाटा.`,
        t`**Right-angled triangle** (काटकोन त्रिकोण) मध्ये एक काटकोन, $\frac{\pi}{2}$, असतो.`,
        t`त्याचे उरलेले दोन angles **acute** (लघुकोन) असतात: प्रत्येक काटकोनापेक्षा लहान.`,
        t`दोन acute angles $\pi - \frac{\pi}{2} = \frac{\pi}{2}$ आपसात वाटून घेतात, $\pi$ नाही.`,
      ],
    },
    {
      title: t`गुणोत्तर किंवा A.P. मध्ये वाटणी`,
      points: [
        t`**Ratio** (गुणोत्तर) $a : b : c$ मधील angles म्हणजे एकाच संख्येच्या $k$ च्या $a$, $b$ आणि $c$ पट: $ak$, $bk$, $ck$.`,
        t`Angles ची बेरीज $k$ ठरवते.`,
        t`त्रिकोणात $3 : 4 : 5$ साठी, $12k = \pi$, म्हणून $k = \frac{\pi}{12}$.`,
        t`**Arithmetic progression (A.P.)** (अंकगणिती श्रेढी) मधील तीन angles एकाच पायरीने वाढतात, म्हणजे **common difference** (सामाईक फरक) $d$ ने.`,
        t`म्हणून ते $a - d$, $a$, $a + d$ आहेत, आणि त्यांची बेरीज $3a$ आहे.`,
        t`त्रिकोणात $3a = \pi$, म्हणून मधला angle $a = \frac{\pi}{3}$ आहे, $d$ काहीही असो.`,
      ],
    },
    {
      title: t`Regular polygon (सुसम बहुभुजाकृती)`,
      points: [
        t`**Regular polygon** च्या सर्व sides समान असतात आणि सर्व interior angles समान असतात.`,
        t`त्याचे $n$ समान angles angle sum $(n - 2)\pi$ आपसात वाटून घेतात.`,
        t`म्हणून प्रत्येक interior angle $\frac{(n-2)\pi}{n}$ आहे.`,
        t`Regular hexagon (षट्कोन) च्या angles ची बेरीज $4\pi$ आहे, म्हणून प्रत्येक $\frac{4\pi}{6} = \frac{2\pi}{3}$, म्हणजे $120^\circ$ आहे.`,
        t`$n = 10$ साठी, प्रत्येक $\frac{8\pi}{10} = \frac{4\pi}{5}$ आहे.`,
      ],
    },
    {
      title: t`Exterior angles (बाह्यकोन)`,
      points: [
        t`Polygon ची एक side एखाद्या corner च्या पुढे वाढवा.`,
        t`त्या वाढवलेल्या रेषेमधील आणि पुढच्या side मधील angle म्हणजे त्या corner वरचा **exterior angle**.`,
        t`तो तिथल्या interior angle सोबत एका सरळ रेषेत असतो, म्हणून दोघांची बेरीज $\pi$ आहे.`,
      ],
    },
    {
      title: t`Exterior angles मिळून एक फेरी`,
      points: [
        t`Polygon भोवती चाला: प्रत्येक corner वर तुम्ही त्याच्या exterior angle एवढे वळता.`,
        t`तुम्ही ज्या दिशेने निघालात त्याच दिशेकडे तोंड करून परत येता, म्हणून $n$ exterior angles मिळून एक पूर्ण फेरी, $2\pi$, होते.`,
        t`Regular polygon मध्ये ते समान असतात, म्हणून प्रत्येक $\frac{2\pi}{n}$ आहे.`,
        t`हे प्रत्येक corner वरच्या सरळ रेषेशी जुळते: $\frac{2\pi}{n} = \pi - \frac{(n-2)\pi}{n}$.`,
        t`षट्कोनासाठी तो $\frac{\pi}{3}$ आहे; $n = 10$ साठी, $\frac{\pi}{5}$.`,
      ],
    },
    {
      title: t`Sides ची संख्या`,
      points: [
        t`Regular polygon च्या interior angle वरून त्याला किती sides $n$ आहेत ते काढता येते.`,
        t`Exterior angle मार्गे जा: interior angle $\pi$ मधून वजा करा.`,
        t`मग $n$ मिळवण्यासाठी पूर्ण फेरी $2\pi$ ला त्या exterior angle ने भागा.`,
        t`Interior $\frac{5\pi}{6}$ वरून exterior $\pi - \frac{5\pi}{6} = \frac{\pi}{6}$ मिळतो.`,
        t`म्हणून $n = \frac{2\pi}{\pi/6} = 12$.`,
      ],
    },
  ],
  worked: {
    prompt: t`एका त्रिकोणाचे angles A.P. मध्ये आहेत आणि सर्वात मोठा angle सर्वात लहानाच्या $3$ पट आहे. Angles radians मध्ये काढा.`,
    steps: [
      t`Angles $a - d$, $a$, $a + d$ असे लिहा. त्यांची बेरीज $\pi$ आहे: $3a = \pi$, म्हणून $a = \frac{\pi}{3}$.`,
      t`सर्वात मोठा हा सर्वात लहानाच्या $3$ पट आहे: $a + d = 3(a - d)$, म्हणून $4d = 2a$ आणि $d = \frac{a}{2} = \frac{\pi}{6}$.`,
      t`Angles आहेत $\frac{\pi}{3} - \frac{\pi}{6} = \frac{\pi}{6}$, $\frac{\pi}{3}$ आणि $\frac{\pi}{3} + \frac{\pi}{6} = \frac{\pi}{2}$.`,
      t`तपासा: $\frac{\pi}{6} + \frac{\pi}{3} + \frac{\pi}{2} = \pi$, आणि $\frac{\pi}{2} = 3 \times \frac{\pi}{6}$.`,
    ],
    answer: t`$\left(\frac{\pi}{6}\right)^c$, $\left(\frac{\pi}{3}\right)^c$ आणि $\left(\frac{\pi}{2}\right)^c$, म्हणजे $30^\circ$, $60^\circ$ आणि $90^\circ$.`,
  },
  remediation: {
    "C04-M1": t`त्रिकोणाच्या angles ची बेरीज $\pi^c = 180^\circ$ असते, आणि चौकोनाच्या angles ची $2\pi^c = 360^\circ$, कारण त्याचे दोन त्रिकोण होतात. पूर्ण फेरी, $2\pi$, म्हणजे एका बिंदूभोवतीच्या angles ची बेरीज.`,
    "C04-M2": t`आधी बेरजेतून माहीत असलेले angles वजा करा, आणि फक्त उरलेले वाटा. काटकोन त्रिकोणात दोन acute angles $\frac{\pi}{2}$ वाटून घेतात, $\pi$ नाही.`,
    "C04-M3": t`बेरीज किंवा वजाबाकी करण्यापूर्वी प्रत्येक angle एकाच एककात बदला: $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$. उदाहरणार्थ $\left(\frac{\pi}{5}\right)^c$ म्हणजे $36^\circ$, $\frac{\pi}{5}$ degrees नाही.`,
    "C04-M4": t`$\frac{2\pi}{n}$ हा exterior angle आहे: $n$ exterior angles मिळून एक पूर्ण फेरी होते. Interior angle $\pi - \frac{2\pi}{n} = \frac{(n-2)\pi}{n}$ आहे.`,
    "C04-M5": t`$(n - 2)\pi$ ही सर्व $n$ interior angles ची बेरीज आहे. Regular polygon मध्ये ते समान असतात, म्हणून प्रत्येक $\frac{(n-2)\pi}{n}$ आहे.`,
    "C04-M6": t`Interior angle आणि त्याचा exterior angle एका सरळ रेषेत असतात, म्हणून त्यांची बेरीज $\pi$ आहे, $2\pi$ नाही: interior angle $\pi - \frac{2\pi}{n}$ आहे.`,
  },
  solutions: {
    "C04-Q1": [
      t`रूपांतर करा: $\left(\frac{2\pi}{5}\right)^c = \left(\frac{2\pi}{5} \times \frac{180}{\pi}\right)^\circ = 72^\circ$.`,
      t`चौकोनाच्या angles ची बेरीज $360^\circ$ आहे, म्हणून उरलेल्या तिघांची बेरीज $360^\circ - 72^\circ = 288^\circ$ आहे.`,
      t`ते $2k$, $3k$, $4k$ आहेत: $9k = 288^\circ$, म्हणून $k = 32^\circ$ आणि angles $64^\circ$, $96^\circ$ आणि $128^\circ$ आहेत. सर्वात मोठा $128^\circ$ आहे.`,
    ],
    "C04-Q2": [
      t`रूपांतर करा: $\left(\frac{7\pi}{30}\right)^c = \left(\frac{7\pi}{30} \times \frac{180}{\pi}\right)^\circ = 42^\circ$. म्हणून acute angles $x > y$ साठी $x - y = 42^\circ$.`,
      t`काटकोन $180^\circ$ पैकी $90^\circ$ घेतो, म्हणून $x + y = 90^\circ$.`,
      t`बेरीज करून: $2x = 132^\circ$, म्हणून $x = 66^\circ$ आणि $y = 24^\circ$. मोठा acute angle $66^\circ$ आहे.`,
    ],
    "C04-Q3": [
      t`रूपांतर करा: $\left(\frac{\pi}{2}\right)^c = 90^\circ$. उरलेल्या तीन angles ची बेरीज $360^\circ - 90^\circ = 270^\circ$ आहे.`,
      t`त्यांना $a - 20^\circ$, $a$, $a + 20^\circ$ असे लिहा: $3a = 270^\circ$, म्हणून $a = 90^\circ$.`,
      t`तिन्ही angles $70^\circ$, $90^\circ$ आणि $110^\circ$ आहेत. सर्वात लहान $70^\circ$ आहे.`,
    ],
    "C04-Q4": [
      t`अष्टकोनाला $n = 8$ sides आहेत, म्हणून त्याचे $8 - 2 = 6$ त्रिकोण होतात आणि त्याच्या angles ची बेरीज $6\pi$ आहे.`,
      t`$8$ angles समान आहेत, म्हणून प्रत्येक $\frac{6\pi}{8} = \frac{3\pi}{4}$ आहे.`,
      t`तपासा: exterior angle $\pi - \frac{3\pi}{4} = \frac{\pi}{4} = \frac{2\pi}{8}$ आहे, जसा असायला हवा.`,
    ],
    "C04-Q5": [
      t`पंचकोनाचे $5 - 2 = 3$ त्रिकोण होतात, म्हणून त्याच्या angles ची बेरीज $3 \times 180^\circ = 540^\circ$ आहे.`,
      t`$5$ angles समान आहेत, म्हणून प्रत्येक $\frac{540^\circ}{5} = 108^\circ$ आहे.`,
      t`तपासा: exterior angle $180^\circ - 108^\circ = 72^\circ = \frac{360^\circ}{5}$ आहे, जसा असायला हवा.`,
    ],
  },
};
