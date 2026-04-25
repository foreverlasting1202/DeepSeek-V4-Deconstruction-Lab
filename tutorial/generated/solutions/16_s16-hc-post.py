"""DeepSeek-V4 Lab — s16 mHC Post-Mix [solution].

Reference : model.py:684-687
Variant   : solution (all blanks filled with reference values)
"""
def hc_post(x, residual, post, comb):
    width = len(x)
    out = []
    for lane in range(len(post)):
        lane_row = []
        for col in range(width):
            fresh = post[lane] * x[col]
            history = sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))
            lane_row.append(fresh + history)
        out.append(lane_row)
    return out
