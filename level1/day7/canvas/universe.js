var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//우주 배경  - 우주를 만들고 나서, 태양이 만들어진다.
function makeUniverse() {
	var bgImage = new Image();
	bgImage.onload = function() {
		ctx.drawImage(bgImage, 0, 0);
		makeSun();
		makeEarth();
		makeMoon();
	};
	bgImage.src = "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/p1639ay-goodss-160930.jpg?itok=MDEmja_C";	
}

//태양 만들기
function makeSun() {
	var bgImage2 = new Image();
	bgImage2.onload = function() {
		ctx.drawImage(bgImage2, 270, 180, 100, 100);
	};
	bgImage2.src = "https://cdn.namuwikiusercontent.com/storage/f2de7b3a6966a469fa90f2eeaa3bfc12ca3f4c5b44c2d320974f66d652ff27e767515b80f1f564ece0326329f5683f2512d84dbf36ec1129fcbe74fc39e819b08d43ddd371b49a0422d1b7836c95a68a?e=1522032668&k=wVbd4mj9CDMWI8e9OuJmdw"; 	
}

//지구 만들기
function makeEarth() {
	var bgImage3 = new Image();
	bgImage3.onload = function() {
		ctx.drawImage(bgImage3, 100, 180, 30, 30);
	};
	bgImage3.src = "https://ccdn5.namuwikiusercontent.com/storage/6aee5a543ec21bcc07e2d11bf899f491332f4b864fac785abdf6d51f151860533250982609ad0450f226397406a6e232e4f23b0d36cc33a7bc996e324580dd2cd2eb63195ee4b58497fe1710848eee04?e=1517389910&k=E59_s2byhNOfIBCkmDk1DQ"; 	
	
}

//달 만들기
function makeMoon() {
	var bgImage4 = new Image();
	bgImage4.onload = function() {
		ctx.drawImage(bgImage4, 70, 180, 10, 10);
	};
	bgImage4.src = "http://ko.experiments.wikidok.net/api/File/Real/5907e076a2ef11364220dd02"; 	
	
}

makeUniverse();