"""DeepSeek-V4 Lab — s07 Apply Rotary Embedding [solution].

Reference : model.py:232-244
Variant   : solution (all blanks filled with reference values)
"""
def conjugate(z):
    return complex(z.real, -z.imag)

def apply_rotary_emb(vectors, freqs_cis, inverse=False):
    if inverse:
        freqs_cis = [[conjugate(value) for value in row] for row in freqs_cis]

    output = []
    for vector, freq_row in zip(vectors, freqs_cis):
        rotated = []
        for pair_index in range(0, len(vector), 2):
            z = complex(vector[pair_index], vector[pair_index + 1])
            factor = freq_row[pair_index // 2]
            y = z * factor
            rotated.extend([round(y.real, 6), round(y.imag, 6)])
        output.append(rotated)
    return output
