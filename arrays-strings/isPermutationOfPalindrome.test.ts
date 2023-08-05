/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { hasPalindromePermutation } from "./isPermutationOfPalindrome";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(hasPalindromePermutation("Tact Coa")).toBe(true);
    });
  
    test('Test #2', () => {
      // test code goes here
      expect(hasPalindromePermutation("Tact Cos")).toBe(false);
    });
});