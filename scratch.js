const assert = require("assert")

// edabit challenges

function makeTitle(str) {
	let arr = str.split(" ")
	arr = arr.map(item => item[0].toUpperCase() + item.substr(1))
	return arr.join(" ")
}

function findFrequent(arr) {
  const nums = "0123456789"
  const bools= ["true", "false"]
	const hash = {}
	for (let i = 0; i < arr.length; i ++) {
		let key = String(arr[i])
		if (hash[key]) {
			hash[key] +=1
		} else {
			hash[key] = 1
		}
  }
  let max = Math.max(...Object.values(hash))
  let output = Object.keys(hash).find(key => hash[key] === max)
  if (nums.includes(output)) {
    return Number(output)
  }
  if (bools.includes(output)) {
    if (output === "false") {
      return false
    }
    return Boolean(output)
  } if (output === "null") {
    return null
  } if (output === "undefined") {
    return undefined
  }
  return output
}

function harshad(num) {
  if (!isHarshad(num)) return [0,0]
  let lower = num;
  let upper = num;
  while (isHarshad(lower)) {
    lower -= 1
  }
  lower += 1
  while (isHarshad(upper)) {
    upper += 1
  }
  upper -= 1
  let length = upper -lower +1
  let pos = num-lower +1
  return [length, pos]

  function isHarshad(num) {
    return num % String(num).split("").map(item => Number(item)).reduce((a,b) => a + b, 0) ===0
  }
}

function sigilize(desire) {
  const vowels = "aeoiu "
  output = []
	desire = desire.toLowerCase()
	for (let i =0 ; i < vowels.length; i++) {
		desire = desire.split(vowels[i]).join("")
  }
  for (let i = desire.length-1; i >=0; i--) {
    if (!output.includes(desire[i])) {
      output.unshift(desire[i])
    }
  }
	return output.join("").toUpperCase()
}

function getNextPosition(p1, p2, dist) {
  let distx = Math.abs(p2.x - p1.x);
  let disty = Math.abs(p2.y - p1.y);
  let distbetween = (distx **2 + disty **2) ** .5;
  let cos = disty / distbetween;
  let sin = distx / distbetween;
  let ty = Math.round(cos * dist)
  let tx = Math.round(sin * dist)
  if (p2.x < p1.x) tx *= -1
  return {x: p1.x + tx,y: p1.y + ty}
}

function isFullHouse(hand) {
	let hash = {}
	for (let i = 0 ; i < hand.length; i++) {
		if (hash[hand[i]]) {
			hash[hand[i]] += 1
		} else {
			hash[hand[i]] = 1
		}
  }
	return Object.values(hash).includes(3) && Object.values(hash).includes(2)
}

function diceRange(str) {
  let numDice = Number(str.split("d")[0])
  let faces, modifier;
  if (str.includes("+")) {
	  [faces, modifier] = str.split("d").slice(1).join("").split("+").map(item => Number(item))
  } else if (str.includes("-")) {
    [faces, modifier] = str.split("d").slice(1).join("").split("-").map(item => Number(item)) 
    modifier *= -1
  } else {
    faces = Number(str.split("d")[1])
    modifier = 0
  }
  if (str[0] === "d") {
    numDice = 1
  }
  let minimum = 1 * numDice + modifier 
	let maximum = faces * numDice + modifier
	return [minimum, maximum]
}

function canExit(arr) {
	let start = [0,0];
  let exit = [arr.length-1, arr[0].length-1]
  stack = []
  if (arr[exit[0]][exit-1] === 1) return false
  stack.push(start);
  while (stack.length) {
    [currow, curcol] = stack.pop();
    arr[currow][curcol] = 1;
    if (arr[currow+1] && arr[currow+1][curcol] == 0) {
      stack.push([currow +1, curcol])
    }
    if (arr[currow-1] && arr[currow-1][curcol] == 0) {
      stack.push([currow -1, curcol])
    }
    if (arr[currow][curcol+1] == 0) {
      stack.push([currow, curcol+1])
    }
    if (arr[currow][curcol-1] == 0) {
      stack.push([currow, curcol-1])
    }
    if (currow === exit[0] && curcol === exit[1]) return true
  }
  return false
}

