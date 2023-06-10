interface IAdd {
  (a: number, b: number): IAdd;

  a: number;
  b: number;

  getResult(): number;
}

// 위 인터페이스를 구현하는 클래스
class Add {
  constructor(public a: number, public b: number) {}

  getResult() {
    return this.a + this.b;
  }
}

// ----------------------------------------------------------

// 위 클래스는 사용하기 싫으므로 아래와 같이 작성할 수 있다.
// (함수 + 인터페이스) -> 빌드된 코드가 가벼워진다.
function Add2(this, a: number, b: number) {
  this.a = a;
  this.b = b;

  this.getResult = function () {
    return a + b;
  };
}

const add3: IAdd = new Add2(4, 5);
const add4: IAdd = new Add2(1, 2);
console.log(add3, add3.a, add3.b, add3.getResult());
console.log(add4, add4.a, add4.b, add4.getResult());

// 아래와 같이 강의에서 작성해주셨는데, 코드가 잘못된 것 같은 느낌이 든다. 인프런에 질문을 남겨두었다.
//https://www.inflearn.com/questions/894244/%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-this

// const add = (a: number, b: number) => {
//   const _this = this as any as IAdd;

//   _this.a = a;
//   _this.b = b;

//   _this.getResult = () => {
//     return a + b;
//   };

//   return _this;
// };

// const add1 = add(1, 2);
// const add2 = add(1, 2);
// console.log(add1, add1.a, add1.b, add1.getResult());
// console.log(add2, add2.a, add2.b, add2.getResult());
