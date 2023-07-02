// class Date {
//   qqq = 3;

//   getFullYear() {}

//   getMonth() {}
// }

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());

class Monster {
  power = 10;

  attack = () => {
    console.log("내 공격력은 " + this.power + "입니다.");
  };
}

const monster = new Monster();
monster.attack();
