var leftOffset = 0;

var moveHeading = function() {
	$("#heading").offset({ left: leftOffset });

	leftOffset += 1;

	if (leftOffset > 200) {
		leftOffset = 0;
	}
};

setInterval(moveHeading, 10);