import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c01: ConceptTranslation = {
  id: "C01",
  lang: "hi",
  status: "approved",
  source: "1e66e04640fa7f",
  hook: {
    prompt: t`एक पहिये की एक spoke को $750^\circ$ anticlockwise घुमाया गया। वैसे ही दूसरे पहिये पर उसी spoke को $330^\circ$ clockwise घुमाया गया। **क्या दोनों spokes आख़िर में एक ही दिशा में रुकती हैं?**`,
    reveal: t`हाँ। $750^\circ = 2 \times 360^\circ + 30^\circ$, और दो पूरे चक्कर कुछ नहीं बदलते, इसलिए पहली spoke $30^\circ$ पर रुकती है। Clockwise घुमाव ऋणात्मक होता है: $-330^\circ$, और $-330^\circ + 360^\circ = 30^\circ$। दोनों $30^\circ$ पर रुकती हैं: ये angles **co-terminal** हैं।`,
  },
  intuition: [
    t`**ray** (किरण) एक आधी रेखा है: यह एक बिंदु से शुरू होकर एक दिशा में बिना रुके चलती जाती है।`,
    t`Angle को एक ray का अपने शुरुआती बिंदु के चारों ओर **घुमाव** (turn) समझिए।`,
    t`एक ray $OA$ लीजिए: घूमने से पहले, जहाँ से वह शुरू होती है, वह **initial arm** (प्रारंभिक भुजा) है।`,
    t`उसे $O$ के चारों ओर तब तक घुमाइए जब तक वह $OB$ पर न आ जाए: जहाँ वह रुकती है, $OB$, वह **terminal arm** (अंतिम भुजा) है।`,
    t`यह ray **anticlockwise** घूमी, यानी घड़ी की सुइयों की उलटी दिशा में।`,
    t`Ray **clockwise** भी घूम सकती है, उसी दिशा में जिसमें घड़ी की सुइयाँ चलती हैं।`,
  ],
  formal: [
    {
      title: t`Directed angle (दिशा वाला कोण)`,
      points: [
        t`जो angle अपने घूमने की दिशा के साथ मापा जाए, वह **directed angle** है।`,
        t`उसका आकार बताता है कि arm कितना घूमा।`,
        t`उसका चिह्न (+ या −) बताता है कि arm किस ओर घूमा।`,
        t`Anticlockwise घुमाव धनात्मक होते हैं: $60^\circ$ यानी $60^\circ$ anticlockwise घुमाव।`,
        t`Clockwise घुमाव ऋणात्मक होते हैं: $-60^\circ$ यानी उतना ही घुमाव clockwise।`,
        t`दोनों अलग-अलग arms पर रुकते हैं।`,
      ],
    },
    {
      title: t`Standard position (मानक स्थिति)`,
      points: [
        t`Angle **standard position** में तब होता है जब उसका शीर्ष origin $O$ पर हो और उसका initial arm धनात्मक $x$-अक्ष पर हो।`,
        t`दोनों अक्ष समतल को चार **quadrants** (चतुर्थांश), I से IV, में बाँटते हैं।`,
        t`Angle उस quadrant में होता है जिसमें उसका terminal arm हो।`,
      ],
    },
    {
      title: t`Angle का quadrant`,
      points: [
        t`$0^\circ$ और $90^\circ$ के बीच, terminal arm Quadrant I में होता है।`,
        t`$90^\circ$ और $180^\circ$ के बीच, वह Quadrant II में होता है।`,
        t`$180^\circ$ और $270^\circ$ के बीच, वह Quadrant III में होता है।`,
        t`$270^\circ$ और $360^\circ$ के बीच, वह Quadrant IV में होता है।`,
        t`इसलिए $130^\circ$, जो $90^\circ$ और $180^\circ$ के बीच है, Quadrant II में है।`,
      ],
    },
    {
      title: t`Quadrantal angles (अक्षीय कोण)`,
      points: [
        t`जब terminal arm किसी अक्ष पर हो, तो वह किसी quadrant में नहीं होता: ऐसा angle **quadrantal angle** कहलाता है।`,
        t`$90^\circ$ धनात्मक $y$-अक्ष पर रुकता है।`,
        t`$180^\circ$ ऋणात्मक $x$-अक्ष पर रुकता है।`,
        t`$270^\circ$ ऋणात्मक $y$-अक्ष पर रुकता है।`,
        t`$0^\circ$ और $360^\circ$ धनात्मक $x$-अक्ष पर रुकते हैं।`,
      ],
    },
    {
      title: t`Co-terminal angles (सह-अंतिम कोण)`,
      points: [
        t`जिन angles का initial arm भी एक हो और terminal arm भी एक हो, वे **co-terminal** (सह-अंतिम) हैं।`,
        t`एक पूरा चक्कर, $360^\circ$, arm को वहीं वापस ले आता है जहाँ से वह चला था।`,
        t`इसलिए co-terminal angles में पूरे चक्करों का अंतर होता है: $\theta$ और $\theta + n \times 360^\circ$, जहाँ $n$ कोई भी पूर्णांक है।`,
        t`उदाहरण के लिए, $30^\circ$ और $390^\circ = 30^\circ + 360^\circ$ co-terminal हैं।`,
        t`$-330^\circ = 30^\circ - 360^\circ$ भी: तीनों एक ही arm पर रुकते हैं।`,
      ],
    },
    {
      title: t`आधे चक्कर का अंतर`,
      points: [
        t`$100^\circ$ और $280^\circ$ में $180^\circ$ का, यानी आधे चक्कर का, अंतर है।`,
        t`इनके arms उलटी दिशाओं में हैं, इसलिए ये co-terminal नहीं हैं।`,
      ],
    },
    {
      title: t`बड़े या ऋणात्मक angles`,
      points: [
        t`कोई बड़ा या ऋणात्मक angle कहाँ रुकता है, यह देखने के लिए उसमें $360^\circ$ जोड़िए या घटाइए, जब तक वह $0^\circ$ और $360^\circ$ के बीच न आ जाए।`,
        t`जिस angle पर आप पहुँचते हैं, वह **smallest positive co-terminal angle** (सबसे छोटा धनात्मक co-terminal angle) है।`,
        t`मूल angle उसी quadrant में होता है जिसमें यह angle।`,
        t`उदाहरण के लिए, $400^\circ - 360^\circ = 40^\circ$, इसलिए $400^\circ$ Quadrant I में है।`,
        t`और $-200^\circ + 360^\circ = 160^\circ$, इसलिए $-200^\circ$ Quadrant II में है।`,
      ],
    },
  ],
  worked: {
    prompt: t`$-820^\circ$ के साथ co-terminal सबसे छोटा धनात्मक angle ज्ञात कीजिए, और $-820^\circ$ का quadrant भी।`,
    steps: [
      t`$-820^\circ$ ऋणात्मक है, इसलिए arm clockwise घूमता है: दो पूरे चक्कर ($720^\circ$) और $100^\circ$ और।`,
      t`Angle धनात्मक होने तक पूरे चक्कर जोड़िए। तीन चक्कर $3 \times 360^\circ = 1080^\circ$ हैं, और $-820^\circ + 1080^\circ = 260^\circ$।`,
      t`$180^\circ < 260^\circ < 270^\circ$, इसलिए terminal arm Quadrant III में है।`,
    ],
    answer: t`सबसे छोटा धनात्मक co-terminal angle $260^\circ$ है, और $-820^\circ$ Quadrant III में है।`,
  },
  remediation: {
    "C01-M1": t`ऋण चिह्न का अर्थ है clockwise: $-\alpha$, $\alpha$ से अलग arm पर रुकता है, $x$-अक्ष में उसका दर्पण-प्रतिबिंब। सही दिशा में घुमाइए, या ऋणात्मक angle में $360^\circ$ तब तक जोड़िए जब तक वह धनात्मक न हो जाए।`,
    "C01-M2": t`केवल पूरा चक्कर, $360^\circ$, arm को वहीं वापस लाता है जहाँ वह था; आधा चक्कर, $180^\circ$, उसे उलटी दिशा में कर देता है। $360^\circ$ के गुणज जोड़िए या घटाइए।`,
    "C01-M3": t`Standard position में initial arm धनात्मक $x$-अक्ष पर होता है, घड़ी की तरह $y$-अक्ष पर ऊपर नहीं। हर घुमाव वहीं से शुरू कीजिए।`,
    "C01-M4": t`Co-terminal angles में पूरे चक्करों की कोई भी संख्या का अंतर हो सकता है: $360^\circ$, $720^\circ$, $1080^\circ$, इत्यादि। Angle के $0^\circ$ और $360^\circ$ के बीच आने तक $360^\circ$ घटाते रहिए।`,
    "C01-M5": t`$k$ पूरे समकोण arm को एक अक्ष तक लाते हैं; बचा हुआ हिस्सा उसे अगले quadrant में ले जाता है। इसलिए $k$ समकोण और थोड़ा और यानी quadrant $k + 1$: $180^\circ$ और $270^\circ$ के बीच Quadrant III है।`,
    "C01-M6": t`अगले पूरे चक्कर से पीछे गिनने पर दिशा बनी रहती है। जो angle पूरे चक्करों से $\alpha$ कम हो, वह शुरुआत से $\alpha$ clockwise, यानी $-\alpha$ पर रुकता है, $\alpha$ पर नहीं: $945^\circ = 1080^\circ - 135^\circ$, $-135^\circ$ पर रुकता है, और $-135^\circ + 360^\circ = 225^\circ$। आसान तरीका: angle के $0^\circ$ और $360^\circ$ के बीच आने तक पूरे चक्कर घटाइए।`,
  },
  solutions: {
    "C01-Q1": [
      t`$-140^\circ$ ऋणात्मक है, इसलिए arm धनात्मक $x$-अक्ष से $140^\circ$ **clockwise** घूमता है।`,
      t`Clockwise चलने पर, $-90^\circ$ ऋणात्मक $y$-अक्ष है और $-180^\circ$ ऋणात्मक $x$-अक्ष। $-140^\circ$ इन दोनों के बीच रुकता है।`,
      t`जाँच: $-140^\circ + 360^\circ = 220^\circ$, जो $180^\circ$ और $270^\circ$ के बीच है। Terminal arm **Quadrant III** में है।`,
    ],
    "C01-Q2": [
      t`Co-terminal angles में $360^\circ$ के पूरे चक्करों का अंतर होता है। $945 = 2 \times 360 + 225$: दो पूरे चक्कर और $225^\circ$ और।`,
      t`दोनों चक्कर घटाइए: $945^\circ - 720^\circ = 225^\circ$। केवल एक घटाने पर $585^\circ$ बचता है, जो अब भी एक पूरे चक्कर से ज़्यादा है।`,
      t`$225^\circ$, $0^\circ$ और $360^\circ$ के बीच है, इसलिए सबसे छोटा धनात्मक co-terminal angle $225^\circ$ है।`,
    ],
    "C01-Q3": [
      t`$-80^\circ$ ऋणात्मक है, इसलिए arm धनात्मक $x$-अक्ष से $80^\circ$ **clockwise** घूमता है।`,
      t`यह ऋणात्मक $y$-अक्ष तक के $90^\circ$ से कम है, इसलिए arm धनात्मक $x$-अक्ष के नीचे रुकता है।`,
      t`जाँच: $-80^\circ + 360^\circ = 280^\circ$, जो $270^\circ$ और $360^\circ$ के बीच है। Terminal arm **Quadrant IV** में है।`,
    ],
    "C01-Q4": [
      t`$250^\circ$ धनात्मक है, इसलिए arm धनात्मक $x$-अक्ष से **anticlockwise** घूमता है।`,
      t`$250^\circ = 180^\circ + 70^\circ$: $180^\circ$ पर ऋणात्मक $x$-अक्ष से आगे, पर $270^\circ$ पर ऋणात्मक $y$-अक्ष से पहले।`,
      t`$180^\circ$ और $270^\circ$ के बीच **Quadrant III** है।`,
    ],
    "C01-Q5": [
      t`$1050 = 2 \times 360 + 330$: दो पूरे चक्कर और $330^\circ$ और।`,
      t`दोनों चक्कर घटाइए: $1050^\circ - 720^\circ = 330^\circ$, जो $0^\circ$ और $360^\circ$ के बीच है।`,
      t`इसलिए सबसे छोटा धनात्मक co-terminal angle $330^\circ$ है। यह तीन चक्करों से $30^\circ$ कम है, $1050^\circ = 1080^\circ - 30^\circ$: यह $-30^\circ$ के साथ co-terminal है, $30^\circ$ के साथ नहीं।`,
    ],
  },
};
