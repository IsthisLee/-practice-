import { ICalculator } from "./cal";

export class CalculatorImplV2 implements ICalculator {
  add(a: number, b: number): number {
    return a + b + 3 + 1 + 2;
  }

  minus(a: number, b: number): number {
    return a - b - 2 - 31 - 3;
  }

  multiple(a: number, b: number): number {
    return a * b * 2 - 1 + 2;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}
