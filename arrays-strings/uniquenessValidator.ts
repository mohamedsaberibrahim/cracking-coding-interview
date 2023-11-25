
// time complexity O(n)
// space complexity O(1)

// Is the input all ASCII characters? Or only small characters?
// - ASCII, the implemented below
// - Small character can have a solution with XOR without any extra data stucture
// - O(N^2) without any additional data structure
// - O(N*logN) If it is allowed to modify the input, sort then linear search

export class UniquenessValidator {
  run(s: string): boolean {
    if(s.length > 128) return false;

    const arr = new Array(128);
    for (let i = 0; i < s.length; i++) {
      if (arr[s.charCodeAt(i)]) {
        return false;
      }
      arr[s.charCodeAt(i)] = true;
    }
    return true;
  }
}
