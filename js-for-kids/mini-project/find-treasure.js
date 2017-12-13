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

//클릭한 위치에서 재연이형 까지의 거리 계산하기
var getDistance = function(event, target) {
var diffX = event.offsetX - target.x;
var diffY = event.offsetY - target.y;
return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//플레이어에게 얼마나 가까운지 말해주기
var getDistanceHint = function(distance) {
	if(distance < 50) {
		return "바로 앞이에요!";
	} else if(distance < 80) {
		return "정말 가까워요!";
	} else if(distance < 120) {
		return "가까워요";
	} else if(distance < 170) {
		return "멀지는 않아요";
	} else if(distance < 350) {
		return "멀어요";
	} else if(distance < 600) {
		return "꽤 멀어요";
	} else {
		return "택도 없어요!";
	}
};

//재연이형 좌표 설정하기
var width = 800;
var height = 800;
var remainClicks = 30;

// 위치를 무작위로 고릅니다.
var target = {
	x : getRandomNumber(width),
	y : getRandomNumber(height)
};
console.log(target);

//img 엘리먼트에 클릭 핸들러를 추가합니다.
$("#map").click(function(event){
	remainClicks--;
	var clicks = 30 - remainClicks;

	// 클릭 event와 target 사이의 거리를 구합니다.
	var distance = getDistance(event, target);
	// 거리를 힌트 문자열로 바꿉니다.
	var distanceHint = getDistanceHint(distance);

	// #distance 엘리먼트에 힌트를 표시합니다.
	$("#distance").text("힌트 : " + distanceHint);

	$("#remainNumber").text("남은 회수 : " + remainClicks);
	//아주 가깝게 클릭했다면 재연이형을 찾았다고 말합니다.
	if(distance < 20) {
		$("body").append('<img id=jimmy" width=400 height=400 src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/10348186_646359805451449_1834013078281579859_n.jpg?oh=870664ad949a8ffd10d293f3e73bc23d&oe=5ABDE017">');
		$("#map").append('<img width=50 height=50 src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/10348186_646359805451449_1834013078281579859_n.jpg?oh=870664ad949a8ffd10d293f3e73bc23d&oe=5ABDE017">');
		//alert(remainClicks + "번 클릭해서 재연이형을 찾았습니다!");
		$("#remainNumber").text(clicks + "번 클릭해서 재연이형을 찾았습니다!");
	}
	//30번 클릭하면 게임오버
	if(remainClicks == 0) {
		alert("GAME OVER");
	}
	console.log(distance);
	console.log(event.offsetX, event.offsetY);
});

// //돋보기
// $("#map").mousemove(function(event) {
// 	$("#finder").offset({
// 		left: event.pageX,
// 		top: event.pageY
// 	});
// });

