import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Two polaroid sheets held crossed look black: no light gets through. Slip a third sheet between them at $45^\circ$, and light appears. How can adding a filter let more light through?`,
    reveal: t`The middle sheet turns the light's plane of vibration in two steps of $45^\circ$. Each step passes $\cos^2 45^\circ = \dfrac{1}{2}$, so $\dfrac{1}{2} \times \dfrac{1}{2} \times \dfrac{1}{2} = \dfrac{1}{8}$ of the light gets out.`,
  },
  explanation: {
    intuition: [
      t`Light is a transverse wave: its electric field vibrates across the direction of travel.`,
      t`In **unpolarized** light, such as sunlight, the field vibrates in every direction across the ray.`,
      t`A **polarizer**, such as a polaroid sheet, passes only the part of the field along its axis.`,
      t`What comes out is **plane-polarized**: it vibrates in one plane only.`,
      t`Sound, a longitudinal wave, cannot be polarized; so polarization proves light is transverse.`,
    ],
    formal: [
      {
        title: "Unpolarized light through a polarizer",
        points: [
          t`Each direction of vibration at angle $\phi$ to the axis passes a field $E\cos\phi$.`,
          t`Intensity goes as the square of the field, and the average of $\cos^2\phi$ is $\dfrac{1}{2}$.`,
          t`So the transmitted intensity is $\dfrac{I_0}{2}$, whichever way the polarizer is turned.`,
        ],
      },
      {
        title: "Malus' law",
        points: [
          t`Plane-polarized light of intensity $I$ meets a second polarizer, the **analyser**, at angle $\theta$.`,
          t`The field along the analyser's axis is $E\cos\theta$.`,
          t`So the transmitted intensity is $I\cos^2\theta$: this is **Malus' law**.`,
          t`$\theta = 0$ passes everything; $\theta = 90^\circ$, crossed, passes nothing.`,
        ],
      },
      {
        title: "Several polarizers",
        points: [
          t`Take the angle between the axes of each neighbouring pair, not with the vertical.`,
          t`Halve once at the first polarizer, then multiply by $\cos^2$ of each angle in turn.`,
          t`$I = \dfrac{I_0}{2}\cos^2\theta_1\cos^2\theta_2$ for three polarizers.`,
          t`A polarizer between two crossed ones lets light through unless it lines up with one of them.`,
        ],
      },
    ],
    worked: {
      prompt: t`Unpolarized light of intensity $40\ \mathrm{W/m^2}$ passes through a polarizer, then an analyser whose axis is at $30^\circ$ to the polarizer's. What intensity comes out?`,
      steps: [
        t`The polarizer passes half: $\dfrac{40}{2} = 20\ \mathrm{W/m^2}$.`,
        t`Malus' law at the analyser: $I = 20\cos^2 30^\circ$.`,
        t`$\cos^2 30^\circ = \dfrac{3}{4}$, so $I = 15\ \mathrm{W/m^2}$.`,
      ],
      answer: t`$15\ \mathrm{W/m^2}$`,
    },
    visualSpec: t`Turn an analyser in front of polarized light and watch the brightness follow cos² of the angle.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Forgets that the first polarizer halves unpolarized light.",
      remediation: t`Unpolarized light loses half its intensity at the first polarizer, whatever its orientation: $\dfrac{I_0}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Uses the angle with the vertical instead of the angle between the axes.",
      remediation: t`Malus' law needs the angle between the two axes: $50^\circ$ from vertical and horizontal are $40^\circ$ apart.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Uses $\cos\theta$ instead of $\cos^2\theta$.`,
      remediation: t`The field passes as $\cos\theta$, and intensity goes as the field squared: $I\cos^2\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks crossed outer polarizers block all light even with one between them.",
      remediation: t`Each polarizer acts on the light that reaches it: $P_2$ turns the plane by $\theta_1$, and $P_3$ sees an angle $\theta_2$, not $90^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Applies Malus' law to unpolarized light.",
      remediation: "Unpolarized light has every direction of vibration, so turning the polarizer changes nothing: half always gets through.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks a polarizer blocks unpolarized light.",
      remediation: "A polarizer passes the part of every vibration along its axis: half the intensity.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Takes interference as proof that light is transverse.",
      remediation: "Sound, a longitudinal wave, interferes too. Only a transverse wave can be polarized.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Takes diffraction as proof that light is transverse.",
      remediation: "Sound bends round doors as well: diffraction shows a wave, not which kind. Polarization needs a transverse wave.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Takes reflection as proof that light is transverse.",
      remediation: "Echoes show that sound reflects too. Only polarization tells transverse from longitudinal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Halves already polarized light at the analyser.",
      remediation: t`The half applies only to unpolarized light. Polarized light follows Malus' law: $I\cos^2\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: t`Uses $\sin^2\theta$ instead of $\cos^2\theta$.`,
      remediation: t`At $\theta = 0$ the axes line up and everything passes: $\cos^2 0 = 1$, so the law is $I\cos^2\theta$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.17" },
      stem: t`Unpolarized light of intensity $I_0$ falls on two polaroids. The axis of the first makes $50^\circ$ with the vertical; the axis of the second is horizontal. What fraction of $I_0$ comes out of the second?`,
      verify: { kind: "value", inputs: { a1: "50", a2: "90" }, params: { ask: "two" } },
      options: [
        { key: "A", text: t`$0.587$`, correct: false, misconceptionId: "C06-M1", value: "0.587000000000000" },
        { key: "B", text: t`$0.207$`, correct: false, misconceptionId: "C06-M2", value: "0.207000000000000" },
        { key: "C", text: t`$0.383$`, correct: false, misconceptionId: "C06-M3", value: "0.383000000000000" },
        { key: "D", text: t`$0.293$`, correct: true, value: "0.293000000000000" },
      ],
      solution: {
        steps: [
          t`The first polaroid passes $\dfrac{I_0}{2}$.`,
          t`The axes are $90^\circ - 50^\circ = 40^\circ$ apart, so $I = \dfrac{I_0}{2}\cos^2 40^\circ$.`,
          t`$I \approx 0.5 \times 0.587\,I_0 \approx 0.293\,I_0$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Solved Ex.7.1" },
      stem: t`Unpolarized light of intensity $I_0$ passes through three polarizers in turn. The axis of $P_2$ is at $30^\circ$ to that of $P_1$, and the axis of $P_3$ at $60^\circ$ to that of $P_2$, so $P_3$ is crossed with $P_1$. What fraction of $I_0$ comes out of $P_3$?`,
      verify: { kind: "value", inputs: { t1: "30", t2: "60" }, params: { ask: "three" } },
      options: [
        { key: "A", text: t`$0.0938$`, correct: true, value: "0.0938000000000000" },
        { key: "B", text: t`$0.188$`, correct: false, misconceptionId: "C06-M1", value: "0.188000000000000" },
        { key: "C", text: t`$0.217$`, correct: false, misconceptionId: "C06-M3", value: "0.217000000000000" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C06-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`After $P_1$: $\dfrac{I_0}{2}$. After $P_2$: $\dfrac{I_0}{2}\cos^2 30^\circ = \dfrac{3I_0}{8}$.`,
          t`After $P_3$: $\dfrac{3I_0}{8}\cos^2 60^\circ = \dfrac{3I_0}{32}$.`,
          t`$\dfrac{3}{32} \approx 0.0938$ of $I_0$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.1 (iii)" },
      stem: t`Unpolarized light passes through a polarizer. What happens to its intensity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unpol" } },
      options: [
        { key: "A", text: t`It falls to half, whatever the polarizer's orientation`, correct: true, value: "half" },
        { key: "B", text: t`It stays the same`, correct: false, misconceptionId: "C06-M1", value: "same" },
        { key: "C", text: t`It depends on the orientation of the polarizer`, correct: false, misconceptionId: "C06-M5", value: "orientation" },
        { key: "D", text: t`It falls to zero`, correct: false, misconceptionId: "C06-M6", value: "zero" },
      ],
      solution: {
        steps: [
          t`Unpolarized light vibrates in every direction; the polarizer passes the part along its axis.`,
          t`Averaged over all directions, that is half the intensity, whatever the orientation.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.1 (i)" },
      stem: t`Which phenomenon shows that light is a transverse wave?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "transverse" } },
      options: [
        { key: "A", text: t`Reflection`, correct: false, misconceptionId: "C06-M9", value: "reflection" },
        { key: "B", text: t`Polarization`, correct: true, value: "polarization" },
        { key: "C", text: t`Interference`, correct: false, misconceptionId: "C06-M7", value: "interference" },
        { key: "D", text: t`Diffraction`, correct: false, misconceptionId: "C06-M8", value: "diffraction" },
      ],
      solution: {
        steps: [
          t`Reflection, interference and diffraction happen with sound too, a longitudinal wave.`,
          t`Only a transverse wave can have its vibration confined to one plane: polarization.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`Plane-polarized light of intensity $16\ \mathrm{W/m^2}$ falls on an analyser whose axis is at $60^\circ$ to the light's plane of vibration. What intensity comes through?`,
      verify: { kind: "value", inputs: { I: "16", t: "60" }, params: { ask: "analyser" } },
      options: [
        { key: "A", text: t`$4\ \mathrm{W/m^2}$`, correct: true, value: "4" },
        { key: "B", text: t`$2\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C06-M10", value: "2" },
        { key: "C", text: t`$8\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C06-M3", value: "8" },
        { key: "D", text: t`$12\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C06-M11", value: "12" },
      ],
      solution: {
        steps: [
          t`The light is already polarized, so Malus' law applies directly: $I = 16\cos^2 60^\circ$.`,
          t`$\cos^2 60^\circ = \dfrac{1}{4}$, so $I = 4\ \mathrm{W/m^2}$.`,
        ],
      },
    },
  ],
};
