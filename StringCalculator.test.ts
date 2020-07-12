import StringCalculator from "./StringCalculator";

let sc: StringCalculator;

describe("String Calculator", () => {
  beforeEach(() => {
    sc = new StringCalculator();
  });

  it("should return 0 when passing an empty string", () => {
    expect(sc.add("")).toBe(0);
  });

  it("should return the number when there is only one", () => {
    expect(sc.add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(sc.add("1,2")).toBe(3);
  });

  it("should add any amount of numbers", () => {
    expect(sc.add("1,2,3,4,5")).toBe(15);
  });

  it("should allow newline as separator", () => {
    expect(sc.add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(sc.add("//;\n1;2")).toBe(3);
  });

  it("should throw an exception on negative numbers", () => {
    expect.assertions(1);
    try {
      sc.add("1,-2,3,-4");
    } catch (e) {
      expect(e.message).toBe("negatives not allowed: received -2,-4");
    }
  });
});
