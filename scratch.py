def pageCount(n, p):
    # pages from start
    from_start = p // 2
    # pages from end
    from_end = abs(p //2 - n // 2)
    if from_start < from_end:
        return from_start
    return from_end

def diagonalDifference(arr):
    #upper left
    uldiag = 0 
    urdiag = 0
    for i in range(len(arr)):
        uldiag += arr[i][i]
        print(uldiag)
    #upper right
    for i in range(len(arr)-1, -1, -1):
        urdiag += arr[len(arr)-i-1][i]
        print(urdiag)
    return abs(uldiag - urdiag)

print(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]]))