# def twoStrings(s1, s2):
#     hash = {}
#     for i in range(len(s1)):
#         hash[s1[i:]] =1
#         for j in range(i, len(s1)):
#             print(s1[i:j])
#             if s1[i:j] != "":
#                 hash[s1[i:j]] = 1
#     print(hash)

def twoStrings(s1, s2):
    hash = {}
    for i in range(len(s1)):
        hash[s1[i]] = 1
    print(hash)
    for i in range(len(s2)):
        if s2[i] in hash.keys():
            print("YES")
    print("NO")            
 

print(twoStrings("hello", "world"))

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