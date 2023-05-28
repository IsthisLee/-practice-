"use strict";
// void는 return 값이 없다는 것을 의미s
function add(a, b) {
    // return String(a + b)
    console.log(a + b); // return으로 반환값을 명시하지 않으면 void 타입이 됨
    return; // return으로 반환값을 명시하지 않으면 void 타입이 됨
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
