import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-focus-directrix-eccentricity.ts";
import { c02 } from "./concepts/c02-parabola-standard.ts";
import { c03 } from "./concepts/c03-parabola-other-forms.ts";
import { c04 } from "./concepts/c04-parabola-parametric.ts";
import { c05 } from "./concepts/c05-parabola-tangents.ts";
import { c06 } from "./concepts/c06-ellipse-standard.ts";
import { c07 } from "./concepts/c07-ellipse-from-data.ts";
import { c08 } from "./concepts/c08-ellipse-focal-property.ts";
import { c09 } from "./concepts/c09-ellipse-tangents.ts";
import { c10 } from "./concepts/c10-auxiliary-director-circles.ts";
import { c11 } from "./concepts/c11-hyperbola-standard.ts";
import { c12 } from "./concepts/c12-hyperbola-from-data.ts";
import { c13 } from "./concepts/c13-hyperbola-tangents.ts";
import { c14 } from "./concepts/c14-asymptotes.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const conicSections: Chapter = {
  slug: "conic-sections",
  title: "Conic Sections",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "conic",
    "parabola",
    "ellipse",
    "hyperbola",
    "rectangular hyperbola",
    "focus",
    "foci",
    "directrix",
    "vertex",
    "vertices",
    "latus rectum",
    "eccentricity",
    "major axis",
    "minor axis",
    "transverse axis",
    "conjugate axis",
    "focal distance",
    "tangent",
    "point of contact",
    "asymptote",
    "auxiliary circle",
    "director circle",
    "centre",
    "chord",
    "parametric",
    "slope",
    "origin",
  ],
  translations,
};
