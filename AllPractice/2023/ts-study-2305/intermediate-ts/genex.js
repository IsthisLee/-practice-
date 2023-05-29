/**
 * extends 키워드 사용
 * - 목적
 * 1. 제한 (안전성)
 * 2. 보장을 위해 (1번과 같은 맥락)
 */
// 1. 제한
function prt(params, params2) {
    if (typeof params === "string")
        console.log("문자열 입니다");
    else if (typeof params === "number")
        console.log("숫자 입니다");
    if (typeof params2 === "boolean")
        console.log("불리언 입니다");
    else if (typeof params2 === "object")
        console.log("어떤 객체 입니다");
}
prt("문자열", true);
prt(24, {});
// extends IHi를 통해 params에 hi 함수가 있음을 보장
function execute(params) {
    params.hi("geon");
}
execute({
    hi: function (name) {
        console.log("hi!", name);
    }
});
