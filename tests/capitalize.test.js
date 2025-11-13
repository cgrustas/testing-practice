import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  test("capitalizes first letter of a word", () => {
    expect(capitalize("alpha")).toBe("Alpha");
  });

  test("handles already capitalized strings", () => {
    expect(capitalize("Beta")).toBe("Beta");
  });

  test("handles empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});