assert.equal(canExit([
	[0, 1, 1, 1, 1, 1, 1], 
	[0, 0, 1, 1, 0, 1, 1], 
	[1, 0, 0, 0, 0, 1, 1], 
	[1, 1, 1, 1, 0, 0, 1], 
	[1, 1, 1, 1, 1, 0, 0]
]), true)

assert.equal(canExit([
	[0, 1, 1, 1, 1, 1, 1], 
	[0, 0, 1, 0, 0, 1, 1], 
	[1, 0, 0, 0, 0, 1, 1], 
	[1, 1, 0, 1, 0, 0, 1], 
	[1, 1, 0, 0, 1, 1, 1]
]), false)

assert.equal(canExit([
	[0, 1, 1, 1, 1, 0, 0], 
	[0, 0, 0, 0, 1, 0, 0], 
	[1, 1, 1, 0, 0, 0, 0], 
	[1, 1, 1, 1, 1, 1, 0], 
	[1, 1, 1, 1, 1, 1, 1]
]), false)

assert.equal(canExit([
	[0, 1, 1, 1, 1, 0, 0], 
	[0, 0, 0, 0, 1, 0, 0], 
	[1, 1, 1, 0, 0, 0, 0], 
	[1, 0, 0, 0, 1, 1, 0], 
	[1, 1, 1, 1, 1, 1, 0]
]), true)

assert.equal(canExit([
	[0, 1, 1, 1, 1, 0, 0], 
	[0, 0, 0, 0, 1, 0, 0], 
	[1, 1, 1, 0, 0, 0, 0], 
	[1, 0, 0, 0, 0, 1, 1], 
	[1, 1, 1, 1, 0, 0, 0]
]), true)

assert.equal(canExit([
	[0, 1, 1, 1, 1, 0, 1], 
	[0, 0, 0, 0, 1, 0, 1], 
	[1, 1, 1, 0, 0, 0, 1], 
	[1, 0, 0, 0, 0, 1, 1], 
	[1, 1, 1, 1, 0, 1, 1]
]), false)

assert.equal(canExit([
	[0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 1, 0, 0], 
	[1, 1, 1, 0, 0, 0, 0], 
	[1, 0, 0, 0, 0, 1, 0], 
	[1, 1, 1, 1, 0, 1, 0]
]), true)

assert.equal(canExit([
	[0, 0, 0, 0, 0, 0, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 0, 0, 0, 0, 0, 1]
]), false)

assert.equal(canExit([
	[0, 0, 1, 1, 1, 1, 1], 
	[1, 0, 0, 1, 1, 1, 1], 
	[1, 1, 0, 0, 1, 1, 1], 
	[1, 1, 1, 0, 0, 0, 0], 
	[1, 1, 1, 1, 1, 1, 0]
]), true)

// More False Tests
assert.equal(canExit([
	[0, 0, 0, 0, 0, 0, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 1, 1], 
	[0, 0, 0, 0, 0, 1, 0]
]), false)

assert.equal(canExit([
	[0, 1, 0, 0, 0, 0, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 1, 0], 
	[0, 0, 0, 0, 0, 1, 0]
]), false)

function canEnterCave(x) {
  let start = findStart(x);
  let stack = [];
  stack.push(start);
  while (stack.length) {
    [currow, curcol] = stack.pop();
    x[currow][curcol] = 1;
    if (x[currow+1] && x[currow+1][curcol] == 0) {
      stack.push([currow +1, curcol])
    }
    if (x[currow-1] && x[currow-1][curcol] == 0) {
      stack.push([currow -1, curcol])
    }
    if (x[currow][curcol+1] == 0) {
      stack.push([currow, curcol+1])
    }
    if (x[currow][curcol-1] == 0) {
      stack.push([currow, curcol-1])
    }
  }
  for (let i =0; i< x.length; i++) {
    if (x[i].includes(0)) return false
  }
  return true
}

function findStart(x) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[0].length; j++) {
      if (x[i][j] === 0) return [i,j]
    }
  }
  return null
}

