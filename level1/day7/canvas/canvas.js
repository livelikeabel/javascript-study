var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

for(var i = 1; i <= 480 ; i += 11) {
	for(var j = 1; j <= 640; j += 11) {
		ctx.fillRect( j, i, 10, 10);
		//fillStyle(ctx);
		ctx.fillStyle = "rgb(" + i +"," + i + "," + i + ");"	
		//ctx.fillStyle = 'rgb(66, 134, 244)';
		//ctx.fillStyle = "rgb(" i * 30 + "," + i *  30 + "," + i * 30 + ")';
	}
}

function fillStyle(ctx) {
	for(var i = 0; i <= 255; i++ ) {
		ctx.fillStyle = "rgb(" + i +"," + i + "," + i + ");"	
	}
}

// function rgbRandom() {
// 	var r = Math.random()*
// 	var g =
// 	var b = 
// }