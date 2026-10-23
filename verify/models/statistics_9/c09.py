"""C09 Sub-divided and percentage bar diagrams: answer models (the key, and one per misconception).

Every model works out one part's share of its bar, as a percentage rounded to the nearest integer
(the book's "approximate the percentages to the nearest integer"), unless the misconception says otherwise.

Inputs:
  parts - a Tuple: the parts of one bar, bottom band first (actual sizes, e.g. lakh km)
  i     - the index (0-based) of the part asked about
  col   - optional Tuple: that same part in every bar of the diagram (a column of the table)
  p1    - kind "diff": the first bar's parts (parts is then the second bar)
p["kind"]:
  pct  - the percentage of part i in its bar
  diff - how many percent the share of part i rose from bar p1 to bar parts
p["shown"] == "marks": the stem shows the bar drawn against a scale, so a band is read off its marks.
"""
from sympy import Integer, floor


def _round(x):
    """Nearest integer, halves up (the book's rounding)."""
    return Integer(floor(x + Integer(1) / 2))


def _apply(share, v, p):
    """Runs a share rule on the asked bar, or on both bars for a difference."""
    i = int(v["i"])
    if p.get("kind") == "pct":
        return share(list(v["parts"]), i, v, p)
    if p.get("kind") == "diff":
        return share(list(v["parts"]), i, v, p) - share(list(v["p1"]), i, v, p)
    raise ValueError("unknown kind")


def key(v, p):
    # straight from the definition: the part over its own bar's total, times 100
    return _apply(lambda b, i, v, p: _round(Integer(100) * b[i] / sum(b)), v, p)


def m1(v, p):
    # divides by the rest of the bar (the other parts), not by the whole bar
    return _apply(lambda b, i, v, p: _round(Integer(100) * b[i] / (sum(b) - b[i])), v, p)


def m2(v, p):
    # takes the part's actual size as its percentage: the sub-divided bar read as a percentage bar
    return _apply(lambda b, i, v, p: b[i], v, p)


def _m3(b, i, v, p):
    if p.get("shown") != "marks":
        raise ValueError("the bar is not drawn against a scale")
    top = sum(b[: i + 1])
    if top == b[i]:
        raise ValueError("the bottom band's top mark is its size")
    return _round(Integer(100) * top / sum(b))


def m3(v, p):
    # reads the band's top mark on the scale as its size
    return _apply(_m3, v, p)


def m4(v, p):
    if "col" not in v:
        raise ValueError("no column of that part given")
    # divides by that part's total over all the bars (the column total), not by its own bar's total
    return _apply(lambda b, i, v, p: _round(Integer(100) * b[i] / sum(v["col"])), v, p)


def m5(v, p):
    # cuts off the decimals instead of rounding to the nearest integer
    out = _apply(lambda b, i, v, p: Integer(floor(Integer(100) * b[i] / sum(b))), v, p)
    if out == key(v, p):
        raise ValueError("rounding down gives the key here")
    return out


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
