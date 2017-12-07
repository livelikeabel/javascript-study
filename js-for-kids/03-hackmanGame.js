//임의의 단어 고르기
var words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
];

var word = words[Math.floor(Math.random() *words.length)];

//정답 배열 만들기
var answerArray = [];
for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

var remainingLetters = word.length;

//게임 반복문 코딩
while (remainingLetters > 0) {
	//플레이어의 상태 보여주기
	alert(answerArray.join(" "));	
	//플레이어의 입력 다루기
	var guess = prompt("글자를 입력하세요. 취소를 누르면 게임이 종료됩니다.");
	if (guess == null) {
		break;
	} else if (guess.length !== 1) {
		alert("한 글자만 입력해주세요.");
	} else {
		// 입력한 글자를 사용해 게임 상태 업데이트
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}
	
}
//게임 종료하기
alert(answerArray.join(" "));
alert("잘하셨어요! 정답은" + word + "입니다.");








