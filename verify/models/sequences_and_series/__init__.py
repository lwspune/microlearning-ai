"""Answer models for this chapter, one module per concept (cNN.py, each with its own MODELS).

Collected here as {"CNN": {"key": f, "CNN-M1": f, ...}}, the shape verify_content.py and
draft_items.py expect, so concepts can be written in parallel without sharing a file.
"""
import importlib
import pkgutil

MODELS = {}
for _m in sorted(pkgutil.iter_modules(__path__), key=lambda m: m.name):
    if _m.name[0] == "c" and _m.name[1:].isdigit():
        MODELS[_m.name.upper()] = importlib.import_module(f"{__name__}.{_m.name}").MODELS
