function Human(name, hp, power) {
	this.name = name;
	this.hp = hp;
	this.power = power;
	this.attack = function(target) {
		target.hp -= this.power;
	};
	this.show = function() {
		console.log("%s %d %d %d", 
			this.name, this.hp, this.mp, this.power);
	};
	this.eat = function(food) {
		this.hp += food.weight;
	};
	this.drink = function(beverage) {
		this.power += beverage.ml;
	};
}

for(var i = 0; i <100; i++) {
	var m + i = new Human("사람" + i, 100 + i, 10 + i );
}

console.log(m1);