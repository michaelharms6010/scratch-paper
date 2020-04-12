function getSubsets(arr, num) {
	let counter = [1];
	for (let i = 0; i < num; i++) {
		counter.push(0);
	}
	for ( let i = 0; i < arr.length; i++) {
		for(let j = num - arr[i]; j > -1 ; j--) {
			if (counter[j]) {
        counter[j + arr[i]] += counter[j]
        console.log(counter)
			}
		}
	}
	return counter[num]
}

console.log(getSubsets([1,2,3,4,5,6], 9))


function iqr(arr) {
  let leftSide, rightSide = [];
  arr = arr.sort((a,b) => a-b)
  if (arr.length % 2 === 1) {
    leftSide = arr.slice(0, Math.floor(arr.length / 2))
    rightSide = arr.slice(Math.ceil(arr.length / 2), arr.length)
    console.log(leftSide, rightSide)
    return (getMedian(rightSide) - getMedian(leftSide))
	} else {
    leftSide = arr.slice(0, arr.length /2)
    rightSide = arr.slice(arr.length / 2, arr.length)
    
    return (getMedian(rightSide) - getMedian(leftSide))
  }
}

function getMedian(arr) {
	if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)]
	} else {
    console.log()
    return (arr[arr.length/2] + arr[arr.length/2 - 1]) /2
  }
}
console.log(iqr([-3.1, -3.8, -14, 23, 0]))


function isGoalScored(goal) {
	goal.map(item => {
	let sides = item[0].split("0")
	let left = sides[0]
	let right = sides[1]
	if (sides.length > 1) {
		console.log(left, right)
		if (left.includes("#") && right.includes("#")) return true
	}

	})
	return false
}

function barChart(results) {
	let resultArr = []
	for (key in results) {
		let str = ""
		for (let i = 0 ; i < results[key]; i+= 50 ) {
			str += "#"
    } 
    if (str) str += " "
		
		resultArr.push({quarter: key, amount: results[key], graph: str })
  }
  
  resultArr = resultArr.sort((a,b) => Number(a.quarter[1]) - Number(b.quarter[1])).sort((a,b) => b.amount - a.amount)
  // console.log(resultArr)
  resultArr = resultArr.map(item => `${item.quarter}|${item.graph}${item.amount}`)
  return resultArr.join("\n")
}



function isPrime(n){
    if (n===2 || n===3) return true
    if (n%2 === 0 || n<2) return false
    for (let i=3;i < Math.sqrt(n) +1; i+= 2) { 
        if (n % i === 0) {
            return false  
        }  
	}
    return true
}




function interprime(n) {
	const primes = []

	for (let i = 1; i < n * 2; i++) {
		if (isPrime(i)) {
			primes.push(i)
		}
    }
    for (let i = 1; i < primes.length; i++) {
        if (primes[i] - n === Math.abs(primes[i-1] -n)) return [primes[i-1], primes[i]]
    }
    
    return []
}

function navigate(roads, startingNode, endingNode) {
	let edges = roads.graph.edges;
    const paths = [];
    const finishedPaths = []
	let path = null;
	paths.push({distance: 0, path: [startingNode]});
	while (paths.length > 0) {
        path = paths.pop();
        if ( path.path[path.path.length -1] === endingNode) {
            finishedPaths.push(path)
        } else {
            edges.forEach(item => {
                // console.log(item)
                if (item.source === path.path[path.path.length -1]) {
                    if (!path.path.includes(item.target)) {
                        paths.push({
                            path: [...path.path, item.target],
                            distance: path.distance + item.metadata.distance })
                    }
                } if (item.target === path.path[path.path.length -1]) {
                    if (!path.path.includes(item.source)) {
                        paths.push({
                            path: [...path.path, item.source],
                            distance: path.distance + item.metadata.distance })
                    }
                }
            })
        }
    }
	const shortest = finishedPaths.sort((a,b) => a.distance - b.distance)[0]
	return shortest
}

const graph = JSON.parse(`
{
  "directed": false,
  "nodes": [
    { "id": 0 },
    { "id": 1 },
    { "id": 2 },
    { "id": 3 },
    { "id": 4 },
    { "id": 5 },
    { "id": 6 },
    { "id": 7 },
    { "id": 8 },
    { "id": 9 }
  ],
  "edges": [
    {
      "source": 1,
      "target": 6,
      "label": "Oak Street",
      "metadata": {
        "distance": 5
      }
    },
    {
      "source": 6,
      "target": 8,
      "label": "Oak Street",
      "metadata": {
        "distance": 6
      }
    },
    {
      "source": 8,
      "target": 9,
      "label": "Oak Street",
      "metadata": {
        "distance": 11
      }
    },
    {
      "source": 8,
      "target": 7,
      "label": "Robin Way",
      "metadata": {
        "distance": 3
      }
    },
    {
      "source": 7,
      "target": 4,
      "label": "Robin Way",
      "metadata": {
        "distance": 5
      }
    },
    {
      "source": 6,
      "target": 7,
      "label": "Mountain Road",
      "metadata": {
        "distance": 8
      }
    },
    {
      "source": 7,
      "target": 9,
      "label": "Mountain Road",
      "metadata": {
        "distance": 9
      }
    },
    {
      "source": 4,
      "target": 3,
      "label": "National Street",
      "metadata": {
        "distance": 6
      }
    },
    {
      "source": 1,
      "target": 0,
      "label": "Sunrise Drive",
      "metadata": {
        "distance": 4
      }
    },
    {
      "source": 0,
      "target": 3,
      "label": "Short Street",
      "metadata": {
        "distance": 3
      }
    },
    {
      "source": 5,
      "target": 4,
      "label": "Rickety Creek",
      "metadata": {
        "distance": 7
      }
    },
    {
      "source": 4,
      "target": 0,
      "label": "Rickety Creek",
      "metadata": {
        "distance": 5
      }
    },
    {
      "source": 9,
      "target": 5,
      "label": "Uphill Grove",
      "metadata": {
        "distance": 6
      }
    },
    {
      "source": 5,
      "target": 2,
      "label": "Uphill Grove",
      "metadata": {
        "distance": 5
      }
    },
    {
      "source": 2,
      "target": 3,
      "label": "Uphill Grove",
      "metadata": {
        "distance": 7
      }
    }
  ]
}
`);
const roads = {
  graph,
};

const arr = ["mike", "nina", "jerry", "george","elaine","kramer"]

// const capitalized = arr.map(name => name.toUpperCase())

// console.log(capitalized)

// const containsI = arr.filter(name => name.includes("i"))

// console.log(containsI)




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
