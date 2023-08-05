/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { oneAway } from "./oneAway";
describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pale", "pale")).toBe(true);
    });

    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pale", "ple")).toBe(false);
    });

    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pales", "pale")).toBe(true);
    });

    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pale", "pales")).toBe(true);
    });

    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pale", "paless")).toBe(false);
    });

    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pale", "bale")).toBe(true);
    });

    test('Test #1', () => {
      // test code goes here
      expect(oneAway("pale", "bake")).toBe(false);
    });
});