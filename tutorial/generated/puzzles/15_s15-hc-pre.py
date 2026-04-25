"""DeepSeek-V4 Lab — s15 mHC Pre-Mix [puzzle].

Reference : model.py:674-682
Variant   : starter (all blanks default to placeholder values)
"""
def rms_scale(values, eps):
    mean_square = sum(v * v for v in values) / len(values)
    return 1.0 / ((mean_square + eps) ** 0.5)

def hc_pre(states, logits, eps=1e-6):
    outputs = []
    for token_states, token_logits in zip(states, logits):
        flat = [v for lane in token_states for v in lane]
        scale = rms_scale(flat, eps)
        scaled_logits = [value for value in token_logits]
        total = sum(scaled_logits)
        weights = [v / total for v in scaled_logits]
        outputs.append([0.0 for _ in token_states[0]])
    return outputs
