"""C03 Accuracy, precision and error. Accuracy: closeness to the true value; precision: closeness of repeated results.
Absolute error = observed - true; percentage (relative) error = absolute error / true x 100. A graph reveals how two
related properties depend on each other.
params["q"]:
  "precision": named. "abs_error": inputs obs, true. "students": named. "pct_error": inputs obs, true. "graph": named.
M1 swaps accuracy and precision; M2 ties precision to significant figures only; M3 confuses precision with least count;
M4 divides by the observed value; M5 forgets the 100; M6 gives observed / true x 100; M7 thinks close readings must be
correct; M8 thinks a constant offset spoils precision; M9 subtracts the observed value from the true one; M10 gives the
percentage error; M11 gives the observed value; M12 picks mean deviation; M13 picks relative error; M14 thinks every
method shows the relation."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "precision": {"key": "repeats_close", "C03-M1": "near_true", "C03-M2": "sig_figs", "C03-M3": "least_count"},
    "abs_error": {"key": lambda v: sig(v["obs"] - v["true"]), "C03-M9": lambda v: sig(v["true"] - v["obs"]),
                  "C03-M10": lambda v: sig((v["obs"] - v["true"]) / v["true"] * 100), "C03-M11": lambda v: sig(v["obs"])},
    "students": {"key": "precise_not_accurate", "C03-M1": "accurate_not_precise", "C03-M7": "both", "C03-M8": "neither"},
    "pct_error": {"key": lambda v: sig((v["obs"] - v["true"]) / v["true"] * 100),
                  "C03-M4": lambda v: sig((v["obs"] - v["true"]) / v["obs"] * 100),
                  "C03-M5": lambda v: sig((v["obs"] - v["true"]) / v["true"]),
                  "C03-M6": lambda v: sig(v["obs"] / v["true"] * 100)},
    "graph": {"key": "plot_graph", "C03-M12": "mean_deviation", "C03-M13": "relative_error", "C03-M14": "all_three"},
}
MODELS = mixed_models("C03", TABLE, 14)
