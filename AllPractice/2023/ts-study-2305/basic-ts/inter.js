"use strict";
const man = {
    name: "홍길동",
    age: 23
};
// 웹 앱
// 경계선 //
// 서버
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default city"); // 옵셔널 체이닝 없어도 에러 안 나지만, 명시적으로 적어줌
}
prt(man);
