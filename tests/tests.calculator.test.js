import { calculator } from "../src/calculator";

describe("calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(calculator.add(2, 2)).toBe(4);
    });

    test("adds one positive, one negative number", () => {
      expect(calculator.add(-1, 2)).toBe(1);
    });

    test("adds two negative numbers", () => {
      expect(calculator.add(-1, -3)).toBe(-4);
    });

    test("adds two decimal numbers", () => {
      expect(calculator.add(1.4, 2.4)).toBeCloseTo(3.8);
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers", () => {
      expect(calculator.subtract(2, 2)).toBe(0);
    });

    test("subtracts one positive, one negative number", () => {
      expect(calculator.subtract(-1, 2)).toBe(-3);
    });

    test("subtracts two negative numbers", () => {
      expect(calculator.subtract(-1, -3)).toBe(2);
    });

    test("subtracts two decimal numbers", () => {
      expect(calculator.subtract(1.4, 2.4)).toBeCloseTo(-1);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });

    test("multiplies one positive, one negative number", () => {
      expect(calculator.multiply(-1, 2)).toBe(-2);
    });

    test("multiplies two negative numbers", () => {
      expect(calculator.multiply(-1, -3)).toBe(3);
    });

    test("multiplies by zero", () => {
      expect(calculator.multiply(1.4, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers", () => {
      expect(calculator.divide(2, 2)).toBe(1);
    });

    test("divides one positive, one negative number", () => {
      expect(calculator.divide(-1, 2)).toBeCloseTo(-(1 / 2));
    });

    test("divides two negative numbers", () => {
      expect(calculator.divide(-1, -3)).toBeCloseTo(1 / 3);
    });

    test("divides by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero.");
    });
  });
});
