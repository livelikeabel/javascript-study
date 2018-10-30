function addMaker(a) {
  return function(b) {
    return a + b
  }
}

console.log(addMaker(10)(5))

const add5 = addMaker(5)
console.log(add5(2))
console.log(add5(4))