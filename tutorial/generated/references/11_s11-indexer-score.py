"""Reference slice from DeepSeek-V4 `model.py`.

Segment : s11-indexer-score (lesson)
Title   : Lightning Indexer Scoring
Source  : model.py:418-427
"""
        weights = self.weights_proj(x) * (self.softmax_scale * self.n_heads ** -0.5)
        # We performed QAT here, kv could also use fp8 format, though current implementation uses bf16
        index_score = torch.einsum("bshd,btd->bsht", q, self.kv_cache[:bsz, :end_pos // ratio])
        index_score = (index_score.relu_() * weights.unsqueeze(-1)).sum(dim=2)
        if world_size > 1:
            dist.all_reduce(index_score)
        if start_pos == 0:
            mask = torch.arange(seqlen // ratio).repeat(seqlen, 1) >= torch.arange(1, seqlen + 1).unsqueeze(1) // ratio
            index_score += torch.where(mask, float("-inf"), 0)
        topk_idxs = index_score.topk(min(self.index_topk, end_pos // ratio), dim=-1)[1]
