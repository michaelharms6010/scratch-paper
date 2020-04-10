function bucketize(phrase, n) {
    let bucket = ""
    const output = []
    phrase = phrase.split(" ")
    for (let i = 0; i < phrase.length; i++) {
        if (bucket && (bucket + " " + phrase[i]).length <= n) {
            bucket += " " + phrase[i]
        } else if (bucket.length <= n &&(bucket + " " + phrase[i]).length > n) {
            output.push(bucket)
            bucket = phrase[i]
        } else {
            bucket = phrase[i]
        }
        
    }
    
    output.push(bucket)
    return output
}
console.log(bucketize("she sells sea shells by the sea", 2))



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
