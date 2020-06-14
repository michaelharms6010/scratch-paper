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

def bemirp(n)
    reverse = isPrime(n.to_s.reverse.to_i)
    flipped = flipVert(n.to_s)
    return "C" if not isPrime(n)
    return "P" if isPrime(n) and isPalindrome(n)
    return "B" if reverse and flipped
    return "E" if reverse
    return "P" if isPrime(n)
    
end

def is_rectangle(coordinates)
    
	return false if coordinates.length != 4
    coordinates = coordinates.map{|x| x.tr("() ", "").split(",")}
    for i in (0..coordinates.length-1) do
        puts coordinates[i][1]
        puts coordinates[(i+1)%4][1]
		return false if coordinates[i][0] != coordinates[(i+1)%4][0] and coordinates[i][1] != coordinates[(i+1)%4][1]
        puts "passed 1"
        return false if coordinates[i][0] == coordinates[(i+1)%4][0] and coordinates[i][1] == coordinates[(i+1)%4][1]
        puts "passed 2"
    end
	true	
end

require "date"

def get_day(str)
    Date.parse(str).strftime("%A")
end

def free_throws(success, rows)
	"#{(((success.tr("%","").to_f / 100) ** rows) * 100).round}%"
end

def digits(number)
	(1..number-1).to_a.join("").length
end

def get_vowel_substrings(str)
    output = []
    vowels = /[aeiou]/i
    for i in (0..str.length-1) do
        for j in (1..str.length-i) do
            output.push(str[i,j]) if vowels === str[i,j][0] and vowels === str[i,j][-1]
        end
    end
    output.uniq.sort
end

def get_consonant_substrings(str)
    output = []
    consonants = /[bcdfghjklmnpqrstvwxyz]/i
    for i in (0..str.length-1) do
        for j in (1..str.length-i) do
            output.push(str[i,j]) if consonants === str[i,j][0] and consonants === str[i,j][-1]
        end
    end
    output.uniq.sort
end

def larger_than_right(arr)
	output = []
	for i in (0..arr.length-2) do
		if arr[i] > arr[i+1,arr.length-i-1].max
			output << arr[i]
		end
    end
    output << arr[-1]
end
def repetition(txt, n)
	return txt if n == 1
	txt + repetition(txt, n-1)
end

def fret_freq(g_str, fret)
	freqs = {
		"1" => 329.63,
		"2" => 246.94,
		"3" => 196.00,
		"4" => 146.83,
		"5" => 110.00,
		"6" => 82.41
	}
	# String Frequency * 2**(fret/12)
	(freqs[g_str.to_s] * (2 ** (fret / 12.to_f))).round(2)
end

def total_points(guesses, word)
	score = 0
		guesses.each do |i|
			if i.chars.all?{|c| i.count(c) <= word.count(c)}
				score += i.length - 2
				score += 50 if i.length == 6;
			end
		end
		score
end

def can_exit(arr)
	stack = []
	stack.push([0,0])
	while not stack.length.zero? do
		row,col = stack.pop()
        return true if [row,col] == [4,6]
        puts [row,col].to_s
        
		arr[row][col] = 1
		stack.push([row-1, col]) if row > 0 and arr[row-1][col] == 0
		stack.push([row+1, col]) if row < arr.length-1 and arr[row+1][col] == 0
		stack.push([row, col+1]) if col < arr[0].length-1 and arr[row][col+1] == 0
		stack.push([row, col-1]) if col > 0 and arr[row][col-1] == 0
	end
	false
end

def can_enter_cave(arr)

    stack = []
    startrow, startcol = [0,0]
    while arr[startrow][startcol] != 0
        startrow += 1
        return false if startrow > arr.length-1
    end
	stack.push([startrow, startcol])
	while not stack.length.zero? do
		row,col = stack.pop()
        return true if col == arr[0].length-1 
        
		arr[row][col] = 1
		stack.push([row-1, col]) if row > 0 and arr[row-1][col] == 0
		stack.push([row+1, col]) if row < arr.length-1 and arr[row+1][col] == 0
		stack.push([row, col+1]) if col < arr[0].length-1 and arr[row][col+1] == 0
		stack.push([row, col-1]) if col > 0 and arr[row][col-1] == 0
	end
	false

end

def cutting_grass(arr, *cuts)
	output = []
    cuts.each do |cut|
        if arr.include?(0)
            output.push("Done")
        else
		    arr = arr.map{|x| x-cut}
            output.push(arr)
        end
	end
	output.to_s
end

def convert_time(str)
	pm = str.include?("P")
    hour, minute, second = str.split(/[:APM]/)
    if pm and hour != "12"
        hour = (hour.to_i + 12).to_s
    end
    if hour == "12" and not pm
        hour = "00"
    end
    "#{hour}:#{minute}:#{second}"
end

def switch(prison)
	prison.map{|x| (x==0) ? 1 : 0}
end

def freed_prisoners(prison)
	return 
	count = 0
	for i in (0..prison.length-1) do
		if prison[i] == 1
			prison = switch(prison)
			count += 1 
		end
	end
	count
end

def largest_island(map)
	sizes = []
	for row1 in 0..map.length-1 do
		for col1 in 0..map[0].length-1 do
			if map[row1][col1] == 1
				stack = []
				size = 0
				stack.push([row1, col1])
				while stack.length > 0 do
					row,col = stack.pop()
					if map[row][col] == 1
						map[row][col] = 0
						size += 1
					end				
					for i in row-1..row +1 do
						for j in col-1..col+1 do
							if map[i] and map[i][j] == 1 and i >= 0 and j >= 0
								stack.push([i,j]) 
								puts "match" + [i,j].to_s
							end
						end
					end
				end
				sizes.push(size)
			end
			
		end
	end
	sizes.max
end

def tree(h)
	out = []
	spaces = 0
	for i in (0..h-1) do
		puts (h - i)
		out.push((" " * spaces) + ("#" * ((h - i) + spaces * 2)) + (" " * spaces))
		spaces += 1 
	end
	out
end

print tree(5)