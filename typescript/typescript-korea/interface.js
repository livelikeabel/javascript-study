var Person = /** @class */ (function () {
    function Person(name) {
        this.name = null;
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log(this.name);
    };
    Person.prototype.hi = function () {
        console.log('hi');
    };
    return Person;
}());
var person = new Person('abel');
person.hello();
