import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Two people sing the same note, equally loudly, behind a curtain. You still know at once which is your friend. If the note and the loudness are the same, what is left to tell them apart?`,
    reveal: t`Its **quality**. Each voice mixes its own blend of fainter, higher overtones with the main note, so the two waves have different shapes. Pitch, loudness and quality are the three things the ear judges in any sound.`,
  },
  explanation: {
    intuition: [
      t`The ear judges a sound by three qualities: its pitch, its loudness and its quality.`,
      t`**Pitch**, how high or low a note sounds, is set by its frequency.`,
      t`**Loudness** is set by the intensity: the energy the wave carries each second through each square metre.`,
      t`**Quality**, or timbre, is set by the overtones mixed with the main note.`,
      t`When two waves meet, each acts as if the other were not there, and their displacements add.`,
    ],
    formal: [
      {
        title: "Pitch and loudness",
        points: [
          t`A higher frequency gives a higher pitch; a whistle has a higher pitch than a drum.`,
          t`Pitch does not depend on how loud the note is, and all notes travel at the same speed in air.`,
          t`The **intensity** $I$ is the power carried through unit area at right angles to the wave, in $\mathrm{W/m^2}$.`,
          t`It grows as the square of the amplitude: $I \propto A^2$.`,
          t`The ear hears loudness on a log scale: the **sound level** is $L = 10\log_{10}\dfrac{I}{I_0}$ decibels (dB).`,
          t`$I_0 = 10^{-12}\ \mathrm{W/m^2}$ is the faintest sound we can hear; each tenfold rise in $I$ adds $10\ \mathrm{dB}$.`,
        ],
      },
      {
        title: "Quality of sound",
        points: [
          t`An instrument vibrates at its lowest frequency, the **fundamental**, and at higher **overtones** at once.`,
          t`The fundamental sets the pitch we hear.`,
          t`Each instrument or voice mixes in its own overtones, with their own strengths.`,
          t`So two instruments playing the same note have waves of different shapes: their **quality** differs.`,
        ],
      },
      {
        title: "Principle of superposition",
        points: [
          t`When two or more waves reach a point at the same time, each produces its own displacement there.`,
          t`The resultant displacement is the vector sum: $\vec{y}$ $= \vec{y}_1 + \vec{y}_2 + \cdots$.`,
          t`Displacements in the same direction add; in opposite directions they cancel, wholly or partly.`,
          t`After crossing, each wave carries on with its own shape, frequency and amplitude.`,
          t`Superposition explains interference, beats and stationary waves.`,
        ],
      },
      {
        title: "Adding two sounds",
        points: [
          t`Sounds perfectly in phase add their amplitudes, and $I \propto A^2$.`,
          t`So $I$ $= \left(\sqrt{I_1} + \sqrt{I_2}\right)^2$, not $I_1 + I_2$.`,
          t`Turn each level into an intensity, add, then turn the result back into decibels.`,
          t`Decibels never simply add: two $60\ \mathrm{dB}$ sounds do not make $120\ \mathrm{dB}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Taking $I_0 = 10^{-12}\ \mathrm{W/m^2}$, find the sound level of a whisper of intensity $10^{-10}\ \mathrm{W/m^2}$ and of a busy street of intensity $10^{-4}\ \mathrm{W/m^2}$.`,
      steps: [
        t`Whisper: $\dfrac{I}{I_0} = 10^{2}$, so $L = 10\log_{10}10^{2}$ $= 20\ \mathrm{dB}$.`,
        t`Street: $\dfrac{I}{I_0} = 10^{8}$, so $L = 10\log_{10}10^{8}$ $= 80\ \mathrm{dB}$.`,
        t`The street is a million times as intense, yet only $60\ \mathrm{dB}$ higher: the scale is logarithmic.`,
      ],
      answer: t`$20\ \mathrm{dB}$ and $80\ \mathrm{dB}$`,
    },
    visualSpec: t`Slide two pulses along a string towards each other and watch their displacements add as they overlap, then pass on unchanged.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Adds the two decibel levels.",
      remediation: "Decibels are a log scale and never simply add: change each level to an intensity, combine, and change back.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Adds the two intensities, ignoring that the sounds are in phase.",
      remediation: t`In phase, the amplitudes add, and $I \propto A^2$: $I$ $= \left(\sqrt{I_1} + \sqrt{I_2}\right)^2$, more than $I_1 + I_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks the quieter sound adds nothing to the louder one.",
      remediation: "Both waves add their displacements at every point, so the level rises above the louder one's, if only by a few decibels.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Leaves out the $10$ in $L = 10\log_{10}\dfrac{I}{I_0}$.`,
      remediation: t`$\log_{10}\dfrac{I}{I_0}$ is in bels; a decibel is a tenth of a bel, so multiply by $10$: a hundredfold rise adds $20\ \mathrm{dB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Takes the sound level to be proportional to the intensity.",
      remediation: t`The level is logarithmic: each tenfold rise in intensity adds $10\ \mathrm{dB}$, so a hundredfold rise adds $20\ \mathrm{dB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Uses $20\log_{10}$ for an intensity ratio.`,
      remediation: t`For intensities the level is $10\log_{10}\dfrac{I}{I_0}$; $100$ times the intensity adds $10 \times 2 = 20\ \mathrm{dB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Thinks the pitch of a note is set by its amplitude.",
      remediation: "Amplitude sets the loudness. Pitch is set by the frequency: a higher note vibrates more times each second.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks different notes or instruments send sound at different speeds.",
      remediation: "All sounds travel through the same air at the same speed, whatever their pitch or source; the speed is set by the medium.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks the pitch of a note is set by its overtones.",
      remediation: "The overtones set the quality. The pitch heard is set by the frequency of the fundamental.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks two instruments sound different because they play slightly different frequencies.",
      remediation: "Playing the same note, they share the fundamental frequency. They differ in the overtones mixed with it, which change the waveform.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks one instrument's sound is transverse and the other's longitudinal.",
      remediation: "Every sound in air is longitudinal, whatever made it. Instruments differ in the overtones they mix in.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M12",
      mistake: "Adds the sizes of the displacements, ignoring their directions.",
      remediation: t`Superposition is a vector sum: an upward $3\ \mathrm{mm}$ and a downward $5\ \mathrm{mm}$ partly cancel, giving $3 - 5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks the larger displacement simply wins.",
      remediation: t`Each wave contributes its own displacement and the two add: $3 + (-5) = -2\ \mathrm{mm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Averages the two displacements.",
      remediation: t`The displacements add; they are not averaged: $y = y_1 + y_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks the pulses bounce off each other.",
      remediation: "Waves do not push on one another: they pass through each other and carry on in their own directions.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M16",
      mistake: "Thinks pulses that cancel destroy each other for good.",
      remediation: "They cancel only for the instant they overlap; the energy is still there, and both pulses carry on unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M17",
      mistake: "Thinks the two pulses merge into one.",
      remediation: "Each pulse keeps its identity: they add only while they overlap, then separate unchanged.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Solved Ex.8.5" },
      stem: t`Heard on their own, two sounds have levels of $60\ \mathrm{dB}$ and $55\ \mathrm{dB}$. What is the level when they sound together, perfectly in phase?`,
      verify: { kind: "value", inputs: { L1: "60", L2: "55" }, params: { ask: "inphase" } },
      options: [
        { key: "A", text: t`$115\ \mathrm{dB}$`, correct: false, misconceptionId: "C06-M1", value: "115" },
        { key: "B", text: t`$61.2\ \mathrm{dB}$`, correct: false, misconceptionId: "C06-M2", value: "61.2000000000000" },
        { key: "C", text: t`$60\ \mathrm{dB}$`, correct: false, misconceptionId: "C06-M3", value: "60" },
        { key: "D", text: t`$63.9\ \mathrm{dB}$`, correct: true, value: "63.9000000000000" },
      ],
      solution: {
        steps: [
          t`In units of $I_0$: $I_1 = 10^{6}$, $I_2 = 10^{5.5}$ $\approx 3.16 \times 10^5$.`,
          t`In phase: $I$ $= \left(\sqrt{I_1} + \sqrt{I_2}\right)^2$ $= (1000 + 562)^2$ $\approx 2.44 \times 10^6$.`,
          t`$L$ $= 10\log_{10}\left(2.44 \times 10^6\right)$ $\approx 63.9\ \mathrm{dB}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`A sound has a level of $40\ \mathrm{dB}$. Its intensity is made $100$ times as large. What is its new level?`,
      verify: { kind: "value", inputs: { L: "40", k: "100" }, params: { ask: "raise" } },
      options: [
        { key: "A", text: t`$60\ \mathrm{dB}$`, correct: true, value: "60" },
        { key: "B", text: t`$42\ \mathrm{dB}$`, correct: false, misconceptionId: "C06-M4", value: "42" },
        { key: "C", text: t`$4000\ \mathrm{dB}$`, correct: false, misconceptionId: "C06-M5", value: "4000" },
        { key: "D", text: t`$80\ \mathrm{dB}$`, correct: false, misconceptionId: "C06-M6", value: "80" },
      ],
      solution: {
        steps: [
          t`Each tenfold rise in intensity adds $10\ \mathrm{dB}$; $100 = 10^2$ adds $10\log_{10}100$ $= 20\ \mathrm{dB}$.`,
          t`New level: $40 + 20$ $= 60\ \mathrm{dB}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`Two notes are played on the same flute, equally loudly. One sounds higher than the other. What is different about the higher note?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pitch" } },
      options: [
        { key: "A", text: t`Its frequency is higher`, correct: true, value: "pitch_freq" },
        { key: "B", text: t`Its amplitude is larger`, correct: false, misconceptionId: "C06-M7", value: "pitch_amplitude" },
        { key: "C", text: t`It travels faster through the air`, correct: false, misconceptionId: "C06-M8", value: "pitch_speed" },
        { key: "D", text: t`It has more overtones mixed in`, correct: false, misconceptionId: "C06-M9", value: "pitch_overtones" },
      ],
      solution: {
        steps: [
          t`Equal loudness means equal amplitudes, and all notes travel at the same speed in air.`,
          t`Pitch is set by frequency: the higher note has the higher frequency.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`A violin and a flute play the same note, equally loudly. Why can you still tell which is which?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "timbre" } },
      options: [
        { key: "A", text: t`The violin's sound is a transverse wave and the flute's longitudinal`, correct: false, misconceptionId: "C06-M11", value: "timbre_kind" },
        { key: "B", text: t`Each mixes different overtones with the fundamental, so their waveforms differ`, correct: true, value: "timbre_overtones" },
        { key: "C", text: t`Their fundamental frequencies are slightly different`, correct: false, misconceptionId: "C06-M10", value: "timbre_freq" },
        { key: "D", text: t`Their sounds travel through the air at different speeds`, correct: false, misconceptionId: "C06-M8", value: "timbre_speed" },
      ],
      solution: {
        steps: [
          t`The same note means the same fundamental frequency; equally loud means the same intensity.`,
          t`What differs is the mix of overtones, which gives each wave its own shape: the quality.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.2 (xiii)" },
      stem: t`Two waves on a string reach the same point at the same instant. On its own, one would displace the point $3\ \mathrm{mm}$ upwards, the other $5\ \mathrm{mm}$ downwards. Taking upwards as positive, what is the resultant displacement?`,
      verify: { kind: "value", inputs: { y1: "3", y2: "-5" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$-2\ \mathrm{mm}$`, correct: true, value: "-2" },
        { key: "B", text: t`$8\ \mathrm{mm}$`, correct: false, misconceptionId: "C06-M12", value: "8" },
        { key: "C", text: t`$-5\ \mathrm{mm}$`, correct: false, misconceptionId: "C06-M13", value: "-5" },
        { key: "D", text: t`$-1\ \mathrm{mm}$`, correct: false, misconceptionId: "C06-M14", value: "-1" },
      ],
      solution: {
        steps: [
          t`By superposition the displacements add with their signs: $y = y_1 + y_2$.`,
          t`$y = 3 + (-5)$ $= -2\ \mathrm{mm}$, that is $2\ \mathrm{mm}$ downwards.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`Two pulses travel towards each other along a stretched string, one upwards and one downwards, and meet. What happens after they have crossed?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cross" } },
      options: [
        { key: "A", text: t`Where they cancel they destroy each other, and both pulses vanish`, correct: false, misconceptionId: "C06-M16", value: "cross_vanish" },
        { key: "B", text: t`They merge into a single pulse that moves on`, correct: false, misconceptionId: "C06-M17", value: "cross_merge" },
        { key: "C", text: t`Each carries on with its own shape, as if the other had never been there`, correct: true, value: "cross_unchanged" },
        { key: "D", text: t`They bounce off each other and travel back the way they came`, correct: false, misconceptionId: "C06-M15", value: "cross_bounce" },
      ],
      solution: {
        steps: [
          t`While they overlap, their displacements add, and may cancel for an instant.`,
          t`Waves do not disturb one another, so after crossing each carries on with its own shape and direction.`,
        ],
      },
    },
  ],
};
