"""DeepSeek-V4 Lab — s04 RMSNorm in Float32 [solution].

Reference : DeepSeek_official/model.py:183-196
Variant   : solution (all blanks filled with reference values)
"""
def rmsnorm(row, weight, eps=1e-6):
    var = sum(value * value for value in row) / len(row)
    scale = 1.0 / ((var + eps) ** 0.5)
    return [weight[i] * row[i] * scale for i in range(len(row))]
