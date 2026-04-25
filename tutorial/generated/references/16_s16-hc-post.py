"""Reference slice from DeepSeek-V4 `DeepSeek_official/model.py`.

Segment : s16-hc-post (lesson)
Title   : mHC Post-Mix
Source  : DeepSeek_official/model.py:684-687
"""
    def hc_post(self, x: torch.Tensor, residual: torch.Tensor, post: torch.Tensor, comb: torch.Tensor):
        # x: [b,s,d], residual: [b,s,hc,d], post: [b,s,hc], comb: [b,s,hc,hc], y: [b,s,hc,d]
        y = post.unsqueeze(-1) * x.unsqueeze(-2) + torch.sum(comb.unsqueeze(-1) * residual.unsqueeze(-2), dim=2)
        return y.type_as(x)
