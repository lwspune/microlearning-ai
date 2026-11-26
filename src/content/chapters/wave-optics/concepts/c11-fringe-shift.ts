import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Slip a thin sheet of clear plastic over one slit of a double-slit set-up and the whole fringe pattern slides sideways, though nothing else is touched. Why?`,
    reveal: t`Light is slower in the plastic, so that beam carries a longer optical path. The point where both beams arrive in step moves towards the covered slit, and the pattern moves with it.`,
  },
  explanation: {
    intuition: [
      t`Without the sheet, the central bright fringe is at O, where both paths are equally long.`,
      t`A thin transparent sheet over one slit makes that beam's **optical path** longer.`,
      t`The paths now match at a point nearer the covered slit, so the central fringe moves there.`,
      t`Every fringe moves by the same amount: the whole pattern shifts, and its fringe width stays the same.`,
    ],
    formal: [
      {
        title: "The extra optical path",
        points: [
          t`The **optical path** through a medium of refractive index $\mu$ is $\mu$ times the distance travelled in it.`,
          t`A sheet of thickness $t$ replaces a thickness $t$ of air in front of the slit.`,
          t`So it adds $\mu t - t = (\mu - 1)t$ to the optical path of that beam.`,
          t`The extra path is $(\mu - 1)t$, not $\mu t$: the light would have crossed $t$ of air anyway.`,
        ],
      },
      {
        title: "The shift of the pattern",
        points: [
          t`With the sheet over $S_1$, the zero-path-difference point moves to where $S_2P - S_1P = (\mu - 1)t$.`,
          t`The geometric path difference at a distance $y$ from O is $\dfrac{yd}{D}$.`,
          t`So the central fringe moves to $y_0 = \dfrac{(\mu - 1)tD}{d}$.`,
          t`With $W = \dfrac{\lambda D}{d}$, the shift is also $y_0 = \dfrac{(\mu - 1)tW}{\lambda}$.`,
          t`The shift is towards the covered slit, where the geometric path from that slit is shorter.`,
        ],
      },
      {
        title: "What stays the same",
        points: [
          t`Every fringe moves by the same $y_0$: the whole pattern shifts as one.`,
          t`The fringe width $W = \dfrac{\lambda D}{d}$ is unchanged: the sheet alters neither $\lambda$ in air, nor $D$, nor $d$.`,
          t`A sheet over both slits adds the same $(\mu - 1)t$ to both beams, so nothing shifts.`,
        ],
      },
      {
        title: "Counting fringes and finding t",
        points: [
          t`The number of fringes that pass a point is $N = \dfrac{y_0}{W} = \dfrac{(\mu - 1)t}{\lambda}$.`,
          t`Each fringe passed means one more wavelength of added path.`,
          t`So a measured shift gives the thickness: $t = \dfrac{N\lambda}{\mu - 1} = \dfrac{y_0\lambda}{(\mu - 1)W}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sheet of refractive index $1.4$ and thickness $2.75\ \mu\mathrm{m}$ covers one slit in Young's experiment, with $\lambda = 550\ \mathrm{nm}$ and fringe width $0.8\ \mathrm{mm}$. How many fringes does the pattern shift, and how far?`,
      steps: [
        t`Extra optical path: $(\mu - 1)t = 0.4 \times 2.75 \times 10^{-6}$ $= 1.1 \times 10^{-6}\ \mathrm{m}$.`,
        t`Fringes shifted: $N = \dfrac{1.1 \times 10^{-6}}{5.5 \times 10^{-7}} = 2$.`,
        t`Shift: $y_0 = NW = 2 \times 0.8 = 1.6\ \mathrm{mm}$, towards the covered slit.`,
      ],
      answer: t`2 fringes, a shift of $1.6\ \mathrm{mm}$ towards the covered slit`,
    },
    figure: {
      alt: "Two slits S₁ above S₂ and a screen. Step 1: the central bright fringe at O, opposite the midpoint of the slits. Step 2: a thin sheet placed over S₁. Step 3: the central fringe moves up to O′, towards the covered slit, where the two paths again have equal optical length.",
      axes: "none",
      view: { x: [0, 13], y: [-3.4, 3.4] },
      elements: [
        { kind: "segment", from: [3, 3], to: [3, 1.25], tone: "muted" },
        { kind: "segment", from: [3, 0.75], to: [3, -0.75], tone: "muted" },
        { kind: "segment", from: [3, -1.25], to: [3, -3], tone: "muted" },
        { kind: "point", at: [3, 1], label: "S₁", labelAt: "w" },
        { kind: "point", at: [3, -1], label: "S₂", labelAt: "w" },
        { kind: "segment", from: [11, 3], to: [11, -3] },
        { kind: "segment", from: [3, 0], to: [11, 0], dashed: true, tone: "muted", step: 1 },
        { kind: "point", at: [11, 0], label: "O", labelAt: "e", step: 1 },
        { kind: "segment", from: [3.3, 1.5], to: [3.3, 0.5], tone: "good", step: 2 },
        { kind: "segment", from: [3.6, 1.5], to: [3.6, 0.5], tone: "good", step: 2 },
        { kind: "label", at: [3.45, 1.5], label: "sheet", labelAt: "n", tone: "good", step: 2 },
        { kind: "segment", from: [3, 1], to: [11, 1.8], step: 3 },
        { kind: "segment", from: [3, -1], to: [11, 1.8], step: 3 },
        { kind: "point", at: [11, 1.8], label: "O′", labelAt: "e", step: 3 },
        { kind: "vector", tone: "good", from: [12.1, 0.1], to: [12.1, 1.7], step: 3 },
      ],
    },
    visualSpec: t`Drag a slider for the sheet's thickness and watch the whole fringe pattern slide towards the covered slit, its spacing unchanged.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Takes the added optical path as $\mu t$.`,
      remediation: t`The sheet replaces a thickness $t$ of air, so the extra optical path is $\mu t - t = (\mu - 1)t$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C11-M2",
      mistake: "Thinks the pattern shifts away from the covered slit.",
      remediation: "The covered beam's path is longer, so the paths match where the geometric path from the covered slit is shorter: towards that slit.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Thinks the sheet makes the fringes narrower.",
      remediation: t`The light travels from the slits to the screen in air, so $\lambda$, $D$ and $d$ are unchanged: $W = \dfrac{\lambda D}{d}$ stays the same.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M4",
      mistake: "Thinks a sheet over both slits shifts the pattern.",
      remediation: t`Both beams gain the same $(\mu - 1)t$, so their path difference is unchanged at every point: the pattern stays put.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Takes the added optical path itself as the shift on the screen.",
      remediation: t`The added path $(\mu - 1)t$ is matched by a geometric path difference $\dfrac{yd}{D}$, so the shift is $\dfrac{(\mu - 1)tD}{d}$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M6",
      mistake: "Counts one fringe for every half wavelength of added path.",
      remediation: t`Moving from one bright fringe to the next needs one whole wavelength of path difference, so $N = \dfrac{(\mu - 1)t}{\lambda}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M7",
      mistake: t`Takes the added path as the sheet's thickness $t$.`,
      remediation: t`Optical path counts the refractive index: the sheet adds $(\mu - 1)t$, not $t$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C11-M8",
      mistake: "Thinks the extra optical path widens the fringes.",
      remediation: t`The sheet only adds a fixed path to one beam; the fringe width $\dfrac{\lambda D}{d}$ depends on none of that.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Solved Ex.7.6" },
      stem: t`In Young's experiment with light of wavelength $6000\ \text{Å}$, the fringe width is $0.6\ \mathrm{mm}$. A thin film of refractive index $1.6$ placed near one slit shifts the central fringe by $3\ \mathrm{mm}$. What is the film's thickness?`,
      verify: { kind: "value", inputs: { lam: "6*10**-7", W_mm: "0.6", y_mm: "3", mu: "1.6" }, params: { ask: "t" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{\mu m}$`, correct: true, value: "5" },
        { key: "B", text: t`$1.88\ \mathrm{\mu m}$`, correct: false, misconceptionId: "C11-M1", value: "1.88000000000000" },
        { key: "C", text: t`$3\ \mathrm{\mu m}$`, correct: false, misconceptionId: "C11-M7", value: "3" },
        { key: "D", text: t`$2.5\ \mathrm{\mu m}$`, correct: false, misconceptionId: "C11-M6", value: "2.50000000000000" },
      ],
      solution: {
        steps: [
          t`The shift spans $\dfrac{3}{0.6} = 5$ fringe widths, so the added path is $5\lambda = 3 \times 10^{-6}\ \mathrm{m}$.`,
          t`$(\mu - 1)t = 3 \times 10^{-6}$, so $t = \dfrac{3 \times 10^{-6}}{0.6}$.`,
          t`$t = 5 \times 10^{-6}\ \mathrm{m} = 5\ \mu\mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`In a double-slit set-up the slits are $0.50\ \mathrm{mm}$ apart and the screen is $1.0\ \mathrm{m}$ away. A glass sheet ($\mu = 1.5$) of thickness $10\ \mu\mathrm{m}$ covers one slit. How far does the central fringe shift?`,
      verify: { kind: "value", inputs: { t_um: "10", mu: "1.5", D: "1", d_mm: "0.50" }, params: { ask: "shift" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{mm}$`, correct: false, misconceptionId: "C11-M7", value: "20" },
        { key: "B", text: t`$0.005\ \mathrm{mm}$`, correct: false, misconceptionId: "C11-M5", value: "0.00500000000000000" },
        { key: "C", text: t`$10\ \mathrm{mm}$`, correct: true, value: "10" },
        { key: "D", text: t`$30\ \mathrm{mm}$`, correct: false, misconceptionId: "C11-M1", value: "30" },
      ],
      solution: {
        steps: [
          t`Extra optical path: $(\mu - 1)t = 0.5 \times 10 \times 10^{-6} = 5 \times 10^{-6}\ \mathrm{m}$.`,
          t`Shift $y_0 = \dfrac{(\mu - 1)tD}{d} = \dfrac{5 \times 10^{-6} \times 1.0}{5 \times 10^{-4}}$.`,
          t`$y_0 = 0.01\ \mathrm{m} = 10\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`A transparent sheet of thickness $5\ \mu\mathrm{m}$ and refractive index $1.6$ covers one slit in Young's experiment with light of wavelength $500\ \mathrm{nm}$. How many fringes does the pattern shift by?`,
      verify: { kind: "value", inputs: { t_um: "5", mu: "1.6", lam: "5*10**-7" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C11-M1", value: "16" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C11-M7", value: "10" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C11-M6", value: "12" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Extra optical path: $(\mu - 1)t = 0.6 \times 5 \times 10^{-6} = 3 \times 10^{-6}\ \mathrm{m}$.`,
          t`$N = \dfrac{(\mu - 1)t}{\lambda} = \dfrac{3 \times 10^{-6}}{5 \times 10^{-7}} = 6$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.1 (v)" },
      stem: t`In Young's double slit experiment, a thin uniform sheet of glass is placed in front of both slits, parallel to the screen that holds them. What happens to the interference pattern?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "both" } },
      options: [
        { key: "A", text: t`The fringe width decreases`, correct: false, misconceptionId: "C11-M3", value: "narrower" },
        { key: "B", text: t`The fringe width increases`, correct: false, misconceptionId: "C11-M8", value: "wider" },
        { key: "C", text: t`It stays exactly as it was`, correct: true, value: "unchanged" },
        { key: "D", text: t`The fringes shift`, correct: false, misconceptionId: "C11-M4", value: "shifts" },
      ],
      solution: {
        steps: [
          t`Both beams pass through the same thickness of the same glass, so each gains $(\mu - 1)t$.`,
          t`Their path difference is unchanged everywhere, and $W = \dfrac{\lambda D}{d}$ is unchanged: the pattern stays as it was.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`In Young's experiment the slit $S_1$ is above the slit $S_2$. A thin glass sheet is placed over $S_1$ only. What happens to the fringes?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "one" } },
      options: [
        { key: "A", text: t`The whole pattern shifts down, away from $S_1$; the fringe width is unchanged`, correct: false, misconceptionId: "C11-M2", value: "down_same" },
        { key: "B", text: t`The pattern shifts up, towards $S_1$, and the fringes become narrower`, correct: false, misconceptionId: "C11-M3", value: "up_narrower" },
        { key: "C", text: t`The pattern shifts up, towards $S_1$, and the fringes become wider`, correct: false, misconceptionId: "C11-M8", value: "up_wider" },
        { key: "D", text: t`The whole pattern shifts up, towards $S_1$; the fringe width is unchanged`, correct: true, value: "up_same" },
      ],
      solution: {
        steps: [
          t`The sheet adds $(\mu - 1)t$ to the beam from $S_1$.`,
          t`The paths match where $S_1P$ is shorter than $S_2P$: above O, towards $S_1$.`,
          t`$\lambda$, $D$ and $d$ are unchanged, so the fringe width stays the same.`,
        ],
      },
    },
  ],
};
