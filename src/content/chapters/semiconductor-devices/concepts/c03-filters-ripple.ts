import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Run a radio straight off a full-wave rectifier on $50\ \mathrm{Hz}$ mains and it hums with a low, steady note. What is the hum, and how is it silenced?`,
    reveal: t`It is the **ripple**: the rectifier's output still rises and falls $100$ times a second. A **filter**, a capacitor across the load or a choke in series with it, strips that AC part and leaves nearly steady DC.`,
  },
  explanation: {
    intuition: [
      t`A rectifier's output flows one way, but it still rises and falls in pulses.`,
      t`Such an output is a steady **DC part** plus a varying **AC part**.`,
      t`The AC part left in the output of a rectifier is called the **ripple**.`,
      t`The less ripple, the better: gadgets need a steady voltage.`,
      t`A **filter** removes the ripple and lets the DC part through.`,
    ],
    formal: [
      {
        title: "Ripple and ripple factor",
        points: [
          t`The **ripple factor** $r$ $= \dfrac{\text{rms value of AC part}}{\text{DC value}}$ $= \dfrac{V_{ac}}{V_{dc}}$.`,
          t`A half-wave rectifier has $r = 1.21$: its AC part is larger than its DC part.`,
          t`A full-wave rectifier has $r = 0.482$: less than half the ripple.`,
          t`The ripple repeats with the output: frequency $f$ for half wave, $2f$ for full wave.`,
          t`A smaller ripple factor means a steadier output.`,
        ],
      },
      {
        title: "Why filters are needed",
        points: [
          t`Most electronic gadgets, a TV or a mobile charger, need a steady DC supply.`,
          t`A **filter** is a circuit that removes the AC part (the ripple) and passes the DC part.`,
          t`It sits between the rectifier and the load; its output is nearly pure DC.`,
          t`It works because capacitors and inductors treat AC and DC very differently.`,
        ],
      },
      {
        title: "Capacitor-input filter",
        points: [
          t`A capacitor $C$ is joined across the load $R_L$, in parallel with it.`,
          t`During each pulse the capacitor charges up to the peak voltage.`,
          t`Between pulses it discharges slowly through $R_L$, holding the voltage up.`,
          t`Its reactance $X_C = \dfrac{1}{2\pi fC}$ is small for the ripple, so the AC part bypasses the load.`,
          t`For DC, $X_C$ is infinite, so the DC part goes through the load.`,
          t`A larger $C$, or a higher ripple frequency, gives a smaller $X_C$ and less ripple.`,
        ],
        figure: {
          alt: "The same rectifier output, dashed, and in green the output with a capacitor across the load. Step 2: the filtered output: the capacitor charges to the peak with each pulse, and between pulses it discharges slowly through the load, so the voltage falls only a little.",
          axes: "xy",
          chart: { x: 10, y: 5, xTitle: "t (ms)", yTitle: "V (volt)" },
          view: { x: [0, 50], y: [-2, 13] },
          elements: [
            { kind: "segment", from: [0, 0], to: [40, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.25, 0.785], [0.5, 1.564], [0.75, 2.334], [1, 3.09], [1.25, 3.827], [1.5, 4.54], [1.75, 5.225], [2, 5.878], [2.25, 6.494], [2.5, 7.071], [2.75, 7.604], [3, 8.09], [3.25, 8.526], [3.5, 8.91], [3.75, 9.239], [4, 9.511], [4.25, 9.724], [4.5, 9.877], [4.75, 9.969], [5, 10], [5.25, 9.969], [5.5, 9.877], [5.75, 9.724], [6, 9.511], [6.25, 9.239], [6.5, 8.91], [6.75, 8.526], [7, 8.09], [7.25, 7.604], [7.5, 7.071], [7.75, 6.494], [8, 5.878], [8.25, 5.225], [8.5, 4.54], [8.75, 3.827], [9, 3.09], [9.25, 2.334], [9.5, 1.564], [9.75, 0.785], [10, 0], [10.25, 0.785], [10.5, 1.564], [10.75, 2.334], [11, 3.09], [11.25, 3.827], [11.5, 4.54], [11.75, 5.225], [12, 5.878], [12.25, 6.494], [12.5, 7.071], [12.75, 7.604], [13, 8.09], [13.25, 8.526], [13.5, 8.91], [13.75, 9.239], [14, 9.511], [14.25, 9.724], [14.5, 9.877], [14.75, 9.969], [15, 10], [15.25, 9.969], [15.5, 9.877], [15.75, 9.724], [16, 9.511], [16.25, 9.239], [16.5, 8.91], [16.75, 8.526], [17, 8.09], [17.25, 7.604], [17.5, 7.071], [17.75, 6.494], [18, 5.878], [18.25, 5.225], [18.5, 4.54], [18.75, 3.827], [19, 3.09], [19.25, 2.334], [19.5, 1.564], [19.75, 0.785], [20, 0], [20.25, 0.785], [20.5, 1.564], [20.75, 2.334], [21, 3.09], [21.25, 3.827], [21.5, 4.54], [21.75, 5.225], [22, 5.878], [22.25, 6.494], [22.5, 7.071], [22.75, 7.604], [23, 8.09], [23.25, 8.526], [23.5, 8.91], [23.75, 9.239], [24, 9.511], [24.25, 9.724], [24.5, 9.877], [24.75, 9.969], [25, 10], [25.25, 9.969], [25.5, 9.877], [25.75, 9.724], [26, 9.511], [26.25, 9.239], [26.5, 8.91], [26.75, 8.526], [27, 8.09], [27.25, 7.604], [27.5, 7.071], [27.75, 6.494], [28, 5.878], [28.25, 5.225], [28.5, 4.54], [28.75, 3.827], [29, 3.09], [29.25, 2.334], [29.5, 1.564], [29.75, 0.785], [30, 0], [30.25, 0.785], [30.5, 1.564], [30.75, 2.334], [31, 3.09], [31.25, 3.827], [31.5, 4.54], [31.75, 5.225], [32, 5.878], [32.25, 6.494], [32.5, 7.071], [32.75, 7.604], [33, 8.09], [33.25, 8.526], [33.5, 8.91], [33.75, 9.239], [34, 9.511], [34.25, 9.724], [34.5, 9.877], [34.75, 9.969], [35, 10], [35.25, 9.969], [35.5, 9.877], [35.75, 9.724], [36, 9.511], [36.25, 9.239], [36.5, 8.91], [36.75, 8.526], [37, 8.09], [37.25, 7.604], [37.5, 7.071], [37.75, 6.494], [38, 5.878], [38.25, 5.225], [38.5, 4.54], [38.75, 3.827], [39, 3.09], [39.25, 2.334], [39.5, 1.564], [39.75, 0.785], [40, 0]], tone: "muted", dashed: true },
            { kind: "curve", points: [[0, 0], [0.125, 0.393], [0.25, 0.785], [0.375, 1.175], [0.5, 1.564], [0.625, 1.951], [0.75, 2.334], [0.875, 2.714], [1, 3.09], [1.125, 3.461], [1.25, 3.827], [1.375, 4.187], [1.5, 4.54], [1.625, 4.886], [1.75, 5.225], [1.875, 5.556], [2, 5.878], [2.125, 6.191], [2.25, 6.494], [2.375, 6.788], [2.5, 7.071], [2.625, 7.343], [2.75, 7.604], [2.875, 7.853], [3, 8.09], [3.125, 8.315], [3.25, 8.526], [3.375, 8.725], [3.5, 8.91], [3.625, 9.081], [3.75, 9.239], [3.875, 9.382], [4, 9.511], [4.125, 9.625], [4.25, 9.724], [4.375, 9.808], [4.5, 9.877], [4.625, 9.931], [4.75, 9.969], [4.875, 9.992], [5, 10], [5.125, 9.992], [5.25, 9.971], [5.375, 9.951], [5.5, 9.93], [5.625, 9.909], [5.75, 9.889], [5.875, 9.868], [6, 9.848], [6.125, 9.827], [6.25, 9.807], [6.375, 9.786], [6.5, 9.766], [6.625, 9.746], [6.75, 9.725], [6.875, 9.705], [7, 9.685], [7.125, 9.665], [7.25, 9.645], [7.375, 9.625], [7.5, 9.604], [7.625, 9.584], [7.75, 9.565], [7.875, 9.545], [8, 9.525], [8.125, 9.505], [8.25, 9.485], [8.375, 9.465], [8.5, 9.446], [8.625, 9.426], [8.75, 9.406], [8.875, 9.387], [9, 9.367], [9.125, 9.348], [9.25, 9.328], [9.375, 9.309], [9.5, 9.29], [9.625, 9.27], [9.75, 9.251], [9.875, 9.232], [10, 9.213], [10.125, 9.193], [10.25, 9.174], [10.375, 9.155], [10.5, 9.136], [10.625, 9.117], [10.75, 9.098], [10.875, 9.079], [11, 9.06], [11.125, 9.041], [11.25, 9.023], [11.375, 9.004], [11.5, 8.985], [11.625, 8.966], [11.75, 8.948], [11.875, 8.929], [12, 8.911], [12.125, 8.892], [12.25, 8.873], [12.375, 8.855], [12.5, 8.837], [12.625, 8.818], [12.75, 8.8], [12.875, 8.781], [13, 8.763], [13.125, 8.745], [13.25, 8.727], [13.375, 8.725], [13.5, 8.91], [13.625, 9.081], [13.75, 9.239], [13.875, 9.382], [14, 9.511], [14.125, 9.625], [14.25, 9.724], [14.375, 9.808], [14.5, 9.877], [14.625, 9.931], [14.75, 9.969], [14.875, 9.992], [15, 10], [15.125, 9.992], [15.25, 9.971], [15.375, 9.951], [15.5, 9.93], [15.625, 9.909], [15.75, 9.889], [15.875, 9.868], [16, 9.848], [16.125, 9.827], [16.25, 9.807], [16.375, 9.786], [16.5, 9.766], [16.625, 9.746], [16.75, 9.725], [16.875, 9.705], [17, 9.685], [17.125, 9.665], [17.25, 9.645], [17.375, 9.625], [17.5, 9.604], [17.625, 9.584], [17.75, 9.565], [17.875, 9.545], [18, 9.525], [18.125, 9.505], [18.25, 9.485], [18.375, 9.465], [18.5, 9.446], [18.625, 9.426], [18.75, 9.406], [18.875, 9.387], [19, 9.367], [19.125, 9.348], [19.25, 9.328], [19.375, 9.309], [19.5, 9.29], [19.625, 9.27], [19.75, 9.251], [19.875, 9.232], [20, 9.213], [20.125, 9.193], [20.25, 9.174], [20.375, 9.155], [20.5, 9.136], [20.625, 9.117], [20.75, 9.098], [20.875, 9.079], [21, 9.06], [21.125, 9.041], [21.25, 9.023], [21.375, 9.004], [21.5, 8.985], [21.625, 8.966], [21.75, 8.948], [21.875, 8.929], [22, 8.911], [22.125, 8.892], [22.25, 8.873], [22.375, 8.855], [22.5, 8.837], [22.625, 8.818], [22.75, 8.8], [22.875, 8.781], [23, 8.763], [23.125, 8.745], [23.25, 8.727], [23.375, 8.725], [23.5, 8.91], [23.625, 9.081], [23.75, 9.239], [23.875, 9.382], [24, 9.511], [24.125, 9.625], [24.25, 9.724], [24.375, 9.808], [24.5, 9.877], [24.625, 9.931], [24.75, 9.969], [24.875, 9.992], [25, 10], [25.125, 9.992], [25.25, 9.971], [25.375, 9.951], [25.5, 9.93], [25.625, 9.909], [25.75, 9.889], [25.875, 9.868], [26, 9.848], [26.125, 9.827], [26.25, 9.807], [26.375, 9.786], [26.5, 9.766], [26.625, 9.746], [26.75, 9.725], [26.875, 9.705], [27, 9.685], [27.125, 9.665], [27.25, 9.645], [27.375, 9.625], [27.5, 9.604], [27.625, 9.584], [27.75, 9.565], [27.875, 9.545], [28, 9.525], [28.125, 9.505], [28.25, 9.485], [28.375, 9.465], [28.5, 9.446], [28.625, 9.426], [28.75, 9.406], [28.875, 9.387], [29, 9.367], [29.125, 9.348], [29.25, 9.328], [29.375, 9.309], [29.5, 9.29], [29.625, 9.27], [29.75, 9.251], [29.875, 9.232], [30, 9.213], [30.125, 9.193], [30.25, 9.174], [30.375, 9.155], [30.5, 9.136], [30.625, 9.117], [30.75, 9.098], [30.875, 9.079], [31, 9.06], [31.125, 9.041], [31.25, 9.023], [31.375, 9.004], [31.5, 8.985], [31.625, 8.966], [31.75, 8.948], [31.875, 8.929], [32, 8.911], [32.125, 8.892], [32.25, 8.873], [32.375, 8.855], [32.5, 8.837], [32.625, 8.818], [32.75, 8.8], [32.875, 8.781], [33, 8.763], [33.125, 8.745], [33.25, 8.727], [33.375, 8.725], [33.5, 8.91], [33.625, 9.081], [33.75, 9.239], [33.875, 9.382], [34, 9.511], [34.125, 9.625], [34.25, 9.724], [34.375, 9.808], [34.5, 9.877], [34.625, 9.931], [34.75, 9.969], [34.875, 9.992], [35, 10], [35.125, 9.992], [35.25, 9.971], [35.375, 9.951], [35.5, 9.93], [35.625, 9.909], [35.75, 9.889], [35.875, 9.868], [36, 9.848], [36.125, 9.827], [36.25, 9.807], [36.375, 9.786], [36.5, 9.766], [36.625, 9.746], [36.75, 9.725], [36.875, 9.705], [37, 9.685], [37.125, 9.665], [37.25, 9.645], [37.375, 9.625], [37.5, 9.604], [37.625, 9.584], [37.75, 9.565], [37.875, 9.545], [38, 9.525], [38.125, 9.505], [38.25, 9.485], [38.375, 9.465], [38.5, 9.446], [38.625, 9.426], [38.75, 9.406], [38.875, 9.387], [39, 9.367], [39.125, 9.348], [39.25, 9.328], [39.375, 9.309], [39.5, 9.29], [39.625, 9.27], [39.75, 9.251], [39.875, 9.232], [40, 9.213]], tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Choke filter",
        points: [
          t`A **choke** is an inductor $L$ joined in series with the load.`,
          t`Its reactance $X_L = 2\pi fL$ is large for the ripple, so it blocks the AC part.`,
          t`Its resistance to DC is small, so the DC part passes to the load.`,
          t`A choke in series and a capacitor across the load together smooth even better.`,
          t`A full-wave ripple, at $2f$, sees a larger $X_L$ and smaller $X_C$: it is easier to filter.`,
        ],
      },
    ],
    worked: {
      prompt: t`A full-wave rectifier on $60\ \mathrm{Hz}$ mains gives a DC value of $20\ \mathrm{V}$ before filtering. Find the rms ripple voltage, the ripple frequency, and the reactance of a $470\ \mu\mathrm{F}$ filter capacitor to the ripple.`,
      steps: [
        t`$V_{ac} = rV_{dc} = 0.482 \times 20$ $= 9.64\ \mathrm{V}$.`,
        t`Full wave gives two pulses per cycle: the ripple frequency is $2 \times 60 = 120\ \mathrm{Hz}$.`,
        t`$X_C = \dfrac{1}{2\pi fC}$ $= \dfrac{1}{2\pi \times 120 \times 470 \times 10^{-6}}$.`,
        t`$X_C = 2.82\ \Omega$: small, so the ripple bypasses the load.`,
      ],
      answer: t`$9.64\ \mathrm{V}$; $120\ \mathrm{Hz}$; $2.82\ \Omega$`,
    },
    figure: {
      alt: "Voltage against time at the output of a full-wave rectifier, peak 10 V, on 50 Hz. Step 1: the pulsating output, two pulses per cycle. Step 2: dashed, its steady DC part, about 6.4 V; the rise and fall about it is the ripple. Step 5: in green, the output with a capacitor across the load: it charges to the peak and then falls only a little before the next pulse, so the ripple is much smaller.",
      axes: "xy",
      chart: { x: 10, y: 5, xTitle: "t (ms)", yTitle: "V (volt)" },
      view: { x: [0, 50], y: [-2, 13] },
      elements: [
        { kind: "segment", from: [0, 0], to: [40, 0], dashed: true, tone: "muted" },
        { kind: "curve", points: [[0, 0], [0.25, 0.785], [0.5, 1.564], [0.75, 2.334], [1, 3.09], [1.25, 3.827], [1.5, 4.54], [1.75, 5.225], [2, 5.878], [2.25, 6.494], [2.5, 7.071], [2.75, 7.604], [3, 8.09], [3.25, 8.526], [3.5, 8.91], [3.75, 9.239], [4, 9.511], [4.25, 9.724], [4.5, 9.877], [4.75, 9.969], [5, 10], [5.25, 9.969], [5.5, 9.877], [5.75, 9.724], [6, 9.511], [6.25, 9.239], [6.5, 8.91], [6.75, 8.526], [7, 8.09], [7.25, 7.604], [7.5, 7.071], [7.75, 6.494], [8, 5.878], [8.25, 5.225], [8.5, 4.54], [8.75, 3.827], [9, 3.09], [9.25, 2.334], [9.5, 1.564], [9.75, 0.785], [10, 0], [10.25, 0.785], [10.5, 1.564], [10.75, 2.334], [11, 3.09], [11.25, 3.827], [11.5, 4.54], [11.75, 5.225], [12, 5.878], [12.25, 6.494], [12.5, 7.071], [12.75, 7.604], [13, 8.09], [13.25, 8.526], [13.5, 8.91], [13.75, 9.239], [14, 9.511], [14.25, 9.724], [14.5, 9.877], [14.75, 9.969], [15, 10], [15.25, 9.969], [15.5, 9.877], [15.75, 9.724], [16, 9.511], [16.25, 9.239], [16.5, 8.91], [16.75, 8.526], [17, 8.09], [17.25, 7.604], [17.5, 7.071], [17.75, 6.494], [18, 5.878], [18.25, 5.225], [18.5, 4.54], [18.75, 3.827], [19, 3.09], [19.25, 2.334], [19.5, 1.564], [19.75, 0.785], [20, 0], [20.25, 0.785], [20.5, 1.564], [20.75, 2.334], [21, 3.09], [21.25, 3.827], [21.5, 4.54], [21.75, 5.225], [22, 5.878], [22.25, 6.494], [22.5, 7.071], [22.75, 7.604], [23, 8.09], [23.25, 8.526], [23.5, 8.91], [23.75, 9.239], [24, 9.511], [24.25, 9.724], [24.5, 9.877], [24.75, 9.969], [25, 10], [25.25, 9.969], [25.5, 9.877], [25.75, 9.724], [26, 9.511], [26.25, 9.239], [26.5, 8.91], [26.75, 8.526], [27, 8.09], [27.25, 7.604], [27.5, 7.071], [27.75, 6.494], [28, 5.878], [28.25, 5.225], [28.5, 4.54], [28.75, 3.827], [29, 3.09], [29.25, 2.334], [29.5, 1.564], [29.75, 0.785], [30, 0], [30.25, 0.785], [30.5, 1.564], [30.75, 2.334], [31, 3.09], [31.25, 3.827], [31.5, 4.54], [31.75, 5.225], [32, 5.878], [32.25, 6.494], [32.5, 7.071], [32.75, 7.604], [33, 8.09], [33.25, 8.526], [33.5, 8.91], [33.75, 9.239], [34, 9.511], [34.25, 9.724], [34.5, 9.877], [34.75, 9.969], [35, 10], [35.25, 9.969], [35.5, 9.877], [35.75, 9.724], [36, 9.511], [36.25, 9.239], [36.5, 8.91], [36.75, 8.526], [37, 8.09], [37.25, 7.604], [37.5, 7.071], [37.75, 6.494], [38, 5.878], [38.25, 5.225], [38.5, 4.54], [38.75, 3.827], [39, 3.09], [39.25, 2.334], [39.5, 1.564], [39.75, 0.785], [40, 0]], tone: "muted", step: 1 },
        { kind: "segment", from: [0, 6.366], to: [40, 6.366], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [40, 6.366], label: "DC part", labelAt: "e", tone: "muted", step: 2 },
        { kind: "curve", points: [[0, 0], [0.125, 0.393], [0.25, 0.785], [0.375, 1.175], [0.5, 1.564], [0.625, 1.951], [0.75, 2.334], [0.875, 2.714], [1, 3.09], [1.125, 3.461], [1.25, 3.827], [1.375, 4.187], [1.5, 4.54], [1.625, 4.886], [1.75, 5.225], [1.875, 5.556], [2, 5.878], [2.125, 6.191], [2.25, 6.494], [2.375, 6.788], [2.5, 7.071], [2.625, 7.343], [2.75, 7.604], [2.875, 7.853], [3, 8.09], [3.125, 8.315], [3.25, 8.526], [3.375, 8.725], [3.5, 8.91], [3.625, 9.081], [3.75, 9.239], [3.875, 9.382], [4, 9.511], [4.125, 9.625], [4.25, 9.724], [4.375, 9.808], [4.5, 9.877], [4.625, 9.931], [4.75, 9.969], [4.875, 9.992], [5, 10], [5.125, 9.992], [5.25, 9.971], [5.375, 9.951], [5.5, 9.93], [5.625, 9.909], [5.75, 9.889], [5.875, 9.868], [6, 9.848], [6.125, 9.827], [6.25, 9.807], [6.375, 9.786], [6.5, 9.766], [6.625, 9.746], [6.75, 9.725], [6.875, 9.705], [7, 9.685], [7.125, 9.665], [7.25, 9.645], [7.375, 9.625], [7.5, 9.604], [7.625, 9.584], [7.75, 9.565], [7.875, 9.545], [8, 9.525], [8.125, 9.505], [8.25, 9.485], [8.375, 9.465], [8.5, 9.446], [8.625, 9.426], [8.75, 9.406], [8.875, 9.387], [9, 9.367], [9.125, 9.348], [9.25, 9.328], [9.375, 9.309], [9.5, 9.29], [9.625, 9.27], [9.75, 9.251], [9.875, 9.232], [10, 9.213], [10.125, 9.193], [10.25, 9.174], [10.375, 9.155], [10.5, 9.136], [10.625, 9.117], [10.75, 9.098], [10.875, 9.079], [11, 9.06], [11.125, 9.041], [11.25, 9.023], [11.375, 9.004], [11.5, 8.985], [11.625, 8.966], [11.75, 8.948], [11.875, 8.929], [12, 8.911], [12.125, 8.892], [12.25, 8.873], [12.375, 8.855], [12.5, 8.837], [12.625, 8.818], [12.75, 8.8], [12.875, 8.781], [13, 8.763], [13.125, 8.745], [13.25, 8.727], [13.375, 8.725], [13.5, 8.91], [13.625, 9.081], [13.75, 9.239], [13.875, 9.382], [14, 9.511], [14.125, 9.625], [14.25, 9.724], [14.375, 9.808], [14.5, 9.877], [14.625, 9.931], [14.75, 9.969], [14.875, 9.992], [15, 10], [15.125, 9.992], [15.25, 9.971], [15.375, 9.951], [15.5, 9.93], [15.625, 9.909], [15.75, 9.889], [15.875, 9.868], [16, 9.848], [16.125, 9.827], [16.25, 9.807], [16.375, 9.786], [16.5, 9.766], [16.625, 9.746], [16.75, 9.725], [16.875, 9.705], [17, 9.685], [17.125, 9.665], [17.25, 9.645], [17.375, 9.625], [17.5, 9.604], [17.625, 9.584], [17.75, 9.565], [17.875, 9.545], [18, 9.525], [18.125, 9.505], [18.25, 9.485], [18.375, 9.465], [18.5, 9.446], [18.625, 9.426], [18.75, 9.406], [18.875, 9.387], [19, 9.367], [19.125, 9.348], [19.25, 9.328], [19.375, 9.309], [19.5, 9.29], [19.625, 9.27], [19.75, 9.251], [19.875, 9.232], [20, 9.213], [20.125, 9.193], [20.25, 9.174], [20.375, 9.155], [20.5, 9.136], [20.625, 9.117], [20.75, 9.098], [20.875, 9.079], [21, 9.06], [21.125, 9.041], [21.25, 9.023], [21.375, 9.004], [21.5, 8.985], [21.625, 8.966], [21.75, 8.948], [21.875, 8.929], [22, 8.911], [22.125, 8.892], [22.25, 8.873], [22.375, 8.855], [22.5, 8.837], [22.625, 8.818], [22.75, 8.8], [22.875, 8.781], [23, 8.763], [23.125, 8.745], [23.25, 8.727], [23.375, 8.725], [23.5, 8.91], [23.625, 9.081], [23.75, 9.239], [23.875, 9.382], [24, 9.511], [24.125, 9.625], [24.25, 9.724], [24.375, 9.808], [24.5, 9.877], [24.625, 9.931], [24.75, 9.969], [24.875, 9.992], [25, 10], [25.125, 9.992], [25.25, 9.971], [25.375, 9.951], [25.5, 9.93], [25.625, 9.909], [25.75, 9.889], [25.875, 9.868], [26, 9.848], [26.125, 9.827], [26.25, 9.807], [26.375, 9.786], [26.5, 9.766], [26.625, 9.746], [26.75, 9.725], [26.875, 9.705], [27, 9.685], [27.125, 9.665], [27.25, 9.645], [27.375, 9.625], [27.5, 9.604], [27.625, 9.584], [27.75, 9.565], [27.875, 9.545], [28, 9.525], [28.125, 9.505], [28.25, 9.485], [28.375, 9.465], [28.5, 9.446], [28.625, 9.426], [28.75, 9.406], [28.875, 9.387], [29, 9.367], [29.125, 9.348], [29.25, 9.328], [29.375, 9.309], [29.5, 9.29], [29.625, 9.27], [29.75, 9.251], [29.875, 9.232], [30, 9.213], [30.125, 9.193], [30.25, 9.174], [30.375, 9.155], [30.5, 9.136], [30.625, 9.117], [30.75, 9.098], [30.875, 9.079], [31, 9.06], [31.125, 9.041], [31.25, 9.023], [31.375, 9.004], [31.5, 8.985], [31.625, 8.966], [31.75, 8.948], [31.875, 8.929], [32, 8.911], [32.125, 8.892], [32.25, 8.873], [32.375, 8.855], [32.5, 8.837], [32.625, 8.818], [32.75, 8.8], [32.875, 8.781], [33, 8.763], [33.125, 8.745], [33.25, 8.727], [33.375, 8.725], [33.5, 8.91], [33.625, 9.081], [33.75, 9.239], [33.875, 9.382], [34, 9.511], [34.125, 9.625], [34.25, 9.724], [34.375, 9.808], [34.5, 9.877], [34.625, 9.931], [34.75, 9.969], [34.875, 9.992], [35, 10], [35.125, 9.992], [35.25, 9.971], [35.375, 9.951], [35.5, 9.93], [35.625, 9.909], [35.75, 9.889], [35.875, 9.868], [36, 9.848], [36.125, 9.827], [36.25, 9.807], [36.375, 9.786], [36.5, 9.766], [36.625, 9.746], [36.75, 9.725], [36.875, 9.705], [37, 9.685], [37.125, 9.665], [37.25, 9.645], [37.375, 9.625], [37.5, 9.604], [37.625, 9.584], [37.75, 9.565], [37.875, 9.545], [38, 9.525], [38.125, 9.505], [38.25, 9.485], [38.375, 9.465], [38.5, 9.446], [38.625, 9.426], [38.75, 9.406], [38.875, 9.387], [39, 9.367], [39.125, 9.348], [39.25, 9.328], [39.375, 9.309], [39.5, 9.29], [39.625, 9.27], [39.75, 9.251], [39.875, 9.232], [40, 9.213]], tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag the filter capacitance and watch the output's dips between pulses shrink while the ripple factor falls.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Turns the ripple factor upside down, $\dfrac{V_{dc}}{V_{ac}}$.`,
      remediation: t`The ripple factor compares the AC part with the DC part: $r = \dfrac{V_{ac}}{V_{dc}}$, so $V_{ac} = rV_{dc}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Mixes up the ripple of half-wave and full-wave rectifiers.",
      remediation: t`Half wave leaves the most ripple, $r = 1.21$; full wave fills the gaps, $r = 0.482$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: "Takes the supply frequency as the ripple frequency of a full-wave rectifier.",
      remediation: t`A full-wave output has two pulses per input cycle, so its ripple is at $2f$: $100\ \mathrm{Hz}$ on $50\ \mathrm{Hz}$ mains.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: t`Drops the $2\pi$ from the reactance.`,
      remediation: t`Reactance uses the angular frequency $\omega = 2\pi f$: $X_L = 2\pi fL$, $X_C = \dfrac{1}{2\pi fC}$.`,
      fallback: { kind: "ext", topic: "reactance (AC Circuits, Ch.13)" },
    },
    {
      id: "C03-M5",
      mistake: "Swaps how a capacitor and an inductor oppose AC.",
      remediation: t`A capacitor's reactance falls as the frequency rises, $X_C = \dfrac{1}{2\pi fC}$; an inductor's rises, $X_L = 2\pi fL$.`,
      fallback: { kind: "ext", topic: "reactance (AC Circuits, Ch.13)" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks a rectifier's output is already steady DC.",
      remediation: "A rectifier's output is pulsating: it has a DC part and an AC ripple. Removing the ripple is the filter's job.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the filter does the rectifying.",
      remediation: "The rectifier turns AC into one-way pulses; the filter then smooths those pulses.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks a filter blocks the DC and passes the AC to the load.",
      remediation: "It is the other way round: the load needs the DC part. The filter keeps the AC ripple away from the load.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Reads the ripple factor as a percentage.",
      remediation: t`The ripple factor is a plain ratio: $1.21$ means the AC part is $1.21$ times the DC part, not $1.21\%$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks a smaller capacitor smooths better.",
      remediation: "A larger capacitor stores more charge, so it falls less between pulses; its reactance to the ripple is also smaller.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.4" },
      stem: t`Why do we need a filter in a power supply?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "why" } },
      options: [
        { key: "A", text: t`To turn the AC mains into DC, which the rectifier cannot do`, correct: false, misconceptionId: "C03-M7", value: "does_rectifying" },
        { key: "B", text: t`To block the DC part of the output so that only the AC part reaches the load`, correct: false, misconceptionId: "C03-M8", value: "block_dc" },
        { key: "C", text: t`To remove the AC part (the ripple) from the rectifier's output, leaving nearly steady DC`, correct: true, value: "remove_ripple" },
        { key: "D", text: t`To protect the diodes, since the rectifier's output is already steady DC`, correct: false, misconceptionId: "C03-M6", value: "protect_diodes" },
      ],
      solution: {
        steps: [
          t`A rectifier's output is one-way but pulsating: a DC part plus an AC ripple.`,
          t`A filter removes the ripple and passes the DC part, so the load gets nearly steady DC.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`The unfiltered output of a half-wave rectifier has a DC value of $10\ \mathrm{V}$. Its ripple factor is $1.21$. What is the rms value of its AC component?`,
      verify: { kind: "value", inputs: { Vdc: "10" }, params: { ask: "Vac", rect: "half" } },
      options: [
        { key: "A", text: t`$4.82\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M2", value: "4.82000000000000" },
        { key: "B", text: t`$0.121\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M9", value: "0.121000000000000" },
        { key: "C", text: t`$12.1\ \mathrm{V}$`, correct: true, value: "12.1000000000000" },
        { key: "D", text: t`$8.26\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M1", value: "8.26000000000000" },
      ],
      solution: {
        steps: [
          t`$r = \dfrac{V_{ac}}{V_{dc}}$, so $V_{ac} = rV_{dc}$.`,
          t`$V_{ac} = 1.21 \times 10$ $= 12.1\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`A full-wave rectifier on $50\ \mathrm{Hz}$ mains has a $1000\ \mu\mathrm{F}$ capacitor across its load. What is the capacitor's reactance to the ripple?`,
      verify: { kind: "value", inputs: { f: "50", C: "1000*10**-6" }, params: { ask: "XC" } },
      options: [
        { key: "A", text: t`$3.18\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M3", value: "3.18000000000000" },
        { key: "B", text: t`$10\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M4", value: "10" },
        { key: "C", text: t`$0.628\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M5", value: "0.628000000000000" },
        { key: "D", text: t`$1.59\ \mathrm{\Omega}$`, correct: true, value: "1.59000000000000" },
      ],
      solution: {
        steps: [
          t`A full-wave ripple has twice the supply frequency: $100\ \mathrm{Hz}$.`,
          t`$X_C = \dfrac{1}{2\pi fC}$ $= \dfrac{1}{2\pi \times 100 \times 10^{-3}}$.`,
          t`$X_C = 1.59\ \Omega$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`A choke of inductance $5\ \mathrm{H}$ filters the output of a full-wave rectifier on $50\ \mathrm{Hz}$ mains. What is its reactance to the ripple?`,
      verify: { kind: "value", inputs: { f: "50", L: "5" }, params: { ask: "XL" } },
      options: [
        { key: "A", text: t`$500\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M4", value: "500" },
        { key: "B", text: t`$3.18 \times 10^{-4}\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M5", value: "0.000318000000000000" },
        { key: "C", text: t`$3140\ \mathrm{\Omega}$`, correct: true, value: "3140" },
        { key: "D", text: t`$1570\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C03-M3", value: "1570" },
      ],
      solution: {
        steps: [
          t`A full-wave ripple has twice the supply frequency: $100\ \mathrm{Hz}$.`,
          t`$X_L = 2\pi fL$ $= 2\pi \times 100 \times 5$ $= 3140\ \Omega$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`A capacitor across the load smooths a rectifier's output. Which change makes the output steadier?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "better" } },
      options: [
        { key: "A", text: t`A larger capacitance`, correct: true, value: "larger_C" },
        { key: "B", text: t`A smaller capacitance`, correct: false, misconceptionId: "C03-M10", value: "smaller_C" },
        { key: "C", text: t`A half-wave rectifier in place of a full-wave one`, correct: false, misconceptionId: "C03-M2", value: "use_half_wave" },
        { key: "D", text: t`A lower ripple frequency`, correct: false, misconceptionId: "C03-M5", value: "lower_ripple_f" },
      ],
      solution: {
        steps: [
          t`Between pulses the capacitor discharges through the load; a larger capacitor loses a smaller share of its charge.`,
          t`Its reactance $\dfrac{1}{2\pi fC}$ is also smaller, so more ripple bypasses the load: use a larger capacitance.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`The unfiltered output of a full-wave rectifier has an AC component of rms value $2.41\ \mathrm{V}$. Its ripple factor is $0.482$. What is the DC value of the output?`,
      verify: { kind: "value", inputs: { Vac: "2.41" }, params: { ask: "Vdc", rect: "full" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{V}$`, correct: true, value: "5" },
        { key: "B", text: t`$1.16\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M1", value: "1.16000000000000" },
        { key: "C", text: t`$1.99\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M2", value: "1.99000000000000" },
        { key: "D", text: t`$500\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M9", value: "500" },
      ],
      solution: {
        steps: [
          t`$r = \dfrac{V_{ac}}{V_{dc}}$, so $V_{dc} = \dfrac{V_{ac}}{r}$.`,
          t`$V_{dc} = \dfrac{2.41}{0.482}$ $= 5\ \mathrm{V}$.`,
        ],
      },
    },
  ],
};
