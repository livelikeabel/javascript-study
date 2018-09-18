// let o = { a: 1, b: 2 }

// o.[[Prototype]] = { b: 20, c: 30 }

// o.[[Prototype]].[[Prototype]] = null

// console.log(o.a)
// console.log(o.b) //property shadowing

// console.log(o.c)
// console.log(o.[[prototype]])
// console.log(o)

// Object.create 이용

var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a) // 1 (상속됨)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
var d = Object.create(null);

// class 키워드 이용

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);

console.log(square.area)


/// prototype 그리고 Object.getPrototypeof
// var obj = new Foo();

// var obj = new Object();
// obj.[[Prototype]] = Foo.prototype;
// Foo.call(o)

// 프로토타입 상속의 종류
// 1. 위임형 상속
class Greeter {
  constructor (name) {
    this.name = name || "John Doe";
  }
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
}

const george = new Greeter("George");
console.log(george)

const msg = george.hello();
console.log(msg)

// 2. 연결형 상속: 한 객체의 속성을 다른 객체에 모두 복사함으로써 상속을 구현하는 방식
// 연결형 상속은 매우 좋은 방법이며, 클로져와 같이 사용한다면 훨씬 효과적인 상속 방식이다.
const proto = {
  hello: function hello() {
    return `Hello, my name is ${this.name}`;
  }
};

const abel = Object.assign({}, proto, {name: 'Abel Ko'});
console.log(abel.hello())

// 3. 함수형 상속
// private data를 클로져를 통해 캡슐화 시킬 수 있다.

const rawMixin = function () {
  const attrs = {};
  return Object.assign(this, {
    set (name, value) {
      attrs[name] = value
      this.emit('change', {
        prop: name,
        value: value
      });
    },
    get (name) {
      return attrs[name];
    }
  }, Events.prototype)
};

const mixinModel = target => rawMixin.call(target);
const george = {name: 'george'};
const model = mixinModel(george)
medel.on('change', data => console.log(data));
model.set('name', 'Sam')
console.log(model)
