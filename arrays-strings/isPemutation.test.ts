/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { isPermutation } from "./isPemutation";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(isPermutation("ROSE", "ROC")).toBe(false);
    });
  
    test('Test #2', () => {
      // test code goes here
      expect(isPermutation("ROSE", "ROES")).toBe(true);
    });

    test('Test #3', () => {
        // test code goes here
        expect(isPermutation("ROSE", "RO")).toBe(true);
    });
});