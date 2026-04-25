"""Reference slice from DeepSeek-V4 `model.py`.

Segment : s05-yarn-base-freqs (lesson)
Title   : Base RoPE Frequencies
Source  : model.py:220-220
"""
    freqs = 1.0 / (base ** (torch.arange(0, dim, 2, dtype=torch.float32) / dim))
