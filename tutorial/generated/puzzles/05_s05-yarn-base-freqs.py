"""DeepSeek-V4 Lab — s05 Base RoPE Frequencies [puzzle].

Reference : model.py:220-220
Variant   : starter (all blanks default to placeholder values)
"""
def build_base_freqs(dim, base):
    freqs = []
    for i in range(0, dim, 2):
        freqs.append(0.0)
    return freqs