assert.equal(canEnterCave([
  [0, 0, 1, 1, 1, 0, 0, 0], 
  [0, 0, 0, 0, 1, 0, 0, 0], 
  [0, 0, 1, 0, 0, 0, 0, 0], 
  [0, 0, 1, 1, 1, 1, 1, 0]
  ]), true)
  
  assert.equal(canEnterCave([
  [0, 0, 0, 1, 0, 0, 0, 0], 
  [0, 0, 0, 1, 1, 0, 0, 0], 
  [0, 0, 0, 0, 1, 1, 0, 0], 
  [0, 0, 0, 1, 1, 1, 1, 0]
  ]), false)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 0, 1, 1, 0], 
  [0, 0, 1, 1, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 1, 0, 0], 
  [0, 1, 1, 1, 1, 1, 1, 0]
  ]), true)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 0, 1, 1, 0], 
  [0, 0, 1, 1, 0, 0, 0, 0], 
  [0, 0, 0, 1, 0, 1, 0, 0], 
  [0, 1, 1, 1, 1, 1, 1, 0]
  ]), false)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 0, 1, 1, 0], 
  [0, 0, 1, 1, 0, 0, 0, 0], 
  [0, 0, 0, 0, 1, 1, 1, 0], 
  [0, 1, 1, 1, 1, 1, 1, 0]
  ]), false)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 1, 1, 1, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 1, 1, 0], 
  [0, 1, 1, 0, 0, 1, 1, 0]
  ]), true)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 1, 1, 1, 0], 
  [0, 0, 0, 0, 1, 0, 0, 0], 
  [0, 0, 1, 1, 1, 1, 1, 0], 
  [0, 1, 1, 0, 0, 1, 1, 0]
  ]), false)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 1, 1, 1, 0], 
  [0, 1, 0, 0, 1, 0, 0, 0], 
  [0, 0, 1, 0, 1, 1, 1, 0], 
  [0, 1, 1, 0, 0, 1, 1, 0]
  ]), false)
  
  assert.equal(canEnterCave([
  [0, 1, 1, 1, 1, 1, 1, 1], 
  [0, 0, 0, 0, 1, 0, 0, 1], 
  [0, 0, 1, 0, 1, 0, 0, 0], 
  [0, 1, 1, 0, 0, 0, 1, 0]
  ]), true)
  
  assert.equal(canEnterCave([
  [1, 0, 0, 0, 0, 0, 1, 0, 0], 
  [1, 0, 1, 1, 1, 0, 1, 0, 1], 
  [1, 0, 1, 0, 0, 0, 1, 0, 1], 
  [1, 0, 1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 1]
  ]), true)

function canMove(piece, current, target) {
  const colMap = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8
  }

	let [curcol, currow] = current.split("")
  let [tcol, trow] = target.split("")
  
  // set all values to integers for easier checking
  curcol = colMap[curcol]
  currow = Number(currow)
  tcol = colMap[tcol]
  trow = Number(trow)


	switch (piece) {
    case "Pawn":
      if (curcol != tcol) return false
      if (Math.abs(trow - currow) == 1) return true
      if (currow === 2 && trow === 4) return true
      if (currow === 7 && trow === 5) return true
      return false
      break
    case "Rook":
      if (curcol !== tcol && currow !== trow) return false
      if (curcol === tcol && currow === trow) return false
      return true
      break
    case "Bishop":
      if (Math.abs(tcol - curcol) !== Math.abs(trow - currow)) return false
      if (curcol === tcol && currow === trow) return false
      return true
      break
    case "Knight":
      if (Math.abs(tcol - curcol) === 1 && Math.abs(trow - currow) === 2) return true
      if (Math.abs(tcol - curcol) === 2 && Math.abs(trow - currow) === 1) return true
      return false
      break
    
    case "Queen":
      if (Math.abs(tcol - curcol) === Math.abs(trow - currow)) return true
      if (tcol === curcol || trow === currow) return true
      return false
      break
    case "King":
      if (Math.abs(tcol - curcol) <=1 && Math.abs(trow - currow) <=1) return true
      return false
      break

  }
}
assert.equal(canMove("Pawn", "A5", "A6"), true)
assert.equal(canMove("Pawn", "G2", "G4"), true)
assert.equal(canMove("Pawn", "C6", "D7"), false)
assert.equal(canMove("Knight", "F5", "E3"), true)
assert.equal(canMove("Knight", "F6", "E5"), false)
assert.equal(canMove("Bishop", "B4", "E7"), true)
assert.equal(canMove("Bishop", "B6", "F5"), false)
assert.equal(canMove("Rook", "A8", "H8"), true)
assert.equal(canMove("Rook", "A8", "H7"), false)
assert.equal(canMove("Queen", "A8", "H1"), true)
assert.equal(canMove("Queen", "A6", "H4"), false)
assert.equal(canMove("King", "C4", "D5"), true)
assert.equal(canMove("King", "B7", "B5"), false)

