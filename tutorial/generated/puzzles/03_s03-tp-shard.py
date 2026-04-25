"""DeepSeek-V4 Lab — s03 Row vs Column Parallel Shards [puzzle].

Reference : DeepSeek_official/model.py:155-180
Variant   : starter (all blanks default to placeholder values)
"""
def shard_linear(in_features, out_features, world_size, mode):
    if mode == "column":
        out_features = out_features
    elif mode == "row":
        in_features = in_features
    return in_features, out_features
