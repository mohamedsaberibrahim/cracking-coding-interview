/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { Tree, TreeNode } from "./Tree";

describe('Tree test cases', () => {
  test('Calling search after multiple insertions should return the value', () => {
    // test code goes here
    const tree = new Tree('node0', 1);
    tree.insert('node0', 'node1', 2);
    tree.insert('node0', 'node2', 4);
    tree.insert('node0', 'node3', 5);
    tree.insert('node1', 'node4', 6);
    tree.insert('node1', 'node5', 7);
    tree.insert('node1', 'node6', 9);
    const treeNode = tree.search('node5');
    expect(treeNode.value).toBe(7);
  });

  test('Calling remove after multiple insertions should remove the target key', () => {
    const tree = new Tree('node0', 1);
    tree.insert('node0', 'node1', 2);
    tree.insert('node0', 'node2', 4);
    tree.insert('node0', 'node3', 5);
    tree.insert('node1', 'node4', 6);
    tree.insert('node1', 'node5', 7);
    tree.insert('node1', 'node6', 9);
    tree.remove('node5');
    const treeNode = tree.search('node5');
    expect(treeNode).toBe(undefined);
  });

  test('Calling pre-order traversal should return the root first', () => {
    const tree = new Tree('node0', 1);
    tree.insert('node0', 'node1', 2);
    tree.insert('node0', 'node2', 4);
    tree.insert('node0', 'node3', 5);
    tree.insert('node1', 'node4', 6);
    tree.insert('node1', 'node5', 7);
    tree.insert('node1', 'node6', 9);
    const preOrderTraversal: IterableIterator<TreeNode> = tree.preOrderTraverse();
    for (let node of preOrderTraversal) {
      expect(node.value).toBe(1);
      expect(node.key).toBe('node0');
      break;
    }
  });

  test('Calling post-order traversal should return the oldest child first', () => {
    const tree = new Tree('node0', 1);
    tree.insert('node0', 'node1', 2);
    tree.insert('node0', 'node2', 4);
    tree.insert('node0', 'node3', 5);
    tree.insert('node1', 'node4', 6);
    tree.insert('node1', 'node5', 7);
    tree.insert('node1', 'node6', 9);
    const postOrderTraversal: IterableIterator<TreeNode> = tree.postOrderTraverse();
    for (let node of postOrderTraversal) {
      expect(node.value).toBe(2);
      expect(node.key).toBe('node1');
      break;
    }
  });
});
