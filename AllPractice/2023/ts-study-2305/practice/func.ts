// 함수는 객체다.

const add1: Function = new Function("a", "b", "return a + 2 * b");
console.log(add1(1, 3));
// -> new는 클래스로 인스턴스를 생성하는 예약어임.
// -> new를 통해 함수를 생성할 수 있음.
// -> 즉, 함수는 객체라는 것을 알 수 있음.

interface IAdd2 {
  (a: number, b: number): number;
}
const add2: IAdd2 = function (a: number, b: number): number {
  return a + b;
};
console.log(add2(4, 5));
// -> 인터페이스는 객체나 클래스의 타입을 정의할 때 사용하는 예약어임.
// -> 함수에 인터페이스를 사용할 수 있음.
// -> 즉, 함수는 객체라는 것을 알 수 있음.

// 이제 intermediate-ts/decoThird.ts에서 사용된 아래 코드를 이해할 수 있음.
// -> 데코레이터 함수의 인자인 constructor 부분을 이해할 수 있음.
// -> constructor는 new로 호출되는 함수이고, 익명 인터페이스를 통해 타입을 정의함을 알 수 있음.
function Controller3(constuctor: { new (email: string): any }): any {
  return class extends constuctor {
    _email = "changed@gamil.com";
    _name = "geon";
    _age = 24;
  };
}
