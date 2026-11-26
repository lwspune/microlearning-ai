"""C09 Levers and pulleys: answer models (the key, and one per misconception).

params["ask"]:
  "arrange": which arrangement describes a lever of class c, and how its effort compares with its load
             (input c): a named answer "<middle>_<ma>", middle in fulc / load / eff, ma in gt1 / lt1 / either;
  "tool":    the class of a tool whose middle point is m (1: fulcrum, 2: load, 3: effort) and what is true of its
             mechanical advantage (input m): a named answer "c<class>_<ma>";
  "pair":    the classes of a nutcracker (middle m1) and a pair of tongs (middle m2) (inputs m1, m2): a named
             answer "n<class>_t<class>";
  "effort":  the effort, in N, to hold up a load of mass M kg whose centre is la m from the fulcrum, the effort
             acting ea m from the fulcrum on the same side (a class II lever) (inputs M, la, ea);
  "eff":     the efficiency, in percent, of a machine whose effort E N lifts a load L N, the effort moving dE m while
             the load rises dL m (inputs L, E, dE, dL);
  "pulley":  the effort, in N, to lift a load W N with a movable pulley of weight w N held by n strands, the free
             end pulled down over a fixed pulley (inputs W, w, n).

The key works from the definitions: the class is named by what lies in the middle (fulcrum I, load II, effort III);
moments about the fulcrum balance, load x load arm = effort x effort arm, so MA = load / effort = effort arm / load
arm; VR = effort distance / load distance; efficiency = MA / VR; n strands each carry the effort.
"""
from sympy import Integer, Symbol

from physics import BOOK, sig

_MID = {1: "fulc", 2: "load", 3: "eff"}
_MA = {1: "either", 2: "gt1", 3: "lt1"}  # what the middle point makes the MA, by class
_FLIP = {"either": "either", "gt1": "lt1", "lt1": "gt1"}


def _cls(m, *, swap=False, see_saw=False):
    """The class of a lever whose middle point is m (1: fulcrum, 2: load, 3: effort)."""
    if see_saw:
        return 1
    if swap:
        return {1: 1, 2: 3, 3: 2}[m]
    return m


def _solve(v, p, *, swap=False, see_saw=False, flip=False, look=False, arm_from_load=False, mass=False,
           ideal=False, vr_over_ma=False, extra_strand=False):
    ask = p["ask"]
    if ask == "arrange":
        c = int(v["c"])
        # the point the student puts in the middle of a class c lever (the swap is its own inverse)
        mid = _cls(c, swap=swap, see_saw=see_saw)
        ma = _MA[mid]
        return Symbol(f"{_MID[mid]}_{_FLIP[ma] if flip else ma}")
    if ask == "tool":
        m = int(v["m"])
        c = _cls(m, swap=swap, see_saw=see_saw)
        ma = _MA[c]
        return Symbol(f"c{c}_{_FLIP[ma] if flip else ma}")
    if ask == "pair":
        a = _cls(int(v["m1"]), swap=swap, see_saw=see_saw)
        b = a if look else _cls(int(v["m2"]), swap=swap, see_saw=see_saw)
        return Symbol(f"n{a}_t{b}")
    if ask == "effort":
        W = v["M"] * (1 if mass else BOOK["g"])
        la, ea = v["la"], v["ea"]
        if arm_from_load:
            ea = ea - la  # the effort arm measured from the load, not from the fulcrum
        return sig(W * ea / la if flip else W * la / ea)
    if ask == "eff":
        L, E, VR = v["L"], v["E"], v["dE"] / v["dL"]
        MA = E / L if flip else L / E
        if ideal:
            return Integer(100)
        return sig((VR / MA if vr_over_ma else MA / VR) * 100)
    if ask == "pulley":
        W, w, n = v["W"], v["w"], v["n"]
        load = W if ideal else W + w
        if flip:
            return sig(load * n)
        return sig(load / (n + 1 if extra_strand else n))
    raise ValueError(f"unknown ask {ask}")


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
    "C09-M1": _m(("arrange", "tool", "pair"), swap=True),  # swaps classes II and III
    "C09-M2": _m(("arrange", "tool", "pair"), see_saw=True),  # every lever has the fulcrum in the middle
    "C09-M3": _m(("arrange", "tool", "effort", "eff", "pulley"), flip=True),  # MA the wrong way up
    "C09-M4": _m(("effort",), arm_from_load=True),  # measures the effort arm from the load
    "C09-M5": _m(("eff", "pulley"), ideal=True),  # a real machine loses nothing
    "C09-M6": _m(("effort",), mass=True),  # uses the mass in kg as the load in N
    "C09-M7": _m(("pair",), look=True),  # tools that look alike are the same class
    "C09-M8": _m(("eff",), vr_over_ma=True),  # efficiency = VR / MA
    "C09-M9": _m(("pulley",), extra_strand=True),  # counts the strand pulled down as holding the load
}
