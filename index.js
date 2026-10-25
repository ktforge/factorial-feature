const Calculate = {
  // n! for any whole number 0 or higher
  factorial(inputNumber) {
    // stop early on negatives, decimals, or anything that isn't a number
    if (!Number.isInteger(inputNumber) || inputNumber < 0) {
      throw new Error("Input must be a non-negative integer");
    }

    // make [1, 2, ..., n] and multiply it all together (0 gives an empty list, so 1)
    const numbers = Array.from({ length: inputNumber }, (_, i) => i + 1);
    return numbers.reduce((total, number) => total * number, 1);
  },
};

module.exports = Calculate;
