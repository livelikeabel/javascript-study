var counter = 5;

var printMessage = function() {
	console.log("기록을 시작한지 " + counter + "초 지났습니다.");
	counter += 5;
};

var intervalId = setInterval(printMessage, 5000);



//clearInterval(intervalId);