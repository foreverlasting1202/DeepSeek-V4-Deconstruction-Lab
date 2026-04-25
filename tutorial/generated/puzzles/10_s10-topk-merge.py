"""DeepSeek-V4 Lab — s10 Window + Compressed Top-k [puzzle].

Reference : DeepSeek_official/model.py:507-516
Variant   : starter (all blanks default to placeholder values)
"""
def build_topk_plan(window_topk, compress_topk):
    merged = list(window_topk)
    if compress_topk:
        merged = merged
    return [value for value in merged if value != -1]
