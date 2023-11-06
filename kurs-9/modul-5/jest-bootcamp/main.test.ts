import {
  multiply,
  capitalize,
  isWaterBoiling,
  intToRoman,
  romanToInt,
} from './main.ts';

describe('Test multiplication', () => {
  test('2 times 2 should result in 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('4 times 3 should result in 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('A string times 5 should throw an error', () => {
    expect(() => multiply('hello', 5)).toThrow();
  });
});

describe('Test capitalization', () => {
  test(`'hello world' should result in 'Hello world'`, () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test(`'test' should result in 'Test'`, () => {
    expect(capitalize('test')).toBe('Test');
  });

  test('Empty string should throw an error', () => {
    expect(() => capitalize('')).toThrow();
  });
});

describe('Test if water is boiling', () => {
  test('Water should not be boiling at 60 degrees celius', () => {
    expect(isWaterBoiling(60)).toBeFalsy();
  });

  test('Water should not be boiling at 80 degrees celius', () => {
    expect(isWaterBoiling(80)).toBeFalsy();
  });

  test('Water should be boiling at 100 degrees celius', () => {
    expect(isWaterBoiling(100)).toBeTruthy();
  });

  test('Water should be boiling at 120 degrees celius', () => {
    expect(isWaterBoiling(120)).toBeTruthy();
  });

  test('Non-number input should throw an error', () => {
    expect(() => isWaterBoiling('hello')).toThrow();
  });
});

describe('Roman numerals', () => {
  const cases = [
    [1, 'I'],
    [2, 'II'],
    [4, 'IV'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [14, 'XIV'],
    [52, 'LII'],
    [128, 'CXXVIII'],
    [256, 'CCLVI'],
    [1337, 'MCCCXXXVII'],
  ];

  test.each(cases)('%p should be %p', (number, expected) => {
    expect(intToRoman(Number(number))).toBe(expected);
  });
});

describe('Roman numerals', () => {
  const cases = [
    ['I', 1],
    ['II', 2],
    ['IV', 4],
    ['IX', 9],
    ['X', 10],
    ['XI', 11],
    ['XIV', 14],
    ['LII', 52],
    ['CXXVIII', 128],
    ['CCLVI', 256],
    ['MCCCXXXVII', 1337],
  ];

  test.each(cases)('Roman numeral %p should be %p', (number, expected) => {
    expect(romanToInt(String(number))).toBe(expected);
  });
});
