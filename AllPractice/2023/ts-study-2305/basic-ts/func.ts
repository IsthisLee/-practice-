// void는 return 값이 없다는 것을 의미s
function add(a: number, b: number): void {
  // return String(a + b)

  console.log(a + b); // return으로 반환값을 명시하지 않으면 void 타입이 됨

  return; // return으로 반환값을 명시하지 않으면 void 타입이 됨
}
function add2(a: number, b: number): SuperVoid {
  console.log(a + b); // return으로 반환값을 명시하지 않으면 void 타입이 됨
}

add(1, 2);

const minus: (a: number, b: number) => string = (
  a: number,
  b: number
): string => {
  return String(a - b);
};
const minus2: minusFunc = (a: number, b: number): string => {
  return String(a - b);
};

const multiple: (a: number, b: number) => () => number =
  (a: number, b: number): (() => number) =>
  () =>
    a * b * 2;
const multiple2: mainMultiFunc =
  (a: number, b: number): subMultiFunc =>
  () =>
    a * b * 2;

type typeName = any;
type minusFunc = (a: number, b: number) => string;
type subMultiFunc = () => number;
type mainMultiFunc = (a: number, b: number) => subMultiFunc;

console.log(multiple2(1, 2)());

// 타입 별칭을 사용하여 다음과 같이 원하는 타입을 만들 수 있음
type MyString = string;
type GeonNumber = number;
type SuperVoid = void;

/** 타입 별칭이 쓰이는 곳
/ - 타입이 길어질 때
/ 1. 함수에서
/ 2. 리터럴, 제네릭 등 여러 곳에서
/   ex.
/   type sexType = "MALE" | "FEMALE" | "ETC";
/   const sex: sexType = "MALE";
/   const sex2: sexEnum = sexEnum.MALE;
*/
