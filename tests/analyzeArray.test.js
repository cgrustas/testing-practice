import { analyzeArray } from "../src/analyzeArray";

describe("analyzeArray", () => {
  test("analyzes empty array", () => {
    expect(() => analyzeArray([])()).toThrow();
  });

  test("handles single element array", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("analyzes array with multiple numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
