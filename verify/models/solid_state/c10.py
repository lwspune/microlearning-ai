"""C10 Magnetic properties of solids: answer models (the key, and one per misconception).

An ion's unpaired electrons: write the atom's 3d and 4s electrons, remove the charge from 4s first, then 3d,
and fill the d orbitals singly before pairing (Hund's rule). No unpaired electron: diamagnetic, weakly repelled.
Unpaired electrons: paramagnetic, weakly attracted, and the magnetism is lost when the field is removed.
params: "el" (element), "q" (ion charge), "form":
  "count": the number of unpaired electrons;
  "class": class and count, named like para_2;
  "field": class, count and behaviour in a field, named like para_5_loses.
"""
from sympy import Integer, Symbol

ATOM = {"Mn": (5, 2), "Fe": (6, 2), "Co": (7, 2), "Ni": (8, 2), "Cu": (10, 1), "Zn": (10, 2)}  # (3d, 4s)


def _ion(el, q, d_first=False):
    d, s = ATOM[el]
    for _ in range(int(q)):
        if d_first and d > 0 or s == 0:
            d -= 1
        else:
            s -= 1
    return d, s


def _unpaired(d, s, hund=True):
    nd = (d if d <= 5 else 10 - d) if hund else d % 2
    return nd + (1 if s == 1 else 0)


def _answer(p, n, *, swap_class=False, para_keeps=False, dia_attracted=False):
    if p["form"] == "count":
        return Integer(n)
    para = (n == 0) if swap_class else (n > 0)
    cls = "para" if para else "dia"
    if p["form"] == "class":
        return Symbol(f"{cls}_{n}")
    if para:
        beh = "keeps" if para_keeps else "loses"
    else:
        beh = "attracted" if dia_attracted else "repelled"
    return Symbol(f"{cls}_{n}_{beh}")


def _n(p, **kw):
    hund = kw.pop("hund", True)
    if kw.pop("atom", False):
        d, s = ATOM[p["el"]]
    else:
        d, s = _ion(p["el"], p["q"], **kw)
    return _unpaired(d, s, hund)


def key(v, p):
    return _answer(p, _n(p))


def _named_only(**flags):
    def model(v, p):
        if p["form"] == "count":
            raise ValueError("does not apply to a count")
        return _answer(p, _n(p), **flags)
    return model


def m3(v, p):
    if p["form"] != "field" or _n(p) > 0:
        raise ValueError("only for a diamagnetic substance in a field")
    return _answer(p, 0, dia_attracted=True)


def m2(v, p):
    if p["form"] != "field" or _n(p) == 0:
        raise ValueError("only for a paramagnetic substance in a field")
    return _answer(p, _n(p), para_keeps=True)


MODELS = {
    "key": key,
    "C10-M1": _named_only(swap_class=True),  # paired electrons taken as the cause of paramagnetism
    "C10-M2": m2,  # a paramagnetic substance stays magnetised, like a ferromagnetic one
    "C10-M3": m3,  # a diamagnetic substance is weakly attracted
    "C10-M4": lambda v, p: _answer(p, _n(p, d_first=True)),  # removes 3d electrons before 4s
    "C10-M5": lambda v, p: _answer(p, _n(p, atom=True)),  # uses the neutral atom
    "C10-M6": lambda v, p: _answer(p, _n(p, hund=False)),  # pairs electrons before filling singly
}
