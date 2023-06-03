const exString: string = "some string";

// 타입스크립트에서의 typeof
// 다음과 같이 typeof로 반환된 타입을 변수의 타입으로 다시 지정할 수 있음
const childString: typeof exString = "hello";

function add(a: number, b: number): number {
  return a + b;
}
type A = ReturnType<typeof add>; // ReturnType은 함수의 반환 타입을 가져옴 - 타입스크립트에서 지원하는 유틸리티 타입

enum ENumbers {
  "zero",
  "one",
  "two",
  "three"
}
const nums: typeof ENumbers = ENumbers;
console.log(nums.three);
