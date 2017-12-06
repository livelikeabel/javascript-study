// var myGame = {name: "Super Mario Bros", 
// 	year: 1989,
// 	rate: 5.0
// };

// var a = {name: "Honux", age:999, HP: 50, favorite: myGame};
// console.log(a.name);
// console.log(a.age);
// console.log(a.myGame);//undefined

//객체에 메소드 넣기

var a = {name: "Honux", age:999, hp: 50}; 

a.eat = function(food) {
	a.hp += food.cal;
}

var rice = {cal: 10};
console.log(a.eat(rice));
console.log(a.hp);// 왜 60이 출력되지...?

