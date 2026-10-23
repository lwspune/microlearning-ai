"""C05 Medians and the centroid: answer models (the key, and one per misconception).

Every answer is a length (a plain number). The pieces of a median from vertex P to the midpoint T
of the opposite side, through the centroid G, are named
  "vg"  = PG (vertex to centroid),  "gm" = GT (centroid to midpoint),  "med" = PT (the whole median).

params["ask"]:
  "piece"  inputs val; params given, want (piece names). One piece of a median is given; find another.
  "expr"   inputs a, b, c, d: PG = a x + b and GT = c x + d. params want: "x" or a piece name.
  "two"    two medians through G. inputs val (piece params["given"] of the first median) and
           other (the whole of the second median); params want: a piece of the second median.

The key works from the definition of the centroid's ratio as lengths: PG = 2 k, GT = k, PT = PG + GT.
"""
from sympy import Integer, Symbol, solve

X = Symbol("x")

# the length of each piece in units of k = GT
KEY_W = {"vg": Integer(2), "gm": Integer(1), "med": Integer(3)}
REV_W = {"vg": Integer(1), "gm": Integer(2), "med": Integer(3)}     # M1: 1 : 2 from the vertex
MID_W = {"vg": Integer(1), "gm": Integer(1), "med": Integer(2)}     # M2: G is the median's midpoint
SWAP_W = {"vg": Integer(3), "gm": Integer(1), "med": Integer(2)}    # M3: PG and PT swapped


def _piece(val, given, want, w):
    return val * w[want] / w[given]


def _expr(v, p, vg_w, gm_w):
    """Solve PG : GT = vg_w : gm_w with PG = a x + b, GT = c x + d; return (x, PG, GT)."""
    pg = v["a"] * X + v["b"]
    gt = v["c"] * X + v["d"]
    sol = solve(gm_w * pg - vg_w * gt, X)
    if len(sol) != 1:
        raise ValueError("no single x")
    x = sol[0]
    return x, pg.subs(X, x), gt.subs(X, x)


def _expr_want(v, p, vg_w, gm_w):
    x, pg, gt = _expr(v, p, vg_w, gm_w)
    return {"x": x, "vg": pg, "gm": gt, "med": pg + gt}[p["want"]]


def key(v, p):
    ask = p["ask"]
    if ask == "piece":
        return _piece(v["val"], p["given"], p["want"], KEY_W)
    if ask == "expr":
        return _expr_want(v, p, 2, 1)
    if ask == "two":
        return v["other"] * KEY_W[p["want"]] / KEY_W["med"]
    raise ValueError(ask)


def m1(v, p):
    """Reverses the ratio: G divides the median 1 : 2 from the vertex."""
    ask = p["ask"]
    if ask == "piece":
        return _piece(v["val"], p["given"], p["want"], REV_W)
    if ask == "expr":
        return _expr_want(v, p, 1, 2)
    if ask == "two":
        return v["other"] * REV_W[p["want"]] / REV_W["med"]
    raise ValueError(ask)


def m2(v, p):
    """Takes G for the midpoint of the median: PG = GT."""
    ask = p["ask"]
    if ask == "piece":
        return _piece(v["val"], p["given"], p["want"], MID_W)
    if ask == "expr":
        return _expr_want(v, p, 1, 1)
    if ask == "two":
        return v["other"] * MID_W[p["want"]] / MID_W["med"]
    raise ValueError(ask)


def m3(v, p):
    """Mixes up PG (vertex to centroid) with PT (the whole median)."""
    ask = p["ask"]
    if ask == "piece":
        return _piece(v["val"], p["given"], p["want"], SWAP_W)
    if ask == "two":
        return v["other"] * SWAP_W[p["want"]] / SWAP_W["med"]
    raise ValueError("M3 needs a piece and a whole median")


def m4(v, p):
    """Stops one step short: gives x, or the piece found on the way."""
    ask = p["ask"]
    if ask == "expr":
        if p["want"] == "x":
            raise ValueError("x is the first step")
        return _expr(v, p, 2, 1)[0]
    if ask == "piece" and p["given"] == "vg" and p["want"] == "med":
        return v["val"] / 2                                   # GT, found on the way to PT
    if ask == "piece" and p["given"] == "gm" and p["want"] == "med":
        return v["val"] * 2                                   # PG, found on the way to PT
    raise ValueError("M4 needs a two-step question")


def m5(v, p):
    """Thinks G cuts every median into the same lengths: uses the first median's pieces."""
    if p["ask"] != "two":
        raise ValueError("M5 needs two medians")
    return _piece(v["val"], p["given"], p["want"], KEY_W)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
