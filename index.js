// Calculate object that holds the factorial method
const Calculate = {
  // Returns n! for any non-negative integer
  factorial(inputNumber) {
    // Guard clause: only accept non-negative whole numbers
    if (!Number.isInteger(inputNumber) || inputNumber < 0) {
      throw new Error('Input must be a non-negative integer');
    }

    // Build [1, 2, ..., inputNumber] and multiply them together
    const numbers = Array.from({ length: inputNumber }, (_, i) => i + 1);
    return numbers.reduce((total, number) => total * number, 1);
  }
};

module.exports = Calculate;
