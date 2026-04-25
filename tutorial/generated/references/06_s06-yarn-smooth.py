"""Reference slice from DeepSeek-V4 `DeepSeek_official/model.py`.

Segment : s06-yarn-smooth (lesson)
Title   : YaRN Smooth Interpolation
Source  : DeepSeek_official/model.py:221-229
"""
    if original_seq_len > 0:
        low, high = find_correction_range(beta_fast, beta_slow, dim, base, original_seq_len)
        smooth = 1 - linear_ramp_factor(low, high, dim // 2)
        freqs = freqs / factor * (1 - smooth) + freqs * smooth

    t = torch.arange(seqlen)
    freqs = torch.outer(t, freqs)
    freqs_cis = torch.polar(torch.ones_like(freqs), freqs)
    return freqs_cis
