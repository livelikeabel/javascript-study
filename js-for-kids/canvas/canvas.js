var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//ctx.fillStyle = "powderblue";
// ctx.fillRect(65, 5, 30, 30);
// ctx.fillRect(30, 50, 100, 5);
// ctx.fillRect(78, 30, 5, 20);
// ctx.fillRect(56, 50, 50, 50);
// ctx.fillRect(56, 100, 5, 30);
// ctx.fillRect(101, 100, 5, 30);

ctx.strokeStyle = "pink";
ctx.lineWidth = 4;
// ctx.strokeRect(200, 10, 100, 20);
//ctx.fillRect(0, 0, 200, 200);

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.moveTo(60, 60);
ctx.moveTo(60, 10);
ctx.moveTo(10, 60);
ctx.stroke();
