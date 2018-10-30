//회원 목록 중 특정 나이의 회원들만 뽑거나 특정 조건의 회원 한 명을 찾는 코드
var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 }
]

function filter(list, predicate) {
  var new_list = []
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i])
  }
  return new_list
}

function map(list, iteratee) {
  var new_list = []
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]))
  }
  return new_list
}

const users_under_30 = filter(users, user => user.age < 30)
console.log(users_under_30.length)

const ages = map(users_under_30, user => user.age)
console.log(ages)

const users_over_30 = filter(users, user => user.age >= 30)
console.log(users_over_30.length)

const names = map(users_over_30, user => user.name)
console.log(names)