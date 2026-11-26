"""Answer models for this chapter, one module per concept (cNN.py, each with its own MODELS).

MODELS maps "CNN" to that module's MODELS ({"key": f, "CNN-M1": f, ...}), the shape
verify_content.py and draft_items.py expect. Each module is imported only when its concept
is looked up, so concepts written in parallel can't break each other.
"""
import importlib
import pkgutil
from collections.abc import Mapping


class _Concepts(Mapping):
    def __init__(self):
        self._loaded = {}

    def _ids(self):
        return sorted(m.name.upper() for m in pkgutil.iter_modules(__path__) if m.name[0] == "c" and m.name[1:].isdigit())

    def __getitem__(self, cid):
        if cid not in self._ids():
            raise KeyError(cid)
        if cid not in self._loaded:
            self._loaded[cid] = importlib.import_module(f"{__name__}.{cid.lower()}").MODELS
        return self._loaded[cid]

    def __iter__(self):
        return iter(self._ids())

    def __len__(self):
        return len(self._ids())


MODELS = _Concepts()
