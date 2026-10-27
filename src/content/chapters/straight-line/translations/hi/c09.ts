import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c09: ConceptTranslation = {
  id: "C09",
  lang: "hi",
  status: "approved",
  source: "154a6872acbb8e",
  hook: {
    prompt: t`Slopes $0$ और $1$ वाली रेखाएँ एक कोण पर मिलती हैं; slopes $1$ और $2$ वाली रेखाएँ दूसरे कोण पर। दोनों जोड़ियों में slopes का अंतर $1$ है। **क्या दोनों कोण बराबर हैं?**`,
    reveal: t`नहीं। Slopes $0$ और $1$ का अर्थ inclinations $0^\circ$ और $45^\circ$ है, इसलिए वे रेखाएँ $45^\circ$ पर मिलती हैं। Slopes $1$ और $2$ के लिए, $\tan\theta = \frac{2 - 1}{1 + 2 \cdot 1} = \frac{1}{3}$, इसलिए $\theta \approx 18.4^\circ$। कोण $\frac{m_1 - m_2}{1 + m_1 m_2}$ पर निर्भर है, केवल $m_1 - m_2$ पर नहीं।`,
  },
  intuition: [
    t`याद कीजिए: रेखा का slope उसके inclination (झुकाव) $\theta_1$ का tan है, धनात्मक $x$-अक्ष से वामावर्त उसका कोण।`,
    t`दूसरी, कम खड़ी रेखा का inclination छोटा है, $\theta_2$।`,
    t`$P$ पर, जहाँ रेखाएँ कटती हैं, उनके बीच का कोण $\theta = \theta_1 - \theta_2$ है।`,
    t`इसलिए $\tan\theta$, $\tan(A - B)$ सूत्र से आता है, दोनों slopes से लिखा हुआ।`,
    t`पर कटती रेखाएँ दो कोण बनाती हैं, $\theta$ और $180^\circ - \theta$, जिनके tan केवल चिह्न में अलग हैं।`,
    t`**Modulus** (मापांक), यानी बिना चिह्न का मान, **न्यून** कोण चुनता है: वह जो $90^\circ$ से कम है।`,
  ],
  formal: [
    {
      title: t`कोण का सूत्र`,
      points: [
        t`Slopes $m_1$ और $m_2$ वाली दो रेखाएँ लीजिए, जिनमें से कोई ऊर्ध्वाधर नहीं: ऊर्ध्वाधर रेखा का कोई slope नहीं होता।`,
        t`जहाँ वे कटती हैं, वहाँ वे एक न्यून कोण $\theta$ बनाती हैं।`,
        t`$\tan\theta$ बराबर है $\left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$ के।`,
      ],
    },
    {
      title: t`सूत्र कहाँ से आता है`,
      points: [
        t`मान लीजिए inclinations $\theta_1$ और $\theta_2$ हैं, इसलिए $m_1 = \tan\theta_1$ और $m_2 = \tan\theta_2$।`,
        t`रेखाएँ कोण $\theta_1 - \theta_2$ पर मिलती हैं, या $180^\circ$ घटा उस पर।`,
        t`$\tan(\theta_1 - \theta_2)$ बराबर है $\frac{\tan\theta_1 - \tan\theta_2}{1 + \tan\theta_1 \tan\theta_2}$ के।`,
        t`$\tan\theta_1 = m_1$ और $\tan\theta_2 = m_2$ रखिए: यह $\frac{m_1 - m_2}{1 + m_1 m_2}$ बनता है।`,
        t`हर में **धन** चिह्न है, जैसा $\tan(A - B)$ में।`,
      ],
    },
    {
      title: t`Modulus क्यों`,
      points: [
        t`याद कीजिए: $\tan(180^\circ - \theta) = -\tan\theta$।`,
        t`Slopes $2$ और $-1$ के लिए, भिन्न $\frac{2 - (-1)}{1 + (2)(-1)}$ $= -3$ है।`,
        t`ऋणात्मक भिन्न **अधिक** कोण, यानी $90^\circ$ से बड़े कोण, का tan है।`,
        t`इसका modulus, $3$, न्यून कोण $\theta$ का tan है।`,
      ],
    },
    {
      title: t`Perpendicular और parallel रेखाएँ`,
      points: [
        t`यदि $1 + m_1 m_2 = 0$, तो भिन्न शून्य से भाग देता है: $\theta = 90^\circ$, और रेखाएँ perpendicular (लंब) हैं।`,
        t`याद कीजिए: इसका अर्थ है $m_1 m_2 = -1$, perpendicular रेखाओं की जाँच।`,
        t`यदि $m_1 = m_2$, तो भिन्न $0$ है, इसलिए $\theta = 0^\circ$: रेखाएँ parallel (समांतर) हैं।`,
      ],
    },
    {
      title: t`General form में रेखाएँ`,
      points: [
        t`याद कीजिए: रेखा $ax + by + c = 0$, जहाँ $b \ne 0$, का slope $-\frac{a}{b}$ है।`,
        t`$2x + y - 4 = 0$ के लिए यह $-\frac{2}{1} = -2$ है: रेखा दाईं ओर गिरती है।`,
        t`ऋण चिह्न रखिए: $\frac{a}{b} = 2$ का slope इसके बजाय चढ़ता।`,
        t`कोण का सूत्र लगाने से पहले हर slope इसी तरह पढ़िए।`,
      ],
    },
    {
      title: t`कोण से slope`,
      points: [
        t`कभी-कभी कोण और एक slope दिए होते हैं: यहाँ $\theta = 45^\circ$ और $m_1 = \frac{1}{3}$।`,
        t`दूसरा slope $m$, $\left|\frac{m_1 - m}{1 + m_1 m}\right| = \tan\theta$ को संतुष्ट करना चाहिए।`,
        t`भिन्न $-\tan\theta$ हो सकता है: वह रेखा दी गई रेखा को $\theta$ वामावर्त घुमाने पर मिलती है।`,
        t`या यह $+\tan\theta$ हो सकता है: वह रेखा दी गई रेखा को $\theta$ दक्षिणावर्त घुमाने पर मिलती है।`,
        t`यहाँ दोनों स्थितियाँ $m = 2$ और $m = -\frac{1}{2}$ देती हैं।`,
        t`इसलिए दो slopes हैं, और दो रेखाएँ: दोनों स्थितियाँ रखिए।`,
      ],
    },
  ],
  worked: {
    prompt: t`रेखाओं $x - 2y + 3 = 0$ और $3x + y - 5 = 0$ के बीच का न्यून कोण ज्ञात कीजिए।`,
    steps: [
      t`Slopes, $-\frac{a}{b}$ के रूप में: $m_1 = -\frac{1}{-2} = \frac{1}{2}$ और $m_2 = -\frac{3}{1} = -3$।`,
      t`$\frac{m_1 - m_2}{1 + m_1 m_2}$ $= \frac{\frac{1}{2} + 3}{1 - \frac{3}{2}}$ $= \frac{\frac{7}{2}}{-\frac{1}{2}} = -7$।`,
      t`भिन्न ऋणात्मक है, इसलिए $-7$ रेखाओं के बीच के अधिक कोण का tan है। Modulus न्यून कोण देता है: $\tan\theta = 7$।`,
      t`$\theta = \tan^{-1} 7$, लगभग $81.9^\circ$।`,
    ],
    answer: t`$\theta = \tan^{-1} 7$`,
  },
  remediation: {
    "C09-M1": t`कटती रेखाएँ दो कोण बनाती हैं, $\theta$ और $180^\circ - \theta$, जिनके tan केवल चिह्न में अलग हैं। न्यून कोण के लिए modulus लीजिए, और जब $|\ldots| = \tan\theta$ हल करें, तो $+$ और $-$ दोनों स्थितियाँ लीजिए: दो रेखाएँ हैं।`,
    "C09-M2": t`सूत्र $\tan(\theta_1 - \theta_2) = \frac{\tan\theta_1 - \tan\theta_2}{1 + \tan\theta_1 \tan\theta_2}$ से आता है, इसलिए हर $1 + m_1 m_2$ है, धन चिह्न के साथ।`,
    "C09-M3": t`$y$ को विषय बनाइए: $by = -ax - c$, इसलिए $ax + by + c = 0$ का slope $-\frac{a}{b}$ है। सूत्र में रखने से पहले इसका चिह्न जाँचिए।`,
    "C09-M4": t`$\tan 30^\circ = \frac{1}{\sqrt{3}}$ और $\tan 60^\circ = \sqrt{3}$। छोटे tan का अर्थ छोटा न्यून कोण है।`,
    "C09-M5": t`Slope किसी inclination का tan है, स्वयं कोण नहीं, और $\tan(\theta_1 - \theta_2)$, $\tan\theta_1 - \tan\theta_2$ नहीं है। $m_1 - m_2$ को $1 + m_1 m_2$ से भाग दीजिए।`,
  },
  solutions: {
    "C09-Q1": [
      t`$m_1 = 3$, $m_2 = -2$: $\frac{m_1 - m_2}{1 + m_1 m_2} = \frac{3 - (-2)}{1 + (3)(-2)} = \frac{5}{-5} = -1$।`,
      t`भिन्न ऋणात्मक है: $-1 = \tan 135^\circ$, रेखाओं के बीच का अधिक कोण।`,
      t`Modulus न्यून कोण देता है: $\tan\theta = |-1| = 1$, इसलिए $\theta = 45^\circ$।`,
    ],
    "C09-Q2": [
      t`Slopes, $-\frac{a}{b}$ के रूप में: $m_1 = -\frac{\sqrt{3}}{-1} = \sqrt{3}$ और $m_2 = -\frac{1}{-\sqrt{3}} = \frac{1}{\sqrt{3}}$।`,
      t`$\tan\theta = \left|\frac{\sqrt{3} - \frac{1}{\sqrt{3}}}{1 + \sqrt{3} \cdot \frac{1}{\sqrt{3}}}\right| = \frac{\frac{2}{\sqrt{3}}}{2} = \frac{1}{\sqrt{3}}$ है।`,
      t`$\tan 30^\circ = \frac{1}{\sqrt{3}}$, इसलिए $\theta = 30^\circ$। जाँच: inclinations $60^\circ$ और $30^\circ$ हैं।`,
    ],
    "C09-Q3": [
      t`$y = mx + c$ से: $m_1 = 2$ और $m_2 = 3$।`,
      t`$\frac{m_1 - m_2}{1 + m_1 m_2} = \frac{2 - 3}{1 + 6} = -\frac{1}{7}$ है।`,
      t`न्यून कोण के लिए modulus लीजिए: $\tan\theta = \frac{1}{7}$।`,
    ],
    "C09-Q4": [
      t`मान लीजिए $m$ दूसरा slope है: $\tan 45^\circ = 1 = \left|\frac{\frac{1}{2} - m}{1 + \frac{1}{2}m}\right| = \left|\frac{1 - 2m}{2 + m}\right|$।`,
      t`$\frac{1 - 2m}{2 + m} = 1$ से $1 - 2m = 2 + m$ मिलता है, इसलिए $m = -\frac{1}{3}$। $\frac{1 - 2m}{2 + m} = -1$ से $1 - 2m = -2 - m$ मिलता है, इसलिए $m = 3$।`,
      t`दोनों स्थितियाँ चलती हैं: दूसरी रेखा का slope $3$ या $-\frac{1}{3}$ है।`,
    ],
    "C09-Q5": [
      t`$3x - y = 6$ का slope $3$ है। Slope $m$ की अभीष्ट रेखा के लिए: $\tan 45^\circ = 1 = \left|\frac{m - 3}{1 + 3m}\right|$।`,
      t`$m - 3 = 1 + 3m$ से $m = -2$ मिलता है; $m - 3 = -(1 + 3m)$ से $m = \frac{1}{2}$।`,
      t`Origin से होकर: $y = -2x$ और $y = \frac{1}{2}x$, यानी $2x + y = 0$ और $x - 2y = 0$।`,
    ],
    "C09-Q6": [
      t`मान लीजिए $m$ दूसरा slope है: $\tan 45^\circ = 1 = \left|\frac{2 - m}{1 + 2m}\right|$।`,
      t`$2 - m = 1 + 2m$ से $m = \frac{1}{3}$ मिलता है; $2 - m = -(1 + 2m)$ से $m = -3$।`,
      t`$M(2, 3)$ से होकर: $y - 3 = \frac{1}{3}(x - 2)$, यानी $x - 3y + 7 = 0$, या $y - 3 = -3(x - 2)$, यानी $3x + y - 9 = 0$।`,
    ],
  },
};
