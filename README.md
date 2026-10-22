# Factorial Feature

This is a project from Codecademy's Full-Stack Engineer path. The goal was to build a factorial method using test-driven development: write a failing test first, write just enough code to make it pass, then clean it up. I used Mocha and Node's built-in `assert` module.

## What it does

`Calculate.factorial(n)` in `index.js` returns n! (n times every whole number below it down to 1). So `factorial(5)` returns 120 and `factorial(3)` returns 6.

It also handles the edge cases:

0! returns 1, which is how factorial is defined in math
Negative numbers throw an error
Decimals like 2.5 throw an error
Anything that isn't a number, like a string, throws an error

My tests in `test/index_test.js` cover all six of those cases, and each one follows the same setup, exercise, verify pattern.

## What I learned

My first version of `factorial` just returned 120. That felt wrong, but it's how TDD works: write the smallest thing that passes. Once I added a test for 3! = 6, the hard-coded answer broke and I had to write the real logic.

For the logic I used `Array.from({ length: n }, (_, i) => i + 1)` to build a list like `[1, 2, 3, 4, 5]`, then `.reduce()` to multiply everything together. The starting value for `.reduce()` has to be 1, not 0. If you start at 0, everything you multiply comes out 0.

That starting value also took care of 0! for free. An input of 0 makes an empty array, and `.reduce()` on an empty array just returns the starting value, so the 0! test passed the first time I ran it.

The extra edge cases surprised me. Before I added a guard clause, `factorial(-3)` quietly returned 1 and `factorial(2.5)` returned 2. No error, just a wrong answer. I added a check with `Number.isInteger()` and `inputNumber < 0` that throws an error, and tested it with `assert.throws` and a regex that matches the error message.

I also hit a couple of my own typos along the way, like `Calulate` instead of `Calculate`, and Mocha's error output pointed me right to the line.

## Running it

You'll need [Node.js](https://nodejs.org/). Then:

```bash
npm install
npm test
```

Output:

```
  Calculate
    .factorial
      ✔ returns 120 when the input is 5 (5! = 120)
      ✔ returns 6 when the input is 3 (3! = 6)
      ✔ returns 1 when the input is 0 (0! = 1)
      ✔ throws an error for a negative number
      ✔ throws an error for a decimal
      ✔ throws an error for a non-number

  6 passing (3ms)
```

Built by DeVante Bush
