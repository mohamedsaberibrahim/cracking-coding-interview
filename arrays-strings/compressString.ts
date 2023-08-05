// time complexity: O(n)
// space complexity: O(n)
// Make sure to use string builder
// You can use countCompressed before compressing the string to split validating, compressing processes 
// - saves space if not compressible
// - gets the real length of compressed array

export function compressString(str) {
    const frequencies = new Array(str.length);
    let currentChar = str[0];
    let currentFrequecy = 1;
    for (let i = 1; i < str.length; i++) {
      if (currentChar == str[i]) {
        currentFrequecy += 1;
      } else {
        frequencies.push(`${currentChar}${currentFrequecy}`);
        currentChar = str[i];
        currentFrequecy = 1;
      }
    }
    frequencies.push(`${currentChar}${currentFrequecy}`);
    const frequencyAsStr = frequencies.join('');
    return frequencyAsStr.length >= str.length ? str : frequencyAsStr;
  }
  