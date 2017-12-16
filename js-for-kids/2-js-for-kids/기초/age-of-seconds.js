// 사용자가 값을 입력하면(생년 월 일), 현재 몇초를 살아가고 있는지 알려주는 프로그램

var secOfMin = 60;
var minOfHour = 60;
var secOfHour = secOfMin * minOfHour;
var hourOfDay = 24;
var secOfDay = secOfHour * hourOfDay;
var dayOfYear = 365;
var secOfYear = secOfDay * dayOfYear;
var yourAge = prompt("나이를 입력해 주세요"); //string
var secOfYourAge = secOfYear * yourAge; // yourAge가 String인데, secOfYear가 Number여서,  곱한 결과인 secOfYourAge가 Number이다.

console.log(secOfYourAge);