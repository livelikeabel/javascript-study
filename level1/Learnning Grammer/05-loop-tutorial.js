// 해결 해야 할 것
// 사용자가 입력한 숫자들을 볼 수 있는 기록 기능
// 메소드로 쪼개

console.log("숫자 맞추기 게임");

var randomNumber  = Math.floor(Math.random()*100+1); //1~100까지의 랜덤수가 나오긴 함 ㅇㅇ 근데 좋은 방법일까?
console.log(randomNumber);

var count = 0;
while (true) {
	var userNumber = prompt("1~100 까지의 숫자 1개를 입력해 주세요");
	//console.log(userNumber);
	count += 1;
	console.log("입력한 숫자 : " + userNumber);
	document.write("입력한 숫자 : " + userNumber + "</br>");

	if (randomNumber == userNumber) { // === 는 값뿐 아니라, 타입까지 체크하느냐 이다.
		alert("숫자를 맞추었습니다!");
		document.write( count + "번 시도 하였습니다.");
		break;
	} else {
		alert("다시 시도하세요");
	}	
}