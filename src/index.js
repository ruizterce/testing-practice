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

// Cesar cipher - Swap each character to the one shifted by n = shiftFactor characters in the alphabet
function cesarCipher(string, shiftFactor) {
  let cipheredString = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // Lowercase
    if (char.match(/[a-z]/)) {
      cipheredString += shiftChar(char, shiftFactor, 97);
    }
    // Uppercase
    else if (char.match(/[A-Z]/)) {
      cipheredString += shiftChar(char, shiftFactor, 65);
    }
    // Not a letter
    else {
      cipheredString += char;
    }
  }
  return cipheredString;
}

// Auxiliary - Convert character to Unicode value, shift by shiftFactor, wrap around and convert back to character
function shiftChar(char, shiftFactor, baseCharCode) {
  let newCharCode = (char.charCodeAt(0) - baseCharCode + shiftFactor) % 26;
  // Wrap around if negative
  if (newCharCode < 0) newCharCode += 26;
  return String.fromCharCode(newCharCode + baseCharCode);
}

function analyzeArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length
  };
}

export { capitalize, reverseString, calculator, cesarCipher, analyzeArray };
