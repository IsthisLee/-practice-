// 타입 추론
let aaa = "hello";
// aaa = 3;

// 타입 명시
let bbb: string = "hello2";
// bbb = 19;

// 타입 명시가 필요한 상황
let ccc: number | string = 1000;
// ccc = "1000원";

// 숫자타입
let ddd: number = 10;
// ddd = "철수";

// 불린타입
let eee: boolean = true;
eee = false;
// eee = "false";

// 배열타입
// let fff: number[] = [1, 2, 3, "안녕"];
let ggg: string[] = ["가", "나", "다"];
let hhh: (number | string)[] = [1, 2, 3, "안녕"];

// 객체타입
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}
const profile: IProfile = {
  name: "철수",
  age: 22,
  school: "다람쥐초등학교"
};
profile.name = "훈이";
profile.age = "24살";
profile.hobby = "수영";

// 함수타입 => 어디서 몇번이든 호출  가능함. 따라서 타입추론 불가(반드시 타입명시 필요!!)
type TAdd = (num1: number, num2: number, unit: string) => string;
const add = (num1: number, num2: number, unit: string): string => {
  return num1 + num2 + unit;
};
const add2: TAdd = (num1: number, num2: number, unit: string): string => {
  return num1 + num2 + unit;
};
function add3(num1: number, num2: number, unit: string): string {
  return num1 + num2 + unit;
}

const result = add(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능!!! (result에 마우스 올려보면 타입추론 결과 확인 가능)

// any 타입 => js와 다를 것 없음. 가능한 지양
let qqq: any = "철수";
qqq = 123;
qqq = true;
