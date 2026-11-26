"""C08 Vernier callipers and screw gauge: answer models (the key, and one per misconception).

Vernier: if nv VSD span nm MSD, 1 VSD = (nm/nv) MSD and LC = 1 MSD - 1 VSD. Reading = MSR + k LC.
Zero error with the jaws closed: vernier zero to the right, k-th division coinciding: e = +k LC;
to the left: e = -(N - k) LC (N the number of vernier divisions). True reading = observed - e.
Screw gauge: LC = pitch / N; reading = linear reading + c LC; circular zero z divisions below the
reference line: e = +z LC; above: e = -z LC.
Lengths are worked in mm and returned in p["unit"] ("mm" or "cm"), rounded with sig().
params["ask"]:
  "vlc":   a vernier's least count. Inputs msd (in p["msd_unit"], "mm" or "cm") or per_cm (main-scale
           divisions per cm, p["msd_unit"] = "per_cm"); nv VSD = nm MSD; ntot, the vernier's total
           divisions (default nv).
  "vread": a vernier reading corrected for zero error. Inputs lc (in p["lc_unit"]), msr (in p["msr_unit"]),
           k (coinciding division while measuring; 0 when msr is the whole observed reading), z (coinciding
           division with the jaws closed), N (vernier divisions); p["side"] "right" or "left".
  "sread": a screw-gauge reading corrected for zero error. Inputs pitch (mm), N (circular divisions),
           msr (linear reading, mm), c (circular division at the reference line), z (zero-error divisions);
           p["side"] "below" or "above".
"""
from sympy import Rational

from physics import sig

MM = {"mm": 1, "cm": 10}


def _r(x):
    return Rational(str(x))


def _out(x_mm, p):
    return sig(x_mm / MM[p["unit"]], p.get("sf", 3))


def _vlc(v, p, *, per_total=False, one_vsd=False, no_convert=False):
    nv, nm = _r(v["nv"]), _r(v["nm"])
    if p["msd_unit"] == "per_cm":
        msd_printed, data_unit = 1 / _r(v["per_cm"]), "cm"
    else:
        msd_printed, data_unit = _r(v["msd"]), p["msd_unit"]
    msd = msd_printed * MM[data_unit]  # in mm
    if no_convert:  # works in the data's unit and never converts to the asked one
        lc = msd_printed * (1 - nm / nv)
        return sig(lc, p.get("sf", 3))
    if per_total:
        return _out(msd / _r(v.get("ntot", nv)), p)
    if one_vsd:
        return _out(msd * nm / nv, p)
    return _out(msd * (1 - nm / nv), p)


def _vread(v, p, *, add_error=False, left_k=False, no_error=False, no_convert=False):
    k, z, n = _r(v["k"]), _r(v["z"]), _r(v["N"])
    lc_printed, msr_printed = _r(v["lc"]), _r(v["msr"])
    if no_convert:  # adds the numbers as printed, mm and cm alike
        e = z * lc_printed if p["side"] == "right" else -(n - z) * lc_printed
        return sig(msr_printed + k * lc_printed - e, p.get("sf", 3))
    lc = lc_printed * MM[p["lc_unit"]]
    observed = msr_printed * MM[p["msr_unit"]] + k * lc
    if p["side"] == "right":
        if left_k:
            raise ValueError("a positive zero error has no N - k slip")
        e = z * lc
    else:
        e = -z * lc if left_k else -(n - z) * lc
    if no_error:
        return _out(observed, p)
    return _out(observed + e if add_error else observed - e, p)


def _sread(v, p, *, add_error=False, no_error=False, pitch_1mm=False):
    pitch, n, msr, c, z = (_r(v[s]) for s in ("pitch", "N", "msr", "c", "z"))
    lc = (1 if pitch_1mm else pitch) / n
    observed = msr + c * lc
    e = z * lc if p["side"] == "below" else -z * lc
    if no_error:
        return _out(observed, p)
    return _out(observed + e if add_error else observed - e, p)


def _model(vlc=None, vread=None, sread=None):
    def model(v, p):
        ask = p["ask"]
        kw = {"vlc": vlc, "vread": vread, "sread": sread}[ask]
        if kw is None:
            raise ValueError("does not apply to this item")
        return {"vlc": _vlc, "vread": _vread, "sread": _sread}[ask](v, p, **kw)
    return model


MODELS = {
    "key": _model(vlc={}, vread={}, sread={}),
    "C08-M1": _model(vlc=dict(per_total=True)),  # LC = MSD / (vernier divisions), whatever the ratio
    "C08-M2": _model(vlc=dict(one_vsd=True)),  # takes one VSD as the least count
    "C08-M3": _model(vread=dict(add_error=True), sread=dict(add_error=True)),  # adds the zero error
    "C08-M4": _model(vread=dict(left_k=True)),  # negative vernier zero error as -k LC
    "C08-M5": _model(vread=dict(no_error=True), sread=dict(no_error=True)),  # ignores the zero error
    "C08-M6": _model(vlc=dict(no_convert=True), vread=dict(no_convert=True)),  # never converts mm and cm
    "C08-M7": _model(sread=dict(pitch_1mm=True)),  # takes every pitch as 1 mm: LC = 1 mm / N
}
