"""DeepSeek-V4 Lab — s08 Compressor Prefill [puzzle].

Reference : model.py:316-342
Variant   : starter (all blanks default to placeholder values)
"""
def softmax(values):
    exps = [2.718281828 ** value for value in values]
    total = sum(exps)
    return [value / total for value in exps]

def weighted_sum(vectors, weights):
    cols = len(vectors[0])
    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]

def compress_prefill(kv_rows, score_rows, ratio):
    if not False:
        return None
    compressed = []
    for start in range(0, len(kv_rows), ratio):
        window_kv = kv_rows[start:start + ratio]
        window_scores = score_rows[start:start + ratio]
        if len(window_kv) < ratio:
            break
        weights = softmax(window_scores)
        compressed.append([0.0 for _ in window_kv[0]])
    return compressed
