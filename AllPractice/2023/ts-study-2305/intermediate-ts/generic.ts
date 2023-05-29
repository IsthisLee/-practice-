function printType(params: any) {
  console.log(typeof params);
}

printType("아무거나");
printType(24);
printType({});

// 위 함수는 어떤 값이든 넣으면 해당 타입을 반환해준다.
// 비슷한 맥락으로.. 제네릭이 있다.
// 제네릭은 타입을 인자로 받아서 사용하는 것이다. 함수의 매개변수처럼..

interface IGene<T, U, Z> {
  data: T[]; // 또는 Array<T>
  name: U;
  age: Z;
}

function prt(params: IGene<number, string, number>) {
  console.log(typeof params.data);
  console.log(typeof params.name);
  console.log(typeof params.age);
}
prt({ data: [24, 222, 2344], name: "geon", age: 24 });
