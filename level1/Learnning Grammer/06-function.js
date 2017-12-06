//js의 함수 선언
// var foo = function() {
// 	//code here
// 	console.log("I am function");
// }

// var foo2 = function(name) {
// 	console.log("hello" + name);
// }

// foo2("honux");

//아무 값도 없는 리턴 사용하기
//return으로 함수를 종료하는데 사용할 수 있다.

// var test1 = function(text) {
// 	if (text === "exit") {
// 		console.log("종료 됩니다");
// 		return;
// 	}
// 	console.log("이게 보여요? \nexit라고 입력해요 ㅋㅋㅋ");
// }

// test1("hoho");
// test1("exit");

// call by value
// var foo = function(n) {
// 	n = n * 2;
// 	return n;
// }

// var a = 10;
// var b = foo(a);
// console.log(a);
// console.log(b);

//swap 구현하기    ????
// mySwap = function(n1, n2) {
// 	var arr = [n2, n1];
// 	return arr;
// }

// var a = 5;
// var b = 3;
// console.log(mySwap(a, b));

//call by reference
//나머지 객체의 경우 변수의 참조를 넘깁니다.
// var angel = function(people) {
// 	return people.money *= 2;
// }

// var p1 = {money: 100, name: "Pobi"};

// console.log(angel(p1));


