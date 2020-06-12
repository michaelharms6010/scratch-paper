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

print ("5" * 2)

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

puts (8 * 30 * 32)

print we_have_house(8, 30, 32, 8)

