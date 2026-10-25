"""C06 Graphs of S.H.M.: answer models (the key, and one per misconception).

Every item reads the graphs of x = A sin(omega t + alpha), v = dx/dt and a = dv/dt; params["ask"] picks the question
and each model returns a named answer:
  "statement": which statement about an x-t graph starting at the mean position is true;
  "v_graph":   what the velocity-time graph looks like for a particle starting at the mean position;
  "a_start":   the acceleration at t = 0 for a particle starting at the positive extreme;
  "phase_v":   the phase difference between the velocity and displacement graphs;
  "quarter":   x, v and a at t = T/4 for a particle starting at the mean position.
The key checks each answer against the derivatives of x in sympy at the times asked.
"""
from sympy import Symbol, cos, diff, pi, sin, symbols

A, w, t = symbols("A omega t", positive=True)
T = 2 * pi / w

NAMED = {
    "statement": {"key": "force_max_3T4", "C06-M1": "acc_max_T", "C06-M2": "v_zero_T2", "C06-M3": "ke_total_T4"},
    "v_graph": {"key": "cos_from_max", "C06-M4": "sin_in_step", "C06-M5": "minus_sin", "C06-M6": "minus_cos"},
    "a_start": {"key": "minus_Aw2", "C06-M7": "zero", "C06-M8": "plus_Aw2", "C06-M9": "minus_Aw"},
    "phase_v": {"key": "v_ahead_pi2", "C06-M4": "in_step", "C06-M5": "pi_apart", "C06-M10": "v_behind_pi2"},
    "quarter": {"key": "A_0_minusAw2", "C06-M1": "A_0_0", "C06-M2": "A_Aw_0", "C06-M8": "A_0_plusAw2"},
}


def _check():
    """Derive the key answers from x(t), so a wrong formula would fail loudly."""
    x = A * sin(w * t)  # from the mean position
    v, a = diff(x, t), diff(x, t, 2)
    F = -a  # force direction aside, |F| ∝ |a|
    assert abs(a.subs(t, 3 * T / 4)) == A * w**2 and F.subs(t, 3 * T / 4) != 0  # force greatest at 3T/4
    assert v.subs(t, T / 2) == -A * w  # velocity not zero at T/2
    assert v.subs(t, 0) == A * w and v == A * w * cos(w * t)  # cosine, from its maximum
    xe = A * cos(w * t)  # from the positive extreme
    assert diff(xe, t, 2).subs(t, 0) == -A * w**2
    assert (x.subs(t, T / 4), v.subs(t, T / 4), a.subs(t, T / 4)) == (A, 0, -A * w**2)


def _named(mid):
    def model(vals, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        if mid == "key":
            _check()
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {mid: _named(mid) for mid in ["key"] + [f"C06-M{i}" for i in range(1, 11)]}
