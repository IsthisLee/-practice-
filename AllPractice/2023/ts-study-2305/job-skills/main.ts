// 모듈 불러오는 방법
// 1.
// import { add, minus } from "./module1";
// console.log(add(1, 2), minus(3, 1));

// 2.
// 다음과 같이 사용 가능
import * as MATH from "./module1";
console.log(MATH.add(1, 2), MATH.minus4(3, 1));
