"""C08 Similar triangles: answer models (the key, and one per misconception).

An item gives two similar triangles and some side lengths, and asks for one missing side.
  params["t1"], params["t2"]  the similarity statement t1 ~ t2 ("ABC", "QRP"): vertices in the
                              same position correspond (A <-> Q, B <-> R, C <-> P).
  params["ask"]               the side asked for ("RP"), in either triangle.
  params["seen2"]             (M3 only) the order a student wrongly pairs t1's vertices with ("PQR").
  inputs                      known side lengths keyed by side name ({"AB": "10", "QR": "6"}).

The key comes from the definition: corresponding sides are in one ratio, so the ratio of a pair of
corresponding sides with both lengths known is the ratio of every pair.
"""
def _side(name):
    return frozenset(name)


def _lengths(v):
    return {_side(k): val for k, val in v.items()}


def _setup(v, p, t2):
    """(length of the asked side's partner, a known pair (t1 length, t2 length), asked side is in t2)."""
    t1, ask = p["t1"], _side(p["ask"])
    to2 = dict(zip(t1, t2))
    to1 = {b: a for a, b in to2.items()}
    L = _lengths(v)
    in2 = ask <= set(t2)
    partner = frozenset((to1 if in2 else to2)[c] for c in ask)
    if partner not in L:
        raise ValueError("the asked side's partner has no given length")
    s1 = partner if in2 else ask  # the asked pair, named by its t1 side
    for i in range(3):
        a = frozenset((t1[i], t1[(i + 1) % 3]))
        b = frozenset(to2[c] for c in a)
        if a != s1 and a in L and b in L:
            return L[partner], (L[a], L[b]), in2
    raise ValueError("no pair of corresponding sides with both lengths known")


def key(v, p):
    w, (u, U), in2 = _setup(v, p, p["t2"])
    return w * U / u if in2 else w * u / U


def m1(v, p):
    """Uses the scale factor upside down: multiplies by u/U where U/u is needed."""
    w, (u, U), in2 = _setup(v, p, p["t2"])
    return w * u / U if in2 else w * U / u


def m2(v, p):
    """Adds the difference of the known pair instead of multiplying by their ratio."""
    w, (u, U), in2 = _setup(v, p, p["t2"])
    return w + (U - u) if in2 else w - (U - u)


def m3(v, p):
    """Pairs the vertices in alphabetical order, not by the order in the similarity statement."""
    seen = p.get("seen2")
    if not seen or seen == p["t2"]:
        raise ValueError("the statement already pairs the vertices in this order")
    w, (u, U), in2 = _setup(v, p, seen)
    return w * U / u if in2 else w * u / U


def m4(v, p):
    """Treats similar as congruent: gives the partner side's own length."""
    w, _, _ = _setup(v, p, p["t2"])
    return w


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4}
