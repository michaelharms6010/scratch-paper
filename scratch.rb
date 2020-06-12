def boomerang(arr)
    count = 0
    for i in (0..arr.length-3)
        if arr[i] == arr[i+2] and arr[i] != arr[i+1]
            count += 1
        end
    end
    return count
end

def numArgs(*args, **kwargs, &blk)
    args.size + kwargs.size + (blk.nil? ? 0: 1)
end

def bracket_logic(xp)
	pairs = {
		"[" => "]",
		"(" => ")",
		"<" => ">",
		"{" => "}"
	}
	stack = []
    xp.chars.each do |i|
		if pairs.keys.include? i
			stack.push(i)
		elsif pairs.values.include? i
			return false if i != pairs[stack.pop()]
		end
    end
    stack.length == 0
end


def we_have_house(hh, hw, hd, rh)
	width_limit = 15
    depth_limit = 11
    return "House too big." if hw > 44 or hd > 44
    return "House too small." if hw < width_limit or hd < depth_limit
	return "No permission." if hh + rh > 20
	windows = 12 * 8
	door = 21
	used_area = windows + door
	total_area = (hd * hh * 2) + (hw * hh * 2) + (hw * rh)
	free_area = total_area - used_area
	grey = (hw * 2 + hd * 2) * 2 - (3*2)
	yellow = free_area - grey
	"Yellow: #{yellow}, Gray: #{grey}"
end

def isPrime(n)
	return false if n <= 1
	return true if n == 2 or n == 3
	for i in (2..(n ** 0.5).round + 1) do
		return false if n % i == 0
	end
	true
end

def flipVert(n)
    hash = {
        "1" => 1,
        "8" => 8,
        "6" => 9,
        "9" => 6,
        "0" => 0
    }
    return false if not n.to_s.chars.all? {|c| hash[c]}
    isPrime(n.to_s.chars.map{|c| hash[c]}.join("").to_i)
end

def isPalindrome(n)
    n.to_s == n.to_s.reverse
end

isPalindrome(15551)


def bemirp(n)
    reverse = isPrime(n.to_s.reverse.to_i)
    flipped = flipVert(n.to_s)
    return "C" if not isPrime(n)
    return "P" if isPrime(n) and isPalindrome(n)
    return "B" if reverse and flipped
    return "E" if reverse
    return "P" if isPrime(n)
    
end

puts bemirp(10909)

