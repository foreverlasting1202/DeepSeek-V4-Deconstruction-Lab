"""Reference slice from DeepSeek-V4 `DeepSeek_official/model.py`.

Segment : s13-moe-dispatch (lesson)
Title   : Sparse MoE Dispatch
Source  : DeepSeek_official/model.py:635-645
"""
        counts = torch.bincount(indices.flatten(), minlength=self.n_routed_experts).tolist()
        for i in range(self.experts_start_idx, self.experts_end_idx):
            if counts[i] == 0:
                continue
            expert = self.experts[i]
            idx, top = torch.where(indices == i)
            y[idx] += expert(x[idx], weights[idx, top, None])
        if world_size > 1:
            dist.all_reduce(y)
        y += self.shared_experts(x)
        return y.type_as(x).view(shape)
