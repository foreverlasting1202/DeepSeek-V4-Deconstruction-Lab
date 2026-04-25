"""DeepSeek-V4 Lab — s02 Weight & Scale Layout [puzzle].

Reference : DeepSeek_official/model.py:123-150
Variant   : starter (all blanks default to placeholder values)
"""
block_size = 128
fp4_block_size = 32

class TorchStub:
    float4_e2m1fn_x2 = "fp4"
    float8_e4m3fn = "fp8"
    bfloat16 = "bf16"

torch = TorchStub()

def ceildiv(x, y):
    return (x + y - 1) // y

def describe_linear_layout(in_features, out_features, dtype):
    if dtype == torch.float4_e2m1fn_x2:
        weight_shape = (out_features, in_features // 2)
        scale_shape = (out_features, 1)
    elif dtype == torch.float8_e4m3fn:
        weight_shape = (out_features, in_features)
        scale_shape = (1, 1)
    else:
        weight_shape = (out_features, in_features)
        scale_shape = None
    return weight_shape, scale_shape
