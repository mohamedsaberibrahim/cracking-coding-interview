/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { urlify } from "./urlify";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(urlify("Mr John Smith     ", 13)).toBe('Mr%20John%20Smith');
    });
});