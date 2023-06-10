import { ICalculator } from "./cal";

export class CalculatorImplV3 implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }

  multiple(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return (a / b) * 2;
  }
}
