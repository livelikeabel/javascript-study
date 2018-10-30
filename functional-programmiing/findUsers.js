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

var temp_users = []
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) temp_users.push(users[i])
}
console.log(temp_users.length)

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age)
}
console.log(ages);

var temp_users = [];
for (var i = 0, len = users.length; i < len; i ++) {
  if (users[i].age >= 30) temp_users.push(users[i])
}
console.log(temp_users.length)

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  names.push(temp_users[i].name)
}
console.log(names)