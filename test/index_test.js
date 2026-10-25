var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("returns 120 when the input is 5 (5! = 120)", () => {
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });

    it("returns 6 when the input is 3 (3! = 6)", () => {
      // Setup
      const inputNumber = 3;
      const expectedResult = 6;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });

    it("returns 1 when the input is 0 (0! = 1)", () => {
      // Setup
      const inputNumber = 0;
      const expectedResult = 1;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });

    it("throws an error for a negative number", () => {
      // Setup
      const inputNumber = -3;

      // Exercise
      const exercise = () => Calculate.factorial(inputNumber);

      // Verify
      assert.throws(exercise, /non-negative integer/);
    });

    it("throws an error for a decimal", () => {
      // Setup
      const inputNumber = 2.5;

      // Exercise
      const exercise = () => Calculate.factorial(inputNumber);

      // Verify
      assert.throws(exercise, /non-negative integer/);
    });

    it("throws an error for a non-number", () => {
      // Setup
      const inputNumber = "abc";

      // Exercise
      const exercise = () => Calculate.factorial(inputNumber);

      // Verify
      assert.throws(exercise, /non-negative integer/);
    });
  });
});
