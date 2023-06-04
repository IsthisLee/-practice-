/** 자바스크립트(TS) 환경에서는 클래스 사용을 지양하자.
 * js는 프로토타입 기반 언어, java 같은 게 클래스 기반 언어이다.
 * js 환경에서 클래스를 사용하면 프로토타입과 함수 기반으로 변환되기 때문에 성능이 떨어지고 최적화가 어렵다.
 * (ts -> js 컴파일 과정에서 클래스를 함수 기반으로 변환됨.(target ES5로 설정) 확인해보면 알 수 있다.)
 *
 * oop 공부 목적으로 js 환경에서 클래스를 사용해보자.
 *
 * 사용하는 경우 - 재사용이 많은 경우
 */

// 아래 예제를 통해 클래스를 함수 + 인터페이스로 대체하는 방법을 알아보자.
// + 인터페이스는 js 컴파일 과정에서 제거되므로, 빌드된 코드가 가벼워진다.

class Person {
  constructor(public name, public city) {}

  getName() {
    console.log(`my name is ${this.name}`);
  }
}

const p = new Person("geon", "seoul");
console.log(p, p.getName());
console.log(Object.getPrototypeOf(p));

// ----------------------------------------------------------

console.log("--------------------");

// 위 클래스는 아래와 같이 작성할 수 있다.
function Person2(this, name, city) {
  this.name = name;
  this.city = city;

  this.getName = function () {
    console.log(`my name is ${this.name}`);
  };
}

// 상속
function Student(this, name, city, school) {
  Person2.call(this, name, city); // Person2의 this를 Student의 this로 바인딩하여 상속
  this.school = school;

  this.getSchool = function () {
    // 화살표 함수로 작성하면 this가 바인딩 되지 않아 전역 객체(상위 컨텍스트)를 가리키게 되므로 사용 금지.
    console.log(`my school is ${this.school}`);
  };
}

interface IPerson {
  (name: string, city: string): void; // Person 생성자 함수의 타입 정의

  name: string;
  city: string;

  getName: () => void;
}

interface IStudent extends IPerson {
  (name: string, city: string, school: string): void; // Student 생성자 함수의 타입 정의

  school: string;

  getSchool: () => void;
}

const s: IStudent = new Student("geon", "seoul", "seoul high school");
console.log(s, s.getName(), s.getSchool());
