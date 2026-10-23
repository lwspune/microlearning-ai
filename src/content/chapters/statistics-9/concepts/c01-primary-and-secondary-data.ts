import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Asha visits five vegetable stalls and writes down the price of tomatoes. Ravi copies the same five prices from Asha's notebook. They hold the same numbers. Is their data the same kind?`,
    reveal: t`No. Asha collected the prices herself, first-hand, so hers is **primary data**. Ravi took data someone else collected, so his is **secondary data**. The kind depends on who collected it, not on the numbers.`,
  },
  explanation: {
    intuition: [
      t`**Data** are facts and figures gathered for a study, such as marks, heights or prices.`,
      t`The person who carries out the study is the **investigator**.`,
      t`Data the investigator collects first-hand, for this very study, is **primary data**.`,
      t`Data taken from records that someone else already collected is **secondary data**.`,
      t`To decide, ask one question: who collected this data, and for what purpose?`,
    ],
    formal: [
      {
        title: "Primary data",
        points: [
          t`**First-hand** means the investigator gets the data straight from its source.`,
          t`Visiting and observing gives primary data: counting the trees in a forest.`,
          t`Measuring gives primary data: measuring the heights of students with a tape.`,
          t`Asking people directly also gives primary data: a house-to-house survey or an interview.`,
          t`When you ask, the people are the source, so it is still first-hand.`,
          t`Primary data fits the purpose well, but it takes time, effort and money.`,
        ],
      },
      {
        title: "Secondary data",
        points: [
          t`Secondary data comes from records prepared earlier, by someone else, for their own purpose.`,
          t`Records of a school, a hospital, the Talathi or a government office give secondary data.`,
          t`Newspapers, magazines, reports and websites also give secondary data.`,
          t`Official records are not primary for you: the office collected them, not you.`,
          t`New figures are not primary either: today's newspaper is still someone else's data.`,
          t`Secondary data is quick and cheap to get, but check that it suits your study.`,
        ],
      },
      {
        title: "The same data, two views",
        points: [
          t`A class teacher counts the students present: for the teacher, this is primary data.`,
          t`The head office reads that count from the school's report: for it, this is secondary data.`,
          t`So the kind of data depends on who collects it, not on the numbers in it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Sumedh studies water use in his housing society. (i) He reads every flat's water meter himself. (ii) He asks each family how many buckets of water they use for bathing. (iii) He takes last year's water bills from the society secretary's file. Classify each as primary or secondary data.`,
      steps: [
        t`(i) Sumedh reads the meters himself, for his own study. This is first-hand, so it is **primary**.`,
        t`(ii) He asks the families directly. The families are the source, so this is first-hand too: **primary**.`,
        t`(iii) The bills were prepared earlier by someone else, for billing, not for his study.`,
        t`Sumedh only takes them from a file, so (iii) is **secondary**.`,
      ],
      answer: t`(i) primary, (ii) primary, (iii) secondary.`,
    },
    visualSpec: t`A sorting tray: drag each data card into 'collected first-hand' or 'taken from records', and see it labelled primary or secondary.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Data taken from an office's records (school, Talathi, forest office) is primary, because an office is the official, original source.",
      remediation: "An office's records were collected by someone else, for their own purpose. For your study they are secondary data; primary data is what you collect first-hand.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Data got by asking people is secondary, because the investigator only hears it and does not see it.",
      remediation: "Asking people directly, by visiting them or phoning them, is first-hand collection: the people are the source. Data collected this way is primary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "'Secondary' means old: fresh figures (this year's, today's) are primary wherever they come from.",
      remediation: "Primary or secondary depends on who collected the data, not on how recent it is. Today's figures taken from a newspaper or a website are secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Swaps the two definitions: data from records is primary, and data collected first-hand is secondary.",
      remediation: "Primary data is collected first-hand by the investigator. Secondary data is taken from records that someone else collected.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 shows only on an item with an office's records; C01-M2 only on an item where the investigator asks people; C01-M3 only on an item with current figures from records, a newspaper or a website. Draw diagnosing items that contain that kind of situation.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.2 Q1(ii)" },
      stem: t`Classify each as primary or secondary data. (a) The heights of students were taken from the school records and sent to the head office, as they were needed urgently. (b) In the village Nandpur, information about students not attending school was collected by visiting every house.`,
      verify: { kind: "value", inputs: {  }, params: { s: ["rec-off-now", "ask"], ask: "pair" } },
      options: [
        { key: "A", text: t`(a) primary, (b) primary`, correct: false, misconceptionId: "C01-M1", value: "(primary, primary)" },
        { key: "B", text: t`(a) secondary, (b) primary`, correct: true, value: "(secondary, primary)" },
        { key: "C", text: t`(a) secondary, (b) secondary`, correct: false, misconceptionId: "C01-M2", value: "(secondary, secondary)" },
        { key: "D", text: t`(a) primary, (b) secondary`, correct: false, misconceptionId: "C01-M4", value: "(primary, secondary)" },
      ],
      solution: {
        steps: [
          t`(a) The heights were not measured for this purpose. They were taken from school records that others had prepared, so (a) is secondary.`,
          t`(b) The information was collected by visiting every house and asking. That is first-hand, so (b) is primary.`,
          t`So (a) secondary, (b) primary.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(i)" },
      stem: t`Which of these are **not** primary data? (i) Attendance of students gathered by visiting a class. (ii) The number of family members, found by actually visiting homes and asking. (iii) Soyabean planted by each farmer, taken from the village Talathi's records. (iv) The cleanliness of canals, reviewed by actually visiting them.`,
      verify: { kind: "value", inputs: {  }, params: { s: ["obs", "ask", "rec-off-now", "obs"], ask: "secondary" } },
      options: [
        { key: "A", text: t`(iii) only`, correct: true, value: "{3}" },
        { key: "B", text: t`none of them`, correct: false, misconceptionId: "C01-M1", value: "EmptySet" },
        { key: "C", text: t`(ii) and (iii)`, correct: false, misconceptionId: "C01-M2", value: "{2, 3}" },
        { key: "D", text: t`(i), (ii) and (iv)`, correct: false, misconceptionId: "C01-M4", value: "{1, 2, 4}" },
      ],
      solution: {
        steps: [
          t`(i) and (iv) are gathered by actually visiting, first-hand: primary.`,
          t`(ii) is found by visiting homes and asking the families. Asking directly is first-hand: primary.`,
          t`(iii) is taken from the Talathi's records, which someone else collected: secondary.`,
          t`So only (iii) is not primary.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.2 Q1(iv)" },
      stem: t`For a science project on trees, Rohan (i) counts the trees by visiting a forest, (ii) takes this year's forest area of his district from a newspaper report, (iii) takes the number of trees planted in the last ten years from the forest office records, and (iv) asks the forest guards which trees grow most. Which of these are secondary data?`,
      verify: { kind: "value", inputs: {  }, params: { s: ["obs", "pub-now", "rec-off-past", "ask"], ask: "secondary" } },
      options: [
        { key: "A", text: t`(ii), (iii) and (iv)`, correct: false, misconceptionId: "C01-M2", value: "{2, 3, 4}" },
        { key: "B", text: t`(iii) only`, correct: false, misconceptionId: "C01-M3", value: "{3}" },
        { key: "C", text: t`(ii) and (iii)`, correct: true, value: "{2, 3}" },
        { key: "D", text: t`(ii) only`, correct: false, misconceptionId: "C01-M1", value: "{2}" },
      ],
      solution: {
        steps: [
          t`(i) Rohan counts the trees himself, and (iv) he asks the guards directly. Both are first-hand: primary.`,
          t`(ii) The newspaper collected the forest area. It is this year's, but it is still secondary.`,
          t`(iii) The forest office collected the planting figures, so they are secondary.`,
          t`So the secondary data are (ii) and (iii).`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.2 Q1(i)" },
      stem: t`A headmaster studies attendance. He (i) visits every class and counts the students present, (ii) phones the parents of absent students to ask the reason, (iii) takes this month's attendance of every school in the taluka from the education office website, and (iv) takes last year's attendance from the school's old registers. Which of these are primary data?`,
      verify: { kind: "value", inputs: {  }, params: { s: ["obs", "ask", "pub-now", "rec-off-past"], ask: "primary" } },
      options: [
        { key: "A", text: t`(i), (ii) and (iv)`, correct: false, misconceptionId: "C01-M1", value: "{1, 2, 4}" },
        { key: "B", text: t`(i) and (ii)`, correct: true, value: "{1, 2}" },
        { key: "C", text: t`(i), (ii) and (iii)`, correct: false, misconceptionId: "C01-M3", value: "{1, 2, 3}" },
        { key: "D", text: t`(iii) and (iv)`, correct: false, misconceptionId: "C01-M4", value: "{3, 4}" },
      ],
      solution: {
        steps: [
          t`(i) He counts the students himself, and (ii) he asks the parents directly. Both are first-hand: primary.`,
          t`(iii) The education office collected the website's figures, so they are secondary, though they are this month's.`,
          t`(iv) The class teachers wrote the old registers for their own purpose, so they are secondary.`,
          t`So the primary data are (i) and (ii).`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`Classify each as primary or secondary data. (a) Neha asks every shopkeeper in her market how many plastic bags they give out in a day. (b) She takes the plastic used in her city this year from today's newspaper.`,
      verify: { kind: "value", inputs: {  }, params: { s: ["ask", "pub-now"], ask: "pair" } },
      options: [
        { key: "A", text: t`(a) secondary, (b) secondary`, correct: false, misconceptionId: "C01-M2", value: "(secondary, secondary)" },
        { key: "B", text: t`(a) primary, (b) primary`, correct: false, misconceptionId: "C01-M3", value: "(primary, primary)" },
        { key: "C", text: t`(a) secondary, (b) primary`, correct: false, misconceptionId: "C01-M4", value: "(secondary, primary)" },
        { key: "D", text: t`(a) primary, (b) secondary`, correct: true, value: "(primary, secondary)" },
      ],
      solution: {
        steps: [
          t`(a) Neha asks the shopkeepers herself. That is first-hand, so (a) is primary.`,
          t`(b) The newspaper collected the figures. They are recent, but Neha only takes them, so (b) is secondary.`,
          t`So (a) primary, (b) secondary.`,
        ],
      },
    },
  ],
};
