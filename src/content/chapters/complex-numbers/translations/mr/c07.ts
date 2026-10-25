import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "mr",
  status: "approved",
  source: "09aa24e3274e63",
  hook: {
    prompt: t`$k$ च्या कोणत्या किमतीसाठी $(k - 2) + 5i$ हा imaginary axis वर असतो? **काय शून्य झाले पाहिजे?**`,
    reveal: t`Real part: $k - 2 = 0$, म्हणून $k = 2$. Imaginary axis वरील प्रत्येक बिंदूचा real part शून्य असतो.`,
  },
  intuition: [
    t`आठवा: $x + iy$ चा real part $x$ आणि imaginary part $y$ आहे, आणि तो बिंदू $(x, y)$ ने दाखवतात.`,
    t`एखादी संख्या **purely real** (शुद्ध वास्तव), म्हणजे फक्त वास्तव, असते जेव्हा तिचा imaginary part $0$ असतो, जसे $2$: ती real axis वर असते.`,
    t`ती **purely imaginary** असते जेव्हा तिचा real part $0$ असतो, जसे $3i$: ती **imaginary axis** (काल्पनिक अक्ष), म्हणजे उभ्या अक्षावर, असते.`,
    t`म्हणून एखादी संख्या purely real किंवा purely imaginary करण्यासाठी, **दुसरा** भाग शून्य ठेवा.`,
    t`संख्या अपूर्णांक असेल, तर आधी तिचे **rationalise** (परिमेयीकरण) करा: तिचा छेद वास्तव करा, म्हणजे $x + iy$ रूप मिळेल.`,
    t`कसोटी त्या सोप्या केलेल्या संख्येला लागते, फक्त तिच्या वरच्या भागाला, **numerator** (अंश), नाही.`,
  ],
  formal: [
    {
      title: t`Purely real संख्या`,
      points: [
        t`$z = x + iy$ घ्या, जिथे $x$ आणि $y$ वास्तव आहेत: तो purely real असतो जेव्हा $\operatorname{Im} z = 0$, म्हणजे $y = 0$.`,
        t`आठवा: conjugate $\bar z = x - iy$ ही real axis मधील $z$ ची आरशातील प्रतिमा आहे.`,
        t`Real axis वरची संख्या स्वतःचीच आरशातील प्रतिमा असते: $z = 4$ साठी, $\bar z = 4$ सुद्धा.`,
        t`चिन्हांत, $z = \bar z$ म्हणजे $x + iy = x - iy$, म्हणून $y = -y$, म्हणून $y = 0$.`,
        t`प्रत्येक विधानावरून दुसरे मिळत असेल तेव्हा आपण $\iff$ लिहितो, ज्याला "if and only if" (तर आणि तरच) असे वाचतात.`,
        t`म्हणून $z$ purely real आहे $\iff \operatorname{Im} z = 0$ $\iff z = \bar z$.`,
      ],
    },
    {
      title: t`Purely imaginary संख्या`,
      points: [
        t`$z = x + iy$ हा purely imaginary असतो जेव्हा $\operatorname{Re} z = 0$, म्हणजे $x = 0$, म्हणून $z = iy$.`,
        t`$z = 3i$ साठी, real axis मधील आरशातील प्रतिमा $\bar z = -3i$ आहे, जी $-z$ आहे.`,
        t`सर्वसाधारणपणे, $iy$ चा conjugate $-iy$ आहे: म्हणून $\bar z = -z$.`,
        t`चिन्हांत, $z = -\bar z$ म्हणजे $x + iy = -x + iy$, म्हणून $x = 0$.`,
        t`म्हणून $z$ purely imaginary आहे $\iff \operatorname{Re} z = 0$ $\iff z = -\bar z$.`,
        t`सहसा $z \ne 0$ सुद्धा विचारले जाते, कारण $0$ दोन्ही अक्षांवर आहे.`,
      ],
    },
    {
      title: t`अपूर्णांक: आधी परिमेयीकरण`,
      points: [
        t`भागाकार $\dfrac pq$ साठी, आधी तो $x + iy$ या रूपात लिहा.`,
        t`आठवा: अंश आणि छेद यांना छेदाच्या conjugate ने गुणा, ज्यामुळे छेद वास्तव होतो.`,
        t`मग त्याचा real part किंवा imaginary part शून्य ठेवा.`,
        t`फक्त अंश वास्तव किंवा काल्पनिक आहे का ही कसोटी **नाही**.`,
        t`उदाहरणार्थ, $\dfrac{3i}{2 + i}$ चा अंश purely imaginary आहे.`,
        t`पण $\dfrac{3i(2 - i)}{5} = \dfrac{3 + 6i}{5}$, जे दोन्हीपैकी काहीच नाही.`,
      ],
    },
  ],
  worked: {
    prompt: t`कोणत्या वास्तव $x$ साठी $\dfrac{x + 2i}{1 - i}$ हा purely real आहे?`,
    steps: [
      t`परिमेयीकरण करा: $\dfrac{(x + 2i)(1 + i)}{2}$ $= \dfrac{(x - 2) + (x + 2)i}{2}$.`,
      t`Purely real म्हणजे imaginary part शून्य: $x + 2 = 0$.`,
    ],
    answer: t`$x = -2$`,
  },
  remediation: {
    "C07-M1": t`Purely imaginary म्हणजे **real** part शून्य; purely real म्हणजे **imaginary** part शून्य.`,
    "C07-M2": t`आधी परिमेयीकरण करा. अंश purely real किंवा purely imaginary नसतानाही अपूर्णांक तसा असू शकतो.`,
    "C07-M3": t`$b$ चिन्ह बदलून पलीकडे न्या: $x = -\dfrac ba$.`,
    "C07-M4": t`$b$ वजा करा, मग $a$ ने भागा: $x = -\dfrac ba$. परत ठेवून तो भाग शून्य आहे का ते तपासा.`,
    "C07-M5": t`अपूर्णांकाची रेषा संपूर्ण अंशाला भागते: $\dfrac{x + 1}{2} = \dfrac x2 + \dfrac12$. अपूर्णांक नेमका तेव्हा शून्य असतो जेव्हा त्याचा अंश शून्य असतो.`,
  },
  solutions: {
    "C07-Q1": [
      t`Purely imaginary म्हणजे real part शून्य: $x - 3 = 0$, म्हणून $x = 3$.`,
      t`Imaginary part सुद्धा शून्य नाही ना ते तपासा: $3 + 2 = 5$, म्हणून संख्या $5i$ आहे.`,
    ],
    "C07-Q2": [
      t`Purely real म्हणजे imaginary part शून्य: $x - 4 = 0$.`,
      t`म्हणून $x = 4$, आणि संख्या $2(4) + 1 = 9$ आहे.`,
    ],
    "C07-Q3": [
      t`परिमेयीकरण करा: $\dfrac{(x + i)(1 - i)}{(1 + i)(1 - i)} = \dfrac{(x + 1) + (1 - x)i}{2}$.`,
      t`Purely imaginary म्हणजे real part शून्य: $x + 1 = 0$, म्हणून $x = -1$.`,
      t`तपासणी: मग संख्या $\dfrac{2i}{2} = i$ आहे, जी शून्य नाही.`,
    ],
    "C07-Q4": [
      t`परिमेयीकरण करा: $\dfrac{(2 + xi)(3 - 4i)}{25} = \dfrac{(6 + 4x) + (3x - 8)i}{25}$.`,
      t`Purely real म्हणजे imaginary part शून्य: $3x - 8 = 0$, म्हणून $x = \dfrac83$.`,
    ],
    "C07-Q5": [
      t`गुणाकार करा: $(x + 3i)(2 + i) = 2x + xi + 6i + 3i^2 = (2x - 3) + (x + 6)i$.`,
      t`Purely imaginary म्हणजे real part शून्य: $2x - 3 = 0$, म्हणून $x = \dfrac32$.`,
    ],
  },
};
