// Sample module — the code that gets reviewed on every PR.

/** @param {number} a @param {number} b @returns {number} */
export function add(a, b) {
  return a + b;
}

/** @param {number} a @param {number} b @returns {number} */
export function subtract(a, b) {
  return a - b;
}

/** Divide a by b; throws on divide-by-zero. */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/** Multiply two numbers. */
export function multiply(a, b) {
  return a * b;
}

/**
 * Raise base to the given exponent.
 * Only supports non-negative integer exponents.
 */
export function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

/**
 * Compute the factorial of n.
 * Uses recursion for clarity.
 */
export function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Clamp a value between a minimum and maximum.
 */
export function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
