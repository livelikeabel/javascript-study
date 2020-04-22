class Parent {
    constructor(v) {
        this.v = v;
        console.log(v);
    }
}

class Child extends Parent {
    constructor(v) {
        super(v);
    }
}

new Child('hello world');
