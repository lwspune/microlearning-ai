"""C04 Median of grouped data: answer models (the key, and one per misconception).

Inputs: v["lo"], v["hi"] the printed class limits, v["f"] the frequencies.
params:
  table  "freq" (default): v["f"] are class frequencies
         "less": v["f"] are 'less than' cumulative frequencies (less than each upper limit)
  ask    "median" (default): the median
         "missing": v["f"] holds one unknown frequency (a symbol), v["m"] is the given median
                    -> that frequency

Inclusive classes (10-19, 20-29) have a gap g between one upper limit and the next lower
limit; the true class boundaries are lower - g/2 and upper + g/2.

The key works from the definition: the median is the value below which half the
observations lie. Spreading each class's observations evenly across the class, the
cumulative count grows linearly inside each class, so the key walks the classes and finds
where that count reaches N/2. For a missing frequency it solves for the frequency that puts
the given median at that point.
"""
from sympy import Rational, solve


def _p(p, name, default, *allowed):
    a = p.get(name, default)
    if a not in allowed:
        raise ValueError(f"{name}={a} not modelled here")
    return a


def _freqs(v, p, cf_as_freq=False):
    fs = list(v["f"])
    if _p(p, "table", "freq", "freq", "less") == "less" and not cf_as_freq:
        fs = [fs[0]] + [b - a for a, b in zip(fs, fs[1:])]
    return fs


def _boundaries(v):
    lo = [Rational(a) for a in v["lo"]]
    hi = [Rational(b) for b in v["hi"]]
    gaps = {lo[i + 1] - hi[i] for i in range(len(lo) - 1)}
    if len(gaps) != 1:
        raise ValueError(f"uneven gaps between classes: {gaps}")
    g = gaps.pop()
    return [a - g / 2 for a in lo], [b + g / 2 for b in hi], g


def _unknown(fs):
    syms = set().union(*(f.free_symbols for f in fs if hasattr(f, "free_symbols")))
    if len(syms) != 1:
        raise ValueError("a missing-frequency item needs exactly one unknown")
    return syms.pop()


def _positive_root(eq, s):
    roots = [r for r in solve(eq, s) if r.is_positive]
    if len(roots) != 1:
        raise ValueError(f"no single positive frequency: {roots}")
    return roots[0]


def _first_reaching(fs, half):
    run = 0
    for i, f in enumerate(fs):
        run += f
        if run >= half:
            return i
    raise ValueError("cumulative frequency never reaches the half")


def _student(v, p, *, pick="median", cf_own=False, half_of=lambda n: n / 2, printed=False,
             cf_as_freq=False, n_without_unknown=False):
    """The book's formula L + [(N/2 - cf) / f] x h, with one step changed by a misconception."""
    fs = _freqs(v, p, cf_as_freq)
    L, U, g = _boundaries(v)
    if printed:
        if g == 0:
            raise ValueError("continuous classes: printed limits are the boundaries")
        L, U = [Rational(a) for a in v["lo"]], [Rational(b) for b in v["hi"]]
    ask = _p(p, "ask", "median", "median", "missing")
    if ask == "missing":
        x = _unknown(fs)
        n = sum(f for f in fs if not getattr(f, "free_symbols", None)) if n_without_unknown else sum(fs)
        if pick != "median":
            raise ValueError("the class is fixed by the given median")
        i = next(j for j in range(len(fs)) if L[j] <= v["m"] < U[j])
    else:
        n = sum(fs)
        if pick == "median":
            i = _first_reaching(fs, half_of(n))
        else:
            top = max(fs)
            if fs.count(top) != 1:
                raise ValueError("no single highest frequency")
            i = fs.index(top)
            if i == _first_reaching(fs, half_of(n)):
                raise ValueError("modal class is the median class")
    cf = sum(fs[:i + 1]) if cf_own else sum(fs[:i])
    med = L[i] + (half_of(n) - cf) / fs[i] * (U[i] - L[i])
    if ask == "missing":
        return _positive_root(med - v["m"], x)
    return med


def _median_by_definition(fs, L, U):
    half = Rational(sum(fs), 2)
    below = 0
    for f, a, b in zip(fs, L, U):
        if below + f >= half and f > 0:
            return a + (b - a) * (half - below) / f
        below += f
    raise ValueError("no median")


def key(v, p):
    """From the definition: where the evenly spread cumulative count reaches N/2."""
    fs = _freqs(v, p)
    L, U, _ = _boundaries(v)
    if _p(p, "ask", "median", "median", "missing") == "median":
        return _median_by_definition(fs, L, U)
    x = _unknown(fs)
    cands = set()  # positive frequencies that put the given median where the count reaches N/2
    for i in range(len(fs)):
        if not (L[i] <= v["m"] < U[i]):
            continue
        below = sum(fs[:i])
        eq = L[i] + (U[i] - L[i]) * (sum(fs) / 2 - below) / fs[i] - v["m"]
        cands.update(r for r in solve(eq, x) if r.is_positive)
    good = [r for r in cands if _median_by_definition([f.subs(x, r) if hasattr(f, "subs") else f for f in fs], L, U) == v["m"]]
    if len(good) != 1:
        raise ValueError(f"no single frequency gives that median: {good}")
    return good[0]


def m1(v, p):
    """Uses the cumulative frequency of the median class itself, not of the class before it."""
    return _student(v, p, cf_own=True)


def m2(v, p):
    """Takes the class with the highest frequency (the modal class) as the median class."""
    return _student(v, p, pick="modal")


def m3(v, p):
    """Uses inclusive classes as printed: L = printed lower limit, h = upper limit - lower limit."""
    return _student(v, p, printed=True)


def m4(v, p):
    """Uses (N + 1)/2, the ungrouped-data position, in place of N/2."""
    return _student(v, p, half_of=lambda n: (n + 1) / 2)


def m5(v, p):
    """Reads a 'less than' cumulative column as the class frequencies."""
    _p(p, "table", "freq", "less")
    return _student(v, p, cf_as_freq=True)


def m6(v, p):
    """Leaves the missing frequency out of the total N (keeps it in cf and f)."""
    _p(p, "ask", "median", "missing")
    return _student(v, p, n_without_unknown=True)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
