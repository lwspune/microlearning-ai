import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "mr",
  status: "approved",
  source: "154a6872acbb8e",
  hook: {
    prompt: t`Slopes $0$ आणि $1$ असलेल्या रेषा एका कोनात भेटतात; slopes $1$ आणि $2$ असलेल्या रेषा दुसऱ्या कोनात. दोन्ही जोड्यांत slopes मधील फरक $1$ आहे. **दोन्ही कोन समान आहेत का?**`,
    reveal: t`नाही. Slopes $0$ आणि $1$ म्हणजे inclinations $0^\circ$ आणि $45^\circ$, म्हणून त्या रेषा $45^\circ$ मध्ये भेटतात. Slopes $1$ आणि $2$ साठी, $\tan\theta = \frac{2 - 1}{1 + 2 \cdot 1} = \frac{1}{3}$, म्हणून $\theta \approx 18.4^\circ$. कोन $\frac{m_1 - m_2}{1 + m_1 m_2}$ वर अवलंबून आहे, फक्त $m_1 - m_2$ वर नाही.`,
  },
  intuition: [
    t`आठवा: रेषेचा slope म्हणजे तिच्या inclination (कल) $\theta_1$ चा tan, धन $x$-अक्षापासून घड्याळाच्या उलट दिशेने तिचा कोन.`,
    t`दुसऱ्या, कमी तीव्र रेषेचे inclination लहान आहे, $\theta_2$.`,
    t`$P$ वर, जिथे रेषा छेदतात, त्यांच्यामधील कोन $\theta = \theta_1 - \theta_2$ आहे.`,
    t`म्हणून $\tan\theta$ हा $\tan(A - B)$ सूत्रातून येतो, दोन्ही slopes ने लिहिलेला.`,
    t`पण छेदणाऱ्या रेषा दोन कोन करतात, $\theta$ आणि $180^\circ - \theta$, ज्यांचे tan फक्त चिन्हात वेगळे आहेत.`,
    t`**Modulus** (मापांक), म्हणजे चिन्हाशिवाय किंमत, **लघुकोन** निवडते: $90^\circ$ पेक्षा कमी असलेला.`,
  ],
  formal: [
    {
      title: t`कोनाचे सूत्र`,
      points: [
        t`Slopes $m_1$ आणि $m_2$ असलेल्या दोन रेषा घ्या, ज्यांपैकी कोणतीही उभी नाही: उभ्या रेषेला slope नसतो.`,
        t`जिथे त्या छेदतात, तिथे त्या एक लघुकोन $\theta$ करतात.`,
        t`$\tan\theta$ हा $\left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$ इतका आहे.`,
      ],
    },
    {
      title: t`सूत्र कुठून येते`,
      points: [
        t`समजा inclinations $\theta_1$ आणि $\theta_2$ आहेत, म्हणून $m_1 = \tan\theta_1$ आणि $m_2 = \tan\theta_2$.`,
        t`रेषा कोन $\theta_1 - \theta_2$ मध्ये भेटतात, किंवा $180^\circ$ वजा त्या कोनात.`,
        t`$\tan(\theta_1 - \theta_2)$ हा $\frac{\tan\theta_1 - \tan\theta_2}{1 + \tan\theta_1 \tan\theta_2}$ इतका आहे.`,
        t`$\tan\theta_1 = m_1$ आणि $\tan\theta_2 = m_2$ ठेवा: ते $\frac{m_1 - m_2}{1 + m_1 m_2}$ होते.`,
        t`छेदात **अधिक** चिन्ह आहे, जसे $\tan(A - B)$ मध्ये.`,
      ],
    },
    {
      title: t`Modulus का`,
      points: [
        t`आठवा: $\tan(180^\circ - \theta) = -\tan\theta$.`,
        t`Slopes $2$ आणि $-1$ साठी, अपूर्णांक $\frac{2 - (-1)}{1 + (2)(-1)}$ $= -3$ आहे.`,
        t`ऋण अपूर्णांक म्हणजे **विशालकोनाचा**, म्हणजे $90^\circ$ पेक्षा मोठ्या कोनाचा, tan.`,
        t`त्याचे modulus, $3$, म्हणजे लघुकोन $\theta$ चा tan.`,
      ],
    },
    {
      title: t`Perpendicular आणि parallel रेषा`,
      points: [
        t`जर $1 + m_1 m_2 = 0$, तर अपूर्णांक शून्याने भागतो: $\theta = 90^\circ$, आणि रेषा perpendicular (लंब) आहेत.`,
        t`आठवा: त्याचा अर्थ $m_1 m_2 = -1$, perpendicular रेषांची कसोटी.`,
        t`जर $m_1 = m_2$, तर अपूर्णांक $0$ आहे, म्हणून $\theta = 0^\circ$: रेषा parallel (समांतर) आहेत.`,
      ],
    },
    {
      title: t`General form मधील रेषा`,
      points: [
        t`आठवा: रेषा $ax + by + c = 0$, जिथे $b \ne 0$, हिचा slope $-\frac{a}{b}$ आहे.`,
        t`$2x + y - 4 = 0$ साठी तो $-\frac{2}{1} = -2$ आहे: रेषा उजवीकडे उतरते.`,
        t`ऋण चिन्ह ठेवा: $\frac{a}{b} = 2$ चा slope त्याऐवजी चढला असता.`,
        t`कोनाचे सूत्र वापरण्याआधी प्रत्येक slope असाच वाचा.`,
      ],
    },
    {
      title: t`कोनावरून slope`,
      points: [
        t`कधी कधी कोन आणि एक slope दिलेले असतात: इथे $\theta = 45^\circ$ आणि $m_1 = \frac{1}{3}$.`,
        t`दुसरा slope $m$ हा $\left|\frac{m_1 - m}{1 + m_1 m}\right| = \tan\theta$ पूर्ण केला पाहिजे.`,
        t`अपूर्णांक $-\tan\theta$ असू शकतो: ती रेषा म्हणजे दिलेली रेषा $\theta$ घड्याळाच्या उलट दिशेने फिरवलेली.`,
        t`किंवा तो $+\tan\theta$ असू शकतो: ती रेषा म्हणजे दिलेली रेषा $\theta$ घड्याळाच्या दिशेने फिरवलेली.`,
        t`इथे दोन्ही प्रकार $m = 2$ आणि $m = -\frac{1}{2}$ देतात.`,
        t`म्हणून दोन slopes आहेत, आणि दोन रेषा: दोन्ही प्रकार ठेवा.`,
      ],
    },
  ],
  worked: {
    prompt: t`रेषा $x - 2y + 3 = 0$ आणि $3x + y - 5 = 0$ यांमधील लघुकोन शोधा.`,
    steps: [
      t`Slopes, $-\frac{a}{b}$ म्हणून: $m_1 = -\frac{1}{-2} = \frac{1}{2}$ आणि $m_2 = -\frac{3}{1} = -3$.`,
      t`$\frac{m_1 - m_2}{1 + m_1 m_2}$ $= \frac{\frac{1}{2} + 3}{1 - \frac{3}{2}}$ $= \frac{\frac{7}{2}}{-\frac{1}{2}} = -7$.`,
      t`अपूर्णांक ऋण आहे, म्हणून $-7$ हा रेषांमधील विशालकोनाचा tan आहे. Modulus लघुकोन देते: $\tan\theta = 7$.`,
      t`$\theta = \tan^{-1} 7$, सुमारे $81.9^\circ$.`,
    ],
    answer: t`$\theta = \tan^{-1} 7$`,
  },
  remediation: {
    "C09-M1": t`छेदणाऱ्या रेषा दोन कोन करतात, $\theta$ आणि $180^\circ - \theta$, ज्यांचे tan फक्त चिन्हात वेगळे आहेत. लघुकोनासाठी modulus घ्या, आणि $|\ldots| = \tan\theta$ सोडवताना $+$ आणि $-$ दोन्ही प्रकार वापरा: दोन रेषा आहेत.`,
    "C09-M2": t`सूत्र $\tan(\theta_1 - \theta_2) = \frac{\tan\theta_1 - \tan\theta_2}{1 + \tan\theta_1 \tan\theta_2}$ मधून येते, म्हणून छेद $1 + m_1 m_2$ आहे, अधिक चिन्हासह.`,
    "C09-M3": t`$y$ ला कर्ता करा: $by = -ax - c$, म्हणून $ax + by + c = 0$ चा slope $-\frac{a}{b}$ आहे. सूत्रात ठेवण्याआधी त्याचे चिन्ह तपासा.`,
    "C09-M4": t`$\tan 30^\circ = \frac{1}{\sqrt{3}}$ आणि $\tan 60^\circ = \sqrt{3}$. लहान tan म्हणजे लहान लघुकोन.`,
    "C09-M5": t`Slope म्हणजे inclination चा tan, स्वतः कोन नव्हे, आणि $\tan(\theta_1 - \theta_2)$ म्हणजे $\tan\theta_1 - \tan\theta_2$ नव्हे. $m_1 - m_2$ ला $1 + m_1 m_2$ ने भागा.`,
  },
  solutions: {
    "C09-Q1": [
      t`$m_1 = 3$, $m_2 = -2$: $\frac{m_1 - m_2}{1 + m_1 m_2} = \frac{3 - (-2)}{1 + (3)(-2)} = \frac{5}{-5} = -1$.`,
      t`अपूर्णांक ऋण आहे: $-1 = \tan 135^\circ$, रेषांमधील विशालकोन.`,
      t`Modulus लघुकोन देते: $\tan\theta = |-1| = 1$, म्हणून $\theta = 45^\circ$.`,
    ],
    "C09-Q2": [
      t`Slopes, $-\frac{a}{b}$ म्हणून: $m_1 = -\frac{\sqrt{3}}{-1} = \sqrt{3}$ आणि $m_2 = -\frac{1}{-\sqrt{3}} = \frac{1}{\sqrt{3}}$.`,
      t`$\tan\theta = \left|\frac{\sqrt{3} - \frac{1}{\sqrt{3}}}{1 + \sqrt{3} \cdot \frac{1}{\sqrt{3}}}\right| = \frac{\frac{2}{\sqrt{3}}}{2} = \frac{1}{\sqrt{3}}$ आहे.`,
      t`$\tan 30^\circ = \frac{1}{\sqrt{3}}$, म्हणून $\theta = 30^\circ$. तपासणी: inclinations $60^\circ$ आणि $30^\circ$ आहेत.`,
    ],
    "C09-Q3": [
      t`$y = mx + c$ वरून: $m_1 = 2$ आणि $m_2 = 3$.`,
      t`$\frac{m_1 - m_2}{1 + m_1 m_2} = \frac{2 - 3}{1 + 6} = -\frac{1}{7}$ आहे.`,
      t`लघुकोनासाठी modulus घ्या: $\tan\theta = \frac{1}{7}$.`,
    ],
    "C09-Q4": [
      t`समजा $m$ हा दुसरा slope आहे: $\tan 45^\circ = 1 = \left|\frac{\frac{1}{2} - m}{1 + \frac{1}{2}m}\right| = \left|\frac{1 - 2m}{2 + m}\right|$.`,
      t`$\frac{1 - 2m}{2 + m} = 1$ वरून $1 - 2m = 2 + m$, म्हणून $m = -\frac{1}{3}$. $\frac{1 - 2m}{2 + m} = -1$ वरून $1 - 2m = -2 - m$, म्हणून $m = 3$.`,
      t`दोन्ही प्रकार चालतात: दुसऱ्या रेषेचा slope $3$ किंवा $-\frac{1}{3}$ आहे.`,
    ],
    "C09-Q5": [
      t`$3x - y = 6$ चा slope $3$ आहे. Slope $m$ असलेल्या हव्या रेषेसाठी: $\tan 45^\circ = 1 = \left|\frac{m - 3}{1 + 3m}\right|$.`,
      t`$m - 3 = 1 + 3m$ वरून $m = -2$; $m - 3 = -(1 + 3m)$ वरून $m = \frac{1}{2}$.`,
      t`Origin मधून: $y = -2x$ आणि $y = \frac{1}{2}x$, म्हणजे $2x + y = 0$ आणि $x - 2y = 0$.`,
    ],
    "C09-Q6": [
      t`समजा $m$ हा दुसरा slope आहे: $\tan 45^\circ = 1 = \left|\frac{2 - m}{1 + 2m}\right|$.`,
      t`$2 - m = 1 + 2m$ वरून $m = \frac{1}{3}$; $2 - m = -(1 + 2m)$ वरून $m = -3$.`,
      t`$M(2, 3)$ मधून: $y - 3 = \frac{1}{3}(x - 2)$, म्हणजे $x - 3y + 7 = 0$, किंवा $y - 3 = -3(x - 2)$, म्हणजे $3x + y - 9 = 0$.`,
    ],
  },
};
