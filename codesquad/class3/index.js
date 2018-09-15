const crong = [
  { name: 'jk', phoneNumber: '010-111-1111' },
  { name: 'honux', phoneNumber: '010-222-2222' },
  { name: 'crong', phoneNumber: '010-333-3333' }
]

const newCrong = Object.assign([...crong], {
  2: Object.assign({}, crong[2], { phoneNumber: '010-3333-4432' })
})

console.log(newCrong)
