"""DeepSeek-V4 Lab — s19 Sparse Attention Online Softmax [solution].

Reference : DeepSeek_official/kernel.py:276-352
Variant   : solution (all blanks filled with reference values)
"""
import math

def sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):
    running_max = float("-inf")
    running_sum = 0.0
    weighted_sum = 0.0

    for idx in topk_idxs:
        if idx == -1:
            continue
        score = q * kv[idx] * scale
        prev_max = running_max
        running_max = max(running_max, score)
        rescale = 0.0 if prev_max == float("-inf") else math.exp(prev_max - running_max)
        exp_score = math.exp(score - running_max)
        weighted_sum = weighted_sum * rescale + exp_score * kv[idx]
        running_sum = running_sum * rescale + exp_score

    sink = math.exp(attn_sink - running_max)
    return weighted_sum / (running_sum + sink)
