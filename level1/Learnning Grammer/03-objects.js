// var m1 = {
// 	"name": "Abel",
// 	hp: 100,
// 	mp: 50,
// 	power: 100,
// 	attack: function(target) {
// 		target.hp -= this.power;
// 	},
// 	eat: function(food) {
// 		this.hp += food.energy;
// 	}
// };

// var c1 = {
// 	type: "Coffee",
// 	energy: 10
// };

// m1.attack(m2);
// m1.eat(c1);


//함수를 이용해서 생성자 만들기
// function Human(name, hp, mp, power) {
// 	this.name = name; // m1.name = name;
// 	this.hp = hp;
// 	this.mp = mp;
// 	this.power = power;
// 	this.attack = function(target) {
// 		tatget.hp -= this.power;
// 	};
// 	this.eat = function(food) {
// 		this.hp += food.energy;
// 	};
// 	this.show = function() {
// 		console.log("%s hp:%d  mp:%d  power:%d", 
// 			this.name, this.hp, this.mp, this.power);
// 	};
// } // no semicolon!

// function Food(name, energy) {
// 	this.name = name;
// 	this.energy = energy;
// }

// var m1 = new Human("marin", 100, 20, 20);
// var m2 = new Human("zilot", 200, 5, 35);
// var f1 = new Food("bread", 20);
// var f2 = new Food("coffee", 5);
// console.log(m1.show());
// console.log(m2.show());
// console.log(m1.eat(f1));
// console.log(m1.show());

// var a = new String(); //a = "";
// console.log(a);

// var b = new Object(); //b = {};
// console.log(b);

// var c = new Array(); //c = [];
// console.log(c);


//프로토타입

// function Human(name, hp, mp, power) {
// 	this.name = name; //m1.name = name;
// 	this.hp = hp;
// 	this.mp = mp;
// 	this.power = power;
// }

// Human.prototype.attack = function(target) {
// 	target.hp -= this.power;
// };

// var allKeys = function(data) {.   //잘 모르겠다 ㅠㅠㅠㅠㅠ
// 	Object.keys(data);
// };

// var m1 = new Human("abel", 100, 50, 100);
// console.log(m1);


















