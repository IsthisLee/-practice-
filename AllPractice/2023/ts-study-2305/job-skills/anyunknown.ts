// any, unknown
const user: any = {
  ID: "geon"
};
console.log(user.ID);
console.log(user.name);
console.log(user.length);

// unknown
// - any와 마찬가지로 모든 타입을 허용
// - any와 달리 unknown은 타입을 체크하지 않으면 다른 곳에 할당할 수 없음
// - unknown은 확신이 없는 타입을 다룰 때 사용.. 잘 사용하지 않음
// - 조건문, 타입 가드, 타입 단언 등을 통해 사용 가능
interface IUser {
  ID: string;
  name: string;
}
const newUser: unknown = {
  ID: "geon"
};
// 타입 가드
function isIUser(user: any): user is IUser {
  return user.ID !== undefined;
}
if (isIUser(newUser)) {
  console.log(newUser.ID);
  console.log(newUser.name);
}
// 타입 단언
console.log((newUser as IUser).ID);
console.log((newUser as IUser).name);
// 타입 단언은 타입 가드보다 더 강력한 기능을 제공
// 타입 단언은 컴파일러에게 "나는 이 변수의 타입을 확신한다"라고 말하는 것
// 타입 단언은 타입 가드와 달리 무조건 컴파일을 통과
