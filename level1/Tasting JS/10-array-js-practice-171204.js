// var a = [];
// for (var i = 0; i < 10; i++) {
// 	a.push(i * 2);
// }
// console.log(a);

// 3. 순서대로 출력
// var arr = [];
// for (var i = 1; i <= 100; i++) {
// 	arr.push(i);
// 	console.log(arr[i-1]);
// }

//4.거꾸로 출력
var arr2 = [];
for (var i = 1; i<=100; i++) {
	arr2.push(i);
}
for (var i = 1; i<=100; i++) {
	console.log(arr2[100-i]);
}

