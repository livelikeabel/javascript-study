// var headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// var newHeadingText = prompt("새로운 제목을 입력해주세요");
// headingElement.innerHTML = newHeadingText;

// var newHeadingText = prompt("새로운 제목을 입력해주세요");
// $("#main-heading").text(newHeadingText);

$("h1").fadeOut(2000);   //없어짐
$("h1").fadeIn(3000);    //생김
$("h1").slideUp(1500);   //없어짐
$("h1").slideDown(1500); //생김
$("h1").hide(1000);		 //없어짐
$("h1").show(1000);		 //생김

//slideDown();
$("body").append("<p>새로 만든 문단입니다.</p>");

// for (var i = 0; i < 3; i++) {
// 	var hobby = prompt("취미를 입력해주세요!");
// 	$("body").append("<p>나의 취미는 " + hobby + "입니다 :) </p>");
// }