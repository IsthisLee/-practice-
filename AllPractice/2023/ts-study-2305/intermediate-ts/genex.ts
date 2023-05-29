/**
 * extends 키워드 사용
 * - 목적
 * 1. 제한 (안전성)
 * 2. 보장을 위해 (1번과 같은 맥락)
 */

// 1. 제한 (안전하게)
function prt<T extends string | number, U extends boolean | object>(
  params: T,
  params2: U
) {
  if (typeof params === "string") console.log("문자열 입니다");
  else if (typeof params === "number") console.log("숫자 입니다");

  if (typeof params2 === "boolean") console.log("불리언 입니다");
  else if (typeof params2 === "object") console.log("어떤 객체 입니다");
}
prt<string, boolean>("문자열", true);
prt<number, object>(24, {});

// 2. 보장을 위해
interface IHi {
  hi: (name: string) => void;
}
// extends IHi를 통해 params에 hi 함수가 있음을 보장
function execute<T extends IHi>(params: T) {
  params.hi("geon");
}
execute({
  hi(name: string) {
    console.log("hi!", name);
  }
});
