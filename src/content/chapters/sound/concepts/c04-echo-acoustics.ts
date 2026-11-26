import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Shout across a wide valley and your voice comes back a moment later. Shout in your bedroom and it doesn't. The walls reflect sound in both places, so why no echo indoors?`,
    reveal: t`Indoors the reflection comes back too soon. The ear holds a sound for about $0.1\ \mathrm{s}$, so a reflection that returns sooner merges with the shout. In that time sound goes about $34\ \mathrm{m}$, there and back: the reflector must be at least about $17\ \mathrm{m}$ away.`,
  },
  explanation: {
    intuition: [
      t`An **echo** is a sound heard again after it reflects from a large hard surface, such as a cliff or wall.`,
      t`The reflected sound travels to the surface and back, twice the distance to it.`,
      t`The ear holds a sound for about $0.1\ \mathrm{s}$, so a distinct echo needs a reflector at least about $17\ \mathrm{m}$ away.`,
      t`In a closed hall, many reflections overlap and make a sound linger: **reverberation**.`,
      t`**Acoustics** is the science of sound: designing halls so that speech and music are heard clearly.`,
    ],
    formal: [
      {
        title: "Echo and distance",
        points: [
          t`A sound sent towards a reflector $d$ away returns after a time $t$, having gone $2d$.`,
          t`So $2d = vt$, where $v$ is the speed of sound: $d = \dfrac{vt}{2}$.`,
          t`For a distinct echo, $t$ must exceed about $0.1\ \mathrm{s}$.`,
          t`In air at $22\ ^\circ\mathrm{C}$, $v \approx 344\ \mathrm{m/s}$: $2d = 344 \times 0.1$ $= 34.4\ \mathrm{m}$, so $d \geq 17.2\ \mathrm{m}$.`,
          t`Measuring $t$ and $d$ gives the speed of sound; knowing $v$ and $t$ gives the distance.`,
        ],
      },
      {
        title: "Reverberation",
        points: [
          t`In a hall, sound reflects again and again from the walls, floor and ceiling.`,
          t`These reflections reach the listener one after another, so each sound lingers: **reverberation**.`,
          t`The **reverberation time** is how long a sound goes on being heard after its source stops.`,
          t`Too long, and each note blurs into the next; too short, and the hall sounds dead.`,
          t`Soft, porous materials such as curtains, carpets and cushioned seats absorb sound and shorten it.`,
        ],
      },
      {
        title: "Acoustics at work",
        points: [
          t`A concert hall's walls are lined to absorb sound, so that its reverberation time is just right.`,
          t`**SONAR** sends a pulse of ultrasound into water and times its echo, to find depths, shoals and submarines.`,
          t`Ultrasound echoes from inside the body give images for medical tests, such as scans of an unborn baby.`,
          t`Bats find their way, and their prey, by the echoes of their own high-pitched cries.`,
        ],
      },
    ],
    worked: {
      prompt: t`A boy fires a starting pistol $255\ \mathrm{m}$ in front of a tall building and hears the echo $1.5\ \mathrm{s}$ later. Find the speed of sound. Is the echo distinct?`,
      steps: [
        t`The sound goes to the building and back: $2 \times 255$ $= 510\ \mathrm{m}$.`,
        t`$v = \dfrac{2d}{t}$ $= \dfrac{510}{1.5}$ $= 340\ \mathrm{m/s}$.`,
        t`$1.5\ \mathrm{s}$ is far more than $0.1\ \mathrm{s}$, so he hears a distinct echo.`,
      ],
      answer: t`$340\ \mathrm{m/s}$; yes, the echo is distinct`,
    },
    visualSpec: t`Move a person towards and away from a wall, send a pulse, and watch it travel there and back on a timeline, with the 0.1 s line that separates an echo from a blur.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks the walls of a music hall should reflect sound, to keep it loud.",
      remediation: "Reflected sound makes each note linger and blur into the next. The walls should absorb sound to keep the reverberation time short.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks walls can amplify sound.",
      remediation: "A wall adds no energy: it can only reflect, absorb or let sound through. A music hall's walls absorb it, to control reverberation.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks the walls should let the sound pass out of the hall.",
      remediation: "Sound that leaves the hall is lost to the audience and disturbs the neighbours. Absorbing walls cut the reflections without letting sound out.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Forgets the return journey: takes the echo to travel only to the reflector.",
      remediation: t`An echo goes to the reflector and back, so the distance it covers is $2d$: $2d = vt$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Puts the factor $2$ on the wrong side of $2d = vt$.`,
      remediation: t`The path is twice the distance to the reflector: $d = \dfrac{vt}{2}$, and $t = \dfrac{2d}{v}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Divides the speed by the time (or the distance) instead of using distance = speed × time.",
      remediation: t`Distance $=$ speed $\times$ time, so $2d = vt$; check the units: $\dfrac{\mathrm{m/s}}{\mathrm{s}}$ is not a distance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Uses the difference between the two echo times.",
      remediation: t`Each echo is a round trip to its own cliff. Adding them, $2(d_1 + d_2) = v(t_1 + t_2)$: use the sum of the times.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Takes the clap rate divided by 60 as the time between claps.",
      remediation: t`$45$ claps a minute means $\dfrac{60}{45}$ $= \dfrac{4}{3}\ \mathrm{s}$ between claps, not $\dfrac{45}{60}\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.1 (v)" },
      stem: t`What should the walls of a hall built for music concerts do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "walls" } },
      options: [
        { key: "A", text: t`Amplify sound, so that the music reaches the back rows`, correct: false, misconceptionId: "C04-M2", value: "amplify_sound" },
        { key: "B", text: t`Transmit sound, letting it pass out of the hall`, correct: false, misconceptionId: "C04-M3", value: "transmit_sound" },
        { key: "C", text: t`Absorb sound, so that each note dies away quickly instead of echoing round the hall`, correct: true, value: "absorb_sound" },
        { key: "D", text: t`Reflect sound, so that the music stays loud for longer`, correct: false, misconceptionId: "C04-M1", value: "reflect_sound" },
      ],
      solution: {
        steps: [
          t`Too much reflection makes each note linger and blur into the next.`,
          t`So the walls are lined to absorb sound and keep the reverberation time short.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.3 (iii)" },
      stem: t`An echo-sounder on a fishing boat receives the echo from a shoal of fish $0.45\ \mathrm{s}$ after sending the pulse. Sound travels at $1500\ \mathrm{m/s}$ in water. How deep is the shoal?`,
      verify: { kind: "value", inputs: { v: "1500", t: "0.45" }, params: { ask: "depth", sf: "4" } },
      options: [
        { key: "A", text: t`$675\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M4", value: "675" },
        { key: "B", text: t`$1350\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M5", value: "1350" },
        { key: "C", text: t`$3333\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M6", value: "3333" },
        { key: "D", text: t`$337.5\ \mathrm{m}$`, correct: true, value: "337.500000000000" },
      ],
      solution: {
        steps: [
          t`The pulse goes down and back: $2d = vt$ $= 1500 \times 0.45$ $= 675\ \mathrm{m}$.`,
          t`$d = \dfrac{675}{2}$ $= 337.5\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Solved Ex.8.4" },
      stem: t`A man shouts close to a high wall $40\ \mathrm{m}$ away. Sound travels at $330\ \mathrm{m/s}$. How long after the shout does he hear the echo?`,
      verify: { kind: "value", inputs: { d: "40", v: "330" }, params: { ask: "time" } },
      options: [
        { key: "A", text: t`$0.0606\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M5", value: "0.0606000000000000" },
        { key: "B", text: t`$8.25\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M6", value: "8.25000000000000" },
        { key: "C", text: t`$0.242\ \mathrm{s}$`, correct: true, value: "0.242000000000000" },
        { key: "D", text: t`$0.121\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M4", value: "0.121000000000000" },
      ],
      solution: {
        steps: [
          t`The sound goes to the wall and back: $2 \times 40$ $= 80\ \mathrm{m}$.`,
          t`$t = \dfrac{80}{330}$ $\approx 0.242\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.3 (viii)" },
      stem: t`A man stands between two parallel cliffs $1360\ \mathrm{m}$ apart and fires a gun. He hears one echo after $3\ \mathrm{s}$ and another after $5\ \mathrm{s}$. What is the speed of sound?`,
      verify: { kind: "value", inputs: { D: "1360", t1: "3", t2: "5" }, params: { ask: "cliffs" } },
      options: [
        { key: "A", text: t`$170\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M4", value: "170" },
        { key: "B", text: t`$85\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M5", value: "85" },
        { key: "C", text: t`$1360\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M7", value: "1360" },
        { key: "D", text: t`$340\ \mathrm{m/s}$`, correct: true, value: "340" },
      ],
      solution: {
        steps: [
          t`For each cliff $2d = vt$; adding: $2(d_1 + d_2)$ $= v(t_1 + t_2)$.`,
          t`$2 \times 1360 = v \times 8$, so $v = \dfrac{2720}{8}$ $= 340\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.3 (iv)" },
      stem: t`A girl claps in front of a high wall at a steady rate, so that each clap coincides with the echo of the one before. She has to clap $45$ times a minute. Sound travels at $340\ \mathrm{m/s}$. How far is she from the wall?`,
      verify: { kind: "value", inputs: { r: "45", v: "340" }, params: { ask: "claps" } },
      options: [
        { key: "A", text: t`$128\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M8", value: "128" },
        { key: "B", text: t`$227\ \mathrm{m}$`, correct: true, value: "227" },
        { key: "C", text: t`$453\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M4", value: "453" },
        { key: "D", text: t`$907\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M5", value: "907" },
      ],
      solution: {
        steps: [
          t`Time between claps: $\dfrac{60}{45}$ $= \dfrac{4}{3}\ \mathrm{s}$; this is the echo's round trip.`,
          t`$2d = 340 \times \dfrac{4}{3}$ $\approx 453\ \mathrm{m}$, so $d \approx 227\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.2 (viii)" },
      stem: t`The ear holds a sound for about $0.1\ \mathrm{s}$. A diver under water, where sound travels at $1500\ \mathrm{m/s}$, claps two stones together. How far away must a rock face be for him to hear a distinct echo?`,
      verify: { kind: "value", inputs: { v: "1500", tp: "0.1" }, params: { ask: "least" } },
      options: [
        { key: "A", text: t`$75\ \mathrm{m}$`, correct: true, value: "75" },
        { key: "B", text: t`$150\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M4", value: "150" },
        { key: "C", text: t`$300\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M5", value: "300" },
        { key: "D", text: t`$15000\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M6", value: "15000" },
      ],
      solution: {
        steps: [
          t`The echo must take at least $0.1\ \mathrm{s}$ for the round trip: $2d = 1500 \times 0.1$ $= 150\ \mathrm{m}$.`,
          t`$d = 75\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
