// time complexity: O(n)
// space complexity: O(1)
// All can be merged into one loop
// Use foundDifference, set to true on the first difference, return failuer on the second
// Make sure to check the difference on length is at most one on the beginning
function isZeroAway(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        return false;
      }
    }
    return true;
  }
  
  function oneInsertAway(s1, s2) {
    let iterator1 = 0;
    let iterator2 = 0;
    let difference = 0;
    while(iterator1 < s1.length) {
      if(s1[iterator1] == s2[iterator2]) {
        iterator1++;
        iterator2++;
      } else {
        iterator1++;
        difference += 1;
      }
    }
    return difference <= 1;
  }
  
  function isOnlyReplaceAway(s1, s2) {
    let differences = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        differences += 1;
      }
    }
    return differences <= 1;
  }
  
  function oneAway(s1, s2) {
    if (isZeroAway(s1, s2)) {
      return true;
    }
    if (s1.length == s2.length) {
      return isOnlyReplaceAway(s1, s2);
    } else if (s1.length == s2.length - 1) {
      return oneInsertAway(s1, s2);
    } else if (s1.length - 1 == s2.length) {
      return oneInsertAway(s2, s1);
    }
    return false;
  }
  
  const main = () => {
    console.log(oneAway("pale", "pale")); // true
    console.log(oneAway("pale", "ple")); // true
    console.log(oneAway("pales", "pale")); // true
    console.log(oneAway("paless", "pale")); // false
    console.log(oneAway("pale", "pales")); // true
    console.log(oneAway("pale", "paless")); // false
    console.log(oneAway("pale", "bale")); // true
    console.log(oneAway("pale", "bake")); // false
  };
    
  main();
    