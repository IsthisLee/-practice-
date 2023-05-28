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
