// 1. 문자/숫자/불린 기본타입(primitive type)
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("hello", 123, true);

//
//
// 2. any 타입(그냥 자바스크립트랑 같음)
// 함수의 인자로 어떤 타입이 들어갔고 어떤 값이 반환되는지 알 수가 없음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨!
  return [arg3, arg2, arg1];
};

const result2 = getAny("hello", "bad", "noAny");

//
//
// 3. unknown 타입
// 모든 타입이 들어갈 수는 있지만, 아직은 어느 타입을 사용할지 모를때 사용
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  // 사용하기 전에 꼭 해당 타입에 대한 정의를 내려주어야 하므로, any보다는 안전한 코딩
  if (typeof arg1 === "number") {
    console.log(arg1 + 100);
  }

  return [arg3, arg2, arg1];
};

const result3 = getUnknown("hello", "bad", "noAny");

//
//
// 4-1. generic 타입 - 함수 선언
// any처럼 인자에 아무거나 다 들어갈 수 있지만, 들어가는 순간 타입이 정해짐
function getGeneric<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result4 = getGeneric(true, 123, false);
const result5 = getGeneric<string, number, boolean>("hello", 123, false); // 타입을 지정해주면 해당 타입으로만 사용 가능

//
//
// 4-2. generic 타입 - 화살표 함수
const getGeneric2 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result6 = getGeneric2("", 123, false);

// Generic Type은 우리가 함수를 만들어서 제공해 줄 때 안전하고 확장성 높은 코드 사용을 위해 많이 사용됨
// 1. 라이브러리 개발시
// 2. 사내 라이브러리 사용시
