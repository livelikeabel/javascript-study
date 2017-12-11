var clickHandler = function(event) {
	console.log("Click! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);