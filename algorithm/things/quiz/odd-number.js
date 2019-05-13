// 주어진 배열에서, 홀수 번 나타나는 정수를 찾아주세요. 단, 홀수 번 나타나는 정수는 항상 한개뿐입니다.
// * 예를들어, [1, 1, 1, 1, 10] 에서 1은 4번 나타나고, 10은 1번 나타나므로, 홀수 번 나타나는 정수는 10 입니다.


function findOddInt(arr) {
  const resultObj = arr.reduce((acc, v) => {
    acc[v] ? acc[v] += 1 : acc[v] = 1
    return acc;
  }, {});
  return +Object.keys(resultObj).filter(v => resultObj[v] % 2 === 1)[0]
}

console.log(findOddInt([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) // 5;
console.log(findOddInt([9])) //9;
console.log(findOddInt([1, 1, 1, 1, 1, 1, 3, 3, 3])) //3;
