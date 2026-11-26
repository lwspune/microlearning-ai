import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A red LED and a blue LED can be made in the same factory, run from the same battery and sealed in the same clear plastic. What makes one glow red and the other blue?`,
    reveal: t`The semiconductor inside. Each photon an LED gives out carries about the energy of its band gap, $E_g = \dfrac{hc}{\lambda}$: a larger band gap gives a shorter wavelength, so blue LEDs use materials with wider gaps than red ones.`,
  },
  explanation: {
    intuition: [
      t`Some p-n junctions are built to work with light: they are **optoelectronic devices**.`,
      t`A **photodiode** senses light: light falling on its junction changes the current through it.`,
      t`A **solar cell** turns the energy of light into electrical energy.`,
      t`An **LED**, a light emitting diode, does the opposite: a current through it gives out light.`,
      t`The **band gap** $E_g$ is the energy gap an electron crosses between the valence and conduction bands.`,
      t`An LED gives out photons of energy about $E_g$; the other two need photons of at least $E_g$.`,
    ],
    formal: [
      {
        title: "The photodiode",
        points: [
          t`A **photodiode** is a p-n junction with a window that lets light reach only the junction.`,
          t`It is always worked in **reverse bias**.`,
          t`In the dark only a tiny reverse current flows, the **dark current**, carried by minority carriers.`,
          t`Light of energy $h\nu > E_g$ makes new electron-hole pairs near the junction.`,
          t`The junction's field sweeps them across, so the reverse current grows in proportion to the light intensity.`,
          t`In forward bias this small photocurrent would be lost in the large forward current, so reverse bias is used.`,
        ],
      },
      {
        title: "The solar cell",
        points: [
          t`A **solar cell** is a large-area p-n junction with a thin n-side facing the light.`,
          t`It works by **photovoltaic action**: light makes a voltage directly across a junction.`,
          t`Light makes electron-hole pairs in the depletion region; its field separates them.`,
          t`Electrons pile up on the n-side and holes on the p-side, so a voltage appears across the cell.`,
          t`Joined to a load, the cell drives a current with no bias battery at all.`,
          t`Uses: calculators and watches, satellites, street lights and rooftop power.`,
        ],
      },
      {
        title: "The light emitting diode",
        points: [
          t`An **LED** is worked in **forward bias**, which lowers the barrier at its junction.`,
          t`Electrons from the n-side and holes from the p-side meet near the junction and **recombine**.`,
          t`In each recombination an electron falls across the band gap and gives out one photon.`,
          t`So $E_g = h\nu = \dfrac{hc}{\lambda}$, and $\lambda = \dfrac{hc}{E_g}$, with $hc = 1240\ \mathrm{eV\,nm}$.`,
          t`The colour depends on the material: AlGaAs gives infrared, GaAsP red or yellow, ZnSe blue.`,
          t`The brightness grows with the forward current; the colour does not change.`,
        ],
      },
      {
        title: "Using an LED",
        points: [
          t`An LED starts to conduct at about $1.5\ \mathrm{V}$ to $3.5\ \mathrm{V}$, its **cut-in voltage**.`,
          t`It takes only a few tens of milliamperes, so a resistor in series must limit the current.`,
          t`The resistor takes the rest of the supply voltage: $R = \dfrac{V - V_{LED}}{I}$.`,
          t`In its symbol, two arrows point away from the diode: light leaves it. A photodiode's arrows point in.`,
          t`Advantages: little power wasted as heat, a long life, rugged, quick to switch, nearly one colour.`,
        ],
      },
    ],
    worked: {
      prompt: t`An LED's semiconductor has a band gap of $2.76\ \mathrm{eV}$. It drops $3.0\ \mathrm{V}$ when it carries $20\ \mathrm{mA}$ from a $5.0\ \mathrm{V}$ supply. Find the wavelength of its light and the series resistor it needs.`,
      steps: [
        t`Each photon carries about the band gap: $\dfrac{hc}{\lambda} = E_g$.`,
        t`$\lambda = \dfrac{1240}{2.76}$ $\approx 449\ \mathrm{nm}$: blue light.`,
        t`The resistor takes $5.0 - 3.0 = 2.0\ \mathrm{V}$.`,
        t`$R = \dfrac{2.0}{0.020}$ $= 100\ \Omega$.`,
      ],
      answer: t`$\lambda \approx 449\ \mathrm{nm}$ (blue), $R = 100\ \Omega$`,
    },
    visualSpec: t`Slide the band gap of an LED's material and watch the colour of its light and the wavelength $\lambda = \dfrac{hc}{E_g}$ change together.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks an LED glows in reverse bias.",
      remediation: "An LED glows in forward bias: the lowered barrier lets electrons and holes meet and recombine. Reverse bias stops that.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks the light comes from a widened depletion region.",
      remediation: "A wider depletion region has fewer carriers, not more light. Light comes from electrons and holes recombining under forward bias.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks an LED glows because its junction is hot, like a filament.",
      remediation: "An LED gives light by recombination, one photon per electron falling across the band gap. Heat is only a loss.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks the colour of an LED depends on the forward current.",
      remediation: "The current sets how many photons come out, the brightness. Each photon's energy, the colour, is fixed by the band gap.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks the colour comes from the plastic case.",
      remediation: t`The light is made at the junction with energy about $E_g$; the case only lets it out. A clear-cased LED still has its colour.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Turns $E_g = \dfrac{hc}{\lambda}$ upside down.`,
      remediation: t`Energy and wavelength go opposite ways: $E_g = \dfrac{hc}{\lambda}$, so divide $1240\ \mathrm{eV\,nm}$ by $\lambda$ in nm.`,
      fallback: { kind: "ext", topic: "photon energy (Dual Nature of Radiation and Matter, Ch.14)" },
    },
    {
      id: "C05-M7",
      mistake: "Takes the photon energy as e times the applied voltage.",
      remediation: t`Some of the applied voltage is lost in the diode's resistance. The photon energy is the band gap, found from $\dfrac{hc}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: t`Uses the wavelength in $\mu\mathrm{m}$ with $hc$ in $\mathrm{eV\,nm}$.`,
      remediation: t`With $hc = 1240\ \mathrm{eV\,nm}$, put $\lambda$ in nm: $0.62\ \mu\mathrm{m}$ $= 620\ \mathrm{nm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks an LED needs no series resistor.",
      remediation: "Past its cut-in voltage an LED's current rises steeply; a series resistor keeps it to a few tens of mA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks light lowers a photodiode's reverse current.",
      remediation: "Light makes new electron-hole pairs, extra carriers, so the reverse current grows with the intensity.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Thinks a photodiode's reverse current is fixed whatever the light.",
      remediation: "In the dark it is the small fixed dark current. Light adds carriers, so the current rises with intensity.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks light makes the photodiode conduct forwards.",
      remediation: "Light does not change the bias; the extra carriers are swept across by the junction's field, adding to the reverse current.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Confuses the solar cell with the LED: thinks it works by recombination.",
      remediation: "Recombination gives light, in an LED. A solar cell must keep its electrons and holes apart: that is photovoltaic action.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks the solar cell works by diffusion across the junction.",
      remediation: "Diffusion forms the depletion region in any p-n junction. The cell's voltage comes from light: photovoltaic action.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M15",
      mistake: "Confuses photovoltaic action with photoelectric emission.",
      remediation: "No electron leaves the cell's surface. Light makes electron-hole pairs inside, and the junction's field separates them.",
      fallback: { kind: "ext", topic: "photoelectric effect (Dual Nature of Radiation and Matter, Ch.14)" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.1(vii)" },
      stem: t`An LED emits visible light when its`,
      verify: { kind: "value", inputs: {  }, params: { ask: "led" } },
      options: [
        { key: "A", text: t`junction becomes hot`, correct: false, misconceptionId: "C05-M3", value: "junction_hot" },
        { key: "B", text: t`holes and electrons recombine`, correct: true, value: "recombine" },
        { key: "C", text: t`junction is reverse biased`, correct: false, misconceptionId: "C05-M1", value: "reverse_bias" },
        { key: "D", text: t`depletion region widens`, correct: false, misconceptionId: "C05-M2", value: "depletion_widens" },
      ],
      solution: {
        steps: [
          t`An LED is forward biased, so electrons and holes are pushed into the junction region.`,
          t`There they recombine, and each recombination gives out a photon: the junction glows when holes and electrons recombine.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.2 (iii)" },
      stem: t`On which factor does the wavelength of the light emitted by an LED depend?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "colour" } },
      options: [
        { key: "A", text: t`The forward current through it`, correct: false, misconceptionId: "C05-M4", value: "forward_current" },
        { key: "B", text: t`The colour of its plastic case`, correct: false, misconceptionId: "C05-M5", value: "case_colour" },
        { key: "C", text: t`The temperature of its junction`, correct: false, misconceptionId: "C05-M3", value: "temperature_j" },
        { key: "D", text: t`The band gap of the semiconductor it is made of`, correct: true, value: "band_gap" },
      ],
      solution: {
        steps: [
          t`Each photon carries the energy given out in one recombination, about $E_g$.`,
          t`So $\lambda = \dfrac{hc}{E_g}$: the wavelength depends on the band gap of the semiconductor.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`An LED run at a forward voltage of $2.4\ \mathrm{V}$ emits light of wavelength $0.62\ \mu\mathrm{m}$. Taking $hc = 1240\ \mathrm{eV\,nm}$, what is the band gap of its semiconductor?`,
      verify: { kind: "value", inputs: { lam_um: "0.62", V: "2.4" }, params: { ask: "Eg" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{eV}$`, correct: true, value: "2" },
        { key: "B", text: t`$0.5\ \mathrm{eV}$`, correct: false, misconceptionId: "C05-M6", value: "0.500000000000000" },
        { key: "C", text: t`$2.4\ \mathrm{eV}$`, correct: false, misconceptionId: "C05-M7", value: "2.40000000000000" },
        { key: "D", text: t`$2000\ \mathrm{eV}$`, correct: false, misconceptionId: "C05-M8", value: "2000" },
      ],
      solution: {
        steps: [
          t`$\lambda = 0.62\ \mu\mathrm{m}$ $= 620\ \mathrm{nm}$.`,
          t`$E_g = \dfrac{hc}{\lambda}$ $= \dfrac{1240}{620}$ $= 2\ \mathrm{eV}$.`,
          t`The applied $2.4\ \mathrm{V}$ is more than this: the rest is lost in the diode's resistance.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.7" },
      stem: t`Which of these statements about an LED is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "true" } },
      options: [
        { key: "A", text: t`Its colour changes as the forward current is raised`, correct: false, misconceptionId: "C05-M4", value: "colour_current" },
        { key: "B", text: t`It needs no series resistor, since it limits its own current`, correct: false, misconceptionId: "C05-M9", value: "no_resistor" },
        { key: "C", text: t`It gives more light per watt than a filament lamp, wasting little as heat`, correct: true, value: "efficient" },
        { key: "D", text: t`It glows only when it is reverse biased`, correct: false, misconceptionId: "C05-M1", value: "glows_reverse" },
      ],
      solution: {
        steps: [
          t`An LED makes light by recombination, not by heating, so little power is wasted as heat.`,
          t`It glows only in forward bias, its colour is fixed by its band gap, and it needs a series resistor.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.10" },
      stem: t`A photodiode is reverse biased. What happens to the reverse current when the light falling on its junction is made brighter?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pd" } },
      options: [
        { key: "A", text: t`It increases, in proportion to the light intensity`, correct: true, value: "current_rises" },
        { key: "B", text: t`It decreases, since light raises the resistance`, correct: false, misconceptionId: "C05-M10", value: "current_falls" },
        { key: "C", text: t`It stays the same, since a reverse current is fixed`, correct: false, misconceptionId: "C05-M11", value: "current_fixed" },
        { key: "D", text: t`It stops, and a forward current flows instead`, correct: false, misconceptionId: "C05-M12", value: "turns_forward" },
      ],
      solution: {
        steps: [
          t`Brighter light makes more electron-hole pairs near the junction each second.`,
          t`The junction's field sweeps them across, so the reverse current increases in proportion to the intensity.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.1 (v)" },
      stem: t`A solar cell operates on the principle of`,
      verify: { kind: "value", inputs: {  }, params: { ask: "solar" } },
      options: [
        { key: "A", text: t`photovoltaic action`, correct: true, value: "photovoltaic" },
        { key: "B", text: t`recombination of electrons and holes`, correct: false, misconceptionId: "C05-M13", value: "recombination" },
        { key: "C", text: t`diffusion of carriers across the junction`, correct: false, misconceptionId: "C05-M14", value: "diffusion" },
        { key: "D", text: t`photoelectric emission of electrons from its surface`, correct: false, misconceptionId: "C05-M15", value: "photoemission" },
      ],
      solution: {
        steps: [
          t`Light makes electron-hole pairs, and the depletion region's field separates them.`,
          t`The charge collected on the two sides gives a voltage directly from light: photovoltaic action.`,
        ],
      },
    },
  ],
};
