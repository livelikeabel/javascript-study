const phoneBook = [
  {
    id: 1,
    name: 'Yong',
    phone: '010-0000-0000',
    type: 'sk',
    childnode: [
      {
        id: 11,
        name: 'echo',
        phone: '010-0000-1111',
        type: 'kt',
        childnode: [
          {
            id: 115,
            name: 'hary',
            phone: '211-1111-0000',
            type: 'sk',
            childnode: [
              {
                id: 1159,
                name: 'pobi',
                phone: '010-444-000',
                type: 'kt',
                childnode: [
                  {
                    id: 11592,
                    name: 'cherry',
                    phone: '111-222-0000',
                    type: 'lg',
                    childnode: []
                  },
                  {
                    id: 11595,
                    name: 'solvin',
                    phone: '010-000-3333',
                    type: 'sk',
                    childnode: []
                  }
                ]
              }
            ]
          },
          {
            id: 116,
            name: 'kim',
            phone: '444-111-0200',
            type: 'kt',
            childnode: [
              {
                id: 1168,
                name: 'hani',
                phone: '010-222-0000',
                type: 'sk',
                childnode: [
                  {
                    id: 11689,
                    name: 'ho',
                    phone: '010-000-0000',
                    type: 'kt',
                    childnode: [
                      {
                        id: 116890,
                        name: 'wonsuk',
                        phone: '010-000-0000',
                        type: 'kt',
                        childnode: []
                      },
                      {
                        id: 1168901,
                        name: 'chulsu',
                        phone: '010-0000-0000',
                        type: 'sk',
                        childnode: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 117,
            name: 'hong',
            phone: '010-0000-0000',
            type: 'lg',
            childnode: []
          }
        ]
      }
    ]
  }
]

// type이 sk인, name으로 구성된 배열만 출력해본다.
// ["Yong", "hary", "solvin", "hani", "chulsu"]

// 객체를 탐색한다.
// 1. 배열을 돈다.
// 2. 배열의 요소인 객체가 가지고 있는 type이 sk 이면 name 값을 array에 넣는다.
// 3. 배열의 요소인 객체가 가지고 있는 childnode 배열의 length가 있다면, 재귀

const MOBILE_TYPE = 'sk'

const getMobileServiceMember = (phoneInfoList, mobileServiceMembers = []) => {
  phoneInfoList.forEach(phoneInfo => {
    if (phoneInfo.type === MOBILE_TYPE) mobileServiceMembers.push(phoneInfo.name)
    if (phoneInfo.childnode.length) {
      getMobileServiceMember(phoneInfo.childnode, mobileServiceMembers)
    }
  })

  return mobileServiceMembers
}

console.log(getMobileServiceMember(phoneBook))