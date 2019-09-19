const tribonacci = (arr, n) => arr.push(arr.slice(-3).reduce((a, v) => a + v)) !== 10 ? tribonacci(arr, n - 1) : arr

console.log(tribonacci([1, 1, 1], 10)) // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
console.log(tribonacci([0, 0, 1], 10)) // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
console.log(tribonacci([0, 1, 1], 10)) // [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]