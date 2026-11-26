"""Shared helper for named-answer models: build MODELS from an ANSWERS table keyed by params["q"]."""
from sympy import Symbol


def table_models(cid, answers, count):
    def key(v, p):
        return Symbol(answers[p["q"]]["key"])

    def _m(mid):
        def model(v, p):
            row = answers[p["q"]]
            if mid not in row:
                raise ValueError("does not apply to this item")
            return Symbol(row[mid])
        return model

    return {"key": key, **{f"{cid}-M{i}": _m(f"{cid}-M{i}") for i in range(1, count + 1)}}
