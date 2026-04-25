"""DeepSeek-V4 Lab — s20 mHC Sinkhorn Iterations [solution].

Reference : kernel.py:371-438
Variant   : solution (all blanks filled with reference values)
"""
import math

def softmax_rows(matrix):
    out = []
    for row in matrix:
        m = max(row)
        exps = [math.exp(v - m) for v in row]
        total = sum(exps)
        out.append([v / total for v in exps])
    return out

def normalize_rows(matrix, eps):
    out = []
    for row in matrix:
        total = sum(row)
        out.append([v / (total + eps) for v in row])
    return out

def normalize_cols(matrix, eps):
    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]
    return [[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]

def sinkhorn(matrix, iters, eps=1e-6):
    matrix = softmax_rows(matrix)
    matrix = normalize_cols(matrix, eps)
    for _ in range(iters - 1):
        matrix = normalize_rows(matrix, eps)
        matrix = normalize_cols(matrix, eps)
    return matrix
