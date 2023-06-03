// 모듈 불러오는 방법
// 1. 하나씩 불러오기
// import { add, minus } from "./module1";
// console.log(add(1, 2), minus(3, 1));

// 2. 한번에 불러오기
// 다음과 같이 사용 가능
// import * as MATH from "./module1";
// console.log(MATH.add(1, 2), MATH.minus4(3, 1));

// 3. namespace 사용하기
import * as MATH from "./module2";
console.log(MATH.MyMath.add(1, 2), MATH.MyMath.minus4(3, 1));
