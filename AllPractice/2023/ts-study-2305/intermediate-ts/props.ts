// 아래와 같은 방식은 interface가 계속 늘어날 경우, interface 관리가 힘들어진다.
interface IName {
  name: string;
}

interface ISchool {
  school: string;
}

interface ICity {
  city: string;
}

function prt(params: IName | ISchool | ICity) {
  if ("name" in params) console.log(params.name);
  else if ("school" in params) console.log(params.school);
  else if ("city" in params) console.log(params.city);
}
prt({ name: "geon" });

// -----------------

// type은 고정되어 있고, key는 유동적으로 변할 때 아래와 같이 사용한다.
interface ISuperKey {
  [props: string]: string; // keyof 라는 예약어가 있어서 props라고 쓰는 편
}

function prt2(params: ISuperKey) {
  if ("name" in params) console.log(params.name);
  else if ("school" in params) console.log(params.school);
  else if ("city" in params) console.log(params.city);
  else console.log("error 500"); // 원하지 않는 key가 들어왔을 때 분기 처리
}
prt2({ name2: "geon" }); // 원하지 않는 key
