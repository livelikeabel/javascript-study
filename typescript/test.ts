class Parent {
  public one = 1; // 외부접근가능
  protected two = 2; // Parent를 상속한 객체에서만 접근할 수 있음
  private three = 3;

  constructor() {
    this.one;
    this.two;
    this.three;
  }
}

class AppComponent extends Parent {
  constructor() {
    super();
    this.one;
    this.two;
  }
}

interface Person {
  name: string;
  age: number;
}

let kim: Person;

let p = new Parent();
new AppComponent();

class Car {
  constructor(public age: number) {}
}

let car = new Car(10);

car.age;

function Component(constructorFn?: Function) {
  /**
   * 클래스를 꾸며주는 로직
   * Component, Html, Css
   */

  return constructorFn;
}

@Component()
class DecoComponent {
  @input() height: number;

  constructor() {}
}
