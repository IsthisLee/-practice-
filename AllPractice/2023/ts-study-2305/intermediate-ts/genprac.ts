// 제네릭 연습

// 1. 인터페이스에 제네릭 적용
// 아래 방식은 관리가 힘들다. 데이터 타입이 늘어날 때마다 찾아서 수정해야 한다.
interface IData0 {
  data: string | number;
}
// 아래 방식은 관리가 쉽다. 데이터 타입이 늘어날 때마다 제네릭만 추가해주면 된다.
interface IData<T extends string | number> {
  data: T;
}

// 2. 함수에 제네릭 적용
function returnParams<T>(params: T): T {
  return params;
}
returnParams<string>("hi");
returnParams<number>(24);
returnParams<boolean>(true);

// 3. 함수를 타입으로 넣을 때 제네릭 적용
const rP: <T>(params: T) => T = returnParams;
// const rP: (파라미터들 타입) => 리턴 타입 = returnParams;
interface IExecute {
  rP: <T>(params: T) => T;
}

// 4. 매개변수로 넘긴 키 값으로 해당 키의 값을 리턴하는 함수
// 키 값을 제한하기 위해 keyof와 extends 키워드 사용
interface IOb1 {
  name: string;
  age: number;
}

interface IOb2 {
  city: string;
  phone: string;
}

function prtKey<T extends object, U extends keyof T>(params: T, key: U): T[U] {
  console.log(params[key]);
  return params[key];
}
prtKey<IOb1, keyof IOb1>({ name: "geon", age: 24 }, "name"); // IOb1의 key 값만 넣을 수 있다.
prtKey<IOb2, keyof IOb2>({ city: "seoul", phone: "01012345678" }, "phone"); // IOb2의 key 값만 넣을 수 있다.

// 5. 클래스에 제네릭 적용
class ClassName<T> {
  constructor(public _data: T) {}

  set data(newData: T) {
    this._data = newData;
  }

  get data(): T {
    return this._data;
  }
}
