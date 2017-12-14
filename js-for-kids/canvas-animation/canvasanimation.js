var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var position = 0;

function foo() {
	ctx.clearRect(0, 0, 200, 200); // 지우는 메소드 (0, 0, 200, 200) 이여서, 캔버스 전체를 지운다.
	ctx.fillRect(position, 0, 20, 20);

	//사각형이 다 이동하면, 초기화
	position ++;
	if(position > 200) {
		position = 0;
	}
}

setInterval(foo, 30);


