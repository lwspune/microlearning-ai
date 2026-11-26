"""C06 Centre of mass: answer models (the key, and one per misconception).

params["ask"]:
  "two":    position, in m, of the centre of mass of m1 kg at x = 0 and m2 kg at x = L m (inputs m1, m2, L);
  "disc":   x of the centre of mass of a uniform disc of radius k*r with a hole of radius r centred at x = c*r, the
            x-axis from the disc's centre through the hole's (inputs k, c); a multiple of r;
  "sphere": x of the centre of mass of a uniform solid sphere of radius R with a spherical cavity of radius R/2 centred
            at x = R/2 (no inputs); a multiple of R;
  "cubes":  x, in cm, of the centre of mass of uniform solid cubes of edges a1, a2, a3 cm placed in a row, touching, the
            origin at the outer face of the first (inputs a1, a2, a3);
  "shell":  the path of the centre of mass of a shell that bursts in flight (a named answer).

The key works from x_cm = sum(m_i x_i) / sum(m_i), a removed part counting as negative mass.
"""
from sympy import Integer, Rational, Symbol

from physics import sig

NAMED = {
    "shell": {"key": "sameParabola", "C06-M8": "newPath", "C06-M9": "withHeavier", "C06-M10": "fallsStraight"},
}


def _removed(M, m, d, *, add=False, centre=False, keep_total=False):
    """x of the centre of mass of a body of mass M (centre at 0) with mass m at d removed."""
    if centre:
        return Integer(0)
    if add:
        return m * d / (M + m)
    return -m * d / (M if keep_total else M - m)


def _solve(v, p, *, centre=False, swap=False, per_count=False, add=False, power=None, keep_total=False, faces=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "two":
        m1, m2, L = v["m1"], v["m2"], v["L"]
        if centre:
            return sig(L / 2, n)
        if per_count:
            return sig(m2 * L / 2, n)
        return sig((m1 if swap else m2) * L / (m1 + m2), n)
    if ask == "disc":
        r = Symbol("r")
        k, c = v["k"], v["c"]
        pw = power or 2  # mass ~ area
        return _removed(k**pw, Integer(1), c * r, add=add, centre=centre, keep_total=keep_total)
    if ask == "sphere":
        R = Symbol("R")
        pw = power or 3  # mass ~ volume
        return _removed(Integer(1), Rational(1, 2) ** pw, R / 2, add=add, centre=centre, keep_total=keep_total)
    if ask == "cubes":
        a = [v["a1"], v["a2"], v["a3"]]
        pw = power or 3
        ms = [1 if centre else x**pw for x in a]
        xs, left = [], 0
        for x in a:
            xs.append(left if faces else left + x / 2)
            left += x
        return sig(sum(m * x for m, x in zip(ms, xs)) / sum(ms), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        kw2 = dict(kw)
        if "power" in kw2:
            kw2["power"] = {"disc": 1, "sphere": 2, "cubes": 2}[p["ask"]]
        return _solve(v, p, **kw2)
    return model


MODELS = {
    "key": key,
    "C06-M1": _m("C06-M1", ("two", "sphere", "cubes"), centre=True),  # ignores the masses: geometric centre
    "C06-M2": _m("C06-M2", ("disc", "sphere"), add=True),  # adds the removed part instead of subtracting it
    "C06-M3": _m("C06-M3", ("disc", "sphere", "cubes"), power=True),  # mass ~ a power of the size one too low
    "C06-M4": _m("C06-M4", ("cubes",), faces=True),  # uses the cubes' faces, not their centres
    "C06-M5": _m("C06-M5", ("two",), swap=True),  # weights each position with the other mass
    "C06-M6": _m("C06-M6", ("two",), per_count=True),  # divides by the number of bodies
    "C06-M7": _m("C06-M7", ("disc",), keep_total=True),  # divides by the whole body's mass
    "C06-M8": _m("C06-M8"),  # the burst sends the centre of mass on a new path
    "C06-M9": _m("C06-M9"),  # the centre of mass goes with the heavier piece
    "C06-M10": _m("C06-M10"),  # the centre of mass stops moving sideways
}
