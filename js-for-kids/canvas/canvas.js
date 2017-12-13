var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
for (var i = 0; i < 20; i++) {
	ctx.fillRect(i * 10, i * 10, 10, 10);
}