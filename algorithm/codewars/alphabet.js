// n this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return Array.from(text).reduce((acc, v) => {
    const temp = alphabet.indexOf(v.toLowerCase());
    return temp !== -1
      ? acc + " " + (temp + 1)
      : acc;
  }, '').substring(1);
}


alphabetPosition("The sunset sets at twelve o' clock.") // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight.") // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

// good example
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

let alphabetPosition = (text) => 
  text.toUpperCase()
  .replace(/[^A-Z]/g, '')
  .split('')
  .map(ch => ch.charCodeAt(0) - 64)
  .join(' ');