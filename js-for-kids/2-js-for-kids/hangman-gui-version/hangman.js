var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");//캔버스에 그림을 그릴 때 필요한 모든 속성과 메서드를 포함하고 있는 js객체
ctx.strokeRect(0, 0, 400, 400);
//얼굴
ctx.beginPath();
ctx.arc(120, 130, 20, 0, Math.PI * 2, false);
ctx.stroke();

ctx.beginPath();
//몸통
ctx.moveTo(120,150);
ctx.lineTo(120,210);
//왼팔
ctx.moveTo(120,150);
ctx.lineTo(110,200);
//오른팔
ctx.moveTo(120,150);
ctx.lineTo(130,200);
//왼발
ctx.moveTo(120,210);
ctx.lineTo(115,270);
//오른발
ctx.moveTo(120,210);
ctx.lineTo(125,270);

ctx.stroke();

ctx.beginPath();
//밧줄
ctx.moveTo(120,110);
ctx.lineTo(120,60);
//기둥
ctx.moveTo(100, 60);
ctx.lineTo(280, 60);
ctx.lineTo(280, 300);
//밑판
ctx.moveTo(20, 350);
ctx.lineTo(300, 350);
ctx.lineTo(350, 260);
ctx.lineTo(80, 260);
ctx.lineTo(20, 350);
ctx.stroke();









