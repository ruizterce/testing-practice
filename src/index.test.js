import { capitalize } from './index';

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
