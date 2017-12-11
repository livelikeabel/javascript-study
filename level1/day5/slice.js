/*
매개변수
stringObj : 필수사항 string 개체 또는 문자열 리터럴 입니다.
start : 필수사항 stringObj에 지정된 부분의 시작을 나타내는 인덱스 입니다.
end : 선택사항 (그러면 메소드 override를 해야하나?)
	  stringObj에 지정된 부분의 끝을 나타내는 인데스이다. 부분 문자열은 end로 표시된 문자 앞까지만 
	  포함한다. 이 값을 지정하지 않을시는 끝까지 부분문자열이 계속 된다
*/
function mySlice(arr, start, end) {
	var ret = "";
	var s_arr = arr.split("");
	for(var i = start; i < end; i++) {
		ret += s_arr[i];
	}
	return ret;
}

// 메소드 오버라이드 가능한가?
// function mySlice(arr, start) {
// 	var ret = "";
// 	var s_arr = arr.split("");
// 	for(var i = start; i < arr.length; i++) {
// 		ret += s_arr[i];
// 	}
// 	return ret;
// }


//test
var str = "all good boys do fine";

//console.log(mySlice(str, 4) === 'good boys do fine');
console.log(mySlice(str, 4, 8) === 'good');
