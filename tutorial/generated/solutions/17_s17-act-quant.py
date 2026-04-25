"""DeepSeek-V4 Lab — s17 Block-wise FP8 Act Quant [solution].

Reference : kernel.py:40-102
Variant   : solution (all blanks filled with reference values)
"""
FP8_MAX = 448.0

def clamp(value, low, high):
    return max(low, min(high, value))

def quantize_row(row, block_size):
    quantized = []
    scales = []
    for start in range(0, len(row), block_size):
        block = row[start:start + block_size]
        amax = max(abs(v) for v in block)
        scale = max(amax, 1e-4) / FP8_MAX
        scales.append(scale)
        for value in block:
            quantized.append(clamp(value / scale, -FP8_MAX, FP8_MAX))
    return quantized, scales
