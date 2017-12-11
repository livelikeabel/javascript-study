/*
indexOf 
1. 앞에서 부터 순차적으로 찾음 
2. 값이 있는 위치의 index번호를 return해줌
3. 값이 없을 경우에는 -1을 리턴함
*/
function myIndexOf(arr, x) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === x) {
			return i;
		}
	}
	return -1;
}


//test
var arr1 = [1, 2, 3, 4, 2, 5];

console.log(myIndexOf(arr1, 2) === 1);
console.log(myIndexOf(arr1, arr1[2]) === 2);
console.log(myIndexOf(arr1, 2213) === -1);