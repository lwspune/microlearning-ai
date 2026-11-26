import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`By the filling order, chromium should be $3d^4\,4s^2$. Experiments show $3d^5\,4s^1$. Why does chromium break the pattern?`,
    reveal: t`A half-filled d subshell is extra stable, so one 4s electron moves to 3d. Copper does the same to get a full 3d.`,
  },
  explanation: {
    intuition: [
      t`Electrons fill orbitals from lowest energy up.`,
      t`Each orbital takes at most two electrons, with opposite spins.`,
      t`In equal-energy orbitals, electrons spread out singly before pairing.`,
      t`Half-filled and full subshells are extra stable.`,
    ],
    formal: [
      {
        title: "Rules",
        points: [
          t`**Aufbau**: fill by increasing $(n + l)$; for equal values, lower $n$ first: 1s 2s 2p 3s 3p 4s 3d 4p ….`,
          t`**Pauli**: no two electrons share all four quantum numbers.`,
          t`**Hund**: fill degenerate orbitals singly, with parallel spins, before pairing.`,
        ],
      },
      {
        title: "Exceptions and ions",
        points: [
          t`Cr: $[\mathrm{Ar}]\,3d^5\,4s^1$; Cu: $[\mathrm{Ar}]\,3d^{10}\,4s^1$.`,
          t`Cations lose 4s electrons before 3d: $\ce{Fe^{2+}}$ is $[\mathrm{Ar}]\,3d^6$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the configuration of silicon (Z = 14) and count its unpaired electrons.`,
      steps: [
        t`$1s^2\,2s^2\,2p^6\,3s^2\,3p^2$.`,
        t`The two 3p electrons sit in separate orbitals (Hund).`,
      ],
      answer: t`2 unpaired electrons`,
    },
    visualSpec: t`Fill orbital boxes in order, one arrow at a time, following the three rules.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Names Hund's rule.",
      remediation: "Hund's rule is about filling singly first; this is Pauli's principle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Names the Aufbau principle.",
      remediation: "Aufbau is the filling order; this is Pauli's principle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Names Heisenberg's principle.",
      remediation: "Heisenberg is about position and momentum; this is Pauli's.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Writes Cr as $3d^4\,4s^2$.`,
      remediation: t`Cr takes the half-filled $3d^5\,4s^1$: six unpaired.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks all electrons are paired.",
      remediation: "Hund's rule leaves the 3d and 4s electrons unpaired.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Counts only the d electrons.",
      remediation: "The single 4s electron is unpaired too.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Removes 3d electrons first.",
      remediation: "Cations lose the outer 4s electrons first.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Forgets to remove electrons.",
      remediation: t`$\ce{Fe^{2+}}$ has two fewer electrons than Fe.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Forces a half-filled d.",
      remediation: t`Fe has 26 − 2 = 24 electrons: $[\mathrm{Ar}]\,3d^6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Fills by $n$ alone.`,
      remediation: t`4s ($n + l$ = 4) fills before 3d ($n + l$ = 5).`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks 4s and 3d fill together.",
      remediation: t`Lower $n + l$ fills first: 4s, then 3d.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: t`Thinks lower $l$ always fills first.`,
      remediation: t`4p has $n + l$ = 5 like 3d; lower $n$ wins, so 3d first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Names Pauli's principle.",
      remediation: "Pauli limits two per orbital; spreading out singly is Hund's rule.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Names the Aufbau principle.",
      remediation: "Aufbau gives the order of subshells; Hund's rule fills the 2p orbitals.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Names Heisenberg's principle.",
      remediation: "Single filling before pairing is Hund's rule.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.1 (D)" },
      stem: t`'No two electrons in an atom can have the same set of four quantum numbers.' This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pauli" } },
      options: [
        { key: "A", text: t`the Aufbau principle`, correct: false, misconceptionId: "C07-M2", value: "aufbau" },
        { key: "B", text: t`Heisenberg's uncertainty principle`, correct: false, misconceptionId: "C07-M3", value: "heisenberg" },
        { key: "C", text: t`Hund's rule`, correct: false, misconceptionId: "C07-M1", value: "hund" },
        { key: "D", text: t`Pauli's exclusion principle`, correct: true, value: "pauli" },
      ],
      solution: {
        steps: [
          t`No two electrons can be identical in all four numbers.`,
          t`Pauli's exclusion principle.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (S)" },
      stem: t`How many unpaired electrons does chromium (Z = 24) have?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cr_unpaired" } },
      options: [
        { key: "A", text: t`6`, correct: true, value: "six" },
        { key: "B", text: t`0`, correct: false, misconceptionId: "C07-M5", value: "zero" },
        { key: "C", text: t`5`, correct: false, misconceptionId: "C07-M6", value: "five" },
        { key: "D", text: t`4`, correct: false, misconceptionId: "C07-M4", value: "four" },
      ],
      solution: {
        steps: [
          t`Cr: $[\mathrm{Ar}]\,3d^5\,4s^1$.`,
          t`5 + 1 = 6 unpaired.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (K)" },
      stem: t`The electronic configuration of $\ce{Fe^{2+}}$ (Fe: Z = 26) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fe2" } },
      options: [
        { key: "A", text: t`$[\mathrm{Ar}]\,3d^5\,4s^1$`, correct: false, misconceptionId: "C07-M9", value: "ar_3d5_4s1" },
        { key: "B", text: t`$[\mathrm{Ar}]\,3d^6$`, correct: true, value: "ar_3d6" },
        { key: "C", text: t`$[\mathrm{Ar}]\,3d^4\,4s^2$`, correct: false, misconceptionId: "C07-M7", value: "ar_3d4_4s2" },
        { key: "D", text: t`$[\mathrm{Ar}]\,3d^6\,4s^2$`, correct: false, misconceptionId: "C07-M8", value: "ar_3d6_4s2" },
      ],
      solution: {
        steps: [
          t`Fe: $[\mathrm{Ar}]\,3d^6\,4s^2$.`,
          t`Remove the two 4s electrons: $[\mathrm{Ar}]\,3d^6$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (H)" },
      stem: t`By the $(n + l)$ rule, which fills first?`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`4s and 3d fill together`, correct: false, misconceptionId: "C07-M11", value: "fill_together" },
        { key: "B", text: t`3d, before 4s`, correct: false, misconceptionId: "C07-M10", value: "d3_first" },
        { key: "C", text: t`4s, before 3d`, correct: true, value: "s4_first" },
        { key: "D", text: t`4p, before 3d`, correct: false, misconceptionId: "C07-M12", value: "p4_first" },
      ],
      solution: {
        steps: [
          t`4s: $n + l$ = 4; 3d: $n + l$ = 5.`,
          t`4s fills first.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (P)" },
      stem: t`Oxygen is written $1s^2\,2s^2\,2p_x^2\,2p_y^1\,2p_z^1$, not $1s^2\,2s^2\,2p_x^2\,2p_y^2$, because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxygen" } },
      options: [
        { key: "A", text: t`Pauli's exclusion principle`, correct: false, misconceptionId: "C07-M13", value: "pauli" },
        { key: "B", text: t`the Aufbau principle`, correct: false, misconceptionId: "C07-M14", value: "aufbau" },
        { key: "C", text: t`Heisenberg's uncertainty principle`, correct: false, misconceptionId: "C07-M15", value: "heisenberg" },
        { key: "D", text: t`Hund's rule`, correct: true, value: "hund" },
      ],
      solution: {
        steps: [
          t`The 2p orbitals are filled singly first.`,
          t`That is Hund's rule.`,
        ],
      },
    },
  ],
};
