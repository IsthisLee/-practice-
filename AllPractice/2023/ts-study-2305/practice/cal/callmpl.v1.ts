// 2. 구현 클래스 만들기(인터페이스 구현)

import { ICalculator } from "./cal";

export class CalculatorImplV1 implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }

  multiple(a: number, b: number): number {
    return a * b;
  }
}
