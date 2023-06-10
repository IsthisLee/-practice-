// 데이터의 무결성은 함수의 getter, setter를 통해 이야기했음.

// 이번에는 프록시로 데이터의 무결성을 보장하는 방법을 알아보자.
// 상황에 따라 프록시가 유용할 수 있음.

interface ICar {
  name: string;
  speed: number;
}
const car = { speed: 0, name: "" };

const carProxy: ICar = new Proxy<ICar>(car, {
  get(target: ICar, param: keyof ICar) {
    console.log("get", target, param);

    return target[param];
  },
  set(
    target: ICar,
    param: keyof ICar,
    // newValue: (typeof target)[typeof param] // -> number | string으로 제한됐지만, 어떠한 타입이 들어올지 몰라 타입 가드가 필요함.
    newValue: any // 타입 가드는 다음 강의에서 다룸.
  ) {
    console.log("set", target, param, newValue);

    if (param === "speed") target.speed = newValue > 0 ? newValue : 0;
    return true;
  }
});

carProxy.speed = 20;
console.log(carProxy.speed);
