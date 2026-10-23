import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Pump up a bicycle tyre fast and the pump barrel gets hot, though no flame touched it. Where does the heat come from?`,
    reveal: t`The air is squeezed too quickly for heat to escape. The work done on it goes straight into its internal energy, and it warms up: an **adiabatic** compression.`,
  },
  explanation: {
    intuition: [
      t`In an **adiabatic** process, no heat flows in or out: $Q = 0$.`,
      t`That happens when the system is well insulated, or the change is too quick for heat to flow.`,
      t`The first law gives $\Delta U = -W$: a gas cools as it expands and warms as it is compressed.`,
      t`Then $pV^\gamma$ stays constant, with $\gamma = \dfrac{C_P}{C_V}$, so the adiabat is steeper than the isotherm.`,
      t`Examples: a bicycle pump warming, air cooling as it rises, fuel lighting in a diesel engine.`,
    ],
    formal: [
      {
        title: "Adiabatic process",
        points: [
          t`An **adiabatic process** exchanges no heat with the surroundings: $Q = 0$.`,
          t`It needs perfect insulation, or a change so fast that heat has no time to flow.`,
          t`The first law gives $\Delta U = -W$.`,
          t`Expansion ($W > 0$) lowers $U$, so the gas cools; compression warms it.`,
        ],
        figure: {
          alt: "A p-V graph: an adiabat through state A, the gas cooling as it expands along it and warming as it is compressed.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 7] },
          elements: [
            { kind: "curve", points: [[1, 7.0565], [1.15, 5.8024], [1.3, 4.8873], [1.45, 4.1944], [1.6, 3.6544], [1.75, 3.2236], [1.9, 2.873], [2.05, 2.583], [2.2, 2.3399], [2.35, 2.1335], [2.5, 1.9565], [2.65, 1.8032], [2.8, 1.6694], [2.95, 1.5518], [3.1, 1.4477], [3.25, 1.355], [3.4, 1.2721], [3.55, 1.1975], [3.7, 1.1301], [3.85, 1.0689], [4, 1.0132], [4.15, 0.9623], [4.3, 0.9157], [4.45, 0.8727], [4.6, 0.8332], [4.75, 0.7966], [4.9, 0.7626], [5.05, 0.7311], [5.2, 0.7018], [5.35, 0.6744], [5.5, 0.6488], [5.65, 0.6248], [5.8, 0.6023], [5.95, 0.5811], [6.1, 0.5612], [6.25, 0.5424], [6.4, 0.5247], [6.55, 0.508], [6.7, 0.4921], [6.85, 0.4771], [7, 0.4629]] },
            { kind: "point", at: [1.5, 4], label: "A", labelAt: "ne" },
          ],
        },
      },
      {
        title: "Adiabatic relations",
        points: [
          t`$pV^\gamma = $ constant, where $\gamma = \dfrac{C_P}{C_V}$: $\dfrac{5}{3}$ monatomic, $\dfrac{7}{5}$ diatomic.`,
          t`With $pV = nRT$: $TV^{\gamma - 1} = $ constant, and $T^\gamma p^{1 - \gamma} = $ constant.`,
          t`Work done by the gas: $W = \dfrac{p_iV_i - p_fV_f}{\gamma - 1} = \dfrac{nR\left(T_i - T_f\right)}{\gamma - 1}$.`,
          t`Since $\gamma > 1$, an adiabat on the $p$-$V$ graph is steeper than the isotherm through the same point.`,
        ],
        figure: {
          alt: "A p-V graph: an adiabat through state A. At point 4, the isotherm through A, dashed, less steep than the adiabat.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 7] },
          elements: [
            { kind: "curve", points: [[1, 7.0565], [1.15, 5.8024], [1.3, 4.8873], [1.45, 4.1944], [1.6, 3.6544], [1.75, 3.2236], [1.9, 2.873], [2.05, 2.583], [2.2, 2.3399], [2.35, 2.1335], [2.5, 1.9565], [2.65, 1.8032], [2.8, 1.6694], [2.95, 1.5518], [3.1, 1.4477], [3.25, 1.355], [3.4, 1.2721], [3.55, 1.1975], [3.7, 1.1301], [3.85, 1.0689], [4, 1.0132], [4.15, 0.9623], [4.3, 0.9157], [4.45, 0.8727], [4.6, 0.8332], [4.75, 0.7966], [4.9, 0.7626], [5.05, 0.7311], [5.2, 0.7018], [5.35, 0.6744], [5.5, 0.6488], [5.65, 0.6248], [5.8, 0.6023], [5.95, 0.5811], [6.1, 0.5612], [6.25, 0.5424], [6.4, 0.5247], [6.55, 0.508], [6.7, 0.4921], [6.85, 0.4771], [7, 0.4629]] },
            { kind: "point", at: [1.5, 4], label: "A", labelAt: "ne" },
            { kind: "label", at: [6.95, 0.22], label: "adiabat", labelAt: "w" },
            { kind: "curve", points: [[1, 6], [1.15, 5.2174], [1.3, 4.6154], [1.45, 4.1379], [1.6, 3.75], [1.75, 3.4286], [1.9, 3.1579], [2.05, 2.9268], [2.2, 2.7273], [2.35, 2.5532], [2.5, 2.4], [2.65, 2.2642], [2.8, 2.1429], [2.95, 2.0339], [3.1, 1.9355], [3.25, 1.8462], [3.4, 1.7647], [3.55, 1.6901], [3.7, 1.6216], [3.85, 1.5584], [4, 1.5], [4.15, 1.4458], [4.3, 1.3953], [4.45, 1.3483], [4.6, 1.3043], [4.75, 1.2632], [4.9, 1.2245], [5.05, 1.1881], [5.2, 1.1538], [5.35, 1.1215], [5.5, 1.0909], [5.65, 1.0619], [5.8, 1.0345], [5.95, 1.0084], [6.1, 0.9836], [6.25, 0.96], [6.4, 0.9375], [6.55, 0.916], [6.7, 0.8955], [6.85, 0.8759], [7, 0.8571]], dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [4.6, 1.5], label: "isotherm", labelAt: "ne", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Air ($\gamma = 1.4$) at $300\ \mathrm{K}$ and $3 \times 10^{5}\ \mathrm{Pa}$ fills $2$ litres. It expands adiabatically to $4$ litres. Find its final temperature and pressure.`,
      steps: [
        t`$TV^{\gamma - 1}$ is constant: $T_f = 300 \times \left(\dfrac{2}{4}\right)^{0.4}$.`,
        t`$T_f \approx 300 \times 0.758 \approx 227\ \mathrm{K}$: the air cools.`,
        t`$pV^\gamma$ is constant: $p_f = 3 \times 10^{5} \times \left(\dfrac{2}{4}\right)^{1.4}$.`,
        t`$p_f \approx 1.14 \times 10^{5}\ \mathrm{Pa}$, below the $1.5 \times 10^{5}\ \mathrm{Pa}$ an isothermal expansion would give.`,
      ],
      answer: t`$T_f \approx 227\ \mathrm{K}$, $p_f \approx 1.14 \times 10^{5}\ \mathrm{Pa}$`,
      figure: {
        alt: "A p-V graph. At step 1, the starting state at 2 litres and 3 times 10 to the 5 pascals. At step 3, the adiabat down to 4 litres. At step 4, the isotherm, dashed, ending higher at 4 litres.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 7], y: [0, 5] },
        elements: [
          { kind: "point", at: [2, 3], label: "i", labelAt: "ne", step: 1 },
          { kind: "curve", points: [[1.6, 4.1001], [1.71, 3.7357], [1.82, 3.4234], [1.93, 3.1534], [2.04, 2.918], [2.15, 2.7111], [2.26, 2.5282], [2.37, 2.3655], [2.48, 2.2199], [2.59, 2.089], [2.7, 1.9709], [2.81, 1.8637], [2.92, 1.7661], [3.03, 1.677], [3.14, 1.5954], [3.25, 1.5203], [3.36, 1.4511], [3.47, 1.3871], [3.58, 1.3278], [3.69, 1.2727], [3.8, 1.2214], [3.91, 1.1736], [4.02, 1.1289], [4.13, 1.087], [4.24, 1.0477], [4.35, 1.0108], [4.46, 0.9761], [4.57, 0.9434], [4.68, 0.9125], [4.79, 0.8833], [4.9, 0.8556], [5.01, 0.8295], [5.12, 0.8046], [5.23, 0.781], [5.34, 0.7586], [5.45, 0.7372], [5.56, 0.7169], [5.67, 0.6975], [5.78, 0.679], [5.89, 0.6613], [6, 0.6444]], step: 3 },
          { kind: "point", at: [4, 1.137], label: "f", labelAt: "sw", step: 3 },
          { kind: "curve", points: [[1.6, 3.75], [1.71, 3.5088], [1.82, 3.2967], [1.93, 3.1088], [2.04, 2.9412], [2.15, 2.7907], [2.26, 2.6549], [2.37, 2.5316], [2.48, 2.4194], [2.59, 2.3166], [2.7, 2.2222], [2.81, 2.1352], [2.92, 2.0548], [3.03, 1.9802], [3.14, 1.9108], [3.25, 1.8462], [3.36, 1.7857], [3.47, 1.7291], [3.58, 1.676], [3.69, 1.626], [3.8, 1.5789], [3.91, 1.5345], [4.02, 1.4925], [4.13, 1.4528], [4.24, 1.4151], [4.35, 1.3793], [4.46, 1.3453], [4.57, 1.3129], [4.68, 1.2821], [4.79, 1.2526], [4.9, 1.2245], [5.01, 1.1976], [5.12, 1.1719], [5.23, 1.1472], [5.34, 1.1236], [5.45, 1.1009], [5.56, 1.0791], [5.67, 1.0582], [5.78, 1.0381], [5.89, 1.0187], [6, 1]], dashed: true, tone: "muted", step: 4 },
          { kind: "label", at: [4.6, 1.5], label: "isotherm", labelAt: "ne", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A p-V graph. At point 3, an adiabat through state A, with the area under it shaded as the gas expands: the work, paid for from its internal energy. At point 4, the isotherm through A, dashed: the adiabat falls more steeply.",
      chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
      view: { x: [0, 7], y: [0, 7] },
      elements: [
        { kind: "curve", points: [[1, 7.0565], [1.15, 5.8024], [1.3, 4.8873], [1.45, 4.1944], [1.6, 3.6544], [1.75, 3.2236], [1.9, 2.873], [2.05, 2.583], [2.2, 2.3399], [2.35, 2.1335], [2.5, 1.9565], [2.65, 1.8032], [2.8, 1.6694], [2.95, 1.5518], [3.1, 1.4477], [3.25, 1.355], [3.4, 1.2721], [3.55, 1.1975], [3.7, 1.1301], [3.85, 1.0689], [4, 1.0132], [4.15, 0.9623], [4.3, 0.9157], [4.45, 0.8727], [4.6, 0.8332], [4.75, 0.7966], [4.9, 0.7626], [5.05, 0.7311], [5.2, 0.7018], [5.35, 0.6744], [5.5, 0.6488], [5.65, 0.6248], [5.8, 0.6023], [5.95, 0.5811], [6.1, 0.5612], [6.25, 0.5424], [6.4, 0.5247], [6.55, 0.508], [6.7, 0.4921], [6.85, 0.4771], [7, 0.4629]], step: 3 },
        { kind: "point", at: [1.5, 4], label: "A", labelAt: "ne", step: 3 },
        { kind: "label", at: [6.95, 0.22], label: "adiabat", labelAt: "w", step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1.5, 0], [1.75, 0]] }, { kind: "halfPlane", through: [[1.75, 0], [1.75, 3.2236]] }, { kind: "halfPlane", through: [[1.75, 3.2236], [1.5, 4]] }, { kind: "halfPlane", through: [[1.5, 4], [1.5, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1.75, 0], [2, 0]] }, { kind: "halfPlane", through: [[2, 0], [2, 2.6739]] }, { kind: "halfPlane", through: [[2, 2.6739], [1.75, 3.2236]] }, { kind: "halfPlane", through: [[1.75, 3.2236], [1.75, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2, 0], [2.25, 0]] }, { kind: "halfPlane", through: [[2.25, 0], [2.25, 2.2674]] }, { kind: "halfPlane", through: [[2.25, 2.2674], [2, 2.6739]] }, { kind: "halfPlane", through: [[2, 2.6739], [2, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2.25, 0], [2.5, 0]] }, { kind: "halfPlane", through: [[2.5, 0], [2.5, 1.9565]] }, { kind: "halfPlane", through: [[2.5, 1.9565], [2.25, 2.2674]] }, { kind: "halfPlane", through: [[2.25, 2.2674], [2.25, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2.5, 0], [2.75, 0]] }, { kind: "halfPlane", through: [[2.75, 0], [2.75, 1.7121]] }, { kind: "halfPlane", through: [[2.75, 1.7121], [2.5, 1.9565]] }, { kind: "halfPlane", through: [[2.5, 1.9565], [2.5, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2.75, 0], [3, 0]] }, { kind: "halfPlane", through: [[3, 0], [3, 1.5157]] }, { kind: "halfPlane", through: [[3, 1.5157], [2.75, 1.7121]] }, { kind: "halfPlane", through: [[2.75, 1.7121], [2.75, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[3, 0], [3.25, 0]] }, { kind: "halfPlane", through: [[3.25, 0], [3.25, 1.355]] }, { kind: "halfPlane", through: [[3.25, 1.355], [3, 1.5157]] }, { kind: "halfPlane", through: [[3, 1.5157], [3, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[3.25, 0], [3.5, 0]] }, { kind: "halfPlane", through: [[3.5, 0], [3.5, 1.2215]] }, { kind: "halfPlane", through: [[3.5, 1.2215], [3.25, 1.355]] }, { kind: "halfPlane", through: [[3.25, 1.355], [3.25, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[3.5, 0], [3.75, 0]] }, { kind: "halfPlane", through: [[3.75, 0], [3.75, 1.109]] }, { kind: "halfPlane", through: [[3.75, 1.109], [3.5, 1.2215]] }, { kind: "halfPlane", through: [[3.5, 1.2215], [3.5, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[3.75, 0], [4, 0]] }, { kind: "halfPlane", through: [[4, 0], [4, 1.0132]] }, { kind: "halfPlane", through: [[4, 1.0132], [3.75, 1.109]] }, { kind: "halfPlane", through: [[3.75, 1.109], [3.75, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[4, 0], [4.25, 0]] }, { kind: "halfPlane", through: [[4.25, 0], [4.25, 0.9308]] }, { kind: "halfPlane", through: [[4.25, 0.9308], [4, 1.0132]] }, { kind: "halfPlane", through: [[4, 1.0132], [4, 0]] }], step: 3 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[4.25, 0], [4.5, 0]] }, { kind: "halfPlane", through: [[4.5, 0], [4.5, 0.8592]] }, { kind: "halfPlane", through: [[4.5, 0.8592], [4.25, 0.9308]] }, { kind: "halfPlane", through: [[4.25, 0.9308], [4.25, 0]] }], step: 3 },
        { kind: "curve", points: [[1, 6], [1.15, 5.2174], [1.3, 4.6154], [1.45, 4.1379], [1.6, 3.75], [1.75, 3.4286], [1.9, 3.1579], [2.05, 2.9268], [2.2, 2.7273], [2.35, 2.5532], [2.5, 2.4], [2.65, 2.2642], [2.8, 2.1429], [2.95, 2.0339], [3.1, 1.9355], [3.25, 1.8462], [3.4, 1.7647], [3.55, 1.6901], [3.7, 1.6216], [3.85, 1.5584], [4, 1.5], [4.15, 1.4458], [4.3, 1.3953], [4.45, 1.3483], [4.6, 1.3043], [4.75, 1.2632], [4.9, 1.2245], [5.05, 1.1881], [5.2, 1.1538], [5.35, 1.1215], [5.5, 1.0909], [5.65, 1.0619], [5.8, 1.0345], [5.95, 1.0084], [6.1, 0.9836], [6.25, 0.96], [6.4, 0.9375], [6.55, 0.916], [6.7, 0.8955], [6.85, 0.8759], [7, 0.8571]], dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [4.6, 1.5], label: "isotherm", labelAt: "ne", step: 4 },
      ],
    },
    visualSpec: t`Push a piston in fast on an insulated gas and watch the thermometer climb with no heat added; then trace the steep adiabat beside the gentler isotherm.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Uses $\gamma$ as the exponent in the $p$-$T$ relation.`,
      remediation: t`$T^\gamma p^{1-\gamma}$ is constant, so $\dfrac{p_f}{p_i} = \left(\dfrac{T_f}{T_i}\right)^{\gamma/(\gamma - 1)}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Uses $\dfrac{1}{\gamma - 1}$, the $V$-$T$ exponent, in the $p$-$T$ relation.`,
      remediation: t`$\dfrac{1}{\gamma - 1}$ links $V$ and $T$; for $p$ and $T$ the exponent is $\dfrac{\gamma}{\gamma - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Uses a diatomic gas's $\gamma$ for a monatomic gas.`,
      remediation: t`A monatomic gas has $\gamma = \dfrac{5}{3}$; $\dfrac{7}{5}$ is for a diatomic gas.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Treats the change as isothermal.",
      remediation: t`No heat flows, so the temperature changes: use $pV^\gamma = $ constant, not $pV = $ constant.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M5",
      mistake: t`Uses $\gamma - 1$ where $\gamma$ belongs: $pV^{\gamma - 1} = $ constant.`,
      remediation: t`Pressure and volume go together as $pV^\gamma$; it is temperature that goes with $V^{\gamma - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Uses $\gamma$ where $\gamma - 1$ belongs: $TV^\gamma = $ constant.`,
      remediation: t`Temperature and volume go together as $TV^{\gamma - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Uses the Celsius temperature.",
      remediation: "The relations need absolute temperature: add 273.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Gets the sign of the work wrong.",
      remediation: t`$W = \dfrac{p_iV_i - p_fV_f}{\gamma - 1}$ is negative on compression: work is done on the gas.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Leaves out the $\gamma - 1$ in the work.`,
      remediation: t`$W = \dfrac{p_iV_i - p_fV_f}{\gamma - 1}$: divide by $\gamma - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks the temperature can change only if heat flows.",
      remediation: t`Work changes internal energy too. With $Q = 0$, $\Delta U = -W$: compression warms the gas.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks no heat flow means nothing changes.",
      remediation: t`With $Q = 0$, the work done on the gas still raises its internal energy and temperature.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M12",
      mistake: "Turns the volume ratio upside down.",
      remediation: t`Compressing to $\dfrac{1}{15}$ of the volume raises the pressure: $p_f = p_i\left(\dfrac{V_i}{V_f}\right)^\gamma$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.13" },
      stem: t`An ideal monatomic gas is compressed adiabatically until its absolute temperature doubles. What is the ratio of its final pressure to its initial pressure? (For a monatomic gas, $\gamma = \dfrac{5}{3}$.)`,
      verify: { kind: "value", inputs: { gamma: "5/3", T_ratio: "2" }, params: { ask: "p_from_T", atoms: "mono" } },
      options: [
        { key: "A", text: t`$2.828$`, correct: false, misconceptionId: "C07-M2", value: "2.82800000000000" },
        { key: "B", text: t`$11.31$`, correct: false, misconceptionId: "C07-M3", value: "11.3100000000000" },
        { key: "C", text: t`$5.657$`, correct: true, value: "5.65700000000000" },
        { key: "D", text: t`$3.175$`, correct: false, misconceptionId: "C07-M1", value: "3.17500000000000" },
      ],
      solution: {
        steps: [
          t`$T^\gamma p^{1-\gamma}$ is constant, so $\dfrac{p_f}{p_i} = \left(\dfrac{T_f}{T_i}\right)^{\gamma/(\gamma - 1)}$, with $\dfrac{\gamma}{\gamma - 1} = \dfrac{5/3}{2/3} = \dfrac{5}{2}$.`,
          t`$\dfrac{p_f}{p_i} = 2^{5/2} = 4\sqrt{2} \approx 5.657$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.7" },
      stem: t`$1.0$ litre of an ideal gas at $1.01 \times 10^{5}\ \mathrm{Pa}$ and $27^\circ\mathrm{C}$ is compressed adiabatically to $\dfrac{1}{15}$ of its volume. Take $\gamma = 1.4$. What is its final pressure?`,
      verify: { kind: "value", inputs: { p_i: "1.01e5", V_ratio: "15", gamma: "1.4" }, params: { ask: "pf", sf: "3" } },
      options: [
        { key: "A", text: t`$1.52 \times 10^{6}\ \mathrm{Pa}$`, correct: false, misconceptionId: "C07-M4", value: "1520000" },
        { key: "B", text: t`$2.98 \times 10^{5}\ \mathrm{Pa}$`, correct: false, misconceptionId: "C07-M5", value: "298000" },
        { key: "C", text: t`$2280\ \mathrm{Pa}$`, correct: false, misconceptionId: "C07-M12", value: "2280" },
        { key: "D", text: t`$4.48 \times 10^{6}\ \mathrm{Pa}$`, correct: true, value: "4480000" },
      ],
      solution: {
        steps: [
          t`$pV^\gamma$ is constant: $p_f = p_i\left(\dfrac{V_i}{V_f}\right)^\gamma = 1.01 \times 10^{5} \times 15^{1.4}$.`,
          t`$p_f \approx 1.01 \times 10^{5} \times 44.3 \approx 4.48 \times 10^{6}\ \mathrm{Pa}$, about 45 atm.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.7" },
      stem: t`$1.0$ litre of an ideal gas at $1.01 \times 10^{5}\ \mathrm{Pa}$ and $27^\circ\mathrm{C}$ is compressed adiabatically to $\dfrac{1}{15}$ of its volume. Take $\gamma = 1.4$. What is its final temperature?`,
      verify: { kind: "value", inputs: { T_i_C: "27", V_ratio: "15", gamma: "1.4" }, params: { ask: "Tf", sf: "3" } },
      options: [
        { key: "A", text: t`$79.8\ \mathrm{K}$`, correct: false, misconceptionId: "C07-M7", value: "79.8000000000000" },
        { key: "B", text: t`$886\ \mathrm{K}$`, correct: true, value: "886" },
        { key: "C", text: t`$300\ \mathrm{K}$`, correct: false, misconceptionId: "C07-M4", value: "300" },
        { key: "D", text: t`$13300\ \mathrm{K}$`, correct: false, misconceptionId: "C07-M6", value: "13300" },
      ],
      solution: {
        steps: [
          t`$TV^{\gamma - 1}$ is constant: $T_f = T_i\left(\dfrac{V_i}{V_f}\right)^{\gamma - 1} = 300 \times 15^{0.4}$.`,
          t`$T_f \approx 300 \times 2.954 \approx 886\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.7" },
      stem: t`$1.0$ litre of an ideal gas at $1.01 \times 10^{5}\ \mathrm{Pa}$ and $27^\circ\mathrm{C}$ is compressed adiabatically to $\dfrac{1}{15}$ of its volume. Take $\gamma = 1.4$. How much work does the gas do?`,
      verify: { kind: "value", inputs: { p_i: "1.01e5", V_i: "1", V_ratio: "15", gamma: "1.4" }, params: { ask: "W", sf: "3" } },
      options: [
        { key: "A", text: t`$-493\ \mathrm{J}$`, correct: true, value: "-493" },
        { key: "B", text: t`$-274\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M4", value: "-274" },
        { key: "C", text: t`$493\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M8", value: "493" },
        { key: "D", text: t`$-197\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M9", value: "-197" },
      ],
      solution: {
        steps: [
          t`$p_iV_i = 101\ \mathrm{J}$ and $p_fV_f = 4.48 \times 10^{6} \times \dfrac{10^{-3}}{15} \approx 298\ \mathrm{J}$.`,
          t`$W = \dfrac{p_iV_i - p_fV_f}{\gamma - 1} = \dfrac{101 - 298}{0.4} \approx -493\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.2 (i)" },
      stem: t`A gas in a cylinder wrapped in thick insulation is compressed quickly. What happens?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "quick" } },
      options: [
        { key: "A", text: t`Heat flows out as it is compressed, so its temperature stays the same`, correct: false, misconceptionId: "C07-M4", value: "heat_out_same_T" },
        { key: "B", text: t`Heat flows in as it is compressed, which raises its temperature`, correct: false, misconceptionId: "C07-M10", value: "heat_in_warms" },
        { key: "C", text: t`No heat flows, so its temperature and internal energy stay the same`, correct: false, misconceptionId: "C07-M11", value: "nothing_changes" },
        { key: "D", text: t`No heat flows; work is done on the gas, so its temperature rises`, correct: true, value: "no_heat_work_on_warms" },
      ],
      solution: {
        steps: [
          t`The insulation and the speed leave no time for heat to flow: $Q = 0$.`,
          t`Work is done on the gas, so $\Delta U = -W > 0$ and its temperature rises.`,
        ],
      },
    },
  ],
};
