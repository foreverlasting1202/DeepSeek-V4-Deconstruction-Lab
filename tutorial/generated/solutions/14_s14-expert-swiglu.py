"""DeepSeek-V4 Lab — s14 SwiGLU Expert [solution].

Reference : model.py:589-606
Variant   : solution (all blanks filled with reference values)
"""
import math

def silu(x):
    return x / (1.0 + math.exp(-x))

def expert(gate, up, route_weight=None):
    hidden = [silu(gate[i]) * up[i] for i in range(len(gate))]
    if route_weight is not None:
        hidden = [route_weight * value for value in hidden]
    return hidden
