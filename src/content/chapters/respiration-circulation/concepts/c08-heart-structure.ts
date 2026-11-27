import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`The left side of the heart is much more muscular than the right. Why would one side work harder?`,
    reveal: t`The left ventricle pumps blood to the whole body; the right pumps it only to the nearby lungs.`,
  },
  explanation: {
    intuition: [
      t`The heart sits in a double-layered sac, the **pericardium**.`,
      t`Two thin-walled atria receive blood; two ventricles pump it.`,
      t`Valves keep blood flowing one way.`,
    ],
    formal: [
      {
        title: "Chambers",
        points: [
          t`Right side: deoxygenated blood to the lungs.`,
          t`Left side: oxygenated blood to the body; the **left ventricle** is thickest.`,
          t`The **pulmonary veins** carry the most oxygenated blood.`,
        ],
      },
      {
        title: "Valves",
        points: [
          t`**Tricuspid** (right) and **bicuspid** (left) between atria and ventricles, held by **chordae tendinae** to papillary muscles.`,
          t`**Semilunar** valves at the aorta and pulmonary trunk.`,
          t`**Eustachian** guards the inferior vena cava; **Thebesian** the coronary sinus.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why don't the cuspid valves flip back into the atria?`,
      steps: [
        t`Chordae tendinae hold the cusps.`,
        t`Papillary muscles anchor the chordae.`,
      ],
      answer: t`Chordae tendinae hold them`,
    },
    visualSpec: t`A heart cut open: four chambers, the valves labelled, arrows showing flow.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks bicuspid.",
      remediation: "Bicuspid is on the left side.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks tricuspid.",
      remediation: "Tricuspid is between chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks Thebesian.",
      remediation: "Thebesian guards the coronary sinus.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks chordae tendinae.",
      remediation: "Chordae hold valve cusps.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks fossa ovalis.",
      remediation: "That is from the foramen ovale.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks coronary sinus.",
      remediation: "That drains the heart wall.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks right ventricle.",
      remediation: "It pumps only to the lungs.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks left atrium.",
      remediation: "Atria only receive.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks right atrium.",
      remediation: "Atria only receive.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks pulmonary artery.",
      remediation: "It carries deoxygenated blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks venae cavae.",
      remediation: "They bring deoxygenated blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks coronary sinus.",
      remediation: "It drains used blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks semilunar.",
      remediation: "Semilunar valves have no chordae.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks Eustachian and Thebesian.",
      remediation: "Those have no chordae.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks vein valves.",
      remediation: "Chordae are inside the heart.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(13)" },
      stem: t`The opening of the inferior vena cava is guarded by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ivc" } },
      options: [
        { key: "A", text: t`Eustachian valve`, correct: true, value: "eustachian_v" },
        { key: "B", text: t`bicuspid valve`, correct: false, misconceptionId: "C08-M1", value: "bicuspid_v" },
        { key: "C", text: t`tricuspid valve`, correct: false, misconceptionId: "C08-M2", value: "tricuspid_v" },
        { key: "D", text: t`Thebesian valve`, correct: false, misconceptionId: "C08-M3", value: "thebesian_v" },
      ],
      solution: {
        steps: [
          t`Inferior vena cava opening.`,
          t`Eustachian valve.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 2(v)" },
      stem: t`The cord joining the pulmonary trunk and aortic arch, a remnant of the ductus arteriosus, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "remnant" } },
      options: [
        { key: "A", text: t`chordae tendinae`, correct: false, misconceptionId: "C08-M4", value: "chordae_tendinae" },
        { key: "B", text: t`fossa ovalis`, correct: false, misconceptionId: "C08-M5", value: "fossa_ovalis" },
        { key: "C", text: t`coronary sinus`, correct: false, misconceptionId: "C08-M6", value: "coronary_sinus" },
        { key: "D", text: t`ligamentum arteriosum`, correct: true, value: "ligamentum_arteriosum" },
      ],
      solution: {
        steps: [
          t`Remnant of ductus arteriosus.`,
          t`Ligamentum arteriosum.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q5(5)" },
      stem: t`The thickest-walled chamber of the heart is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "thickest" } },
      options: [
        { key: "A", text: t`right ventricle`, correct: false, misconceptionId: "C08-M7", value: "right_ventricle" },
        { key: "B", text: t`left atrium`, correct: false, misconceptionId: "C08-M8", value: "left_atrium" },
        { key: "C", text: t`right atrium`, correct: false, misconceptionId: "C08-M9", value: "right_atrium" },
        { key: "D", text: t`left ventricle`, correct: true, value: "left_ventricle" },
      ],
      solution: {
        steps: [
          t`It pumps to the whole body.`,
          t`Left ventricle.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(5)" },
      stem: t`The blood vessels of the heart with the most oxygen are the`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxygen" } },
      options: [
        { key: "A", text: t`venae cavae`, correct: false, misconceptionId: "C08-M11", value: "venae_cavae" },
        { key: "B", text: t`coronary sinus`, correct: false, misconceptionId: "C08-M12", value: "coronary_sinus" },
        { key: "C", text: t`pulmonary veins`, correct: true, value: "pulmonary_veins" },
        { key: "D", text: t`pulmonary artery`, correct: false, misconceptionId: "C08-M10", value: "pulmonary_artery" },
      ],
      solution: {
        steps: [
          t`Fresh from the lungs.`,
          t`Pulmonary veins.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q4(8)" },
      stem: t`Chordae tendinae join the papillary muscles to the cusps of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "chordae" } },
      options: [
        { key: "A", text: t`valves of the veins`, correct: false, misconceptionId: "C08-M15", value: "vein_valves" },
        { key: "B", text: t`bicuspid and tricuspid valves`, correct: true, value: "cuspid_valves" },
        { key: "C", text: t`semilunar valves`, correct: false, misconceptionId: "C08-M13", value: "semilunar_valves" },
        { key: "D", text: t`Eustachian and Thebesian valves`, correct: false, misconceptionId: "C08-M14", value: "eustachian_thebesian" },
      ],
      solution: {
        steps: [
          t`Cusps of the AV valves.`,
          t`Bicuspid and tricuspid.`,
        ],
      },
    },
  ],
};
