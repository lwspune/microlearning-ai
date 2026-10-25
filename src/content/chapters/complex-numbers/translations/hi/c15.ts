import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c15: ConceptTranslation = {
  id: "C15",
  lang: "hi",
  status: "approved",
  source: "10ba82eeb9c1d9",
  hook: {
    prompt: t`$x$ और $y$ का उपयोग किए बिना बिंदु $1 + i$ का वर्णन कीजिए। **कौन-सी दो संख्याएँ किसी को ठीक-ठीक बताएँगी कि यह कहाँ है?**`,
    reveal: t`यह origin से कितना दूर है ($\sqrt2$) और किस दिशा में इशारा करता है ($\dfrac\pi4$)। यही polar form है: $\sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$।`,
  },
  intuition: [
    t`कोई भी शून्येतर complex number $z = x + iy$ एक बिंदु है, जिस तक $0$ से एक तीर जाता है।`,
    t`इसकी **length** (लंबाई) यह है कि $z$, $0$ से कितना दूर है: याद कीजिए, यह modulus $r = \lvert z \rvert$ है।`,
    t`इसकी **direction** (दिशा) इसका argument $\theta = \arg z$ है: **initial arm**, यानी positive real axis, से तीर तक का घुमाव।`,
    t`आड़े चलते हुए, तीर $x = r\cos\theta$ तय करता है: real part।`,
    t`ऊपर चलते हुए, यह $y = r\sin\theta$ तय करता है: imaginary part।`,
    t`लंबाई और दिशा से लिखने पर, गुणा और घात लेना आसान हो जाता है, जैसा अगले पाठ दिखाते हैं।`,
  ],
  formal: [
    {
      title: t`Polar form (ध्रुवीय रूप)`,
      points: [
        t`$x = r\cos\theta$ और $y = r\sin\theta$ को $z = x + iy$ में रखिए।`,
        t`इससे $z = r\cos\theta + i\,r\sin\theta$ मिलता है।`,
        t`साझा गुणनखंड $r$ बाहर निकालिए: $z = r(\cos\theta + i\sin\theta)$।`,
        t`यह $z$ का **polar form** है: इसकी लंबाई $r$, फिर इसकी दिशा $\theta$।`,
        t`लंबाई $r = \lvert z \rvert = \sqrt{x^2 + y^2}$ है।`,
        t`दिशा $\theta = \arg z$ है: याद कीजिए, मुख्य मान, $(-\pi, \pi]$ में, चतुर्थांश से तय।`,
      ],
    },
    {
      title: t`Euler form (ऑयलर रूप)`,
      points: [
        t`संक्षेप में, $\cos\theta + i\sin\theta$ को $e^{i\theta}$ लिखते हैं: यही **Euler's formula** (ऑयलर का सूत्र) है।`,
        t`इसलिए $z = re^{i\theta}$: यह $z$ का **Euler form** है।`,
        t`उदाहरण के लिए, $1 + i$ की लंबाई $\sqrt{1 + 1} = \sqrt2$ और दिशा $\frac\pi4$ है।`,
        t`इसलिए इसका polar form $\sqrt2\left(\cos\frac\pi4 + i\sin\frac\pi4\right)$ है।`,
        t`और इसका Euler form $\sqrt2\,e^{i\pi/4}$ है।`,
      ],
    },
    {
      title: t`वापस x + iy पर`,
      points: [
        t`वापस जाने के लिए, $2\left(\cos\frac\pi3 + i\sin\frac\pi3\right)$ लीजिए: लंबाई $2$, दिशा $\frac\pi3$।`,
        t`Cosine से real part मिलता है: $x = r\cos\theta = 2\cos\frac\pi3 = 1$।`,
        t`Sine से imaginary part मिलता है: $y = r\sin\theta = 2\sin\frac\pi3 = \sqrt3$।`,
        t`इसलिए संख्या $1 + \sqrt3\,i$ है।`,
        t`लंबाई $r$ दोनों भागों को गुणा करती है, केवल cosine को नहीं।`,
        t`सामान्यतः, $r(\cos\theta + i\sin\theta)$ बराबर है $r\cos\theta + i\,r\sin\theta$ के।`,
      ],
    },
  ],
  worked: {
    prompt: t`$2 - 2i$ को polar form में लिखिए।`,
    steps: [
      t`$r = \sqrt{4 + 4} = 2\sqrt2$।`,
      t`बिंदु चतुर्थांश IV में है और संदर्भ कोण $\dfrac\pi4$ है, इसलिए $\theta = -\dfrac\pi4$।`,
      t`इसलिए $2 - 2i$ $= 2\sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$।`,
    ],
    answer: t`$2\sqrt2\left(\cos\left(-\frac\pi4\right) + i\sin\left(-\frac\pi4\right)\right)$ $= 2\sqrt2\,e^{-i\pi/4}$`,
  },
  remediation: {
    "C15-M1": t`$\tan^{-1}$ केवल दाईं ओर इशारा करने वाले कोण देता है। कोण को बिंदु के चतुर्थांश से जगह दीजिए।`,
    "C15-M2": t`$r$ एक दूरी है: $r = \sqrt{x^2 + y^2}$।`,
    "C15-M3": t`$x = r\cos\theta$, real part है और $y = r\sin\theta$, imaginary part है।`,
    "C15-M4": t`$r(\cos\theta + i\sin\theta) = r\cos\theta + i\,r\sin\theta$: $r$ दोनों भागों को गुणा करता है।`,
    "C15-M5": t`संदर्भ कोण केवल घुमाव का आकार देता है। चतुर्थांश चिह्न तय करता है: $-3i$ नीचे की ओर है, इसलिए $\theta = -\dfrac\pi2$, और चतुर्थांश II में $\cos\theta < 0$।`,
  },
  solutions: {
    "C15-Q1": [
      t`$r = \sqrt{3 + 1} = 2$।`,
      t`बिंदु चतुर्थांश II में है और संदर्भ कोण $\dfrac\pi6$ है, इसलिए $\theta = \pi - \dfrac\pi6 = \dfrac{5\pi}{6}$।`,
      t`इसलिए $-\sqrt3 + i = 2\left(\cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6}\right)$।`,
    ],
    "C15-Q2": [
      t`$r = \sqrt{1 + 3} = 2$।`,
      t`बिंदु चतुर्थांश III में है और संदर्भ कोण $\dfrac\pi3$ है, इसलिए $\theta = -\left(\pi - \dfrac\pi3\right) = -\dfrac{2\pi}{3}$।`,
      t`इसलिए $-1 - \sqrt3\,i = 2\left(\cos\left(-\dfrac{2\pi}{3}\right) + i\sin\left(-\dfrac{2\pi}{3}\right)\right)$।`,
    ],
    "C15-Q3": [
      t`$r = \lvert -3i \rvert = 3$।`,
      t`बिंदु negative imaginary axis पर है, इसलिए $\theta = -\dfrac\pi2$।`,
      t`इसलिए $-3i = 3\left(\cos\left(-\dfrac\pi2\right) + i\sin\left(-\dfrac\pi2\right)\right)$।`,
    ],
    "C15-Q4": [
      t`$r = \lvert -2 \rvert = 2$।`,
      t`बिंदु negative real axis पर है, इसलिए $\theta = \pi$।`,
      t`इसलिए $-2 = 2(\cos\pi + i\sin\pi)$।`,
    ],
    "C15-Q5": [
      t`$x = r\cos\theta = 4\cos\dfrac{2\pi}{3} = 4 \cdot \left(-\dfrac12\right) = -2$।`,
      t`$y = r\sin\theta = 4\sin\dfrac{2\pi}{3} = 4 \cdot \dfrac{\sqrt3}{2} = 2\sqrt3$।`,
      t`इसलिए संख्या $-2 + 2\sqrt3\,i$ है।`,
    ],
    "C15-Q6": [
      t`$x = r\cos\theta = 6\cos\left(-\dfrac\pi6\right) = 6 \cdot \dfrac{\sqrt3}{2} = 3\sqrt3$।`,
      t`$y = r\sin\theta = 6\sin\left(-\dfrac\pi6\right) = 6 \cdot \left(-\dfrac12\right) = -3$।`,
      t`इसलिए संख्या $3\sqrt3 - 3i$ है।`,
    ],
  },
};
