"use strict";
// 위 인터페이스를 구현하는 클래스
var Add = /** @class */ (function () {
    function Add(a, b) {
        this.a = a;
        this.b = b;
    }
    Add.prototype.getResult = function () {
        return this.a + this.b;
    };
    return Add;
}());
// 위 클래스는 사용하기 싫으므로 아래와 같이 작성할 수 있다.
// (함수 + 인터페이스) -> 빌드된 코드가 가벼워진다.
// const add = (a: number, b: number): IAdd => {
//   const _this = this as any as IAdd;
//   _this.a = a;
//   _this.b = b;
//   _this.getResult = () => {
//     return a + b;
//   };
//   return _this;
// };
// const add1 = add(1, 2);
// console.log(add1, add1.a, add1.b, add1.getResult());
function Add2(a, b) {
    this.a = a;
    this.b = b;
    this.getResult = function () {
        return this.a + this.b;
    };
}
var add2 = new Add2(1, 2);
var add3 = new Add2(4, 5);
console.log(add2, add2.a, add2.b, add2.getResult());
console.log(add3, add3.a, add3.b, add3.getResult());
