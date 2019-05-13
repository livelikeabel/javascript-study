function getZeroOrOne() {
  return Math.floor(Math.random() * 2)
}

function getRandom(n) { 
  let random = 0
  for (let i = 0, length = n - 1; i < length; i++) {
    random += getZeroOrOne()
  }
  return random
}

// 테스트.
console.log(getRandom(5))
// 0 or 1 or 2 or 3 or 4
console.log(getRandom(3))
// 0 or 1 or 2