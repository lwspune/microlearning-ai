import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Honey runs slowly off a spoon while water pours fast. What holds the honey back?`,
    reveal: t`Its layers drag hard on each other as they slide. Honey has a high **viscosity**: a kind of friction inside a flowing fluid.`,
  },
  explanation: {
    intuition: [
      t`A flowing fluid moves in layers, each sliding over the next.`,
      t`The layer touching a fixed surface stays at rest; layers farther away move faster.`,
      t`Neighbouring layers drag on each other: this inner friction is **viscosity**.`,
      t`Honey and glycerin are very viscous; water and air are much less so.`,
      t`Slow, smooth flow is **streamline**; too fast, and it breaks into swirling, **turbulent** flow.`,
    ],
    formal: [
      {
        title: "Newton's law of viscosity",
        points: [
          t`The **velocity gradient** $\dfrac{dv}{dx}$ is how fast the speed changes with distance across the flow.`,
          t`Layers of area $A$ drag on each other with $F = \eta A\dfrac{dv}{dx}$.`,
          t`$\eta$ is the **coefficient of viscosity**: the drag per unit area per unit velocity gradient.`,
          t`For a plate sliding at $v$ on a layer $d$ thick, $\dfrac{dv}{dx} = \dfrac{v}{d}$, so $\eta = \dfrac{Fd}{Av}$.`,
          t`SI unit: $\mathrm{N\,s/m^2}$; dimensions $[M^1L^{-1}T^{-1}]$.`,
          t`Heating lowers the viscosity of a liquid but raises that of a gas.`,
        ],
      },
      {
        title: "Streamline and turbulent flow",
        points: [
          t`In **streamline** flow, every particle passing a point follows the same path, and layers do not mix.`,
          t`Above a **critical velocity** $v_c$, the flow turns **turbulent**, full of eddies.`,
          t`The **Reynolds number** $R_n = \dfrac{\rho vd}{\eta}$ tells which, with $d$ the pipe's diameter.`,
          t`Flow is streamline for $R_n$ below about 2000 and turbulent above about 3000.`,
          t`So $v_c = \dfrac{R_n\eta}{\rho d}$: viscous fluids in narrow pipes stay streamline.`,
        ],
      },
    ],
    worked: {
      prompt: t`A force of $3\ \mathrm{N}$ slides a plate of area $0.05\ \mathrm{m^2}$ at $0.1\ \mathrm{m/s}$ over an oil layer $2\ \mathrm{mm}$ thick. What is the oil's coefficient of viscosity?`,
      steps: [
        t`$d = 2\ \mathrm{mm} = 2 \times 10^{-3}\ \mathrm{m}$; the velocity gradient is $\dfrac{v}{d}$.`,
        t`$F = \eta A\dfrac{v}{d}$, so $\eta = \dfrac{Fd}{Av}$.`,
        t`$\eta = \dfrac{3 \times 2 \times 10^{-3}}{0.05 \times 0.1}$.`,
        t`$\eta = 1.2\ \mathrm{N\,s/m^2}$.`,
      ],
      answer: t`$\eta = 1.2\ \mathrm{N\,s/m^2}$`,
    },
    visualSpec: t`Slide a plate over a fluid layer with a speed slider and watch the layers' speeds fan out, with the drag $\eta A\dfrac{v}{d}$ shown as an arrow.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Turns the velocity gradient upside down.",
      remediation: t`The gradient is the change in speed per unit distance across the flow: $\dfrac{v}{d}$, in s⁻¹.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Leaves out the area of contact.",
      remediation: t`The drag grows with the area of the layers: $F = \eta A\dfrac{dv}{dx}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Takes the viscosity as force per unit area, ignoring the gradient.",
      remediation: t`$\dfrac{F}{A}$ is only part of it; divide also by the velocity gradient $\dfrac{v}{d}$ to get $\eta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Leaves centimetres unconverted.",
      remediation: t`Put the diameter in metres before using $R_n = \dfrac{\rho vd}{\eta}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Uses the speed itself in place of the velocity gradient.",
      remediation: t`Divide the speed by the layer's thickness: the gradient is $\dfrac{v}{d}$, not $v$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Turns the Reynolds number formula upside down.",
      remediation: t`$R_n = \dfrac{\rho vd}{\eta}$: faster, denser flow in wider pipes gives a larger $R_n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Uses the pipe's radius in place of its diameter.",
      remediation: t`The $d$ in $R_n = \dfrac{\rho vd}{\eta}$ is the pipe's diameter.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.13" },
      stem: t`A force of $1\ \mathrm{N}$ moves a metal plate of area $10^{-2}\ \mathrm{m^2}$ at $2 \times 10^{-2}\ \mathrm{m/s}$ over a layer of oil $1.5 \times 10^{-3}\ \mathrm{m}$ thick. What is the coefficient of viscosity of the oil?`,
      verify: { kind: "value", inputs: { F: "1", A: "1e-2", v: "2e-2", d: "1.5e-3" }, params: { ask: "eta" } },
      options: [
        { key: "A", text: t`$7.5\ \mathrm{N\,s/m^2}$`, correct: true, value: "7.50000000000000" },
        { key: "B", text: t`$1330\ \mathrm{N\,s/m^2}$`, correct: false, misconceptionId: "C08-M1", value: "1330" },
        { key: "C", text: t`$0.075\ \mathrm{N\,s/m^2}$`, correct: false, misconceptionId: "C08-M2", value: "0.0750000000000000" },
        { key: "D", text: t`$100\ \mathrm{N\,s/m^2}$`, correct: false, misconceptionId: "C08-M3", value: "100" },
      ],
      solution: {
        steps: [
          t`$\eta = \dfrac{Fd}{Av} = \dfrac{1 \times 1.5 \times 10^{-3}}{10^{-2} \times 2 \times 10^{-2}}$.`,
          t`$\eta = 7.5\ \mathrm{N\,s/m^2}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.12" },
      stem: t`A force of $0.5\ \mathrm{N}$ moves a metal plate of area $10^{-2}\ \mathrm{m^2}$ at $3 \times 10^{-2}\ \mathrm{m/s}$ over a layer of glycerin $0.5 \times 10^{-3}\ \mathrm{m}$ thick. What is the coefficient of viscosity of the glycerin?`,
      verify: { kind: "value", inputs: { F: "0.5", A: "1e-2", v: "3e-2", d: "0.5e-3" }, params: { ask: "eta" } },
      options: [
        { key: "A", text: t`$0.00833\ \mathrm{N\,s/m^2}$`, correct: false, misconceptionId: "C08-M2", value: "0.00833000000000000" },
        { key: "B", text: t`$50\ \mathrm{N\,s/m^2}$`, correct: false, misconceptionId: "C08-M3", value: "50" },
        { key: "C", text: t`$1670\ \mathrm{N\,s/m^2}$`, correct: false, misconceptionId: "C08-M5", value: "1670" },
        { key: "D", text: t`$0.833\ \mathrm{N\,s/m^2}$`, correct: true, value: "0.833000000000000" },
      ],
      solution: {
        steps: [
          t`$\eta = \dfrac{Fd}{Av} = \dfrac{0.5 \times 0.5 \times 10^{-3}}{10^{-2} \times 3 \times 10^{-2}}$.`,
          t`$\eta \approx 0.833\ \mathrm{N\,s/m^2}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.3" },
      stem: t`What is the SI unit of the coefficient of viscosity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`$\mathrm{N/(m^2\,s)}$`, correct: false, misconceptionId: "C08-M1", value: "N_per_m2_s" },
        { key: "B", text: t`$\mathrm{N\,s}$`, correct: false, misconceptionId: "C08-M2", value: "N_s" },
        { key: "C", text: t`$\mathrm{N\,s/m^3}$`, correct: false, misconceptionId: "C08-M5", value: "N_s_per_m3" },
        { key: "D", text: t`$\mathrm{N\,s/m^2}$`, correct: true, value: "N_s_per_m2" },
      ],
      solution: {
        steps: [
          t`$\eta = \dfrac{F}{A\,(dv/dx)}$: newtons divided by $\mathrm{m^2} \times \mathrm{s^{-1}}$.`,
          t`So the unit is $\mathrm{N\,s/m^2}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.2(ii)" },
      stem: t`Water, with $\eta = 10^{-3}\ \mathrm{N\,s/m^2}$ and $\rho = 1000\ \mathrm{kg/m^3}$, flows through a pipe of diameter $2\ \mathrm{cm}$. Taking the Reynolds number at which turbulence begins as $2000$, what is the critical velocity?`,
      verify: { kind: "value", inputs: { Rn: "2000", eta: "1e-3", rho: "1000", d_cm: "2" }, params: { ask: "vc" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M6", value: "10" },
        { key: "B", text: t`$0.2\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M7", value: "0.200000000000000" },
        { key: "C", text: t`$0.1\ \mathrm{m/s}$`, correct: true, value: "0.100000000000000" },
        { key: "D", text: t`$0.001\ \mathrm{m/s}$`, correct: false, misconceptionId: "C08-M4", value: "0.00100000000000000" },
      ],
      solution: {
        steps: [
          t`$v_c = \dfrac{R_n\eta}{\rho d} = \dfrac{2000 \times 10^{-3}}{1000 \times 0.02}$.`,
          t`$v_c = 0.1\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Water, with $\eta = 10^{-3}\ \mathrm{N\,s/m^2}$ and $\rho = 1000\ \mathrm{kg/m^3}$, flows at $0.05\ \mathrm{m/s}$ through a pipe of diameter $1\ \mathrm{cm}$. What is the Reynolds number of the flow?`,
      verify: { kind: "value", inputs: { v: "0.05", eta: "1e-3", rho: "1000", d_cm: "1" }, params: { ask: "Rn" } },
      options: [
        { key: "A", text: t`$250$`, correct: false, misconceptionId: "C08-M7", value: "250" },
        { key: "B", text: t`$500$`, correct: true, value: "500" },
        { key: "C", text: t`$50000$`, correct: false, misconceptionId: "C08-M4", value: "50000" },
        { key: "D", text: t`$0.002$`, correct: false, misconceptionId: "C08-M6", value: "0.00200000000000000" },
      ],
      solution: {
        steps: [
          t`$R_n = \dfrac{\rho vd}{\eta} = \dfrac{1000 \times 0.05 \times 0.01}{10^{-3}}$.`,
          t`$R_n = 500$, so the flow is streamline.`,
        ],
      },
    },
  ],
};
