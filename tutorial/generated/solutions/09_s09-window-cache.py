"""DeepSeek-V4 Lab — s09 Window KV Cache [solution].

Reference : DeepSeek_official/model.py:517-533
Variant   : solution (all blanks filled with reference values)
"""
def write_kv_cache(cache, values, start_pos, window_size):
    cache = list(cache)
    if start_pos == 0:
        if len(values) <= window_size:
            return values + cache[len(values):]
        return list(values[-window_size:])
    write_index = start_pos % window_size
    cache[write_index] = values[0]
    return cache
