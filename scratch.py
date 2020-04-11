def pageCount(n, p):
    # pages from start
    from_start = p // 2
    # pages from end
    from_end = abs(p //2 - n // 2)
    if from_start < from_end:
        return from_start
    return from_end

print(pageCount(5, 1))