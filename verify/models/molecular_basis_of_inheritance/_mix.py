"""Answer models from a table keyed by params["q"]: each cell is a named answer (a string, made a Symbol) or a
function of the item's inputs (returning a number, rounded with sig)."""
from sympy import Symbol


def mixed_models(cid, table, count):
    def _get(mid):
        def model(v, p):
            row = table[p["q"]]
            if mid not in row:
                raise ValueError("does not apply to this item")
            x = row[mid]
            return x(v) if callable(x) else Symbol(x)
        return model
    return {"key": _get("key"), **{f"{cid}-M{i}": _get(f"{cid}-M{i}") for i in range(1, count + 1)}}
