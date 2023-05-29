// 아래와 같은 패턴은 Class 외부에서 데이터를 변경할 수 있기 때문에 무결성 유지에 좋지 않다.
class UserInfo {
  name: string;
  age: number;
  city: string;

  constructor(name: string, age: number, city: string) {
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
  public name: string; // public: 접근-get, 설정-set 2개가 외부, 내부 자유로움
  protected weight: number; // protected: 접근-get, 설정-set 2개가 자기 자신 + 자신을 상속받은 자식에게만 허용됨
  private _city: string; // private: 접근-get, 설정-set 2개가 자기 자신에게만 허용됨
  private _age: number;
  // private은 밑줄(_) 붙이는 것이 관례

  constructor(name: string, weight: number, city: string, age: number) {
    this.name = name;
    this.weight = weight;
    this._city = city;
    this._age = age;
  }

  // private 은 getter, setter를 사용하여 접근할 수 있음
  // 데이터를 다루는 값은 private으로 설정하여 getter, setter를 사용하는 것이 좋음

  // ---- getter ----
  /** getter를 사용하면 원하는 로직을 추가하여 값을 리턴할 수 있음
   * 백엔드에서 데이터를 가져올 때, 데이터를 가공하여 가져오는 경우가 많음
   * 이런 경우, getter를 사용하여 가공된 데이터를 가져올 수 있음
   */
  get city(): string {
    return this._city + "시";
  }

  // ---- setter ----
  set city(newCity: string) {
    this._city = newCity;
  }
  set age(newAge: number) {
    if (newAge < 0) this._age = 0; // 요구사항에 따라 에러를 내는 등 로직을 추가할 수 있음
    // 데이터 무결성 유지
    this._age = newAge;
  }
}

const user2 = new UserInfo2("거니", 62, "Seoul", 24);
user2.city = "Hwaseong"; // 자동으로 set city() 메서드가 호출됨
console.log(user2.city); // 자동으로 get city() 메서드가 호출됨

user.age = -24; // setter를 사용하면, 원하는 로직을 추가하여 값을 설정할 수 있음
// 위와 같이 나이가 음수가 되는 것을 막을 수 있음
// 오류나 안 좋은 코드는 아니지만, 말이 안되는 값과 데이터의 무결성을 맞추기 위해 사용
