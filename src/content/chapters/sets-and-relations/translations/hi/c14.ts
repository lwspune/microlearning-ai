import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c14: ConceptTranslation = {
  id: "C14",
  lang: "hi",
  status: "approved",
  source: "0933f0244c0f63",
  hook: {
    prompt: t`मान लीजिए $A = \{1, 2, 3\}$ और $B = \{7\}$। $A$ से $B$ तक relation, $a \in A$, $b \in B$ वाले युग्मों $(a, b)$ का कोई भी set है। **$A$ से $B$ तक आप कितने अलग-अलग relations लिख सकते हैं?**`,
    reveal: t`$A \times B = \{(1, 7), (2, 7), (3, 7)\}$ में केवल $3$ युग्म हैं, और relation इसका कोई भी subset है। एक बिना युग्म वाला ($\phi$), तीन एक युग्म वाले, तीन दो युग्म वाले, और खुद $A \times B$: $1 + 3 + 3 + 1 = 8 = 2^3$ relations। हर युग्म अंदर या बाहर है, $2 \times 2 \times 2$ तरीके।`,
  },
  intuition: [
    t`याद कीजिए: $A \times B$ उन सभी युग्मों $(a, b)$ का set है जिनमें $a \in A$ और $b \in B$।`,
    t`$A$ से $B$ तक **relation**, $A \times B$ का कोई भी subset है, इससे ज़्यादा कुछ नहीं।`,
    t`इसलिए relations गिनने का अर्थ है $A \times B$ के subsets गिनना।`,
    t`युग्मों को एक-एक करके देखिए: हर युग्म या तो relation के अंदर है या बाहर।`,
    t`यानी हर युग्म के लिए दो विकल्प, और विकल्प गुणा होते हैं: $2 \times 2 \times \dots \times 2$, हर युग्म के लिए एक $2$।`,
    t`बिना युग्म वाला empty set $\phi$ भी, और पूरा $A \times B$ भी, इन्हीं में हैं।`,
  ],
  formal: [
    {
      title: t`A से B तक relations`,
      points: [
        t`याद कीजिए: $n(A)$, $A$ के elements की संख्या है; मान लीजिए $n(A) = m$ और $n(B) = n$।`,
        t`$A$ का हर element, $B$ के हर element के साथ युग्म बनाता है, इसलिए $n(A \times B) = mn$।`,
        t`याद कीजिए: $N$ elements वाले set के $2^N$ subsets होते हैं।`,
        t`Relation, $A \times B$ का एक subset है, इसलिए यहाँ $N = mn$।`,
        t`इसलिए $A$ से $B$ तक relations की संख्या $2^{mn}$ है।`,
      ],
    },
    {
      title: t`किसी set पर relations`,
      points: [
        t`**$A$ पर relation**, $A$ से खुद $A$ तक का relation है: $A \times A$ का एक subset।`,
        t`अगर $n(A) = n$, तो $A \times A$ में $n \times n = n^2$ युग्म हैं।`,
        t`इसलिए $A$ पर $2^{n^2}$ relations हैं।`,
      ],
    },
    {
      title: t`रिक्त और सार्वत्रिक relations`,
      points: [
        t`याद कीजिए: empty set $\phi$ हर set का subset है, इसलिए $\phi \subseteq A \times B$।`,
        t`इसलिए $\phi$ एक relation है, **empty (void) relation** (रिक्त relation): यह किसी को किसी से नहीं जोड़ता।`,
        t`$A \times B$ खुद का subset है, इसलिए यह भी एक relation है: **universal relation** (सार्वत्रिक relation)।`,
        t`Universal relation, $A$ के हर element को $B$ के हर element से जोड़ता है।`,
        t`दोनों $2^{mn}$ में गिने जाते हैं: इनमें से किसी को मत छोड़िए।`,
      ],
    },
    {
      title: t`दिए गए युग्मों वाले relations`,
      points: [
        t`मान लीजिए किसी relation में $k$ दिए गए युग्म **contain** होने चाहिए (शामिल होने चाहिए): उनमें से हर एक उसमें हो।`,
        t`उन $k$ युग्मों के पास कोई विकल्प नहीं: वे अंदर तय हैं।`,
        t`बाकी $mn - k$ युग्म अब भी स्वतंत्र हैं, हर एक अंदर या बाहर।`,
        t`इसलिए $2^{mn - k}$ relations में $k$ दिए गए युग्म शामिल हैं।`,
        t`ये केवल $k$ युग्मों से लेकर पूरे $A \times B$ तक जाते हैं।`,
        t`हर तय युग्म गिनती को आधा कर देता है: $2^{mn}$, फिर $2^{mn - 1}$, और इसी तरह आगे।`,
      ],
    },
  ],
  worked: {
    prompt: t`मान लीजिए $A = \{p, q, r\}$ और $B = \{1, 2, 3, 4\}$। $A$ से $B$ तक कितने relations हैं, और उनमें से कितनों में $(p, 1)$ और $(q, 2)$ दोनों शामिल हैं?`,
    steps: [
      t`$n(A \times B) = 3 \times 4 = 12$ युग्म।`,
      t`Relation इन $12$ युग्मों का कोई भी subset है: हर युग्म अंदर या बाहर। इसलिए $2^{12} = 4096$ relations हैं, $\phi$ और $A \times B$ समेत।`,
      t`अब $(p, 1)$ और $(q, 2)$ अंदर होने चाहिए। इनके पास कोई विकल्प नहीं; बाकी $12 - 2 = 10$ युग्म अब भी अंदर या बाहर हैं।`,
      t`इसलिए $2^{10} = 1024$ relations में दोनों युग्म शामिल हैं।`,
    ],
    answer: t`$A$ से $B$ तक $4096$ relations; उनमें से $1024$ में $(p, 1)$ और $(q, 2)$ शामिल हैं।`,
  },
  remediation: {
    "C14-M1": t`$mn$ युग्मों की संख्या है; relation युग्मों का एक set है, $A \times B$ का कोई भी subset। $N$ युग्मों वाले set के $2^N$ subsets होते हैं, इसलिए $2^{mn}$ relations हैं।`,
    "C14-M2": t`$A$ का हर element, $B$ के हर element के साथ युग्म बनाता है, इसलिए $n(A \times B) = n(A) \times n(B) = mn$, $m + n$ नहीं। Relations की संख्या $2^{mn}$ है।`,
    "C14-M3": t`$\phi$ हर set का subset है, इसलिए $\phi \subseteq A \times B$ एक relation है: रिक्त relation। यह $2^{mn}$ में से एक है, और सार्वत्रिक relation $A \times B$ भी।`,
    "C14-M4": t`जिस relation में दिए गए युग्म शामिल हैं, उसमें वे सब हैं, साथ में बाकी युग्मों में से कोई भी। दिए गए युग्म तय हैं; बाकी $mn - k$ युग्म स्वतंत्र हैं, इसलिए ऐसे $2^{mn - k}$ relations हैं।`,
  },
  solutions: {
    "C14-Q1": [
      t`$A \times A$ में $3 \times 3 = 9$ युग्म हैं।`,
      t`$A$ पर relation, $A \times A$ का कोई भी subset है, खाली वाला भी: $9$ युग्मों में से हर एक अंदर या बाहर।`,
      t`इसलिए $A$ पर $2^9 = 512$ relations हैं।`,
    ],
    "C14-Q2": [
      t`$n(A) = 5$ और $n(B) = 3$, इसलिए $A \times B$ में $5 \times 3 = 15$ युग्म हैं।`,
      t`हर relation इन $15$ युग्मों का एक subset है: हर युग्म अंदर या बाहर।`,
      t`इसलिए $A$ से $B$ तक $2^{15} = 32768$ relations हैं।`,
    ],
    "C14-Q3": [
      t`$A \times B$ में $3 \times 3 = 9$ युग्म हैं।`,
      t`$R_3$ के $5$ युग्म अंदर होने चाहिए, इसलिए उनके पास कोई विकल्प नहीं। बाकी $9 - 5 = 4$ युग्म हर एक अंदर या बाहर।`,
      t`इसलिए $2^4 = 16$ relations में $R_3$ शामिल है, खुद $R_3$ से लेकर $A \times B$ तक।`,
    ],
    "C14-Q4": [
      t`$A \times B$ में $3 \times 3 = 9$ युग्म हैं।`,
      t`$R$ के $4$ युग्म अंदर तय हैं; बाकी $9 - 4 = 5$ युग्म हर एक अंदर या बाहर।`,
      t`इसलिए $2^5 = 32$ relations में $R$ का हर युग्म शामिल है।`,
    ],
    "C14-Q5": [
      t`$A \times B$ में $2 \times 3 = 6$ युग्म हैं।`,
      t`$A \times B$ का हर subset एक relation है, $R_1 = \phi$ से लेकर $R_2 = A \times B$ तक।`,
      t`इसलिए $A$ से $B$ तक $2^6 = 64$ relations हैं, ये दोनों समेत।`,
    ],
    "C14-Q6": [
      t`$A \times A$ में $4 \times 4 = 16$ युग्म हैं।`,
      t`$(1, 2)$ और $(2, 1)$ अंदर तय हैं; बाकी $16 - 2 = 14$ युग्म हर एक अंदर या बाहर।`,
      t`इसलिए $A$ पर $2^{14} = 16384$ relations में दोनों युग्म शामिल हैं।`,
    ],
  },
};
