const arr = ["mike", "nina", "jerry", "george","elaine","kramer"]

// how do i print the name "nina" in the given array?

// how do I get the last item of the array?

// how do I add the string "jimmy" to the end of the array?



const capitalized = arr.map(name => name.toUpperCase())

console.log(capitalized)

const containsI = arr.filter(name => name.includes("i"))

console.log(containsI)




function stripUrlParams(url, paramsToStrip=[]) {
    if (!url.includes("?")) return url
	let output = ""
    let [newurl, query] = url.split("?")
    output += newurl + "?"
    let hash = {}
    queryvars = query.split("&")

    for (let i = 0; i < queryvars.length; i++) {
        let [key, val] = queryvars[i].split("=")
        hash[key] = val
    }
    paramsToStrip.map(item => delete hash[item])
    let newQuery = Object.keys(hash).map(key => `${key}=${hash[key]}`).join("&")
    return output + newQuery
}


const prices = {
	Strawberries: "$1.50", Banana: "$0.50", Mango: "$2.50",
	Blueberries: "$1.00", Raspberries: "$1.00", Apple: "$1.75",
	Pineapple: "$3.50"
}

class Smoothie {
	constructor(ingredients) {
		this.ingredients = ingredients
	}
	getCost() {
			return "$" + this.ingredients.reduce((acc, val) => acc + Number(prices[val].replace("$", "")), 0).toFixed(2)
	}
	getPrice() {
		return "$" + (Number(this.getCost().replace("$", "")) + (Math.round((Number(this.getCost().replace("$", "")) * 1.5) * 100) / 100)).toFixed(2)
    }
    getName() {
        if (this.ingredients.length > 1)
        return this.ingredients.sort().join(" ").split("berries").join("berry") + " Fusion"
        return this.ingredients.sort().join(" ").split("berries").join("berry") + " Smoothie"
    }
	
}

function minPalindromeSteps(str) {
    for (let i = 0; i < str.length; i++) {
        substr = str.slice(0,i)
        if (isPalindrome(str + reverseString(substr))) return i
    }
}

function reverseString(str) {
    return str.split("").reverse().join("")
}

function isPalindrome(str) {
    return str === reverseString(str)
}


function classifyRug(pattern) {
	let vertical = true
	let horizontal = true
	for (y = 0; y < pattern.length ; y++) {
		for (x = 0; x < pattern[0].length; x++) {
            console.log(y, x)
			if (pattern[y][x] !== pattern[pattern.length-1-y][x]) vertical = false
			if (pattern[y][x] !== pattern[y][pattern[0].length-1-x]) horizontal = false
		}
    }
    if (vertical && horizontal) {
        return "perfect"
    } else if (horizontal) {
        return "vertically symmetric"
    } else if (vertical) {
        return "horizontally symmetric"
    } else {
        return "imperfect"
    }
}


function bucketize(phrase, n) {
    let bucket = ""
    const output = []
    phrase = phrase.split(" ")
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i].length > n) return []
        if (bucket && (bucket + " " + phrase[i]).length <= n) {
            bucket += " " + phrase[i]
        } else if ((bucket + " " + phrase[i]).length > n) {
            output.push(bucket)
            bucket = phrase[i]
        } else {
            bucket = phrase[i]
        }
        
    }
    
    output.push(bucket)
    return output
}

function checkPattern(arr, pattern) {
    const hash = {}
	for (let i = 0; i < arr.length; i++) {
        if (hash[pattern[i]]) {
            
            if (!arrayEquals(arr[i], hash[pattern[i]])) return false
        } else {
            hash[pattern[i]] = arr[i]
        }
    }
    let values = Object.values(hash)
    for (let i = 0; i < values.length; i++) {
        for (let j = i+1 ; j < values.length; j++) {
            if (arrayEquals(values[i], values[j])) return false
        }
    }
    return true
}

function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false 
    }
    return true
}

function distanceToNearestVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    const distances = []
    for (let i = 0; i < str.length; i++) {
        let found = false
        let offset = 0
        while (!found) {
            if (vowels.includes(str[i-offset]) || vowels.includes(str[i+offset])) {
                found = true
                distances.push(offset)
            }
            offset += 1
        }
        
    }
    return distances
}




function minSwaps(s1, s2) {
	let count = 0;
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) count += 1
	}
	return count / 2
}

function rootDigit(n) {
	let numarr = String(n).split("").map(item => Number(item))
	while (numarr.length > 1) {
		total = numarr.reduce((acc,val) => acc + val, 0)
		numarr = String(total).split("").map(item => Number(item))
	}
	return numarr[0]
	
}

function getFrame(w,h,symbol) {
    let output = []
    let border = ""
    for (let i = 0; i < w; i++) {
        border += symbol
    }
    let frame = ""
    for (let i = 0; i < w; i++) {
        if (i === 0 || i === w-1) {
            frame += symbol
        } else {
            frame += " "
        }
    }
    output.push([border])
    for (let i = 0; i < h-2; i++) {
        output.push([frame])
    }
    output.push([border])
    return output
    
}
