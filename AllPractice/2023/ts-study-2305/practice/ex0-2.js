function add(a, b) {
    var _this = this;
    this.a = a;
    this.b = b;
    this.getResult = function () {
        return _this.a + _this.b;
    };
}
var temp1 = new add(1, 2); // new 연산자를 사용하려면 함수가 void를 반환해야 한다.
var temp2 = new add(4, 5);
console.log(temp1.getResult());
console.log(temp2.getResult());
