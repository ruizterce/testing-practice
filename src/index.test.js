import { capitalize, reverseString } from './index';

// Capitalize

test('capitalize returns a string with the first character capitalized', () => {
  expect(capitalize('mars')).toBe('Mars');
  expect(capitalize('VENUS')).toBe('VENUS');
});

test('capitalize returns a single character string capitalized', () => {
  expect(capitalize('m')).toBe('M');
  expect(capitalize('V')).toBe('V');
});

test('capitalize returns an empty string when given an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('capitalizes strings with leading and trailing whitespace', () => {
  expect(capitalize('   hello')).toBe('   Hello');
  expect(capitalize('world   ')).toBe('World   ');
});

test('capitalizes strings with accented characters', () => {
  expect(capitalize('élève')).toBe('Élève');
  expect(capitalize('über')).toBe('Über');
});

test('capitalizes strings with non-Latin characters', () => {
  expect(capitalize('привет')).toBe('Привет');
  expect(capitalize('你好')).toBe('你好');
});

test('capitalize throws an error if argument is not a string', () => {
  expect(() => capitalize(1)).toThrow('Argument is not a string');
  expect(() => capitalize(null)).toThrow('Argument is not a string');
  expect(() => capitalize({})).toThrow('Argument is not a string');
  expect(() => capitalize(undefined)).toThrow('Argument is not a string');
});

// reverseString
test('reverseString returns a string reversed', () => {
  expect(reverseString('mars')).toBe('sram');
  expect(reverseString('VENUS')).toBe('SUNEV');
});

test('reverseString returns a single character unchanged', () => {
  expect(reverseString('m')).toBe('m');
  expect(reverseString('V')).toBe('V');
});

test('reverseString returns an empty string when given an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverseString  reverses strings with leading and trailing whitespace', () => {
  expect(reverseString('   hello')).toBe('olleh   ');
  expect(reverseString('world   ')).toBe('   dlrow');
});

test('reverseString reversesstrings with accented characters', () => {
  expect(reverseString('élève')).toBe('evèlé');
  expect(reverseString('über')).toBe('rebü');
});

test('reverseString reverses strings with non-Latin characters', () => {
  expect(reverseString('привет')).toBe('тевирп');
  expect(reverseString('你好')).toBe('好你');
});

test('reverseString throws an error if argument is not a string', () => {
  expect(() => reverseString(1)).toThrow('Argument is not a string');
  expect(() => reverseString(null)).toThrow('Argument is not a string');
  expect(() => reverseString({})).toThrow('Argument is not a string');
  expect(() => reverseString(undefined)).toThrow('Argument is not a string');
});
