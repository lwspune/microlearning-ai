import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`In a stadium wave the ripple races round the stands, yet nobody leaves their seat. What is it that travels?`,
    reveal: t`The disturbance: its shape and its energy. Each spectator only rises and sits, a little after the neighbour. A progressive wave works the same way, and one equation, $y = A\sin\left(\omega t - kx\right)$, describes every particle at once.`,
  },
  explanation: {
    intuition: [
      t`A **progressive wave** carries a disturbance forward through a medium; the medium itself does not travel.`,
      t`Each particle performs S.H.M. about its **mean position**, its place when undisturbed.`,
      t`The **amplitude** $A$ is a particle's largest displacement from its mean position.`,
      t`The **wavelength** $\lambda$ is the distance between two neighbouring crests.`,
      t`In one period $T$ the wave moves forward one wavelength, so its speed is $v = \dfrac{\lambda}{T} = n\lambda$.`,
    ],
    formal: [
      {
        title: "The wave equation",
        points: [
          t`The book writes a wave travelling along $+x$ as $y = A\sin 2\pi\left(\dfrac{t}{T} - \dfrac{x}{\lambda}\right)$.`,
          t`Opening the bracket gives $y = A\sin\left(\omega t - kx\right)$.`,
          t`The **angular frequency** is $\omega = \dfrac{2\pi}{T} = 2\pi n$.`,
          t`The **wave number** $k = \dfrac{2\pi}{\lambda}$ is the phase change per metre of travel.`,
        ],
        figure: {
          alt: "A wave of amplitude A and wavelength λ. Step 1: the wave. Step 4: λ marked from crest to crest.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 9], y: [-1.55, 1.55] },
          elements: [
            { kind: "segment", from: [0, 0], to: [9, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.094, 0.147], [0.188, 0.29], [0.281, 0.428], [0.375, 0.556], [0.469, 0.672], [0.562, 0.773], [0.656, 0.858], [0.75, 0.924], [0.844, 0.97], [0.938, 0.995], [1.031, 0.999], [1.125, 0.981], [1.219, 0.942], [1.312, 0.882], [1.406, 0.803], [1.5, 0.707], [1.594, 0.596], [1.688, 0.471], [1.781, 0.337], [1.875, 0.195], [1.969, 0.049], [2.062, -0.098], [2.156, -0.243], [2.25, -0.383], [2.344, -0.514], [2.438, -0.634], [2.531, -0.741], [2.625, -0.831], [2.719, -0.904], [2.812, -0.957], [2.906, -0.989], [3, -1], [3.094, -0.989], [3.188, -0.957], [3.281, -0.904], [3.375, -0.831], [3.469, -0.741], [3.562, -0.634], [3.656, -0.514], [3.75, -0.383], [3.844, -0.243], [3.938, -0.098], [4.031, 0.049], [4.125, 0.195], [4.219, 0.337], [4.312, 0.471], [4.406, 0.596], [4.5, 0.707], [4.594, 0.803], [4.688, 0.882], [4.781, 0.942], [4.875, 0.981], [4.969, 0.999], [5.062, 0.995], [5.156, 0.97], [5.25, 0.924], [5.344, 0.858], [5.438, 0.773], [5.531, 0.672], [5.625, 0.556], [5.719, 0.428], [5.812, 0.29], [5.906, 0.147], [6, 0], [6.094, -0.147], [6.188, -0.29], [6.281, -0.428], [6.375, -0.556], [6.469, -0.672], [6.562, -0.773], [6.656, -0.858], [6.75, -0.924], [6.844, -0.97], [6.938, -0.995], [7.031, -0.999], [7.125, -0.981], [7.219, -0.942], [7.312, -0.882], [7.406, -0.803], [7.5, -0.707], [7.594, -0.596], [7.688, -0.471], [7.781, -0.337], [7.875, -0.195], [7.969, -0.049], [8.062, 0.098], [8.156, 0.243], [8.25, 0.383], [8.344, 0.514], [8.438, 0.634], [8.531, 0.741], [8.625, 0.831], [8.719, 0.904], [8.812, 0.957], [8.906, 0.989], [9, 1]], step: 1 },
            { kind: "segment", from: [1, 0], to: [1, 1], label: "A", labelAt: "w", tone: "good", step: 1 },
            { kind: "segment", from: [1, 1.3], to: [5, 1.3], label: "λ", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Reading the constants",
        points: [
          t`First bring the equation to the form $A\sin\left(\omega t - kx\right)$: multiply any factor into the bracket.`,
          t`Then $n = \dfrac{\omega}{2\pi}$ and $\lambda = \dfrac{2\pi}{k}$.`,
          t`The speed is $v = n\lambda = \dfrac{\omega}{k}$.`,
          t`Keep the units: if $x$ is in cm, then $k$ is per cm and $\dfrac{\omega}{k}$ is in cm/s.`,
        ],
        figure: {
          alt: "The wave, and dashed, the same wave a short time t later, shifted forward by v t. Step 3: the shift marked v t.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 9], y: [-1.55, 1.55] },
          elements: [
            { kind: "segment", from: [0, 0], to: [9, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.094, 0.147], [0.188, 0.29], [0.281, 0.428], [0.375, 0.556], [0.469, 0.672], [0.562, 0.773], [0.656, 0.858], [0.75, 0.924], [0.844, 0.97], [0.938, 0.995], [1.031, 0.999], [1.125, 0.981], [1.219, 0.942], [1.312, 0.882], [1.406, 0.803], [1.5, 0.707], [1.594, 0.596], [1.688, 0.471], [1.781, 0.337], [1.875, 0.195], [1.969, 0.049], [2.062, -0.098], [2.156, -0.243], [2.25, -0.383], [2.344, -0.514], [2.438, -0.634], [2.531, -0.741], [2.625, -0.831], [2.719, -0.904], [2.812, -0.957], [2.906, -0.989], [3, -1], [3.094, -0.989], [3.188, -0.957], [3.281, -0.904], [3.375, -0.831], [3.469, -0.741], [3.562, -0.634], [3.656, -0.514], [3.75, -0.383], [3.844, -0.243], [3.938, -0.098], [4.031, 0.049], [4.125, 0.195], [4.219, 0.337], [4.312, 0.471], [4.406, 0.596], [4.5, 0.707], [4.594, 0.803], [4.688, 0.882], [4.781, 0.942], [4.875, 0.981], [4.969, 0.999], [5.062, 0.995], [5.156, 0.97], [5.25, 0.924], [5.344, 0.858], [5.438, 0.773], [5.531, 0.672], [5.625, 0.556], [5.719, 0.428], [5.812, 0.29], [5.906, 0.147], [6, 0], [6.094, -0.147], [6.188, -0.29], [6.281, -0.428], [6.375, -0.556], [6.469, -0.672], [6.562, -0.773], [6.656, -0.858], [6.75, -0.924], [6.844, -0.97], [6.938, -0.995], [7.031, -0.999], [7.125, -0.981], [7.219, -0.942], [7.312, -0.882], [7.406, -0.803], [7.5, -0.707], [7.594, -0.596], [7.688, -0.471], [7.781, -0.337], [7.875, -0.195], [7.969, -0.049], [8.062, 0.098], [8.156, 0.243], [8.25, 0.383], [8.344, 0.514], [8.438, 0.634], [8.531, 0.741], [8.625, 0.831], [8.719, 0.904], [8.812, 0.957], [8.906, 0.989], [9, 1]] },
            { kind: "curve", points: [[0, -0.707], [0.094, -0.803], [0.188, -0.882], [0.281, -0.942], [0.375, -0.981], [0.469, -0.999], [0.562, -0.995], [0.656, -0.97], [0.75, -0.924], [0.844, -0.858], [0.938, -0.773], [1.031, -0.672], [1.125, -0.556], [1.219, -0.428], [1.312, -0.29], [1.406, -0.147], [1.5, 0], [1.594, 0.147], [1.688, 0.29], [1.781, 0.428], [1.875, 0.556], [1.969, 0.672], [2.062, 0.773], [2.156, 0.858], [2.25, 0.924], [2.344, 0.97], [2.438, 0.995], [2.531, 0.999], [2.625, 0.981], [2.719, 0.942], [2.812, 0.882], [2.906, 0.803], [3, 0.707], [3.094, 0.596], [3.188, 0.471], [3.281, 0.337], [3.375, 0.195], [3.469, 0.049], [3.562, -0.098], [3.656, -0.243], [3.75, -0.383], [3.844, -0.514], [3.938, -0.634], [4.031, -0.741], [4.125, -0.831], [4.219, -0.904], [4.312, -0.957], [4.406, -0.989], [4.5, -1], [4.594, -0.989], [4.688, -0.957], [4.781, -0.904], [4.875, -0.831], [4.969, -0.741], [5.062, -0.634], [5.156, -0.514], [5.25, -0.383], [5.344, -0.243], [5.438, -0.098], [5.531, 0.049], [5.625, 0.195], [5.719, 0.337], [5.812, 0.471], [5.906, 0.596], [6, 0.707], [6.094, 0.803], [6.188, 0.882], [6.281, 0.942], [6.375, 0.981], [6.469, 0.999], [6.562, 0.995], [6.656, 0.97], [6.75, 0.924], [6.844, 0.858], [6.938, 0.773], [7.031, 0.672], [7.125, 0.556], [7.219, 0.428], [7.312, 0.29], [7.406, 0.147], [7.5, 0], [7.594, -0.147], [7.688, -0.29], [7.781, -0.428], [7.875, -0.556], [7.969, -0.672], [8.062, -0.773], [8.156, -0.858], [8.25, -0.924], [8.344, -0.97], [8.438, -0.995], [8.531, -0.999], [8.625, -0.981], [8.719, -0.942], [8.812, -0.882], [8.906, -0.803], [9, -0.707]], dashed: true, tone: "muted", step: 3 },
            { kind: "vector", from: [1, -1.3], to: [2.5, -1.3], label: "v t", labelAt: "s", step: 3 },
          ],
        },
      },
      {
        title: "Direction of travel",
        points: [
          t`Follow one crest: its phase $\omega t - kx$ stays constant, so $x = \dfrac{\omega}{k}t$ + constant.`,
          t`Opposite signs on the $t$ and $x$ terms: the wave travels along $+x$.`,
          t`The same sign on both, as in $\sin\left(\omega t + kx\right)$: it travels along $-x$.`,
          t`The wave travels along the coordinate inside the sine; in a transverse wave the displacement is across it.`,
        ],
        figure: {
          alt: "Step 1: the wave, and dashed, the wave a moment later shifted towards +x. Step 2: an arrow along +x. Step 3: dashed in red, a wave shifted towards −x instead.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 9], y: [-1.55, 1.55] },
          elements: [
            { kind: "segment", from: [0, 0], to: [9, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.094, 0.147], [0.188, 0.29], [0.281, 0.428], [0.375, 0.556], [0.469, 0.672], [0.562, 0.773], [0.656, 0.858], [0.75, 0.924], [0.844, 0.97], [0.938, 0.995], [1.031, 0.999], [1.125, 0.981], [1.219, 0.942], [1.312, 0.882], [1.406, 0.803], [1.5, 0.707], [1.594, 0.596], [1.688, 0.471], [1.781, 0.337], [1.875, 0.195], [1.969, 0.049], [2.062, -0.098], [2.156, -0.243], [2.25, -0.383], [2.344, -0.514], [2.438, -0.634], [2.531, -0.741], [2.625, -0.831], [2.719, -0.904], [2.812, -0.957], [2.906, -0.989], [3, -1], [3.094, -0.989], [3.188, -0.957], [3.281, -0.904], [3.375, -0.831], [3.469, -0.741], [3.562, -0.634], [3.656, -0.514], [3.75, -0.383], [3.844, -0.243], [3.938, -0.098], [4.031, 0.049], [4.125, 0.195], [4.219, 0.337], [4.312, 0.471], [4.406, 0.596], [4.5, 0.707], [4.594, 0.803], [4.688, 0.882], [4.781, 0.942], [4.875, 0.981], [4.969, 0.999], [5.062, 0.995], [5.156, 0.97], [5.25, 0.924], [5.344, 0.858], [5.438, 0.773], [5.531, 0.672], [5.625, 0.556], [5.719, 0.428], [5.812, 0.29], [5.906, 0.147], [6, 0], [6.094, -0.147], [6.188, -0.29], [6.281, -0.428], [6.375, -0.556], [6.469, -0.672], [6.562, -0.773], [6.656, -0.858], [6.75, -0.924], [6.844, -0.97], [6.938, -0.995], [7.031, -0.999], [7.125, -0.981], [7.219, -0.942], [7.312, -0.882], [7.406, -0.803], [7.5, -0.707], [7.594, -0.596], [7.688, -0.471], [7.781, -0.337], [7.875, -0.195], [7.969, -0.049], [8.062, 0.098], [8.156, 0.243], [8.25, 0.383], [8.344, 0.514], [8.438, 0.634], [8.531, 0.741], [8.625, 0.831], [8.719, 0.904], [8.812, 0.957], [8.906, 0.989], [9, 1]] },
            { kind: "curve", points: [[0, -1], [0.094, -0.989], [0.188, -0.957], [0.281, -0.904], [0.375, -0.831], [0.469, -0.741], [0.562, -0.634], [0.656, -0.514], [0.75, -0.383], [0.844, -0.243], [0.938, -0.098], [1.031, 0.049], [1.125, 0.195], [1.219, 0.337], [1.312, 0.471], [1.406, 0.596], [1.5, 0.707], [1.594, 0.803], [1.688, 0.882], [1.781, 0.942], [1.875, 0.981], [1.969, 0.999], [2.062, 0.995], [2.156, 0.97], [2.25, 0.924], [2.344, 0.858], [2.438, 0.773], [2.531, 0.672], [2.625, 0.556], [2.719, 0.428], [2.812, 0.29], [2.906, 0.147], [3, 0], [3.094, -0.147], [3.188, -0.29], [3.281, -0.428], [3.375, -0.556], [3.469, -0.672], [3.562, -0.773], [3.656, -0.858], [3.75, -0.924], [3.844, -0.97], [3.938, -0.995], [4.031, -0.999], [4.125, -0.981], [4.219, -0.942], [4.312, -0.882], [4.406, -0.803], [4.5, -0.707], [4.594, -0.596], [4.688, -0.471], [4.781, -0.337], [4.875, -0.195], [4.969, -0.049], [5.062, 0.098], [5.156, 0.243], [5.25, 0.383], [5.344, 0.514], [5.438, 0.634], [5.531, 0.741], [5.625, 0.831], [5.719, 0.904], [5.812, 0.957], [5.906, 0.989], [6, 1], [6.094, 0.989], [6.188, 0.957], [6.281, 0.904], [6.375, 0.831], [6.469, 0.741], [6.562, 0.634], [6.656, 0.514], [6.75, 0.383], [6.844, 0.243], [6.938, 0.098], [7.031, -0.049], [7.125, -0.195], [7.219, -0.337], [7.312, -0.471], [7.406, -0.596], [7.5, -0.707], [7.594, -0.803], [7.688, -0.882], [7.781, -0.942], [7.875, -0.981], [7.969, -0.999], [8.062, -0.995], [8.156, -0.97], [8.25, -0.924], [8.344, -0.858], [8.438, -0.773], [8.531, -0.672], [8.625, -0.556], [8.719, -0.428], [8.812, -0.29], [8.906, -0.147], [9, 0]], dashed: true, tone: "muted", step: 1 },
            { kind: "vector", from: [5.3, 1.3], to: [6.6, 1.3], label: "+x", labelAt: "n", tone: "good", step: 2 },
            { kind: "curve", points: [[0, 1], [0.094, 0.989], [0.188, 0.957], [0.281, 0.904], [0.375, 0.831], [0.469, 0.741], [0.562, 0.634], [0.656, 0.514], [0.75, 0.383], [0.844, 0.243], [0.938, 0.098], [1.031, -0.049], [1.125, -0.195], [1.219, -0.337], [1.312, -0.471], [1.406, -0.596], [1.5, -0.707], [1.594, -0.803], [1.688, -0.882], [1.781, -0.942], [1.875, -0.981], [1.969, -0.999], [2.062, -0.995], [2.156, -0.97], [2.25, -0.924], [2.344, -0.858], [2.438, -0.773], [2.531, -0.672], [2.625, -0.556], [2.719, -0.428], [2.812, -0.29], [2.906, -0.147], [3, 0], [3.094, 0.147], [3.188, 0.29], [3.281, 0.428], [3.375, 0.556], [3.469, 0.672], [3.562, 0.773], [3.656, 0.858], [3.75, 0.924], [3.844, 0.97], [3.938, 0.995], [4.031, 0.999], [4.125, 0.981], [4.219, 0.942], [4.312, 0.882], [4.406, 0.803], [4.5, 0.707], [4.594, 0.596], [4.688, 0.471], [4.781, 0.337], [4.875, 0.195], [4.969, 0.049], [5.062, -0.098], [5.156, -0.243], [5.25, -0.383], [5.344, -0.514], [5.438, -0.634], [5.531, -0.741], [5.625, -0.831], [5.719, -0.904], [5.812, -0.957], [5.906, -0.989], [6, -1], [6.094, -0.989], [6.188, -0.957], [6.281, -0.904], [6.375, -0.831], [6.469, -0.741], [6.562, -0.634], [6.656, -0.514], [6.75, -0.383], [6.844, -0.243], [6.938, -0.098], [7.031, 0.049], [7.125, 0.195], [7.219, 0.337], [7.312, 0.471], [7.406, 0.596], [7.5, 0.707], [7.594, 0.803], [7.688, 0.882], [7.781, 0.942], [7.875, 0.981], [7.969, 0.999], [8.062, 0.995], [8.156, 0.97], [8.25, 0.924], [8.344, 0.858], [8.438, 0.773], [8.531, 0.672], [8.625, 0.556], [8.719, 0.428], [8.812, 0.29], [8.906, 0.147], [9, 0]], dashed: true, tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "Particles and the wave",
        points: [
          t`A particle takes $\dfrac{T}{4}$ to go from its mean position to an extreme.`,
          t`Two neighbouring particles at their mean positions are $\dfrac{\lambda}{2}$ apart, moving opposite ways.`,
          t`Particles $\lambda$ apart always move together: same displacement, same velocity.`,
        ],
        figure: {
          alt: "The wave with three points on the mean line, at x = 0, 2 and 4. Step 2: the first two marked λ/2 apart; the wave moves along +x, so the first moves down and the second up. Step 3: the first and third marked λ apart.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 9], y: [-1.55, 1.55] },
          elements: [
            { kind: "segment", from: [0, 0], to: [9, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.094, 0.147], [0.188, 0.29], [0.281, 0.428], [0.375, 0.556], [0.469, 0.672], [0.562, 0.773], [0.656, 0.858], [0.75, 0.924], [0.844, 0.97], [0.938, 0.995], [1.031, 0.999], [1.125, 0.981], [1.219, 0.942], [1.312, 0.882], [1.406, 0.803], [1.5, 0.707], [1.594, 0.596], [1.688, 0.471], [1.781, 0.337], [1.875, 0.195], [1.969, 0.049], [2.062, -0.098], [2.156, -0.243], [2.25, -0.383], [2.344, -0.514], [2.438, -0.634], [2.531, -0.741], [2.625, -0.831], [2.719, -0.904], [2.812, -0.957], [2.906, -0.989], [3, -1], [3.094, -0.989], [3.188, -0.957], [3.281, -0.904], [3.375, -0.831], [3.469, -0.741], [3.562, -0.634], [3.656, -0.514], [3.75, -0.383], [3.844, -0.243], [3.938, -0.098], [4.031, 0.049], [4.125, 0.195], [4.219, 0.337], [4.312, 0.471], [4.406, 0.596], [4.5, 0.707], [4.594, 0.803], [4.688, 0.882], [4.781, 0.942], [4.875, 0.981], [4.969, 0.999], [5.062, 0.995], [5.156, 0.97], [5.25, 0.924], [5.344, 0.858], [5.438, 0.773], [5.531, 0.672], [5.625, 0.556], [5.719, 0.428], [5.812, 0.29], [5.906, 0.147], [6, 0], [6.094, -0.147], [6.188, -0.29], [6.281, -0.428], [6.375, -0.556], [6.469, -0.672], [6.562, -0.773], [6.656, -0.858], [6.75, -0.924], [6.844, -0.97], [6.938, -0.995], [7.031, -0.999], [7.125, -0.981], [7.219, -0.942], [7.312, -0.882], [7.406, -0.803], [7.5, -0.707], [7.594, -0.596], [7.688, -0.471], [7.781, -0.337], [7.875, -0.195], [7.969, -0.049], [8.062, 0.098], [8.156, 0.243], [8.25, 0.383], [8.344, 0.514], [8.438, 0.634], [8.531, 0.741], [8.625, 0.831], [8.719, 0.904], [8.812, 0.957], [8.906, 0.989], [9, 1]] },
            { kind: "point", at: [0, 0], step: 1 },
            { kind: "point", at: [2, 0], step: 1 },
            { kind: "vector", from: [0, -0.1], to: [0, -0.75], label: "down", labelAt: "e", step: 2 },
            { kind: "vector", from: [2, 0.1], to: [2, 0.75], label: "up", labelAt: "e", step: 2 },
            { kind: "segment", from: [0, -1.3], to: [2, -1.3], label: "λ/2", labelAt: "s", tone: "good", step: 2 },
            { kind: "point", at: [4, 0], step: 3 },
            { kind: "segment", from: [0, 1.3], to: [4, 1.3], label: "λ", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A wave is $y = 0.05\sin\left(40\pi t - 0.5\pi x\right)$ in SI units. Find its amplitude, frequency, wavelength, speed and direction.`,
      steps: [
        t`Compare with $y = A\sin\left(\omega t - kx\right)$: $A = 0.05\ \mathrm{m}$, $\omega = 40\pi\ \mathrm{rad/s}$, $k = 0.5\pi\ \mathrm{rad/m}$.`,
        t`$n = \dfrac{\omega}{2\pi} = \dfrac{40\pi}{2\pi} = 20\ \mathrm{Hz}$.`,
        t`$\lambda = \dfrac{2\pi}{k} = \dfrac{2\pi}{0.5\pi} = 4\ \mathrm{m}$.`,
        t`$v = n\lambda = 80\ \mathrm{m/s}$, along $+x$, since the $t$ and $x$ terms have opposite signs.`,
      ],
      answer: t`$A = 0.05\ \mathrm{m}$, $n = 20\ \mathrm{Hz}$, $\lambda = 4\ \mathrm{m}$, $v = 80\ \mathrm{m/s}$ along $+x$`,
      figure: {
        alt: "The wave y = 0.05 sin(40πt − 0.5πx). Step 1: the wave, amplitude 0.05 m. Step 3: one wavelength, 4 m, from crest to crest. Step 4: an arrow along +x for its travel.",
        axes: "xy",
        chart: { x: 1, y: 0.05, xTitle: "x (m)", yTitle: "y (m)" },
        view: { x: [0, 8.4], y: [-0.07750000000000001, 0.07750000000000001] },
        elements: [
          { kind: "segment", from: [0, 0], to: [8.4, 0], dashed: true, tone: "muted" },
          { kind: "curve", points: [[0, 0], [0.088, 0.007], [0.175, 0.014], [0.263, 0.02], [0.35, 0.026], [0.438, 0.032], [0.525, 0.037], [0.613, 0.041], [0.7, 0.045], [0.788, 0.047], [0.875, 0.049], [0.963, 0.05], [1.05, 0.05], [1.137, 0.049], [1.225, 0.047], [1.312, 0.044], [1.4, 0.04], [1.488, 0.036], [1.575, 0.031], [1.662, 0.025], [1.75, 0.019], [1.838, 0.013], [1.925, 0.006], [2.013, -0.001], [2.1, -0.008], [2.188, -0.015], [2.275, -0.021], [2.363, -0.027], [2.45, -0.032], [2.538, -0.037], [2.625, -0.042], [2.713, -0.045], [2.8, -0.048], [2.887, -0.049], [2.975, -0.05], [3.062, -0.05], [3.15, -0.049], [3.238, -0.047], [3.325, -0.044], [3.413, -0.04], [3.5, -0.035], [3.588, -0.03], [3.675, -0.024], [3.762, -0.018], [3.85, -0.012], [3.938, -0.005], [4.025, 0.002], [4.112, 0.009], [4.2, 0.015], [4.288, 0.022], [4.375, 0.028], [4.463, 0.033], [4.55, 0.038], [4.638, 0.042], [4.725, 0.045], [4.812, 0.048], [4.9, 0.049], [4.987, 0.05], [5.075, 0.05], [5.163, 0.048], [5.25, 0.046], [5.337, 0.043], [5.425, 0.039], [5.513, 0.035], [5.6, 0.029], [5.688, 0.024], [5.775, 0.017], [5.863, 0.011], [5.95, 0.004], [6.038, -0.003], [6.125, -0.01], [6.212, -0.016], [6.3, -0.023], [6.388, -0.029], [6.475, -0.034], [6.562, -0.039], [6.65, -0.043], [6.738, -0.046], [6.825, -0.048], [6.913, -0.05], [7, -0.05], [7.087, -0.05], [7.175, -0.048], [7.263, -0.046], [7.35, -0.043], [7.438, -0.039], [7.525, -0.034], [7.613, -0.029], [7.7, -0.023], [7.788, -0.016], [7.875, -0.01], [7.962, -0.003], [8.05, 0.004], [8.138, 0.011], [8.225, 0.017], [8.312, 0.024], [8.4, 0.029]], step: 1 },
          { kind: "segment", from: [1, 0], to: [1, 0.05], label: "0.05 m", labelAt: "e", tone: "good", step: 1 },
          { kind: "segment", from: [1, 0.066], to: [5, 0.066], label: "λ = 4 m", labelAt: "n", tone: "good", step: 3 },
          { kind: "vector", from: [5.6, 0.066], to: [7, 0.066], label: "v", labelAt: "n", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A sine-shaped wave along x. Step 1: its amplitude A, from the mean line to a crest. Step 2: its wavelength λ, from one crest to the next. Step 3: the same wave a moment later, dashed, shifted forward, with an arrow along +x.",
      axes: "xy",
      chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
      view: { x: [0, 9], y: [-1.55, 1.55] },
      elements: [
        { kind: "segment", from: [0, 0], to: [9, 0], dashed: true, tone: "muted" },
        { kind: "curve", points: [[0, 0], [0.094, 0.147], [0.188, 0.29], [0.281, 0.428], [0.375, 0.556], [0.469, 0.672], [0.562, 0.773], [0.656, 0.858], [0.75, 0.924], [0.844, 0.97], [0.938, 0.995], [1.031, 0.999], [1.125, 0.981], [1.219, 0.942], [1.312, 0.882], [1.406, 0.803], [1.5, 0.707], [1.594, 0.596], [1.688, 0.471], [1.781, 0.337], [1.875, 0.195], [1.969, 0.049], [2.062, -0.098], [2.156, -0.243], [2.25, -0.383], [2.344, -0.514], [2.438, -0.634], [2.531, -0.741], [2.625, -0.831], [2.719, -0.904], [2.812, -0.957], [2.906, -0.989], [3, -1], [3.094, -0.989], [3.188, -0.957], [3.281, -0.904], [3.375, -0.831], [3.469, -0.741], [3.562, -0.634], [3.656, -0.514], [3.75, -0.383], [3.844, -0.243], [3.938, -0.098], [4.031, 0.049], [4.125, 0.195], [4.219, 0.337], [4.312, 0.471], [4.406, 0.596], [4.5, 0.707], [4.594, 0.803], [4.688, 0.882], [4.781, 0.942], [4.875, 0.981], [4.969, 0.999], [5.062, 0.995], [5.156, 0.97], [5.25, 0.924], [5.344, 0.858], [5.438, 0.773], [5.531, 0.672], [5.625, 0.556], [5.719, 0.428], [5.812, 0.29], [5.906, 0.147], [6, 0], [6.094, -0.147], [6.188, -0.29], [6.281, -0.428], [6.375, -0.556], [6.469, -0.672], [6.562, -0.773], [6.656, -0.858], [6.75, -0.924], [6.844, -0.97], [6.938, -0.995], [7.031, -0.999], [7.125, -0.981], [7.219, -0.942], [7.312, -0.882], [7.406, -0.803], [7.5, -0.707], [7.594, -0.596], [7.688, -0.471], [7.781, -0.337], [7.875, -0.195], [7.969, -0.049], [8.062, 0.098], [8.156, 0.243], [8.25, 0.383], [8.344, 0.514], [8.438, 0.634], [8.531, 0.741], [8.625, 0.831], [8.719, 0.904], [8.812, 0.957], [8.906, 0.989], [9, 1]] },
        { kind: "segment", from: [1, 0], to: [1, 1], label: "A", labelAt: "w", tone: "good", step: 1 },
        { kind: "segment", from: [1, 1.3], to: [5, 1.3], label: "λ", labelAt: "n", tone: "good", step: 2 },
        { kind: "curve", points: [[0, -1], [0.094, -0.989], [0.188, -0.957], [0.281, -0.904], [0.375, -0.831], [0.469, -0.741], [0.562, -0.634], [0.656, -0.514], [0.75, -0.383], [0.844, -0.243], [0.938, -0.098], [1.031, 0.049], [1.125, 0.195], [1.219, 0.337], [1.312, 0.471], [1.406, 0.596], [1.5, 0.707], [1.594, 0.803], [1.688, 0.882], [1.781, 0.942], [1.875, 0.981], [1.969, 0.999], [2.062, 0.995], [2.156, 0.97], [2.25, 0.924], [2.344, 0.858], [2.438, 0.773], [2.531, 0.672], [2.625, 0.556], [2.719, 0.428], [2.812, 0.29], [2.906, 0.147], [3, 0], [3.094, -0.147], [3.188, -0.29], [3.281, -0.428], [3.375, -0.556], [3.469, -0.672], [3.562, -0.773], [3.656, -0.858], [3.75, -0.924], [3.844, -0.97], [3.938, -0.995], [4.031, -0.999], [4.125, -0.981], [4.219, -0.942], [4.312, -0.882], [4.406, -0.803], [4.5, -0.707], [4.594, -0.596], [4.688, -0.471], [4.781, -0.337], [4.875, -0.195], [4.969, -0.049], [5.062, 0.098], [5.156, 0.243], [5.25, 0.383], [5.344, 0.514], [5.438, 0.634], [5.531, 0.741], [5.625, 0.831], [5.719, 0.904], [5.812, 0.957], [5.906, 0.989], [6, 1], [6.094, 0.989], [6.188, 0.957], [6.281, 0.904], [6.375, 0.831], [6.469, 0.741], [6.562, 0.634], [6.656, 0.514], [6.75, 0.383], [6.844, 0.243], [6.938, 0.098], [7.031, -0.049], [7.125, -0.195], [7.219, -0.337], [7.312, -0.471], [7.406, -0.596], [7.5, -0.707], [7.594, -0.803], [7.688, -0.882], [7.781, -0.942], [7.875, -0.981], [7.969, -0.999], [8.062, -0.995], [8.156, -0.97], [8.25, -0.924], [8.344, -0.858], [8.438, -0.773], [8.531, -0.672], [8.625, -0.556], [8.719, -0.428], [8.812, -0.29], [8.906, -0.147], [9, 0]], dashed: true, tone: "muted", step: 3 },
        { kind: "vector", from: [5.3, 1.15], to: [6.3, 1.15], label: "v", labelAt: "n", step: 3 },
      ],
    },
    visualSpec: t`Drag a slider for t and watch the sine curve slide along x while a marked particle only bobs up and down.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Takes $\lambda = \dfrac{1}{k}$, forgetting the $2\pi$.`,
      remediation: t`$k$ is the phase change per metre, $\dfrac{2\pi}{\lambda}$, so $\lambda = \dfrac{2\pi}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Reads the bracket's denominator as $\lambda$ though the factor outside is not $2\pi$.`,
      remediation: t`$\dfrac{x}{\lambda}$ in the book's form goes with a $2\pi$ outside. With $4\pi$ outside, open the bracket first: $k = \dfrac{4\pi}{0.8}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Swaps the roles of $\omega$ and $k$.`,
      remediation: t`$\omega$ multiplies $t$ and $k$ multiplies $x$; the speed is $\dfrac{\omega}{k}$, a distance per time.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Forgets that the equation gives x in cm.",
      remediation: t`With $x$ in cm, $\dfrac{\omega}{k}$ comes out in cm/s; divide by 100 for m/s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Takes the coefficient of $t$ as the speed.`,
      remediation: t`The coefficient of $t$ is $\omega$, in rad/s; the speed is $\dfrac{\omega}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Takes the time from the mean position to an extreme as a whole period.",
      remediation: t`Mean to extreme is a quarter of an oscillation: $T$ is four times that time.`,
      fallback: { kind: "ext", topic: "S.H.M. (Oscillations, Ch.5)" },
    },
    {
      id: "C01-M7",
      mistake: "Takes neighbouring points at their mean positions as a whole wavelength apart.",
      remediation: t`Neighbouring mean-position points move opposite ways: they are $\dfrac{\lambda}{2}$ apart.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Takes the time from the mean position to an extreme as half a period.",
      remediation: "Mean to extreme is a quarter cycle; mean to the other mean position is half.",
      fallback: { kind: "ext", topic: "S.H.M. (Oscillations, Ch.5)" },
    },
    {
      id: "C01-M9",
      mistake: "Reads a plus sign in the phase as travel in the positive direction.",
      remediation: t`Keep the phase constant: $Bx + Ct$ = constant makes $x$ fall as $t$ grows, so the wave moves along $-x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Takes the wave to travel along its displacement axis.",
      remediation: "The wave travels along the coordinate inside the sine; the displacement is across it in a transverse wave.",
      fallback: { kind: "ext", topic: "transverse and longitudinal waves (Std XI Physics)" },
    },
    {
      id: "C01-M11",
      mistake: "Takes a stationary-wave equation for a travelling wave.",
      remediation: t`In $A\sin ky\cos\omega t$ the place and the time are in separate factors: nothing travels. A travelling wave has $ky \mp \omega t$ in one sine.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.2 (v)" },
      stem: t`A wave is represented by $y = 0.2\sin 4\pi\left[\dfrac{t}{0.08} - \dfrac{x}{0.8}\right]$ in SI units. What is its wavelength?`,
      verify: { kind: "value", inputs: { w: "50*pi", k: "5*pi", ld: "0.8" }, params: { ask: "lam" } },
      options: [
        { key: "A", text: t`$0.4\ \mathrm{m}$`, correct: true, value: "0.400000000000000" },
        { key: "B", text: t`$0.0637\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M1", value: "0.0637000000000000" },
        { key: "C", text: t`$0.8\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M2", value: "0.800000000000000" },
        { key: "D", text: t`$0.04\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M3", value: "0.0400000000000000" },
      ],
      solution: {
        steps: [
          t`Open the bracket: $y = 0.2\sin\left(50\pi t - 5\pi x\right)$, so $k = 5\pi\ \mathrm{rad/m}$.`,
          t`$\lambda = \dfrac{2\pi}{k} = \dfrac{2\pi}{5\pi} = 0.4\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.1(x)" },
      stem: t`A progressive wave on a string is $y = 8\sin\left(0.02x - 4t\right)$, with $x$ and $y$ in cm and $t$ in s. What is the speed of the wave?`,
      verify: { kind: "value", inputs: { w: "4", k: "0.02", scale: "0.01" }, params: { ask: "v" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{m/s}$`, correct: true, value: "2" },
        { key: "B", text: t`$200\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M4", value: "200" },
        { key: "C", text: t`$5 \times 10^{-5}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M3", value: "5.00000000000000e-5" },
        { key: "D", text: t`$0.04\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M5", value: "0.0400000000000000" },
      ],
      solution: {
        steps: [
          t`Compare with $A\sin\left(kx - \omega t\right)$: $k = 0.02\ \mathrm{cm^{-1}}$, $\omega = 4\ \mathrm{rad/s}$.`,
          t`$v = \dfrac{\omega}{k} = \dfrac{4}{0.02} = 200\ \mathrm{cm/s}$.`,
          t`$200\ \mathrm{cm/s} = 2\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Solved Ex.6.2" },
      stem: t`A particle on a string carrying a progressive wave takes $4.0\ \mathrm{ms}$ to move from its mean position to an extreme position. Two neighbouring points of the string that are at their mean positions at one instant are $2.0\ \mathrm{cm}$ apart. What is the speed of the wave?`,
      verify: { kind: "value", inputs: { tq_ms: "4.0", d_cm: "2.0" }, params: { ask: "vq" } },
      options: [
        { key: "A", text: t`$1.25\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M7", value: "1.25000000000000" },
        { key: "B", text: t`$5\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M8", value: "5" },
        { key: "C", text: t`$2.5\ \mathrm{m/s}$`, correct: true, value: "2.50000000000000" },
        { key: "D", text: t`$10\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M6", value: "10" },
      ],
      solution: {
        steps: [
          t`Mean position to extreme is a quarter period: $T = 4 \times 4.0 = 16\ \mathrm{ms}$.`,
          t`Neighbouring points at the mean position are half a wavelength apart: $\lambda = 4.0\ \mathrm{cm}$.`,
          t`$v = \dfrac{\lambda}{T} = \dfrac{0.04}{0.016} = 2.5\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.2 (i)" },
      stem: t`A wave is represented by $y = A\sin\left(Bx + Ct\right)$, where $A$, $B$ and $C$ are positive constants. In which direction does it travel, and how fast?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`Along $-x$, at speed $\dfrac{C}{B}$`, correct: true, value: "negx_CB" },
        { key: "B", text: t`Along $+x$, at speed $\dfrac{C}{B}$`, correct: false, misconceptionId: "C01-M9", value: "posx_CB" },
        { key: "C", text: t`Along $-x$, at speed $\dfrac{B}{C}$`, correct: false, misconceptionId: "C01-M3", value: "negx_BC" },
        { key: "D", text: t`Along $+y$, at speed $\dfrac{C}{B}$`, correct: false, misconceptionId: "C01-M10", value: "posy_CB" },
      ],
      solution: {
        steps: [
          t`Follow a point of constant phase: $Bx + Ct$ = constant, so $B\dfrac{dx}{dt} + C = 0$.`,
          t`$\dfrac{dx}{dt} = -\dfrac{C}{B}$: the wave travels along $-x$ at speed $\dfrac{C}{B}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.1 (iv)" },
      stem: t`Which of these equations represents a wave travelling in the positive $y$-direction?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "axis" } },
      options: [
        { key: "A", text: t`$x = A\sin\left(ky - \omega t\right)$`, correct: true, value: "x_ky_minus" },
        { key: "B", text: t`$x = A\sin\left(ky + \omega t\right)$`, correct: false, misconceptionId: "C01-M9", value: "x_ky_plus" },
        { key: "C", text: t`$y = A\sin\left(kx - \omega t\right)$`, correct: false, misconceptionId: "C01-M10", value: "y_kx_minus" },
        { key: "D", text: t`$y = A\sin ky\cos\omega t$`, correct: false, misconceptionId: "C01-M11", value: "y_standing" },
      ],
      solution: {
        steps: [
          t`A travelling wave has its phase in one piece, $ky \mp \omega t$, with the coordinate it travels along.`,
          t`$ky - \omega t$ = constant gives $y = \dfrac{\omega}{k}t$ + constant: travel along $+y$.`,
          t`So $x = A\sin\left(ky - \omega t\right)$, with the displacement along $x$.`,
        ],
      },
    },
  ],
};
