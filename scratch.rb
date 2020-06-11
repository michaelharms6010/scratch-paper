def boomerang(arr)
    count = 0
    for i in (0..arr.length-3)
        if arr[i] == arr[i+2] and arr[i] != arr[i+1]
            count += 1
        end
    end
    return count
end

print boomerang([1,2,1,2,3])