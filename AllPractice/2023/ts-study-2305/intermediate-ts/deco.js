var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다.
function InitClass(constructor) {
    console.log("InitClass: ", constructor);
}
// 2. 데코레이터는 무조건 class랑 같이 쓴다. (대상: 내부 외부, 멤버 변수, 메소드, 파라미터, ...)
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass = __decorate([
        InitClass
    ], ExampleClass);
    return ExampleClass;
}());
// 실행시켜보면,
// InitClass: [Function: ExampleClass] 가 출력됨.
// 3. 즉, 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new ExampleClass()와 같이 인스턴스화를
// 하지 않아도 런타임에 실행됨.
//4. 데코레이터 함수의 매개변수로 클래스의 생성자가 들어온다.
// -> 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 넣어서 조작할 수 있을 것 같다.
// ---> 데코레이터는 클래스를 조작할 수 있다.
function Controller(constuctor) {
    console.log("Controller: ", constuctor);
}
function Get(params) {
    console.log("[GET] ", params);
}
function POST(params) {
    console.log("[POST] ", params);
}
function Column(params) {
    console.log("Column!! ", params);
}
var ExampleController = /** @class */ (function () {
    function ExampleController(email) {
        this._email = email;
    }
    ExampleController.prototype.getReq = function () { };
    ExampleController.prototype.postReq = function () { };
    __decorate([
        Column("email")
    ], ExampleController.prototype, "_email", void 0);
    __decorate([
        Get("/api/v1/user")
    ], ExampleController.prototype, "getReq", null);
    __decorate([
        POST("/api/v1/board")
    ], ExampleController.prototype, "postReq", null);
    ExampleController = __decorate([
        Controller
    ], ExampleController);
    return ExampleController;
}());
