function bmi(kg, t) {
	t2 = t/100
	return (kg/(t2*t2)).toFixed(1);
}

var kg = prompt('몸무게를 입력해 주세요');
var t = prompt('키를 입력해 주세요');

alert("bmi is : " + bmi(kg,t));