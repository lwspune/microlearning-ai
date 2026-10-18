import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c28: Concept = {
  id: "C28",
  status: "approved",
  hook: {
    prompt: t`Pin a loop of string at two points and pull it tight with a pencil. **What curve does the pencil draw?**`,
    reveal: t`An ellipse: the total distance to the two pins stays fixed. With complex numbers that is $|z - a| + |z - b| = k$.`,
  },
  explanation: {
    intuition: [
      t`Take two fixed points, here $-3$ and $3$: they are the **foci**, and each one is a **focus**.`,
      t`Recall: $|z - a|$ is the distance from $z$ to $a$; this $z$ is $7$ from $-3$ and $3$ from $3$.`,
      t`The points whose two distances **add** to $10$, as $7 + 3$ does, trace an **ellipse**, a closed oval round both foci.`,
      t`A **hyperbola** is a pair of open curves, its two **branches**, each bending round one focus.`,
      t`The points whose distances **differ** by $4$, as $7 - 3$ does, trace one branch: the one nearer $3$.`,
      t`First compare the fixed sum or difference with the gap between the foci, here $6$: it decides if a curve exists.`,
    ],
    formal: [
      {
        title: "A fixed sum: an ellipse",
        points: [
          t`The **locus** of a condition is the set of all points $z$ that satisfy it.`,
          t`Take two foci $a$ and $b$, and let $d = |a - b|$, the distance between them.`,
          t`The locus $|z - a| + |z - b| = k$ is every point whose two distances add to $k$.`,
          t`If $k > d$, this locus is an ellipse round both foci.`,
          t`Its **major axis**, its longest line across, runs through both foci and is $k$ long.`,
          t`So from its centre, midway between the foci, the ellipse reaches $\frac k2$ each way.`,
        ],
        figure: {
          alt: "Foci a = −3 + i and b = 3 + i, a distance d apart. A point z has distances to them adding to k; all such points form an ellipse round both foci. Its major axis, through both foci, is k long, so it reaches k/2 from the centre each way, to −4 + i and 4 + i.",
          view: { x: [-6, 6], y: [-2.3, 4.6] },
          elements: [
            { kind: "point", at: [-3, 1], label: "a = −3 + i", labelAt: "s", step: 2 },
            { kind: "point", at: [3, 1], label: "b = 3 + i", labelAt: "s", step: 2 },
            { kind: "segment", from: [-3, 1], to: [3, 1], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [-1.5, 1], label: "d", labelAt: "n", tone: "muted", step: 2 },
            { kind: "point", at: [0, 3.646], label: "z", labelAt: "ne", step: 3 },
            { kind: "segment", from: [0, 3.646], to: [-3, 1], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [0, 3.646], to: [3, 1], dashed: true, tone: "muted", step: 3 },
            { kind: "ellipse", centre: [0, 1], rx: 4, ry: 2.646, label: "sum = k", labelAt: "ne", step: 4 },
            { kind: "segment", from: [-4, 1], to: [4, 1], tone: "good", step: 5 },
            { kind: "label", at: [-1.5, 1], label: "k", labelAt: "s", tone: "good", step: 5 },
            { kind: "point", at: [-4, 1], label: "−4 + i", labelAt: "w", tone: "good", step: 6 },
            { kind: "point", at: [4, 1], label: "4 + i", labelAt: "e", tone: "good", step: 6 },
            { kind: "label", at: [2, 1], label: "k/2", labelAt: "n", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "A sum of d or less",
        points: [
          t`A path from $a$ to $z$ to $b$ is never shorter than the straight one, so the two distances add to at least $d$.`,
          t`They add to exactly $d$ only on the **line segment** from $a$ to $b$, the straight piece joining them.`,
          t`So if $k = d$, the locus is that line segment.`,
          t`If $k < d$, no point is close enough to both foci: the locus has no points.`,
        ],
        figure: {
          alt: "Foci a = −3 + i and b = 3 + i, a distance d apart. A path from a to a point z off the line and on to b is longer than d. Only the points of the line segment from a to b have distances adding to exactly d, so that segment is the locus when k = d; when k < d there are no points.",
          view: { x: [-5, 5], y: [-2.3, 4] },
          elements: [
            { kind: "point", at: [-3, 1], label: "a = −3 + i", labelAt: "s" },
            { kind: "point", at: [3, 1], label: "b = 3 + i", labelAt: "s" },
            { kind: "segment", from: [-3, 1], to: [3, 1], dashed: true, tone: "muted" },
            { kind: "label", at: [-1.5, 1], label: "d", labelAt: "n", tone: "muted" },
            { kind: "point", at: [-1, 3], label: "z", labelAt: "n", step: 1 },
            { kind: "segment", from: [-3, 1], to: [-1, 3], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-1, 3], to: [3, 1], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-3, 1], to: [3, 1], tone: "good", step: 2 },
            { kind: "label", at: [1.2, 1], label: "k = d: the segment", labelAt: "n", tone: "good", step: 3 },
            { kind: "label", at: [2.5, -1.4], label: "k < d: no points", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "A fixed difference: one branch",
        points: [
          t`Now take the locus $|z - a| - |z - b| = k$, with $k > 0$.`,
          t`Then $|z - a|$ is the larger distance, so $z$ is nearer $b$ than $a$.`,
          t`If $k < d$, the locus is **one** branch of a hyperbola: the branch nearer $b$.`,
          t`The other branch, nearer $a$, is $|z - b| - |z - a| = k$ instead.`,
          t`Both branches appear only for $\big||z - a| - |z - b|\big| = k$.`,
        ],
        figure: {
          alt: "Foci a = −3 + i and b = 3 + i. A point z is farther from a than from b by k; all such points form the branch of a hyperbola nearer b. The other branch, nearer a, is drawn dashed: it belongs to the locus only when the difference has an absolute value round it.",
          view: { x: [-6, 6], y: [-2.6, 4.6] },
          elements: [
            { kind: "point", at: [-3, 1], label: "a = −3 + i", labelAt: "w" },
            { kind: "point", at: [3, 1], label: "b = 3 + i", labelAt: "s" },
            { kind: "point", at: [3, 3.5], label: "z", labelAt: "e", step: 1 },
            { kind: "segment", from: [3, 3.5], to: [-3, 1], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [3, 3.5], to: [3, 1], dashed: true, tone: "muted", step: 1 },
            { kind: "hyperbola", centre: [0, 1], a: 2, b: 2.236, axis: "x", branch: 1, tone: "good", step: 3 },
            { kind: "label", at: [3.64, -2.4], label: "difference = k", labelAt: "e", tone: "good", step: 3 },
            { kind: "hyperbola", centre: [0, 1], a: 2, b: 2.236, axis: "x", branch: -1, dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [-3.64, -2.4], label: "other branch", labelAt: "w", tone: "muted", step: 4 },
            { kind: "hyperbola", centre: [0, 1], a: 2, b: 2.236, axis: "x", branch: -1, step: 5 },
          ],
        },
      },
      {
        title: "A difference of d or more",
        points: [
          t`The two distances from $z$ to the foci never differ by more than $d$.`,
          t`A **ray** is a half-line: it starts at a point and goes on for ever one way.`,
          t`If $k = d$, the locus is the ray from $b$ pointing away from $a$.`,
          t`On it, $z$ is exactly $d$ farther from $a$ than from $b$.`,
          t`If $k > d$, no point qualifies: the locus has no points.`,
        ],
        figure: {
          alt: "Foci a = −3 + i and b = 3 + i, a distance d apart. When the difference equals d, the locus is the ray starting at b and pointing away from a; a point z on it is d farther from a than from b. When the difference is more than d there are no points.",
          view: { x: [-4.5, 7], y: [-2.3, 3.5] },
          elements: [
            { kind: "point", at: [-3, 1], label: "a = −3 + i", labelAt: "s" },
            { kind: "segment", from: [-3, 1], to: [3, 1], dashed: true, tone: "muted" },
            { kind: "label", at: [-1.5, 1], label: "d", labelAt: "n", tone: "muted" },
            { kind: "vector", from: [3, 1], to: [6.8, 1], tone: "good", step: 3 },
            { kind: "label", at: [5, 1], label: "difference = d", labelAt: "s", tone: "good", step: 3 },
            { kind: "point", at: [3, 1], label: "b = 3 + i", labelAt: "nw" },
            { kind: "point", at: [5, 1], label: "z", labelAt: "n", step: 4 },
            { kind: "label", at: [0, -1.4], label: "k > d: no points", tone: "bad", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Describe $|z - 2i| + |z + 2i| = 6$.`,
      steps: [
        t`The foci are $2i$ and $-2i$, so $d = 4$.`,
        t`$k = 6 > 4$, so it is an ellipse.`,
        t`Its major axis is $6$, along the imaginary axis, so it reaches $\pm 3i$.`,
      ],
      answer: t`An ellipse with foci $\pm 2i$, reaching $\pm 3i$.`,
      figure: {
        alt: "Foci 2i and −2i, 4 apart. The sum 6 is more than 4, so the locus is an ellipse along the imaginary axis, reaching 3i and −3i.",
        view: { x: [-4, 4], y: [-3.8, 3.8] },
        elements: [
          { kind: "point", at: [0, 2], label: "2i", labelAt: "e", step: 1 },
          { kind: "point", at: [0, -2], label: "−2i", labelAt: "e", step: 1 },
          { kind: "segment", from: [0, -2], to: [0, 2], dashed: true, tone: "muted", step: 1 },
          { kind: "label", at: [0, 1], label: "d = 4", labelAt: "e", tone: "muted", step: 1 },
          { kind: "ellipse", centre: [0, 0], rx: 2.236, ry: 3, label: "sum = 6", labelAt: "ne", step: 2 },
          { kind: "point", at: [0, 3], label: "3i", labelAt: "ne", tone: "good", step: 3 },
          { kind: "point", at: [0, -3], label: "−3i", labelAt: "se", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "Foci −3 and 3, 6 apart. A point z is 7 from −3 and 3 from 3. The points whose distances to the foci add to 10, as z's do, form an ellipse. A hyperbola has two branches; the points 4 nearer 3 than −3, as z is, form its branch nearer 3.",
      view: { x: [-6, 6], y: [-5.4, 4.8] },
      elements: [
        { kind: "point", at: [-3, 0], label: "−3", labelAt: "n", step: 1 },
        { kind: "point", at: [3, 0], label: "3", labelAt: "nw", step: 1 },
        { kind: "point", at: [3.333, 2.981], label: "z", labelAt: "ne", step: 2 },
        { kind: "segment", from: [3.333, 2.981], to: [-3, 0], label: "7", labelAt: "se", dashed: true, tone: "muted", step: 2 },
        { kind: "segment", from: [3.333, 2.981], to: [3, 0], label: "3", labelAt: "e", dashed: true, tone: "muted", step: 2 },
        { kind: "ellipse", centre: [0, 0], rx: 5, ry: 4, step: 3 },
        { kind: "label", at: [-3.54, 2.83], label: "sum = 10", labelAt: "nw", step: 3 },
        { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: -1, dashed: true, tone: "muted", step: 4 },
        { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: 1, dashed: true, tone: "muted", step: 4 },
        { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: 1, tone: "good", step: 5 },
        { kind: "label", at: [4.82, -4.9], label: "difference = 4", labelAt: "w", tone: "good", step: 5 },
        { kind: "segment", from: [-3, 0], to: [3, 0], label: "6", labelAt: "n", dashed: true, tone: "muted", step: 6 },
      ],
    },
    visualSpec: t`Two draggable foci and a slider for $k$. A toggle switches between sum and difference; as $k$ passes $d$, the ellipse squashes to a segment and vanishes (or the hyperbola branch flattens to a ray).`,
  },
  misconceptions: [
    {
      id: "C28-M1",
      mistake: "Not comparing the constant with the distance between the foci",
      remediation: t`Find $d = |a - b|$ first: $k$ compared with $d$ decides between a curve, a segment or ray, and nothing at all.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M2",
      mistake: "Mixing up the sum and the difference",
      remediation: "A constant **sum** gives an ellipse; a constant **difference** gives a hyperbola branch.",
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M3",
      mistake: "Giving both branches for a difference without absolute value",
      remediation: t`$|z - a| - |z - b| = k$ with $k > 0$ fixes which focus is farther: one branch only.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M4",
      mistake: "Calling every locus with two moduli a circle",
      remediation: "A circle needs one centre and one distance. Two foci with a fixed sum or difference give an ellipse or a hyperbola.",
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C28-M5",
      mistake: t`Using half the focal distance as the greatest $|z|$`,
      remediation: t`The ellipse reaches out to half the sum, $\frac k2$, beyond the foci.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M6",
      mistake: t`Using the whole sum as the greatest $|z|$`,
      remediation: t`The sum $k$ is the whole major axis; from the centre the ellipse reaches $\frac k2$.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M7",
      mistake: "Comparing the constant with the focal distance the wrong way round",
      remediation: t`A sum $|z - a| + |z - b| = k$ needs $k \ge |a - b|$, since by the triangle inequality the two distances add up to at least $|a - b|$. A bigger $k$ gives an ellipse; a smaller one gives no points.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M8",
      mistake: t`Giving the semi-minor axis as the greatest $|z|$`,
      remediation: t`$\sqrt{\left(\frac k2\right)^2 - c^2}$ is the semi-minor axis: the least $|z|$, on the imaginary axis. The greatest $|z|$ is at the ends of the major axis: $\frac k2$.`,
      fallback: { kind: "ext", topic: "conics" },
    },
  ],
  items: [
    {
      id: "C28-Q1",
      source: { kind: "authored" },
      stem: t`$|z - 3| + |z + 3| = 10$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "-3", k: "10" }, params: { op: "classify", sign: "+" } },
      options: [
        { key: "A", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M2", value: "2" },
        { key: "B", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
        { key: "C", text: t`an ellipse`, correct: true, value: "1" },
        { key: "D", text: "no points at all", correct: false, misconceptionId: "C28-M7", value: "5" },
      ],
      solution: {
        steps: [
          t`The foci are $3$ and $-3$, so $d = 6$.`,
          t`$k = 10 > 6$, so it is an ellipse.`,
        ],
        figure: {
          alt: "Foci 3 and −3, 6 apart. The sum 10 is more than 6, so the locus is an ellipse reaching ±5.",
          view: { x: [-6.2, 6.2], y: [-4.8, 4.8] },
          elements: [
            { kind: "point", at: [-3, 0], label: "−3", labelAt: "n", step: 1 },
            { kind: "point", at: [3, 0], label: "3", labelAt: "n", step: 1 },
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 4, label: "sum = 10", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C28-Q2",
      source: { kind: "authored" },
      stem: t`$|z - 3| + |z + 3| = 6$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "-3", k: "6" }, params: { op: "classify", sign: "+" } },
      options: [
        { key: "A", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
        { key: "B", text: t`the line segment joining $3$ and $-3$`, correct: true, value: "3" },
        { key: "C", text: t`an ellipse`, correct: false, misconceptionId: "C28-M1", value: "1" },
        { key: "D", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M2", value: "2" },
      ],
      solution: {
        steps: [
          t`The foci are $3$ and $-3$, so $d = 6$.`,
          t`$k = 6 = d$: only the points on the segment between the foci have distances adding to exactly $6$. So the locus is that segment.`,
        ],
        figure: {
          alt: "Foci 3 and −3, 6 apart. The sum equals the distance between them, so the locus is just the segment from −3 to 3.",
          view: { x: [-4.5, 4.5], y: [-2, 2] },
          elements: [
            { kind: "point", at: [-3, 0], label: "−3", labelAt: "nw", step: 1 },
            { kind: "point", at: [3, 0], label: "3", labelAt: "ne", step: 1 },
            { kind: "segment", from: [-3, 0], to: [3, 0], label: "sum = 6", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C28-Q3",
      source: { kind: "authored" },
      stem: t`$|z - 2| + |z + 2| = 3$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "-2", k: "3" }, params: { op: "classify", sign: "+" } },
      options: [
        { key: "A", text: t`an ellipse`, correct: false, misconceptionId: "C28-M1", value: "1" },
        { key: "B", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M2", value: "2" },
        { key: "C", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
        { key: "D", text: t`no points at all`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`The foci are $2$ and $-2$, so $d = 4$.`,
          t`Any point's distances to the two foci add to at least $4$, the distance between them. $k = 3 < 4$, so no point qualifies.`,
        ],
        figure: {
          alt: "Foci 2 and −2, 4 apart. Every point's two distances add to at least 4, so a sum of 3 is impossible: no points.",
          view: { x: [-3.5, 3.5], y: [-1.8, 1.8] },
          elements: [
            { kind: "point", at: [-2, 0], label: "−2", labelAt: "nw", step: 1 },
            { kind: "point", at: [2, 0], label: "2", labelAt: "ne", step: 1 },
            { kind: "segment", from: [-2, 0], to: [2, 0], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [1, 0], label: "d = 4", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [0, -1], label: "no points: every sum is at least 4", labelAt: "s", tone: "bad", step: 2 },
          ],
        },
      },
    },
    {
      id: "C28-Q4",
      source: { kind: "authored" },
      stem: t`$|z - 4| - |z + 4| = 6$ is:`,
      verify: { kind: "value", inputs: { a: "4", b: "-4", k: "6" }, params: { op: "classify", sign: "-" } },
      options: [
        { key: "A", text: t`one branch of a hyperbola`, correct: true, value: "2" },
        { key: "B", text: t`both branches of a hyperbola`, correct: false, misconceptionId: "C28-M3", value: "7" },
        { key: "C", text: t`an ellipse`, correct: false, misconceptionId: "C28-M2", value: "1" },
        { key: "D", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`The foci are $4$ and $-4$, so $d = 8$.`,
          t`$k = 6 < 8$, and the difference has no $|\ |$ round it, so it is **one** branch of a hyperbola.`,
          t`$|z - 4|$ is the larger distance, so $z$ is nearer $-4$: the left branch.`,
        ],
        figure: {
          alt: "Foci 4 and −4, 8 apart. The difference 6 is less than 8, so the locus is one branch of a hyperbola: the left one, nearer −4. The right branch is not included.",
          view: { x: [-7, 7], y: [-4.5, 4.5] },
          elements: [
            { kind: "point", at: [-4, 0], label: "−4", labelAt: "n", step: 1 },
            { kind: "point", at: [4, 0], label: "4", labelAt: "n", step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 3, b: 2.646, axis: "x", branch: 1, dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [4.97, 3.5], label: "not this branch", labelAt: "w", tone: "muted", step: 2 },
            { kind: "hyperbola", centre: [0, 0], a: 3, b: 2.646, axis: "x", branch: -1, step: 3 },
            { kind: "label", at: [-4.97, -3.5], label: "difference = 6", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C28-Q5",
      source: { kind: "authored" },
      stem: t`$|z + 3| - |z - 3| = 6$ is:`,
      verify: { kind: "value", inputs: { a: "-3", b: "3", k: "6" }, params: { op: "classify", sign: "-" } },
      options: [
        { key: "A", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M1", value: "2" },
        { key: "B", text: t`both branches of a hyperbola`, correct: false, misconceptionId: "C28-M3", value: "7" },
        { key: "C", text: t`an ellipse`, correct: false, misconceptionId: "C28-M2", value: "1" },
        { key: "D", text: t`a ray along the real axis, starting at $3$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`The foci are $-3$ and $3$, so $d = 6$.`,
          t`$k = 6 = d$: the difference reaches $6$ only on the real axis from $3$ onwards, pointing away from $-3$. So the locus is that ray, starting at $3$.`,
        ],
        figure: {
          alt: "Foci −3 and 3, 6 apart. The difference equals the distance between them, so the locus is the ray along the real axis from 3 to the right.",
          view: { x: [-4.5, 8.5], y: [-2, 2] },
          elements: [
            { kind: "point", at: [-3, 0], label: "−3", labelAt: "n", step: 1 },
            { kind: "vector", from: [3, 0], to: [8.3, 0], step: 2 },
            { kind: "label", at: [5.8, 0], label: "difference = 6", labelAt: "n", step: 2 },
            { kind: "point", at: [3, 0], label: "3", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C28-Q6",
      source: { kind: "authored" },
      stem: t`On the locus $|z - 4| + |z + 4| = 10$, the greatest value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "4", b: "-4", k: "10" }, params: { op: "max_mod" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C28-M5", value: "4" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C28-M6", value: "10" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C28-M8", value: "3" },
      ],
      solution: {
        steps: [
          t`The foci are $\pm4$ and $k = 10 > 8$: an ellipse centred at $0$ with major axis $10$ along the real axis.`,
          t`$|z|$ is greatest at the ends of the major axis, $\pm5$: the greatest value is $\dfrac{10}{2} = 5$.`,
        ],
        figure: {
          alt: "The ellipse with foci ±4 and sum 10, centred at 0. Its farthest points from 0 are the ends of the major axis, ±5.",
          view: { x: [-6.2, 6.2], y: [-3.8, 3.8] },
          elements: [
            { kind: "point", at: [-4, 0], tone: "muted", step: 1 },
            { kind: "point", at: [4, 0], tone: "muted", step: 1 },
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 3, step: 1 },
            { kind: "segment", from: [0, 0], to: [5, 0], label: "|z| = 5", labelAt: "n", tone: "good", step: 2 },
            { kind: "point", at: [5, 0], label: "5", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [-5, 0], label: "−5", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
