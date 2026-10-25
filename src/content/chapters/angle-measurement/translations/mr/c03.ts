import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c03: ConceptTranslation = {
  id: "C03",
  lang: "mr",
  status: "approved",
  source: "146f4c790f0b63",
  hook: {
    prompt: t`एखाद्या circle ची radius त्याच्या परिघावर, वाकलेल्या arc सारखी, ठेवा. **हा arc centre जवळ जो angle करतो, तो $60^\circ$ पेक्षा जास्त आहे की कमी?**`,
    reveal: t`कमी. Radius एवढी लांब सरळ chord $60^\circ$ करते (ती दोन radii सोबत समभुज त्रिकोण करते), आणि त्याच दोन बिंदूंमधील arc chord पेक्षा लांब असतो. Radius एवढा arc $1^c = \left(\frac{180}{\pi}\right)^\circ \approx 57.3^\circ$ करतो: एक **radian**.`,
  },
  intuition: [
    t`Degrees पूर्ण फेरीचे $360$ समान भाग करतात.`,
    t`**Radians** फेरी circle वापरूनच मोजतात.`,
    t`Circle ची **radius** (त्रिज्या) $r$ म्हणजे त्याच्या centre $O$ पासून परिघापर्यंतचे अंतर.`,
    t`$r$ लांबीची एक arm $O$ भोवती $OA$ पासून $OB$ पर्यंत फिरवा.`,
    t`तिचे टोक परिघाच्या एका तुकड्यावरून, **arc** (कंस) $AB$ वरून, जाते.`,
    t`जेव्हा arc $AB$ ची लांबी radius एवढी असते, तेव्हा arm **एक radian** फिरली असते, ते $1^c$ असे लिहितात.`,
  ],
  formal: [
    {
      title: t`प्रत्येक circle मध्ये सारखाच`,
      points: [
        t`एक radian प्रत्येक circle मध्ये, लहान असो वा मोठे, सारखाच angle असतो.`,
        t`$r$ radius चे एक circle घ्या, आणि त्याच्या दुप्पट, $2r$ radius चे एक.`,
        t`त्यांच्या centre $O$ भोवती एक arm $1^c$ फिरवा.`,
        t`लहान circle वर, ती $r$ लांबीचा arc कापते.`,
        t`मोठ्या circle वर, ती $2r$ लांबीचा arc कापते: दुप्पट लांब.`,
        t`Arms जागा बदलत नाहीत, म्हणून centre जवळचा angle अजूनही $1^c$ च आहे.`,
      ],
    },
    {
      title: t`मुख्य तथ्य`,
      points: [
        t`Circle चा संपूर्ण परीघ $2\pi r$ लांब असतो, जिथे $\pi$ म्हणजे संख्या $3.14159\ldots$.`,
        t`एक arm initial arm पासून अर्धी फेरी, $180^\circ$, फिरवा.`,
        t`अर्धी फेरी अर्धा परीघ पार करते, म्हणजे $\pi r$ लांबीचा arc.`,
        t`त्या arc मध्ये $\pi$ radii मावतात, म्हणजे तीनपेक्षा थोड्या जास्त.`,
        t`म्हणून अर्धी फेरी म्हणजे $\pi$ radians: $\pi^c = 180^\circ$, हेच मुख्य तथ्य.`,
        t`पूर्ण फेरी म्हणजे $2\pi^c = 360^\circ$, $\pi^c$ नाही.`,
      ],
    },
    {
      title: t`Degrees पासून radians`,
      points: [
        t`Degrees चे radians मध्ये रूपांतर करण्यासाठी, $\frac{\pi}{180}$ ने गुणा.`,
        t`मुख्य तथ्य, $\pi^c = 180^\circ$, ला $180$ ने भागा: $1^\circ = \left(\frac{\pi}{180}\right)^c$.`,
        t`म्हणून $\theta^\circ = \left(\theta \times \frac{\pi}{180}\right)^c$.`,
        t`उदाहरणार्थ, $70^\circ$ चा angle घ्या.`,
        t`मग $70^\circ = \left(70 \times \frac{\pi}{180}\right)^c = \left(\frac{7\pi}{18}\right)^c$.`,
      ],
    },
    {
      title: t`Radians पासून degrees`,
      points: [
        t`Radians चे degrees मध्ये रूपांतर करण्यासाठी, $\frac{180}{\pi}$ ने गुणा.`,
        t`एक radian म्हणजे किती degrees हे काढण्यासाठी मुख्य तथ्य, $\pi^c = 180^\circ$, ला $\pi$ ने भागा.`,
        t`त्यावरून $1^c = \left(\frac{180}{\pi}\right)^\circ \approx 57^\circ 17' 45''$.`,
        t`म्हणून $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$.`,
        t`गुणक बरोबर आहे का, ते मुख्य तथ्यावर वापरून पाहा.`,
        t`त्याने $180^\circ$ चे $\pi^c$, किंवा $\pi^c$ चे $180^\circ$ केले पाहिजे.`,
      ],
    },
    {
      title: t`ऋण angles`,
      points: [
        t`**Negative angle** (ऋण angle) म्हणजे clockwise फेरी.`,
        t`एकक बदलल्याने दिशा बदलत नाही, म्हणून ऋण चिन्ह तसेच राहते.`,
        t`Anticlockwise फिरवल्यास, $90^\circ = \left(\frac{\pi}{2}\right)^c$.`,
        t`Clockwise फिरवल्यास, $-90^\circ = -\left(\frac{\pi}{2}\right)^c$.`,
        t`त्याचप्रमाणे, $\left(-\frac{\pi}{18}\right)^c = -10^\circ$.`,
      ],
    },
    {
      title: t`आधी minutes`,
      points: [
        t`Degrees आणि minutes मधील angle, $D^\circ M'$, रूपांतरित करण्यापूर्वी degrees ची एकच संख्या करायला हवी.`,
        t`एक minute म्हणजे degree चा $\frac{1}{60}$ भाग, म्हणून $M' = \left(\frac{M}{60}\right)^\circ$.`,
        t`उदाहरणार्थ, $40^\circ 15'$ चा angle घ्या.`,
        t`त्याची minutes $15' = \left(\frac{15}{60}\right)^\circ = 0.25^\circ$ आहेत.`,
        t`म्हणून $40^\circ 15' = \left(40\frac{15}{60}\right)^\circ = 40.25^\circ$, $40.15^\circ$ नाही.`,
        t`मग नेहमीप्रमाणे $\frac{\pi}{180}$ ने गुणा.`,
      ],
    },
    {
      title: t`जिथे π दिसत नाही`,
      points: [
        t`$\pi$ नसलेले radian माप, जसे $3^c$, तरीही radians मध्येच असते.`,
        t`तो तीन radii लांबीचा arc आहे, $3^\circ$ नाही.`,
        t`त्याचेही रूपांतर त्याच पद्धतीने, $\frac{180}{\pi}$ ने गुणून करा: $3^c = \left(\frac{540}{\pi}\right)^\circ$.`,
        t`प्रश्नात सांगितले असेल तेव्हा $\pi = \frac{22}{7}$ घ्या.`,
        t`मग $\frac{540 \times 7}{22} = \frac{1890}{11}$, म्हणून $3^c \approx 171.8^\circ$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$75^\circ 30'$ चे radians मध्ये रूपांतर करा.`,
    steps: [
      t`आधी minutes: $30' = \left(\frac{30}{60}\right)^\circ$ $= \left(\frac{1}{2}\right)^\circ$, म्हणून $75^\circ 30' = \left(75\frac{1}{2}\right)^\circ$ $= \left(\frac{151}{2}\right)^\circ$.`,
      t`Degrees पासून radians: $\frac{\pi}{180}$ ने गुणा. $\frac{151}{2} \times \frac{\pi}{180} = \frac{151\pi}{360}$.`,
      t`तपासा: $90^\circ = \left(\frac{\pi}{2}\right)^c$ $= \left(\frac{180\pi}{360}\right)^c$. आपला angle $90^\circ$ पेक्षा थोडा कमी आहे, आणि $\frac{151\pi}{360}$ सुद्धा $\frac{180\pi}{360}$ पेक्षा थोडा कमी आहे.`,
    ],
    answer: t`$75^\circ 30' = \left(\frac{151\pi}{360}\right)^c$`,
  },
  remediation: {
    "C03-M1": t`Degrees पासून radians: $\frac{\pi}{180}$ ने गुणा. Radians पासून degrees: $\frac{180}{\pi}$ ने गुणा. तुमचा गुणक मुख्य तथ्यावर तपासा: $180^\circ$ चे $\pi^c$ झाले पाहिजे, आणि $\pi^c$ चे $180^\circ$.`,
    "C03-M2": t`पूर्ण फेरी $2\pi r$ लांबीचा arc पार करते, म्हणून ती $2\pi$ radians आहे. अर्धी फेरी म्हणजे $\pi^c = 180^\circ$, $360^\circ$ नाही.`,
    "C03-M3": t`एक minute म्हणजे degree चा $\frac{1}{60}$ भाग, $\frac{1}{100}$ नाही: $30' = \left(\frac{30}{60}\right)^\circ = 0.5^\circ$. आधी minutes चे degree च्या अपूर्णांकात रूपांतर करा, मग पुढचे रूपांतर करा.`,
    "C03-M4": t`$180^\circ$ बरोबर $\pi^c$ आहे, $1^c$ नाही. म्हणून $1^\circ = \left(\frac{\pi}{180}\right)^c$ आणि $1^c = \left(\frac{180}{\pi}\right)^\circ$: गुणकात $\pi$ राहतो.`,
    "C03-M5": t`ऋण angle म्हणजे clockwise फेरी, आणि एकक बदलल्याने दिशा बदलत नाही. चिन्ह तसेच ठेवा: उदाहरणार्थ $-90^\circ = -\left(\frac{\pi}{2}\right)^c$.`,
  },
  solutions: {
    "C03-Q1": [
      t`$156^\circ$ हा अर्ध्या फेरीपेक्षा थोडा कमी आहे. कारण $\pi^c = 180^\circ$, $1^\circ = \left(\frac{\pi}{180}\right)^c$: $\frac{\pi}{180}$ ने गुणा.`,
      t`$156 \times \frac{\pi}{180} = \frac{156\pi}{180} = \frac{13\pi}{15}$, अंश आणि छेद दोघांना $12$ ने भागून.`,
      t`म्हणून $156^\circ = \left(\frac{13\pi}{15}\right)^c$, $\pi^c = 180^\circ$ पेक्षा थोडा कमी, अपेक्षेप्रमाणे.`,
    ],
    "C03-Q2": [
      t`Radians पासून degrees: कारण $\pi^c = 180^\circ$, $\frac{180}{\pi}$ ने गुणा.`,
      t`$\frac{22\pi}{15} \times \frac{180}{\pi} = 22 \times 12 = 264$, म्हणून $\left(\frac{22\pi}{15}\right)^c = 264^\circ$: अर्धी फेरी आणि आणखी $84^\circ$.`,
    ],
    "C03-Q3": [
      t`आधी minutes: $30' = \left(\frac{30}{60}\right)^\circ = 0.5^\circ$, म्हणून $65^\circ 30' = 65.5^\circ = \left(\frac{131}{2}\right)^\circ$. हा $65.3^\circ$ नाही: एक minute म्हणजे degree चा साठावा भाग.`,
      t`$\frac{\pi}{180}$ ने गुणा: $\frac{131}{2} \times \frac{\pi}{180} = \frac{131\pi}{360}$, म्हणून $65^\circ 30' = \left(\frac{131\pi}{360}\right)^c$.`,
    ],
    "C03-Q4": [
      t`ऋण चिन्ह म्हणजे $132^\circ$ ची clockwise फेरी. एकक बदलल्याने दिशा बदलणार नाही, म्हणून चिन्ह ठेवा आणि $132^\circ$ चे रूपांतर करा.`,
      t`$132 \times \frac{\pi}{180} = \frac{132\pi}{180} = \frac{11\pi}{15}$, अंश आणि छेदाला $12$ ने भागून. म्हणून $-132^\circ = -\left(\frac{11\pi}{15}\right)^c$.`,
    ],
    "C03-Q5": [
      t`$5^c$ मध्ये $\pi$ नाही, तरीही तो radians मध्ये आहे. कारण $1^c = \left(\frac{180}{\pi}\right)^\circ$, $5^c = \left(\frac{900}{\pi}\right)^\circ$.`,
      t`$\pi = \frac{22}{7}$ घेऊन: $\frac{900 \times 7}{22} = \frac{6300}{22} = \frac{3150}{11}$. म्हणून $5^c = \left(\frac{3150}{11}\right)^\circ \approx 286.4^\circ$, $57.3^\circ$ च्या पाचपटीपेक्षा थोडा कमी.`,
    ],
    "C03-Q6": [
      t`आधी degrees: $\left(\frac{1}{5}\right)^c = \left(\frac{1}{5} \times \frac{180}{\pi}\right)^\circ = \left(\frac{36}{\pi}\right)^\circ = \left(\frac{36 \times 7}{22}\right)^\circ = \left(\frac{126}{11}\right)^\circ = 11\frac{5}{11}^\circ$.`,
      t`आता minutes: $\frac{5}{11}^\circ = \frac{5}{11} \times 60' = \frac{300}{11}' = 27\frac{3}{11}'$.`,
      t`आता seconds: $\frac{3}{11}' = \frac{3}{11} \times 60'' = \frac{180}{11}'' = 16\frac{4}{11}''$. म्हणून $\left(\frac{1}{5}\right)^c = 11^\circ\ 27'\ 16\frac{4}{11}''$.`,
    ],
  },
};
