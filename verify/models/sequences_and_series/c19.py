"""C19 Is it an A.P.?: answer models (the key, and one per misconception).

params["ask"]:
  pair   d from two listed terms next to each other. Inputs terms (the list), i (the earlier term's position).
  diffs  the differences t2 - t1, t3 - t2, ... of the listed terms, as a Tuple. Input terms.
  isap   d if the list is an A.P., else the named answer not_ap. Input terms.
  terms  the first k terms of the A.P. with first term a and common difference d, as a Tuple. Inputs a, d, k.
"""
from sympy import Integer, Symbol, Tuple

NOT_AP = Symbol("not_ap")


def _list(v):
    return list(v["terms"])


def _diffs(t):
    """Each term minus the one before it, from the definition."""
    return [t[j + 1] - t[j] for j in range(len(t) - 1)]


def _pair(v):
    t, i = _list(v), int(v["i"])
    return t[i - 1], t[i]


def key(v, p):
    """From the definition: d is a term minus the one before it, the same every time."""
    ask = p["ask"]
    if ask == "pair":
        earlier, later = _pair(v)
        return later - earlier
    if ask == "diffs":
        return Tuple(*_diffs(_list(v)))
    if ask == "isap":
        ds = _diffs(_list(v))
        return ds[0] if all(x == ds[0] for x in ds) else NOT_AP
    if ask == "terms":
        terms = [v["a"]]
        for _ in range(int(v["k"]) - 1):
            terms.append(terms[-1] + v["d"])
        return Tuple(*terms)
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Subtracts the wrong way round: d = t_n - t_(n+1), so each next term is t_n - d."""
    ask = p["ask"]
    if ask == "pair":
        earlier, later = _pair(v)
        return earlier - later
    if ask == "diffs":
        return Tuple(*[-x for x in _diffs(_list(v))])
    if ask == "isap":
        k = key(v, p)
        if k == NOT_AP:
            raise ValueError("reversed differences are unequal too: gives the key")
        return -k
    if ask == "terms":
        return Tuple(*[v["a"] - j * v["d"] for j in range(int(v["k"]))])
    raise ValueError(f"no ask {ask}")


def m2(v, p):
    """Divides instead of subtracting: takes the common difference to be the number each term is multiplied by."""
    ask = p["ask"]
    t = _list(v) if "terms" in v else None
    if ask == "pair":
        earlier, later = _pair(v)
        return later / earlier
    if ask == "diffs":
        return Tuple(*[t[j + 1] / t[j] for j in range(len(t) - 1)])
    if ask == "isap":
        rs = [t[j + 1] / t[j] for j in range(len(t) - 1)]
        return rs[0] if all(r == rs[0] for r in rs) else NOT_AP
    if ask == "terms":
        return Tuple(*[v["a"] * v["d"] ** j for j in range(int(v["k"]))])
    raise ValueError(f"no ask {ask}")


def m3(v, p):
    """Checks only the first difference and takes every later difference to be the same."""
    ask = p["ask"]
    if ask in ("diffs", "isap"):
        ds = _diffs(_list(v))
        return Tuple(*[ds[0]] * len(ds)) if ask == "diffs" else ds[0]
    raise ValueError("needs a list to check")


def m4(v, p):
    """Starts the list one step late: writes t_1 = a + d, t_2 = a + 2d, ..."""
    if p["ask"] == "terms":
        return Tuple(*[v["a"] + (j + 1) * v["d"] for j in range(int(v["k"]))])
    raise ValueError("needs a and d")


def _slip(earlier, later):
    """later - earlier with a negative earlier term subtracted as if it were positive."""
    if not earlier < 0:
        raise ValueError("the earlier term is not negative")
    return later + earlier


def m5(v, p):
    """Subtracting a negative term: works out -6 - (-10) as -6 - 10."""
    ask = p["ask"]
    if ask == "pair":
        return _slip(*_pair(v))
    if ask == "isap":  # d read off the first two terms, as the book's MCQ does
        t = _list(v)
        return _slip(t[0], t[1])
    raise ValueError(f"no slip model for {ask}")


def m6(v, p):
    """Thinks a list whose terms never change is not an A.P.: d must not be 0."""
    if p["ask"] == "isap" and key(v, p) == Integer(0):
        return NOT_AP
    raise ValueError("only a constant list")


MODELS = {"key": key, "C19-M1": m1, "C19-M2": m2, "C19-M3": m3, "C19-M4": m4, "C19-M5": m5, "C19-M6": m6}
