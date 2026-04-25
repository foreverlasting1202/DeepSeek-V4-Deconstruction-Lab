"""DeepSeek-V4 Lab — s06 YaRN Smooth Interpolation [solution].

Reference : model.py:221-229
Variant   : solution (all blanks filled with reference values)
"""
def apply_yarn(freqs, factor, smooth):
    adjusted = []
    for freq, smooth_value in zip(freqs, smooth):
        adjusted.append(freq / factor * (1 - smooth_value) + freq * smooth_value)
    return adjusted

def build_angle_grid(seqlen, freqs):
    grid = []
    for t in range(seqlen):
        grid.append([t * freq for freq in freqs])
    return grid
