# Edabit, Codesignal, and Hackerrank Challenges

spins="29,36,31,6,25,6,30,13,32,26,31,1,32,32,3,28,8,8,6,12,17,29,25,30,18,2,27,36,18,21,21,29,36,7,5,33,8,12,30,35,2,29,18,15,0,9,22,21,27,23,16,3,15,31,35,10,2,33,22,14,2,27,14,24,20,21,32,4,7,32,25,34,29,25,20,4,25,15,8,36,31,7,14,19,1,3,3,14,7,9,14,9,16,23,0,19,17,4,1,3,5,14,33,3,22,11,9,31,20,0,16,10,2,3,9,20,20,5,15,16,12,0,5,14,10,11,3,23,19,5,26,0,27,15,12,24,29,18,1,2,34,27,20,11,6,33,13,35,10,27,10,29,3,27,6,9,30,13,2,14,6,30,20,23,8,35,18,22,27,36,27,4,31,32,22,36,10,29,6,35,10,29,6,35,26,24,5,8,31,6,13,15,28,22,5,12,6,18,7,2,11,21,35,24,19,13,20,12,9,35,24,27,17,3,30,30,19,9,2,30,1,34,14,21,25,13,9,8,8,6,35,18,8,33,25,28,6,15,35,26,5,23,29,30,35,20,13,10,30,11,20,18,0,25,7,14,31,22,28,29,36,18,17,35,29,20,34,36,19,10,6,7,9,10,32,25,15,35,12,10,8,15,28,3,1,10,7,23,30,13,31,34,16,15,17,27,2,35,28,25,30,12,4,14,8,16,22,31,6,2,35,1,11,14,16,10,1,25,34,20,27,28,21,5,21,3,23,8,8,3,25,33,22,34,7,22,32,5,8,25,8,20,20,17,20,16,1,36,31,27,15,3,16,1,1,25,11,28,15,14,28,21,22,8,31,29,10,2,7,25,9,17,3,8,25,24,29,9,17,12,8,1,20,25,11,2,11,30,33,35,36,11,12,32,36,27,8,8,15,18,24,33,23,19,12,13,7,9,19,11,4,35,30,8,32,3,34,3,9,25,26,31,5,24,35,17,3,28,14,5,23,31,35,4,1,29,25,13,7,36,0,27,16,15,22,15,23,0,7,5,15,6,32,15,25,30,25,34,12,18,21,28,11,20,30,20,29,22,11,31,23,9,0,33,15,2,35,2,23,4,6,34,19,27,13,35,33,25,5,6,24,0,8,6,31,22,32,22,24,9,19,16,18,27,26,27,9,16,20,3,35,0,21,28,22,0,7,18,35,9,33,15,32,21,17,14,18,23,31,8,33,34,5,19,11,10,13,36,12,36,18,2,17,4,8,20,0,29,17,11,0,16,28,21,33,31,13,36,6,23,26,18,5,26,4,4,14,15,10,10,23,32,5,2,16,29,33,31,23,18,35,28,6,34,3,17,21,26,6,32"

def spincounter(s):
    hash = {}
    l = s.split(",");
    for i in l:
        if hash.get(i):
            hash[i] += 1
        else:
            hash[i] = 1
    return hash

print(spincounter(spins))

