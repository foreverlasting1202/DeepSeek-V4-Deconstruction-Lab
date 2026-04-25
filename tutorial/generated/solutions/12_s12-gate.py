"""DeepSeek-V4 Lab — s12 Gate — sqrtsoftplus + Bias [solution].

Reference : DeepSeek_official/model.py:564-584
Variant   : solution (all blanks filled with reference values)
"""
def softmax(values):
    exps = [2.718281828 ** value for value in values]
    total = sum(exps)
    return [value / total for value in exps]

def gather(values, indices):
    return [values[i] for i in indices]

def topk_indices(values, k):
    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)
    return [index for index, _ in pairs[:k]]

def gate(scores, topk, bias=None, route_scale=1.0):
    original_scores = softmax(scores)
    if bias is not None:
        shifted = [score + bias[i] for i, score in enumerate(original_scores)]
    else:
        shifted = list(original_scores)
    indices = topk_indices(shifted, topk)
    weights = gather(original_scores, indices)
    return [w * route_scale for w in weights], indices
