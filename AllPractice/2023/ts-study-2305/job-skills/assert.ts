// 1. ! -> 뒤에 !를 붙이면 null이 아니라고 확신하는 것
/** ex)
 * const testText = document.querySelector("#someText")!;
 * console.log(testText?.id);
 */

// 2. 타입 단언, 타입 캐스팅

// const testText = document.querySelector("#someText");
// console.log((testText as HTMLElement)?.id);

// const testText2 = document.querySelector("#someText") as HTMLElement;
// console.log(testText2?.id);

interface IExam {
  value: number;
}
const example: object = { value: 1 };

// 2-1. as
console.log((example as IExam).value);

const example2 = { value: 1 } as IExam;
console.log(example2.value);

// 2-2. <> (제네릭)
console.log((<IExam>example).value);

// --> 제네릭은 나중에 헷갈릴 수 있으니 as를 사용하는 것을 추천
