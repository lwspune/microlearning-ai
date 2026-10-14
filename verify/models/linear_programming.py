"""Answer and misconception models for Linear Programming.

Each concept maps "key" and each misconception ID to a function
(inputs, params) -> result. The key model is computed directly from the
definition (e.g. the optimum by enumerating every feasible intersection of
boundary lines in exact rationals), never through the shortcut the concept
teaches, so it stays an independent derivation.
"""

MODELS = {}
