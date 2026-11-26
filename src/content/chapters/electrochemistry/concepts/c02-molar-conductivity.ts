import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Adding water to a KCl solution lowers its conductivity. Yet its molar conductivity goes up. How can both be true?`,
    reveal: t`$\kappa$ counts the ions in each $\mathrm{cm^3}$, and these fall. $\Lambda = \dfrac{1000\,\kappa}{c}$ is the conductance of a whole mole: $c$ falls faster than $\kappa$, so $\Lambda$ rises.`,
  },
  explanation: {
    intuition: [
      t`Conductivity $\kappa$ depends on how many ions sit in each $\mathrm{cm^3}$, so it changes with concentration.`,
      t`To compare electrolytes fairly, take the volume of solution that holds **one mole** of electrolyte.`,
      t`The conductance of that volume is the **molar conductivity**, $\Lambda$.`,
      t`On dilution each $\mathrm{cm^3}$ holds fewer ions, so $\kappa$ falls.`,
      t`But the ions of one mole now move more freely, so $\Lambda$ rises: slowly for $\ce{KCl}$.`,
      t`In weak acetic acid, dilution also ionises more molecules, so $\Lambda$ rises steeply.`,
    ],
    formal: [
      {
        title: "Molar conductivity",
        points: [
          t`**Molar conductivity** $\Lambda$ is the conductance of the volume of solution holding 1 mol of electrolyte.`,
          t`At concentration $c\ \mathrm{mol\,L^{-1}}$, 1 mol is in $\dfrac{1000}{c}\ \mathrm{cm^3}$.`,
          t`Each $\mathrm{cm^3}$ has conductance $\kappa$, so $\Lambda = \kappa \times \dfrac{1000}{c}$.`,
          t`That is, $\Lambda = \dfrac{1000\,\kappa}{c}$, with $c$ in $\mathrm{mol\,L^{-1}}$.`,
          t`Unit: $\Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$; the SI unit is $\mathrm{S\,m^2\,mol^{-1}}$.`,
          t`$1\ \mathrm{S\,m^2\,mol^{-1}}$ $= 10^4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        ],
        figure: {
          alt: "Molar conductivity of KCl against the square root of concentration, a nearly straight line. The point for 0.01 M KCl sits at a square root of 0.1 and a molar conductivity of about 142.",
          axes: "xy",
          chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 200] },
          elements: [
            { kind: "segment", from: [0, 149.9], to: [0.33, 123.5] },
            { kind: "label", at: [0.33, 129.5], label: "KCl (strong)", labelAt: "nw" },
            { kind: "point", at: [0.1, 141.9], step: 4, label: "0.01 M", labelAt: "s" },
          ],
        },
      },
      {
        title: "Dilution: κ falls, Λ rises",
        points: [
          t`$\kappa$ is the conductance of $1\ \mathrm{cm^3}$, so it depends on the ions per $\mathrm{cm^3}$.`,
          t`On dilution the ions per $\mathrm{cm^3}$ fall, so $\kappa$ **decreases**.`,
          t`$\Lambda$ counts the ions of a whole mole, spread through a larger volume.`,
          t`Diluted, these ions are farther apart, attract one another less and move faster.`,
          t`So $\Lambda$ **increases** on dilution.`,
        ],
        figure: {
          alt: "Molar conductivity of KCl. The point for 0.1 M is lower, at about 125; diluting to 0.01 M moves along the line up and to the left, to about 142.",
          axes: "xy",
          chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 200] },
          elements: [
            { kind: "segment", from: [0, 149.9], to: [0.33, 123.5] },
            { kind: "label", at: [0.33, 129.5], label: "KCl (strong)", labelAt: "nw" },
            { kind: "point", at: [0.3162, 124.6018], step: 3, label: "0.1 M", labelAt: "s" },
            { kind: "point", at: [0.1, 141.9], step: 5, label: "0.01 M", labelAt: "s" },
            { kind: "vector", from: [0.26, 151.1], to: [0.13, 161.5], step: 5, tone: "good" },
            { kind: "label", at: [0.19, 160.7], label: "dilution", labelAt: "n", step: 5, tone: "good" },
          ],
        },
      },
      {
        title: "Strong electrolytes",
        points: [
          t`A **strong electrolyte**, like $\ce{KCl}$, is fully ionised at every concentration.`,
          t`Its $\Lambda$ rises only slowly on dilution, as the attraction between ions weakens.`,
          t`$\Lambda$ against $\sqrt{c}$ is nearly a straight line: $\Lambda = \Lambda_0 - A\sqrt{c}$.`,
          t`$\Lambda_0$ is the **molar conductivity at zero concentration**, at infinite dilution.`,
          t`Extending the line to $\sqrt{c} = 0$ gives $\Lambda_0$: $149.9\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$ for $\ce{KCl}$.`,
        ],
        figure: {
          alt: "KCl's molar conductivity falls in a straight line as the square root of concentration grows. Extended back to zero concentration as a dashed line, it meets the axis at Λ₀ = 149.9.",
          axes: "xy",
          chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 200] },
          elements: [
            { kind: "segment", from: [0.08, 143.5], to: [0.33, 123.5] },
            { kind: "label", at: [0.33, 129.5], label: "KCl (strong)", labelAt: "nw" },
            { kind: "segment", from: [0, 149.9], to: [0.08, 143.5], step: 5, dashed: true, tone: "muted" },
            { kind: "point", at: [0, 149.9], step: 5, tone: "good", label: "Λ₀ = 149.9", labelAt: "ne" },
          ],
        },
      },
      {
        title: "Weak electrolytes",
        points: [
          t`A **weak electrolyte**, like acetic acid, is only partly ionised.`,
          t`On dilution its degree of dissociation $\alpha$ rises, so many more ions form.`,
          t`So $\Lambda$ rises steeply, most of all at very low concentration.`,
          t`Its plot of $\Lambda$ against $\sqrt{c}$ is a steep curve, not a line.`,
          t`The curve cannot be extended to $\sqrt{c} = 0$, so its $\Lambda_0$ is found another way.`,
        ],
        figure: {
          alt: "Acetic acid's molar conductivity against the square root of concentration: about 5 at 0.1 M, about 49 at 0.001 M, then rising almost straight up to Λ₀ = 390.7 at zero concentration. KCl's gentle line is shown for comparison.",
          axes: "xy",
          chart: { x: 0.05, y: 100, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 440] },
          elements: [
            { kind: "segment", from: [0, 149.9], to: [0.33, 123.5], tone: "muted" },
            { kind: "label", at: [0.33, 129.5], label: "KCl (strong)", labelAt: "nw", tone: "muted" },
            { kind: "curve", points: [[0, 390.7], [0.0001, 390.5178], [0.0004, 387.8246], [0.0008, 376.9483], [0.0015, 352.6586], [0.0023, 316.0887], [0.0033, 274.2405], [0.0045, 233.8362], [0.0059, 198.2838], [0.0074, 168.3969], [0.0092, 143.7611], [0.0111, 123.5722], [0.0132, 107.0062], [0.0155, 93.3462], [0.018, 82.0075], [0.0206, 72.5264], [0.0235, 64.539], [0.0265, 57.7605], [0.0297, 51.9673], [0.0331, 46.9829], [0.0367, 42.6674], [0.0404, 38.909], [0.0444, 35.6177], [0.0485, 32.7205], [0.0528, 30.158], [0.0573, 27.8812], [0.062, 25.8498], [0.0668, 24.0302], [0.0719, 22.3942], [0.0771, 20.9182], [0.0825, 19.5821], [0.0881, 18.3691], [0.0939, 17.2645], [0.0998, 16.2559], [0.106, 15.3326], [0.1123, 14.4853], [0.1188, 13.7059], [0.1255, 12.9874], [0.1324, 12.3237], [0.1394, 11.7093], [0.1467, 11.1395], [0.1541, 10.6102], [0.1617, 10.1175], [0.1695, 9.6582], [0.1775, 9.2294], [0.1856, 8.8284], [0.194, 8.4528], [0.2025, 8.1007], [0.2112, 7.77], [0.2201, 7.4592], [0.2292, 7.1665], [0.2384, 6.8907], [0.2479, 6.6305], [0.2575, 6.3847], [0.2673, 6.1523], [0.2773, 5.9323], [0.2875, 5.7238], [0.2978, 5.5262], [0.3084, 5.3386], [0.3191, 5.1603], [0.33, 4.9908]], step: 1 },
            { kind: "label", at: [0.025, 290], label: "CH₃COOH (weak)", labelAt: "e", step: 1 },
            { kind: "point", at: [0.3162, 5.2067], step: 2, label: "0.1 M", labelAt: "n" },
            { kind: "point", at: [0.0316, 49.0194], step: 3, label: "0.001 M", labelAt: "e" },
            { kind: "point", at: [0, 390.7], step: 5, tone: "good", label: "Λ₀ = 390.7", labelAt: "e" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`For $\ce{KCl}$, $\kappa = 2.77 \times 10^{-3}\ \Omega^{-1}\,\mathrm{cm^{-1}}$ at $0.02\ \mathrm{M}$ and $\kappa = 7.17 \times 10^{-4}\ \Omega^{-1}\,\mathrm{cm^{-1}}$ at $0.005\ \mathrm{M}$. Find $\Lambda$ at each. Which way does each quantity move on dilution?`,
      steps: [
        t`At $0.02\ \mathrm{M}$: $\Lambda = \dfrac{1000\,\kappa}{c}$ $= \dfrac{2.77}{0.02}$ $= 138.5\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        t`At $0.005\ \mathrm{M}$: $\Lambda = \dfrac{0.717}{0.005}$ $= 143.4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        t`On dilution $\kappa$ fell to about a quarter, but $\Lambda$ rose.`,
        t`$\Lambda$ rose by only about $3.5\%$: $\ce{KCl}$ is a strong electrolyte.`,
      ],
      answer: t`$\Lambda = 138.5$ at $0.02\ \mathrm{M}$ and $143.4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$ at $0.005\ \mathrm{M}$; $\kappa$ falls and $\Lambda$ rises on dilution`,
      figure: {
        alt: "KCl's molar conductivity: 138.5 at 0.02 M and 143.4 at 0.005 M, on a gently falling straight line. The more dilute solution has the higher molar conductivity.",
        axes: "xy",
        chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
        view: { x: [0, 0.36], y: [0, 200] },
        elements: [
          { kind: "segment", from: [0, 148.3], to: [0.33, 125.4322], tone: "muted" },
          { kind: "point", at: [0.1414, 138.5], step: 1, label: "0.02 M: 138.5", labelAt: "sw" },
          { kind: "point", at: [0.0707, 143.4], step: 2, label: "0.005 M: 143.4", labelAt: "ne" },
        ],
      },
    },
    figure: {
      alt: "Molar conductivity against the square root of concentration. KCl, a strong electrolyte, gives a nearly straight line that rises gently towards the axis as the solution is diluted. Acetic acid, a weak electrolyte, stays low and then shoots up steeply near zero concentration.",
      axes: "xy",
      chart: { x: 0.05, y: 100, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
      view: { x: [0, 0.36], y: [0, 440] },
      elements: [
        { kind: "segment", from: [0, 149.9], to: [0.33, 123.5] },
        { kind: "label", at: [0.33, 129.5], label: "KCl (strong)", labelAt: "nw" },
        { kind: "vector", from: [0.26, 189.1], to: [0.12, 200.3], step: 5, tone: "good" },
        { kind: "label", at: [0.19, 200.7], label: "dilution", labelAt: "n", step: 5, tone: "good" },
        { kind: "curve", points: [[0, 390.7], [0.0001, 390.5178], [0.0004, 387.8246], [0.0008, 376.9483], [0.0015, 352.6586], [0.0023, 316.0887], [0.0033, 274.2405], [0.0045, 233.8362], [0.0059, 198.2838], [0.0074, 168.3969], [0.0092, 143.7611], [0.0111, 123.5722], [0.0132, 107.0062], [0.0155, 93.3462], [0.018, 82.0075], [0.0206, 72.5264], [0.0235, 64.539], [0.0265, 57.7605], [0.0297, 51.9673], [0.0331, 46.9829], [0.0367, 42.6674], [0.0404, 38.909], [0.0444, 35.6177], [0.0485, 32.7205], [0.0528, 30.158], [0.0573, 27.8812], [0.062, 25.8498], [0.0668, 24.0302], [0.0719, 22.3942], [0.0771, 20.9182], [0.0825, 19.5821], [0.0881, 18.3691], [0.0939, 17.2645], [0.0998, 16.2559], [0.106, 15.3326], [0.1123, 14.4853], [0.1188, 13.7059], [0.1255, 12.9874], [0.1324, 12.3237], [0.1394, 11.7093], [0.1467, 11.1395], [0.1541, 10.6102], [0.1617, 10.1175], [0.1695, 9.6582], [0.1775, 9.2294], [0.1856, 8.8284], [0.194, 8.4528], [0.2025, 8.1007], [0.2112, 7.77], [0.2201, 7.4592], [0.2292, 7.1665], [0.2384, 6.8907], [0.2479, 6.6305], [0.2575, 6.3847], [0.2673, 6.1523], [0.2773, 5.9323], [0.2875, 5.7238], [0.2978, 5.5262], [0.3084, 5.3386], [0.3191, 5.1603], [0.33, 4.9908]], step: 6 },
        { kind: "label", at: [0.025, 290], label: "CH₃COOH (weak)", labelAt: "e", step: 6 },
      ],
    },
    visualSpec: t`Slide the concentration down and watch kappa fall while Lambda climbs: gently along KCl's straight line, steeply up acetic acid's curve.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Leaves out the 1000: takes $\Lambda = \kappa / c$.`,
      remediation: t`With $c$ in $\mathrm{mol\,L^{-1}}$, 1 mol is in $1000/c\ \mathrm{cm^3}$, so $\Lambda = \dfrac{1000\,\kappa}{c}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Puts the 1000 on the wrong side: takes $\Lambda = \dfrac{\kappa}{1000\,c}$.`,
      remediation: t`A litre is $1000\ \mathrm{cm^3}$, so 1 mol fills $1000/c\ \mathrm{cm^3}$: the 1000 multiplies $\kappa$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Puts $c$ on top: takes $\Lambda = \dfrac{\kappa c}{1000}$, so expects $\Lambda$ to fall and $\kappa$ to rise on dilution.`,
      remediation: t`$\Lambda$ is $\kappa$ times the volume holding 1 mol, $1000/c$: $\Lambda = \dfrac{1000\,\kappa}{c}$, which rises as $c$ falls.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Counts all the ions instead of the ions per $\mathrm{cm^3}$: thinks $\kappa$ rises on dilution.`,
      remediation: t`$\kappa$ is the conductance of $1\ \mathrm{cm^3}$; dilution leaves fewer ions in each $\mathrm{cm^3}$, so $\kappa$ decreases.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Thinks $\Lambda$ falls on dilution, just as $\kappa$ does.`,
      remediation: t`$\Lambda$ is per mole, not per $\mathrm{cm^3}$: diluted, a mole's ions move more freely, so $\Lambda$ increases.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Gives a weak electrolyte the slow, straight-line rise of a strong one.",
      remediation: t`Diluting a weak electrolyte raises $\alpha$, so its $\Lambda$ rises steeply, most of all at low concentration.`,
      fallback: { kind: "ext", topic: "strong and weak electrolytes (Ionic Equilibria)" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#4" },
      stem: t`The molar conductivity of $0.05\ \mathrm{M}$ $\ce{BaCl2}$ solution at $25\ ^\circ\mathrm{C}$ is $223\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. What is its conductivity?`,
      verify: { kind: "value", inputs: { L: "223", c: "0.05" }, params: { ask: "kappa", sf: "4" } },
      options: [
        { key: "A", text: t`$0.01115\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: true, value: "0.0111500000000000" },
        { key: "B", text: t`$11.15\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C02-M1", value: "11.1500000000000" },
        { key: "C", text: t`$11150\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C02-M2", value: "11150" },
        { key: "D", text: t`$4.46 \times 10^{6}\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C02-M3", value: "4460000" },
      ],
      solution: {
        steps: [
          t`$\kappa = \dfrac{\Lambda c}{1000}$ $= \dfrac{223 \times 0.05}{1000}$.`,
          t`$\kappa = 0.01115\ \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
        ],
        figure: {
          alt: "BaCl₂, a strong electrolyte: a gently falling line. At 0.05 M, a square root of 0.224, Λ is 223.",
          axes: "xy",
          chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 320] },
          elements: [
            { kind: "segment", from: [0, 280], to: [0.3312, 195.5732], tone: "muted" },
            { kind: "label", at: [0.0108, 292.8], label: "BaCl₂ (strong)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0.2236, 223], step: 1, label: "0.05 M: 223", labelAt: "sw" },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#5" },
      stem: t`The conductivity of $0.5\ \mathrm{M}$ $\ce{BaCl2}$ at $298\ \mathrm{K}$ is $0.01\ \Omega^{-1}\,\mathrm{cm^{-1}}$. What is its molar conductivity?`,
      verify: { kind: "value", inputs: { k: "0.01", c: "0.5" }, params: { ask: "Lambda" } },
      options: [
        { key: "A", text: t`$0.02\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C02-M1", value: "0.0200000000000000" },
        { key: "B", text: t`$2 \times 10^{-5}\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C02-M2", value: "2.00000000000000e-5" },
        { key: "C", text: t`$5 \times 10^{-6}\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C02-M3", value: "5.00000000000000e-6" },
        { key: "D", text: t`$20\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: true, value: "20" },
      ],
      solution: {
        steps: [
          t`$\Lambda = \dfrac{1000\,\kappa}{c}$ $= \dfrac{1000 \times 0.01}{0.5}$.`,
          t`$\Lambda = 20\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        ],
        figure: {
          alt: "A strong electrolyte's gently falling line. At 0.5 M, a square root of 0.707, Λ is 20.",
          axes: "xy",
          chart: { x: 0.1, y: 10, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.8], y: [0, 40] },
          elements: [
            { kind: "segment", from: [0, 26], to: [0.736, 19.7548], tone: "muted" },
            { kind: "label", at: [0.024, 27.6], label: "BaCl₂", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0.7071, 20], step: 1, label: "0.5 M: 20", labelAt: "sw" },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#3" },
      stem: t`A $0.05\ \mathrm{M}$ $\ce{NaOH}$ solution has a resistance of $31.6\ \Omega$ in a conductivity cell of cell constant $0.367\ \mathrm{cm^{-1}}$. What is the molar conductivity of the solution?`,
      verify: { kind: "value", inputs: { R: "31.6", b: "0.367", c: "0.05" }, params: { ask: "Lambda" } },
      options: [
        { key: "A", text: t`$5.81 \times 10^{-7}\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C02-M3", value: "5.81000000000000e-7" },
        { key: "B", text: t`$232\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: true, value: "232" },
        { key: "C", text: t`$0.232\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C02-M1", value: "0.232000000000000" },
        { key: "D", text: t`$2.32 \times 10^{-4}\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C02-M2", value: "0.000232000000000000" },
      ],
      solution: {
        steps: [
          t`$\kappa = \dfrac{0.367}{31.6}$ $= 0.01161\ \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
          t`$\Lambda = \dfrac{1000 \times 0.01161}{0.05}$ $= 232\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        ],
        figure: {
          alt: "NaOH, a strong electrolyte: a gently falling line from Λ₀ = 248. At 0.05 M, a square root of 0.224, Λ is 232.",
          axes: "xy",
          chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 300] },
          elements: [
            { kind: "segment", from: [0, 248], to: [0.3312, 224.816], tone: "muted" },
            { kind: "label", at: [0.0108, 260], label: "NaOH (strong)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0.2236, 232.3], step: 1, label: "0.05 M: 232", labelAt: "sw" },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (ii)" },
      stem: t`On diluting the solution of an electrolyte, what happens to its molar conductivity $\Lambda$ and its conductivity $\kappa$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dilution" } },
      options: [
        { key: "A", text: t`Both $\Lambda$ and $\kappa$ decrease`, correct: false, misconceptionId: "C02-M5", value: "both_down" },
        { key: "B", text: t`$\Lambda$ increases and $\kappa$ decreases`, correct: true, value: "L_up_k_down" },
        { key: "C", text: t`$\Lambda$ decreases and $\kappa$ increases`, correct: false, misconceptionId: "C02-M3", value: "L_down_k_up" },
        { key: "D", text: t`Both $\Lambda$ and $\kappa$ increase`, correct: false, misconceptionId: "C02-M4", value: "both_up" },
      ],
      solution: {
        steps: [
          t`Fewer ions in each $\mathrm{cm^3}$, so $\kappa$ decreases.`,
          t`The ions of a mole move more freely, so $\Lambda$ increases.`,
        ],
        figure: {
          alt: "KCl's molar conductivity rises from about 125 at 0.1 M to about 142 at 0.01 M as the solution is diluted.",
          axes: "xy",
          chart: { x: 0.05, y: 50, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 200] },
          elements: [
            { kind: "segment", from: [0, 149.9], to: [0.33, 123.5], tone: "muted" },
            { kind: "label", at: [0.33, 129.5], label: "KCl (strong)", labelAt: "nw", tone: "muted" },
            { kind: "point", at: [0.3162, 124.6018], step: 1, label: "0.1 M", labelAt: "s" },
            { kind: "point", at: [0.1, 141.9], step: 2, label: "0.01 M", labelAt: "s" },
            { kind: "vector", from: [0.26, 151.1], to: [0.13, 161.5], step: 2, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (i)" },
      stem: t`A solution of acetic acid, a weak electrolyte, is diluted from $0.1\ \mathrm{M}$ to $0.001\ \mathrm{M}$. How do its $\kappa$ and $\Lambda$ change?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "weak" } },
      options: [
        { key: "A", text: t`$\kappa$ falls; $\Lambda$ rises slightly, by a few percent`, correct: false, misconceptionId: "C02-M6", value: "k_down_L_up_slightly" },
        { key: "B", text: t`$\kappa$ falls; $\Lambda$ rises steeply, about ten times`, correct: true, value: "k_down_L_up_steeply" },
        { key: "C", text: t`$\kappa$ rises; $\Lambda$ rises`, correct: false, misconceptionId: "C02-M4", value: "k_up_L_up" },
        { key: "D", text: t`$\kappa$ falls; $\Lambda$ falls`, correct: false, misconceptionId: "C02-M5", value: "k_down_L_down" },
      ],
      solution: {
        steps: [
          t`Fewer ions per $\mathrm{cm^3}$, so $\kappa$ falls.`,
          t`$\alpha$ rises sharply on dilution, so $\Lambda$ climbs from about 5 to about $49\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        ],
        figure: {
          alt: "Acetic acid's molar conductivity: about 5 at 0.1 M and about 49 at 0.001 M, nearly ten times higher.",
          axes: "xy",
          chart: { x: 0.05, y: 100, xTitle: "√c", yTitle: "Λ (Ω⁻¹ cm² mol⁻¹)" },
          view: { x: [0, 0.36], y: [0, 440] },
          elements: [
            { kind: "curve", points: [[0, 390.7], [0.0001, 390.5178], [0.0004, 387.8246], [0.0008, 376.9483], [0.0015, 352.6586], [0.0023, 316.0887], [0.0033, 274.2405], [0.0045, 233.8362], [0.0059, 198.2838], [0.0074, 168.3969], [0.0092, 143.7611], [0.0111, 123.5722], [0.0132, 107.0062], [0.0155, 93.3462], [0.018, 82.0075], [0.0206, 72.5264], [0.0235, 64.539], [0.0265, 57.7605], [0.0297, 51.9673], [0.0331, 46.9829], [0.0367, 42.6674], [0.0404, 38.909], [0.0444, 35.6177], [0.0485, 32.7205], [0.0528, 30.158], [0.0573, 27.8812], [0.062, 25.8498], [0.0668, 24.0302], [0.0719, 22.3942], [0.0771, 20.9182], [0.0825, 19.5821], [0.0881, 18.3691], [0.0939, 17.2645], [0.0998, 16.2559], [0.106, 15.3326], [0.1123, 14.4853], [0.1188, 13.7059], [0.1255, 12.9874], [0.1324, 12.3237], [0.1394, 11.7093], [0.1467, 11.1395], [0.1541, 10.6102], [0.1617, 10.1175], [0.1695, 9.6582], [0.1775, 9.2294], [0.1856, 8.8284], [0.194, 8.4528], [0.2025, 8.1007], [0.2112, 7.77], [0.2201, 7.4592], [0.2292, 7.1665], [0.2384, 6.8907], [0.2479, 6.6305], [0.2575, 6.3847], [0.2673, 6.1523], [0.2773, 5.9323], [0.2875, 5.7238], [0.2978, 5.5262], [0.3084, 5.3386], [0.3191, 5.1603], [0.33, 4.9908]], tone: "muted" },
            { kind: "label", at: [0.045, 150], label: "CH₃COOH", labelAt: "e", tone: "muted" },
            { kind: "point", at: [0.3162, 5.2067], step: 2, label: "0.1 M: 5.2", labelAt: "n" },
            { kind: "point", at: [0.0316, 49.0194], step: 2, label: "0.001 M: 49", labelAt: "e" },
          ],
        },
      },
    },
  ],
};
