var words = ["abel", "jacob", "sungjun", "white", "pobi", "honux"];
var word = words[Math.floor(Math.random() * words.length)];
var guess = [];
for(var i = 0; i < word.length; i++) {
	guess.push("_");
}

var joinedGuess = guess.join(" ");
var remainningLetters = word.length;
var remainningCount = remainningLetters * 3;

function logic() {
	alert("행맨 게임을 해보아요 !!");
	while(true) {
		//플레이어의 현재 진행 상태를 보여준다.
		alert("단어 : " + joinedGuess +"\n "+"\n "+"남은 알파벳 : " + remainningLetters + "  남은 횟수 : " + remainningCount);
		//플레이어가 추측한 글자를 가져온다.
		var playersAlpabet = prompt("글자를 입력해 주세요! 취소를 누르시면 게임이 종료 됩니다.").toLowerCase();
		console.log(playersAlpabet);
		if (playersAlpabet === null){
			break;
		} else if (playersAlpabet.length !== 1) {
			alert("한 글자만 입력해 주세요!");
		} else if (word.indexOf(playersAlpabet) !== -1) {
			//word의 원소 하나하나를 비교하면서, 만약 플레이어가 선택한 알파벳과 같다면 guess 배열에 추가해주기
			for(var i = 0; i < word.length ; i++ ) {
				if (word[i] === playersAlpabet) {
					if(guess[i] !== "_") {
						continue;
					}
					guess[i] = word[i];
					joinedGuess = guess.join(" ");
					remainningLetters -= 1 ;
					
				}
				if (remainningLetters === 0) {
					alert("축하합니다! 정답은 " + word + " 입니다!");
					return;
				}
			}
		}
		remainningCount -= 1;
		if(remainningCount === 0) {
			alert("GAME OVER");
			return;
		}
	}	
}
logic();
