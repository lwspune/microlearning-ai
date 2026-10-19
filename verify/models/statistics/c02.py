"""C02 Histograms, ogives and pie charts: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  pie     frequencies v["fs"] (a tuple), class index v["i"] (0-based) -> its pie-chart angle, in degrees
  pct     a class holds v["pc"] percent of the data -> its pie-chart angle, in degrees
  back    a sector's angle v["deg"] (degrees) -> the percentage of the data it shows
  rel     angles theta_j with c_j * theta_j all equal, coefficients v["cs"]; v["a"] (a tuple of
          multipliers) -> sum of a_j * theta_j, in degrees
  hshare  histogram bars of widths v["ws"] and heights v["hs"] (frequency densities), class v["i"]
          -> the fraction of the data in that class
  hpie    the same bars -> that class's pie-chart angle, in degrees
"""
from sympy import Rational


def _ask(p):
    return p["ask"]


def _r(xs):
    return [Rational(x) for x in xs]


def _share(v, p):
    """The asked class's share of the whole, from the definition (area of its bar for histograms)."""
    a = _ask(p)
    if a == "pie":
        fs = _r(v["fs"])
        return fs[int(v["i"])] / sum(fs)
    if a == "pct":
        return Rational(v["pc"]) / 100
    if a in ("hshare", "hpie"):
        areas = [w * h for w, h in zip(_r(v["ws"]), _r(v["hs"]))]
        return areas[int(v["i"])] / sum(areas)
    raise ValueError(a)


def _rel(v, whole, weights):
    """Angles proportional to `weights`, adding to `whole`; returns sum of a_j * angle_j."""
    t = sum(weights)
    return sum(Rational(aj) * whole * wj / t for aj, wj in zip(v["a"], weights))


def _report(share, p, whole=360):
    """A share shown the way the question asks: a fraction, an angle out of `whole`, or a percentage."""
    a = _ask(p)
    if a == "hshare":
        return share
    return share * whole


def key(v, p):
    a = _ask(p)
    if a == "rel":
        return _rel(v, 360, [1 / Rational(c) for c in v["cs"]])
    if a == "back":
        return Rational(v["deg"]) / 360 * 100
    return _report(_share(v, p), p)


def m1(v, p):
    """Histograms: takes frequency as proportional to the bar's height, ignoring unequal widths."""
    if _ask(p) not in ("hshare", "hpie"):
        raise ValueError("histograms only")
    hs = _r(v["hs"])
    return _report(hs[int(v["i"])] / sum(hs), p)


def m2(v, p):
    """Histograms: runs the density rule backwards, frequency proportional to height / width."""
    if _ask(p) not in ("hshare", "hpie"):
        raise ValueError("histograms only")
    d = [h / w for w, h in zip(_r(v["ws"]), _r(v["hs"]))]
    return _report(d[int(v["i"])] / sum(d), p)


def m3(v, p):
    """Pie relation c_j * theta_j equal: takes the angles in the ratio of the coefficients c_j."""
    if _ask(p) != "rel":
        raise ValueError("angle relations only")
    return _rel(v, 360, _r(v["cs"]))


def m4(v, p):
    """Share = part / rest, not part / whole."""
    a = _ask(p)
    if a == "back":
        d = Rational(v["deg"])
        return d / (360 - d) * 100
    if a == "rel":
        raise ValueError("not for angle relations")
    s = _share(v, p)
    return _report(s / (1 - s), p)


def m5(v, p):
    """Takes the whole circle as 100 (stops at the percentage)."""
    a = _ask(p)
    if a == "hshare":
        raise ValueError("asks a fraction")
    if a == "back":
        return Rational(v["deg"])  # the angle read as a percentage
    if a == "rel":
        return _rel(v, 100, [1 / Rational(c) for c in v["cs"]])
    return _report(_share(v, p), p, 100)


def m6(v, p):
    """Takes the whole circle as 180 degrees."""
    a = _ask(p)
    if a == "hshare":
        raise ValueError("asks a fraction")
    if a == "back":
        return Rational(v["deg"]) / 180 * 100
    if a == "rel":
        return _rel(v, 180, [1 / Rational(c) for c in v["cs"]])
    return _report(_share(v, p), p, 180)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
