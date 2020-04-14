


def whatFlavors(cost, money):
    hash = {}
    for i in range(len(cost)):
        if hash.get(cost[i]):
            output = [i+1, hash[cost[i]]]
            output.sort()
            print(output[0], output[1])
            return
        hash[money-cost[i]] = i+1

def isBalanced(s):
    pairs = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    stack = []
    for i in s:
        if pairs.get(i):
            stack.append(i)
        if i in pairs.values():
            if len(stack) == 0:
                return "NO"
            last = stack.pop()
            if pairs[last] != i:
                return "NO"

    return "YES"



def countTriplets(arr, r):
    counthash = {}
    completehash = {}
    count = 0
    for i in arr:
        if completehash.get(i):
            print(completehash[i])
            count += completehash[i]
        if counthash.get(i):
            if completehash.get(i * r):
                completehash[i * r] += counthash[i]
            else:
                completehash[i * r]  = counthash[i]
        if counthash.get(i * r):
            counthash[i * r] += 1
        else:
            counthash[i * r] = 1
    return count




def pythTrip():
    for i in range(1,30):
        for j in range(i+1, 30):
            for k in range(j+1, 30):
                if i**2 + j**2 +k**2 == 1000:
                    return [i,j,k]

def sherlockAndAnagrams(s):
    hash = {}
    count = 0
    for i in range(len(s)):
        for j in range(len(s[i:])):
            substring = "".join(sorted(s[i:j+i+1]))
            
            if substring in hash.keys():
                hash[substring] += 1
            else:
                hash[substring] = 1
    for i in hash.values():
        total = i
        while total > 1:
            total -= 1
            count += total
            
    return count

def threeSum(nums):
        output = []
        hash = {}
        for i in range(len(nums)):
            hash[0-nums[i]] = nums[i]
            for j in range(i+1, len(nums)):
                if (nums[i] + nums[j]) in hash.keys():
                    print(nums[i], nums[j])
                    if nums[i] != hash[nums[i] + nums[j]] and nums[j] != hash[nums[i] + nums[j]]:
                        newEntry = [nums[i], nums[j], hash[nums[i] + nums[j]]]
                        newEntry.sort()
                        output.append(newEntry)

        return output

# def sumSubsets(arr, target):
#     output = []
#     hash = {}
#     for i in range(len(arr)):
#         for j in range(i+1,len(arr)):
#             totaller = target - arr[i] - arr[j]
#             if arr[i] != totaller and j != i and arr[j] != totaller:
#                 if totaller in arr:
#                     subset = [arr[i], arr[j], totaller]
#                     subset.sort()
#                     if sum(subset) == target and subset not in output:
#                         output.append(subset)
#                         hash[str(subset)] = 1


#     def first(i):
#         return i[0]
#     def second(i):
#         return i[1]
#     def third(i):
#         return i[2]

#     subsets = output
#     subsets.sort(key=third)
#     subsets.sort(key=second)
#     subsets.sort(key=first)
#     return subsets

# print(sumSubsets([-3,-2,-1,0,1,2,3,4,5,6,7,8], 6))


def sumSubsets(arr, target):
    output = []
    for i in range(len(arr)):
        for j in range(1,len(arr)):
            for k in range(2, len(arr)):
                subset = [arr[i], arr[j], arr[k]]
                if sum(subset) == target:
                    output.push(subset)


    def allSubs(l):
        if len(l) == 1:
            return [l]
        output = []
        subsets = allSubs(l[0:-1])
        output = output+subsets
        output.append([l[-1]])
        for subset in subsets:
            output.append(subset+[l[-1]])
            
        return output

    def first(i):
        return i[0]
    def second(i):
        return i[1]
    def third(i):
        return i[2]

    subsets = [i for i in allSubs(arr) if len(i) == 3 and sum(i) == target]
    for i in subsets:
        i.sort()
    subsets.sort(key=third)
    subsets.sort(key=second)
    subsets.sort(key=first)
    return subsets




def balancedBrackets(string):
    matches = {
        "(": ")",
        "[": "]",
        "{": "}",
        "|": "|"
    }
    stack = []
    for i in string:
        print(stack)
        if i in matches.keys() and i != "|":
            stack.append(i)
        if i in matches.values() and i != "|":
            last = stack.pop()
            if matches[last] != i:
                return False
        elif i == "|":
            if len(stack) > 0:
                last = stack.pop()
                if last != "|":
                    stack.append(last)
                    stack.append(i)
            else:
                stack.append(i)

    if len(stack) == 0:
        return True
    return False

def total_subsets_matching_sum(numbers, sum):
    array = [1] + [0] * (sum)
    for current_number in numbers:
        for num in range(sum - current_number, -1, -1):
            if array[num]:
                
                array[num + current_number] += array[num]
                print(array)
    return array[sum]


def twoStrings(s1, s2):
    hash = {}
    for i in range(len(s1)):
        hash[s1[i:]] =1
        for j in range(i, len(s1)):
            print(s1[i:j])
            if s1[i:j] != "":
                hash[s1[i:j]] = 1
    hash2 = {}
    for i in range(len(s2)):
        hash2[s2[i:]] =1
        for j in range(i, len(s2)):
            if s2[i:j] != "":
                hash2[s2[i:j]] = 1
    anagrams = []
    for i in hash.keys():
        if i[::-1] in hash2.keys():
            anagrams.append(i)
    print(anagrams)
    max_length = max(len(i) for i in anagrams)
    return len(s1)-max_length + len(s2)-max_length
    

# def twoStrings(s1, s2):
#     hash = {}
#     for i in range(len(s1)):
#         hash[s1[i]] = 1
#     print(hash)
#     for i in range(len(s2)):
#         if s2[i] in hash.keys():
#             print("YES")
#     print("NO")            
 
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