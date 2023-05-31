// 1. 데코레이터는 함수다.
function InitClass(constructor: Function) {
  console.log("InitClass: ", constructor);
}

// 2. 데코레이터는 무조건 class랑 같이 쓴다. (대상: 내부 외부, 멤버 변수, 메소드, 파라미터, ...)
@InitClass
class ExampleClass {
  constructor() {}
}

// 실행시켜보면,
// InitClass: [Function: ExampleClass] 가 출력됨.

// 3. 즉, 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new ExampleClass()와 같이 인스턴스화를
// 하지 않아도 런타임에 실행됨.

//4. 데코레이터 함수의 매개변수로 클래스의 생성자가 들어온다.
// -> 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 넣어서 조작할 수 있을 것 같다.
// ---> 데코레이터는 클래스를 조작할 수 있다.

function Controller(constuctor: Function) {
  console.log("Controller: ", constuctor);
}

function Get(params: any): any {
  console.log("[GET] ", params);
}

function POST(params: any): any {
  console.log("[POST] ", params);
}

function Column(params: any): any {
  console.log("Column!! ", params);
}

@Controller // constructor가 인자로 넘어감
class ExampleController {
  @Column("email")
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  @Get("/api/v1/user")
  getReq() {}

  @POST("/api/v1/board")
  postReq() {}
}

/**
 * 실행 결과
 * Column!!  email
 * [GET]  /api/v1/user
 * [POST]  /api/v1/board
 * Controller:  [Function: ExampleController]
 */