def maxSlidingWindow(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: List[int]
    """
    i = 0
    output = []
    window = []
    while i <= len(nums)-k:
        for j in range(k):
            window.append(nums[i+j])
            print(window)
        output.append(max(window))
        i+= 1
        window = []
    return output

def lcm(nums):
    if len(nums) ==1:
        return nums[0]
    nums.sort()
    maxnum = nums[-1]
    secondmaxnum = nums[-2] 
    
    product = 1
    for i in nums:
        product *= i

    if maxnum - secondmaxnum == 1:
        return int(product / 2)

    for i in range(maxnum, product+1, maxnum):
        divisible = True
        for j in nums:
            if i % j != 0:
                divisible = False

        if divisible:
            return i

def code(string):
    output = []
    for i in string:
        sumdigs = 0
        total = str(ord(i))
        for i in total:
            sumdigs += int(i)
        output.append(sumdigs)
    return output

def groupAnagrams(strs):
        hash = {}
        for i in strs:
            key = ''.join(sorted(i))
            if hash.get(key):
                hash[key].append(i)
            else:
                hash[key] = [i]
            
        return hash.values()

def makeAnagram(s1, s2):
    hash = {}
    hash2 = {}
    for i in s1:
        if hash.get(i):
            hash[i] += 1
        else:
            hash[i] = 1
    totaldeletions = 0
    for i in s2:
        if hash2.get(i):
            hash2[i] += 1
        else: 
            hash2[i] = 1

        if hash.get(i):
            hash[i] -= 1
        else:
            totaldeletions += 1
    for i in s1: 
        if hash2.get(i):
            hash2[i] -= 1
        else: 
            totaldeletions += 1
    return totaldeletions

def threeSum(nums):
        output = []
        nums.sort()
        for i in range(len(nums)):
            left = i+1
            right = len(nums) -1
           
            
            while right > left:
                sum = nums[i] + nums[left] + nums[right]
                if sum == 0:
                    if [nums[i], nums[left], nums[right]] not in output:
                        output.append([nums[i], nums[left], nums[right]])
                if sum <= 0:
                    left += 1
                if sum > 0:
                    right -= 1
        return output

def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    hash = {}
    for i in range(len(nums)):     
        if hash.get(nums[i]) != None:
            return [hash[nums[i]], i]
        hash[target-nums[i]] = i
    
def can_exit(lst):
    start = [0,0]
    exit = [len(lst)-1, len(lst[0])-1]
    stack = []
    if lst[exit[0]][exit[1]] == 1:
        return False
    stack.append(start)
    while len(stack) > 0:
        coords = stack.pop();
        currow = coords[0]
        curcol = coords[1]
        lst[currow][curcol] = 1
        if currow +1 < len(lst) and lst[currow+1][curcol] == 0:
            stack.append([currow +1, curcol])
        if currow -1 > -1 and lst[currow-1][curcol] == 0:
            stack.append([currow-1, curcol])
        if curcol +1 < len(lst[0]) and lst[currow][curcol+1] == 0:
            stack.append([currow, curcol +1])
        if curcol-1 > -1 and lst[currow][curcol-1] == 0:
            stack.append([currow, curcol-1])
        if (currow == exit[0] and curcol == exit[1]):
            return True
    return False

def strstr(s, x):
    for i in range(len(s) - len(x) +1):
        if s[i:i+len(x)] == x:
            return i
    return -1

def amendTheSentence(s):
    sentence = ""
    word = ""
    caps = 1
    for i in range(len(s)):
        
        if s[i].upper() == s[i] and i != 0:
            caps += 1
            
        if caps == 2:
            sentence += word.lower() + " "
            caps = 1
            word = s[i]
        else:
            word += s[i]
    sentence += word.lower()
    return sentence

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.storage = []
        self.min_values = []        

    def push(self, x: int) -> None:
        self.storage.append(x)
        if len(self.min_values) == 0 or x <= self.min_values[-1]:
            self.min_values.append(x)

    def pop(self) -> None:
        popped = self.storage.pop()
        if popped == self.min_values[-1]:
            min_values.pop()
        return popped

    def top(self) -> int:
        return self.storage[-1]

    def getMin(self) -> int:
        return self.min_values[-1]

# obj = MinStack()
# obj.push(-2)
# obj.push(-3)
# obj.push(0)
# obj.push(5)
# obj.getMin()
# obj.push(x)
# obj.pop()
# obj.getMin()

def longestCommonSubstring(s, t):
    hash = {}
    length = 0
    for i in range(len(s)):
        if hash.get(s[i]):
            hash[s[i]].append(i)
        else:
            hash[s[i]] = [i]
    for i in range(len(t)):
        new = False
        if hash.get(t[i]):
            for j in hash[t[i]]:
                print(j)
                s_cursor = j
                t_cursor = i
                while s[s_cursor:s_cursor + length] == t[t_cursor:t_cursor + length] and s_cursor + length < len(s) and t_cursor + length < len(t):
                    print(s[s_cursor:s_cursor + length])
                    print(t[t_cursor:t_cursor + length])
                    length += 1
                    new = True
        if not hash.get(t[i:i + length]) and new:
            length -= 1
                    
    return length

def containsCloseNums(nums, k):
    if len(nums) < 2:
        return False
    hash = {}
    for i in range(len(nums)):
        storedIndex = hash.get(nums[i])
        if storedIndex != None:
            print(i, storedIndex)
            if i - storedIndex > k:
                return False
        else:
            hash[nums[i]] = i
    return True

def isValid(s):
    hash = {}
    if len(s) == 1:
        return "YES"
    for i in s:
        if hash.get(i):
            hash[i] += 1
        else:
            hash[i] = 1
    print(hash)
    if hash[s[0]] == hash[s[1]]:
        rate = hash[s[0]]
    elif hash[s[2]] == hash[s[3]]:
        rate = hash[s[2]]
    else:
        return "NO"
    toggled = False
    for i in hash.values():
        if i != rate:            
            if i + 1 == rate or i-1 == rate or i==1: 
                if toggled:
                    return "NO"
                toggled = True
            else:
                return "NO"
    return "YES"

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