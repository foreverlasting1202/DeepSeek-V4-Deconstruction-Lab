"""DeepSeek-V4 Lab — s14 SwiGLU Expert [puzzle].

Reference : model.py:589-606
Variant   : starter (all blanks default to placeholder values)
"""
import math

def silu(x):
    return x / (1.0 + math.exp(-x))

def expert(gate, up, route_weight=None):
    hidden = [0.0 for _ in gate]
    if route_weight is not None:
        hidden = [route_weight * value for value in hidden]
    return hidden
