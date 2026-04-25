"""DeepSeek-V4 Lab — s18 FP4 GEMM Scale Alignment [solution].

Reference : kernel.py:441-515
Variant   : solution (all blanks filled with reference values)
"""
def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):
    rows = len(a)
    cols = len(b)
    k = len(a[0])
    out = [[0.0 for _ in range(cols)] for _ in range(rows)]
    n_sub = act_group_size // block_k

    for row in range(rows):
        for col in range(cols):
            acc = 0.0
            for kk in range(k):
                act_group = kk // (block_k * n_sub)
                weight_group = kk // block_k
                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]
            out[row][col] = acc
    return out
