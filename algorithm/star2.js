// /*
// 4를 입력하면,
// 빈문자열 3개, 별1개

// */
// console.log("  ","*");
// console.log("  ","*");
// console.log("","","**");
// console.log("","***");
// console.log("****");

// function star2(n) {
// 	var ret = "";

// 	for (var i = 0; i < n; i++) {
// 		ret += " "	
// 	}
// 	ret += "*"
	

// 	return ret;
// }

// //console.log(star2(4));
//========


/*
이방법 안됨 ...ㅠㅠㅠㅠ

n에 4를 넣으면, 길이가 4인 배열을 만들어 준다
1번째 반복시, 배열 인덱스 3에 별 1개 넣어준다
줄바꿈
2번째 반복시, 배열 인덱스 3,2에 별 1개씩 넣어준다
줄바꿈
3번째 반복시, 배열 인덱스 3,2,1에 별 1개씩 넣어준다.
줄바꿈
4번째 반복시, 배열 인덱스 3,2,1,0에 별 1개씩 넣어준다.
*/

function star2(n) {
	var ret = [];
	ret.length = n;
	for(var i = n-1; i >= 0; i--) {
		ret[i] = "*";
		console.log(ret.join(""));
		console.log(ret);
	}
	console.log(ret.join(""));
}


star2(4);
