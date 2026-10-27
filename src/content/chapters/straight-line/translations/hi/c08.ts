import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c08: ConceptTranslation = {
  id: "C08",
  lang: "hi",
  status: "approved",
  source: "0bfb66867e00da",
  hook: {
    prompt: t`$A(4, 12)$, $B(2, 2)$, $C(22, 2)$ वाले $\triangle ABC$ में, $A$ से median और $A$ से altitude दोनों $A$ से नीचे भुजा $BC$ तक जाते हैं। **क्या वे एक ही रेखा हैं?**`,
    reveal: t`नहीं। Median, $BC$ के मध्यबिंदु $D(12, 2)$ पर ख़त्म होता है। Altitude, $BC$ से समकोण पर मिलता है: $BC$ क्षैतिज है, इसलिए altitude ऊर्ध्वाधर रेखा $x = 4$ है, जो $(4, 2)$ पर पहुँचता है। वे तभी एक होते हैं जब $AB = AC$।`,
  },
  intuition: [
    t`$\triangle ABC$ में, हर कोना एक **vertex** (शीर्ष) है, और शीर्ष के सामने की भुजा उसकी **सम्मुख भुजा** है।`,
    t`त्रिभुज की हर विशेष रेखा एक बिंदु और एक दिशा से, या दो बिंदुओं से, तय होती है।`,
    t`**Median** (माध्यिका) शीर्ष को सम्मुख भुजा के **मध्यबिंदु**, यानी उसके ठीक आधे पर के बिंदु, से जोड़ती है।`,
    t`**Altitude** (शीर्षलंब) शीर्ष से सम्मुख भुजा तक जाता है, उससे समकोण पर मिलते हुए।`,
    t`किसी भुजा का **perpendicular bisector** (लंब समद्विभाजक) उसके मध्यबिंदु से होकर, भुजा से समकोण पर जाता है।`,
    t`दो altitudes **orthocentre** (लंबकेंद्र) पर मिलते हैं; दो perpendicular bisectors **circumcentre** (परिकेंद्र) पर मिलते हैं।`,
  ],
  formal: [
    {
      title: t`किसी बिंदु से होकर parallel`,
      points: [
        t`एक बिंदु $P(x_1, y_1)$ और slope $m$ की एक दी गई रेखा लीजिए।`,
        t`याद कीजिए: parallel (समांतर) रेखाओं के slopes बराबर होते हैं।`,
        t`इसलिए $P$ से होकर parallel का slope वही $m$ है: यहाँ $\frac{1}{2}$।`,
        t`Point–slope form से, यह $y - y_1 = m(x - x_1)$ है।`,
      ],
    },
    {
      title: t`किसी बिंदु से होकर perpendicular`,
      points: [
        t`याद कीजिए: दो रेखाएँ perpendicular (लंब) होती हैं जब उनके slopes का गुणनफल $-1$ हो।`,
        t`इसलिए slope $m$ की रेखा पर perpendicular का slope $-\frac{1}{m}$ है, $m$ का **ऋणात्मक व्युत्क्रम**।`,
        t`इसे पाने के लिए, $m$ को उलटिए और उसका चिह्न बदलिए: $\frac{1}{2}$ बनता है $-2$।`,
        t`$P(x_1, y_1)$ से होकर, perpendicular $y - y_1 = -\frac{1}{m}(x - x_1)$ है।`,
      ],
    },
    {
      title: t`ऊर्ध्वाधर और क्षैतिज रेखाएँ`,
      points: [
        t`ऊर्ध्वाधर रेखा का कोई slope नहीं, इसलिए उसके लिए $-\frac{1}{m}$ नहीं लगाया जा सकता।`,
        t`ऊर्ध्वाधर रेखा पर perpendicular क्षैतिज होता है: $P(x_1, y_1)$ से होकर, यह $y = y_1$ है।`,
        t`क्षैतिज रेखा का slope $0$ है, और $-\frac{1}{0}$ भी परिभाषित नहीं।`,
        t`क्षैतिज रेखा पर perpendicular ऊर्ध्वाधर होता है: $P(x_1, y_1)$ से होकर, यह $x = x_1$ है।`,
      ],
    },
    {
      title: t`Foot of the perpendicular (लंब का पाद)`,
      points: [
        t`एक रेखा और एक बिंदु $P$ लीजिए जो उस पर नहीं है।`,
        t`$P$ से perpendicular रेखा से $F$ पर मिलता है, जो **foot of the perpendicular** है।`,
        t`$F$ पाने के लिए, पहले $P$ से होकर perpendicular लिखिए: इसका slope $-\frac{1}{m}$ है।`,
        t`फिर इसे रेखा के समीकरण के साथ हल कीजिए: उनका साझा हल $F$ है।`,
      ],
    },
    {
      title: t`शीर्ष A से रेखाएँ`,
      points: [
        t`मान लीजिए $D$, $BC$ का मध्यबिंदु है, और $m_{BC}$, $BC$ का slope।`,
        t`Median $AD$, $A$ और $D$ से होकर जाता है: two-point form लगाइए।`,
        t`$A$ से altitude, $A$ से होकर जाता है, slope $-\frac{1}{m_{BC}}$ के साथ।`,
        t`$BC$ का perpendicular bisector, $D$ से होकर जाता है, उसी slope $-\frac{1}{m_{BC}}$ के साथ।`,
        t`इसलिए altitude और perpendicular bisector parallel हैं।`,
        t`तीनों एक ही रेखा तभी हैं जब $AB = AC$।`,
      ],
    },
    {
      title: t`Altitudes कहाँ मिलते हैं`,
      points: [
        t`त्रिभुज के तीनों altitudes हमेशा एक ही बिंदु से होकर जाते हैं।`,
        t`वह बिंदु **orthocentre** $H$ है।`,
        t`$H$ पाने के लिए, दो altitudes के समीकरण लिखिए और उन्हें एक साथ हल कीजिए।`,
      ],
    },
    {
      title: t`Perpendicular bisectors कहाँ मिलते हैं`,
      points: [
        t`भुजाओं के तीनों perpendicular bisectors हमेशा एक ही बिंदु से होकर जाते हैं।`,
        t`वह बिंदु **circumcentre** $S$ है।`,
        t`यह $A$, $B$ और $C$ से बराबर दूरी पर है।`,
        t`इसलिए $S$ पर केंद्रित, $A$ से होकर जाने वाला वृत्त $B$ और $C$ से भी होकर जाता है।`,
        t`$S$ पाने के लिए, दो perpendicular bisectors के समीकरण एक साथ हल कीजिए।`,
      ],
    },
    {
      title: t`Medians कहाँ मिलती हैं`,
      points: [
        t`त्रिभुज की तीनों medians एक ही बिंदु से होकर जाती हैं, **centroid** (केंद्रक) $G$।`,
        t`शीर्षों को $(x_1, y_1)$, $(x_2, y_2)$ और $(x_3, y_3)$ लीजिए।`,
        t`$G$ का $x$-निर्देशांक $\frac{x_1 + x_2 + x_3}{3}$ है, तीनों का औसत।`,
        t`इसका $y$-निर्देशांक $\frac{y_1 + y_2 + y_3}{3}$ है।`,
        t`यहाँ $x = \frac{1 + 3 + 13}{3} = \frac{17}{3}$ और $y = \frac{8 + 1 + 6}{3} = 5$।`,
      ],
    },
  ],
  worked: {
    prompt: t`$P(3, 5)$ से रेखा $x - 2y + 2 = 0$ पर foot of the perpendicular ज्ञात कीजिए।`,
    steps: [
      t`रेखा $y = \frac{1}{2}x + 1$ है, इसलिए इसका slope $m = \frac{1}{2}$ है।`,
      t`$P$ से perpendicular का slope $-\frac{1}{m} = -2$ है: $y - 5 = -2(x - 3)$, यानी $2x + y - 11 = 0$।`,
      t`रेखा के साथ हल कीजिए: $y = 11 - 2x$ से $x - 2(11 - 2x) + 2 = 0$ मिलता है, इसलिए $5x = 20$, $x = 4$ और $y = 3$।`,
    ],
    answer: t`Foot of the perpendicular $(4, 3)$ है।`,
  },
  remediation: {
    "C08-M1": t`Perpendicular slope ऋणात्मक व्युत्क्रम है, $-\frac{1}{m}$, इसलिए दोनों slopes का गुणनफल $-1$ है। केवल चिह्न बदलने से ऐसी रेखा मिलती है जो न parallel है न perpendicular।`,
    "C08-M2": t`उलटिए **और** चिह्न बदलिए: perpendicular slope $-\frac{1}{m}$ है। Slopes $m$ और $\frac{1}{m}$ का गुणनफल $+1$ है, $-1$ नहीं।`,
    "C08-M3": t`बराबर slopes से parallel रेखा बनती है। Slope $m$ की रेखा पर perpendicular रेखा का slope $-\frac{1}{m}$ है।`,
    "C08-M4": t`Median शीर्ष से सम्मुख भुजा के **मध्यबिंदु** तक जाती है। Altitude शीर्ष से सम्मुख भुजा तक **समकोण** पर जाता है। वे एक ही रेखा तभी हैं जब उस शीर्ष पर की दोनों भुजाएँ बराबर हों।`,
    "C08-M5": t`$BC$ का perpendicular bisector, $BC$ के मध्यबिंदु से समकोण पर जाता है, और आमतौर पर $A$ से नहीं गुज़रता। $A$ से रेखा को $A$ से होकर जाना चाहिए: median के लिए मध्यबिंदु तक, altitude के लिए समकोण पर।`,
    "C08-M6": t`$(x_1, y_1)$ और $(x_2, y_2)$ का मध्यबिंदु $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$ है: जोड़िए, फिर आधा कीजिए।`,
  },
  solutions: {
    "C08-Q1": [
      t`रेखा $3x + y = 3$, $y = -3x + 3$ है, इसलिए इसका slope $m = -3$ है।`,
      t`Perpendicular का slope $-\frac{1}{m} = \frac{1}{3}$ है। $(2, 2)$ से होकर: $y - 2 = \frac{1}{3}(x - 2)$, इसलिए $y = \frac{1}{3}x + \frac{4}{3}$।`,
      t`$x = 0$ रखिए: $y$-intercept $\frac{4}{3}$ है।`,
    ],
    "C08-Q2": [
      t`मान लीजिए $M(-2, 9)$ पाद है। Slope $OM = \frac{9 - 0}{-2 - 0} = -\frac{9}{2}$।`,
      t`रेखा $OM$ पर perpendicular है, इसलिए इसका slope $-\frac{1}{m} = \frac{2}{9}$ है, और यह $M(-2, 9)$ से होकर जाती है।`,
      t`$y - 9 = \frac{2}{9}(x + 2)$, इसलिए $9y - 81 = 2x + 4$: रेखा $2x - 9y + 85 = 0$ है।`,
    ],
    "C08-Q3": [
      t`$E$, $AC$ का मध्यबिंदु है: $E = \left(\frac{1 + 2}{2}, \frac{-2 - 5}{2}\right) = \left(\frac{3}{2}, -\frac{7}{2}\right)$।`,
      t`Slope $BE = \frac{-\frac{7}{2} - 3}{\frac{3}{2} + 2} = \frac{-\frac{13}{2}}{\frac{7}{2}} = -\frac{13}{7}$ है।`,
      t`$B(-2, 3)$ से होकर: $y - 3 = -\frac{13}{7}(x + 2)$, इसलिए $7y - 21 = -13x - 26$: median $13x + 7y + 5 = 0$ है।`,
    ],
    "C08-Q4": [
      t`$B$ से होकर altitude सम्मुख भुजा $AC$ पर perpendicular है। Slope $AC = \frac{-3 - 5}{-4 - 2} = \frac{4}{3}$।`,
      t`इसलिए altitude का slope $-\frac{1}{m} = -\frac{3}{4}$ है, और यह $B(6, -1)$ से होकर जाता है।`,
      t`$y + 1 = -\frac{3}{4}(x - 6)$, इसलिए $4y + 4 = -3x + 18$: altitude $3x + 4y - 14 = 0$ है।`,
    ],
    "C08-Q5": [
      t`$A$ से altitude: slope $BC = \frac{2 - 6}{-1 - 7} = \frac{1}{2}$, इसलिए altitude का slope $-2$ है: $y + 2 = -2(x - 3)$, यानी $2x + y - 4 = 0$।`,
      t`$B$ से altitude: slope $AC = \frac{2 + 2}{-1 - 3} = -1$, इसलिए altitude का slope $1$ है: $y - 6 = x - 7$, यानी $x - y - 1 = 0$।`,
      t`हल कीजिए: $2x + y - 4 = 0$ में $y = x - 1$ रखने से $3x = 5$ मिलता है, इसलिए $x = \frac{5}{3}$ और $y = \frac{2}{3}$। Orthocentre $\left(\frac{5}{3}, \frac{2}{3}\right)$ है।`,
    ],
    "C08-Q6": [
      t`$AB$ का perpendicular bisector: मध्यबिंदु $(2, 1)$; slope $AB = \frac{-1 - 3}{6 + 2} = -\frac{1}{2}$, इसलिए bisector का slope $2$ है: $y - 1 = 2(x - 2)$, यानी $y = 2x - 3$।`,
      t`$AC$ का perpendicular bisector: मध्यबिंदु $\left(-\frac{1}{2}, \frac{7}{2}\right)$; slope $AC = \frac{4 - 3}{1 + 2} = \frac{1}{3}$, इसलिए bisector का slope $-3$ है: $y - \frac{7}{2} = -3\left(x + \frac{1}{2}\right)$, यानी $y = -3x + 2$।`,
      t`$2x - 3 = -3x + 2$ हल कीजिए: $x = 1$, $y = -1$। Circumcentre $(1, -1)$ है; यह हर शीर्ष से $5$ दूर है।`,
    ],
  },
};
