import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c05: ConceptTranslation = {
  id: "C05",
  lang: "mr",
  status: "approved",
  source: "123a24905078e5",
  hook: {
    prompt: t`जर $\tan\theta + \frac{1}{\tan\theta} = 2$, तर $\tan^2\theta + \frac{1}{\tan^2\theta}$ किती? **ते $4$ आहे का?**`,
    reveal: t`नाही, ते $2$ आहे. बेरजेचा वर्ग केल्यावर मधले पद येते: $\tan^2\theta + 2\tan\theta \cdot \frac{1}{\tan\theta} + \frac{1}{\tan^2\theta} = 4$, आणि ते मधले पद $2$ आहे. म्हणून $\tan^2\theta + \frac{1}{\tan^2\theta} = 4 - 2 = 2$. तपासा: $\tan\theta = 1$ बसते, आणि $1 + 1 = 2$.`,
  },
  intuition: [
    t`**Identity** (नित्यसमीकरण) म्हणजे असे समीकरण जे प्रत्येक अशा angle साठी खरे असते जिथे त्याच्या दोन्ही बाजू व्याख्यित आहेत.`,
    t`एक angle $\theta$ standard position मध्ये ठेवा, आणि त्याच्या terminal arm वर $O$ सोडून एक बिंदू $P(x, y)$ निवडा.`,
    t`$P$ पासून $x$-अक्षावर लंब टाका: त्यामुळे एक काटकोन त्रिकोण तयार होतो ज्याच्या **legs** (लहान बाजू) $x$ आणि $y$ आहेत.`,
    t`त्याची सर्वात लांब बाजू, hypotenuse, $r = OP$ आहे, म्हणजे $O$ पासून $P$ चे अंतर.`,
    t`पायथागोरसने, $x^2 + y^2 = r^2$, $x$ किंवा $y$ ऋण असला तरी: वर्ग केल्याने चिन्ह जाते.`,
    t`हे एक तथ्य $r^2$ ने, $x^2$ ने किंवा $y^2$ ने भागा, आणि तिन्ही **fundamental identities** (मूलभूत नित्यसमीकरणे) मिळतात.`,
  ],
  formal: [
    {
      title: t`Sine आणि cosine`,
      points: [
        t`त्रिकोणाच्या प्रत्येक बाजूला $r$ ने भागा: hypotenuse $1$ होतो.`,
        t`Legs $\frac{x}{r}$ आणि $\frac{y}{r}$ होतात, म्हणजेच $\cos\theta$ आणि $\sin\theta$.`,
        t`या लहान त्रिकोणात पायथागोरसने $\left(\frac{x}{r}\right)^2 + \left(\frac{y}{r}\right)^2 = 1$ मिळते: म्हणजे $x^2 + y^2 = r^2$ ला $r^2$ ने भागणे.`,
        t`$(\sin\theta)^2$ ला, म्हणजे $\sin\theta$ च्या वर्गाला, आपण $\sin^2\theta$ असे लिहितो, आणि इतर functions साठीही असेच.`,
        t`म्हणून $\sin^2\theta + \cos^2\theta = 1$.`,
        t`हे प्रत्येक angle $\theta$ साठी खरे आहे, कारण $r$ कधीच $0$ नसतो.`,
      ],
    },
    {
      title: t`Tangent आणि secant`,
      points: [
        t`आता प्रत्येक बाजूला $x$ ने भागा: $x$-अक्षालगतची leg $1$ होते.`,
        t`उरलेल्या दोन बाजू $\frac{y}{x} = \tan\theta$ आणि $\frac{r}{x} = \sec\theta$ होतात.`,
        t`पायथागोरसने $1 + \left(\frac{y}{x}\right)^2 = \left(\frac{r}{x}\right)^2$ मिळते: म्हणजे $x^2 + y^2 = r^2$ ला $x^2$ ने भागणे.`,
        t`म्हणून $1 + \tan^2\theta = \sec^2\theta$.`,
        t`हे जिथे $x \ne 0$ तिथे खरे आहे, म्हणजे जिथे $\tan\theta$ आणि $\sec\theta$ व्याख्यित आहेत.`,
        t`म्हणून $\tan$ ची जोडी $\sec$ शी आहे: दोघांमध्ये $x$ खाली आहे.`,
      ],
    },
    {
      title: t`Cotangent आणि cosecant`,
      points: [
        t`आता प्रत्येक बाजूला $y$ ने भागा: उभी leg, जिची लांबी $y$ आहे, $1$ होते.`,
        t`उरलेल्या दोन बाजू $\frac{x}{y} = \cot\theta$ आणि $\frac{r}{y} = \operatorname{cosec}\theta$ होतात.`,
        t`पायथागोरसने $\left(\frac{x}{y}\right)^2 + 1 = \left(\frac{r}{y}\right)^2$ मिळते: म्हणजे $x^2 + y^2 = r^2$ ला $y^2$ ने भागणे.`,
        t`म्हणून $\cot^2\theta + 1 = \operatorname{cosec}^2\theta$, जे सहसा $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ असे लिहितात.`,
        t`हे जिथे $y \ne 0$ तिथे खरे आहे, म्हणजे जिथे $\cot\theta$ आणि $\operatorname{cosec}\theta$ व्याख्यित आहेत.`,
        t`म्हणून $\cot$ ची जोडी $\operatorname{cosec}$ शी आहे: दोघांमध्ये $y$ खाली आहे.`,
      ],
    },
    {
      title: t`Identity ची मांडणी बदलणे`,
      points: [
        t`Identity ची मांडणी कोणत्याही समीकरणासारखी, एक पद दुसऱ्या बाजूला नेऊन, बदलता येते.`,
        t`पद $=$ चिन्ह ओलांडते तेव्हा त्याचे चिन्ह बदलते.`,
        t`$\sin^2\theta + \cos^2\theta = 1$ वरून: $\cos^2\theta - 1 = -\sin^2\theta$, $\sin^2\theta$ नाही.`,
        t`$1 + \tan^2\theta = \sec^2\theta$ वरून: $\sec^2\theta - \tan^2\theta = 1$.`,
        t`$1 + \cot^2\theta = \operatorname{cosec}^2\theta$ वरून: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
      ],
    },
    {
      title: t`वर्ग केल्यावर मधले पद राहते`,
      points: [
        t`बेरजेचा वर्ग केल्यावर मधले पद येते: $(a + b)^2 = a^2 + 2ab + b^2$.`,
        t`$a = \sin^2\theta$ आणि $b = \cos^2\theta$ घ्या, म्हणजे $a + b = 1$.`,
        t`मग $a^2 = \sin^4\theta$, म्हणजे $(\sin\theta)^4$, आणि $b^2 = \cos^4\theta$.`,
        t`म्हणून $\sin^4\theta + \cos^4\theta = (a + b)^2 - 2ab$.`,
        t`म्हणजे $(\sin^2\theta + \cos^2\theta)^2 - 2\sin^2\theta\cos^2\theta$ $= 1 - 2\sin^2\theta\cos^2\theta$.`,
        t`हे $1$ नाही: मधले पद $2ab$ वजा केलेच पाहिजे.`,
      ],
    },
    {
      title: t`Factor pairs (अवयवांची जोडी)`,
      points: [
        t`दोन वर्गांच्या फरकाचे अवयव पडतात: $(a + b)(a - b) = a^2 - b^2$.`,
        t`म्हणून $(\sec\theta + \tan\theta)(\sec\theta - \tan\theta)$ $= \sec^2\theta - \tan^2\theta = 1$.`,
        t`हे दोन अवयव एक **factor pair** आहेत: त्यांचा गुणाकार $1$ आहे, म्हणून प्रत्येक दुसऱ्याचा reciprocal आहे.`,
        t`म्हणून जर $\sec\theta + \tan\theta = k$, तर $\sec\theta - \tan\theta = \frac{1}{k}$.`,
        t`दोन्हींची बेरीज केल्यास $2\sec\theta = k + \frac{1}{k}$ मिळते, आणि वजाबाकी केल्यास $2\tan\theta = k - \frac{1}{k}$.`,
        t`हेच $\operatorname{cosec}\theta + \cot\theta$ आणि $\operatorname{cosec}\theta - \cot\theta$ साठीही चालते, ज्यांचा गुणाकारही $1$ आहे.`,
      ],
    },
  ],
  worked: {
    prompt: t`जर $\operatorname{cosec}\theta + \cot\theta = 5$, तर $\sec\theta$ काढा.`,
    steps: [
      t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta)$ $= \operatorname{cosec}^2\theta - \cot^2\theta = 1$, म्हणून $\operatorname{cosec}\theta - \cot\theta = \frac{1}{5}$.`,
      t`दोन समीकरणांची बेरीज करा: $2\operatorname{cosec}\theta = 5 + \frac{1}{5} = \frac{26}{5}$, म्हणून $\operatorname{cosec}\theta = \frac{13}{5}$. त्यांची वजाबाकी करा: $2\cot\theta = 5 - \frac{1}{5} = \frac{24}{5}$, म्हणून $\cot\theta = \frac{12}{5}$.`,
      t`$\sin\theta = \frac{5}{13}$, आणि $\cos\theta = \cot\theta \cdot \sin\theta$ $= \frac{12}{5} \cdot \frac{5}{13} = \frac{12}{13}$.`,
      t`म्हणून $\sec\theta = \frac{1}{\cos\theta} = \frac{13}{12}$.`,
    ],
    answer: t`$\sec\theta = \frac{13}{12}$.`,
  },
  remediation: {
    "C05-M1": t`$\sin^2\theta + \cos^2\theta = 1$ ला $\cos^2\theta$ ने भागा: $\tan^2\theta + 1 = \sec^2\theta$. $\sin^2\theta$ ने भागल्यास $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ मिळते, म्हणून $\tan$ ची जोडी $\sec$ शी आणि $\cot$ ची $\operatorname{cosec}$ शी.`,
    "C05-M2": t`फक्त $\sin^2\theta + \cos^2\theta = 1$ चेच हे रूप आहे. बाकीची आहेत $1 + \tan^2\theta = \sec^2\theta$ आणि $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\sec^2\theta$ हे $\tan^2\theta$ पेक्षा $1$ ने जास्त आहे, $1$ मधून ते वजा करून नाही.`,
    "C05-M3": t`त्याऐवजी अवयव पाडा: $(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$. एक अवयव $k$ असेल, तर दुसरा $\frac{1}{k}$ आहे, $1$ नाही.`,
    "C05-M4": t`$(a + b)^2 = a^2 + 2ab + b^2$. $\tan\theta + \cot\theta$ मध्ये मधले पद $2\tan\theta\cot\theta = 2$ आहे, म्हणून $\tan^2\theta + \cot^2\theta$ हे वर्गापेक्षा $2$ ने कमी आहे.`,
    "C05-M5": t`पद $=$ चिन्ह ओलांडते तेव्हा त्याचे चिन्ह बदलते. $\sin^2\theta + \cos^2\theta = 1$ वरून: $\cos^2\theta - 1 = -\sin^2\theta$. $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ वरून: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
    "C05-M6": t`उत्तर देण्यापूर्वी प्रश्न काय विचारतो ते तपासा. शेवटची पायरी पूर्ण करा: reciprocal घ्या, किंवा $1 + \tan^2\theta = \sec^2\theta$ आणि $1 + \cot^2\theta = \operatorname{cosec}^2\theta$ मधले $1$ मिळवा.`,
  },
  solutions: {
    "C05-Q1": [
      t`हा वर्गांचा फरक आहे: $(\sec A + \cos A)(\sec A - \cos A) = \sec^2 A - \cos^2 A$.`,
      t`$\sec^2 A = 1 + \tan^2 A$ आणि $\cos^2 A = 1 - \sin^2 A$.`,
      t`म्हणून ते $(1 + \tan^2 A) - (1 - \sin^2 A) = \tan^2 A + \sin^2 A$ च्या बरोबर आहे.`,
    ],
    "C05-Q2": [
      t`$\sin^2 A + \cos^2 A = 1$ वरून: $\cos^2 A - 1 = -\sin^2 A$.`,
      t`$\cot^2 A + 1 = \operatorname{cosec}^2 A$.`,
      t`म्हणून ते $-\sin^2 A \cdot \operatorname{cosec}^2 A = -1$ च्या बरोबर आहे.`,
    ],
    "C05-Q3": [
      t`वर्ग करा: $\tan^2\theta + 2\tan\theta\cot\theta + \cot^2\theta = 9$. कारण $\tan\theta\cot\theta = 1$, $\tan^2\theta + \cot^2\theta = 9 - 2 = 7$.`,
      t`म्हणून $\sec^2\theta + \operatorname{cosec}^2\theta = (1 + \tan^2\theta) + (1 + \cot^2\theta) = 2 + 7 = 9$.`,
    ],
    "C05-Q4": [
      t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$, म्हणून $\operatorname{cosec}\theta - \cot\theta = \frac{2}{5}$.`,
      t`वजाबाकी करा: $2\cot\theta = \frac{5}{2} - \frac{2}{5} = \frac{21}{10}$, म्हणून $\cot\theta = \frac{21}{20}$.`,
      t`म्हणून $\tan\theta = \frac{1}{\cot\theta} = \frac{20}{21}$.`,
    ],
    "C05-Q5": [
      t`$(\operatorname{cosec}\theta - \cot\theta)(\operatorname{cosec}\theta + \cot\theta) = 1$, म्हणून $\operatorname{cosec}\theta + \cot\theta = \frac{1}{q}$.`,
      t`बेरीज करा: $2\operatorname{cosec}\theta = q + \frac{1}{q} = \frac{1 + q^2}{q}$, म्हणून $\operatorname{cosec}\theta = \frac{1 + q^2}{2q}$.`,
      t`म्हणून $\sin\theta = \frac{1}{\operatorname{cosec}\theta} = \frac{2q}{1 + q^2}$.`,
    ],
    "C05-Q6": [
      t`$(\sec\theta + \tan\theta)(\sec\theta - \tan\theta) = 1$, म्हणून $\sec\theta - \tan\theta = \frac{1}{3}$.`,
      t`बेरीज करा: $2\sec\theta = 3 + \frac{1}{3} = \frac{10}{3}$, म्हणून $\sec\theta = \frac{5}{3}$.`,
      t`म्हणून $\cos\theta = \frac{1}{\sec\theta} = \frac{3}{5}$.`,
    ],
  },
};
