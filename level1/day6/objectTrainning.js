var m1 = {
	"name": "abel",
	hp: 100,
	mp: 50,
	power: 10,
	attack: function(target) {
		target.hp -= this.power;
	}
};

var c1 = {
	type: "Coffee",
	energy: 10
};

//m1.attack(m2);
//m1.eat(c1);