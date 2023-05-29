// 서버에서 다른 서버로 정보 전송
// 프론트에서 서버에서 데이터 받을 때 -> json object
// 객체는 interface와 class로 타입을 정의할 수 있다. 따라서 서버에서 class를 사용할 일이 있음.

// readonly는 싱글턴 패턴이나 변경되면 안되는 값에 사용하면 좋다.

// 오로지 데이터 전송만을 위한 클래스
class LoginDataTransferObject {
  // readonly -> 읽기만 가능
  // 접근제한자와는 값을 변경할 수 있지만 readonly는 값의 변경 자체를 막는다.
  public readonly ID;
  private readonly _PW;
  public ETC?;

  constructor(ID: string, PW: string, ETC?: string) {
    this.ID = ID;
    this._PW = PW;
    if (ETC) this.ETC = ETC;
  }

  set PW(newPW: string) {
    // this._PW = newPW; // readonly이기 때문에 에러 발생
  }
}

const LoginDTO: LoginDataTransferObject = new LoginDataTransferObject(
  "geon",
  "1234"
);
// LoginDTO.ID = "hi"; // readonly이기 때문에 에러 발생
// LoginDTO.PW = "5678"; // setter 호출은 되지만, readonly이기 때문에 값 변경은 안되고 에러 발생
console.log(LoginDTO);

// -------------------

class LoginDataTransferObject2 {
  public readonly ETC?;

  // constructor 함수의 매개변수에 접근제한자를 붙이면 멤버변수로 선언되고 초기화까지 된다.
  // 간단하게 클래스를 선언할 때 사용할 수 있다.
  constructor(
    public readonly ID: string,
    public readonly PW: string = "deafult value",
    ETC?: string
  ) {
    if (ETC) this.ETC = ETC; // 이렇게 따로 선언하지 않으면 undefined가 할당됨. 원하는 방식 선택
  }
}
const easyLoginDTO = new LoginDataTransferObject2("geon", "1234");
console.log(easyLoginDTO);
