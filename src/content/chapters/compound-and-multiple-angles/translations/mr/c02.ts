import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c02: ConceptTranslation = {
  id: "C02",
  lang: "mr",
  status: "approved",
  source: "0cd736344ac79f",
  hook: {
    prompt: t`$\tan 20^\circ + \tan 25^\circ + \tan 20^\circ \tan 25^\circ$ काढा. कोणताच tan छान संख्या नाही. **उत्तर छान संख्या असू शकते का?**`,
    reveal: t`हो: ते बरोबर $1$ आहे. कारण $20^\circ + 25^\circ = 45^\circ$, $\tan 45^\circ = \frac{\tan 20^\circ + \tan 25^\circ}{1 - \tan 20^\circ \tan 25^\circ} = 1$. अपूर्णांक काढून टाका: $\tan 20^\circ + \tan 25^\circ$ $= 1 - \tan 20^\circ \tan 25^\circ$, म्हणून बेरीज $1$ आहे.`,
  },
  intuition: [
    t`आठवा: **compound angle** म्हणजे दोन angles ची बेरीज किंवा फरक, जो $A \pm B$ असा लिहितात.`,
    t`कोणत्याही tan प्रमाणे, $\tan(A + B)$ म्हणजे $\frac{\sin(A + B)}{\cos(A + B)}$.`,
    t`अंश आणि छेदाचा sin आणि cos सूत्रांनी विस्तार करा.`,
    t`मग अंश आणि छेदाला $\cos A\cos B$ ने भागा: प्रत्येक पद tan होते.`,
    t`अंश $A \pm B$ चे चिन्ह ठेवतो; छेद $\cos(A \pm B)$ चे, म्हणजे उलट चिन्ह घेतो.`,
    t`म्हणून $\tan(A + B)$ कधीच फक्त $\tan A + \tan B$ नसतो.`,
  ],
  formal: [
    {
      title: t`tan ची दोन सूत्रे`,
      points: [
        t`$\tan(A + B)$ बरोबर $\frac{\tan A + \tan B}{1 - \tan A\tan B}$.`,
        t`$\tan(A - B)$ बरोबर $\frac{\tan A - \tan B}{1 + \tan A\tan B}$.`,
        t`अंशात कंसातलेच चिन्ह आहे.`,
        t`छेदात उलट चिन्ह आहे.`,
      ],
    },
    {
      title: t`ही कुठून येतात`,
      points: [
        t`$\tan(A + B)$ पासून सुरुवात करा, जे $\frac{\sin(A + B)}{\cos(A + B)}$ आहे.`,
        t`त्याचा अंश $\sin A\cos B + \cos A\sin B$ आहे.`,
        t`त्याचा छेद $\cos A\cos B - \sin A\sin B$ आहे.`,
        t`अंश आणि छेदातील प्रत्येक पदाला $\cos A\cos B$ ने भागा.`,
        t`अंश $\tan A + \tan B$ होतो, कारण $\frac{\sin A\cos B}{\cos A\cos B} = \tan A$.`,
        t`छेद $1 - \tan A\tan B$ होतो, ज्यावरून सूत्र मिळते.`,
      ],
    },
    {
      title: t`एक angle π/4 असताना`,
      points: [
        t`$\tan\frac{\pi}{4} = 1$, म्हणून सूत्रांमध्ये $A = \frac{\pi}{4}$ आणि $\tan A = 1$ ठेवा.`,
        t`$\tan\left(\frac{\pi}{4} + x\right)$ बरोबर $\frac{1 + \tan x}{1 - \tan x}$.`,
        t`$\tan\left(\frac{\pi}{4} - x\right)$ बरोबर $\frac{1 - \tan x}{1 + \tan x}$.`,
        t`उलटे वाचल्यास ही सूत्रे अपूर्णांकाचे एका tan मध्ये रूपांतर करतात.`,
        t`$\frac{\cos x + \sin x}{\cos x - \sin x}$ साठी, आधी अंश आणि छेदाला $\cos x$ ने भागा.`,
        t`ते $\frac{1 + \tan x}{1 - \tan x}$ होते, म्हणजे $\tan\left(\frac{\pi}{4} + x\right)$.`,
      ],
    },
    {
      title: t`बेरीज किंवा फरकाचा cot`,
      points: [
        t`गुणोत्तराचा **reciprocal** म्हणजे तेच गुणोत्तर उलटे: $\cot\theta = \frac{1}{\tan\theta}$.`,
        t`म्हणून $\cot(A \pm B)$ म्हणजे $\frac{1}{\tan(A \pm B)}$.`,
        t`आधी tan काढा, मग ते उलटे करा.`,
        t`उदाहरणार्थ, $\cot(A - B)$ बरोबर $\frac{1 + \tan A\tan B}{\tan A - \tan B}$.`,
        t`tan सूत्रात tan च्या जागी फक्त cot लिहू नका: ते चुकीचे आहे.`,
      ],
    },
    {
      title: t`अपूर्णांक काढून टाकणे`,
      points: [
        t`समजा $C = A + B$, म्हणजे $\tan C$ बरोबर $\frac{\tan A + \tan B}{1 - \tan A\tan B}$.`,
        t`दोन्ही बाजूंना छेदाने गुणा: $\tan C(1 - \tan A\tan B)$ बरोबर $\tan A + \tan B$.`,
        t`कंस सोडवा: $\tan C - \tan A\tan B\tan C$ बरोबर $\tan A + \tan B$.`,
        t`$\tan A + \tan B$ डावीकडे न्या, आणि $\tan A\tan B\tan C$ उजवीकडे.`,
        t`म्हणून $\tan C - \tan A - \tan B$ बरोबर $\tan A\tan B\tan C$.`,
        t`उदाहरणार्थ, $3x = 2x + x$, म्हणून $\tan 3x - \tan 2x - \tan x$ बरोबर $\tan 3x\tan 2x\tan x$.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\dfrac{\cos 27^\circ + \sin 27^\circ}{\cos 27^\circ - \sin 27^\circ}$ सोपे करा.`,
    steps: [
      t`अंश आणि छेदाला $\cos 27^\circ$ ने भागा: $\dfrac{1 + \tan 27^\circ}{1 - \tan 27^\circ}$.`,
      t`$1$ ला $\tan 45^\circ$ असे लिहा: $\dfrac{\tan 45^\circ + \tan 27^\circ}{1 - \tan 45^\circ \tan 27^\circ}$.`,
      t`हे $A = 45^\circ$, $B = 27^\circ$ घेऊन $\tan(A + B)$ चे सूत्र आहे: वर अधिक, खाली वजा.`,
    ],
    answer: t`$\tan(45^\circ + 27^\circ) = \tan 72^\circ$.`,
  },
  remediation: {
    "C02-M1": t`छेद $\cos(A + B) = \cos A\cos B - \sin A\sin B$ मधून येतो, म्हणून त्याचे चिन्ह अंशाच्या चिन्हाच्या उलट असते: $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$ आणि $\tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A\tan B}$.`,
    "C02-M2": t`बेरजेचा tan म्हणजे tans ची बेरीज नाही: $\tan(45^\circ + 45^\circ)$ व्याख्यित नाही, $2$ नाही. $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$ वापरा.`,
    "C02-M3": t`चिन्हे कंसाशी जुळवा: अंशात $A \pm B$ चे चिन्ह, छेदात उलट. म्हणून $\tan\left(\frac{\pi}{4} + x\right) = \frac{1 + \tan x}{1 - \tan x}$.`,
    "C02-M4": t`cot चे सूत्र tan च्या साच्यावर चालत नाही. आधी $\tan(A - B)$ काढा आणि ते उलटे करा: $\cot(A - B) = \frac{1 + \tan A\tan B}{\tan A - \tan B}$.`,
    "C02-M5": t`भागाकार करण्यापूर्वी, quadrant वरून राहिलेल्या गुणोत्तराचे चिन्ह ठरवा. तिसऱ्या quadrant मध्ये sin आणि cos दोन्ही ऋण आहेत, म्हणून tan धन आहे; चौथ्यात tan ऋण आहे.`,
  },
  solutions: {
    "C02-Q1": [
      t`$105^\circ = 60^\circ + 45^\circ$, जिथे $\tan 60^\circ = \sqrt{3}$ आणि $\tan 45^\circ = 1$.`,
      t`म्हणून $\tan 105^\circ = \dfrac{\sqrt{3} + 1}{1 - \sqrt{3} \cdot 1} = \dfrac{\sqrt{3} + 1}{1 - \sqrt{3}}$.`,
      t`अंश आणि छेदाला $1 + \sqrt{3}$ ने गुणा: $\dfrac{(\sqrt{3} + 1)^2}{1 - 3} = \dfrac{4 + 2\sqrt{3}}{-2} = -(2 + \sqrt{3})$.`,
    ],
    "C02-Q2": [
      t`$\frac{13\pi}{12} = \pi + \frac{\pi}{12}$. कारण $\tan\pi = 0$, $\tan\left(\pi + \frac{\pi}{12}\right) = \dfrac{0 + \tan\frac{\pi}{12}}{1 - 0} = \tan\frac{\pi}{12}$.`,
      t`$\frac{\pi}{12} = \frac{\pi}{4} - \frac{\pi}{6}$: $\tan\frac{\pi}{12} = \dfrac{1 - \frac{1}{\sqrt{3}}}{1 + 1 \cdot \frac{1}{\sqrt{3}}} = \dfrac{\sqrt{3} - 1}{\sqrt{3} + 1}$.`,
      t`अंश आणि छेदाला $\sqrt{3} - 1$ ने गुणा: $\dfrac{(\sqrt{3} - 1)^2}{3 - 1} = \dfrac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3}$.`,
    ],
    "C02-Q3": [
      t`$A$ तिसऱ्या quadrant मध्ये आहे, म्हणून $\cos A = -\frac{12}{13}$ आणि $\tan A = \dfrac{-5/13}{-12/13} = \frac{5}{12}$.`,
      t`$B$ चौथ्या quadrant मध्ये आहे, म्हणून $\sin B = -\frac{4}{5}$ आणि $\tan B = -\frac{4}{3}$.`,
      t`म्हणून $\tan(A + B) = \dfrac{\frac{5}{12} - \frac{4}{3}}{1 - \frac{5}{12}\left(-\frac{4}{3}\right)} = \dfrac{-\frac{11}{12}}{\frac{14}{9}} = -\frac{33}{56}$.`,
    ],
    "C02-Q4": [
      t`$\tan(A + B) = \dfrac{\frac{5}{6} + \frac{1}{11}}{1 - \frac{5}{6} \cdot \frac{1}{11}}$.`,
      t`अंश: $\frac{55 + 6}{66} = \frac{61}{66}$. छेद: $1 - \frac{5}{66} = \frac{61}{66}$.`,
      t`म्हणून $\tan(A + B) = 1$; लघुकोन $A$ आणि $B$ साठी याचा अर्थ $A + B = \frac{\pi}{4}$.`,
    ],
    "C02-Q5": [
      t`$\tan\frac{\pi}{4} = 1$ घेऊन: $\tan\left(\frac{\pi}{4} + x\right) = \dfrac{1 + \tan x}{1 - \tan x}$ आणि $\tan\left(\frac{\pi}{4} - x\right) = \dfrac{1 - \tan x}{1 + \tan x}$.`,
      t`अपूर्णांकाने भागणे म्हणजे त्याच्या उलट्याने गुणणे: $\dfrac{1 + \tan x}{1 - \tan x} \cdot \dfrac{1 + \tan x}{1 - \tan x} = \left(\dfrac{1 + \tan x}{1 - \tan x}\right)^2$.`,
    ],
    "C02-Q6": [
      t`$\cot B - \cot A = \dfrac{1}{\tan B} - \dfrac{1}{\tan A} = \dfrac{\tan A - \tan B}{\tan A\tan B} = \dfrac{x}{\tan A\tan B}$. हे $y$ आहे, म्हणून $\tan A\tan B = \frac{x}{y}$.`,
      t`$\cot(A - B) = \dfrac{1}{\tan(A - B)} = \dfrac{1 + \tan A\tan B}{\tan A - \tan B} = \dfrac{1 + \frac{x}{y}}{x}$.`,
      t`$= \dfrac{x + y}{xy} = \frac{1}{x} + \frac{1}{y}$.`,
    ],
  },
};
