"use strict";
/** Enum 타입 */
// 성별, 부서코드, 카테고리 등의 코드값, ...
// enum의 default 값은 0부터 시작해서 1씩 증가함
var categoryDefaultEnum;
(function (categoryDefaultEnum) {
    categoryDefaultEnum[categoryDefaultEnum["H"] = 0] = "H";
    categoryDefaultEnum[categoryDefaultEnum["K"] = 1] = "K";
    categoryDefaultEnum[categoryDefaultEnum["S"] = 2] = "S"; // 2
})(categoryDefaultEnum || (categoryDefaultEnum = {}));
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
const category = categoryEnum.H; // Enum 타입에는 Enum의 값만 할당할 수 있음
// 웹 앱
// ---기준선
//서버
function cate(category) {
    console.log(category);
    if (category === "H") {
        console.log("5% 할인");
    }
    else if (category === "K") {
        console.log("10% 할인");
    }
    else if (category === "S") {
        console.log("80% 할인");
    }
    else {
        console.log("서버 멈춤");
    }
}
cate(category);
/** 리터럴 타입 */
var sexEnum;
(function (sexEnum) {
    sexEnum["MALE"] = "MALE";
    sexEnum["FEMALE"] = "FEMALE";
    sexEnum["ETC"] = "ETC";
})(sexEnum || (sexEnum = {}));
const sex = sexEnum.MALE;
console.log(sex);
