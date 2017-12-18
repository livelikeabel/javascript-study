// 1.임의의 단어를 고른다. 오키
// 2.플레이어가 추측한 글자를 가져온다. 오키
// 3.플레이어가 원하면 게임을 종료한다. 반만 오키
// 4.플레이어가 추측한 글자가 올바른 글자인지 확인한다.
//	 4-1. 확인하고, 맞으면 넣어준다(플레이어가 맞추는 _ _ _ _  요런 거에? ㅋㅋ).
// 5.플레이어가 추측한 글자를 계속 확인한다.
// 6.플레이어에게 현재 진행 상황을 보여준다.
// 7.플레이어가 단어를 맞췄으면 게임을 종료한다.

var words = ["abel", "jacob", "green", "codesquad", "cup", "chocolate"];

function selectWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}//return ex) "abel" 문자열인데 배열처럼 탐색 가능함. index 접근도 가능

function bringPlayersAlpabet() {
	var playersAlpabet = prompt("글자를 입력해 주세요 / 취소를 누르면 게임이 종료 됩니다.");//대문자를 소문자로 바꿔주는 기능 넣기
	if (playersAlpabet === null) {
		return "게임을 종료합니다.";
	}

	return playersAlpabet;//알파벳 1개를 리턴함
}

//
function compare(selectedWord, playersAlpabet) {
	var idx = selectedWord.indexOf(playersAlpabet); // 올바른 글자인지 확인함. 근데 옳바른게 2개있으면 어떻게 결과가 나오지?
	if(idx !== -1) {
		var correctAlpabet = selectedWord[idx];
	}

	alert(idx);
	alert(correctAlpabet);
}

function compare2(selectedWord, playersAlpabet) {

	for(var i = 0; i < selectedWord; i++) {
		if(selectedWord[i]	=== playersAlpabet) {
			guessWordsArr[i] = playersAlpabet;
		}
	}
	return guessWordsArr;
}

function guessWords(selectedWord) {
	var arr = [];
	for(var i = 0; i < selectedWord.length; i ++ ) {
		arr.push('_');
	}
	//var joinedArr = arr.join(' ');
	return arr;
}

var selectedWord = selectWord(words); // 반복되면 안됨. 선택된 단어임.
var guessWordsArr = guessWords(selectedWord);//array

console.log(selectedWord);
console.log(guessWords(selectedWord));
for(var i = 0; i < 3; i++) {
	var playersAlpabet = bringPlayersAlpabet();
	compare2(selectedWord, playersAlpabet);	
};
// console.log(guessWordsArr);