function nodeType(n, p, val) {
  let hash = {}
  for (let i =0; i < n.length; i++) {
    if (n[i] === val && p[i] === -1) {
      return "Root"
    }
    hash[n[i]] = {parent: p[i], child: null} 
  }
  for (key in hash) {
    console.log(hash)
    if (hash[key].parent >-1) {
      hash[hash[key].parent].child = key
    }
  }
  if (!hash[val]) {
    return "Not exist"
  } else if (hash[val].parent && hash[val].child) {
    return "Inner"
  } else {
    return "Leaf"
  }
}

function palindromeSieve(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let hash = {}
    let odds = 0
    newNum = String(nums[i])
    for (let j = 0; j < newNum.length; j++) {
      if (hash[newNum[j]]) {
        hash[newNum[j]] += 1
      } else {
        hash[newNum[j]] = 1
      }
    }
    for (key in hash) {
      if (hash[key] % 2 === 1) {
        odds += 1
      }
    }
    if (newNum.length % 2 === 1 && odds <= 1) {
      output.push(nums[i])
    } else if (newNum.length % 2 === 0 && odds === 0) {
      output.push(nums[i])
    } else if (newNum.length < 2) {
      output.push(nums[i])
    }
  }
  return output
}

function canComplete(fragment, word) {
  let f_cursor = 0;
  let w_cursor = 0;
  while (w_cursor < word.length) {
    if (fragment[f_cursor] === word[w_cursor]) {
      f_cursor += 1;
    }
    if (f_cursor === fragment.length) {
      return true
    }
    w_cursor += 1
  }
  return false
}

function edaPlatform(stage, commands) {
  // start the player in the lower left
  let [row, col] = [1,0]
  let score = 0
  let inputs = commands.split("")
  // a queue for moves
  let moves = []
  while (col < stage[0].length) {
    if ((stage[row][col]) === "!") {
      return `Game over! Your score: ${score}!`
    }
    // fall in a pit
    if (row === 1 && stage[row][col] === " ") {
      return `Game over! Your score: ${score}!`
    }
    if (stage[row][col] === "°") {
      score += 25;
    }
    if (stage[row][col] === "%") {
      score += 50;
    }
    if (!moves.length) {
      newCommand = inputs.shift()
      if (newCommand === "J") {
        moves.push([-1,1], [1,1])
      } else if (newCommand === "U") {
        moves.push([-1,0], [1,0])
      } else if (newCommand === "F") {
        moves.push([0,1])
      }
    }
    stage[row][col] = "x"
    newmove = moves.shift();
    if (newmove) {
      row += newmove[0]
      col += newmove[1]
    }
    
  }
  return `Level completed! Your score: ${score}!`
}

function isPandigital(num) {
  num = [...new Set(String(num).split(""))].sort().join("")
	return num.includes("0123456789")
}

