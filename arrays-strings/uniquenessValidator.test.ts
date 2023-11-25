/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { UniquenessValidator } from './uniquenessValidator';

describe('UniquenessValidator test cases', () => {
    test('Should fail if not unique string passed', () => {
      const uniquenessValidator = new UniquenessValidator();
      expect(uniquenessValidator.run("Hello World")).toBe(false);
    });

    test('Should succeed if unique string passed', () => {
      const uniquenessValidator = new UniquenessValidator();
      expect(uniquenessValidator.run("Helo Wrd")).toBe(true);
    });

    test('Should success if empty string passed', () => {
      const uniquenessValidator = new UniquenessValidator();
      expect(uniquenessValidator.run("")).toBe(true);
    });
});
