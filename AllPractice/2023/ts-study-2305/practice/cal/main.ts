// 3. 구현된 걸 사용(타입은 cat.ts에 정의된 걸 사용)

import { ICalculator } from "./cal";
import { CalculatorImplV1 } from "./callmpl.v1";
import { CalculatorImplV2 } from "./calImpl.v2";
import { CalculatorImplV3 } from "./calImpl.v3";

const cal: ICalculator = new CalculatorImplV3();
console.log(cal.add(1, 2));
console.log(cal.minus(1, 2));
console.log(cal.multiple(1, 2));

/**
 * 타입에 클래스가 아닌 인터페이스를 사용하는 이유는?
 *
 * 1. OOP
 * - 결합도를 낮추기 위함
 * (ex. 자동차 부품을 교체할 때, 타이어가 고장나면 타이어만 수리하면 되도록
 * 결합도가 높으면 타이어만 교체하는 것이 아니라, 타이어와 연관된 부품들도 함께 교체해야 한다.)
 *
 * 2. 설계
 * - OOP는 언제든지 확장이 되고, 변경, 커질 수 있다는 가능성을 갖고 있음.
 * 큰 건물을 세울 때 설계도가 필요한 것처럼, 프로그램도 설계도가 필요함.(설계도 = 인터페이스)
 * 요구사항이 들어오면 설계도를 작성하고 구현을 하는 것이 좋음.
 *
 * -> 구현된 클래스를 버전별로 바꿔가면서 사용할 수 있음.
 * -> 요구사항이 변경되었다가 다시 기존으로 돌아가면, 기존 버전의 클래스를 사용하면 됨.
 */
