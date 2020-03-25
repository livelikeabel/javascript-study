// ES6 module
export const pi = Math.PI;

export function power(x, y) {
  // ES7 지수 연산자
  return x ** y;    
}


// ES6 Class
export class Foo {
  // class field
  #private = 10;

  foo() {
    // Object Rest/Spread property
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4};
    return { a, b, x };
  }

  bar() {
    return this.#private;
  }
}
