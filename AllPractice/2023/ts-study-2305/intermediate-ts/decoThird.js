// function Controller3(constuctor: { new (...arg: any[]): any }): any {
// -> constructor의 인자가 많은 경우 ...arg: any[]를 사용하여 인자를 받아올 수 있다.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Controller3(constuctor) {
    // 데이터를 조작하기 위해 클래스를 리턴해야함
    // constructor를 상속받은 익명 클래스
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._email = "changed@gamil.com"; // _email 오버라이딩
            _this._name = "geon";
            _this._age = 24;
            return _this;
        }
        return class_1;
    }(constuctor));
}
function UseGuard2() {
    console.log("[UseGuard] Deco Factory : ");
    return function (constructor, propertyKey, descriptor) {
        console.log("[UseGuard] Deco Function : ", constructor, propertyKey, descriptor // 메소드의 메타데이터가 넘어옴 -> 메타데이터 조작 가능
        );
    };
}
var ExampleController3 = /** @class */ (function () {
    function ExampleController3(email) {
        this._email = email;
    }
    ExampleController3.prototype.getReq = function () {
        console.log("getReq method process!");
    };
    ExampleController3.prototype.postReq = function () {
        console.log("postReq method process!");
    };
    Object.defineProperty(ExampleController3.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        UseGuard2()
    ], ExampleController3.prototype, "email", null);
    ExampleController3 = __decorate([
        Controller3
    ], ExampleController3);
    return ExampleController3;
}());
console.log(new ExampleController3("example@google.com"));
