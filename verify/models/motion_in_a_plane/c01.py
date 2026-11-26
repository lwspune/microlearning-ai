"""C01 Motion in a straight line: answer models (the key, and one per misconception).

params["ask"]:
  "avgvel": average velocity, in km/h, for P -> Q (d km, t1 min) then back to R midway (t2 min) (inputs d, t1, t2);
  "meet":   height, in m, where a stone thrown up at u meets a ball dropped from H at the same instant (inputs u, H, g);
  "takeoff": take-off speed, in m/s, after s m from rest in t s (inputs s, t);
  "brake":  retardation, in m/s^2, from u km/h to rest in s m (inputs u_kmh, s);
  "avgspeed": average speed, in km/h, for legs v1 for t1 min, v2 for t2 min, v3 for t3 min (inputs v1,t1,v2,t2,v3,t3).
"""
from sympy import Rational, sqrt

from physics import sig


def _solve(v, p, *, path=False, full=False, first_leg=False, ball_fall=False, at_top=False, mid=False,
           avg=False, half_a=False, as_kmh=False, kmh=False, no_2=False, u_over_s=False, mean=False, per_min=False,
           dist=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "avgvel":
        d, t = v["d"], (v["t1"] if first_leg else v["t1"] + v["t2"])
        x = d * Rational(3, 2) if path else (d if full else d / 2)
        return sig(x / t * 60, n)
    if ask == "meet":
        u, H, g = v["u"], v["H"], v["g"]
        if at_top:
            t = u / g
            return sig(H - g * t**2 / 2, n)
        t = H / u
        fall = g * t**2 / 2
        if ball_fall:
            return sig(fall, n)
        if mid:
            return sig(H / 2, n)
        return sig(H - fall, n)
    if ask == "takeoff":
        s, t = v["s"], v["t"]
        a = 2 * s / t**2
        if avg:
            return sig(s / t, n)
        if half_a:
            return sig(sqrt(2 * (s / t**2) * s), n)
        vv = a * t
        return sig(vv * Rational(18, 5) if as_kmh else vv, n)
    if ask == "brake":
        u = v["u_kmh"] * (1 if kmh else Rational(5, 18))
        if u_over_s:
            return sig(u / v["s"], n)
        return sig(u**2 / v["s"] if no_2 else u**2 / (2 * v["s"]), n)
    if ask == "avgspeed":
        legs = [(v["v1"], v["t1"]), (v["v2"], v["t2"]), (v["v3"], v["t3"])]
        if mean:
            return sig(sum(x for x, _ in legs) / 3, n)
        D = sum(x * t / 60 for x, t in legs)
        if dist:
            return sig(D, n)
        T = sum(t for _, t in legs)
        return sig(D / T if per_min else D / (T / 60), n)
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
    "C01-M1": _m(("avgvel",), path=True),  # uses the path length: gives the average speed
    "C01-M2": _m(("avgvel",), full=True),  # uses the whole PQ as the displacement
    "C01-M3": _m(("avgvel",), first_leg=True),  # uses only the first leg's time
    "C01-M4": _m(("meet",), ball_fall=True),  # gives the distance the ball fell
    "C01-M5": _m(("meet",), at_top=True),  # meets when the stone is at its top
    "C01-M6": _m(("meet",), mid=True),  # assumes they meet halfway
    "C01-M7": _m(("takeoff",), avg=True),  # gives the average speed
    "C01-M8": _m(("takeoff",), half_a=True),  # forgets the 1/2 in s = at^2/2
    "C01-M9": _m(("takeoff",), as_kmh=True),  # gives km/h as m/s
    "C01-M10": _m(("brake",), kmh=True),  # leaves the speed in km/h
    "C01-M11": _m(("brake",), no_2=True),  # forgets the 2 in v^2 = u^2 + 2as
    "C01-M12": _m(("brake",), u_over_s=True),  # divides u by s
    "C01-M13": _m(("avgspeed",), mean=True),  # averages the three speeds
    "C01-M14": _m(("avgspeed",), per_min=True),  # leaves the time in minutes
    "C01-M15": _m(("avgspeed",), dist=True),  # gives the total distance
}
