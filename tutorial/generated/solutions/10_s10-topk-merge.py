"""DeepSeek-V4 Lab — s10 Window + Compressed Top-k [solution].

Reference : model.py:507-516
Variant   : solution (all blanks filled with reference values)
"""
def build_topk_plan(window_topk, compress_topk):
    merged = list(window_topk)
    if compress_topk:
        merged = merged + list(compress_topk)
    return [value for value in merged if value != -1]
