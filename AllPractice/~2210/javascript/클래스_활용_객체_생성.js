//클래스 활용 객체 생성//

//객체 클래스 선언 및 생성자 함수 작성, 메소드 정의
class clothes {
  //생성자 함수 작성
  //배열에 매개변수의 값을 추가함
  constructor(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
  }
  //메소드 정의
  clothInfo() {
    console.log(
      `색깔 : ${this.color}, 사이즈 : ${this.size}, 가격 : ${this.price}`
    );
  }
}
//클래스를 활용해 객체 생성, 변수에 할당
const cloth1 = new clothes("black", "xl", 10000);

cloth1.clothInfo();

//배열//

const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

rainbowColors.push("ultraviolet"); // 배열의 마지막에 ultarviolet 추가
console.log(rainbowColors); // ultraviolet이 추가된 rainbowColors 출력

rainbowColors.pop(); // 배열의 마지막 요소 ultraviolet을 제거
console.log(rainbowColors); // ultraviolet이 제거된 rainbowColors 출력

for (const a of rainbowColors) {
  console.log(a);
}
