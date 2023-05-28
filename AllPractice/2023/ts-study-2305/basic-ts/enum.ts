/** Enum 타입 */
// 성별, 부서코드, 카테고리 등의 코드값, ...

// enum의 default 값은 0부터 시작해서 1씩 증가함
enum categoryDefaultEnum {
  H, // 0
  K, // 1
  S // 2
}

enum categoryEnum {
  H = "H",
  K = "K",
  S = "S"
}

const category: categoryEnum = categoryEnum.H; // Enum 타입에는 Enum의 값만 할당할 수 있음

// + JS에는 실제로 enum 타입이 없음. 따라서 enum 타입은 JS 코드로 컴파일 시 funtion으로 구현됨 (enum.js 파일 확인)

// 웹 앱
// ---기준선
//서버

function cate(category: any) {
  console.log(category);
  if (category === "H") {
    console.log("5% 할인");
  } else if (category === "K") {
    console.log("10% 할인");
  } else if (category === "S") {
    console.log("80% 할인");
  } else {
    console.log("서버 멈춤");
  }
}

cate(category);

/** 리터럴 타입 */
enum sexEnum {
  MALE = "MALE",
  FEMALE = "FEMALE",
  ETC = "ETC"
}

const sex: "MALE" | "FEMALE" | "ETC" = "MALE"; // 리터럴 타입 - 스트링만 할당 가능 - 일회성으로 간혹 사용
const sex2: "MALE" | "FEMALE" | "ETC" = sexEnum.MALE;
const sex3: sexEnum = sexEnum.MALE;

console.log(sex);
