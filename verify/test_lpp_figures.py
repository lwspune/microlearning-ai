"""Spec for the Linear Programming figure helpers: each halfPlane keeps the
constraint's side on its LEFT (FigureView's rule).

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from lpp_figures import figure, half_plane, line, plain, region


def left_of(shape, pt):
    (x1, y1), (x2, y2) = shape["through"]
    return (x2 - x1) * (pt[1] - y1) - (y2 - y1) * (pt[0] - x1) > 0


class HalfPlanes(unittest.TestCase):
    CASES = [
        ("3*x + 2*y <= 12", (1, 1), (5, 5)),
        ("3*x + 2*y >= 12", (5, 5), (1, 1)),
        ("x <= 4", (1, 9), (6, 0)),
        ("y >= 1", (9, 2), (9, 0)),
        ("y <= 2*x", (1, 0), (0, 1)),
        ("-x + y <= 1", (5, 0), (0, 5)),
        ("x/5 + y/2 <= 1", (1, 1), (5, 5)),
    ]

    def test_keeps_the_satisfying_side_on_the_left(self):
        for s, inside, outside in self.CASES:
            with self.subTest(s):
                hp = half_plane(s)
                self.assertTrue(left_of(hp, inside))
                self.assertFalse(left_of(hp, outside))

    def test_region_adds_the_axes_unless_told_not_to(self):
        self.assertEqual(len(region(["x + y <= 4"])["within"]), 3)
        self.assertEqual(len(region(["x + y <= 4"], nonneg=False)["within"]), 1)
        self.assertTrue(all(left_of(h, (1, 1)) for h in region(["x + y <= 4"])["within"]))


class Others(unittest.TestCase):
    def test_line_passes_through_both_intercepts(self):
        (x1, y1), (x2, y2) = line("4*x + 3*y = 60")["through"]
        for px, py in [(15, 0), (0, 20)]:
            self.assertAlmostEqual((x2 - x1) * (py - y1) - (y2 - y1) * (px - x1), 0)

    def test_figure_uses_xy_axes_and_shows_both_axes(self):
        f = figure("alt", 10, 8, [])
        self.assertEqual(f["axes"], "xy")
        self.assertLess(f["view"]["x"][0], 0)
        self.assertLess(f["view"]["y"][0], 0)

    def test_plain_labels(self):
        self.assertEqual(plain("3*x - 2*y <= 12"), "3x − 2y ≤ 12")


if __name__ == "__main__":
    unittest.main()
