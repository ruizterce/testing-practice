// Capitalize the first character of a string
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Argument is not a string');
  }
  // Skip whitespaces at the start of the string
  let i = 0;
  while (i < string.length && string[i] === ' ') {
    i++;
  }

  // If the string is empty or contains only whitespace, return it
  if (i >= string.length) {
    return string;
  }

  // Capitalize the first non-whitespace character
  return string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1);
}

// Reverse a string
function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('Argument is not a string');
  }

  // Iterate to reversedly add the string characters to reversedString
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    reversedString += string.charAt(string.length - 1 - i);
  }
  return reversedString;
}

// Basic calculator object
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Can't divide by zero");
    }
    return a / b;
  }
};

export { capitalize, reverseString, calculator };
