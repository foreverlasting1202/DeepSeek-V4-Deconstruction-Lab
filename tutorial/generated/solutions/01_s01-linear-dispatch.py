"""DeepSeek-V4 Lab — s01 Linear Dispatch [solution].

Reference : DeepSeek_official/model.py:108-120
Variant   : solution (all blanks filled with reference values)
"""
class TorchStub:
    float4_e2m1fn_x2 = "fp4"
    float8_e4m3fn = "fp8"
    bfloat16 = "bf16"

torch = TorchStub()

class Weight:
    def __init__(self, dtype, scale="weight_scale"):
        self.dtype = dtype
        self.scale = scale

block_size = 128
scale_fmt = "ue8m0"
scale_dtype = "fp32"

def act_quant(x, block_size, scale_fmt, scale_dtype):
    return f"quant({x})", f"scale({block_size},{scale_fmt},{scale_dtype})"

def fp4_gemm(x, s, weight, weight_scale, scale_dtype):
    return ("fp4", x, s, weight_scale, scale_dtype)

def fp8_gemm(x, s, weight, weight_scale, scale_dtype):
    return ("fp8", x, s, weight_scale, scale_dtype)

def dense_linear(x, weight):
    return ("bf16", x, weight.dtype)

def linear(x, weight, bias=None):
    assert bias is None
    if weight.dtype == torch.float4_e2m1fn_x2:
        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)
        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)
    elif weight.dtype == torch.float8_e4m3fn:
        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)
        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)
    else:
        return dense_linear(x, weight)
