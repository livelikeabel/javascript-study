var timeUp = function() {
	alert("시간끝!");
};

setTimeout(timeUp, 3000);

var doHomeworkAlarm = function() {
	alert("숙제할 시간입니다!");
};

var timeoutId = setTimeout(doHomeworkAlarm, 10);

clearTimeout(timeoutId);