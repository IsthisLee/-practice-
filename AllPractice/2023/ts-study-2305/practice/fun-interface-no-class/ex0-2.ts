interface IAdd {
  (a: number, b: number): void; // 함수의 타입을 정의할 때는 매개변수와 반환값의 타입을 정의한다.

  a: number;
  b: number;
  getResult(): number;
}

function add(this: IAdd, a: number, b: number): void {
  this.a = a;
  this.b = b;

  this.getResult = (): number => {
    return this.a + this.b;
  };
}

/** 아래와 같이 함수를 통해 객체를 생성하면 타입 추론이 되지 않아 any 타입이 된다.
 * 따라서 인터페이스를 사용하여 타입을 정의해주어야 한다.
 * 외부 사람이 add 함수를 보고 class인 줄 알고 타입으로 add를 달게 되면, 에러가 난다.
 * typeof add로 작성해도 타입이 함수로 정의되기 때문에 에러가 난다.
 */
const temp1: IAdd = new add(1, 2); // new 연산자를 사용하려면 함수가 void를 반환해야 한다.
const temp2: typeof add = new add(4, 5);

console.log(temp1.getResult());
// console.log(temp2.getResult());
// -> Property 'getResult' does not exist on type '(this: IAdd, a: number, b: number) => void'.ts(2339)
