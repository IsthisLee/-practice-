"use strict";
// void는 return 값이 없다는 것을 의미s
function add(a, b) {
    // return String(a + b)
    console.log(a + b); // return으로 반환값을 명시하지 않으면 void 타입이 됨
    return; // return으로 반환값을 명시하지 않으면 void 타입이 됨
}
function add2(a, b) {
    console.log(a + b); // return으로 반환값을 명시하지 않으면 void 타입이 됨
}
add(1, 2);
const minus = (a, b) => {
    return String(a - b);
};
const minus2 = (a, b) => {
    return String(a - b);
};
const multiple = (a, b) => () => a * b * 2;
const multiple2 = (a, b) => () => a * b * 2;
console.log(multiple2(1, 2)());
/** 타입 별칭이 쓰이는 곳
/ - 타입이 길어질 때
/ 1. 함수에서
/ 2. 리터럴, 제네릭 등 여러 곳에서
/   ex.
/   type sexType = "MALE" | "FEMALE" | "ETC";
/   const sex: sexType = "MALE";
/   const sex2: sexEnum = sexEnum.MALE;
*/
/** never 타입 */
// - 절대 발생할 수 없는 타입을 나타냄
// - 함수에서 throw를 사용하여 에러를 발생시킬 때
// - 변수가 타입 가드에 의해 아무 타입도 얻지 못하게 좁혀지면 never 타입을 얻게 됨.
// - never 타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있음
// - 하지만 never에는 그 어떤 것도 할당할 수 없음
// - any조차도 never에는 할당할 수 없음
function sendError() {
    console.log("에러 발생");
}
function sendError2() {
    throw { errorCode: 500, message: "internal server error" };
}
const result = sendError();
const result2 = sendError2();
console.log("result: ", result);
console.log("result2: ", result2);
