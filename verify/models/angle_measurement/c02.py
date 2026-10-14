"""C02 Degrees, minutes and seconds: answer models (the key, and one per misconception).

Every value is the angle in degrees, as an exact Rational (option text shows it in D°M′S″ form or as a
decimal of a degree). 1° = 60′ and 1′ = 60″.
params["dir"]:
  to_dms      inputs: x = the angle in decimal degrees (may be negative). Express it in D°M′S″.
  to_deg      inputs: sg = +1 or -1, d, m, s = the angle sg·(d° m′ s″). Express it in degrees.
  sec_to_dms  inputs: n = a whole number of seconds. Express n″ in D°M′S″.
"""
from sympy import Integer, Rational, floor


def _dir(p):
    return p["dir"]


def _split(x):
    """sign, whole degrees and the decimal part of |x|."""
    sg = -1 if x < 0 else 1
    a = abs(Rational(x))
    whole = Integer(floor(a))
    return sg, whole, a - whole


def _digits(f):
    """The digits after the point of a terminating decimal 0 <= f < 1, as written (no trailing zeros)."""
    f = Rational(f)
    q = f.q
    k = 0
    while (10**k) % q:
        k += 1
        if k > 12:
            raise ValueError(f"{f} is not a terminating decimal")
    if k == 0:
        return ""
    return str(int(f * 10**k)).rjust(k, "0")


def key(v, p):
    """The angle itself, from the definition 1° = 60′ = 3600″."""
    d = _dir(p)
    if d == "to_dms":
        return Rational(v["x"])
    if d == "to_deg":
        return v["sg"] * (v["d"] + Rational(v["m"], 60) + Rational(v["s"], 3600))
    if d == "sec_to_dms":
        return Rational(v["n"], 3600)
    raise ValueError(d)


def m1(v, p):
    """Place value in hundreds, not sixties: the decimal digits, in pairs, are the minutes and seconds."""
    d = _dir(p)
    if d == "to_dms":
        sg, whole, f = _split(v["x"])
        ds = _digits(f)
        if len(ds) == 2:
            mm, ss = int(ds), 0
        elif len(ds) == 4:
            mm, ss = int(ds[:2]), int(ds[2:])
        else:
            raise ValueError("needs 2 or 4 decimal digits to read as minutes (and seconds)")
        return sg * (whole + Rational(mm, 60) + Rational(ss, 3600))
    if d == "to_deg":
        return v["sg"] * (v["d"] + Rational(v["m"], 100) + Rational(v["s"], 10000))
    if d == "sec_to_dms":
        n = int(v["n"])  # 12345 read as 1|23|45
        return n // 10000 + Rational(n // 100 % 100, 60) + Rational(n % 100, 3600)
    raise ValueError(d)


def m2(v, p):
    """Multiplies by 60 once for the minutes, then reads the minutes' decimal digits as the seconds."""
    if _dir(p) != "to_dms":
        raise ValueError("only for decimal degrees to D°M′S″")
    sg, whole, f = _split(v["x"])
    mins = f * 60
    mm = Integer(floor(mins))
    ds = _digits(mins - mm)
    if not ds:
        raise ValueError("whole minutes: no seconds to misread")
    return sg * (whole + Rational(mm, 60) + Rational(int(ds), 3600))


def m3(v, p):
    """Stops at the minutes: the seconds are dropped."""
    d = _dir(p)
    if d == "to_dms":
        sg, whole, f = _split(v["x"])
        mins = f * 60
        if mins == floor(mins):
            raise ValueError("no seconds to drop")
        return sg * (whole + Rational(int(floor(mins)), 60))
    if d == "to_deg":
        if v["s"] == 0:
            raise ValueError("no seconds to drop")
        return v["sg"] * (v["d"] + Rational(v["m"], 60))
    if d == "sec_to_dms":
        n = int(v["n"])
        if n % 60 == 0:
            raise ValueError("no seconds to drop")
        return Rational(n // 60, 60)
    raise ValueError(d)


def m4(v, p):
    """Divides seconds by 60 to get degrees, as if a second were a minute."""
    d = _dir(p)
    if d == "to_deg":
        if v["s"] == 0:
            raise ValueError("no seconds")
        return v["sg"] * (v["d"] + Rational(v["m"], 60) + Rational(v["s"], 60))
    if d == "sec_to_dms":
        return Rational(v["n"], 60)
    raise ValueError("only where seconds are converted to degrees")


def m5(v, p):
    """A negative angle: the minus goes on the degrees only, and the minutes and seconds are added on as positive."""
    d = _dir(p)
    if d == "to_deg":
        if v["sg"] > 0:
            raise ValueError("positive angle")
        return -v["d"] + Rational(v["m"], 60) + Rational(v["s"], 3600)
    if d == "to_dms":
        x = Rational(v["x"])
        if x >= 0:
            raise ValueError("positive angle")
        # -30.6925 = -31° + 0.3075° = -31° + 18′27″, written -31°18′27″, which means -(31°18′27″).
        lo = Integer(floor(x))
        return lo - (x - lo)
    raise ValueError(d)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
