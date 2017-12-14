var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var i = 20;
//공그리기
function drowingBall() {
	ctx.strokeStyle = "Blue";
	ctx.fillStyle = "powderBlue";
	ctx.beginPath();
	//x, y, r, startAngle, endAngle, counterClockWise : false가 시계방향
	ctx.arc(i, 300, 20, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fill();	
	i++;

	if(i === 620) {
		clearInterval(tid);
		alert("도착했습니다!");
	}
}


// 이미지 올리기
function drawingBackground() {
	console.log("running");

	var bgImage = new Image();

	bgImage.onload = function() {
		ctx.drawImage(bgImage, 0, 0);
		drowingBall();
	};

	bgImage.src = "http://1.bp.blogspot.com/-n1eR6hEcFiQ/Uacu1bk9fWI/AAAAAAAAAZA/xPMxnwGSl1s/s1600/Background.jpg";
}





var tid = setInterval(drawingBackground, 10); 







