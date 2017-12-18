var headingElement = document.getElementById("main-heading");
var newHeadingElement = prompt("새로운거 입력부탁");
headingElement.innerHTML = newHeadingElement;

var newHeadingText = prompt("새로운 제목을 입력해주세여");
$("#main-heading2").text(newHeadingText);

$("body").append("<p>새로만든 문단입니다.</p>");