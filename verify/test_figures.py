"""Spec for the shared figure helpers (function graphs as curve elements).

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from figures import graph

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


if __name__ == "__main__":
    unittest.main()
