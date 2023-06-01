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

// ----------------------------------------------------------------------------------------------

// f(g(x)) ----> f () { regurn g() } , g: 데코레이터 함수
// g ----> f(g(x)) , f: 데코레이터 팩토리 (데코레이터 함수를 반환하며 감싸고 있는 함수)
// 데코레이터 팩토리 목적 : 인자전달, param 전달

// 데코레이터 팩토리로 됨
function Controller2(param: any): any {
  console.log("[Controller] Deco Factory: ", param);

  // 익명함수를 반환 -> 데코레이터 함수, 외부는 데코레이터 팩토리
  return (
    constuctor: Function, // 외부에 사용 시 constructor가 넘어감
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log("[Controller] Deco Function : ", constuctor);
  };
}

function Get2(params: any): any {
  // console.log("[GET] ", params);
}

function POST2(params: any): any {
  console.log("[POST] Deco Factory : ", params);

  return (
    // 해당 메소드 데코레이터가 불린 대상(부모 클래스)
    target: any, // 내부에 사용 시 target이 넘어감
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log("[POST] Deco Function : ", target, propertyKey, descriptor);

    target.getReq(); // 다른 메소드 호출
    target[propertyKey](); // 본인 메소드 호출
  };
}

function Column2(params: any): any {
  // console.log("Column!! ", params);
}

function UseGuard(): any {
  console.log("[UseGuard] Deco Factory : ");

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("[UseGuard] Deco Function : ", target, propertyKey, descriptor);
  };
}

// 오버라이딩 되면서 constructor가 넘어가지 않고, 인자가 넘어감 -> 데코레이터 팩토리 사용하여 인자 전달
@Controller2("/api/v1")
class ExampleController2 {
  @Column2("email")
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  @Get2("/user")
  getReq() {
    console.log("getReq method process!");
  }

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
  @POST2("/board")
  @UseGuard()
  postReq() {
    console.log("postReq method process!");
  }
}
