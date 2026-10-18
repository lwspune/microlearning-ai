"""Spec for the shared figure helpers (function graphs as curve elements).

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from figures import graph, number_line, venn, venn_cells

VIEW = {"x": [-4, 4], "y": [-3, 5]}


class Graph(unittest.TestCase):
    def test_a_parabola_is_one_curve_through_exact_points(self):
        (c,) = graph("x**2", -3, 3, VIEW, n=6)
        self.assertEqual(c["kind"], "curve")
        self.assertIn([0, 0], c["points"])
        self.assertIn([2, 4], c["points"])

    def test_it_stops_a_little_past_the_view_instead_of_running_far_off_frame(self):
        (c,) = graph("x**2", -4, 4, VIEW, n=80)
        top = max(y for _, y in c["points"])
        self.assertGreater(top, 5)
        self.assertLessEqual(top, 5 + 8)  # within one view height of the frame

    def test_a_pole_splits_the_graph_into_branches(self):
        pieces = graph("1/x", -4, 4, VIEW, n=81)
        self.assertEqual(len(pieces), 2)
        self.assertTrue(all(x < 0 for x, _ in pieces[0]["points"]))
        self.assertTrue(all(x > 0 for x, _ in pieces[1]["points"]))

    def test_undefined_values_split_too(self):
        (c,) = graph("sqrt(x)", -2, 4, VIEW, n=60)
        self.assertTrue(all(x >= 0 for x, _ in c["points"]))

    def test_extra_keys_go_on_every_piece(self):
        pieces = graph("1/x", -4, 4, VIEW, n=81, tone="muted", step=2)
        self.assertTrue(all(p["tone"] == "muted" and p["step"] == 2 for p in pieces))

    def test_points_are_rounded_for_compact_content(self):
        (c,) = graph("sin(x)", 0, 3, VIEW, n=7)
        self.assertTrue(all(len(str(v).split(".")[-1]) <= 3 for p in c["points"] for v in p))


def left_of(shape, pt):
    (x1, y1), (x2, y2) = shape["through"]
    return (x2 - x1) * (pt[1] - y1) - (y2 - y1) * (pt[0] - x1) > 0


def inside(region, pt):
    """Whether a region element covers the point (discs, outside discs, half-planes)."""
    for sh in region["within"]:
        if sh["kind"] == "halfPlane" and not left_of(sh, pt):
            return False
        if sh["kind"] in ("disc", "outsideDisc"):
            (cx, cy), r = sh["centre"], sh["r"]
            d2 = (pt[0] - cx) ** 2 + (pt[1] - cy) ** 2
            if (d2 < r * r) != (sh["kind"] == "disc"):
                return False
    return True


class Venn(unittest.TestCase):
    def shaded(self, fig, pt):
        return any(inside(e, pt) for e in fig["elements"] if e["kind"] == "region")

    def test_it_is_a_bare_frame(self):
        self.assertEqual(venn("A and B", shade=lambda a, b: a)["axes"], "none")

    def test_a_minus_b_shades_only_the_part_of_a_outside_b(self):
        fig = venn("A minus B", shade=lambda a, b: a and not b)
        self.assertTrue(self.shaded(fig, (2.6, 3.5)))   # only A
        self.assertFalse(self.shaded(fig, (5.0, 3.5)))  # A and B
        self.assertFalse(self.shaded(fig, (7.4, 3.5)))  # only B
        self.assertFalse(self.shaded(fig, (0.9, 0.8)))  # neither

    def test_the_complement_stays_inside_the_universal_set(self):
        fig = venn("Neither", shade=lambda a, b: not a and not b)
        self.assertTrue(self.shaded(fig, (0.9, 0.8)))
        self.assertFalse(self.shaded(fig, (5.0, 3.5)))
        self.assertFalse(self.shaded(fig, (-0.2, 3.0)))  # outside U

    def test_three_sets_have_eight_cells_each_at_its_own_label_point(self):
        fig = venn("Three sets", names=("A", "B", "C"), shade=lambda a, b, c: a and b and c)
        self.assertEqual(len(venn_cells(3)), 8)
        self.assertTrue(self.shaded(fig, (5.0, 3.8)))
        self.assertFalse(self.shaded(fig, (5.0, 5.4)))  # A and B only

    def test_counts_are_labels_in_their_cells(self):
        fig = venn("Counts", counts={(True, True): 12, (False, False): 3})
        texts = {e["label"]: e["at"] for e in fig["elements"] if e["kind"] == "label"}
        self.assertEqual(texts["12"], [5.0, 3.5])
        self.assertIn("3", texts)

    def test_shading_can_come_in_layers_each_with_its_own_step_and_tone(self):
        fig = venn("Layers", shade=[(lambda a, b: a, {"step": 1}), (lambda a, b: b and not a, {"step": 2, "tone": "good"})])
        regions = [e for e in fig["elements"] if e["kind"] == "region"]
        self.assertEqual(sorted((e["step"], e.get("tone")) for e in regions), [(1, None), (1, None), (2, "good")])

    def test_a_count_can_carry_a_step_and_tone(self):
        fig = venn("Counts", counts={(True, True): ("7", {"step": 2, "tone": "bad"})})
        (label,) = [e for e in fig["elements"] if e["kind"] == "label" and e["label"] == "7"]
        self.assertEqual((label["step"], label["tone"], label["at"]), (2, "bad", [5.0, 3.5]))

    def test_a_note_sits_top_centre_clear_of_the_frame_edge(self):
        fig = venn("Note", note=("A Δ B = {1, 3}", {"step": 3, "tone": "good"}))
        (note,) = [e for e in fig["elements"] if e["kind"] == "label" and e["label"].startswith("A Δ B")]
        self.assertEqual((note["at"], note["labelAt"], note["step"], note["tone"]), ([5.0, 6.05], "n", 3, "good"))

    def test_a_three_set_note_sits_bottom_left_clear_of_the_circles(self):
        fig = venn("Note", names=("A", "B", "C"), note="each part counted once")
        (note,) = [e for e in fig["elements"] if e["kind"] == "label" and e["label"] == "each part counted once"]
        self.assertEqual((note["at"], note["labelAt"]), ([0.3, 0.3], "ne"))

    def test_long_set_names_grow_outward_from_the_upper_circles(self):
        fig = venn("Names", names=("Volleyball", "Chemistry", "Maths"))
        names = {e["label"]: e for e in fig["elements"] if e["kind"] == "label"}
        self.assertEqual(names["Volleyball"]["labelAt"], "nw")
        self.assertEqual(names["Chemistry"]["labelAt"], "ne")
        # anchored on the circle at 135 and 45 degrees, so the text starts at the edge and runs away from it
        self.assertAlmostEqual(names["Volleyball"]["at"][0], 3.9 - 2.2 * 0.707, places=2)
        self.assertAlmostEqual(names["Chemistry"]["at"][1], 4.3 + 2.2 * 0.707, places=2)


class NumberLine(unittest.TestCase):
    def test_open_ends_are_hollow_and_closed_ends_filled(self):
        fig = number_line("[-3, 4)", -5, 6, parts=[("[", -3, 4, ")")])
        pts = {tuple(e["at"]): e.get("hollow", False) for e in fig["elements"] if e["kind"] == "point"}
        self.assertEqual(pts, {(-3, 0): False, (4, 0): True})
        self.assertEqual(fig["axes"], "none")

    def test_an_infinite_end_runs_off_the_line_with_an_arrow(self):
        fig = number_line("(2, oo)", -1, 6, parts=[("(", 2, "oo", ")")])
        (arrow,) = [e for e in fig["elements"] if e["kind"] == "vector"]
        self.assertEqual(arrow["from"], [2, 0])
        self.assertGreater(arrow["to"][0], 6)

    def test_the_view_has_no_float_noise(self):
        fig = number_line("(2, 5]", -1, 5.2, parts=[("(", 2, 5, "]")])
        self.assertEqual(fig["view"]["x"], [-2.1, 6.3])

    def test_ends_are_labelled_with_a_true_minus_sign(self):
        fig = number_line("[-3, 4]", -5, 6, parts=[("[", -3, 4, "]")])
        labels = sorted(e["label"] for e in fig["elements"] if e["kind"] == "label")
        self.assertEqual(labels, ["4", "−3"])


if __name__ == "__main__":
    unittest.main()
