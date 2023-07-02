// index.js

class Monster {
  power = 10;

  constructor(qqq) {
    if (qqq) this.power = qqq;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은 " + this.power + "야!!!");
  };

  run = () => {
    console.log("도망가자!!");
  };
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    super(aaa);
  }

  // 오버라이딩 (부모의 run 덮어씀)
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class 지상몬스터 extends Monster {
  constructor(bbb) {
    super(bbb);
  }

  // 오버라이딩
  run = () => {
    console.log("뛰어서 도망가자!!");
  };
}

class 수중몬스터 extends Monster {
  // 오버라이딩
  run = () => {
    console.log("헤엄쳐서 도망가자!!");
  };
}

const mymonster1 = new 공중몬스터();
mymonster1.attack();
mymonster1.run();

const mymonster2 = new 지상몬스터(50);
mymonster2.attack();
mymonster2.run();

const mymonster3 = new 수중몬스터(200);
mymonster3.attack();
mymonster3.run();
