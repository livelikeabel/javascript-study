/*
lastIndexOf 
1. 뒤에서 부터 순차적으로 찾음 
2. 값이 있는 위치의 index번호를 return해줌
3. 값이 없을 경우에는 -1을 리턴함
*/
function myLastIndexOf(arr, x) {
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i] === x) {
			return i;
		}
	}
	return -1;
}

//test
var arr1 = [1, 2, 3, 4, 2, 5];

console.log(myLastIndexOf(arr1, 2) === 4); 
console.log(myLastIndexOf(arr1, 234234) === -1);