import { reverseString } from "../src/reverseString";

describe("reverseString", () => {
  test("reverses a lowercase string", () => {
    expect(reverseString("alpha")).toBe("ahpla");
  });

  test("reverses a case sensitive string", () => {
    expect(reverseString("raceCAR")).toBe("RACecar");
  });

  test("handles empty strings", () => {
    expect(reverseString("")).toBe("");
  });
});
