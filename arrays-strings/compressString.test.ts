/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { compressString } from "./compressString";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(compressString('aabcccaa')).toBe('aabcccaa');
    });
  
    test('Test #2', () => {
      // test code goes here
      expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');

    });
});