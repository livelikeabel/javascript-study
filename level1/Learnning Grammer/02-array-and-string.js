// var scores = [50, 60, 70];
// console.log(scores[0]);
// console.log(scores[3]);//undefined
// var titles = ['국어', 'cs', 101];
// console.log(typeof(titles));
// console.log(typeof(titles[0]));
// console.log(typeof(titles[2]));
// console.log(typeof(titles[100]));



// //문제
// a = [1,2,32,3,23,2,31,34,21,34,123,4,2314,12,43]
// //길이를 알 수 없는 배열의 마지막 원소를 읽어 오려면?
// console.log(a[a.length - 1]);
// console.log(a.pop());



//문자열과 배열
/*
문자열과 배열은 상당히 비슷함
문자열 : Immutable
배열 : Mutable
배열의 프로퍼티나 메소드를 문자열에도 테스트 해보자
*/

// var a = [];
// console.log(a);
// a[0] = 1;
// a[1] = 2;
// a[2] = 3;
// a[100] = 100;
// a[0] = -1;
// console.log(a);//[ -1, 2, 3, <97 empty items>, 100 ]

//배열 프로퍼티
// var a = [1, 2, 3];
// console.log(a.length);
// console.log(a[a.length]);//undefined


//연습문제
// var append = function(array, data) {
// 	array[array.length] = data
// 	return array
// }
// a = [1,2,3,4,5]

// console.log(append(a,123));


//그냥 한 번 보기
// var a = [1, 2, 3];

// Array.prototype.append = function(data) {
// 	this[this.length] = data;
// }

// a.append(4);
// console.log(a);




//배열의 메소드들
/*
push(), pop()
- 스택처럼 동작하는데 사용
- 스택이란?
*/
//연습문제 - pop()구현
// var pop = function() {
// 	Array.length
// } 모르겠어 ㅠㅠㅠㅠㅠ

// pop() -  배열의 마지막 아이템을 제거한다.
// var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
// var pop = fruits.pop();
// console.log(pop);
// console.log(fruits);












