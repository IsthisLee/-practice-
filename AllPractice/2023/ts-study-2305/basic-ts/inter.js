"use strict";
const man = {
    name: "홍길동",
    age: 23
};
// 익명 인터페이스
// 일회용 인터페이스 (잘 사용하지 않긴 함)
const man2 = {
    name: "홍길동",
    age: 23
};
// 웹 앱
// 경계선 //
// 서버
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default city"); // 여기선 옵셔널 체이닝 없어도 에러 안 나지만, 명시적으로 적어줌
}
prt(man);
