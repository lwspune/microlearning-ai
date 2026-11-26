import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`In electrostatics you can isolate a single charge. Cut a magnet in two as often as you like, and every piece still has both an N and an S pole. What law of nature does this express?`,
    reveal: t`**Gauss' law of magnetism**: the net magnetic flux out of any closed surface is zero, because there are no isolated magnetic poles.`,
  },
  explanation: {
    intuition: [
      t`Magnetic flux through a surface counts the field lines crossing it.`,
      t`Magnetic field lines are closed loops: every line that leaves a closed surface enters it again somewhere.`,
      t`So the net flux out of any closed surface is zero.`,
      t`This is the same as saying that magnetic monopoles do not exist.`,
    ],
    formal: [
      {
        title: "Gauss' law of magnetism",
        points: [
          t`Magnetic flux through a small area: $d\Phi_B = \vec{B}\cdot d\vec{S}$, in weber ($\mathrm{Wb}$).`,
          t`For any closed surface: $\Phi_B$ $= \displaystyle\oint \vec{B}\cdot d\vec{S}$ $= 0$.`,
          t`Outward flux counts as positive and inward flux as negative; they always balance.`,
        ],
      },
      {
        title: "Comparison with electrostatics",
        points: [
          t`Gauss' law in electrostatics: $\displaystyle\oint \vec{E}\cdot d\vec{S}$ $= \dfrac{q}{\varepsilon_0}$, since charges exist alone.`,
          t`No isolated magnetic pole exists, so the magnetic right-hand side is zero.`,
          t`If a monopole of strength $p$ could be enclosed, the law would read $\displaystyle\oint \vec{B}\cdot d\vec{S}$ $= \mu_0p$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A closed cube sits near a magnet. The magnetic flux out through five of its faces adds up to $-2 \times 10^{-4}\ \mathrm{Wb}$ (that is, inward). What is the flux through the sixth face?`,
      steps: [
        t`By Gauss' law of magnetism the total flux out of the closed cube is zero.`,
        t`So the sixth face carries $+2 \times 10^{-4}\ \mathrm{Wb}$, outwards, balancing the other five.`,
      ],
      answer: t`$+2 \times 10^{-4}\ \mathrm{Wb}$, outwards`,
    },
    visualSpec: t`Draw closed surfaces round parts of a magnet and count the field lines going out and coming in.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks the net flux depends on the poles inside.",
      remediation: "Every enclosed N pole comes with an S pole, so the net flux is always zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks enclosing an N pole gives outward flux.",
      remediation: "Lines leaving through the surface near the N pole return through it elsewhere: net zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Takes the flux as field times area.",
      remediation: t`$BA$ is the flux through one flat surface facing the field; for a closed surface, outward and inward flux cancel.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Copies $\dfrac{q}{\varepsilon_0}$ from electrostatics.`,
      remediation: t`$\varepsilon_0$ belongs to electric fields; the magnetic counterpart is $\mu_0$, giving $\mu_0p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks the flux would still be zero with a monopole.",
      remediation: t`The flux is zero only because no monopole is enclosed; an enclosed monopole would give $\mu_0p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Divides by $\mu_0$.`,
      remediation: t`In SI, $\oint \vec{B}\cdot d\vec{S}$ for a pole $p$ is $\mu_0p$, by analogy with $\dfrac{q}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the flux round one pole is outward.",
      remediation: "The lines leaving near the N pole come back into the surface through the magnet itself.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks the flux round the N pole is inward.",
      remediation: "Lines leave the N pole outwards, but just as many enter through the magnet: net zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks the flux equals the pole strength.",
      remediation: "A pole never appears alone, so the enclosed 'pole strength' always sums to zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Gives the sixth face the same outward flux.",
      remediation: "The six faces must total zero, so the sixth must carry the flux back in.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks the sixth face carries no flux.",
      remediation: t`Then the total would be $3 \times 10^{-5}\ \mathrm{Wb}$, not zero.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Shares the flux among the faces.",
      remediation: "Gauss' law fixes the total, zero; the sixth face must cancel all of the other five.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Thinks magnetic lines start on N and end on S.",
      remediation: "Outside they go from N to S, but they continue inside from S to N: they never end.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Thinks magnetic lines start on S and end on N.",
      remediation: "Lines have no ends: the S-to-N part inside the magnet joins the N-to-S part outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Thinks lines come from infinity.",
      remediation: "Magnetic lines close on themselves through the magnet; they do not come from infinity.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.3 (i)" },
      stem: t`According to Gauss' law of magnetism, what is the net magnetic flux out of any closed surface?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "closed" } },
      options: [
        { key: "A", text: t`Positive if the surface holds an N pole, negative if it holds an S pole`, correct: false, misconceptionId: "C03-M2", value: "positive_if_n" },
        { key: "B", text: t`The field times the surface area`, correct: false, misconceptionId: "C03-M3", value: "b_times_area" },
        { key: "C", text: t`Zero`, correct: true, value: "zero_flux" },
        { key: "D", text: t`$\mu_0$ times the pole strength of the N poles inside`, correct: false, misconceptionId: "C03-M1", value: "mu0_pole" },
      ],
      solution: {
        steps: [
          t`Magnetic field lines form closed loops, so every line leaving a closed surface enters it again.`,
          t`The net flux out is zero: $\displaystyle\oint \vec{B}\cdot d\vec{S}$ $= 0$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.2 (ii)" },
      stem: t`If a magnetic monopole of pole strength $p$ existed and were enclosed by a closed surface, what would Gauss' law of magnetism become?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "monopole" } },
      options: [
        { key: "A", text: t`$\displaystyle\oint \vec{B}\cdot d\vec{S} = 0$, as before`, correct: false, misconceptionId: "C03-M5", value: "still_zero" },
        { key: "B", text: t`$\displaystyle\oint \vec{B}\cdot d\vec{S} = \dfrac{p}{\mu_0}$`, correct: false, misconceptionId: "C03-M6", value: "p_over_mu0" },
        { key: "C", text: t`$\displaystyle\oint \vec{B}\cdot d\vec{S} = \mu_0 p$`, correct: true, value: "mu0_p" },
        { key: "D", text: t`$\displaystyle\oint \vec{B}\cdot d\vec{S} = \dfrac{p}{\varepsilon_0}$`, correct: false, misconceptionId: "C03-M4", value: "p_over_eps0" },
      ],
      solution: {
        steps: [
          t`For electric charge, $\displaystyle\oint \vec{E}\cdot d\vec{S}$ $= \dfrac{q}{\varepsilon_0}$.`,
          t`The magnetic analogue, with $\dfrac{1}{\varepsilon_0} \to \mu_0$ and $q \to p$, is $\displaystyle\oint \vec{B}\cdot d\vec{S}$ $= \mu_0p$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`A closed surface is drawn round only the N pole end of a long bar magnet. What is the net magnetic flux out of it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "n_only" } },
      options: [
        { key: "A", text: t`Positive, since the N pole sends lines out`, correct: false, misconceptionId: "C03-M7", value: "positive_out" },
        { key: "B", text: t`Negative, since lines enter the N pole`, correct: false, misconceptionId: "C03-M8", value: "negative_in" },
        { key: "C", text: t`Equal to the pole strength of the N pole`, correct: false, misconceptionId: "C03-M9", value: "pole_strength" },
        { key: "D", text: t`Zero: the lines leaving it enter it again through the magnet`, correct: true, value: "zero_n" },
      ],
      solution: {
        steps: [
          t`Lines leave the surface near the N pole and go round outside.`,
          t`Just as many enter it again, through the body of the magnet: the net flux is zero.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`A closed box sits in a magnetic field. The total magnetic flux out through five of its faces is $3 \times 10^{-5}\ \mathrm{Wb}$. What is the flux out through the sixth face?`,
      verify: { kind: "value", inputs: { phi: "3e-5" }, params: { ask: "face" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{Wb}$`, correct: false, misconceptionId: "C03-M11", value: "0" },
        { key: "B", text: t`$6 \times 10^{-6}\ \mathrm{Wb}$`, correct: false, misconceptionId: "C03-M12", value: "6.00000000000000e-6" },
        { key: "C", text: t`$-3 \times 10^{-5}\ \mathrm{Wb}$`, correct: true, value: "-3.00000000000000e-5" },
        { key: "D", text: t`$3 \times 10^{-5}\ \mathrm{Wb}$`, correct: false, misconceptionId: "C03-M10", value: "3.00000000000000e-5" },
      ],
      solution: {
        steps: [
          t`The total flux out of the closed box is zero.`,
          t`So the sixth face carries $-3 \times 10^{-5}\ \mathrm{Wb}$: that much flux enters through it.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.3 (i)" },
      stem: t`Electric field lines start on positive charges and end on negative charges. What do magnetic field lines do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "loops" } },
      options: [
        { key: "A", text: t`They form closed loops, with no start and no end`, correct: true, value: "closed_loops" },
        { key: "B", text: t`They start on N poles and end on S poles`, correct: false, misconceptionId: "C03-M13", value: "n_to_s_end" },
        { key: "C", text: t`They start on S poles and end on N poles`, correct: false, misconceptionId: "C03-M14", value: "s_to_n_end" },
        { key: "D", text: t`They come in from infinity and end on the poles`, correct: false, misconceptionId: "C03-M15", value: "from_infinity" },
      ],
      solution: {
        steps: [
          t`There are no magnetic monopoles for lines to start or end on.`,
          t`So magnetic field lines form closed loops, with no start and no end.`,
        ],
      },
    },
  ],
};
