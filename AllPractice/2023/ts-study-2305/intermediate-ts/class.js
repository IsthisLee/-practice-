"use strict";
// 아래와 같은 패턴은 Class 외부에서 데이터를 변경할 수 있기 때문에 무결성 유지에 좋지 않다.
class UserInfo {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const user = new UserInfo("거니", 24, "Seoul");
user.age = 13;
// console.log(user.name, user.age, user.city);
// -------
// 접근 제한자를 사용
class UserInfo2 {
    // private은 밑줄(_) 붙이는 것이 관례
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this._city = city;
    }
    // getter
    get city() {
        return this._city + "시";
    }
    // setter
    set city(newCity) {
        this._city = newCity;
    }
}
const user2 = new UserInfo2("거니", 24, "Seoul");
user2.city = "Hwaseong"; // 자동으로 set city() 메서드가 호출됨
console.log(user2.city); // 자동으로 get city() 메서드가 호출됨