function largestIsland(map) {
  const sizes = []
	for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j]) {
        let stack = []
        stack.push([i,j])
        map[i][j] = 0
        let size = 0
        while (stack.length) {
          let point = stack.pop();
          size += 1
          if (map[point[0]+1] && map[point[0]+1][point[1]]) {
            map[point[0]+1][point[1]] = 0
            stack.push([point[0]+1, point[1]]);
          }
          if (map[point[0]+1] && map[point[0]+1][point[1] + 1]) {
            map[point[0]+1][point[1] + 1] = 0
            stack.push([point[0]+1, point[1] + 1]);
          }
          if (map[point[0]+1] && map[point[0]+1][point[1] -1]) {
            map[point[0]+1][point[1] - 1] = 0
            stack.push([point[0]+1, point[1] - 1]);
          }
          if (map[point[0]-1] && map[point[0]-1][point[1]]) {
            map[point[0]-1][point[1]] = 0
            stack.push([point[0]-1, point[1]]);
          }
          if (map[point[0]-1] && map[point[0]-1][point[1] + 1]) {
            map[point[0]-1][point[1] + 1] = 0
            stack.push([point[0]-1, point[1] + 1]);
          }
          if (map[point[0]-1] && map[point[0]-1][point[1] - 1]) {
            map[point[0]-1][point[1] - 1] = 0
            stack.push([point[0]-1, point[1] - 1]);
          }
          if (map[point[0]][point[1]+1]) {
            map[point[0]][point[1]+1] = 0
            stack.push([point[0], point[1]+1]);
          }
          if (map[point[0]][point[1]-1]) {
            map[point[0]][point[1]-1] = 0
            stack.push([point[0], point[1]-1]);
          }
          
        }
        sizes.push(size);
        // do bfs, returning size
        // push size to sizes
      }
    }
  }
  return Math.max(...sizes)
}

function smallest(n) {
  let divisible = true
  
  for (let i = n * n-1 ; i<= factorial(n) ; i+=n) {
    divisible = true;
    for (let j = 1; j <=n; j++) {
      if (i % j !== 0) divisible = false
    }
    if (divisible) {
      return i
    }
  }
}

function factorial(n) {
  total = 1
  for (let i = n; i > 0; i--) {
    total *= i
  }
  return total
}

function hasHiddenFee(prices, t) {
  const total = prices.reduce((a,b) => a + Number(b.replace("$", "")), 0)
  console.log(total, t)
	return `$${total}` !== t
}

function groupingDishes(dishes) {
  let hash = {}
  for (let i = 0; i < dishes.length; i++) {
      let name = dishes[i][0]
      
      for (let j = 1; j < dishes[i].length; j++) {
          if (hash[dishes[i][j]]) {
              hash[dishes[i][j]].push(name)
          } else {
            hash[dishes[i][j]] = [name]
          }
      }

  }
  output = []
  for (key in hash) {
    if (hash[key].length > 1) {
      output.push([key, ...hash[key].sort()])
    }
  }
  return output.sort((a,b) => (a[0].charCodeAt(0) - b[0].charCodeAt(0)))
}

function ulam(n) {
  if (n <=4 ) return n
  let sequence = [1,2];
  let found = [];
  while (sequence.length < n) {
    let max = Math.max(...sequence)
    for (let i = 0; i < sequence.length; i++) {
      for (let j = i+1; j < sequence.length; j++) {
        if (sequence[i] + sequence[j] > max) {
          found.push(sequence[i] + sequence[j])
        }
      }
    }
    let seqlen = sequence.length
    while (sequence.length === seqlen) {
      let smallest = found.shift();
      if (found.includes(smallest)) {
        found = found.filter(item => item != smallest)
      } else if (smallest) {
        sequence.push(smallest)
      }
    }
    found = []
  }
 
  return sequence

}

function getSubsets(arr, num) {
	let counter = [1];
	for (let i = 0; i < num; i++) {
		counter.push(0);
	}
	for ( let i = 0; i < arr.length; i++) {
		for(let j = num - arr[i]; j > -1 ; j--) {
			if (counter[j]) {
        counter[j + arr[i]] += counter[j]
			}
		}
	}
	return counter[num]
}

function iqr(arr) {
  let leftSide, rightSide = [];
  arr = arr.sort((a,b) => a-b)
  if (arr.length % 2 === 1) {
    leftSide = arr.slice(0, Math.floor(arr.length / 2))
    rightSide = arr.slice(Math.ceil(arr.length / 2), arr.length)
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
    return (arr[arr.length/2] + arr[arr.length/2 - 1]) /2
  }
}

function isGoalScored(goal) {
	goal.map(item => {
	let sides = item[0].split("0")
	let left = sides[0]
	let right = sides[1]
	if (sides.length > 1) {
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
