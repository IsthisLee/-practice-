// 제네릭 연습
// 2. 함수에 제네릭 적용
function returnParams(params) {
    return params;
}
returnParams("hi");
returnParams(24);
returnParams(true);
// 3. 함수를 타입으로 넣을 때 제네릭 적용
var rP = returnParams;
function prtKey(params, key) {
    console.log(params[key]);
    return params[key];
}
prtKey({ name: "geon", age: 24 }, "name");
prtKey({ city: "seoul", phone: "01012345678" }, "phonesss");
