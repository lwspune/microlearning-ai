"""C06 EMF and combinations of cells: answer models (the key, and one per misconception).

I = E/(R + r); terminal p.d. V = E - Ir = IR; n cells in series: nE, nr; n identical cells in parallel: E, r/n.
params["ask"]:
  "term":     terminal p.d. of a cell (E, r) driving R (inputs E, r, R);
  "Rext":     the load resistance when a cell (E, r) drives a current I (inputs E, r, I);
  "reverse":  net emf of N cells of emf e in series with k of them reversed (inputs N, k, e);
  "rows":     number of rows m for N cells (e, r) in equal rows to give the most current in R (inputs N, r, R);
  "net":      current from a battery (E, r) through a pair of a's in parallel, then mid, then a pair of b's in parallel
              (inputs a, mid, b, E, r);
  "parcells": current in R from n identical cells (e, r) in parallel (inputs n, e, r, R).
"""
from sympy import sqrt

from physics import sig


def _solve(v, p, *, nor=False, isE=False, lost=False, plus=False, addr=False, subE=False, noflip=False, drop=False,
           block=False, match=False, allpar=False, allser=False, allseries=False, noinv=False, addE=False, addR=False):
    ask = p["ask"]
    if ask == "term":
        E, r, R = v["E"], v["r"], v["R"]
        I = E / (R + r)
        if isE:
            return sig(E)
        if lost:
            return sig(I * r)
        return sig(E + I * r if plus else E - I * r)
    if ask == "Rext":
        E, r, I = v["E"], v["r"], v["I"]
        if nor:
            return sig(E / I)
        if addr:
            return sig(E / I + r)
        if subE:
            return sig((E - r) / I)
        return sig(E / I - r)
    if ask == "reverse":
        N, k, e = v["N"], v["k"], v["e"]
        if noflip:
            return sig(N * e)
        if drop:
            return sig((N - k) * e)
        if block:
            return sig(0 * e)
        return sig((N - 2 * k) * e)
    if ask == "rows":
        N, r, R = v["N"], v["r"], v["R"]
        if allpar:
            return sig(N)
        if allser:
            return sig(1 + 0 * N)
        n = R / r if match else sqrt(N * R / r)  # cells per row
        return sig(N / n)
    if ask == "net":
        a, mid, b, E, r = v["a"], v["mid"], v["b"], v["E"], v["r"]
        if allseries:
            Rt = 2 * a + mid + 2 * b
        elif noinv:
            Rt = 2 / a + mid + 2 / b
        else:
            Rt = a / 2 + mid + b / 2
        return sig(E / Rt if nor else E / (Rt + r))
    if ask == "parcells":
        n, e, r, R = v["n"], v["e"], v["r"], v["R"]
        if nor:
            return sig(e / R)
        if addE:
            return sig(n * e / (R + r / n))
        if addR:
            return sig(e / (R + n * r))
        return sig(e / (R + r / n))
    raise ValueError(ask)


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C06-M1": _m(("Rext", "net", "parcells"), nor=True),  # ignores the internal resistance
    "C06-M2": _m(("term",), isE=True),  # thinks the terminal p.d. always equals the emf
    "C06-M3": _m(("term",), lost=True),  # gives the lost volts Ir
    "C06-M4": _m(("term",), plus=True),  # adds Ir to the emf
    "C06-M5": _m(("Rext",), addr=True),  # adds r instead of taking it away
    "C06-M6": _m(("Rext",), subE=True),  # takes r away from the emf
    "C06-M7": _m(("reverse",), noflip=True),  # ignores the reversed cell's direction
    "C06-M8": _m(("reverse",), drop=True),  # lets the reversed cell drop out
    "C06-M9": _m(("reverse",), block=True),  # thinks a reversed cell blocks everything
    "C06-M10": _m(("rows",), match=True),  # matches one row's internal resistance to R
    "C06-M11": _m(("rows",), allpar=True),  # thinks all in parallel gives most current
    "C06-M12": _m(("rows",), allser=True),  # thinks all in series gives most current
    "C06-M13": _m(("net",), allseries=True),  # adds every resistor in series
    "C06-M14": _m(("net",), noinv=True),  # adds reciprocals for the pairs but forgets to invert
    "C06-M15": _m(("parcells",), addE=True),  # adds the emfs of cells in parallel
    "C06-M16": _m(("parcells",), addR=True),  # adds the internal resistances of cells in parallel
}
