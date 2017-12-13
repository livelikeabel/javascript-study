var Car = function(x, y) {
	this.x = x;
	this.y = y;
};

var drawCar = function(car) {
	var carHtml = '<img src="http://nostarch.com/images/car.png">';

	var carElement = $(carHtml);

	carElement.css({
		position: "absolute",
		left: car.x,
		top: car.y
	});

	$("body").append(carElement);
};

var tesla = new Car(20,20);
var nissan = new Car(100, 200);

drawCar(tesla);
drawCar(nissan);
