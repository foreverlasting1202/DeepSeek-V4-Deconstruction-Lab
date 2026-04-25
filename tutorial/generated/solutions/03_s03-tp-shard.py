"""DeepSeek-V4 Lab — s03 Row vs Column Parallel Shards [solution].

Reference : model.py:155-180
Variant   : solution (all blanks filled with reference values)
"""
def shard_linear(in_features, out_features, world_size, mode):
    if mode == "column":
        out_features = out_features // world_size
    elif mode == "row":
        in_features = in_features // world_size
    return in_features, out_features
