import { add, subtract, divide, multiply, power, factorial, clamp } from '../src/math.js';

describe('math', () => {
  test('add() sums two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract() subtracts the second from the first', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('divide() divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide() throws on divide-by-zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });

  test('multiply() multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 100)).toBe(0);
  });

  test('power() raises base to exponent', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
    expect(power(10, 1)).toBe(10);
  });

  test('factorial() computes n!', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  test('clamp() restricts value to range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-5, 0, 100)).toBe(0);
    expect(clamp(200, 0, 100)).toBe(100);
    expect(clamp(0, 0, 0)).toBe(0);
  });
});
