import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A phone call, a TV broadcast and a satellite link look nothing alike, yet engineers describe every one of them with the same three boxes. What are they?`,
    reveal: t`A **transmitter**, a **channel** and a **receiver**. The transmitter puts the message into a form fit to send, the channel carries it, and the receiver recovers the message, despite **noise** and loss along the way.`,
  },
  explanation: {
    intuition: [
      t`Every communication system has three basic units: a **transmitter**, a **communication channel** and a **receiver**.`,
      t`The transmitter turns the message into a signal suited to the channel.`,
      t`Along the channel the signal weakens (**attenuation**) and picks up unwanted **noise**.`,
      t`The receiver extracts the original message from the signal it picks up.`,
    ],
    formal: [
      {
        title: "Basic terms",
        points: [
          t`**Signal**: information converted into electrical form; it may be analog or digital.`,
          t`**Noise**: unwanted signals that get added to the message and disturb it.`,
          t`**Attenuation**: the loss of signal strength as it travels through the channel.`,
          t`**Amplification**: raising a signal's strength with an amplifier, powered from outside.`,
        ],
      },
      {
        title: "Bandwidth and range",
        points: [
          t`**Bandwidth**: the range of frequencies a signal occupies, or a channel can carry.`,
          t`Speech needs about $2800\ \mathrm{Hz}$, music about $20\ \mathrm{kHz}$, video about $4.2\ \mathrm{MHz}$.`,
          t`**Range**: the greatest distance over which the signal can be received usefully.`,
        ],
      },
      {
        title: "Antennas and demodulation",
        points: [
          t`An antenna of length $l$ radiates power proportional to $\left(\dfrac{l}{\lambda}\right)^2$: short wavelengths radiate far more.`,
          t`**Modulation** puts the message onto a high-frequency carrier at the transmitter.`,
          t`**Demodulation** recovers the message from the modulated carrier at the receiver.`,
        ],
      },
    ],
    worked: {
      prompt: t`An antenna of fixed length radiates $40\ \mathrm{W}$ at a wavelength of $20\ \mathrm{m}$. Driven the same way at a wavelength of $10\ \mathrm{m}$, how much power does it radiate?`,
      steps: [
        t`For a fixed antenna, $P \propto \dfrac{1}{\lambda^2}$.`,
        t`Halving $\lambda$ multiplies $P$ by $2^2 = 4$: $P = 4 \times 40$ $= 160\ \mathrm{W}$.`,
      ],
      answer: t`$160\ \mathrm{W}$`,
    },
    visualSpec: t`Follow a message from the transmitter through a noisy channel to the receiver.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Lists the parts of a public-address system.",
      remediation: "Microphone, amplifier and loudspeaker are devices; the basic units are transmitter, channel and receiver.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Lists parts of one kind of link.",
      remediation: "Not every system uses a modulator or a satellite; every one has a transmitter, a channel and a receiver.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Lists features of a signal, not units of a system.",
      remediation: "Noise and signal travel through the system; its units are transmitter, channel and receiver.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Confuses noise with loudness.",
      remediation: "Noise is unwanted disturbance added to the signal, however loud the message is.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Confuses noise with the carrier.",
      remediation: "The carrier is a wanted wave that carries the message; noise is unwanted.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Confuses noise with attenuation.",
      remediation: "Attenuation is loss of strength; noise is an unwanted signal added on top.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks bandwidth is the width of the antenna.",
      remediation: "Bandwidth is a range of frequencies, not a physical width.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Takes bandwidth as the highest frequency.",
      remediation: "Bandwidth is the spread from the lowest to the highest frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Confuses bandwidth with wavelength.",
      remediation: "Bandwidth is measured in hertz: a range of frequencies.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Confuses demodulation with modulation.",
      remediation: "Modulation puts the message on the carrier; demodulation takes it off again at the receiver.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Confuses demodulation with amplification.",
      remediation: "Amplifying makes a signal stronger; demodulation separates the message from the carrier.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Confuses demodulation with filtering out noise.",
      remediation: "Demodulation recovers the message from the carrier; it does not remove noise as such.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: t`Thinks power grows with $\lambda$.`,
      remediation: t`Power $\propto \left(\dfrac{l}{\lambda}\right)^2$: longer wavelengths radiate less.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: t`Thinks power grows as $\lambda^2$.`,
      remediation: t`The wavelength is in the denominator: $P \propto \dfrac{1}{\lambda^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks radiated power does not depend on wavelength.",
      remediation: t`For a fixed antenna, $P \propto \dfrac{1}{\lambda^2}$, strongly dependent on $\lambda$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2 (xii)" },
      stem: t`What are the three basic units of any communication system?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "units" } },
      options: [
        { key: "A", text: t`Modulator, antenna and satellite`, correct: false, misconceptionId: "C04-M2", value: "mod_antenna_sat" },
        { key: "B", text: t`Source, noise and signal`, correct: false, misconceptionId: "C04-M3", value: "source_noise_signal" },
        { key: "C", text: t`Transmitter, communication channel and receiver`, correct: true, value: "tx_channel_rx" },
        { key: "D", text: t`Microphone, amplifier and loudspeaker`, correct: false, misconceptionId: "C04-M1", value: "mic_amp_speaker" },
      ],
      solution: {
        steps: [
          t`The message is sent by a transmitter, carried by a channel and picked up by a receiver.`,
          t`So the three basic units are the transmitter, the communication channel and the receiver.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2 (xvii)" },
      stem: t`In a communication system, what is meant by noise?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "noise" } },
      options: [
        { key: "A", text: t`The loudness of the message signal`, correct: false, misconceptionId: "C04-M4", value: "loudness" },
        { key: "B", text: t`The high-frequency carrier wave`, correct: false, misconceptionId: "C04-M5", value: "carrier_n" },
        { key: "C", text: t`The steady loss of signal strength as it travels`, correct: false, misconceptionId: "C04-M6", value: "attenuation" },
        { key: "D", text: t`Unwanted signals that get added to the message and disturb it`, correct: true, value: "unwanted_signals" },
      ],
      solution: {
        steps: [
          t`Along the way, unwanted signals from many sources add to the message.`,
          t`These disturbances are called noise.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2 (xviii)" },
      stem: t`What is meant by the bandwidth of a signal?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bandwidth" } },
      options: [
        { key: "A", text: t`The highest frequency in the signal`, correct: false, misconceptionId: "C04-M8", value: "highest_freq" },
        { key: "B", text: t`The wavelength of the signal`, correct: false, misconceptionId: "C04-M9", value: "wavelength_b" },
        { key: "C", text: t`The range of frequencies the signal occupies`, correct: true, value: "freq_range" },
        { key: "D", text: t`The width of the antenna that sends it`, correct: false, misconceptionId: "C04-M7", value: "antenna_width" },
      ],
      solution: {
        steps: [
          t`A signal is spread over a range of frequencies.`,
          t`That range is its bandwidth.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2 (xix)" },
      stem: t`What is demodulation?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "demod" } },
      options: [
        { key: "A", text: t`Putting the message signal onto a carrier wave, at the transmitter`, correct: false, misconceptionId: "C04-M10", value: "put_on_carrier" },
        { key: "B", text: t`Amplifying a weak signal`, correct: false, misconceptionId: "C04-M11", value: "amplify" },
        { key: "C", text: t`Filtering noise out of a signal`, correct: false, misconceptionId: "C04-M12", value: "remove_noise" },
        { key: "D", text: t`Recovering the message signal from the modulated carrier, at the receiver`, correct: true, value: "recover_message" },
      ],
      solution: {
        steps: [
          t`At the receiver the signal is a carrier modulated by the message.`,
          t`Demodulation recovers the original message from it.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2 (xxi)" },
      stem: t`For an antenna of fixed length, how does the effective power it radiates vary with the wavelength $\lambda$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "power" } },
      options: [
        { key: "A", text: t`It does not depend on the wavelength`, correct: false, misconceptionId: "C04-M15", value: "independent" },
        { key: "B", text: t`As $\dfrac{1}{\lambda^2}$: shorter wavelengths radiate far more power`, correct: true, value: "inverse_square" },
        { key: "C", text: t`As $\lambda$`, correct: false, misconceptionId: "C04-M13", value: "prop_lambda" },
        { key: "D", text: t`As $\lambda^2$`, correct: false, misconceptionId: "C04-M14", value: "prop_lambda_sq" },
      ],
      solution: {
        steps: [
          t`An antenna of length $l$ radiates power $\propto \left(\dfrac{l}{\lambda}\right)^2$.`,
          t`For fixed $l$, $P \propto \dfrac{1}{\lambda^2}$: shorter wavelengths radiate far more.`,
        ],
      },
    },
  ],
};
