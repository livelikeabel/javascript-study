var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function(x, y, radius, fillCircle) {
	ctx.beginPath();//what??? 그림 그리기 시작인가? = 경로를 그리겠다고 캔버스에게 알리는 것.
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);//arc는 원을 그리는 함수이다. x는 원의 중심의 x축, y는 원의 중심의 y축. radius는 반지름. 0은 시작 각도, Math.PI * 2는 끝 각도 == 360도를 의미. false는 시계방향, true는 반시계 방향을 의미.
	if(fillCircle) {
		ctx.fill(); // fillCircle = true, 색 채우기
	} else {
		ctx.stroke(); // fillCircle = false, 외곽선만 그리기
	}
};

circle(50, 50, 10, true);