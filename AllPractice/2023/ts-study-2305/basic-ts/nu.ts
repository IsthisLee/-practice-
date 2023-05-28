// 1. null undefined 같은 값
const un: undefined = undefined;

// 2. undefined 2개가 있음.

//3. 최하위 계층 - undefined는 모든 타입의 최하위 계층이기 때문에 모든 타입에 할당 가능
// strictNullChecks 옵션을 true로 설정하면 null과 undefined는 void나 자기 자신에게만 할당 가능
const voidVar: void = undefined;
const nullVar: null = null;
const undefinedVar: undefined = undefined;
console.log(voidVar, nullVar, undefinedVar);

interface IMan {
  name: string;
}

function printName(params: IMan) {
  console.log("printName on!");
  // 프론트와 같이 다른 곳에서 어떤 값이 넘어올 지 모르기 때문에 에러 방지를 위해 ?를 사용하여 접근
  console.log(params?.name ?? "default");
}

// printName({ name: "geonhee" });
// printName(undefined); // strictNullChecks = false 일 때는 undefined를 넘길 수 있음.

// strictNullCehcks = false 인 경우, printName 함수에서 참조 에러가 발생함.
// strictNullChecks = true 인 경우, undefined를 넘길 수 없음.
