// time complexity: O(n)
// space complexity: O(n)
// Will be string building/ string manipulation on C++/ Java
// Javascript strings are immutuable (every operation builds new string)
// article: https://josephmate.github.io/java/javascript/stringbuilder/2020/07/27/javascript-does-not-need-stringbuilder.html

function urlify(str, realLength) {
  let urlified = new Array(realLength);
    for (let i = 0; i < realLength; i ++) {
      if (str[i] == ' ') {
        urlified[i] = '%20';
      } else {
        urlified[i] = str[i];
      }
    }
  return urlified.join("");
}

const main = () => {
    console.log(urlify("Mr John Smith     ", 13));
};

main();
