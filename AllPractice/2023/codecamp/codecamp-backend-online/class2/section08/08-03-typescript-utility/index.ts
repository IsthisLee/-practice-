// 기존에 있던 Type들을 변형해서 변형된 타입을 새로 만들어주는 역할을 함.
// 코드의 가독성을 높이기 위해(같은 코드를 여러번 작성하지 않기 위해, 유지보수 편리함을 위해) 많이 사용

interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
// 모든 속성을 optional로 만들어줌
type aaa = Partial<IProfile>;

// 2. Required 타입
// 모든 속성을 필수로 만들어줌
type bbb = Required<IProfile>;

// 3. Pick 타입
// 특정 속성만 뽑아서 만들어줌
type ccc = Pick<IProfile, "name" | "hobby">;

// 4. Omit 타입
// 특정 타입만 제외하고 만들어줌
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
// 특정 타입을 키로 사용해서 만들어줌
// Record<Key, Type>으로 사용하며, Key로 들어온 타입을 Type 값을 가지는 타입으로 만들어줌

type eee = "철수" | "영희" | "훈이"; // Union 타입(합집합)
let child1: eee = "철수"; // -> 철수, 영희, 훈이만 됨. string보다 좁고 안전한 타입
let child2: string = "사과"; // -> 철수, 영희, 훈이, 사과, 바나나 다 됨.

type fff = Record<eee, IProfile>; // Record 타입

// 6. keyof
// 객체의 key 값으로 Union 타입 만들기
type ggg = keyof IProfile; // => "name" | "age" | "school" | "hobby"
const myProfile: ggg = "hobby";

// 7. type과 interface의 차이
// interface는 선언병합 가능, type은 불가능
interface IProfile {
  candy: number; // 선언병합으로 기존 IProfile에 candy 추가
}

// 8. 배운 것 응용
let profile: Partial<IProfile> = {
  // Command + i 누르면 타입 확인 가능
  candy: 100,
  hobby: "게임",
};

type IProfileWithRequiredHobby = Required<Pick<IProfile, "hobby">> & Omit<IProfile, "hobby">;
