/**
 * Represents a calculator.  Contains functions for the basic operations:
 * add, subtract, divide, and multiply
 */
export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) throw new Error("Cannot divide by zero.");

    return a / b;
  },
};
