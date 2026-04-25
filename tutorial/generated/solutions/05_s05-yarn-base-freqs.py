"""DeepSeek-V4 Lab — s05 Base RoPE Frequencies [solution].

Reference : DeepSeek_official/model.py:220-220
Variant   : solution (all blanks filled with reference values)
"""
def build_base_freqs(dim, base):
    freqs = []
    for i in range(0, dim, 2):
        freqs.append(1.0 / (base ** (i / dim)))
    return freqs
