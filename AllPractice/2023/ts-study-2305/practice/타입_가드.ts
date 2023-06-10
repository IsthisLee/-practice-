interface IDetail {
  name: string;
  age: number;
  city: string;
}

class IDetail2 {
  constructor(public name: string, public age: number, public city: string) {}
}

type typeSNS = "KAKAO" | "NAVER" | "GOOGLE";

interface IUser {
  detail: IDetail2;
  marketing: boolean;
  sns: typeSNS;
}

function setUser(
  target: IUser,
  param: keyof IUser,
  newValue: (typeof target)[typeof param]
) {
  // target[param] = newValue; // type 오류 발생 -> type guard 필요

  // type guard
  if (param === "marketing" && typeof newValue === "boolean") {
    target[param] = newValue;
  } else if (
    param === "detail" /** typeof newValue === "object" -> object로 오겠지만, 
  들어오는 객체의 형태를 확정짓고 싶다. 더 안전하게. -> interface를 class로 변경하고 instance of 사용 */ &&
    newValue instanceof IDetail2 // instanceof: class의 instance인지 확인
  ) {
    target[param] = newValue;
  } else if (param === "sns" && typeof newValue === "string") {
    const v: typeSNS = newValue;
    target[param] = v;
  }
}

const detail: IDetail2 = new IDetail2("geon", 24, "seoul");
const user: IUser = {
  detail,
  marketing: true,
  sns: "KAKAO"
};
console.log(user);
setUser(user, "sns", "NAVER");
setUser(user, "detail", new IDetail2("geon", 25, "hwaseong"));
console.log(user);
