import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Slide a sheet of mica between the plates of a charged capacitor connected to a battery, and the battery pushes in more charge. Why does a mere insulator make room for more charge?`,
    reveal: t`The mica polarizes, and its field partly cancels the plates' field. Less voltage is needed per coulomb, so the capacitance rises $k$ times: $C = \dfrac{k\varepsilon_0A}{d}$.`,
  },
  explanation: {
    intuition: [
      t`A dielectric between the plates polarizes and weakens the field there by its dielectric constant $k$.`,
      t`A weaker field means a smaller potential difference for the same charge.`,
      t`So the capacitance, charge per volt, goes up by $k$ when the dielectric fills the gap.`,
      t`A slab that fills only part of the gap raises the capacitance less.`,
      t`Whether $Q$ or $V$ stays fixed depends on whether the battery is still connected.`,
    ],
    formal: [
      {
        title: "Filled with a dielectric",
        points: [
          t`Filling the gap: $C = \dfrac{k\varepsilon_0A}{d}$ $= kC_0$, where $C_0$ is the air value.`,
          t`Removing it divides the capacitance by $k$.`,
        ],
      },
      {
        title: "A slab filling part",
        points: [
          t`A slab of thickness $t < d$: the field is $E_0$ in the air and $\dfrac{E_0}{k}$ in the slab.`,
          t`$V$ $= E_0\left(d - t\right) + \dfrac{E_0}{k}t$ $= E_0\left(d - t + \dfrac{t}{k}\right)$.`,
          t`So $C$ $= \dfrac{\varepsilon_0A}{d - t + \dfrac{t}{k}}$.`,
          t`A metal slab has no field inside: $C = \dfrac{\varepsilon_0A}{d - t}$.`,
        ],
      },
      {
        title: "Battery on or off",
        points: [
          t`Battery connected: $V$ stays fixed, so $Q = CV$ rises when a dielectric goes in.`,
          t`Battery disconnected first: $Q$ stays fixed, so $V = \dfrac{Q}{C}$ changes the opposite way to $C$.`,
          t`Removing the dielectric from an isolated capacitor lowers $C$ and raises $V$.`,
        ],
      },
    ],
    worked: {
      prompt: t`An air capacitor of $12\ \mu\mathrm{F}$ has its plates $3\ \mathrm{mm}$ apart. A slab $2\ \mathrm{mm}$ thick, of dielectric constant $4$, is inserted. Find the new capacitance.`,
      steps: [
        t`Effective gap: $d - t + \dfrac{t}{k}$ $= 3 - 2 + \dfrac{2}{4}$ $= 1.5\ \mathrm{mm}$.`,
        t`$C'$ $= C_0\dfrac{d}{d - t + \dfrac{t}{k}}$ $= 12 \times \dfrac{3}{1.5}$.`,
        t`$C' = 24\ \mu\mathrm{F}$.`,
      ],
      answer: t`$24\ \mu\mathrm{F}$`,
    },
    visualSpec: t`Push a dielectric slab between charged plates and watch the field inside it shrink, with and without the battery attached.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: t`Multiplies the slab's thickness by $k$ instead of dividing.`,
      remediation: t`The field in the slab is $\dfrac{E_0}{k}$, so the slab acts like air of thickness $\dfrac{t}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: "Treats a partial slab as filling the gap.",
      remediation: t`$kC_0$ holds only when the dielectric fills the gap; for a slab use $d - t + \dfrac{t}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M3",
      mistake: t`Adds $\dfrac{t}{k}$ to the whole gap.`,
      remediation: t`The slab replaces thickness $t$ of air: subtract $t$, then add $\dfrac{t}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M4",
      mistake: t`Multiplies by $k$ again when the dielectric is removed.`,
      remediation: t`The dielectric multiplied $C$ by $k$; removing it divides by $k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M5",
      mistake: t`Subtracts $k$ from the capacitance.`,
      remediation: t`$k$ is a factor, not an amount: $C_{\text{air}} = \dfrac{C}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M6",
      mistake: "Thinks a dielectric does not change the capacitance.",
      remediation: t`The dielectric weakens the field, lowering $V$ for the same $Q$: $C$ rises $k$ times.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C13-M7",
      mistake: "Turns the factor upside down.",
      remediation: t`A dielectric raises the capacitance, so the factor must exceed 1: $\dfrac{4k}{k + 3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M8",
      mistake: "Drops a factor of 2.",
      remediation: t`$d - \dfrac{3d}{4} + \dfrac{3d}{4k}$ $= \dfrac{d(k + 3)}{4k}$, so the factor is $\dfrac{4k}{k + 3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M9",
      mistake: "Reasons as if the battery were still connected.",
      remediation: t`Disconnected, the charge is trapped: $Q$ stays fixed, not $V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M10",
      mistake: "Thinks removing the dielectric raises the capacitance.",
      remediation: t`The dielectric was raising $C$ by $k$; without it $C$ falls back to $\dfrac{C}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M11",
      mistake: "Thinks the potential difference falls along with the capacitance.",
      remediation: t`With $Q$ fixed, $V = \dfrac{Q}{C}$: a smaller $C$ gives a larger $V$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C13-M12",
      mistake: t`Divides by $k$ instead of multiplying.`,
      remediation: t`A dielectric weakens the field, so the same charge needs less voltage: $C = kC_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M13",
      mistake: t`Leaves the area in $\mathrm{cm^2}$.`,
      remediation: t`$4\ \mathrm{cm^2}$ $= 4 \times 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.18" },
      stem: t`A $20\ \mu\mathrm{F}$ capacitor has its plates $2\ \mathrm{mm}$ apart. A dielectric slab $1\ \mathrm{mm}$ thick, of dielectric constant $2$, is slipped between the plates. What is the new capacitance?`,
      verify: { kind: "value", inputs: { C_uF: "20", d_mm: "2", t_mm: "1", k: "2" }, params: { ask: "slab" } },
      options: [
        { key: "A", text: t`$26.7\ \mathrm{\mu F}$`, correct: true, value: "26.7000000000000" },
        { key: "B", text: t`$13.3\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C13-M1", value: "13.3000000000000" },
        { key: "C", text: t`$40\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C13-M2", value: "40" },
        { key: "D", text: t`$16\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C13-M3", value: "16" },
      ],
      solution: {
        steps: [
          t`Effective gap: $2 - 1 + \dfrac{1}{2}$ $= 1.5\ \mathrm{mm}$.`,
          t`$C'$ $= 20 \times \dfrac{2}{1.5} \approx 26.7\ \mu\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.2(viii)" },
      stem: t`A parallel plate capacitor filled with a dielectric of constant $5$ has a capacitance of $40\ \mu\mathrm{F}$. What is its capacitance when the dielectric is removed?`,
      verify: { kind: "value", inputs: { Ck_uF: "40", k: "5" }, params: { ask: "remove" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{\mu F}$`, correct: true, value: "8" },
        { key: "B", text: t`$200\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C13-M4", value: "200" },
        { key: "C", text: t`$35\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C13-M5", value: "35" },
        { key: "D", text: t`$40\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C13-M6", value: "40" },
      ],
      solution: {
        steps: [
          t`With the dielectric, $C = kC_{\text{air}}$.`,
          t`$C_{\text{air}} = \dfrac{40}{5}$ $= 8\ \mu\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.1 (ii)" },
      stem: t`A slab of dielectric constant $k$, with the same area $A$ as the plates, is $\dfrac{3d}{4}$ thick, where $d$ is the plate separation. What is the capacitance with the slab in place?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "three4" } },
      options: [
        { key: "A", text: t`$\dfrac{kA\varepsilon_0}{d}$`, correct: false, misconceptionId: "C13-M2", value: "k_full" },
        { key: "B", text: t`$\dfrac{A\varepsilon_0}{d}\left(\dfrac{4k}{k + 3}\right)$`, correct: true, value: "fourk_kp3" },
        { key: "C", text: t`$\dfrac{A\varepsilon_0}{d}\left(\dfrac{k + 3}{4k}\right)$`, correct: false, misconceptionId: "C13-M7", value: "kp3_fourk" },
        { key: "D", text: t`$\dfrac{A\varepsilon_0}{d}\left(\dfrac{2k}{k + 3}\right)$`, correct: false, misconceptionId: "C13-M8", value: "twok_kp3" },
      ],
      solution: {
        steps: [
          t`$d - t + \dfrac{t}{k}$ $= \dfrac{d}{4} + \dfrac{3d}{4k}$ $= \dfrac{d(k + 3)}{4k}$.`,
          t`$C$ $= \dfrac{A\varepsilon_0}{d}\left(\dfrac{4k}{k + 3}\right)$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.5" },
      stem: t`A capacitor with a dielectric between its plates is charged by a battery. The battery is disconnected, and then the dielectric is removed. What happens?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isolated" } },
      options: [
        { key: "A", text: t`The potential difference stays the same, the capacitance falls and the charge falls`, correct: false, misconceptionId: "C13-M9", value: "v_same_q_down" },
        { key: "B", text: t`The charge stays the same, the capacitance rises and the potential difference falls`, correct: false, misconceptionId: "C13-M10", value: "c_up_v_down" },
        { key: "C", text: t`The charge stays the same, and the capacitance and potential difference both fall`, correct: false, misconceptionId: "C13-M11", value: "v_down" },
        { key: "D", text: t`The charge stays the same, the capacitance falls and the potential difference rises`, correct: true, value: "q_same_v_up" },
      ],
      solution: {
        steps: [
          t`Disconnected, the charge cannot change: $Q$ stays the same.`,
          t`Without the dielectric $C$ falls, so $V = \dfrac{Q}{C}$ rises.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.17" },
      stem: t`A parallel plate capacitor has plates of area $4\ \mathrm{cm^2}$, $2\ \mathrm{mm}$ apart. What is its capacitance when the space between the plates is filled with a dielectric of constant $6.7$? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { A_cm2: "4", d_mm: "2", k: "6.7" }, params: { ask: "filled" } },
      options: [
        { key: "A", text: t`$1.19 \times 10^{-11}\ \mathrm{F}$`, correct: true, value: "1.19000000000000e-11" },
        { key: "B", text: t`$2.64 \times 10^{-13}\ \mathrm{F}$`, correct: false, misconceptionId: "C13-M12", value: "2.64000000000000e-13" },
        { key: "C", text: t`$1.77 \times 10^{-12}\ \mathrm{F}$`, correct: false, misconceptionId: "C13-M6", value: "1.77000000000000e-12" },
        { key: "D", text: t`$1.19 \times 10^{-7}\ \mathrm{F}$`, correct: false, misconceptionId: "C13-M13", value: "1.19000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$C_0$ $= \dfrac{8.85 \times 10^{-12} \times 4 \times 10^{-4}}{2 \times 10^{-3}}$ $= 1.77 \times 10^{-12}\ \mathrm{F}$.`,
          t`Filled: $C = kC_0$ $= 6.7 \times 1.77 \times 10^{-12} \approx 1.19 \times 10^{-11}\ \mathrm{F}$.`,
        ],
      },
    },
  ],
};
