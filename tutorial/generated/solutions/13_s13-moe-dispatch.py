"""DeepSeek-V4 Lab — s13 Sparse MoE Dispatch [solution].

Reference : DeepSeek_official/model.py:635-645
Variant   : solution (all blanks filled with reference values)
"""
def count_indices(routed):
    counts = {}
    for row in routed:
        for expert_id in row:
            counts[expert_id] = counts.get(expert_id, 0) + 1
    return counts

def moe_forward(inputs, routed, weights, experts, shared_expert):
    outputs = [0.0 for _ in inputs]
    counts = count_indices(routed)

    for expert_id, expert_fn in experts.items():
        if counts.get(expert_id, 0) == 0:
            continue
        positions = [(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]
        for t, k in positions:
            outputs[t] += expert_fn(inputs[t]) * weights[t][k]

    for t, value in enumerate(inputs):
        outputs[t] += shared_expert(value)
    return outputs
