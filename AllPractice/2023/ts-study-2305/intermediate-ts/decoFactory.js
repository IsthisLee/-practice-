// 정리
/**
 * 1. 팩토리가 데코레이터 함수를 감싸고 있음.
 * 2. 목적 : 인자 전달, param 전달
 * 3. 데코레이터 함수의 첫 번째 인자는 constructor가 아닌 target이 넘어감
 * 3-0. 클래스 외부에서 사용 시에는 constructor가 넘어감
 * 3-1. target은 해당 데코레이터가 불린 대상(자기가 불려진 클래스)
 * 3-2. 따라서, target에 접근해서 class의 메소드를 호출할 수 있음
 * 3-3. 또는 두번 째 인자인 propertyKey를 통해 본인 메소드를 호출할 수 있음
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ----------------------------------------------------------------------------------------------
// f(g(x)) ----> f () { regurn g() } , g: 데코레이터 함수
// g ----> f(g(x)) , f: 데코레이터 팩토리 (데코레이터 함수를 반환하며 감싸고 있는 함수)
// 데코레이터 팩토리 목적 : 인자전달, param 전달
// 데코레이터 팩토리로 됨
function Controller2(param) {
    console.log("[Controller] Deco Factory: ", param);
    // 익명함수를 반환 -> 데코레이터 함수, 외부는 데코레이터 팩토리
    return function (constuctor, // 외부에 사용 시 constructor가 넘어감
    propertyKey, descriptor) {
        console.log("[Controller] Deco Function : ", constuctor);
    };
}
function Get2(params) {
    // console.log("[GET] ", params);
}
function POST2(params) {
    console.log("[POST] Deco Factory : ", params);
    return function (
    // 해당 메소드 데코레이터가 불린 대상(부모 클래스)
    target, // 내부에 사용 시 target이 넘어감
    propertyKey, descriptor) {
        console.log("[POST] Deco Function : ", target, propertyKey, descriptor);
        target.getReq(); // 다른 메소드 호출
        target[propertyKey](); // 본인 메소드 호출
    };
}
function Column2(params) {
    // console.log("Column!! ", params);
}
function UseGuard() {
    console.log("[UseGuard] Deco Factory : ");
    return function (target, propertyKey, descriptor) {
        console.log("[UseGuard] Deco Function : ", target, propertyKey, descriptor);
    };
}
// 오버라이딩 되면서 constructor가 넘어가지 않고, 인자가 넘어감 -> 데코레이터 팩토리 사용하여 인자 전달
var ExampleController2 = /** @class */ (function () {
    function ExampleController2(email) {
        this._email = email;
    }
    ExampleController2.prototype.getReq = function () {
        console.log("getReq method process!");
    };
    /**
     * 파일 실행 시 아래 코드에 대한 출력 결과 :
     * [POST] Deco Factory :  /board
     * [UseGuard] Deco Factory :
     * [UseGuard] Deco Function :  ...
     * [POST] Deco Function :  ...
     * [Controller] Deco Factory:  /api/v1
     * [Controller] Deco Function :  [Function: ExampleController2]
     *
     * ---------------------------
     *
     * 즉,
     * Factory => { f(g(x)) 여기서 f 역할, g는 decorator func }
     *         => top to bottom 실행
     * Decoator => bottom to top 실행
     */
    ExampleController2.prototype.postReq = function () {
        console.log("postReq method process!");
    };
    __decorate([
        Column2("email")
    ], ExampleController2.prototype, "_email", void 0);
    __decorate([
        Get2("/user")
    ], ExampleController2.prototype, "getReq", null);
    __decorate([
        POST2("/board"),
        UseGuard()
    ], ExampleController2.prototype, "postReq", null);
    ExampleController2 = __decorate([
        Controller2("/api/v1")
    ], ExampleController2);
    return ExampleController2;
}());
