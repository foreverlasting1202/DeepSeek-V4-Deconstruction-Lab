"""Reference slice from DeepSeek-V4 `kernel.py`.

Segment : s18-fp4-gemm (lesson)
Title   : FP4 GEMM Scale Alignment
Source  : kernel.py:441-515
"""
@tilelang.jit(pass_configs=pass_configs)
def fp4_gemm_kernel(N, K, out_dtype=BF16, accum_dtype=FP32, scale_dtype=FP32):
    """FP8 act x FP4 weight GEMM kernel.

    C[M, N] = A_fp8[M, K] @ B_fp4[N, K]^T

    Act: 1x128 quant on K (reduce dim), FP8 with configurable scale dtype
    Weight: 1x32 quant on K (reduce dim), FP4 with E8M0 scale

    B is stored as [N, K//2] in float4_e2m1fn_x2, logical [N, K] in fp4.
    The FP4 values are packed along the K (last) dimension.

    Strategy: load FP4 sub-blocks of size [block_N, sub_K] (sub_K=32),
    cast FP4 to FP8 via float, then do FP8xFP8 GEMM.
    Apply act scale (per 128 on K) and weight scale (per 32 on K) to the accumulator.
    """
    M = T.symbolic("M")
    act_group_size = 128
    weight_group_size = 32
    block_M = 32
    block_N = 128
    block_K = 32   # matches weight_group_size for simple scale handling
    n_sub = act_group_size // block_K  # 4 sub-blocks per act scale group

    @T.prim_func
    def fp4_gemm_kernel_(
        A: T.Tensor[(M, K), FP8],
        B: T.Tensor[(N, K), FP4],
        C: T.Tensor[(M, N), out_dtype],
        scales_a: T.Tensor[(M, T.ceildiv(K, act_group_size)), scale_dtype],
        scales_b: T.Tensor[(N, T.ceildiv(K, weight_group_size)), scale_dtype],
    ):
        with T.Kernel(T.ceildiv(N, block_N), T.ceildiv(M, block_M), threads=128) as (
            bx,
            by,
        ):
            A_shared = T.alloc_shared((block_M, block_K), FP8)
            B_fp4_shared = T.alloc_shared((block_N, block_K), FP4)
            B_shared = T.alloc_shared((block_N, block_K), FP8)
            C_shared = T.alloc_shared((block_M, block_N), out_dtype)
            C_local = T.alloc_fragment((block_M, block_N), accum_dtype)
            C_local_accum = T.alloc_fragment((block_M, block_N), accum_dtype)
            scale_a_frag = T.alloc_fragment((block_M,), FP32)
            scale_b_frag = T.alloc_fragment((block_N,), FP32)

            T.use_swizzle(panel_size=10)
            T.clear(C_local)
            T.clear(C_local_accum)

            K_iters = T.ceildiv(K, block_K)
            for k in T.Pipelined(K_iters, num_stages=2):
                T.copy(A[by * block_M, k * block_K], A_shared)
                T.copy(B[bx * block_N, k * block_K], B_fp4_shared)
                # FP4->FP8 cast must go through FP32 to avoid ambiguous C++ overload
                for i, j in T.Parallel(block_N, block_K):
                    B_shared[i, j] = T.Cast(FP8, T.Cast(FP32, B_fp4_shared[i, j]))

                # Weight scale: per 32 on K, indexed by k (each k is one block_K=32)
                for i in T.Parallel(block_N):
                    scale_b_frag[i] = T.Cast(FP32, scales_b[bx * block_N + i, k])

                # Act scale: per 128 on K, indexed by k // 4
                for i in T.Parallel(block_M):
                    scale_a_frag[i] = T.Cast(FP32, scales_a[by * block_M + i, k // n_sub])

                T.gemm(A_shared, B_shared, C_local, transpose_B=True)

                for i, j in T.Parallel(block_M, block_N):
                    C_local_accum[i, j] += C_local[i, j] * scale_a_frag[i] * scale_b_frag[j]
                T.clear(C_local)

            T.copy(C_local_accum, C_shared)
            T.copy(C_shared, C[by * block_M, bx * block_N])

    return fp4_gemm_kernel_
