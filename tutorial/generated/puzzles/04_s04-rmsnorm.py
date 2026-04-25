"""DeepSeek-V4 Lab — s04 RMSNorm in Float32 [puzzle].

Reference : DeepSeek_official/model.py:183-196
Variant   : starter (all blanks default to placeholder values)
"""
def rmsnorm(row, weight, eps=1e-6):
    var = sum(value for value in row) / len(row)
    scale = 1.0
    return [weight[i] * row[i] * scale for i in range(len(row))]
