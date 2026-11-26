"""C10 Stability and uses of complexes: answer models (the key, and one per misconception).

Each complex is "code:K:ligands:chelate:charge" in params["opts"], comma separated: its stability constant K
(as "2.0e27"), the number of ligand molecules or ions bound, 1 if a ligand is chelating, and the metal ion's
charge. A larger K means a more stable complex.
params["ask"]:
  "most" / "least": the most or least stable complex (its code);
  "order":          the complexes in increasing stability, a named answer "a_lt_b_lt_c";
  "pair":           the more stable of two complexes and the reason, a named answer "<code>_<reason>":
                    the key's reason is "chelate" or "charge", whichever differs between the two.
"""
from sympy import Symbol


def opts(p):
    out = []
    for part in p["opts"].split(","):
        code, K, n, chel, q = part.split(":")
        mant, exp = K.lower().split("e")
        out.append(dict(code=code, K=float(K), mant=float(mant), n=int(n), chelate=chel == "1", q=int(q)))
    return out


def _best(cs, f, low=False):
    vals = [f(c) for c in cs]
    target = min(vals) if low else max(vals)
    hits = [c for c, v in zip(cs, vals) if v == target]
    if len(hits) != 1:
        raise ValueError("no single choice")
    return hits[0]["code"]


def _choose(p, f, prefer_low):
    """The complex a rule f picks as most stable (or, for 'least', as least stable)."""
    cs, ask = opts(p), p["ask"]
    if ask == "most":
        return Symbol(_best(cs, f, low=prefer_low))
    if ask == "least":
        return Symbol(_best(cs, f, low=not prefer_low))
    if ask == "order":
        order = sorted(cs, key=f, reverse=prefer_low)
        vals = [f(c) for c in order]
        if len(set(vals)) != len(vals):
            raise ValueError("ties")
        return Symbol("_lt_".join(c["code"] for c in order))
    raise ValueError("not a ranking item")


def key(v, p):
    if p["ask"] == "pair":
        a, b = opts(p)
        reason = "chelate" if a["chelate"] != b["chelate"] else "charge"
        return Symbol(_best([a, b], lambda c: c["K"]) + "_" + reason)
    return _choose(p, lambda c: c["K"], False)


def m1(v, p):
    """Reads K the wrong way round: takes a smaller stability constant as a more stable complex."""
    if p["ask"] == "pair":
        return Symbol(_best(opts(p), lambda c: c["K"], low=True) + "_smallerK")
    return _choose(p, lambda c: c["K"], True)


def m2(v, p):
    """Compares only the numbers in front of the powers of ten."""
    if p["ask"] == "pair":
        return Symbol(_best(opts(p), lambda c: c["mant"]) + "_mantissa")
    return _choose(p, lambda c: c["mant"], False)


def m3(v, p):
    """Thinks the complex holding more ligands is the more stable, ignoring K and chelation."""
    if p["ask"] == "pair":
        return Symbol(_best(opts(p), lambda c: c["n"]) + "_moreligands")
    return _choose(p, lambda c: c["n"], False)


def m4(v, p):
    """Thinks a larger metal ion (lower charge) holds its ligands better."""
    if p["ask"] != "pair":
        raise ValueError("does not apply")
    a, b = opts(p)
    if a["q"] == b["q"]:
        raise ValueError("same charge")
    return Symbol(_best([a, b], lambda c: c["q"], low=True) + "_largerion")


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
