/**
 * BinarySearchTree
 *
 * An implementation for BST using Tree Node
 */

import { BinarySearchTree } from './BinarySearchTree';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('should insert nodes correctly', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    const inOrderTraversal = [...bst.inOrderTraverse()].map((node) => node.data);
    expect(inOrderTraversal).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('should search for nodes correctly', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);

    const foundNode = bst.search(7);

    expect(foundNode).toBeDefined();
    expect(foundNode.data).toBe(7);
  });

  it('should return undefined when searching for non-existent nodes', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);

    const foundNode = bst.search(9);

    expect(foundNode).toBeUndefined();
  });

  it('should perform in-order traversal correctly', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    const inOrderTraversal = [...bst.inOrderTraverse()].map((node) => node.data);
    expect(inOrderTraversal).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('should perform pre-order traversal correctly', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    const preOrderTraversal = [...bst.preOrderTraverse()].map((node) => node.data);
    expect(preOrderTraversal).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  it('should perform post-order traversal correctly', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    const postOrderTraversal = [...bst.postOrderTraverse()].map((node) => node.data);
    expect(postOrderTraversal).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });
});