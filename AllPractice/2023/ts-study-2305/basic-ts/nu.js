"use strict";
// 1. null undefined 같은 값
const un = undefined;
// 2. undefined 2개가 있음.
//3. 최하위 계층 - undefined는 모든 타입의 최하위 계층이기 때문에 모든 타입에 할당 가능
// strictNullChecks 옵션을 true로 설정하면 null과 undefined는 void나 자기 자신에게만 할당 가능
const voidVar = undefined;
const nullVar = null;
const undefinedVar = undefined;
console.log(voidVar, nullVar, undefinedVar);
function printName(params) {
    var _a;
    console.log("printName on!");
    console.log((_a = params === null || params === void 0 ? void 0 : params.name) !== null && _a !== void 0 ? _a : "default");
}
// printName({ name: "geonhee" });
printName(undefined);
