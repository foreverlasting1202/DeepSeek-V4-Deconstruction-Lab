"""DeepSeek-V4 Lab — s11 Lightning Indexer Scoring [solution].

Reference : DeepSeek_official/model.py:418-427
Variant   : solution (all blanks filled with reference values)
"""
def index_score(queries, keys, head_weights):
    # queries: [h][d], keys: [d], head_weights: [h]
    total = 0.0
    for h in range(len(queries)):
        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))
        relu = max(0.0, dot)
        total += head_weights[h] * relu
    return total
