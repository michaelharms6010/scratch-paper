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
		out.push((" " * spaces) + ("#" * ((h - i) * 2 - 1)) + (" " * spaces))
		spaces += 1 
	end
	out.reverse
end

def vol_sphere(r)
	4/3.to_f * 3.14159265 * (r ** 3)
end

def vol_shell(r1, r2)
	inside, outside = [r1,r2].sort
	vol_sphere(outside) - vol_sphere(inside)
end

def transform_matrix(arr)
	output = []
	for row in (0..arr.length-1) do
		output.push([])
		for col in (0..arr[row].length-1) do
			puts "value"
			puts arr[row][col]
			rowct = arr[row].count(1)
			colct = arr.map{|x| x[col]}.count(1)
			puts arr[row].to_s
			puts arr.map{|x| x[col]}.to_s
			puts rowct
			puts colct
			colct -= 2 if arr[row][col] == 1
			output[row][col] = rowct + colct
		end
	end
	output
end


def no_strangers(str)
	hash = {}
	acqs = []
	friends = []
	str.split.map{|x| x.downcase.gsub(/[^a-z0-9\s']/i, '')}.each do |word|
		if not hash[word]
			hash[word] = 1
		elsif hash[word] == 4
			acqs.delete(word)
			friends.push(word)
			hash[word] += 1
		elsif hash[word] == 2
			acqs.push(word)
			hash[word] += 1
		else
			hash[word] += 1
		end
	end
	[acqs, friends]
end

def check_square_and_cube(lst)
	sqr, cube = lst
	puts sqr ** 0.5
	puts cube ** (1.0/3)
	(sqr ** 0.5).round == (cube ** (1.0/3)).round
end

def letter_check(arr)
	puts arr[0].downcase.chars.sort.join
	puts (arr[1].downcase.chars.sort.join)
end

def moving_partition(arr)
	return [] if arr == []
	front = []
	back = arr
	out = []
	for i in (0..arr.length-2) do
		front.push(back.shift())
		puts back.to_s
		out.push([front[0..front.length], back[0..back.length]])
	end
	out
end

def three_sum(arr)
	return [] if arr.length < 3
	out = []
	arr = arr.sort
	for i in (0..arr.length-3) do
		c1 = i
		c2 = i + 1
		c3 = arr.length - 1
			while c3 > c2 do
				if arr[c1] + arr[c2] + arr[c3] == 0
					match = [arr[c1],arr[c2],arr[c3]]
					out.push(match) if not out.include?(match)
					c2 += 1
				elsif arr[c1] + arr[c2] + arr[c3] > 0
					c3 -= 1
				else 
					c2 += 1
				end
			end
	end
	out.sort_by{|x| x[0]}
end

def tap_code(str)
	str = str.upcase
	grid = [["A","B","C/K","D","E"], 
			["F","G","H","I","J"], 
			["L","M","N","O","P"],
			["Q","R","S","T","U"],
			["V","W","X","Y","Z"]]
	out = ""
	if str.include?(".")
		dots = str.split(" ")
		letters = []
		for i in (0..dots.length-1).step(2) do
			letters += [dots[i,2]]
		end
		letters.each do |pair|
			out += grid[pair[0].count(".")-1][pair[1].count(".")-1].tr("/K", "")
		end

	else
		out = []
		str.chars.each do |char|
			for i in (0..grid.length-1) do
				if ((/[ck]/i) === char and i == 0)
					out.push(".", "...")
				elsif grid[i].include?(char)
					out.push("." * (i+1))
					out.push("." * (grid[i].index(char)+1))
				end
			end
		end
		out = out.join(" ")
	end
	out.downcase
end


h1 = { D: 1, B: 2, C: 3}
h2 = { likes: 2, dislikes: 3, followers: 10}

def hash_to_array(hash)
	return *hash
end

def random_burner_taddr()
	head = "t1"
	middle = "burnvotertaddrxdlmaoepic"
	invalids = ["B", "b", "I", "i", "O", "o", "1"]
	# tail = [*("A"),*('C'..'H'),*("J".."N"),*("P".."Z"), *("a"),*('c'..'h'),*("j".."n"),*("p".."z"),*('0'),*("2".."9")]
	tail = [*("A".."Z"),*("a".."z"),*("0".."9")].select{|x| not invalids.include?(x)}.shuffle[0,9].join
	(head + middle + tail)
end

def caesar_cipher(s, k)
	arr = s.chars.map do |char|
		if not (/[a-z]/i) === char
			char
		elsif char == char.downcase
			(((char.ord - 97 + k) % 26) + 97).chr
		else
			(((char.ord - 65 + k) % 26) + 65).chr
		end
	end
	arr.join
end

def set_interval(delay)
	Thread.new do
		loop do
			sleep delay
			yield # call passed block
		end
	end
end


def sum_of_slices(arr)
	s = 0
	e = 0
	out = []
	while e < arr.length-1 do
		while arr[s..e].reduce(0){|sum, x| x + sum} <= 100 and e < arr.length-1 do
			e += 1
		end
		out.push(arr[s..e-1].reduce(0){|sum, x| x + sum})
		s = e
		e += 1
	end
	if out[-1] and out[-1] + arr[-1] <= 100
		out[-1] += arr[-1] 
	else
		out.push(arr[-1])
	end
	out
end

def track_robot(instructions)
	pos = [0,0]
	
	instructions.each do |i|
		i = i.split
		i[1] = i[1].to_i
		if i[0] == "left"
			pos[0] -= i[1]
		elsif i[0] == "right"
			pos[0] += i[1]
		elsif i[0] == "up"
			pos[1] += i[1]
		elsif i[0] == "down"
			pos[1] -= i[1]
		end
	end
	pos
end


def changed_one(str1, str2)
	return false if str1.length != str2.length
	return false if str1 == str2
	for i in (0..str1.length-1) do
		return true if str1[0,i] + str1[i+1,str1.length-1] === str2[0,i] + str2[i+1,str1.length-1]
	end
	false
end

def added_or_removed_one(str1, str2)
	return false if str1.length+1 != str2.length and str1.length-1 != str2.length
	short, long = [str1, str2].sort_by{|x| x.length}
	for i in (0..long.length-1 ) do
		return true if long[0,i] + long[i+1, str1.length] === short
	end
	false
end


def valid_pair(str1, str2)
	return false if changed_one(str1, str2) and added_or_removed_one(str1,str2)
	return true if changed_one(str1, str2) or added_or_removed_one(str1,str2)
	false
end

def is_word_chain(arr)
	for i in (0..arr.length-2) do
		return false if not valid_pair(arr[i], arr[i+1])
	end
	true

end




def split(str)
	stack = []
	out = []
	entry = ""
	str.chars.each do |char|
		if char == "("
			entry += char
			stack.push(char)
		elsif char == ")"
			entry += char
			stack.pop()
			if stack.length == 0
				out.push(entry)
				entry = ""
			end
		end
		
	end
	out
end
def widen_streets(arr, n)
	arr.map{|x| x.gsub("   ", " @ ").split.join(" " * n).tr("@", " ")}
end

def is_slidey(n)
	n = n.to_s.chars.map{|x| x.to_i}
	for i in (0..n.length-2) do
		return false if (n[i] - n[i+1]).abs != 1
	end
	true
end

def can_build(arr)
	for i in 0..arr.length-2 do
		return false if arr[i] != arr[i+1][0,arr[i+1].length-1] and arr[i] != arr[i+1][1,arr[i+1].length-1]
	end
	true
end

puts can_build(['a', 'at', 'ate', 'late', 'plate', 'plates'])