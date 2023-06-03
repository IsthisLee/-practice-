// 배울 내용: 데코레이터를 통해 인스턴스의 데이터를 조작하는 방법

// 1. 데코레이터를 통해 인스턴스의 데이터를 조작하는 방법
// 2. 데코레이터의 descriptor 인자를 통해 메소드의 메타데이터를 조작할 수 있음

// -------------------

// function Controller3(constuctor: { new (...arg: any[]): any }): any {
// -> constructor의 인자가 많은 경우 ...arg: any[]를 사용하여 인자를 받아올 수 있다.

function Controller3(constuctor: { new (email: string): any }): any {
  // 데이터를 조작하기 위해 클래스를 리턴해야함
  // constructor를 상속받은 익명 클래스
  return class extends constuctor {
    _email = "changed@gamil.com"; // _email 오버라이딩
    _name = "geon";
    _age = 24;
  };
}

function UseGuard2(): any {
  console.log("[UseGuard] Deco Factory : ");

  return (
    constructor: Function,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log(
      "[UseGuard] Deco Function : ",
      constructor,
      propertyKey,
      descriptor // 메소드의 메타데이터가 넘어옴 -> 메타데이터 조작 가능
    );
  };
}

@Controller3
class ExampleController3 {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  getReq() {
    console.log("getReq method process!");
  }

  postReq() {
    console.log("postReq method process!");
  }

  @UseGuard2()
  get email(): string {
    return this._email;
  }
}

console.log(new ExampleController3("example@google.com"));
