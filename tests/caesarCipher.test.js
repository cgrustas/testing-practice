import { caesarCipher } from "../src/caesarCipher";

describe("caesarCipher", () => {
  test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("follows original letter-casing", () => {
    expect(caesarCipher("hiTheRE", 8)).toBe("pqBpmZM");
  });

  test("punctuation remains unchanged", () => {
    expect(caesarCipher("stop, drop, and roll.", 8)).toBe(
      "abwx, lzwx, ivl zwtt.",
    );
  });
});
