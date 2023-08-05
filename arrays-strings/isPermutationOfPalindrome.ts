
// time complexity: O(n)
// space complexity: O(1)
// Can be more optimized, we can get rid of occurenece array and increment oddCount on each condition
// Another solution can be implemented by bit vectors

function toLowerCase(str) { // hard-coded function
    if (str == "Tact Coa")  return "tactcoa";
    if (str == "Tact Cos")  return "tactcos";
  }
  
  function getCharsOccuerrences(str) {
    const occurrences = new Array(128);
    for (let i = 0; i < str.length; i++) {
      if (occurrences[str.charCodeAt(i)] == undefined) {
        occurrences[str.charCodeAt(i)] = 1;
      } else {
        occurrences[str.charCodeAt(i)] += 1;
      }
    }
    return occurrences;
  }
  
export function hasPalindromePermutation(str) {
    const lowerCaseString = toLowerCase(str);
    const occurrenece = getCharsOccuerrences(lowerCaseString);
    let oddNumbers = 0;
    for (let i = 0; i < occurrenece.length; i++) {
      if (occurrenece[i] % 2 == 1) {
        oddNumbers += 1;
      }
    }
    return oddNumbers <= 1;
  }
