var Car = function(x, y) {
	this.x = x;
	this.y = y;
};

Car.prototype.draw = function() {
	var carHtml = '<img src="http://nostarch.com/images/car.png">';

	this.carElement = $(carHtml);

	this.carElement.css({
		position: "absolute",
		left: this.x,
		top: this.y
	});

	$("body").append(this.carElement);
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);

tesla.draw();
nissan.draw();