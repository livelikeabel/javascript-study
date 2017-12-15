var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 100;//전역변수 x
var y = 100;
var fillStyleColor = "Gold";

//setInterval 사용법이, 함수 이름을 안쓰고, 함수를 바로 넣는 방법이 있네..
setInterval(function() {
	ctx.clearRect(0, 0, 200, 200); //화면 초기화

	drawBee(x, y, fillStyleColor);//벌 그려주기
	x = update(x);//x의 값을 바꿔줌
	y = update(y);
	
	ctx.strokeRect(0, 0, 200, 200);// 캔버스의 외곽선 그리기
}, 30);

function circle(x, y, radius, fillCircle) { //fillCircle이 true 이면, 색채워지고, false이면, 외곽선만.
	ctx.beginPath();//what??? 그림 그리기 시작인가? = 경로를 그리겠다고 캔버스에게 알리는 것.
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);//arc는 원을 그리는 함수이다. x는 원의 중심의 x축, y는 원의 중심의 y축. radius는 반지름. 0은 시작 각도, Math.PI * 2는 끝 각도 == 360도를 의미. false는 시계방향, true는 반시계 방향을 의미.
	if(fillCircle) {
		ctx.fill(); // fillCircle = true, 색 채우기
	} else {
		ctx.stroke(); // fillCircle = false, 외곽선만 그리기
	}
};

function drawBee(x, y, fillStyleColor) { //x = 벌의 x 위치, y = 벌의 y 위치

	ctx.lineWidth = 2;//선의 굵기
	ctx.strokeStyle = "Black"; // 선의 색깔
	ctx.fillStyle = fillStyleColor; //도형에 색채우기
	circle(x, y, 8, true);
	circle(x, y, 8, false);
	circle(x - 5, y - 11, 5, false);
	circle(x + 5, y - 11, 5, false);
	circle(x - 2, y - 1, 2, false);
	circle(x + 2, y - 1, 2, false);	
}

//숫자를 넣으면, 더하거나 빼서 바뀐 숫자를 리턴해줌
function update(coordinate) { 
	var offset = Math.random() * 4 - 2; //what? Math.random * 4  : 1.6 > x > - 2.4 x : 1,0,-1.-2 Math.floor 해주어야 하지 않을까?
	coordinate += offset;

	if(coordinate > 200) {
		coordinate = 200;
	}
	if(coordinate < 0) {
		coordinate = 0;
	}

	return coordinate;
}