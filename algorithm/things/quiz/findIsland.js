/*
* 섬 찾기
*
* 2차원 지도를 나타내는 string에서, 섬의 개수가 몇 개인지 찾아주세요!
* 주어진 string에는 다음과 같은 규칙이 있습니다.
*
* - 육지는 '0'으로 나타납니다.
* - 바다는 '.'으로 나타납니다.
* - 2차원 맵의 한 줄(row)은 '\n'으로 나타납니다.
* - 두 개의 '0'이 인접(상/하/좌/우)해있다면, 같은 육지로 생각합니다.
*
* 예를 들어,
* ".0...\n.00..\n....0" 를 입력으로 받는다면,
*
* .0...
* .00..
* ....0
* 로 표현될 수 있습니다. 여기에는 '0'세개로 이루어진 섬 하나와, '0'하나로 이루어진 섬한개, 총 두개의 섬이 있습니다.
*
* ..000.
* ..000.
* ..000.
* .0....
* ..000.
* 여기에는 총 3개의 섬이 있습니다. 여러분은 섬의 개수가 총 몇개인지 함수에서 반환해주면 됩니다!
*
* @param {string} mapString
* @return {number}
*/

function findIsland(str) {
  console.log(str.split('\n').map(row => row.split('')))
  const map = str.split('\n').map(row => row.split(''))
  /* 1. 하나씩 돈다. o
  *  2. 0 이면 우하를 확인한다.
  *  3. 우하에 0이 없으면 섬++ , 섬 지우기
  *  4. 우하에 0이 있으면 2번으로 돌아가기
  *  5. 다음 loop
  */
  let num;
  let flag = false
  map.forEach((row, y, arr) => {
    row.forEach((v, x, _arr) => {
      const curr = map[y][x];
      if (curr == 0) {        
        // 오른쪽에 있을때
        if (map[y][x + 1] == 0) {
          flag = true;
          
          //아래쪽
        } else if (map[y + 1][x] == 0) {

        } else {
          // 섬 ++
          num ++;
        }
        v = '.';
      }
    })
  })
  return 2
}


console.log(findIsland('.0...\n.00..\n....0'))
// console.log(findIsland('..000.\n..000.\n..000.\n.0....\n..000.'))

module.exports = findIsland;