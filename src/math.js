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
