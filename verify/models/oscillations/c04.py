"""C04 Reference circle and phase: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "state": the state of oscillation at phase deg degrees: which oscillation, where, and which way (inputs deg; a named answer
           built from the three);
  "phase": the phase angle, in rad, of a particle in its osc-th oscillation at x = xr A, heading to the mean position
           (inputs osc, xr);
  "x_a":   the phase difference between displacement and acceleration;
  "ucm":   what the projection of uniform circular motion on a diameter does (a named answer);
  "epoch": the epoch, in rad, of a particle starting at x = xr A and moving away from the mean position (inputs xr).

The key takes x = A sin(theta) with theta = omega t + alpha the angle of the reference particle on its circle, so the
velocity A omega cos(theta) fixes the quadrant; each completed oscillation adds 2 pi to the phase.
"""
from sympy import Interval, S, Symbol, cos, floor, pi, rad, sin, solveset

_t = Symbol("theta", real=True)

NAMED = {
    "ucm": {"key": "shm_A_omega", "C04-M8": "uniform", "C04-M9": "amplitude_2A", "C04-M10": "half_per_rev"},
}


def _angles(xr, *, use_cos=False):
    """The angles in [0, 2 pi) whose sine (or cosine) is xr."""
    f = cos(_t) if use_cos else sin(_t)
    return sorted(solveset(f - xr, _t, Interval.Ropen(0, 2 * pi)), key=float)


def _pick(xr, toward_mean, *, wrong=False, use_cos=False):
    """The angle where x = xr A and the particle heads to (or away from) the mean position: v x < 0 heading in."""
    for th in _angles(xr, use_cos=use_cos):
        x, v = (cos(th), -sin(th)) if use_cos else (sin(th), cos(th))
        heading_in = (x * v) < 0
        if bool(heading_in) == (bool(toward_mean) != wrong):
            return th
    raise ValueError("no such angle")


def _state(deg, *, completed=False, flip=False, use_cos=False):
    k = floor(S(deg) / 360)
    th = rad(S(deg) - 360 * k)
    x, v = (cos(th), -sin(th)) if use_cos else (sin(th), cos(th))
    heading = "in" if (x * v < 0) != flip else "out"
    return Symbol(f"osc{k if completed else k + 1}_x{str(x).replace('/', 'over').replace('*', '').replace('(', '').replace(')', '')}_{heading}")


def _solve(v, p, *, completed=False, flip=False, use_cos=False, within=False, zero=False):
    ask = p["ask"]
    if ask == "state":
        return _state(v["deg"], completed=completed, flip=flip, use_cos=use_cos)
    if ask == "phase":
        th = _pick(v["xr"], True, wrong=flip)
        if within:
            return th
        return 2 * pi * (v["osc"] if completed else v["osc"] - 1) + th
    if ask == "x_a":
        # a = -omega^2 x: the lead phi with sin(theta + phi) = -sin(theta) for every theta; at theta = pi/2, cos(phi) = -1
        (phi,) = solveset(cos(_t) + 1, _t, Interval.open(0, 2 * pi))
        return phi
    if ask == "epoch":
        if zero:
            return S(0)
        if use_cos:
            return _angles(v["xr"], use_cos=True)[0]  # the first angle whose cosine fits, as a student taking x = A cos would
        return _pick(v["xr"], False, wrong=flip)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks, value=None, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return value if value is not None else _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C04-M1": _m("C04-M1", ("state", "phase"), completed=True),  # counts completed oscillations, not the current one
    "C04-M2": _m("C04-M2", ("state", "phase", "epoch"), flip=True),  # picks the wrong quadrant for the direction
    "C04-M3": _m("C04-M3", ("state", "epoch"), use_cos=True),  # uses cosine instead of sine
    "C04-M4": _m("C04-M4", ("phase",), within=True),  # gives only the phase within the current oscillation
    "C04-M5": _m("C04-M5", ("x_a",), value=pi / 2),  # gives velocity's phase lead instead
    "C04-M6": _m("C04-M6", ("x_a",), value=2 * pi),  # thinks acceleration is in step with displacement
    "C04-M7": _m("C04-M7", ("x_a",), value=3 * pi / 2),  # takes acceleration a quarter cycle behind
    "C04-M8": _m("C04-M8", ()),  # thinks the projection moves uniformly
    "C04-M9": _m("C04-M9", ()),  # takes the amplitude as the diameter
    "C04-M10": _m("C04-M10", ()),  # thinks one revolution gives half an oscillation
    "C04-M11": _m("C04-M11", ("epoch",), zero=True),  # takes the epoch as zero whenever the motion starts
}
