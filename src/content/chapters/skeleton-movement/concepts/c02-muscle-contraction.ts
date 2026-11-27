import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`When a muscle shortens, do its protein filaments shrink?`,
    reveal: t`No. Actin slides over myosin, pulled by myosin heads, and the Z lines come closer.`,
  },
  explanation: {
    intuition: [
      t`**Calcium ions** are the switch for contraction.`,
      t`Myosin heads use **ATP** to pull actin inward.`,
      t`Removing calcium lets the muscle **relax**.`,
    ],
    formal: [
      {
        title: "Contraction",
        points: [
          t`An impulse at the motor end plate spreads over the sarcolemma and along the **T tubules**.`,
          t`$\mathrm{Ca^{2+}}$ from the **sarcoplasmic reticulum** binds troponin; tropomyosin moves off the active sites.`,
          t`Myosin heads split ATP, attach to actin as **actomyosin**, tilt and pull actin inward.`,
        ],
      },
      {
        title: "Relaxation",
        points: [
          t`When stimulation stops, calcium ions are returned, an active process using energy.`,
          t`The troponin-tropomyosin complex covers the active sites again.`,
          t`Actin slides back to its original position and the muscle relaxes.`,
        ],
      },
    ],
    worked: {
      prompt: t`A drug stops calcium leaving the sarcoplasmic reticulum. Can the muscle contract?`,
      steps: [
        t`Without $\mathrm{Ca^{2+}}$, troponin is not changed.`,
        t`Tropomyosin keeps covering the active sites, so myosin cannot bind.`,
      ],
      answer: t`No`,
    },
    visualSpec: t`Two sarcomeres side by side: relaxed with the Z lines far apart, contracted with actin slid inward and the Z lines closer.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says breaks bridges.",
      remediation: "Breaking cross bridges needs fresh ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says crosses junction.",
      remediation: "Acetylcholine carries the impulse across.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says repolarises.",
      remediation: "Ion pumps repolarise, not calcium.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks T tubules.",
      remediation: "T tubules carry the impulse; the reticulum stores calcium.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks sarcolemma.",
      remediation: "It carries the impulse over the fibre.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks motor end plate.",
      remediation: "That is where the impulse arrives.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says actin shortens.",
      remediation: "Filaments slide; they do not shorten.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says myosin shortens.",
      remediation: "Filaments slide; they do not shorten.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says Z lines apart.",
      remediation: "The Z lines are drawn closer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks troponin-tropomyosin.",
      remediation: "That complex covers the sites.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks meromyosin.",
      remediation: "Meromyosin is a unit of myosin.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks myoglobin.",
      remediation: "Myoglobin carries oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says uncovers sites.",
      remediation: "Removing calcium lets the sites be covered.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says stays off.",
      remediation: "The complex returns and covers them.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says it splits ATP.",
      remediation: "The myosin head splits ATP.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(F)" },
      stem: t`The role of calcium in muscle contraction is`,
      verify: { kind: "value", inputs: {  }, params: { q: "calcium" } },
      options: [
        { key: "A", text: t`to bind troponin, changing its shape so that the active sites of actin are exposed`, correct: true, value: "binds_troponin" },
        { key: "B", text: t`to break the cross bridges`, correct: false, misconceptionId: "C02-M1", value: "breaks_bridges" },
        { key: "C", text: t`to carry the impulse across the neuromuscular junction`, correct: false, misconceptionId: "C02-M2", value: "crosses_junction" },
        { key: "D", text: t`to re-establish the polarisation of the sarcolemma`, correct: false, misconceptionId: "C02-M3", value: "repolarises_t" },
      ],
      solution: {
        steps: [
          t`Calcium binds troponin.`,
          t`Active sites exposed.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q4(C)" },
      stem: t`The $\mathrm{Ca^{2+}}$ ions that start contraction are released into the sarcoplasm from the`,
      verify: { kind: "value", inputs: {  }, params: { q: "store" } },
      options: [
        { key: "A", text: t`T tubules`, correct: false, misconceptionId: "C02-M4", value: "t_tubules" },
        { key: "B", text: t`sarcolemma`, correct: false, misconceptionId: "C02-M5", value: "sarcolemma_t" },
        { key: "C", text: t`motor end plate`, correct: false, misconceptionId: "C02-M6", value: "motor_end_plate" },
        { key: "D", text: t`sarcoplasmic reticulum`, correct: true, value: "sarcoplasmic_reticulum" },
      ],
      solution: {
        steps: [
          t`Calcium store.`,
          t`Sarcoplasmic reticulum.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(A)" },
      stem: t`According to the sliding filament theory, when a sarcomere shortens`,
      verify: { kind: "value", inputs: {  }, params: { q: "sliding" } },
      options: [
        { key: "A", text: t`the Z lines move apart`, correct: false, misconceptionId: "C02-M9", value: "z_lines_apart" },
        { key: "B", text: t`actin slides over myosin and the filaments keep their length`, correct: true, value: "filaments_slide" },
        { key: "C", text: t`the actin filaments themselves shorten`, correct: false, misconceptionId: "C02-M7", value: "actin_shortens" },
        { key: "D", text: t`the myosin filaments themselves shorten`, correct: false, misconceptionId: "C02-M8", value: "myosin_shortens" },
      ],
      solution: {
        steps: [
          t`Filaments slide.`,
          t`Lengths unchanged.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(C)" },
      stem: t`When an energised myosin head attaches to the active site of actin, it forms`,
      verify: { kind: "value", inputs: {  }, params: { q: "complex" } },
      options: [
        { key: "A", text: t`myoglobin`, correct: false, misconceptionId: "C02-M12", value: "myoglobin_t" },
        { key: "B", text: t`actomyosin`, correct: true, value: "actomyosin_t" },
        { key: "C", text: t`the troponin-tropomyosin complex`, correct: false, misconceptionId: "C02-M10", value: "troponin_tropomyosin" },
        { key: "D", text: t`meromyosin`, correct: false, misconceptionId: "C02-M11", value: "meromyosin_t" },
      ],
      solution: {
        steps: [
          t`Myosin joins actin.`,
          t`Actomyosin.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q4(C)" },
      stem: t`When stimulation stops and the $\mathrm{Ca^{2+}}$ ions are taken back, the troponin-tropomyosin complex`,
      verify: { kind: "value", inputs: {  }, params: { q: "relax" } },
      options: [
        { key: "A", text: t`splits ATP to pull actin back`, correct: false, misconceptionId: "C02-M15", value: "splits_atp" },
        { key: "B", text: t`covers the active sites again, so the muscle relaxes`, correct: true, value: "covers_again" },
        { key: "C", text: t`uncovers the active sites, so the muscle contracts`, correct: false, misconceptionId: "C02-M13", value: "uncovers_sites" },
        { key: "D", text: t`stays off the active sites, so the muscle stays contracted`, correct: false, misconceptionId: "C02-M14", value: "stays_off" },
      ],
      solution: {
        steps: [
          t`Calcium gone.`,
          t`Sites covered; muscle relaxes.`,
        ],
      },
    },
  ],
};
