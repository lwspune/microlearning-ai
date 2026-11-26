import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Pour liquid oxygen between the poles of a strong magnet and it hangs there, caught in the field; liquid nitrogen runs straight through. Why the difference?`,
    reveal: t`An $\ce{O2}$ molecule has two unpaired electrons, so a magnetic field attracts it. Every electron in $\ce{N2}$ is paired.`,
  },
  explanation: {
    intuition: [
      t`A spinning electron behaves like a tiny magnet.`,
      t`Two electrons in the same orbital spin opposite ways, so their magnetism cancels.`,
      t`An **unpaired electron** is alone in its orbital, so its magnetism does not cancel.`,
      t`So unpaired electrons make a substance drawn into a magnetic field; fully paired ones do not.`,
    ],
    formal: [
      {
        title: "Three kinds of magnetic solids",
        points: [
          t`**Diamagnetic**: all electrons paired; weakly repelled by a magnetic field, as $\ce{NaCl}$, $\ce{H2O}$ and benzene.`,
          t`**Paramagnetic**: unpaired electrons; weakly attracted, and magnetic only while the field acts, as $\ce{O2}$ and $\ce{Cu^2+}$.`,
          t`**Ferromagnetic**: many unpaired electrons; strongly attracted, and they stay magnetised after the field is removed.`,
          t`Fe, Co, Ni, Gd and $\ce{CrO2}$ are ferromagnetic.`,
          t`In them the unpaired electrons line up in regions called **domains**; a field brings the domains into line.`,
        ],
      },
      {
        title: "Counting unpaired electrons",
        points: [
          t`Write the atom's configuration, such as Co: $[\ce{Ar}]\,3d^7\,4s^2$.`,
          t`A cation loses its 4s electrons first, then 3d ones: $\ce{Co^2+}$ is $[\ce{Ar}]\,3d^7$.`,
          t`Fill the five d orbitals singly before pairing any (Hund's rule): $3d^7$ has 3 unpaired.`,
          t`Any unpaired electron makes the ion paramagnetic; none makes it diamagnetic.`,
        ],
      },
    ],
    worked: {
      prompt: t`The nickel atom is $[\ce{Ar}]\,3d^8\,4s^2$. How many unpaired electrons does $\ce{Ni^2+}$ have, and is it diamagnetic or paramagnetic?`,
      steps: [
        t`Remove the two 4s electrons: $\ce{Ni^2+}$ is $[\ce{Ar}]\,3d^8$.`,
        t`Put one electron in each of the five d orbitals: 5 used.`,
        t`The other 3 pair up, leaving $5 - 3 = 2$ unpaired electrons.`,
        t`Unpaired electrons: $\ce{Ni^2+}$ is paramagnetic, weakly attracted while a field acts.`,
      ],
      answer: t`2 unpaired electrons; paramagnetic`,
    },
    visualSpec: t`Add electrons to five d orbitals one at a time and watch the count of unpaired electrons, and the pull of a magnet, change.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Swaps the roles of paired and unpaired electrons: takes paired electrons as the cause of paramagnetism.",
      remediation: "Paired electrons cancel each other's magnetism: all paired means diamagnetic. Unpaired electrons make a substance paramagnetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Thinks a paramagnetic substance stays magnetised after the field is removed, like a ferromagnetic one.",
      remediation: "A paramagnetic substance is magnetic only while the field acts. Only a ferromagnetic one, with aligned domains, keeps its magnetism.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks a diamagnetic substance is weakly attracted by a magnetic field.",
      remediation: "A diamagnetic substance, with all its electrons paired, is weakly repelled by a magnetic field.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Removes the 3d electrons before the 4s electrons when forming the cation.",
      remediation: t`A transition metal atom loses its 4s electrons first: Co is $3d^7\,4s^2$, and $\ce{Co^2+}$ is $3d^7$.`,
      fallback: { kind: "ext", topic: "electronic configuration (Std XI Chemistry)" },
    },
    {
      id: "C10-M5",
      mistake: "Counts the unpaired electrons of the neutral atom, not the ion.",
      remediation: "First remove as many electrons as the ion's charge, then count the unpaired ones.",
      fallback: { kind: "ext", topic: "electronic configuration (Std XI Chemistry)" },
    },
    {
      id: "C10-M6",
      mistake: "Pairs the d electrons before filling every d orbital singly.",
      remediation: "Hund's rule: each of the five d orbitals takes one electron before any of them takes a second.",
      fallback: { kind: "ext", topic: "electronic configuration (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (vi)" },
      stem: t`$\ce{Fe^3+}$ salts are paramagnetic. The iron atom is $[\ce{Ar}]\,3d^6\,4s^2$. How many unpaired electrons does an $\ce{Fe^3+}$ ion have?`,
      verify: { kind: "value", inputs: {  }, params: { el: "Fe", q: "3", form: "count" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C10-M4", value: "3" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C10-M5", value: "4" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C10-M6", value: "1" },
        { key: "D", text: t`$5$`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`Remove three electrons, two from 4s and then one from 3d: $\ce{Fe^3+}$ is $[\ce{Ar}]\,3d^5$.`,
          t`Five d electrons go one to each orbital: 5 unpaired electrons.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (vi)" },
      stem: t`The manganese atom is $[\ce{Ar}]\,3d^5\,4s^2$. How many unpaired electrons does an $\ce{Mn^3+}$ ion have?`,
      verify: { kind: "value", inputs: {  }, params: { el: "Mn", q: "3", form: "count" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C10-M4", value: "2" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C10-M5", value: "5" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C10-M6", value: "0" },
      ],
      solution: {
        steps: [
          t`Remove the two 4s electrons, then one 3d: $\ce{Mn^3+}$ is $[\ce{Ar}]\,3d^4$.`,
          t`Four d electrons sit in four separate orbitals: 4 unpaired electrons.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (vi)" },
      stem: t`The copper atom is $[\ce{Ar}]\,3d^{10}\,4s^1$. Is a $\ce{Cu+}$ ion diamagnetic or paramagnetic?`,
      verify: { kind: "value", inputs: {  }, params: { el: "Cu", q: "1", form: "class" } },
      options: [
        { key: "A", text: t`Paramagnetic: it has 1 unpaired electron`, correct: false, misconceptionId: "C10-M5", value: "para_1" },
        { key: "B", text: t`Diamagnetic: it has no unpaired electron`, correct: true, value: "dia_0" },
        { key: "C", text: t`Paramagnetic: all its electrons are paired`, correct: false, misconceptionId: "C10-M1", value: "para_0" },
        { key: "D", text: t`Paramagnetic: it has 2 unpaired electrons`, correct: false, misconceptionId: "C10-M4", value: "para_2" },
      ],
      solution: {
        steps: [
          t`$\ce{Cu+}$ loses its 4s electron: $[\ce{Ar}]\,3d^{10}$.`,
          t`Ten d electrons fill all five orbitals in pairs: no unpaired electron.`,
          t`So $\ce{Cu+}$ is diamagnetic.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (vi)" },
      stem: t`Zinc sulfide is made of $\ce{Zn^2+}$ and $\ce{S^2-}$ ions; $\ce{S^2-}$ has all its electrons paired. The zinc atom is $[\ce{Ar}]\,3d^{10}\,4s^2$. How does $\ce{ZnS}$ behave in a magnetic field?`,
      verify: { kind: "value", inputs: {  }, params: { el: "Zn", q: "2", form: "field" } },
      options: [
        { key: "A", text: t`Diamagnetic, with no unpaired electrons: weakly attracted`, correct: false, misconceptionId: "C10-M3", value: "dia_0_attracted" },
        { key: "B", text: t`Paramagnetic, with 2 unpaired electrons: weakly attracted`, correct: false, misconceptionId: "C10-M4", value: "para_2_loses" },
        { key: "C", text: t`Diamagnetic, with no unpaired electrons: weakly repelled`, correct: true, value: "dia_0_repelled" },
        { key: "D", text: t`Paramagnetic, with no unpaired electrons: weakly attracted`, correct: false, misconceptionId: "C10-M1", value: "para_0_loses" },
      ],
      solution: {
        steps: [
          t`$\ce{Zn^2+}$ loses its two 4s electrons: $[\ce{Ar}]\,3d^{10}$, all paired.`,
          t`With $\ce{S^2-}$ also fully paired, $\ce{ZnS}$ has no unpaired electron: it is diamagnetic.`,
          t`A diamagnetic solid is weakly repelled by a magnetic field.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.2 (x)" },
      stem: t`The manganese atom is $[\ce{Ar}]\,3d^5\,4s^2$. A salt of $\ce{Mn^2+}$ is placed in a magnetic field, which is then removed. Which describes it?`,
      verify: { kind: "value", inputs: {  }, params: { el: "Mn", q: "2", form: "field" } },
      options: [
        { key: "A", text: t`5 unpaired electrons; attracted, and loses its magnetism when the field goes`, correct: true, value: "para_5_loses" },
        { key: "B", text: t`5 unpaired electrons; attracted, and stays magnetised after the field goes`, correct: false, misconceptionId: "C10-M2", value: "para_5_keeps" },
        { key: "C", text: t`3 unpaired electrons; attracted, and loses its magnetism when the field goes`, correct: false, misconceptionId: "C10-M4", value: "para_3_loses" },
        { key: "D", text: t`1 unpaired electron; attracted, and loses its magnetism when the field goes`, correct: false, misconceptionId: "C10-M6", value: "para_1_loses" },
      ],
      solution: {
        steps: [
          t`$\ce{Mn^2+}$ loses its two 4s electrons: $[\ce{Ar}]\,3d^5$.`,
          t`Five d electrons, one in each orbital: 5 unpaired, so it is paramagnetic.`,
          t`A paramagnetic solid is attracted only while the field acts; it loses its magnetism when the field goes.`,
        ],
      },
    },
  ],
};
