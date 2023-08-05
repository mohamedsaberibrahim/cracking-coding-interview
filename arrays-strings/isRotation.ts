// time complexity: O(n)
function isSubstring (s1, s2) {
    return s1.includes(s2);
  }
  
  function isRotationComplicated(s1, s2) {
    if (s1.length != s2.length) return false;
    let j = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] == s2[j] && j == 0) {
        if (!isSubstring(s1, s2.slice(0, s2.length - i))) { return false };
        j += 1;
      } else if (s1[i] == s2[j] && j > 0) {
        j += 1;
      } else if (s1[i] !== s2[j] && j > 0) {
        return false;
      }
    }
    return true;
  }
  
export function isRotation (s1, s2) {
  const s1s1 = s1 + s1;
  return isSubstring(s1s1, s2);
}
