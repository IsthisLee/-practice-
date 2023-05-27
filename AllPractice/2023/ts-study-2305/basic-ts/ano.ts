/** 기본적인 타입 3가지 (any, object 제외) */
// number - 숫자 (int Long(big int), small int 등 모든 숫자)
// string - 문자열
// boolean - true, false - 0, 1 등의 값은 불가능
// any - 어떤 타입이든 될 수 있음 (사용하지 않는 것이 좋음!!)
// object - 객체 {}(사용하지 않는 것이 좋음!! 모든 에러의 근원이 될 수 있음)

// 타입 주석
const a: number = 1;
const b: string = "hello";
const c: boolean = true;

// 타입 추론
let d = 1; // 타입 추론에 의해 number로 추론
d = "hi"; // 에러 발생
