"""DeepSeek-V4 Lab — s17 Block-wise FP8 Act Quant [puzzle].

Reference : kernel.py:40-102
Variant   : starter (all blanks default to placeholder values)
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
        scale = 1.0
        scales.append(scale)
        for value in block:
            quantized.append(0.0)
    return quantized, scales
