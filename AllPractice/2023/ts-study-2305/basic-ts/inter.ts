// 명세, 타입, 클래스를 만들 때
// interface는 타입을 정의하는 것이다.
interface IPerson {
  name: string;
  age: number;
  city?: string; // ?는 있어도 되고 없어도 되는 것을 의미
}

const man: IPerson = {
  name: "홍길동",
  age: 23
};

// 익명 인터페이스
// 일회용 인터페이스 (잘 사용하지 않긴 함)
const man2: {
  name: string;
  age: number;
  city?: string;
} = {
  name: "홍길동",
  age: 23
};

// 웹 앱
// 경계선 //
// 서버

function prt(params: IPerson) {
  console.log(params?.city ?? "default city"); // 여기선 옵셔널 체이닝 없어도 에러 안 나지만, 명시적으로 적어줌
}
prt(man);
