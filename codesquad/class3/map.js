var datas = [{title : "hello",content : "간지철철",price : 12000},
            {title : "jk",content : "정말비싼상품", price : 50},
            {title : "crong",content : "괜춘한 상품",price : 550},
            {title : "codesquad",content : "쩌는상품",price : 1200}];

const myfilter = data => data.price > 999
const myMap = data => ({ ...data, price: data.price + '원' })

// 2번째 방법 : object assign 사용
//const myMap = data => Object.assign({}, data, {price: data.price + '원'})

// 3번째 방법 : 크롱이 하라고 하신대로...
// const myMap = data => {
//   data.price = data.price + '원'
//   return data
// }

const filteredDatas = datas.filter(myfilter).map(myMap);



console.log(filteredDatas)
console.log(filteredDatas === datas)