/*
게임 설계하기
1. 메시지를 보여줄 곳과 보물 지도 이미지가 있는 웹 페이지를 만듭니다.
   플레이어는 메시지를 보고 얼마나 보물에 가까워졌는지 알 수 있습니다.
2. 지도 이미지에서 아무 위치나 고릅니다. 보물이 숨겨져있는 위치가 됩니다.
3. 클릭 핸들러를 만듭니다. 플레이어가 지도를 클릭할 때마다 
   클릭 핸들러는 다음과 같이 동작합니다.
   a. 클릭 횟수를 세는 클릭 카운터에 1을 더한다.
   b. 보물이 묻혀있는 곳으로부터 얼마나 멀리 떨어졌는지 계산한다.
   c. 떨어진 거리를 알려주는 메시지를 웹 페이지에 표시한다.
   d. 플레이어가 보물을 클릭했거나 매우 근접한 위치를 클릭했다면 축하 메시지와 함께
      보물을 찾기까지 클릭한 횟수를 보여준다.
*/

//무작위 숫자 고르기
var getRandomNumber = function(size) {
	return Math.floor(Math.random() * size);
};

//보물 좌표 설정하기
var width = 400;
var height = 400;

var target = {
	x : getRandomNumber(width),
	y : getRandomNumber(height)
};

console.log(target);

//클릭 핸들러
var clicks = 0;
$("#map").click(function(event){
	clicks++

	//클릭한 위치에서 보물까지의 거리 계산하기
	var getDistance = function(event, target) {
		var diffX = event.offsetX - target.x;
		var diffY = event.offsetY - target.y;
		return Math.sqrt((diffX * diffX) + (diffY * diffY));
	};
	console.log(event.offsetX, event.offsetY);

	//플레이어에게 얼마나 가까운지 말해주기
	var getDistanceHint = function(distance) {
		if(distance < 10) {
			return "바로 앞이에요!";
		} else if(distance < 20) {
			return "정말 가까워요!";
		} else if(distance < 40) {
			return "가까워요";
		} else if(distance < 80) {
			return "멀지는 않아요";
		} else if(distance < 160) {
			return "멀어요";
		} else if(distance < 320) {
			return "꽤 멀어요";
		} else {
			return "너~~~~무 멀어요!";
		}
	};

	var distance = getDistance(event, target);
	var distanceHint = getDistanceHint(distance);

	$("#distance").text(distanceHint);
});

