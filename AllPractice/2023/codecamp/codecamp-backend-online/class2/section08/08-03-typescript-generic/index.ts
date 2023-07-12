// 1. 문자/숫자/불린 기본타입(primitive type)
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("hello", 123, true);

//
//
// 2. any 타입(그냥 자바스크립트랑 같음)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨!
  return [arg3, arg2, arg1];
};

const result2 = getAny("hello", "bad", "noAny");

//
//
// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  // any보다는 안전한 코딩
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
const result5 = getGeneric<string, number, boolean>("hello", 123, false);

//
//
// 4-2. generic 타입 - 화살표 함수
const getGeneric2 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result6 = getGeneric2("", 123, false);
